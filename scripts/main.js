
    // Gallery artwork slots with fun placeholder content
    const gallerySlots = [
      { title: 'Artwork 1', emoji: '🎨', bg: 'linear-gradient(135deg,#FF6B6B,#FF8E8E)' },
      { title: 'Artwork 2', emoji: '✏️', bg: 'linear-gradient(135deg,#4ECDC4,#7EDDD6)' },
      { title: 'Artwork 3', emoji: '🖌️', bg: 'linear-gradient(135deg,#FFD93D,#FFE57A)' },
      { title: 'Artwork 4', emoji: '🌟', bg: 'linear-gradient(135deg,#A78BFA,#C4B5FD)' },
      { title: 'Artwork 5', emoji: '🦋', bg: 'linear-gradient(135deg,#F472B6,#F9A8D4)' },
      { title: 'Artwork 6', emoji: '🌈', bg: 'linear-gradient(135deg,#34D399,#6EE7B7)' },
      { title: 'Artwork 7', emoji: '⭐', bg: 'linear-gradient(135deg,#FB923C,#FDBA74)' },
      { title: 'Artwork 8', emoji: '🎭', bg: 'linear-gradient(135deg,#60A5FA,#93C5FD)' },
    ];

    function buildGallery() {
      const container = document.getElementById('gallery-container');
      container.innerHTML = '';
      gallerySlots.forEach((slot, i) => {
        const card = document.createElement('div');
        card.className = 'comic-panel';
        card.style.position = 'relative';
        card.innerHTML = `
          <div style="aspect-ratio:1;background:${slot.bg};display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;" data-index="${i}">
            <span style="font-size:48px;">${slot.emoji}</span>
            <span style="font-family:'Patrick Hand',cursive;font-size:1rem;color:#222;margin-top:8px;opacity:0.7;">${slot.title}</span>
            <span style="font-family:'Quicksand',sans-serif;font-size:0.75rem;color:#222;opacity:0.4;margin-top:2px;">Click to preview</span>
          </div>
        `;
        card.addEventListener('click', () => openLightbox(slot));
        container.appendChild(card);
      });
    }

    // Lightbox
    function openLightbox(slot) {
      const overlay = document.getElementById('lightbox');
      const inner = document.getElementById('lightbox-inner');
      inner.innerHTML = `
        <div style="width:min(500px,80vw);aspect-ratio:1;background:${slot.bg};border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;">
          <span style="font-size:80px;">${slot.emoji}</span>
          <span style="font-family:'Bangers',cursive;font-size:1.6rem;color:#222;margin-top:12px;letter-spacing:1px;">${slot.title}</span>
          <span style="font-family:'Patrick Hand',cursive;font-size:1rem;color:#333;opacity:0.6;margin-top:4px;">Your artwork will go here</span>
        </div>
      `;
      overlay.classList.add('active');
    }

    document.getElementById('lightbox-close').addEventListener('click', () => {
      document.getElementById('lightbox').classList.remove('active');
    });
    document.getElementById('lightbox').addEventListener('click', (e) => {
      if (e.target === e.currentTarget) {
        document.getElementById('lightbox').classList.remove('active');
      }
    });

    // Smooth scroll for nav
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(a.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    });

    // Build gallery on load
    buildGallery();

    // Initialize icons
    lucide.createIcons();

    // --- Element SDK ---
    const defaultConfig = {
      hero_title: 'Allison Ramirez',
      hero_subtitle: 'Young Artist • Dreamer • Creator',
      hero_tagline: 'Welcome to my creative world! 🎨',
      about_heading: '✏️ About Me',
      about_text: "Hi! I'm Allison, a 13-year-old artist who loves turning blank pages into colorful worlds. From comic book characters to handmade crafts, I'm always creating something new. Drawing is my superpower, and every day I challenge myself to learn new techniques and tell stories through my art. I believe creativity has no limits — and neither do I! 🚀",
      gallery_heading: '🖼️ My Art Gallery',
      video_heading: '🎬 Watch My Story',
      footer_text: 'Made with ♥ by Allison Ramirez',
      background_color: '#FFF5F5',
      surface_color: '#FFFFFF',
      text_color: '#222222',
      primary_action_color: '#FF6B6B',
      secondary_action_color: '#4ECDC4',
      font_family: 'Bangers',
      font_size: 16
    };

    function applyConfig(config) {
      const c = key => config[key] || defaultConfig[key];

      // Text content
      document.getElementById('el-hero-title').textContent = c('hero_title');
      document.getElementById('el-hero-subtitle').textContent = c('hero_subtitle');
      document.getElementById('el-hero-tagline').textContent = c('hero_tagline');
      document.getElementById('el-about-heading').textContent = c('about_heading');
      document.getElementById('el-about-text').textContent = c('about_text');
      document.getElementById('el-gallery-heading').textContent = c('gallery_heading');
      document.getElementById('el-video-heading').textContent = c('video_heading');
      document.getElementById('el-footer-text').textContent = c('footer_text');

      // Colors
      const bg = c('background_color');
      const surface = c('surface_color');
      const text = c('text_color');
      const primary = c('primary_action_color');
      const secondary = c('secondary_action_color');

      document.body.style.background = bg;
      document.getElementById('app-wrapper').style.background = bg;

      // Title text shadow uses primary action color
      document.getElementById('el-hero-title').style.textShadow = `3px 3px 0 ${c('primary_action_color')}88, 6px 6px 0 rgba(0,0,0,0.08)`;
      document.getElementById('el-hero-title').style.color = text;
      document.getElementById('el-hero-subtitle').style.color = text + 'aa';
      document.getElementById('el-about-heading').style.color = text;
      document.getElementById('el-about-text').style.color = text + 'cc';
      document.getElementById('el-gallery-heading').style.color = text;
      document.getElementById('el-video-heading').style.color = text;
      document.getElementById('el-footer-text').style.color = text + '88';

      // Speech bubble surface
      document.querySelector('.speech-bubble').style.background = surface;
      document.getElementById('el-hero-tagline').style.color = text + 'dd';

      // Nav pills border color
      document.querySelectorAll('.nav-pill').forEach(p => {
        p.style.borderColor = text;
        p.style.color = text;
      });

      // Font
      const customFont = c('font_family');
      const titleStack = `${customFont}, 'Bangers', cursive`;
      const bodyStack = `${customFont}, 'Patrick Hand', cursive`;

      document.getElementById('el-hero-title').style.fontFamily = titleStack;
      document.getElementById('el-hero-subtitle').style.fontFamily = bodyStack;
      document.getElementById('el-hero-tagline').style.fontFamily = bodyStack;
      document.getElementById('el-about-heading').style.fontFamily = titleStack;
      document.getElementById('el-about-text').style.fontFamily = bodyStack;
      document.getElementById('el-gallery-heading').style.fontFamily = titleStack;
      document.getElementById('el-video-heading').style.fontFamily = titleStack;
      document.getElementById('el-footer-text').style.fontFamily = bodyStack;

      // Font size
      const baseSize = c('font_size');
      document.getElementById('el-hero-subtitle').style.fontSize = `${baseSize * 1.2}px`;
      document.getElementById('el-hero-tagline').style.fontSize = `${baseSize * 1.1}px`;
      document.getElementById('el-about-text').style.fontSize = `${baseSize * 1.1}px`;
      document.getElementById('el-footer-text').style.fontSize = `${baseSize * 1.05}px`;
    }

    if (window.elementSdk) {
      window.elementSdk.init({
        defaultConfig,
        onConfigChange: async (config) => {
          applyConfig(config);
        },
        mapToCapabilities: (config) => {
          const c = key => config[key] || defaultConfig[key];
          function colorMutable(key) {
            return {
              get: () => c(key),
              set: (v) => { config[key] = v; window.elementSdk.setConfig({ [key]: v }); }
            };
          }
          return {
            recolorables: [
              colorMutable('background_color'),
              colorMutable('surface_color'),
              colorMutable('text_color'),
              colorMutable('primary_action_color'),
              colorMutable('secondary_action_color'),
            ],
            borderables: [],
            fontEditable: {
              get: () => c('font_family'),
              set: (v) => { config.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
            },
            fontSizeable: {
              get: () => c('font_size'),
              set: (v) => { config.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
            }
          };
        },
        mapToEditPanelValues: (config) => {
          const c = key => config[key] || defaultConfig[key];
          return new Map([
            ['hero_title', c('hero_title')],
            ['hero_subtitle', c('hero_subtitle')],
            ['hero_tagline', c('hero_tagline')],
            ['about_heading', c('about_heading')],
            ['about_text', c('about_text')],
            ['gallery_heading', c('gallery_heading')],
            ['video_heading', c('video_heading')],
            ['footer_text', c('footer_text')],
          ]);
        }
      });
    }

    // Apply defaults
    applyConfig(defaultConfig);
 
 
  (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'9ded3187b5a6e9e3',t:'MTc3MzkzMDgxOS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();