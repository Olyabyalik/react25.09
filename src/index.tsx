import { title } from 'process'
import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const Content = () => {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <header />
            <Content />
        </>
    )
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
