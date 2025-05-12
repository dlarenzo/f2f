import Image from "next/image";
import Hero from "./components/Hero";
import Goals from "./components/Goals";
import Support from "./components/Support";
import About from "./components/About";
import Solutions from "./components/Solutions";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="mx-auto ">
      <Hero heading="Coaching You To " heading2="Financial Success" />
      <Goals
        heading="What Are Your Retirement Goals?"
        title1="Retirement"
        title1a="Income"
        title2="Travel"
        title3="Car"
        title4=" Boat / "
        title4a=" RV"
        title5="Start A"
        title5a="Business"
        title6="Healthcare"
        title7="New Home"
        title8="College"
        title9=" Wedding"
        title10="Home"
        title10a="Improvement"
        title11="Leave"
        title11a="Bequest"
      />
      <Solutions heading="Investment Solutions" />
      <Support button="Learn More" />
      <About heading="About Us" />
      <Contact />
      <Footer />
    </div>
  );
}
