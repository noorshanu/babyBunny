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
          <h2 className="text-[#000000] font-bold text-2xl sm:text-3xl lg:text-4xl font-dream uppercase pb-2 text-center  ">
          About $BUNY
          </h2>
          <p className="max-w-5xl  text-[#000000] text-xl py-2">
          BugsBuny munches on carrots and generates profits through staking. But it doesn't stop there. It is also an avid lover of NFTs, offering digital collectibles that celebrate the essence of our quirky coin.
          </p>

          <p className="  text-[#000000] text-xl py-2 font-bold text-center">
          Join BugsBuny and let the fun begin!
          </p>

        </div>
      </div>
    </section>
  );
}

export default About;
