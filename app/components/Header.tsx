import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-200">
      <nav className="mx-auto max-w-5xl flex items-center justify-between p-6">
        <Link href="/" className="text-xl font-semibold">
          Cucciolino
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/menu" className="hover:underline">
            Menu
          </Link>
        </div>
      </nav>
    </header>
  );
}
