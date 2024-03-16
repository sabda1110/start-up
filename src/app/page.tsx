import Navbar from '@/components/Home/Navbar/Navbar';
import Hero from '@/components/Home/Hero/Hero';
import Main from '@/components/Home/Main/Main';
import Contact from '@/components/Home/Contact/Contact';
import Style from './home.module.css';
import Customer from '@/components/Home/Customer/Customer';
import Footer from '@/components/Home/Footer/Footer';
export default function Home() {
  return (
    <div className={`${Style.scroll} w-screen  relative box-border`}>
      <Navbar />
      <Hero />
      <Main />
      <Contact />
      <Customer />
      <Footer />
    </div>
  );
}
