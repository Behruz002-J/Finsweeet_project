import Company from "/src/assets/images/worker-company.png"
import Company2 from "/src/assets/images/worker-company2.png"
import Company3 from "/src/assets/images/worker-company3.png"
import Shape from "/src/assets/images/Shape.png"
import Turn2 from "/src/assets/icons/turn2.svg"
 export default function Main() {
    return (
        <main className="pt-30 pb-24">
            <div className="container mx-auto">
               <div className="w-[1279px] h-[210px] mx-auto flex flex-row">
               <div className="lefts flex flex-col">
                  <h4 className="pre-heading">ABOUT US</h4>
                 <div className="text-left">
                    <h1 className="text-[#232536] text-[48px] leading-[58px] font-semibold">The company leads entire webdesign process from <br /> concept to delivery.</h1>
                 </div>
               </div>
                 <div className="mt-4 flex flex flex-col gap-[16px]">
                    <h2 className='text-[36px] leading-13.5 mt-[23px] '>The Era Of Technology.</h2>
                    <p className='text-[#5D5F6D] font-normal text-[16px] leading-6'>Through True Rich Attended does no end it his mother since real had <br /> half every him case in packages enquire we up ecstatic unsatiable  saw his giving Remain expense you position concluded. </p>
                 </div>
               </div>
               {/* //image list} */}
               <div className="worker-us flex flex-row gap-2.75 mx-auto ml-[120px] mt-[48px]">
                <img src={Company} className='w-[418px] h-[446px]'  alt="worker" />
                <img src={Company2} className='w-[418px] h-[446px]'  alt="worker2" />
                <img src={Company3} className='w-[418px] h-[446px]'  alt="worker3" />
               </div>
               {/* mijozlar ko'rsatkich qismi */}
               <div className="about-result flex flex-row justify-center">
                 <div className="diagram flex flex-row gap-16.5 mt-[48px]">
                   <div className="pr-del">
                     <h1 className='text-[36px]'>1560+</h1>
                    <img src={Shape} alt="" />
                    <span>Project Delivered</span>
                  </div>
                  <div className="profes">
                         <h1 className='text-[36px]'>100+</h1>
                   <img src={Shape} alt="" />

                    <span>Project Delivered</span>
                  </div>
                  <div className="happy">
                         <h1 className='text-[36px]'>950+</h1>
                    <img src={Shape} alt="" />
                    <span>Project Delivered</span>
                  </div>
                  <div className="experience">
                         <h1 className='text-[36px]'>10 yrs</h1>
                    <img src={Shape} alt="" />
                    <span className='text-[16px] mt-[4px]'>Project Delivered</span>
                  </div>
                 </div>
                  <div className="read-us ml-122.5  mt-22.5 mr-[10px] ">
                     <a className='text-[#444CFC] flex flex-row gap-[14px] hover:text-orange-500' href="">
                        Read about us 
                       <img src={Turn2} alt="" />
                     </a>
                  </div>
               </div>
            </div>
            
        </main>
    )
 }