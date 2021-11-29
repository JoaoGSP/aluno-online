#language: pt

Funcionalidade: requerimento

    Como aluno logado
    Quero acessar a aba requerimentos
    Para criar novo requerimento.

    Cenário: Acessar requerimentos
        Dado que um aluno acessa a pagina de requerimentos
        Quando ele entrar na página
        Então ele deverá ver os requerimentos

    Cenário: Cadastrar requerimento
        Dado que um aluno acessa a página de requerimentos
        Quando ele clicar em Novo
        Então ele deverá ser capaz de inserir um novo requerimento
