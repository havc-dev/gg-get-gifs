import LogoFooter from "./LogoFooter";

const Footer = () => {
  const currentYear = new Date();
  return (
    <footer className='fixed bottom-0 w-full inset-x-0 justify-center bg-gray-50 dark:bg-gray-900 py-5 flex'>
      <p className='text-center'>
        All rights reserved &reg; <LogoFooter /> {currentYear.getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
