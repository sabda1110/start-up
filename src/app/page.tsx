import Navbar from '@/components/Home/Navbar/Navbar';
import Hero from '@/components/Home/Hero/Hero';
import Main from '@/components/Home/Main/Main';
import Contact from '@/components/Home/Contact/Contact';
import Style from './home.module.css';
export default function Home() {
  return (
    <div className={`${Style.scroll} w-screen  relative box-border`}>
      <Navbar />
      <Hero />
      <Main />
      <Contact />
    </div>
  );
}
