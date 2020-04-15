import React from 'react';

interface INavigationProps {
}

interface INavigationState {
    show: string
}

export default class Mounting extends React.Component<INavigationProps, INavigationState> {
    constructor ( props: string )
    {
        super( props );
        this.state = {
            show: 'Display this default message'
        }
        console.log( 'Constructor ran.' );
    }
    
     displayMe=(): void =>  {
        this.setState({show: 'This is the new message to display'});     
    }
    
    componentDidMount=(): void => {
        this.displayMe(); 
    }
    

    render ()
    {
        
            return (
                <div>
                    <h2>{this.state.show}</h2>
                    <button onClick= {this.componentDidMount}>clickMe</button>
                </div>
          );
        
    }
}

