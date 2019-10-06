# minimum_javascript_on_rails

## :tipping_hand_woman: What appliction is this?

This is a sample of a Ruby on Rails application
  that is set a minimal Node.js-based JavaScript build environment without [webpacker](https://github.com/rails/webpacker).

If you are a Rails programmer who matches the some following criteria,
  you may find this repository configuration attractive compared to webpacker.

- I will not write a lot of JavaScript code.
- Sprockets is sufficient for CSS builds.
- I want to install only the minimum of npm packages as needed.
- I want to manage npm packages individually for reasons such as fixing vulnerabilities immediately.
- I want to release as stable as possible. In return, I can tolerate some inconvenience.
- Anyway, if I have to study the JavaScript, I want to learn from a more basic point than webpacker.


## :wrench: Installation
### Softwares that needs to be locally installed

- [Node.js](https://nodejs.org/) == `10`

### Install this sample application

```
git clone git@github.com:kjirou/minimum_javascript_on_rails.git
bin/setup
```


## :cat: Added functions in client side

- `npm run build`
  - This command performs a stand-alone build. This is mainly used when releasing to production.
  - Also during development, if you run it only once,
    you will not get the "Please execute `npm run build` ..." error.
- `npm run watch`
  - If the `npm run watch` is running with the `rails server`,
    JavaScript source modifications are reflected when you reload the browser.
- `npm run clean`
  - Remove files generated from `npm run build` or `npm run watch`.


## :gear: Customize settings

The truth is that the client side is also complicated.  
For example, just like Rails changes its behavior with additional many settings and gems,
  it requires a lot of configurations to handle many use cases.

When all those settings are merged into this master branch,
  the settings may react organically, which ultimately require very many settings.  
Therefore, in this project,
  the differences for additional customization will be expressed in the form of pull requests.

### Run unit tests with Jest on Node.js

- [See this pull-request](https://github.com/kjirou/minimum_javascript_on_rails/pull/9).

### Change the Babel to TypeScript

### Create a client side development environment

### Build CSS with Node.js

### Prevent the "Please execute `npm run build` command before operating the Rails." error

- [See this pull-request](https://github.com/kjirou/minimum_javascript_on_rails/pull/8).

### Reduce the file size of the built JavaScript

- I'm sorry, I don't know well.
- You should probably search for "webpack chunk" first.
