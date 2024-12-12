import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-white bg-blue-500">
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Love Travels. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
