import Nav from "./Nav";

export default function Header() {
  return (
    <header className="fixed h-[100vh] flex justify-center flex-col pl-4 z-50">
      <Nav />
    </header>
  );
}
