import { yupResolver } from "@hookform/resolvers/yup";
import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { CommentsContext } from "../../contexts/CommentsContext";
import { UserContext } from "../../contexts/UserContext";
import { createCommentSchema } from "../../schemas/createComment";
import { ThemeTitle } from "../../styles/typography";
import nameAbbreviate from "../../util/nameAbbreviate";
import stringToColor from "../../util/stringToColor";
import Button from "../Button";
import { Comment } from "../Comment";
import { CommentsListBox, RegisterCommentBox } from "./styles";

export const CommentsList = ({ announcement }: any) => {
  const { registerComment, announcementComments, listComments } =
    useContext(CommentsContext);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    resolver: yupResolver(createCommentSchema),
  });

  const onSubmitFunction = (data: any) => {
    registerComment(announcement.id, data);
  };

  useEffect(() => {
    listComments("6d39d0bc-297f-4f2b-97f8-5c3d93a36a19");
  }, []);
  return (
    <>
      <CommentsListBox>
        <div className="comments">
          <ThemeTitle
            tag="h2"
            className="comment-title"
            titleSize="Heading-6-600"
          >
            Comentários
          </ThemeTitle>
          <div className="comments-div">
            <Comment />;
          </div>
        </div>

        <RegisterCommentBox>
          <div className="userInfo-div">
            <p
              className="name_abbreviate"
              style={{ backgroundColor: stringToColor("Samuel Leão") }}
            >
              {nameAbbreviate("Samuel Leão")}
            </p>
            <p className="username">Samuel Leão</p>
          </div>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <textarea
              className="comment"
              // name="comment"
              cols={30}
              rows={10}
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              {...register("message")}
            />
            <Button
              className="comment-button"
              children="Comentar"
              backgroundColor="#4529E6"
              backgroundColorHover={""}
              type="submit"
            />
          </form>

          <div className="comment-sugestions">
            <button className="sugestion-btn">Gostei muito!</button>
            <button className="sugestion-btn">Incrível</button>
            <button className="sugestion-btn">
              Recomendarei para meus amigos!
            </button>
          </div>
        </RegisterCommentBox>
      </CommentsListBox>
    </>
  );
};