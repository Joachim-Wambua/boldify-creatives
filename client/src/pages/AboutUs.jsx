import WhoWeAre from "../sections/WhoWeAre";
import CallToAction from "../sections/CallToAction";
import CoreValues from "../sections/CoreValues";
import Footer from "../sections/Footer";
import DynamicHeader from "../components/DynamicHeader";

const AboutUs = () => {
  return (
    <>
      {/* TODO: Add Header  */}
      <DynamicHeader />
      <WhoWeAre />
      <CoreValues />
      <CallToAction />
      <Footer />
    </>
  );
};

export default AboutUs;
