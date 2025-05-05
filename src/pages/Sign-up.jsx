import React, { useState } from "react";

const Sign_up = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [nin, setNin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [error, setError] = useState(false);

  const clickVerify = (e) => {
    e.preventDefault();
    if (fullName && email && nin && password && confirmPass && isToggled) {
      alert(
        "here are the details  " +
          fullName +
          "  " +
          email +
          "  " +
          nin +
          "  " +
          password +
          "  " +
          confirmPass
      );
    } else {
      setError(!error);
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 to-blue-600 flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign-up
        </h2>
        <form onSubmit={clickVerify} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full-Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Enter your Full-Name"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              NIN
            </label>
            <input
              type="number"
              value={nin}
              onChange={(e) => setNin(e.target.value)}
              placeholder="Enter your NIN"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPass}
              onChange={(e) => setConfirmPass(e.target.value)}
              placeholder="Confirm your password"
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-10">
            <input
              type="checkbox"
              checked={isToggled}
              onChange={(e) => setIsToggled(e.target.value)}
            />
            <p className="decoration-none hover:border-b-2 hover:border-b-black">
              <a href="">Terms and Condition</a>
            </p>
          </div>

          {error && <p className="text-red-600">fill in the right details</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Sign In
          </button>
        </form>
        <div className="text-center mt-4 text-sm text-gray-600">
          <a href="#" className="hover:underline">
            Login
          </a>{" "}
          |
          <a href="#" className="hover:underline ml-2">
            Sign-up with Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sign_up;
