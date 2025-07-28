import BioLayout from '../../../components/layouts/BioLayout';
import Licenses from '../../../components/ui/pages/public/tabs/licenses';
import BioTemplate from '../../../components/ui/pages/public/template/BioTemplate';

const PublicBioPage = () => {
  return (
    <BioTemplate>
      <Licenses />
    </BioTemplate>
  );
};

export default PublicBioPage;

PublicBioPage.getLayout = function getLayout(page) {
  return <BioLayout>{page}</BioLayout>;
};
