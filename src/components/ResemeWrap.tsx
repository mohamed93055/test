import ResumeItem from "./ResumeItem";

export default function ResemeWrap({
  items,
  start,
  end,
}: {
  items: [] | any;
  start: number;
  end: number;
}) {
  return (
    <div className="flex-1  h-fit">
      {items
        .splice(start, end)
        .map(
          async (item: { id: number; category: string; content: [string] }) => (
            <div key={item.id} className="mb-3 h-fit">
              <h1
                className={`font-semibold text-xl flex items-center capitalize mb-3`}
              >
                {item.category}
              </h1>
              <div className="relative  before:w-[1px] before:content-[''] before:bg-gray-500 before:absolute before:left-0 before:-translate-x-1/2 before:top-3 before:bottom-3 h-fit">
                {item.content &&
                  item.content.length > 0 &&
                  item.content.map(
                    (
                      content:
                        | {
                            title: string;
                            period: string;
                            berif: string;
                            details: [string];
                          }
                        | any,
                      index
                    ) => <ResumeItem key={index} item={content} />
                  )}
              </div>
            </div>
          )
        )}
    </div>
  );
}
