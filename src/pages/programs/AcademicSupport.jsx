import academicSupportImg from "../../assets/images/academic-support.jpg";

const AcademicSupport = () => (
  <div>
    {/* Hero Section with Image */}
    <section className="relative bg-gradient-to-br from-secondary-600 to-secondary-800 text-white py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${academicSupportImg})` }}
      />
      <div className="section-container relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Academic Support</h1>
        <p className="text-xl text-secondary-100 max-w-3xl">
          Providing scholarships, educational resources, and mentorship to help students achieve their academic goals.
        </p>
      </div>
    </section>

    {/* Content Section */}
    <section className="section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <img
            src={academicSupportImg}
            alt="Academic Support Program"
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Empowering Through Education</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our Academic Support program is designed to break down barriers to education and create opportunities for deserving students to excel academically.
            </p>
            <p className="text-gray-700">
              Through scholarships, mentorship, and educational resources, we're helping students unlock their full potential and achieve their dreams.
            </p>
          </div>
        </div>
        <p className="text-xl text-gray-700 text-center">More details about our academic support programs coming soon...</p>
      </div>
    </section>
  </div>
);

export default AcademicSupport;
