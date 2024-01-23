export default function SecondStep(props) {
    
    return (
        <div className="container">
            <label for="email">Email address</label>
            <input type="email" id="email" placeholder="Enter email"/>
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter password"/>
        </div>
    )
}
