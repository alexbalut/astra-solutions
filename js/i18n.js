(function () {
  "use strict";

  var STORAGE_KEY = "cindaraLang";

  var dict = {
    en: {
      "meta.index.title": "Cindara — Practical B2B software",
      "meta.index.desc": "Cindara builds practical B2B software for operators — custom tools, integrations, productized tools, and implementation. Montréal / Québec.",
      "meta.services.title": "Services — Cindara",
      "meta.services.desc": "Cindara services: custom software, integrations & APIs, productized tools, and implementation support.",
      "meta.about.title": "About — Cindara",
      "meta.about.desc": "About Cindara — a Montréal / Québec B2B software shop building practical tools for operators.",
      "meta.contact.title": "Contact — Cindara",
      "meta.contact.desc": "Contact Cindara — ask about custom B2B software, integrations, or productized tools.",
      "meta.privacy.title": "Privacy — Cindara",
      "meta.privacy.desc": "Privacy note for the Cindara marketing site.",

      "skip": "Skip to content",
      "logo.aria": "Cindara home",
      "nav.primary": "Primary",
      "nav.mobile": "Mobile",
      "nav.home": "Home",
      "nav.services": "Services",
      "nav.about": "About",
      "nav.contact": "Contact",
      "nav.open": "Open menu",
      "nav.close": "Close menu",
      "lang.label": "Language",

      "footer.tagline": "Practical B2B software for operators. Montréal, Québec.",
      "footer.taglineAlt": "Logiciels pour opérateurs — conçus à Montréal.",
      "footer.navigate": "Navigate",
      "footer.connect": "Connect",
      "footer.privacy": "Privacy",
      "footer.copy": "© 2026 Cindara · cindara.dev",

      "home.hero.aria": "Introduction",
      "home.hero.eyebrow": "B2B software · Montréal",
      "home.hero.title": "Software that fits how you operate",
      "home.hero.lead": "Cindara designs and builds practical tools for operators—custom systems, integrations, and productized software that match the work on the ground.",
      "home.hero.cta1": "Start a conversation",
      "home.hero.cta2": "View services",
      "home.hero.fr": "Basé à Montréal — outils conçus pour les opérateurs du Québec et d’ailleurs.",
      "home.slides": "Hero slides",
      "home.slide1": "Slide 1",
      "home.slide2": "Slide 2",
      "home.slide3": "Slide 3",
      "home.pause": "Pause slideshow",
      "home.play": "Play slideshow",

      "home.what.eyebrow": "What we do",
      "home.what.title": "Four lanes. One standard.",
      "home.what.lead": "Custom software, integrations, productized tools, and hands-on delivery—scoped to what you need, not a package deal.",
      "home.offer1.title": "Custom software",
      "home.offer1.body": "Web apps and internal tools shaped around your process—not the other way around.",
      "home.offer2.title": "Integrations & APIs",
      "home.offer2.body": "Connect billing, CRM, access control, and the systems you already rely on.",
      "home.offer3.title": "Productized tools",
      "home.offer3.body": "Repeatable problems get ready-to-run products—configured to your brand, faster to launch.",
      "home.offer4.title": "Implementation",
      "home.offer4.body": "Onboarding, training, and ongoing support so the software sticks with your team.",
      "home.learnMore": "Learn more",

      "home.built.aria": "Technology",
      "home.built.eyebrow": "Built for operators",
      "home.built.title": "Clear scope. Usable delivery.",
      "home.built.body": "We listen to how your team works, then ship software that fits—documented, maintainable, and ready for the people who use it every day.",

      "home.how.eyebrow": "How we work",
      "home.how.title": "Short cycles. Clear ownership.",
      "home.how.lead": "No mystery roadmaps—just concrete plans and usable increments.",
      "home.step1.title": "Listen",
      "home.step1.body": "We learn your workflows, staff needs, and constraints before proposing tools.",
      "home.step2.title": "Scope",
      "home.step2.body": "A concrete plan: what’s in, what’s out, and what “done” looks like.",
      "home.step3.title": "Build",
      "home.step3.body": "Ship usable increments—product or custom—with you in the loop.",
      "home.step4.title": "Support",
      "home.step4.body": "Handoff, training, and a clear path for fixes and improvements.",

      "home.cta.title": "Ready to get started?",
      "home.cta.body": "Tell us what you’re building or connecting. We’ll reply with clear next steps—or an honest “not the right fit.”",
      "home.cta.btn": "Contact Cindara",

      "services.eyebrow": "Services",
      "services.title": "What we build and how we deliver",
      "services.lead": "Four lanes of work—custom builds, integrations, productized tools, and support—so you can start with what you need, not a package deal.",
      "services.s1.title": "Custom software",
      "services.s1.p1": "When spreadsheets, generic SaaS, or a patchwork of tools stop scaling with your operation, we design and build software around how you actually work.",
      "services.s1.p2": "Typical scope includes internal dashboards, client-facing web apps, staff workflows, and lightweight admin tools. We keep the stack pragmatic and the interface clear.",
      "services.s1.li1": "Discovery workshops with operators and staff",
      "services.s1.li2": "Web apps prioritized for real devices in the office or on site",
      "services.s1.li3": "Handoff documentation and training for your team",
      "services.s2.title": "Integrations & APIs",
      "services.s2.p1": "Most businesses already have a stack. We connect the pieces—billing, CRM, access systems, messaging, spreadsheets—so data moves without manual copy-paste.",
      "services.s2.p2": "We prefer durable, documented integrations over fragile one-offs. If an API doesn’t exist yet, we help define one that your future tools can reuse.",
      "services.s2.li1": "API design and connector development",
      "services.s2.li2": "Webhook and sync flows between existing tools",
      "services.s2.li3": "Clear ownership of credentials, environments, and failure modes",
      "services.s3.title": "Productized tools",
      "services.s3.p1": "Some problems repeat across operators. For those, we build products you can adopt faster—configured to your brand, without starting from a blank repo.",
      "services.s3.p2": "You get a shorter path from decision to live, content and branding you control, and room to customize when your operation needs it.",
      "services.s3.li1": "Faster path from decision to production",
      "services.s3.li2": "Configuration and branding you own",
      "services.s3.li3": "Extension points when a one-size fit isn’t enough",
      "services.s4.title": "Implementation & support",
      "services.s4.p1": "Software only helps if people use it. We stay through rollout: setup, staff training, content migration, and a practical support channel after launch.",
      "services.s4.li1": "Onboarding plans sized to your team",
      "services.s4.li2": "Setup and content guidance for launch",
      "services.s4.li3": "Ongoing fixes and small improvements on agreed terms",
      "services.bleed.aria": "Desk and code",
      "services.bleed.eyebrow": "Delivery",
      "services.bleed.title": "From scope to something staff will use",
      "services.bleed.body": "We stay through rollout—training, handoff, and a clear path for what comes next.",
      "services.cta.title": "Not sure which lane fits?",
      "services.cta.body": "Describe the problem. We’ll tell you honestly whether custom, productized, or “you don’t need us yet” is the right answer.",
      "services.cta.btn": "Get in touch",

      "about.eyebrow": "About",
      "about.title": "Built in Montréal for teams that care about the details",
      "about.lead": "Cindara is a B2B software practice: custom tools, integrations, and productized software—grounded in how businesses actually run day to day.",
      "about.p1": "We started from a simple observation: a lot of software sold to small and mid-sized businesses is either too generic or overly complex. Operators need tools that fit the work—not the other way around.",
      "about.p2": "We take on custom software and integration work for teams who need something their current stack can’t do. Same standards either way—clear scope, usable delivery, honest communication.",
      "about.p3": "We’re rooted in Montréal and Québec. English is fine for most clients; we’re comfortable working with operators across the city and beyond.",
      "about.note.html": "<strong>Cindara</strong> is our company. The site lives at <a href=\"https://cindara.dev\">cindara.dev</a>.",
      "about.img.alt": "Dark desk with a monitor showing code",
      "about.caption": "Building practical software from Montréal — clear scope, usable delivery.",
      "about.principles.eyebrow": "Principles",
      "about.principles.title": "Values we operate by",
      "about.principles.lead": "Short list. We use it when scoping work and when saying no.",
      "about.v1.title": "Clarity over hype",
      "about.v1.body": "We describe what the software does and what it doesn’t. No invented metrics or borrowed logos.",
      "about.v2.title": "Operator reality",
      "about.v2.body": "Staff time and real-world constraints come before feature lists.",
      "about.v3.title": "Durable delivery",
      "about.v3.body": "Ship something usable, document it, and leave you able to run it—not dependent on mystery.",
      "about.cta.title": "Want to work together?",
      "about.cta.body": "Custom project, integration, or a productized tool—start with a short note.",
      "about.cta.btn": "Contact us",

      "contact.eyebrow": "Contact",
      "contact.title": "Tell us what you’re working on",
      "contact.lead": "A custom build, an integration question, or a productized tool—send a short note. We’ll reply with next steps.",
      "contact.next.title": "What happens next",
      "contact.next.intro": "This form is client-side for this demo site—it validates your input and shows a success message. For a real conversation, email us directly.",
      "contact.next1.title": "We read your note",
      "contact.next1.body": "Usually within one business day.",
      "contact.next2.title": "Short reply or call",
      "contact.next2.body": "Clarify fit, timeline, and whether custom or productized work makes sense.",
      "contact.next3.title": "Concrete next step",
      "contact.next3.body": "A scoped proposal, a discovery call, or an honest “not the right fit.”",
      "contact.prefer": "Prefer email?",
      "contact.success.title": "Message ready",
      "contact.success.html": "Thanks—your details look good. On this demo site nothing is sent to a server. Email <a href=\"mailto:hello@cindara.dev\">hello@cindara.dev</a> with the same info, or reconnect this form to your backend when you’re ready.",
      "contact.label.name": "Name",
      "contact.label.email": "Email",
      "contact.label.company": "Company",
      "contact.label.companyHint": "(required)",
      "contact.label.interest": "I’m interested in",
      "contact.label.message": "Message",
      "contact.option.blank": "Select a topic…",
      "contact.option.custom": "Custom software",
      "contact.option.integrations": "Integrations / APIs",
      "contact.option.productized": "Productized tools",
      "contact.option.support": "Implementation & support",
      "contact.option.other": "Something else",
      "contact.placeholder.message": "What you’re trying to improve, systems involved, timeline…",
      "contact.submit": "Send message",
      "contact.disclaimer.html": "Client-side validation only—no data is stored by this static site. See our <a href=\"privacy.html\">privacy note</a>.",
      "contact.err.name": "Please enter your name.",
      "contact.err.email": "Please enter a valid email address.",
      "contact.err.company": "Please enter your company name.",
      "contact.err.interest": "Please select a topic.",
      "contact.err.message": "Please add a short message (at least 10 characters).",

      "privacy.eyebrow": "Legal",
      "privacy.title": "Privacy note",
      "privacy.lead": "A short, honest summary for this static marketing site.",
      "privacy.intro": "This website is a static marketing site for Cindara. It does not run a backend contact database and does not intentionally collect personal information through the contact form.",
      "privacy.form.h": "Contact form",
      "privacy.form.p": "The contact form validates your input in the browser and shows a success message. Form data is not sent to or stored on our servers from this demo deployment. If you email us (for example at hello@cindara.dev), that correspondence is handled like normal email.",
      "privacy.host.h": "Hosting & logs",
      "privacy.host.p": "If this site is hosted on GitHub Pages or a similar static host, the host may collect standard server or CDN logs (such as IP address, browser type, and pages requested). We do not control those systems beyond choosing a host.",
      "privacy.fonts.h": "Fonts",
      "privacy.fonts.p": "Pages may load the Inter typeface from Google Fonts. Google may process connection data according to their own policies when fonts are fetched.",
      "privacy.cookies.h": "Cookies & preferences",
      "privacy.cookies.p": "This site does not set analytics or advertising cookies. Your language preference (EN/FR) may be stored in your browser’s local storage. Your browser may still store ordinary technical data for fonts or caching.",
      "privacy.products.h": "Products",
      "privacy.products.p": "If you use Cindara software products later, those products will have their own privacy terms covering operator and end-user data. This page only covers the marketing website.",
      "privacy.contact.h": "Contact",
      "privacy.contact.html": "Questions about this note: <a href=\"mailto:hello@cindara.dev\">hello@cindara.dev</a>.",
      "privacy.updated": "Last updated: September 2026. Written for a demo / early marketing site—update when you add analytics, a real form backend, or product accounts."
    },

    fr: {
      "meta.index.title": "Cindara — Logiciels B2B pratiques",
      "meta.index.desc": "Cindara conçoit des logiciels B2B pratiques pour les opérateurs — outils sur mesure, intégrations, produits prêts à l’emploi et mise en œuvre. Montréal / Québec.",
      "meta.services.title": "Services — Cindara",
      "meta.services.desc": "Services Cindara : logiciels sur mesure, intégrations et API, outils productisés et accompagnement à la mise en œuvre.",
      "meta.about.title": "À propos — Cindara",
      "meta.about.desc": "À propos de Cindara — une équipe logicielle B2B à Montréal / Québec qui conçoit des outils pratiques pour les opérateurs.",
      "meta.contact.title": "Contact — Cindara",
      "meta.contact.desc": "Contactez Cindara — logiciels B2B sur mesure, intégrations ou outils productisés.",
      "meta.privacy.title": "Confidentialité — Cindara",
      "meta.privacy.desc": "Avis de confidentialité du site marketing Cindara.",

      "skip": "Aller au contenu",
      "logo.aria": "Accueil Cindara",
      "nav.primary": "Principal",
      "nav.mobile": "Mobile",
      "nav.home": "Accueil",
      "nav.services": "Services",
      "nav.about": "À propos",
      "nav.contact": "Contact",
      "nav.open": "Ouvrir le menu",
      "nav.close": "Fermer le menu",
      "lang.label": "Langue",

      "footer.tagline": "Logiciels B2B pratiques pour opérateurs. Montréal, Québec.",
      "footer.taglineAlt": "Software for operators — designed in Montréal.",
      "footer.navigate": "Navigation",
      "footer.connect": "Coordonnées",
      "footer.privacy": "Confidentialité",
      "footer.copy": "© 2026 Cindara · cindara.dev",

      "home.hero.aria": "Introduction",
      "home.hero.eyebrow": "Logiciels B2B · Montréal",
      "home.hero.title": "Des logiciels adaptés à votre façon d’opérer",
      "home.hero.lead": "Cindara conçoit et développe des outils pratiques pour les opérateurs — systèmes sur mesure, intégrations et logiciels productisés qui collent au travail sur le terrain.",
      "home.hero.cta1": "Démarrer une conversation",
      "home.hero.cta2": "Voir les services",
      "home.hero.fr": "Based in Montréal — tools built for operators in Québec and beyond.",
      "home.slides": "Diapositives du hero",
      "home.slide1": "Diapositive 1",
      "home.slide2": "Diapositive 2",
      "home.slide3": "Diapositive 3",
      "home.pause": "Mettre le diaporama en pause",
      "home.play": "Lire le diaporama",

      "home.what.eyebrow": "Ce que nous faisons",
      "home.what.title": "Quatre volets. Une même exigence.",
      "home.what.lead": "Logiciels sur mesure, intégrations, outils productisés et livraison concrète — calibrés sur vos besoins, pas sur un forfait.",
      "home.offer1.title": "Logiciels sur mesure",
      "home.offer1.body": "Applications web et outils internes façonnés autour de vos processus — pas l’inverse.",
      "home.offer2.title": "Intégrations et API",
      "home.offer2.body": "Reliez la facturation, le CRM, le contrôle d’accès et les systèmes sur lesquels vous comptez déjà.",
      "home.offer3.title": "Outils productisés",
      "home.offer3.body": "Les problèmes récurrents deviennent des produits prêts à démarrer — configurés à votre image, plus rapides à lancer.",
      "home.offer4.title": "Mise en œuvre",
      "home.offer4.body": "Onboarding, formation et soutien continu pour que le logiciel s’ancre dans votre équipe.",
      "home.learnMore": "En savoir plus",

      "home.built.aria": "Technologie",
      "home.built.eyebrow": "Conçu pour les opérateurs",
      "home.built.title": "Périmètre clair. Livraison utilisable.",
      "home.built.body": "Nous écoutons comment votre équipe travaille, puis livrons un logiciel qui s’y adapte — documenté, maintenable et prêt pour les personnes qui l’utilisent chaque jour.",

      "home.how.eyebrow": "Notre façon de travailler",
      "home.how.title": "Cycles courts. Responsabilités claires.",
      "home.how.lead": "Pas de feuilles de route mystérieuses — des plans concrets et des incréments utilisables.",
      "home.step1.title": "Écouter",
      "home.step1.body": "Nous apprenons vos flux, les besoins du personnel et vos contraintes avant de proposer des outils.",
      "home.step2.title": "Cadrer",
      "home.step2.body": "Un plan concret : ce qui est inclus, ce qui ne l’est pas, et à quoi ressemble « terminé ».",
      "home.step3.title": "Construire",
      "home.step3.body": "Livrer des incréments utilisables — produit ou sur mesure — avec vous dans la boucle.",
      "home.step4.title": "Soutenir",
      "home.step4.body": "Transfert, formation et un chemin clair pour les correctifs et les améliorations.",

      "home.cta.title": "Prêts à commencer?",
      "home.cta.body": "Parlez-nous de ce que vous construisez ou connectez. Nous répondrons avec des prochaines étapes claires — ou un « ce n’est pas le bon fit » honnête.",
      "home.cta.btn": "Contacter Cindara",

      "services.eyebrow": "Services",
      "services.title": "Ce que nous construisons et comment nous livrons",
      "services.lead": "Quatre volets de travail — sur mesure, intégrations, outils productisés et soutien — pour commencer par ce dont vous avez besoin, pas par un forfait.",
      "services.s1.title": "Logiciels sur mesure",
      "services.s1.p1": "Quand les tableurs, le SaaS générique ou un assemblage d’outils ne suivent plus votre opération, nous concevons et développons des logiciels autour de votre façon réelle de travailler.",
      "services.s1.p2": "Le périmètre typique inclut tableaux de bord internes, applications web côté client, flux pour le personnel et outils d’admin légers. Stack pragmatique, interface claire.",
      "services.s1.li1": "Ateliers de découverte avec opérateurs et personnel",
      "services.s1.li2": "Applications web pensées pour les appareils réels au bureau ou sur le terrain",
      "services.s1.li3": "Documentation de transfert et formation pour votre équipe",
      "services.s2.title": "Intégrations et API",
      "services.s2.p1": "La plupart des entreprises ont déjà une stack. Nous reliOns les pièces — facturation, CRM, accès, messagerie, tableurs — pour que les données circulent sans copier-coller manuel.",
      "services.s2.p2": "Nous privilégions des intégrations durables et documentées plutôt que des bricolages fragiles. Si une API n’existe pas encore, nous aidons à en définir une réutilisable.",
      "services.s2.li1": "Conception d’API et développement de connecteurs",
      "services.s2.li2": "Webhooks et flux de synchronisation entre outils existants",
      "services.s2.li3": "Propriété claire des identifiants, environnements et modes de défaillance",
      "services.s3.title": "Outils productisés",
      "services.s3.p1": "Certains problèmes se répètent d’un opérateur à l’autre. Pour ceux-là, nous construisons des produits à adopter plus vite — configurés à votre image, sans repartir d’un dépôt vide.",
      "services.s3.p2": "Vous gagnez un chemin plus court de la décision à la mise en ligne, un contenu et une image de marque que vous contrôlez, et de la marge pour personnaliser au besoin.",
      "services.s3.li1": "Chemin plus rapide de la décision à la production",
      "services.s3.li2": "Configuration et image de marque qui vous appartiennent",
      "services.s3.li3": "Points d’extension quand le prêt-à-porter ne suffit pas",
      "services.s4.title": "Mise en œuvre et soutien",
      "services.s4.p1": "Un logiciel n’aide que s’il est utilisé. Nous restons jusqu’au déploiement : configuration, formation, migration de contenu et un canal de soutien pratique après le lancement.",
      "services.s4.li1": "Plans d’onboarding adaptés à votre équipe",
      "services.s4.li2": "Accompagnement configuration et contenu pour le lancement",
      "services.s4.li3": "Correctifs et petites améliorations continus selon des modalités convenues",
      "services.bleed.aria": "Bureau et code",
      "services.bleed.eyebrow": "Livraison",
      "services.bleed.title": "Du cadrage à quelque chose que le personnel utilisera",
      "services.bleed.body": "Nous restons jusqu’au déploiement — formation, transfert et un chemin clair pour la suite.",
      "services.cta.title": "Pas sûr du bon volet?",
      "services.cta.body": "Décrivez le problème. Nous vous dirons honnêtement si le sur mesure, le productisé ou « vous n’avez pas encore besoin de nous » est la bonne réponse.",
      "services.cta.btn": "Nous écrire",

      "about.eyebrow": "À propos",
      "about.title": "Conçu à Montréal pour les équipes qui soignent les détails",
      "about.lead": "Cindara est une pratique logicielle B2B : outils sur mesure, intégrations et logiciels productisés — ancrés dans le quotidien réel des entreprises.",
      "about.p1": "Tout part d’une observation simple : beaucoup de logiciels vendus aux PME sont trop génériques ou trop complexes. Les opérateurs ont besoin d’outils qui collent au travail — pas l’inverse.",
      "about.p2": "Nous prenons en charge logiciels sur mesure et intégrations pour les équipes dont la stack actuelle ne suffit plus. Mêmes standards dans les deux cas — périmètre clair, livraison utilisable, communication franche.",
      "about.p3": "Nous sommes enracinés à Montréal et au Québec. Le français et l’anglais nous conviennent ; nous travaillons volontiers avec des opérateurs dans la ville et ailleurs.",
      "about.note.html": "<strong>Cindara</strong> est notre entreprise. Le site est à <a href=\"https://cindara.dev\">cindara.dev</a>.",
      "about.img.alt": "Bureau sombre avec un moniteur affichant du code",
      "about.caption": "Construire des logiciels pratiques depuis Montréal — périmètre clair, livraison utilisable.",
      "about.principles.eyebrow": "Principes",
      "about.principles.title": "Les valeurs qui guident notre travail",
      "about.principles.lead": "Liste courte. Nous l’utilisons pour cadrer le travail et pour dire non.",
      "about.v1.title": "La clarté avant le battage",
      "about.v1.body": "Nous décrivons ce que le logiciel fait — et ce qu’il ne fait pas. Pas de métriques inventées ni de logos empruntés.",
      "about.v2.title": "La réalité des opérateurs",
      "about.v2.body": "Le temps du personnel et les contraintes du terrain passent avant les listes de fonctionnalités.",
      "about.v3.title": "Une livraison durable",
      "about.v3.body": "Livrer quelque chose d’utilisable, le documenter, et vous laisser capables de le faire tourner — sans dépendance mystérieuse.",
      "about.cta.title": "Envie de collaborer?",
      "about.cta.body": "Projet sur mesure, intégration ou outil productisé — commencez par un court message.",
      "about.cta.btn": "Nous contacter",

      "contact.eyebrow": "Contact",
      "contact.title": "Parlez-nous de ce sur quoi vous travaillez",
      "contact.lead": "Un projet sur mesure, une question d’intégration ou un outil productisé — envoyez un court message. Nous répondrons avec les prochaines étapes.",
      "contact.next.title": "La suite",
      "contact.next.intro": "Ce formulaire est côté client pour ce site démo — il valide vos saisies et affiche un message de succès. Pour une vraie conversation, écrivez-nous directement.",
      "contact.next1.title": "Nous lisons votre message",
      "contact.next1.body": "Habituellement dans un jour ouvrable.",
      "contact.next2.title": "Courte réponse ou appel",
      "contact.next2.body": "Clarifier l’adéquation, l’échéancier, et si le sur mesure ou le productisé a du sens.",
      "contact.next3.title": "Prochaine étape concrète",
      "contact.next3.body": "Une proposition cadréе, un appel de découverte, ou un « ce n’est pas le bon fit » honnête.",
      "contact.prefer": "Préférez le courriel?",
      "contact.success.title": "Message prêt",
      "contact.success.html": "Merci — vos informations sont en ordre. Sur ce site démo, rien n’est envoyé à un serveur. Écrivez à <a href=\"mailto:hello@cindara.dev\">hello@cindara.dev</a> avec les mêmes infos, ou reconnectez ce formulaire à votre backend quand vous serez prêts.",
      "contact.label.name": "Nom",
      "contact.label.email": "Courriel",
      "contact.label.company": "Entreprise",
      "contact.label.companyHint": "(obligatoire)",
      "contact.label.interest": "Je m’intéresse à",
      "contact.label.message": "Message",
      "contact.option.blank": "Choisir un sujet…",
      "contact.option.custom": "Logiciel sur mesure",
      "contact.option.integrations": "Intégrations / API",
      "contact.option.productized": "Outils productisés",
      "contact.option.support": "Mise en œuvre et soutien",
      "contact.option.other": "Autre chose",
      "contact.placeholder.message": "Ce que vous voulez améliorer, les systèmes en jeu, l’échéancier…",
      "contact.submit": "Envoyer le message",
      "contact.disclaimer.html": "Validation côté client seulement — aucune donnée n’est stockée par ce site statique. Voir notre <a href=\"privacy.html\">avis de confidentialité</a>.",
      "contact.err.name": "Veuillez entrer votre nom.",
      "contact.err.email": "Veuillez entrer une adresse courriel valide.",
      "contact.err.company": "Veuillez entrer le nom de votre entreprise.",
      "contact.err.interest": "Veuillez choisir un sujet.",
      "contact.err.message": "Veuillez ajouter un court message (au moins 10 caractères).",

      "privacy.eyebrow": "Juridique",
      "privacy.title": "Avis de confidentialité",
      "privacy.lead": "Un résumé court et honnête pour ce site marketing statique.",
      "privacy.intro": "Ce site web est un site marketing statique pour Cindara. Il n’exécute pas de base de contacts côté serveur et ne collecte pas volontairement de renseignements personnels via le formulaire de contact.",
      "privacy.form.h": "Formulaire de contact",
      "privacy.form.p": "Le formulaire valide vos saisies dans le navigateur et affiche un message de succès. Les données du formulaire ne sont ni envoyées ni stockées sur nos serveurs dans ce déploiement démo. Si vous nous écrivez (par exemple à hello@cindara.dev), cette correspondance est traitée comme un courriel ordinaire.",
      "privacy.host.h": "Hébergement et journaux",
      "privacy.host.p": "Si ce site est hébergé sur GitHub Pages ou un hôte statique similaire, l’hôte peut collecter des journaux serveur ou CDN standard (adresse IP, type de navigateur, pages demandées). Nous ne contrôlons pas ces systèmes au-delà du choix de l’hôte.",
      "privacy.fonts.h": "Polices",
      "privacy.fonts.p": "Les pages peuvent charger la police Inter via Google Fonts. Google peut traiter des données de connexion selon ses propres politiques lors du téléchargement des polices.",
      "privacy.cookies.h": "Témoins et préférences",
      "privacy.cookies.p": "Ce site ne dépose pas de témoins d’analyse ou publicitaires. Votre préférence de langue (EN/FR) peut être enregistrée dans le stockage local de votre navigateur. Votre navigateur peut aussi conserver des données techniques ordinaires pour les polices ou la mise en cache.",
      "privacy.products.h": "Produits",
      "privacy.products.p": "Si vous utilisez plus tard des produits logiciels Cindara, ceux-ci auront leurs propres conditions de confidentialité couvrant les données des opérateurs et des utilisateurs finaux. Cette page ne couvre que le site marketing.",
      "privacy.contact.h": "Contact",
      "privacy.contact.html": "Questions sur cet avis : <a href=\"mailto:hello@cindara.dev\">hello@cindara.dev</a>.",
      "privacy.updated": "Dernière mise à jour : septembre 2026. Rédigé pour un site démo / marketing précoce — à mettre à jour si vous ajoutez de l’analytique, un vrai backend de formulaire ou des comptes produits."
    }
  };

  // Fix typos introduced in FR copy
  dict.fr["services.s2.p1"] = "La plupart des entreprises ont déjà une stack. Nous relions les pièces — facturation, CRM, accès, messagerie, tableurs — pour que les données circulent sans copier-coller manuel.";
  dict.fr["contact.next3.body"] = "Une proposition cadrée, un appel de découverte, ou un « ce n’est pas le bon fit » honnête.";

  var currentLang = "en";

  function detectLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "fr") return stored;
    } catch (e) { /* ignore */ }
    var nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
    if (nav.indexOf("fr") === 0) return "fr";
    return "en";
  }

  function t(key, lang) {
    lang = lang || currentLang;
    if (dict[lang] && dict[lang][key] != null) return dict[lang][key];
    if (dict.en && dict.en[key] != null) return dict.en[key];
    return key;
  }

  function applyAttr(selector, attrName, dataAttr) {
    document.querySelectorAll(selector).forEach(function (el) {
      var key = el.getAttribute(dataAttr);
      if (!key) return;
      var value = t(key);
      if (attrName === "text") {
        el.textContent = value;
      } else if (attrName === "html") {
        el.innerHTML = value;
      } else {
        el.setAttribute(attrName, value);
      }
    });
  }

  function apply(lang) {
    if (lang !== "en" && lang !== "fr") lang = "en";
    currentLang = lang;
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }

    applyAttr("[data-i18n]", "text", "data-i18n");
    applyAttr("[data-i18n-html]", "html", "data-i18n-html");
    applyAttr("[data-i18n-aria]", "aria-label", "data-i18n-aria");
    applyAttr("[data-i18n-title]", "title", "data-i18n-title");
    applyAttr("[data-i18n-placeholder]", "placeholder", "data-i18n-placeholder");
    applyAttr("[data-i18n-alt]", "alt", "data-i18n-alt");

    // Meta description + document title via data-i18n-meta / data-i18n-doc-title
    var meta = document.querySelector('meta[name="description"][data-i18n-meta]');
    if (meta) meta.setAttribute("content", t(meta.getAttribute("data-i18n-meta")));
    var titleEl = document.querySelector("title[data-i18n-doc-title]");
    if (titleEl) {
      var titleKey = titleEl.getAttribute("data-i18n-doc-title");
      titleEl.textContent = t(titleKey);
      document.title = t(titleKey);
    }

    document.querySelectorAll(".lang-switch").forEach(function (group) {
      group.setAttribute("aria-label", t("lang.label"));
      group.querySelectorAll("[data-lang]").forEach(function (btn) {
        var isActive = btn.getAttribute("data-lang") === lang;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-pressed", String(isActive));
      });
    });

    // Keep menu toggle label in sync with open/closed state
    var toggle = document.querySelector(".menu-toggle");
    if (toggle) {
      var open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-label", open ? t("nav.close") : t("nav.open"));
    }

    // Hero pause button label
    var pauseBtn = document.querySelector(".hero-pause");
    if (pauseBtn) {
      var paused = pauseBtn.getAttribute("aria-pressed") === "true";
      pauseBtn.setAttribute("aria-label", paused ? t("home.play") : t("home.pause"));
    }

    document.dispatchEvent(new CustomEvent("cindara:langchange", { detail: { lang: lang } }));
  }

  function bindSwitchers() {
    document.querySelectorAll(".lang-switch [data-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var lang = btn.getAttribute("data-lang");
        if (lang === currentLang) return;
        apply(lang);
      });
    });
  }

  function init() {
    bindSwitchers();
    apply(detectLang());
  }

  window.CindaraI18n = {
    t: t,
    apply: apply,
    detectLang: detectLang,
    getLang: function () { return currentLang; }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
