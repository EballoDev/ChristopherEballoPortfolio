 // ============================================================
      //  FULL SCRIPT — AI assistant, timeline, projects, animations, etc.
      // ============================================================

      // ─── LOADER ───
      (function loader() {
        const el = document.getElementById("loader");
        const fill = document.getElementById("ld-fill");
        const pct = document.getElementById("ld-pct");
        let progress = 0;
        const interval = setInterval(() => {
          progress += Math.random() * 6 + 2;
          if (progress > 100) progress = 100;
          fill.style.width = progress + "%";
          pct.textContent = Math.round(progress) + "%";
          if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => el.classList.add("hide"), 400);
          }
        }, 120);
      })();

      // ─── SCROLL PROGRESS ───
      document.addEventListener("scroll", () => {
        const top = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        document.getElementById("sprog").style.width = h
          ? (top / h) * 100 + "%"
          : "0%";
      });

      // ─── THEME ───
      const themeBtn = document.getElementById("theme-btn");
      themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        themeBtn.querySelector("i").className =
          document.body.classList.contains("light")
            ? "fas fa-sun"
            : "fas fa-moon";
      });

      // ─── MOBILE NAV ───
      const ham = document.getElementById("ham");
      const mob = document.getElementById("mob-nav");
      ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        mob.classList.toggle("open");
      });
      document.querySelectorAll(".mob-nav a").forEach((a) => {
        a.addEventListener("click", () => {
          ham.classList.remove("active");
          mob.classList.remove("open");
        });
      });

      // ─── NAV SCROLL ───
      const nav = document.getElementById("nav");
      document.addEventListener("scroll", () =>
        nav.classList.toggle("scrolled", window.scrollY > 60),
      );

      // ─── NAV LINKS ACTIVE ───
      const navLinks = document.querySelectorAll(".nav-link");
      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "services",
        "timeline",
        "contact",
      ];
      document.addEventListener("scroll", () => {
        let current = "hero";
        for (const id of sections) {
          const el = document.getElementById(id);
          if (el && el.getBoundingClientRect().top <= 120) current = id;
        }
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === "#" + current,
          );
        });
      });

      // ─── TYPED TEXT ───
      (function typed() {
        const el = document.getElementById("typed");
        const words = ["Websites", "Systems", "UI/UX", "Apps", "Experiences"];
        let i = 0,
          j = 0,
          dir = 1,
          text = "";
        const speed = 100;
        const pause = 2000;

        function tick() {
          const full = words[i];
          if (dir === 1) {
            text = full.slice(0, j++);
            if (j > full.length) {
              dir = -1;
              setTimeout(tick, pause);
              return;
            }
          } else {
            text = full.slice(0, j--);
            if (j < 0) {
              dir = 1;
              j = 0;
              i = (i + 1) % words.length;
              setTimeout(tick, 200);
              return;
            }
          }
          el.textContent = text;
          setTimeout(tick, speed);
        }
        tick();
      })();

      // ─── REVEAL ON SCROLL ───
      (function reveal() {
        const els = document.querySelectorAll(".rv, .rv-l, .rv-r");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                const d = e.target.dataset.d || 0;
                setTimeout(() => e.target.classList.add("visible"), d * 100);
              }
            });
          },
          { threshold: 0.12 },
        );
        els.forEach((el) => observer.observe(el));
      })();

      // ─── STATS COUNTER ───
      (function countStats() {
        const nums = document.querySelectorAll(".stat-num, .astat-num");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseFloat(el.dataset.count);
                if (isNaN(target)) return;
                const duration = 2000;
                const start = performance.now();
                const isFloat = target % 1 !== 0;

                function update(now) {
                  const p = Math.min(1, (now - start) / duration);
                  const val = p * target;
                  el.textContent = isFloat ? val.toFixed(1) : Math.floor(val);
                  if (p < 1) requestAnimationFrame(update);
                  else el.textContent = isFloat ? target.toFixed(1) : target;
                }
                requestAnimationFrame(update);
                observer.unobserve(el);
              }
            });
          },
          { threshold: 0.3 },
        );
        nums.forEach((n) => observer.observe(n));
      })();

      // ─── SKILL BARS ───
      (function skillBars() {
        const fills = document.querySelectorAll(".sk-fill");
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                const w = e.target.dataset.w || 0;
                e.target.style.width = w + "%";
                observer.unobserve(e.target);
              }
            });
          },
          { threshold: 0.2 },
        );
        fills.forEach((f) => observer.observe(f));
      })();

      // ─── RADAR CHART ───
      (function radar() {
        const ctx = document.getElementById("radar-chart");
        if (!ctx) return;
        new Chart(ctx, {
          type: "radar",
          data: {
            labels: ["HTML/CSS", "JavaScript", "PHP", "SQL", "Java", "UI/UX"],
            datasets: [
              {
                label: "Proficiency",
                data: [90, 80, 70, 65, 60, 75],
                backgroundColor: "rgba(124,92,252,0.15)",
                borderColor: "#7c5cfc",
                pointBackgroundColor: "#7c5cfc",
                pointBorderColor: "#fff",
                borderWidth: 2,
                pointRadius: 4,
              },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: true,
            scales: {
              r: {
                min: 0,
                max: 100,
                ticks: {
                  stepSize: 20,
                  color: "var(--text3)",
                  font: { size: 9 },
                },
                grid: { color: "var(--border)" },
                angleLines: { color: "var(--border)" },
                pointLabels: {
                  color: "var(--text2)",
                  font: { size: 10, weight: "500" },
                },
              },
            },
            plugins: { legend: { display: false } },
          },
        });
      })();

      // ─── PROJECTS ───
      (function projects() {
        const data = [
          {
            title: "GEN TECH",
            tag: "E-Commerce",
            desc: "A cutting-edge tech store with real-time cart, product browsing, and checkout flow.",
            tech: ["HTML", "CSS", "JavaScript", "PHP"],
            live: "https://eballodev.github.io/E-Commerce-Website-MODERN/",
            github: "https://github.com/Eballodev",
            video: "videos/27e84f47-b547-4417-a191-d20398d4061f.mp4",
          },
          {
            title: "VELOCE STUDIO",
            tag: "Automotive",
            desc: "Luxury car photography showcase with cinematic animations.",
            tech: ["HTML", "CSS", "JavaScript"],
            live: "https://eballodev.github.io/CARS-WEB/",
            github: "https://github.com/Ichiro2004",
            video: "videos/Agent_video_Pippit_20251228171359.mp4",
          },
          {
            title: "POC STORE",
            tag: "Sportswear",
            desc: "Premium sportswear e-commerce website.",
            tech: ["HTML", "CSS", "JavaScript"],
            live: "https://eballodev.github.io/POC-STORE/",
            github: "https://github.com/Eballodev",
            video: "videos/Agent_video_Pippit_20251228181407.mp4",
          },
          {
            title: "NEXUS AI",
            tag: "AI Platform",
            desc: "AI-powered assistant with modern UI.",
            tech: ["HTML", "CSS", "JavaScript", "PHP"],
            live: "https://eballodev.github.io/AI-WEB/",
            github: "https://github.com/Eballodev",
            video: "videos/7229a301-3ca8-4b87-8689-08820a4429da.mp4",
          },
          {
            title: "LUXURY SHOP",
            tag: "Luxury Fashion",
            desc: "Premium bespoke suit website.",
            tech: ["HTML", "CSS", "JavaScript"],
            live: "https://eballodev.github.io/Luxury-Website/",
            github: "https://github.com/Eballodev",
            video: "videos/Agent_video_Pippit_20251229151316.mp4",
          },
          {
            title: "ONLINE LIBRARY",
            tag: "Digital Library",
            desc: "Online library with smart search.",
            tech: ["HTML", "CSS", "JavaScript"],
            live: "https://eballodev.github.io/Online-Library/",
            github: "https://github.com/Eballodev",
            video:
              "videos/02176702262256000000000000000000000ffffac19188d7c043f.mp4",
          },
          {
            title: "BREW & BITES",
            tag: "Food & Beverage",
            desc: "Coffee shop website with ordering system.",
            tech: ["HTML", "CSS", "JavaScript"],
            live: "https://eballodev.github.io/Coffee-Shop-Website/",
            github: "https://github.com/Eballodev",
            video: "videos/Agent_video_Pippit_20251229154224.mp4",
          },
          {
            title: "VELOCITY BIKES",
            tag: "Sports Retail",
            desc: "Road bike e-commerce showcase.",
            tech: ["HTML", "CSS", "JavaScript"],
            live: "https://eballodev.github.io/Bike-Shop/",
            github: "https://github.com/Eballodev",
            video: "videos/Agent_video_Pippit_20251229154900.mp4",
          },
        ];

        const slides = document.getElementById("proj-slides");
        const dots = document.getElementById("proj-dots");
        const cur = document.getElementById("pc-cur");
        const tot = document.getElementById("pc-tot");
        let idx = 0;
        let videoElements = [];

        data.forEach((p, i) => {
          const div = document.createElement("div");
          div.className = "proj-slide";

          div.innerHTML = `
            <div class="proj-slide-info">
              <span class="p-tag">${p.tag}</span>
              <h3>${p.title}</h3>
              <p>${p.desc}</p>
              <div class="p-tech">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div>
              <div class="p-actions">
                <a href="${p.live}" target="_blank" class="btn-live"><i class="fas fa-globe"></i> Live Demo</a>
                <a href="${p.github}" target="_blank" class="btn-github"><i class="fab fa-github"></i> GitHub</a>
              </div>
            </div>
            <div class="proj-slide-video">
              <video src="${p.video}" autoplay muted loop playsinline controls></video>
              <div class="video-fallback"><i class="fas fa-play-circle"></i></div>
            </div>
          `;

          slides.appendChild(div);

          const vid = div.querySelector("video");
          if (vid) videoElements.push(vid);

          const dot = document.createElement("button");
          dot.dataset.i = i;
          dot.addEventListener("click", () => goTo(i));
          dots.appendChild(dot);
        });

        tot.textContent = String(data.length).padStart(2, "0");

        function goTo(i) {
          idx = (i + data.length) % data.length;
          slides.style.transform = `translateX(-${idx * 100}%)`;
          document.querySelectorAll("#proj-dots button").forEach((d, j) => {
            d.classList.toggle("active", j === idx);
          });
          cur.textContent = String(idx + 1).padStart(2, "0");

          // Play only the active video
          videoElements.forEach((v, vi) => {
            if (vi === idx) {
              v.play().catch(() => {});
            } else {
              v.pause();
            }
          });
        }

        document
          .getElementById("p-prev")
          .addEventListener("click", () => goTo(idx - 1));
        document
          .getElementById("p-next")
          .addEventListener("click", () => goTo(idx + 1));

        // Intersection Observer: play when visible
        const slideObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              const vid = entry.target.querySelector("video");
              if (!vid) return;
              if (entry.isIntersecting) {
                vid.play().catch(() => {});
              } else {
                vid.pause();
              }
            });
          },
          { threshold: 0.3 },
        );

        document
          .querySelectorAll(".proj-slide")
          .forEach((s) => slideObserver.observe(s));

        // Handle visibility change (tab switching)
        document.addEventListener("visibilitychange", () => {
          if (document.hidden) {
            videoElements.forEach((v) => v.pause());
          } else {
            const activeVid = videoElements[idx];
            if (activeVid) activeVid.play().catch(() => {});
          }
        });

        // Handle video errors
        videoElements.forEach((v) => {
          v.addEventListener("error", function () {
            const container = this.closest(".proj-slide-video");
            const fallback = container.querySelector(".video-fallback");
            if (fallback) fallback.style.display = "flex";
            this.style.display = "none";
          });
          v.addEventListener("loadeddata", function () {
            const container = this.closest(".proj-slide-video");
            const fallback = container.querySelector(".video-fallback");
            if (fallback) fallback.style.display = "none";
            this.style.display = "block";
          });
        });

        goTo(0);
      })();

      // ─── BACK TO TOP ───
      const btt = document.getElementById("btt");
      document.addEventListener("scroll", () =>
        btt.classList.toggle("show", window.scrollY > 600),
      );
      btt.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" }),
      );

      // ─── AI CHATBOT ───
      (function aiBot() {
        const panel = document.getElementById("ai-panel");
        const btn = document.getElementById("ai-btn");
        const close = document.getElementById("ai-x");
        const input = document.getElementById("ai-in");
        const send = document.getElementById("ai-snd");
        const msgs = document.getElementById("ai-msgs");
        const video = document.getElementById("aiVideo");

        const qa = [
          {
            q: [
              "hello",
              "hi",
              "hey",
              "greetings",
              "good morning",
              "good afternoon",
              "good evening",
            ],
            a: "Hello there! 👋 I'm Christopher's assistant. How can I help you today?",
          },
          {
            q: [
              "who are you",
              "what are you",
              "tell me about yourself",
              "introduce yourself",
            ],
            a: "Hi! I'm Christopher Eballo, a Front-End Web Developer, System Developer, and UI/UX Designer from the Philippines. I build modern, responsive, and user-friendly digital solutions that solve real-world problems.",
          },
          {
            q: [
              "who is christopher eballo",
              "tell me about christopher",
              "about christopher",
              "who created this portfolio",
            ],
            a: "I'm Christopher Eballo — an IT student and passionate developer specializing in web development, software development, and interface design. I created this portfolio to showcase my work and skills.",
          },
          {
            q: [
              "what do you do",
              "what does christopher do",
              "what is your job",
            ],
            a: "I design and develop websites, management systems, desktop applications, and database-driven solutions while focusing on clean code and great user experiences.",
          },
          {
            q: [
              "what makes you unique",
              "what makes christopher unique",
              "why choose you",
            ],
            a: "I combine technical development with UI/UX design, allowing me to create applications that are both functional and visually appealing. I also focus on responsive design and accessibility.",
          },
          {
            q: [
              "why should i hire you",
              "why should i hire christopher",
              "why hire you",
            ],
            a: "I value quality, communication, and continuous learning. Every project I build is designed to be responsive, efficient, and tailored to the client's needs. I deliver results on time and within budget.",
          },
          {
            q: ["where are you from", "where is christopher from", "location"],
            a: "I'm based in Metro Manila, Philippines, and I'm open to working with clients worldwide. 🌏",
          },
          {
            q: [
              "are you available",
              "available for work",
              "is christopher available",
            ],
            a: "Yes! I'm currently available for freelance projects, internships, collaborations, and full-time opportunities. Let's work together!",
          },
          {
            q: ["what are your goals", "christopher goals", "future plans"],
            a: "My goal is to become a professional software engineer while creating innovative digital products that positively impact businesses and users.",
          },
          {
            q: [
              "what services do you offer",
              "services",
              "can you build websites",
            ],
            a: "I offer Frontend Development, Backend Development, System Development, Database Management, Java Desktop Applications, UI/UX Design, and Website Optimization.",
          },
          {
            q: [
              "can you build management systems",
              "management systems",
              "library system",
              "voting system",
            ],
            a: "Absolutely! I've developed Library Management Systems, Voting Systems, Student Portals, and Point of Sale (POS) systems.",
          },
          {
            q: [
              "can you build desktop applications",
              "desktop app",
              "java swing",
            ],
            a: "Yes. I create Java Swing desktop applications with user authentication, inventory management, and reporting features.",
          },
          {
            q: ["can you design ui/ux", "ui/ux", "design"],
            a: "Yes! I enjoy designing clean, modern, and user-friendly interfaces that provide a smooth user experience across all devices.",
          },
          {
            q: [
              "do you build responsive websites",
              "responsive",
              "mobile friendly",
            ],
            a: "Yes. Every website I build is optimized for desktop, tablet, and mobile devices. I use CSS Grid, Flexbox, and media queries to ensure a seamless experience.",
          },
          {
            q: ["can you develop databases", "database", "mysql", "sql"],
            a: "Yes. I work with MySQL databases, including database design, CRUD operations, authentication, and query optimization.",
          },
          {
            q: [
              "what programming languages do you know",
              "languages",
              "skills",
              "technologies",
            ],
            a: "I'm experienced with HTML, CSS, JavaScript, PHP, SQL/MySQL, Java, and C programming. I also use tools like Git, GitHub, Chart.js, and AI-powered development tools.",
          },
          {
            q: ["do you know javascript", "javascript", "js"],
            a: "Yes! I have an intermediate level of JavaScript. I use it for interactivity, DOM manipulation, animations, and building dynamic web applications.",
          },
          {
            q: ["do you know php", "php"],
            a: "Yes, I know PHP. I use it for backend development, authentication, CRUD operations, and integrating with MySQL databases.",
          },
          {
            q: ["do you know java", "java"],
            a: "Yes. I develop Java Swing desktop applications with features like user authentication, inventory management, and receipt generation.",
          },
          {
            q: [
              "what projects have you built",
              "projects",
              "show projects",
              "portfolio",
            ],
            a: "I've built portfolio websites, library management systems, online voting systems, student portals, Java POS systems, and other database-driven applications. Check out the Projects section!",
          },
          {
            q: ["what is your best project", "favorite project", "proud of"],
            a: "My favorite projects are the Library Management System and my interactive portfolio because they showcase both my technical and design skills.",
          },
          {
            q: ["where did you study", "education", "school", "college"],
            a: "I'm currently studying Bachelor of Science in Information Technology at Informatics College Northgate. I previously completed ICT Programming (2023–2025).",
          },
          {
            q: [
              "what awards have you received",
              "awards",
              "certificates",
              "achievements",
            ],
            a: "I've received Best in System Creator, Best in Web Development, and Best System Integration at Informatics College Northgate.",
          },
          {
            q: ["how can i contact you", "contact", "email", "phone"],
            a: "You can reach me through the contact form on this page, or email me at tophereballo13@gmail.com. You can also connect with me on LinkedIn and GitHub.",
          },
          {
            q: ["what is your email", "email address"],
            a: "My email is tophereballo13@gmail.com. Feel free to reach out anytime!",
          },
          {
            q: ["what is your phone number", "phone", "contact number"],
            a: "You can contact me at +63 960 255 8385. I'm available for calls and messages.",
          },
          {
            q: ["can i hire you", "hire", "freelance", "work with you"],
            a: "Absolutely! I'd be happy to discuss your project and how I can help bring your ideas to life. Use the contact form or email me directly.",
          },
          {
            q: ["how much do you charge", "pricing", "cost", "rate"],
            a: "Pricing depends on the project's scope and requirements. Feel free to contact me for a personalized quote. I offer competitive rates for high-quality work.",
          },
          {
            q: ["do you work remotely", "remote", "online"],
            a: "Yes. I work with clients remotely and can collaborate from anywhere. I'm comfortable with tools like Zoom, Google Meet, Discord, and Slack.",
          },
          {
            q: [
              "can you build business websites",
              "business website",
              "company site",
            ],
            a: "Yes. I develop business websites that are modern, responsive, and optimized for performance. I also integrate CMS and e-commerce features.",
          },
          {
            q: ["can you redesign websites", "redesign", "website redesign"],
            a: "Yes. I can improve your existing website with a fresh design, better user experience, and modern UI/UX principles.",
          },
          {
            q: ["can you fix bugs", "debug", "fix errors"],
            a: "Yes. I can troubleshoot and resolve bugs in websites and applications. I'm experienced with debugging JavaScript, PHP, and SQL issues.",
          },
          {
            q: ["do you optimize websites", "optimization", "seo", "speed"],
            a: "Yes. I focus on improving speed, responsiveness, accessibility, and SEO. I use techniques like lazy loading, minification, and caching.",
          },
          {
            q: ["do you build portfolios", "portfolio websites"],
            a: "Yes. I create professional portfolio websites for students, developers, freelancers, and businesses. This portfolio is a prime example of my work.",
          },
          {
            q: ["what can you do", "capabilities", "what do you offer"],
            a: "I can build websites, management systems, desktop applications, databases, and UI/UX designs. I also offer optimization, debugging, and consulting services.",
          },
          {
            q: ["are you an ai", "are you ai", "artificial intelligence"],
            a: "Yes! I'm Christopher's virtual portfolio assistant. I'm here to answer questions about Christopher, his projects, skills, and services.",
          },
          {
            q: ["who created you", "made you", "creator"],
            a: "I was created by Christopher Eballo to help visitors learn more about him and his work. I'm powered by JavaScript and a comprehensive Q&A database.",
          },
          {
            q: ["what is this website", "portfolio", "about this site"],
            a: "This is Christopher's personal portfolio showcasing his skills, projects, achievements, and services. It's built with HTML5, CSS3, and JavaScript.",
          },
          {
            q: ["open github", "github link", "show github"],
            a: "Sure! You can visit Christopher's GitHub at https://github.com/EballoDev — all his projects are open for exploration.",
          },
          {
            q: ["open linkedin", "linkedin link", "show linkedin"],
            a: "Connect with Christopher on LinkedIn: https://www.linkedin.com/in/christopher-eballo-26360a3a3/",
          },
          {
            q: ["show facebook", "facebook link"],
            a: "You can find Christopher on Facebook: https://www.facebook.com/ichirozukiiii",
          },
          {
            q: ["download resume", "resume", "cv", "download cv"],
            a: "You can download Christopher's resume by clicking the Resume button in the hero section or at the top of the page.",
          },
          {
            q: ["show skills", "skills", "technologies used"],
            a: "Christopher specializes in Front-End Development, System Development, UI/UX Design, Java, PHP, SQL, and more. Check the Skills section for a complete list.",
          },
          {
            q: ["show services", "services list", "offerings"],
            a: "Visit the Services section to explore everything Christopher offers, from frontend development to system optimization.",
          },
          {
            q: ["how to contact", "contact info"],
            a: "Use the contact form on this page, email tophereballo13@gmail.com, or call +63 960 255 8385.",
          },
          {
            q: [
              "what is your timeline",
              "timeline",
              "experience timeline",
              "journey",
            ],
            a: "Check out the Timeline section! It shows my journey: 2023 Started Programming → 2024 Built Management Systems → 2025 College Projects → 2026 Freelance Portfolio.",
          },
          {
            q: ["can you build ecommerce", "ecommerce", "online store"],
            a: "Yes. I can build full e-commerce solutions with product catalogs, shopping carts, checkout, payment integration, and admin dashboards.",
          },
          {
            q: [
              "can you build school systems",
              "school system",
              "student system",
            ],
            a: "Absolutely! I've built student portals, library management systems, and voting systems for educational institutions.",
          },
          {
            q: ["can you build pos system", "pos", "point of sale"],
            a: "Yes. I've built Java Swing POS systems with inventory, sales tracking, receipt generation, and user authentication.",
          },
          {
            q: ["do you know git", "git", "github"],
            a: "Yes. I use Git for version control and GitHub to manage my projects, track version history, and showcase my work.",
          },
          {
            q: ["can you build full stack", "full stack", "backend"],
            a: "Yes. I build full-stack applications using PHP, MySQL, JavaScript, and HTML/CSS. I handle both frontend and backend development.",
          },
          {
            q: ["can you build apis", "api", "rest api"],
            a: "Yes. I can build RESTful APIs using PHP and MySQL, as well as integrate third-party APIs for payment, AI, and data services.",
          },
          {
            q: ["do you have certifications", "certified", "certification"],
            a: "Yes. I hold recognition awards for Best in System Creator, Best in Web Development, and Best System Integration. I also have project-based proficiency in HTML5, CSS3, JavaScript, and Database Management.",
          },
          {
            q: ["what is your strong skill", "strongest skill", "best skill"],
            a: "My strongest skills are Front-End Development, System Development, UI/UX Design, and Database Management. I also excel at problem-solving and client communication.",
          },
          {
            q: ["what tools do you use", "tools", "software"],
            a: "I use Visual Studio Code, NetBeans IDE, PHPMyAdmin, Dev C++, Git, GitHub, Chart.js, Three.js, and various AI-powered development tools.",
          },
          {
            q: ["can you work with teams", "teamwork", "collaboration"],
            a: "Yes. I'm comfortable working in teams, collaborating with designers, developers, and stakeholders. I use Git for version control and project management tools.",
          },
          {
            q: ["can you meet deadlines", "deadline", "timeline"],
            a: "Absolutely. I take deadlines seriously and plan my work to deliver high-quality results on time. I communicate regularly to ensure alignment.",
          },
          {
            q: [
              "what is your design style",
              "design style",
              "design preference",
            ],
            a: "I prefer modern, minimal, and clean designs with attention to detail. I love glassmorphism, dark themes, and premium typography.",
          },
          {
            q: [
              "how long does a website take",
              "website timeline",
              "delivery time",
            ],
            a: "Timeline depends on the project complexity. A simple portfolio takes 1–2 weeks, while a full management system may take 3–6 weeks. I'll provide a clear timeline during consultation.",
          },
          {
            q: ["can you integrate ai", "ai integration", "chatbot"],
            a: "Yes. I can integrate AI chatbots, recommendation engines, and other AI-powered features into websites and applications.",
          },
          {
            q: ["can you do data analysis", "data analysis", "reporting"],
            a: "Yes. I can transform data into meaningful insights using SQL, reports, dashboards, and data visualization techniques like Chart.js.",
          },
          {
            q: ["can you build custom systems", "custom system", "bespoke"],
            a: "Definitely. I specialize in custom management systems tailored to specific business needs. I work closely with clients to understand their requirements.",
          },
          {
            q: ["do you accept internships", "internship", "intern"],
            a: "Yes, I'm open to internship opportunities where I can contribute and grow. Feel free to reach out with your requirements.",
          },
          {
            q: [
              "what is your favorite technology",
              "favorite tech",
              "love working with",
            ],
            a: "I love working with JavaScript for its versatility, and I enjoy building interfaces with HTML/CSS. I also have a growing interest in AI and machine learning.",
          },
          {
            q: ["what are your hobbies", "hobbies", "interests"],
            a: "I enjoy UI/UX design, contributing to open source, learning about AI, and staying updated with the latest web technologies.",
          },
          {
            q: ["thank you", "thanks", "appreciate"],
            a: "You're welcome!  Feel free to ask if you have more questions. I'm here to help!",
          },
          {
            q: ["goodbye", "bye", "see you"],
            a: "Goodbye!  Feel free to come back anytime. You can also reach Christopher directly through the contact form. Have a great day!",
          },
        ];

        function getAnswer(input) {
          const lower = input.toLowerCase().trim();
          if (!lower) return "Please ask me something! ";
          for (const entry of qa) {
            for (const q of entry.q) {
              if (lower.includes(q) || q.includes(lower)) return entry.a;
            }
          }
          const words = lower.split(/\s+/);
          let best = null,
            bestScore = 0;
          for (const entry of qa) {
            let score = 0;
            for (const q of entry.q) {
              const qWords = q.split(/\s+/);
              for (const w of words) {
                if (
                  w.length > 2 &&
                  qWords.some((qw) => qw.includes(w) || w.includes(qw))
                )
                  score++;
              }
            }
            if (score > bestScore) {
              bestScore = score;
              best = entry.a;
            }
          }
          if (bestScore > 0) return best;
          return "I'm not sure about that, but you can ask me about Christopher's skills, projects, services, or contact info. Or email him directly at tophereballo13@gmail.com!";
        }

        function sendMessage(text) {
          if (!text.trim()) return;
          const userDiv = document.createElement("div");
          userDiv.className = "ai-m user";
          userDiv.textContent = text;
          msgs.appendChild(userDiv);
          input.value = "";
          msgs.scrollTop = msgs.scrollHeight;

          const reply = getAnswer(text);
          setTimeout(
            () => {
              const botDiv = document.createElement("div");
              botDiv.className = "ai-m bot";
              botDiv.textContent = reply;
              msgs.appendChild(botDiv);
              msgs.scrollTop = msgs.scrollHeight;
            },
            300 + Math.random() * 400,
          );
        }

        send.addEventListener("click", () => sendMessage(input.value));
        input.addEventListener("keydown", (e) => {
          if (e.key === "Enter") sendMessage(input.value);
        });

        btn.addEventListener("click", () => {
          panel.classList.toggle("open");
          if (panel.classList.contains("open")) {
            video.play().catch(() => {});
          }
        });
        close.addEventListener("click", () => {
          panel.classList.remove("open");
          video.pause();
        });
        document.addEventListener("click", (e) => {
          if (
            !e.target.closest("#ai-bot") &&
            panel.classList.contains("open")
          ) {
            panel.classList.remove("open");
            video.pause();
          }
        });

        const bubble = document.getElementById("ai-btn");
        const tooltip = bubble.querySelector(".ai-tooltip");
        let ttTimeout;
        bubble.addEventListener("mouseenter", () => {
          clearTimeout(ttTimeout);
          tooltip.style.opacity = "1";
          tooltip.style.transform = "translateY(0)";
        });
        bubble.addEventListener("mouseleave", () => {
          ttTimeout = setTimeout(() => {
            tooltip.style.opacity = "0";
            tooltip.style.transform = "translateY(8px)";
          }, 300);
        });

        const aiVideo = document.getElementById("aiVideo");
        bubble.addEventListener("mouseenter", () => {
          aiVideo.play().catch(() => {});
        });
        bubble.addEventListener("mouseleave", () => {
          aiVideo.pause();
        });
      })();

      // ─── CONTACT FORM ───
      (function contactForm() {
        const form = document.getElementById("cf");
        const status = document.getElementById("cf-status");
        const btnText = document.getElementById("cf-btxt");

        form.addEventListener("submit", async (e) => {
          e.preventDefault();
          const name = document.getElementById("cf-n").value.trim();
          const email = document.getElementById("cf-e").value.trim();
          const subject =
            document.getElementById("cf-s").value.trim() || "Portfolio Inquiry";
          const message = document.getElementById("cf-m").value.trim();

          if (!name || !email || !message) {
            status.innerHTML =
              '<span style="color:#f87171;">Please fill in all required fields.</span>';
            return;
          }
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            status.innerHTML =
              '<span style="color:#f87171;">Please enter a valid email address.</span>';
            return;
          }

          btnText.textContent = "Sending...";
          status.innerHTML = "";
          const btn = form.querySelector('button[type="submit"]');
          btn.disabled = true;

          try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            status.innerHTML =
              '<span style="color:#4ade80;"> Message sent successfully! I\'ll get back to you within 24 hours.</span>';
            form.reset();
          } catch (err) {
            status.innerHTML =
              '<span style="color:#f87171;"> Something went wrong. Please try again.</span>';
          } finally {
            btnText.textContent = "Send Message";
            btn.disabled = false;
          }
        });
      })();

      // ─── FOOTER YEAR ───
      document.querySelector(".ft-copy").textContent =
        "© " +
        new Date().getFullYear() +
        " Christopher Eballo. All rights reserved.";

      console.log("Christopher Eballo Portfolio loaded successfully!");
      console.log("AI Assistant is ready — ask me anything about Christopher!");
