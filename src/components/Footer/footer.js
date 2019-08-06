import React from "react";
import ReactDOM from "react-dom";
import "./style.scss";

function Footer() {
  return (
    <div>
      <footer className="footer text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Location</h4>
              <p className="lead mb-0">
                İncilipınar mah.
                <br />
                Gaziantep,27060
              </p>
            </div>
            <div className="col-md-4 mb-5 mb-lg-0">
              <h4 className="text-uppercase mb-4">Social Links</h4>
              <ul className="list-inline mb-0">
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#"
                  >
                    <i className="fa fa-fw fa-facebook" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#"
                  >
                    <i className="fa fa-fw fa-google-plus" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#"
                  >
                    <i className="fa fa-fw fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#"
                  >
                    <i className="fa fa-fw fa-linkedin" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    className="btn btn-outline-light btn-social text-center rounded-circle"
                    href="#"
                  >
                    <i className="fa fa-fw fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4 className="text-uppercase mb-4">About BootCampFinder</h4>
              <p className="lead mb-0">
                You can find or publish a new Bootcamp by
                <a href="http://startbootstrap.com"> BootCampFinder</a>.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <div className="copyright py-4 text-center text-white">
        <div className="container">
          <small>Copyright &copy; Your Website 2019</small>
        </div>
      </div>

      <div className="scroll-to-top d-lg-none position-fixed ">
        <a
          className="js-scroll-trigger d-block text-center text-white rounded"
          href="#page-top"
        >
          <i className="fa fa-chevron-up" />
        </a>
      </div>
    </div>
  );
}

export default Footer;
