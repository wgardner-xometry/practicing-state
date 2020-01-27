import React, { Component } from "react";
import Star from "./Star";

class StarRating extends Component {
  // Initialize a 'rating' state
  state = {
    rating: 0,
  };

  // Write a function that returns 5 Star components
  renderStars = () => {
    let stars = [];
    let maxRating = 5;
    for (let i = 0; i < maxRating; i++) {
      stars.push(
        <Star
          key={i}
          isSelected={this.state.rating > i}
          setRating={() => this.setRating(i + 1)}
        />,
      );
    }
    return stars;
  };

  // Write an event handler that updates the rating state.
  setRating = rating => {
    if (rating === this.state.rating) {
      this.setState({
        rating: 0,
      });
    } else {
      this.setState({
        rating,
      });
    }
  };

  // Pass the function to a Star component via props

  render() {
    return <ul className="course--stars">{this.renderStars()}</ul>;
  }
}

export default StarRating;
