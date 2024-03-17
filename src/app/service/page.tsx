import Navbar from '@/components/Home/Navbar/Navbar';
import Style from '../home.module.css';
import Footer from '@/components/Home/Footer/Footer';
export default function Home() {
  return (
    <div className={`${Style.scroll} w-screen  relative box-border`}>
      <Navbar />
      <h1>Halaman Service</h1>
      <Footer />
    </div>
  );
}
