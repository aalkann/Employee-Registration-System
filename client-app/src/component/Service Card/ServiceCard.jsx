import { Link } from 'react-router-dom'
import styles from './ServiceCard.module.css'
import propTypes from 'prop-types'

export default function ServiceCard({title,url}) {

    return <Link to={url} className={styles['card-container']}>
        <div className={styles['card']}>
            <p className={styles['card-title']}>{title}</p>
        </div>
    </Link>
}

ServiceCard.propTypes = {
    title: propTypes.string,
    url: propTypes.string,
}
