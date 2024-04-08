import "./PortfolioProject.css";

const PortfolioProject = () => {
  return (
    <>
      <div className="image-over-3-col-text">
        <div className="image">
          <img src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1712579133/fly-211-plane_t4bhcr.jpg" />
        </div>
        <div className="text">
          <p>Client</p>
          <p>Project Type</p>
          <p>Timeline</p>
        </div>

        <div className="">
          <h2 className="font-bold text-3xl my-4">Fly 211 Branding</h2>
          <p className="text-left">A very brief description</p>
        </div>
      </div>

      <section className="tall-left-text-right">
        <div className="image">
          <img
            src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1712579131/FLY_211_Airbus_A320-200_Seat_Map_Configuration_1-02_xatqhp.jpg"
            alt=""
          />
        </div>
        <div className="text">
          <div className="sticky-top caption text-left">
            <p>
              Capture information about the unique value Boldify offered this client
            </p>
            <br /><br />
            <p>
              Secondary information to boost Boldify's value to client
            </p>
          </div>
        </div>
      </section>

      <section className="one-by-one">
        <div className="image">
          <img
            src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1712579135/White_Polo_v97jnt.jpg"
            width={500}
            alt=""
          />
        </div>
        <div className="image">
          <img
            src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1712579128/Free_Presentation_Mockup_5_nxaoug.jpg"
            alt=""
          />
        </div>
      </section>

      <div className="one-by-two-image-grid">
        <div className="image-1">
          <img
            src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1712579128/Cyan_Polo_znkc5t.jpg"
            alt=""
          />
        </div>
        <div className="image-2">
          <img
            src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1712579130/notebook_ieqfvz.png"
            alt=""
          />
        </div>
        <div className="image-3">
          <img
            src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1712579133/Business_Card_Mockup_pjqucj.png"
            alt=""
          />
        </div>
      </div>

      <div className="one-col-text-one-img-right">
        <div className="text text-left">
          <p>
            “Mind,” he began again, lifting one arm from the elbow, the palm of
            the hand outwards, so that, with his legs folded before him, he had
            the pose of a Buddha preaching in European clothes and without a
            lotus-flower
          </p>
          <br />
          <br />
          <p>
            He broke off. Flames glided in the river, small green flames, red
            flames, white flames, pursuing, overtaking, joining, crossing each
            other—then separating slowly or hastily. The traffic of the great
          </p>
          
        </div>
        <div className="image">
          <small className="caption">
            <p>
              They grabbed what they could get for the sake of what was to be
              got
            </p>
          </small>
          <img
            src="https://res.cloudinary.com/dltjv8zbh/image/upload/v1712579136/Airbus-01-01_puyznq.jpg"
            width={900}
            height={1600}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioProject;
