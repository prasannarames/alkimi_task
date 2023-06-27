import About from "@/Components/About/About";
import Footer from "@/Components/Footer/Footer";
import Navbar from "@/Components/Navbar/Navbar";
import SectionOne from "@/Components/SectionOne/SectionOne";
import SectionThree from "@/Components/SectionThree/SectionThree";
import SectionTwo from "@/Components/SectionTwo/SectionTwo";
import SlideAnimation from "@/Components/SlideAnimation/SlideAnimation";

export default function Home() {
  return (
    <main className="w-full flex flex-col ">
      <Navbar />
      <div className="h-auto md:h-auto text-white m-5 md:m-auto">
        <SectionOne />
        <SectionTwo />
      </div>
      <About />
      <SlideAnimation />
      <SectionThree />
      <Footer />
    </main>
  );
}
