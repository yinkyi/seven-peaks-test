import { client } from '../PrivateURL';

export const getProduct = async () => {
  try {
    return await client.get('test');
  } catch (error: any) {
    return error.response.data;
  }
};
