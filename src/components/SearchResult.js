import React from 'react'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"
import '../style/SearchResult.css'

const SearchResult = ({
    img, location, title, desc, star, price, total
}) => {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon className='searchResult_heart'/>

            <div className="searchResult_info">
                <div className="info_top">
                    <p>{location} </p>
                    <h3>{title} </h3>
                    <p>______</p>
                    <p>{desc} </p>
                </div>

                <div className="info_bottom">
                    <div className="stars">
                        <StarIcon className="star" />
                        <p><strong>{star} </strong></p>
                    </div>

                    <div className="price">
                        <h2>{price} </h2>
                        <p>{total} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult
