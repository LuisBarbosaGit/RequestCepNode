# Requisição Get da api ViaCEP

 Foi utilizado a bliblioteca Axios do Node Js.
 
 -Para se utilizar é necessario dar um npm install axios
 
 -Depois se declara no cabeçalho o const axios = require('axios');

 # Documentação

 1-const response : Armazena o retorno JSON do metodo Get da API, que será usado para exibir o endereço posteriormente.
 
 2-Buscarcep(cep).then((response): Se ouver retorno do response.data da função buscarcep, ele exibe o endereço com os comandos abaixo:
 
 
       //Exibe o Endereço
        console.log(`Logradouro: ${response.logradouro}`);
        console.log(`Logradouro: ${response.bairro}`);
        console.log(`Logradouro: ${response.localidade}`);
        console.log(`Logradouro: ${response.uf}`);
 
 
