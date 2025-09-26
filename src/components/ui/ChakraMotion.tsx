"use client"

import { motion } from "motion/react";
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import ImageWrapper from "@/components/ui/image";

const MFlex = motion(Flex);
const MBox = motion(Box);
const MButton = motion(Button);
const MImage = motion(ImageWrapper);
const MHeading = motion(Heading);
const MText = motion(Text);

type MotionFlexProps = {
    children: React.ReactNode;
} & React.ComponentProps<typeof MFlex>

type MotionBoxProps = {
    children: React.ReactNode;
} & React.ComponentProps<typeof MBox>

type MotionButtonProps = {
    children: React.ReactNode;
} & React.ComponentProps<typeof MButton>
type MotionImageProps =  React.ComponentProps<typeof MImage>
type MotionHeadingProps = {
    children: React.ReactNode;
} & React.ComponentProps<typeof MHeading>
type MotionTextProps = {
    children: React.ReactNode;
} & React.ComponentProps<typeof MText>

export function MotionBox(props: MotionBoxProps) {
    return (
        <MBox
            {...props}
        >
            {props.children}
        </MBox>
    )
}

export function MotionFlex(props: MotionFlexProps) {
    return (
        <MFlex
            {...props}
        >
            {props.children}
        </MFlex>
    )
}

export function MotionButton(props: MotionButtonProps) {
    return (
        <MButton
            {...props}
        >
            {props.children}
        </MButton>
    )
}

export function MotionImage(props: MotionImageProps) {
    return (
        <MImage
            {...props}
        />
    )
}

export function MotionHeading(props: MotionHeadingProps) {
    return (
        <MHeading
            {...props}
        >
            {props.children}
        </MHeading>
    )
}

export function MotionText(props: MotionTextProps) {
    return (
        <MText
            {...props}
        >
            {props.children}
        </MText>
    )
}
