# Migraine Journal

\_Migraine Journal allows people who suffer migraine crisis to track and identify their triggers and adapt their lives accordingly.

## [https://migraine-journal.netlify.app](https://migraine-journal.netlify.app)

Migraine Journal is a FullStack Web application made by [@inesza](https://github.com/inesza) and [@hugoviolas](https://github.com/hugoviolas) during the [Ironhack Web Development Bootcamp](https://www.ironhack.com/en/web-development) in **just over a week** 🚀

This is just the backend part of the project, you can access the [frontend repo from here](https://github.com/inesza/project-3-front).

**Technologies used**

- Javascript
- HTML
- CSS
- React
- Node
- Express
- Mongoose
- MongoDB

It implements 6 database models, full CRUD operations, sign up/sign in/logout.

## Setup dev environment

### Dependencies

Install the following packages on your local machine:

- npm version 8
- node version 18
- mongodb version 6

### Clone this repo

Clone this repo and `cd` into it.

```sh
git clone <url>
cd <dir_name>
```

### Setup the .env file

This project require some environment variables to run, it reads the file `.env` on startup. An example file is provided `.env.example`.

**Environment variables:**

- `PORT`: Port on which the the website is accessible,
- `MONGO_URI`: URI of the mongo database (i.e. `mongodb://127.0.0.1:27017/migraine-journal`)
- `TOKEN_SECRET`: Secret used to sign the session ID cookie, [see session doc](https://www.npmjs.com/package/express-session#user-content-secret)
- `FRONTEND_URL`: URL used by the frontend server

### Install NodeJS dependencies

```sh
npm install
```

### Seed the database

Default data can be seed in the database with the following command.

```sh
npm run seed
```

### Start the project

```sh
npm run dev
```
