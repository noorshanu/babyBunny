import Navbar from "components/Navbar";

import BelowMark from "sections/BelowMark";
import About from "sections/About";
import Hero from "sections/Hero";
import JoinCommunity from "sections/JoinCommunity";
import NFTs from "sections/NFTs";


// import Tokenomics from "sections/Tokenomics";

function App() {
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="relative z-10">
          <div className="lg:absolute relative sm:top-8 2xl:top-1 left-0 w-full z-50">
            <Navbar />
          </div>

          <div className="  mt-5">
            <Hero />
          </div>

          {/* <div className=" py-2">
           <Product/>
          </div> */}
          {/* <div className=" py-2">
            <BelowMark />
          </div> */}
        </div>

        <div className="" id="about">
          <About />
        </div>

        {/* <div className=" mt-3">
          <NFTs />
        </div> */}
      </main>

      <div id="contact">
        <JoinCommunity />
      </div>
    </div>
  );
}

export default App;
