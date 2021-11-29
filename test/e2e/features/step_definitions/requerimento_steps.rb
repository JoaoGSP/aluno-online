Dado('que um aluno visite a pagina Requerimentos') do
    visit('/requerimentos')
end
  
Quando('ele clicar em Novo') do
    click_button('Novo')
end
  
Então('ele deverá ser redirecionado para o formulário de requerimento') do
    visit('/requerimentos/novo')
end