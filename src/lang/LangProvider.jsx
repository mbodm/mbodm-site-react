import { createContext, useState } from 'react';
import { translations } from './translations.js';

const LangContext = createContext();

export function LangProvider({ children }) {
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
