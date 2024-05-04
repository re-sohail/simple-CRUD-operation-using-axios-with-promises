
## Data Component

This component fetches data from an external API using Axios, performs various HTTP requests (GET, POST, PUT, DELETE) to demonstrate CRUD operations, and renders the retrieved data.

### Dependencies
- React
- Axios

### Usage
1. Import the component:
   ```jsx
   import Data from './Data';
   ```

2. Use the component in your application:
   ```jsx
   <Data />
   ```

### Description
- The `Data` component fetches data from the [ReqRes.in](https://reqres.in/) API endpoint (`https://reqres.in/api/users?page=2`) using the `axios.get` method.

- Upon successful data retrieval, it updates the component's state using the `useState` hook.

- The component also demonstrates HTTP POST, PUT, and DELETE requests using the `axios.post`, `axios.put`, and `axios.delete` methods, respectively.

- Each data item fetched from the API is rendered as a child component (`Item`) with props passed down for rendering user details (avatar, name, email).

### Component Structure
- `Data.jsx`: Main component responsible for data fetching and rendering.
- `Item.jsx`: Child component responsible for rendering individual user details.

### Installation
1. Install React and Axios if you haven't already:
   ```bash
   npm install react axios
   ```

2. Copy `Data.jsx` and `Item.jsx` to your project directory.

3. Import and use the `Data` component in your application.

### Example
```jsx
import React from 'react';
import Data from './Data';

function App() {
  return (
    <div className="App">
      <Data />
    </div>
  );
}

export default App;
```

### Note
- Ensure that your application has access to the internet to fetch data from the API.
- This example is for demonstration purposes. Modify the component and API endpoints according to your application requirements.
