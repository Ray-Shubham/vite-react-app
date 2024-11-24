



const MainHeading = (prop) => {
    const{heading} = prop
    return (
        <div>
            <h1>{heading}</h1>
        </div>
    )
}

export default MainHeading


export const SecondaryHeading = (prop) => {
    const{heading} = prop
    return (
        <h2>{heading}</h2>
    )
}