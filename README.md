<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Dc Test Back Node" />

&#xa0;

  <!-- <a href="https://dctestbacknode.netlify.app">Demo</a> -->
</div>

<h1 align="center">Dc Test Back Node</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/z0mbi19/dc-test-back-node?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/z0mbi19/dc-test-back-node?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/z0mbi19/dc-test-back-node?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/z0mbi19/dc-test-back-node?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/z0mbi19/dc-test-back-node?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/z0mbi19/dc-test-back-node?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/z0mbi19/dc-test-back-node?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center">
	🚧  Dc Test Back Node 🚀 Under construction...  🚧
</h4>

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/z0mbi19" target="_blank">Author</a>
</p>

<br>

## :dart: About

Describe your project

## :sparkles: Features

:heavy_check_mark: Feature 1;\
:heavy_check_mark: Feature 2;\
:heavy_check_mark: Feature 3;

## :rocket: Technologies

The following tools were used in this project:

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Docker](https://www.docker.com/)

## :white_check_mark: Requirements

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting

```bash
# Clone this project
$ git clone https://github.com/z0mbi19/dc-test-back-node

# Access
$ cd dc-test-back-node

# up data base
docker-compose up

# Install dependencies
$ yarn

# Run migration
npx prisma migrate dev

# Run the project
$ yarn start

# The server will initialize in the <http://localhost:4000>

# Get all person in data base <http://localhost:4000/person>

# Create one person in data base <http://localhost:4000/person>
{
  "nome": "the name you want"
  "dtnascimento": "2022-08-19T03:00:00.000Z" # the date of birthday you want
}

# Update one person in data base <http://localhost:4000/person>
{
  "id": 1 #id of a person you want to update
  "nome": "the name you want"
  "dtnascimento": "2022-08-19T03:00:00.000Z" # the date of birthday you want
}

# delete one person in data base <http://localhost:4000//personid/:id>
```

## :memo: License

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.

Made with :heart: by <a href="https://github.com/z0mbi19" target="_blank">Mateus</a>

&#xa0;

<a href="#top">Back to top</a>
