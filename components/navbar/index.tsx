"use client";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { pages } from "@/data/pages";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <div className="flex items-center justify-between px-4 md:px-16 h-20">
      <div>
        <Link
          href="/"
          className="text-xl md:text-2xl lg:text-3xl text-[--theme-color-text_dark] tracking-tighter"
        >
          Wang Medical
        </Link>
      </div>
      <div>
        <Sheet>
          <SheetTrigger>
            <Menu
              size={24}
              className="text-[--theme-color-text_dark] flex md:hidden cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="w-full">
            <SheetHeader>
              <SheetTitle>
                <div className="text-start">
                  <Link
                    href="/"
                    className="text-xl md:text-2xl lg:text-3xl text-[--theme-color-text_dark] tracking-tighter"
                  >
                    Wang Medical
                  </Link>
                </div>
              </SheetTitle>
              <Command>
                <CommandInput placeholder="Search..." />
                <CommandList>
                  <CommandEmpty>No pages found.</CommandEmpty>
                  <CommandGroup heading="Pages">
                    {pages.map((page) => (
                      <CommandItem key={page.id} asChild>
                        <Link href={page.path}>{page.title}</Link>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        <div className="hidden md:flex items-center gap-4">
          {pages.map((page) => (
            <Link
              key={page.id}
              href={page.path}
              className={cn(
                "text-base hover:text-[--theme-color-text_dark]",
                page.path === path &&
                  "text-[--theme-color-text_dark] font-semibold"
              )}
            >
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
