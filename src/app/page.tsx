import Navbar from "@/Components/Navbar/Navbar";
import SectionOne from "@/Components/SectionOne/SectionOne";
import SectionTwo from "@/Components/SectionTwo/SectionTwo";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-center">
      <Navbar />
      <div className="h-auto md:h-auto text-white m-5 md:m-auto">
        <SectionOne />
        <SectionTwo />
      </div>
    </main>
  );
}
