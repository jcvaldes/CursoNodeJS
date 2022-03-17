// No se puede modificar

export class Bank {
    getAccountData(numberAccount: string) {
        return {
            name: 'John Doe',
            balance: 100,
            numberAccount: numberAccount
        };
    }
   
    charge() {
      // logica para cobrar
        console.log('cobrando');
    }
}