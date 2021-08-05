Feature: Home
    Como usuario
    Quero utilizar todas as funções da Home

    Background: Home    
    Given que esteja na pagina principal
    
    Scenario Outline: Fazer Login invalido
        When fazer o login com os dados do tipo "<type>"
        Then deverá mostrar a mensagem "<msg>"
        Examples:
            | type    | msg                                             |
            | invalid | The username and password could not be verified |
            | empty   | Please enter a username and password            |

    Scenario: Fazer Login valido
        When fazer o login com os dados do tipo válido "valid"
        Then deverá ser logado com sucesso

    Scenario: Fazer Logout
        When fazer o login com os dados do tipo válido "valid"
        And clicar para sair do sistema
        Then deverá ser redirecionado a pagina inicial