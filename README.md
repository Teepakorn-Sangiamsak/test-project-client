# Client

## Step 1 Install Vite
create folder client
```bash
npm create vite .
npm install
npm run dev
```

## Step 2 Install Tailwind
https://tailwindcss.com/docs/installation/using-vite
```bash
npm install tailwindcss @tailwindcss/vite
```
edit file vite.config.ts
```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(),],
})
```
add this code to index.css
```css
@import "tailwindcss";
```
add test this code.
```jsx
<h1 class="text-3xl font-bold underline">Hello world!</h1>
```

## Step 3 Install React-Router
https://reactrouter.com/start/library/installation

```bash
npm i react-router
```

and edit this code.
```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router'

createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </>
)
```

and then

```jsx
import React from 'react'
import { Route,Routes } from 'react-router'

function AppRoutes() {
    return (
        <>
        <Routes>
            {/* Public */}
            <Route path='/' element={<h1>Home</h1>} />
            <Route path='/about' element={<h1>About</h1>} />
            <Route path='/register' element={<h1>Register</h1>} />

            {/* Private [User] */}  
            <Route path='user' element={<h1>Home User</h1>} /> 

            {/*Private [ADMIN] */}
            <Route path='/dashboard' element={<h1>Dashboard</h1>} />
            <Route path='/manage' element={<Manage />} />
        </Routes>
        </>
    )
}

export default AppRoutes
```


## Step ? Sweetalert2
https://sweetalert2.github.io/
```bash
npm install sweetalert2
```

## Step 4 React-Hook-form
https://www.react-hook-form.com/get-started
```bash
npm install react-hook-form
```

## Step 5 Lucide-React
https://lucide.dev/guide/installation
```bash
npm install lucide-react
```

## Step 6 Validate wiht Zod
```bash
npm install @hookform/resolvers
npm i zod
```