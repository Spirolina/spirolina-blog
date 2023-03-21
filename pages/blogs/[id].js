import React from 'react'
import axios from 'axios'
import { BlogPage } from '../../components/BlogPage'

const Post = ({post}) => {
  return (
      <BlogPage post={post} />
  )
}

export async function getStaticPaths() {
    const url = process.env.STRAPI_HOST + '/api/blogs'
    const res = await axios(url);
    const data = res.data.data;
    const paths = data.map(path => {
        return {params: {id: path.id.toString()}}
    })
    return {
        paths,
        fallback: 'blocking'
    }
}

export async function getStaticProps({ params }) {
    const url = process.env.STRAPI_HOST + `/api/blogs/${params.id}?populate=categories`
    const res = await axios(url);
    const data = res.data.data;
    return {
        props: { post: data },
        revalidate: 10,
    }
}

export default Post;
