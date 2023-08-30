"use client";
import { chakra } from "@chakra-ui/react";
import { ForwardedRef, forwardRef } from "react";

interface CardTextProps {
  text: string;
}

const CardText = (
  { text }: CardTextProps,
  ref: ForwardedRef<HTMLParagraphElement>,
) => {
  return (
    <chakra.p
      ref={ref}
      noOfLines={3}
      color={"#555555"}
      fontFamily={"pretendard"}
      fontSize={"20px"}
      lineHeight={"32px"}
      marginBottom={"13px"}
    >
      {text}
    </chakra.p>
  );
};

export default forwardRef(CardText);
