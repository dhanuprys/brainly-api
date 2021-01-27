# BrainlyAPI :cloud_with_lightning:

![brainly-api logo](https://raw.githubusercontent.com/dhanuprys/arts/master/brainly-api.jpg)

[![NPM Downloads](https://img.shields.io/npm/dm/brainly-api?logo=npm)](https://npmjs.com/package/brainly-api)
[![GitHub all releases](https://img.shields.io/github/downloads/dhanuprys/brainly-api/total?label=releases&logo=github)](https://github.com/dhanuprys/brainly-api)
[![Travis CI](https://travis-ci.com/dhanuprys/brainly-api.svg?branch=main)](https://www.travis-ci.com/github/dhanuprys/brainly-api)
[![Github Action](https://github.com/dhanuprys/brainly-api/workflows/test/badge.svg)](https://github.com/dhanuprys/brainly-api/actions)
[![NPM](https://img.shields.io/npm/l/brainly-api)](https://npmjs.com/package/brainly-api)
[![npm (tag)](https://img.shields.io/npm/v/brainly-api/latest?label=brainly-api&logo=npm)](https://npmjs.com/package/brainly-api)
[![GitHub last commit](https://img.shields.io/github/last-commit/dhanuprys/brainly-api?label=github%20last%20commit&logo=github)](https://github.com/dhanuprys/brainly-api)
[![Circle CI](https://circleci.com/gh/dhanuprys/brainly-api.svg?style=shield)](https://circleci.com/gh/dhanuprys/brainly-api)

> Now several sample programs are provided by running "brainly-api example-list"

> Now you can get questions and answers !!

## Notes :bangbang:
- This is not the official library from brainly.com
- This version is not stable yet
- This library is still under development
- PLEASE DO NOT USE THIS LIBRARY FOR NEGATIVE PURPOSE :warning: :bangbang:
- What about documentation? The documentation will be generated as soon as some library components are ready to use

## Let's Try with Experimental Mode :sunglasses:
```javascript
const { BrainlyAPI, Server } = require('brainly-api');

BrainlyAPI.startWorker({ experimental: true, server: Server.ID }, async brainly => {
  // find question
  console.log(await brainly.findQuestion('Indonesian!!'));
});
```
## List of Available Locations :round_pushpin:
**Example:**
```javascript
const { Server } = require('brainly-api');

Server.{Code}
```

Code | Name | Refers to 
---- | ----- | --------
PL | Poland :poland: | [brainly.pl](https://brainly.pl)
RU | Russian Federation (the) | [znanija.com](https://znanija.com)
ES | Spain | [brainly.lat](https://brainly.lat)
PT | Portugal :portugal: | [brainly.com.br](https://brainly.com.br)
TR | Turkey | [eodev.com](https://eodev.com)
RO | Romania :romania: | [brainly.ro](https://brainly.ro)
ID | Indonesia :indonesia: | [brainly.co.id](https://brainly.co.id)
HI | India :india: | [brainly.in](https://brainly.in)
PH | Philippines (the) :philippines: | [brainly.ph](https://brainly.ph)
US | United States of America (the) :us: | [brainly.com](https://brainly.com)

Source :information_source: : https://www.iban.com/country-codes

## List of Features :astonished:
All the features below can only be used anonymously (cannot be used in auth mode) :crying_cat_face:.

Feature | Status
------- | ------
Find question | :heavy_check_mark:
Find question by id | :x:
Get highlight question | :x:


## Using CLI Tools :computer:
```bash
$ npx brainly-api
```

## Who Uses it :question:
Currently no project names are displayed. If you want your project name included here, then [contact me](#contact-me-question) with the following format:
- **projectname**: your project name
- **projectlink**: your project link
- **projectlogo**(optional): your project logo (600x400) or lower

## Contact me :phone:
- <a href="mailto:dhanuprys@gmail.com">Gmail</a>
- [Telegram](https://t.me/dhanuprys)
- [Twitter](https://twitter.com/dhanuprys)
- [Instagram](https://instagram.com/dhanuprys)

## Contributing :pencil:
Thank you for wanting to contribute to this project. The contribution page can be found on
[contribution page](https://github.com/dhanuprys/brainly-api/blob/main/CONTRIBUTING.md)

## License :unlock:
Licensed under **MIT License**

See [package license](https://github.com/dhanuprys/brainly-api/blob/main/LICENSE)

## Thanks for using brainly-api :wink:
