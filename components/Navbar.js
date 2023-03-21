import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {AiFillTwitterCircle} from 'react-icons/ai'
import { RiInstagramFill } from 'react-icons/ri'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const router = useRouter();
  return (
      <div className={styles.container}>
              <Link href='/' className={styles.brandLink}>
          <h1 className={styles.navbarTitle}>
                  Spirolina
                  <span className={styles.smallTitle}> blog</span>
              </h1>
              </Link>
          <div className={styles.navigation}>
              <div className={styles.links}>
          <Link href='/'
            className={
              router.pathname === '/' ? styles.activeLink : styles.noneDecoration}> Blogs </Link>
                <Link href='/categories' className={router.pathname === '/categories' ? styles.activeLink : styles.noneDecoration}> Categories </Link>
                <Link href='/aboutme' className={router.pathname === '/aboutme' ? styles.activeLink : styles.noneDecoration}> About Me </Link>
              </div>
             
        <div className={styles.socialLinks}>
          <Link href='/' className={styles.grayLink}>
            <span className={styles.iconSpan}> <RiInstagramFill size={20} /> </span>
          </Link>

          <Link href='/' className={styles.grayLink}>
            <span className={styles.iconSpan}> <AiFillTwitterCircle size={20} /> </span>

          </Link>
              </div>
              
              
          </div>
          
      </div>
  )
}
