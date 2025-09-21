"use client";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("common");
  return (
    <Flex gap={4}>
      <appkit-button />
      <Button variant={"surface"} colorPalette={"red"}>
        {t("connect-wallet")}
      </Button>
      <Button colorPalette={"blue"}>
        Another Button
      </Button>
      {/* <Spacer/> */}
      <ColorModeButton />
    </Flex>
  );
}
