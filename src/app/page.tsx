import About from "@/components/home/About";
import FeaturedShipment from "@/components/home/FeatureShipment";
import Hero from "@/components/home/Hero";
import IndustrySectors from "@/components/home/IndustrySector";
import Service from "@/components/home/Service";
import Transportation from "@/components/home/Transportation";
import TypeOfContainer from "@/components/home/TypeOfContainer"
import Partners from "@/components/home/Partners";
import LatestNews from "@/components/home/LatestNews";


export default function Home() {
  return (
   <main>
   <Hero/>
   <About/>
   <FeaturedShipment/>
   <Service/>
   <Transportation/>
   <IndustrySectors/>
   <TypeOfContainer/>
   <Partners/>
   <LatestNews/>
   </main>
  );
}
