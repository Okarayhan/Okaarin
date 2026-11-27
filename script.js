/* =========================================================================
   KONFIGURASI KONTEN — SILAKAN UBAH BAGIAN INI SESUAI KEBUTUHAN ANDA
   ========================================================================= */

/**
 * 1. HASH PIN (SHA-256)
 *    Jangan tulis PIN asli sebagai teks biasa di sini.
 *    Nilai di bawah ini adalah SHA-256 untuk PIN "221026".
 *    Lihat panduan di jawaban atau README untuk cara membuat hash PIN baru.
 */
const PIN_HASH_SHA256 =
  "122d723ab84185f56c4980f73111cfb7c9f4dd9563c7b1bd003663a8800d10e2";

/**
 * 2. TEKS HALAMAN PEMBUKA, AMPLOP, SURAT, DAN GALERI
 *    Ubah judul, sub judul, pesan error lembut, serta isi surat di sini.
 */
const CONFIG = {
  tabTitle: "Untukmu Tugekku 🤍",

  intro: {
    subtitle: "Kenangan Kecil Kita",
    title: "Untuk Kamu, Seseorang yang Paling Kusayang",
    text: "Ada banyak hal kecil yang rasanya ga cukup kalau hanya kusampaikan lewat pesan singkat. Jadi web ini aku buat khusus untukmu sayang.",
    pinPrompt: "Masukkan 6 digit tanggal spesial kita",
    pinWrongMessage: "Hmm, coba inget tanggal spesial kita sayang 🤍",
  },

  envelope: {
    pretitle: "Sebuah surat kecil dariku",
    hint: "Ketuk untuk membuka",
  },

  letter: {
    date: "22 Oktober 2026",
    greeting: "Untukmu, Tugekku,",
    // GANTI: Isi surat Anda (setiap item array = 1 paragraf)
    paragraphs: [
      "Hai ibu dari anak-anakku. Bagaimana kabarmu hari ini? terimakasih sudah menyempatkan waktu untuk membaca surat ini. Ingat tidak momen-momen awal yang sederhana sangat bermakna? iyapp, momen di mana kita masih malu-malu tapi mau, wkwkwkwk.",
      "Ingat ga, momen waktu kamu to the point nanya apa aku suka kamu? pasti kamu berharap aku suka yaaa..... jujur ajaa sayang, hehehe. Jujur di hari itu aku gugup banget kamu nanya begitu dan takut kamu risih, tapi ternyata dari sana hubungan kita jadi makin deket ya sayang.",
      "Disini aku mau say thank you and sorry buat semua hal yang pernah aku lakukan ke kamu. Thank you udah selalu memperlakukan aku sebaik itu, kamu selalu ngertiin aku dan semua hal baik yang kamu lakukan. Di sisi lain, maaf kalau semisal ada perbuatanu yang menyinggung kamu sayang, aku tida bermaksud begitu kok. ",
      "Surat ini mungkin ga jelas, tapi aku cuma mau bilang. Kalo aku itu sayang banget sama kamu Tugek Ari, makasi udah selalu ada buat aku. Terimalah gift kecil dari aku ini, semoga kamu suka yaa.",
      "Dan akhir kata, Astungkara kita selalu kuat menghadapi segala badai yang menerpa kita. I Love u so muchh Tugekkuu, terimakasih banyak atas semuanya, sampai berjumpa di pernikahan kita sayang. EHEHEHE.",
    ],
    signature: "Love u,",
    sender: "Dariku, Wah Okaa",
    buttonText: "Lanjut 💌",
  },

  panel: {
    title: "Apa yang pengen kamu liat?",
    subtitle: "Pilih satu satu hal yang kamu mau",
    comingSoonMessage: "Yang ini masih disiapkan ya 🤍",
  },

  gallery: {
    title: "Gallery kita bersama",
    subtitle: "Momen-momen indah dalam kanvas hidupku",
  },
};

/**
 * 3. DAFTAR MENU PANEL UTAMA
 *    Format: { id, title, desc, icon, active }
 *    Set active: true jika fitur/layar sudah siap dibuka.
 */
const PANEL_MENU = [
  {
    id: "gallery",
    title: "Galeri Kenangan",
    desc: "Momen indah kita bersama",
    icon: "🖼️",
    active: true,
  },
  {
    id: "games",
    title: "Games",
    desc: "Mini games yang bisa kamu mainkan",
    icon: "🎮",
    active: true,
  },
  {
    id: "playlist",
    title: "Cerita Lagu",
    desc: "Lagu-lagu yang selalu mengingatkanku padamu",
    icon: "🎵",
    active: false,
  },
  {
    id: "photobooth",
    title: "Photobooth",
    desc: "Foto berdua, jadi strip kenangan",
    icon: "📸",
    active: true,
  },
];

/**
 * 3. DAFTAR FOTO KENANGAN
 *    Tambahkan file foto Anda ke folder assets/photos/ lalu isi array di bawah.
 *    Format tiap item: { src: "assets/photos/nama-file.jpg", caption: "...", date: "..." }
 */
const PHOTOS = [
  {
    src: "assets/photos/kenangan-01.jpg",
    caption: "First meet kata tugek",
    date: "01 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-02.jpg",
    caption: "Fotbar apollo",
    date: "03 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-03.jpg",
    caption: "Wedding kita, ehhh",
    date: "12 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-04.jpg",
    caption: "First date kita (hatees)",
    date: "19 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-05.jpg",
    caption: "Nempel banget kak, temenan loh",
    date: "19 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-06.jpg",
    caption: "Aku nyamperin kamu",
    date: "20 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-07.jpg",
    caption: "Aku nyamperin kamu lagi, kita mesra-mesraan",
    date: "21 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-08.jpg",
    caption: "Lucu bangett sih",
    date: "21 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-09.jpg",
    caption: "First Mwah ya???",
    date: "21 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-27.jpg",
    caption: "Ett, jadiann tuhhh",
    date: "22 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-10.jpg",
    caption: "Nyosor gitu kak",
    date: "23 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-11.jpg",
    caption: "Lw date sama kamu",
    date: "23 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-12.jpg",
    caption: "Numpang foto aja",
    date: "23 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-13.jpg",
    caption: "Belajar algoritma sama kamu",
    date: "26 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-14.jpg",
    caption: "mesra bangett kita kak",
    date: "29 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-15.jpg",
    caption: "Lucu banget kalian",
    date: "29 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-16.jpg",
    caption: "Jalan-jalan ke Bandong (collection)",
    date: "30 Oktober 2026",
  },
  {
    src: "assets/photos/kenangan-17.jpg",
    caption: "nempel bangett sih",
    date: "01 November 2026",
  },
  {
    src: "assets/photos/kenangan-18.jpg",
    caption: "Podscast bindo bareng mbg guehh",
    date: "01 November 2026",
  },
  {
    src: "assets/photos/kenangan-19.jpg",
    caption: "Peyukkkkkkkk",
    date: "06 November 2026",
  },
  {
    src: "assets/photos/kenangan-20.jpg",
    caption: "Ngedate teruss ya kak",
    date: "06 November 2026",
  },
  {
    src: "assets/photos/kenangan-21.jpg",
    caption: "Ketemu camer tuhh",
    date: "08 November 2026",
  },
  {
    src: "assets/photos/kenangan-22.jpg",
    caption: "LW date lagii dongg",
    date: "08 November 2026",
  },
  {
    src: "assets/photos/kenangan-23.jpg",
    caption: "poto-poto randomm aja, tapi selaluu bareng",
    date: "13 November 2026",
  },
  {
    src: "assets/photos/kenangan-24.jpg",
    caption: "Makrab date, lucuu ",
    date: "22 November 2026",
  },
  {
    src: "assets/photos/kenangan-25.jpg",
    caption: "seperti biasa, nempel terus",
    date: "22 November 2026",
  },
  {
    src: "assets/photos/kenangan-26.jpg",
    caption: "Aduh potbar tuhh",
    date: "22 November 2026",
  },
];

/**
 * 4. DAFTAR MINI GAMES (CAROUSEL GAYA PS3)
 *    Format: { id, judul, deskripsi, ikon, aktif }
 */
const GAMES = [
  {
    id: "tts",
    judul: "Teka-Teki Silang",
    deskripsi: "Seberapa hafal kamu tentang kita?",
    ikon: "✏️",
    aktif: true,
  },
  {
    id: "kuis",
    judul: "Kuis Kita",
    deskripsi: "Seberapa kenal kamu denganku?",
    ikon: "💌",
    aktif: true,
  },
  {
    id: "bola",
    judul: "Mesin Bola Pesan",
    deskripsi: "Putar dan temukan pesan untukmu",
    ikon: "🔮",
    aktif: true,
  },
  {
    id: "tangkap",
    judul: "Tangkap Hati",
    deskripsi: "Bantu dia menangkap semua hati",
    ikon: "💗",
    aktif: true,
  },
];

/**
 * 5. DATA TEKA-TEKI SILANG (TTS)
 *    Spasi dan huruf besar/kecil diabaikan saat mencocokkan.
 */
const TTS_DATA = [
  { no: 1, petunjuk: "Hal yang aku suka", jawaban: "KISS" },
  { no: 2, petunjuk: "Hal yang tidak boleh kamu sebut", jawaban: "PUTUS" },
  {
    no: 3,
    petunjuk: "Bulan saat kita mulai interaksi (tanggal 22)",
    jawaban: "SEPTEMBER",
  },
  { no: 4, petunjuk: "Jajan kesukaanku", jawaban: "PISANG GORENG" },
  { no: 5, petunjuk: "Nama anak laki-laki kita", jawaban: "ARKA" },
  { no: 6, petunjuk: "Nama anak perempuan kita", jawaban: "RIKA" },
  {
    no: 7,
    petunjuk: "Bulan anniversary kita (tanggal 22)",
    jawaban: "OKTOBER",
  },
];

/**
 * 6. TEKS LAYAR KEMENANGAN TTS
 */
const TTS_PUJIAN = {
  judul: "Hebat banget sayaang 🤍",
  pesan:
    "Tauu banget kamuu, sampe nama calon anak kita kamu apal yaaa. macii ya udah jadi orang yang paling mengerti aku. Astungkara kita selalu bersama sayang.",
  tombol1: "Main game lain",
  tombol2: "Kembali ke Panel",
};

/**
 * 7. DATA SOAL KUIS KITA
 *    Pilihan jawaban diacak otomatis setiap soal tampil.
 */
const KUIS_DATA = [
  {
    q: "Aku lahir di mana?",
    opsi: ["Denpasar", "Gianyar", "Negara"],
    benar: 2,
    pesanBenar: "Benar! Kamu memang tahu asal-usulku 🤍",
    pesanSalah: "Hampir! Aku lahir di Negara.",
  },
  {
    q: "Makanan kesukaanku?",
    opsi: ["Mie goreng", "Nasi goreng", "Ayam geprek"],
    benar: 1,
    pesanBenar: "Tepat! Nasi goreng nomor satu 🍳",
    pesanSalah: "Belum tepat, jawabannya nasi goreng.",
  },
  {
    q: "Di mana first date kita?",
    opsi: ["Tukad Kopi", "Pantai Sanur", "Sousbar"],
    benar: 0,
    pesanBenar: "Benar! Hari yang tidak akan kulupa ☕",
    pesanSalah: "Bukan itu, first date kita di Tukad Kopi.",
  },
  {
    q: "Kapan kita jadian?",
    opsi: ["12 Oktober 2026", "22 Oktober 2026", "2 November 2026"],
    benar: 1,
    pesanBenar: "Betul! 22 Oktober 2026 🤍",
    pesanSalah: "Kita jadian tanggal 22 Oktober 2026.",
  },
  {
    q: "Negara yang ingin kita tuju?",
    opsi: ["Jepang", "Swiss", "Korea Selatan"],
    benar: 1,
    pesanBenar: "Benar! Suatu hari kita ke sana 🏔️",
    pesanSalah: "Yang kita impikan adalah Swiss.",
  },
  {
    q: "Tempat melali kesukaan kita?",
    opsi: ["Mall", "Pantai", "Alam-alam"],
    benar: 2,
    pesanBenar: "Betul! Kita memang anak alam 🌿",
    pesanSalah: "Tempat favorit kita alam-alam.",
  },
  {
    q: "Love language utama kita?",
    opsi: ["Words of affirmation", "Quality time", "Physical touch"],
    benar: 1,
    pesanBenar: "Tepat! Waktu bersamamu paling berharga ⏳",
    pesanSalah: "Love language kita quality time.",
  },
  {
    q: "Kapan ulang tahunku?",
    opsi: ["10 November", "10 Desember", "20 Desember"],
    benar: 1,
    pesanBenar: "Benar! Jangan sampai lupa ya 🎂",
    pesanSalah: "Ulang tahunku 10 Desember.",
  },
  {
    q: "Di mana kamu ketemu camermu?",
    opsi: ["Kampus", "Living World", "Rumahku"],
    benar: 1,
    pesanBenar: "Betul! Awal dari banyak foto indah 📷",
    pesanSalah: "Aku ketemu camerku di Living World.",
  },
  {
    q: "Siapa manusia favoritku?",
    opsi: ["Ngurah", "Oka", "I Gusti Agung Ariningsih"],
    benar: 2,
    pesanBenar: "Benar sekali, itu kamu 🤍",
    pesanSalah: "Manusia favoritku adalah I Gusti Agung Ariningsih.",
  },
];

/**
 * 8. REWARD BERTINGKAT KUIS KITA
 *    Dipilih entri pertama yang min-nya <= skor.
 */
const KUIS_REWARD = [
  {
    min: 10,
    judul: "Sempurna! 🏆",
    pesan:
      "Kamu hafal semua tentang aku. Terima kasih sudah selalu memperhatikan hal-hal kecil tentang kita berdua 🤍",
    hadiah: "1 permintaan bebas (selama masih masuk akal)",
  },
  {
    min: 8,
    judul: "Hebat! 💖",
    pesan:
      "Hampir sempurna! Kamu memang orang yang paling mengerti aku dan cerita kita.",
    hadiah: "pelukis sepuasnya",
  },
  {
    min: 5,
    judul: "Lumayan! 🌷",
    pesan:
      "Masih ada beberapa yang terlupa, tapi aku senang banget kamu sudah mencoba.",
    hadiah: "1x jajan bebas pilih (jangan mahal mahal plss)",
  },
  {
    min: 0,
    judul: "Tidak apa-apa 🤍",
    pesan:
      "Masih banyak waktu buat kita saling mengenal lebih jauh dan membuat kenangan baru.",
    hadiah: "cium",
  },
];

/**
 * 9. DATA MESIN BOLA PESAN
 *    Pesan dan warna bola pastel mudah diubah di sini.
 */
const BOLA_PESAN = [
  "Jangan lupa makan",
  "Kalau kamu lelah, aku selalu ada buat kamu sayang",
  "Jangan pernah sungkan sama aku",
  "Kiss aku",
  "Kamu jangan pernah ragu buat cerita sama aku ya",
  "Kamu adalah manusia favoritku selamanya sayang",
  "Kalau kamu capek, peluk dan cium aku sayang",
  "Cowokmu akan selalu sayang sama kamu",
  "I love you so much sayang",
  "Mwahh mwahh mwahh",
];

const BOLA_WARNA = [
  "#E8AEB7",
  "#F4C7B8",
  "#D5C6E8",
  "#BFE0C8",
  "#F3DFC1",
  "#C5DCE8",
  "#E6C0C8",
];

const BOLA_BONUS = {
  judul: "Semua pesan sudah kamu temukan 🤍",
  pesan:
    "Terima kasih sudah membuka semua pesan kecil ini. Kapan pun kamu butuh pelukan, tawa, atau tempat cerita, aku selalu di sini untukmu sayang.",
};

/**
 * 10. TANGKAP HATI — Konfigurasi Sprite & Teks Kemenangan
 */
const TANGKAP_SPRITE = "assets/" + encodeURI("tugek pixel 1.png");
const TANGKAP_FRAME = {
  jumlah: 1,
  lebar: 1086,
  tinggi: 1448,
};
const TANGKAP_PUJIAN = [
  {
    min: 40,
    judul: "Kamu penangkap hati terhebat! 💖",
    pesan:
      "Seluruh hatiku sudah kamu tangkap! Refleksmu luar biasa dan aku selalu bahagia saat melihatmu tersenyum senang sayang.",
  },
  {
    min: 20,
    judul: "Hebat sekali! 💗",
    pesan:
      "Kamu cekatan banget, sama seperti caramu selalu menjaga dan menenangkan hatiku setiap hari sayang.",
  },
  {
    min: 0,
    judul: "Tidak apa-apa 🤍",
    pesan:
      "Hatiku tetap milikmu seutuhnya sayang, berapa pun skor yang kamu dapat hari ini. Tetap semangat ya!",
  },
];

/**
 * 11. PHOTOBOOTH DIGITAL — Konfigurasi jumlah bingkai, keterangan, & warna strip
 */
const PB_JUMLAH = 4;
const PB_KETERANGAN = "Wah Okaa & Tugek";
const PB_WARNA_STRIP = [
  { id: "krem", nama: "Krem", bg: "#fffdf9", text: "#4a383a", muted: "#8c7275", border: "#eadfd9" },
  { id: "rose", nama: "Rose", bg: "#faecef", text: "#5c2e38", muted: "#996570", border: "#eccfd6" },
  { id: "lavender", nama: "Lavender", bg: "#f2eef8", text: "#3d3352", muted: "#7c7094", border: "#ded5ec" },
  { id: "mint", nama: "Mint", bg: "#edf6f1", text: "#2b473b", muted: "#628274", border: "#d2e6db" },
  { id: "hitam", nama: "Hitam", bg: "#241e20", text: "#fdf8f5", muted: "#c9b8bc", border: "#3d3336" },
];

/* =========================================================================
   LOGIKA APLIKASI (UMUMNYA TIDAK PERLU DIUBAH)
   ========================================================================= */
(() => {
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  const SCREENS = {
    pin: { el: document.getElementById("screen-pin") },
    envelope: { el: document.getElementById("screen-envelope") },
    letter: {
      el: document.getElementById("screen-letter"),
      onEnter: () => startLetterReveal(),
    },
    panel: {
      el: document.getElementById("screen-panel"),
      onEnter: () => buildPanelOnce(),
    },
    gallery: {
      el: document.getElementById("screen-gallery"),
      onEnter: () => buildGalleryOnce(),
    },
    games: {
      el: document.getElementById("screen-games"),
      onEnter: () => buildGamesOnce(),
    },
    tts: {
      el: document.getElementById("screen-tts"),
      onEnter: () => buildTtsOnce(),
    },
    kuis: {
      el: document.getElementById("screen-kuis"),
      onEnter: () => enterKuisScreen(),
    },
    bola: {
      el: document.getElementById("screen-bola"),
      onEnter: () => enterBolaScreen(),
    },
    tangkap: {
      el: document.getElementById("screen-tangkap"),
      onEnter: () => enterTangkapScreen(),
    },
    photobooth: {
      el: document.getElementById("screen-photobooth"),
      onEnter: () => enterPhotoboothScreen(),
    },
  };

  let currentScreen = "pin";
  let transitionMidTimer = null;
  let transitionEndTimer = null;
  let letterAnimated = false;
  let panelBuilt = false;
  let galleryBuilt = false;
  let gamesBuilt = false;
  let ttsBuilt = false;
  let panelUnlocked = false;
  let lightboxIndex = 0;
  let userPausedMusic = false;

  // --- Elemen Musik ---
  const bgMusic = document.getElementById("bg-music");
  const musicToggle = document.getElementById("music-toggle");
  let isMusicPlaying = false;

  function updateMusicUI(playing) {
    isMusicPlaying = playing;
    musicToggle.classList.toggle("is-playing", playing);
    musicToggle.setAttribute("aria-pressed", String(playing));
    musicToggle.setAttribute(
      "aria-label",
      playing ? "Jeda musik latar" : "Putar musik latar",
    );
  }

  function detachAutoplayUnlock() {
    document.removeEventListener("click", handleFirstInteraction, true);
    document.removeEventListener("touchend", handleFirstInteraction, true);
    document.removeEventListener("pointerdown", handleFirstInteraction, true);
    document.removeEventListener("touchstart", handleFirstInteraction, true);
    document.removeEventListener("keydown", handleFirstInteraction, true);
  }

  async function tryStartMusic({ force = false } = {}) {
    if (!bgMusic || isMusicPlaying) return;
    if (userPausedMusic && !force) return;
    try {
      bgMusic.volume = 0.45;
      const playPromise = bgMusic.play();
      if (playPromise !== undefined) {
        await playPromise;
      }
      updateMusicUI(true);
      detachAutoplayUnlock();
    } catch (err) {
      updateMusicUI(false);
      // Jika bukan AbortError (browser interrupt sendiri), coba lagi saat interaksi berikutnya
      if (!err || err.name !== "AbortError") {
        document.addEventListener("click", handleFirstInteraction, {
          capture: true,
          passive: true,
        });
      }
    }
  }

  function handleFirstInteraction(event) {
    if (
      event.target &&
      event.target.closest &&
      event.target.closest("#music-toggle")
    ) {
      return; // Biarkan toggleMusic() yang menangani klik tombol musik
    }
    tryStartMusic();
  }

  function initMusicAutoplay() {
    if (!bgMusic) return;

    bgMusic.addEventListener("play", () => {
      updateMusicUI(true);
      detachAutoplayUnlock();
    });
    bgMusic.addEventListener("pause", () => {
      updateMusicUI(false);
    });

    // Jika <audio autoplay> langsung berhasil diputar browser (desktop/Chrome)
    if (!bgMusic.paused) {
      updateMusicUI(true);
      return;
    }

    // Coba autoplay langsung saat halaman dimuat
    tryStartMusic();

    // Fallback: putar otomatis pada interaksi pertama pengguna (Safari iOS / Chrome mobile)
    document.addEventListener("click", handleFirstInteraction, {
      capture: true,
      passive: true,
    });
    document.addEventListener("touchend", handleFirstInteraction, {
      capture: true,
      passive: true,
    });
    document.addEventListener("pointerdown", handleFirstInteraction, {
      capture: true,
      passive: true,
    });
    document.addEventListener("touchstart", handleFirstInteraction, {
      capture: true,
      passive: true,
    });
    document.addEventListener("keydown", handleFirstInteraction, {
      capture: true,
    });
  }

  function toggleMusic() {
    if (!bgMusic) return;
    if (isMusicPlaying) {
      userPausedMusic = true;
      bgMusic.pause();
      updateMusicUI(false);
      detachAutoplayUnlock();
    } else {
      userPausedMusic = false;
      tryStartMusic({ force: true });
    }
  }

  musicToggle.addEventListener("click", toggleMusic);

  // --- Injeksi Teks Konfigurasi ---
  function applyConfigTexts() {
    document.title = CONFIG.tabTitle;
    document.getElementById("intro-subtitle").textContent =
      CONFIG.intro.subtitle;
    document.getElementById("intro-title").textContent = CONFIG.intro.title;
    document.getElementById("intro-text").textContent = CONFIG.intro.text;
    document.getElementById("pin-prompt").textContent = CONFIG.intro.pinPrompt;

    document.querySelector(".envelope-pretitle").textContent =
      CONFIG.envelope.pretitle;
    document.getElementById("envelope-hint").textContent = CONFIG.envelope.hint;

    document.getElementById("letter-date").textContent = CONFIG.letter.date;
    document.getElementById("letter-greeting").textContent =
      CONFIG.letter.greeting;
    document.getElementById("letter-signature").textContent =
      CONFIG.letter.signature;
    document.getElementById("letter-sender").textContent = CONFIG.letter.sender;
    document.getElementById("to-panel-btn-text").textContent =
      CONFIG.letter.buttonText;

    document.getElementById("panel-title").textContent = CONFIG.panel.title;
    document.getElementById("panel-subtitle").textContent =
      CONFIG.panel.subtitle;

    document.getElementById("gallery-title").textContent = CONFIG.gallery.title;
    document.getElementById("gallery-subtitle").textContent =
      CONFIG.gallery.subtitle;
  }

  // --- Hiasan Kelopak / Hati Melayang ---
  function initFloatingPetals() {
    if (prefersReducedMotion) return;
    const container = document.getElementById("floating-petals");
    if (!container) return;

    const count = 9;
    const petalSvg = `<svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor"><path d="M10 17.6l-1.2-1.1C4.5 12.6 2 10.2 2 7.2 2 4.8 3.9 3 6.3 3c1.4 0 2.8.7 3.7 1.8C10.9 3.7 12.3 3 13.7 3 16.1 3 18 4.8 18 7.2c0 3-2.5 5.4-6.8 9.3L10 17.6z"/></svg>`;
    const leafSvg = `<svg viewBox="0 0 20 20" width="13" height="13" fill="currentColor"><path d="M16.5 3.5C11 3.5 5.8 6.5 4 12.5c-.4 1.3-.5 2.7-.3 4 1.3.2 2.7.1 4-.3 6-1.8 9-7 8.8-12.7z"/></svg>`;

    for (let i = 0; i < count; i++) {
      const el = document.createElement("span");
      el.className = "petal";
      el.innerHTML = i % 3 === 0 ? petalSvg : leafSvg;
      el.style.left = `${8 + ((i * 11) % 86)}%`;
      el.style.setProperty("--petal-dur", `${16 + (i % 5) * 3}s`);
      el.style.setProperty("--petal-delay", `${-(i * 2.3)}s`);
      el.style.setProperty(
        "--petal-drift",
        `${(i % 2 === 0 ? 1 : -1) * (20 + (i % 4) * 12)}px`,
      );
      el.style.setProperty(
        "--petal-rot",
        `${(i % 2 === 0 ? 1 : -1) * (120 + i * 22)}deg`,
      );
      el.style.setProperty("--petal-opacity", `${0.14 + (i % 3) * 0.06}`);
      container.appendChild(el);
    }
  }

  // --- Perpindahan Layar Halus + History State ---
  function syncHistoryOnEnter(id, fromPopstate) {
    if (fromPopstate) return;
    if (id === "panel" && !panelUnlocked) {
      panelUnlocked = true;
      history.replaceState({ screen: "panel" }, "", "#panel");
      history.pushState({ screen: "panel", guard: true }, "", "#panel");
    } else if (
      panelUnlocked &&
      id !== "pin" &&
      id !== "envelope" &&
      id !== "letter"
    ) {
      if (id === "panel") {
        history.pushState({ screen: "panel" }, "", "#panel");
      } else {
        history.pushState({ screen: id }, "", `#${id}`);
      }
    }
  }

  function showScreen(id, { fromPopstate = false } = {}) {
    if (currentScreen === id) return;
    const prevCfg = SCREENS[currentScreen];
    const nextCfg = SCREENS[id];
    if (!prevCfg || !nextCfg || !prevCfg.el || !nextCfg.el) return;

    window.clearTimeout(transitionMidTimer);
    window.clearTimeout(transitionEndTimer);

    Object.keys(SCREENS).forEach((key) => {
      if (key !== currentScreen && key !== id && SCREENS[key].el) {
        SCREENS[key].el.classList.remove("screen--active", "screen--leaving");
        SCREENS[key].el.setAttribute("aria-hidden", "true");
      }
    });

    const prev = prevCfg.el;
    const next = nextCfg.el;

    if (currentScreen === "photobooth" && id !== "photobooth") {
      stopPhotoboothCamera();
    }

    syncHistoryOnEnter(id, fromPopstate);

    prev.classList.add("screen--leaving");
    prev.classList.remove("screen--active");
    prev.setAttribute("aria-hidden", "true");

    const delay = prefersReducedMotion ? 50 : 240;
    transitionMidTimer = window.setTimeout(() => {
      next.scrollTop = 0;
      next.classList.remove("screen--leaving");
      next.classList.add("screen--active");
      next.setAttribute("aria-hidden", "false");
      currentScreen = id;

      if (typeof nextCfg.onEnter === "function") {
        nextCfg.onEnter();
      }

      transitionEndTimer = window.setTimeout(
        () => {
          prev.classList.remove("screen--leaving");
        },
        prefersReducedMotion ? 60 : 520,
      );
    }, delay);
  }

  window.addEventListener("popstate", (event) => {
    if (!panelUnlocked) return;
    if (!lightbox.hidden) {
      closeLightbox();
    }
    if (ttsVictory && !ttsVictory.hidden) {
      closeTtsVictory();
    }
    if (pbSaveOverlay && !pbSaveOverlay.hidden) {
      closePbSaveOverlay();
    }
    const target = event.state && event.state.screen;
    if (
      target &&
      SCREENS[target] &&
      target !== "pin" &&
      target !== "envelope" &&
      target !== "letter"
    ) {
      if (currentScreen !== target) {
        showScreen(target, { fromPopstate: true });
      }
      if (target === "panel" && (!event.state || !event.state.guard)) {
        history.pushState({ screen: "panel", guard: true }, "", "#panel");
      }
    } else {
      // Jangan biarkan tombol back kembali ke PIN/surat atau keluar dari website
      history.pushState({ screen: "panel", guard: true }, "", "#panel");
      if (currentScreen !== "panel") {
        showScreen("panel", { fromPopstate: true });
      }
    }
  });

  // --- SHA-256 Verifikasi PIN ---
  async function sha256Hex(text) {
    if (window.crypto && window.crypto.subtle) {
      const data = new TextEncoder().encode(text);
      const hashBuffer = await window.crypto.subtle.digest("SHA-256", data);
      return Array.from(new Uint8Array(hashBuffer))
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");
    }
    // Fallback murni JS hanya jika dibuka via file:// tanpa crypto.subtle
    return fallbackSha256(text);
  }

  function fallbackSha256(ascii) {
    function rightRotate(value, amount) {
      return (value >>> amount) | (value << (32 - amount));
    }
    const mathPow = Math.pow;
    const maxWord = mathPow(2, 32);
    let result = "";
    const words = [];
    const asciiBitLength = ascii.length * 8;
    const hash = [];
    const k = [];
    let primeCounter = 0;
    const isComposite = {};

    for (let candidate = 2; primeCounter < 64; candidate++) {
      if (!isComposite[candidate]) {
        for (let i = 0; i < 313; i += candidate) isComposite[i] = candidate;
        hash[primeCounter] = (mathPow(candidate, 0.5) * maxWord) | 0;
        k[primeCounter++] = (mathPow(candidate, 1 / 3) * maxWord) | 0;
      }
    }

    ascii += "\x80";
    while ((ascii.length % 64) - 56) ascii += "\x00";
    for (let i = 0; i < ascii.length; i++) {
      const j = ascii.charCodeAt(i);
      words[i >> 2] |= j << (((3 - i) % 4) * 8);
    }
    words[words.length] = (asciiBitLength / maxWord) | 0;
    words[words.length] = asciiBitLength;

    for (let j = 0; j < words.length; ) {
      const w = words.slice(j, (j += 16));
      const oldHash = hash.slice(0);
      for (let i = 0; i < 64; i++) {
        const w15 = w[i - 15];
        const w2 = w[i - 2];
        const a = hash[0];
        const e = hash[4];
        const temp1 =
          hash[7] +
          (rightRotate(e, 6) ^ rightRotate(e, 11) ^ rightRotate(e, 25)) +
          ((e & hash[5]) ^ (~e & hash[6])) +
          k[i] +
          (w[i] =
            i < 16
              ? w[i]
              : (w[i - 16] +
                  (rightRotate(w15, 7) ^ rightRotate(w15, 18) ^ (w15 >>> 3)) +
                  w[i - 7] +
                  (rightRotate(w2, 17) ^ rightRotate(w2, 19) ^ (w2 >>> 10))) |
                0);
        const temp2 =
          (rightRotate(a, 2) ^ rightRotate(a, 13) ^ rightRotate(a, 22)) +
          ((a & hash[1]) ^ (a & hash[2]) ^ (hash[1] & hash[2]));
        hash.unshift((temp1 + temp2) | 0);
        hash[4] = (hash[4] + temp1) | 0;
        hash.pop();
      }
      for (let i = 0; i < 8; i++) hash[i] = (hash[i] + oldHash[i]) | 0;
    }

    for (let i = 0; i < 8; i++) {
      for (let j = 3; j + 1; j--) {
        const b = (hash[i] >> (j * 8)) & 255;
        result += (b < 16 ? "0" : "") + b.toString(16);
      }
    }
    return result;
  }

  // --- Logika Layar 1: 6 Kotak PIN ---
  const pinGroup = document.getElementById("pin-group");
  const pinInputs = Array.from(document.querySelectorAll(".pin-digit"));
  const pinFeedback = document.getElementById("pin-feedback");
  let isVerifyingPin = false;

  function setPinFeedback(message) {
    pinFeedback.textContent = message;
    pinFeedback.classList.toggle("is-visible", Boolean(message));
  }

  function clearPinInputs({ focusFirst = false } = {}) {
    pinInputs.forEach((input) => {
      input.value = "";
      input.classList.remove("is-filled", "is-error", "is-success");
    });
    if (focusFirst) {
      pinInputs[0].focus();
    }
  }

  async function verifyPinIfComplete() {
    const code = pinInputs.map((input) => input.value).join("");
    if (code.length !== 6 || isVerifyingPin) return;

    isVerifyingPin = true;
    const digest = await sha256Hex(code);

    if (digest === PIN_HASH_SHA256) {
      setPinFeedback("");
      pinInputs.forEach((input) => {
        input.classList.remove("is-error");
        input.classList.add("is-success");
        input.blur();
      });

      window.setTimeout(
        () => {
          showScreen("envelope");
        },
        prefersReducedMotion ? 120 : 520,
      );
    } else {
      pinInputs.forEach((input) => input.classList.add("is-error"));
      pinGroup.classList.remove("is-shake");
      void pinGroup.offsetWidth; // trigger reflow untuk ulang animasi shake
      pinGroup.classList.add("is-shake");
      setPinFeedback(CONFIG.intro.pinWrongMessage);

      window.setTimeout(
        () => {
          pinGroup.classList.remove("is-shake");
          clearPinInputs({ focusFirst: true });
          isVerifyingPin = false;
        },
        prefersReducedMotion ? 160 : 520,
      );
    }
  }

  function fillDigitsFrom(startIndex, digitsText) {
    const clean = digitsText.replace(/\D/g, "");
    if (!clean) return;

    let cursor = startIndex;
    for (const ch of clean) {
      if (cursor >= pinInputs.length) break;
      pinInputs[cursor].value = ch;
      pinInputs[cursor].classList.add("is-filled");
      pinInputs[cursor].classList.remove("is-error");
      cursor++;
    }

    if (cursor < pinInputs.length) {
      pinInputs[cursor].focus();
    } else {
      pinInputs[pinInputs.length - 1].focus();
    }

    verifyPinIfComplete();
  }

  pinInputs.forEach((input, index) => {
    input.addEventListener("input", (event) => {
      if (isVerifyingPin) {
        event.target.value = event.target.value.slice(-1);
        return;
      }

      setPinFeedback("");
      const raw = event.target.value.replace(/\D/g, "");

      if (!raw) {
        event.target.value = "";
        event.target.classList.remove("is-filled");
        return;
      }

      if (raw.length > 1) {
        fillDigitsFrom(index, raw);
        return;
      }

      event.target.value = raw;
      event.target.classList.add("is-filled");
      event.target.classList.remove("is-error");

      if (index < pinInputs.length - 1) {
        pinInputs[index + 1].focus();
      }
      verifyPinIfComplete();
    });

    input.addEventListener("keydown", (event) => {
      if (isVerifyingPin) return;

      if (event.key === "Backspace") {
        if (input.value) {
          input.value = "";
          input.classList.remove("is-filled");
        } else if (index > 0) {
          pinInputs[index - 1].value = "";
          pinInputs[index - 1].classList.remove("is-filled");
          pinInputs[index - 1].focus();
        }
        event.preventDefault();
      } else if (event.key === "ArrowLeft" && index > 0) {
        pinInputs[index - 1].focus();
      } else if (event.key === "ArrowRight" && index < pinInputs.length - 1) {
        pinInputs[index + 1].focus();
      }
    });

    input.addEventListener("paste", (event) => {
      event.preventDefault();
      if (isVerifyingPin) return;
      const pasted = (event.clipboardData || window.clipboardData).getData(
        "text",
      );
      fillDigitsFrom(index, pasted);
    });

    input.addEventListener("focus", () => {
      input.select();
    });
  });

  // --- Logika Layar 2: Animasi Amplop 3D (3.6 detik) ---
  const envelopeTrigger = document.getElementById("envelope-trigger");
  const envelopeFlap = document.getElementById("envelope-flap");
  const envelopeHint = document.getElementById("envelope-hint");
  const envelopePretitle = document.querySelector(".envelope-pretitle");
  let isOpeningEnvelope = false;

  envelopeTrigger.addEventListener("click", () => {
    if (isOpeningEnvelope) return;
    isOpeningEnvelope = true;
    envelopeTrigger.classList.add("is-opening");
    envelopeHint.classList.add("is-hiding-hint");
    envelopePretitle.style.opacity = "0";

    // Interaksi pengguna membuka amplop dipakai untuk memutar musik latar (aman untuk iOS)
    tryStartMusic();

    if (prefersReducedMotion) {
      envelopeTrigger.classList.add("step-flap");
      envelopeFlap.classList.add("is-behind");
      window.setTimeout(() => showScreen("letter"), 120);
      return;
    }

    // 1. Penutup amplop terbuka 3D ke atas (0ms - 950ms)
    envelopeTrigger.classList.add("step-flap");
    window.setTimeout(() => {
      envelopeFlap.classList.add("is-behind");
    }, 450);

    // 2. Kertas surat perlahan naik keluar dari amplop (850ms - 1900ms)
    window.setTimeout(() => {
      envelopeTrigger.classList.add("step-rise");
    }, 850);

    // 3. Amplop memudar + sedikit turun (1800ms - 2600ms)
    window.setTimeout(() => {
      envelopeTrigger.classList.add("step-fade-envelope");
    }, 1800);

    // 4. Kertas surat membesar ke tengah, lalu pindah ke Layar 3 (2550ms - 3550ms)
    window.setTimeout(() => {
      envelopeTrigger.classList.add("step-expand");
    }, 2550);

    window.setTimeout(() => {
      showScreen("letter");
    }, 3450);
  });

  // --- Logika Layar 3: Isi Surat Paragraf demi Paragraf ---
  const letterBody = document.getElementById("letter-body");
  const letterFooter = document.querySelector(".letter-footer");
  const toPanelBtn = document.getElementById("to-panel-btn");

  function startLetterReveal() {
    if (letterAnimated) return;
    letterAnimated = true;

    letterBody.innerHTML = "";
    const paragraphEls = CONFIG.letter.paragraphs.map((text) => {
      const p = document.createElement("p");
      p.className = "letter-paragraph";
      p.textContent = text;
      letterBody.appendChild(p);
      return p;
    });

    if (prefersReducedMotion) {
      paragraphEls.forEach((p) => p.classList.add("is-shown"));
      letterFooter.classList.add("is-shown");
      toPanelBtn.disabled = false;
      toPanelBtn.classList.add("is-visible");
      return;
    }

    const baseDelay = 220;
    const stepDelay = 680;

    paragraphEls.forEach((p, idx) => {
      window.setTimeout(
        () => {
          p.classList.add("is-shown");
        },
        baseDelay + idx * stepDelay,
      );
    });

    const footerDelay = baseDelay + paragraphEls.length * stepDelay + 180;
    window.setTimeout(() => {
      letterFooter.classList.add("is-shown");
    }, footerDelay);

    // Tombol baru muncul setelah seluruh isi surat selesai tampil
    window.setTimeout(() => {
      toPanelBtn.disabled = false;
      toPanelBtn.classList.add("is-visible");
    }, footerDelay + 520);
  }

  toPanelBtn.addEventListener("click", () => {
    showScreen("panel");
  });

  // --- Logika Layar 4: Panel Menu Utama ---
  const panelGrid = document.getElementById("panel-grid");
  const panelToast = document.getElementById("panel-toast");
  let panelToastTimer = null;

  function showPanelToast(message) {
    panelToast.textContent = message;
    panelToast.classList.add("is-visible");
    window.clearTimeout(panelToastTimer);
    panelToastTimer = window.setTimeout(() => {
      panelToast.classList.remove("is-visible");
    }, 2400);
  }

  function buildPanelOnce() {
    if (panelBuilt) return;
    panelBuilt = true;

    const fragment = document.createDocumentFragment();
    const cards = PANEL_MENU.map((item) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = item.active
        ? "panel-card"
        : "panel-card panel-card--soon";
      btn.setAttribute("role", "listitem");

      const badge = item.active
        ? ""
        : `<span class="panel-card-badge">Segera hadir</span>`;
      btn.innerHTML = `
        <span class="panel-card-icon" aria-hidden="true">${item.icon}</span>
        <span class="panel-card-body">
          <span class="panel-card-top">
            <span class="panel-card-title">${item.title}</span>
            ${badge}
          </span>
          <span class="panel-card-desc">${item.desc}</span>
        </span>
      `;

      btn.addEventListener("click", () => {
        if (item.active && SCREENS[item.id]) {
          showScreen(item.id);
        } else {
          showPanelToast(CONFIG.panel.comingSoonMessage);
        }
      });

      fragment.appendChild(btn);
      return btn;
    });

    panelGrid.appendChild(fragment);

    if (prefersReducedMotion) {
      cards.forEach((card) => card.classList.add("is-shown"));
      return;
    }

    cards.forEach((card, idx) => {
      window.setTimeout(
        () => {
          card.classList.add("is-shown");
        },
        120 + idx * 90,
      );
    });
  }

  // --- Logika Layar 5: Galeri Polaroid & Scroll Reveal ---
  const galleryGrid = document.getElementById("gallery-grid");
  const backToPanelBtn = document.getElementById("back-to-panel-btn");

  backToPanelBtn.addEventListener("click", () => {
    if (history.state && history.state.screen === "gallery") {
      history.back();
    } else {
      showScreen("panel", { fromPopstate: true });
    }
  });

  function buildGalleryOnce() {
    if (galleryBuilt) return;
    galleryBuilt = true;

    const fragment = document.createDocumentFragment();
    PHOTOS.forEach((photo, idx) => {
      const item = document.createElement("div");
      item.className = "polaroid-item";
      item.setAttribute("role", "listitem");

      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "polaroid-btn";
      btn.setAttribute("aria-label", `Buka foto: ${photo.caption}`);
      btn.addEventListener("click", () => openLightbox(idx));

      const wrap = document.createElement("div");
      wrap.className = "polaroid-photo-wrap";

      const img = document.createElement("img");
      img.className = "polaroid-photo";
      img.src = photo.src;
      img.alt = photo.caption;
      img.loading = "lazy";
      img.decoding = "async";

      const caption = document.createElement("p");
      caption.className = "polaroid-caption";
      caption.textContent = photo.caption;

      const date = document.createElement("p");
      date.className = "polaroid-date";
      date.textContent = photo.date;

      wrap.appendChild(img);
      btn.appendChild(wrap);
      btn.appendChild(caption);
      btn.appendChild(date);
      item.appendChild(btn);
      fragment.appendChild(item);
    });

    galleryGrid.appendChild(fragment);

    const items = Array.from(galleryGrid.querySelectorAll(".polaroid-item"));
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: SCREENS.gallery.el,
        threshold: 0.12,
        rootMargin: "0px 0px -24px 0px",
      },
    );

    items.forEach((el, idx) => {
      el.style.transitionDelay = `${Math.min((idx % 4) * 70, 210)}ms`;
      observer.observe(el);
    });
  }

  // --- Lightbox + Swipe Kiri/Kanan di iPhone ---
  const lightbox = document.getElementById("lightbox");
  const lightboxBackdrop = document.getElementById("lightbox-backdrop");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  const lightboxStage = document.getElementById("lightbox-stage");
  const lightboxCard = document.getElementById("lightbox-card");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxDate = document.getElementById("lightbox-date");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const lightboxCounter = document.getElementById("lightbox-counter");

  function renderLightboxPhoto() {
    const item = PHOTOS[lightboxIndex];
    if (!item) return;
    lightboxImg.src = item.src;
    lightboxImg.alt = item.caption;
    lightboxDate.textContent = item.date;
    lightboxCaption.textContent = item.caption;
    lightboxCounter.textContent = `${lightboxIndex + 1} / ${PHOTOS.length}`;
  }

  function openLightbox(index) {
    lightboxIndex = (index + PHOTOS.length) % PHOTOS.length;
    renderLightboxPhoto();
    lightbox.hidden = false;
    requestAnimationFrame(() => {
      lightbox.classList.add("is-open");
    });
    lightboxClose.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    window.setTimeout(
      () => {
        lightbox.hidden = true;
      },
      prefersReducedMotion ? 40 : 280,
    );
  }

  function stepLightbox(delta) {
    if (PHOTOS.length <= 1) return;
    lightboxIndex = (lightboxIndex + delta + PHOTOS.length) % PHOTOS.length;
    if (!prefersReducedMotion) {
      lightboxCard.style.opacity = "0.65";
      lightboxCard.style.transform = `translate3d(${delta > 0 ? "-14px" : "14px"}, 0, 0)`;
      window.setTimeout(() => {
        renderLightboxPhoto();
        lightboxCard.style.opacity = "1";
        lightboxCard.style.transform = "translate3d(0, 0, 0)";
      }, 120);
    } else {
      renderLightboxPhoto();
    }
  }

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxBackdrop.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => stepLightbox(-1));
  lightboxNext.addEventListener("click", () => stepLightbox(1));

  // Tutup jika mengetuk area kosong di sekitar kartu pada stage
  lightboxStage.addEventListener("click", (event) => {
    if (event.target === lightboxStage) {
      closeLightbox();
    }
  });

  // Dukungan keyboard (Desktop)
  document.addEventListener("keydown", (event) => {
    if (lightbox.hidden) return;
    if (event.key === "Escape") closeLightbox();
    if (event.key === "ArrowLeft") stepLightbox(-1);
    if (event.key === "ArrowRight") stepLightbox(1);
  });

  // Dukungan swipe kiri-kanan (Touch / iPhone)
  let touchStartX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;
  let isSwiping = false;

  lightboxStage.addEventListener(
    "touchstart",
    (event) => {
      if (event.touches.length !== 1) return;
      touchStartX = event.touches[0].clientX;
      touchStartY = event.touches[0].clientY;
      touchDeltaX = 0;
      isSwiping = true;
      lightboxCard.style.transition = "none";
    },
    { passive: true },
  );

  lightboxStage.addEventListener(
    "touchmove",
    (event) => {
      if (!isSwiping || event.touches.length !== 1) return;
      const dx = event.touches[0].clientX - touchStartX;
      const dy = event.touches[0].clientY - touchStartY;
      if (Math.abs(dx) > Math.abs(dy)) {
        touchDeltaX = dx;
        lightboxCard.style.transform = `translate3d(${dx * 0.45}px, 0, 0)`;
      }
    },
    { passive: true },
  );

  lightboxStage.addEventListener(
    "touchend",
    () => {
      if (!isSwiping) return;
      isSwiping = false;
      lightboxCard.style.transition = "";
      if (Math.abs(touchDeltaX) > 48) {
        stepLightbox(touchDeltaX < 0 ? 1 : -1);
      } else {
        lightboxCard.style.transform = "translate3d(0, 0, 0)";
      }
      touchDeltaX = 0;
    },
    { passive: true },
  );

  // --- Logika Layar 6: Carousel Games Gaya PS3 ---
  const gamesBackBtn = document.getElementById("games-back-btn");
  const gamesCarousel = document.getElementById("games-carousel");
  const gamesPrevBtn = document.getElementById("games-prev");
  const gamesNextBtn = document.getElementById("games-next");
  const gamesActiveTitle = document.getElementById("games-active-title");
  const gamesActiveDesc = document.getElementById("games-active-desc");
  const gamesActiveCta = document.getElementById("games-active-cta");

  let gameCards = [];
  let activeGameIndex = 0;
  let gamesScrollRaf = null;

  gamesBackBtn.addEventListener("click", () => {
    if (history.state && history.state.screen === "games") {
      history.back();
    } else {
      showScreen("panel");
    }
  });

  function updateGamesUI(index) {
    activeGameIndex = index;
    const activeGame = GAMES[index];
    gameCards.forEach((card, idx) => {
      card.classList.toggle("is-center", idx === index);
      card.setAttribute("aria-current", idx === index ? "true" : "false");
    });

    if (activeGame) {
      gamesActiveTitle.textContent = activeGame.judul;
      gamesActiveDesc.textContent = activeGame.deskripsi;
      gamesActiveCta.textContent = activeGame.aktif
        ? "Ketuk kartu di tengah untuk bermain"
        : "Segera hadir 🤍";
    }

    gamesPrevBtn.disabled = index <= 0;
    gamesNextBtn.disabled = index >= GAMES.length - 1;
  }

  function scrollGameToIndex(index, instant = false) {
    const clamped = Math.max(0, Math.min(GAMES.length - 1, index));
    const card = gameCards[clamped];
    if (!card) return;
    const targetLeft =
      card.offsetLeft - (gamesCarousel.clientWidth - card.offsetWidth) / 2;
    gamesCarousel.scrollTo({
      left: targetLeft,
      behavior: instant || prefersReducedMotion ? "auto" : "smooth",
    });
    updateGamesUI(clamped);
  }

  function syncActiveGameFromScroll() {
    if (!gameCards.length) return;
    const viewportCenter =
      gamesCarousel.scrollLeft + gamesCarousel.clientWidth / 2;
    let closestIdx = 0;
    let minDistance = Infinity;

    gameCards.forEach((card, idx) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - viewportCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeGameIndex) {
      updateGamesUI(closestIdx);
    }
  }

  function buildGamesOnce() {
    if (gamesBuilt) {
      requestAnimationFrame(() => scrollGameToIndex(activeGameIndex, true));
      return;
    }
    gamesBuilt = true;

    const fragment = document.createDocumentFragment();
    gameCards = GAMES.map((game, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = game.aktif
        ? "game-card game-card--active"
        : "game-card game-card--locked";
      btn.setAttribute("aria-label", `${game.judul} — ${game.deskripsi}`);

      const statusLabel = game.aktif ? "Siap dimainkan" : "Segera hadir";
      btn.innerHTML = `
        <span class="game-card-icon" aria-hidden="true">${game.ikon}</span>
        <span class="game-card-title">${game.judul}</span>
        <span class="game-card-status">${statusLabel}</span>
      `;

      btn.addEventListener("click", () => {
        if (idx !== activeGameIndex) {
          scrollGameToIndex(idx);
          return;
        }
        if (game.aktif && SCREENS[game.id]) {
          showScreen(game.id);
        } else {
          showPanelToast("Segera hadir 🤍");
        }
      });

      fragment.appendChild(btn);
      return btn;
    });

    gamesCarousel.appendChild(fragment);

    gamesCarousel.addEventListener(
      "scroll",
      () => {
        if (gamesScrollRaf) return;
        gamesScrollRaf = requestAnimationFrame(() => {
          gamesScrollRaf = null;
          syncActiveGameFromScroll();
        });
      },
      { passive: true },
    );

    gamesPrevBtn.addEventListener("click", () => {
      scrollGameToIndex(activeGameIndex - 1);
    });

    gamesNextBtn.addEventListener("click", () => {
      scrollGameToIndex(activeGameIndex + 1);
    });

    requestAnimationFrame(() => {
      scrollGameToIndex(0, true);
    });
  }

  document.addEventListener("keydown", (event) => {
    if (currentScreen !== "games") return;
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      scrollGameToIndex(activeGameIndex - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      scrollGameToIndex(activeGameIndex + 1);
    }
  });

  // --- Logika Layar 7: Teka-Teki Silang (Grid Mendatar & Menurun) & Kemenangan ---
  const TTS_GRID_ROWS = 11;
  const TTS_GRID_COLS = 12;
  const TTS_GRID_LAYOUT = {
    1: { nomor: 1, arah: "mendatar", row: 0, col: 6 },
    2: { nomor: 3, arah: "menurun", row: 4, col: 0 },
    3: { nomor: 2, arah: "menurun", row: 0, col: 9 },
    4: { nomor: 3, arah: "mendatar", row: 4, col: 0 },
    5: { nomor: 4, arah: "menurun", row: 4, col: 3 },
    6: { nomor: 6, arah: "mendatar", row: 10, col: 7 },
    7: { nomor: 5, arah: "menurun", row: 4, col: 7 },
  };

  const ttsBackBtn = document.getElementById("tts-back-btn");
  const ttsGrid = document.getElementById("tts-grid");
  const ttsActiveClue = document.getElementById("tts-active-clue");
  const ttsDirToggle = document.getElementById("tts-dir-toggle");
  const ttsCluesAcross = document.getElementById("tts-clues-across");
  const ttsCluesDown = document.getElementById("tts-clues-down");
  const ttsProgress = document.getElementById("tts-progress");
  const ttsFeedback = document.getElementById("tts-feedback");
  const ttsCheckBtn = document.getElementById("tts-check-btn");
  const ttsResetBtn = document.getElementById("tts-reset-btn");
  const ttsResetConfirm = document.getElementById("tts-reset-confirm");
  const ttsResetYes = document.getElementById("tts-reset-yes");
  const ttsResetNo = document.getElementById("tts-reset-no");

  const ttsVictory = document.getElementById("tts-victory");
  const ttsVictoryHearts = document.getElementById("tts-victory-hearts");
  const ttsVictoryTitle = document.getElementById("tts-victory-title");
  const ttsVictoryMessage = document.getElementById("tts-victory-message");
  const ttsVictoryGamesBtn = document.getElementById("tts-victory-games-btn");
  const ttsVictoryPanelBtn = document.getElementById("tts-victory-panel-btn");

  let ttsWords = [];
  let ttsCellMap = new Map();
  let activeWord = null;
  let focusedCellKey = null;

  ttsBackBtn.addEventListener("click", () => {
    if (history.state && history.state.screen === "tts") {
      history.back();
    } else {
      showScreen("games");
    }
  });

  function cellKey(r, c) {
    return `${r},${c}`;
  }

  function updateTtsProgress(count) {
    ttsProgress.textContent = `${count} / ${ttsWords.length} benar`;
  }

  function refreshTtsHighlights() {
    ttsCellMap.forEach((cell) => {
      const inWord = activeWord && activeWord.cells.includes(cell);
      cell.cellEl.classList.toggle("is-word-active", Boolean(inWord));
      cell.cellEl.classList.toggle("is-focused", cell.key === focusedCellKey);
    });

    ttsWords.forEach((word) => {
      if (word.clueBtn) {
        word.clueBtn.classList.toggle("is-active", word === activeWord);
      }
    });

    if (activeWord) {
      const dirLabel = activeWord.arah === "mendatar" ? "Mendatar" : "Menurun";
      ttsActiveClue.textContent = `${activeWord.nomor} ${dirLabel}: ${activeWord.petunjuk}`;
    } else {
      ttsActiveClue.textContent = "Ketuk kotak atau pilih petunjuk di bawah";
    }

    const focusedCell = focusedCellKey ? ttsCellMap.get(focusedCellKey) : null;
    if (focusedCell && focusedCell.words.length > 1 && activeWord) {
      ttsDirToggle.hidden = false;
      ttsDirToggle.textContent =
        activeWord.arah === "mendatar" ? "Mendatar ⇄" : "Menurun ⇄";
    } else {
      ttsDirToggle.hidden = true;
    }
  }

  function selectCell(cell, { toggleIfSame = false } = {}) {
    if (!cell) return;
    if (toggleIfSame && focusedCellKey === cell.key && cell.words.length > 1) {
      const nextWord =
        cell.words.find((w) => w !== activeWord) || cell.words[0];
      activeWord = nextWord;
    } else if (!activeWord || !cell.words.includes(activeWord)) {
      activeWord = cell.words[0];
    }
    focusedCellKey = cell.key;
    refreshTtsHighlights();
  }

  function focusWord(word) {
    activeWord = word;
    const targetCell =
      word.cells.find((c) => !c.locked && !c.inputEl.value) ||
      word.cells.find((c) => !c.locked) ||
      word.cells[0];
    if (targetCell) {
      focusedCellKey = targetCell.key;
      refreshTtsHighlights();
      targetCell.inputEl.focus();
    }
  }

  function moveFocusInWord(currentCell, step) {
    if (!activeWord) return;
    const idx = activeWord.cells.indexOf(currentCell);
    if (idx === -1) return;
    let nextIdx = idx + step;
    while (
      nextIdx >= 0 &&
      nextIdx < activeWord.cells.length &&
      activeWord.cells[nextIdx].locked
    ) {
      nextIdx += step;
    }
    if (nextIdx >= 0 && nextIdx < activeWord.cells.length) {
      const target = activeWord.cells[nextIdx];
      focusedCellKey = target.key;
      refreshTtsHighlights();
      target.inputEl.focus();
    }
  }

  function spawnVictoryHearts() {
    ttsVictoryHearts.innerHTML = "";
    if (prefersReducedMotion) return;

    const count = 14;
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("span");
      heart.className = "victory-heart";
      heart.textContent = i % 2 === 0 ? "🤍" : "♥";
      heart.style.left = `${6 + ((i * 7) % 88)}%`;
      heart.style.setProperty("--vh-dur", `${2.8 + (i % 4) * 0.45}s`);
      heart.style.setProperty("--vh-delay", `${(i % 5) * 0.22}s`);
      heart.style.setProperty(
        "--vh-drift",
        `${(i % 2 === 0 ? 1 : -1) * (14 + (i % 3) * 10)}px`,
      );
      heart.style.setProperty(
        "--vh-rot",
        `${(i % 2 === 0 ? 1 : -1) * (20 + i * 6)}deg`,
      );
      ttsVictoryHearts.appendChild(heart);
    }
  }

  function openTtsVictory() {
    ttsVictoryTitle.textContent = TTS_PUJIAN.judul;
    ttsVictoryMessage.textContent = TTS_PUJIAN.pesan;
    ttsVictoryGamesBtn.textContent = TTS_PUJIAN.tombol1;
    ttsVictoryPanelBtn.textContent = TTS_PUJIAN.tombol2;

    spawnVictoryHearts();
    ttsVictory.hidden = false;
    requestAnimationFrame(() => {
      ttsVictory.classList.add("is-open");
    });
    ttsVictoryGamesBtn.focus();
  }

  function closeTtsVictory() {
    ttsVictory.classList.remove("is-open");
    window.setTimeout(
      () => {
        ttsVictory.hidden = true;
        ttsVictoryHearts.innerHTML = "";
      },
      prefersReducedMotion ? 40 : 320,
    );
  }

  function checkTtsAnswers() {
    let correctCount = 0;
    let hasWrong = false;

    ttsCellMap.forEach((cell) => {
      cell.cellEl.classList.remove("is-word-wrong");
    });

    ttsWords.forEach((word) => {
      const guess = word.cells
        .map((c) => c.inputEl.value.trim().toUpperCase())
        .join("");

      if (guess === word.answer) {
        correctCount++;
        word.correct = true;
        word.cells.forEach((c) => {
          c.locked = true;
          c.inputEl.readOnly = true;
          c.cellEl.classList.add("is-word-correct");
          c.cellEl.classList.remove("is-word-wrong");
        });
        if (word.clueBtn) {
          word.clueBtn.classList.add("is-correct");
          const checkSpan = word.clueBtn.querySelector(".tts-clue-check");
          if (checkSpan) checkSpan.textContent = "✓";
        }
      } else {
        hasWrong = true;
        word.correct = false;
        word.cells.forEach((c) => {
          if (!c.locked) {
            c.cellEl.classList.add("is-word-wrong");
          }
        });
      }
    });

    if (hasWrong) {
      ttsGrid.classList.remove("is-shake");
      void ttsGrid.offsetWidth;
      ttsGrid.classList.add("is-shake");
    }

    updateTtsProgress(correctCount);

    if (correctCount === ttsWords.length) {
      ttsFeedback.textContent = "";
      openTtsVictory();
    } else if (correctCount > 0) {
      const remaining = ttsWords.length - correctCount;
      ttsFeedback.textContent = `Tinggal ${remaining} lagi, sedikit lagi ya 🤍`;
    } else {
      ttsFeedback.textContent = "Ada yang masih kurang tepat, coba lagi ya";
    }
  }

  function resetTtsBoard() {
    ttsWords.forEach((word) => {
      word.correct = false;
      if (word.clueBtn) {
        word.clueBtn.classList.remove("is-correct", "is-active");
        const checkSpan = word.clueBtn.querySelector(".tts-clue-check");
        if (checkSpan) checkSpan.textContent = "";
      }
    });

    ttsCellMap.forEach((cell) => {
      cell.locked = false;
      cell.inputEl.value = "";
      cell.inputEl.readOnly = false;
      cell.cellEl.classList.remove(
        "is-word-correct",
        "is-word-wrong",
        "is-word-active",
        "is-focused",
      );
    });

    updateTtsProgress(0);
    ttsFeedback.textContent = "";
    ttsResetConfirm.hidden = true;
    if (ttsWords[0]) {
      focusWord(ttsWords[0]);
    }
  }

  function buildTtsOnce() {
    if (ttsBuilt) return;
    ttsBuilt = true;

    ttsCellMap = new Map();
    ttsWords = TTS_DATA.map((item) => {
      const layout = TTS_GRID_LAYOUT[item.no];
      const answer = item.jawaban.replace(/\s+/g, "").toUpperCase();
      return {
        no: item.no,
        nomor: layout.nomor,
        arah: layout.arah,
        row: layout.row,
        col: layout.col,
        petunjuk: item.petunjuk,
        answer,
        cells: [],
        correct: false,
        clueBtn: null,
      };
    });

    // Petakan seluruh kotak aktif pada grid 11x12
    ttsWords.forEach((word) => {
      for (let i = 0; i < word.answer.length; i++) {
        const r = word.arah === "mendatar" ? word.row : word.row + i;
        const c = word.arah === "mendatar" ? word.col + i : word.col;
        const key = cellKey(r, c);
        let cell = ttsCellMap.get(key);
        if (!cell) {
          cell = {
            key,
            r,
            c,
            words: [],
            number: null,
            locked: false,
            cellEl: null,
            inputEl: null,
          };
          ttsCellMap.set(key, cell);
        }
        cell.words.push(word);
        if (i === 0) {
          cell.number = word.nomor;
        }
        word.cells.push(cell);
      }
    });

    // Bangun grid 11x12
    const gridFrag = document.createDocumentFragment();
    for (let r = 0; r < TTS_GRID_ROWS; r++) {
      for (let c = 0; c < TTS_GRID_COLS; c++) {
        const key = cellKey(r, c);
        const cell = ttsCellMap.get(key);

        if (!cell) {
          const emptyEl = document.createElement("div");
          emptyEl.className = "tts-cell tts-cell--empty";
          emptyEl.setAttribute("aria-hidden", "true");
          gridFrag.appendChild(emptyEl);
          continue;
        }

        const cellEl = document.createElement("div");
        cellEl.className = "tts-cell tts-cell--letter";

        if (cell.number !== null) {
          const numEl = document.createElement("span");
          numEl.className = "tts-cell-num";
          numEl.setAttribute("aria-hidden", "true");
          numEl.textContent = cell.number;
          cellEl.appendChild(numEl);
        }

        const inputEl = document.createElement("input");
        inputEl.type = "text";
        inputEl.className = "tts-cell-input";
        inputEl.maxLength = 1;
        inputEl.setAttribute("autocapitalize", "characters");
        inputEl.setAttribute("autocomplete", "off");
        inputEl.setAttribute("autocorrect", "off");
        inputEl.setAttribute("spellcheck", "false");
        inputEl.setAttribute("inputmode", "text");

        const firstWord = cell.words[0];
        const dirText = firstWord.arah === "mendatar" ? "Mendatar" : "Menurun";
        inputEl.setAttribute(
          "aria-label",
          `Kotak ${firstWord.nomor} ${dirText}`,
        );

        let wasFocusedBeforePointer = false;
        inputEl.addEventListener("pointerdown", () => {
          wasFocusedBeforePointer = focusedCellKey === cell.key;
        });

        inputEl.addEventListener("click", () => {
          if (wasFocusedBeforePointer) {
            selectCell(cell, { toggleIfSame: true });
          }
        });

        inputEl.addEventListener("focus", () => {
          selectCell(cell);
          inputEl.select();
        });

        inputEl.addEventListener("input", (event) => {
          if (cell.locked) return;
          const cleaned = event.target.value
            .replace(/[^A-Za-z]/g, "")
            .toUpperCase();

          if (activeWord) {
            activeWord.cells.forEach((wc) =>
              wc.cellEl.classList.remove("is-word-wrong"),
            );
          }

          if (!cleaned) {
            event.target.value = "";
            return;
          }

          if (cleaned.length > 1 && activeWord) {
            let idx = activeWord.cells.indexOf(cell);
            for (const ch of cleaned) {
              if (idx >= activeWord.cells.length) break;
              const target = activeWord.cells[idx];
              if (!target.locked) {
                target.inputEl.value = ch;
              }
              idx++;
            }
            const nextIdx = Math.min(idx, activeWord.cells.length - 1);
            activeWord.cells[nextIdx].inputEl.focus();
            return;
          }

          event.target.value = cleaned;
          moveFocusInWord(cell, 1);
        });

        inputEl.addEventListener("keydown", (event) => {
          if (event.key === "Backspace") {
            if (activeWord) {
              activeWord.cells.forEach((wc) =>
                wc.cellEl.classList.remove("is-word-wrong"),
              );
            }
            if (!cell.locked && inputEl.value) {
              inputEl.value = "";
            } else {
              const idx = activeWord ? activeWord.cells.indexOf(cell) : -1;
              if (idx > 0) {
                const prev = activeWord.cells[idx - 1];
                if (!prev.locked) {
                  prev.inputEl.value = "";
                }
                focusedCellKey = prev.key;
                refreshTtsHighlights();
                prev.inputEl.focus();
              }
            }
            event.preventDefault();
          } else if (event.key === "ArrowLeft") {
            const left = ttsCellMap.get(cellKey(r, c - 1));
            if (left) {
              event.preventDefault();
              left.inputEl.focus();
            }
          } else if (event.key === "ArrowRight") {
            const right = ttsCellMap.get(cellKey(r, c + 1));
            if (right) {
              event.preventDefault();
              right.inputEl.focus();
            }
          } else if (event.key === "ArrowUp") {
            const up = ttsCellMap.get(cellKey(r - 1, c));
            if (up) {
              event.preventDefault();
              up.inputEl.focus();
            }
          } else if (event.key === "ArrowDown") {
            const down = ttsCellMap.get(cellKey(r + 1, c));
            if (down) {
              event.preventDefault();
              down.inputEl.focus();
            }
          }
        });

        cell.cellEl = cellEl;
        cell.inputEl = inputEl;
        cellEl.appendChild(inputEl);
        gridFrag.appendChild(cellEl);
      }
    }
    ttsGrid.appendChild(gridFrag);

    // Bangun daftar petunjuk Mendatar & Menurun terurut nomor kotak
    const acrossWords = ttsWords
      .filter((w) => w.arah === "mendatar")
      .sort((a, b) => a.nomor - b.nomor);
    const downWords = ttsWords
      .filter((w) => w.arah === "menurun")
      .sort((a, b) => a.nomor - b.nomor);

    function appendClues(listEl, words) {
      const frag = document.createDocumentFragment();
      words.forEach((word) => {
        const li = document.createElement("li");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "tts-clue-btn";
        btn.innerHTML = `
          <span><span class="tts-clue-num">${word.nomor}.</span>${word.petunjuk}</span>
          <span class="tts-clue-check" aria-hidden="true"></span>
        `;
        btn.addEventListener("click", () => focusWord(word));
        word.clueBtn = btn;
        li.appendChild(btn);
        frag.appendChild(li);
      });
      listEl.appendChild(frag);
    }

    appendClues(ttsCluesAcross, acrossWords);
    appendClues(ttsCluesDown, downWords);

    ttsDirToggle.addEventListener("click", () => {
      if (!focusedCellKey) return;
      const cell = ttsCellMap.get(focusedCellKey);
      if (cell) {
        selectCell(cell, { toggleIfSame: true });
        cell.inputEl.focus();
      }
    });

    updateTtsProgress(0);
    if (acrossWords[0]) {
      activeWord = acrossWords[0];
      refreshTtsHighlights();
    }

    ttsCheckBtn.addEventListener("click", checkTtsAnswers);

    ttsResetBtn.addEventListener("click", () => {
      ttsResetConfirm.hidden = !ttsResetConfirm.hidden;
    });

    ttsResetNo.addEventListener("click", () => {
      ttsResetConfirm.hidden = true;
    });

    ttsResetYes.addEventListener("click", resetTtsBoard);

    ttsVictoryGamesBtn.addEventListener("click", () => {
      closeTtsVictory();
      if (history.state && history.state.screen === "tts") {
        history.back();
      } else {
        showScreen("games");
      }
    });

    ttsVictoryPanelBtn.addEventListener("click", () => {
      closeTtsVictory();
      showScreen("panel");
    });
  }

  // --- Logika Layar 8: Kuis Kita (Seberapa Kenal Kamu Denganku?) ---
  const kuisBackBtn = document.getElementById("kuis-back-btn");
  const kuisIntro = document.getElementById("kuis-intro");
  const kuisStartBtn = document.getElementById("kuis-start-btn");
  const kuisPlay = document.getElementById("kuis-play");
  const kuisProgressText = document.getElementById("kuis-progress-text");
  const kuisCombo = document.getElementById("kuis-combo");
  const kuisQuitBtn = document.getElementById("kuis-quit-btn");
  const kuisQuitConfirm = document.getElementById("kuis-quit-confirm");
  const kuisQuitYes = document.getElementById("kuis-quit-yes");
  const kuisQuitNo = document.getElementById("kuis-quit-no");
  const kuisProgressFill = document.getElementById("kuis-progress-fill");
  const kuisCard = document.getElementById("kuis-card");
  const kuisQuestion = document.getElementById("kuis-question");
  const kuisOptions = document.getElementById("kuis-options");
  const kuisFeedback = document.getElementById("kuis-feedback");
  const kuisNextBtn = document.getElementById("kuis-next-btn");

  const kuisResult = document.getElementById("kuis-result");
  const kuisResultHearts = document.getElementById("kuis-result-hearts");
  const kuisScoreNum = document.getElementById("kuis-score-num");
  const kuisBestScore = document.getElementById("kuis-best-score");
  const kuisRewardTitle = document.getElementById("kuis-reward-title");
  const kuisRewardMsg = document.getElementById("kuis-reward-msg");
  const kuisCoupon = document.getElementById("kuis-coupon");
  const kuisCouponGift = document.getElementById("kuis-coupon-gift");
  const kuisReplayBtn = document.getElementById("kuis-replay-btn");
  const kuisGamesBtn = document.getElementById("kuis-games-btn");
  const kuisPanelBtn = document.getElementById("kuis-panel-btn");

  let kuisInitDone = false;
  let kuisIndex = 0;
  let kuisScore = 0;
  let kuisStreak = 0;
  let kuisAnswered = false;
  let kuisScoreTimer = null;

  function shuffleArray(arr) {
    const copy = arr.slice();
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = copy[i];
      copy[i] = copy[j];
      copy[j] = tmp;
    }
    return copy;
  }

  function getKuisBestScore() {
    try {
      const raw = window.localStorage.getItem("kuisBest");
      const num = raw ? parseInt(raw, 10) : 0;
      return Number.isFinite(num) ? num : 0;
    } catch {
      return 0;
    }
  }

  function saveKuisBestScore(score) {
    const prev = getKuisBestScore();
    const best = Math.max(prev, score);
    try {
      window.localStorage.setItem("kuisBest", String(best));
    } catch {
      // Abaikan jika penyimpanan lokal dibatasi
    }
    return best;
  }

  function showKuisView(view) {
    kuisIntro.hidden = view !== "intro";
    kuisPlay.hidden = view !== "play";
    kuisResult.hidden = view !== "result";
    if (view !== "result") {
      kuisResultHearts.innerHTML = "";
    }
  }

  function updateKuisComboUI() {
    if (kuisStreak >= 3) {
      kuisCombo.textContent = `Kombo ${kuisStreak} 🔥`;
      kuisCombo.hidden = false;
    } else {
      kuisCombo.hidden = true;
    }
  }

  function renderKuisQuestion() {
    const item = KUIS_DATA[kuisIndex];
    if (!item) return;

    kuisAnswered = false;
    kuisQuitConfirm.hidden = true;
    kuisProgressText.textContent = `Soal ${kuisIndex + 1} / ${KUIS_DATA.length}`;
    kuisProgressFill.style.width = `${((kuisIndex + 1) / KUIS_DATA.length) * 100}%`;
    updateKuisComboUI();

    kuisQuestion.textContent = item.q;
    kuisFeedback.textContent = "";
    kuisFeedback.classList.remove("is-visible");
    kuisNextBtn.hidden = true;
    kuisNextBtn.classList.remove("is-visible");
    kuisNextBtn.textContent =
      kuisIndex === KUIS_DATA.length - 1 ? "Lihat Hasil" : "Lanjut";

    const correctText = item.opsi[item.benar];
    const shuffledOptions = shuffleArray(item.opsi);

    kuisOptions.innerHTML = "";
    shuffledOptions.forEach((optText) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "kuis-option";

      const labelSpan = document.createElement("span");
      labelSpan.textContent = optText;

      const markSpan = document.createElement("span");
      markSpan.className = "kuis-option-mark";
      markSpan.setAttribute("aria-hidden", "true");

      btn.appendChild(labelSpan);
      btn.appendChild(markSpan);
      btn.addEventListener("click", () =>
        handleKuisOptionClick(btn, optText, correctText, item),
      );
      kuisOptions.appendChild(btn);
    });
  }

  function handleKuisOptionClick(clickedBtn, chosenText, correctText, item) {
    if (kuisAnswered) return;
    kuisAnswered = true;

    const allBtns = Array.from(kuisOptions.querySelectorAll(".kuis-option"));
    allBtns.forEach((btn) => {
      btn.disabled = true;
      const text = btn.firstElementChild.textContent;
      const mark = btn.querySelector(".kuis-option-mark");
      if (text === correctText) {
        btn.classList.add("is-correct");
        if (mark) mark.textContent = "✓";
      }
    });

    const isCorrect = chosenText === correctText;
    if (isCorrect) {
      kuisScore++;
      kuisStreak++;
      kuisFeedback.textContent = item.pesanBenar;
    } else {
      kuisStreak = 0;
      clickedBtn.classList.add("is-wrong");
      const wrongMark = clickedBtn.querySelector(".kuis-option-mark");
      if (wrongMark) wrongMark.textContent = "✕";
      kuisFeedback.textContent = item.pesanSalah;
    }

    updateKuisComboUI();
    requestAnimationFrame(() => {
      kuisFeedback.classList.add("is-visible");
    });

    kuisNextBtn.hidden = false;
    requestAnimationFrame(() => {
      kuisNextBtn.classList.add("is-visible");
    });
  }

  function advanceKuisQuestion() {
    if (!kuisAnswered) return;
    if (kuisIndex >= KUIS_DATA.length - 1) {
      showKuisResult();
      return;
    }

    kuisIndex++;
    if (prefersReducedMotion) {
      renderKuisQuestion();
      return;
    }

    kuisCard.classList.add("is-sliding-out");
    window.setTimeout(() => {
      kuisCard.classList.remove("is-sliding-out");
      kuisCard.classList.add("is-sliding-in");
      renderKuisQuestion();
      requestAnimationFrame(() => {
        kuisCard.classList.remove("is-sliding-in");
      });
    }, 220);
  }

  function spawnKuisHearts() {
    kuisResultHearts.innerHTML = "";
    if (prefersReducedMotion) return;

    const count = 14;
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("span");
      heart.className = "victory-heart";
      heart.textContent = i % 2 === 0 ? "🤍" : "♥";
      heart.style.left = `${6 + ((i * 7) % 88)}%`;
      heart.style.setProperty("--vh-dur", `${2.8 + (i % 4) * 0.45}s`);
      heart.style.setProperty("--vh-delay", `${(i % 5) * 0.22}s`);
      heart.style.setProperty(
        "--vh-drift",
        `${(i % 2 === 0 ? 1 : -1) * (14 + (i % 3) * 10)}px`,
      );
      heart.style.setProperty(
        "--vh-rot",
        `${(i % 2 === 0 ? 1 : -1) * (20 + i * 6)}deg`,
      );
      kuisResultHearts.appendChild(heart);
    }
  }

  function animateKuisScore(targetScore) {
    window.clearInterval(kuisScoreTimer);
    if (prefersReducedMotion || targetScore === 0) {
      kuisScoreNum.textContent = String(targetScore);
      return;
    }
    let current = 0;
    kuisScoreNum.textContent = "0";
    kuisScoreTimer = window.setInterval(() => {
      current++;
      kuisScoreNum.textContent = String(current);
      if (current >= targetScore) {
        window.clearInterval(kuisScoreTimer);
      }
    }, 70);
  }

  function showKuisResult() {
    showKuisView("result");
    const best = saveKuisBestScore(kuisScore);
    kuisBestScore.textContent = `Skor terbaik: ${best} / ${KUIS_DATA.length}`;

    const reward =
      KUIS_REWARD.find((r) => r.min <= kuisScore) ||
      KUIS_REWARD[KUIS_REWARD.length - 1];
    kuisRewardTitle.textContent = reward.judul;
    kuisRewardMsg.textContent = reward.pesan;
    kuisCouponGift.textContent = reward.hadiah;

    kuisCoupon.classList.remove("is-flipped");
    kuisCoupon.setAttribute("aria-pressed", "false");

    animateKuisScore(kuisScore);

    if (kuisScore >= 8) {
      spawnKuisHearts();
    } else {
      kuisResultHearts.innerHTML = "";
    }
  }

  function startKuis() {
    kuisIndex = 0;
    kuisScore = 0;
    kuisStreak = 0;
    showKuisView("play");
    renderKuisQuestion();
  }

  function enterKuisScreen() {
    if (!kuisInitDone) {
      kuisInitDone = true;

      kuisBackBtn.addEventListener("click", () => {
        if (history.state && history.state.screen === "kuis") {
          history.back();
        } else {
          showScreen("games");
        }
      });

      kuisStartBtn.addEventListener("click", startKuis);
      kuisNextBtn.addEventListener("click", advanceKuisQuestion);

      kuisQuitBtn.addEventListener("click", () => {
        kuisQuitConfirm.hidden = !kuisQuitConfirm.hidden;
      });

      kuisQuitNo.addEventListener("click", () => {
        kuisQuitConfirm.hidden = true;
      });

      kuisQuitYes.addEventListener("click", () => {
        kuisQuitConfirm.hidden = true;
        if (history.state && history.state.screen === "kuis") {
          history.back();
        } else {
          showScreen("games");
        }
      });

      kuisCoupon.addEventListener("click", () => {
        const flipped = kuisCoupon.classList.toggle("is-flipped");
        kuisCoupon.setAttribute("aria-pressed", String(flipped));
      });

      kuisReplayBtn.addEventListener("click", startKuis);

      kuisGamesBtn.addEventListener("click", () => {
        if (history.state && history.state.screen === "kuis") {
          history.back();
        } else {
          showScreen("games");
        }
      });

      kuisPanelBtn.addEventListener("click", () => {
        showScreen("panel");
      });
    }

    showKuisView("intro");
  }

  // --- Logika Layar 9: Mesin Bola Pesan ---
  const bolaBackBtn = document.getElementById("bola-back-btn");
  const bolaMachine = document.getElementById("bola-machine");
  const bolaPile = document.getElementById("bola-pile");
  const bolaSpinBtn = document.getElementById("bola-spin-btn");
  const bolaDropBall = document.getElementById("bola-drop-ball");
  const bolaProgress = document.getElementById("bola-progress");
  const bolaCollectionBtn = document.getElementById("bola-collection-btn");

  const bolaOverlay = document.getElementById("bola-overlay");
  const bolaOverlayBackdrop = document.getElementById("bola-overlay-backdrop");
  const bolaFocusBall = document.getElementById("bola-focus-ball");
  const bolaMsgText = document.getElementById("bola-msg-text");
  const bolaOverlayActions = document.getElementById("bola-overlay-actions");
  const bolaAgainBtn = document.getElementById("bola-again-btn");
  const bolaCloseBtn = document.getElementById("bola-close-btn");

  const bolaSheet = document.getElementById("bola-sheet");
  const bolaSheetBackdrop = document.getElementById("bola-sheet-backdrop");
  const bolaSheetClose = document.getElementById("bola-sheet-close");
  const bolaSheetList = document.getElementById("bola-sheet-list");
  const bolaResetBtn = document.getElementById("bola-reset-btn");
  const bolaResetConfirm = document.getElementById("bola-reset-confirm");
  const bolaResetYes = document.getElementById("bola-reset-yes");
  const bolaResetNo = document.getElementById("bola-reset-no");

  const bolaBonus = document.getElementById("bola-bonus");
  const bolaBonusBackdrop = document.getElementById("bola-bonus-backdrop");
  const bolaBonusHearts = document.getElementById("bola-bonus-hearts");
  const bolaBonusTitle = document.getElementById("bola-bonus-title");
  const bolaBonusMessage = document.getElementById("bola-bonus-message");
  const bolaBonusClose = document.getElementById("bola-bonus-close");

  let bolaInitDone = false;
  let isAnimating = false;
  let bolaFound = new Set();
  let pendingBolaBonus = false;
  let bolaTimers = [];

  function clearBolaTimers() {
    bolaTimers.forEach((t) => window.clearTimeout(t));
    bolaTimers = [];
  }

  function loadBolaFound() {
    try {
      const raw = window.localStorage.getItem("bolaFound");
      const parsed = raw ? JSON.parse(raw) : [];
      if (Array.isArray(parsed)) {
        bolaFound = new Set(
          parsed.filter(
            (i) => Number.isInteger(i) && i >= 0 && i < BOLA_PESAN.length,
          ),
        );
      }
    } catch {
      bolaFound = new Set();
    }
  }

  function saveBolaFound() {
    try {
      window.localStorage.setItem(
        "bolaFound",
        JSON.stringify(Array.from(bolaFound)),
      );
    } catch {
      // Abaikan jika penyimpanan lokal dibatasi
    }
  }

  function updateBolaProgressUI() {
    bolaProgress.textContent = `Pesan terkumpul: ${bolaFound.size} / ${BOLA_PESAN.length}`;
  }

  function buildBolaPile() {
    bolaPile.innerHTML = "";
    const positions = [
      { left: 16, bottom: 10 },
      { left: 32, bottom: 8 },
      { left: 48, bottom: 9 },
      { left: 64, bottom: 11 },
      { left: 22, bottom: 24 },
      { left: 39, bottom: 22 },
      { left: 55, bottom: 23 },
      { left: 70, bottom: 25 },
      { left: 14, bottom: 36 },
      { left: 30, bottom: 38 },
      { left: 46, bottom: 36 },
      { left: 62, bottom: 38 },
      { left: 26, bottom: 51 },
      { left: 45, bottom: 50 },
    ];

    const frag = document.createDocumentFragment();
    positions.forEach((pos, idx) => {
      const ball = document.createElement("span");
      ball.className = "bola-mini";
      const color = BOLA_WARNA[idx % BOLA_WARNA.length];
      ball.style.left = `${pos.left}%`;
      ball.style.bottom = `${pos.bottom}%`;
      ball.style.setProperty("--ball-color", color);
      ball.style.setProperty("--ball-delay", `${-(idx * 0.35)}s`);
      frag.appendChild(ball);
    });
    bolaPile.appendChild(frag);
  }

  function pickNextBolaMessageIndex() {
    const unfound = [];
    for (let i = 0; i < BOLA_PESAN.length; i++) {
      if (!bolaFound.has(i)) unfound.push(i);
    }
    const pool =
      unfound.length > 0
        ? unfound
        : BOLA_PESAN.map((_, idx) => idx);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function openBolaBonusModal() {
    bolaBonusTitle.textContent = BOLA_BONUS.judul;
    bolaBonusMessage.textContent = BOLA_BONUS.pesan;
    bolaBonusHearts.innerHTML = "";

    if (!prefersReducedMotion) {
      const count = 14;
      for (let i = 0; i < count; i++) {
        const heart = document.createElement("span");
        heart.className = "victory-heart";
        heart.textContent = i % 2 === 0 ? "🤍" : "♥";
        heart.style.left = `${6 + ((i * 7) % 88)}%`;
        heart.style.setProperty("--vh-dur", `${2.8 + (i % 4) * 0.45}s`);
        heart.style.setProperty("--vh-delay", `${(i % 5) * 0.22}s`);
        heart.style.setProperty(
          "--vh-drift",
          `${(i % 2 === 0 ? 1 : -1) * (14 + (i % 3) * 10)}px`,
        );
        heart.style.setProperty(
          "--vh-rot",
          `${(i % 2 === 0 ? 1 : -1) * (20 + i * 6)}deg`,
        );
        bolaBonusHearts.appendChild(heart);
      }
    }

    bolaBonus.hidden = false;
    requestAnimationFrame(() => {
      bolaBonus.classList.add("is-open");
    });
    bolaBonusClose.focus();
  }

  function closeBolaBonusModal() {
    bolaBonus.classList.remove("is-open");
    window.setTimeout(() => {
      bolaBonus.hidden = true;
      bolaBonusHearts.innerHTML = "";
    }, prefersReducedMotion ? 40 : 300);
  }

  function closeBolaOverlay({ spinAgain = false } = {}) {
    bolaOverlay.classList.remove("is-visible");
    window.setTimeout(() => {
      bolaOverlay.hidden = true;
      bolaFocusBall.classList.remove("is-open");
      bolaOverlayActions.classList.remove("is-shown");
      bolaDropBall.classList.remove("is-dropping");

      if (spinAgain) {
        spinBolaMachine();
      } else if (pendingBolaBonus) {
        pendingBolaBonus = false;
        openBolaBonusModal();
      }
    }, prefersReducedMotion ? 40 : 280);
  }

  function spinBolaMachine() {
    if (isAnimating) return;
    isAnimating = true;
    bolaSpinBtn.disabled = true;
    clearBolaTimers();

    const msgIdx = pickNextBolaMessageIndex();
    const color = BOLA_WARNA[Math.floor(Math.random() * BOLA_WARNA.length)];
    const wasComplete = bolaFound.size === BOLA_PESAN.length;

    bolaFound.add(msgIdx);
    saveBolaFound();
    updateBolaProgressUI();
    if (!wasComplete && bolaFound.size === BOLA_PESAN.length) {
      pendingBolaBonus = true;
    }

    bolaMsgText.textContent = BOLA_PESAN[msgIdx];
    bolaDropBall.style.setProperty("--drop-color", color);
    bolaFocusBall.style.setProperty("--focus-color", color);
    bolaFocusBall.classList.remove("is-open");
    bolaOverlayActions.classList.remove("is-shown");

    if (prefersReducedMotion) {
      bolaOverlay.hidden = false;
      requestAnimationFrame(() => {
        bolaOverlay.classList.add("is-visible");
        bolaFocusBall.classList.add("is-open");
        bolaOverlayActions.classList.add("is-shown");
      });
      isAnimating = false;
      bolaSpinBtn.disabled = false;
      return;
    }

    // a) Putar tuas & goyang bola di dalam kaca
    bolaMachine.classList.add("is-spinning", "is-shaking");

    // b) Bola jatuh keluar dari lubang
    bolaTimers.push(
      window.setTimeout(() => {
        bolaMachine.classList.remove("is-shaking");
        bolaDropBall.classList.remove("is-dropping");
        void bolaDropBall.offsetWidth;
        bolaDropBall.classList.add("is-dropping");
      }, 850),
    );

    // c) Overlay gelap & bola membesar ke tengah layar
    bolaTimers.push(
      window.setTimeout(() => {
        bolaMachine.classList.remove("is-spinning");
        bolaOverlay.hidden = false;
        requestAnimationFrame(() => {
          bolaOverlay.classList.add("is-visible");
        });
      }, 1650),
    );

    // d) Bola terbelah dua & kartu pesan muncul
    bolaTimers.push(
      window.setTimeout(() => {
        bolaFocusBall.classList.add("is-open");
      }, 2400),
    );

    // e) Tombol Putar lagi & Tutup muncul, kunci dibuka
    bolaTimers.push(
      window.setTimeout(() => {
        bolaOverlayActions.classList.add("is-shown");
        isAnimating = false;
        bolaSpinBtn.disabled = false;
        bolaAgainBtn.focus();
      }, 3050),
    );
  }

  function renderBolaCollection() {
    bolaSheetList.innerHTML = "";
    const frag = document.createDocumentFragment();
    BOLA_PESAN.forEach((msg, idx) => {
      const li = document.createElement("li");
      const found = bolaFound.has(idx);
      li.className = found
        ? "bola-sheet-item"
        : "bola-sheet-item bola-sheet-item--locked";

      const numSpan = document.createElement("span");
      numSpan.className = "bola-sheet-num";
      numSpan.textContent = `${idx + 1}.`;

      const textSpan = document.createElement("span");
      textSpan.textContent = found ? msg : "🔒 Belum ditemukan";

      li.appendChild(numSpan);
      li.appendChild(textSpan);
      frag.appendChild(li);
    });
    bolaSheetList.appendChild(frag);
  }

  function openBolaSheet() {
    bolaResetConfirm.hidden = true;
    renderBolaCollection();
    bolaSheet.hidden = false;
    requestAnimationFrame(() => {
      bolaSheet.classList.add("is-open");
    });
    bolaSheetClose.focus();
  }

  function closeBolaSheet() {
    bolaSheet.classList.remove("is-open");
    window.setTimeout(() => {
      bolaSheet.hidden = true;
    }, prefersReducedMotion ? 40 : 280);
  }

  function enterBolaScreen() {
    if (!bolaInitDone) {
      bolaInitDone = true;
      loadBolaFound();
      buildBolaPile();
      updateBolaProgressUI();

      bolaBackBtn.addEventListener("click", () => {
        if (history.state && history.state.screen === "bola") {
          history.back();
        } else {
          showScreen("games");
        }
      });

      bolaSpinBtn.addEventListener("click", spinBolaMachine);
      bolaAgainBtn.addEventListener("click", () =>
        closeBolaOverlay({ spinAgain: true }),
      );
      bolaCloseBtn.addEventListener("click", () => closeBolaOverlay());
      bolaOverlayBackdrop.addEventListener("click", () => {
        if (!isAnimating) closeBolaOverlay();
      });

      bolaCollectionBtn.addEventListener("click", openBolaSheet);
      bolaSheetClose.addEventListener("click", closeBolaSheet);
      bolaSheetBackdrop.addEventListener("click", closeBolaSheet);

      bolaResetBtn.addEventListener("click", () => {
        bolaResetConfirm.hidden = !bolaResetConfirm.hidden;
      });
      bolaResetNo.addEventListener("click", () => {
        bolaResetConfirm.hidden = true;
      });
      bolaResetYes.addEventListener("click", () => {
        bolaFound = new Set();
        pendingBolaBonus = false;
        saveBolaFound();
        updateBolaProgressUI();
        renderBolaCollection();
        bolaResetConfirm.hidden = true;
      });

      bolaBonusClose.addEventListener("click", closeBolaBonusModal);
      bolaBonusBackdrop.addEventListener("click", closeBolaBonusModal);
    } else {
      updateBolaProgressUI();
    }
  }

  // =========================================================
  // LOGIKA GAME: TANGKAP HATI
  // =========================================================
  let tangkapInitDone = false;
  let tangkapRunning = false;
  let tangkapPaused = false;
  let tangkapRafId = null;
  let tangkapTimerInterval = null;

  let tangkapScore = 0;
  let tangkapCaughtCount = 0;
  let tangkapTimeLeft = 45;
  let tangkapLives = 3;
  let tangkapElapsed = 0;

  let tangkapSpriteImg = null;
  let tangkapSpriteLoaded = false;
  let tangkapSpriteFailed = false;

  // Elemen DOM
  const tangkapBackBtn = document.getElementById("tangkap-back-btn");
  const tangkapCanvas = document.getElementById("tangkap-canvas");
  const tangkapHud = document.getElementById("tangkap-hud");
  const tangkapScoreText = document.getElementById("tangkap-score-text");
  const tangkapTimerText = document.getElementById("tangkap-timer-text");
  const tangkapLivesContainer = document.getElementById("tangkap-lives");
  const tangkapPauseBtn = document.getElementById("tangkap-pause-btn");
  const tangkapIntroOverlay = document.getElementById("tangkap-intro");
  const tangkapStartBtn = document.getElementById("tangkap-start-btn");
  const tangkapPauseOverlay = document.getElementById("tangkap-pause-overlay");
  const tangkapResumeBtn = document.getElementById("tangkap-resume-btn");
  const tangkapQuitBtn = document.getElementById("tangkap-quit-btn");
  const tangkapFallbackNote = document.getElementById("tangkap-sprite-fallback-note");

  const tangkapResult = document.getElementById("tangkap-result");
  const tangkapResultBackdrop = document.getElementById("tangkap-result-backdrop");
  const tangkapResultHearts = document.getElementById("tangkap-result-hearts");
  const tangkapResultTitle = document.getElementById("tangkap-result-title");
  const tangkapResultMeta = document.getElementById("tangkap-result-meta");
  const tangkapResultRecordBadge = document.getElementById("tangkap-result-record-badge");
  const tangkapResultMessage = document.getElementById("tangkap-result-message");
  const tangkapReplayBtn = document.getElementById("tangkap-replay-btn");
  const tangkapGamesBtn = document.getElementById("tangkap-games-btn");
  const tangkapPanelBtn = document.getElementById("tangkap-panel-btn");

  let tctx = null;
  let cWidth = 360;
  let cHeight = 600;
  let dpr = 1;

  // State Karakter
  const player = {
    x: 180,
    targetX: 180,
    y: 500,
    w: 54,
    h: 72,
    facingLeft: false,
    squash: 1, // untuk efek memantul saat menangkap
  };

  let fallingItems = [];
  let floatingTexts = [];
  let screenShakeTimer = 0;
  let lastSpawnTime = 0;
  let lastFrameTime = 0;
  let keyState = { left: false, right: false };

  function loadTangkapSprite() {
    if (tangkapSpriteImg) return;
    tangkapSpriteImg = new Image();
    tangkapSpriteImg.onload = () => {
      tangkapSpriteLoaded = true;
      tangkapSpriteFailed = false;
      if (tangkapFallbackNote) tangkapFallbackNote.hidden = true;
    };
    tangkapSpriteImg.onerror = () => {
      tangkapSpriteLoaded = false;
      tangkapSpriteFailed = true;
      if (tangkapFallbackNote) tangkapFallbackNote.hidden = false;
    };
    tangkapSpriteImg.src = TANGKAP_SPRITE;
  }

  function resizeTangkapCanvas() {
    if (!tangkapCanvas) return;
    const rect = tangkapCanvas.parentElement.getBoundingClientRect();
    cWidth = Math.max(280, Math.floor(rect.width));
    cHeight = Math.max(360, Math.floor(rect.height));

    dpr = Math.min(window.devicePixelRatio || 1, 2);
    tangkapCanvas.width = cWidth * dpr;
    tangkapCanvas.height = cHeight * dpr;

    tctx = tangkapCanvas.getContext("2d");
    tctx.imageSmoothingEnabled = false;

    // Skala ukuran pemain adaptif (14-16% lebar layar)
    const baseW = Math.max(44, Math.floor(cWidth * 0.15));
    const aspect = (TANGKAP_FRAME && TANGKAP_FRAME.tinggi && TANGKAP_FRAME.lebar)
      ? TANGKAP_FRAME.tinggi / TANGKAP_FRAME.lebar
      : 1.33;
    player.w = baseW;
    player.h = Math.floor(baseW * aspect);
    player.y = cHeight - player.h - 18;
    if (player.x > cWidth - player.w / 2) player.x = cWidth - player.w / 2;
  }

  function startTangkapGame() {
    tangkapScore = 0;
    tangkapCaughtCount = 0;
    tangkapTimeLeft = 45;
    tangkapLives = 3;
    tangkapElapsed = 0;
    fallingItems = [];
    floatingTexts = [];
    screenShakeTimer = 0;
    lastSpawnTime = 0;

    player.x = cWidth / 2;
    player.targetX = cWidth / 2;
    player.squash = 1;

    tangkapScoreText.textContent = "Skor: 0";
    tangkapTimerText.textContent = "Waktu: 45";
    renderTangkapLives();

    tangkapIntroOverlay.setAttribute("hidden", "");
    tangkapPauseOverlay.setAttribute("hidden", "");
    tangkapHud.removeAttribute("hidden");
    tangkapIntroOverlay.hidden = true;
    tangkapPauseOverlay.hidden = true;
    tangkapHud.hidden = false;

    tangkapRunning = true;
    tangkapPaused = false;

    clearInterval(tangkapTimerInterval);
    tangkapTimerInterval = setInterval(() => {
      if (!tangkapRunning || tangkapPaused) return;
      tangkapTimeLeft--;
      tangkapTimerText.textContent = "Waktu: " + tangkapTimeLeft;
      if (tangkapTimeLeft <= 0) {
        endTangkapGame();
      }
    }, 1000);

    lastFrameTime = performance.now();
    cancelAnimationFrame(tangkapRafId);
    tangkapRafId = requestAnimationFrame(tangkapGameLoop);
  }

  function renderTangkapLives() {
    const heartSpans = tangkapLivesContainer.querySelectorAll(".tangkap-heart-icon");
    heartSpans.forEach((span, idx) => {
      if (idx < tangkapLives) {
        span.classList.remove("is-empty");
      } else {
        span.classList.add("is-empty");
      }
    });
  }

  function pauseTangkapGame() {
    if (!tangkapRunning || tangkapPaused) return;
    tangkapPaused = true;
    tangkapPauseOverlay.removeAttribute("hidden");
    tangkapPauseOverlay.hidden = false;
  }

  function resumeTangkapGame() {
    if (!tangkapRunning || !tangkapPaused) return;
    tangkapPaused = false;
    tangkapPauseOverlay.setAttribute("hidden", "");
    tangkapPauseOverlay.hidden = true;
    lastFrameTime = performance.now();
    cancelAnimationFrame(tangkapRafId);
    tangkapRafId = requestAnimationFrame(tangkapGameLoop);
  }

  function stopTangkapGame() {
    tangkapRunning = false;
    tangkapPaused = false;
    clearInterval(tangkapTimerInterval);
    cancelAnimationFrame(tangkapRafId);
    keyState.left = false;
    keyState.right = false;
  }

  function endTangkapGame() {
    stopTangkapGame();
    showTangkapResult();
  }

  function getTangkapBestScore() {
    try {
      const s = localStorage.getItem("tangkapBest");
      return s ? parseInt(s, 10) : 0;
    } catch (_) {
      return 0;
    }
  }

  function saveTangkapBestScore(score) {
    try {
      localStorage.setItem("tangkapBest", String(score));
    } catch (_) {}
  }

  function showTangkapResult() {
    const best = getTangkapBestScore();
    const isNew = tangkapScore > best;
    if (isNew) {
      saveTangkapBestScore(tangkapScore);
    }
    const finalBest = Math.max(best, tangkapScore);

    // Cari pujian bertingkat
    let feedback = TANGKAP_PUJIAN[TANGKAP_PUJIAN.length - 1];
    for (const item of TANGKAP_PUJIAN) {
      if (tangkapScore >= item.min) {
        feedback = item;
        break;
      }
    }

    tangkapResultTitle.textContent = feedback.judul;
    tangkapResultMeta.textContent = `Skor: ${tangkapScore} • Tertangkap: ${tangkapCaughtCount} hati • Terbaik: ${finalBest}`;
    tangkapResultRecordBadge.hidden = !isNew;
    tangkapResultMessage.textContent = feedback.pesan;

    tangkapResult.classList.remove("is-visible");
    tangkapResult.hidden = false;
    requestAnimationFrame(() => {
      tangkapResult.classList.add("is-visible");
    });

    if (!prefersReducedMotion && tangkapScore >= 20) {
      spawnTangkapResultHearts();
    }
  }

  function spawnTangkapResultHearts() {
    tangkapResultHearts.innerHTML = "";
    const symbols = ["💗", "💖", "🌸", "🤍", "✨"];
    for (let i = 0; i < 20; i++) {
      const span = document.createElement("span");
      span.className = "victory-heart";
      span.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      span.style.left = Math.random() * 100 + "%";
      span.style.animationDelay = (Math.random() * 2) + "s";
      span.style.fontSize = (0.9 + Math.random() * 0.8) + "rem";
      tangkapResultHearts.appendChild(span);
    }
    // Hapus otomatis setelah beberapa detik
    setTimeout(() => {
      tangkapResultHearts.innerHTML = "";
    }, 5500);
  }

  function closeTangkapResult() {
    tangkapResult.classList.remove("is-visible");
    setTimeout(() => {
      tangkapResult.hidden = true;
      tangkapResultHearts.innerHTML = "";
    }, 280);
  }

  // --- Game Loop: Update & Draw ---
  function tangkapGameLoop(timestamp) {
    if (!tangkapRunning || tangkapPaused) return;

    const dt = Math.min((timestamp - lastFrameTime) / 1000, 0.1);
    lastFrameTime = timestamp;
    tangkapElapsed += dt;

    // Keyboard controls
    const keySpeed = cWidth * 1.1;
    if (keyState.left) {
      player.targetX -= keySpeed * dt;
    }
    if (keyState.right) {
      player.targetX += keySpeed * dt;
    }

    // Batas targetX
    const halfW = player.w / 2;
    if (player.targetX < halfW) player.targetX = halfW;
    if (player.targetX > cWidth - halfW) player.targetX = cWidth - halfW;

    // Gerak halus lerp
    const prevX = player.x;
    player.x += (player.targetX - player.x) * Math.min(1, 14 * dt);
    if (Math.abs(player.x - prevX) > 0.4) {
      player.facingLeft = player.x < prevX;
    }

    // Pemulihan efek squash
    if (player.squash < 1) {
      player.squash = Math.min(1, player.squash + dt * 4);
    }

    // Spawn falling items
    // Frekuensi spawn bertambah cepat seiring waktu
    const spawnInterval = Math.max(0.42, 0.95 - (tangkapElapsed / 45) * 0.45);
    if (timestamp - lastSpawnTime > spawnInterval * 1000) {
      lastSpawnTime = timestamp;

      // Tipe: pink (biasa), gold (langka, 1 dari 12), broken (langka, setelah 10 detik)
      let type = "pink";
      const rand = Math.random();
      if (tangkapElapsed > 10 && rand < 0.15) {
        type = "broken";
      } else if (rand > 0.9) {
        type = "gold";
      }

      const fallSpeed = (160 + (tangkapElapsed / 45) * 110) * (0.88 + Math.random() * 0.25);
      const size = type === "gold" ? 36 : 32;

      fallingItems.push({
        x: Math.random() * (cWidth - size * 2) + size,
        y: -size,
        size: size,
        speed: fallSpeed,
        type: type,
        rotation: (Math.random() - 0.5) * 0.3,
      });
    }

    // Update items & deteksi tabrakan
    const pTop = player.y;
    const pBottom = player.y + player.h;
    const pLeft = player.x - halfW;
    const pRight = player.x + halfW;

    for (let i = fallingItems.length - 1; i >= 0; i--) {
      const it = fallingItems[i];
      it.y += it.speed * dt;

      // Tabrakan dengan bagian atas karakter (hitbox ramah)
      const hitMargin = 8;
      const itRadius = it.size * 0.65;
      const isOverlapX = it.x + itRadius >= pLeft - hitMargin && it.x - itRadius <= pRight + hitMargin;
      const isOverlapY = it.y + itRadius >= pTop && it.y - itRadius <= pTop + player.h * 0.45;

      if (isOverlapX && isOverlapY) {
        // Tertangkap!
        player.squash = 0.82; // efek memantul
        if (it.type === "pink") {
          tangkapScore += 1;
          tangkapCaughtCount++;
          floatingTexts.push({ x: it.x, y: it.y, text: "+1", color: "#c85d79", opacity: 1 });
        } else if (it.type === "gold") {
          tangkapScore += 5;
          tangkapCaughtCount++;
          floatingTexts.push({ x: it.x, y: it.y, text: "+5 ✨", color: "#d4972c", opacity: 1 });
        } else if (it.type === "broken") {
          tangkapLives = Math.max(0, tangkapLives - 1);
          renderTangkapLives();
          screenShakeTimer = 0.25;
          floatingTexts.push({ x: it.x, y: it.y, text: "-1 💔", color: "#6b4f4f", opacity: 1 });
          if (tangkapLives <= 0) {
            endTangkapGame();
            return;
          }
        }
        tangkapScoreText.textContent = "Skor: " + tangkapScore;
        fallingItems.splice(i, 1);
        continue;
      }

      // Lolos ke bawah tanah
      if (it.y > cHeight + it.size) {
        fallingItems.splice(i, 1);
      }
    }

    // Update floating texts
    for (let i = floatingTexts.length - 1; i >= 0; i--) {
      const ft = floatingTexts[i];
      ft.y -= dt * 45;
      ft.opacity -= dt * 1.5;
      if (ft.opacity <= 0) {
        floatingTexts.splice(i, 1);
      }
    }

    // Screen shake timer
    if (screenShakeTimer > 0) {
      screenShakeTimer -= dt;
    }

    // RENDER CANVAS
    renderTangkapCanvas();

    tangkapRafId = requestAnimationFrame(tangkapGameLoop);
  }

  function renderTangkapCanvas() {
    if (!tctx) return;

    tctx.save();
    tctx.scale(dpr, dpr);

    // Efek getar layar jika ada
    if (screenShakeTimer > 0) {
      const shakeAmt = 6 * (screenShakeTimer / 0.25);
      const sx = (Math.random() - 0.5) * shakeAmt;
      const sy = (Math.random() - 0.5) * shakeAmt;
      tctx.translate(sx, sy);
    }

    // Background halus
    const bgGrad = tctx.createLinearGradient(0, 0, 0, cHeight);
    bgGrad.addColorStop(0, "#fffaf7");
    bgGrad.addColorStop(0.75, "#faedf0");
    bgGrad.addColorStop(1, "#f4dfe4");
    tctx.fillStyle = bgGrad;
    tctx.fillRect(0, 0, cWidth, cHeight);

    // Lantai pixel sederhana di bawah
    const floorY = cHeight - 14;
    tctx.fillStyle = "rgba(169, 95, 106, 0.12)";
    tctx.fillRect(0, floorY, cWidth, 14);
    tctx.fillStyle = "rgba(169, 95, 106, 0.22)";
    for (let x = 0; x < cWidth; x += 16) {
      tctx.fillRect(x, floorY, 8, 2);
    }

    // Bayangan pemain di lantai
    tctx.fillStyle = "rgba(169, 95, 106, 0.18)";
    tctx.beginPath();
    tctx.ellipse(player.x, player.y + player.h - 2, player.w * 0.42, 5, 0, 0, Math.PI * 2);
    tctx.fill();

    // Gambar Pemain (Sprite atau Fallback Kotak Pixel)
    tctx.save();
    tctx.translate(player.x, player.y + player.h);
    tctx.scale(player.facingLeft ? -1 : 1, player.squash);

    if (tangkapSpriteLoaded && tangkapSpriteImg) {
      tctx.drawImage(
        tangkapSpriteImg,
        -player.w / 2,
        -player.h,
        player.w,
        player.h
      );
    } else {
      // Fallback karakter kotak pixel sederhana romantis
      const pw = player.w;
      const ph = player.h;
      tctx.fillStyle = "#e5989b";
      tctx.fillRect(-pw / 2, -ph, pw, ph);
      tctx.fillStyle = "#6b705c";
      tctx.fillRect(-pw / 2 + 6, -ph + 12, 6, 8);
      tctx.fillRect(pw / 2 - 12, -ph + 12, 6, 8);
      tctx.fillStyle = "#b5838d";
      tctx.fillRect(-pw / 2 + 10, -ph + 26, pw - 20, 4);
    }
    tctx.restore();

    // Gambar Falling Items (Hati Pixel Mencolok dengan Outline & Kilau)
    fallingItems.forEach((it) => {
      tctx.save();
      tctx.translate(it.x, it.y);
      tctx.rotate(it.rotation);
      drawTangkapPixelHeart(tctx, it.type, it.size, tangkapElapsed);
      tctx.restore();
    });

    // Gambar Floating Texts
    floatingTexts.forEach((ft) => {
      tctx.save();
      tctx.globalAlpha = Math.max(0, ft.opacity);
      tctx.fillStyle = ft.color;
      tctx.font = "bold 16px sans-serif";
      tctx.textAlign = "center";
      tctx.fillText(ft.text, ft.x, ft.y);
      tctx.restore();
    });

    tctx.restore();
  }

  const TANGKAP_HEART_GRID = [
    "..OOO...OOO..",
    ".OFFFO.OFFFO.",
    "OFHFFFOFFFFSO",
    "OFHFFFFFFFFSO",
    "OFFFFFFFFFFSO",
    ".OFFFFFFFFSO.",
    "..OFFFFFFSO..",
    "...OFFFFSO...",
    "....OFFSO....",
    ".....OSO.....",
    "......O......",
  ];

  const TANGKAP_BROKEN_GRID = [
    "..OOO...OOO..",
    ".OFFFO.OFFFO.",
    "OFHFFO.OFFFSO",
    "OFFFCO.CFFSSO",
    "OFFCC...CFSSO",
    ".OFC..C..FSO.",
    "..OC.CC.FSO..",
    "...O.C.FSO...",
    "....O.CSO....",
    ".....O.O.....",
    "......O......",
  ];

  function drawTangkapPixelHeart(ctx, type, size, elapsed) {
    const palette =
      type === "gold"
        ? {
            O: "#7a4300",
            F: "#ffcb1f",
            S: "#e08e00",
            H: "#fff9cc",
            glow: "rgba(255, 204, 31, 0.42)",
          }
        : type === "broken"
          ? {
              O: "#231419",
              F: "#5e434d",
              S: "#3d2930",
              H: "#a38791",
              C: "#fff4f7",
              glow: "rgba(45, 22, 30, 0.22)",
            }
          : {
              O: "#6e1431",
              F: "#ff3370",
              S: "#cf154d",
              H: "#ffd9e6",
              glow: "rgba(255, 51, 112, 0.25)",
            };

    // Aura lembut agar kontras dengan latar pastel
    const pulse = type === "gold" ? 1 + Math.sin(elapsed * 7) * 0.12 : 1;
    ctx.fillStyle = palette.glow;
    ctx.beginPath();
    ctx.arc(0, 0, size * 0.62 * pulse, 0, Math.PI * 2);
    ctx.fill();

    const grid = type === "broken" ? TANGKAP_BROKEN_GRID : TANGKAP_HEART_GRID;
    const cols = grid[0].length;
    const rows = grid.length;
    const px = size / cols;
    const startX = -size / 2;
    const startY = -(rows * px) / 2;

    for (let r = 0; r < rows; r++) {
      const line = grid[r];
      for (let c = 0; c < cols; c++) {
        const ch = line[c];
        if (ch === ".") continue;
        ctx.fillStyle = palette[ch] || palette.F;
        ctx.fillRect(
          Math.round(startX + c * px),
          Math.round(startY + r * px),
          Math.ceil(px),
          Math.ceil(px),
        );
      }
    }

    // Kilau pixel berkedip untuk hati emas
    if (type === "gold") {
      const sparkleAlpha = 0.55 + Math.sin(elapsed * 9) * 0.45;
      ctx.fillStyle = `rgba(255, 255, 240, ${sparkleAlpha.toFixed(2)})`;
      const sx = size * 0.36;
      const sy = -size * 0.36;
      ctx.fillRect(sx - 1, sy - 5, 2, 10);
      ctx.fillRect(sx - 5, sy - 1, 10, 2);
    }
  }

  // --- Setup Kontrol Sentuh & Keyboard ---
  function initTangkapControls() {
    function setTargetFromClientX(clientX) {
      if (!tangkapCanvas) return;
      const rect = tangkapCanvas.getBoundingClientRect();
      const x = clientX - rect.left;
      player.targetX = Math.max(player.w / 2, Math.min(cWidth - player.w / 2, x));
    }

    // Touch events (non-passive agar preventDefault bekerja cegah scroll & zoom Safari)
    tangkapCanvas.addEventListener(
      "touchstart",
      (e) => {
        if (!tangkapRunning || tangkapPaused) return;
        e.preventDefault();
        if (e.touches && e.touches[0]) {
          setTargetFromClientX(e.touches[0].clientX);
        }
      },
      { passive: false }
    );

    tangkapCanvas.addEventListener(
      "touchmove",
      (e) => {
        if (!tangkapRunning || tangkapPaused) return;
        e.preventDefault();
        if (e.touches && e.touches[0]) {
          setTargetFromClientX(e.touches[0].clientX);
        }
      },
      { passive: false }
    );

    // Mouse drag support untuk testing di browser PC
    let isMouseDown = false;
    tangkapCanvas.addEventListener("mousedown", (e) => {
      if (!tangkapRunning || tangkapPaused) return;
      isMouseDown = true;
      setTargetFromClientX(e.clientX);
    });

    window.addEventListener("mousemove", (e) => {
      if (!isMouseDown || !tangkapRunning || tangkapPaused) return;
      setTargetFromClientX(e.clientX);
    });

    window.addEventListener("mouseup", () => {
      isMouseDown = false;
    });

    // Keyboard support (ArrowLeft, ArrowRight, A, D)
    window.addEventListener("keydown", (e) => {
      if (currentScreen !== "tangkap" || !tangkapRunning || tangkapPaused) return;
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        keyState.left = true;
      }
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        keyState.right = true;
      }
    });

    window.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft" || e.key === "a" || e.key === "A") {
        keyState.left = false;
      }
      if (e.key === "ArrowRight" || e.key === "d" || e.key === "D") {
        keyState.right = false;
      }
    });

    // Jeda otomatis jika tab/aplikasi tidak aktif (hanya saat game aktif berjalan)
    document.addEventListener("visibilitychange", () => {
      if (document.hidden && tangkapRunning && !tangkapPaused && currentScreen === "tangkap") {
        pauseTangkapGame();
      }
    });

    window.addEventListener("resize", () => {
      if (currentScreen === "tangkap") {
        resizeTangkapCanvas();
        if (!tangkapRunning) {
          player.x = cWidth / 2;
          player.targetX = cWidth / 2;
          renderTangkapCanvas();
        }
      }
    });
  }

  function enterTangkapScreen() {
    loadTangkapSprite();

    if (!tangkapInitDone) {
      tangkapInitDone = true;
      initTangkapControls();

      tangkapBackBtn.addEventListener("click", () => {
        stopTangkapGame();
        if (history.state && history.state.screen === "tangkap") {
          history.back();
        } else {
          showScreen("games");
        }
      });

      tangkapStartBtn.addEventListener("click", () => {
        startTangkapGame();
      });

      tangkapPauseBtn.addEventListener("click", () => {
        pauseTangkapGame();
      });

      tangkapResumeBtn.addEventListener("click", () => {
        resumeTangkapGame();
      });

      tangkapQuitBtn.addEventListener("click", () => {
        stopTangkapGame();
        tangkapPauseOverlay.setAttribute("hidden", "");
        tangkapHud.setAttribute("hidden", "");
        tangkapIntroOverlay.removeAttribute("hidden");
        tangkapPauseOverlay.hidden = true;
        tangkapHud.hidden = true;
        tangkapIntroOverlay.hidden = false;
      });

      tangkapReplayBtn.addEventListener("click", () => {
        closeTangkapResult();
        startTangkapGame();
      });

      tangkapGamesBtn.addEventListener("click", () => {
        closeTangkapResult();
        showScreen("games");
      });

      tangkapPanelBtn.addEventListener("click", () => {
        closeTangkapResult();
        showScreen("panel");
      });

      tangkapResultBackdrop.addEventListener("click", () => {
        // Jangan tutup saat klik backdrop agar pilihan tombol jelas
      });
    }

    // Reset ke layar intro awal setiap kali masuk
    stopTangkapGame();
    tangkapHud.setAttribute("hidden", "");
    tangkapPauseOverlay.setAttribute("hidden", "");
    tangkapIntroOverlay.removeAttribute("hidden");
    tangkapHud.hidden = true;
    tangkapPauseOverlay.hidden = true;
    tangkapIntroOverlay.hidden = false;

    requestAnimationFrame(() => {
      resizeTangkapCanvas();
      player.x = cWidth / 2;
      player.targetX = cWidth / 2;
      renderTangkapCanvas();
    });
  }

  // =========================================================
  // LOGIKA FITUR: PHOTOBOOTH DIGITAL
  // =========================================================
  let pbInitDone = false;
  let pbStream = null;
  let pbFacingMode = "user";
  let pbTimerSec = 3;
  let pbFilter = "normal";
  let pbSelectedIndex = 0;
  let pbPhotos = Array(PB_JUMLAH).fill(null);
  let pbActiveColor = PB_WARNA_STRIP[0];
  let pbIsCapturing = false;
  let pbCountdownTimer = null;
  let pbUndoSnapshot = null;
  let pbUndoTimer = null;

  const pbBackBtn = document.getElementById("pb-back-btn");
  const pbVideo = document.getElementById("pb-video");
  const pbFlash = document.getElementById("pb-flash");
  const pbCountdown = document.getElementById("pb-countdown");
  const pbCountdownNum = document.getElementById("pb-countdown-num");
  const pbSwitchCamBtn = document.getElementById("pb-switch-cam-btn");
  const pbPermCard = document.getElementById("pb-perm-card");
  const pbPermText = document.getElementById("pb-perm-text");
  const pbEnableCamBtn = document.getElementById("pb-enable-cam-btn");
  const pbFileInput = document.getElementById("pb-file-input");
  const pbRetakeHint = document.getElementById("pb-retake-hint");
  const pbShutterBtn = document.getElementById("pb-shutter-btn");
  const pbStripPaper = document.getElementById("pb-strip-paper");
  const pbFramesEl = document.getElementById("pb-frames");
  const pbCaptionInput = document.getElementById("pb-caption-input");
  const pbStripDateEl = document.getElementById("pb-strip-date");
  const pbColorsEl = document.getElementById("pb-colors");
  const pbSaveBtn = document.getElementById("pb-save-btn");
  const pbClearAllBtn = document.getElementById("pb-clear-all-btn");
  const pbClearConfirm = document.getElementById("pb-clear-confirm");
  const pbClearYes = document.getElementById("pb-clear-yes");
  const pbClearNo = document.getElementById("pb-clear-no");
  const pbSaveOverlay = document.getElementById("pb-save-overlay");
  const pbSaveBackdrop = document.getElementById("pb-save-backdrop");
  const pbSaveClose = document.getElementById("pb-save-close");
  const pbSaveImg = document.getElementById("pb-save-img");
  const pbDownloadLink = document.getElementById("pb-download-link");
  const pbUndoToast = document.getElementById("pb-undo-toast");
  const pbUndoBtn = document.getElementById("pb-undo-btn");

  function formatIndonesianDate(date) {
    try {
      return new Intl.DateTimeFormat("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(date);
    } catch (_) {
      const bulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember",
      ];
      return `${date.getDate()} ${bulan[date.getMonth()]} ${date.getFullYear()}`;
    }
  }

  function formatIsoDate(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, "0");
    const d = String(date.getDate()).padStart(2, "0");
    return `${y}-${m}-${d}`;
  }

  function stopPhotoboothCamera() {
    if (pbCountdownTimer) {
      clearInterval(pbCountdownTimer);
      pbCountdownTimer = null;
    }
    pbIsCapturing = false;
    if (pbCountdown) pbCountdown.hidden = true;

    if (pbStream) {
      pbStream.getTracks().forEach((track) => {
        try {
          track.stop();
        } catch (_) {}
      });
      pbStream = null;
    }
    if (pbVideo) {
      pbVideo.srcObject = null;
    }
    if (pbSwitchCamBtn) pbSwitchCamBtn.hidden = true;
    if (pbPermCard) pbPermCard.hidden = false;
  }

  async function startPhotoboothCamera(facing = pbFacingMode) {
    if (!window.isSecureContext && !["localhost", "127.0.0.1"].includes(location.hostname)) {
      pbPermText.textContent =
        "Kamera membutuhkan koneksi aman (HTTPS). Kamu tetap bisa pakai tombol 'Pilih / ambil foto' di bawah ya 🤍";
      pbEnableCamBtn.hidden = true;
      return;
    }

    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      pbPermText.textContent =
        "Browser ini belum mendukung kamera langsung. Kamu bisa pakai tombol 'Pilih / ambil foto' di bawah ya 🤍";
      pbEnableCamBtn.hidden = true;
      return;
    }

    // Hentikan stream lama sebelum menyalakan yang baru
    if (pbStream) {
      pbStream.getTracks().forEach((t) => {
        try { t.stop(); } catch (_) {}
      });
      pbStream = null;
    }

    try {
      pbStream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: facing,
          width: { ideal: 1280 },
          height: { ideal: 960 },
        },
        audio: false,
      });

      pbFacingMode = facing;
      pbVideo.srcObject = pbStream;
      pbVideo.classList.toggle("is-mirrored", pbFacingMode === "user");
      await pbVideo.play().catch(() => {});

      pbPermCard.hidden = true;
      pbEnableCamBtn.hidden = false;

      // Tampilkan tombol ganti kamera jika perangkat punya >1 input video
      if (navigator.mediaDevices.enumerateDevices) {
        try {
          const devices = await navigator.mediaDevices.enumerateDevices();
          const cams = devices.filter((d) => d.kind === "videoinput");
          pbSwitchCamBtn.hidden = cams.length < 2;
        } catch (_) {
          pbSwitchCamBtn.hidden = false;
        }
      } else {
        pbSwitchCamBtn.hidden = false;
      }
    } catch (err) {
      let msg =
        "Kamera tidak bisa dibuka saat ini. Kamu tetap bisa memilih foto lewat tombol di bawah 🤍";
      if (err && (err.name === "NotAllowedError" || err.name === "PermissionDeniedError")) {
        msg =
          "Izin kamera ditolak. Aktifkan lewat Pengaturan > Safari > Kamera, lalu muat ulang halaman ini.";
      } else if (err && (err.name === "NotFoundError" || err.name === "DevicesNotFoundError")) {
        msg = "Kamera tidak ditemukan di perangkat ini. Gunakan 'Pilih / ambil foto' di bawah ya 🤍";
      } else if (err && (err.name === "NotReadableError" || err.name === "TrackStartError")) {
        msg = "Kamera sedang dipakai oleh aplikasi lain. Tutup aplikasi tersebut lalu coba lagi ya.";
      }
      pbPermText.textContent = msg;
      pbPermCard.hidden = false;
    }
  }

  function applyPixelFilter(ctx, width, height, filterName) {
    if (filterName === "normal") return;
    const imgData = ctx.getImageData(0, 0, width, height);
    const data = imgData.data;

    if (filterName === "bw") {
      for (let i = 0; i < data.length; i += 4) {
        const lum = Math.round(0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2]);
        data[i] = lum;
        data[i + 1] = lum;
        data[i + 2] = lum;
      }
    } else if (filterName === "sepia") {
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        data[i] = Math.min(255, Math.round(r * 0.393 + g * 0.769 + b * 0.189));
        data[i + 1] = Math.min(255, Math.round(r * 0.349 + g * 0.686 + b * 0.168));
        data[i + 2] = Math.min(255, Math.round(r * 0.272 + g * 0.534 + b * 0.131));
      }
    }

    ctx.putImageData(imgData, 0, 0);
  }

  function captureSourceToDataUrl(source, srcW, srcH, shouldMirror) {
    const targetRatio = 4 / 3;
    const srcRatio = srcW / srcH;
    let sx = 0, sy = 0, sw = srcW, sh = srcH;

    if (srcRatio > targetRatio) {
      sw = srcH * targetRatio;
      sx = (srcW - sw) / 2;
    } else if (srcRatio < targetRatio) {
      sh = srcW / targetRatio;
      sy = (srcH - sh) / 2;
    }

    const outW = Math.min(960, Math.round(sw));
    const outH = Math.round(outW / targetRatio);

    const canvas = document.createElement("canvas");
    canvas.width = outW;
    canvas.height = outH;
    const ctx = canvas.getContext("2d");

    ctx.save();
    if (shouldMirror) {
      ctx.translate(outW, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(source, sx, sy, sw, sh, 0, 0, outW, outH);
    ctx.restore();

    applyPixelFilter(ctx, outW, outH, pbFilter);
    return canvas.toDataURL("image/jpeg", 0.85);
  }

  function triggerPbFlash() {
    if (prefersReducedMotion || !pbFlash) return;
    pbFlash.classList.add("is-flashing");
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        pbFlash.classList.remove("is-flashing");
      });
    });
  }

  function insertCapturedPhoto(dataUrl) {
    let targetIdx = pbSelectedIndex;
    if (targetIdx === null || targetIdx < 0 || targetIdx >= PB_JUMLAH) {
      const firstEmpty = pbPhotos.findIndex((p) => !p);
      targetIdx = firstEmpty !== -1 ? firstEmpty : 0;
    }

    pbPhotos[targetIdx] = dataUrl;
    pbShutterBtn.classList.remove("is-highlighted");

    // Pilih bingkai kosong berikutnya; jika semua penuh, null
    const nextEmpty = pbPhotos.findIndex((p, idx) => !p && idx > targetIdx);
    const anyEmpty = nextEmpty !== -1 ? nextEmpty : pbPhotos.findIndex((p) => !p);
    pbSelectedIndex = anyEmpty !== -1 ? anyEmpty : null;

    renderPbFrames();
  }

  function takePhotoboothPhoto() {
    if (!pbStream || !pbVideo.videoWidth) {
      showPanelToast("Nyalakan kamera atau pilih foto dulu ya 🤍");
      return;
    }
    if (pbIsCapturing) return;

    const doCapture = () => {
      triggerPbFlash();
      const dataUrl = captureSourceToDataUrl(
        pbVideo,
        pbVideo.videoWidth,
        pbVideo.videoHeight,
        pbFacingMode === "user",
      );
      insertCapturedPhoto(dataUrl);
      pbIsCapturing = false;
    };

    if (pbTimerSec === 0) {
      pbIsCapturing = true;
      doCapture();
      return;
    }

    pbIsCapturing = true;
    let remaining = pbTimerSec;
    pbCountdownNum.textContent = String(remaining);
    pbCountdown.hidden = false;

    pbCountdownTimer = setInterval(() => {
      remaining--;
      if (remaining > 0) {
        // Restart pop animation
        pbCountdownNum.style.animation = "none";
        void pbCountdownNum.offsetWidth;
        pbCountdownNum.style.animation = "";
        pbCountdownNum.textContent = String(remaining);
      } else {
        clearInterval(pbCountdownTimer);
        pbCountdownTimer = null;
        pbCountdown.hidden = true;
        doCapture();
      }
    }, 1000);
  }

  function showPbUndoToast(index, dataUrl) {
    clearTimeout(pbUndoTimer);
    pbUndoSnapshot = { index, dataUrl };
    pbUndoToast.hidden = false;
    requestAnimationFrame(() => {
      pbUndoToast.classList.add("is-visible");
    });

    pbUndoTimer = setTimeout(() => {
      hidePbUndoToast();
    }, 4000);
  }

  function hidePbUndoToast() {
    clearTimeout(pbUndoTimer);
    pbUndoToast.classList.remove("is-visible");
    setTimeout(() => {
      pbUndoToast.hidden = true;
      pbUndoSnapshot = null;
    }, 260);
  }

  function renderPbFrames() {
    pbFramesEl.innerHTML = "";

    for (let i = 0; i < PB_JUMLAH; i++) {
      const photo = pbPhotos[i];
      const isSelected = pbSelectedIndex === i;

      const frame = document.createElement("div");
      frame.className = "pb-frame";
      if (photo) frame.classList.add("is-filled");
      if (isSelected) frame.classList.add("is-selected");
      frame.setAttribute("role", "listitem");
      frame.setAttribute("tabindex", "0");
      frame.setAttribute(
        "aria-label",
        photo ? `Bingkai ${i + 1} terisi` : `Bingkai ${i + 1} kosong`,
      );

      frame.addEventListener("click", () => {
        pbSelectedIndex = i;
        pbShutterBtn.classList.remove("is-highlighted");
        renderPbFrames();
      });

      frame.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          pbSelectedIndex = i;
          renderPbFrames();
        }
      });

      if (photo) {
        const img = document.createElement("img");
        img.src = photo;
        img.alt = `Foto kenangan ${i + 1}`;
        img.className = "pb-frame-img";
        frame.appendChild(img);

        const actions = document.createElement("div");
        actions.className = "pb-frame-actions";

        const retakeBtn = document.createElement("button");
        retakeBtn.type = "button";
        retakeBtn.className = "pb-frame-btn";
        retakeBtn.textContent = "↻";
        retakeBtn.setAttribute("aria-label", `Foto ulang bingkai ${i + 1}`);
        retakeBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          pbSelectedIndex = i;
          pbShutterBtn.classList.add("is-highlighted");
          renderPbFrames();
        });

        const delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "pb-frame-btn";
        delBtn.textContent = "🗑";
        delBtn.setAttribute("aria-label", `Hapus foto bingkai ${i + 1}`);
        delBtn.addEventListener("click", (e) => {
          e.stopPropagation();
          const oldUrl = pbPhotos[i];
          frame.classList.add("is-clearing");
          setTimeout(() => {
            pbPhotos[i] = null;
            pbSelectedIndex = i;
            pbShutterBtn.classList.remove("is-highlighted");
            renderPbFrames();
            showPbUndoToast(i, oldUrl);
          }, prefersReducedMotion ? 50 : 200);
        });

        actions.appendChild(retakeBtn);
        actions.appendChild(delBtn);
        frame.appendChild(actions);
      } else {
        const num = document.createElement("span");
        num.className = "pb-frame-num";
        num.textContent = String(i + 1);
        frame.appendChild(num);
      }

      pbFramesEl.appendChild(frame);
    }

    const selectedIsFilled =
      pbSelectedIndex !== null && Boolean(pbPhotos[pbSelectedIndex]);
    pbRetakeHint.hidden = !selectedIsFilled;
  }

  function applyPbStripColor(colorObj) {
    pbActiveColor = colorObj;
    pbStripPaper.style.setProperty("--pb-paper-bg", colorObj.bg);
    pbStripPaper.style.setProperty("--pb-paper-text", colorObj.text);
    pbStripPaper.style.setProperty("--pb-paper-muted", colorObj.muted);
    pbStripPaper.style.setProperty("--pb-paper-border", colorObj.border);

    pbColorsEl.querySelectorAll(".pb-color-chip").forEach((chip) => {
      const active = chip.dataset.colorId === colorObj.id;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-pressed", String(active));
    });
  }

  function renderPbColorChips() {
    pbColorsEl.innerHTML = "";
    PB_WARNA_STRIP.forEach((c) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "pb-color-chip";
      btn.dataset.colorId = c.id;
      btn.style.backgroundColor = c.bg;
      btn.setAttribute("aria-label", `Warna strip ${c.nama}`);
      btn.addEventListener("click", () => applyPbStripColor(c));
      pbColorsEl.appendChild(btn);
    });
    applyPbStripColor(pbActiveColor);
  }

  function loadImageFromDataUrl(url) {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = url;
    });
  }

  async function savePhotoboothStrip() {
    const filledPhotos = pbPhotos.filter(Boolean);
    if (filledPhotos.length === 0) {
      showPanelToast("Ambil minimal satu foto dulu ya 🤍");
      return;
    }

    const stripWidth = 800;
    const padX = 56;
    const padTop = 56;
    const gap = 28;
    const frameW = stripWidth - padX * 2;
    const frameH = Math.round(frameW * (3 / 4));
    const footerH = 148;
    const stripHeight =
      padTop +
      filledPhotos.length * frameH +
      Math.max(0, filledPhotos.length - 1) * gap +
      footerH;

    const canvas = document.createElement("canvas");
    canvas.width = stripWidth;
    canvas.height = stripHeight;
    const ctx = canvas.getContext("2d");

    // Kertas strip
    ctx.fillStyle = pbActiveColor.bg;
    ctx.fillRect(0, 0, stripWidth, stripHeight);

    // Border tipis kertas
    ctx.strokeStyle = pbActiveColor.border;
    ctx.lineWidth = 4;
    ctx.strokeRect(2, 2, stripWidth - 4, stripHeight - 4);

    // Gambar tiap foto terisi secara vertikal
    const loadedImgs = await Promise.all(filledPhotos.map(loadImageFromDataUrl));
    loadedImgs.forEach((img, idx) => {
      const y = padTop + idx * (frameH + gap);
      ctx.drawImage(img, padX, y, frameW, frameH);
    });

    // Keterangan & tanggal di bagian bawah
    const caption = (pbCaptionInput.value || PB_KETERANGAN).trim();
    const dateStr = formatIndonesianDate(new Date());
    const textCenterY =
      padTop +
      filledPhotos.length * frameH +
      Math.max(0, filledPhotos.length - 1) * gap +
      62;

    ctx.textAlign = "center";
    ctx.fillStyle = pbActiveColor.text;
    ctx.font = '600 42px "Caveat", cursive, serif';
    ctx.fillText(caption, stripWidth / 2, textCenterY);

    ctx.fillStyle = pbActiveColor.muted;
    ctx.font = '500 22px "Inter", sans-serif';
    ctx.fillText(dateStr, stripWidth / 2, textCenterY + 42);

    const fileName = `photobooth-${formatIsoDate(new Date())}.png`;

    canvas.toBlob(async (blob) => {
      if (!blob) return;

      // 1. Coba Web Share API dengan File (ideal untuk iOS Safari)
      if (typeof navigator.canShare === "function" && typeof navigator.share === "function") {
        try {
          const file = new File([blob], fileName, { type: "image/png" });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({
              files: [file],
              title: "Photobooth Strip",
            });
            return;
          }
        } catch (err) {
          if (err && err.name === "AbortError") return;
        }
      }

      // 2. Fallback: tampilkan overlay <img> + tautan unduh
      const dataUrl = canvas.toDataURL("image/png");
      pbSaveImg.src = dataUrl;
      pbDownloadLink.href = dataUrl;
      pbDownloadLink.download = fileName;
      pbSaveOverlay.hidden = false;
      pbSaveOverlay.classList.add("is-open");
    }, "image/png");
  }

  function closePbSaveOverlay() {
    pbSaveOverlay.classList.remove("is-open");
    pbSaveOverlay.hidden = true;
  }

  function enterPhotoboothScreen() {
    if (!pbInitDone) {
      pbInitDone = true;

      pbCaptionInput.value = PB_KETERANGAN;
      pbStripDateEl.textContent = formatIndonesianDate(new Date());
      renderPbColorChips();
      renderPbFrames();

      pbBackBtn.addEventListener("click", () => {
        stopPhotoboothCamera();
        if (history.state && history.state.screen === "photobooth") {
          history.back();
        } else {
          showScreen("panel");
        }
      });

      pbEnableCamBtn.addEventListener("click", () => {
        startPhotoboothCamera(pbFacingMode);
      });

      pbSwitchCamBtn.addEventListener("click", () => {
        const nextMode = pbFacingMode === "user" ? "environment" : "user";
        startPhotoboothCamera(nextMode);
      });

      pbFileInput.addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async (ev) => {
          try {
            const img = await loadImageFromDataUrl(ev.target.result);
            const dataUrl = captureSourceToDataUrl(
              img,
              img.naturalWidth,
              img.naturalHeight,
              false,
            );
            insertCapturedPhoto(dataUrl);
          } catch (_) {
            showPanelToast("Gagal membaca foto, coba lagi ya 🤍");
          } finally {
            pbFileInput.value = "";
          }
        };
        reader.readAsDataURL(file);
      });

      // Timer chips
      document.querySelectorAll("[data-pb-timer]").forEach((btn) => {
        btn.addEventListener("click", () => {
          pbTimerSec = parseInt(btn.dataset.pbTimer, 10);
          document.querySelectorAll("[data-pb-timer]").forEach((b) => {
            b.classList.toggle("is-active", b === btn);
          });
        });
      });

      // Filter chips
      document.querySelectorAll("[data-pb-filter]").forEach((btn) => {
        btn.addEventListener("click", () => {
          pbFilter = btn.dataset.pbFilter;
          document.querySelectorAll("[data-pb-filter]").forEach((b) => {
            b.classList.toggle("is-active", b === btn);
          });
        });
      });

      pbShutterBtn.addEventListener("click", takePhotoboothPhoto);
      pbSaveBtn.addEventListener("click", savePhotoboothStrip);

      pbClearAllBtn.addEventListener("click", () => {
        if (pbPhotos.every((p) => !p)) {
          showPanelToast("Strip sudah kosong 🤍");
          return;
        }
        pbClearConfirm.hidden = !pbClearConfirm.hidden;
      });

      pbClearNo.addEventListener("click", () => {
        pbClearConfirm.hidden = true;
      });

      pbClearYes.addEventListener("click", () => {
        pbPhotos = Array(PB_JUMLAH).fill(null);
        pbSelectedIndex = 0;
        pbClearConfirm.hidden = true;
        pbShutterBtn.classList.remove("is-highlighted");
        hidePbUndoToast();
        renderPbFrames();
      });

      pbUndoBtn.addEventListener("click", () => {
        if (!pbUndoSnapshot) return;
        pbPhotos[pbUndoSnapshot.index] = pbUndoSnapshot.dataUrl;
        const nextEmpty = pbPhotos.findIndex((p) => !p);
        pbSelectedIndex = nextEmpty !== -1 ? nextEmpty : null;
        hidePbUndoToast();
        renderPbFrames();
      });

      pbSaveClose.addEventListener("click", closePbSaveOverlay);
      pbSaveBackdrop.addEventListener("click", closePbSaveOverlay);

      // Hentikan kamera saat tab tersembunyi atau halaman ditutup
      document.addEventListener("visibilitychange", () => {
        if (document.hidden && currentScreen === "photobooth") {
          stopPhotoboothCamera();
        }
      });
      window.addEventListener("pagehide", stopPhotoboothCamera);
      window.addEventListener("beforeunload", stopPhotoboothCamera);
    } else {
      pbStripDateEl.textContent = formatIndonesianDate(new Date());
      pbClearConfirm.hidden = true;
      // Kamera tidak dinyalakan otomatis — user ketuk "Nyalakan Kamera"
      if (!pbStream) {
        pbPermCard.hidden = false;
      }
    }
  }

  // --- Mode Development: lompat langsung ke layar tertentu ---
  // Pakai: http://127.0.0.1:5500/?step=gallery  (pin | envelope | letter | gallery)
  function devJumpTo(name) {
  if (!SCREENS[name]) return;

  // Matikan semua layar, aktifkan layar target
  Object.entries(SCREENS).forEach(([key, cfg]) => {
    if (!cfg.el) return;
    const isTarget = key === name;
    cfg.el.classList.toggle("screen--active", isTarget);
    cfg.el.classList.remove("screen--leaving");
    cfg.el.setAttribute("aria-hidden", String(!isTarget));
  });
  currentScreen = name;

  // Layar setelah surat dianggap sudah "terbuka"
  if (!["pin", "envelope", "letter"].includes(name)) {
    panelUnlocked = true;
    history.replaceState({ screen: name }, "", `#${name}`);
    history.pushState({ screen: name, guard: true }, "", `#${name}`);
  }

  // Jalankan inisialisasi layar (membangun galeri, game, dll.)
  if (typeof SCREENS[name].onEnter === "function") {
    SCREENS[name].onEnter();
  }
}

  // --- Inisialisasi ---
  applyConfigTexts();
  initFloatingPetals();
  initMusicAutoplay();

  const isDev = ["localhost", "127.0.0.1"].includes(location.hostname);
  const devStep = new URLSearchParams(location.search).get("step");
  if (isDev && devStep) devJumpTo(devStep);
})();
