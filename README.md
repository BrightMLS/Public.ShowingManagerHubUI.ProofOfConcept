# Public.ShowingManagerHubUI.ProofOfConcept

## Browser Support

- All modern browsers are supported.

## Development notes

### This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) (CRA)

### Prerequisite

- Node >= 8.10.x
- Visual Studio Code editor (recommended) with following extensions
  - ESLint
  - Prettier - Code formatter

### Quick install

Running following script from root of the project:

```bash
npm install
```

### Running your application

- Create `.env` file as mentioned in next section.
- Run `npm start` script.

### .env file

- Duplicate `.env.example` (contains dev env values).
- Rename copy to `.env`.
- Only commit `.env.example` file with **dev env** values.
- Never commit `.env` file.

### Scripts

Run following scripts from root of the project like

- `npm install`: Install all the dependencies
- `npm start`: Runs the app in the development mode
- `npm run lint`: Check for any lint issue
- `npm run lint:fix`: Automatically try to fix as many issues as possible
- `npm test`: Run all test cases and generate code coverage report on the terminal & to the `/coverage` folder
- `npm run test:watch`: Launches the test runner in the interactive watch mode
- `npm run build`: Builds the app for production to the `/build` folder

### Source and distribution path

- `/src`: Contains the source files
- `/public`: Contains index.html, static resources and favicon. index.html file is used to launch the app.
- `/build`: Contains the distribution files

### Entry point and application flow

- `/src/index.tsx` is the entry point of the application, which imports `/src/app.tsx` where routes are defined and application flows based on routes.

### Folder structure

- `/src`: Contains source code of the app
- `/src/components`: Contains sharable components for the app
- `/src/config`: Contains centralized configuration for the app
- `/src/pages`: Contains app pages based on routes defined in `/src/config/routes-config.ts`
  - Page specific components and styles is/are in its folder itself
- `/src/theme`: Contains theme configuration of material-ui
- `/src/utils`: Contains helper methods and constants used by the app

### File naming convention

- All files takes the name of its folder name with some suffix added to it. E.g. for loader component
  - loader/loader.tsx
  - loader/loader-style.ts
  - loader/loader.test.tsx
- This makes development easier. Either the developer scroll the directory, search the file or the file opened in the tab.
- It is recommended not to use `index` name in the file as it makes huge confusion while development.
- You will only find file name with `index` in main folders of `src` like `components`, `config` etc and page's components folder because it contains the named export so that while importing those file, you don't have to write the long path names and you directly deals with importing component or feature. E.g. Check the loader component imported in `/src/pages/login/login.tsx`.

### Debugging app in Visual Studio code editor

- `.vscode/launch.json` file is used to debug the App with `Debugger for chrome Extension` (install it if not there) and Tests with Node.
- Press `F5` to debug App or Tests by choosing `Debug App` or `Debug Tests` option.

### Updating test snapshot

Either update the snapshot by `npm run test:watch` or `npm test -- -u`

### Alternatives to CRA ejecting

[react-app-rewired](https://github.com/timarney/react-app-rewired) package
override create-react-app webpack configs without ejecting. So, from `package.json`, intentionally removed script `"eject": "react-scripts eject"`.
