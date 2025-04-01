//creates user objects based on what information the assignment was asking for
//If a value is missing, there will be a default string informing about that
export class User {
    constructor(object) {
        this.id = object.id ?? "id missing";
        this.name = object.name ?? "name missing";
        this.userName = object.username ?? "username missing";
        this.email = object.email ?? "email missing";
        this.city = object.address.city ?? "city missing";
        this.phoneNbr = object.phone ?? "phone number missing";
        this.companyName = object.company.name ?? "company missing";
    }
}