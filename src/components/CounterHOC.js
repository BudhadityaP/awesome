import React, { Component } from "react"

const counterHOC = (WrappedComponent, incremetNumber) => {
    class CounterHOC extends Component {
        constructor(props)
        {
            super(props)
            this.state = {
                count : 0
            }
        }

        incrementCounter = () => {
            this.setState(prevState => {
                return { count : prevState.count + incremetNumber}
            })
        }
        render() {
            return <WrappedComponent
            counter={this.state.count} 
            incrementCounter={this.incrementCounter}
            textProp='Budha'
            {...this.props}
            />
        }
    }
    return CounterHOC
}

// const CounterHOC = OriginalComponent => {
//     const [counter,setCounter] = useState(0)
//     return <OriginalComponent
//             counter={counter} 
//             incrementCounter={() => setCounter(counter + 1)}
//             textProp='Budha'
//             />
// }
export default counterHOC