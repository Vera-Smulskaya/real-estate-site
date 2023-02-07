import { useState } from "react";
import { Subtitle } from "../subtitle/subtitle.jsx";
import "./floorPlans.css";

export function FloorPlans({ plans }) {
  const [currentFloor, setCurrentFloor] = useState(plans[0]);
  const changeFloor = (choosenFloor) => setCurrentFloor(choosenFloor);

  if (plans.length === 0) return null;
  return (
    <section className="floorplan__section">
      <Subtitle>FLOOR PLANS</Subtitle>
      <div className="floorplan__frame">
        <nav className="floorplan__toggle">
          <ol className="floorplan__menu">
            {plans.map((plan) => {
              return (
                <li
                  className={`floorplan__menu-item ${
                    plan.name === currentFloor.name ? "currentFloor" : ""
                  }`}
                  key={plan.name}
                  onClick={() => changeFloor(plan)}
                >
                  {plan.name}
                </li>
              );
            })}
          </ol>
        </nav>
        <img
          src={currentFloor.url}
          alt={`${currentFloor.name}'s plan'`}
          className="floorplan__picture"
        />
      </div>
    </section>
  );
}
