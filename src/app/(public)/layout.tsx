import { Metadata } from "next";
import PublicNavbar from "@/components/public/Navbar";
import PublicFooter from "@/components/public/Footer";

export const metadata: Metadata = {
  title: "Harmony Unique School",
  description: "Providing quality education in Ewu-Urhobo, Delta State Nigeria",
};

export default function PublicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavbar />
      <main className="flex-grow">{children}</main>
      <PublicFooter />
    </div>
  );
}