export const tabs = (member_no) => {
  return [
    { title: 'Profile Details', href: `/profile/${member_no}` },
    { title: 'Activity Logs', href: `/profile/${member_no}/activity-logs` },
    { title: 'Dive Trips', href: `/profile/${member_no}/dive-trips` },
    { title: 'Enrolled Courses', href: `/profile/${member_no}/courses` },
    { title: 'Licenses', href: `/profile/${member_no}/licenses` },
    { title: 'Documents', href: `/profile/${member_no}/docs` },
    {
      title: 'Profile Sharing',
      href: `/profile/${member_no}/sharing`,
      borderTop: true,
    },
    {
      title: 'Change Password',
      href: `/profile/${member_no}/change-password`,
      color: 'text-red-500',
    },
    {
      title: 'Logout',
      onClick: async (logout) => await logout(),
      color: 'text-red-500',
    },
    // { title: 'Support Tickets', component: <span>My Tickets</span> },
  ];
};

export const authMenuItems = (member_no) => {
  return [
    { name: 'Profile Details', href: `/profile/${member_no}`, children: false },
    {
      name: 'Activity Logs',
      href: `/profile/${member_no}/activity-logs`,
      children: false,
    },
    { name: 'Dive Trips', href: `/profile/${member_no}/dive-trips` },
    {
      name: 'Enrolled Courses',
      href: `/profile/${member_no}/courses`,
      children: false,
    },
    {
      name: 'Licenses',
      href: `/profile/${member_no}/licenses`,
      children: false,
    },
    { name: 'Documents', href: `/profile/${member_no}/docs` },
    {
      name: 'Profile Sharing',
      href: `/profile/${member_no}/sharing`,
      children: false,
    },
    {
      name: 'Change Password',
      href: `/profile/${member_no}/change-password`,
      color: 'text-red-500',
      children: false,
    },
  ];
};

export const bioMenuItems = (member_no) => {
  return [
    { name: 'Profile Details', href: `/bio/${member_no}`, children: false },
    {
      name: 'Licenses',
      href: `/bio/${member_no}/licenses`,
      children: false,
    },
  ];
};

export const bioTabs = (member_no) => {
  return [
    { title: 'Profile Details', href: `/bio/${member_no}` },
    { title: 'Licenses', href: `/bio/${member_no}/licenses` },
  ];
};

export const logTypes = {
  WALLET: {
    id: 1,
    type: 'wallet_activity',
    name: 'Balance',
  },
  TANK_REFILL: {
    id: 2,
    type: 'tank_refill',
    name: 'Tank refill',
  },
  TANK_REFILL_DETAIL: {
    id: 2,
    type: 'tank_refill_detail',
    name: 'Tank refill detail',
  },
  RENT: {
    id: 3,
    type: 'rental_sheet',
    name: 'Equipment Rental',
  },
  MAINTENANCE: {
    id: 5,
    type: 'maintenance',
    name: 'Maintenance',
  },
  BOOKING: {
    id: 5,
    type: 'booking',
    name: 'Booking',
  },
  COURSE: {
    id: 6,
    type: 'course_registration',
    name: 'Course',
  },
};
