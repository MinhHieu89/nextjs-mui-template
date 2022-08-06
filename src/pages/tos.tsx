import { PublicLayout } from '../components/layout';

const TermAndCondition: Page = () => {
	return <div>Term And Condition</div>;
};

TermAndCondition.getLayout = (page: React.ReactNode) => {
	return <PublicLayout>{page}</PublicLayout>;
};

export default TermAndCondition;
