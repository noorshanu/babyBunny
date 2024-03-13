import { FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className="relative z-10 overflow-hidden bg-[#ffffff00] h-auto sm:h-[100vh] ">
      <div className="container-wrapper flex flex-col sm:flex-row  justify-between items-center  lg:drop-shadow-[0_0_10rem_white] mt-4 sm:mt-[8rem] ">
        <div className="  mt-4 sm:mt-8 w-full">
          <h1 className=" text-[#000000] font-bold text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  max-w-4xl ">
            {" "}
            BabyPengiun: Chubby, Funny, and Seafood-Loving Pengiun with Big Dreams!
          </h1>
          <p className=" max-w-3xl  text-[#000000] text-xl ">
          It is the icy addition to the Solana meme coin ecosystem.. Babypengiun is inspired by the adorable antics of baby penguins, those lovable creatures that just can't get enough of seafood and waddling around on the ice.
          </p>
          <a
            href="https://solscan.io/token/Bz5y2yn9zmZjspZUowcEavBULDZbfHvjFhaEWQUf8Krb"
            target="_BLANK"
            className="max-w-3xl  text-[#000000] font-medium text-base  sm:text-xl mx-auto my-2"
          >
            Contract : Bz5y2yn9zmZjspZUowcEavBULDZbfHvjFhaEWQUf8Krb
          </a>
          <div className=" hidden   sm:flex  justify-start items-center gap-6 mt-7 sm:mt-8">
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
             <a href="https://t.me/babypengiun" target="_blank" className=" text-4xl">
             <FaTelegram />
             </a>
         

             <a href="https://twitter.com/babyy_penguin" target="_blank">
              <img src="X.png" alt="" className="w-auto h-[40px]" />
             </a>
            </div>
          </div>
        </div>

        <div className=" relative z-20 w-full">
          <img
            src="/images/hero.png"
            className="w-full lg:w-[90%] lg:h-full   mx-auto "
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
