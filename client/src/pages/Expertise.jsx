import DynamicHeader from "../components/DynamicHeader";
import Footer from "../sections/Footer";
import ExpertiseContent from "../sections/ExpertiseContent";

const Expertise = () => {
  return (
    <div>
      <DynamicHeader />
      <div className="mt-2">
        <ExpertiseContent />
      </div>
      <Footer />
    </div>
  );
};

export default Expertise;
