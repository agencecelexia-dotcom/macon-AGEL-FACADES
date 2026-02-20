import Link from "next/link";
import { company } from "@/lib/data/company";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-neutral-500 text-xs">
            &copy; {new Date().getFullYear()} {company.name}. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <Link
              href="/mentions-legales"
              className="text-neutral-500 text-xs hover:text-neutral-300 transition-colors duration-300"
            >
              Mentions légales
            </Link>
            <a
              href="/admin/login"
              className="text-neutral-500 text-xs hover:text-neutral-300 transition-colors duration-300"
            >
              Admin
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
