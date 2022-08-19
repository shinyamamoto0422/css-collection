import Link from "next/link";
import { VFC } from "react";

const items = [
  { href: "/", label: "Home" },
  { href: "/notDo", label: "〇〇集" },
  { href: "/rayout", label: "レイアウト" },
  { href: "basic", label: "基礎技術" },
];

export const Header: VFC = () => {
  return (
    <nav className="w-screen bg-gray-800 font-mono">
      <div className="flex h-12 items-center pl-4">
        <div className="flex space-x-1 text-sm">
          {items.map(({ href, label }) => {
            return (
              <Link href={href} key={href}>
                <a className="rounded px-3 py-2 text-gray-300 hover:bg-gray-700">{label}</a>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
