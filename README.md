## About

Sgood is a lightweight rapid development MVC framework for NodeJS.  It leverages JugglingDB for ORM and 
Underscorejs for common utility additions.

Its aim is to provide a thin but well structured platform to build high performance and scalable websites 
in NodeJS quickly.  It is designed in such a manner to allow developers to use as much or as little of it 
as necessary and also to be able to quickly make small changes to allow the framework to function in 
such a way that fits their needs.

## Libraries leveraged

+ JugglingDB: MIT Licensed https://github.com/1602/jugglingdb
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

MIT License

