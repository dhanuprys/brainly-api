# BrainlyAPI 🌩️

![brainly-api logo](https://raw.githubusercontent.com/dhanuprys/arts/master/brainly-api.jpg)

[![NPM Downloads](https://img.shields.io/npm/dm/brainly-api?logo=npm)](https://npmjs.com/package/brainly-api)
[![GitHub all releases](https://img.shields.io/github/downloads/dhanuprys/brainly-api/total?label=releases&logo=github)](https://github.com/dhanuprys/brainly-api)
[![Travis CI](https://travis-ci.com/dhanuprys/brainly-api.svg?branch=main)](https://www.travis-ci.com/github/dhanuprys/brainly-api)
[![Github Action](https://github.com/dhanuprys/brainly-api/workflows/test/badge.svg)](https://github.com/dhanuprys/brainly-api/actions)
[![NPM](https://img.shields.io/npm/l/brainly-api)](https://npmjs.com/package/brainly-api)
[![npm (tag)](https://img.shields.io/npm/v/brainly-api/latest?label=brainly-api&logo=npm)](https://npmjs.com/package/brainly-api)
[![GitHub last commit](https://img.shields.io/github/last-commit/dhanuprys/brainly-api?label=github%20last%20commit&logo=github)](https://github.com/dhanuprys/brainly-api)
[![Circle CI](https://circleci.com/gh/dhanuprys/brainly-api.svg?style=shield)](https://circleci.com/gh/dhanuprys/brainly-api)
[![Lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

> Now some commands have been divided into sections and must be installed separately

> Now you can retrieve user profiles !! [list of feature](#list-of-features-astonished)

> Now you can use "find question highlight" to search for the highlighted questions

## Notes ‼️
- This is not the official library from brainly.com
- This version is not stable yet
- This library is still under development
- PLEASE DO NOT USE THIS LIBRARY FOR NEGATIVE PURPOSE ⚠️ ‼️
- What about documentation? The documentation will be generated as soon as some library components are ready to use

## Let's Try with Experimental Mode 😎
```javascript
const { BrainlyAPI, Server } = require('brainly-api');

BrainlyAPI.startWorker({ experimental: true, server: Server.ID }, async brainly => {
  // find question
  console.log(await brainly.findQuestion('Indonesian!!'));
});
```
## List of Available Locations 📍
**Example:**
```javascript
const { Server } = require('brainly-api');

Server.{Code}
```

Code | Name | Refers to 
---- | ----- | --------
PL | Poland 🇵🇱 | [brainly.pl](https://brainly.pl)
RU | Russian Federation (the) | [znanija.com](https://znanija.com)
ES | Spain | [brainly.lat](https://brainly.lat)
PT | Portugal 🇵🇹 | [brainly.com.br](https://brainly.com.br)
TR | Turkey | [eodev.com](https://eodev.com)
RO | Romania 🇷🇴 | [brainly.ro](https://brainly.ro)
ID | Indonesia 🇮🇩 | [brainly.co.id](https://brainly.co.id)
HI | India 🇮🇳 | [brainly.in](https://brainly.in)
PH | Philippines (the) 🇵🇭 | [brainly.ph](https://brainly.ph)
US | United States of America (the) 🇺🇸 | [brainly.com](https://brainly.com)

Source ℹ️ : https://www.iban.com/country-codes

## List of Features 😲
All the features below can only be used anonymously (temporarily disabled in auth mode) 😿.

All the available features are still under development and will continue to be improved.

Feature | Method | Status
------- | ------ | ------
Find question | findQuestion | ✔️
Find question by id | ❌ | ❌
Find question highlight | findQuestionHighlight | ✔️
Fetch user profile | fetchUserProfile | ✔️

## Using CLI Tools 💻
```bash
$ npx brainly-api
```

## Install "Program Examples" ❓
```bash
$ npm i @brainly-api-tools/example-list
```

```bash 
$ npx brainly-api
```

## Enable Random User Agents ❓
The random user agent can be activated by installing the `random-useragent` library or by running a command.
```bash
$ npx brainly-api tool random-useragent
```
and then the tool will automatically install the random-useragent package and activate it.

## Troubleshooting 😠
### Deploy to the server
Many people say that brainly-api has problems when deploying to Heroku. This was not caused by a flaw in the program, but from the security of the Brainly itself. They use Cloudflare for security.
As another experiment, brainly-api works well with Microsoft Azure.
If you have any suggestions for deploying brainly-api for free, you can do a pull request.

## Who Uses it ❓
Currently no project names are displayed. If you want your project name included here, then [contact me](#contact-me-phone) with the following format:
- **projectname**: your project name
- **projectlink**: your project link
- **projectlogo**(optional): your project logo (600x400) or lower

## Contact me ☎️
- <a href="mailto:dhanuprys@gmail.com">Gmail</a>
- [Telegram](https://t.me/dhanuprys)
- [Twitter](https://twitter.com/dhanuprys)
- [Instagram](https://instagram.com/dhanuprys)

## Code of Conduct 👥
See [code of conduct](https://github.com/dhanuprys/brainly-api/blob/main/CODE_OF_CONDUCT.md)

## Support My Other Project 🔗
- [Yuna BotEmulator](https://github.com/dhanuprys/yuna-botemulator)
- [Straight.it](https://github.com/dhanuprys/straight-it)

## Contributing 📝
Thank you for wanting to contribute to this project. The contribution page can be found on
[contribution page](https://github.com/dhanuprys/brainly-api/blob/main/CONTRIBUTING.md)

## License 🔓
Licensed under **MIT License**

See [package license](https://github.com/dhanuprys/brainly-api/blob/main/LICENSE)

## Thanks for using brainly-api 😉
