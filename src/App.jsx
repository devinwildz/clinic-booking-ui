import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Blogs from './Componenets/Blog/Blogs';
import Booking from './Componenets/Booking/Booking';
import Doctors from './Componenets/Doctors/Doctors';
import Feature from './Componenets/Feature/Feature';
import HomeSec from './Componenets/HomeSection.jsx/HomeSec';
import Navbar from './Componenets/Navbar/Navbar';
import Sepcs from './Componenets/Specialities/Sepcs';
import Footer from './Componenets/Footer/Footer';
import Register from './pages/Register';
import Login from './pages/Login';
import Contact from './pages/Contact';
import BlogPage from './pages/BlogPage';
import DoctorsPage from './pages/DoctorsPage';
import SpecialitiesPage from './pages/SpecialitiesPage';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex-grow">
                <HomeSec />
                <Booking />
                <Sepcs />
                <Doctors />
                <Feature />
                <Blogs />
              </main>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/doctors" element={<DoctorsPage />} />
          <Route path="/specialities" element={<SpecialitiesPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
