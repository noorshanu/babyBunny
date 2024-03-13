import Title from "components/Title";

function About() {
  return (
    <section className=" relative mt-5">
      <div className="container-wrapper   py-4 px-2">
        <div className="w-full flex gap-2 items-center mx-auto ">
          <img
            src="images/img.jpeg"
            alt=""
            className=" border rounded-xl mx-4 w-auto h-[300px]"
          />
     
          <img
            src="images/img4.jpeg"
            alt=""
            className=" border rounded-xl mx-4 w-auto h-[300px]"
          />

<img
            src="images/img2.jpeg"
            alt=""
            className=" border rounded-xl mx-4 w-auto h-[300px]"
          />
        </div>


        


        <div className=" mt-4">
        <h2 className="text-[#000000] font-bold text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2 text-center  ">About Us</h2>
          <p className="max-w-5xl  text-[#000000] text-xl py-2"> 
          It is a community-driven project aimed at bringing warmth and liquidity to Solana. The focus is on spreading joy and positivity through winter-themed memes
          </p>

          <p className="max-w-5xl  text-[#000000] text-xl py-2 font-bold text-center">What coming next? Unique activities</p>
          <p className="max-w-5xl  text-[#000000] text-xl py-2">
          BabyPengiun Symbolizes fun, friendship, and financial opportunity. Users can participate in a range of activities within our vibrant community including trading on exchanges, participating in liquidity pools, or spreading joy and positivity through winter-themed meme
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
