"use client";

import { useState } from "react";
import { Box, Button, Flex, IconButton, Image, Show } from "@chakra-ui/react";
import NextImage from "next/image";
import ChooseLang from "./ChooseLang";
import { useTranslations } from "next-intl";
import { LuMenu, LuX } from "react-icons/lu";

export default function HeaderNav() {
    const intl = useTranslations("common");

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Flex
            as={"header"}
            flexWrap={"wrap"}
            alignItems={"center"}
            justifyContent={"space-between"}
            maxWidth={"4xl"}
            minWidth={"xs"}
            width={"calc(100% - 2rem)"}
            minHeight={"16"}
            rounded={"xl"}
            bg={"whiteAlpha.800"}
            backdropFilter="blur(3px)"
            position={"fixed"}
            top={"5"}
            left={"50%"}
            transform={"translateX(-50%)"}
            zIndex={"sticky"}
            px={"6"}
            py={"3"}
            // border={"1px solid"}
            borderColor={"gray.200"}
            shadow={"sm"}
            transition={"all 0.3s ease"}
        >
            <Image
                asChild
                width={"115px"}
                height={"auto"}
                objectFit={"contain"}
            >
                <NextImage
                    src={"/logo/logo-with-text-black.svg"}
                    alt="Logo with text"
                    width={0}
                    height={0}
                />
            </Image>
            <Flex display={{ base: "none", sm: "flex" }} alignItems={"center"}>
                <ChooseLang />
                <Button
                    colorPalette={"pink"}
                    rounded={"xl"}
                    variant={"surface"}
                    bg={"transparent"}
                    color={"pink.solid"}
                    _hover={{ bg: "pink.50" }}
                >
                    {intl("connect-wallet")}
                </Button>
            </Flex>
            <IconButton
                p={0}
                variant={"ghost"}
                display={{ base: "flex", sm: "none" }}
                aria-label="Menu"
                _hover={{ bg: "transparent" }}
                onClick={toggleMenu}
            >
                {isMenuOpen ? <LuX /> : <LuMenu />}
            </IconButton>

            <Show when={isMenuOpen}>
                <Box display={{ base: "flex", sm: "none" }} mt={"4"} width={"100%"}>
                    <Flex width={"100%"} flexDir={"column"} alignItems={"center"} gap={2}>
                        <ChooseLang />
                        <Button
                            width={"100%"}
                            colorPalette={"pink"}
                            rounded={"xl"}
                            variant={"surface"}
                            bg={"transparent"}
                            color={"pink.solid"}
                            _hover={{ bg: "pink.50" }}
                        >
                            {intl("connect-wallet")}
                        </Button>
                    </Flex>
                </Box>
            </Show>
        </Flex>
    );
}
