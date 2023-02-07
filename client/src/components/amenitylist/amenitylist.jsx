import React, { useState, useEffect } from "react";
import { AmenityListItem } from "../amenitylistitem/amenitylistitem.jsx";
import { Subtitle } from "../subtitle/subtitle.jsx";

import "./amenitylist.css";

const amenitiesTamplate = [
  { id: 1, isAvailable: false, title: "Air Conditioning" },
  { id: 2, isAvailable: false, title: "Alarm Clock" },
  { id: 3, isAvailable: false, title: "Balcony" },
  { id: 4, isAvailable: false, title: "Clothes Dryer" },
  { id: 5, isAvailable: false, title: "Coffee Maker" },
  { id: 6, isAvailable: false, title: "Deck / Patio" },
  { id: 7, isAvailable: false, title: "Dishes & Utensils" },
  { id: 8, isAvailable: false, title: "Dishwasher" },
  { id: 9, isAvailable: false, title: "Fireplace" },
  { id: 10, isAvailable: false, title: "Freezer" },
  { id: 11, isAvailable: false, title: "Garage" },
  { id: 12, isAvailable: false, title: "Heating" },
  { id: 13, isAvailable: false, title: "Ice Maker" },
  { id: 14, isAvailable: false, title: "Internet" },
  { id: 15, isAvailable: false, title: "Microwave" },
  { id: 16, isAvailable: false, title: "Outdoor Grill" },
  { id: 17, isAvailable: false, title: "Oven" },
  { id: 18, isAvailable: false, title: "Parking On Street" },
  { id: 19, isAvailable: false, title: "Refrigerator" },
  { id: 20, isAvailable: false, title: "Satellite / Cable TV" },
  { id: 21, isAvailable: false, title: "Security System" },
  { id: 22, isAvailable: false, title: "Sofa Bed" },
  { id: 23, isAvailable: false, title: "Stove" },
  { id: 24, isAvailable: false, title: "Telephone" },
  { id: 25, isAvailable: false, title: "Toaster" },
  { id: 26, isAvailable: false, title: "Washing Machine" },
  { id: 27, isAvailable: false, title: "Water Cooler" },
];

export function AmenityList({ amenities }) {
  const [propAmenities, setpropAmenities] = useState([...amenitiesTamplate]);

  useEffect(() => {
    const updatedAmenities = [...amenitiesTamplate];
    amenities.forEach((amenity) => {
      const amenityId = Number(amenity.id);
      if (amenityId === propAmenities[amenityId - 1].id) {
        updatedAmenities[amenityId - 1].isAvailable = true;
      }
    });

    setpropAmenities([...updatedAmenities]);
  }, [amenities]);

  return (
    <section className="amenity amenity__section">
      <Subtitle>Amenities</Subtitle>
      <ul className="amenity__list">
        {propAmenities.map((item) => (
          <AmenityListItem item={item} key={item.title} />
        ))}
      </ul>
    </section>
  );
}
