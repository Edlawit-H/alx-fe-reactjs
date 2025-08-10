// src/components/UserProfile.jsx

function UserProfile() {
  return (
    <div
      className="
        user-profile
        bg-gray-100 p-8 max-w-sm mx-auto my-20 rounded-lg shadow-lg
        sm:max-w-xs sm:p-4
        md:max-w-sm md:p-8
      "
    >
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className="
          rounded-full mx-auto
          w-24 h-24 sm:w-24 sm:h-24 md:w-36 md:h-36
        "
      />
      <h1
        className="
          text-blue-800 text-xl my-4
          sm:text-lg
          md:text-xl
          text-center
        "
      >
        John Doe
      </h1>
      <p
        className="
          text-gray-600 text-base
          sm:text-sm
          md:text-base
          text-center
        "
      >
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
