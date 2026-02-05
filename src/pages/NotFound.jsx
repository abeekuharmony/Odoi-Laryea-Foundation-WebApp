import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="section-padding text-center">
    <div className="section-container">
      <h1 className="text-6xl font-bold mb-6 text-primary-600">404</h1>
      <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
      <p className="text-xl text-gray-700 mb-8">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary">
        Go Home
      </Link>
    </div>
  </div>
);

export default NotFound;
