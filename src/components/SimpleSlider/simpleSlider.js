import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./styles.module.scss";
import Container from "@material-ui/core/Container";
import { Typography } from "@material-ui/core";

var data = [
  {
    image: require("../SimpleSlider/images/clement-h-95YRwf6CNw8-unsplash.jpg"),
    title: "Re:coded",
    subtitle: "Web Development /Front-End",
    link: "https://www.re-coded.com/programs"
  },
  {
    image: require("../SimpleSlider/images/john-schnobrich-FlPc9_VocJ4-unsplash.jpg"),
    title: "Vodafone Bootcamp",
    subtitle: "Starp-Up",
    link: "https://vodafoneuplift.de/en/"
  },
  {
    image: require("../SimpleSlider/images/nesa-by-makers-kwzWjTnDPLk-unsplash.jpg"),
    title: "Bilge Adam",
    subtitle: "Python",
    link:
      "https://www.bilgeadam.com/akademi/bilisim-uzmanligi/application-development-with-python"
  },
  {
    image: require("../SimpleSlider/images/kobu-agency-67L18R4tW_w-unsplash.jpg"),
    title: "Kodluyoruz",
    subtitle: "Back-End",
    link: "https://www.kodluyoruz.org/akademi-bootcamp/"
  },
  {
    image: require("../SimpleSlider/images/markus-spiske-gcgves5H_Ac-unsplash.jpg"),
    title: "SAP",
    subtitle: "A.B.A.P",
    link:
      "https://career5.successfactors.eu/sfcareer/jobreqcareerpvt?jobId=221467&company=SAP&username=&st=1F049EB61D575BD2AC65FA8655BE1C32CCA5B5EE"
  },
  {
    image: require("../SimpleSlider/images/shahadat-shemul-BfrQnKBulYQ-unsplash.jpg"),
    title: "Bilge is",
    subtitle: "Web Development",
    link: "https://bilgeis.net/tr/courses/category/14/web-ve-tasarim"
  }
];
class Article extends React.Component {
  render() {
    const image = this.props.data.image,
      title = this.props.data.title,
      subtitle = this.props.data.subtitle,
      link = this.props.data.link;
    return (
      <figure className={styles.snip1584}>
        <img src={image} />
        <figcaption>
          <h3>{title}</h3>
          <h5>{subtitle}</h5>
        </figcaption>
        <a href={link} target="_blank" />
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
        <Typography
          style={{
            paddingTop: 100,
            textAlign: "left",
            fontWeight: "bold",
            color: "rgb(179, 179, 179)"
          }}
          variant="h3"
        >
          Up Coming Bootcamps
        </Typography>
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
