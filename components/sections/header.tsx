import { Div, Header as Header3 } from "components/html-elements";
import React, { FC, useEffect, useState } from "react";
import { IoLogoGithub, IoLogoTwitter } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";
import { ColorTheme } from "use-color-theme";

import { HeaderBanner } from "../header-banner";
import { HeaderDesktop } from "../header-desktop";
import { HeaderMobile } from "../header-mobile";

type HeaderProps = {
  colorTheme: ColorTheme;
  currentRoute: string;
};

export const navData = {
  logo: { href: "/#hero", src: "/logo.svg", alt: "Tellmann Logo" },
  nav: [
    { href: "/#hero", title: "Home", alt: "Hi.", mobile: true },
    { href: "/#services", title: "Services", alt: `What we can do` },
    { href: "/#work", title: "Work", alt: `What we've done` },
    { href: "/pricing", title: "Pricing", alt: `What we charge` },
    { href: "/blog", title: "Blog", alt: "What we write" },
    { href: "/#about", title: "About", alt: "Who we are" },
    { href: "/contact", title: "Contact", alt: `Get in touch`, mobile: true },
  ],
  navButton: { href: "/contact", title: "Contact" },
  address: {
    title: `Visit our Office:`,
    address1: "21 Pepper Street",
    address2: "3rd Floor - C/O Ademas Solutions",
    city: "Cape Town",
    country: "South Africa",
  },
  // email: "info@tellmann.co.za",
  // tel: "076 393 4356",
  socialNav: [
    // {
    //   href: "https://www.facebook.com/Lunalemon.dev",
    //   icon: <IoLogoFacebook title="Facebook" />,
    //   target: "_blank",
    // },
    {
      href: "https://medium.com/@XSwap_Protocol",
      icon: <FaMediumM title="Medium" />,
      target: "_blank",
    },
    {
      href: "https://github.com/XSwapProtocol",
      icon: <IoLogoGithub title="Github" />,
      target: "_blank",
    },
    {
      href: "https://twitter.com/i/flow/login?redirect_after_login=%2FXSwapProtocol",
      icon: <IoLogoTwitter title="Twitter" />,
      target: "_blank",
    },
    {
      href: "https://t.me/real_XSwapProtocol",
      icon: <FaTelegramPlane title="Telegram" />,
      target: "_blank",
    },
    {
      href: "https://discord.com/invite/gKhvwgGx6E",
      icon: <FaDiscord title="Discord" />,
      target: "_blank",
    },
  ],
  slogan: "Your Partners in Online Success",
};

export const Header: FC<HeaderProps> = ({ colorTheme, currentRoute }) => {
  const [showBanner, setShowBanner] = useState(true);
  const [showMobileNav, setShowMobileNav] = useState(false);

  function toggleMobileNav() {
    setShowMobileNav(!showMobileNav);
  }

  useEffect(() => {
    if (currentRoute.includes("contact")) {
      setShowBanner(false);
    }
    showBanner
      ? document.documentElement.style.setProperty("--header-banner-height", "40px")
      : document.documentElement.style.setProperty("--header-banner-height", "0px");
  }, [showBanner, currentRoute]);

  return (
    <>
      <Header3
        boxShadow="inset 0 -1px 0 0 rgba(var(--color-text-rgb), 0.1)"
        d="flex"
        direction="column"
        mt={showBanner ? 0 : -40}
        position="sticky"
        top={-40}
        transition="box-shadow .1s ease 0s, margin-top 0.1s ease 0s"
        width="100%"
        zIndex={10}
      >
        <HeaderBanner
          href="/contact"
          showMobileNav={showMobileNav}
          title={[
            <>Not on Shopify yet? Get a full page review</>,
            <>Not on Shopify yet? Get a full page review and we will get you started</>,
          ]}
          onClose={() => setShowBanner(false)}
        />
        <HeaderDesktop theme={colorTheme.value} toggleColor={colorTheme.toggle} {...navData} />
        <HeaderMobile
          showMobileNav={showMobileNav}
          theme={colorTheme.value}
          toggleColor={colorTheme.toggle}
          toggleMobileNav={toggleMobileNav}
          {...navData}
        />
        <Div
          backdropFilter="saturate(180%) blur(20px)"
          backgroundColor="--header-background"
          h="100%"
          left={0}
          position="absolute"
          top="-1px"
          w="100%"
          zIndex={-3}
        />
      </Header3>
    </>
  );
};
