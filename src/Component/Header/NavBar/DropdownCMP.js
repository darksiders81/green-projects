import { NavDropdown } from "react-bootstrap";
function DropdownCMP({name , obj}) {
    
    return (
        <>
            <NavDropdown title={name} className="hover-time" id="navbarScrollingDropdown">
                {obj.map((link) => (
                    <NavDropdown.Item className="my-2 hover-time" href="#action5">
                        {link.title}
                    </NavDropdown.Item>
                ))}
            </NavDropdown >
        </>
    )
}
export default DropdownCMP