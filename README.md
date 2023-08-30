# Minimal Site Toolkit

A set of tools, styles and templates to create minimal and robust static sites. Includes 11ty, Laravel Mix and Bootstrap. Please note the following documentation assume you are working on the command line of your operating system.

## Prerequisites
The only prerequisite for working with these site starter tools is Node and [git](https://git-scm.com/). I highly recommend using [nvm](https://github.com/nvm-sh/nvm) to manage Node versions.

## Get Started
When convenient, run `git pull` to get upstream code changes. If using the code for the first time, or after a code pull one should run the following:
- Run `nvm use` to use the version of Node specified in the `.nvmrc` file.
- Run `npm install` to install toolkit dependencies.
*TODO: add instruction for config file, main styles file, etc*

When working on a site either by adding content or tweaking templates/styles, the commands `npm run build` and `npm run watch` can be used to build content and assets into the deployable static site `build` directory.
Running `npm run watch` is encouraged if actively adding content/developing which enables one to see live file changes reflected on the locally hosted dev site.

*Note that two build processes are used. Laravel Mix builds the `assets` directory and 11ty builds the `src` directory. If you are only editing content OR editing assets then there are separate build commands listed in the scripts section of `package.json`. Those commands produce cleaner output.*

## Customization
Change the values in `config/siteSettings.js` to suite your site. 

## Deployment 
After adding content/tweaking assets, run `npm run build` to build your production site ready for deployment. The contents of the `build` directory can be uploaded to whatever hosting the user desires. See [this 11ty resource](https://www.11ty.dev/docs/deployment/) for some example options.

## TODO
[Dark mode](https://getbootstrap.com/docs/5.3/customize/color-modes/#javascript)
[Icons](https://icons.getbootstrap.com/#usage)
## More Help
[Site building functionality](https://www.11ty.dev/docs/usage/) is powered by 11ty, the [main templating language](https://mozilla.github.io/nunjucks/) is Nunjucks and the [styling foundation](https://getbootstrap.com/docs/5.3/getting-started/introduction/) is Bootstrap.
