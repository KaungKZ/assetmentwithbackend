import BioLayout from '../../../components/layouts/BioLayout';
import Bio from '../../../components/ui/pages/public/tabs/bio';
import BioTemplate from '../../../components/ui/pages/public/template/BioTemplate';

const PublicBioPage = () => {
  return (
    <BioTemplate>
      <Bio />
    </BioTemplate>
  );
};

export default PublicBioPage;

PublicBioPage.getLayout = function getLayout(page) {
  return <BioLayout>{page}</BioLayout>;
};
