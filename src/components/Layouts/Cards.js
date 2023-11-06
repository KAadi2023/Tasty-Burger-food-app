import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cards = ({image, rating, title, paragraph, price, renderRatingIcons}) => {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
        <div className="card">
            <div className="overflow-hidden">
                <img src={image} className="card-img-top" alt="menu"/>   
            </div>
            <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="item_rating">{renderRatingIcons(rating)}</div>
                    <div className="wishlist">
                        <i className="bi bi-heart"></i>
                    </div>
                </div>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{paragraph}</p>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="menu_price">
                        <h5 className="mb-0">${price}</h5>
                    </div>
                    <div className="add_to_cart">
                        <Link to="/">
                            <i className="bi bi-bag me-2">Add to cart</i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Col>
  )
}

export default Cards