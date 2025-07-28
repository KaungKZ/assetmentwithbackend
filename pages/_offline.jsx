import Head from 'next/head';

const OfflinePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full px-6 py-10">
      <Head>
        <title>You are now offline!</title>
      </Head>

      <h1 className="text-2xl text-red-500">You are now offline!</h1>
      <p className="max-w-[500px] text-gray-500 font-light mt-3 text-center">
        Please connect to a network and try again! In the maintime, you could
        visit all the pages you have visited before.
      </p>
    </div>
  );
};

export default OfflinePage;
