import Number from './Number';

const Remaining = ({ front, back, label }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-1">
        <Number number={front} />
        <Number number={back} />
      </div>

      <div className="mt-2">
        <p className="text-base font-thin text-white">{label}</p>
      </div>
    </div>
  );
};

export default Remaining;
