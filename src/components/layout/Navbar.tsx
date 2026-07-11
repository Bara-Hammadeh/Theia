"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { mainNav } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          "transition-all duration-500",
          scrolled
            ? "border-b border-white/[0.06] bg-bg/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <nav className="container flex h-16 items-center justify-between md:h-[4.5rem]">
          <Link href="/" aria-label={`Theia — home`} className="shrink-0">
            <Logo />
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {mainNav.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm transition-colors",
                    active
                      ? "text-ink"
                      : "text-muted hover:text-ink"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Button href="/contact" variant="secondary" size="sm">
              Contact
            </Button>
            <Button href="/partnerships" size="sm" withArrow>
              Partner with us
            </Button>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-ink md:hidden"
          >
            <div className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 bg-current transition-all duration-300",
                  open ? "top-1.5 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-5 bg-current transition-all duration-300",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-0.5 w-5 bg-current transition-all duration-300",
                  open ? "top-1.5 -rotate-45" : "top-3"
                )}
              />
            </div>
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="md:hidden"
          >
            <div className="container border-b border-white/[0.06] bg-bg/95 pb-6 pt-2 backdrop-blur-xl">
              <div className="flex flex-col">
                {mainNav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="border-b border-white/[0.05] py-3.5 text-lg text-ink"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-3">
                <Button href="/partnerships" withArrow className="w-full">
                  Partner with us
                </Button>
                <Button href="/contact" variant="secondary" className="w-full">
                  Contact
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
