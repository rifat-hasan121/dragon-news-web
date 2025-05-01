import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    // console.log(data)
    const [categoryNews, setCategoryNews] = useState([]);
    useEffect(() => {
        if (id == "0") {
            setCategoryNews(data)
            return;
        } else if (id == '1') {
            const filteredData = data.filter(
                (news) => news.others.is_today_pick == true
            );
            setCategoryNews(filteredData)
        } else {
            
            const filteredData = data.filter((news) => news.category_id == id);
        setCategoryNews(filteredData)
        
    }
    
        // console.log(filteredData)
    },[data, id])
    return (
        <div>
            <div className='grid grid-cols-1 gap-5 mb-5'>
                {
                    categoryNews.map(news =>
                             <NewsCard
                            key={news.id}
                            news={news}>
                            </NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;