import FixedMenu from '../../../layouts/header/FixedMenu';
import LinkButton from '../../buttons/LinkButton';
import Banner from '../../internals/sections/banner';
import Breadcrumb from '../../internals/sections/banner/Breadcrumb';
import About from './parts/About';
import ContentGroup from '../../internals/sections/content-group';
import Featured from '../../internals/sections/featured';
import How from './parts/How';
import MoreInfo from './parts/MoreInfo';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { siteConfig } from '../../../../lib/config';
import Divider from '../../internals/parts/Divider';
import Promotion from './parts/promotion/Promotion';
import { shuffleArray } from '../../../../lib/func/array';
import { getPackageVatTotal } from '../../../../lib/func/money';
import Testimonials from '../../pages/home/testimonials';

const CourseTemplate = ({
  pageData,
  course,
  google,
  noRelated = false,
  available = true,
  hasSEO = true,
  featuredText,
}) => {
  const router = useRouter();

  const price = course ? course.price : pageData.details.price;
  const currentDate = new Date();
  const expiredDate = new Date(course?.promo_expired_at || '');
  const courseTitle =
    course.id === 8 ? 'Certified Boat Dive Trip' : course.name;

  const checkoutPrice = useCallback(() => {
    if (course) {
      if (course?.promo_price > 0) {
        return course?.promo_price;
      } else {
        return course?.price;
      }
    }
  }, [course]);
  const packageVatTotal = getPackageVatTotal(checkoutPrice(), 1);

  useEffect(() => {
    localStorage.setItem(
      'reservation',
      JSON.stringify({
        heading: course.short_name,
        id: course.id,
        price: course?.price,
        promoPrice: course?.promo_price,
        from: course ? course.from : course?.type,
        noOfPeople: 1,
        addOnsTotal: 0,
        subTotal: checkoutPrice() * 1 + packageVatTotal,
        packageVatTotal,
        total: checkoutPrice() * 1 + packageVatTotal,
        addOns: shuffleArray(course?.add_ons),
        registered_from: 'public_web',
        currentStep: 1,
        paymentMethod: '',
      })
    );
  }, [course, checkoutPrice, packageVatTotal]);

  return (
    <>
      {hasSEO && (
        <NextSeo
          title={`${courseTitle} | PADI Courses | Bermuda Diving Center`}
          description="Scuba diving Dubai, fish interaction Jumeira Discover scuba dive at sunset beach. Try Scuba Diving Tour in Dubai enjoy fish interaction underwater with Bermuda Diving Center"
          canonical={`${process.env.NEXT_PUBLIC_SELF_URL}${router?.asPath}`}
          openGraph={{
            type: 'website',
            url: `${process.env.NEXT_PUBLIC_SELF_URL}${router?.asPath}`,
            locale: 'en_gb',
            siteName: siteConfig.site.title,
            images: [
              {
                url: `${process.env.NEXT_PUBLIC_SELF_URL}/${pageData.banner.image.src}`,
                width: 800,
                height: 600,
                alt: 'Bermuda Diving Center',
              },
            ],
          }}
        />
      )}

      <Banner
        image={{
          src: pageData.banner.image.src,
          alt: pageData.banner.image.alt,
        }}
        heading={course ? course.short_name : pageData.details.heading}
        price={price}
        promoPrice={course ? course?.promo_price : pageData.details.promo_price}
        vat={course ? course.vat : pageData.details.vat}
        tagline={pageData.banner.tagline}
        breadcrumb={
          <Breadcrumb
            lv1T={pageData.banner.breadcrumb.lv1T}
            lv1L={pageData.banner.breadcrumb.lv1L}
            lv2T={pageData.banner.breadcrumb.lv2T}
            lv3L={pageData.banner.breadcrumb.lv3L}
            lv3T={pageData.banner.breadcrumb.lv3T}
          />
        }
        description={pageData.banner.description}
        button={
          <LinkButton
            trackingId={pageData.banner.button.trackingId}
            lg
            uppercase
            href={pageData.banner.button.href}
          >
            {pageData.banner.button.text}
          </LinkButton>
        }
        featuredText={featuredText}
      />

      {course?.promo_price &&
      course?.promo_price > 0 &&
      course?.promo_expired_at &&
      expiredDate > currentDate ? (
        <Promotion
          link={pageData.banner.button.href}
          price={course.price}
          promoPrice={course.promo_price}
          expiredAt={course.promo_expired_at || '2023-05-30T10:48:03'}
        />
      ) : null}

      <div className="container py-16">
        <How
          heading={pageData.how.heading}
          description={pageData.how.description}
          steps={pageData.how.steps}
        />
      </div>

      {/* <GiftCard title={courseTitle} /> */}

      <div className="container mb-16 lg:mb-24 lg:mt-4">
        <About
          heading={pageData.about.heading}
          description={pageData.about.description}
          cols={pageData.about.cols}
          includes={pageData.about.includes}
          heading2={pageData.about.heading2}
          description2={pageData.about.description2}
          video={pageData.about.video}
          sideImage={
            pageData.about.sideImage
              ? {
                  src: pageData.about.sideImage.src,
                  alt: pageData.about.sideImage.alt,
                }
              : {}
          }
        />
      </div>

      <Featured
        heading={pageData.featured.heading}
        description={pageData.featured.description}
        imgUrl={pageData.featured?.image?.src || null}
        imgAlt={pageData.featured?.image?.alt || null}
        price={checkoutPrice()}
        sideImg={
          pageData.featured?.sideImage?.src
            ? {
                src: pageData.featured?.sideImage?.src || null,
                alt: pageData.featured?.sideImage?.alt || null,
              }
            : {}
        }
        button={
          <LinkButton
            uppercase
            lg
            href={pageData.featured.button.href}
            className="bg-gray-800 hover:bg-gray-600"
          >
            {pageData.featured.button.text}
          </LinkButton>
        }
        opposite={
          <LinkButton
            uppercase
            lg
            opposite
            href={pageData.featured.opposite.href}
            className="text-gray-800 hover:text-gray-600 hover:bg-gray-50"
          >
            {pageData.featured.opposite.text}
          </LinkButton>
        }
      />

      {/* {includedUrls && (
        <div className="py-10 text-center border-b border-gray-800 md:hidden">
          <NationalDayOfferContentBlock />
        </div>
      )} */}

      <div className="container pb-16 lg:py-16">
        <MoreInfo
          heading={pageData.moreInfo.heading}
          description={pageData.moreInfo.description}
          items={pageData.moreInfo.items}
        />
      </div>

      {google && google.reviews.length > 0 ? (
        <Testimonials data={google} />
      ) : null}

      {!available && (
        <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/80">
          <p className="px-10 text-center text-red-600 uppercase md:text-xl">
            This package is expired!
          </p>
        </div>
      )}

      {!noRelated && (
        <>
          <Divider />
          <div className="container pt-12 pb-16 md:pt-16">
            <ContentGroup
              heading={pageData.relatedData.heading}
              data={pageData.relatedData.data}
              courses={course?.recommended}
            />
          </div>
        </>
      )}

      {router.pathname?.includes('/landing-pages/') ? (
        ''
      ) : (
        <FixedMenu
          heading={courseTitle}
          price={price}
          btnText={pageData.fixedMenu.button.text}
          btnHref={pageData.fixedMenu.button.href}
          vat={course ? course.vat : pageData.details.vat}
        />
      )}
    </>
  );
};

export default CourseTemplate;
