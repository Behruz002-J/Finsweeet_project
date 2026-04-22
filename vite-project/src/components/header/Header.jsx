import Logo from "/src/assets/logos/Logo-special.svg";
import Turn from "/src/assets/icons/Icon.svg"
import Basic from "/src/assets/images/Header_Image.png"
import Loggo1 from "/src/assets/logos/logoispum.svg"
import Loggo2 from "/src/assets/logos/Logoipum2.svg"
import Loggo3 from "/src/assets/logos/Logoipsum3.svg"
import Loggo4 from "/src/assets/logos/Logoipsum4.svg"
import Loggo5 from "/src/assets/logos/Logoipsum5.svg"

export default function Header() {
  return (
    <header className="bg-[#232536] text-white">
      <div className="border-b border-[#FFFFFF0D]">
        <div className="max-w-[1200px] mx-auto px-4">
          {/* NAVBAR  bu yerdan boshladim*/}
          <nav className="flex justify-between items-center h-20">
            <img src={Logo} alt="logo" />
            <div className="flex items-center gap-8 ">
              <ul className="flex flex-row items-center gap-8 ">
                <li className="border-t-2  hover:text-orange-300 border-[#FFA155] py-5 cursor-pointer">
                  Home
                </li>
                <li className="opacity-60  hover:text-orange-300 opacity-100  cursor-pointer">
                  Service
                </li>
                <li className="opacity-60  hover:text-orange-300 opacity-100 cursor-pointer">
                  Company
                </li>
                <li className="opacity-60  hover:text-orange-300 opacity-100 cursor-pointer">
                  Career
                </li>
                <li className="opacity-60  hover:text-orange-300 opacity-100 cursor-pointer">
                  Blog
                </li>
                <li className="opacity-60  hover:text-orange-300 opacity-100 cursor-pointer">
                  contact us
                </li>
              </ul>
              <a href="" className="flex flex-row gap-2  hover:text-orange-300">
                Clone peoject
                <img src = {Turn} alt="" />
              </a>
            </div>
          </nav>

          {/* HERO  I started in here */}
          <div className="flex items-center justify-between mt-16">
            <div className="max-w-xl">
              <h1 className="text-[56px] leading-[68px] font-semibold">
                Transform Your Idea Into Reality with Finsweet
              </h1>

              <p className="mt-6 leading-6">
                The entire Finsweet team knows what's good with Webflow and you
                can too.
              </p>

              <button className="mt-8 flex items-center gap-3 rounded-xl  rem bg-[#444CFC] px-6 py-4  hover:bg-green-600">
                Request quote
                <img src = {Turn} className="w-5" alt="arrow" />
              </button>
            </div>

            <img src={Basic} className="max-w-md" alt="meet" />
          </div>

          {/* LOGOS  company logos*/}
          <div className="mt-16 flex items-center justify-between gap-8">
            <div>
              <p className="text-sm opacity-70">Our Clients</p>
              <h5 className="font-bold">We've Worked with</h5>
            </div>

            <div className="flex  items-center">
              <img src={Loggo1} alt="" />
              <img src={Loggo2} alt="" />
              <img src={Loggo3} alt="" />
              <img src={Loggo4} alt="" />
              <img src={Loggo5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
