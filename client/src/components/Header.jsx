import { Link, useLocation } from 'react-router-dom';
import "./Header.css";


export default function Header() {
  const currentPage = useLocation().pathname;
    return (
       <>
<div className="headcont">
  <ul className="nav nav-underline">
   <li className="nav-item">
    <Link
     to='/' 
    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
    >Home
    </Link>
  </li>

  <li className="nav-item">
    <Link
     to='search' 
     className={currentPage === '/search' ? 'nav-link active' : 'nav-link'}
     >Search
     </Link>
  </li>

  <li className="nav-item">
    <Link 
     to='login'
     className={currentPage === '/login' ? 'nav-link active' : 'nav-link'}
     >Login
     </Link>
  </li>

  <li className="nav-item">
    <Link
     to='signup'
     className={currentPage === '/signup' ? 'nav-link active' : 'nav-link'}
     >Signup
     </Link>
  </li>

</ul>
 <img src="./mongodb-transparent.png"
      className="logo"
      alt="MongoDb Movie Database Logo" />
</div>
        </>
    )
}