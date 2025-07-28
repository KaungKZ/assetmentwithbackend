const Message = ({ icon, iconColor, heading, line1, line2, action }) => {
  return (
    <div>
      {icon && (
        <span
          className={`${
            iconColor ? iconColor : 'text-green-600'
          } flex justify-center mb-4 text-5xl`}
        >
          {icon}
        </span>
      )}
      <div className="flex flex-col gap-4">
        <h1 className="text-xl text-center text-black">{heading}</h1>
      </div>

      <div className="mt-4 text-center">
        <p className="text-base">{line1}</p>

        {line2 && <p className="mt-3 text-base">{line2}</p>}
      </div>

      <div className="flex justify-center mt-6">{action}</div>
    </div>
  );
};

export default Message;
