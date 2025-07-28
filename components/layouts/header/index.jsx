import { useState } from 'react';
import { menuItems } from './menuItems';
import MobileMenu from './parts/MobileMenu';
import HeaderWrapper from './parts/HeaderWrapper';
import BigHeader from './parts/BigHeader';
import MobileHeadBar from './parts/MobileHeadBar';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <MobileMenu
        menuItems={menuItems}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <HeaderWrapper
        bigHeader={<BigHeader menuItems={menuItems} />}
        mobileHeadBar={<MobileHeadBar setMenuOpen={setMenuOpen} />}
      />
    </div>
  );
};

export default Header;
