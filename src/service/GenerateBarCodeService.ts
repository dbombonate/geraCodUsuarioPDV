interface IDataRequest{
  store: string,
  operator: string
}

class GenerateBarCodeService {
  async execute({store, operator}: IDataRequest){
    if(!store || !operator){
      throw new Error("Invalid Data Send. Check store or operator values.");
    }

    // Padrao de geração do cod de barra 10LLLCCCCCC0D
    // LLL = Loja com 3 dígitos
    // CCCCCC = Cod do operador com 6 dígitos

    const storeLen = store.split('');
    const operatorLen = operator.split('');

    if (storeLen.length === 1) {
      store = "00" + store;
    } else if(storeLen.length === 2) {
      store = "0" + store;
    }

    if (operatorLen.length === 4) {
      operator = "00" + operator;
    } else if (operatorLen.length === 5) {
      operator = "0" + operator;
    } else if (operatorLen.length < 4) {
      throw new Error("Invalid Data Send. Check operator value.");
    }

    const barCode = "10" + store + operator + "0";

    return { barCode };
  }
}

export { GenerateBarCodeService };
