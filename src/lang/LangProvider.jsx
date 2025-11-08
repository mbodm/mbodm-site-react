import { createContext, useState } from 'react';

const LangContext = createContext();

export function LangProvider({ children }) {
    const translations = {
        en: {
            contactLabel: 'Contact',
            aboutLabel: 'About',
            homeLabel: 'Home',
            footerMessage: 'This site is not using any cookies at all. That\'s why you see no cookie-consent-banner here.',
            contactMessage: 'Just send some mail to ',
            aboutMessage: 'Under construction...'
        },
        de: {
            contactLabel: 'Kontakt',
            aboutLabel: 'Über',
            homeLabel: 'Zurück',
            footerMessage: 'Diese Seite verwendet keinerlei Cookies. Darum wird hier auch kein Cookie-Banner angezeigt.',
            contactMessage: 'Einfach eine E-Mail senden an ',
            aboutMessage: 'In Bearbeitung...'
        }
    };
    const [lang, setLang] = useState('en');
    const changeLang = (code) => {
        if (code !== 'en' && code !== 'de') {
            throw new Error('Given language code is not supported.');
        }
        setLang(code);
    };
    return (
        <LangContext.Provider value={{ entries: translations[lang], change: changeLang }}>
            {children}
        </LangContext.Provider>
    );
}

export { LangContext };
