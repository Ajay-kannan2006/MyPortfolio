import './Home.css'

export default function Navbar() {
    return (
        <nav id='nav-bar'>
            <h2 class="my-name">Ajay K K</h2>
            <ul className='elements'>

                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}