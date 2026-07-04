/* ============================================================
   Virtual Voyager — interactive terminal
   Seydina Limamou Laye Yade · Cloud & DevOps Engineer
   ============================================================ */
(function () {
  'use strict';

  /* ── DATA ─────────────────────────────────────────────── */
  const profile = {
    handle: 'seydinalimamoulayeyade',
    alias: 'Virtual Voyager',
    links: {
      github: 'https://github.com/seydinalimamoulayeyade',
      linkedin: 'https://linkedin.com/in/limamou-laye',
      docker: 'https://hub.docker.com/u/lims4',
      email: 'seydinalimamoulayeyade@gmail.com'
    }
  };

  const projects = [
    {
      name: 'deploy-board',
      tagline: 'Tableau de bord CI/CD temps réel',
      stack: 'Jenkins · SonarQube · React · Node/Express · MongoDB · Docker',
      url: 'https://github.com/seydinalimamoulayeyade/deploy-board'
    },
    {
      name: 'api-health-monitor',
      tagline: 'Couche d\'observabilité — monitoring & alerting',
      stack: 'Prometheus · Grafana · Alertmanager · Node/Express · React · Slack',
      url: 'https://github.com/seydinalimamoulayeyade/api-health-monitor'
    },
    {
      name: 'viaops',
      tagline: 'Plateforme d\'apprentissage DevOps — 9 modules façon pipeline CI/CD',
      stack: 'Vanilla JS · HTML/CSS · Docker · nginx · GitHub Actions · GitHub Pages',
      url: 'https://github.com/seydinalimamoulayeyade/viaops',
      live: 'https://seydinalimamoulayeyade.github.io/viaops'
    }
  ];

  const input = document.getElementById('term-input');
  const output = document.getElementById('term-output');
  const terminal = document.getElementById('terminal');
  if (!input || !output) return;

  /* ── COMMANDS ─────────────────────────────────────────── */
  const commands = {
    help() {
      return (
        'Commandes disponibles :\n' +
        '  <span class="accent">whoami</span>    qui suis-je\n' +
        '  <span class="accent">stack</span>     stack technique\n' +
        '  <span class="accent">tools</span>     toolchain DevOps\n' +
        '  <span class="accent">projects</span>  projets phares\n' +
        '  <span class="accent">repos</span>     mes dépôts GitHub\n' +
        '  <span class="accent">roadmap</span>   parcours & certifications\n' +
        '  <span class="accent">vision</span>    objectifs & vision\n' +
        '  <span class="accent">contact</span>   liens & réseaux\n' +
        '  <span class="accent">clear</span>     nettoyer le terminal\n' +
        '  <span class="accent">help</span>      cette aide'
      );
    },
    whoami() {
      return (
        '<span class="accent">seydinalimamoulayeyade</span> [ Virtual Voyager ]\n' +
        '<span class="muted">role     :</span> Cloud & DevOps Engineer (in progress)\n' +
        '<span class="muted">location :</span> Dakar, Sénégal\n' +
        '<span class="muted">training :</span> AWS & DevOps @ Orange Digital Center\n' +
        '<span class="muted">status   :</span> <span class="accent">Building in public</span>\n' +
        '<span class="muted">goal     :</span> Concevoir et sécuriser des pipelines CI/CD, du commit au déploiement.'
      );
    },
    stack() {
      return (
        '<span class="muted">cloud    :</span> EC2 S3 VPC ALB IAM CloudFront Auto Scaling\n' +
        '<span class="muted">devops   :</span> Docker Jenkins GitHub Actions Nginx\n' +
        '<span class="muted">backend  :</span> Node.js NestJS PHP/Laravel PostgreSQL MongoDB\n' +
        '<span class="muted">frontend :</span> React Vue.js Tailwind Vite\n' +
        '<span class="muted">os       :</span> Linux Ubuntu Bash\n' +
        '<span class="muted">next     :</span> Kubernetes Terraform SonarQube Prometheus Trivy'
      );
    },
    tools() {
      return (
        '<span class="accent">▸</span> Docker\n' +
        '<span class="accent">▸</span> Jenkins\n' +
        '<span class="accent">▸</span> SonarQube\n' +
        '<span class="accent">▸</span> Kubernetes\n' +
        '<span class="accent">▸</span> Terraform\n' +
        '<span class="accent">▸</span> Prometheus / Grafana\n' +
        '<span class="accent">▸</span> Trivy\n' +
        '<span class="accent">▸</span> AI for DevOps'
      );
    },
    projects() {
      const shortUrl = (u) => u.replace('https://', '');
      const blocks = projects.map((p) => {
        let out =
          '<span class="accent">▸ ' + p.name + '</span> — ' + p.tagline + '\n';
        if (p.stack) out += '  <span class="muted">' + p.stack + '</span>\n';
        out += '  → <a href="' + p.url + '" target="_blank" rel="noopener">' + shortUrl(p.url) + '</a>';
        if (p.live) {
          out += '\n  <span class="accent">live</span> <a href="' + p.live + '" target="_blank" rel="noopener">' + shortUrl(p.live) + '</a>';
        }
        return out;
      });
      return blocks.join('\n\n');
    },
    repos() {
      return (
        '<span class="muted">Chaque dépôt est une pièce du pipeline — du commit au déploiement.</span>\n' +
        'Tape <span class="accent">projects</span> pour les projets phares, ou explore tout :\n' +
        '→ <a href="' + profile.links.github + '" target="_blank" rel="noopener">github.com/seydinalimamoulayeyade</a>'
      );
    },
    roadmap() {
      return (
        '<span class="accent">[✓]</span> Software Engineering\n' +
        '<span class="accent">[✓]</span> IBM DevOps\n' +
        '<span class="amber">[⟳]</span> AWS Certified Cloud Practitioner (CLF-C02) <span class="muted">— en cours</span>\n' +
        '<span class="muted">[ ] AWS Solutions Architect Associate</span>'
      );
    },
    vision() {
      return (
        '<span class="accent">"Automatiser aujourd\'hui, c\'est gagner du temps pour demain —\n' +
        ' et construire des systèmes qui tiennent quand tu dors."</span>\n' +
        '  → AWS CLF-C02 certification\n' +
        '  → DevSecOps — pipelines sécurisés (Trivy & co.)\n' +
        '  → AI for DevOps — automatiser l\'automatisation\n' +
        '  → Cloud-native architectures en production'
      );
    },
    contact() {
      return (
        '<span class="muted">LinkedIn   :</span> <a href="' + profile.links.linkedin + '" target="_blank" rel="noopener">limamou-laye</a>\n' +
        '<span class="muted">GitHub     :</span> <a href="' + profile.links.github + '" target="_blank" rel="noopener">seydinalimamoulayeyade</a>\n' +
        '<span class="muted">Docker Hub :</span> <a href="' + profile.links.docker + '" target="_blank" rel="noopener">lims4</a>\n' +
        '<span class="muted">Email      :</span> <a href="mailto:' + profile.links.email + '">' + profile.links.email + '</a>'
      );
    },
    clear() {
      output.innerHTML = '';
      return null;
    }
  };
  // aliases
  commands.social = commands.contact;
  commands.ls = commands.help;

  // primary command names used for Tab completion
  const commandNames = [
    'help', 'whoami', 'stack', 'tools', 'projects', 'repos', 'roadmap', 'vision', 'contact', 'clear'
  ];

  // longest common prefix of a list of strings
  const commonPrefix = (arr) => {
    if (!arr.length) return '';
    let prefix = arr[0];
    for (const s of arr) {
      while (!s.startsWith(prefix)) prefix = prefix.slice(0, -1);
    }
    return prefix;
  };

  /* ── HELPERS ──────────────────────────────────────────── */
  const escapeHtml = (s) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

  const print = (html, cls) => {
    const div = document.createElement('div');
    div.className = cls || 'result';
    div.innerHTML = html.replace(/\n/g, '<br>');
    output.appendChild(div);
  };

  const scrollDown = () => input.scrollIntoView({ block: 'nearest' });

  // Keep the input visible when the mobile keyboard opens / viewport resizes
  input.addEventListener('focus', () => {
    document.body.classList.add('keyboard-open');
    setTimeout(() => input.scrollIntoView({ block: 'center' }), 300);
  });
  input.addEventListener('blur', () => {
    document.body.classList.remove('keyboard-open');
  });
  if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
      if (document.activeElement === input) {
        input.scrollIntoView({ block: 'center' });
      }
    });
  }

  /* ── HISTORY + RUN ────────────────────────────────────── */
  const history = [];
  let histIndex = -1;

  const run = (raw) => {
    const echo = document.createElement('div');
    echo.className = 'echo';
    echo.innerHTML =
      '<span class="prompt-user">seydina</span>@<span class="prompt-host">github</span>:~$ ' +
      '<span class="cmd-txt">' + escapeHtml(raw) + '</span>';
    output.appendChild(echo);

    const cmd = raw.trim().toLowerCase();
    if (!cmd) { scrollDown(); return; }

    history.push(raw);
    histIndex = history.length;

    if (cmd in commands) {
      const res = commands[cmd]();
      if (res !== null) print(res);
    } else {
      print("commande introuvable : " + cmd + " — tape 'help' pour la liste.", 'result err');
    }
    scrollDown();
  };

  /* ── EVENTS ───────────────────────────────────────────── */
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const val = input.value.trim().toLowerCase();
      const matches = val
        ? commandNames.filter((c) => c.startsWith(val))
        : commandNames.slice();
      if (matches.length === 1) {
        input.value = matches[0];
      } else if (matches.length > 1) {
        const prefix = commonPrefix(matches);
        if (prefix.length > val.length) input.value = prefix;
        print(matches.join('   '), 'result muted');
        scrollDown();
      }
    } else if (e.key === 'Enter') {
      run(input.value);
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      if (histIndex > 0) { histIndex--; input.value = history[histIndex]; }
      e.preventDefault();
    } else if (e.key === 'ArrowDown') {
      if (histIndex < history.length - 1) {
        histIndex++; input.value = history[histIndex];
      } else { histIndex = history.length; input.value = ''; }
      e.preventDefault();
    }
  });

  // Clicking anywhere in the terminal focuses the input (unless selecting a link)
  if (terminal) {
    terminal.addEventListener('click', (e) => {
      if (e.target.tagName !== 'A') input.focus();
    });
  }

  /* ── WELCOME BANNER ───────────────────────────────────── */
  print(
    '<span class="accent">Seydina Limamou Laye Yade</span> — Cloud & DevOps Engineer\n' +
    "Bienvenue dans mon terminal. Tape <span class=\"accent\">help</span> pour voir les commandes,\n" +
    'puis <span class="accent">whoami</span>, <span class="accent">stack</span>, <span class="accent">projects</span> ou <span class="accent">contact</span>.\n' +
    '<span class="muted">Astuce : utilise <span class="accent">Tab</span> pour compléter et <span class="accent">↑ ↓</span> pour l\'historique.</span>',
    'result muted'
  );
  input.focus();
})();
