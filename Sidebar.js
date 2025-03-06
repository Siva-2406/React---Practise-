import React from "react";
import { BrowserRouter as Router, Route, Routes, NavLink, useParams, useLocation } from "react-router-dom";


const useActiveMenu = () => {
  const location = useLocation();
  return location.pathname.split("/")[1] || "dashboard"; 
};


const Sidebar = () => {
  const menuItems = [
    { name: "Dashboard", path: "dashboard", icon: "🔲" },
    { name: "My Calls", path: "my-calls", icon: "📖" },
    { name: "Leads", path: "leads", icon: "🔲" },
    { name: "KAM", path: "kam", icon: "🔲" },
    { name: "Contacts", path: "contacts", icon: "🔲" },
  ];

  const activeMenu = useActiveMenu();

  return (
    <div style={{ width: "200px", padding: "20px", background: "#f8f9fa", height: "100vh" }}>
      {menuItems.map((item) => (
        <NavLink
          key={item.path}
          to={`/${item.path}`}
          className={activeMenu === item.path ? "active-menu" : "menu-item"}
          style={{ display: "flex", alignItems: "center", padding: "10px", textDecoration: "none", color: "#333" }}
        >
          <span style={{ marginRight: "10px" }}>{item.icon}</span>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};


const Page = () => {
  const { page } = useParams();
  return <h2 style={{ padding: "20px" }}>You are on the {page} page</h2>;
};


const App = () => {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/:page" element={<Page />} />
            <Route path="/" element={<Page />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
