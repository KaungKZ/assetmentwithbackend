import { Advent_Pro } from '@next/font/google';
const adventPro = Advent_Pro({ weight: '500', subsets: ['latin'] });

const Number = ({ number }) => {
  return (
    <span
      className={`md:w-[60px] w-[35px] py-3 md:py-6 flex justify-center items-center select-none ${adventPro.className} text-2xl text-bgray rounded-md bg-gradient-to-r font-bold from-[#FFDE59] to-[#FFB000]`}
    >
      {number}
    </span>
  );
};

export default Number;
