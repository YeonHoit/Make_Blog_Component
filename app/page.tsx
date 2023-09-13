import {
  Card,
  CardBody,
  CardImage,
  CardMoreButton,
  CardTag,
} from "@/components/Card/Card";
import { HiOutlinePlusSm } from "react-icons/hi";

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
    <div style={{ padding: "10px" }}>
      <h1>메인 페이지</h1>
      <Card>
        <CardImage />
        <CardBody>
          <CardTag>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                alignContent: "center",
                gap: "15px",
                flex: "1 0 0",
                flexWrap: "wrap",
              }}
            >
              {tags.map((item: string, index: number) => {
                return (
                  <span
                    style={{
                      color: "#00C7AF",
                      fontSize: "18px",
                      fontWeight: "400",
                    }}
                    key={index}
                  >
                    #{item}
                  </span>
                );
              })}
            </div>
            <CardMoreButton>
              <HiOutlinePlusSm size={24} color={"white"} />
              <span
                style={{
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: "normal",
                }}
              >
                More
              </span>
            </CardMoreButton>
          </CardTag>
        </CardBody>
      </Card>
    </div>
  );
}
