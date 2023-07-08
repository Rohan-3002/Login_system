import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";

export default function Username() {
  return (
    <div className="container mx-auto">
      <div className="flex h-screen">
        <div>
          <div className="title flex flex-col items-center">
            <h4 className="text-5xl font-bold">Hello Again</h4>
            <span className="py-4 text-xl w-2/3 text-center text-gray-500">
              Explore more by connecting with us.
            </span>
          </div>
          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={profile} alt="avatar" />
            </div>
            <div className="textbox flex flex-col items-center gap-6">
              <input type="text" placeholder="Username" />
              <button typeof="submit">Let's Go</button>
            </div>
            <div className="text-center py-4">
              <span>
                Not a Member?{" "}
                <Link to="/register" className="text-red-500">
                  Register
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
