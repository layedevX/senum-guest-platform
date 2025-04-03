"use client";

import { useState, useEffect, Fragment } from "react";
import { ExternalLink, ChevronDown, GlobeIcon } from "lucide-react";
import { cl, getLang } from "@/utils/misc";
import Link from "next/link";
import Image from "next/image";
import { useParams, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import services from "@/utils/services";
import { DEFAULT_LANG, LANG_COOKIE } from "@/utils/constants";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const pathname = usePathname();
  const dynamicStick = ["/"].includes(pathname);

  const langParam = useParams().lang as string | undefined;
  const lang = getLang(langParam);

  function toggleLang() {
    const nextLang = lang === "fr" ? "en" : "fr";
    document.cookie = `${LANG_COOKIE}=${nextLang};path=/`;
    window.location.replace(
      new URL(
        window.location.pathname.replace(new RegExp(`^\/${lang}`), `/${nextLang}`),
        window.location.href
      )
    );
  }

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the first section (hero section)
      // We can use window.innerHeight as an approximation, or target a specific section
      const scrollThreshold = window.innerHeight * 0.9; // 80% of the first viewport height

      if (window.scrollY > scrollThreshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    if (dynamicStick) {
      // Add scroll event listener
      window.addEventListener("scroll", handleScroll);

      // Initial check
      handleScroll();
    }

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Fragment>
      {(!dynamicStick || isSticky) && <div className="mt-[65px]"></div>}
      <header
        className={cl(
          "w-full h-[65px]",
          { "fixed top-0 left-0 right-0 z-50 bg-white": !dynamicStick || isSticky },
          { " shadow-md": isSticky },
          { "border-b border-gray-100 shadow-sm": !dynamicStick }
        )}>
        <div className="container flex h-16 items-center">
          <div className="flex-1">
            <Link href="/" className="flex items-center">
              <Image
                src="/orange.svg"
                alt="Heritage Cloud Logo"
                width={120}
                height={36}
                className="h-9 w-auto"
              />
            </Link>
          </div>
          <nav className="flex-1 flex justify-center gap-6 hidden md:flex">
            <Link
              href="/"
              className={`flex items-center text-sm font-medium ${
                pathname === "/"
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}>
              Overview
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger
                className={`flex items-center text-sm font-medium ${
                  pathname.startsWith("/services")
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                }`}>
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-80 p-2">
                <DropdownMenuItem className="p-2 mb-2 border-b border-gray-200 focus:bg-gray-100">
                  <Link
                    href="/services"
                    className="w-full text-center text-primary hover:underline">
                    View All Services
                  </Link>
                </DropdownMenuItem>
                {services.slice(0, 5).map(({ id, Icon, title, description }) => (
                  <DropdownMenuItem key={id} className="p-3 focus:bg-gray-100">
                    <Link
                      href={`/services/${id}`}
                      className="w-full flex items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{title}</div>
                        <div className="text-xs text-foreground/55 mt-1">
                          {description}
                        </div>
                      </div>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="/about"
              className={`flex items-center text-sm font-medium ${
                pathname === "/about"
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}>
              About
            </Link>
            {/* <Link
              href="/contact"
              className={`flex items-center text-sm font-medium ${
                pathname === "/contact"
                  ? "text-primary"
                  : "text-foreground/80 hover:text-primary"
              }`}
            >
              Contact
            </Link> */}
            <a
              href={
                "https://heritage.africa/register?source=" +
                "https://cloud.heritage.africa"
              }
              target="_blank"
              className="flex items-center text-sm font-medium text-foreground/80 hover:text-primary">
              Contact
              <ExternalLink className="ml-1 h-4 w-4" />
            </a>
          </nav>
          <div className="flex-1 flex justify-end items-center gap-[5px]">
            <Button
              size="sm"
              className="bg-white hover:bg-gray-100 text-gray-800 border border-gray-100"
              onClick={toggleLang}>
              <GlobeIcon /> <span>{lang?.toUpperCase()}</span>
            </Button>
            <a href="https://origins.heritage.africa">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-white w-full">
                Access Cloud
              </Button>
            </a>
          </div>
        </div>
      </header>
    </Fragment>
  );
}
