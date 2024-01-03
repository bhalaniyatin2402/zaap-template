import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

import Layout from "./components/Layout/Layout";
import HeroSection from "./components/heroSection/HeroSection";
import Info from "./components/info/Info";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      {/* <Info /> */}
    </Layout>
  );
}
