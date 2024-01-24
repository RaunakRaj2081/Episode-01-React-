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
            <h1>About class component</h1>
            <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
            <h2>This is swiggy website</h2>

        <UserClass name = {"Raunak Raj (class)"}  location={"Dehradun class"}/>
        </div>
        );    
        };
};

export default About;