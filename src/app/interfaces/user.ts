export interface NewUser {
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    password: string
}

export interface User {
    email: string,
    password: string
}

export interface FormUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    password2: string;
}


