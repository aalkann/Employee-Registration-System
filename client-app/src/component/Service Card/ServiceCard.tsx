import { Link } from 'react-router-dom'
import styles from './ServiceCard.module.css'

interface ServiceCardProps{
    title: string,
    url: string,
}

export default function ServiceCard({title,url}:ServiceCardProps) {

    return <Link to={url} className={styles['card-container']}>
        <div className={styles['card']}>
            <p className={styles['card-title']}>{title}</p>
        </div>
    </Link>
}
