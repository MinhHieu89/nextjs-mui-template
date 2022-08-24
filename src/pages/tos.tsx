import { PublicLayout } from '../components/layout';
import { NextPageWithLayout } from './page';

const TermAndCondition: NextPageWithLayout = () => {
  return <div>Term And Condition</div>;
};

TermAndCondition.getLayout = (page: React.ReactNode) => {
  return <PublicLayout>{page}</PublicLayout>;
};

export default TermAndCondition;
