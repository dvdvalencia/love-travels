const NavItem = ({ label, isOpen, toggle, children }) => {
    return (
      <li className="relative">
        <button
          onClick={toggle}
          className="flex px-8 py-2 mx-auto text-lg text-white bg-green-600 rounded hover:bg-green-700 "
        >
          {label}
          <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {isOpen && children}
      </li>
    );
  };
  
  export default NavItem;
