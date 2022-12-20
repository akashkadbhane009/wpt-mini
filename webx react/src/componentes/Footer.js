import './style.css'
import {Link} from 'react-router-dom';
export function Footer() {
  return (
    <div>
      <footer className="py-2  bg-light fw-bolder fttr footerbr " >
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link className="nav-link px-2 text-muted" to={'/'}>Home</Link></li>
          <li className="nav-item"><Link className="nav-link px-2 text-muted" to={'/About'}>About</Link></li>
          <li className="nav-item"><Link className="nav-link px-2 text-muted" to={'/contactus'}>contact us</Link></li>
          <li className="nav-item"><Link className="nav-link px-2 text-muted" to={'/feedback'}>feedback</Link></li>
        </ul>
        <p className="text-center ">© 2022 web X, inc</p>
      </footer>
    </div>
  )
}