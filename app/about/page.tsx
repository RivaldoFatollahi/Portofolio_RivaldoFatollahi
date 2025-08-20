import Link from "next/link";

export default function About() {
  return (
     <main className="min-h-screen bg-[#0F1A20] text-white px-6 py-16">
      {/* Section Title */}
      <div className="flex items-center gap-4 mb-10">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-[#38A2C9] to-[#6366f1] bg-clip-text text-transparent ml-20">
          About Me
        </h1>
        <div className="h-[1px] w-40 bg-slate-700"></div>
      </div>

         <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
        {/* Text */}
        <div className="space-y-4">
          <p className="text-slate-300 text-justify">
            Hello my name is <span className="text-[#38A2C9] font-semibold">
              Rivaldo Fatollahi
            </span>, I am a passionate developer with strong interest in{" "}
            <span className="text-[#78C6E2] font-semibold">
              Backend Development
            </span>, and experience in{" "}
            <span className="text-slate-100">
              UI/UX Design, Android Development, and 3D Visualization.
            </span>{" "}
            I enjoy solving problems, learning new technologies, and creating
            user-centered solutions.
          </p>
          <p className="text-slate-400 text-justify">
            With a versatile background, I am eager to expand my knowledge in
            backend development and contribute to building impactful digital
            products. I am also comfortable working both independently and as
            part of a team to achieve project goals.
          </p>

          <h2 className="text-2xl font-bold text-slate-100 mb-4">Education</h2>
          <p className="text-slate-300">
          <span className="font-semibold">SMKN 1 Depok</span> (2023 – Present) <br />
          Majoring in Software and Game Development (PPLG)
        </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/image/foto-profile.jpeg"
            alt="Profile Picture"
            className="rounded-lg shadow-lg w-84 h-92 object-cover grayscale hover:grayscale-0 transition ml-15"
          />
        </div>
      </div>

      <div className="mt-40 ml-20">
        <h2 className="text-2xl font-bold text-slate-100 mb-6">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          {["Next.js", "HTML", "CSS", "PHP", "Android", "MYSQL", "LARAVEL", "Unity", "JavaScript"].map((tech, i) => (
            <li
              key={i}
              className="px-5 py-2 rounded-lg border border-slate-700 hover:border-[#38A2C9] text-slate-300 hover:text-[#38A2C9] transition"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
