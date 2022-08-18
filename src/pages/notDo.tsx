import { NotDoLayout } from "@/components/layout/notDo";
import { NotDo } from "@/components/page/notDo";

const notDoPage = (): JSX.Element => {
  return <NotDo />;
};

notDoPage.getLayout = NotDoLayout;

export default notDoPage;
