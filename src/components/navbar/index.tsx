import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="h-20 w-full bg-muted flex justify-center items-center border-b shadow-md">
      <div className="md:max-w-[80%] w-full flex items-center justify-between">
        <div>
          <Image width={200} height={80} src={"/Scrap-Vendor-Logo.webp"} alt="Logo" />
        </div>
        <div className="flex items-center justify-end gap-5 text-primary">
          <Link href={"#"} className="hover:underline hover:font-bold transition-all">
            Home
          </Link>
          <Link href={"#"} className="hover:underline hover:font-bold">
            Why Us
          </Link>
          <Link href={"#"} className="hover:underline hover:font-bold">
            Scrap Rates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
