import React, { useState, useEffect }  from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=";
    const pageSize = 20;
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalResult, setTotalResult] = useState(0);
    const [page, setPage] = useState(1);

    // useEffect(() => {
    //     // fetchMoreData();
    // });
    useEffect(() => {
        console.log("Coo");
        fetchMoreData();
    },[]);

    const fetchMoreData = async () => {
        props.changeProgress(70);
        setLoading(true);
        url = await url + props.apiKey + "&page=" + page + "&category=" + props.category + "&pageSize=" + pageSize;
        let data = await fetch(url);
        props.changeProgress(80);
        let parseData = await data.json();
        props.changeProgress(90);

        setArticles(articles.concat(parseData.articles));
        setTotalResult(parseData.totalResults);
        setLoading(false);
        props.changeProgress(100);
        setPage(page + 1);
    }

    return (
        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={totalResult > articles.length}
            loader={<Spinner />}>

            {<div className="container" style={{ marginTop: "100px" }} >
                <h2 className="my-4">Top headlines of {props.category === "general" ? "Newsus" : props.category}</h2>
                {loading === true && <Spinner />}
                <div className="row">
                    {articles.map(function (e) {
                        return (<div key={e.url} className="col-md-6 com-sm-12 col-lg-6">
                            <NewsItem title={e.title != null ? e.title : "News"}
                                description={e.description != null ? e.description : ""}
                                imgUrl={e.urlToImage != null ? e.urlToImage : ""}
                                url={e.url}
                                publishDate={e.publishedAt != null ? new Date().toUTCString(e.publishedAt) : "NULL"}
                                publisher={e.author != null ? e.author : "NULL"} />
                        </div>)
                    })}
                </div>
            </div>
            }
        </InfiniteScroll>
    );
}

export default News;