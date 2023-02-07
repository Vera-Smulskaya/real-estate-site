import React from "react";
import "./amenitylistitem.css";

export function AmenityListItem({ item: { isAvailable, title } }) {
  const status = isAvailable ? "✓" : "✗";

  return (
    <li className="amenity__item">
      <span className="amenity__status">{status}</span>
      <span className="amenity__title">{title}</span>
    </li>
  );
}
