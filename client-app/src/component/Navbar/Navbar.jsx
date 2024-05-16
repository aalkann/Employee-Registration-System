import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return <nav className={styles['nav']}>
        <Link to={'/'} className={styles['site-title']}>Home Page</Link>
        <ul>
            <li><Link to={'/registration'}>Registration</Link></li>
            <li><Link to={'/monitoring'}>Monitor</Link></li>
        </ul>
    </nav>
}