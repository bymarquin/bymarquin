"""Render local SVG panels using public GitHub data. Requires Pillow.

Run python3 scripts/render_profile.py; --fixture-dir reads saved public inputs.
"""
import argparse
import io
import json
import os
import re
from collections import defaultdict
from datetime import date, datetime, timedelta, timezone
from html import escape
from html.parser import HTMLParser
from pathlib import Path
from urllib.request import Request, urlopen
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parents[1]
GREEN, WHITE, MUTED = '#39d353', '#e1e8e3', '#919b95'
PALETTE = ['#17221b', '#0e4429', '#006d32', '#26a641', GREEN]


def fetch(url):
    headers = {'User-Agent': 'macedoafk-profile'}
    if url.startswith('https://api.github.com/') and os.getenv('GITHUB_TOKEN'):
        headers['Authorization'] = 'Bearer ' + os.environ['GITHUB_TOKEN']
    with urlopen(Request(url, headers=headers), timeout=30) as response:
        return response.read()


class Calendar(HTMLParser):
    def __init__(self):
        super().__init__()
        self.cells, self.counts, self.tooltip = {}, {}, None

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'data-date' in a and 'data-level' in a:
            self.cells[a['id']] = {'date': a['data-date'], 'level': int(a['data-level'])}
        if tag == 'tool-tip':
            self.tooltip = a.get('for')

    def handle_data(self, value):
        if self.tooltip:
            match = re.search(r'(No|[\d,]+) contributions? on', value)
            if match:
                self.counts[self.tooltip] = 0 if match[1] == 'No' else int(match[1].replace(',', ''))

    def handle_endtag(self, tag):
        if tag == 'tool-tip':
            self.tooltip = None

    def days(self):
        if len(self.cells) < 350 or self.cells.keys() != self.counts.keys():
            raise ValueError('Incomplete calendar; existing SVGs preserved')
        today = datetime.now(timezone.utc).date()
        start = today - timedelta(days=364)
        return sorted([dict(v, count=self.counts[k]) for k, v in self.cells.items()
                       if start <= date.fromisoformat(v['date']) <= today], key=lambda d: d['date'])


def text(x, y, value, size=12, color=MUTED, extra=''):
    return f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" {extra}>{escape(str(value))}</text>'


def rect(x, y, w, h, fill, extra=''):
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}" {extra}/>'


def svg(height, title, parts):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="900" height="{height}" viewBox="0 0 900 {height}" role="img" aria-labelledby="title">'
            f'<title id="title">{escape(title)}</title><g font-family="DejaVu Sans Mono, Menlo, Consolas, monospace">'
            + rect(0, 0, 900, height, '#0d1110') + ''.join(parts) + '</g></svg>\n')


def calendar_svg(days, updated):
    total = sum(d['count'] for d in days)
    parts = [text(24, 30, 'macedoafk ~ $ ./contributions.sh', 13, WHITE),
             text(24, 56, f'{total:,} contribuições / últimos 12 meses'.replace(',', '.')),
             text(876, 30, updated, 10, MUTED, 'text-anchor="end"')]
    first = date.fromisoformat(days[0]['date'])
    first -= timedelta(days=(first.weekday() + 1) % 7)
    previous = None
    for d in days:
        dt = date.fromisoformat(d['date'])
        x, y = 42 + (dt - first).days // 7 * 15.6, 91 + (dt.weekday() + 1) % 7 * 13
        if dt.month != previous and dt.day <= 7:
            parts.append(text(x, 80, dt.strftime('%b'), 9))
            previous = dt.month
        parts.append(rect(x, y, 12, 10, PALETTE[d['level']], 'rx="1"'))
    for row, label in [(1, 'S'), (3, 'Q'), (5, 'S')]:
        parts.append(text(24, 99 + row * 13, label, 9))
    parts.append(text(24, 207, 'GitHub / atividade pública', 10))
    for i, color in enumerate(PALETTE):
        parts.append(rect(794 + i * 16, 198, 11, 9, color))
    return svg(224, 'Calendário de contribuições de Marcos Macedo', parts)


def portrait(avatar):
    source = ROOT / 'assets' / 'terminal' / 'portrait.json'
    if source.exists():
        rows = json.loads(source.read_text())['rows']
        return [text(89, 80 + row * 4.35, line, 4.8, '#b4bdb7',
                     'xml:space="preserve" textLength="246" lengthAdjust="spacingAndGlyphs"')
                for row, line in enumerate(rows)]
    image = Image.open(io.BytesIO(avatar)).convert('L')
    w, h = image.size
    image = image.crop((int(w*.34), int(h*.37), int(w*.67), int(h*.78)))
    image = ImageOps.invert(ImageOps.autocontrast(image)).resize((70, 39))
    chars = ' .,:;irsXA253hMHGS#9B&@'
    parts = []
    for row in range(39):
        line = ''.join(chars[int(image.getpixel((col, row)) / 256 * len(chars))]
                       if ((col-35)/32)**2 + ((row-19)/19)**2 < 1 else ' ' for col in range(70))
        parts.append(text(32, 79 + row * 7.4, line, 7.5, '#b4bdb7', 'xml:space="preserve" textLength="352" lengthAdjust="spacingAndGlyphs"'))
    return parts


def profile_svg(profile, repos, days, avatar):
    total = sum(d['count'] for d in days)
    active = sum(d['count'] > 0 for d in days)
    parts = [text(24, 30, 'macedoafk ~ $ ./whoami', 13, WHITE),
             rect(24, 47, 376, 337, '#101613', 'stroke="#26332a"'),
             text(36, 65, '01 / MARCOS MACEDO', 10)] + portrait(avatar)
    parts += [text(36, 373, 'Araripe, CE / Dev Full Stack', 11, WHITE), text(426, 66, '02 / GITHUB — DADOS PÚBLICOS', 11)]
    metrics = [(len(repos), 'repositórios'), (profile['followers'], 'seguidores'),
               (total, 'contribuições / 12m'), (active, 'dias ativos / 12m'),
               (sum(r['stargazers_count'] for r in repos if not r['fork']), 'estrelas / autorais'),
               (len({r['language'] for r in repos if r['language'] and not r['fork']}), 'linguagens / autorais')]
    for i, (value, label) in enumerate(metrics):
        x, y = 426 + i % 2 * 232, 105 + i // 2 * 66
        parts += [text(x, y, f'{value:,}'.replace(',', '.'), 27, GREEN if i == 0 else WHITE), text(x, y + 19, label, 10)]
    parts.append(text(426, 289, '03 / CONTRIBUIÇÕES POR MÊS', 10))
    monthly = defaultdict(int)
    for d in days:
        monthly[d['date'][:7]] += d['count']
    months = sorted(monthly)[-12:]
    maximum = max(1, max(monthly[month] for month in months))
    for i, month in enumerate(months):
        x, height = 428 + i * 36, monthly[month] / maximum * 61
        if height:
            parts.append(rect(x, 367 - height, 23, height, GREEN))
        parts += [text(x + 11, 382, month[5:], 9, MUTED, 'text-anchor="middle"'),
                  text(x + 11, 360 - height, monthly[month], 8, MUTED, 'text-anchor="middle"')]
    parts += [rect(24, 408, 852, 1, '#26332a'), text(24, 439, '$ stack', 12, GREEN),
              text(115, 439, 'Node.js / Vue / TypeScript', 12, WHITE), text(24, 465, 'SaaS · APIs · automações', 11),
              text(876, 465, '@macedoafk', 11, WHITE, 'text-anchor="end"')]
    return svg(488, 'Marcos Macedo em ASCII e estatísticas públicas do GitHub', parts)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--fixture-dir', type=Path)
    args = parser.parse_args()
    if args.fixture_dir:
        folder = args.fixture_dir
        profile = json.loads((folder / 'macedo-profile.json').read_text())
        repos = json.loads((folder / 'macedo-repos.json').read_text())
        calendar = (folder / 'macedo-contributions.html').read_text()
        avatar = b'' if (ROOT / 'assets/terminal/portrait.json').exists() else (folder / 'macedo-avatar.png').read_bytes()
    else:
        profile = json.loads(fetch('https://api.github.com/users/macedoafk'))
        repos, page = [], 1
        while True:
            batch = json.loads(fetch(f'https://api.github.com/users/macedoafk/repos?per_page=100&page={page}'))
            repos.extend(batch)
            if len(batch) < 100:
                break
            page += 1
        calendar = fetch('https://github.com/users/macedoafk/contributions').decode()
        avatar = b'' if (ROOT / 'assets/terminal/portrait.json').exists() else fetch(profile['avatar_url'] + '&s=400')
    parsed = Calendar()
    parsed.feed(calendar)
    days = parsed.days()
    updated = datetime.now(timezone.utc).strftime('%d/%m/%Y UTC')
    panels = {'contributions.svg': calendar_svg(days, updated), 'profile.svg': profile_svg(profile, repos, days, avatar)}
    target = ROOT / 'assets' / 'terminal'
    target.mkdir(parents=True, exist_ok=True)
    for name, contents in panels.items():
        (target / name).write_text(contents)
    print(f'Generated {len(panels)} panels; {len(days)} days; {sum(d["count"] for d in days)} contributions')


if __name__ == '__main__':
    main()
