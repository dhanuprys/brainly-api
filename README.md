# BrainlyAPI

![brainly-api logo](https://raw.githubusercontent.com/dhanuprys/arts/master/brainly-api.jpg)

![NPM Downloads](https://img.shields.io/npm/dm/brainly-api?logo=npm)
![GitHub all releases](https://img.shields.io/github/downloads/dhanuprys/brainly-api/total?label=releases&logo=github)
![Travis CI](https://travis-ci.com/dhanuprys/brainly-api.svg?branch=main)
![Github Action](https://github.com/dhanuprys/brainly-api/workflows/test/badge.svg)
![NPM](https://img.shields.io/npm/l/brainly-api)
![npm (tag)](https://img.shields.io/npm/v/brainly-api/latest?label=brainly-api&logo=npm)
![GitHub last commit](https://img.shields.io/github/last-commit/dhanuprys/brainly-api?label=github%20last%20commit&logo=github)
![Circle CI](https://circleci.com/gh/dhanuprys/brainly-api.svg?style=svg)

> Now several sample programs are provided by running "brainly-api example-list"

> Now you can get questions and answers !!

## Notes
- This is not the official library from brainly.com
- This version is not stable yet
- This library is still under development
- PLEASE DO NOT USE THIS LIBRARY FOR NEGATIVE PURPOSE!

## Let's Try with Experimental Mode
```javascript
const { BrainlyAPI, Server } = require('brainly-api');

BrainlyAPI.startWorker({ experimental: true, server: Server.ID }, async brainly => {
  // find question
  console.log(await brainly.findQuestion('Indonesian!!'));
});
```
## List of Available Locations
**Example:**
```javascript
const { Server } = require('brainly-api');

Server.{Code}
```

Code | Name | Refers to 
---- | ----- | --------
PL | Poland | [brainly.pl](https://brainly.pl)
RU | Russian Federation (the) | [znanija.com](https://znanija.com)
ES | Spain | [brainly.lat](https://brainly.lat)
PT | Portugal | [brainly.com.br](https://brainly.com.br)
TR | Turkey | [eodev.com](https://eodev.com)
RO | Romania | [brainly.ro](https://brainly.ro)
ID | Indonesia | [brainly.co.id](https://brainly.co.id)
HI | India | [brainly.in](https://brainly.in)
PH | Philipines (the) | [brainly.ph](https://brainly.ph)
US | United States of America (the) | [brainly.com](https://brainly.com)

Source: https://www.iban.com/country-codes

## Using CLI Tools
```bash
$ npx brainly-api
```

## Contact me
- [Whatsapp](https://wa.me/082145277488)  X
- [Twitter](https://twitter.com/dhanuprys)
- [Instagram](https://instagram.com/dhanuprys)

## Thanks for using brainly-api :)
