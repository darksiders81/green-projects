import { NavDropdown } from "react-bootstrap";
function DropdownCMP({ name, obj }) {

    return (
        <>
            <NavDropdown title={name} className="cardCalss" id="navbarScrollingDropdown">
                {obj.map((link) => (
                    <NavDropdown.Item className="my-2" href="#action5">
                        {link.title}
                    </NavDropdown.Item>
                ))}
            </NavDropdown >
        </>
    )
}
export default DropdownCMP