import Image from "next/image";

async function getAboutData() {
  const res = await fetch("http://localhost:3000/api/about");
  return res.json();
}

export default async function AboutDetailsS() {
  const details: [] | any = await getAboutData();
  return (
    <div className="flex">
      <div className="flex-1">
        <ul className="">
          {details
            .slice(0, details.length / 2)
            .map((detail: { id: number; name: string; value: string }) => (
              <li key={detail.id} className="mb-5">
                <span className="">
                  <Image
                    src={"/assest/images/next-grey.png"}
                    alt=""
                    height={1000}
                    width={1000}
                    className="w-2 inline mr-3"
                  />
                </span>
                <span className="capitalize font-bold text-sm">
                  {detail.name}
                </span>
                : <span className="text-sm">{detail.value}</span>
              </li>
            ))}
        </ul>
      </div>
      <div className="flex-1">
        <ul className="">
          {details
            .slice(details.length / 2, details.length)
            .map((detail: { id: number; name: string; value: string }) => (
              <li key={detail.id} className="mb-5">
                <span className="">
                  <Image
                    src={"/assest/images/next-grey.png"}
                    alt=""
                    height={1000}
                    width={1000}
                    className="w-2 inline mr-3"
                  />
                </span>
                <span className="capitalize font-bold text-sm">
                  {detail.name}
                </span>
                : <span className="text-sm">{detail.value}</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
