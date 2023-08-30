"use client";

import { ForwardedRef, forwardRef } from "react";
import { chakra } from "@chakra-ui/react";

interface CardTitleProps {}

const CardTitle = (
  {}: CardTitleProps,
  ref: ForwardedRef<HTMLParagraphElement>
) => {
  return (
    <chakra.p color={"#040404"} fontSize={"2rem"} fontWeight={"normal"}>
      여기는 타이틀영역 입니다
    </chakra.p>
  );
};

export default forwardRef(CardTitle);
