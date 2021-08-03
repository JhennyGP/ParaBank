Feature: Cadastro
    Como novo usuario
    Quero me cadastrar no sistema
    Para ter acesso as funcoes

    Scenario: Página Cadastro
        Given que esteja na pagina principal
        When clicar em register
        Then devera ser redirecionado a pagina de cadastro

@focus 
    Scenario: Cadastro de usuario vazio
        Given que esteja na pagina de cadastro
        When clicar no botão register sem preencher os campos
        Then devera mostrar a mensagem "is required" em todos os campos vazios

    Scenario Outline: Cadastro de usuario
        Given que esteja na pagina de cadastro
        When cadastrar usuario com os dados do tipo "<type>"
        Then devera mostrar a mensagem "<msg>"
        Examples:
            | type    | msg            |
            | valid   | welcome        |
            | invalid | already exists |