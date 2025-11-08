import { useLang } from '../lang/useLang.js';
import styles from './About.module.css';
import avatar from '../assets/avatar.jpg';

export default function About() {
    const lang = useLang();
    return (
        <div className={styles.container}>
            <img src={avatar} alt="avatar-image" />
            <p>{lang.entries.aboutMessage}</p>
        </div>
    );
}
