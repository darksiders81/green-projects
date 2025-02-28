import { NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
function DropdownCMP({ name, obj }) {

    return (
        <>
            <NavDropdown title={name} className="cardCalss border-1 border-light" id="navbarScrollingDropdown">
                {obj.map((link) => (
                    <NavDropdown.Item className="my-2 text-center" href="#action5">
                        <Link to={link.route}>
                            {link.title}
                        </Link>
                    </NavDropdown.Item>
                ))}
            </NavDropdown >
        </>
    )
}
export default DropdownCMP