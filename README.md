# base64-encoder

# Description

A minimalist and easy-to-use base64 encoder and decoder. It works with variables, strings, files, etc...

# Setup

### Installing and calling module

On terminal:

```
npm i base64-encoder
```

In your app:

```
const base64 = require('base64-encoder')
```

## Encoding

### Variables, strings, etc...

```
const encodedString = base64.encode(yourString)
```

### File encoding

```
const encodedFile = base64.encodeFile(address, fileName)
```

Obs: address must not end with '/' and it's a string.
example: "/myUser/mypath"

filename must content the entire name of the file, including extension.

example request:

```
const encodedFile = base64.encodeFile('/myUser/myPath', 'myFile.pdf')
```

## Decoding

### Variables, strings, etc...

```
const decodedString = base64.decode(yourString)
```

### File decoding

```
const decodedFile = base64.decodeFile(address, encodedFile, fileName)
```

Obs: same logic that encoding a file.

# Support:

Any doubts just send me an e-mail, rubenfsolorzano@hotmail.com

Bye!

# License

ISC
