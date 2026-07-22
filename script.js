  // ================================================================
      //  EMAILJS CONFIG
      // ================================================================
      const EMAILJS = {
        publicKey: "zo3g6F2PlGBnyW-Ml",
        serviceId: "service_6vfw3iy",
        templateId: "template_ufcwq12",
      };

      // Initialize EmailJS
      (function initEmailJS() {
        try {
          emailjs.init(EMAILJS.publicKey);
          console.log(" EmailJS initialized");
        } catch (e) {
          console.warn(" EmailJS init error:", e);
        }
      })();

      // ================================================================
      //  LOADER
      // ================================================================
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

      // ================================================================
      //  SCROLL PROGRESS
      // ================================================================
      document.addEventListener("scroll", () => {
        const top = window.scrollY;
        const h = document.documentElement.scrollHeight - window.innerHeight;
        document.getElementById("sprog").style.width = h
          ? (top / h) * 100 + "%"
          : "0%";
      });

      // ================================================================
      //  THEME
      // ================================================================
      const themeBtn = document.getElementById("theme-btn");
      themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        themeBtn.querySelector("i").className =
          document.body.classList.contains("light")
            ? "fas fa-sun"
            : "fas fa-moon";
      });

      // ================================================================
      //  MOBILE NAV
      // ================================================================
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

      // ================================================================
      //  NAV SCROLL
      // ================================================================
      const nav = document.getElementById("nav");
      document.addEventListener("scroll", () =>
        nav.classList.toggle("scrolled", window.scrollY > 60),
      );

      // ================================================================
      //  NAV LINKS ACTIVE
      // ================================================================
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

      // ================================================================
      //  TYPED TEXT
      // ================================================================
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

      // ================================================================
      //  REVEAL ON SCROLL
      // ================================================================
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

      // ================================================================
      //  STATS COUNTER
      // ================================================================
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

      // ================================================================
      //  SKILL BARS
      // ================================================================
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

      // ================================================================
      //  RADAR CHART
      // ================================================================
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

      // ================================================================
      //  PROJECTS
      // ================================================================
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

        document.addEventListener("visibilitychange", () => {
          if (document.hidden) {
            videoElements.forEach((v) => v.pause());
          } else {
            const activeVid = videoElements[idx];
            if (activeVid) activeVid.play().catch(() => {});
          }
        });

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

      // ================================================================
      //  BACK TO TOP
      // ================================================================
      const btt = document.getElementById("btt");
      document.addEventListener("scroll", () =>
        btt.classList.toggle("show", window.scrollY > 600),
      );
      btt.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" }),
      );

      // ================================================================
      //  AI CHATBOT
      // ================================================================
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
            a: "Hello there!  I'm Christopher's assistant. How can I help you today?",
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
            a: "I'm based in Metro Manila, Philippines, and I'm open to working with clients worldwide. ",
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

      // ================================================================
      //  CONTACT FORM — "Get in Touch" (EmailJS)
      // ================================================================
      (function contactForm() {
        const form = document.getElementById("contactForm");
        const status = document.getElementById("ct-status");
        const btnText = document.getElementById("ct-btxt");
        const btn = document.getElementById("ct-send");

        form.addEventListener("submit", async (e) => {
          e.preventDefault();

          const name = document.getElementById("ct-name").value.trim();
          const email = document.getElementById("ct-email").value.trim();
          const subject =
            document.getElementById("ct-subject").value.trim() ||
            "Portfolio Inquiry";
          const message = document.getElementById("ct-message").value.trim();

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

          btn.disabled = true;
          btnText.textContent = "Sending...";
          status.innerHTML =
            '<span style="color:var(--text2);">⏳ Sending your message...</span>';

          try {
            const templateParams = {
              from_name: name,
              from_email: email,
              subject: subject,
              message: message,
              to_email: "tophereballo13@gmail.com",
            };

            await emailjs.send(
              EMAILJS.serviceId,
              EMAILJS.templateId,
              templateParams,
            );

            status.innerHTML =
              '<span style="color:#4ade80;"> Message sent successfully! I\'ll get back to you within 24 hours.</span>';
            form.reset();
          } catch (error) {
            console.error("EmailJS error:", error);
            status.innerHTML =
              '<span style="color:#f87171;"> Something went wrong. Please try again or email me directly at tophereballo13@gmail.com</span>';
          } finally {
            btn.disabled = false;
            btnText.textContent = "Send Message";
          }
        });
      })();

      // ================================================================
      //  PROJECT ONBOARDING — Full 13-step system with EmailJS
      // ================================================================
      let currentStep = 1;
      const totalSteps = 13;
      const onboardOverlay = document.getElementById("onboardOverlay");
      const onboardModal = document.getElementById("onboardModal");
      const stepDots = document.querySelectorAll("#onboardProgress .step-dot");
      const stepLabel = document.getElementById("onboardStepLabel");
      const prevBtn = document.getElementById("o-prev");
      const nextBtn = document.getElementById("o-next");
      const submitBtn = document.getElementById("o-submit");
      const loadingDiv = document.getElementById("onboardLoading");
      const successDiv = document.getElementById("onboardSuccess");
      const navDiv = document.getElementById("onboardNav");

      function openOnboarding() {
        onboardOverlay.classList.add("open");
        document.body.style.overflow = "hidden";
        currentStep = 1;
        showStep(currentStep);
      }

      function closeOnboarding() {
        onboardOverlay.classList.remove("open");
        document.body.style.overflow = "";
      }

      function resetOnboarding() {
        // Reset all steps to initial state
        document
          .querySelectorAll(
            ".onboard-step input, .onboard-step textarea, .onboard-step select",
          )
          .forEach((el) => {
            if (el.type === "checkbox") el.checked = false;
            else if (el.type === "file") el.value = "";
            else el.value = "";
          });
        document
          .querySelectorAll(".feature-grid label")
          .forEach((l) => l.classList.remove("checked"));
        document
          .querySelectorAll(".feature-grid input[type='checkbox']")
          .forEach((c) => (c.checked = false));
        document.getElementById("filePreviews").innerHTML = "";
        document.getElementById("descCount").textContent = "0";
        loadingDiv.classList.remove("active");
        successDiv.classList.remove("active");
        navDiv.style.display = "flex";
        currentStep = 1;
        showStep(currentStep);
        // Scroll to top of modal
        onboardModal.scrollTop = 0;
      }

      function showStep(step) {
        // Hide all steps
        document
          .querySelectorAll(".onboard-step")
          .forEach((el) => el.classList.remove("active"));
        // Show current
        const current = document.querySelector(
          `.onboard-step[data-step="${step}"]`,
        );
        if (current) current.classList.add("active");

        // Update dots
        stepDots.forEach((dot, i) => {
          dot.classList.remove("active", "done");
          if (i < step - 1) dot.classList.add("done");
          else if (i === step - 1) dot.classList.add("active");
        });

        // Update label
        const labels = [
          "Personal Information",
          "Project Information",
          "Project Description",
          "Project Goals",
          "Features Needed",
          "Design Preference",
          "Budget",
          "Deadline",
          "References",
          "File Upload",
          "Communication",
          "Additional Notes",
          "Agreement",
        ];
        stepLabel.textContent = `Step ${step} of ${totalSteps} · ${labels[step - 1] || ""}`;

        // Buttons
        prevBtn.style.display = step === 1 ? "none" : "inline-flex";
        if (step === totalSteps) {
          nextBtn.style.display = "none";
          submitBtn.style.display = "inline-flex";
        } else {
          nextBtn.style.display = "inline-flex";
          submitBtn.style.display = "none";
        }

        // Scroll to top of modal
        onboardModal.scrollTop = 0;

        // Update description char count
        if (step === 3) updateDescCount();
      }

      function nextStep() {
        if (!validateStep(currentStep)) return;
        if (currentStep < totalSteps) {
          currentStep++;
          showStep(currentStep);
        }
      }

      function prevStep() {
        if (currentStep > 1) {
          currentStep--;
          showStep(currentStep);
        }
      }

      function validateStep(step) {
        // Step 1: Personal Info
        if (step === 1) {
          const first = document.getElementById("o-first").value.trim();
          const last = document.getElementById("o-last").value.trim();
          const email = document.getElementById("o-email").value.trim();
          const phone = document.getElementById("o-phone").value.trim();
          const country = document.getElementById("o-country").value.trim();
          const city = document.getElementById("o-city").value.trim();
          if (!first) {
            alert("Please enter your first name.");
            return false;
          }
          if (!last) {
            alert("Please enter your last name.");
            return false;
          }
          if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert("Please enter a valid email address.");
            return false;
          }
          if (!phone) {
            alert("Please enter your phone number.");
            return false;
          }
          if (!country) {
            alert("Please enter your country.");
            return false;
          }
          if (!city) {
            alert("Please enter your city.");
            return false;
          }
          return true;
        }
        // Step 2: Project Info
        if (step === 2) {
          const title = document.getElementById("o-title").value.trim();
          const type = document.getElementById("o-type").value;
          if (!title) {
            alert("Please enter a project title.");
            return false;
          }
          if (!type) {
            alert("Please select a project type.");
            return false;
          }
          return true;
        }
        // Step 3: Description
        if (step === 3) {
          const desc = document.getElementById("o-desc").value.trim();
          if (desc.length < 100) {
            alert(
              "Please enter at least 100 characters for the project description.",
            );
            return false;
          }
          return true;
        }
        // Step 4: Goals
        if (step === 4) {
          const goals = document.getElementById("o-goals").value.trim();
          if (!goals) {
            alert("Please enter your project goals.");
            return false;
          }
          return true;
        }
        // Step 5: Features — optional, no validation needed
        if (step === 5) return true;
        // Step 6: Design
        if (step === 6) {
          const design = document.getElementById("o-design").value;
          if (!design) {
            alert("Please select a design preference.");
            return false;
          }
          return true;
        }
        // Step 7: Budget
        if (step === 7) {
          const budget = document.getElementById("o-budget").value;
          if (!budget) {
            alert("Please select a budget range.");
            return false;
          }
          return true;
        }
        // Step 8: Deadline
        if (step === 8) {
          const deadline = document.getElementById("o-deadline").value;
          if (!deadline) {
            alert("Please select a deadline.");
            return false;
          }
          return true;
        }
        // Step 9: References — optional
        if (step === 9) return true;
        // Step 10: File upload — optional
        if (step === 10) return true;
        // Step 11: Communication
        if (step === 11) {
          const comm = document.getElementById("o-comm").value;
          if (!comm) {
            alert("Please select a preferred communication method.");
            return false;
          }
          return true;
        }
        // Step 12: Notes — optional
        if (step === 12) return true;
        // Step 13: Agreement
        if (step === 13) {
          const agree = document.getElementById("o-agree").checked;
          if (!agree) {
            alert("Please agree to the terms before submitting.");
            return false;
          }
          return true;
        }
        return true;
      }

      // ── Description character count ──
      function updateDescCount() {
        const el = document.getElementById("o-desc");
        const count = document.getElementById("descCount");
        if (el && count) {
          count.textContent = el.value.length;
          el.addEventListener("input", () => {
            count.textContent = el.value.length;
          });
        }
      }

      // ── File preview ──
      document
        .getElementById("o-files")
        ?.addEventListener("change", function (e) {
          const container = document.getElementById("filePreviews");
          container.innerHTML = "";
          const files = Array.from(this.files);
          files.forEach((file) => {
            const badge = document.createElement("span");
            badge.style.cssText =
              "background:var(--glass2);padding:4px 12px;border-radius:100px;font-size:0.7rem;border:1px solid var(--border);color:var(--text2);";
            badge.textContent = `📎 ${file.name} (${(file.size / 1024).toFixed(1)}KB)`;
            container.appendChild(badge);
          });
          if (files.length === 0) container.innerHTML = "";
        });

      // ── Feature checkboxes toggle ──
      document
        .querySelectorAll(".feature-grid input[type='checkbox']")
        .forEach((cb) => {
          cb.addEventListener("change", function () {
            this.closest("label").classList.toggle("checked", this.checked);
          });
        });

      // ── Submit onboarding ──
      async function submitOnboard() {
        // Validate step 13
        if (!validateStep(13)) return;

        // Collect all data
        const data = {
          firstName: document.getElementById("o-first").value.trim(),
          lastName: document.getElementById("o-last").value.trim(),
          company: document.getElementById("o-company").value.trim(),
          email: document.getElementById("o-email").value.trim(),
          phone: document.getElementById("o-phone").value.trim(),
          country: document.getElementById("o-country").value.trim(),
          city: document.getElementById("o-city").value.trim(),
          timezone:
            document.getElementById("o-timezone").value.trim() ||
            "Not specified",
          projectTitle: document.getElementById("o-title").value.trim(),
          projectType: document.getElementById("o-type").value,
          description: document.getElementById("o-desc").value.trim(),
          goals: document.getElementById("o-goals").value.trim(),
          features: Array.from(
            document.querySelectorAll(
              ".feature-grid input[type='checkbox']:checked",
            ),
          ).map((el) => el.value),
          customFeatures: document
            .getElementById("o-custom-features")
            .value.trim(),
          design: document.getElementById("o-design").value,
          budget: document.getElementById("o-budget").value,
          deadline: document.getElementById("o-deadline").value,
          deadlineDate:
            document.getElementById("o-deadline-date").value || "Not specified",
          references:
            document.getElementById("o-refs").value.trim() || "None provided",
          communication: document.getElementById("o-comm").value,
          notes: document.getElementById("o-notes").value.trim() || "None",
          files:
            Array.from(document.getElementById("o-files").files)
              .map((f) => f.name)
              .join(", ") || "No files attached",
        };

        // Show loading
        navDiv.style.display = "none";
        loadingDiv.classList.add("active");
        const loadText = document.getElementById("loadText");
        const loadSteps = document.getElementById("loadSteps");
        const loadMessages = [
          "Preparing your request...",
          "Uploading files...",
          "Sending inquiry...",
          "Almost done...",
        ];
        let msgIdx = 0;
        const msgInterval = setInterval(() => {
          msgIdx = (msgIdx + 1) % loadMessages.length;
          loadText.textContent = loadMessages[msgIdx];
          if (msgIdx === 3) {
            loadSteps.textContent = "Finalizing your submission...";
          }
        }, 1200);

        try {
          // Build email body for the admin (you)
          const featureList = data.features.length
            ? data.features.map((f) => `✔ ${f}`).join("\n")
            : "None selected";
          const emailBody = `
        NEW PROJECT REQUEST

        CLIENT INFORMATION
        -------------------------------
        FIRST NAME: ${data.firstName}
        LAST NAME: ${data.lastName}
        COMPANY: ${data.company || "N/A"}
        EMAIL: ${data.email}
        PHONE: ${data.phone}
        COUNTRY: ${data.country}
        CITY: ${data.city}
        TIMEZONE: ${data.timezone}

        PROJECT INFORMATION
        -------------------------------
        PROJECT TITLE: ${data.projectTitle}
        PROJECT TYPE: ${data.projectType}

        PROJECT DESCRIPTION
        -------------------------------
        ${data.description}

        GOALS
        -------------------------------
        ${data.goals}

        FEATURES
        -------------------------------
        ${featureList}
        ${data.customFeatures ? `\nCUSTOM FEATURES: ${data.customFeatures}` : ""}

        DESIGN STYLE
        -------------------------------
        ${data.design}

        BUDGET
        -------------------------------
        ${data.budget}

        DEADLINE
        -------------------------------
        ${data.deadline} ${data.deadlineDate !== "Not specified" ? `(Date: ${data.deadlineDate})` : ""}

        REFERENCES
        -------------------------------
        ${data.references}

        FILES ATTACHED
        -------------------------------
        ${data.files}

        PREFERRED COMMUNICATION
        -------------------------------
        ${data.communication}

        ADDITIONAL NOTES
        -------------------------------
        ${data.notes}

        SUBMITTED: ${new Date().toLocaleString()}
        `;

          // Send to admin (you)
          const adminParams = {
            from_name: data.firstName + " " + data.lastName,
            from_email: data.email,
            subject: `NEW PROJECT REQUEST — ${data.projectTitle}`,
            message: emailBody,
            to_email: "tophereballo13@gmail.com",
          };

          await emailjs.send(
            EMAILJS.serviceId,
            EMAILJS.templateId,
            adminParams,
          );

          // Send auto-reply to client
          const replyBody = `
        THANK YOU FOR YOUR PROJECT INQUIRY!

        Hi ${data.firstName},

        Thank you for reaching out! I'm excited to learn about your project.

        I've successfully received your project request and will carefully review all the details you provided.

        You can expect a response within 24 hours regarding:
        • Project feasibility
        • Estimated timeline
        • Budget discussion
        • Recommended approach
        • Next steps

        If I need additional information, I'll contact you using your preferred communication method.

        Thank you for trusting me with your project.

        Best regards,
        Christopher Eballo
        Front-End Developer | System Developer | UI/UX Designer

        Portfolio: https://eballodev.github.io/Portfolio-/
        GitHub: https://github.com/EballoDev
        LinkedIn: https://www.linkedin.com/in/christopher-eballo-26360a3a3/
        Email: tophereballo13@gmail.com
        Phone: +63 960 255 8385
        `;

          const replyParams = {
            from_name: "Christopher Eballo",
            from_email: "tophereballo13@gmail.com",
            subject: "Thank You for Your Project Inquiry!",
            message: replyBody,
            to_email: data.email,
          };

          await emailjs.send(
            EMAILJS.serviceId,
            EMAILJS.templateId,
            replyParams,
          );

          // Success!
          clearInterval(msgInterval);
          loadingDiv.classList.remove("active");
          successDiv.classList.add("active");
        } catch (error) {
          console.error("Onboarding EmailJS error:", error);
          clearInterval(msgInterval);
          loadingDiv.classList.remove("active");
          navDiv.style.display = "flex";
          alert(
            " There was an error submitting your project request. Please try again or email me directly at tophereballo13@gmail.com",
          );
        }
      }

      // ── Keyboard navigation ──
      document.addEventListener("keydown", (e) => {
        if (!onboardOverlay.classList.contains("open")) return;
        if (e.key === "Escape") closeOnboarding();
        if (e.key === "Enter") {
          // Only if not in a textarea
          if (e.target.tagName !== "TEXTAREA") {
            if (currentStep === totalSteps) submitOnboard();
            else nextStep();
          }
        }
      });

      // ── Global exposure ──
      window.openOnboarding = openOnboarding;
      window.closeOnboarding = closeOnboarding;
      window.resetOnboarding = resetOnboarding;
      window.nextStep = nextStep;
      window.prevStep = prevStep;
      window.submitOnboard = submitOnboard;

      // ================================================================
      //  FOOTER YEAR
      // ================================================================
      document.querySelector(".ft-copy").textContent =
        "© " +
        new Date().getFullYear() +
        " Christopher Eballo. All rights reserved.";

      console.log(" Christopher Eballo Portfolio loaded successfully!");
      console.log(" EmailJS configured with service:", EMAILJS.serviceId);
      console.log(
        " AI Assistant is ready — ask me anything about Christopher!",
      );
      console.log(
        " Project Onboarding system ready — 13 steps to start your project!",
      );
