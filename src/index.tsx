import React from 'react'
import ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

type HeaderType = {
    title: string
    num?: number
}

const Header = (props: HeaderType) => {
    return (
        <h1>
            Hello world, {props.title}
            {props.num}
        </h1>
    )
}

const Content = () => {
    return (
        <React.Fragment>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae culpa aperiam eveniet dolorem dignissimos voluptas
                corporis praesentium repudiandae! Doloribus commodi labore
                alias, omnis repellat hic voluptatibus corporis? Earum, mollitia
                enim.
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Recusandae culpa aperiam eveniet dolorem dignissimos voluptas
                corporis praesentium repudiandae! Doloribus commodi labore
                alias, omnis repellat hic voluptatibus corporis? Earum, mollitia
                enim.
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Header title="App.js" num={10} />
            <Header title="React.js" />
            <Content />
        </>
    )
}

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
