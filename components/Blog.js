import React from 'react'
import styles from '../styles/Blog.module.css'
import mainStyles from '../styles/Home.module.css'
import Image from 'next/image'
import { dateParse } from '../lib/dateParse.js'
import Link from 'next/link'
import { CategoryBedge } from './CategoryBedge'

export const Blog = ({post}) => {
  return (
    <Link href={`/blogs/${post.id}`}  passHref legacyBehavior> 
    <div className={styles.blogLink} key={post.id}> 
      <Image src={process.env.STRAPI_HOST + post.attributes.postImage.data.attributes.url} width={500} height={250} alt={post.attributes} />
        <div className={styles.blogInfo}>
          <div className={styles.upperInfo}>
            {post.attributes.name}
            <div className={styles.categories}>
              {post.attributes.categories.data.map(category => <CategoryBedge key={category.id} category={category.attributes.name} />)}
            </div>
          </div>
          
        <div className={styles.postDate}>
          {dateParse(post.attributes.createdAt)}
        </div>
      </div>
      </div>
      </Link>
  )
}
