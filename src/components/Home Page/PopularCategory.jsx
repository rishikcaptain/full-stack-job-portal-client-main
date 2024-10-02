import React from "react";

const category = [
  { id: 1, name: "Plumber", count: "2,345 Open Positions" },
  { id: 2, name: "Electrician", count: "3,289 Open Positions" },
  { id: 3, name: "Carpenter", count: "1,879 Open Positions" },
  { id: 4, name: "Painter", count: "1,543 Open Positions" },
  { id: 5, name: "General Handyman", count: "4,032 Open Positions" },
  { id: 6, name: "HVAC Technician", count: "1,678 Open Positions" },
  { id: 7, name: "Mason", count: "1,245 Open Positions" },
  { id: 8, name: "Landscaper", count: "2,789 Open Positions" },
  { id: 9, name: "Roofer", count: "998 Open Positions" },
  { id: 10, name: "Glazier", count: "500 Open Positions" },
  { id: 11, name: "Tiler", count: "768 Open Positions" },
  { id: 12, name: "Welder", count: "1,110 Open Positions" },
];

const PopularCategory = () => {
  return (
    <div className="max-w-7xl mx-auto md:px-12 px-6 mb-20">
      <h2 className="md:text-3xl text-2xl font-semibold mb-5">Most Popular Vacancies</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {
            category.map(({name, id, count}) => (
                <div key={id}>
                    <p className="text-lg text-[#18191C]">{name}</p>
                    <p className="text-sm text-[#767F8C]">{count}</p>
                </div>
            ))
        }
      </div>

    </div>
  );
};

export default PopularCategory;
