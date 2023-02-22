import React, { Component } from "react";
import "./styles/ProductComponent.css";
import icon from "./images/icon.jpg";

export class ProductComponent extends Component {
  constructor(props) {
    super(props);
    

    const { img, name, description } = props;


    this.state = {
      img: img,
      name: name,
      description: description,
      iconImage : icon
    };

    this.highlight = this.highlight.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ img: nextProps.img,
        name: nextProps.name,
        description: nextProps.description,
        iconImage : icon });  
  }
  

  highlight = () => {
    document.getElementById('heart-icon').innerHTML = `<img src=${this.state.iconImage} alt="icon" class="iconImage"/>`
  }

  render() {
    return (
      <>
      {console.log(this.state.img,this.state.name,this.state.description)}
      
        <div className="product">
          <br />
          <img src={this.state.img} alt="product" className="product-image" />
          <br />
          <span className="name">{this.state.name}</span>
          <br />
          <span className="desc">{this.state.description}</span>
          <br />
          <br />
          <button className="interact" onClick={this.highlight}>Like</button>&nbsp;
          <button className="interact">Share</button>&nbsp;
          <button className="interact">Purchase</button>&nbsp;&nbsp;&nbsp;&nbsp;
          <span id="heart-icon"></span>
          

        </div>
      </>
    );
  }
}

export default ProductComponent;
