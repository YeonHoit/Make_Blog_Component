"use client"

import React from "react";
import {Link} from "@chakra-ui/react";

export default function Home() {
  return (
    <div>
        <Link href={"/card"} fontSize={"lg"} textDecoration={"underline"}>Card</Link>
    </div>
  );
}
