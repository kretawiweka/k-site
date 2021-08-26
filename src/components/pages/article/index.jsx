import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import Card from '../../common/Card';
import fetchData from '../../../utils/fetchData';

const Article = () => {
  const [articleData, setArticleData] = useState(null);

  useEffect(() => {
    const getMediumData = async () => {
      const mediumData = await fetchData({
        url: 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kretawiweka',
      });
      let data = mediumData.data.items.filter(
        (data) => data.categories.length > 0
      );
      setArticleData(data);
    };
    getMediumData();
  }, []);

  const Loading = () => {
    return (
      <h1>
        <Skeleton count={3} />
      </h1>
    );
  };

  return (
    <div className="article">
      <Card>
        <div className="content">
          <h2 className="title">Writing making us remember it better!</h2>
          {articleData === null ? (
            <Loading />
          ) : (
            articleData.map((item, index) => (
              <div key={index}>
                <a href={item.link} className="item" target="__blank">
                  <img
                    className="item-img"
                    src={item.thumbnail}
                    alt={item.title}
                  />
                  <h4 className="item-title">{item.title}</h4>
                </a>
                <hr className="divider article-divider" />
              </div>
            ))
          )}
        </div>
      </Card>
    </div>
  );
};

export default Article;
