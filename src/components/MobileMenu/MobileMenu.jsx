import Navigation from '../Navigation/Navigation';

import s from './MobileMenu.module.css';

const MobileMenu = () => {
    return (
        <div className={s.modal}>
            <Navigation />
        </div>
    );
};

export default MobileMenu;
