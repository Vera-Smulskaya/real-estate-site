import React from "react";
import { render, screen } from "@testing-library/react";
import { PropertyCard } from "./propertyCard";
import { BrowserRouter } from "react-router-dom";

const sum = (a, b) => {
  return a + b;
};
describe("Test does component <PropertyCard/> renders all info according to variabele properties:", () => {
  let props = {};
  let component;
  let refs;

  beforeEach(() => {
    props = {
      prop_id: "A0001",
      price: 1022000,
      preview:
        "https://letsenhance.io/static/b8eda2f8914d307d52f725199fb0c5e6/62e7b/MainBefore.jpg",
      mode: "grid",
      deal: "sale",
      type: "townhouse",
      title: "Super house",
      bedrooms: 2,
      bathrooms: 1,
      year: 1990,
      area: 200,
      city: "Mykolaiv",
      state: "UA",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto odit, minima nobis nostrum dignissimos rerum cupiditate culpa in ut vero nesciunt alias voluptatum fuga! Voluptatem, laborum hic vero sed rerum nostrum ipsam dolore alias ipsum magnam ducimus repellat maxime cupiditate sit! A labore perferendis, odit quos eius hic commodi veritatis asperiores, harum quas qui officiis eum, magnam nostrum facilis impedit doloribus iste nemo. Possimus dolores minima dolorem voluptate nihil quasi ullam aliquam, itaque ipsum soluta? Optio, veniam doloribus officia accusantium mollitia dolores dolorem veritatis cupiditate delectus, officiis adipisci esse! Vitae, commodi. Est natus iusto dignissimos quae dolorem error libero nam?",
    };

    return (component = render(
      <BrowserRouter>
        <PropertyCard {...props} />
      </BrowserRouter>
    ));
  });

  beforeEach(() => {
    return (refs = {
      descrptn: screen.getByText(/Lorem ipsum dolor/i),
      image: screen.getByAltText(/Property view/i),
      price: component.container.querySelector(".price"),
      text: component.container.querySelector(".description-text"),
    });
  });

  test("User can see property description", () => {
    expect(refs.descrptn).not.toBeUndefined();
    expect(refs.descrptn).toBeInTheDocument();
    expect(refs.descrptn).not.toBeNull();

    expect(refs.image).not.toBeUndefined();
    expect(refs.image).toBeInTheDocument();
    expect(refs.image).not.toBeNull();

    expect(refs.price).not.toBeUndefined();
    expect(refs.price).toBeInTheDocument();
    expect(refs.price).not.toBeNull();
    expect(refs.price).toHaveTextContent("$ 1 022 000");

    expect(screen.getByText(/sale/i)).toBeInTheDocument();
    expect(screen.getByText(/townhouse/i)).toBeInTheDocument();

    expect(screen.getByText(/Super house/i)).toBeInTheDocument();
    expect(screen.getByText(/Mykolaiv/i)).toBeInTheDocument();
    expect(screen.getByText(/UA/i)).toBeInTheDocument();
  });

  test("Property card changes mode to GRID", () => {
    const sectionDescription =
      component.container.querySelector(".description_grid");
    expect(sectionDescription).toHaveClass("description_grid");
  });

  test("Property card changes mode to LIST", () => {
    props.mode = "list";
    component = render(
      <BrowserRouter>
        <PropertyCard {...props} />
      </BrowserRouter>
    );
    const sectionDescription =
      component.container.querySelector(".description_list");
    expect(sectionDescription).toHaveClass("description_list");
  });

  test("Description in prewiev card is cutting", () => {
    expect(refs.text.textContent.length).toBeLessThanOrEqual(218);

    props.description = "Lorem ipsum dolor sit";
    component = render(
      <BrowserRouter>
        <PropertyCard {...props} />
      </BrowserRouter>
    );
    refs.text = component.container.querySelector(".description-text");
    expect(refs.text.textContent.length).toBe(props.description.length);
  });
});
