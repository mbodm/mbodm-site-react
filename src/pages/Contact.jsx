import { useLang } from '../lang/useLang.js';
import styles from './Contact.module.css';

export default function Contact() {
    const lang = useLang();
    return (
        <div className={styles.container}>
            <p>
                {lang.entries.contactMessage}
                <a href="mailto:marcel.beck@mbodm.com">marcel.beck@mbodm.com</a>
            </p>
        </div>
    );
}
