function UserProfile() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-4 md:px-8">
      <div className="bg-white p-4 sm:p-4 md:p-8 max-w-xs sm:max-w-xs md:max-w-sm w-full rounded-xl shadow-xl text-center">
        <img
          src="https://via.placeholder.com/180"
          alt="User"
          className="rounded-full border-4 border-blue-300 mx-auto
                     w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36"
        />
        <h1 className="mt-6 font-bold text-lg sm:text-lg md:text-xl text-gray-900">
          John Doe
        </h1>
        <p className="mt-2 text-gray-600 text-sm sm:text-sm md:text-base">
          Full Stack Developer and Tailwind CSS Enthusiast
        </p>
      </div>
    </div>
  );
}
