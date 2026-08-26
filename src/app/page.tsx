import About from "@/components/home/About";
import FeaturedShipment from "@/components/home/FeatureShipment";
import Hero from "@/components/home/Hero";
import Service from "@/components/home/Service";
import Transportation from "@/components/home/Transportation";


export default function Home() {
  return (
   <main>
   <Hero/>
   <About/>
   <FeaturedShipment/>
   <Service/>
   <Transportation/>
   </main>
  );
}
