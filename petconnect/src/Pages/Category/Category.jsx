import React from "react";
import catImg from "../../assets/images/cat.png";
import dogImg from "../../assets/images/dog.png";
import rabbitImg from "../../assets/images/rabbit.png";
import fishImg from "../../assets/images/fish.png";
import horseImg from "../../assets/images/horse.png";
import chickenImg from "../../assets/images/chicken.png";
import duckImg from "../../assets/images/duck.png";

const categories = [
  { name: "Cats", image: catImg },
  { name: "Dogs", image: dogImg },
  { name: "Rabbits", image: rabbitImg },
  { name: "Fish", image: fishImg },
  { name: "Horse", image: horseImg },
  { name: "Chicken", image: chickenImg },
  { name: "Ducks", image: duckImg },
];

const Category = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Pets Category
          </h2>
          <p className="mt-3 text-gray-600">
            Browse pets by category and find your perfect companion
          </p>
        </div>

        {/* Categories Grid */}

        <div className="grid grid-cols-2  md:grid-cols-4  gap-6">
          {categories.map((category) => (
            <div
              key={category.name}
              className="cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="p-5 flex flex-col items-center text-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-20 h-20 object-contain mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-700">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
