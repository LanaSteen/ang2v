


export interface IStudent {
    name : string;
    age? : number | null;
    grade : string;
    subject : string;
    isEnrolled : boolean;
    address  : {
               street: string;
               city: string;
               zip: number | null
     };
     activeType : ActyveType;
}


enum ActyveType {
    isActive = 1,
    notActive = 0
}


enum UserType {
    admin = "Admin",
    unser = "User"
}

enum Roles {
    manager = "Manager",
    viwer = "Viwer",
    admin = "Admin"
}

// export class Student{}