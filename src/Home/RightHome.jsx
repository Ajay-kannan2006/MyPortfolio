import './Home.css'
import profileImg from '../assets/Profile.jpg';
export default function RightHome() {
    return (
        <div id="right-home">
            <div class="profile-picture">
                <img src={profileImg} alt="Your Picture" />
            </div>
        </div>
    );
}
