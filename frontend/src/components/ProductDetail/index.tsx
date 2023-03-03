import React, { useContext, useEffect } from "react";
import {
  Aside,
  DivInfos,
  Title,
  Main,
  Photos,
  Container,
  CoverImg,
  Product,
  ProductDetails,
  ProductDescription,
  UserInfos,
  DivBox1,
} from "./styles";

import PhotoModal from "../PhotoModal";
import Button from "../../components/Button";
import stringToColor from "../../util/stringToColor";
import nameAbbreviate from "../../util/nameAbbreviate";
import { UserContext } from "../../contexts/UserContext";
import { AnnouncementContext } from "../../contexts/AnnouncementContext";
import { useNavigate, useParams } from "react-router-dom";
import { CommentsList } from "../CommentsList";
import noPhotos from "../../assets/no-photos.jpg";

const ProductDetail = () => {
  const { selectedAnnouncement, setPhotoModal, setSelectedPhoto } =
    useContext(AnnouncementContext);
  const { setSelectedUser } = useContext(UserContext);
  const { listAnnouncement } = useContext(AnnouncementContext);

  const history = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    listAnnouncement(id!);
  }, []);

  const cel = selectedAnnouncement?.user.phone;

  return (
    <Main>
      <Container>
        <Product>
          <CoverImg>
            <div>
              <img
                src={selectedAnnouncement?.cover_img}
                alt={selectedAnnouncement?.title}
              />
            </div>
          </CoverImg>
          <ProductDetails>
            <Title>{selectedAnnouncement?.title}</Title>
            <DivInfos>
              <div>
                <div>
                  <span>{selectedAnnouncement?.year}</span>
                  <span>{selectedAnnouncement?.mileage} KM</span>
                </div>
                <span>
                  {selectedAnnouncement?.price.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
              </div>

              <a
                href={`https://api.whatsapp.com/send?phone=+${cel}&text=Ola! Me interessei no seu veiculo, vamos conversar?`}
                target="_blank"
              >
                Comprar!
              </a>
            </DivInfos>
          </ProductDetails>

          <ProductDescription>
            <Title>Descrição</Title>

            <p>{selectedAnnouncement?.description}</p>
          </ProductDescription>
        </Product>
        <Aside>
          {selectedAnnouncement?.photos! ? (
            <Photos>
              <Title>Fotos</Title>
              <div>
                {selectedAnnouncement?.photos!.map((photo) => (
                  <figure
                    key={photo.id}
                    onClick={() => {
                      setSelectedPhoto(photo);
                      setPhotoModal(true);
                    }}
                  >
                    <img src={photo.url} alt="" />
                  </figure>
                ))}
              </div>
            </Photos>
          ) : (
            <Photos>
              <Title>Fotos</Title>
              <div>
                <img
                  className="no-photos"
                  src={noPhotos}
                  alt="Esse produto não possui fotos extras"
                />
              </div>
            </Photos>
          )}

          {selectedAnnouncement?.user && (
            <UserInfos>
              <div
                style={{
                  backgroundColor: stringToColor(
                    selectedAnnouncement!.user.name
                  ),
                }}
              >
                {nameAbbreviate(selectedAnnouncement!.user.name)}
              </div>
              <span>{selectedAnnouncement?.user.name}</span>

              <p>{selectedAnnouncement?.user.description}</p>

              <Button
                backgroundColor="#0B0D0D"
                backgroundColorHover=""
                fontColor="#FFFFFF"
                onClick={() => {
                  setSelectedUser(selectedAnnouncement!.user);
                  history("/profileUser");
                }}
              >
                Ver todos anúncios
              </Button>
            </UserInfos>
          )}
        </Aside>
      </Container>
      <DivBox1>
        <div className="div-box2">
          <CommentsList announcement={selectedAnnouncement} />
        </div>
      </DivBox1>
      <PhotoModal />
    </Main>
  );
};

export default ProductDetail;
