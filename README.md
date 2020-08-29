This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn run dev`
This will basically run the simple BE server and FE at the same time.

Major Libraries considered: 
1. Axios
  -Makes ease of use for ajax calls.
2. Styled-components
  -Makes FE components more reusable and scalable making them more like blocks
3. Material-UI
  -Used Primarily for icons and media card.

App Structure:
  AppContext
     -APP
  AppContext

Use the context api to take of app state management.
All other local state management that the "APP" does not need to know should be housed within the component itself.

Important pieces:
1. useDataApi 
  -re-usable ajax call hook (scalable solution for future ajax calls)


