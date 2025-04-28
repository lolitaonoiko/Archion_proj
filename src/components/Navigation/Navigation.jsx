import { NavLink } from 'react-router-dom';

import s from './Navigation.module.css';

const Navigation = () => {
    return (
        <div>
            <nav>
                <ul className={s.navLinks}>
                    <li>
                        <NavLink className={s.link} to="/">
                            Main
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} to="/gallery">
                            Gallery
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} to="/projects">
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} to="/certifications">
                            Certifications
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={s.link} to="/contacts">
                            Contacts
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
