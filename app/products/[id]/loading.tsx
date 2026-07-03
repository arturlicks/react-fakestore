const CardLoading = () => {
  return (
    <div className="w-full justify-items-center">
      <div className="flex flex-col shadow-xl rounded-2xl p-4 w-xl animate-pulse">
        
        {/* image */}
        <div className="bg-gray-300 h-64 w-full rounded-lg"></div>

        {/* title */}
        <div className="bg-gray-300 h-6 w-3/4 mt-4 rounded"></div>

        {/* category */}
        <div className="bg-gray-300 h-4 w-1/2 mt-2 rounded"></div>

        {/* price */}
        <div className="bg-gray-300 h-5 w-1/3 mt-2 rounded"></div>

        {/* description */}
        <div className="bg-gray-300 h-4 w-full mt-4 rounded"></div>
        <div className="bg-gray-300 h-4 w-full mt-2 rounded"></div>
        <div className="bg-gray-300 h-4 w-5/6 mt-2 rounded"></div>

        {/* buttons */}
        <div className="bg-gray-300 h-10 w-full mt-4 rounded"></div>
        <div className="bg-gray-300 h-10 w-full mt-2 rounded"></div>
      </div>
    </div>
  );
};

export default CardLoading;