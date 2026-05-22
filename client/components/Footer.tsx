export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-8">
      <div className="mx-auto w-full max-w-6xl px-4 text-xs text-zinc-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Marcos Macedo. Sistemas, SaaS e Automações.
      </div>
    </footer>
  );
}
