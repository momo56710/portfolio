import Navbar from '../NavBar';
import { Box } from '@chakra-ui/react';
import './nav.css';
import SideBar from '../SideBar';
export default function Nav() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const navbar = document.querySelector('#navbar');
    const sidebar = document.querySelector('#sidebar')
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = '0';
      sidebar.style.left = '0';
    } else {
      navbar.style.top = '-100px';
      sidebar.style.left = '-100px';
    }
    prevScrollpos = currentScrollPos;
  };
  return (
    <>
      <Box id="navbar">
        <Navbar />
      </Box>
      <Box id="sidebar">
        <SideBar/>
      </Box>
    </>
  );
}
