import logo from "../../assets/logos/Logo-special.svg";
import turn from "../../assets/icons/icon.svg";
import meet from "../../assets/images/Header_Image.png"
import logoipsum1 from '../../assets/logos/logoispum.svg'
import logoipsum2 from "../../assets/logos/Logoipum2.svg"
// import logoipsum3 from '../../assets/logos/logoispum.svg'
// import logoipsum4 from '../../assets/logos/logoispum.svg'
import logoipsum5 from '../../assets/logos/Logoipsum5.svg'


export default function Header() {
  return (
    <div className="w-[1600px] bg-[#232536] h-250 pt-0 px-40 mx-auto">
        
    <div className=" w-[1600px] h-[80px] flex mx-auto">
      <nav className="flex justify-between items-center w-full px-10 ">
        
        <div className="flex items-center  gap-[460px] ">
          <img src={logo} alt="logo" />

          <ul className="flex gap-6 items-center text-white">
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Company</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>

            <li>
              <a className="flex items-center gap-2 text-[#FFD3AF]" href="#">
                Clone project <img src={turn} alt="" />
              </a>
            </li>
          </ul>
        </div>

      </nav>
    </div>
    <div className="flex flex-row ">
  <div className="mt-[200px] w-[624px] h-[420px]">
    <h1 className="font-semibold text-[56px] leading-[68px] tracking-[0px] text-[#f1f1f1]">Transform Your Idea Into Reality with Finsweet</h1>
    <p className="text-[16px] font-normal text-[#f1f1f1] line-[24px] mt-[24px]">The entire Finsweet team knows what's good with Webflow and <br /> you can too with 1 week and a good attitude.</p>
   <button className="w-[219px] h-[64px] flex items-center justify-center bg-[#444CFC] text-[#f1f1f1] mt-[32px] text-[16px] gap-3">
  Request quote
  <img className="w-[20px]" src={turn} alt="" />
</button>
  </div>
  <div className="mt-[96px]">
    <img className=" " src={meet} alt="meet" />
  </div>
    </div>
    <div className="logos">
         <div className="client">
                <p className='text-[#f1f1f1]'>Our Clients</p>
                <h5>We've Worked with</h5>
                </div>
                <div className="">
               <img src={logoipsum1} alt="logoipsum1" />
               <img src={logoipsum2} alt="logoipsum2" />
               <img className="text-amber-400" src={logoipsum5} alt="logoipsum5" /> 
                </div>
    </div>
    </div>
  );
}