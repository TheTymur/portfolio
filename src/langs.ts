const translations: Record<string, Record<string, string>> = {
    en: {
        nav_home: "Home",
        nav_projects: "Projects",
        nav_aboutMe: "About me",
        nav_contactMe: "Contact me",
        hero_title: "Hello there, I'm Tymur",
        hero_subtitle: "A software engineer",
        hero_paragraph:"Student at Cracow University of Technology fascinated by the world of AI. I am actively learning how to build applications from the ground up and am eager to figure out how to program intelligent agents",
        project_title: "Featured Projects",
        proj1_paragraph: "Wizards War is a 2D turn-based battle game developed using Python and Pygame. \
                        The game pits two players against each other in an epic magical showdown. \
                        Players assume the roles of wizards, each equipped with health, mana, and a set of powerful spells. \
                        The goal is to outmaneuver and outlast your opponent by strategically managing resources, \
                        casting spells, and exploiting opportunities to claim victory.",
        proj1_lang: "Language: Python",
        proj1_library: "Library: Pygame",
        proj1_architecture: "Architecture: Modular",
        proj1_stateManager: "State Management: Global variables and standard control flow",
        proj2_paragraph: "GeoTracker&Notify is a desktop application that goes beyond standard to-do lists by\
                        triggering reminders based on your real-time geographic location. It combines a robust\
                        PyQt5\
                        interface with a background Flask server to handle geolocation data, ensuring you never\
                        forget a task when you arrive at a specific destination.",
        proj2_lang: "Language: Python, Javascript",
        proj2_backend: "Backend Logic: Flask",
        proj2_data: "Database: SQLite, SQLAlchemy (ORM)",
        proj2_migrationTool: "DataBase migration tool: Alembic",
        viewMore_btn: "View More",
        aboutMe_title: "About me",
        aboutMe_name: "Tymur Arseniuk",
        aboutMe_subtitle: "Material Informatics student",
        aboutMe_paragraph: "I am a student at the Cracow University of Technology driven by a deep fascination with complex logic and interactive systems. While pursuing my studies, I am channeling my energy into expanding my skills in software engineering and artificial intelligence. Currently, I am focused on building my own applications from scratch, learning how to integrate intelligent agents and data-driven mechanics to create smarter, more engaging user experiences.",
        contactMe_title: "Contact me",
        Email: "Email me Directly",
        contactMe_paragraph1: "I'm open to discussing new oportunities, collaborations or simply connecting. Drop me a line anytime.",
        contact_otherWay: "Connect Elsewhere",
        contactMe_paragraph2: "You can also find me on this platforms:"

    },

    pl: {
        nav_home: "Strona Główna",
        nav_projects: "Projekty",
        nav_aboutMe: "O mnie",
        nav_contactMe: "Kontakt",
        hero_title: "Cześć, jestem Tymur",
        hero_subtitle: "Inżynier oprogramowania",
        project_title: "Wyróżnione projekty",
        hero_paragraph:"Student Politechniki Krakowskiej, zafascynowany światem sztucznej inteligencji. Aktywnie uczę się budować aplikacje od podstaw i z zapałem odkrywam, jak programować inteligentnych agentów",
        proj1_paragraph: "WizardsWar to dwuwymiarowa, turowa gra bitewna stworzona przy użyciu języka Python i biblioteki Pygame. Gra stawia naprzeciwko siebie dwóch graczy w epickim, magicznym starciu. Gracze wcielają się w role czarodziejów, z których każdy dysponuje punktami zdrowia, maną oraz zestawem potężnych zaklęć. Celem jest przechytrzenie i przetrwanie przeciwnika poprzez strategiczne zarządzanie zasobami, rzucanie zaklęć i wykorzystywanie nadarzających się okazji, aby odnieść zwycięstwo.",
        proj1_lang: "Język programowania: Python",
        proj1_library: "Biblioteka: Pygame",
        proj1_architecture: "Architektura: Modularna",
        proj1_stateManager: "Zarządzanie stanem: Zmienne globalne i standardowy przepływ sterowania",
        proj2_paragraph: "GeoTracker&Notify to aplikacja desktopowa, która wykracza poza standardowe listy zadań, uruchamiając przypomnienia na podstawie Twojej lokalizacji geograficznej w czasie rzeczywistym. Łączy ona solidny interfejs PyQt5 z działającym w tle serwerem Flask służącym do obsługi danych geolokalizacyjnych, dając pewność, że nigdy nie zapomnisz o zadaniu po dotarciu do wyznaczonego miejsca.",
        proj2_lang: "Języki programowania: Python, JavaScript",
        proj2_backend: "Logika backendu: Flask",
        proj2_data: "Bazy danych: SQLite, SQLAlchemy (ORM)",
        proj2_migrationTool: "Narzędzie do migracji bazy danych: Alembic",
        viewMore_btn: "Zobacz więcej",
        aboutMe_title: "O mnie",
        aboutMe_name: "Tymur Arseniuk",
        aboutMe_subtitle: "Student Informatyki materiałowej",
        aboutMe_paragraph: "Studiuję na Politechnice Krakowskiej, a do działania napędza mnie głęboka fascynacja złożoną logiką i systemami interaktywnymi. W trakcie studiów całą swoją energię wkładam w poszerzanie umiejętności z zakresu inżynierii oprogramowania i sztucznej inteligencji. Obecnie skupiam się na tworzeniu własnych aplikacji od podstaw, ucząc się, jak integrować inteligentne agenty i mechaniki oparte na danych, aby kreować inteligentniejsze i bardziej angażujące doświadczenia dla użytkowników.",
        contactMe_title: "Kontakt ze mną",
        Email: "Wyslać e-mail bezpośrednio",
        contactMe_paragraph1: "Jestem otwarty na rozmowy o nowych możliwościach, współpracę lub po prostu nawiązanie kontaktu.",
        contact_otherWay: "Moje profile",
        contactMe_paragraph2: "Można mnie również znaleźć na tych platformach:"
    },

    ua:{
        nav_home: "Головна сторінка",
        nav_projects: "Проєкти",
        nav_aboutMe: "Про мене",
        nav_contactMe: "Контакт",
        hero_title: "Привіт, я Тимур",
        hero_subtitle: "Інженер ПЗ",
        project_title: "Вибрані проєкти",
        hero_paragraph:"Студент Краківської політехніки, захоплений світом штучного інтелекту. Я активно вчуся створювати додатки з нуля і з великим ентузіазмом досліджую, як програмувати ШІ агентів",
        proj1_paragraph: "WizardsWar — це двовимірна покрокова бойова гра, створена на Python з використанням бібліотеки Pygame. Гра зіштовхує двох гравців у епічному магічному протистоянні. Гравці виступають у ролі чарівників, кожен з яких має певну кількість очок здоров’я, мани та набір потужних заклинань. Мета — перехитрити та перемогти суперника завдяки стратегічному управлінню ресурсами, вчасному чаклунству та використанню кожної можливості для здобуття перемоги.",
        proj1_lang: "Мови програмування: Python",
        proj1_library: "Бібліотеки: Pygame",
        proj1_architecture: "Дизайн коду: Модульний",
        proj1_stateManager: "Управління станом: Глобальні змінні та стандартний потік керування",
        proj2_paragraph: "GeoTracker&Notify — це десктопний застосунок, який виходить за межі звичайних списків справ, активуючи нагадування на основі вашого географічного розташування в режимі реального часу. Він поєднує в собі надійний інтерфейс PyQt5 із фоновим сервером Flask для обробки геолокаційних даних, гарантуючи, що ви ніколи не забудете про завдання, прибувши до призначеного місця.",
        proj2_lang: "Мови програмування: Python, JavaScript",
        proj2_backend: "Серверна логіка: Flask",
        proj2_data: "Бази даних: SQLite, SQLAlchemy (ORM)",
        proj2_migrationTool: "Керування міграціями БД: Alembic",
        viewMore_btn: "Переглянути все",
        aboutMe_title: "Про мене",
        aboutMe_name: "Тимур Арсенюк",
        aboutMe_subtitle: "Студент комп'ютерного матеріалознавства",
        aboutMe_paragraph: "Я навчаюся в Краківській політехніці, я захоплююсь складною логікою та інтерактивними системами. Під час навчання я спрямовую свою енергію на поглиблення навичок у розробці програмного забезпечення та штучному інтелекті. Наразі я зосереджений на створенні власних додатків з нуля, вивчаючи, як інтегрувати ШІ агентів та механіки на основі даних, щоб створювати розумніший і більш захопливий користувацький досвід.",
        contactMe_title: "Контакт зі мною",
        Email: "Написати листа прямо зараз",
        contactMe_paragraph1: "Я відкритий до пропозицій щодо нових можливостей, співпраці або просто для встановлення зв’язку",
        contact_otherWay: "Зв'язатися на інших платформах",
        contactMe_paragraph2: "Ви також можете знайти мене на цих платформах:"
    }
};

export function UpdateLanguage(lang: string){
    if(!translations[lang]) lang = "en";

    const elements = document.querySelectorAll("[lang-opt]");

    elements.forEach(el => {
        const key = el.getAttribute("lang-opt");
        if(key && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("portfolio_lang", lang);
}

export function initLangBtn(){
    const langbtn = document.querySelectorAll(".lang-btn");
    const savedLang = localStorage.getItem('portfolio_lang') || 'en';

    UpdateLanguage(savedLang);

    langbtn.forEach(btn => {
        if(btn.getAttribute("data-lang") === savedLang){
            btn.classList.add("active");
        }

        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const target = e.target as HTMLElement;
            const selectedLang = target.getAttribute("data-lang");

            if(!selectedLang) return;

            langbtn.forEach(b => b.classList.remove("active"));
            target.classList.add("active");

            UpdateLanguage(selectedLang);
        });
    });

}