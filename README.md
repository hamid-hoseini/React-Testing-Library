### In Progress...

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://create-react-app.dev/).

## Available Scripts

In the project directory, you can run:

##### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

##### `npm test`

Launches the test runner in the interactive watch mode.\

##### `npm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
This app is ready to be deployed!


### Summary of Query Methods

<img width="616" alt="Screen Shot 2022-11-15 at 7 25 25 PM" src="https://user-images.githubusercontent.com/7660220/202076479-a3048101-dc7a-4f6c-9cf2-9f953ef013cc.png">


## Note

> Render a component including `<Link>` element:

If we are using the `<Link>` element in our component to route to another page, we should not use it outside a `<Router>`. Because the component is wrapped with `<BrowserRouter>`. In the unit test, in order to render the component, we need to wrap the component with `<BrowserRouter>`. Therefore, we need to have a mock component like ```MockTodoFooter``` in below example:

```tsx
import { render, screen } from '@testing-library/react';
import TodoFooter from "../TodoFooter"
import { BrowserRouter } from "react-router-dom"

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
    return (
        <BrowserRouter>
          <TodoFooter 
            numberOfIncompleteTasks={numberOfIncompleteTasks}
          />
        </BrowserRouter>
    )
}

it('should render the correct amount of incomplete tasks', () => {
    render(
        <MockTodoFooter 
          numberOfIncompleteTasks={5}
        />
    );
    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeInTheDocument();
});
```