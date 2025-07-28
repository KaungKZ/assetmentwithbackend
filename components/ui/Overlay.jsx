const Overlay = ({ opacity, rounded, className }) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full ${rounded || 'rounded-none'} ${
        opacity || 'bg-bermuda-500/50'
      } ${className || ''}`}
    ></div>
  );
};

export default Overlay;
