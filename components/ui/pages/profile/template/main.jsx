import { useContext } from 'react';
import { tabs } from '../data/data';
import Sidebar from '../parts/sidebar';
import ProfileContext from '../state/ProfileContext';

const MainProfileTemplate = ({ children }) => {
  const { profile } = useContext(ProfileContext);

  return (
    <div className="container pt-8 pb-10 md:py-16">
      <div className="grid gap-10 lg:grid-cols-9">
        <Sidebar profile={profile} tabs={tabs} />

        <div className="lg:col-span-7">{children}</div>
      </div>
    </div>
  );
};

export default MainProfileTemplate;
