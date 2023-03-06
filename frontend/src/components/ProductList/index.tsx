import React, { useEffect } from "react";
import { useContext } from "react";

import Slider from "../Slider";
import { ProductListDiv } from "./styles";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";

export const ProductList = (userId: string) => {
  const { userAnnouncements, listUserAnnouncements } =
    useContext(AnnouncementContext);

  const loggedUserId = localStorage.getItem("@user:id");

  const cars = userAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Carro"
  );
  const motorcycles = userAnnouncements.filter(
    (announcement) => announcement.vehicle_type == "Moto"
  );

  useEffect(() => {
    listUserAnnouncements(userId);
  }, []);

  return userId === loggedUserId ? (
    <ProductListDiv className="products_div">
      {/* {cars.length <= 0 ? (
        <div className="no-announcements">
          <h4>Carros</h4>
          <p>Você ainda não possui anúncios de carros publicados!</p>
        </div>
      ) : (
        <Slider title="Carros" children={cars} />
      )}
      {motorcycles.length <= 0 ? (
        <div className="no-announcements">
          <h4>Motos</h4>
          <p>Você ainda não possui anúncios de carros publicados!</p>
        </div>
      ) : (
        <Slider title="Motos" children={motorcycles} />
      )} */}
    </ProductListDiv>
  ) : (
    <ProductListDiv className="products_div">
      {/* {cars.length <= 0 ? (
        <div className="no-announcements">
          <h4>Carros</h4>
          <p>Este usuário ainda não possui anúncios de carros publicados!</p>
        </div>
      ) : (
        <Slider title="Carros" children={cars} />
      )}
      {motorcycles.length <= 0 ? (
        <div className="no-announcements">
          <h4>Motos</h4>
          <p>Este usuário ainda não possui anúncios de carros publicados!</p>
        </div>
      ) : (
        <Slider title="Motos" children={motorcycles} />
      )} */}
    </ProductListDiv>
  );
};
