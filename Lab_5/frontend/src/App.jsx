// import "./App.css";
// import ContactsApp from "./Components/ContactsApp";

// function App() {
//   return (
//     <>
//       <ContactsApp />
//     </>
//   );
// }

// export default App;



// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import HomePage from "./Components/HomePage";
// import Register from "./Components/Register";
// import PageNotFound from "./Components/PageNotFound";
// import "./App.css";
// import Login from "./Components/Login";
// import PrivatePage from "./Components/PrivatePage";
// import PrivateRoute from "./Components/PrivateRoute";
// import NotAuthorized from "./Components/NotAuthorized";

// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           <Route element={<PrivateRoute />}>
//             <Route path="/private" element={<PrivatePage />} />
//           </Route>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login/>} />
//           <Route path="/not-authorized" element={<NotAuthorized />} />
//           {/* <Route path="*" element={<PageNotFound />} /> */}
//           <Route path="*" element={<div>404 - Page Not Found</div>} />
//         </Routes>
//       </Router>
//     </>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Register from "./Components/Register";
import PageNotFound from "./Components/PageNotFound";
import "./App.css";
import Login from "./Components/Login";
import PrivatePage from "./Components/PrivatePage";
import PrivateRoute from "./Components/PrivateRoute";
import NotAuthorized from "./Components/NotAuthorized";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="/private" element={<PrivatePage />} />
          </Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/not-authorized" element={<NotAuthorized />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;