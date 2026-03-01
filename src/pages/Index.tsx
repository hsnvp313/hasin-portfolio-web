import Layout from "@/components/Layout";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import TechFoundations from "@/sections/TechFoundations";
import SelectedWork from "@/sections/SelectedWork";
import Experience from "@/sections/Experience";
import Certifications from "@/sections/Certifications";
import Leadership from "@/sections/Leadership";
import Contact from "@/sections/Contact";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <TechFoundations />
      <SelectedWork />
      <Experience />
      <Certifications/>
      <Leadership />
      <Contact />
    </Layout>
  );
};

export default Index;
