import { siteConfig } from "@/config/site";

export default function SiteCard() {
  return (
    <section className="pt-8 pb-8 mb-12 space-y-8 border-t border-gray-600 border-b">
      {/* <h1 className="my-2 text-main">{siteConfig.name}</h1> */}
      {/* <h1 className="my-2 text-main">聚焦海外-软件测试周刊</h1> */}
      <p>{siteConfig.description}</p>
      {/* <FooterLinks /> */}
    </section>
  );
}
