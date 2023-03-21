import React from 'react'
import axios from 'axios';
import mainStyles from '../../styles/Cate.module.css'
import { Category } from '../../components/Category';

const index = ({ categories }) => {
  

  return (
    <div className={mainStyles.container}>
      <div className={mainStyles.categories}>
      {categories.map(category => <Category key={category.id} category={category.attributes.name} />)}

      </div>
    </div>
  )
}

export async function getStaticProps() {
  const url = process.env.STRAPI_HOST + `/api/categories`;
  const res = await axios(url);
  const data = res.data.data;

  return {
    props: {
      categories: data,
    },
    revalidate: 10,
  }
}

export default index;
