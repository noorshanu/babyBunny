import { FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className="hero relative z-10 overflow-hidden bg-[#ffffff00] h-auto sm:h-[100vh] ">
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
          <h1 className=" text-[#ffffff] font-bold text-center text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  ">
            {" "}
            BugsBunny: Chubby, Funny, and Seafood-Loving 
          </h1>

          <a
            href="https://solscan.io/token/Bz5y2yn9zmZjspZUowcEavBULDZbfHvjFhaEWQUf8Krb"
            target="_BLANK"
            className="  text-[#ffffff] font-medium text-base text-center flex justify-center  sm:text-xl my-2"
          >
            Contract : Bz5y2yn9zmZjspZUowcEavBULDZbfHvjFhaEWQUf8Krb
          </a>
          <div className=" hidden   sm:flex  justify-center items-center gap-6 mt-7 sm:mt-8">
            <div className=" relative">
              <a
                href="https://raydium.io/"
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

              <a href="https://twitter.com/babyy_penguin" target="_blank">
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
