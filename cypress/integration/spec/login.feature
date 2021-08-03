Feature: Home
    Como usuário
    Quero utilizar todas as funções da Home

    Background: Home    
    Given que esteja na pagina principal
    
    Scenario Outline: Fazer Login
        When fazer o login com os dados do tipo "<type>"
        Then deverá mostrar a mensagem "<msg>"
        Examples:
            | type    | msg                                             |
            | valid   |                                                 |
            | invalid | The username and password could not be verified |
            | empty   | Please enter a username and password            |