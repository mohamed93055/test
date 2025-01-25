export default function Container({
  children,
  width,
}: {
  children: React.ReactNode;
  width?: string;
}) {
  return (
    <div className={`w-[80%] m-auto p-10  ${width || ""}`}>{children}</div>
  );
}
