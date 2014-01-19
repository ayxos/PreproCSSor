preproCSSor
=============

A simple grunt configuration to work with both stylus and jade

What's Jade?
http://jade-lang.com/

try it!
http://html2jade.aaron-powell.com/

What's Stylus
http://learnboost.github.io/stylus/

try it!
http://css2stylus.com/

Fisrt of all, you must install python and the node.js framework

For more thorough walkthroughs:

English version: https://github.com/joyent/node/wiki/installation
Spanish version: http://openwebinars.net/instalar-node-js-en-linux-y-windows/

on linux:
```
tar -zxf node-v0.6.18.tar.gz #Download this from nodejs.org
cd node-v0.6.18
./configure && make && sudo make install
```

on Mac:
```
  Using a package installer : http://nodejs.org/#download

  Using Fink Commander: fink install nodejs

  Using homebrew : brew install node

  Using macports : port install nodejs
```
On windows:
```
  just download the exe file from nodejs.org
```
Once installed, package.json is THE file that tells node which node packages it should install through npm. Modify it to your liking and run the command:
```
npm install
```

When all the packages have been installed, Gruntfile.js will tell to node how each of them works, specifying the source (src) and destination (dest) folders

Now, you just have to run the following command to generate the HTML/CSS files from the original JADE/STYLUS files
```
grunt
```

Also, If you use
```
grunt watch
```
every time you save a file, grunt creates the output files automatically

