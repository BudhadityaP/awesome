import Button from '@material-ui/core/Button';

const button = ({color, text, onClick, textColor, commonProps, isDisabled}) => {
    return <Button 
    variant='contained' 
    style={{backgroundColor:color, color:textColor, ...commonProps}} 
    disabled={isDisabled} 
    onClick={onClick}>{text}</Button>
}


export default button