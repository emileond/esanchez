import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {RouterProvider, createRouter} from '@tanstack/react-router'
import {routeTree} from './routeTree.gen'

const router = createRouter({routeTree})

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <title>Emilio Sanchez - Product Designer</title>
        <RouterProvider router={router}/>
    </StrictMode>,
)
