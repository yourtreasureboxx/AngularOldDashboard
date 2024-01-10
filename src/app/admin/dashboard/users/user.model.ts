export class User {
    public id: string;
    public userName: string;
    public email: string;
    public address: string;
  
    constructor (id: string, username: string, email: string, address: string) {
      this.id = id;
      this.userName = username;
      this.email = email;
      this.address = address;
    }
  }