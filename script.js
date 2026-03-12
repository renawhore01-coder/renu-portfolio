
    // ---- Elements ----
    const btnWorks = document.getElementById('btn-works');
    const sectionWorks = document.getElementById('section-works');

    const btnCommissions = document.getElementById('btn-commissions');
    const sectionCommissions = document.getElementById('section-commissions');
    const btnSayHello = document.getElementById('btn-sayhello');

    // ---- Works Filtering & Scroll ----
    const filterBtns = document.querySelectorAll('.filter-btn');
    const workCards = document.querySelectorAll('.work-card');

    btnWorks.addEventListener('click', () => {
      sectionWorks.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        workCards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.classList.remove('hidden');
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'scale(1)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'scale(0.8)';
            setTimeout(() => {
              if (card.style.opacity === '0') {
                card.classList.add('hidden');
              }
            }, 300);
          }
        });
      });
    });

    // Wire Work Cards to Lightbox
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    workCards.forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img');
        lightboxImg.src = img.src;
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      });
    });

    // ---- COMMISSIONS ----
    const btnPhone = document.getElementById('btn-phone');

    function scrollToCommissions() {
      sectionCommissions.classList.add('open');
      setTimeout(() => sectionCommissions.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
    }

    btnCommissions.addEventListener('click', () => {
      const isOpen = sectionCommissions.classList.toggle('open');
      if (isOpen) {
        setTimeout(() => sectionCommissions.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    });

    btnSayHello.addEventListener('click', scrollToCommissions);
    btnPhone.addEventListener('click', scrollToCommissions);

    // ---- WHO AM I modal ----
    const btnWhoami = document.getElementById('btn-whoami');
    const modalOverlay = document.getElementById('modal-whoami');
    const modalClose = document.getElementById('modal-close');

    btnWhoami.addEventListener('click', () => {
      modalOverlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    function closeModal() {
      modalOverlay.classList.remove('open');
      document.body.style.overflow = '';
    }
    modalClose.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal();
        if (lightbox.classList.contains('open')) {
          lightbox.classList.remove('open');
          document.body.style.overflow = '';
        }
      }
    });

    // ---- LIGHTBOX ----
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightbox.addEventListener('click', () => {
      lightbox.classList.remove('open');
      document.body.style.overflow = '';
    });

    // ---- Form ----
    const form = document.getElementById('commission-form');
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(form);
      fetch(form.action, { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } })
        .then(r => { if (r.ok) { form.reset(); alert('✦ Message sent!'); } else alert('Oops! Try again.'); })
        .catch(() => alert('Oops! Try again.'));
    });
  