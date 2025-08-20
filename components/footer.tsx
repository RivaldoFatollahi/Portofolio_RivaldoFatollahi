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
        <li><link href="/" className="hover:text-[#38A2C9] transition">Home</link></li>
        <li><link href="/about" className="hover:text-[#38A2C9] transition">About</link></li>
        <li><link href="/projects" className="hover:text-[#38A2C9] transition">Projects</link></li>
      </ul>
    </div>

    {/* Socials */}
    <div>
      <h3 className="text-white font-semibold mb-4">Socials</h3>
      <ul className="space-y-2">
        <li><link href="https://github.com/" className="hover:text-[#38A2C9] transition">GitHub</link></li>
        <li><link href="https://linkedin.com/" className="hover:text-[#38A2C9] transition">LinkedIn</link></li>
        <li><link href="mailto:rivaldofatollahi234@gmail.com" className="hover:text-[#38A2C9] transition">Email</link></li>
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
