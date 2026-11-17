/**
 * QueerIQ — Official Website Core Engine
 * Modules: Mobile Navigation, Interactive Trivia Simulator, FAQ Accordion,
 *          Smooth Anchor Scroll & Support Fund Simulator
 * Zero Build / Vanilla JS — GitHub Pages Ready
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // ===================================================================
  // 1. Mobile Navigation Drawer
  // ===================================================================
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  const HAMBURGER_ICON = `
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="4" y1="7" x2="20" y2="7"></line>
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="17" x2="20" y2="17"></line>
    </svg>
  `;

  const CLOSE_ICON = `
    <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  `;

  const closeMobileMenu = () => {
    if (!mobileToggle || !mobileDrawer) return;
    mobileDrawer.classList.add('hidden');
    mobileToggle.setAttribute('aria-expanded', 'false');
    mobileToggle.innerHTML = HAMBURGER_ICON;
  };

  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isHidden = mobileDrawer.classList.toggle('hidden');
      const isExpanded = !isHidden;
      mobileToggle.setAttribute('aria-expanded', String(isExpanded));
      mobileToggle.innerHTML = isExpanded ? CLOSE_ICON : HAMBURGER_ICON;
    });

    mobileDrawer.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('click', (e) => {
      if (
        !mobileDrawer.classList.contains('hidden') &&
        !mobileDrawer.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !mobileDrawer.classList.contains('hidden')) {
        closeMobileMenu();
      }
    });
  }

  // ===================================================================
  // 2. Interactive Trivia Simulator (Phone Mockup)
  // ===================================================================
  const optionButtons = document.querySelectorAll('.trivia-opt-btn');
  const feedbackBox = document.getElementById('phoneTriviaFeedback');
  const xpRewardPill = document.getElementById('xpRewardPill');
  let hasAnswered = false;

  const DEFAULT_OPTION_ICON = `
    <svg class="w-4 h-4 text-[#8E8E93]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <circle cx="12" cy="12" r="9"></circle>
    </svg>
  `;

  const CORRECT_OPTION_ICON = `
    <svg class="w-4 h-4 text-[#30D158]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  `;

  const resetTrivia = (e) => {
    if (e) e.stopPropagation();
    hasAnswered = false;

    optionButtons.forEach((btn) => {
      btn.classList.remove('is-correct', 'is-wrong');
      const iconWrap = btn.querySelector('.opt-icon');
      if (iconWrap) {
        iconWrap.innerHTML = DEFAULT_OPTION_ICON;
      }
    });

    if (feedbackBox) {
      feedbackBox.className = 'hidden';
      feedbackBox.innerHTML = '';
    }

    if (xpRewardPill) {
      xpRewardPill.classList.add('opacity-0', 'scale-90');
      xpRewardPill.classList.remove('opacity-100', 'scale-100');
    }
  };

  optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (hasAnswered) return;

      const isCorrect = button.getAttribute('data-correct') === 'true';

      if (isCorrect) {
        hasAnswered = true;
        button.classList.add('is-correct');

        const iconWrap = button.querySelector('.opt-icon');
        if (iconWrap) {
          iconWrap.innerHTML = CORRECT_OPTION_ICON;
        }

        if (xpRewardPill) {
          xpRewardPill.classList.remove('opacity-0', 'scale-90');
          xpRewardPill.classList.add('opacity-100', 'scale-100');
        }

        if (feedbackBox) {
          feedbackBox.className =
            'mt-3 p-3 rounded-2xl bg-[#30D158]/15 border border-[#30D158]/35 text-slate-200 text-[11.5px] leading-relaxed block animate-fade-in';
          feedbackBox.innerHTML = `
            <div>
              <strong class="font-bold text-[#30D158] block mb-0.5">Doğru Cevap (+10 XP)</strong>
              28 Haziran 1969'da New York Greenwich Village'daki Stonewall Inn direnişi, modern kuir eşitlik hareketinin küresel dönüm noktasıdır.
            </div>
            <button id="resetTriviaBtn" type="button" class="mt-2 text-[11px] font-semibold text-[#818CF8] hover:underline block cursor-pointer">
              Yeniden Dene
            </button>
          `;

          const resetBtn = document.getElementById('resetTriviaBtn');
          if (resetBtn) {
            resetBtn.addEventListener('click', resetTrivia);
          }
        }
      } else {
        button.classList.add('is-wrong');
        setTimeout(() => {
          button.classList.remove('is-wrong');
        }, 550);

        if (feedbackBox) {
          feedbackBox.className =
            'mt-3 p-3 rounded-2xl bg-[#FF453A]/15 border border-[#FF453A]/35 text-slate-200 text-[11.5px] leading-relaxed block animate-fade-in';
          feedbackBox.innerHTML = `
            <div>
              <strong class="font-bold text-[#FF453A] block mb-0.5">Yanlış Cevap — Tekrar Dene</strong>
              İpucu: Christopher Street ve Greenwich Village'ın bulunduğu ikonik metropol.
            </div>
          `;
        }
      }
    });
  });

  // ===================================================================
  // 3. FAQ Accordion (Smooth CSS Grid Transition)
  // ===================================================================
  const accordionButtons = document.querySelectorAll('.accordion-trigger');

  accordionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const parentItem = button.closest('.accordion-item');
      if (!parentItem) return;

      const isCurrentlyOpen = parentItem.classList.contains('open');

      document.querySelectorAll('.accordion-item').forEach((item) => {
        if (item !== parentItem) {
          item.classList.remove('open');
          const trigger = item.querySelector('.accordion-trigger');
          if (trigger) trigger.setAttribute('aria-expanded', 'false');
        }
      });

      if (isCurrentlyOpen) {
        parentItem.classList.remove('open');
        button.setAttribute('aria-expanded', 'false');
      } else {
        parentItem.classList.add('open');
        button.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ===================================================================
  // 4. Support Fund Interactive Simulator (destek-fonu.html)
  // ===================================================================
  const slider = document.getElementById('simulatorSlider');
  const revDisplay = document.getElementById('simulatorRevenueDisplay');
  const fundAmount = document.getElementById('simulatorFundAmount');
  const statusCard = document.getElementById('simulatorStatusCard');
  const statusTitle = document.getElementById('simulatorStatusTitle');
  const statusDesc = document.getElementById('simulatorStatusDesc');

  const updateSimulator = () => {
    if (!slider || !revDisplay || !fundAmount || !statusCard || !statusTitle || !statusDesc) return;

    const threshold = 2500;
    const min = Number(slider.min) || 1000;
    const max = Number(slider.max) || 100000;
    const rev = Number(slider.value);
    const fund = Math.round(rev * 0.10);

    // Kaydırıcı doluluk çizgisi (Apple Indigo progress track)
    const percent = ((rev - min) / (max - min)) * 100;
    slider.style.background = `linear-gradient(90deg, #6366F1 ${percent}%, #2C2C2E ${percent}%)`;

    revDisplay.textContent = `${rev.toLocaleString('tr-TR')} ₺`;
    fundAmount.textContent = `${fund.toLocaleString('tr-TR')} ₺`;

    if (fund >= threshold) {
      statusCard.className = 'p-4 rounded-2xl bg-[#30D158]/15 border border-[#30D158]/30 transition-all';
      statusTitle.className = 'text-sm font-bold text-white mt-1';
      statusTitle.textContent = 'Eşik Aşıldı: Bağış Yapılır';
      statusDesc.className = 'text-[11px] text-[#30D158] mt-0.5 leading-snug';
      statusDesc.textContent = 'Derneklere resmi banka havalesiyle aktarılır ve dekont yayımlanır.';
    } else {
      statusCard.className = 'p-4 rounded-2xl bg-[#FF9F0A]/15 border border-[#FF9F0A]/30 transition-all';
      statusTitle.className = 'text-sm font-bold text-white mt-1';
      statusTitle.textContent = 'Limit Altında: Ertesi Aya Devreder';
      statusDesc.className = 'text-[11px] text-[#FF9F0A] mt-0.5 leading-snug';
      statusDesc.textContent = `${fund.toLocaleString('tr-TR')} ₺ fonda korunur, sıfırlanmaz ve bir sonraki aya eklenir.`;
    }
  };

  if (slider) {
    slider.addEventListener('input', updateSimulator);
    updateSimulator();
  }

  // ===================================================================
  // 5. Smooth Anchor Scrolling & Sticky Header Offset
  // ===================================================================
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 84;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
});