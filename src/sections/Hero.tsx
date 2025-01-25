"use client";
import SocialItem from "@/components/SocialItem";
import { ReactTyped } from "react-typed";

export default function Hero() {
  return (
    <section className="h-screen flex justify-center items-center p-10 hero">
      <div className="">
        <p className="font-bold text-4xl capitalize relative">Lorem dolor.</p>
        <span className="text-xl mt-2 relative">
          I,m{" "}
          <ReactTyped
            strings={["Designer", "Developer"]}
            typeSpeed={100}
            backSpeed={50}
            backDelay={2000}
            loop
            startDelay={100}
            className="text-blue-800"
          />
        </span>
        <span className="flex gap-3 mt-5 relative">
          <SocialItem />
        </span>
      </div>
    </section>
  );
}
