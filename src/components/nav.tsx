"use client";

import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const navigationLinks = [
  { href: "/", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  function isActive(href: string) {
    return pathname === href || (href !== "/" && pathname.startsWith(href));
  }

  return (
    <NavigationMenu className="h-full *:h-full">
      <NavigationMenuList className="h-full gap-2">
        {navigationLinks.map((link) => (
          <NavigationMenuItem key={link.label.toLowerCase()} className="h-full">
            <NavigationMenuLink
              active={isActive(link.href)}
              href={link.href}
              className="h-full justify-center rounded-none border-b-2 border-transparent py-1.5 font-medium text-muted-foreground hover:border-b-primary hover:bg-transparent hover:text-primary focus:bg-transparent data-active:border-b-primary data-active:bg-transparent data-active:focus:bg-transparent data-active:hover:bg-transparent"
            >
              {link.label}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
