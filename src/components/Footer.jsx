import React from "react";

const Footer = () => {
  return (
    <footer className="py-6 text-black bg-bg-cover" style={{ backgroundImage: 'url(https://static.vecteezy.com/system/resources/previews/001/317/655/non_2x/arid-lands-background-photo.jpg)' }}>
      <div className="text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Love Travels. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
