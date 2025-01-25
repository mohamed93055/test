import Container from "@/components/Container";
import ResemeWrap from "@/components/ResemeWrap";
import SectionTitle from "@/components/SectionTitle";

const getResumeData = async () => {
  const res = await fetch("http://localhost:3000/api/resume");
  return res.json();
};

export default async function Resume() {
  const items: [] | any = await getResumeData();

  return (
    <section>
      <Container>
        <SectionTitle
          title="resume"
          breif="dolor sit amet consectetur adipisicing elit. Totam eveniet cumque necessitatibus nihil minima, ab ut id adipisci praesentium reprehenderit aperiam perferendis facere maxime."
        />
        <div className="flex">
          {items && (
            <>
              <ResemeWrap
                items={items}
                start={0}
                end={Math.ceil(items.length / 2)}
              />
              <ResemeWrap
                items={items}
                start={Math.floor(items.length / 2) - 1}
                end={items.length}
              />
            </>
          )}
        </div>
      </Container>
    </section>
  );
}
