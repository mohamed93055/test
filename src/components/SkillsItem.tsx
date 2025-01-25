"use client";

import CountUp from "react-countup";

export default function SkillsItem({
  item,
  status,
}: {
  item: { id: number; skill: string; progress: number };
  status: boolean;
}) {
  return (
    <li className="w-full py-2">
      <div className="flex justify-between">
        <h3 className="capitalize mb-1">{item.skill}</h3>
        <span>
          {status ? (
            <CountUp start={0} end={item.progress} duration={0.5} />
          ) : (
            0
          )}
          %
        </span>
      </div>
      <p className="w-full h-2 bg-gray-200 relative">
        <span
          className="absolute transition-all duration-500 inline-block h-full bg-blue-500 "
          style={status ? { width: item.progress + "%" } : { width: "1px" }}
        ></span>
      </p>
    </li>
  );
}
