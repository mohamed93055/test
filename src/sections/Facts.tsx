"use client";
import Container from "@/components/Container";
import FactsItems from "@/components/FactsItems";
import SectionTitle from "@/components/SectionTitle";
import { facts } from "@/data/data";
import { useEffect, useState } from "react";

export default function Facts() {
  const [factsD, setFacts] = useState(facts);
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
    let sectionPosition: HTMLElement | any = document.querySelector("#facts");
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
    <section className="" id="facts">
      <Container>
        <SectionTitle
          title="Facts"
          breif={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit.Perferendis, ab odio voluptate corrupti enim architecto maiores voluptatum vel error modi."
          }
        />
        <div className="py-5">
          <ul className="flex justify-evenly">
            {factsD &&
              facts.length > 0 &&
              factsD.map(
                (fact: {
                  id: number;
                  name: string;
                  number: number;
                  icon: string;
                }) => <FactsItems item={fact} key={fact.id} status={active} />
              )}
          </ul>
        </div>
      </Container>
    </section>
  );
}
