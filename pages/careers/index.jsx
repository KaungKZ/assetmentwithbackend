import React from 'react';
import GuestLayout from '../../components/layouts/GuestLayout';
import Banner from '../../components/ui/internals/sections/banner';
import Breadcrumb from '../../components/ui/internals/sections/banner/Breadcrumb';
import CareersForm from '../../components/ui/pages/careers/CareersForm';
import Image from 'next/image';
import { getAssetsUrl } from '../../lib/func/image';

const CareersPage = () => {
  return (
    <div>
      <Banner
        image={{
          src: getAssetsUrl('/images/pages/contact/banner.png'),
          alt: 'Careers Banner - Bermuda',
        }}
        heading="Dive into Your Dream Career"
        description="Join Our Team and Begin a Journey of Discovery – Where Your Passion Leads to a Rewarding Career Path"
        breadcrumb={<Breadcrumb lv1T="Careers" />}
        size="h-[400px]"
        txtBoxMT="mt-[90px]"
        tabbyPresent={false}
      />

      <div className="container py-16 space-y-3 lg:px-8 max-w-7xl">
        <div className="grid gap-12 sm:grid-cols-2">
          <div className="pb-10 border-b border-gray-200 sm:pb-0 sm:border-b-0">
            <div className="mb-4 space-y-6">
              <h2 className="text-xl">
                Join Our Team: Where Passion Meets the Ocean!
              </h2>

              <div className="relative overflow-hidden rounded">
                <Image
                  src={getAssetsUrl('/images/pages/contact/banner.png')}
                  alt="Why Join Us?"
                  width={400}
                  height={200}
                  className="object-cover w-full h-full rounded"
                />
              </div>

              <div className="space-y-2">
                <p className="text-[16px]">
                  At Bermuda Diving Center, your career is an ongoing journey of
                  discovery and professional growth. Plus, you&apos;ll be part
                  of a meaningful movement to protect our oceans.
                </p>

                <p className="text-[16px]">
                  We&apos;re more than just a diving center; we&apos;re a family
                  of ocean lovers committed to bringing the marvels of the deep
                  blue to life. Our team is the backbone of unforgettable diving
                  experiences, driven by our love for the sea and dedication to
                  top-notch service.
                </p>

                <p className="text-[16px]">
                  Ready for a career that&apos;s as boundless as the seas?
                  Explore our job openings and let&apos;s embark on this journey
                  together!
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">
              <h2 className="text-xl">Application Form</h2>
              <p className="text-sm">
                Fill out the form to take the first step towards an exciting and
                rewarding career with us!
              </p>
            </div>

            <CareersForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;

CareersPage.getLayout = function getLayout(page) {
  return <GuestLayout>{page}</GuestLayout>;
};
