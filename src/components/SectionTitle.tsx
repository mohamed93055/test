export default function SectionTitle({
  title,
  breif,
}: {
  title: string;
  breif: string;
}) {
  return (
    <div className="flex flex-col mb-8">
      <h1 className={`text-2xl text-center w-full font-bold a mb-8`}>
        {title}
      </h1>
      <p className="text-center text-sm">{breif}</p>
    </div>
  );
}
