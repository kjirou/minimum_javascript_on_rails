# minimum_javascript_on_rails

- [README (English)](/README.md)
- [README (日本語)](/README.ja.md)

## :tipping_hand_woman: What application is this?

This is a sample of a Ruby on Rails application
  that is set a minimal Node.js-based JavaScript build environment without [webpacker](https://github.com/rails/webpacker).

If your Rails application meets some of the following conditions,
  using this repository configuration may be more maintainable.

- Does not contain much JavaScript code.
- [sprockets-rails](https://github.com/rails/sprockets-rails) is enough for the style-sheet build environment.
- Does not install unused npm packages.
- Manages npm packages as individually as possible so that the required packages can be updated immediately.
- Developers want to learn more basic JavaScript knowledge than webpacker.


## :wrench: Installation
### Softwares that needs to be locally installed

- [Ruby](https://www.ruby-lang.org/) == `2.6`
- [Node.js](https://nodejs.org/) == `10`

### Install this sample application

```
git clone git@github.com:kjirou/minimum_javascript_on_rails.git
bin/setup
```


## :cat: Functions added to the client side

- `npm run build`
  - This command is for a stand-alone build. Mainly we use it for production release.
- `npm run watch`
  - If the `npm run watch` is running with the `rails server`,
    JavaScript source changes are applied when you reload the browser.
- `npm run clean`
  - Clean up files generated from `npm run build` or `npm run watch`.


## :gear: Customize settings
### Run unit tests with Jest on Node.js

- [See this pull-request](https://github.com/kjirou/minimum_javascript_on_rails/pull/9).

### Change the Babel to the TypeScript

- [See this pull-request](https://github.com/kjirou/minimum_javascript_on_rails/pull/10).

### Create a client side development environment

- (Write later?)

### Build CSS with Node.js

- (Write later?)

### Use [Stimulus](https://github.com/stimulusjs/stimulus)

- (Write later?)

### Prevent the "Please execute `npm run build` command before operating the Rails." error

- [See this pull-request](https://github.com/kjirou/minimum_javascript_on_rails/pull/8).

### Reduce the file size of the built JavaScript

- I'm sorry, I don't know well.
- You should probably search for "webpack chunk" first.
