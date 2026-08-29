import { Button } from "../ui/button";

function TypeOfContainer() {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div className="relative flex min-h-155 flex-col lg:min-h-screen lg:flex-row lg:items-center">
        {/* Video */}
        <div className=" relative order-1 h-75 w-full lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-[60vw]">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/container image.png"
            className="h-full w-full object-cover"
          >
            <source src="https://res.cloudinary.com/dnvr7vfuw/video/upload/q_auto,f_auto/container.mp4" type="video/mp4" />
          </video>

          {/* Gradient */}
          <div
            className="
                pointer-events-none
                absolute
                inset-0
                -left-2.5
                bg-[linear-gradient(180deg,#1D1B1B_0%,rgba(29,27,27,0.8)_30%,rgba(29,27,27,0.25)_70%,transparent_100%)]
                lg:bg-[linear-gradient(90deg,#1D1B1B_0%,rgba(29,27,27,0.8)_30%,rgba(29,27,27,0.25)_70%,transparent_100%)]
              "
          />
        </div>

        {/* Content */}
        <div className="px-4 lg:pl-30 relative z-10 order-2 w-full pt-10 pb-31 lg:order-1 lg:w-[40%] lg:py-0">
          <div className="text-white gap-14">
            <div className="gap-10">
              <span
                className="
                  text-[12px]
                  font-medium
                  leading-4
                  lg:text-[28px]
                  lg:leading-10
                "
              >
                Types Of
              </span>

              <h2
                className="
                  text-[20px]
                  font-bold
                  leading-6
                  lg:text-[56px]
                  lg:leading-18
                "
              >
                Containers
              </h2>

              <p
                className="
                  mt-2
                  max-w-125
                  text-[10px]
                  leading-4
                  text-[#C4C4C4]
                  lg:mt-5
                  lg:text-[16px]
                  lg:leading-6
                "
              >
                Regardless of your industry, your commodity, or your key
                markets, Maersk offers global and local logistics solutions that
                enable small and large businesses to grow.
              </p>
            </div>

            <div>
              <Button
                className="
                p-2.5

                  mt-5
                  h-10
                  w-full
                  rounded-[5px]
                  bg-white
                  text-[12px]
                  font-medium
                  leading-4
                  text-primary
                  hover:bg-white/90
                  lg:mt-8
                  lg:h-12
                  lg:max-w-[288px]
                  lg:text-[18px]
                  lg:leading-6
                "
              >
                All Containers
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TypeOfContainer;
