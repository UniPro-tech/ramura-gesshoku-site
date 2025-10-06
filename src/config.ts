export type Link = {
  href: string;
  label: string;
  target?: string;
};

export const LINKS: Link[] = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/download", label: "Download" },
  { href: "https://ramura.uniproject.jp/license", label: "License", target: "_blank" },
  { href: "https://ramura.uniproject.jp/contacts", label: "Contact", target: "_blank" },
];
