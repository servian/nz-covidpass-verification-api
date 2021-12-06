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

1. [Vue QR Code Reader](https://www.npmjs.com/package/vue-qrcode-reader): Detect and decode QR codes
2. [Base32 Decode](https://www.npmjs.com/package/base32-decode): Base32 decoder with support for multiple variants.
3. [CBOR](https://www.npmjs.com/package/cbor): Encode and parse data in the Concise Binary Object Representation (CBOR) data format
4. [COSE](https://www.npmjs.com/package/cose-js): JavaScript implementation of [COSE](https://datatracker.ietf.org/doc/html/rfc8152), [RFC8152](https://datatracker.ietf.org/doc/html/rfc8152)

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
