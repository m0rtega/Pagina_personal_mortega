import React, {Component} from "react";
import HeaderWikia from "./HeaderWikia";
import Article from "./Article";

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false
        }
    }

    render(){
        return(
            <div className="godDiv">
                <HeaderWikia/>
                <div className="articleBackground">
                    <div className="secondBackgroundThatLooksCool">
                        <div className="articleWrapper">
                            <Article/>
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}

export default App;