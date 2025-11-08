import { createContext, useState } from 'react';

const LangContext = createContext();

export function LangProvider({ children }) {
    const translations = {
        en: {
            home: 'Home',
            contact: 'Contact',
            about: 'About',
            footer: 'My Footer'
        },
        de: {
            home: 'Zurück',
            contact: 'Kontakt',
            about: 'Über',
            footer: 'Meine Fußzeile'
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
