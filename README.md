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

This project uses the following 4 libraries to decode and verify the pass:

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
@angular-devkit/core@13.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@angular-devkit/core@13.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@angular-devkit/schematics@13.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@angular-devkit/schematics@13.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@angular-devkit/schematics-cli@13.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/code-frame@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/compat-data@7.16.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/core@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/generator@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-compilation-targets@7.16.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-function-name@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-get-function-arity@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-hoist-variables@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-member-expression-to-functions@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-module-imports@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-module-transforms@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-optimise-call-expression@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-plugin-utils@7.14.5 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-replace-supers@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-simple-access@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-split-export-declaration@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-validator-identifier@7.15.7 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helper-validator-option@7.14.5 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/helpers@7.16.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/highlight@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/parser@7.16.4 [license(s): MIT]
└── package.json:  MIT

@babel/plugin-syntax-async-generators@7.8.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-bigint@7.8.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-class-properties@7.12.13 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-import-meta@7.10.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-json-strings@7.8.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-logical-assignment-operators@7.10.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-nullish-coalescing-operator@7.8.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-numeric-separator@7.10.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-object-rest-spread@7.8.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-optional-catch-binding@7.8.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-optional-chaining@7.8.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-top-level-await@7.14.5 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/plugin-syntax-typescript@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/template@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/traverse@7.16.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@babel/types@7.16.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@bcoe/v8-coverage@0.2.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@cspotcode/source-map-consumer@0.8.0 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

@cspotcode/source-map-support@0.7.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@cto.af/textdecoder@0.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@eslint/eslintrc@1.0.4 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

@humanwhocodes/config-array@0.6.0 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

@humanwhocodes/object-schema@1.2.1 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
├── license files: BSD
└── readme files: BSD

@istanbuljs/load-nyc-config@1.1.0 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

@istanbuljs/schema@0.1.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@jest/console@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@jest/core@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@jest/environment@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@jest/fake-timers@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@jest/globals@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@jest/reporters@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@jest/source-map@27.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@jest/test-result@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@jest/test-sequencer@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@jest/transform@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@jest/types@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@nestjs/cli@8.1.5 [license(s): MIT]
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

@nestjs/schematics@8.0.5 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@nestjs/swagger@5.1.5 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@nestjs/testing@8.2.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@nodelib/fs.scandir@2.1.5 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

@nodelib/fs.stat@2.0.5 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

@nodelib/fs.walk@1.2.8 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

@nuxtjs/opencollective@0.3.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@octetstream/promisify@2.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@sinonjs/commons@1.8.3 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── license files: BSD

@sinonjs/fake-timers@8.1.0 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── readme files: BSD

@tootallnate/once@1.1.2 [license(s): MIT]
└── package.json:  MIT

@tsconfig/node10@1.0.8 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@tsconfig/node12@1.0.9 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@tsconfig/node14@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@tsconfig/node16@1.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/babel__core@7.1.16 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/babel__generator@7.6.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/babel__template@7.4.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/babel__traverse@7.14.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/body-parser@1.19.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/connect@3.4.35 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/cookiejar@2.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/eslint@8.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/eslint-scope@3.7.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/estree@0.0.50 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/express@4.17.13 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/express-serve-static-core@4.17.26 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/graceful-fs@4.1.5 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/istanbul-lib-coverage@2.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/istanbul-lib-report@3.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/istanbul-reports@3.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/jest@27.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/jsdom@16.2.13 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/json-schema@7.0.9 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/json5@0.0.29 [license(s): MIT]
└── package.json:  MIT

@types/mime@1.3.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/node@16.11.11 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/parse-json@4.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/parse5@6.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/prettier@2.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/qs@6.9.7 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/range-parser@1.2.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/serve-static@1.13.10 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/stack-utils@2.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/superagent@4.1.13 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/supertest@2.0.11 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/tough-cookie@4.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/yargs@16.0.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@types/yargs-parser@20.2.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@typescript-eslint/eslint-plugin@5.5.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@typescript-eslint/experimental-utils@5.5.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@typescript-eslint/parser@5.5.0 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
└── readme files: BSD

@typescript-eslint/scope-manager@5.5.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@typescript-eslint/types@5.5.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@typescript-eslint/typescript-estree@5.5.0 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
└── readme files: BSD

@typescript-eslint/visitor-keys@5.5.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@vendia/serverless-express@3.4.0 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

@webassemblyjs/ast@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/floating-point-hex-parser@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/helper-api-error@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/helper-buffer@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/helper-numbers@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/helper-wasm-bytecode@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/helper-wasm-section@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/ieee754@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/leb128@1.11.1 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

@webassemblyjs/utf8@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/wasm-edit@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/wasm-gen@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/wasm-opt@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/wasm-parser@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@webassemblyjs/wast-printer@1.11.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

@xtuc/ieee754@1.2.0 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── readme files: BSD

@xtuc/long@4.2.2 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

abab@2.0.5 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── license files: BSD

accepts@1.3.7 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

acorn@7.4.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

acorn@8.6.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

acorn-globals@6.0.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

acorn-import-assertions@1.8.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

acorn-jsx@5.3.2 [license(s): MIT]
└── package.json:  MIT

acorn-walk@7.2.0 [license(s): MIT]
└── package.json:  MIT

acorn-walk@8.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

aes-cbc-mac@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

agent-base@6.0.2 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

ajv@6.12.6 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ajv@8.6.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ajv@8.8.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ajv-formats@2.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ajv-keywords@3.5.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ansi-colors@4.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ansi-escapes@4.3.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ansi-regex@5.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ansi-styles@3.2.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

ansi-styles@4.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ansi-styles@5.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ansicolors@0.3.2 [license(s): MIT]
└── package.json:  MIT

any-promise@1.3.0 [license(s): MIT]
└── package.json:  MIT

anymatch@3.1.2 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

append-field@1.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

archy@1.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

arg@4.1.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

argparse@1.0.10 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

argparse@2.0.1 [license(s): GPL, Python-2.0]
├── package.json:  Python-2.0
└── license files: GPL

array-flatten@1.1.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

array-union@2.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

asap@2.0.6 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

asn1@0.2.6 [license(s): MIT]
└── package.json:  MIT

asynckit@0.4.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

at-least-node@1.0.0 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

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

babel-jest@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

babel-plugin-istanbul@6.1.1 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

babel-plugin-jest-hoist@27.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

babel-preset-current-node-syntax@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

babel-preset-jest@27.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

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

binary-extensions@2.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

bl@4.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

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

braces@3.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

brorand@1.1.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

browser-process-hrtime@1.0.0 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

browserslist@4.18.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

bs-logger@0.2.6 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

bser@2.1.1 [license(s): Apache-2.0]
└── package.json:  Apache-2.0

buffer@4.9.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

buffer@5.7.1 [license(s): MIT]
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

call-bind@1.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

callsites@3.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

camelcase@5.3.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

camelcase@6.2.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

caniuse-lite@1.0.30001283 [license(s): CC-BY-4.0, Public Domain]
├── package.json:  CC-BY-4.0
└── license files: Public Domain

cbor@7.0.6 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cbor@8.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

chalk@2.4.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

chalk@3.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

chalk@4.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

char-regex@1.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

chardet@0.7.0 [license(s): MIT]
└── package.json:  MIT

chokidar@3.5.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

chrome-trace-event@1.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ci-info@3.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cjs-module-lexer@1.2.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

class-transformer@0.5.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

class-validator@0.13.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cli-cursor@3.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cli-spinners@2.6.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cli-table3@0.6.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

cli-width@3.0.0 [license(s): ISC]
└── package.json:  ISC

cliui@7.0.4 [license(s): ISC]
└── package.json:  ISC

clone@1.0.4 [license(s): MIT]
└── package.json:  MIT

co@4.6.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

collect-v8-coverage@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

color-convert@1.9.3 [license(s): MIT]
└── package.json:  MIT

color-convert@2.0.1 [license(s): MIT]
└── package.json:  MIT

color-name@1.1.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

color-name@1.1.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

colors@1.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

combined-stream@1.0.8 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

commander@2.19.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

commander@2.20.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

commander@3.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

commander@4.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

compare-versions@3.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

component-emitter@1.3.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

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

convert-source-map@1.8.0 [license(s): MIT]
└── package.json:  MIT

cookie@0.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cookie-signature@1.0.6 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

cookiejar@2.1.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

core-util-is@1.0.3 [license(s): MIT]
└── package.json:  MIT

cors@2.8.5 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cose-js@0.8.2 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

cosmiconfig@6.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

create-require@1.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cross-spawn@7.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

cssom@0.3.8 [license(s): MIT]
└── package.json:  MIT

cssom@0.4.4 [license(s): MIT]
└── package.json:  MIT

cssstyle@2.3.0 [license(s): MIT]
└── package.json:  MIT

data-urls@2.0.0 [license(s): MIT]
└── package.json:  MIT

debug@2.6.9 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

debug@3.2.7 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

debug@4.3.3 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

decimal.js@10.3.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

dedent@0.7.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

deep-is@0.1.4 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

deepmerge@4.2.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

defaults@1.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

delayed-stream@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

depd@1.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

destroy@1.0.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

detect-newline@3.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

dicer@0.2.5 [license(s): MIT]
└── package.json:  MIT

diff@4.0.2 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── license files: BSD

diff-sequences@27.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

dir-glob@3.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

doctrine@3.0.0 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
├── license files: Apache
└── readme files: Apache

domexception@2.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

dotenv@10.0.0 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

dotenv-expand@5.1.0 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

ee-first@1.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

electron-to-chromium@1.4.5 [license(s): ISC]
└── package.json:  ISC

elliptic@6.5.4 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

emittery@0.8.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

emoji-regex@8.0.0 [license(s): MIT]
└── package.json:  MIT

encodeurl@1.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

end-of-stream@1.4.4 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

enhanced-resolve@5.8.3 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

enquirer@2.3.6 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

error-ex@1.3.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

es-module-lexer@0.9.3 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

escalade@3.1.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

escape-html@1.0.3 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

escape-string-regexp@1.0.5 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

escape-string-regexp@2.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

escape-string-regexp@4.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

escodegen@2.0.0 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

eslint@8.3.0 [license(s): MIT]
└── package.json:  MIT

eslint-config-prettier@8.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

eslint-plugin-prettier@4.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

eslint-scope@5.1.1 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
└── readme files: BSD

eslint-scope@7.1.0 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
└── readme files: BSD

eslint-utils@3.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

eslint-visitor-keys@2.1.0 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

eslint-visitor-keys@3.1.0 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

espree@9.1.0 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
├── license files: BSD
└── readme files: BSD

esprima@4.0.1 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
└── readme files: BSD

esquery@1.4.0 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

esrecurse@4.3.0 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

estraverse@4.3.0 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

estraverse@5.3.0 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

esutils@2.0.3 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

etag@1.8.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

events@1.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

events@3.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

execa@4.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

execa@5.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

exit@0.1.2 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

expect@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

express@4.17.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

external-editor@3.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

eyes@0.1.8 [license(s): MIT]
└── package.json:  MIT

fast-deep-equal@3.1.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

fast-diff@1.2.0 [license(s): Apache-2.0]
└── package.json:  Apache-2.0

fast-glob@3.2.7 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

fast-json-stable-stringify@2.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

fast-levenshtein@2.0.6 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

fast-safe-stringify@2.1.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

fastq@1.13.0 [license(s): ISC]
├── package.json:  ISC
└── readme files: ISC

fb-watchman@2.0.1 [license(s): Apache-2.0]
└── package.json:  Apache-2.0

figures@3.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

file-entry-cache@6.0.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

fill-range@7.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

finalhandler@1.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

find-up@4.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

flat-cache@3.0.4 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

flatted@3.2.4 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

follow-redirects@1.14.5 [license(s): MIT]
└── package.json:  MIT

fork-ts-checker-webpack-plugin@6.4.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

form-data@3.0.1 [license(s): MIT]
└── package.json:  MIT

formidable@1.2.6 [license(s): MIT]
└── package.json:  MIT

forwarded@0.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

fresh@0.5.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

fs-extra@9.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

fs-extra@10.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

fs-monkey@1.0.3 [license(s): Unlicense]
└── package.json:  Unlicense

fs.realpath@1.0.0 [license(s): ISC, MIT]
├── package.json:  ISC
└── license files: ISC, MIT

function-bind@1.1.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

functional-red-black-tree@1.0.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

gensync@1.0.0-beta.2 [license(s): MIT]
└── package.json:  MIT

get-caller-file@2.0.5 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

get-intrinsic@1.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

get-package-type@0.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

get-stream@5.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

get-stream@6.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

glob@7.2.0 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

glob-all@3.1.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

glob-parent@5.1.2 [license(s): ISC]
├── package.json:  ISC
├── license files: ISC
└── readme files: ISC

glob-parent@6.0.2 [license(s): ISC]
├── package.json:  ISC
├── license files: ISC
└── readme files: ISC

glob-to-regexp@0.4.1 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

globals@11.12.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

globals@13.12.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

globby@11.0.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

graceful-fs@4.2.8 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

has@1.0.3 [license(s): MIT]
└── package.json:  MIT

has-flag@3.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

has-flag@4.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

has-symbols@1.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

hash.js@1.1.7 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

hmac-drbg@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

hosted-git-info@2.8.9 [license(s): ISC]
└── package.json:  ISC

html-encoding-sniffer@2.0.1 [license(s): MIT]
└── package.json:  MIT

html-escaper@2.0.2 [license(s): MIT]
└── package.json:  MIT

http-errors@1.7.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

http-errors@1.7.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

http-proxy-agent@4.0.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

https-proxy-agent@5.0.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

human-signals@1.1.1 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

human-signals@2.1.0 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

iconv-lite@0.4.24 [license(s): MIT]
└── package.json:  MIT

ieee754@1.1.13 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── readme files: BSD

ieee754@1.2.1 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── readme files: BSD

ignore@4.0.6 [license(s): MIT]
└── package.json:  MIT

ignore@5.1.9 [license(s): MIT]
└── package.json:  MIT

import-fresh@3.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

import-local@3.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

imurmurhash@0.1.4 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

inflight@1.0.6 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

inherits@2.0.3 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

inherits@2.0.4 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

inquirer@7.3.3 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

inquirer@8.2.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

interpret@1.4.0 [license(s): MIT]
└── package.json:  MIT

ipaddr.js@1.9.1 [license(s): MIT]
└── package.json:  MIT

is-arrayish@0.2.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

is-binary-path@2.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

is-core-module@2.8.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

is-extglob@2.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

is-fullwidth-code-point@3.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

is-generator-fn@2.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

is-glob@4.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

is-interactive@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

is-number@7.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

is-potential-custom-element-name@1.0.1 [license(s): MIT]
└── package.json:  MIT

is-stream@2.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

is-typedarray@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

is-unicode-supported@0.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

isarray@0.0.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

isarray@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

isexe@2.0.0 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

istanbul-lib-coverage@3.2.0 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

istanbul-lib-instrument@4.0.3 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

istanbul-lib-instrument@5.1.0 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

istanbul-lib-report@3.0.0 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

istanbul-lib-source-maps@4.0.1 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

istanbul-reports@3.1.0 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

iterare@1.2.1 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

jest@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-changed-files@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-circus@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-cli@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-config@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-diff@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-docblock@27.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-each@27.4.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

jest-environment-jsdom@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-environment-node@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-get-type@27.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-haste-map@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-jasmine2@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-leak-detector@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-matcher-utils@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-message-util@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-mock@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-pnp-resolver@1.2.2 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

jest-regex-util@27.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-resolve@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-resolve-dependencies@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-runner@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-runtime@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-serializer@27.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-snapshot@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-util@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-validate@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-watcher@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jest-worker@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jmespath@0.15.0 [license(s): Apache 2.0]
└── package.json:  Apache 2.0

js-tokens@4.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

js-yaml@3.14.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

js-yaml@4.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jsdom@16.7.0 [license(s): MIT]
└── package.json:  MIT

jsesc@2.5.2 [license(s): MIT]
└── package.json:  MIT

json-parse-better-errors@1.0.2 [license(s): MIT]
└── package.json:  MIT

json-parse-even-better-errors@2.3.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

json-schema-traverse@0.4.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

json-schema-traverse@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

json-stable-stringify-without-jsonify@1.0.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

json5@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

json5@2.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jsonc-parser@3.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

jsonfile@6.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

kleur@3.0.3 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

leven@3.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

levn@0.3.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

levn@0.4.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

libphonenumber-js@1.9.43 [license(s): Apache, MIT]
├── package.json:  MIT
├── license files: Apache, MIT
└── readme files: Apache

lines-and-columns@1.2.4 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

loader-runner@4.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

locate-path@5.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

lodash@4.17.21 [license(s): MIT]
└── package.json:  MIT

lodash.assign@4.2.0 [license(s): MIT]
└── package.json:  MIT

lodash.assignin@4.2.0 [license(s): MIT]
└── package.json:  MIT

lodash.clone@4.5.0 [license(s): MIT]
└── package.json:  MIT

lodash.clonedeep@4.5.0 [license(s): MIT]
└── package.json:  MIT

lodash.flatten@4.4.0 [license(s): MIT]
└── package.json:  MIT

lodash.get@4.4.2 [license(s): MIT]
└── package.json:  MIT

lodash.has@4.5.2 [license(s): MIT]
└── package.json:  MIT

lodash.memoize@4.1.2 [license(s): MIT]
└── package.json:  MIT

lodash.merge@4.6.2 [license(s): MIT]
└── package.json:  MIT

lodash.set@4.3.2 [license(s): MIT]
└── package.json:  MIT

log-symbols@4.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

lru-cache@4.1.5 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

lru-cache@6.0.0 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

macos-release@2.5.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

magic-string@0.25.7 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

make-dir@3.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

make-error@1.3.6 [license(s): ISC]
├── package.json:  ISC
└── readme files: ISC

makeerror@1.0.12 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── license files: BSD

media-typer@0.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

memfs@3.4.0 [license(s): Unlicense]
└── package.json:  Unlicense

merge-descriptors@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

merge-stream@2.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

merge2@1.4.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

methods@1.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

micromatch@4.0.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

mime@1.6.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

mime@2.6.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

mime-db@1.51.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

mime-types@2.1.34 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

mimic-fn@2.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

minimalistic-assert@1.0.1 [license(s): ISC]
└── package.json:  ISC

minimalistic-crypto-utils@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

minimatch@3.0.4 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

minimist@0.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

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

ms@2.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

ms@2.1.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

multer@1.4.3 [license(s): MIT]
└── package.json:  MIT

mute-stream@0.0.8 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

natural-compare@1.4.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

negotiator@0.6.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

neo-async@2.6.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

nlf@2.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

node-emoji@1.11.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

node-fetch@2.6.6 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

node-hkdf-sync@1.0.0 [license(s): Apache]
└── readme files: Apache

node-int64@0.4.0 [license(s): MIT]
└── package.json:  MIT

node-modules-regexp@1.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

node-releases@2.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

node-rsa@1.1.1 [license(s): BSD, MIT]
├── package.json:  MIT
└── readme files: BSD

nofilter@2.0.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

nofilter@3.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

normalize-path@3.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

npm-run-path@4.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

nwsapi@2.2.0 [license(s): MIT]
└── package.json:  MIT

nz-covidpass-api@0.0.1 [license(s): MIT, UNLICENSED]
├── package.json:  UNLICENSED
└── license files: MIT

object-assign@4.1.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

object-hash@2.2.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

object-inspect@1.11.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

on-finished@2.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

once@1.4.0 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

onetime@5.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

optional@0.1.4 [license(s): MIT]
└── package.json:  MIT

optionator@0.8.3 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

optionator@0.9.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

ora@5.4.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

os-name@4.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

os-tmpdir@1.0.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

p-limit@2.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

p-locate@4.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

p-try@2.2.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

parent-module@1.0.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

parse-json@5.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

parse5@6.0.1 [license(s): MIT]
└── package.json:  MIT

parseurl@1.3.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

path-exists@4.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

path-is-absolute@1.0.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

path-key@3.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

path-parse@1.0.7 [license(s): MIT]
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

path-type@4.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

picocolors@1.0.0 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

picomatch@2.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

pirates@4.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

pkg-dir@4.2.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

pluralize@8.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

prelude-ls@1.1.2 [license(s): MIT]
└── package.json:  MIT

prelude-ls@1.2.1 [license(s): MIT]
└── package.json:  MIT

prettier@2.5.0 [license(s): MIT]
└── package.json:  MIT

prettier-linter-helpers@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

pretty-format@27.4.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

process-nextick-args@2.0.1 [license(s): MIT]
└── package.json:  MIT

progress@2.0.3 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

promise@7.3.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

promise-fs@2.1.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

prompts@2.4.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

proxy-addr@2.0.7 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

pseudomap@1.0.2 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

psl@1.8.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

pump@3.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

punycode@1.3.2 [license(s): MIT]
└── package.json:  MIT

punycode@2.1.1 [license(s): MIT]
└── package.json:  MIT

qs@6.7.0 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

qs@6.10.1 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── license files: BSD

querystring@0.2.0 [license(s): MIT]
└── package.json:  MIT

queue-microtask@1.2.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

randombytes@2.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

range-parser@1.2.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

raw-body@2.4.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

react-is@17.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

readable-stream@1.1.14 [license(s): MIT]
└── package.json:  MIT

readable-stream@2.3.7 [license(s): MIT]
└── package.json:  MIT

readable-stream@3.6.0 [license(s): MIT]
└── package.json:  MIT

readdirp@3.6.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

rechoir@0.6.2 [license(s): MIT]
└── package.json:  MIT

reflect-metadata@0.1.13 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

regexpp@3.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

require-directory@2.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

require-from-string@2.0.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

resolve@1.20.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

resolve-cwd@3.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

resolve-from@4.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

resolve-from@5.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

resolve.exports@1.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

restore-cursor@3.1.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

reusify@1.0.4 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

rimraf@3.0.2 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

run-async@2.4.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

run-parallel@1.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

rxjs@6.6.7 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

rxjs@7.4.0 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

safe-buffer@5.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

safe-buffer@5.2.1 [license(s): MIT]
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

saxes@5.0.1 [license(s): ISC]
└── package.json:  ISC

schema-utils@2.7.0 [license(s): MIT]
└── package.json:  MIT

schema-utils@3.1.1 [license(s): MIT]
└── package.json:  MIT

semver@5.7.1 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

semver@6.3.0 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

semver@7.3.5 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

send@0.17.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

serialize-javascript@6.0.0 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── readme files: BSD

serve-static@1.14.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

setprototypeof@1.1.1 [license(s): ISC]
└── package.json:  ISC

shebang-command@2.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

shebang-regex@3.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

shelljs@0.8.4 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── license files: BSD

side-channel@1.0.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

signal-exit@3.0.6 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

sisteransi@1.0.5 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

slash@3.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

snyk-module@1.9.1 [license(s): Apache-2.0]
└── package.json:  Apache-2.0

snyk-resolve@1.1.0 [license(s): Apache-2.0]
└── package.json:  Apache-2.0

snyk-resolve-deps@4.0.2 [license(s): Apache-2.0]
└── package.json:  Apache-2.0

snyk-tree@1.0.0 [license(s): Apache-2.0]
└── package.json:  Apache-2.0

snyk-try-require@1.3.1 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

source-map@0.5.7 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

source-map@0.6.1 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

source-map@0.7.3 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

source-map-support@0.5.20 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

source-map-support@0.5.21 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

sourcemap-codec@1.4.8 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

sprintf-js@1.0.3 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── readme files: BSD

stack-utils@2.0.5 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

statuses@1.5.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

streamsearch@0.1.2 [license(s): MIT]
└── package.json:  MIT

string-length@4.0.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

string-width@4.2.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

string_decoder@0.10.31 [license(s): MIT]
└── package.json:  MIT

string_decoder@1.1.1 [license(s): MIT]
└── package.json:  MIT

string_decoder@1.3.0 [license(s): MIT]
└── package.json:  MIT

strip-ansi@6.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

strip-bom@3.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

strip-bom@4.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

strip-final-newline@2.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

strip-json-comments@3.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

superagent@6.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

supertest@6.1.6 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

supports-color@5.5.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

supports-color@7.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

supports-color@8.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

supports-hyperlinks@2.2.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

swagger-ui-dist@4.1.2 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

swagger-ui-express@4.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

symbol-observable@4.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

symbol-tree@3.2.4 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

tapable@1.1.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

tapable@2.2.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

terminal-link@2.1.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

terser@5.10.0 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
└── license files: BSD

terser-webpack-plugin@5.2.5 [license(s): MIT]
└── package.json:  MIT

test-exclude@6.0.0 [license(s): ISC]
└── package.json:  ISC

text-table@0.2.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

then-fs@2.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

throat@6.0.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

through@2.3.8 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

tmp@0.0.33 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

tmpl@1.0.5 [license(s): BSD, BSD-3-Clause]
├── package.json:  BSD-3-Clause
└── license files: BSD

to-fast-properties@2.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

to-regex-range@5.0.1 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

toidentifier@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

tough-cookie@4.0.0 [license(s): BSD-3-Clause]
└── package.json:  BSD-3-Clause

tr46@0.0.3 [license(s): MIT]
└── package.json:  MIT

tr46@2.1.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

tree-kill@1.2.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

ts-jest@27.0.7 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

ts-loader@9.2.6 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

ts-node@10.4.0 [license(s): Apache, MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: Apache, MIT

tsconfig-paths@3.11.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

tsconfig-paths@3.12.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

tsconfig-paths-webpack-plugin@3.5.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

tslib@1.14.1 [license(s): 0BSD]
└── package.json:  0BSD

tslib@2.1.0 [license(s): 0BSD]
└── package.json:  0BSD

tslib@2.3.1 [license(s): 0BSD]
└── package.json:  0BSD

tsutils@3.21.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

type-check@0.3.2 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

type-check@0.4.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

type-detect@4.0.8 [license(s): MIT]
└── package.json:  MIT

type-fest@0.20.2 [license(s): (MIT OR CC0-1.0), MIT]
├── package.json:  (MIT OR CC0-1.0)
└── license files: MIT

type-fest@0.21.3 [license(s): (MIT OR CC0-1.0), MIT]
├── package.json:  (MIT OR CC0-1.0)
└── license files: MIT

type-is@1.6.18 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

typedarray@0.0.6 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

typedarray-to-buffer@3.1.5 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

typescript@4.3.5 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

typescript@4.5.2 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

universalify@0.1.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

universalify@2.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

unpipe@1.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

uri-js@4.4.1 [license(s): BSD-2-Clause]
└── package.json:  BSD-2-Clause

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

v8-compile-cache@2.3.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

v8-to-istanbul@8.1.0 [license(s): ISC]
└── package.json:  ISC

validator@13.7.0 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

vary@1.1.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

vows@0.5.13 [license(s): Unknown]

w3c-hr-time@1.0.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

w3c-xmlserializer@2.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

walker@1.0.8 [license(s): Apache-2.0]
└── package.json:  Apache-2.0

watchpack@2.3.0 [license(s): MIT]
└── package.json:  MIT

wcwidth@1.0.1 [license(s): MIT]
├── package.json:  MIT
└── readme files: MIT

webidl-conversions@3.0.1 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
└── license files: BSD

webidl-conversions@5.0.0 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
└── license files: BSD

webidl-conversions@6.1.0 [license(s): BSD, BSD-2-Clause]
├── package.json:  BSD-2-Clause
└── license files: BSD

webpack@5.64.1 [license(s): MIT]
└── package.json:  MIT

webpack-node-externals@3.0.0 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

webpack-sources@3.2.2 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

whatwg-encoding@1.0.5 [license(s): MIT]
└── package.json:  MIT

whatwg-mimetype@2.3.0 [license(s): MIT]
└── package.json:  MIT

whatwg-url@5.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

whatwg-url@8.7.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

which@2.0.2 [license(s): BSD, ISC]
├── package.json:  ISC
├── license files: ISC
└── readme files: BSD

windows-release@4.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

word-wrap@1.2.3 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

wrap-ansi@7.0.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

wrappy@1.0.2 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

write-file-atomic@3.0.3 [license(s): ISC]
└── package.json:  ISC

ws@7.5.6 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

xml-name-validator@3.0.0 [license(s): Apache, Apache-2.0]
├── package.json:  Apache-2.0
└── license files: Apache

xml2js@0.4.19 [license(s): MIT]
└── package.json:  MIT

xmlbuilder@9.0.7 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

xmlchars@2.2.0 [license(s): MIT]
└── package.json:  MIT

xtend@4.0.2 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

y18n@5.0.8 [license(s): ISC]
├── package.json:  ISC
└── readme files: ISC

yallist@2.1.2 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

yallist@4.0.0 [license(s): ISC]
├── package.json:  ISC
└── license files: ISC

yaml@1.10.2 [license(s): ISC]
├── package.json:  ISC
└── readme files: ISC

yargs@1.2.6 [license(s): MIT/X11]
└── package.json:  MIT/X11

yargs@16.2.0 [license(s): MIT]
├── package.json:  MIT
└── license files: MIT

yargs-parser@20.2.9 [license(s): ISC]
├── package.json:  ISC
└── readme files: ISC

yn@3.1.1 [license(s): MIT]
├── package.json:  MIT
├── license files: MIT
└── readme files: MIT

LICENSES: (MIT OR CC0-1.0), 0BSD, Apache, Apache 2.0, Apache-2.0, BSD, BSD-2-Clause, BSD-3-Clause, CC-BY-4.0, GPL, ISC, MIT, MIT/X11, Public Domain, Python-2.0, UNLICENSED, Unknown, Unlicense

```
