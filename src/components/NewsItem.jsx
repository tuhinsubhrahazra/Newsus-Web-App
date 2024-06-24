import React from "react";

const NewsItem = (props) => {

    return (
        <>
            <div className="card justify-content-md-center my-4" style={{ width: "100%" }}>
                <img className="card-img-top" src={props.imgUrl} alt={props.imgUrl} />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text">Published at {props.publishDate}</p>
                    <p className="card-text">Publisher: {props.publisher}</p>
                </div>
                <div className="list-group list-group-flush">
                    <div className="card-body ">
                        <a href={props.url} className="card-link btn btn-primary">See more</a>
                    </div>
                </div>

            </div>
        </>
    );
}

export default NewsItem;