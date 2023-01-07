import logo from "../asset/logo.svg";

const Header = () => {
  return (
    <header className="flex flex-row h-20 bg-[#03748B] items-center">
      <img src={logo} alt="logo" />
      <h2 className="text-white text-xl md:text-3xl font-mono pt-3">
        ProgressPaver
      </h2>
    </header>
  );
};

export default Header;
