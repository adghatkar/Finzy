import React from "react"; 
import {
  FaMoneyBillWave,
  FaRegCalendarAlt,
  FaSignInAlt,
  FaList,
  FaChartPie,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      <div
        className="bg-black text-white py-20 px-4"
        style={{
          backgroundImage: `url('/money.jpg')`, // Replace with your image file name
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Heading */}
          <h1 className="text-5xl font-bold text-center">
            Track Your Expenses Effortlessly
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-xl text-center">
            Manage your finances with a modern solution designed for you.
          </p>

          {/* Feature Icons */}
          <div className="flex space-x-8 mt-10">
            <div className="flex flex-col items-center">
              <FaMoneyBillWave className="text-3xl text-white" />
              <p className="mt-2 text-white">Efficient Tracking</p>
            </div>
            <div className="flex flex-col items-center">
              <FaFilter className="text-3xl text-white" />
              <p className="mt-2 text-white">Transactions Filtering</p>
            </div>
            <div className="flex flex-col items-center">
              <IoIosStats className="text-3xl text-white" />
              <p className="mt-2 text-white">Insightful Reports</p>
            </div>
          </div>

          {/* Call to Action Button */}
          <Link to="/register">
            <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      {/* How it works */}
      <div className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-black">
          How It Works
        </h2>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-black text-white mb-4">
              <FaSignInAlt className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold text-black">Sign Up</h3>
            <p className="text-black">Register and start managing your expenses in a minute.</p>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-black text-white mb-4">
              <FaList className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold text-black">Add Transactions</h3>
            <p className="text-black">Quickly add income and expenses to your account.</p>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="p-4 rounded-full bg-black text-white mb-4">
              <FaChartPie className="text-xl" />
            </div>
            <h3 className="mb-2 font-semibold text-black">View Reports</h3>
            <p className="text-black">See insightful reports & graphs of your finances.</p>
          </div>
        </div>
      </div>
      {/* Testimonials */}
      <div className="bg-white py-20 px-4">
        <h2 className="text-3xl font-bold text-center text-black">
          What Our Users Say
        </h2>
        <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-xl text-black" />
            <p className="mt-4">
              "This app has revolutionized the way I track my expenses. Highly
              intuitive and user-friendly."
            </p>
            <p className="mt-4 font-bold">- Jane Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaQuoteLeft className="text-xl text-black" />
            <p className="mt-4">
              "Finally, a hassle-free way to manage my finances. The insights
              feature is a game changer!"
            </p>
            <p className="mt-4 font-bold">- John Smith</p>
          </div>
        </div>
      </div>
      {/* CTA */}
      <div className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="mt-4">
            Join us now and start managing your expenses like a pro!
          </p>
          <Link to="/register">
            <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
              Sign Up For Free
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
