import { Box, Flex, type FlexProps, Text } from "@chakra-ui/react";
import { MotionHeading } from "../ui/ChakraMotion";

import StartTaskImg from "@/assets/landing/how-to/start-task.png";
import CompleteTaskImg from "@/assets/landing/how-to/complete-task.png";
import ClaimRewardImg from "@/assets/landing/how-to/claim-rewards.png";
import BackLineSvg from "@/assets/landing/how-to/back-line.svg";
import ImageWrapper from "../ui/image";

const staticCardProps: FlexProps = {
    overflow: "hidden",
    position: "relative",
    w: "316px",
    h: "284px",
    p: "6",
    rounded: "3xl",
    border: "6px solid",
    borderColor: "white",
    boxShadow: "4px 4px 10px 2px rgba(0, 0, 0, 0.1)",
    alignItems: "end",
    bgGradient: "to-b",
    gradientFrom: "#CEE8FC/75",
    gradientVia: "#E9FEFE/75",
    gradientTo: "#F3FCFF/75",
    backdropFilter: "blur(3px)",
};

export default function HowToSection() {
    return (
        <Flex
            position={"relative"}
            flexDir={"column"}
            alignItems={"center"}
            as="section"
            mt={"6"}
            p={"6"}
            bgImage={`url(${BackLineSvg.src})`}
            bgRepeat={"no-repeat"}
            backgroundPositionX={"center"}
            backgroundPositionY={"350px"}
            bgSize={"1780px"}
        >
            <Box
                zIndex={-2}
                position="absolute"
                bottom={-172}
                w={"full"}
                h={"425px"}
                bgGradient="to-b"
                gradientFrom="#ffffff/0"
                gradientVia="#D9FAFF/85"
                gradientTo="#ffffff/0"
            />

            <MotionHeading as={"h5"} size={"lg"} color={"pink.500"} textAlign={"center"}>
                ~ How To ~
            </MotionHeading>
            <MotionHeading
                as={"h3"}
                size={"4xl"}
                textAlign={"center"}
                maxW={"864px"}
                fontWeight={"semibold"}
            >
                Claim and earn cryptocurrency coins by completing tasks and
                getting confirmed
            </MotionHeading>
            <Flex gap={"12"} alignItems={"start"} mt={"12"}>
                <Flex rotate={"-6"} mt={"5"} {...staticCardProps}>
                    <ImageWrapper
                        rotate={"6"}
                        position={"absolute"}
                        top={"20px"}
                        left={"-9px"}
                        src={StartTaskImg.src}
                        alt="start task illustration"
                        width={"290px"}
                        nextImageProps={{
                            width: 300,
                            height: 0,
                        }}
                    />
                    <Box>
                        <Text fontWeight={"semibold"}>STEP 1</Text>
                        <Text mt={"1"} color={"gray.700"}>
                            Follow and complete the available tasks available in
                        </Text>
                    </Box>
                </Flex>
                <Flex rotate={"0"} {...staticCardProps}>
                    <ImageWrapper
                        position={"absolute"}
                        top={"20px"}
                        left={"10px"}
                        src={CompleteTaskImg.src}
                        alt="complete task illustration"
                        width={"284px"}
                        nextImageProps={{
                            width: 300,
                            height: 0,
                        }}
                    />
                    <Box>
                        <Text fontWeight={"semibold"}>STEP 2</Text>
                        <Text mt={"1"} color={"gray.700"}>
                            Complete the tasks according to the provisions
                        </Text>
                    </Box>
                </Flex>
                <Flex rotate={"6"} mt={"5"} {...staticCardProps}>
                    <ImageWrapper
                        rotate={"-5"}
                        position={"absolute"}
                        top={"10px"}
                        left={"42px"}
                        src={ClaimRewardImg.src}
                        alt="claim reward illustration"
                        width={"224px"}
                        nextImageProps={{
                            width: 300,
                            height: 0,
                        }}
                    />
                    <Box>
                        <Text fontWeight={"semibold"}>STEP 3</Text>
                        <Text mt={"1"} color={"gray.700"}>
                            Claim the cryptocurrency coins offered
                        </Text>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
}
