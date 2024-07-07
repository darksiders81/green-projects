import { Container } from "react-bootstrap"
import NavBars from "../NavBar/NavBars"
import Head from "./Head"

function Header() {
    return (
        <>
            <Container>
                <NavBars />
                <Head />
            </Container>

        </>
    )
}
export default Header