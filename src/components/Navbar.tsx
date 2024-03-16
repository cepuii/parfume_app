import { Heart, Search, ShoppingBag } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className=" h-10 mx-6 p-6 bg-transparent flex justify-between text-neutral-100 text-3xl ">
      <div className="flex gap-x-6 ml-6 ">
        <Link href={"/"} className="hover:text-neutral-400 transition">
          Shop
        </Link>
        <Link href={"/"} className="hover:text-neutral-400 transition">
          About
        </Link>
        <Link href={"/"} className="hover:text-neutral-400 transition">
          Contacts
        </Link>
      </div>
      <div className="flex">
        <h1 className="mr-24">Brand.</h1>
      </div>
      <div className="flex gap-x-5 mr-6">
        <Link href={"/"} className="hover:text-neutral-400 transition">
          <Search className="w-10 h-10 bg-transparent" />
        </Link>
        <Link href={"/"} className="hover:text-neutral-400 transition">
          <Heart className="w-10 h-10 bg-transparent" />
        </Link>
        <Link href={"/"} className="hover:text-neutral-400 transition">
          <ShoppingBag className="w-10 h-10 bg-transparent" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
