import { NotDoLayout } from "@/components/layout/notDo";
import { Basic } from "@/components/page/basic";

const basicPage = (): JSX.Element => {
  return <Basic />;
};

basicPage.getLayout = NotDoLayout;

export default basicPage;
