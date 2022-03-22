import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { image, titel, discription, price, sale } = this.props;
    return (
      <div className="card">
        <div className="card__body">
          <img src={image} alt="" />
          <h2 className="card__titel">{titel}</h2>
          <p className="card__description">{discription}</p>
          <h1 className="card__price">{price}</h1>
          <button className="card__btn">VIEW PRODUCT</button>
          <span className="card__price-off">{sale}</span>
        </div>
      </div>
    );
  }
}
