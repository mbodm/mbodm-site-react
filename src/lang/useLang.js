import { useContext } from 'react';
import { LangContext } from './LangProvider.jsx';

export function useLang() {
    return useContext(LangContext);
}
