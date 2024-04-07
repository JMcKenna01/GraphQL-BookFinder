import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import UserProfile from './components/UserProfile';

// Define the routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, // Serves as the layout
    children: [
      { index: true, element: <SearchBooks /> }, // "/" route
      { path: "saved", element: <SavedBooks /> }, // "/saved" route
      { path: "login", element: <LoginForm /> }, // "/login" route
      { path: "signup", element: <SignupForm /> }, // "/signup" route
      { path: "profile", element: <UserProfile /> }, // "/profile" route
      // Add other routes as needed
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
