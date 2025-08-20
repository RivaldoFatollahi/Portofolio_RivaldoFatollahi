export default function Footer() {
  return (
     <footer className="bg-[#0F1A20] text-gray-400 px-6 py-12">
  <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-3">
    {/* Logo & Deskripsi */}
    <div>
      <div className="flex items-center gap-2">
        <img src="/image/logo.png" width={30} alt="Logo" />
        <h2 className="text-2xl font-bold text-white">Rivaldo Fatollahi</h2>
      </div>
      <p className="mt-4 text-sm leading-relaxed">
        Passionate in UI/UX, Web, and App Development.  
        Let’s build something great together.
      </p>
    </div>

    {/* Menu */}
    <div>
      <h3 className="text-white font-semibold mb-4">Menu</h3>
      <ul className="space-y-2">
        <li><a href="/" className="hover:text-[#38A2C9] transition">Home</a></li>
        <li><a href="/about" className="hover:text-[#38A2C9] transition">About</a></li>
        <li><a href="/projects" className="hover:text-[#38A2C9] transition">Projects</a></li>
      </ul>
    </div>

    {/* Socials */}
    <div>
      <h3 className="text-white font-semibold mb-4">Socials</h3>
      <ul className="space-y-2">
        <li><a href="https://github.com/" target="_blank" className="hover:text-[#38A2C9] transition">GitHub</a></li>
        <li><a href="https://linkedin.com/" target="_blank" className="hover:text-[#38A2C9] transition">LinkedIn</a></li>
        <li><a href="mailto:your@email.com" className="hover:text-[#38A2C9] transition">Email</a></li>
      </ul>
    </div>
  </div>

  {/* Copyright */}
  <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} Rivaldo Fatollahi. All rights reserved.
  </div>
</footer>
  );
}
