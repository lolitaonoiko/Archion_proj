import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
    const classNavLink = ({ isActive }) => clsx(s.link, isActive && s.active);

    return (
        <div>
            <nav>
                <ul className={s.navLinks}>
                    <li>
                        <NavLink className={classNavLink} to="/">
                            Main
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={classNavLink} to="/gallery">
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={classNavLink} to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={classNavLink} to="/certifications">
                            Certifications
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={classNavLink} to="/contacts">
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
