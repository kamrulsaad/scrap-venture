import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="bg-background text-foreground shadow-md">
      <div className="flex justify-between items-center py-5 px-[20px] md:px-[5%] lg:px-[10%] max-w-screen-2xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-primary flex items-center gap-2"
        >
          <Image
            src="/logo.png"
            alt="ScrapVendor Logo"
            width={150}
            height={40}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 text-lg font-semibold">
          <li>
            <Link
              href="/"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#howitworks"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              How It Works
            </Link>
          </li>
          <li>
            <Link
              href="#whyus"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Why Us?
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <SheetTitle>
                <button aria-label="Toggle Menu">
                  <Menu className="h-7 w-7" />
                </button>
              </SheetTitle>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="bg-muted text-foreground w-64"
            >
              <nav className="mt-8 space-y-6 text-lg font-semibold">
                <Link
                  href="/"
                  className="block hover:text-primary transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  href="#howitworks"
                  className="block hover:text-primary transition-colors duration-200"
                >
                  How it Works
                </Link>
                <Link
                  href="#whyus"
                  className="block hover:text-primary transition-colors duration-200"
                >
                  Why Us?
                </Link>
                <Link
                  href="/contact"
                  className="block hover:text-primary transition-colors duration-200"
                >
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
