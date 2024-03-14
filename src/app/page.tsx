import Navbar from '@/components/Home/Navbar/Navbar';
import Hero from '@/components/Home/Hero/Hero';
import Main from '@/components/Home/Main/Main';

export default function Home() {
  return (
    <div className=" w-screen  relative">
      <Navbar />
      <Hero />
      <Main />
    </div>
  );
}
