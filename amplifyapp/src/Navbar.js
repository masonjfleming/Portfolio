import WVULogo from "./images/WVULogo.jfif";
import VTLogo from "./images/VTLogo.jfif";

function Navbar() {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <span className="me-2">Mason J. Fleming</span>

                    <a
                        href="https://www.wvu.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="me-2"
                    >
                    <img
                        src={WVULogo}
                        alt="WVU Logo"
                        style={{ height: "32px", marginRight: "8px" }}
                        /></a>
                    <a
                        href="https://www.vt.edu/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                    <img
                        src={VTLogo}
                        alt="VT Logo"
                        style={{ height: "32px", marginRight: "10px" }}
                    /></a>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    {/* LEFT SIDE (optional empty or future links) */}
                    <ul className="navbar-nav me-auto"></ul>

                    {/* RIGHT SIDE DROPDOWN */}
                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Helpful Links
                            </a>

                            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">

                                <li>
                                    <a className="dropdown-item" href="https://www.linkedin.com/in/masonjfleming/" target="_blank" rel="noopener noreferrer">
                                        LinkedIn <i className="bi bi-linkedin"></i>
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="https://github.com/masonjfleming" target="_blank" rel="noopener noreferrer">
                                        GitHub <i className="bi bi-github"></i>
                                    </a>
                                </li>

                                <li>
                                    <a className="dropdown-item" href="./MasonJFleming - CV - 41026.pdf" target="_blank" rel="noopener noreferrer">
                                        Curriculum Vitae <i className="bi bi-file-earmark-pdf"></i>
                                    </a>
                                </li>

                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )

}

export default Navbar;
