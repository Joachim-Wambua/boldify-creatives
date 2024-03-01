import Button from "../components/Button";
import {
  MdLocalPhone,
  MdLocationOn,
  MdOutlineMailOutline,
} from "react-icons/md";

const ContactForm = () => {
  return (
    <>
      <section className="mb-32">
        <div className="relative h-[300px] overflow-hidden bg-cover bg-[50%] bg-no-repeat bg-[url('https://mdbcdn.b-cdn.net/img/new/textures/full/171.jpg')]"></div>
        <div className="container mx-auto flex px-6 md:px-12">
          <div className="block rounded-lg bg-[hsla(0,0%,100%,0.7)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[#f2f2f2] dark:shadow-black/20 md:py-16 md:px-12 -mt-[100px] backdrop-blur-[30px]">
            <div className="mb-12 grid gap-x-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Contacts */}
              <div className="mb-6 flex items-center justify-center lg:mb-0">
                <MdLocalPhone className="mx-2" fontSize={18} />
                <p>+254 712 345 678</p>
              </div>

              <div className="mb-6 flex items-center justify-center lg:mb-0">
                <MdOutlineMailOutline className="mx-2" fontSize={18} />
                <p>boldifycreatives@gmail.com</p>
              </div>

              <div className="mb-6 flex items-center justify-center lg:mb-0">
                <MdLocationOn className="mx-2" fontSize={18} />
                <p>Nairobi, Kenya</p>
              </div>
            </div>
            <div className="form-card mx-auto max-w-[700px]">
              <form>
                {/* Name Input */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text"
                    className="peer block min-h-[auto] w-full rounded border-2 border-gray-300 bg-white placeholder-slate-700 py-[0.45rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary peer-focus:border-primary peer-focus:outline-none dark:text-slate-800 dark:placeholder-slate-600 dark:border-gray-600 dark:peer-focus:text-black dark:peer-focus:border-primary dark:focus:placeholder-opacity-100 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-50"
                    id="exampleInput90"
                    placeholder="Name"
                  />
                </div>
                {/* Email Input */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="email"
                    className="peer block min-h-[auto] w-full rounded border-2 border-gray-300 bg-white placeholder-slate-700 py-[0.45rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary peer-focus:border-primary peer-focus:outline-none dark:text-slate-800 dark:placeholder-slate-600 dark:border-gray-600 dark:peer-focus:text-black dark:peer-focus:border-primary dark:focus:placeholder-opacity-100 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-50"
                    id="exampleInput91"
                    placeholder="Email address"
                  />
                </div>
                {/* Message Input */}
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <textarea
                    className="peer block min-h-[auto] w-full rounded border-2 border-gray-300 bg-white placeholder-slate-700 py-[0.45rem] px-3 leading-[1.6]  transition-all duration-200 ease-linear focus:placeholder-opacity-100 peer-focus:text-primary peer-focus:border-primary peer-focus:outline-none dark:text-slate-800 dark:placeholder-slate-600 dark:border-gray-600 dark:peer-focus:text-black dark:peer-focus:border-primary dark:focus:placeholder-opacity-100 [&:not([data-te-input-placeholder-active])]:placeholder-opacity-50"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                {/* Checkbox */}
                <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                  {/* Submit Button */}
                  <Button content="SEND" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
