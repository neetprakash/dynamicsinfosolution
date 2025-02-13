import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Faq } from "./components/Faq/Faq";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Services } from "./components/Services/Services";
import { Testimony } from "./components/Testimony/Testimony";
import { Footer } from "./components/Footer/Footer";
import { Industries } from "./components/Industries/Industries";
import TechnologiesSection from "./components/Technologies/Technologies";
 

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <Services/>
      <About />
      {/* <Projects /> */}
      <Industries/>
      <TechnologiesSection/>
      <Testimony />
      <Contact />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
