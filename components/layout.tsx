import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rivaldo Fatollahi | Portfolio",
  description: "UI/UX, Web Dev, 3D, Android Dev, PHP",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
