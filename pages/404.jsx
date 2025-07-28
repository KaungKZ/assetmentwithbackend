import { NextSeo } from 'next-seo';
import Link from 'next/link';

const Error404 = () => {
  return (
    <>
      <NextSeo
        title="404 | Scuba Diving Dubai | Bermuda Diving Center"
        description="404 | Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
        canonical={`${process.env.NEXT_PUBLIC_SELF_URL}/404`}
      />

      <div className="flex items-center h-screen px-4 py-16 bg-white sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="mx-auto max-w-max">
          <main className="sm:flex">
            <p className="mb-4 text-2xl font-bold tracking-tight text-bermuda-100 sm:text-4xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Page not found
                </h1>
                <p className="mt-4 text-base text-gray-500">
                  Oops... The page you are looking for does not exist.
                </p>
              </div>
              <div className="flex space-x-3 mt-7 sm:border-l sm:border-transparent sm:pl-6">
                <Link
                  href="/"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-bermuda-100 hover:bg-bermuda-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
                >
                  Go back home
                </Link>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Error404;
