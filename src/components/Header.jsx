import Logo from "./Logo";

const Header = ({ children }) => {
  return (
    <header className='fixed top-0 w-full bg-gray-300 dark:bg-gray-900 flex flex-col md:flex-row justify-between py-5 z-20 shadow-2xl'>
      <Logo />
      {children}
    </header>
  );
};

export default Header;
