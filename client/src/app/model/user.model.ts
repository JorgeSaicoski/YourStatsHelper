export interface User {
    id?: string; 
    name: string;
    username: string;
    password?: string;
    email: string; 
    expireVipIn?: Date;

  }