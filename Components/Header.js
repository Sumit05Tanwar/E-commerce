import React from "react";
import Link from "next/Link";

function Header() {
  return (
    <div className="flex h-12 justify-between shadow-md items-center">
      <div className="ml-2">
        <Link className="text-lg font-bold" href="/">
          Amazon
        </Link>
      </div>
      <div className="space-x-2 mr-2">
        <Link href="/cart">Cart</Link>
        <Link href="/login">Login</Link>
      </div>
    </div>
  );
}

export default Header;
