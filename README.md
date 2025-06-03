# NkemdilimjuliePortfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.11.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


When you "deactivate" Angular, you're simply stopping work. There's no special `"deactivation"` like in Python virtual environments.

To get your dependencies back, simply run **npm install** from within the project folder to reinstall everything.


Contact Form Email Sending via EmailJS (No backend needed)
🔧 1.1. Install emailjs-com

npm install emailjs-com

## Angular app for production/deployment and not for development
When your app created for **developemnt** is to be used for **production**:

+ make sure you have **environment.prod.ts** instead of environment.ts inside environment folder.
+ change to production in angular.json with this code:
```
"fileReplacements": [
  {
    "replace": "src/environments/environment.ts",
    "with": "src/environments/environment.prod.ts"
  }
]
```

+ Then, run the production app with:

```
ng build --configuration=production

```
The code swaps in the environment.prod.ts automatically.


## send message component is to be continued later
left for future expansion


![Screenshot](src/assets/images/readme-for-all-projects.png)

