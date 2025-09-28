import { Avatar, AvatarGroup, Flex, Text } from "@chakra-ui/react";
import { LuClock, LuUserRound } from "react-icons/lu";
import IgCircleImg from "@/assets/social circle/ig-circle.png";
// import ThreadCircleImg from "@/assets/social circle/thread-circle.png";
// import TtCircleImg from "@/assets/social circle/tt-circle.png";
import XCircleImg from "@/assets/social circle/x-circle.png";
import FbCircleImg from "@/assets/social circle/fb-circle.png";
import YtCircleImg from "@/assets/social circle/yt-circle.png";

export default function TaskCard() {
    return (
        <Flex p={"2"}>
            <Flex
                flexDir={"column"}
                w={"325px"}
                h={"256px"}
                p={"16px"}
                rounded={"18px"}
                bgGradient={"to-b"}
                border={"1px solid #CFF5FF"}
                gradientFrom={"#c3f2ffcc 22%"}
                gradientVia={"#E8FDFDcc 71%"}
                gradientTo={"#DFF6FDcc 100%"}
            >
                <Flex
                    justifyContent={"space-between"}
                >
                    <Flex gap={"1.5"}>
                        <CompletedUser completed={10} max={88} />
                        <EndedOn date={"2024-12-31"} />
                    </Flex>
                    <SocialAvatars />
                </Flex>
            </Flex>
            <Flex></Flex>
        </Flex>
    );
}

function CompletedUser({ completed, max }: { completed: number; max: number }) {
    return (
        <Flex
            w={"fit-content"}
            h={"fit-content"}
            alignItems={"center"}
            gap={"4px"}
            py={"4px"}
            px={"8px"}
            rounded={"full"}
            fontSize={"11px"}
            bg={"white/75"}
            fontWeight={"medium"}
        >
            <LuUserRound strokeWidth={2.5} />
            <Text>{completed}/{max}</Text>
        </Flex>
    );
}
function EndedOn({ date }: { date?: string }) {
    console.log(date);
    return (
        <Flex
            w={"fit-content"}
            h={"fit-content"}
            alignItems={"center"}
            gap={"4px"}
            py={"4px"}
            px={"8px"}
            rounded={"full"}
            fontSize={"11px"}
            bg={"white/75"}
            fontWeight={"medium"}
        >
            <LuClock strokeWidth={2.5} />
            <Text>21 Days left</Text>
        </Flex>
    );
}

function SocialAvatars() {
    return (
        <AvatarGroup gap="0" spaceX="-2.5" size="xs">
            <Avatar.Root w={"28px"} h={"28px"} border="1.5px solid white">
                <Avatar.Fallback name="Avalanche" />
                <Avatar.Image src={IgCircleImg.src} />
            </Avatar.Root>
            <Avatar.Root w={"28px"} h={"28px"} border="1.5px solid white">
                <Avatar.Fallback name="Ethereum" />
                <Avatar.Image src={FbCircleImg.src} />
            </Avatar.Root>
            <Avatar.Root w={"28px"} h={"28px"} border="1.5px solid white">
                <Avatar.Fallback name="Tether" />
                <Avatar.Image src={XCircleImg.src} />
            </Avatar.Root>
            <Avatar.Root w={"28px"} h={"28px"} border="1.5px solid white">
                <Avatar.Fallback name="USD Coin" />
                <Avatar.Image src={YtCircleImg.src} />
            </Avatar.Root>
            <Avatar.Root w={"28px"} h={"28px"} border="1.5px solid white" variant="subtle">
                <Avatar.Fallback fontSize={"10px"}>+3</Avatar.Fallback>
            </Avatar.Root>
        </AvatarGroup>
    )
}
