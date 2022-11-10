import Logo from "../Logo/Logo";
import Anchor from "../Anchor/Anchor";
import MobileNav from "../Anchor/MobileNav";

const Navbar = () => {
  const gradient = `bg-gradient-to-b from-stone-400 via-stone-300 via-stone-200 to-stone-100 hover:bg-gradient-to-b hover:from-stone-500 hover:via-stone-400 hover:via-stone-300 hover:to-stone-200`;

  return (
    <nav
      className={`transition-d mix-blend-plus-lighter hover:mix-blend-exclusion z-50 shadow-lg fixed top-0 w-screen grid grid-cols-[minmax(40px,_0.12fr)_1fr] grid-rows-[9vh] gap-36 ${gradient} opacity-95`}
    >
      <Logo />
      <Anchor />
      <MobileNav />
    </nav>
  );
};
// export default Navbar;
