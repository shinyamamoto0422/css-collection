import { NotDoLayout } from "@/components/layout/notDo";
import { Rayout } from "@/components/page/rayout";

const rayoutPage = (): JSX.Element => {
  return <Rayout />;
};

rayoutPage.getLayout = NotDoLayout;

export default rayoutPage;
