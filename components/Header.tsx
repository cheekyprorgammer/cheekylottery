import React from "react";
import NavButton from "./NavButton";
import { Bars3BottomRightIcon } from "@heroicons/react/24/solid";
import { useAddress, useDisconnect } from "@thirdweb-dev/react";

type Props = {};

function Header({}: Props) {
  const address = useAddress();
  const disconnect = useDisconnect();

  return (
    <header className="grid grid-cols-2 md:grid-cols-5 justify-between items-center p-4">
      <div className="flex items-center space-x-2 p-2">
        <img
          className="rounded-full h-16 w-16"
          src="https://i.imgur.com/4h7mAu7.png"
          alt="Cheekylottery"
        />
        <div>
          <h1 className="text-lg text-white font-bold">CheekyLottery</h1>
          <p className="text-xs text-emerald-500 truncate lowercase">
            User: {address?.substring(0, 5)}...
            {address?.substring(address?.length, address?.length - 5)}
          </p>
        </div>
      </div>

      <div className="hidden md:flex md:col-span-3 items-center justify-center">
        <div className="bg-[#0A1F1C] p-1 space-x-1 rounded-md">
          <NavButton title="Buy Tickets" isActive />
          <NavButton onClick={disconnect} title="Logout" />
        </div>
      </div>

      <div className="flex flex-col ml-auto text-right">
        <Bars3BottomRightIcon className="text-white h-8 w-8 cursor-pointer mx-auto" />
        <span className="md:hidden">
          <NavButton onClick={disconnect} title="Logout" />
        </span>
      </div>
    </header>
  );
}

export default Header;
