import todoLogo from "./assets/img/Logo.svg";

export function Header() {
  return (
    <header className="w-full h-52 bg-zinc-900 flex justify-center items-center">
      <img src={todoLogo} alt="logo todo" />
    </header>
  );
}
