import founderSamuel from "../assets/images/founder-samuel.jpg";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20">
        <div className="section-container">
          <h1 className="text-5xl md:text-6xl font-bold text-center mb-6">About Us</h1>
          <p className="text-xl text-center text-gray-700 max-w-3xl mx-auto">
            Discover our story, meet our founder, and learn about our mission to empower communities.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                The Odoi-Laryea Foundation was established with a vision to create lasting positive change in communities across Ghana and beyond. Founded by Samuel Odoi-Laryea, a successful entrepreneur and philanthropist, our organization is dedicated to empowering individuals through education, skills development, and knowledge sharing.
              </p>
              <p className="mb-4">
                What started as a personal commitment to give back to the community has grown into a comprehensive foundation with three core pillars: Capacity Building, Academic Support, and Publications. Each program is designed to address critical needs and create sustainable impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="section-padding bg-gray-50">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Meet Our Founder</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <img
                src={founderSamuel}
                alt="Samuel Odoi-Laryea - Founder & Executive Director"
                className="rounded-xl aspect-square object-cover shadow-lg w-full h-full"
              />
              <div>
                <h3 className="text-3xl font-bold mb-4">Samuel Odoi-Laryea</h3>
                <p className="text-xl text-primary-600 font-semibold mb-6">Founder & Executive Director</p>
                <div className="prose prose-lg text-gray-700 space-y-4">
                  <p>
                    Samuel Odoi-Laryea is a visionary entrepreneur and philanthropist committed to creating opportunities for underserved communities. With a successful track record in business, he leads four thriving enterprises while dedicating his time and resources to social intervention.
                  </p>
                  <p className="font-semibold text-gray-900">Business Portfolio:</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>AfroCloud InfoSys Limited - Technology Solutions</li>
                    <li>Desire Cosmetics - Beauty & Personal Care</li>
                    <li>Sub-Saharan Fashion - Fashion & Retail</li>
                    <li>Desiderata Investments - Financial Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card">
              <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700">
                To empower individuals and communities through comprehensive capacity building, academic support, and knowledge dissemination, creating sustainable pathways to success and self-sufficiency.
              </p>
            </div>
            <div className="card">
              <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
              <p className="text-lg text-gray-700">
                A world where every individual has access to the resources, education, and opportunities needed to reach their full potential and contribute meaningfully to society.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
