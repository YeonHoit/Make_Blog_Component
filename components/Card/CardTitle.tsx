"use client";

import { ForwardedRef, forwardRef } from "react";
import { chakra } from "@chakra-ui/react";

interface CardTitleProps {
    title: string;
}

const CardTitle = (
  {title}: CardTitleProps,
  ref: ForwardedRef<HTMLParagraphElement>
) => {
  return (
    <chakra.p color={"#040404"} fontSize={"2xl"} fontWeight={"700"} ref={ref} fontFamily={"pretendard"}>
        {title}
    </chakra.p>
  );
};

export default forwardRef(CardTitle);
