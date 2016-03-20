# to-age
An extremely simple module that converts a date to an age.

> $ toAge('1991-04-24'); // 24 (at time of writing)

## Installing

`npm i to-age --save`

## Usage

```js
var toAge = require ('to-age');

// From an instance
toAge(new Date(1991, 4, 24));

// From a string
toAge('1991-04-24');
```
