import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            category news - {id}
        </div>
    );
};

export default CategoryNews;