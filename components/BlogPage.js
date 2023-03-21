import React from 'react'
import ReactMarkdown from 'react-markdown';
import styles from '../styles/BlogPage.module.css'
import blogStyles from '../styles/Blog.module.css'
import remarkGfm from 'remark-gfm'
import { CategoryBedge } from './CategoryBedge';

export const BlogPage = ({ post }) => {
  return (
      <div className={styles.container} >
           <div className={blogStyles.blogPageCategories}>
              {post.attributes.categories.data.map(category => <CategoryBedge key={category.id} category={category.attributes.name} />)}
            </div>
          <ReactMarkdown
              className={styles.markdown}
              remarkPlugins={[remarkGfm]}>
             
              {post.attributes.content}
          </ReactMarkdown>
      </div>
  )
}
