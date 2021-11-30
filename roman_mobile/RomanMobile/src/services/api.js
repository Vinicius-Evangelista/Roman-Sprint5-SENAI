import axios from 'axios';

const api = axios.create({
//quando a api estiver pronta, colocar o ip aqui:
// exemplo - baseURL: 'http://192.168.6.203:5000/api',


// api vini baseURL:
baseURL: 'http://192.168.3.253:5000/api'

// api joao
// baseURL: 'http://endereco aqui:5000/api'

// api rafa
// baseURL: 'http://192.168.15.34:5000/api'

//pegar ip: abrir cmd e escrever 'ipconfig' ->  Endereço IPv4
});

export default api;