// Languages of the language picker, in this order: key, code (the language file <code>.js in this folder) and the name shown
// in the picker. The embedding application can reorder or remove languages here, or add its own (with its <code>.js file,
// which registers the texts with QReport.addlanguage). An entry may also give file: 'name.js' instead of code + '.js'.
QReport.setlanguagelist([
    { key: 'english', code: 'en', name: 'English' },
    { key: 'turkish', code: 'tr', name: 'Türkçe' },
    { key: 'german', code: 'de', name: 'Deutsch' },
    { key: 'french', code: 'fr', name: 'Français' },
    { key: 'dutch', code: 'nl', name: 'Nederlands' },
    { key: 'spanish', code: 'es', name: 'Español' },
    { key: 'italian', code: 'it', name: 'Italiano' },
    { key: 'portuguese', code: 'pt', name: 'Português' },
    { key: 'swedish', code: 'sv', name: 'Svenska' },
    { key: 'polish', code: 'pl', name: 'Polski' },
    { key: 'czech', code: 'cs', name: 'Čeština' },
    { key: 'romanian', code: 'ro', name: 'Română' },
    { key: 'greek', code: 'el', name: 'Ελληνικά' },
    { key: 'catalan', code: 'ca', name: 'Català' },
    { key: 'hungarian', code: 'hu', name: 'Magyar' },
    { key: 'russian', code: 'ru', name: 'Русский' },
    { key: 'chinese', code: 'zh', name: '简体中文' },
    { key: 'chinesetraditional', code: 'zh-TW', name: '繁體中文' },
    { key: 'japanese', code: 'ja', name: '日本語' },
    { key: 'korean', code: 'ko', name: '한국어' },
    { key: 'ukrainian', code: 'uk', name: 'Українська' },
    { key: 'vietnamese', code: 'vi', name: 'Tiếng Việt' },
    { key: 'hindi', code: 'hi', name: 'हिन्दी' },
    { key: 'indonesian', code: 'id', name: 'Bahasa Indonesia' }
]);
