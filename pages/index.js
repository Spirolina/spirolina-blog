import styles from '../styles/Home.module.css'
import { Layout } from '../components/Layout'
import { Blogs } from '../components/Blogs'
import axios from 'axios'

export default function Home({posts}) {
  return (
    <Blogs posts={posts} />
  )
}
export async function getStaticProps() {
  const url = process.env.STRAPI_HOST + '/api/blogs?populate=postImage,categories'
  const res = await axios(url);
  const data = await res.data;

  return {
    props: {
      posts: data.data,
    },
    revalidate: 10,
  }
}