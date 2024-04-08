import { projectImages } from "../constants/data";

const TopProjects = () => {
  // Gallery slices
  const firstFour = projectImages.slice(0, 4);
  const secondFour = projectImages.slice(4, 8);
  const thirdFour = projectImages.slice(8, 12);
  const lastFour = projectImages.slice(12, 16);

  return (
    <>
      <section className="my-20 py-10 bg-gray-900">
        <h2 className="text-4xl font-extrabold mb-20 text-white">Our Work</h2>

        <div className="gallery">
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip one">
              {firstFour.map((img) => (
                <div key={img.id} className="photo">
                  <div className="photo__image">
                    <img src={`${img.img}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip two">
              {secondFour.map((img) => (
                <div key={img.id} className="photo">
                  <div className="photo__image">
                    <img src={`${img.img}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip three">
              {thirdFour.map((img) => (
                <div key={img.id} className="photo">
                  <div className="photo__image">
                    <img src={`${img.img}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="gallery__strip__wrapper">
            <div className="gallery__strip four">
              {lastFour.map((img) => (
                <div key={img.id} className="photo">
                  <div className="photo__image">
                    <img src={`${img.img}`} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopProjects;
