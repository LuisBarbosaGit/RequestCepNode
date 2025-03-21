const axios = require('axios');

async function buscarcep(cep) {

    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

    return response.data
}

async function main() {
    const cep = '13425380';
    buscarcep(cep).then((response) => {
        console.log(`Logradouro: ${response.logradouro}`);
        console.log(`Logradouro: ${response.bairro}`);
        console.log(`Logradouro: ${response.localidade}`);
        console.log(`Logradouro: ${response.uf}`);
    });
}

main();
