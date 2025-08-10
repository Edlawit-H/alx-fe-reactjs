function UserProfile() {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="bg-white p-16 w-3/4 md:w-2/4 rounded-2xl shadow-2xl text-center">
        <img
          src="https://via.placeholder.com/200"
          alt="User"
          className="rounded-full w-52 h-52 mx-auto border-4 border-blue-400 shadow-lg"
        />
        <h1 className="text-4xl font-extrabold text-blue-900 mt-8 mb-4">
          John Doe
        </h1>
        <p className="text-gray-700 text-xl leading-relaxed">
          Developer at Example Co. Passionate about building amazing web
          experiences, creating beautiful designs, and solving real-world
          problems through code.
        </p>
      </div>
    </div>
  );
}

export default UserProfile;
