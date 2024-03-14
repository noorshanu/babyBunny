import { FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className="hero relative z-10 overflow-hidden bg-[#ffffff00] h-auto sm:h-[100%]  py-4">
      <div className="container-wrapper flex flex-col sm:flex-row  justify-center items-center  lg:drop-shadow-[0_0_10rem_white] mt-4 sm:mt-[2rem] ">
        <div className=" relative z-20 w-full">
          <img
            src="/images/hero.png"
            className="w-full lg:w-[50%] lg:h-full   mx-auto "
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            alt=""
          />
          <div className=" bg-[#00000077] border rounded-2xl p-4    ">
          <h1 className=" text-[#ffffff] font-bold text-center text-2xl sm:text-3xl  font-dream uppercase pb-2  ">
            {" "}
            BugsBuny's farm is all about fun and profitable staking experience!
          </h1>

          <a
            href="https://solscan.io/token/8zCvq9834SXn4PZ1SXegd18piuSJjwcLrEmZTy4bQEuC"
            target="_BLANK"
            className="  text-[#ffffff] font-medium text-base text-center flex justify-center  sm:text-xl my-2"
          >
            Contract : 8zCvq9834SXn4PZ1SXegd18piuSJjwcLrEmZTy4bQEuC
          </a>
          <div className=" hidden   sm:flex  justify-center items-center gap-6 mt-7 sm:mt-8">
            <div className=" relative">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/CZ1dbsqkFtPUqEgXgbxe53CVoEfgGAGynNVsRfDQTMJq?t=1710426402157"
                target="_blank"
                className="  btn-main  font-bold text-sm sm:text-xl rounded-xl px-12 py-2"
              >
                Trade
              </a>
            </div>
            <div className="flex items-center gap-5 justify-center lg:justify-end">
              <a
                href="https://t.me/bugsbunnyso"
                target="_blank"
                className=" text-4xl"
              >
                <FaTelegram />
              </a>

              <a href="https://twitter.com/Bugssbunyyyy" target="_blank">
                <img src="X.png" alt="" className="w-auto h-[40px]" />
              </a>
            </div>
          </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
