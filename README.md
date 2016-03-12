# Grunt config for websites

Grunt configuration for websites front end development. The configuration can be used for any kind of front end project. It has some settings to best work with [Foundation for Sites 6](http://foundation.zurb.com) and/or [Symfony](https://symfony.com) (or any Symfony based project like [eZ Platform](http://ezplatform.com)).

## Requirements
Requirements of the host machine.

 - [Node.js](http://nodejs.org): use the installer provided on the Node.js website
 - [npm](https://www.npmjs.com): `[sudo] npm install -g npm`
 - [Bower](http://bower.io): `[sudo] npm install -g bower`
 - [Grunt](http://gruntjs.com) CLI: `[sudo] npm install -g grunt-cli`

## Installation

### With Foundation for Sites 6

 - Create a Foundation project: `git clone https://github.com/zurb/foundation-sites-template projectname`
 - If you're using Symfony, move the project folder in the Symfony root. Rename it as `tpl`
 - Delete `gulpfile.js` and `package.json`
 - Copy and paste all grunt configuration files in the project except for the `sass` folder
 - Move `js/app.js` into `script` folder
 - Install Bower packages: `[sudo] bower install`
 - Install Node.js modules: `[sudo] npm install`

### Without Foundation for Sites 6

 - Download grunt configuration
 - If you're using Symfony, move the configuration folder in the Symfony root. Rename it as `tpl`
 - Install Node.js modules: `[sudo] npm install`

## Credits
Ballicons 2 icons released under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0/) by [Pixel Buddha](http://pixelbuddha.net/)