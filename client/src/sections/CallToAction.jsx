import InvertedButton from "../components/InvertedButton";

const CallToAction = () => {
  return (
    <>
      <div className="bg-white dark:bg-gray-900 px-16">
        <div className="lg:flex lg:items-center lg:justify-between w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
          <h2 className="text-3xl font-extrabold text-left text-black dark:text-white sm:text-4xl mb-4">
            <span className="block">Want to Elevate Your Brand ?</span>
            <span className="block text-slate-500">Get Started Today!</span>
          </h2>
          <div className="lg:mt-0 lg:flex-shrink-0">
            <div className=" inline-flex shadow">
              <InvertedButton content="Contact Us Today" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CallToAction;
