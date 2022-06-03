import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";

const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2 className="uppercase">
            Luxury Included vacations for two people
          </h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem tempore temporibus adipisci maiores molestias qui
            voluptatem, quia numquam quos sint ut neque esse maxime veritatis
            eligendi corporis hic vel dolor? Velit earum eligendi, voluptate
            animi nesciunt error quo corrupti tenetur provident tempora
            accusantium neque! Quibusdam laudantium quis corrupti architecto,
            aperiam temporibus, fugiat soluta magni explicabo quae ut aut, hic
            illo.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="uppercase py-1 mx-2">
                ALL-INCLUSive company for 20 years in a row
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <MdOutlineTravelExplore size={50} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="uppercase py-1 mx-2">
                ALL-INCLUSive company for 20 years in a row
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center border">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAVE</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Grand Antigua</option>
              <option>Perak</option>
              <option>Jauh</option>
              <option>Surabaya</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Check-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div className="flex flex-col my-2">
            <label>Check-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <div>
            <button className="w-full my-4">Rates & Availabillity</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
