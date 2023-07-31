# Minimal Site Toolkit

A set of tools, styles and templates to create minimal static sites. Includes 11ty and Bootstrap. Please note the following documentation assume you are working on the command line of your operating system.

## Prerequisites
The only prerequisite for working with these site starter tools is Node and [git](https://git-scm.com/). I highly recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node versions.

## Get Started
When convenient, run `git pull` to get upstream code changes. If using the code for the first time, or after a code pull one should run the following:
- Run `nvm use` to use the version of Node specified in the `.nvmrc` file.
- Run `npm install` to install toolkit dependencies.
*TODO: add instruction for config file, main styles file, etc*

When working on a site either by adding content or tweaking templates/styles, the commands `npm run build` and `npm run watch` can be used to build content and assets into a deployable static site directory (*Name TBD*).
Running `npm run watch` is encouraged if actively adding content/developing which enables one to see live file changes reflected on the locally hosted dev site.

## Deployment 
After adding content and running the build command listed above, the resulting directory (*Name TBD*) can be uploaded to whatever hosting the user desires. See [this 11ty resource](https://www.11ty.dev/docs/deployment/) for some example options.

## More Help
[Site building functionality](https://www.11ty.dev/docs/usage/) is powered by 11ty, the [main templating language](https://mozilla.github.io/nunjucks/) is Nunjucks and the [styling foundation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) is Bootstrap.
