# staywokeorg.github.io

## Setup

This site uses the [Grunt](http://gruntjs.com/) task runner for its build system, which you can download via npm. If you don't have npm installed on your workstation, take a look at npm's [Getting Started Guide](https://docs.npmjs.com/getting-started) and follow their steps.

After cloning the repo to your workstation, follow these steps for local setup:

1. Install Grunt globally with `npm install -g grunt-cli`.
2. Navigate to the root directory of the repo.
3. Run `npm install`. This will grab the dev dependencies from `package.json` and install them in a folder called `node_modules` in the project directory.

## Build Steps

Make your style changes to the Less file located at `less/styles.less`. 

When you are ready to build and compile that Less (plus selected Bootstrap Less, which is imported at the top of our custom Less) to production-ready CSS, follow these steps:

1. Navigate to the project directory.
2. Run the default build task `grunt`.
