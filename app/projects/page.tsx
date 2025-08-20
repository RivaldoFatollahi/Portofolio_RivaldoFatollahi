import Image from "next/image";
import Link from "next/link";


export default function Projects() {
    const projects = [
    {
      title: "Task Manager App",
      desc: "A web-based task manager built with PHP, JS, and MySQL to improve productivity.",
      img: "/image/task-manager.png"
    },
    {
      title: "City Information Website",
      desc: "Informational website about Depok built with modern UI/UX design principles.",
      img: "/image/depok-info.png" 
    },
    {
      title: "Android Auth App",
      desc: "Login & Register Android app using Firebase for authentication.",
      img: "/image/Masjid-kita.png"
    }
  ];

  return (
    <main className="min-h-screen bg-[#0F1A20] text-white px-6 py-20 items-center">
      {/* Judul Section */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#38A2C9] to-[#6366f1] bg-clip-text text-transparent">
          My Projects
        </h1>
        <p className="text-gray-400 mt-3">
          A collection of my recent works showcasing web, mobile, and design projects.
        </p>
      </div>

      {/* Card List */}
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-[#1A2C38] p-6 rounded-2xl shadow-md hover:shadow-[#38A2C9]/40 hover:-translate-y-3 transition duration-300"
          >
            {/* Foto */}
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
              <img src={project.img}
                alt={project.title}
                className="object-cover" />
            </div>

            {/* Text */}
            <h2 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h2>
            <p className="text-gray-400 leading-relaxed">{project.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-12">
        <Link
          href="/about"
          className="inline-block px-6 py-3 border-2 border-[#38A2C9] rounded-lg 
          text-[#38A2C9] hover:bg-[#38A2C9]/80 hover:text-white 
          shadow-md hover:shadow-[#38A2C9]/50 transition text-center"
        >
          See More
        </Link>
      </div>
    </main>
  );
}
