![Screenshot](/Screenshot.png?raw=true "Screenshot")

## Gabru
A nutrition based React app where you can find delicious food to fit your lifestyle. 

## Technology

- **Mongoose** - Mongo database ORM
- **SASS** - CSS preprocessor 
- **Gulp** - Javascript tasks automation
- **WebPack** - Asset pipeline

Note: For a detailed list of the toolsets used in gabru, please refer to [package.json](package.json). 

## Application Structure

Let's take a tour of the app.
```
|
| -- app
|   |-- components        // Components are organised by module names
|   |
|   |-- data               // Json data for the recipes
|   |
|   |-- index.jsx          // Root file for React components
|   
|-- assets                 // Contains all static resources 
|   |-- fonts              // Fonts used in application
|   |-- images             // Images used in application
|   |-- misc               // Misc resources used in application
|   |-- styles             // All SASS stylesheets
|   |   |-- <module_name>  // Styles are organised by module names. 
|   
|-- config                 // Contains all app configurations
|   |-- assets.js          // Assets configuration file
|   
|-- tasks                  // Contains all gulp tasks 
|
|-- gulpfile.js            // Gulp entry file 
|-- index.html             // Application starting point
|-- package.js             // Package configuration file
```

## Running the server locally

 - Install  `node`, `npm`
 - Run these commands

```sh
# Install deps
$ npm install

# > gulp
# 
# [16:48:55] Using gulpfile ~/Batcave/Workspace/ronin/Dev/jolly/gulpfile.js
# [16:48:55] Starting 'fonts'...
# [16:48:56] Starting 'images'...
# [16:48:56] Starting 'misc'...
# [16:48:56] Starting 'styles'...
# [16:48:56] Finished 'styles' after 5.49 ms
# [16:48:56] Starting 'webpack:dev-server'...
# [16:48:56] Starting 'lint'...
# [16:48:56] Starting 'webpack:dev-build'...
# [16:48:56] Finished 'webpack:dev-build' after 9.42 ms
# [16:48:56] Finished 'fonts'...
# [16:48:56] Finished 'misc' after 223 ms
# [16:48:56] [webpack-dev-server] http://localhost:8000/webpack-dev-server/index.html
# [16:48:56] Finished 'lint' after 3.87 s
# [16:48:56] Finished 'images' after 4.83 s
# [16:48:56] Starting 'dev-build'...
# [16:48:56] Finished 'dev-build' after 4.23 μs
# [16:48:56] Starting 'watch'...
# [16:48:56] Finished 'watch' after 19 ms
Hash: a8734ec9bb9545da8ddc
Version: webpack 1.14.0
Time: 9845ms
            Asset     Size  Chunks             Chunk Names
    app.bundle.js   979 kB       0  [emitted]  app
        vendor.js   282 kB       1  [emitted]  vendor
app.bundle.js.map  1.16 MB       0  [emitted]  app
    vendor.js.map   355 kB       1  [emitted]  vendor
webpack: bundle is now VALID.
[22:08:00] [webpack:build-dev] Hash: a8734ec9bb9545da8ddc
Version: webpack 1.14.0
Time: 10362ms
            Asset     Size  Chunks             Chunk Names
    app.bundle.js   979 kB       0  [emitted]  app
        vendor.js   282 kB       1  [emitted]  vendor
app.bundle.js.map  1.16 MB       0  [emitted]  app
    vendor.js.map   355 kB       1  [emitted]  vendor

```
The server should be running at [localhost:8000](https://localhost:8000).


## Contributers

[See the awesome people!](https://github.com/p4suhag/gabru/graphs/contributors)