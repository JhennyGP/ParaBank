Feature: Atualizar dados cadastrados

    Como usuário com acesso a aplicação
    Quero consultar e editar meus dados

    Background: Estar logado na aplicação
        Given usuário esteja logado
        And estar no menu 'Update Contact Info'

    Scenario: Consultar dados
        When clicar no menu 'Update Contact Info'
        Then deverá ser redirecionado para a página de atualizar dados cadastrados
        And mostrar os campos preenchidos com os dados do usuário
    
    Scenario: Atualizar dados sem alteração
        When não alterar os dados cadastrais
        Then deverá mostrar a mensagem de sucesso

    Scenario Outline: Atualizar dados
        When alterar os dados cadastrais por dados "<type>"
        Then deverá mostrar a mensagem de sucesso
        Examples:
            | type          |
            | incrementados |
            | substituidos  |


    

