import { useState } from "react";
import { topProjects } from "../constants/data";
import Button from "../components/Button";

const TopProjects = () => {
  return (
    <>
      <section className="my-20 py-10 bg-gray-900">
        <h2 className="text-4xl font-extrabold mb-20 text-white">
          Top Projects
        </h2>

        <div className="gallery">
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip one">
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-kyoto.jpeg" />
                </div>
                <div className="photo__name">Kyoto</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-austria.jpeg" />
                </div>
                <div className="photo__name">Halstatt</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-peru.jpeg" />
                </div>
                <div className="photo__name">Peru</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rio.jpeg" />
                </div>
                <div className="photo__name">Rio</div>
              </div>
            </div>
          </div>
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip two">
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-italy.jpeg" />
                </div>
                <div className="photo__name">Italy</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-osaka.jpeg" />
                </div>
                <div className="photo__name">Osaka</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali.jpeg" />
                </div>
                <div className="photo__name">Bali</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris2.jpg" />
                </div>
                <div className="photo__name">Paris</div>
              </div>
            </div>
          </div>
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip three">
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-cusco.jpeg" />
                </div>
                <div className="photo__name">Cusco</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-rome.jpeg" />
                </div>
                <div className="photo__name">Rome</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-paris.jpeg" />
                </div>
                <div className="photo__name">Paris</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-bali2.jpeg" />
                </div>
                <div className="photo__name">Bali</div>
              </div>
            </div>
          </div>
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip four">
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-milan.jpeg" />
                </div>
                <div className="photo__name">Milan</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-budapest.jpg" />
                </div>
                <div className="photo__name">Budapest</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-vienna.jpg" />
                </div>
                <div className="photo__name">Vienna</div>
              </div>
              <div className="photo">
                <div className="photo__image">
                  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/gg-mexico.jpg" />
                </div>
                <div className="photo__name">Mexico</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopProjects;
