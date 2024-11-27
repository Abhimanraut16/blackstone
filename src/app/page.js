
import BenefirsBanner from "@/components/BenefitsBanner/BenefirsBanner";
import HowUse from "@/components/HowUse/HowUse";
import Promises from "@/components/Promises/Promises";
import ShilajitEach from "@/components/ShilajitEach/ShilajitEach";
import SlideShow from "@/components/SlideShow/SlideShow";
import Testimonial from "@/components/Testimonial/Testimonial";
import TimeLine from "@/components/TimeLine/TimeLine";


export default function Home() {
  return (
    <>
      <SlideShow/>
      <BenefirsBanner/>
      <ShilajitEach/>
      <Promises/>
      <TimeLine  />
      <HowUse/>
      {/* <Testimonial/> */}
    </>
  );
}
