import {
  Card,
  CardBody,
  CardBodyTop,
  CardContent,
  CardImage,
  CardMoreButton,
  CardTag,
  CardTagWrap,
  CardTitle,
} from "@/components/Card/Card";
import { HiOutlinePlusSm } from "react-icons/hi";
import React from "react";

export default function Home() {
  const tags: string[] = [
    "Deps",
    "Study",
    "React",
    "Figma",
    "VSCode",
    "Intellij",
    "Next",
  ];

  return (
    <div style={{ padding: "10px", width: "100%" }}>
      <Card>
        <CardImage />
        <CardBody>
          <CardBodyTop>
            <CardTagWrap>
              {tags.map((item: string, index: number) => {
                return <CardTag key={index}>#{item}</CardTag>;
              })}
            </CardTagWrap>
            <CardMoreButton />
          </CardBodyTop>
          <CardContent>
            <CardTitle>여기는 타이틀영역 입니다.</CardTitle>
          </CardContent>
        </CardBody>
      </Card>
    </div>
  );
}
