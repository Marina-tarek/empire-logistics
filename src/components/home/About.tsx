import Image from "next/image";

function About() {
  return (
    <section className="bg-[#F5F4F4]">
      <div className="container-custom flex item-center justify-center py-[100px] md:py-[140px] lg:py-[160px]">
        <div className="w-full text-center">
          <div>
            <span className="mb-8 md:mb-10 text-[16px] font-medium uppercase leading-6 text-[#808080]">
              Our Short Story
            </span>
          </div>

          <div className="mx-auto text-[16px] md:text-lg font-normal leading-6 text-primary">
            <p className=" leading-6 text-primary">
              <strong className="text-[16px] md:text-[22px] leading-6 md:leading-8 font-medium md:font-semibold">Phasellus mauris</strong>{" "}
              venenatis eu massa. Vulputate sit dolor nibh odio suspendisse
              sagittis morbi.
            </p>

            <p>Sed cras sodales sapien sit eget id sagittis ligula tortor.</p>

            <p>Id pretium leo vitae elit blandit vitae ornare sed a.</p>

            <p className="md:flex md:items-center md:justify-center">
              Parturient sit nulla neque lobortis vehicula
              <Image
                src="/images/about img.png"
                height={49}
                width={70}
                alt="Vehicula image"
                className="mx-auto md:mx-0"
              />
              <span className="text-[16px] md:text-[22px] leading-6 md:leading-8 font-medium md:font-semibold">pellentesque ac</span> venenatis
              convallis amet.
            </p>

            <p>
              Maecenas sit gravida nunc purus est donec aliquam in{" "}
              <strong className="text-[18px] md:text-[22px] leading-6 md:leading-8 font-normal md:font-semibold">aliquet.</strong>
            </p>

            <p>Sed parturient urna ipsum auctor viverra malesuada.</p>

            <p>
              Faucibus vel volutpat <strong className="text-[16px] md:text-[22px] leading-6 md:leading-8 font-medium md:font-semibold">condimentum</strong> varius ultrices
              feugiat sit amet aenean.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
