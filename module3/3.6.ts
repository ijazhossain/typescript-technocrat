{
    // getter and setter

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        // public addDeposit(amount: number) {
        //     this._balance = this._balance + amount;

        // setter
        set deposit(amount: number) {
            this._balance = this._balance + amount;
        }
        // public getBalance() {
        //     return this._balance;

        // getter
        get balance() {
            return this._balance;
        }
    }

    const goribManusherAccount = new BankAccount(111, "Mr. gorib", 20);
    // goribManusherAccount.balance=0;
    goribManusherAccount.deposit = 20;
    goribManusherAccount.deposit = 60;
    const myBalance = goribManusherAccount.balance;
    console.log(myBalance);



















    // 

}