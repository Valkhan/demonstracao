// Formulário → Email (simulado) + WhatsApp
(function () {
  const btnOrcamento = document.getElementById('btn-orcamento');
  if (!btnOrcamento) return;

  function buildWhatsAppUrl(dados) {
    const linhas = [
      '*Solicitacao de Orcamento — Setrax*',
      '',
      '*Nome:* ' + dados.nome,
    ];
    if (dados.empresa)      linhas.push('*Empresa:* ' + dados.empresa);
    if (dados.telefone)     linhas.push('*Telefone:* ' + dados.telefone);
    if (dados.funcionarios) linhas.push('*Numero de Funcionarios:* ' + dados.funcionarios);
    if (dados.servico)      linhas.push('*Servico de Interesse:* ' + dados.servico);
    if (dados.setor)        linhas.push('*Setor:* ' + dados.setor);
    if (dados.mensagem)     linhas.push('', '*Mensagem:* ' + dados.mensagem);
    return 'https://wa.me/5513997407387?text=' + encodeURIComponent(linhas.join('\n'));
  }

  function showFeedback(tipo, waUrl) {
    const formBody = document.getElementById('form-body');
    const formTitle = document.getElementById('form-title');

    const isSuccess = tipo === 'success';

    const iconeSucesso = '<svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true"><circle cx="28" cy="28" r="28" fill="#d1fae5"/><path d="M16 28l8 8 16-16" stroke="#059669" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    const iconeErro   = '<svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden="true"><circle cx="28" cy="28" r="28" fill="#fee2e2"/><path d="M20 20l16 16M36 20L20 36" stroke="#dc2626" stroke-width="3" stroke-linecap="round"/></svg>';

    const feedbackHtml = isSuccess
      ? `<div id="form-feedback" style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;padding:8px 0 4px;">
           ${iconeSucesso}
           <p style="font-size:18px;font-weight:700;color:#065f46;margin:0;">Mensagem enviada com sucesso!</p>
           <p style="font-size:14px;color:#374151;margin:0;line-height:1.6;">Em breve nossa equipe entrará em contato.<br>Fale conosco também pelo WhatsApp.</p>
           <a id="btn-wa-feedback" href="${waUrl}" target="_blank" rel="noopener"
              style="display:inline-flex;align-items:center;gap:8px;background:#25d366;color:#fff;font-weight:700;font-size:14px;padding:11px 22px;border-radius:8px;text-decoration:none;margin-top:4px;">
             <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.854L.057 23.704a.75.75 0 00.92.919l5.91-1.463A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 01-4.962-1.363l-.356-.21-3.685.912.946-3.617-.232-.373A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
             Abrir WhatsApp
           </a>
           <p id="wa-countdown" style="font-size:12px;color:#9ca3af;margin:0;">Abrindo WhatsApp em <strong>2</strong>s…</p>
         </div>`
      : `<div id="form-feedback" style="display:flex;flex-direction:column;align-items:center;text-align:center;gap:16px;padding:8px 0 4px;">
           ${iconeErro}
           <p style="font-size:18px;font-weight:700;color:#7f1d1d;margin:0;">Falha ao enviar a mensagem</p>
           <p style="font-size:14px;color:#374151;margin:0;line-height:1.6;">Ocorreu um erro ao enviar seu e-mail.<br>Tente novamente ou fale pelo WhatsApp.</p>
           <div style="display:flex;gap:10px;flex-wrap:wrap;justify-content:center;margin-top:4px;">
             <button id="btn-tentar-novamente" style="background:#1c3a4a;color:#fff;font-weight:700;font-size:14px;padding:11px 20px;border-radius:8px;border:none;cursor:pointer;">Tentar novamente</button>
             <a href="${waUrl}" target="_blank" rel="noopener"
                style="display:inline-flex;align-items:center;gap:8px;background:#25d366;color:#fff;font-weight:700;font-size:14px;padding:11px 20px;border-radius:8px;text-decoration:none;">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.533 5.854L.057 23.704a.75.75 0 00.92.919l5.91-1.463A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 01-4.962-1.363l-.356-.21-3.685.912.946-3.617-.232-.373A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
               Ir para WhatsApp
             </a>
           </div>
         </div>`;

    formTitle.style.display = 'none';
    formBody.innerHTML = feedbackHtml;

    if (isSuccess) {
      // Abre o WhatsApp após 2s com contagem regressiva
      let segundos = 2;
      const countdown = document.getElementById('wa-countdown');
      const timer = setInterval(function () {
        segundos--;
        if (countdown) countdown.querySelector('strong').textContent = segundos;
        if (segundos <= 0) {
          clearInterval(timer);
          window.open(waUrl, '_blank', 'noopener');
        }
      }, 1000);

      // Clique manual cancela o timer automático
      const btnWa = document.getElementById('btn-wa-feedback');
      if (btnWa) {
        btnWa.addEventListener('click', function () {
          clearInterval(timer);
          if (countdown) countdown.style.display = 'none';
        });
      }
    } else {
      const btnTentar = document.getElementById('btn-tentar-novamente');
      if (btnTentar) {
        btnTentar.addEventListener('click', function () {
          formTitle.style.display = '';
          formBody.innerHTML = formBodyOriginal;
          bindBtn();
        });
      }
    }
  }

  let formBodyOriginal = document.getElementById('form-body').innerHTML;

  function bindBtn() {
    const btn = document.getElementById('btn-orcamento');
    if (!btn) return;

    btn.addEventListener('click', function () {
      const nome         = document.getElementById('f-nome').value.trim();
      const empresa      = document.getElementById('f-empresa').value.trim();
      const telefone     = document.getElementById('f-telefone').value.trim();
      const funcionarios = document.getElementById('f-funcionarios').value;
      const servico      = document.getElementById('f-servico').value;
      const setor        = document.getElementById('f-setor').value;
      const mensagem     = document.getElementById('f-mensagem').value.trim();

      if (!nome) {
        const nomeInput = document.getElementById('f-nome');
        nomeInput.focus();
        nomeInput.style.borderColor = '#e53e3e';
        setTimeout(function () { nomeInput.style.borderColor = ''; }, 2000);
        return;
      }

      const dados = { nome, empresa, telefone, funcionarios, servico, setor, mensagem };
      const waUrl = buildWhatsAppUrl(dados);

      btn.disabled = true;
      btn.innerHTML = 'Enviando…';

      // Simula requisição de e-mail
      setTimeout(function () {
        const sucesso = Math.random() > 0.1;
        showFeedback(sucesso ? 'success' : 'error', waUrl);
      }, 1500);
    });
  }

  bindBtn();
}());

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
