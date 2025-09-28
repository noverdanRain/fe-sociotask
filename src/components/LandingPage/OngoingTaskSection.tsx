"use client";

import { Flex, Grid } from "@chakra-ui/react";
import { MotionHeading } from "../ui/ChakraMotion";
import TaskCard from "../TaskCard";

export default function OngoingTaskSection() {
    return (
        <Flex
            flexDir={"column"}
            alignItems={"center"}
            mt={"10"}
            p={"6"}
        >
            <MotionHeading as={"h5"} size={"lg"} color={"pink.500"} textAlign={"center"}>
                ~ Ongoing Tasks ~
            </MotionHeading>
            <MotionHeading
                as={"h3"}
                size={"4xl"}
                textAlign={"center"}
                maxW={"864px"}
                fontWeight={"semibold"}
            >
                Come on, find interesting tasks and complete them and get rewards.
            </MotionHeading>

            <Grid templateColumns={"repeat(3, 1fr)"} mt={"10"} gap={"2"}>
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </Grid>
        </Flex>
    )
}