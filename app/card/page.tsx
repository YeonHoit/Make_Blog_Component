"use client"

import CardTitle from "@/components/Card/CardTitle";
import React from "react";
import {CardType} from "@/types/CardType";

export default function CardPage() {
    const data: CardType = {
        title: "여기는 타이틀영역 입니다"
    };

    return (
        <div>
            <CardTitle title={data.title} />
        </div>
    );
}