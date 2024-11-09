"use client";

import Link from "next/link";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
import React from "react";

export default function Navbar() {
  const components: { title: string; href: string; description?: string }[] = [
    {
      title: "Allergies",
      href: "/allergies",
      description:
        "Learn about managing and treating allergy symptoms effectively.",
    },
    {
      title: "Anxiety",
      href: "/anxiety",
      description:
        "Explore resources for managing anxiety and improving mental well-being.",
    },
    {
      title: "Arthritis",
      href: "/arthritis",
      description:
        "Discover treatments and tips to manage arthritis pain and stiffness.",
    },
    {
      title: "Back Pain",
      href: "/back-pain",
      description:
        "Find relief options and exercises for back pain management.",
    },
    {
      title: "Chronic Pain",
      href: "/chronic-pain",
      description:
        "Understand chronic pain and explore ways to manage it effectively.",
    },
    {
      title: "Digestive Disorders",
      href: "/digestive-disorders",
      description:
        "Learn about digestive disorders and treatments for better gut health.",
    },
    {
      title: "Headaches",
      href: "/headaches",
      description: "Get insights into headache causes and remedies for relief.",
    },
    {
      title: "Infertility",
      href: "/infertility",
      description: "Explore infertility treatments and support resources.",
    },
    {
      title: "Insomnia",
      href: "/insomnia",
      description:
        "Find techniques and tips to improve sleep and treat insomnia.",
    },
    {
      title: "Neck Pain",
      href: "/neck-pain",
      description:
        "Discover ways to alleviate and prevent neck pain discomfort.",
    },
    {
      title: "Opioid Addiction",
      href: "/opioid-addiction",
      description:
        "Access resources for overcoming opioid addiction and finding support.",
    },
    {
      title: "Stress",
      href: "/stress",
      description:
        "Learn methods for reducing stress and enhancing relaxation.",
    },
  ];

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
              className="text-[--theme-color-text_dark] flex md:hidden cursor-pointer "
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
                        <Link href={page.path || ""}>{page.title}</Link>
                      </CommandItem>
                    ))}
                  </CommandGroup>
                  <CommandGroup heading="Acupuncture">
                    <CommandItem asChild>
                      <Link href="/acupuncture">Introduction</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/modern-research">Modern Research</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/faqs">FAQs</Link>
                    </CommandItem>
                  </CommandGroup>
                  <CommandGroup heading="Services">
                    <CommandItem asChild>
                      <Link href="/allergies">Allergies</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/anxiety">Anxiety</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/arthritis">Arthritis</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/back-pain">Back Pain</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/chronic-pain">Chronic Pain</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/digestive-disorders">
                        Digestive Disorders
                      </Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/headaches">Headaches</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/infertility">Infertility</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/insomnia">Insomnia</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/neck-pain">Neck Pain</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/opioid-addiction">Opioid Addiction</Link>
                    </CommandItem>
                    <CommandItem asChild>
                      <Link href="/stress">Stress</Link>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <NavigationMenu className="justify-end hidden md:flex">
        <NavigationMenuList className="gap-0">
          {pages.map((page) => (
            <NavigationMenuItem key={page.id}>
              <Link href={page.path} legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "bg-inherit")}
                >
                  {page.title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
          <NavigationMenuItem>
            <NavigationMenuTrigger>Services</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-3 lg:w-[600px] ">
                {components.map((component) => (
                  <ListItem
                    key={component.title}
                    title={component.title}
                    href={component.href}
                  >
                    {component.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Research</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                      href="/"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium">
                        Acupuncture
                      </div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Acupuncture is an effective form of medical treatment
                        that has evolved into a complete holistic health care
                        system.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <ListItem href="/acupuncture" title="Introduction">
                  Acupuncture is an effective form of medical treatment that has
                  evolved into a complete holistic health care system.
                </ListItem>
                <ListItem href="/modern-research" title="Modern Research">
                  {`Modern research has demonstrated acupuncture’s effects on the
                  nervous system, endocrine and immune systems, cardiovascular
                  system, and digestive system.`}
                </ListItem>
                <ListItem href="/faqs" title="FAQs">
                  {`What is Acupuncture? How does Acupuncture work? What is
                  Acupuncture used for?`}
                </ListItem>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
