import React from 'react'
import styles from '../styles/Blog.module.css'
import mainStyles from '../styles/Home.module.css'


import { Blog } from './Blog'
export const Blogs = ({ posts }) => {
    return (
      <div className={styles.blogs}>
        <div className={mainStyles.blogsContainer}>

            {posts.map(post => <Blog key={post.id} post={post}/>)}
            </div>
    </div>
  )
}


