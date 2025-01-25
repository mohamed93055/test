export default function ResumeItem({
  item,
}: {
  item: {
    title: string;
    period: string;
    berif: string;
    details: [string];
  };
}) {
  return (
    <div className=" pl-5 pr-3 ">
      <h2 className="flex items-center font-semibold uppercase text-sky-700 text-sm py-2">
        {item.title}
        <span className=" w-4 h-4 rounded-full bg-white absolute content-[''] border-2 border-gray-500 left-0 -translate-x-1/2"></span>
      </h2>
      {item.period && (
        <h5 className="px-2 py-1 bg-gray-100 rounded w-fit my-2 font-bold text-sm">
          {item.period}
        </h5>
      )}
      {item.berif && (
        <p className="text-sm py-1">
          <em> {item.berif}</em>
        </p>
      )}

      {item.details && item.details.length > 0 && (
        <ul className="mt-1 list-disc ml-5">
          {item.details.map((line, index) => (
            <li key={index} className="py-1 text-sm">
              {line}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
