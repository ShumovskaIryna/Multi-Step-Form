export default function ThirdStep(props) {

    return (
        <div className="container">
            <label for="avatar">Profile Photo</label>
            <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" placeholder="Choose photo"/>
        </div>
    )
}
