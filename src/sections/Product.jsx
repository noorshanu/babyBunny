import Title from "components/Title";
import React from "react";

function Product() {
  return (
    <section id="prod">
      <div className="container-wrapper">
        <div className="text-center">
          <Title
            className="text-[#000000]"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine"
          >
           Our Products
          </Title>
        </div>

        <div
          className="flex flex-col sm:flex-row justify-between gap-3 my-12 relative z-10"
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-duration="1500"
          data-aos-easing="ease-in-sine"
        >
     

          <div className=" text-center">
          <p>1. NFT Collection: Featuring stunning artwork, playful animations, and cute kitty memes.
2. Gaming Experiences: Chase laser pointers, bat at yarn balls, and explore virtual catnip fields in meow-tastic games.
3. Endless Cuteness: Whether you're a seasoned collector or just starting out, there's something for every cat lover in the SolKitty ecosystem.</p>
            <h3 className="font-dream text-lg py-4 ">
              SolSon  Staking
            </h3>
          </div>
      

          <div className=" text-center flex items-center gap-2">
            <img
              src="images/about/img5.jpg"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto rounded-lg border-4"
            />
            <img
              src="images/about/img1.jpg"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto rounded-lg border-4"
            />
              <img
              src="images/about/img3.jpg"
              alt=""
              className="h-auto sm:h-[200px]  w-[200px] sm:w-auto mx-auto rounded-lg border-4"
            />
          </div>
      
        </div>
        <div className="relative flex justify-center ml-0 sm:ml-14">
          <img
            src="/images/btn-green.png"
            className="w-[220px] h-auto"
            alt=""
          />
          <h1 className=" absolute top-[32%] left-[37%] sm:left-[46%]  font-bold text-xl">
            BUY NOW
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Product;
