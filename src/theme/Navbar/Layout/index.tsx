import React, {useState, useEffect} from 'react';
import clsx from 'clsx';
import {useThemeConfig} from '@docusaurus/theme-common';
import {
  useHideableNavbar,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import {useLocation} from '@docusaurus/router';
import NavbarMobileSidebar from '@theme/Navbar/MobileSidebar';
import type {Props} from '@theme/Navbar/Layout';

import styles from './styles.module.css';

export default function NavbarLayout({children}: Props): JSX.Element {
  const {
    navbar: {hideOnScroll, style},
  } = useThemeConfig();
  const mobileSidebar = useNavbarMobileSidebar();
  const {navbarRef, isNavbarVisible} = useHideableNavbar(hideOnScroll);

  const {pathname} = useLocation();
  const isHomePage = pathname === '/';
  const [isNavbarTransparent, setIsNavbarTransparent] = useState(isHomePage);

  useEffect(() => {
    if (!isHomePage) {
      setIsNavbarTransparent(false);
      return;
    }
    const navHeight = navbarRef.current?.clientHeight || 60;

    const handleScroll = () => {
      const show = window.scrollY > window.innerHeight - navHeight;
      setIsNavbarTransparent(!show);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage, pathname, navbarRef]);

  return (
    <nav
      ref={navbarRef}
      className={clsx(
        'navbar',
        'navbar--fixed-top',
        hideOnScroll && [
          styles.navbarHideable,
          !isNavbarVisible && styles.navbarHidden,
        ],
        {
          'navbar--dark': style === 'dark',
          'navbar--primary': style === 'primary',
          'navbar-sidebar--show': mobileSidebar.shown,
          'navbar--transparent': isHomePage && isNavbarTransparent,
        },
      )}>
      {children}
      <NavbarMobileSidebar />
    </nav>
  );
}