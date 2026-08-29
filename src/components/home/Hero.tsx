function Hero() {
  return (
    <section className="relative min-h-screen w-full ">
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="/images/hero image.png"
        className="absolute inset-x-0 top-0 h-[75%] lg:min-h-screen w-full -scale-x-100 object-cover xl"
      >
        <source src="https://res.cloudinary.com/dnvr7vfuw/video/upload/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-x-0 bottom-[-5%] h-[75%] bg-[linear-gradient(180deg,rgba(9,37,54,0)_-8.52%,#062031_52.59%,#011522_100%)]" />

      <div className="container-custom relative z-10 flex min-h-screen flex-col justify-between py-19.25  lg:pt-21.25 lg:pb-13.75 text-center">
        <div className="gap-6 lg:gap-8">
          <h1 className="text-2xl lg:text-[44px] font-bold leading-8 lg:leading-14 text-white">
            Global Freight Forwarding Made Simple
          </h1>
          <p className="text-sm md:text-lg font-medium leading-5 md:leading-6 text-[#EAEAEA] md:w-9/12 lg:w-6/12 mx-auto">
            Reliable air, sea, and land logistics solutions connecting your
            cargo to destinations worldwide with speed, security, and
            transparency.
          </p>
        </div>
        <div>
          <p className="text-sm md:text-[16px] font-semibold md:font-normal leading-6 text-[#FFFFFF] md:w-9/12 lg:w-[55%] mx-auto">
            From international shipping to last-mile delivery, we manage every
            step of your supply chain with advanced tracking and trusted global
            partners.
          </p>
        </div>
      </div>
    </section>
  );
}
export default Hero;
