import React from 'react'
import axios from 'axios';
import styles from '../../styles/Cate.module.css'
import { Blogs } from '../../components/Blogs';

const CategoryPage = ({ category, posts }) => {
    return (
        <div style={{
            flexDirection: 'column',
            display: 'flex',
            marginTop: 16
        }} >
            <div style={{margin: 'auto'}} className={styles.category}>
                #{category[0].attributes.name}</div>
            
            <Blogs posts={posts} />
      </div>
  )
}

export async function getStaticPaths() {
    const url = process.env.STRAPI_HOST + `/api/categories`;
    const res = await axios(url);
    const data = res.data.data;
    const paths = data.map(path => {
        return {params: {slug: path.attributes.name.toString()}}
    })

    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const url = process.env.STRAPI_HOST + `/api/categories?filters[name][$eq]=${params.slug}`
    const url2 = process.env.STRAPI_HOST + `/api/blogs?filters[categories][name][$eq]=${params.slug}&populate=categories,postImage`
    const res = await axios(url);
    const res2 = await axios(url2);
    const data = res.data.data;
    const data2 = res2.data.data;

    return {
        props: {category: data, posts: data2}
    }

}

export default CategoryPage;
