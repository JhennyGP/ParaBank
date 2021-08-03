Feature: Recuperar Login

    Scenario: Página Recuperar login
        Given que esteja na pagina principal
        When clicar o botão de recuperar login
        Then deverá ser redirecionado para a página de recuperar login
        And aparecer os campos da página a serem preenchidos

    Scenario Outline: Recuperar login
        Given que esteja na página de recuperar login
        When preencher os campos com dados "<type>"
        Then deverá mostrar a mensagem "<msg>"
        Examples:
            | type    | msg                                             |
            | valid   |                                                 |
            | invalid | The username and password could not be verified |
            | empty   | Please enter a username and password            |

