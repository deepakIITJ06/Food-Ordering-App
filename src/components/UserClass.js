import React from "react";

class UserClass extends React.Component {
    // Whenever class is called a new instance is created
    constructor(props) {
        super(props);

        this.state ={
            userInfo: {
                name: "suraj",
                location: "Maharahstra",
                avatar_url: "https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg"
            }
        }
    }

    async componentDidMount() {
        console.log("API calls are made here");
        const data = await fetch("https://api.github.com/users/deepakIITJ06")
        const json = await data.json();

        console.log(json);

        this.setState({
            userInfo: json,
        });
    }

    componentDidUpdate (){
        console.log("componentDidUpdate got called");
    }

    componentWillUnmount() {
        console.log("when you change the page componentWilUnmount will get called");
    }

    render() {
        return (
            <div className="user_class_card">
                <img src={this.state.userInfo.avatar_url}></img>
                <h2>Name : {this.state.userInfo.name}</h2>
                <h3>Location : {this.state.userInfo.location}</h3>
                <h4>Contact : @dpk01</h4>
            </div>
        )
    }
}

export default UserClass;