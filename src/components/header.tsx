import { Nav } from "./nav";

export function Header() {
  return (
    <header className="absolute top-0 left-0 w-full flex flex-col gap-3 items-center py-2">
      <a
        href="/"
        className="text-primary hover:text-primary/90 text-2xl font-semibold"
      >
        Dora Vlassi
      </a>
      <div className="flex items-center justify-center gap-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-10">
        <Nav />
      </div>
    </header>
  );
}
