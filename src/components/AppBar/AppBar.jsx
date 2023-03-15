import { NavLink } from 'react-router-dom';
import style from './AppBar.module.scss';

const navItems = [
  { href: '/', text: 'Home' },
  { href: 'movies', text: 'Movies' },
];

export const AppBar = () => {
  return (
    <header className={style.header}>
      <nav>
        {navItems.map(({ href, text }) => (
          <NavLink
            key={href}
            to={href}
            className={({ isActive }) =>
              isActive ? `${style.active}` : `${style.link}`
            }
          >
            {text}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};