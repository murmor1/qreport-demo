# Üçüncü taraf bileşenler

`dist/qreport.js`, `dist/qreport.css` ve `dist/` altındaki resim/font dosyaları aşağıdaki bileşenleri içerir. Her bileşen kendi lisansıyla dağıtılır ve hepsinin lisansı ticari kullanıma izin verir. QReport'un kendi kodu ticari lisanslıdır (bkz. `LICENSE`). Lisans metinleri pakette `dist/licenses/` klasöründedir (MIT bileşenlerinin telif satırları ve MIT metni: `licenses/MIT-components.txt`; bazı bileşenlerin başlığı küçültülmüş pakette silindiği ya da hiç olmadığı için bu dosya gereklidir) (font lisansları `dist/fonts/` altında, fontlarla birlikte). İkili lisanslı bileşenler (MIT veya GPL) **MIT seçeneğiyle** kullanılır.

| Bileşen | Sürüm | Lisans | Kaynak dosya |
|---|---|---|---|
| jQuery | 1.10.2 | MIT | `js/bwip-js/lib/jquery.js` |
| jQuery UI | 1.11.4 | MIT | `js/jquery-ui.js`, `css/jquery-ui.css` |
| jQuery UI Position | 1.10.0 | MIT | `js/jquery.ui.position.js` |
| jQuery UI Layout | 1.4.x | MIT veya GPL (ikili) | `js/jquery.layout-latest.js`, `css/layout-default-latest.css` |
| jQuery contextMenu | 1.6.6 | MIT veya GPL v3 (ikili) | `js/jquery.contextMenu.js`, `css/jquery.contextMenu.css` |
| WebUI Popover | 1.2.17 | MIT | `js/jquery.webui-popover.min.js` |
| jQuery Hotkeys | 0.2.0 | MIT veya GPL v2 (ikili) | `js/jquery.hotkeys.js` |
| Moment.js | — | MIT | `js/moment-with-locales.js` |
| Numeral.js | 2.0.6 | MIT | `js/numeral/` |
| colors.js / jqColorPicker (tinyColorPicker) | colors.js: 1.1.1 ile aynı | MIT, © 2016 Peter Dematté (PitPik). Doğrulandı (2026-11-22): `colors.js` github.com/PitPik/tinyColorPicker deposundakiyle birebir aynı, depo MIT lisanslı; `jqColorPicker.js` aynı depodan, farklı bir sürüm | `js/colors.js`, `js/jqColorPicker.js` |
| jQuery UI temaları | 1.11.4 | MIT (jQuery UI ile aynı) | `css/themes/` (22 tema, code.jquery.com'dan alındı); pakette `dist/themes/` |
| bwip-js / BWIPP | 1.7.0 | MIT | `js/bwip-js/` (`LICENSE`, `LICENSE.BWIPP`); pakette `dist/qreport-barcode.js` |
| pdfmake | 0.2.10 | MIT | `js/pdfmake/` (`LICENSE`); pakette `dist/qreport-pdf.js` |
| Roboto fontu (pdfmake'in `vfs_fonts.js` dosyasında) | — | Apache 2.0 | `js/pdfmake/vfs_fonts.js`; pakette `dist/qreport-pdf.js` |
| Liberation fontları (Sans, Serif, Mono) | 2.1.5 | SIL OFL 1.1 | `fonts/liberation/` (`LICENSE`, `AUTHORS`); pakette `dist/fonts/liberation/` |
| Noto Sans SC / TC / JP / KR (Regular, Bold; SubsetOTF) | noto-cjk (main; Bold ve TC 2026-11-23'te alındı) | SIL OFL 1.1 | `fonts/noto/` (`LICENSE-CJK.txt`); pakette `dist/fonts/noto/` |
| Noto Sans Devanagari (Regular, Bold) | notofonts | SIL OFL 1.1 | `fonts/noto/` (`LICENSE-Devanagari.txt`); pakette `dist/fonts/noto/` |
| Barkod fontları (OCR-A, OCR-B, Inconsolata) | — | OCR-A / OCR-B: Matthew Skala (Richard B. Wales, Tor Lillqvist ve Norbert Schwarz'ın çalışmalarından); yazarın sayfasına göre ticari uygulamalar dahil serbestçe kullanılabilir (Skala'nın katkıları kamu malı). Inconsolata: SIL OFL 1.1. Doğrulandı (2026-11-22) | `dist/fonts/` |
| Lucide simgeleri (61 simgenin çizim verisi; `database` simgesinden türetilen `dataadd` / `dataremove` ile birlikte) | main (2026-11-23) | ISC, © Lucide Icons and Contributors, https://lucide.dev. Feather'dan gelen bir kısmı (ör. `check`, `x`, `hash`, `type`) MIT, © Cole Bemis. İkisi de değiştirme ve ticari kullanıma izin verir; lisans metni korunur | `js/report.designer.js` (`QReport.icons`); lisans `licenses/Lucide-LICENSE.txt`, pakette `dist/licenses/` |
| Resim yok görseli ve şablon simgeleri (`img/noimage.svg`, `img/template_*.svg`) | — | QReport'un kendi çizimi (2026-11-22) | `img/` |

## Dikkat edilmesi gerekenler

- **xml2json (LGPL 2.1)** kaldırıldı: XML artık tasarımcının kendi `parsexml()` fonksiyonuyla (tarayıcının `DOMParser`'ı üzerinde) okunuyor; çıktı biçimi aynı kaldı.
- **LINQ_JS** kaldırıldı: kaynağı ve lisansı belirsizdi, `Array.prototype`'a metot ekliyordu. Yerine tasarımcının kendi dizi yardımcıları (`QReport.arrays`) var.
- FileSaver.js ve canvas-toBlob.js (bwip-js demosundan) tasarımcıda kullanılmadığı için artık pakette değil.
- **Simgeler**: Arayüz simgeleri 2026-11-23'ten beri Lucide'den (pakete gömülü, `QReport.icons`). Silk simge seti (CC BY 2.5, atıf zorunlu) aynı gün projeden ve paketten tamamen çıkarıldı; atıf artık gerekmiyor. `css/images/` altında yalnızca jQuery UI'nin tema resimleri (`ui-*`, MIT) kaldı.
- **Fontlar**: SIL OFL fontları ürünle birlikte dağıtılabilir ama tek başına satılamaz; ürün fiyatı fontlar için alınmaz.
