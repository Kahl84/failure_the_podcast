"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Menu, X, Heart } from "lucide-react";
import { Logo } from "@/components/logo";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <Logo className="text-2xl" />
          </Link>
        </div>

        <nav
          className={`${
            isMenuOpen
              ? "absolute left-0 top-16 w-full border-b bg-background p-4 md:static md:border-0 md:p-0"
              : "hidden md:flex"
          } md:items-center md:gap-6`}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-center">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link
              href="/episodes"
              className="text-sm font-medium hover:text-primary"
            >
              Episodes
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium hover:text-primary"
            >
              Contact
            </Link>
          </div>
        </nav>

        <div className="flex items-center gap-4">
          {/* Removed search bar and heart icon */}
        </div>
      </div>
    </header>
  );
}
