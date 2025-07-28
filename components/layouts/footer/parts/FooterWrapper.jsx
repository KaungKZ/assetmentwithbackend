const FooterWrapper = ({ gridContent, copyright }) => {
  return (
    <footer
      className={`${
        gridContent ? 'bg-white border-t border-gray-200' : 'lg:-mt-16'
      }`}
      aria-labelledby="footer-heading"
    >
      {gridContent || null}

      {copyright || null}
    </footer>
  );
};

export default FooterWrapper;
