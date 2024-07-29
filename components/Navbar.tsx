import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex gap-5 items-center">
        <div className="text-xl lg:text-3xl font-bold">
          <Link href="/weather-app">edGain</Link>
        </div>
        <div className="hidden lg:flex  ml-10 gap-5">
          <NavLinks />
        </div>
      </div>
      <div className="flex items-center gap-2 lg:gap-4">
        <ModeToggle />
        <div className="lg:hidden">
          <MobileMenu />
        </div>
      </div>
    </div>
  );
}
