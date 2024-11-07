import { SiteConfig } from "@/types/siteConfig";
import { BsWechat } from "react-icons/bs";
import { SiJuejin } from "react-icons/si";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL;
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME;
const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;
const AUTHOR_NAME = process.env.NEXT_PUBLIC_AUTHOR_NAME;
// const TWITTER_USERNAME = process.env.NEXT_PUBLIC_TWITTER_USERNAME;

const baseSiteConfig = {
  name: SITE_NAME || ' Dancing Around Software Testing',
  description: SITE_DESCRIPTION || 'Focus on the latest news from the world of software testing. We provide a weekly newsletter to —— 获取海外软件测试行业每周快讯。',
  url: SITE_URL || 'https://weekly.funfox.icu',
  metadataBase: '/',
  keywords: ["软件测试", "Testing", "软件测试", "周刊", "聚焦海外-软件测试周刊"],
  authors: [
    {
      name: AUTHOR_NAME || 'FunFox',
      url: SITE_URL || 'https://weekly.funfox.icu',
      // twitter: `https://x.com/${TWITTER_USERNAME || 'weijunext'}`,
    }
  ],
  creator: `@${AUTHOR_NAME}`,
  defaultNextTheme: 'light', // next-theme option: system | dark | light
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: 'issues', text: '博客', href: "https://www.funfox.icu" },
    // { name: 'repo', href: "https://github.com/weijunext/gapis.money", icon: BsGithub },
    // { name: 'twitter', href: "https://x.com/weijunext", icon: BsTwitterX },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    // { name: 'twitter', href: "https://x.com/weijunext", icon: BsTwitterX },
    // { name: 'twitter_en', href: "https://x.com/wayne_dev", icon: SiTwitter },
    // { name: 'github', href: "https://github.com/weijunext/", icon: BsGithub },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee },
    { name: 'juejin', href: "https://juejin.cn/user/165374705019225", icon: SiJuejin },
    { name: 'weChat', href: "/make-a-friend", icon: BsWechat },
    // { name: 'email', href: "mailto:weijunext@gmail.com", icon: MdEmail },
  ],
  footerProducts: [
    // { url: 'https://weijunext.com/', name: 'J实验室' },
    // { url: 'https://gapis.money/', name: '独立开发者出海周刊' },
    // { url: 'https://smartexcel.cc/', name: 'Smart Excel' },
    // { url: 'https://weekly.weijunext.com/', name: 'Weekly Boilerplate' },
    // { url: 'https://landingpage.weijunext.com/', name: 'Landing Page Boilerplate' },
    // { url: 'https://nextjs.weijunext.com/', name: 'Next.js Practice' },
    // { url: 'https://starter.weijunext.com/', name: 'Next.js Starter' },
    // { url: 'https://github.com/weijunext/indie-hacker-tools', name: 'Indie Hacker Tools' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: baseSiteConfig.url,
  //   title: baseSiteConfig.name,
  //   description: baseSiteConfig.description,
  //   siteName: baseSiteConfig.name,
  //   images: [`${baseSiteConfig.url}/og.jpg`],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: baseSiteConfig.name,
  //   site: baseSiteConfig.url,
  //   description: baseSiteConfig.description,
  //   images: [`${baseSiteConfig.url}/og.jpg`],
  //   creator: baseSiteConfig.creator,
  // },
}
