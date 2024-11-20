import React from "react";
import { events } from "../utils/events";
import { Link } from "react-router-dom";
import RandomEvents from "./RandomEvents";
import randomColor from "randomcolor";
import "../text.css";
const  EventHome = ()=>{

    return(
    <div className="event-header ">
        <div className="flex justify-center flex-wrap">
          <Link className="group m-3" src="https://google.com">
            <div className="event-container  border border-gray-200 rounded-lg shadow-md overflow-hidden  ">
              <div className="p-5">
                <Link src="https://google.com">
                <h3 className="text-2xl font-semibold text-white text-center  group-hover:text-blue-500">
                 CSE Events
                </h3> </Link>
                <hr className="my-2" />
                <div className="flex items-center">
                  <img
                    src="https://www.abacus.org.in/static/media/Starlight.755208567b9aa0f291d4.png"
                    alt="dummy"
                    className="w-full h-64 object-cover rounded-md"
                  />
                </div>
                <div className="btn flex justify-center">
                <button className="mt-4 bg-darkgrey text-neonblue text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-greenblue hover:scale-105 transition-all duration-300">
        <Link to="/events">Explore Events</Link>
                    </button>
                </div>
              </div>
            </div>
          </Link>
    <Link className="group m-3 flex flex-wrap" src="">
            <div className="event-container   border border-gray-200 rounded-lg shadow-md ">
              <div className="p-5">
                <Link src="/about">
                <h3 className="text-2xl font-semibold text-white text-center  group-hover:text-blue-500">
                 Circuit Events
                </h3> </Link>
                <hr className="my-2" />
                <div className="flex justify-center items-center">
                  <img
                    src="https://www.abacus.org.in/static/media/Starlight.755208567b9aa0f291d4.png"
                    alt="dummy"
                    className="w-full h-64 object-cover rounded-md"
                  />

                  
                </div>
                <div className="btn flex justify-center">
                <button className="mt-4 bg-darkgrey text-neonblue text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-greenblue hover:scale-105 transition-all duration-300">
        <Link to="/events">Explore Events</Link>
                    </button>
                </div>
      
              </div>
            </div>
          </Link>

          </div>

          
             </div>

             
    );
};

export default EventHome;
