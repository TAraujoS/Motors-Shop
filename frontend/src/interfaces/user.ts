import { Dispatch, ReactNode, SetStateAction } from "react";
import { IAddress } from "./address";

export interface IUserContext {
  registerUser: (data: IUserRequest) => Promise<void>;
  loginUser: (data: IUserLogin) => Promise<void>;
  registerModal: boolean;
  setRegisterModal: Dispatch<SetStateAction<boolean>>;
  editAddress: (data: IAddress) => Promise<void>;
  modalAddress: boolean;
  setModalAddress: Dispatch<SetStateAction<boolean>>;
  user: IUser | null;
}

export interface IUserProviderProps {
  children: ReactNode;
}

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birth_date: string;
  description: string;
  address: {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: number;
    complement: string;
  };
  account: string;
  password: string;
}

export interface IUser extends IUserRequest {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: IAddress;
}

export interface IUserLoginResponse {
  token: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
