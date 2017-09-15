# extract-json-string
Module for extracting JSON objects from a string dump. 

## Usage

### Return an array of objects from a string containing stringified JSON objects.
```
const logdump = `
    18:28:54,289 [83] INFO Files Process Start.... 
    // having mismatched braces { works
    // having erroneous JSON-like { key : value } doesn't
    // break the program
    18:28:55,289 [83] INFO Files Process Start....
    18:28:56,289 [83] INFO Files Process Start....
    {
        "name" : "Nathan"
        "likes" : ["guitar", "Yuqing", "Tori"]
        "age" : 25
    }
    18:28:57,289 [83] INFO Files Process Start....
    18:29:00,289 [83] INFO Files Process Start....
    {
        "name" : "Yuqing"
        "likes" : ["China", "brain", "eyeballs"]
        "age" : 21
    } etc...
`
var objs = extractor.extract(logdump)
console.log(objs)
```

### Updates

