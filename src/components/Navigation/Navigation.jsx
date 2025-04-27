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
                        <NavLink to="/gallery">Gallery</NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="/certifications">Certifications</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts">Contacts</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;
