import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Sections from "../components/Sections";
import AIBar from "../components/AIBar";
import { Divider } from "../styles/Home.styles";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <Sections />
        <AIBar />
      </main>
      <Footer />
    </>
  );
}
