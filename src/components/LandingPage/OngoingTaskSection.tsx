"use client";

import { Box, Flex, Grid } from "@chakra-ui/react";
import { MotionHeading } from "../ui/ChakraMotion";
import TaskCard from "../TaskCard";

export default function OngoingTaskSection() {
    return (
        <Flex
            flexDir={"column"}
            alignItems={"center"}
            mt={"10"}
            p={"6"}
            overflow={"hidden"}
        >
            <MotionHeading
                as={"h5"}
                size={"lg"}
                color={"pink.500"}
                textAlign={"center"}
            >
                ~ Ongoing Tasks ~
            </MotionHeading>
            <MotionHeading
                as={"h3"}
                size={"4xl"}
                textAlign={"center"}
                maxW={"864px"}
                fontWeight={"semibold"}
            >
                Come on, find interesting tasks and complete them and get
                rewards.
            </MotionHeading>

            <Grid
                position={"relative"}
                templateColumns={"repeat(3, 1fr)"}
                mt={"10"}
                gap={"2"}
            >
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <Box
                    position={"absolute"}
                    bottom={0}
                    w={"full"}
                    h={"340px"}
                    bgGradient={"to-b"}
                    gradientFrom={"transparent 22%"}
                    gradientTo={"#fff 85%"}
                />
            </Grid>
        </Flex>
    );
}
