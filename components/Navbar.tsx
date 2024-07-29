import { Button } from "@/components/ui/button";
import Link from "next/link";
import { LogIn } from "lucide-react";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex gap-5 items-center">
        <div className="text-3xl font-bold">
          <Link href="/weather-app">edGain</Link>
        </div>
        <div className="flex  ml-10 gap-5">
          <Link href="/">Home</Link>
          <Link href="/weather-app">Weather</Link>
          <Link href="/products">Products</Link>
        </div>
      </div>
      <div className="flex gap-8">
        <ModeToggle />
      </div>
    </div>
  );
}
