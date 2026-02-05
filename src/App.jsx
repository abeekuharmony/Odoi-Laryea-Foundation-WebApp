import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Programs from "./pages/Programs";
import CapacityBuilding from "./pages/programs/CapacityBuilding";
import AcademicSupport from "./pages/programs/AcademicSupport";
import Publications from "./pages/programs/Publications";
import Impact from "./pages/Impact";
import GetInvolved from "./pages/GetInvolved";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Ikigai from "./pages/Ikigai";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="programs" element={<Programs />} />
          <Route
            path="programs/capacity-building"
            element={<CapacityBuilding />}
          />
          <Route
            path="programs/academic-support"
            element={<AcademicSupport />}
          />
          <Route path="programs/publications" element={<Publications />} />
          <Route path="impact" element={<Impact />} />
          <Route path="get-involved" element={<GetInvolved />} />
          <Route path="blog" element={<Blog />} />
          <Route path="ikigai" element={<Ikigai />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
