import es from "../assets/i18n/es.json";
import val from "../assets/i18n/val.json";
import en from "../assets/i18n/en.json";

export function getTranslations(lang: string): any {
    switch (lang) {
        case 'es':
            return es;
        case 'val':
            return val;
        case 'en':
            return en;
        default:
            return es;
    }
}
