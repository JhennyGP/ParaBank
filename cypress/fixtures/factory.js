import faker, { fake } from 'faker'

export class Factory {

    static register(type) {
        switch (type) {
            case 'valid':
                return {
                    "firstName": faker.name.firstName(),
                    "lastName": faker.name.lastName(),
                    "email": faker.internet.email(),
                    "address": faker.address.streetAddress(),
                    "city": faker.address.city(),
                    "state": faker.address.state(),
                    "zipCode": faker.address.zipCode(),
                    "phoneNumber": faker.phone.phoneNumber(),
                    "ssn": faker.datatype.number(),
                    "userName": faker.internet.userName(),
                    "password": "teste",
                    "repeatedPassword": "teste"
                }
            case 'invalid':
                return {
                    "firstName": "Jennifer",
                    "lastName": "Compasso",
                    "email": "jennifer@compasso.com.br",
                    "address": "Av Sen Teotonio Vilela",
                    "city": "Sao Paulo",
                    "state": "SP",
                    "zipCode": "01233001",
                    "phoneNumber": "5511991011010",
                    "ssn": "123456789",
                    "userName": "TesteCompasso",
                    "password": "teste",
                    "repeatedPassword": "teste"
                }
            default:
                return {
                    notfound: "The type was not found, please verify!"
                }
        }
    }

    static login(type) {
        switch (type) {
            case 'invalid':
                return {
                    "userName": faker.internet.userName(),
                    "password": faker.internet.password()
                }
            case 'valid':
                return {
                    "userName": "TesteCompasso",
                    "password": "teste"
                }
            case 'empty':
                return {
                    "userName": " ",
                    "password": " "
                }
            default:
                return {
                    notfound: "The type was not found, please verify!"
                }
        }
    }
    static forgot(type) {
        switch (type) {
            case 'invalid':
                return {
                    "firstName": faker.name.firstName(),
                    "lastName": faker.name.lastName(),
                    "address": faker.address.streetAddress(),
                    "city": faker.address.city(),
                    "state": faker.address.state(),
                    "zipCode": faker.address.zipCode(),
                    "ssn": faker.datatype.number()
                }
            case 'valid':
                return {
                    "firstName": "Jennifer",
                    "lastName": "Compasso",
                    "address": "Av Sen Teotonio Vilela",
                    "city": "Sao Paulo",
                    "state": "SP",
                    "zipCode": "01233001",
                    "ssn": "123456789"
                }
                case 'empty':
                return {
                    "firstName": " ",
                    "lastName": " ",
                    "address": " ",
                    "city": " ",
                    "state": " ",
                    "zipCode": " ",
                    "ssn": " "
                }
            default:
                return {
                    notfound: "The type was not found, please verify!"
                }
        }
    }
}