 // import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
            
            <div>
          
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
            <h2>This is Foody website</h2>

        <UserClass name = {"Raunak Raj (class)"}  location={"Dehradun class"}/>
        </div>
        );    
        };
};

export default About;