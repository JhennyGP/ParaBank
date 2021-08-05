import faker, { fake } from 'faker'

export class Factory {

    static register(type) {
        switch (type) {
            case 'valid':
                return {
                    "firstName": faker.name.firstName(),
                    "lastName": "Compass0"+faker.name.lastName(),
                    "email": "Compass0"+faker.internet.email(),
                    "address": faker.address.streetAddress(),
                    "city": faker.address.city(),
                    "state": faker.address.state(),
                    "zipCode": faker.address.zipCode(),
                    "phoneNumber": faker.phone.phoneNumber(),
                    "ssn": faker.datatype.number()+"123",
                    "userName": faker.internet.userName()+"Compass0",
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
                    "userName": "Jennifer.Compasso",
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
                    "userName": faker.internet.userName()+"invalid!",
                    "password": faker.internet.password()+"invalid!"
                }
            case 'valid':
                return {
                    "userName": "Jennifer.Compasso",
                    "password": "teste"
                }
            case 'empty':
                return {
                    "userName": "",
                    "password": ""
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
                    "firstName": faker.name.firstName()+"invalid!",
                    "lastName": faker.name.lastName()+"invalid",
                    "address": faker.address.streetAddress()+"invalid!",
                    "city": faker.address.city()+"invalid!",
                    "state": faker.address.state()+"invalid!",
                    "zipCode": faker.address.zipCode()+"invalid!",
                    "ssn": faker.datatype.number()+"invalid!"
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
                    "firstName": "",
                    "lastName": "",
                    "address": "",
                    "city": "",
                    "state": "",
                    "zipCode": "",
                    "ssn": ""
                }
            default:
                return {
                    notfound: "The type was not found, please verify!"
                }
        }
    }
}