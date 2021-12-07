# Verify a New Zealand Covid Pass API

## Overview
Open source api written in NestJS to decode and verify a NZ Covid Pass payload. This service can be deployed as 
a microservice and integrated into your existing ecosystem.

An NZCP is constructed using the pattern:

`NZCP:/{version}/{base32-encoded-string}`

This service also validates if the pass:

* is a Base32 encoded NZCP Version 1
* is encoded as a CBOR
* has the correct protected headers
* is issued by New Zealand Ministry of Health by matching the iss in the payload
* is signed and validated by using the signature of the payload over the CBOR structure using the MOH public key
* hasn't expired
* is active

### Response
If all the above checks are valid then the verified boolean is set to true, otherwise it will be classed as false.

The following error messages are returned with status 200 if the verification fails:

* unable to base32 decode
* unable to decode cbor
* unable to extract headers
* pass expired
* pass not yet active
* unable to decode payload
* unable to fetch authority DID
* not a new zealand ministry of health trusted issuer
* absolute key mismatch
* verification method failure
* elliptical signature verification failed
* An unknown error occurred. Please contact the administrator with ref: kwoein4y

## Demo
For online demo of this application click <a href="http://13.236.84.64:3000/" target="_blank">here</a>

## Technical details

This project uses the following libraries to decode and verify the pass:

1. [Base32 Decode](https://www.npmjs.com/package/base32-decode): Base32 decoder with support for multiple variants.
2. [CBOR](https://www.npmjs.com/package/cbor): Encode and parse data in the Concise Binary Object Representation (CBOR) data format
3. [COSE](https://www.npmjs.com/package/cose-js): JavaScript implementation of [COSE](https://datatracker.ietf.org/doc/html/rfc8152), [RFC8152](https://datatracker.ietf.org/doc/html/rfc8152)

## Requirements
* `docker` (For serving the app for local development)
* `docker-compose` (v1.22 minimum, for serving the app for local development)
* `make` (For helper commands)

## Quick Start
1. `make start`

### Make Commands
* `make build` - Run a production build and output the generated files to `dist`
* `make exec` - Start an interactive command prompt in the local development container
* `make lint` - Lint the project with ESLint
* `make logs` - View and follow logs for the local development container
* `make restart` - Restart the local development container (Useful if Webpack file watchers break)
* `make start` - Start the local development container
* `make stop` - Stop and remove the local development container

### Docker
This api can be packaged into a docker image and deployed on any cloud service. To build the image run `make build-docker`

## Contributing
Open an issue or a pull request to suggest changes or additions.

### Commit Messages
All commit messages should try to match the regex
`/^NZVA-[\d]{1,4} - [A-Z].*[\w)]$/`. In short (see
[here](https://chris.beams.io/posts/git-commit/) for details):
* Titles should try to not exceed 50 characters and should never exceed 72 characters
    * Use the message body for further info on how/why you made your change
* Titles should be capitalised
* Titles should not end in a period
* Titles should be in the imperative mood (`Add feature A` not `Added feature A`)
* Separate the body from the title with an empty line
* The body should wrap at 72 characters

Bad:
* `Updated readme to include guidelines on good commit message format.`
* `[NZVA-123] updated readme to include guidelines on good commit message format`
* `NZVA-123 - Added commit message guidelines to README`

Good:
* `NZVA-123 - Add commit message guidelines to README`

## Node Project Module License List

```
@cto.af/textdecoder@0.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@nestjs/common@8.2.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@nestjs/config@1.1.5 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@nestjs/core@8.2.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@nestjs/mapped-types@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@nestjs/platform-express@8.2.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@nestjs/swagger@5.1.5 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@nuxtjs/opencollective@0.3.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@vendia/serverless-express@3.4.0 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

accepts@1.3.7 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

aes-cbc-mac@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ansi-styles@4.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

any-promise@1.3.0 [license(s): MIT]
└── package.json:  MIT

append-field@1.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

argparse@1.0.10 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

array-flatten@1.1.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

asn1@0.2.6 [license(s): MIT]
└── package.json:  MIT

aws-lambda@1.0.7 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

aws-sdk@2.1041.0 [license(s): Apache, Apache-2.0, BSD, MIT]
├── package.json:  Apache-2.0
└── license files: Apache, BSD, MIT

aws-serverless-express@3.4.0 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

axios@0.24.0 [license(s): MIT]
└── package.json:  MIT

balanced-match@1.0.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

base32-decode@1.0.0 [license(s): MIT]
└── package.json:  MIT

base64-js@1.5.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

binary-case@1.1.4 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

bn.js@4.12.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

body-parser@1.19.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

brace-expansion@1.1.11 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

brorand@1.1.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

buffer@4.9.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

buffer-from@1.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

busboy@0.2.14 [license(s): MIT]
└── package.json:  MIT

bytes@3.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cbor@7.0.6 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cbor@8.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

chalk@4.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

class-transformer@0.5.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

class-validator@0.13.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

color-convert@2.0.1 [license(s): MIT]
└── package.json:  MIT

color-name@1.1.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

commander@3.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

concat-map@0.0.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

concat-stream@1.6.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

consola@2.15.3 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

content-disposition@0.5.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

content-type@1.0.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cookie@0.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cookie-signature@1.0.6 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

core-util-is@1.0.3 [license(s): MIT]
└── package.json:  MIT

cors@2.8.5 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cose-js@0.8.2 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

debug@2.6.9 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

depd@1.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

destroy@1.0.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

dicer@0.2.5 [license(s): MIT]
└── package.json:  MIT

dotenv@10.0.0 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

dotenv-expand@5.1.0 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

ee-first@1.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

elliptic@6.5.4 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

encodeurl@1.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

escape-html@1.0.3 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

esprima@4.0.1 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
└── readme files: BSD

etag@1.8.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

events@1.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

express@4.17.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

eyes@0.1.8 [license(s): MIT]
└── package.json:  MIT

fast-safe-stringify@2.1.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

finalhandler@1.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

follow-redirects@1.14.5 [license(s): MIT]
└── package.json:  MIT

forwarded@0.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

fresh@0.5.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

fs.realpath@1.0.0 [license(s): ISC, MIT]
├── package.json:  ISC
└── license files: ISC, MIT

glob@7.2.0 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

glob-to-regexp@0.4.1 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

graceful-fs@4.2.8 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

has-flag@4.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

hash.js@1.1.7 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

hmac-drbg@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

http-errors@1.7.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

http-errors@1.7.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

iconv-lite@0.4.24 [license(s): MIT]
└── package.json:  MIT

ieee754@1.1.13 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── readme files: BSD

ieee754@1.2.1 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── readme files: BSD

inflight@1.0.6 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

inherits@2.0.3 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

inherits@2.0.4 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

ipaddr.js@1.9.1 [license(s): MIT]
└── package.json:  MIT

isarray@0.0.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

isarray@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

iterare@1.2.1 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

jmespath@0.15.0 [license(s): Apache 2.0]
└── package.json:  Apache 2.0

js-yaml@3.14.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

libphonenumber-js@1.9.43 [license(s): Apache, MIT]
├── package.json:  MIT
├── license files: Apache, MIT
└── readme files: Apache

lodash@4.17.21 [license(s): MIT]
└── package.json:  MIT

lodash.get@4.4.2 [license(s): MIT]
└── package.json:  MIT

lodash.has@4.5.2 [license(s): MIT]
└── package.json:  MIT

lodash.set@4.3.2 [license(s): MIT]
└── package.json:  MIT

media-typer@0.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

merge-descriptors@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

methods@1.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

mime@1.6.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

mime-db@1.51.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

mime-types@2.1.34 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

minimalistic-assert@1.0.1 [license(s): ISC]
└── package.json:  ISC

minimalistic-crypto-utils@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

minimatch@3.0.4 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

minimist@1.2.5 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

mkdirp@0.5.5 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

ms@2.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ms@2.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

multer@1.4.3 [license(s): MIT]
└── package.json:  MIT

negotiator@0.6.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

node-fetch@2.6.6 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

node-hkdf-sync@1.0.0 [license(s): Apache]
└── readme files: Apache

node-rsa@1.1.1 [license(s): BSD, MIT]
├── package.json:  MIT
└── readme files: BSD

nofilter@2.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

nofilter@3.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

nz-covidpass-api@0.0.1 [license(s): BSD, GPL, ISC, MIT, Public Domain, UNLICENSED]
├── package.json:  UNLICENSED
└── license files: BSD, GPL, ISC, MIT, Public Domain

object-assign@4.1.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

object-hash@2.2.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

on-finished@2.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

once@1.4.0 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

parseurl@1.3.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

path-is-absolute@1.0.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

path-to-regexp@0.1.7 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

path-to-regexp@3.2.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

process-nextick-args@2.0.1 [license(s): MIT]
└── package.json:  MIT

proxy-addr@2.0.7 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

punycode@1.3.2 [license(s): MIT]
└── package.json:  MIT

qs@6.7.0 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

querystring@0.2.0 [license(s): MIT]
└── package.json:  MIT

range-parser@1.2.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

raw-body@2.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

readable-stream@1.1.14 [license(s): MIT]
└── package.json:  MIT

readable-stream@2.3.7 [license(s): MIT]
└── package.json:  MIT

reflect-metadata@0.1.13 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

rimraf@3.0.2 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

rxjs@7.4.0 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

safe-buffer@5.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

safer-buffer@2.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

sax@1.2.1 [license(s): GPL, ISC, MIT]
├── package.json:  ISC
└── license files: GPL, ISC, MIT

sax@1.2.4 [license(s): ISC, MIT]
├── package.json:  ISC
└── license files: ISC, MIT

send@0.17.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

serve-static@1.14.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

setprototypeof@1.1.1 [license(s): ISC]
└── package.json:  ISC

sprintf-js@1.0.3 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── readme files: BSD

statuses@1.5.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

streamsearch@0.1.2 [license(s): MIT]
└── package.json:  MIT

string_decoder@0.10.31 [license(s): MIT]
└── package.json:  MIT

string_decoder@1.1.1 [license(s): MIT]
└── package.json:  MIT

supports-color@7.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

swagger-ui-dist@4.1.2 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

swagger-ui-express@4.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

toidentifier@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

tr46@0.0.3 [license(s): MIT]
└── package.json:  MIT

tslib@2.1.0 [license(s): 0BSD]
└── package.json:  0BSD

tslib@2.3.1 [license(s): 0BSD]
└── package.json:  0BSD

type-is@1.6.18 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

typedarray@0.0.6 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

unpipe@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

url@0.10.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

util-deprecate@1.0.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

utils-merge@1.0.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

uuid@3.3.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

uuid@8.3.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

validator@13.7.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

vary@1.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

vows@0.5.13 [license(s): Unknown]

watchpack@2.3.0 [license(s): MIT]
└── package.json:  MIT

webidl-conversions@3.0.1 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
└── license files: BSD

whatwg-url@5.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

wrappy@1.0.2 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

xml2js@0.4.19 [license(s): MIT]
└── package.json:  MIT

xmlbuilder@9.0.7 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

xtend@4.0.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

LICENSES: 0BSD, Apache, Apache 2.0, Apache-2.0, BSD, BSD-2-Clause, BSD-3-Clause, GPL, ISC, MIT, Public Domain, UNLICENSED, Unknown
```
