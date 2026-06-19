# 💛 Altın Nabız Uygulaması

> Gerçek zamanlı altın portföy takibi, işlem yönetimi ve fiyat alarmları sunan premium bir fintech web uygulaması.

**Öğrenci:** Burakhan Yavuz | **No:** 24010509112

---

## 📌 1. Proje Özeti

### Uygulamanın Amacı

**Altın Nabız**, bireysel yatırımcıların altın varlıklarını tek bir ekrandan kolayca takip edebildiği, alım-satım işlemi girebildiği ve fiyat alarmı oluşturabildiği bir **frontend web uygulamasıdır**.

### Hedef Kullanıcı Kitlesi

- Altın yatırımı yapan bireysel kullanıcılar
- Portföyünü dijital ortamda takip etmek isteyen tasarruf sahipleri
- Mobil/web uyumlu sade bir finans arayüzü arayan kişiler

### Çözmek İstediği Problem

Geleneksel altın takip yöntemleri (kâğıt, Excel, banka uygulamaları) kullanıcıya anlık görselleştirme ve alarm imkânı sunmamaktadır. Bu uygulama;
- Portföy değerini anlık olarak gösterme
- İşlem geçmişini yerel olarak saklama
- Fiyat alarmlarını kalıcı hâle getirme

sorunlarını çözmek için geliştirilmiştir.

---

## 🤖 2. Kullanılan AI Araçları

| Kategori | Kullanılan Araç |
|---|---|
| **UI Tasarımı** | Gemini (Google AI Studio) |
| **Kod Üretimi** | Claude (Anthropic) / Kiro AI |
| **Prototipleme** | Stitch (Google AI Studio) |
| **İçerik & Metin** | ChatGPT (OpenAI) |
| **Test Senaryoları** | Claude / Kiro AI |

---

## 📝 3. Prompt Kütüphanesi

Proje sürecinde kullanılan en başarılı prompt örnekleri aşağıda paylaşılmıştır.

### 3.1 UI Üretim Promptları

```
"Design a premium dark-theme gold portfolio dashboard for a mobile web app.
Use glassmorphism cards, gold (#cdab3c) as primary color, obsidian black
background. Include bottom navigation with 5 tabs: Home, Add Transaction,
Portfolio, Markets, Profile. Style should feel like a cinematic fintech app."
```

```
"Create a price alerts page for a gold tracking app. Include toggle switches
for high/low price alerts that persist via localStorage. Dark theme, gold
accent color, Material Icons."
```

### 3.2 Kod Üretim Promptları

```
"Write a vanilla JavaScript form validation for a gold transaction form.
Fields: goldAmount (number), goldPrice (number), goldType (select: gram/ons/cumhuriyet).
Show inline error messages with ids #amountError and #priceError.
On success show #formFeedback with 'İşleminiz kaydedildi' message.
Save to localStorage."
```

```
"Write Playwright e2e tests for a multi-page HTML app with file:// URLs.
Test 1: navigation between pages via aria-label links.
Test 2: form validation shows errors then saves on valid input.
Test 3: localStorage toggle persists after page reload."
```

### 3.3 Veri Üretim Promptları

```
"Generate realistic mock data for a gold portfolio dashboard:
5 sample transactions (date, type: alış/satış, gram amount, price per gram),
current gold price in TRY, total portfolio value, profit/loss percentage."
```

### 3.4 İçerik Üretim Promptları

```
"Write Turkish UI copy for a gold investment app:
- Navigation labels for: Portföy, İşlem Ekle, Piyasalar, Profil
- Form placeholders for amount and price fields
- Success and error messages for form submission
- Price alert toggle labels"
```

---

## ⚙️ 4. Kurulum ve Çalıştırma

### Gereksinimler

- Node.js (v18+)
- npm

### Adımlar

```bash
# 1. Repoyu klonla
git clone https://github.com/Burakhan61/Alt-n-Nab-z-Uygulamas-
cd Alt-n-Nab-z-Uygulamas-

# 2. Bağımlılıkları yükle
npm install

# 3. Playwright tarayıcılarını yükle
npx playwright install
```

### Uygulamayı Çalıştır

`index.html` dosyasını doğrudan tarayıcıda aç **veya** statik sunucu kullan:

```bash
# Python ile yerel sunucu
python -m http.server 8080
# Tarayıcıda: http://localhost:8080
```

### Testleri Çalıştır

```bash
npm test                 # Headless mod (CI)
npm run test:headed      # Tarayıcı görünür hâlde
npm run test:trace       # Hata ayıklama iz kaydıyla
```

### Uygulama Sayfaları

| Sayfa | Açıklama |
|---|---|
| 🏠 Ana Sayfa (`index.html`) | Portföy paneli, 3D dalga animasyonu |
| ➕ İşlem Ekle | Alım/satım formu, doğrulama, localStorage kayıt |
| 📊 Portföy | Portföy özeti ve grafik görünümü |
| 🔔 Piyasalar | Fiyat alarmları (localStorage ile kalıcı) |
| 👤 Profil | Altın takip gösterge paneli |

---

## 🔭 5. Gelecek Vizyonu

### Geliştirilebilecek AI Özellikleri

- **Yapay zekâ destekli fiyat tahmini:** Geçmiş altın fiyatı verisiyle eğitilmiş bir model (LSTM / Prophet) entegrasyonu ile "yarın altın fiyatı ne olur?" sorusuna olasılıksal yanıt üretilmesi
- **Akıllı portföy optimizasyonu:** Kullanıcının risk profiline göre AI'ın alım/satım önerisi sunması
- **Doğal dil sorgulama:** "Geçen ay ne kadar kazandım?" gibi serbest metin sorgularına yanıt veren LLM entegrasyonu
- **Otomatik haber özeti:** Altın piyasasını etkileyen haberleri AI ile özetleyip alarm bildirimi olarak iletme

### Çözülebilecek Kullanıcı Problemleri

- Birden fazla altın türünü (gram, ons, cumhuriyet, ata, yarım) ayrı ayrı takip edememe
- Yatırım kararlarını veriye dayalı değil sezgisel alma
- Piyasa haberlerini takip etmek için farklı uygulamalar kullanma zorunda kalma

### Ürünün Nasıl Ölçeklenebileceği

- **Backend entegrasyonu:** Node.js / Supabase ile kullanıcı hesapları ve bulut tabanlı veri senkronizasyonu
- **Mobil uygulama:** React Native veya Flutter ile iOS/Android'e taşıma
- **Gerçek zamanlı veri:** WebSocket bağlantısıyla canlı altın kuru akışı
- **Çoklu döviz desteği:** USD, EUR, GBP bazlı portföy görünümü
- **API marketplace:** Diğer fintech uygulamalarının portföy verisine erişebilmesi için açık API

---

## 📸 Ekran Görüntüleri

| Ana Panel | İşlem Ekle |
|---|---|
| ![Ana Panel](screen.png_1/screen.png) | ![İşlem Ekle](screen.png_2/screen.png) |

| Portföy Özeti | Fiyat Alarmları |
|---|---|
| ![Portföy](screen.png_3/screen.png) | ![Alarmlar](screen.png_4/screen.png) |

---

## 📁 Proje Klasör Yapısı

```
Alt-n-Nab-z-Uygulamas-/
├── index.html              # Ana sayfa — Portföy Paneli
├── code.html_1.html        # Altın Takip Paneli
├── code.html_2.html        # İşlem Ekle
├── code.html_3.html        # Portföy Özeti
├── code.html_4.html        # Fiyat Alarmları
├── navigation.spec.ts      # Playwright e2e testleri
├── playwright.config.ts    # Playwright yapılandırması
├── package.json            # npm bağımlılıkları
├── screen.png_1-4/         # Ekran görüntüleri
├── 24010509112.md          # Ödev dokümantasyon dosyası
└── README.md               # Bu dosya
```

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
|---|---|
| HTML5 / CSS3 | Sayfa yapısı ve tasarım |
| Tailwind CSS (CDN) | Yardımcı CSS sınıfları |
| JavaScript (Vanilla) | Form doğrulama, localStorage, etkileşim |
| Google Fonts — Inter | Tipografi |
| Google Material Symbols | İkon seti |
| Playwright `^1.42.0` | Otomatik e2e test altyapısı |
| Node.js / npm | Bağımlılık yönetimi |

---

## 🔗 GitHub Bağlantısı

[https://github.com/Burakhan61/Alt-n-Nab-z-Uygulamas-](https://github.com/Burakhan61/Alt-n-Nab-z-Uygulamas-)

---

## 📚 Kaynakça

- [Playwright Dokümantasyonu](https://playwright.dev/docs/intro)
- [Tailwind CSS Dokümantasyonu](https://tailwindcss.com/docs)
- [MDN — localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
- [MDN — Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- [Google Fonts — Inter](https://fonts.google.com/specimen/Inter)
- [Google Material Symbols](https://fonts.google.com/icons)
- [Google AI Studio — Stitch](https://aistudio.google.com)
