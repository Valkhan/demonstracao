// Formulário → WhatsApp
const btnOrcamento = document.getElementById('btn-orcamento');
if (btnOrcamento) {
  btnOrcamento.addEventListener('click', function () {
    const nome        = document.getElementById('f-nome').value.trim();
    const empresa     = document.getElementById('f-empresa').value.trim();
    const telefone    = document.getElementById('f-telefone').value.trim();
    const funcionarios = document.getElementById('f-funcionarios').value;
    const servico     = document.getElementById('f-servico').value;
    const setor       = document.getElementById('f-setor').value;
    const mensagem    = document.getElementById('f-mensagem').value.trim();

    if (!nome) {
      document.getElementById('f-nome').focus();
      document.getElementById('f-nome').style.borderColor = '#e53e3e';
      setTimeout(() => document.getElementById('f-nome').style.borderColor = '', 2000);
      return;
    }

    const linhas = [
      '🏢 *Solicitação de Orçamento — Setrax*',
      '',
      `*Nome:* ${nome}`,
    ];
    if (empresa)      linhas.push(`*Empresa:* ${empresa}`);
    if (telefone)     linhas.push(`*Telefone:* ${telefone}`);
    if (funcionarios) linhas.push(`*Nº de Funcionários:* ${funcionarios}`);
    if (servico)      linhas.push(`*Serviço de Interesse:* ${servico}`);
    if (setor)        linhas.push(`*Setor:* ${setor}`);
    if (mensagem)     linhas.push('', `*Mensagem:* ${mensagem}`);

    const texto = linhas.join('\n');
    window.open('https://wa.me/5513997407387?text=' + encodeURIComponent(texto), '_blank', 'noopener');
  });
}

// Menu hamburger mobile
const burger = document.querySelector('.n-burger');
const navLinks = document.getElementById('n-links');
const navEl = document.querySelector('nav');
if (burger) {
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    navEl.classList.toggle('nav-open', open);
    navLinks.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    burger.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      burger.classList.remove('open');
      navEl.classList.remove('nav-open');
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Abrir menu');
    });
  });
}

// Reveal ao scroll
const revealObserver = new IntersectionObserver(
  e => e.forEach(i => { if (i.isIntersecting) i.target.classList.add('in'); }),
  { threshold: 0.08 }
);
document.querySelectorAll('.rv').forEach(el => revealObserver.observe(el));

// Sombra do nav ao scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  nav.style.boxShadow = scrollY > 60
    ? '0 8px 40px rgba(28,58,74,.22)'
    : '0 4px 32px rgba(28,58,74,.10)';
});

// Contador animado nos indicadores
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1600;
  const start = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(ease * target);
    el.textContent = value + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(
  entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  }),
  { threshold: 0.5 }
);
document.querySelectorAll('.ind-val[data-target]').forEach(el => counterObserver.observe(el));

// Spotlight aleatório na galeria de clientes
(function () {
  const items = Array.from(document.querySelectorAll('.cli-item'));
  if (items.length === 0) return;

  let current = -1;

  function next() {
    // Remove do atual com transição
    if (current >= 0) items[current].classList.remove('spotlight');

    // Aguarda a transição out (350ms) e acende o próximo
    setTimeout(() => {
      let pick;
      do { pick = Math.floor(Math.random() * items.length); }
      while (pick === current && items.length > 1);
      current = pick;
      items[current].classList.add('spotlight');
    }, 350);
  }

  // Começa após 1.2s para não competir com as animações de entrada
  setTimeout(() => {
    next();
    setInterval(next, 2400);
  }, 1200);
})();
