import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

class MapFromApi extends React.Component {
  constructor() {
    super();
    this.fetchMapData();
  }
  state = {
    responseJson: null
  };
  async fetchMapData() {
    const response = await fetch(
      "https://firestore.googleapis.com/v1/projects/bootcamp-7278d/databases/(default)/documents/bootcamps/"
    );
    const responseJson = await response.json();
    this.setState({ responseJson: responseJson });
  }
  render() {
    if (this.state.responseJson == undefined) {
      return <h1>Wait for it...</h1>;
    }
    return <News data={this.state.responseJson} />;
  }
}

class Article extends React.Component {
  render() {
    return (
      <figure className={styles.snip1584}>
        <img src={this.props.data.fields.image.stringValue} />
        <figcaption>
          <h3>{this.props.data.fields.name.stringValue}</h3>
          <h5>{this.props.data.fields.description.stringValue}</h5>
        </figcaption>
        <a href={this.props.data.fields.link.stringValue} target="_blank" />
      </figure>
    );
  }
}
class News extends React.Component {
  render() {
    var newsTemplate;
    var settings = {
      autoplay: true,
      dots: true,
      swipeToSlide: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      touchMove: true,
      responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };
    const data = this.props.data.documents;
    if (data.length > 0) {
      newsTemplate = data.map(function(item, index) {
        return (
          <div key={index}>
            <Article data={item} />
          </div>
        );
      });
    } else {
      newsTemplate = <p>Please add some cards</p>;
    }
    return (
      <div className={styles.upComingsHeader}>
        <Typography
          id="upComings"
          style={{
            paddingTop: 100,
            fontWeight: "bold"
          }}
          variant="h4"
        >
          Up Coming Bootcamps
        </Typography>
        <Container className={styles.sliderCon}>
          <div className={styles.news}>
            <Slider {...settings}>{newsTemplate}</Slider>
            <strong
              className={
                styles.news__count + " " + (data.length > 0 ? "" : styles.none)
              }
            />
          </div>
        </Container>
      </div>
    );
  }
}

export default MapFromApi;
