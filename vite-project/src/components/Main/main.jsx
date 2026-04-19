 import worker from '../../assets/images/worker-company.png'
 import worker2 from '../../assets/images/worker-company2.png'
 import worker3 from '../../assets/images/worker-company3.png'
 
 export default function Main() {
    return (
        <main className="pt-30 pb-24">
            <div className="container mx-auto">
               <div className="w-[1279px] h-[210px] border border-red-500 mx-auto flex flex-row">
               <div className="lefts flex flex-col">
                  <h4 className="pre-heading">ABOUT US</h4>
                 <div className="text-left">
                    <h1 className="text-[#232536] text-[48px] leading-[58px] font-semibold">The company leads entire webdesign process from concept to delivery.</h1>
                 </div>
               </div>
                 <div className="text-right">
                    <h2 className='text-[36px] leading-13.5'>The Era Of Technology.</h2>
                    <p className='text-[16px] leading-6 font-normal'>Through True Rich Attended does no end it his mother since real had  half every him case in packages enquire we up ecstatic unsatiable saw his giving Remain expense you position concluded. </p>
                 </div>
               </div>
               <div className="worker-us flex flex-row gap-2.75 mx-auto mt-[48px]">
                <img className='w-[418px] h-[446px]' src={worker} alt="worker" />
                <img className='' src={worker2} alt="worker2" />
                <img className='' src={worker3} alt="worker3" />
               </div>
            </div>
        </main>
    )
 }