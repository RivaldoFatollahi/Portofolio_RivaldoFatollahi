"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
  ];

  return (
    <nav className="bg-[#0F1A20] w-full top-0 z-50">
      <div className="flex items-center justify-between py-4 px-6">
        <div>
          <Link href="/">
            <img src="/image/logo.png" alt="" width={40} />
          </Link>
        </div>
        <div className="flex gap-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors duration-300 ${
                // Mengubah warna teks menjadi gelap agar terlihat di background putih
                pathname === item.href
                  ? "text-[#38A2C9] "
                  : "text-white-500 hover:text-[#38A2C9]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}