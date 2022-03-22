import React, { Component } from "react";
import Card from "./components/Card";

export default class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Card
          image="https://www.pngplay.com/wp-content/uploads/12/Strawberry-Juice-Transparent-File.png"
          titel="Orange Juice"
          discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          price="$ 4.99"
          sale="- %"
        />{" "}
        <Card
          image="https://i5.walmartimages.com/asr/8dfa6496-a5f4-490c-8e00-9b2af0d638ce_1.b37d6b832cb220bbcf2ae6a16aaa99ef.png"
          titel="Orange Juice"
          discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          price="$ 4.99"
          sale="- %"
        />{" "}
        <Card
          image="https://cdn10.bigcommerce.com/s-lbtzfspbze/products/3545/images/5653/20861227_front_a06__03557.1551447343.386.513.png?c=2"
          titel="Orange Juice"
          discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          price="$ 4.99"
          sale="- %"
        />
        <Card
          image=" https://i5.walmartimages.com/asr/5ffe1e68-d1b6-47e6-9570-bdaea1363ee7_1.d31345d970da3d7078767109c5907a82.png?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
          titel="Orange Juice"
          discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          price="$ 4.99"
          sale="- %"
        />
        <Card
          image="https://global-market.dk/wp-content/uploads/2021/07/D004315.png"
          titel="Orange Juice"
          discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          price="$ 4.99"
          sale="- %"
        />
        <Card
          image="https://sc04.alicdn.com/kf/H7d898863d6b84062b0f3195dc9c8321bG.png"
          titel="Orange Juice"
          discription=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.Impus"
          price="$ 4.99"
          sale="- %"
        />
      </div>
    );
  }
}
