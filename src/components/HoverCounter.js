import counterHOC from "./CounterHOC"
const HoverCounter = (props) => {
    const {counter, incrementCounter, name} = props
    return(
        <h2 style={{backgroundColor:'#808080', width:400}}
         onMouseOver={incrementCounter}>
             {name + ' hovered ' + counter + (counter > 1 ? ' times' : ' time')}
             </h2>
    )
}

export default counterHOC(HoverCounter, 1)