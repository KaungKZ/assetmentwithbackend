import { createContext } from 'react';

const ProfileContext = createContext({
  profile: {},
  setProfile: () => {},
  activeTabIndex: 0,
  setActiveTabIndex: () => {},
});

export default ProfileContext;
