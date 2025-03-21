﻿# Requisição Get da api ViaCEP

 Foi utilizado a bliblioteca Axios do Node Js.

 # Documentação

 1-const response : Armazena o retorno JSON do metodo Get da API, que será usado para exibir o endereço posteriormente.
 2-buscarcep(cep).then((response): Se ouver retorno do response.data da função buscarcep, ele exibe o endereço com os comandos abaixo:
 {
       //Exibe o Endereço
        console.log(`Logradouro: ${response.logradouro}`);
        console.log(`Logradouro: ${response.bairro}`);
        console.log(`Logradouro: ${response.localidade}`);
        console.log(`Logradouro: ${response.uf}`);
 }
 
