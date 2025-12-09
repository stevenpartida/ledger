import React from "react";

type HeaderBoxProps = {
  type?: "title" | "greeting";
  title: string;
  subtext: string;
  user?: string;
};

const HeaderBox = ({
  type = "title",
  title,
  subtext,
  user,
}: HeaderBoxProps) => {
  return (
    <div className="flex flex-col w-full font-inter ">
      <h1 className="font-bold text-3xl tracking-wide mb-2">
        {title}
        {type === "greeting" && (
          <span className="text-bankGradient">&nbsp;{user}</span>
        )}
      </h1>
      <p className="font-normal text-base text-accent-foreground">{subtext}</p>
    </div>
  );
};

export default HeaderBox;
