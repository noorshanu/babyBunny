import Title from "components/Title";

function About() {
  return (
    <section className=" relative">
      <div className="container-wrapper gap-6 flex justify-between items-center flex-col sm:flex-row border rounded-xl border-[#0156ea] shadow-lg bg-[#58535352] py-4 px-2">
        <div className="w-full">
          <img src="images/img.jpeg" alt="" className=" border rounded-xl mx-4 w-[80%]" />
        </div>


        <div className=" px-2">

          <div>
            <h1 className="text-[#000000] font-bold text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2  ">ABOUT</h1>


            <p className="max-w-5xl  text-[#000000] text-xl py-2">
            It is a community-driven project aimed at bringing warmth and liquidity to Solana. The focus is on spreading joy and positivity through winter-themed memes
            </p>
            <p className="max-w-5xl  text-[#000000] text-xl py-2 font-bold">
            What coming next? Unique activities 
            </p>

            <p className="max-w-5xl  text-[#000000] text-xl py-2">
            BabyPengiun Symbolizes fun, friendship, and financial opportunity. Users can participate in a range of activities within our vibrant community including trading on exchanges, participating in liquidity pools, or spreading joy and positivity through winter-themed meme
            </p>

            <div className=" relative my-4">
              <a
                href="https://raydium.io/"
                target="_blank"
                className="  btn-main  font-bold text-sm sm:text-xl rounded-xl px-12 py-2"
              >
                Trade
              </a>
            </div>
          </div>

        </div>

       </div>
    </section>
  );
}

export default About;
