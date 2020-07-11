import React from 'react'

const Greetings = props => {

    let helloWorld = "hello"

    if(props.lang === "pt") {
        helloWorld = "óla"
    } else if (props.lang === "fr"){
        helloWorld = "Bonjour"
    }
    return (
        <h1 className="text-in-border">{helloWorld} {props.children}</h1>
    )
}



export default Greetings