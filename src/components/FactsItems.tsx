import CountUp from "react-countup";
export default function FactsItems({
  item,
  status,
}: {
  item: {
    id: number;
    name: string;
    number: number;
    icon: string;
  };
  status: boolean;
}) {
  return (
    <li className="text-center">
      <div className="h-10 w-10 rounded-full flex justify-center items-center bg-blue-500 m-auto mb-4">
        <i className={`${item.icon} text-2xl text-gray-50`}></i>
      </div>

      <p className="text-lg font-bold">
        {status ? <CountUp start={0} end={item.number} /> : 0}
      </p>
      <p className="capitalize text-sm">{item.name}</p>
    </li>
  );
}
