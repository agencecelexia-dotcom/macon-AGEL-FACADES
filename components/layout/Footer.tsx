import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { company } from "@/lib/data/company";

export function Footer() {
  return (
    <footer className="relative overflow-hidden">
      <div className="h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="bg-primary-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Main row */}
          <div className="flex flex-col md:flex-row justify-between gap-8 mb-8">
            {/* Brand */}
            <div className="max-w-xs">
              <h3 className="font-heading text-lg font-extrabold mb-2">{company.name}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{company.slogan}</p>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-3">
              <a href={`tel:${company.phoneRaw}`} className="flex items-center gap-2 text-neutral-400 text-sm hover:text-accent transition-colors">
                <Phone size={14} /> {company.phone}
              </a>
              <a href={`mailto:${company.email}`} className="flex items-center gap-2 text-neutral-400 text-sm hover:text-accent transition-colors">
                <Mail size={14} /> {company.email}
              </a>
              <span className="flex items-center gap-2 text-neutral-400 text-sm">
                <MapPin size={14} /> {company.address.postalCode} {company.address.city}
              </span>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-neutral-500 text-xs">
              &copy; {new Date().getFullYear()} {company.name}. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link href="/mentions-legales" className="text-neutral-500 text-xs hover:text-neutral-300 transition-colors">
                Mentions légales
              </Link>
              <a href="/admin/login" className="text-neutral-500 text-xs hover:text-neutral-300 transition-colors">
                Admin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
