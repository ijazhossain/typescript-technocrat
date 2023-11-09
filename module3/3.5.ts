{
    // access modifier

    class BankAccount {
        public id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        public addDeposit(amount: number) {
            this._balance = this._balance + amount;
        }
        public getBalance() {
            return this._balance;
        }
    }
    class StudentAccount extends BankAccount {
        constructor(id: number, name: string, balance: number) {
            super(id, name, balance);
        }
        test() {
            return this._balance;
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    // goribManusherAccount.balance=0;
    goribManusherAccount.addDeposit(20);
    const myBalance = goribManusherAccount.getBalance();
    console.log(myBalance);

    // 
}