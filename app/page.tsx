import {
  Card,
  CardBody,
  CardBodyTop,
  CardContent,
  CardImage,
  CardMoreButton,
  CardTag,
  CardTagWrap,
  CardText,
  CardTitle,
} from "@/components/Card/Card";
import { HiOutlinePlusSm } from "react-icons/hi";
import React from "react";
import {
  Paging,
  PagingFirstButton,
  PagingLastButton,
  PagingNextButton,
  PagingNumberButton,
  PagingNumberText,
  PagingNumberWrap,
  PagingPrevButton,
} from "@/components/Paging/Paging";

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
    <div style={{ padding: "10px", width: "100vw" }}>
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
            <CardText>
              여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이
              4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄 보여지는
              영역입니다.여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는
              게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄
              보여지는 영역입니다.여기는 게시글 내용이 4줄 보여지는
              영역입니다.여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는
              게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄
              보여지는 영역입니다.여기는 게시글 내용이 4줄 보여지는
              영역입니다.여기는 게시글 내용이 4줄 보여지는 영역입니다.여기는
              게시글 내용이 4줄 보여지는 영역입니다.여기는 게시글 내용이 4줄
              보여지는 영역입니다.
            </CardText>
          </CardContent>
        </CardBody>
      </Card>
      {/* 구분선 */}
      <span style={{ height: "30px", width: "100%", display: "block" }}></span>
      <Paging>
        <PagingFirstButton />
        <PagingPrevButton />
        <PagingNumberWrap>
          <PagingNumberButton>
            <PagingNumberText>1</PagingNumberText>
          </PagingNumberButton>
          <PagingNumberButton>
            <PagingNumberText>2</PagingNumberText>
          </PagingNumberButton>
          <PagingNumberButton>
            <PagingNumberText>3</PagingNumberText>
          </PagingNumberButton>
          <PagingNumberButton>
            <PagingNumberText>4</PagingNumberText>
          </PagingNumberButton>
          <PagingNumberButton>
            <PagingNumberText>5</PagingNumberText>
          </PagingNumberButton>
          <PagingNextButton />
          <PagingLastButton />
        </PagingNumberWrap>
      </Paging>
    </div>
  );
}
