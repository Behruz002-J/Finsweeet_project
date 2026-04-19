import turn from "../../assets/icons/icon.svg";
import meet from "../../assets/images/Header_Image.png";
import logoipsum1 from "../../assets/logos/logoispum.svg";
import logoipsum2 from "../../assets/logos/Logoipum2.svg";
import logoipsum3 from '../../assets/logos/logoispum.svg'
import logoipsum4 from '../../assets/logos/logoispum.svg'
import logoipsum5 from "../../assets/logos/Logoipsum5.svg";
import MainLogo from "../../assets/logos/Logo-special.svg";

export default function Header() {
  return (
    <header className="bg-[#232536] text-white">
      <div className="border-b border-[#FFFFFF0D]">
        <div className="max-w-[1200px] mx-auto px-4">
          
          {/* NAVBAR  bu yerdan boshladim*/}
          <nav className="flex justify-between items-center h-20">
            <img src={MainLogo} alt="logo" />

            <ul className="flex gap-8 items-center">
              <li className="border-t-2 border-[#FFA155] py-5">Home</li>
              <li className="opacity-60 hover:opacity-100">Service</li>
              <li className="opacity-60 hover:opacity-100">Company</li>
              <li className="opacity-60 hover:opacity-100">Career</li>
              <li className="opacity-60 hover:opacity-100">Blog</li>
            </ul>
          </nav>

          {/* HERO  I started in here */}
          <div className="flex items-center justify-between mt-16">
            <div className="max-w-xl">
              <h1 className="text-[56px] leading-[68px] font-semibold">
                Transform Your Idea Into Reality with Finsweet
              </h1>

              <p className="mt-6 leading-6">
                The entire Finsweet team knows what's good with Webflow and you can too.
              </p>

              <button className="mt-8 flex items-center gap-3 bg-[#444CFC] px-6 py-4">
                Request quote
                <img src={turn} className="w-5" alt="arrow" />
              </button>
            </div>

            <img src={meet} className="max-w-md" alt="meet" />
          </div>

          {/* LOGOS  company logos*/}
          <div className="mt-16 flex items-center justify-between gap-8">
            <div>
              <p className="text-sm opacity-70">Our Clients</p>
              <h5 className="font-bold">We've Worked with</h5>
            </div>

            <div className="flex  items-center">
              <img src={logoipsum1} alt="" />
              <img src={logoipsum2} alt="" />
              <img src={logoipsum3} alt="" />
              <img src={logoipsum4} alt="" />
              <img src={logoipsum5} alt="" />
            </div>
          </div>

        </div>
      </div>
    </header>

    
  );
}