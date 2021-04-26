import fr from './data/translations/fr.json';
import en from './data/translations/en.json';

export const importImage = (name) => {
    // try {
    //     return require(`./assets/${name}.png`);
    // } catch (ex) {
    //     return require('./assets/default.png');
    // }
}

export const readJsonData = (name, model, t) => {
    let key = `experience.0.title`;
    let item = {
        title: t(`${key}.title`),
        description: t(`${key}.description`),
        place: t(`${key}.place`),
        start_year: t(`${key}.start_year`),
        end_year: t(`${key}.end_year`)
    };
    return item;
}

export function getLanguage(language, keys, model) {
    const lang = (language === 'en') ? en : fr;
    let splittedKeys = keys.split('.');
    let json = lang;
    json = splittedKeys.reduce((a,b) => {
        if (a[b]) {
            return a[b];
        } else {
            return a;
        }
    }, lang);
    const convertToJsonToModel = (json, model) => {
        for (let prop in model) {
            if (json[prop]) {
                model[prop] = json[prop];
            }
        }
        return model;
    }
    if (json.length) {
        return json.map(value => convertToJsonToModel(value, {...model}));
    } else {
        return convertToJsonToModel(json, {...model});
    }
}