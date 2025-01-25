"use client";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import SkillsItem from "@/components/SkillsItem";
import { skills } from "@/data/data";
import { useEffect, useState } from "react";

export default function Skills() {
  const [data, setData] = useState(skills);
  const [scroll, setScroll] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
    return () => {
      window.removeEventListener("scroll", () => {
        setScroll(window.scrollY);
      });
    };
  }, [scroll]);

  const handleActive = () => {
    let sectionPosition: HTMLElement | any = document.querySelector("#skills");
    let position = scroll + 500;

    if (
      position >= sectionPosition.offsetTop &&
      position <= sectionPosition.offsetTop + sectionPosition.offsetHeight
    ) {
      setActive(true);
    }
  };

  useEffect(() => {
    handleActive();
  }, [scroll]);

  return (
    <section className="" id="skills">
      <Container>
        <SectionTitle
          title="Skills"
          breif="Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, error modi."
        />
        <div className="flex justify-between ">
          <div className="flex-[.45]">
            <ul>
              {data
                .slice(0, data.length / 2)
                .map(
                  (skill: { id: number; skill: string; progress: number }) => (
                    <SkillsItem key={skill.id} item={skill} status={active} />
                  )
                )}
            </ul>
          </div>
          <div className="flex-[.45]">
            <ul>
              {data
                .slice(data.length / 2, data.length)
                .map(
                  (skill: { id: number; skill: string; progress: number }) => (
                    <SkillsItem key={skill.id} item={skill} status={active} />
                  )
                )}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
