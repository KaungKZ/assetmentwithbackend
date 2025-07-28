const AgreementCheckbox = ({ heading, list, content }) => {
  return (
    <div>
      <h3 className="mb-2">{heading}</h3>
      {list && (
        <ul className="flex flex-col gap-3 ml-3 list-disc">
          {list.map((item, index) => (
            <li key={index} className="text-xs">
              {item}
            </li>
          ))}
        </ul>
      )}
      {content && (
        <div className="flex flex-col gap-3 text-gray-500">{content}</div>
      )}
    </div>
  );
};

export default AgreementCheckbox;
