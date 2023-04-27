import Contanier from "../Contanier";
import Logo from "./Logo";
const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Contanier>
          <div className="flex flex-row items-center justify-between gap-3 ">
            <Logo />
          </div>
        </Contanier>
      </div>
    </div>
  );
};

export default Navbar;
