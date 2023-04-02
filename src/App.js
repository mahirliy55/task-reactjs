import React, { useState } from "react";
import Header from "./components/Header";
import Modal from "./components/Modal";
import BackDrop from "./components/BackDrop";
import "./App.css";
import SideDrawer from "./components/SideMenu/SideDrawer";
import Carousel, { CarouselItem } from "./components/Carousel";
import Button from "./components/Button";

const App = () => {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(!sideDrawerOpen);
  };

  const backDropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div>
      {sideDrawerOpen && <BackDrop click={backDropClickHandler} />}
      <Header drawerToggleClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideDrawerOpen} />
      <section>
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>
      </section>
      <div style={{ textAlign: "center", marginTop: 25 }}>
        <Button
          onClick={() => setIsOpen(true)}
          text="Watch the best Technology in Action"
        />
      </div>
      {isOpen && <Modal setIsOpen={setIsOpen} />}
    </div>
  );
};

export default App;
