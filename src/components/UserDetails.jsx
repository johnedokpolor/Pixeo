import React from "react";

const UserDetails = () => {
  const userData = {
    name: "User",
    email: "user@email.com",
  };
  return (
    <div className="group relative md:cursor-pointer">
      <div className="relative bottom-[5px] mt-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#386bbd] text-white">
        {userData.name.slice(0, 1)}
      </div>
      <div className="absolute right-0 z-[50] mt-3 hidden w-[300px] flex-col items-center rounded-xl bg-gray-200 p-3 shadow-lg group-hover:flex dark:bg-[#1f1f1f] md:w-[400px]">
        <p className="text-center text-lg">{userData.email}</p>
        <div className="mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-[#386bbd] text-white">
          {userData.name.slice(0, 1)}
        </div>

        <p className="mt-3">Hi, {userData.name}!</p>
        <button className="w-/13 mx-auto mt-4 rounded-md border border-gray-500 bg-transparent p-3 text-base">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default UserDetails;
