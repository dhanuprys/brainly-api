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
PL | Poland | https://brainly.pl
RU | Russian Federation (the) | https://znanija.com
ES | Spain | https://brainly.lat
PT | Portugal | https://brainly.com.br
TR | Turkey | https://eodev.com
RO | Romania | https://brainly.ro
ID | Indonesia | https://brainly.co.id
HI | India | https://brainly.in
PH | Philipines (the) | https://brainly.ph
US | United States of America (the) | https://brainly.com

Source: https://www.iban.com/country-codes

## Using CLI Tools
```bash
$ npx brainly-api
```

## Contact me
- [Whatsapp](https://wa.me/082145277488)
- [Instagram](https://instagram.com/dhanuprys)

## Thanks for using brainly-api :)
