import {
  login,
  api,
  getSubscribe,
  notice,
  register,
  knowledge,
  plan,
} from './5gDataVip';
import EncryptedStorage from 'react-native-encrypted-storage';
import {Login, AuthData, Register} from '../types/index';

export const getAuthApi = async ({email, password}: Login) => {
  const {data, status} = await api.post(login, {
    email,
    password,
  });
  await EncryptedStorage.setItem('auth_data', JSON.stringify(data));
  const authData: AuthData = {
    data: data.data,
    status,
  };
  return authData;
};
export const registerApi = async ({
  email,
  password,
  invite_code,
  email_code,
}: Register) => {
  const {data, status} = await api.post(register, {
    email,
    password,
    invite_code,
    email_code,
  });
  const authData: AuthData = {
    data: data.data,
    status,
  };
  return authData;
};
export const getSubscribeApi = async () => {
  const auth_data: any = await EncryptedStorage.getItem('auth_data');
  const authData = JSON.parse(auth_data);
  const {data} = await api.get(getSubscribe, {
    headers: {
      Authorization: `${authData.data.auth_data}`,
    },
  });
  return data.data;
};
export const getNoticeApi = async () => {
  const auth_data: any = await EncryptedStorage.getItem('auth_data');
  const authData = JSON.parse(auth_data);
  const {data} = await api.get(notice, {
    headers: {
      Authorization: `${authData.data.auth_data}`,
    },
  });
  return data.data;
};
export const getKnowledgeApi = async () => {
  const auth_data: any = await EncryptedStorage.getItem('auth_data');
  const authData = JSON.parse(auth_data);
  const {data} = await api.get(`${knowledge}?language=vi-VN`, {
    headers: {
      Authorization: `${authData.data.auth_data}`,
    },
  });
  return data.data;
};
export const getKnowledgeItemApi = async ({
  id,
  language,
}: {
  id: string;
  language: string;
}) => {
  const auth_data: any = await EncryptedStorage.getItem('auth_data');
  const authData = JSON.parse(auth_data);
  const {data} = await api.get(`${knowledge}?id=${id}&language=${language}`, {
    headers: {
      Authorization: `${authData.data.auth_data}`,
    },
  });
  return data.data;
};
export const getPlanApi = async () => {
  const auth_data: any = await EncryptedStorage.getItem('auth_data');
  const authData = JSON.parse(auth_data);
  const {data} = await api.get(plan, {
    headers: {
      Authorization: `${authData.data.auth_data}`,
    },
  });
  return data.data;
};
