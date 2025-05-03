import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import RighAside from '../Components/HomeLayouts/RighAside';
import NewsDetailsCard from '../Components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [ news, setNews ] = useState({});
  // console.log(id,data)
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })

    useEffect(() => {
        const NewsDetails = data.find((singleNews) => singleNews.id == id);
        setNews(NewsDetails);
    },[data, id])

    return (
      <div>
        <header>
          <Header></Header>
        </header>
        <main
          data-aos="fade-up"
          data-aos-duration="3000"
          className="w-11/12 mx-auto grid grid-cols-12 gap-5 py-8"
        >
          <section className="col-span-9">
            <NewsDetailsCard news={news}></NewsDetailsCard>
          </section>
          <aside className="col-span-3">
            <RighAside></RighAside>
          </aside>
        </main>
      </div>
    );
};

export default NewsDetails;