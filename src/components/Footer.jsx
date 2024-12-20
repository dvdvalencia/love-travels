import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-black bg-bg-cover" style={{ backgroundImage: 'url(https://th.bing.com/th/id/OIP.tdxhElXNjHrjnxxzBJt5jQHaE7?w=626&h=417&rs=1&pid=ImgDetMain)' }}>
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Love Travels. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
