import React from 'react'
import {FaCartPlus} from "react-icons/fa";

const Card = ({img,title}) => {
  return (
    <div>
        <div className="card" style={{width: "16rem"}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-danger w-100 d-flex align-items-center justify-content-evenly">
    <FaCartPlus />    Add to cart
    </a>
  </div>
</div>
    </div>
  )
}

export default Card