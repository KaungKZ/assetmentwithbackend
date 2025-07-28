const Block = ({ heading, desc }) => {
  return (
    <div>
      <h3 className="text-xl">{heading}</h3>
      <p className="mt-2 mb-3 text-lg">{desc}</p>
    </div>
  );
};

export default Block;
