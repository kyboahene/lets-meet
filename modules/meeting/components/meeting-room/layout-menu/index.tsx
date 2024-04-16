import React from "react";
import { LayoutList } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/modules/shared/dropdown-menu";
import { LayoutType } from "@/lib/types";

type Props = {
  setLayout: (value: LayoutType) => void;
};

const LayoutMenu = ({ setLayout }: Props) => {
  return (
    <DropdownMenu>
      <div className="flex items-center">
        <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
          <LayoutList size={20} className="text-white" />
        </DropdownMenuTrigger>
      </div>
      <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
        {["Grid", "Speaker-Left", "Speaker-Right"].map((i, index) => (
          <div key={index}>
            <DropdownMenuItem
              className="cursor-pointer"
              onClick={() => setLayout(i.toLowerCase() as LayoutType)}
            >
              {i}
            </DropdownMenuItem>
            <DropdownMenuSeparator className="border-dark-1" />
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LayoutMenu;
