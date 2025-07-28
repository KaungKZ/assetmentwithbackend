import Link from 'next/link';
import WrapWithBg from '../../../internals/wrapper/WrapWithBg';

const InvalidRequest = () => {
  return (
    <WrapWithBg width="lg:w-[600px]" minHeight="min-h-screen">
      <div className="flex flex-col items-center mb-5 text-center">
        <h1 className="lg:w-[350px] text-lg font-bold lg:text-xl">
          Hello dear,
        </h1>
        <p className="lg:w-[400px] mt-2">
          The link you provided appears to be invalid. Please verify the link
          and try again or <Link href="/contact">contact us </Link> if you
          believe this to be an error.
        </p>
      </div>
    </WrapWithBg>
  );
};

export default InvalidRequest;
