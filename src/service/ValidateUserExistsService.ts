import { AxiosError, AxiosResponse } from 'axios';
import { api } from '../api/apiUsuarios';

interface IValidateRequest{
  store: string,
  operator: string
}

class ValidateUserExistsService {
  async execute({store, operator}: IValidateRequest){
    if(!store || !operator){
      throw new Error("Invalid Data Send. Check store or operator values.");
    }

    const response = await api.get('/api/', {
      params: {
        store,
        operator
      }
    })
    .then((value: AxiosResponse) => {
      if (value.status === 200) return true;
    })
    .catch((reason: AxiosError) => false);

    return response;

  }
}

export { ValidateUserExistsService };
