import { services } from "../constants/data";

const ExpertiseContent = () => {
  return (
    <>
      <section className="p-8 lg:p-8 bg-gray-100 text-gray-800">
        <div className="container mx-auto w-3/4 space-y-12">
          <div className="flex justify-center">
            <h2 className="font-bold text-center text-4xl ">Services</h2>
          </div>
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row"
            >
              <img
                src="https://source.unsplash.com/640x480/?1"
                alt=""
                className="h-80 lg:w-1/2 bg-gray-500 aspect-video"
              />
              <div className="flex flex-col justify-center text-left flex-1 p-6 bg-gray-50">
                <img src={`${service.img}`} className="w-10 mix-blend-multiply" alt="" />
                <h3 className="text-3xl font-bold">{service.name}</h3>
                <p className="my-6 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  aliquam possimus quas, error esse quos.
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ExpertiseContent;
