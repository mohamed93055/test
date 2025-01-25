import Image from "next/image";

export default function PortfolioItem({
  item,
}: {
  item: {
    id: number;
    img: string;
    gallery: [string];
    title: string;
    brief: string;
    category: string;
  };
}) {
  return (
    <div className="w-1/3 p-2">
      <Image src={item.img} width={1000} height={1000} alt="" />
    </div>
  );
}
