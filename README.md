## Welcome to the EMSI GDSC 2023/24 repository, where you can access to all workshops code and stay informed about upcoming challenging contests!


## ⚛ Creating a React App with React Vite and Installing Dependencies

In this documentation, we'll outline the steps to create a React application using React Vite as the build tool. Additionally, we'll install and configure the following dependencies:

- Tailwind CSS
- Flowbite
- React Router DOM
- React Icons

### Step 1: Set Up React with Vite

1. Ensure that you have Node.js installed on your system. You can download it from here: [https://nodejs.org/en/download](https://nodejs.org/en/download)
2. Open your terminal or command prompt
3. Create a new React Vite project by running
    
    ```bash
    npm create vite@latest project-name -- --template react
    ```
    
4. Navigate into your project directiory and install the node modules
    
    ```bash
    cd project-name
    npm install
    ```
    

### Step 2: Install Dependencies

1. Install Tailwind CSS:
    
    ```bash
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
    
    ```
    
    Configure the template paths inside the `tailwind.config.js` file:
    
    ```jsx
    module.exports = {
      content: [
        './src/**/*.{js,jsx,ts,tsx}',
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    
    ```
    
    Set up the Tailwind directives inside the `./src/index.css` file:
    
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
    ```
    
2. Install Flowbite (optional):
    
    ```bash
    npm install flowbite flowbite-react
    
    ```
    
    Require Flowbite as a plugin inside your `tailwind.config.js` file:
    
    ```jsx
    module.exports = {
      plugins: [
        require('flowbite/plugin')
      ]
    }
    
    ```
    
    Additionally, add the Flowbite source paths to apply the classes from the interactive elements in the `tailwind.config.js` file:
    
    ```jsx
    module.exports = {
      content: [
        // ...
        'node_modules/flowbite-react/lib/esm/**/*.js'
      ]
    }
    
    ```
    
3. Install React Router DOM:
    
    ```bash
    npm install react-router-dom
    
    ```
    
4. Install React Icons:
    
    ```bash
    npm install react-icons
    
    ```
    
5. Run the app:
    
    ```bash
    npm run dev
    
    ```
    

If you encounter any challenges or have questions along the way, don't hesitate to reach out.

As for providing links to resources, you can include links to relevant documentation or tutorials for each of the dependencies installed:

- [Tailwind CSS](https://tailwindcss.com/docs/installation)
- [Flowbite](https://flowbite.com/docs/getting-started/react/)
- [React Router DOM](https://reactrouter.com/en/main/start/overview)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Tailwind Cheat Sheet](https://nerdcave.com/tailwind-cheat-sheet)

YouTube channel recommendations:

- [React Router V6.4](https://www.youtube.com/watch?v=oTIJunBa6MA)
- [ReactJS](https://www.youtube.com/watch?v=CgkZ7MvWUAA)
- [React Scrimba Course](https://scrimba.com/learn/learnreact)

---

## 💻 How to clone the repository in my local machine?

1. Open your terminal or command prompt and run the following command
    
    ```bash
    git clone https://github.com/sifeddineEddr/gdsc-react-workshops.git
    ```
    
2. Navigate into the cloned repository and install its dependencies
    
    ```bash
    cd gdsc-react-workshops
    npm install
    ```
    
3. You can now open the project on an IDE (VS Code as an example)
    
    ```bash
    code .
    ```
    
    Or run the project on localhost
    
    ```bash
    npm run dev
    ```