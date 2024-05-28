import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Layout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center gap-20 w-full text-[#543310] bg-[#F8F4E1] min-h-screen">
      <Navbar />
      {children}
      <Footer/>
    </section>
  );
}