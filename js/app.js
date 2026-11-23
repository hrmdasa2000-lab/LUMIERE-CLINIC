(function () {
  'use strict';
  document.documentElement.classList.add('js-ready');
  const STORAGE_KEY = 'lumiere_clinic_lang';
  const defaultLang = localStorage.getItem(STORAGE_KEY) || 'fa';

  const SERVICES_DATA = {
    facial: {
      img: 'service-facial', durationFa: '۶۰ دقیقه', durationEn: '60 Mins', tagFa: 'مراقبت پوست', tagEn: 'Skin Care',
      titleFa: 'فیشیال تخصصی و آبرسانی عمیق', titleEn: 'Signature Hydrating Facial',
      summaryFa: 'پاکسازی چندمرحله‌ای، لایه‌برداری ملایم و سرم‌تراپی آنتی‌اکسیدان برای بازگرداندن شفافیت و لطافت طبیعی پوست.',
      summaryEn: 'Multi-step cleansing, gentle exfoliation, and antioxidant serum infusion to restore natural skin radiance.',
      detailsFa: 'این پروتکل تخصصی شامل آنالیز اولیه بافت پوست، پاکسازی ملایم منافذ، ماسک آرام‌بخش گیاهی و آبرسانی عمیق بدون ایجاد التهاب است.',
      detailsEn: 'This tailored protocol includes initial skin texture assessment, gentle pore purification, botanical soothing mask, and deep hydration.',
      stepsFa: ['بررسی و مشاوره اولیه پوست', 'پاکسازی عمقی و بخور ملایم', 'تغذیه پوست با سرم‌های آبرسان و ویتامینه', 'ماسک آرام‌بخش و محافظت نهایی'],
      stepsEn: ['Initial skin assessment', 'Deep cleansing & gentle steam', 'Hydrating & vitamin serum infusion', 'Soothing mask & barrier protection']
    },
    laser: {
      img: 'service-laser', durationFa: '۴۵ دقیقه', durationEn: '45 Mins', tagFa: 'لیزر و نوردرمانی', tagEn: 'Laser & Light',
      titleFa: 'جوانسازی نوری و اصلاح بافت پوست', titleEn: 'Light Rejuvenation & Texture Care',
      summaryFa: 'بهره‌گیری از فناوری‌های غیرتهاجمی نوری برای یکنواخت‌سازی رنگ پوست، کاهش لک‌های سطحی و تحریک کلاژن‌سازی.',
      summaryEn: 'Non-invasive light protocols designed to even skin tone, soften superficial spots, and support natural collagen.',
      detailsFa: 'انرژی نوری کنترل‌شده با سیستم خنک‌کننده هم‌زمان روی لایه‌های سطحی پوست تابانده می‌شود تا بدون دوره نقاهت طولانی، قوام پوست بهبود یابد.',
      detailsEn: 'Controlled light energy with integrated cooling targets superficial skin layers to improve firmness and clarity with minimal downtime.',
      stepsFa: ['بررسی نوع پوست و تنظیم دقیق دستگاه', 'استفاده از عینک محافظ و ژل خنک‌کننده', 'اجرای پالس‌های نوری یکنواخت', 'کرم ترمیم‌کننده و توصیه‌های مراقبتی'],
      stepsEn: ['Skin type check & parameter calibration', 'Protective eyewear & cooling gel', 'Uniform light pulse application', 'Post-care recovery balm & guidance']
    },
    injectables: {
      img: 'service-injectables', durationFa: '۴۰ دقیقه', durationEn: '40 Mins', tagFa: 'تزریقات زیبایی', tagEn: 'Aesthetic Injectables',
      titleFa: 'هماهنگی خطوط چهره و جوانسازی ملایم', titleEn: 'Facial Harmony & Subtle Revitalization',
      summaryFa: 'رویکردی محافظه‌کارانه و طبیعی برای حفظ تناسبات چهره و شادابی پوست با تکیه بر اصول زیبایی‌شناسی.',
      summaryEn: 'A conservative, natural-looking approach preserving facial proportions and skin vitality based on aesthetic balance.',
      detailsFa: 'با تکیه بر آناتومی چهره و استانداردهای پزشکی، فرم‌دهی و شاداب‌سازی بافت پوست به گونه‌ای انجام می‌شود که حالت طبیعی و اصیل چهره کاملاً حفظ شود.',
      detailsEn: 'Guided by facial anatomy and clinical standards, subtle revitalization restores freshness while preserving natural expression.',
      stepsFa: ['ارزیابی تقارن و تناسبات چهره', 'آماده‌سازی و بی‌حسی موضعی ملایم', 'اجرای دقیق بر اساس طرح درمان اختصاصی', 'پایش نتیجه و جلسه پیگیری'],
      stepsEn: ['Facial symmetry & proportion mapping', 'Gentle topical comfort preparation', 'Precision application per bespoke plan', 'Result review & follow-up session']
    },
    hair: {
      img: 'service-hair', durationFa: '۵۰ دقیقه', durationEn: '50 Mins', tagFa: 'پوست سر و مو', tagEn: 'Hair & Scalp',
      titleFa: 'تقویت فولیکول و احیای سلامت پوست سر', titleEn: 'Follicle Nutrition & Scalp Therapy',
      summaryFa: 'برنامه تخصصی پاکسازی اسکالپ، اکسیژن‌رسانی و تغذیه ریشه مو برای افزایش استحکام و درخشش تارهای مو.',
      summaryEn: 'Targeted scalp purification, oxygenation, and follicle nutrition program to support hair strength and shine.',
      detailsFa: 'سلامت مو از پوست سر آغاز می‌شود. این درمان ترکیبی از لایه‌برداری ملایم اسکالپ، کوکتل‌های تقویتی و تحریک گردش خون مویرگی است.',
      detailsEn: 'Healthy hair begins at the scalp. This protocol combines gentle scalp exfoliation, nutrient cocktails, and micro-circulation therapy.',
      stepsFa: ['آنالیز دیجیتال کف سر و فولیکول‌ها', 'پاکسازی و لایه‌برداری ملایم اسکالپ', 'تغذیه ریشه مو با سرم‌های تقویتی', 'نوردرمانی ملایم برای تحریک گردش خون'],
      stepsEn: ['Digital scalp & follicle scan', 'Gentle scalp detox & exfoliation', 'Nutrient serum follicle infusion', 'Low-level light scalp stimulation']
    },
    body: {
      img: 'service-body', durationFa: '۶۰ دقیقه', durationEn: '60 Mins', tagFa: 'تناسب و تندرستی', tagEn: 'Body Wellness',
      titleFa: 'لیفت غیرتهاجمی و فرم‌دهی ملایم پوست', titleEn: 'Non-Invasive Skin Tightening & Contour',
      summaryFa: 'بهبود قوام پوست و افزایش انعطاف‌پذیری بافت با روش‌های غیرجراحی و بدون نیاز به استراحت پس از جلسه.',
      summaryEn: 'Improving skin firmness and tissue elasticity through non-surgical comfort protocols with zero downtime.',
      detailsFa: 'با استفاده از فناوری‌های غیرتهاجمی و کنترل دمای هوشمند، کلاژن‌سازی عمقی پوست تحریک شده و قوام و لطافت بافت بهبود می‌یابد.',
      detailsEn: 'Using non-invasive thermal control technology, deep collagen renewal is stimulated to enhance skin tone and elasticity.',
      stepsFa: ['مشاوره و تعیین نواحی هدف', 'آماده‌سازی پوست با لوسیون محافظ', 'اجرای جلسه با دمای کنترل‌شده', 'آبرسانی و توصیه‌های تکمیلی'],
      stepsEn: ['Consultation & target area mapping', 'Skin prep with protective lotion', 'Temperature-controlled session', 'Hydration & aftercare guidance']
    },
    skincare: {
      img: 'service-skincare', durationFa: '۳۵ دقیقه', durationEn: '35 Mins', tagFa: 'آنالیز و روتین', tagEn: 'Diagnostics',
      titleFa: 'آنالیز دیجیتال پوست و طراحی روتین خانگی', titleEn: 'Digital Skin Diagnostics & Home Regimen',
      summaryFa: 'سنجش میزان رطوبت، چربی، منافذ و حساسیت پوست برای تدوین یک برنامه مراقبت روزانه شخصی‌سازی‌شده.',
      summaryEn: 'Measuring hydration, sebum, pore profile, and sensitivity to tailor a simplified daily skincare regimen.',
      detailsFa: 'در این جلسه وضعیت سد دفاعی پوست به‌دقت بررسی شده و ساده‌ترین و مؤثرترین ترکیب مراقبتی متناسب با سبک زندگی شما تدوین می‌شود.',
      detailsEn: 'Skin barrier status is carefully evaluated to design an effective, streamlined daily skincare routine tailored to your lifestyle.',
      stepsFa: ['تصویربرداری و سنجش شاخص‌های پوست', 'تحلیل میزان رطوبت، چربی و حساسیت', 'تدوین روتین صبح و شب اختصاصی', 'ارزیابی مجدد روند بهبودی'],
      stepsEn: ['Multi-spectral skin diagnostics', 'Hydration, sebum & sensitivity analysis', 'Bespoke morning & evening regimen', 'Follow-up progress evaluation']
    }
  };

  function prefix() {
    return window.location.pathname.includes('/pages/') ? '../' : '';
  }

  function applyLanguage(lang) {
    const clean = lang === 'en' ? 'en' : 'fa';
    document.documentElement.lang = clean;
    document.documentElement.dir = clean === 'fa' ? 'rtl' : 'ltr';
    localStorage.setItem(STORAGE_KEY, clean);

    document.querySelectorAll('[data-fa][data-en]').forEach((el) => {
      const val = el.getAttribute(`data-${clean}`);
      if (val !== null) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
        else el.textContent = val;
      }
    });

    document.querySelectorAll('[data-alt-fa][data-alt-en]').forEach((img) => {
      const altVal = img.getAttribute(`data-alt-${clean}`);
      if (altVal) img.alt = altVal;
    });

    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      btn.textContent = clean === 'fa' ? 'EN | انگلیسی' : 'FA | فارسی';
    });

    renderServiceDetail(clean);
  }

  function renderServiceDetail(lang) {
    const container = document.getElementById('service-detail-root');
    if (!container) return;
    const params = new URLSearchParams(window.location.search);
    const item = SERVICES_DATA[params.get('service') || 'facial'] || SERVICES_DATA.facial;
    const p = prefix();
    const isFa = lang === 'fa';
    const title = isFa ? item.titleFa : item.titleEn;
    container.innerHTML = `
      <div class="split-grid">
        <div class="split-media">
          <picture>
            <source srcset="${p}assets/images/${item.img}.webp" type="image/webp">
            <img src="${p}assets/images/${item.img}.jpg" alt="${title}" width="900" height="650">
          </picture>
        </div>
        <div>
          <span class="eyebrow">${isFa ? item.tagFa : item.tagEn} • ${isFa ? item.durationFa : item.durationEn}</span>
          <h2>${title}</h2>
          <p>${isFa ? item.summaryFa : item.summaryEn}</p>
          <p>${isFa ? item.detailsFa : item.detailsEn}</p>
          <ul class="checklist">${(isFa ? item.stepsFa : item.stepsEn).map((s) => `<li>${s}</li>`).join('')}</ul>
          <div class="hero__actions">
            <a href="booking.html" class="btn btn--primary">${isFa ? 'رزرو وقت مشاوره این خدمت' : 'Book Consultation'}</a>
            <a href="services.html" class="btn btn--secondary">${isFa ? 'بازگشت به لیست خدمات' : 'All Services'}</a>
          </div>
        </div>
      </div>`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    const fb = `${prefix()}assets/images/fallback-clinic.jpg`;
    document.querySelectorAll('img').forEach((img) => {
      img.addEventListener('error', () => {
        if (!img.dataset.fb) {
          img.dataset.fb = '1';
          const pic = img.closest('picture');
          if (pic) pic.querySelectorAll('source').forEach((s) => s.remove());
          img.src = fb;
        }
      });
    });

    const menuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.primary-nav');
    if (menuBtn && nav) {
      menuBtn.addEventListener('click', () => {
        const open = nav.classList.toggle('is-open');
        menuBtn.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('click', (e) => {
        if (nav.classList.contains('is-open') && !nav.contains(e.target) && !menuBtn.contains(e.target)) {
          nav.classList.remove('is-open');
          menuBtn.setAttribute('aria-expanded', 'false');
        }
      });
    }

    document.querySelectorAll('.lang-toggle').forEach((btn) => {
      btn.addEventListener('click', () => applyLanguage(document.documentElement.lang === 'fa' ? 'en' : 'fa'));
    });

    const pills = document.querySelectorAll('.filter-pill[data-filter]');
    const cards = document.querySelectorAll('[data-category]');
    pills.forEach((pill) => {
      pill.addEventListener('click', () => {
        pills.forEach((p) => p.classList.remove('is-active'));
        pill.classList.add('is-active');
        const f = pill.getAttribute('data-filter');
        cards.forEach((c) => { c.style.display = f === 'all' || c.getAttribute('data-category') === f ? '' : 'none'; });
      });
    });

    document.querySelectorAll('.faq-item').forEach((item) => {
      const btn = item.querySelector('.faq-question');
      if (btn) btn.addEventListener('click', () => {
        const open = item.classList.toggle('is-open');
        btn.setAttribute('aria-expanded', String(open));
      });
    });

    const lb = document.getElementById('gallery-lightbox');
    if (lb) {
      const lbImg = lb.querySelector('.lightbox__img');
      const lbTitle = lb.querySelector('.lightbox__title');
      document.querySelectorAll('[data-lightbox-src]').forEach((tr) => {
        tr.addEventListener('click', () => {
          const lang = document.documentElement.lang === 'en' ? 'en' : 'fa';
          lbImg.src = tr.getAttribute('data-lightbox-src');
          lbTitle.textContent = tr.getAttribute(`data-caption-${lang}`) || '';
          lb.classList.add('is-open');
          document.body.style.overflow = 'hidden';
        });
      });
      const closeLb = () => { lb.classList.remove('is-open'); document.body.style.overflow = ''; };
      lb.querySelector('.lightbox__close')?.addEventListener('click', closeLb);
      lb.addEventListener('click', (e) => { if (e.target === lb) closeLb(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && lb.classList.contains('is-open')) closeLb(); });
    }

    document.querySelectorAll('form[data-demo-form]').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const isFa = document.documentElement.lang !== 'en';
        let valid = true;
        form.querySelectorAll('[data-required]').forEach((field) => {
          const err = field.parentElement.querySelector('.form-error');
          const val = field.value.trim();
          let msg = '';
          if (!val) msg = isFa ? 'تکمیل این فیلد الزامی است.' : 'This field is required.';
          else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) msg = isFa ? 'ایمیل معتبر نیست.' : 'Invalid email.';
          else if (field.dataset.phone && val.replace(/\D/g, '').length < 8) msg = isFa ? 'شماره تماس کوتاه است.' : 'Phone number too short.';
          if (err) err.textContent = msg;
          if (msg) valid = false;
        });
        const notice = form.querySelector('.form-notice');
        if (!notice) return;
        if (!valid) {
          notice.className = 'form-notice form-notice--error is-visible';
          notice.textContent = isFa ? 'لطفاً خطاهای فرم را بررسی کنید.' : 'Please fix the highlighted fields.';
          return;
        }
        const code = 'LUM-' + Math.floor(100000 + Math.random() * 900000);
        notice.className = 'form-notice form-notice--success is-visible';
        notice.textContent = isFa
          ? `درخواست شما با موفقیت ثبت شد. کد پیگیری: ${code} — همکاران پذیرش در اسرع وقت با شما تماس خواهند گرفت.`
          : `Your request has been received. Reference Code: ${code} — Our reception team will contact you shortly.`;
        form.reset();
      });
    });

    const topBtn = document.querySelector('.back-to-top');
    if (topBtn) {
      window.addEventListener('scroll', () => topBtn.classList.toggle('is-visible', window.scrollY > 360), { passive: true });
      topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    const reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver((ents) => {
        ents.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('is-visible'); obs.unobserve(en.target); } });
      }, { threshold: 0.1 });
      reveals.forEach((el) => obs.observe(el));
    } else {
      reveals.forEach((el) => el.classList.add('is-visible'));
    }

    applyLanguage(defaultLang);
  });
})();
