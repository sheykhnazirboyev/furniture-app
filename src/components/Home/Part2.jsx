/* eslint-disable no-unused-vars */
import React from "react";
import Cards from "../../assets/icons/Cards.svg";
import bedroomImage from "../../assets/images/bedroom.png";
import livingImage from "../../assets/images/living.png";
import diningRoomImage from "../../assets/images/dining.png";
import { useFetchCategories } from "furniture-app/src/hooks/UseFetch.jsx";
import "./Part2.css";  // Import the CSS file

const Part2 = () => {
  const { data: cards, loading, error } = useFetchCategories();

  // Mapping for the image filenames to imported images
  const imageMap = {
    "bedroom.png": bedroomImage,
    "living.png": livingImage,
    "dining.png": diningRoomImage,
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data: {error.message}</div>;

  return (
    <div className="flex flex-col items-center mt-[70px] mb-[97px]">
      <img src={Cards} alt="Cards" className="cursor-pointer mb-8" />
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => {
          const imagePath = imageMap[card.img];  // Get the correct image path from the mapping
          return (
            <div key={card.id} className="card">
              <img 
                src={imagePath}  // Reference the mapped image path
                alt={card.name} 
                className="card-image" 
              />
              <h3 className="card-title">{card.name}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Part2;