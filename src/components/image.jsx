

const CustomImage = (props) => {
    console.log(props)

    const{source,width=100,alternateText,height=100} = props
    return (
        <img src={source} height={height} width={width} alt={alternateText}></img>
    )
}

export default CustomImage