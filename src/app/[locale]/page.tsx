"use client";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import heroBg from "@/assets/landing/hero-bg.png"

export default function Home() {
   const { theme, setTheme } = useTheme();
   const t = useTranslations("common");
   return (
      <Flex
         as={"section"}
         bgImage={`url(${heroBg.src})`}
         bgSize={"cover"}
         bgRepeat={"no-repeat"}
         minH={"100dvh"}
         gap={4}
      >
      </Flex>
   );
}
