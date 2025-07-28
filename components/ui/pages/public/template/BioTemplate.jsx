import { useContext } from 'react';
import { bioTabs } from '../../profile/data/data';
import Sidebar from '../../profile/parts/sidebar';
import { BioContext } from '../store/BioContext';

const BioTemplate = ({ children }) => {
  const { bio } = useContext(BioContext);

  return (
    <div className="container min-h-[550px] py-12 md:py-16">
      <div className="grid gap-10 lg:grid-cols-9">
        <Sidebar profile={bio} tabs={bioTabs} />

        <div className="lg:col-span-7">{children}</div>
      </div>
    </div>
  );
};

export default BioTemplate;
