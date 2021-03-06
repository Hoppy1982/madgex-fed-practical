# Front-end dev — practical exercise

We have the design (in sketch file, or png as alternative) & beginnings of a job board project for the fictional brand PxlPro. We’d like you to take up the reins and progress the project as much as you feel is enough to demonstrate your abilities. As a guide we’d allow 2-3 hours for this exercise, we’re not so much concerned with a ‘finished’ project, more a strong indication as to how you’ve tackled what you aimed to achieve.

**Note**: please unzip the file and upload to a git repo (e.g., GitHub/GitLab/Bitbucket etc.) that you can share access to (for us to review).

## What we're looking for

- A faithful representation of the design using HTML, CSS, potentially some client-side JS if you feel the design/UX would benefit. How much of the design you decide to interpret is up to you.

A guide on what we might ask after:

- That you understood the project setup & were able to run with it.
- Websites should be responsive. The static mockup doesn't cover that, did you get creative?
- Adoption/usage of the Nunjucks templating language.
- Your mark-up.
- Any comments on the accessibility of the document.
- Does the design work for you? If not, what constructive feedback would you give?
- Do you foresee any cross-browser issues with your build?

**Note**: This is an exercise only and not a reflection of how we work at Madgex.


Instructions for installing and running the local development server.
Use this server to build the work-in-progress PxlPro website.

## Stack

This is the technology used in this exercise:

- [Node.js](https://nodejs.org) - a JavaScript runtime/server environment, commonly used for APIs, web servers and build tools
- [Hapi.js](https://hapijs.com/) - this is the Node.js web framework we tend to use
- [Nunjucks.js](https://mozilla.github.io/nunjucks/templating.html) - all HTML is generated by the Nunjucks template engine
- [Sass](https://sass-lang.com/) - We use the SCSS (Sassy CSS) flavour of Sass to author our CSS
- [gulp.js](https://gulpjs.com/) - build system to process Sass to CSS and watch for changes
- [browser-sync](https://www.browsersync.io/) - mainly for code injection to aide development speed

While this may seem a long list this is here purely to document, hopefully it's all setup already for you to launch into building your HTML & CSS.

## Prerequisites

You'll need to have [Node v8+](https://nodejs.org/download) installed, and an editor. We recommend [VS Code](https://code.visualstudio.com/).


## Installing the server dependencies

Do this to install the required npm modules needed to run your local [Hapi](https://hapijs.com/) server.

```bash
npm install
```

## Developing / Running the server

```bash
npm run dev
```

This will build the initial SCSS files to CSS, setup a watch, browser-sync and start the [Hapi](https://hapijs.com/) server.

### Assets

You'll need to build out the template and create the CSS.

- Find `templates` in `./server/templates`
- `CSS` is generated from a built-in build script that compiles any created [SCSS](https://sass-lang.com/) files in `./public/scss`
- A single JavaScript file can be found in `./public/js` this is available to use but has no build step.

If you'd like to refactor the project you're welcome to.

### Browser-sync

To help with authoring, the [browser-sync](https://www.browsersync.io/) tool has been integrated to the dev server to provide automatic updates as you change HTML, CSS, images etc.
