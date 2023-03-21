import React from 'react'
import styles from '../styles/Cate.module.css'
import Link from 'next/link'

export const Category = ({category}) => {
  return (
    <Link href={`/categories/${category}`} className={styles.category}>
          #{category}
      </Link>
  )
}