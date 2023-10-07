import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <Link to={"/"}>Home</Link> 
    <Link to={"/services"}>Services</Link> 
    <Link to={"/album"}>Album</Link> 
    <Link to={"/contact"}>Contact</Link>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <img className="h-24" src="https://i.ibb.co/Jx20NcQ/06-10-2023-19-48-32-REC-removebg-preview.png" alt="" />
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2023 - All right reserved by WM Wedding Management</p>
  </aside>
</footer>
    );
};

export default Footer;