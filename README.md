# test-aws-sdk-js-typescript

## Pre-requisites

- Install [Node.js][https://nodejs.org/en/download].

## Setup

- Run `npm install`
- Run `npm build`
- It will fail with error `error TS1005: ',' expected.`

### Specific to TypeScript >4.0.0 <4.5.0

The error is not reproducible if you install `<4.0.0` or `>=4.5.0`

```console
$ npm install typescript@'<4.0.0' -D -E && npm run build
```

```console
$ npm install typescript@~4.5.0 -D -E && npm run build
```

### Specific to JS SDK >=3.723.0

The error is not reproducible if you install `<3.723.0`

```console
$ npm install @aws-sdk/client-sts@3.721.0 -E && npm run build
```
