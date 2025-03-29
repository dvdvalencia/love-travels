const DestinationDetails = ({ data }) => {
    if (!data) return null;
  
    return (
      <div className="flex flex-col items-center justify-center w-full min-h-screen text-white">
        <div className="w-11/12 p-4 mt-6 bg-black bg-opacity-50 rounded-lg md:w-2/3">
          <div className="p-4 bg-gray-800 border border-gray-600 rounded-lg bg-opacity-70">
            <h2 className="text-2xl font-semibold text-center text-white">¿Qué incluye?</h2>
            <ul className="mt-4 space-y-2 text-white list-disc list-inside">
            {data.incluye && Object.entries(data.incluye).map(([key, value]) => (
              <li key={key} className="text-lg"><strong>{key.replace(/_/g, ' ')}:</strong> {value}</li>
            ))}
          </ul>
        </div>
        </div>
      </div>
    );
  };
  
  export default DestinationDetails;