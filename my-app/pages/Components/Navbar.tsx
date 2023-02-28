import Link from 'next/link';
import Image from 'next/image';
import logo from '../../Images/logo.png';

export default function Navbar() {
  return (
    <div className='navbar-container'>
        <div className='navbar-links'>
            <div className='navbar-links-left'>
                <Link style={{ textDecoration: "none", color: "white" }} href="/"><Image id='logo-image' src={logo} alt=''/></Link>
            </div>
            <div className='navbar-links-right'>
                <button> <Link style={{ textDecoration: "none", color: "black"}} href="/Components/Current">TOP 2023</Link> </button>
                <button> <Link style={{ textDecoration: "none", color: "black"}} href="/Components/Previous">Previous projects</Link> </button>
                <button> <Link style={{ textDecoration: "none", color: "black"}} href="/Components/About">About</Link> </button>
                <button> <Link style={{ textDecoration: "none", color: "black"}} href="/Components/Contact">Contact</Link> </button>
            </div>
        </div>
    </div>
  )
}
