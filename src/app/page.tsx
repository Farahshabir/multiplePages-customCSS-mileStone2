import Image from "next/image";
import Header from "@/app/components/header"
import SectionOne from "@/app/components/sectionOne"
import SectionTwo from "@/app/components/sectionTwo";
import SectionThree from "@/app/components/sectionThree";
import SectionFour from "@/app/components/sectionFour";
import SectionFive from "@/app/components/sectionFive";

export default function Home() {
  return (
    <div>
      <Header />
      <SectionOne/>
      <SectionTwo />
      <SectionThree />
      <SectionFour/>
      <SectionFive />
    </div>
  );
}
