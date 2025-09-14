"use client";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Box, Button, Flex, Spacer } from "@chakra-ui/react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, setTheme } = useTheme();
  return (
    <Flex gap={4}>
      <appkit-button />
      <Button variant={"surface"} colorPalette={"red"}>
        Login with Reown
      </Button>
      <Button colorPalette={"blue"}>
        Another Button
      </Button>
      {/* <Spacer/> */}
      <ColorModeButton />
    </Flex>
  );
}
