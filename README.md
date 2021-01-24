# BrainlyAPI

<p align="center">
  <img src="https://raw.githubusercontent.com/dhanuprys/arts/master/brainly-api.jpg">
  <br>
  <a href="https://npmjs.com/package/brainly-api"><img alt="npm" src="https://img.shields.io/npm/dw/brainly-api?logo=npm"></a>
  <a href="https://github.com/dhanuprys/brainly-api"><img alt="GitHub all releases" src="https://img.shields.io/github/downloads/dhanuprys/brainly-api/total?label=releases&logo=github"></a>
  <a href="https://travis-ci.com/dhanuprys/brainly-api"><img src="https://travis-ci.com/dhanuprys/brainly-api.svg?branch=main" alt="Travis CI"></a>
  <a href="https://github.com/dhanuprys/brainly-api"><img src="https://github.com/dhanuprys/brainly-api/workflows/test/badge.svg" alt="Gitub Action Test Status"></a>
  <a href="https://circleci.com/gh/dhanuprys/brainly-api"><img src="https://circleci.com/gh/dhanuprys/brainly-api.svg?style=svg" alt="Circle CI Test Status"></a>
</p>

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
