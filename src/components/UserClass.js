import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);

    this.state = {
        UserInfo : {
            name : "Dummy",
            location : "Default",
        },
    };
};

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/RaunakRaj2081");
        const json = await data.json();

        this.setState({
            UserInfo : json,
        });
        console.log(json);
    }

    componentDidUpdate() {
        console.log("component Did update");
    }

    componentWillUnmount() {
        console.log("component will update called");
    }

    render() {

        const {name , location , avatar_url } = this.state.UserInfo;

        return (
            <div className="User-Card">
                <img src= {avatar_url} />
                <h2>Name : {name}</h2>
                <h4>Contact : raunakraj.2082@gmail.com</h4>
            </div>
        );
    };
};

export default UserClass;


/****
 *
 * --- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy >
 * Component Did MOunt
 *      <API Call>
 *      <this.setState> -> State variable is updated
 *
 * ---- UPDATE
 *
 *      render(APi data)
 *      <HTML (new API data>)
 *      ccomponentDid Update
 *
 *
 *
 *
 */