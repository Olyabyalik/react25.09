import { title } from 'process'
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const App = () => {
    return (
        <div>
            <h1>Hello title</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis harum odio numquam at pariatur, similique asperiores
                dolor error, aliquid nulla recusandae, ullam id magnam! Unde
                repellat magni suscipit obcaecati molestias!
            </p>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Officiis harum odio numquam at pariatur, similique asperiores
                dolor error, aliquid nulla recusandae, ullam id magnam! Unde
                repellat magni suscipit obcaecati molestias!
            </p>
        </div>
    )
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
