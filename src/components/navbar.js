import { useState } from "react";
import { HiOutlineMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [tombol, setTombol] = useState(true);

  return (
    <div>
      <div className="text-center pt-3 text-white md:px-20">
        <h1 className="text-6xl tracking-widest font-judul">abdi</h1>
        <div
          className="absolute top-9 right-5 md:hidden cursor-pointer"
          onClick={() => {
            setMenu(!menu);
            setTombol(!tombol);
          }}
        >
          <HiOutlineMenu
            size={"1.5em"}
            className={`${tombol ? "hidden" : "block"}`}
          />
          <HiX size={"1.5em"} className={`${tombol ? "block" : "hidden"}`} />
        </div>
        <div
          className={`md:flex justify-between text-putih absolute md:static bg-biru w-full py-5 ${
            menu ? "hidden" : "block"
          }`}
        >
          <div className="md:flex">
            <h1 className="text-md font-body mx-5 py-2 md:py-0">KEDAI ABDI</h1>
            <h1 className="text-md font-body mx-5 py-2 md:py-0">ABOUT US</h1>
          </div>
          <div className="md:flex">
            <h1 className="text-md font-body mx-5 py-2 md:py-0">FIND US</h1>
            <h1 className="text-md font-body mx-5 py-2 md:py-0">CONTACT US</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
