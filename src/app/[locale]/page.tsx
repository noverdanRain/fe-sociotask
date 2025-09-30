import HeroSection from "@/components/LandingPage/HeroSection";
import HowToSection from "@/components/LandingPage/HowToSection";
import OngoingTaskSection from "@/components/LandingPage/OngoingTaskSection";
import { Box } from "@chakra-ui/react";

export default function Home() {
   return (
      <>
         <HeroSection />
         <HowToSection />
         <OngoingTaskSection/>
         <Box h={"300px"}/>
      </>
   );
}
