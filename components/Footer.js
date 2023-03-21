import React from 'react'
import styles from '../styles/Footer.module.css'
import {AiFillGithub} from 'react-icons/ai'
import Link from 'next/link'

export const Footer = () => {
  return (
      <footer className={styles.footer}>
          Spirolina -&nbsp; <Link href="https://github.com/spirolina" className={styles.githubIcon}> <AiFillGithub size={22}/> </Link>
    </footer>
  )
}
