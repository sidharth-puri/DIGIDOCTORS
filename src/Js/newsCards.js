import React from "react";
import "../Css/button.css";
import "../Css/newsCards.css";
class NewsCards extends React.Component {
  
  render(){
  return (
    <div className="key" key={this.props.id}>
      <div className="divshape">
        <img className="image" src={this.props.image} alt={"News article"} />
        <div className="cardbody">
              <h5 className="cardtitle">{this.props.title}</h5>
            <p className="kau">{this.props.description}</p>
              <footer><cite title="Source Title">{this.props.source}</cite></footer>
              <a href={this.props.url} target="noopener noreferrer">
                Read More
              </a> 
            </div>
            <br/>
          </div>
          <br/>
            <br/>
    </div>
  );
  }
}
export default NewsCards;