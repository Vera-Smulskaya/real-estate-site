import { Component } from "react";

import {Pagination} from "../components/pagination/pagination.jsx";

import {Footer} from "../components/footer/footer.jsx";

import {PropertyCard} from "../components/propertyCard/propertyCard.jsx";

import {AmenityList} from "../components/amenitylist/amenitylist.jsx";

import {PropertyDetails} from "../components/propertyDetails/propertyDetails.jsx";

import {Title} from "../components/title/title.jsx";

import Header from "../components/header/header";

import {ViewModeToggle} from "../components/ViewModeToggle/ViewModeToggle.jsx";

import {Description} from "../components/description/description.jsx";

import {Subtitle} from "../components/subtitle/subtitle.jsx";

import {AgentCard} from "../components/agentCard/agentCard.jsx";

import {FloorPlans} from "../components/floorPlans/floorPlans.jsx";

import {Gallery} from "../components/Gallery/Gallery.jsx";

import { Link } from "react-router-dom";

import {PropertyList} from "../components/propertyList/propertyList.jsx";

import {Features} from "../components/features/features.jsx";

import {GoHomeButton} from "../components/goHomeButton/GoHomeButton.jsx";

import  Input  from "../components/input/input.jsx";

import {DropDown} from "../components/dropDown/DropDown.jsx";

import {Sidebar} from "../components/sidebar/sidebar.jsx";

import {PropertyFilter} from "../components/propertyFilter/propertyFilter.jsx";

import { ContactForm } from "../components/contactForm/contactForm.jsx";



export default class ComponentsGallery extends Component {

  state = {
    property: null,
    isLoading: true,
  };

  componentDidMount() {
    const { property_id } = this.props.match.params;

    fetch(`/api/properties/${property_id}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ property: data.property });
      })
      .catch(() => this.setState({ error: "Something went wrong" }))
      .finally(() => this.setState({ isLoading: false }));
  }

  render() {
    const { apartaments } = this.state.property;
    return <div>

      <Link to="/properties">Properties</Link>

      <Header title="Properties" />

      <DropDown
        onChange={(name, nextValue) => console.log(`Value changed to ${name} and ${nextValue}`)}
        value="apt"
        name='propertyType'
        options={[
          { 'value': 'single', 'label': 'Single-family' },
          { 'value': 'house', 'label': 'Townhouse' },
          { 'value': 'apt', 'label': 'Apartment' },
        ]}
        placeholder="Type"
      />

      <ViewModeToggle mode="grid" onClick={mode => console.log(`View mode changed to ${mode}`)} />

        <GoHomeButton />

        <Gallery pictures={[
          "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImZ5bDE1emd3YTdmYzEtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.YAMeK2W-sw2n0PRoaYZUWnjgb3-li1hDdEhZxR1TB2Q/image;s=1280x1024;q=80",
          "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6Ijlpb3FxOHdscDg4ODEtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.nx5hjgihxP4j40cKX2U0r0eai6DcbDEuZNNzr6EQ5Bw/image;s=1280x1024;q=80",
          "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InVtNTAxZDVrZXNiMDMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.UNDsJPxwGoTRS5uAQPQJDD9jdvu7RfRG-f_rkK7rx6k/image;s=1280x1024;q=80",
          "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InEwdnpwempjM3R5YjItQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.ZZSYlUKNTJ3BSuvKe52tb19EDzYwHGL-a6Gu8QTnz7U/image;s=1280x1024;q=80",
          "https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InNtMG9oamd2ZGllNjItQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.8dNfmMw1opWxzknWxScMhnzQwjwTySxwl5OOACcHJ0Y/image;s=1280x1024;q=80"]
        } />

      <Pagination
        pages={15}
        page={4}
        onChange={(page) => console.log(`Page changed to ${page}`)}
      />

      <PropertyCard
        mode="grid"
        picture="https://storage01.tea.ru/medialibrary/2d0/2d0f6ed220d03e626e10a9d5712a4c89/92cce96f3a2c1e7e00e5f3e00f31a65f.jpg"
        link="some link"
        deal="sale"
        type="townhouse"
        price={2850000}
        title="Dream Apartment for Young Family"
        location={['Pasadena', 'California']}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed arcu lectus. Praesent eget turpis vehicula, tempor libero sodales, lobortis erat. Etiam nulla odio, imperdiet sed tellus at, rhoncus commodo diam…"
        details={{ area: 1320, bedrooms: 2, bathrooms: 2 }}
      />

      <Footer />

      <Description>Verona at Parkbridge II by DR Horton. Conveniently located in Natomas Sacramento. These 2020 build open, bright, and ready-to-move-in home is available for you. It features a unique floor plan with a 1932 sq.ft/4 bedroom/3 fall bath/Loft/2 story property. Room available downstairs for guests or in-laws. With lots of upgrades from floors to kitchen cabinets and black flash, you are sure to find The Home of your Dreams! These exterior designs are called Prairie at Verona. Homeowners will enjoy close by schools, shopping, entertainment, restaurant, and recreational opportunities close by as well as the charm of Downtown Sacramento. Nearby freeway access to Interstate 5 and Hwy 80, and be within close proximity to Placer County and the Bay Area. Great for First Time Buyers and investors. Must see and available to show.</Description>

      <AmenityList amenities={[
        { isAvailable: true, title: "Air Conditioning" },
        { isAvailable: false, title: "Alarm Clock" },
        { isAvailable: true, title: "Balcony" },
        { isAvailable: false, title: "Clothes Dryer" },
        { isAvailable: false, title: "Coffee Maker" },
        { isAvailable: true, title: "Deck / Patio" },
        { isAvailable: false, title: "Dishes & Utensils" },
        { isAvailable: true, title: "Dishwasher" },
        { isAvailable: true, title: "Fireplace" },
        { isAvailable: true, title: "Freezer" },
        { isAvailable: true, title: "Garage" },
        { isAvailable: true, title: "Heating" },
        { isAvailable: true, title: "Ice Maker" },
        { isAvailable: false, title: "Internet" },
        { isAvailable: true, title: "Microwave" },
        { isAvailable: true, title: "Outdoor Grill" },
        { isAvailable: true, title: "Oven" },
        { isAvailable: false, title: "Parking On Street" },
        { isAvailable: true, title: "Refrigerator" },
        { isAvailable: false, title: "Satellite / Cable TV" },
        { isAvailable: true, title: "Security System" },
        { isAvailable: false, title: "Sofa Bed" },
        { isAvailable: true, title: "Stove" },
        { isAvailable: false, title: "Telephone" },
        { isAvailable: false, title: "Toaster" },
        { isAvailable: true, title: "Washing Machine" },
        { isAvailable: false, title: "Water Cooler" },
      ]} />

      <Subtitle>Floor plans</Subtitle>

      <Title
        name="Verona at Parkbridge II by DR Horton"
        location={['Natomas', 'Sacramento']}
        type="apartment"
        details={{ area: 1320, bedrooms: 2, bathrooms: 2 }}
        price={27000}
        id="A003N" />

      <PropertyDetails details={{ area: 1320, bedrooms: 2, bathrooms: 2 }} mode="list" />

      <AgentCard
        name={"Adam Conover"}
        photoUrl={"https://www.hji.co.uk/wp-content/efs/2018/09/Hairdressing-Agent-square.jpg"}
        location={"Los Angeles, California"}
        phone={"+0 123-456-7890"}
        email={"adam@example.com"}
      />

      <FloorPlans plans={[
        { 'name': '1st Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImRvemFibzBqYW5yODMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.5U2_HsvFpwvAxKlQynbIvdlIAVRjtfeFeVLZtTBbbbE/image;s=1280x1024;q=80' },
        { 'name': '2nd Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjAwZHo3aWdncDBiNjItQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.enUos-_HR4KDlcfZxopB41nCvx7J72C5Gn4Ddl84YJA/image;s=1280x1024;q=80' },
        { 'name': '3rd Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InRoYXBvenM1dzV2OC1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.Fl5THtQLJTo8UDfmyogPRID4Dr-E7rtYZ_3DWaVZfv8/image;s=1280x1024;q=80' },
        { 'name': '4th Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InMxcHRsYmE4MDR2bC1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.oFZGjsBdqSk5DnHPuTA6dJXPdmCuWcEXj3Evdn1NnL0/image;s=1280x1024;q=80' },
        { 'name': '5th Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InFqcmx4MGExMXUzdC1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.NYOxTv8S2_7malQnjQ7TFDDjITV-drK9ajYe4EXfSM4/image;s=1280x1024;q=80' },
      ]} />

      <PropertyList
        defaultView="grid"
        properties={apartaments}
      />

      <Features features={{
        "pet": "Pets allowed",
        "pool": "Outdoor pool",
        "garden": "850 Sq Ft Garden"
      }} />

      <Input
        type="number"
        name="year"
        value={42}
        placeholder="Min. Year Built"
        onChange={(name, value) => console.log(name, value)}
        size="small"
      />

      <Input
        type="text"
        name="pets"
        value="My text"
        placeholder="Property title, Property content..."
        onChange={(name, value) => console.log(name, value)}
        size="small"
      />

      <Input
        type="number"
        name="year"
        value={42}
        placeholder="Min. Year Built"
        onChange={(name, value) => console.log(name, value)}
        size="large"
      />

      <Input
        type="text"
        name="pets"
        value="My text"
        placeholder="Property title, Property content..."
        onChange={(name, value) => console.log(name, value)}
        size="large"
      />

        <PropertyFilter 
            values={{ 
              type: "townhouse",
              minArea: "10",
              maxArea: "1000",
              deal: "sale",
              bedrooms: "1",
              bathrooms: "1",
              location: "UA",
              minPrice: "5",
              maxPrice: "5000",
              minYear: "2000" }}
            options={{
              type: ["single", 'townhouse','apartment'],
              deal: ['sale', 'rent'],
              location: ['CA', 'FL', "UA"],
            }}
            onSubmit={(nextValues) => {
              this.setState({ values: nextValues })
              console.log(`Next values are: ${JSON.stringify(nextValues)}`)
            }}
          
          />



        <PropertyDetails details={{ area: 1320, bedrooms: 2, bathrooms: 2 }} mode="list" />

      <AgentCard
        name={"Adam Conover"}
        photoUrl={"https://www.hji.co.uk/wp-content/efs/2018/09/Hairdressing-Agent-square.jpg"}
        location={"Los Angeles, California"}
        phone={"+0 123-456-7890"}
        email={"adam@example.com"}
      />

      <FloorPlans plans={[
        { 'name': '1st Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6ImRvemFibzBqYW5yODMtQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.5U2_HsvFpwvAxKlQynbIvdlIAVRjtfeFeVLZtTBbbbE/image;s=1280x1024;q=80' },
        { 'name': '2nd Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6IjAwZHo3aWdncDBiNjItQVBMIiwidyI6W3siZm4iOiJlbnZmcXFlMWF5NGsxLUFQTCIsInMiOiIxNCIsInAiOiIxMCwtMTAiLCJhIjoiMCJ9XX0.enUos-_HR4KDlcfZxopB41nCvx7J72C5Gn4Ddl84YJA/image;s=1280x1024;q=80' },
        { 'name': '3rd Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InRoYXBvenM1dzV2OC1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.Fl5THtQLJTo8UDfmyogPRID4Dr-E7rtYZ_3DWaVZfv8/image;s=1280x1024;q=80' },
        { 'name': '4th Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InMxcHRsYmE4MDR2bC1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.oFZGjsBdqSk5DnHPuTA6dJXPdmCuWcEXj3Evdn1NnL0/image;s=1280x1024;q=80' },
        { 'name': '5th Floor', url: 'https://ireland.apollo.olxcdn.com/v1/files/eyJmbiI6InFqcmx4MGExMXUzdC1BUEwiLCJ3IjpbeyJmbiI6ImVudmZxcWUxYXk0azEtQVBMIiwicyI6IjE0IiwicCI6IjEwLC0xMCIsImEiOiIwIn1dfQ.NYOxTv8S2_7malQnjQ7TFDDjITV-drK9ajYe4EXfSM4/image;s=1280x1024;q=80' },
      ]} />

      <PropertyList
        defaultView="grid"
        properties={apartaments}
      />

      <Features features={{
        "pet": "Pets allowed",
        "pool": "Outdoor pool",
        "garden": "850 Sq Ft Garden"
      }} />

      <Input
        type="number"
        name="year"
        value={42}
        placeholder="Min. Year Built"
        onChange={(name, value) => console.log(name, value)}
        size="small"
      />

      <Input
        type="text"
        name="pets"
        value="My text"
        placeholder="Property title, Property content..."
        onChange={(name, value) => console.log(name, value)}
        size="small"
      />

      <Input
        type="number"
        name="year"
        value={42}
        placeholder="Min. Year Built"
        onChange={(name, value) => console.log(name, value)}
        size="large"
      />

      <Input
        type="text"
        name="pets"
        value="My text"
        placeholder="Property title, Property content..."
        onChange={(name, value) => console.log(name, value)}
        size="large"
      />

        
        <Sidebar><input id="comp-name" name="comp-name" type="text"/></Sidebar>

        <ContactForm />
        
      </div> 

  }
}

