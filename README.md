#Grunt config for websites

Grunt configuration for websites front end development. The configuration is tailored to work with or without *Foundations for websites*, *Symfony* and *eZ Publish*.

##Requirements
These are the requirements of the host machine. The guide is intended for Mac OS X users.

 - [Node.js](http://nodejs.org): use the installer provided on the Node.js website
 - [npm](https://www.npmjs.com): `[sudo] npm install -g npm`
 - [Bower](http://bower.io): `[sudo] npm install -g bower`
 - [Grunt](http://gruntjs.com) CLI: `[sudo] npm install -g grunt-cli`
 - (optional) [Foundation](http://foundation.zurb.com) CLI: `gem install foundation`


##Installation

###With Foundation

 - Create Foundation project: `foundation new project_name --libsass`
 - If you're using Symfony (or eZ Publish), move the project folder in the Symfony root. Rename it as `tpl`
 - Delete `Gruntfile.js` and `package.json`. If present, delete the `node_modules` folder
 - Copy and paste all grunt configuration files in the project. Don't override the `sass` folder
 - Install Node.js modules: `[sudo] npm install`

###Without Foundation

 - Download grunt configuration
 - If you're using Symfony (or eZ Publish), move the configuration folder in the Symfony root. Rename it as `tpl`
 - Install Node.js modules: `[sudo] npm install`

##Settings


##Credits
Ballicons 2 icons released under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/) by [Pixel Buddha](http://pixelbuddha.net/)