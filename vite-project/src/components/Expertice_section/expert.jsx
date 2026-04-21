// import rockt from "../../assets/icons/shuttle.svg";
// import setting from "../../assets/icons/settings.svg";
// import support from "../../assets/icons/support.svg";
export default function Expert() {
  return (
    <section className="bg-[#ECF8F9] h-[660px]">
      <div className="container flex flex-row mx-auto justify-center">
        <div className="left-expertice pr-35.25 ">
          <h5 className="mt-[142px] text-transform: uppercase text-[14px] leading-[20px] font-medium">
            Our expertise
          </h5>
          <h1 className="text-[48px] leading-[58px] font-bold mt-[16px]">
            We want to get local <br /> identification in every <br /> corner of
            the world in this <br /> era of global citizenship
          </h1>
          <p className="mt-[24px] text-[#5D5F6D]">
            Through True Rich Attended does no end it his mother since real had
            half <br /> every him case in packages enquire we up ecstatic
            unsatiable saw his giving <br /> Remain expense you position
            concluded.{" "}
          </p>
        </div>
        <div className=" flex flex-col">
          <div className="right-expertice mt-[96px] ">
            <div className="rocket w-[515px] h-[140px] bg-[#FFFFFF]  p-[32px] flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#FFE0D3] rounded-full flex items-center justify-center p-[12px]">
                <img className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">On Time Delivery</h3>
                <p className="mt-2 text-sm">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>
            <div className="settings w-[515px] h-[140px] bg-[#FFFFFF]  p-[32px] flex gap-4 items-start">
              <div className="w-12 h-12 bg-[#FFE0D3] rounded-full flex items-center justify-center">
                <img className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Best Quality</h3>
                <p className="mt-2 text-sm">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
              </div>
            </div>

            <div className="supportt  w-[515px] h-[140px] bg-[#FFFFFF]  p-[32px] flex gap-4 items-start mt-3">
              <div className="w-12 h-12 bg-[#FFE0D3] rounded-full flex items-center justify-center">
                <img className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-semibold text-lg">Support Assist</h3>

                <p className="mt-2 text-sm">
                  Through True Rich Attended does no end it his mother since
                  real had half every him.
                </p>
                <div className="w-[515px] h-2 flex mt-7 justify-center">
    <div className="bg-[#FFA155] w-1/3"></div>
    <div className="bg-[#FFD3AF] w-1/3"></div>
    <div className="bg-blue-500 w-1/3"></div>
  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
