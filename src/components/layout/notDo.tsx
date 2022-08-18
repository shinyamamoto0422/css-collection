import { VFC } from "react";

import { Footer } from "./Footer";
import { Header } from "./Header";

export const NotDoLayout: VFC = (page) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <Header />
      </header>
      <main className="flex-1 bg-gray-100 font-mono px-4">{page}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
