# express-typescript-mongoose-boilerplate
simple starter for newbies.

My main goal with this project is a simple and easy starter for new learners. I like you to be focused on the correct learning path and not spending hours in choosing the right project structure.

> Full Explanation available on Dev Community Post: [here](https://dev.to/nour_abdou/express-typescript-mongoose-boilerplate-2omp)

## Features
- Beautiful Code as simple as possible.
- Clear Structure inspired by MVC Model.
- Localization implemention.
- Authorization CRUD example.


## Scripts

All script are defined in the package-scripts.js file, but the most important ones are listed here.

### Install 
Install node-ts `npm i -g node-ts` 
Install all dependencies with `npm i`

### Linting
Run code quality analysis using `npm run lint` or `npm run lint:fix` to fix errors.




## Project Structure

```
src\
    |--mvc  
        |--models\              # Mongoose models (data layer)
        |--routes\              # Views routes
        |--controllers\         # Route controllers (controller layer)
        |--middlewares\         # Custom express middlewares
    |--helpers\             # Utility functions
    |--app.js               # Express app
    |--init\                # Init Express app
        |--locales\             # translation maps
        |--db.ts                # Init DB Connection
        |--localize.ts          # Init localization
        |--routes.ts            # Init Routes
        |--thApp.ts             # Express app
|--index.ts             # App entry point
```
