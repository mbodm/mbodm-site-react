import styles from './Home.module.css';
import banner from '../assets/mbodm.png';

export default function Home() {
    return (
        <div className={styles.container}>
            <img src={banner} alt="mbodm-image" />
        </div>
    );
}
