import Turn from "/src/assets/icons/Icon.svg";
import call from "/src/assets/icons/operator.svg"
import settin from "/src/assets/icons/settings.svg"
import dev from "/src/assets/icons/interval.svg"
 import turn2 from "/src/assets/icons/turn2.svg";

export default function Service() {
    return (
        <section className="bg-[#FFE6D2]  h-[917px] mx-auto w-full mx-auto pl-[160px]">
     <div className="service-text  w-[777px] h-[310px]  pt-[96px]">
          <p className="font-medium text-[14px] leading-[20px] tracking-[3px] uppercase ">our services</p>
       <h1 className="text-[48px] font-semibold">We build software solutions <br /> that solve client's business challenges</h1>
       <div className="flex flex-row w-[214px] h-[64px] bg-[#444CFC] cursor-pointer hover:bg-orange-600 rounded-xl justify-center gap-[16px] mt-[40px]">
  <a href="" className="flex items-center gap-2 text-[#FFFFFF]">
    Start a project
    <img src={Turn} alt="turn2" className="w-4 h-4" />
  </a>
</div>
     </div>
    <div className="service-names flex flex-row gap-[32px] mx-auto mt-[18px] mt-[184px]">
        <div className="character  bg-[#FFFFFF] w-[405px] h-[335px] ">
          <div className="mt-[48px] ml-[48px]">
              <img src={call} alt="" />
          </div>
            <h5 className="text-[#000000] font-semibold mt-[16px] pl-[48px]">Technical support</h5>
            <p className="text-[#5D5F6D] pl-[48px] mt-[8px]">We aim to attain the greatest <br /> satisfaction for our clients and be one of <br /> the prominent names when it comes to <br /> world-class service</p>
            <div className="flex flex-row pl-[48px] mt-[24px]">
                <a href="" className="flex items-center gap-2 text-[#444CFC] hover:text-orange-400">
                 Read more
                  <img src={turn2} alt="turn2" className="w-4 h-4"/>
                </a>
            </div>
        </div>
         <div className="management   bg-[#FFFFFF] w-[405px] h-[335px]">
          <div className="mt-[48px] ml-[48px]">
              <img src={settin} alt="" className="  rounded-full object-cover border-blue-500 object-cover"/>
          </div>
            <h5 className="text-[#000000] font-semibold mt-[16px] pl-[48px]">Testing Management</h5>
            <p className="text-[#5D5F6D] pl-12 mt-2">We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
            <div className="flex flex-row pl-[48px] mt-[24px]">
                <a href="" className="flex items-center gap-2 mt-[24px] text-[#444CFC] hover:text-orange-400">
                 Read more
                  <img src={turn2} alt="turn2" className="w-4 h-4"/>
                </a>
            </div>
        </div>
         <div className="development  bg-[#FFFFFF] w-[405px] h-[335px]">
          <div className="mt-[48px] ml-[48px]">
              <img src={dev} alt="" />
          </div>
            <h5 className="text-[#000000] font-semibold mt-[16px] pl-[48px]">Development</h5>
            <p className="text-[#5D5F6D] pl-[48px] mt-[8px]">We aim to attain the greatest satisfaction for our clients and be one of the prominent names when it comes to world-class service</p>
            <div className="flex flex-row pl-[48px] mt-[24px]">
                <a href="" className="flex items-center gap-2 text-[#444CFC] hover:text-orange-400 mt-[24px]">
                 Read more
                  <img src={turn2} alt="turn2" className="w-4 h-4"/>
                </a>
            </div>
        </div>
    </div>
        </section>

    )
    
}