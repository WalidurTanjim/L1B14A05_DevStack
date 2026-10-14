import bannerImage from '../assets/banner-stack.png';

export default function Banner() {
  return (
    <section
      id="home"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col-reverse md:flex-row items-center gap-10"
    >
      {/* Text content */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 mb-4">
          Build Your Ideal{' '}
          <span className="block gradient-text">Development Stack</span>
        </h1>
        <p className="text-gray-500 text-base sm:text-lg max-w-lg mb-8 mx-auto md:mx-0">
          Explore frontend, backend, database, and tooling options, compare them
          side by side, and put together the stack that fits your next project.
        </p>

        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          {/* Primary gradient button */}
          <a
            href="#technologies"
            className="gradient-bg text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-200 shadow-lg text-sm sm:text-base"
          >
            Explore Technologies
          </a>

          {/* Outlined button */}
          <a
            href="#about"
            className="border-2 border-gray-300 text-gray-700 font-semibold px-6 py-3 rounded-full hover:border-pink-400 hover:text-pink-500 transition-colors duration-200 text-sm sm:text-base"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Banner image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <img
          src={bannerImage}
          alt="Development Stack Illustration"
          className="w-64 sm:w-80 md:w-full max-w-md drop-shadow-2xl"
        />
      </div>
    </section>
  );
}
