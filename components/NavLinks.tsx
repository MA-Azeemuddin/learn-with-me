import Link from "next/link";

export function NavLinks() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-8">
      <Link href="/">Home</Link>
      <Link href="/weather-app">Weather</Link>
      <Link href="/products">Products</Link>
    </div>
  );
}
