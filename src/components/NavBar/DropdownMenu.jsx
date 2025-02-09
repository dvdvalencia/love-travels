const DropdownMenu = ({ locations, customRoutes }) => {
  return (
    <div className="absolute z-10 w-64 mt-2 bg-white rounded-lg shadow-lg">
      <ul className="py-2 text-sm text-gray-700 divide-y divide-gray-100 dark:bg-gray-700 dark:text-gray-200">
        {locations.map((location) => (
          <li key={location}>
            <a
              href={customRoutes[location] ? customRoutes[location] : `#${location.replace(/\s+/g, "-").toLowerCase()}`}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              {location}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;
