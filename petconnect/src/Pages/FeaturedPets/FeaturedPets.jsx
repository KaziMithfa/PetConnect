import dogImg from "../../assets/images/dog.png";
import catImg from "../../assets/images/cat.png";
import rabbitImg from "../../assets/images/rabbit.png";

const pets = [
  { name: "Buddy", type: "Dog", age: "2 Years", image: dogImg },
  { name: "Milo", type: "Cat", age: "1 Year", image: catImg },
  { name: "Luna", type: "Rabbit", age: "6 Months", image: rabbitImg },
];

const FeaturedPets = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured Pets for Adoption
          </h2>
          <p className="mt-4 text-gray-600">
            Meet some of our lovely pets waiting for a forever home
          </p>
        </div>

        {/* Pets Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {pets.map((pet) => (
            <div
              key={pet.name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-52 object-cover rounded-t-xl"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-800">
                  {pet.name}
                </h3>
                <p className="text-gray-600">
                  {pet.type} • {pet.age}
                </p>
                <button className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPets;
