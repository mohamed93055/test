import Container from "@/components/Container";
import PortfolioItem from "@/components/PortfolioItem";
import SectionTitle from "@/components/SectionTitle";

async function getPortfolioData() {
  const res = await fetch("http://localhost:3000/api/portfolio");
  return res.json();
}

export default async function Portfolio() {
  const items: [] = await getPortfolioData();
  let filteredItems: [] | any = items;
  const category =
    items && items.map((item: { category: string }) => item.category);
  let uniqCategory: string[] = [];
  category.map((item: string) => {
    !uniqCategory.includes(item) && uniqCategory.push(item);
  });

  async function handleFilter(name: string) {
    if (name === "all") {
      filteredItems = items;
    } else {
      filteredItems = items.filter(
        (item: { category: string }) => item.category === name
      );
    }
  }
  handleFilter("web");
  console.log(filteredItems);
  return (
    <section>
      <Container>
        <SectionTitle
          title="Portfolio"
          breif="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis voluptas alias, impedit totam sed ex!"
        />
        <div className="mb-6">
          <ul className="flex justify-center gap-5">
            <li key={-1} className="uppercase text-sm">
              all
            </li>
            {items &&
              items.length > 0 &&
              uniqCategory.sort().map((item, index) => (
                <li key={index} className="uppercase text-sm">
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex flex-wrap justify-between">
          {items &&
            items.length > 0 &&
            items.map(
              (item: {
                id: number;
                img: string;
                gallery: [string];
                title: string;
                brief: string;
                category: string;
              }) => <PortfolioItem key={item.id} item={item} />
            )}
        </div>
      </Container>
    </section>
  );
}
