import AboutData from "@/components/AboutDetails";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function About() {
  return (
    <section className=" !h-screen box-border">
      <Container>
        <SectionTitle
          title="About"
          breif={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias iure ipsum voluptatibus nobis consectetur ratione harum, molestiae esse vitae recusandae."
          }
        />
        <div className="flex justify-between mb-10">
          <div className="flex-[.33]">
            <div className="h-96 pb-3">
              <Image
                src={"/assest/images/c2.jpg"}
                width={1000}
                height={1000}
                alt=""
                className="rounded bg-cover w-full h-full"
              />
            </div>
          </div>
          <div className="flex-[.65] px-3">
            <h1 className="text-md font-semibold mb-2 text-gray-500">
              Ui/UX Designer &amp; Full Stack Developer
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus, dolorum!
            </p>
            <div className="mt-8">
              <AboutData />
            </div>
            <p className="text-sm">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta,
              laudantium non ullam libero fugit in! Illo reprehenderit quam
              doloremque ut voluptatum assumenda ducimus, labore provident.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
