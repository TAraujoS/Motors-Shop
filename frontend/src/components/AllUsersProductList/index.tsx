import React, { useContext, useEffect } from "react";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { ProductListDiv } from "../ProductList/styles";
import Slider from "../Slider";

const AllUsersProductList = () => {
  const { allAnnouncements, listAllAnnouncements } =
    useContext(AnnouncementContext);

  const cars = allAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Carro"
  );
  const motorcycles = allAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Moto"
  );

  useEffect(() => {
    listAllAnnouncements();
  }, []);

  return (
    <>
      <Slider title="Leilão" children={allAnnouncements} />
      <Slider title="Carros" children={cars} />
      <Slider title="Motos" children={motorcycles} />
    </>
  );
};

export default AllUsersProductList;
