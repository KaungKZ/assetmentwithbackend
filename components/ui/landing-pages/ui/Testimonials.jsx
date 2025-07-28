import { Lora, Nunito } from '@next/font/google';
import AnimatedText from '../../animation/text/AnimatedText';
import TestimonialCard from './TestimonialCard';
import GoogleReviews from '../../pages/home/testimonials/GoogleReviews';

const lora = Lora({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const nunito = Nunito({
  weight: ['400', '500', '600'],
  subsets: ['latin'],
  display: 'swap',
});

const Testimonials = ({ data }) => {
  return (
    <section className="px-8 bg-white py-14">
      <AnimatedText
        tag="h2"
        className={`${lora.className} text-xl font-bold mb-1`}
      >
        Testimonials
      </AnimatedText>

      <AnimatedText
        tag="span"
        className={`${nunito.className} text-gray-500 mb-4 block`}
      >
        Raving Reviews from the Deep
      </AnimatedText>

      <GoogleReviews data={data} />

      <div className="flex flex-col gap-4 mt-8">
        <TestimonialCard
          name="Althaf A L"
          from="Google Reviews"
          quote="Amazing no words to describe from the reception to the trainers all are very professional. We can trust that we are in safe hands.... ❤️❤️❤️Must recommended place"
        />

        <TestimonialCard
          name="Mohd Buti"
          from="Google Reviews"
          quote="Excellent diving center and cooperators and their prices are the best among diving centers from my experience"
        />

        <TestimonialCard
          name="Sheji Shereef"
          from="Tripadvisor"
          quote="Wonderful experience… after the dive, u will feel that heaven is in under the sea❤️Must try onces in a life time✌️"
        />
      </div>
    </section>
  );
};

export default Testimonials;
