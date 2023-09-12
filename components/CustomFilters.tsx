"use client";
import { useState } from "react";
import { CustomFilterProps } from "@/types";
import { Listbox } from "@headlessui/react";
import React from "react";
import Image from "next/image";

const CustomFilters = ({ title, options }: CustomFilterProps) => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="w-fit">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative w-fit z-10">
          <Listbox.Button className="custom-filter__btn">
            <span>{selected.title}</span>{" "}
            <Image
              src="/chevron-up-down.svg"
              alt="hevron-up-down"
              width={20}
              height={20}
            />
          </Listbox.Button>
          <Listbox.Options></Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
};

export default CustomFilters;
