import React, { Component }        from 'react'
import PropTypes                   from 'prop-types'
import Button                      from 'components/Button'

class TextInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            disabled: false,
            name: ''
        }
    }
    onSubmit =() => {
        const { name } = this.state
        alert(name)
        this.setState({
            disabled: true
        })
    }
    onChange= (evt) => {
        this.setState({
            name: evt.currentTarget.value
            
        })
        
        
    }
    
    render() { 
        const { label }   = this.props
        const { disabled, name }  = this.state
        return ( 
        <form onSubmit={this.onSubmit}>
        <div> { label } </div>
            <br />
            <br />
     
            <input disabled={disabled} value={name} onChange={this.onChange} />
            
            <br />
            <br />
            <Button
            color='primary'
            type='submit'
            variant='contained'>
            submit
            </Button>
        </form>
                )
   }
}
    TextInput.Prototype = {
        label: PropTypes.string
    }
    TextInput.defaultProps = {
        label: 'Enter Name'
    }

export default TextInput
 