const WhoWeAre = () => {
  return (
    <>
      <section className="my-32">
        <div className="container mx-auto text-center lg:text-left xl:px-32">
          <div className="flex grid items-center justify-center lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div className="relative z-[1] block rounded-lg bg-[#C2C2C2] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[#F2F2F2] dark:shadow-black/20 md:px-12 lg:-mr-14">
                <h2 className="mb-8 text-3xl font-bold">Who We Are </h2>
                <p className="mb-8 pb-2 text-black dark:text-black lg:pb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  soluta corporis voluptate ab error quam dolores doloremque,
                  quae consectetur.
                </p>

                <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mr-2 h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Best team
                  </p>

                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mr-2 h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Best quality
                  </p>

                  <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      className="mr-2 h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Best experience
                  </p>
                </div>

                <p className="mb-0 text-black dark:text-black">
                  In ac turpis justo. Vivamus auctor quam vitae odio feugiat
                  pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam
                  sed cursus lectus. Proin non rutrum magna. Proin gravida,
                  justo et imperdiet tristique, turpis nisi viverra est, nec
                  posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium
                  condimentum nulla, ut aliquet erat auctor sed.
                </p>
              </div>
            </div>

            <div className="flex h-[80vh] w-[30vw] xs:w-[63vw] items-center " >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/117.jpg" 
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt="image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
