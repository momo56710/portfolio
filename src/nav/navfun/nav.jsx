import Navbar from '../NavBar';
import { Box } from '@chakra-ui/react';
import './nav.css';
import SideBar from '../SideBar';
export default function Nav() {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    const navbar = document.querySelector('#navbar');
    const sidebar = document.querySelector('#sidebar');
    var currentScrollPos = window.pageYOffset;
    if (window.innerWidth < 800) {
      return 0;
    } else {
      if (prevScrollpos > currentScrollPos) {
        navbar.style.top = '0';
        sidebar.style.left = '0';
      } else {
        navbar.style.top = '-100px';
        sidebar.style.left = '-100px';
      }
      prevScrollpos = currentScrollPos;
    }
  };
  return (
    <>
      <Box id="navbar" zIndex={'10'}>
        <Navbar />
      </Box>
      <Box id="sidebar" zIndex={'100'}>
        <SideBar />
      </Box>
    </>
  );
}
