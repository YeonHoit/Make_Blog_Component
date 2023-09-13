"use client";

import React, { forwardRef } from "react";

const Card = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      style={{
        display: "flex",
        width: "100%",
        alignItems: "flex-start",
        gap: "40px",
      }}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardImage = forwardRef<
  HTMLImageElement,
  React.HTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img
    src={"https://picsum.photos/240/200"}
    alt={"강아지"}
    width={240}
    height={200}
    style={{ borderRadius: "10px" }}
    ref={ref}
    {...props}
  />
));
CardImage.displayName = "CardImage";

const CardBody = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      gap: "12px",
      flex: "1 0 0",
    }}
    {...props}
  />
));
CardBody.displayName = "CardBody";

const CardTag = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      alignSelf: "stretch",
    }}
    ref={ref}
    {...props}
  />
));
CardTag.displayName = "CardTag";

const CardMoreButton = forwardRef<
  HTMLButtonElement,
  React.HTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    style={{
      display: "flex",
      height: "34px",
      padding: "10px 20px 10px 15px",
      justifyContent: "center",
      alignItems: "center",
      gap: "2px",
      borderRadius: "20px",
      background: "#A384FE",
    }}
    {...props}
  />
));
CardMoreButton.displayName = "CardMoreButton";

export { Card, CardImage, CardBody, CardTag, CardMoreButton };
