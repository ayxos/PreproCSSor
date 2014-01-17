preproCSSor
=============

A simple grunt configuration to work with stylus and jade

fisrt of all, you must install python and node.js framework

english version: https://github.com/joyent/node/wiki/installation

spanish version: http://openwebinars.net/instalar-node-js-en-linux-y-windows/

on linux:
```
tar -zxf node-v0.6.18.tar.gz #Download this from nodejs.org
cd node-v0.6.18
./configure && make && sudo make install
```

on Mac:
Using a package
```
http://nodejs.org/#download
```
Using Fink:
```
fink install nodejs
```
Using homebrew:
```
brew install node
```
Using macports:
```
port install nodejs  
```

Once installed, package.json is THE file that tells node which node packages it should install through npm.

run command:
```
npm install
```

When all packages have been installed, Gruntfile.js tell to node how they works, specifying source (src) and destination (dest) folders

Now, you just have to run the following command to generate HTML/CSS files from JADE/STYLUS files
```
grunt
```

P.S If you use
```
grunt watch
```
every time you save a file, grunt creates output files in automatic way

