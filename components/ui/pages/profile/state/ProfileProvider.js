import { useReducer } from 'react';
import ProfileContext from './ProfileContext';

const initialState = {
  profile: {},
  activeTabIndex: 0,
};

const ProfileReducer = (state, action) => {
  if (action.type === 'SET_PROFILE') {
    return {
      ...state,
      profile: action.payload,
    };
  }
  if (action.type === 'SET_ACTIVE_TAB') {
    return {
      ...state,
      activeTabIndex: action.payload,
    };
  }
  return state;
};

const ProfileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProfileReducer, initialState);

  const values = {
    profile: state.profile,
    setProfile: (profile) =>
      dispatch({ type: 'SET_PROFILE', payload: profile }),
    activeTabIndex: state.activeTabIndex,
    setActiveTabIndex: (index) =>
      dispatch({ type: 'SET_ACTIVE_TAB', payload: index }),
  };

  return (
    <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
  );
};

export default ProfileProvider;
