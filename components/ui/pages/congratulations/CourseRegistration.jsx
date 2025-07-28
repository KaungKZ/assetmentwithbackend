import { useRouter } from 'next/router';
import SimpleButton from '../../buttons/SiimpleButton';
import Message from '../../Message';
import { BiCheckCircle } from 'react-icons/bi';
import MyConfetti from '../../MyConfetti';

const CourseRegistration = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <Message
        icon={<BiCheckCircle size={120} />}
        heading={`Congratulations${data.first_name && ', ' + data.first_name}!`}
        line1={
          <span>
            You are on your way to becoming a master of the deep! You have
            successfully registered for the{' '}
            <span className="text-black">{data.course_name}</span>.
          </span>
        }
        line2="Please check your email now for all the adventure details."
        action={
          <SimpleButton onClick={() => router.push('/')}>
            Back To Home
          </SimpleButton>
        }
      />
      <MyConfetti />
    </>
  );
};

export default CourseRegistration;
