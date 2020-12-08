import React from 'react';
import PropTypes from 'prop-types';
import './News.css';
import { Link } from 'react-router-dom';

function News({ title, publishedAt, description, urlToImage,genres }){
return (
    <div className="article">
        <Link
        to={{
            pathname: '/movie-detail',
            state: {publishedAt, title, description, urlToImage, genres },
        }}
        >
        <img src={urlToImage} alt={title} title={title} />
        <div className="article__data">
        <h3 className="article__title" >{title}</h3>
        <h5 className="article__year">{publishedAt}</h5>
        <p className="article__summary">{description.slice(0, 180)}...</p>
        </div>
        </Link>
    </div>
);
}

News.propTypes = {
    publishedAt:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    description:PropTypes.string.isRequired,
    urlToImage:PropTypes.string.isRequired,
};

export default News;