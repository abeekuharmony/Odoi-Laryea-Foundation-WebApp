import publicationsImg from "../../assets/images/publications.jpg";

const Publications = () => (
  <div>
    {/* Hero Section with Image */}
    <section className="relative bg-gradient-to-br from-accent-600 to-accent-800 text-white py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${publicationsImg})` }}
      />
      <div className="section-container relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Publications</h1>
        <p className="text-xl text-accent-100 max-w-3xl">
          Publishing books and resources that share knowledge, inspire change, and preserve cultural heritage.
        </p>
      </div>
    </section>

    {/* Content Section */}
    <section className="section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <img
            src={publicationsImg}
            alt="Publications Program"
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Sharing Knowledge & Inspiring Change</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our Publications program is dedicated to creating and distributing books, articles, and resources that educate, inspire, and preserve important knowledge.
            </p>
            <p className="text-gray-700">
              From the groundbreaking "Unlocking You: The Ikigai Workbook for Young Dreamers" to future publications, we're committed to sharing transformative ideas with the world.
            </p>
          </div>
        </div>
        <p className="text-xl text-gray-700 text-center">More details about our publications coming soon...</p>
      </div>
    </section>
  </div>
);

export default Publications;
