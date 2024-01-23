export default function FirstStep(props) {
    
    return (
        <div className="container">
            <label for="username">User Name</label>
            <input type="name" id="username" placeholder="Enter your name"/>
            <label for="tel">Mobile Phone</label>
            <input type="tel" id="tel" placeholder="+380 -- --- -- --"/>
        </div>
    )
}
