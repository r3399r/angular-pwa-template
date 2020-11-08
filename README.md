# yy-angular-ionic-template

This repository is a template for front-end development environment which applies angular and ionic framework.

## Required tools

In this project, we use `nodejs` to manage the code, so please install `node` and `npm` first. Then you may need to run the command below to prepare the required command line tools.

```shell
npm install -g @ionic/cli native-run cordova-res
```

## Run and Test

Before anything, we need to install required packages in `node_modules`

```shell
npm install
```

To run the serve,

```shell
npm run serve
```

To run the unit test,

```sh
npm run test
```

## Branch Protection

After creating new repository, please set the restriction to protect master branch.

### Steps

1. Settings
2. Branches
3. Add branch protection rule
   * put **master** as pattern
   * check **Require pull request reviews before merging**
   * check **Dismiss stale pull request approvals when new commits are pushed**
   * check **Require review from Code Owners**
