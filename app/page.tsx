import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function Home() {
  return (
     <main className="flex flex-col items-center justify-center text-white py-20">
      {/* Intro Section */}
      <div className="max-w-3xl text-center space-y-6">
        <div>
          <h2 className="text-white mb-2 text-xl">Hi, my name is</h2>
          <h1 className="text-6xl font-bold bg-gradient-to-r from-[#38A2C9] to-[#78C6E2] bg-clip-text text-transparent">
            Rivaldo Fatollahi
          </h1>
          <h2 className="text-4xl font-bold text-gray-300 mt-2">
            I build digital solutions.
          </h2>
        </div>

        {/* Deskripsi */}
        <p className="text-gray-400 leading-relaxed text-center">
          I am a passionate developer with strong interest in Backend
          Development, and experience in UI/UX Design, Android Development, and
          3D Visualization. I enjoy solving problems, learning new technologies, and creating user-centered solutions.
        </p>

        {/* Tombol CV */}
        <link
          href="/about"
          className="inline-block mt-4 px-6 py-3 border-2 border-[#38A2C9] rounded-lg 
          text-[#38A2C9] hover:bg-[#38A2C9]/50 hover:text-white transition"
        >
          View my CV
        </link>
      </div>

      <section className="text-center py-20 px-20 mt-40 bg-gradient-to-r from-[#0F1A20] to-[#1A2C38] rounded-2xl shadow-lg shadow-md hover:shadow-[#38A2C9]/40 hover:-translate-y-1 transition duration-300">
  <h2 className="text-3xl font-bold text-white mb-4">
     Curious to see more of my work?
  </h2>
  <p className="text-lg text-gray-400 mb-8">
    Let’s build something great together.
  </p>
  
  <div className="w-24 h-1 bg-gradient-to-r from-[#38A2C9] to-[#78C6E2] mx-auto mb-8 "></div>

  <link
    href="/about"
    className="inline-block px-6 py-3 border-2 border-[#38A2C9] rounded-lg 
    text-[#38A2C9] hover:bg-[#38A2C9]/80 hover:text-white 
    shadow-md hover:shadow-[#38A2C9]/50 transition"
  >
    Learn More About Me
  </link>
</section>

    </main>


  );
}
