import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import useMedia from '../../hooks/useMedia';

import s from './Header.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';

const Header = () => {
    const { isMobile } = useMedia();

    const mobileClass = isMobile ? s.mobileHeader : s.header;

    const handleClick = () => {};

    return (
        <div className={mobileClass}>
            {isMobile ? (
                <button onClick={handleClick}>
                    <svg className={s.burger} width="30 " height="30">
                        <use href="../../../public/icons/symbol-defs.svg#icon-menu"></use>
                    </svg>
                </button>
            ) : (
                <>
                    <Logo />
                    <Navigation />
                </>
            )}
        </div>
    );
};

export default Header;
