'use client'

import Link from 'next/link'
import Container from '../ui/Container/Container'
import { usePathname } from 'next/navigation';
import SearchImage from '../ui/SearchImage/SearchImage';
import LogoImage from '../ui/LogoImage/LogoImage';
import styles from './Navbar.module.scss'
import { useState } from 'react';
import Search from './Search/Search';

export default function Navbar() {
  const pathname = usePathname();
  const items = ['All Clothing', 'New In', 'Trends', 'Dresses', 'Summer'];
  const [isSearchClicked, setIsSearchClicked] = useState<boolean>(false);

  const handleSearch = () => {
    setIsSearchClicked(p => !p);
  };

  return (
    <nav className={styles.navbar}>
      <Container>
        {!isSearchClicked ? (
          <div className={styles.navbar__wrapper}>
            <Link href='/'>
              <LogoImage />
            </Link>
            <ul className={styles.navbar__list}>
              {items.map((item) => {
                const href = `/${item.replace(' ', '-').toLowerCase()}`;
                const isActive = pathname === href;
                return (
                  <li key={item} className={styles.navbar__item}>
                    <Link
                      href={href}
                      className={`
                      ${styles.navbar__link} 
                      ${isActive ? styles['navbar__link_active'] : ''}
                      `}
                    >
                      {item}
                    </Link>
                  </li>
                )
              })}
            </ul>
            <div className={styles.navbar__actions}>
              <Link
                href='/search'
                className={styles['navbar__actions-search']}
                onClick={handleSearch}
              >
                <SearchImage variant='white'/>
              </Link>
              <Link href='/sign-in'>Sign In</Link>
              <Link
                href='/favorite'
                className={styles['navbar__actions-favorite']}
              >
                Favorite<span>0</span>
              </Link>
              <button className={styles['navbar__actions-cart']}>
                Cart<span>0</span>
              </button>
            </div>
          </div>
        ) : (
          <Search onClick={handleSearch}/>
        )}
      </Container>
    </nav>
  )
};
