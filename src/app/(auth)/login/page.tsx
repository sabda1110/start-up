'use client';
import Image from 'next/image';
import { MdOutlineMail, MdKey } from 'react-icons/md';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

const loginPage = ({ searchParams }) => {
  const callbackUrl = searchParams.callbackUrl || '/';
  const router = useRouter();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <div className="w-screen h-screen flex items-center justify-center relative">
      <section className=" w-[350px] h-[95%] lg:w-[589px] lg:h-[680px] bg-[#f5f5f5] flex flex-col items-center  rounded-lg overflow-hidden border  border-[#d5d5d5]">
        <div
          className="image__login relative w-[200px] h-[150px] cursor-pointer "
          onClick={() => router.push('/')}
        >
          <Image
            src={'/Images/logo.png'}
            alt="Logo"
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>

        <h2 className=" w-[100%] px-4 text-[2rem] font-medium">Welcome to</h2>
        <h3 className=" w-[100%] px-4 text-[1.5rem] font-black text-[#6258dc]">TumuTuku</h3>
        <div
          className=" w-[300px] lg:w-[487px] h-[48px] flex gap-3 items-center justify-center bg-white shadow-md rounded-md mt-5 cursor-pointer "
          onClick={() => signIn('google', { callbackUrl, redirect: false })}
        >
          <Image src={'/Images/google.png'} alt="Icon Google" width={22} height={22} />
          <p>Login with Google</p>
        </div>
        <div className=" w-[300px] lg:w-[487px] h-[48px] flex gap-3 items-center justify-center bg-white shadow-md rounded-md mt-5">
          <Image src={'/Images/facebook.png'} alt="Icon Google" width={12} height={12} />
          <p>Login with Facebook</p>
        </div>

        <div className="flex w-[487px] mt-6 items-center ">
          <div className="w-[200px] h-[5px] bg-[#BFBFBF] border"></div>
          <p className="w-[87px] text-center text-[16px]">OR</p>
          <div className="w-[200px] h-[5px] bg-[#BFBFBF] border"></div>
        </div>

        {/* Input Form */}

        <form className=" w-[300px] lg:w-[487px] mt-4">
          <div
            className="input__form w-full flex items-center gap-5 h-[48px] bg-white rounded-md shadow-sm cursor-pointer"
            onClick={() => emailRef.current.focus()}
          >
            <MdOutlineMail className="text-[#000] text-[30px] ml-3" />
            <div className="flex flex-col w-full">
              <h4 className="text-[12px]">Email</h4>
              <input
                type="text"
                className=" outline-none border-none text-black"
                ref={emailRef}
                placeholder="example@whatsab.com"
              />
            </div>
          </div>
          <div
            className="input__form mt-3 w-full flex items-center gap-5 h-[48px] bg-white rounded-md shadow-sm"
            onClick={() => passwordRef.current.focus()}
          >
            <MdKey className="text-[#000] text-[30px] ml-3" />
            <div className="flex flex-col w-full">
              <h4 className="text-[12px]">Password</h4>
              <input
                type="text"
                className=" outline-none border-none text-black"
                placeholder="********"
                ref={passwordRef}
              />
            </div>
          </div>

          <button className=" w-[300px] lg:w-[487px] mt-8 h-[48px] rounded-md bg-[#6258dc]  text-white font-bold text-[0.9rem]">
            Login
          </button>
          <p className=" text-center mt-5 text-[0.8rem]">
            Don’t have an account? <span className="text-[#6258dc] font-semibold">Register</span>
          </p>
        </form>
      </section>
      <section className="w-[285px] h-[435px] hidden lg:block   absolute -z-10   left-[16.5rem] top-2  -rotate-10 ">
        <Image
          src={'/Images/iconLogin.png'}
          alt="Icon Login"
          width={285}
          height={435}
          style={{ objectFit: 'cover' }}
        />
      </section>
    </div>
  );
};

export default loginPage;
