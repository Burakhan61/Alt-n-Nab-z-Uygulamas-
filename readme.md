# 💛 Altın Nabız Uygulaması

> Gerçek zamanlı altın portföy takibi, işlem yönetimi ve fiyat alarmları sunan premium bir fintech web uygulaması.

---

## 👤 Öğrenci Bilgileri

| Alan | Bilgi |
|---|---|
| **Ad Soyad** | Burakhan Yavuz |
| **Öğrenci No** | 24010509112 |

---

## 📌 Proje Hakkında

**Altın Nabız**, kullanıcıların altın varlıklarını kolayca takip edebildiği, alım-satım işlemi ekleyebildiği ve fiyat alarmı ayarlayabildiği bir **frontend web uygulamasıdır**.

Sinematik bir fintech tasarım anlayışıyla hazırlanmış olup karanlık tema (dark mode), 3D dalga simülasyonu, glassmorphism arayüz bileşenleri ve yerel veri kalıcılığı (localStorage) içermektedir. Playwright ile yazılmış otomatik uçtan uca (e2e) testler de projeye dahildir.

---

## 🛠️ Kullanılan Teknolojiler

| Teknoloji | Kullanım Amacı |
|---|---|
| HTML5 | Sayfa yapısı |
| CSS3 (custom properties, glassmorphism) | Arayüz tasarımı |
| Tailwind CSS (CDN) | Yardımcı CSS sınıfları |
| JavaScript (Vanilla) | Form doğrulama, localStorage, etkileşim |
| Google Fonts — Inter | Tipografi |
| Google Material Symbols | İkon seti |
| Playwright `^1.42.0` | Otomatik e2e test altyapısı |
| Node.js / npm | Bağımlılık yönetimi |

---

## 📁 Proje Klasör Yapısı

```
Alt-n-Nab-z-Uygulamas-/
│
├── index.html              # Ana giriş sayfası — Altın Portföy Paneli
├── kod.html_1.html         # Altın Takip Paneli
├── kod.html_2.html         # İşlem Ekle sayfası
├── kod.html_3.html         # Portföy Özeti sayfası
├── kod.html_4.html         # Fiyat Alarmları sayfası
│
├── navigasyon.spec.ts      # Playwright e2e test dosyası
├── oyun yazarı.config.ts   # Playwright yapılandırması
├── paket.json              # npm bağımlılıkları ve scriptler
│
├── screen.png_1/
│   └── screen.png          # Ana panel ekran görüntüsü
├── screen.png_2/
│   └── screen.png          # İşlem Ekle ekran görüntüsü
├── screen.png_3/
│   └── screen.png          # Portföy Özeti ekran görüntüsü
├── screen.png_4/
│   └── screen.png          # Fiyat Alarmları ekran görüntüsü
│
├── 24010509112.md          # Ödev dokümantasyon dosyası
└── README.md               # Bu dosya
```

---

## ⚙️ Kurulum Adımları

```bash
# 1. Repoyu klonla
git clone https://github.com/Burakhan61/Alt-n-Nab-z-Uygulamas-
cd Alt-n-Nab-z-Uygulamas-

# 2. Bağımlılıkları yükle
npm install

# 3. Playwright tarayıcılarını yükle
npx playwright install
```

---

## 🚀 Çalıştırma & Kullanım

### Uygulamayı Aç

`index.html` dosyasını doğrudan tarayıcıda aç **veya** bir statik sunucu kullan:

```bash
# Python ile
python -m http.server 8080
# Tarayıcıda: http://localhost:8080
```

### Sayfalar

| Sayfa | Açıklama |
|---|---|
| 🏠 Ana Sayfa | Portföy paneli, 3D dalga simülasyonu |
| ➕ İşlem Ekle | Altın alım/satım formu (doğrulama + kaydetme) |
| 📊 Portföy | Portföy özeti ve grafik görünümü |
| 🔔 Piyasalar | Fiyat alarmları (localStorage ile kalıcı) |
| 👤 Profil | Altın takip gösterge paneli |

### Testleri Çalıştır

```bash
npm test              # Headless mod
npm run test:headed   # Tarayıcı görünür hâlde
npm run test:trace    # İz kaydıyla
```

**Test kapsamı:**
- ✅ Sayfalar arası navigasyonun doğru çalışması
- ✅ İşlem formunun doğrulama mesajlarını göstermesi
- ✅ Fiyat alarmı toggle'larının yeniden yüklemede kalıcı kalması

---

## 📸 Ekran Görüntüleri

| Ana Panel | İşlem Ekle |
|---|---|
| ![Ana Panel](screen.png_1/screen.png) | ![İşlem Ekle](screen.png_2/screen.png) |

| Portföy Özeti | Fiyat Alarmları |
|---|---|
| ![Portföy](screen.png_3/screen.png) | ![Alarmlar](screen.png_4/screen.png) |

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
