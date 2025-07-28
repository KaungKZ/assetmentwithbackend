import { Lora, Nunito } from '@next/font/google';
import AnimatedText from '../../animation/text/AnimatedText';

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

const TestimonialCard = ({ name, from, quote }) => {
  return (
    <div className="p-6 border border-gray-100 rounded-lg shadow-lg">
      <AnimatedText className={`${nunito.className}`}>
        &quot;{quote}&quot;
      </AnimatedText>

      <div className="mt-3">
        <AnimatedText tag="h4" className={`${lora.className} text-lg`}>
          {name}
        </AnimatedText>
        <AnimatedText className={`${nunito.className} text-sm`}>
          {from}
        </AnimatedText>
      </div>
    </div>
  );
};

export default TestimonialCard;
