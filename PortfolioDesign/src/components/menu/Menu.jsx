import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={"menu " + (menuOpen && "active")}>
            <ul>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <hr />
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">contact</a>
                </li>
                <hr />
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li>
                <hr />
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#testi">Testimonials</a>
                </li>
                <hr />
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#work">Work</a>
                </li>
                <hr />
            </ul>
        </div>
    )
}
