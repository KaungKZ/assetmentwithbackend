const CircleIconButton = ({ icon, onClick, color, fontSize }) => {
  return (
    <span
      onClick={onClick || null}
      className={`px-1.5 cursor-pointer block py-1.5 rounded-full duration-300 shadow ${
        fontSize || 'text-xs sm:text-sm'
      } ${
        color === 'gray'
          ? 'text-black hover:bg-gray-400 bg-gray-300'
          : 'text-white bg-bermuda-100 hover:bg-bermuda-200'
      }`}
    >
      {icon}
    </span>
  );
};

export default CircleIconButton;
