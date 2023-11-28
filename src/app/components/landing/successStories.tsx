"use client"
import React, { Dispatch, SetStateAction, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Nunito } from "next/font/google";
import avatar from "./../../assets/landing/landing/avatar.png";

const nunito = Nunito({
  weight: ["400", "600", "700"],
  display: "swap",
  subsets: ["latin"],
});

type Story = {
  comment: string;
  name: string;
  designation?: string;
  avatar: StaticImageData;
};

type CircleProps = {
  storyNum: number;
  setStoryNum: Dispatch<SetStateAction<number>>;
  arrayLength: number;
  direction: "left" | "right";
};

type SuccessCardProps = {
  comment: string;
  designation?: string;
  name: string;
  avatar: StaticImageData;
};

const CircleButton: React.FC<CircleProps> = ({ storyNum, setStoryNum, arrayLength, direction }) => {
  const handleClick = () => {
    setStoryNum((prevStoryNum) =>
      direction === "left" ? (prevStoryNum - 1 + arrayLength) % arrayLength : (prevStoryNum + 1) % arrayLength
    );
  };

  const isDisabled = direction === "left" ? storyNum === 0 : storyNum === arrayLength - 1;

  return (
    <button
      className="w-10 h-10 bg-primary rounded-full flex items-center justify-center cursor-pointer"
      onClick={handleClick}
      disabled={isDisabled}
    >
      <span className="text-lg font-semibold text-white">{direction === "left" ? "<" : ">"}</span>
    </button>
  );
};

const SuccessCard: React.FC<SuccessCardProps> = ({ comment, designation, name, avatar }) => {
  return (
    <div className="shadow-2xl border flex-1 rounded-3xl flex h-64">
      <div className="bg-primary w-2/12 rounded-l-3xl flex items-center justify-center">
        <div className="text-white text-[120px] font-extrabold text-center m-auto">“</div>
      </div>
      <div className="flex flex-col gap-3 justify-between p-10 w-3/5 flex-1">
        <p className="text-lg">{comment}</p>
        <div className=" float-right text-right">
          <h1 className=" font-semibold text-gray-900 text-lg">- {name}</h1>
          <p>{designation}</p>
        </div>
      </div>
      <div className=" w-1/5 flex items-center justify-center">
        <div className=" w-24 h-24 border-primary flex items-center justify-center border-8 rounded-full">
          <Image src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};

const SuccessStories: React.FC = () => {
  const [storyNum, setStoryNum] = useState(0);

  const storiesArray: Story[] = [
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut officia nostrum voluptate quod, suscipit hiciure doloribus consequatur odit vero nemo iste sequi! Placeat voluptatem ratione velit iste!",
      name: "Abcdefghi",
      designation: "Frontend Engineer",
      avatar: avatar,
    },
    {
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut officia nostrum voluptate quod, suscipit hiciure doloribus consequatur odit vero nemo iste sequi! Placeat voluptatem ratione velit iste!",
      name: "Abcdefghi",
      avatar: avatar,
    },
    {
      comment: "Fabulous Application, I am very much impressed by them.",
      name: "yash sharma",
      designation: "Student",
      avatar: avatar,
    },
  ];

  return (
    <div className={`${nunito.className} flex flex-col gap-10 px-10 w-full`}>
      <h1 className="text-center font-bold text-4xl">See Our Success Stories</h1>
      <div className="flex justify-between items-center gap-12">
        <CircleButton storyNum={storyNum} setStoryNum={setStoryNum} arrayLength={storiesArray.length} direction="left" />
        <SuccessCard
          comment={storiesArray[storyNum].comment}
          designation={storiesArray[storyNum].designation}
          name={storiesArray[storyNum].name}
          avatar={storiesArray[storyNum].avatar}
        />
        <CircleButton storyNum={storyNum} setStoryNum={setStoryNum} arrayLength={storiesArray.length} direction="right" />
      </div>
    </div>
  );
};

export default SuccessStories;
