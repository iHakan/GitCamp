import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";

var data = [
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
    title: "Burgundy Flemming",
    subtitle: "Advertising"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
    title: "Nigel Nigel",
    subtitle: "Sound & Vision"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
    title: "Caspian Bellevedere",
    subtitle: "Accounting"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample87.jpg",
    title: "Burgundy Flemming",
    subtitle: "Advertising"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample119.jpg",
    title: "Nigel Nigel",
    subtitle: "Sound & Vision"
  },
  {
    image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample120.jpg",
    title: "Caspian Bellevedere",
    subtitle: "Accounting"
  }
];
class Article extends React.Component {
  render() {
    const image = this.props.data.image,
      title = this.props.data.title,
      subtitle = this.props.data.subtitle;
    return (
      <figure className={styles.snip1584}>
        <img src={image} />
        <figcaption>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </figcaption>
        <a href="#" />
      </figure>
    );
  }
}
class News extends React.Component {
  render() {
    var newsTemplate;
    var settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1
    };
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
      <Container>
        <div className={styles.news}>
          <Slider {...settings}>{newsTemplate}</Slider>
          <strong
            className={
              styles.news__count + " " + (data.length > 0 ? "" : styles.none)
            }
          />
        </div>
      </Container>
    );
  }
}

export default News;
