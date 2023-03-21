import React from 'react'
import styles from '../styles/Home.module.css';
import Image from 'next/image';

export const aboutme = () => {
  return (
    <div
    className={styles.container}
    >
      <div className={styles.aboutMe}>
      <h3>About Me </h3>
        <div>
          <Image alt='pp' src='/../public/pp.jfif' className={styles.pp} width={300} height={300} />
        </div>
        
        <div className={styles.desc}>
          I am a full-stack javascript developer. I can build anything that can built by JS.
        </div>
      </div>
    
    </div>
  )
}

export default aboutme;
