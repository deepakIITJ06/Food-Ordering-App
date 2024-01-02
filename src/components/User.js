const User = (props) => {
    return (
        <div className="user_card">
            <h2>Name : {props.name}</h2>
            <h3>Location : Patna</h3>
            <h4>Contact : @dpk01</h4>
        </div>
    );
};

export default User;