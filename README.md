## About

Sgood is a lightweight rapid development MVC framework for NodeJS.  It leverages JugglingDB for ORM, EJS 
ejs for view script templating and Underscorejs for common utility additions.

Its aim is to provide a thin but well structured platform to build high performance and scalable websites 
in NodeJS quickly.  It is designed in such a manner to allow developers to use as much or as little of it 
as necessary and also to be able to quickly make small changes to allow the framework to function in 
such a way that fits their needs.

## Libraries leveraged

+ JugglingDB: MIT Licensed https://github.com/1602/jugglingdb
+ ejs: MIT Licensed https://github.com/visionmedia/ejs
+ Underscore: MIT Licensed https://github.com/documentcloud/underscore

## Roadmap

### Common:

+ Consolidate and make documentation and tools available

### Features:

+ Support for serving static files; e.g. CSS, Javascript, images, etc
+ Commandline tool for generating basic CRUD controllers, models and views
+ Support for easily launching multiple worker processes serving up content on the same port
+ Support for easily load balancing Sgood server nodes
+ Easy distributable caching components, leveraging memcache and/or custom cache
+ Localization support
+ Database schema migrations support
+ Libraries/framework for interop with cloud services such as Amazon, Azure, Google App Engine, etc

## License

MIT Licensed 

Copyright (c) 2011 Rob Skillington <rob@skillington.net>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.




