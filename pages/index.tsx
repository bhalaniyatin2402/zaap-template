import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import HeroSection from "./components/heroSection/HeroSection";
import Info from "./components/Info";
import Analysis from "./components/Analysis";
import Modules from "./components/Modules";
import Report from "./components/Report";
import Support from "./components/Support";
import Work from "./components/Work";
import Experts from "./components/Experts";
import Options from "./components/Options";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Info />
      <Analysis />
      <Modules />
      <Report />
      <Support />
      <Work />
      <Experts />
      <Options />
    </div>
  );
}
