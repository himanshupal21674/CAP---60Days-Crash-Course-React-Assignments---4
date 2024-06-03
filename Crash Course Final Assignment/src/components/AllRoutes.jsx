import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact ";
import Tickets from "./pages/Tickets";
import Logout from "./pages/Logout";
import TicketView from "./pages/TicketView ";
import TicketCreate from "./pages/TicketCreate";
import TicketEdit from "./pages/TicketEdit";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tickets" element={<Tickets />} />
      <Route path="/ticketview" element={<TicketView />} />
      <Route path="/ticketcreate" element={<TicketCreate />} />
      <Route path="/ticketedit" element={<TicketEdit />} />

      <Route path="/logout" element={<Logout />} />

      <Route path="/" element={<Login />} />
    </Routes>
  );
}
export default AllRoutes;
