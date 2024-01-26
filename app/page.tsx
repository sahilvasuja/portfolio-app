import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Section } from "./Section/page";
import { Skill } from "./Skill/page";
import { Whattodo } from "./Whattodo/page";
import { Experience } from "./Experience/page";
import  Education  from "./Education/page";
export default function Home() {
  return (
    <>
   <Navbar />
   <Section />
   <Skill />
   {/* <Whattodo /> */}
   <Education />
   <Experience />
    </>
  );
}
