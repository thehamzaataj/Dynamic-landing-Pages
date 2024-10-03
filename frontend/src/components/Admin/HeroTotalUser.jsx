import React from "react";
const HeroTotalUser = ({ isDarkMode }) => {
  return (
    <div
      className={` rounded-lg shadow-md flex p-6 ${
        isDarkMode ? "bg-[#1c1e21] text-white" : "bg-white"
      }`}
    >
      <div className="flex flex-col justify-center flex-1 pr-6">
        <h1 className="text-xl font-semibold text-[#696CFF]">
          Congratulations John!
        </h1>
        <p
          className={` pt-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
        >
          You have done 72% more sales today.
          <br />
          Check your new badge in your profile.
        </p>
        <div className="py-4">
          <button className="bg-[#E7E7FF] rounded-md text-[#696CFF] px-3 py-1 hover:text-white hover:bg-[#4c4ff3]">
            View Badges
          </button>
        </div>
      </div>

      <div className="flex-shrink-0">
        <img
          src="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/assets/img/illustrations/man-with-laptop.png"
          alt="Man with laptop"
          className="w-42 h-auto"
        />
      </div>
    </div>
  );
};

export default HeroTotalUser;
