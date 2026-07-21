 // ═══════════════════════════════════════════
    // PROJECTS DATA
    // ═══════════════════════════════════════════
    const PROJECTS = [
      { tag: "E-Commerce", title: "GEN TECH", desc: "A cutting-edge tech store with real-time cart, product browsing, and a checkout flow built for speed and modern aesthetics.", feats: ["Responsive Design", "Shopping Cart", "Modern UI"], badges: ["HTML", "CSS", "JavaScript", "PHP"], live: "https://eballodev.github.io/E-Commerce-Website-MODERN/", gh: "https://github.com/Eballodev", vid: "videos/27e84f47-b547-4417-a191-d20398d4061f.mp4" },
      { tag: "Automotive", title: "VELOCE STUDIO", desc: "A cinematic car photography showcase blending luxury aesthetics with web technology. Full-bleed visuals, smooth animations.", feats: ["Cinematic Animations", "Luxury UI", "Photo Grid"], badges: ["HTML", "CSS", "JavaScript"], live: "https://eballodev.github.io/CARS-WEB/", gh: "https://github.com/Ichiro2004", vid: "videos/Agent_video_Pippit_20251228171359.mp4" },
      { tag: "Sportswear", title: "POC STORE", desc: "Premium sportswear e-commerce experience. Features product filtering, LocalStorage cart, and mobile-first responsive layout.", feats: ["Product Filter", "LocalStorage Cart", "Mobile-First"], badges: ["HTML", "CSS", "JavaScript"], live: "https://eballodev.github.io/POC-STORE/", gh: "https://github.com/Eballodev", vid: "videos/Agent_video_Pippit_20251228181407.mp4" },
      { tag: "AI Platform", title: "NEXUS-AI", desc: "A futuristic AI companion web app with voice interaction, emotion detection, and real-time adaptive conversations.", feats: ["Voice Interface", "Emotion Engine", "Real-Time AI"], badges: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"], live: "https://eballodev.github.io/AI-WEB/", gh: "https://github.com/Eballodev", vid: "videos/7229a301-3ca8-4b87-8689-08820a4429da.mp4" },
      { tag: "Luxury Fashion", title: "LUXURY SHOP", desc: "Exclusive bespoke suit boutique with elegant product presentation, curated collections, and a premium checkout experience.", feats: ["Bespoke Products", "Elegant UI", "Cart System"], badges: ["HTML", "CSS", "JavaScript"], live: "https://eballodev.github.io/Luxury-Website/", gh: "https://github.com/Eballodev", vid: "videos/Agent_video_Pippit_20251229151316.mp4" },
      { tag: "Digital Library", title: "ONLINE LIBRARY", desc: "A library platform offering 50,000+ books with intelligent search, curated recommendations, and a beautiful reading UI.", feats: ["Smart Search", "Recommendations", "Categories"], badges: ["HTML", "CSS", "JavaScript"], live: "https://eballodev.github.io/Online-Library/", gh: "https://github.com/Eballodev", vid: "videos/02176702262256000000000000000000000ffffac19188d7c043f.mp4" },
      { tag: "Food & Beverage", title: "BREW & BITES", desc: "A cozy coffee shop website featuring full menus, online ordering, and a warm design that captures the café experience.", feats: ["Menu Display", "Online Order", "Cozy Aesthetic"], badges: ["HTML", "CSS", "JavaScript"], live: "https://eballodev.github.io/Coffee-Shop-Website/", gh: "https://github.com/Eballodev", vid: "videos/Agent_video_Pippit_20251229154224.mp4" },
      { tag: "Sports Retail", title: "VELOCITY BIKES", desc: "A premium road bike shop for enthusiasts — speed-focused design, product comparison, and a competitive pricing showcase.", feats: ["Product Showcase", "Speed Design", "Premium UI"], badges: ["HTML", "CSS", "JavaScript"], live: "https://eballodev.github.io/Bike-Shop/", gh: "https://github.com/Eballodev", vid: "videos/Agent_video_Pippit_20251229154900.mp4" }
    ];

    // ═══ LOADER ═══
    (function() {
      var fill = document.getElementById('ld-fill');
      var pct = document.getElementById('ld-pct');
      var v = 0, done = false;
      function step() {
        if (done) return;
        v += Math.random() * 12 + 2;
        if (v > 100) { v = 100; done = true; }
        fill.style.width = v + '%';
        pct.textContent = Math.floor(v) + '%';
        if (!done) setTimeout(step, 70);
        else setTimeout(function() { document.getElementById('loader').classList.add('out'); }, 300);
      }
      step();
    })();

    // ═══ SCROLL PROGRESS + NAV ═══
    window.addEventListener('scroll', function() {
      var prog = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
      document.getElementById('sprog').style.width = prog + '%';
      document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 60);
      document.getElementById('btt').classList.toggle('show', window.scrollY > 400);
    });

    // ═══ SMOOTH SCROLL ═══
    document.querySelectorAll('a[href^="#"]').forEach(function(a) {
      a.addEventListener('click', function(e) {
        var t = document.querySelector(this.getAttribute('href'));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
      });
    });

    // ═══ BACK TO TOP ═══
    document.getElementById('btt').addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // ═══ NAV ACTIVE ═══
    var navLinks = document.querySelectorAll('.nav-link, .mob-nav a');
    var secs = Array.from(document.querySelectorAll('section[id]'));
    var secObs = new IntersectionObserver(function(entries) {
      entries.forEach(function(e) {
        if (e.isIntersecting) {
          navLinks.forEach(function(l) {
            l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { threshold: 0.35, rootMargin: '-60px 0px -35% 0px' });
    secs.forEach(function(s) { secObs.observe(s); });

    // ═══ HAMBURGER ═══
    var ham = document.getElementById('ham');
    var mobNav = document.getElementById('mob-nav');
    ham.addEventListener('click', function() {
      var open = mobNav.classList.toggle('open');
      var spans = ham.querySelectorAll('span');
      if (open) { spans[0].style.transform = 'rotate(45deg) translate(4.5px,4.5px)'; spans[1].style.opacity = '0'; spans[2].style.transform = 'rotate(-45deg) translate(4.5px,-4.5px)'; }
      else { spans.forEach(function(s) { s.style.transform = ''; s.style.opacity = ''; }); }
    });
    mobNav.querySelectorAll('a').forEach(function(a) {
      a.addEventListener('click', function() {
        mobNav.classList.remove('open');
        ham.querySelectorAll('span').forEach(function(s) { s.style.transform = ''; s.style.opacity = ''; });
      });
    });

    // ═══ THEME ═══
    var isDark = true;
    document.getElementById('theme-btn').addEventListener('click', function() {
      isDark = !isDark;
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
      this.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    // ═══ TYPED TEXT ═══
    (function() {
      var el = document.getElementById('typed');
      if (!el) return;
      var phrases = ['web experiences', 'clean interfaces', 'UI masterpieces', 'modern solutions', 'beautiful products'];
      var pi = 0, ci = 0, del = false;
      function t() {
        var p = phrases[pi];
        if (!del) { el.textContent = p.slice(0, ++ci); if (ci === p.length) { del = true; setTimeout(t, 1600); return; } }
        else { el.textContent = p.slice(0, --ci); if (ci === 0) { del = false; pi = (pi + 1) % phrases.length; setTimeout(t, 400); return; } }
        setTimeout(t, del ? 38 : 90);
      }
      setTimeout(t, 1200);
    })();

    // ═══ THREE.JS PARTICLES ═══
    (function() {
      try {
        if (!window.THREE || window.innerWidth < 600) return;
        var c = document.getElementById('bg-canvas');
        if (!c) return;
        var r = new THREE.WebGLRenderer({ canvas: c, alpha: true, antialias: false });
        r.setPixelRatio(Math.min(devicePixelRatio, 1.5));
        r.setSize(innerWidth, innerHeight);
        var scene = new THREE.Scene();
        var cam = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 0.1, 1800);
        cam.position.z = 600;
        var N = 1200;
        var pos = new Float32Array(N * 3);
        for (var i = 0; i < N; i++) { pos[i*3] = (Math.random() - .5) * 2000; pos[i*3+1] = (Math.random() - .5) * 2000; pos[i*3+2] = (Math.random() - .5) * 1200; }
        var geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        var mat = new THREE.PointsMaterial({ size: 1.8, color: 0xffffff, transparent: true, opacity: 0.45, sizeAttenuation: true });
        var pts = new THREE.Points(geo, mat);
        scene.add(pts);
        var mmx = 0, mmy = 0;
        document.addEventListener('mousemove', function(e) { mmx = (e.clientX / innerWidth - .5) * .25; mmy = (e.clientY / innerHeight - .5) * .25; });
        function anim() { requestAnimationFrame(anim); pts.rotation.y += 0.00012 + mmx * 0.0015; pts.rotation.x += 0.00006 + mmy * 0.0008; r.render(scene, cam); }
        anim();
        window.addEventListener('resize', function() { cam.aspect = innerWidth / innerHeight; cam.updateProjectionMatrix(); r.setSize(innerWidth, innerHeight); });
      } catch (err) {}
    })();

    // ═══ REVEAL ═══
    (function() {
      var els = document.querySelectorAll('.rv, .rv-l, .rv-r');
      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); }
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
      els.forEach(function(el) { obs.observe(el); });
    })();

    // ═══ COUNTERS ═══
    (function() {
      var els = document.querySelectorAll('[data-count]');
      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) {
            var el = e.target, target = parseInt(el.dataset.count);
            var n = 0, spd = Math.max(1, target / 55);
            var timer = setInterval(function() {
              n = Math.min(n + Math.ceil(spd), target);
              el.textContent = n;
              if (n >= target) clearInterval(timer);
            }, 22);
            obs.unobserve(el);
          }
        });
      }, { threshold: 0.5 });
      els.forEach(function(el) { obs.observe(el); });
    })();

    // ═══ SKILL BARS ═══
    (function() {
      var sec = document.getElementById('skills');
      if (!sec) return;
      var obs = new IntersectionObserver(function(entries) {
        entries.forEach(function(e) {
          if (e.isIntersecting) {
            sec.querySelectorAll('.sk-fill').forEach(function(b) { b.style.width = b.dataset.w + '%'; });
            obs.unobserve(e.target);
          }
        });
      }, { threshold: 0.2 });
      obs.observe(sec);
    })();

    // ═══ RADAR CHART ═══
    (function() {
      var ctx = document.getElementById('radar-chart');
      if (!ctx || !window.Chart) return;
      new Chart(ctx.getContext('2d'), {
        type: 'radar',
        data: {
          labels: ['HTML/CSS', 'JavaScript', 'PHP', 'SQL', 'Java', 'C/C++', 'Design'],
          datasets: [{
            data: [90, 80, 70, 65, 60, 55, 75],
            backgroundColor: 'rgba(255,255,255,0.04)',
            borderColor: 'rgba(255,255,255,0.35)',
            pointBackgroundColor: 'rgba(255,255,255,0.7)',
            pointBorderColor: 'transparent',
            borderWidth: 1.5,
            pointRadius: 3
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: true,
          plugins: { legend: { display: false } },
          scales: { r: {
            min: 0, max: 100,
            angleLines: { color: 'rgba(255,255,255,0.05)' },
            grid: { color: 'rgba(255,255,255,0.05)' },
            pointLabels: { color: 'rgba(255,255,255,0.35)', font: { size: 11, family: 'Inter' } },
            ticks: { display: false }
          } }
        }
      });
    })();

    // ═══ PROJECTS — SMOOTH CROSSFADE ═══
    (function() {
      var container = document.getElementById('proj-slides');
      var dotsEl = document.getElementById('proj-dots');
      var curEl = document.getElementById('pc-cur');
      var totEl = document.getElementById('pc-tot');
      totEl.textContent = String(PROJECTS.length).padStart(2, '0');

      PROJECTS.forEach(function(p, i) {
        var slide = document.createElement('div');
        slide.className = 'proj-slide' + (i === 0 ? ' active' : '');
        slide.innerHTML = [
          '<div class="proj-info">',
            '<div class="proj-tag">', i === 0 ? '★ Featured' : '', p.tag, '</div>',
            '<h3 class="proj-title">', p.title, '</h3>',
            '<p class="proj-desc">', p.desc, '</p>',
            '<div class="proj-feats">',
              p.feats.map(function(f) { return '<div class="proj-feat">' + f + '</div>'; }).join(''),
            '</div>',
            '<div class="proj-badges">',
              p.badges.map(function(b) { return '<span class="proj-badge">' + b + '</span>'; }).join(''),
            '</div>',
            '<div class="proj-links">',
              '<a href="' + p.live + '" target="_blank" class="plink-w"><i class="fas fa-external-link-alt"></i> Live Demo</a>',
              '<a href="' + p.gh + '" target="_blank" class="plink-o"><i class="fab fa-github"></i> GitHub</a>',
            '</div>',
          '</div>',
          '<div class="proj-visual">',
            '<div class="proj-video-wrap">',
              '<video src="' + p.vid + '" autoplay loop muted playsinline preload="none" onerror="this.parentElement.style.background=\'rgba(255,255,255,0.02)\'"></video>',
              '<div class="proj-video-gloss"></div>',
            '</div>',
          '</div>'
        ].join('');
        container.appendChild(slide);

        var dot = document.createElement('div');
        dot.className = 'proj-dot' + (i === 0 ? ' on' : '');
        dot.addEventListener('click', function() { goProj(i); });
        dotsEl.appendChild(dot);
      });

      var current = 0, busy = false, auto;

      function goProj(next) {
        if (busy || next === current) return;
        busy = true;
        var slides = container.querySelectorAll('.proj-slide');
        var dots = dotsEl.querySelectorAll('.proj-dot');

        slides[current].classList.add('out');
        slides[current].classList.remove('active');
        dots[current].classList.remove('on');

        current = (next + PROJECTS.length) % PROJECTS.length;

        slides[current].classList.add('active');
        dots[current].classList.add('on');
        curEl.textContent = String(current + 1).padStart(2, '0');

        var vid = slides[current].querySelector('video');
        if (vid && !vid.src && vid.getAttribute('data-src')) {
          vid.src = vid.getAttribute('data-src'); vid.load();
        }

        setTimeout(function() {
          slides.forEach(function(s) { if (s.classList.contains('out')) s.classList.remove('out'); });
          busy = false;
        }, 700);
      }

      function startAuto() { auto = setInterval(function() { goProj(current + 1); }, 6000); }
      function resetAuto() { clearInterval(auto); startAuto(); }

      document.getElementById('p-prev').addEventListener('click', function() { goProj(current - 1); resetAuto(); });
      document.getElementById('p-next').addEventListener('click', function() { goProj(current + 1); resetAuto(); });

      document.addEventListener('keydown', function(e) {
        if (document.activeElement && document.activeElement.tagName === 'INPUT') return;
        if (e.key === 'ArrowLeft') { goProj(current - 1); resetAuto(); }
        if (e.key === 'ArrowRight') { goProj(current + 1); resetAuto(); }
      });

      var tx = 0;
      container.addEventListener('touchstart', function(e) { tx = e.touches[0].clientX; }, { passive: true });
      container.addEventListener('touchend', function(e) {
        var dx = tx - e.changedTouches[0].clientX;
        if (Math.abs(dx) > 50) { dx > 0 ? goProj(current + 1) : goProj(current - 1); resetAuto(); }
      }, { passive: true });

      startAuto();
    })();

    // ═══ TESTIMONIALS AUTO-SLIDE ═══
    (function() {
      var row = document.getElementById('testi-row');
      if (!row) return;
      var idx = 0, cards = row.children.length;
      setInterval(function() {
        idx = (idx + 1) % cards;
        row.style.transform = 'translateX(-' + (idx * 336) + 'px)';
      }, 3800);
    })();

    // ═══ CONTACT FORM ═══
    (function() {
      var EJ_KEY = 'zo3g6F2PlGBnyW-Ml';
      var EJ_SVC = 'service_6vfw3iy';
      var EJ_TPL = 'template_ufcwq12';
      try { if (window.emailjs) emailjs.init(EJ_KEY); } catch (e) {}
      var form = document.getElementById('cf');
      if (!form) return;
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var n = document.getElementById('cf-n').value.trim();
        var em = document.getElementById('cf-e').value.trim();
        var m = document.getElementById('cf-m').value.trim();
        var st = document.getElementById('cf-status');
        var btxt = document.getElementById('cf-btxt');
        if (!n || !em || !m) { st.className = 'err'; st.textContent = 'Please fill in all required fields.'; st.style.display = 'block'; return; }
        btxt.textContent = 'Sending…'; form.querySelector('button[type="submit"]').disabled = true;
        function done(ok, msg) {
          st.className = ok ? 'ok' : 'err'; st.textContent = msg; st.style.display = 'block';
          btxt.textContent = 'Send Message'; form.querySelector('button[type="submit"]').disabled = false;
          if (ok) { form.reset(); setTimeout(function() { st.style.display = 'none'; }, 5000); }
        }
        if (window.emailjs) {
          emailjs.send(EJ_SVC, EJ_TPL, { from_name: n, from_email: em, message: m, to_name: 'Christopher Eballo' })
            .then(function() { done(true, '✓ Message sent! I\'ll get back to you soon.'); })
            .catch(function() { done(false, 'Failed to send. Email me directly at tophereballo13@gmail.com'); });
        } else {
          done(false, 'Email service not loaded. Email tophereballo13@gmail.com directly.');
        }
      });
    })();

    // ═══ AI CHATBOT ═══
    (function() {
      var KB = {
       'who|about christopher': [
"I'm Christopher Eballo — a Full-Stack Web Developer, System Developer, and UI/UX Designer from the Philippines. I build responsive websites, management systems, and modern digital experiences.",
"Christopher is passionate about creating clean, functional, and visually appealing applications. He's currently pursuing a Bachelor of Science in Information Technology while continuously expanding his skills through real-world projects. 🚀"
],

'skill|tech|know|language': [
"Christopher is skilled in HTML, CSS, JavaScript, PHP, MySQL, Java, and C Programming. He also has experience with Bootstrap, Git, GitHub, Figma, Java Swing, and AI integration.",
"Technical Skills: HTML, CSS, JavaScript, PHP, MySQL, Java, C Programming, Bootstrap, Git, GitHub, Figma, UI/UX Design, Database Design, and System Development. 💻"
],

'project|work|portfolio|built': [
"Christopher has developed multiple web and desktop applications, including a Library Management System, Online Voting System, Coffee Shop POS, Student Portal, and responsive portfolio websites.",
"His projects focus on solving real-world problems through web development, database management, desktop applications, and user-centered design. 🚀"
],

'education|school|study|degree': [
"Christopher completed ICT Programming at Informatics College Northgate and is currently pursuing a Bachelor of Science in Information Technology (BSIT).",
"He combines academic knowledge with hands-on experience by developing real-world software and web applications. 🎓"
],

'award|achiev|win|recognition': [
"Christopher received several recognitions, including Best in System Creator and Best in Web Development.",
"His projects have been recognized for creativity, technical implementation, and system development excellence. 🏆"
],

'contact|email|hire|reach|freelance': [
"You can contact Christopher at tophereballo13@gmail.com or use the contact form below. He's open to internships, freelance projects, and full-time opportunities.",
"Interested in working together? Feel free to send a message through the contact section or email him directly! 📩"
],

'github|code|repo|opensource': [
"Check out Christopher's projects on GitHub: github.com/EballoDev",
"Visit his GitHub profile to explore source code, web applications, and system development projects. 💻"
],

'design|figma|photoshop|illustrator|canva': [
"Christopher designs modern user interfaces using Figma, Adobe Photoshop, Adobe Illustrator, and Canva. 🎨",
"He creates wireframes, prototypes, UI mockups, branding assets, and responsive web layouts."
],

'ai|artificial intelligence|chatbot': [
"Christopher is interested in AI integration and modern web technologies, building applications that incorporate intelligent features and automation. 🤖",
"He enjoys exploring AI tools and integrating AI-powered functionality into web applications."
],

'hello|hi|hey|sup|yo': [
"Hey! 👋 I'm Christopher's virtual assistant. Ask me about his skills, projects, education, or how to get in touch!",
"Hello! Welcome to Christopher's portfolio. What would you like to know?",
"Hi there! 😊 I'm here to answer questions about Christopher's experience, projects, and services."
],

'thank|thanks|appreciate': [
"You're very welcome! 😊",
"Happy to help! Feel free to ask anything else.",
"Thanks for visiting Christopher's portfolio. Have a great day! 🚀"
],

'cool|awesome|amazing|wow|nice': [
"Thank you! Christopher is always learning and building new projects. 🚀",
"Glad you like it! Every project is designed with performance, creativity, and user experience in mind.",
"Thanks! Your support means a lot. 😊"
]
      };
      var panel = document.getElementById('ai-panel');
      var msgs = document.getElementById('ai-msgs');
      var inp = document.getElementById('ai-in');
      var btn = document.getElementById('ai-btn');

      btn.addEventListener('click', function() { panel.classList.toggle('open'); if (panel.classList.contains('open')) inp.focus(); });
      document.getElementById('ai-x').addEventListener('click', function() { panel.classList.remove('open'); });

      function respond(q) {
        q = q.toLowerCase();
        for (var key in KB) {
          var keys = key.split('|');
          for (var i = 0; i < keys.length; i++) {
            if (q.indexOf(keys[i]) !== -1) {
              var arr = KB[key];
              return arr[Math.floor(Math.random() * arr.length)];
            }
          }
        }
        return "Hmm, I'm not sure about that one! 🤔 Try asking about Christopher's skills, projects, or how to contact him.";
      }

      function addMsg(txt, role) {
        var d = document.createElement('div');
        d.className = 'ai-m ' + role;
        d.textContent = txt;
        msgs.appendChild(d);
        msgs.scrollTop = 9999;
      }
      function showTyping() {
        var d = document.createElement('div');
        d.className = 'ai-typing';
        d.innerHTML = '<span></span><span></span><span></span>';
        d.id = 'ai-typing-ind';
        msgs.appendChild(d);
        msgs.scrollTop = 9999;
        return d;
      }
      function send() {
        var q = inp.value.trim();
        if (!q) return;
        addMsg(q, 'user');
        inp.value = '';
        var typing = showTyping();
        setTimeout(function() {
          msgs.removeChild(typing);
          addMsg(respond(q), 'bot');
        }, 600 + Math.random() * 400);
      }
      document.getElementById('ai-snd').addEventListener('click', send);
      inp.addEventListener('keydown', function(e) { if (e.key === 'Enter') send(); });
    })();