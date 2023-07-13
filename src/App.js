// import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
// import { Route, Routes} from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";

// function App() {
//   return (
//     <Routes>
//       <Route
//         path="/"
//         element={
//           <>
//             <Navbar />
//             <Home />
//             <Footer />
//           </>
//         }
//       />
//     </Routes>
//   );
// }

// export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AboutUs from "./Components/AboutUs";
import OrderProcessing from "./Components/OrderProcessing";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/OrderProcessing" element={<OrderProcessing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
