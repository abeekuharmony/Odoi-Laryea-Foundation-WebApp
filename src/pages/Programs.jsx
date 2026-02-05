import { Link } from 'react-router-dom';

const Programs = () => {
  return (
    <div>
      <section className="bg-gradient-to-br from-secondary-50 to-secondary-100 py-20">
        <div className="section-container">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">Our Programs</h1>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Explore our three pillars of community empowerment
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="section-container">
          <div className="grid gap-12">
            {/* Program Cards */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Capacity Building</h2>
              <p className="text-lg text-gray-700 mb-6">
                Our capacity building programs focus on equipping individuals with practical skills, professional development, and entrepreneurship training to enhance their career prospects and contribute to community development.
              </p>
              <Link to="/programs/capacity-building" className="btn-primary inline-block">
                Learn More
              </Link>
            </div>

            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Academic Support</h2>
              <p className="text-lg text-gray-700 mb-6">
                Through scholarships, mentorship programs, and educational resources, we help students overcome financial barriers and achieve their academic dreams.
              </p>
              <Link to="/programs/academic-support" className="btn-secondary inline-block">
                Learn More
              </Link>
            </div>

            <div className="card">
              <h2 className="text-3xl font-bold mb-4">Publications</h2>
              <p className="text-lg text-gray-700 mb-6">
                We publish books and educational materials that share knowledge, preserve cultural heritage, and inspire the next generation of leaders and thinkers.
              </p>
              <Link to="/programs/publications" className="btn-outline inline-block">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
