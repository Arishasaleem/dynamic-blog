"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";



export default function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Introduction">
          <div className="flex flex-col space-y-4 text-sm sm:px-3 ">
            <HoveredLink href="/">Intro</HoveredLink>
        
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Disease">
  <div className="text-sm grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2n gap-9 p-4">
    <ProductItem
      title="Cancer"
      href="/cancer"
      src="/cancer.jpg"
      description="Symptoms and treatment of cancer."
    />
    <ProductItem
      title="Heart attack"
      href="/heart-attack"
      src="/heart attack.jpg"
      description="Why heart attack occurs and treatment."
    />
    <ProductItem
      title="Insomnia"
      href="/insomnia"
      src="/Insomnia.png"
      description="Why people have sleep issues and how to deal with them."
    />
    <ProductItem
      title="Kidney Stone"
      href="/kidney-stone"
      src="/kidney.jpg"
      description="What happens when kidney stones occur and how to remove them."
    />
  </div>
</MenuItem>

<MenuItem setActive={setActive} active={active} item="Other">
  <div className="flex flex-col space-y-4 text-sm sm:text-base">
    <HoveredLink href="/about">About</HoveredLink>
    <HoveredLink href="/contact">Contact</HoveredLink>
  </div>
</MenuItem>

      </Menu>
    </div>
  );
}
