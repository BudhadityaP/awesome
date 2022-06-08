import Button from "./Button"
import counterHOC from "./CounterHOC"

const ClickCounter = (props) => {
const {counter, incrementCounter, name} = props
    return(
        <Button commonProps={common} color='green' text={name + ' clicked ' + counter + (counter > 1 ? ' times' : ' time')} onClick={incrementCounter}></Button>
    )
}
const common = {
    width:400,
    height:50,
    textAlign:'center',
    textDecoration:'none',
    fontSize:20,
}

export default counterHOC(ClickCounter, 1)