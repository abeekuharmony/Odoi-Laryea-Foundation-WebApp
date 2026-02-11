import capacityBuildingImg from "../../assets/images/capacity-building.jpg";

const CapacityBuilding = () => (
  <div>
    {/* Hero Section with Image */}
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${capacityBuildingImg})` }}
      />
      <div className="section-container relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">Capacity Building</h1>
        <p className="text-xl text-primary-100 max-w-3xl">
          Equipping individuals with skills and knowledge to thrive in their careers and contribute to their communities.
        </p>
      </div>
    </section>

    {/* Content Section */}
    <section className="section-padding">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <img
            src={capacityBuildingImg}
            alt="Capacity Building Program"
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Building Skills for Success</h2>
            <p className="text-lg text-gray-700 mb-4">
              Our Capacity Building program focuses on developing practical skills and knowledge that empower individuals to succeed in their chosen fields.
            </p>
            <p className="text-gray-700">
              Through workshops, training sessions, and hands-on experiences, we're creating opportunities for personal and professional growth.
            </p>
          </div>
        </div>
        <p className="text-xl text-gray-700 text-center">More details about our capacity building programs coming soon...</p>
      </div>
    </section>
  </div>
);

export default CapacityBuilding;
