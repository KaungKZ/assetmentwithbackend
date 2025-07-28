import { ubuntu } from '../../../../lib/func/fonts';

/* eslint-disable @next/next/no-img-element */
const TestiCard = ({ imgSrc, imgAlt, description, name }) => {
  return (
    <>
      <img
        src={imgSrc}
        alt={imgAlt || 'Testimonial'}
        className="object-cover w-full h-full"
      />

      <div className="absolute inset-0 flex items-center px-20 bg-black/50">
        <div>
          <p
            className={`${ubuntu.className} text-white font-light text-xl w-[70%]`}
          >
            &quot;{description}&quot;
          </p>
          <h4 className={`${ubuntu.className} text-white mt-5`}>{name}</h4>
        </div>
      </div>
    </>
  );
};

export default TestiCard;
