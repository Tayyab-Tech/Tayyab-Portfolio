import { useState, useEffect } from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

function Header(props) {
  // --------- Dark Mode --------
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleModeChange = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  // -------- off canvas show or close-------
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div id="#" className='fixed top-0 z-10 w-screen shadow-2xl'>
        {["md"].map((expand) => (
          <Navbar key={expand} expand={expand} className="pt-2 bg-slate-50 dark:bg-gray-800">
            <Container fluid>
              <Navbar.Brand href="#" className='animate-slideInLeft'>
                <span className="bg-gray-300 dark:bg-cyan-600 dark:text-white text-cyan-600 md:text-3xl sm:text-2xl text-sm font-bold md:pl-2 md:pr-2 md:pt-1 md:pb-1 p-1 mr-1">{props.YourNameLogo}</span>
                <span className='md:text-3xl sm:text-2xl text-sm font-semibold dark:text-white'>{props.YourName}</span>
              </Navbar.Brand>
              <div className='flex justify-center items-center sm:gap-2 animate-slideInRight'>
                <Navbar.Toggle onClick={handleShow} aria-controls={`offcanvasNavbar-expand-${expand}`} className='border-0'>
                  <GiHamburgerMenu className='bg-gray-300 dark:bg-cyan-600 dark:text-white text-cyan-600 md:text-4xl md:p-2 sm:p-1 sm:text-3xl p-1 text-3xl rounded-lg' />
                </Navbar.Toggle>
                <Navbar.Offcanvas
                  show={show}
                  onHide={handleClose}
                  id={`offcanvasNavbar-expand-${expand}`}
                  aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                  placement="start"
                >
                  <Offcanvas.Header className='text-cyan-600 flex justify-end items-end'>
                    <button
                      onClick={handleClose}
                      className='bg-gray-300 dark:bg-cyan-600 dark:text-white text-cyan-600 text-4xl p-1 rounded-lg'
                    >
                      <AiOutlineClose />
                    </button>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="md:justify-content-end md:flex-grow-1 gap-4 pe-3 justify-center items-center">
                      <Nav.Link onClick={handleClose} href='#home'><span className='md:dark:text-white hover:text-cyan-600 hover:underline underline-offset-8 decoration-4 font-medium hover:font-bold text-2xl md:text-sm'>Home</span></Nav.Link>
                      <Nav.Link onClick={handleClose} href="#about"><span className='md:dark:text-white hover:text-cyan-600 hover:underline underline-offset-8 decoration-4 font-medium hover:font-bold text-2xl md:text-sm'>About</span></Nav.Link>
                      <Nav.Link onClick={handleClose} href="#project"><span className='md:dark:text-white hover:text-cyan-600 hover:underline underline-offset-8 decoration-4 font-medium hover:font-bold text-2xl md:text-sm'>Projects</span></Nav.Link>
                      <Nav.Link onClick={handleClose} href="#contact"><span className='md:dark:text-white hover:text-cyan-600 hover:underline underline-offset-8 decoration-4 font-medium hover:font-bold text-2xl md:text-sm'>Contact</span></Nav.Link>
                    </Nav>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
                <div className="pr-2">
                  <button
                    id="mode-btn"
                    className="bg-gray-300 dark:bg-cyan-600 md:p-3 p-2 rounded-lg flex items-center"
                    onClick={handleModeChange}
                  >
                    {theme === "dark" ? (
                      <MdLightMode className=" md:w-8 md:h-8 sm:w-4 sm:h-4 text-white" />
                    ) : (
                      <MdDarkMode className=" md:w-8 md:h-8 sm:w-4 sm:h-4 text-cyan-600" />
                    )}
                  </button>
                </div>
              </div>
            </Container>
          </Navbar>
        ))}
      </div>
    </>
  );
}

export default Header;