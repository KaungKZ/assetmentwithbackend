const ListItem = ({ name, value }) => {
  return (
    <li>
      <span className="text-black font-poppins">{name}:</span> {value}
    </li>
  );
};

export default ListItem;
