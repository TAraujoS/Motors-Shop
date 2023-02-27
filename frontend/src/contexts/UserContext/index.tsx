import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IAddress } from "../../interfaces/address";
import {
  IUser,
  IUserContext,
  IUserLogin,
  IUserLoginResponse,
  IUserProviderProps,
  IUserRequest,
} from "../../interfaces/user";
import api from "../../services/api";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserProviderProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [registerModal, setRegisterModal] = useState(false);
  const [modalAddress, setModalAddress] = useState(false);

  const navigate = useNavigate();

  const registerUser = async (data: IUserRequest) => {
    await api
      .post<IUser>("/users", data)
      .then((res) => {
        console.log(res);
        setRegisterModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginUser = async (data: IUserLogin) => {
    await api
      .post<IUserLoginResponse>("/login", data)
      .then(({ data }) => {
        api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;

        getUserProfile();

        localStorage.clear();
        localStorage.setItem("@user:token", data.token);

        navigate("/profileAdmin", { replace: true });

        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getUserProfile = async () => {
    const { data } = await api.get<IUser>("/users/profile");
    setUser(data);

    localStorage.setItem("@user:id", data.id);
  };

  const editAddress = async (data: IAddress) => {
    await api
      .patch(`/address/${user?.address.id}`, data)
      .then((res) => {
        console.log(res);
        setModalAddress(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // useEffect(() => {
  //   const loadUser = async () => {
  //     const token = localStorage.getItem("@user:token");

  //     if (token) {
  //       try {
  //         api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  //         getUserProfile();
  //       } catch {
  //         localStorage.clear();
  //       }
  //     }
  //   };

  //   loadUser();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        registerUser,
        loginUser,
        registerModal,
        setRegisterModal,
        editAddress,
        modalAddress,
        setModalAddress,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
