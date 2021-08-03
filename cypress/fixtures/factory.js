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
                    "ssn": faker.datatype.number(9),
                    "userName": faker.internet.userName(),
                    "password": faker.internet.password()
                }
            case 'invalid':
                return {
                    "firstName": "Teste",
                    "lastName": "Compasso",
                    "email": "teste@compasso.com.br",
                    "address": "R grande do sul",
                    "city": "RS",
                    "state": "Passo Fundo",
                    "zipCode": "01233001",
                    "phoneNumber": "5511991011010",
                    "ssn": "123456789",
                    "userName": "TesteCompasso",
                    "password": "teste"
                }
            case 'empty':
                return {
                    "firstName": "",
                    "lastName": "",
                    "email": "",
                    "address": "",
                    "city": "",
                    "state": "",
                    "zipCode": "",
                    "phoneNumber": "",
                    "ssn": "",
                    "userName": "",
                    "password": ""
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
                    "userName": "a",
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
}