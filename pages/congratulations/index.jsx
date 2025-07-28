import { useEffect, useState } from 'react';
import WrapWithBg from '../../components/ui/internals/wrapper/WrapWithBg';
import CourseRegistration from '../../components/ui/pages/congratulations/CourseRegistration';
import DSDRegistration from '../../components/ui/pages/congratulations/DSDRegistration';

const CongratulationsPage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('congratulations')));
  }, []);

  return (
    <WrapWithBg minHeight="h-screen">
      {data.from === 'dsd_registration' && <DSDRegistration data={data} />}
      {data.from === 'course_registration' && (
        <CourseRegistration data={data} />
      )}
    </WrapWithBg>
  );
};

export default CongratulationsPage;
