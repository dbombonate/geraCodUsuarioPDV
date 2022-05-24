<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">geracodbarrafiscal</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> API para geração de código de barra para fiscais de Caixa.
    <br>
</p>

## 📝 Conteúdo

- [Sobre](#about)
- [Instalação](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [TODO](../TODO.md)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgement)

## 🧐 Sobre <a name = "about"></a>

Neste projeto, utilizei NodeJS + Express + Typescript para criar uma API que vai receber em sua rota padrão dados numéricos de loja e usuário, e retorna com sequência numérica para ser utilizada no crachá de liberação dos PDVs da Arius Sistemas.

## 🏁 Instalação <a name = "getting_started"></a>

Siga as instruções para rodar o app em seu PC.

### Pré requisitos

Necessário possuir instalado em seu PC:

```
NodeJS (versão do projeto 14.15.5)
```

### Installing

Siga os passos abaixo para a aplicação funcionar em seu PC:

Faça o clone deste repositório:

```
$ git clone git@github.com:dbombonate/geraCodUsuarioPDV.git
```

Acesse a pasta do projeto:

```
$ cd geraCodUsuarioPDV;
```

Execute o comando para instalar as dependências do projeto:

```
$ npm install
```

Crie um arquivo .env:

```
$ echo .env >> 'APP_PORT=3000'
```
O comando acima indica que seu app vai funcionar na porta 3000, este valor pode ser alterado para outro de sua preferência.

Para executar o app em seu PC, rode o comando:

```
$ npm start
```


## 🎈 Utilização do App <a name="usage"></a>

Use o software Insomnia e crie uma request do tipo POST para o endereço http://localhost:(porta que foi definida em APP_PORT) e envie um JSON conforme abaixo:

```
{
	"store": "1",
	"operator": "4058"
}
```

A API vai retornar com o código que deverá ser usado como Código de Autorização do Fiscal de Caixa:

```
{
	"barCode": "100010040580"
}
```


## ⛏️ Built Using <a name = "built_using"></a>

- [Express](https://expressjs.com/) - Server Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Autor <a name = "authors"></a>

- [@dbombonate](https://github.com/dbombonate) - Ideia & Desenvolvimento da aplicação
