


const Greeting = (props) => {
    const{children,text} = props
    return(
        <>
        <h3>Hello, Good morning {children}</h3>
        <h5>{text}</h5>
        </>
    )
}

export default Greeting