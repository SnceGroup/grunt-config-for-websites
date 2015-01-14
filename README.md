#Grunt config for websites

Grunt configuration for websites front end development. The configuration is tailored to work with or without *Foundations for websites*, *Symfony* and *eZ Publish*.

##Requirements
These are the requirements of the host machine. The guide is intended for Mac OS X users.

 - [Homebrew](http://brew.sh)
 - [Node.js](http://nodejs.org) and [npm](https://www.npmjs.com): `brew install node`
 - [Bower](http://bower.io): `npm install -g bower`
 - [Grunt](http://gruntjs.com) CLI: `npm install -g grunt-cli`
 - (optional) [Foundation](http://foundation.zurb.com) CLI: `gem install foundation`
 - (optional) php-cgi, as part of PHP 5.6. This is required if you intend to compile partial PHP templates into static HTML:
    ```
    brew tap homebrew/dupes
    brew tap homebrew/versions
    brew tap homebrew/homebrew-php
    brew install php56
    ```

##Installation


##Settings