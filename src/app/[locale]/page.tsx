import Hero from "@/components/LandingPage/Hero";

export default function Home() {
   return (
      <>
         <Hero />
         {/* <MotionFlex
            animate={{
               y: [0, -20, 0], // naik -20px lalu turun lagi
               scale: [1, 1.05, 1], // sedikit membesar saat naik
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", }}
            w="8"
            h={"8"}
            bg={"blue.500"}
            rounded={"lg"}
            mt={"28"}
            ml={"20"}
         /> */}
      </>
   );
}
