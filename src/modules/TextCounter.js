import React from 'react';


class TextCounter extends React.Component{
    static defaulProps = {
        lable:''
    }
 
    
    
    state = {
        totalChars:0
    }
 
    countCharacters(event){
        var element = event.target;
        var text = element.value;
        this.setState({totalChars:text.length});
    }



    render(){
        return(
            <div>
    
                <textarea onChange={this.countCharacters.bind(this)}/>
                <div>
                    <span>{this.props.lable}:{this.state.totalChars}</span>
                </div>
            </div>
        )

    }




}


export default TextCounter