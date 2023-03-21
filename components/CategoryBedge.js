import React from 'react'
import styles from '../styles/Blog.module.css'
import Link from 'next/link'

export const CategoryBedge = ({category}) => {
  return (
    <Link href={`/categories/${category}`} className={styles.category}>
          #{category}
      </Link>
  )
}
