const backgrounds = [
    'images/1.png',
    'images/2.png',
    // Add more images here
];

// Set the first image as the background on load
document.querySelector('.background-image').src = backgrounds[0];

let currentLanguage = localStorage.getItem('language') || 'en'; // Load language from localStorage or default to 'en'

// Set the initial language on page load
if (currentLanguage === 'ru') {
    switchLanguage(); // Call switchLanguage to set the text to Russian
}

function changeBackground() {
    const randomIndex = Math.floor(Math.random() * backgrounds.length);
    const backgroundImage = backgrounds[randomIndex];
    const backgroundElement = document.querySelector('.background-image');
    backgroundElement.style.opacity = 0; // Уменьшаем непрозрачность для плавного перехода
    setTimeout(() => {
        backgroundElement.src = backgroundImage; // Меняем изображение фона
        backgroundElement.style.opacity = 1; // Восстанавливаем непрозрачность
    }, 500); // Задержка для плавного перехода
}

document.getElementById('change-bg').addEventListener('click', changeBackground);
function updateTime() {
    const now = new Date();
    const options = { timeZone: 'Asia/Irkutsk', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    const timeString = now.toLocaleTimeString('ru-RU', options);
    document.getElementById('current-time').textContent = timeString;
}

function switchLanguage() {
    if (currentLanguage === 'en') {
        document.getElementById('portfolio-title').textContent = '/портфолио/';
        document.getElementById('name').textContent = 'Тетенькин Евгений';
        document.getElementById('lang-en').classList.remove('active-language');
        document.getElementById('lang-ru').classList.add('active-language');

        // Перевод html-section на русский
        document.getElementById('html-section').innerHTML = `
            <h2>Мои работы по вёрстке</h2>
            <ul>
                <li>
                    <a href="https://evgesha675.github.io/avitoapp/my-app/index.html" target="_blank">
                        Avito App (ссылка откроется в новой вкладке)
                    </a>
                </li>
            </ul>
        `;
        
        // Обновление текста в разделе резюме на русский
        document.getElementById('resume').innerHTML = 
            `<h2>Личные данные</h2>
            <ul>
                <li>Евгений, tg: <a href="https://t.me/Evgesh_ochka">@Evgesh_ochka</a></li>
                <li>Gmail: <a href="mailto:tetenkinevgenij@gmail.com">tetenkinevgenij@gmail.com</a></li>
                <li>Git: <a href="https://github.com/Evgesha675">https://github.com/Evgesha675</a></li>
                <li>Pin: <a href="https://ru.pinterest.com/evgesha6/">https://ru.pinterest.com/evgesha6/</a></li>
            </ul>
            <h2>Цифровой дизайнер</h2>
            <p>Краткое описание: "Креативный digital-дизайнер с опытом создания интерактивных медиа, анимации, вёрстки и разработки визуальных айдентик."</p>
            <h2>Ключевые навыки</h2>
            <ul>
                <li>Анимация и интерактивный дизайн: Adobe Animate, TouchDesigner, DaVinci Resolve.</li>
                <li>Веб-разработка: HTML, CSS, JavaScript, QML.</li>
                <li>Инструменты управления проектами: Git, GitHub.</li>
                <li>Графический дизайн: создание логотипов.</li>
            </ul>
            <h2>Образование</h2>
            <ul>
                <li>ИГУ ФБКИ прикладная информатика в дизайне.</li>
            </ul>`;

        // Обновление текста в секции DR на русский
        document.getElementById('dr').innerHTML = 
            `<h2>Анимации и видеоконтент</h2>
            <div class="slider">
                <div class="slides">
                    <div class="slide">
                        <div class="frame">
                            <img src="animation/Picture2.gif" alt="Пример работы 1" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="frame">
                            <video controls>
                                <source src="animation/songif.mp4" type="video/mp4">
                                Ваш браузер не поддерживает видео.
                            </video>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="frame">
                            <img src="animation/Timeline .gif" alt="Пример работы 3" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="frame">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CZFVH9PIAqw" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
                <button class="next" onclick="changeSlide(1)">&#10095;</button>
            </div>`;

        currentLanguage = 'ru'; // Обновление текущего языка
    } else {
        document.getElementById('portfolio-title').textContent = '/portfolio/';
        document.getElementById('name').textContent = 'Tetenkin Evgeniy';
        document.getElementById('lang-ru').classList.remove('active-language');
        document.getElementById('lang-en').classList.add('active-language');

        // Перевод html-section на английский
        document.getElementById('html-section').innerHTML = `
            <h2>My Web Development Projects</h2>
            <ul>
                <li>
                    <a href="https://evgesha675.github.io/avitoapp/my-app/index.html" target="_blank">
                        Avito App (opens in a new tab)
                    </a>
                </li>
            </ul>
        `;

        // Обновление текста в разделе резюме на английский
        document.getElementById('resume').innerHTML = 
            `<h2>Personal Information</h2>
            <ul>
                <li>Evgeniy, tg: <a href="https://t.me/Evgesh_ochka">@Evgesh_ochka</a></li>
                <li>Gmail: <a href="mailto:tetenkinevgenij@gmail.com">tetenkinevgenij@gmail.com</a></li>
                <li>Git: <a href="https://github.com/Evgesha675">https://github.com/Evgesha675</a></li>
                <li>Pin: <a href="https://ru.pinterest.com/evgesha6/">https://ru.pinterest.com/evgesha6/</a></li>
            </ul>
            <h2>Digital Designer</h2>
            <p>Brief description: "Creative digital designer with experience in creating interactive media, animation, layout, and developing visual identities."</p>
            <h2>Key Skills</h2>
            <ul>
                <li>Animation and interactive design: Adobe Animate, TouchDesigner, DaVinci Resolve.</li>
                <li>Web development: HTML, CSS, JavaScript, QML.</li>
                <li>Project management tools: Git, GitHub.</li>
                <li>Graphic design: logo creation.</li>
            </ul>
            <h2>Education</h2>
            <ul>
                <li>ISU FBKI Applied Informatics in Design.</li>
            </ul>`;

        // Обновление текста в секции DR на английский
        document.getElementById('dr').innerHTML = 
            `<h2>Animations and Video Content</h2>
            <div class="slider">
                <div class="slides">
                    <div class="slide">
                        <div class="frame">
                            <img src="animation/Picture2.gif" alt="Example Work 1" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="frame">
                            <video controls>
                                <source src="animation/songif.mp4" type="video/mp4">
                                Your browser does not support video.
                            </video>
                        </div>
                    </div>
                    <div class="slide">
                        <div class="frame">
                            <img src="animation/Timeline .gif" alt="Example Work 3" />
                        </div>
                    </div>
                    <div class="slide">
                        <div class="frame">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/CZFVH9PIAqw" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
                <button class="prev" onclick="changeSlide(-1)">&#10094;</button>
                <button class="next" onclick="changeSlide(1)">&#10095;</button>
            </div>`;

        currentLanguage = 'en'; // Update current language
    }
    localStorage.setItem('language', currentLanguage); // Save the current language to localStorage
}



document.getElementById('resume-toggle').addEventListener('click', function() {
    const resumeSection = document.getElementById('resume');
    const drSection = document.getElementById('dr');
    const htmlSection = document.getElementById('html-section');
    const portfolioSection = document.getElementById('container');

    // Скрыть все секции
    resumeSection.style.display = 'block'; // Показать резюме
    drSection.style.display = 'none'; // Скрыть DR
    htmlSection.style.display = 'none'; // Скрыть HTML
    portfolioSection.style.display = 'none'; // Скрыть портфолио
});

document.getElementById('dr-link').addEventListener('click', function() {
    const resumeSection = document.getElementById('resume');
    const drSection = document.getElementById('dr');
    const htmlSection = document.getElementById('html-section');
    const portfolioSection = document.getElementById('container');

    // Скрыть все секции
    resumeSection.style.display = 'none'; // Скрыть резюме
    drSection.style.display = 'block'; // Показать DR
    htmlSection.style.display = 'none'; // Скрыть HTML
    portfolioSection.style.display = 'none'; // Скрыть портфолио
});


document.getElementById('portfolio-link').addEventListener('click', function() {
    const resumeSection = document.getElementById('resume');
    const drSection = document.getElementById('dr');
    const htmlSection = document.getElementById('html-section');
    const portfolioSection = document.getElementById('container');

    // Скрыть все секции
    resumeSection.style.display = 'none'; // Скрыть резюме
    drSection.style.display = 'none'; // Скрыть DR
    htmlSection.style.display = 'none'; // Скрыть HTML
    portfolioSection.style.display = 'block'; // Показать портфолио
});
document.getElementById('html-link').addEventListener('click', function () {
    const resumeSection = document.getElementById('resume');
    const drSection = document.getElementById('dr');
    const htmlSection = document.getElementById('html-section');
    const portfolioSection = document.getElementById('container');



    // Скрыть все секции
    resumeSection.style.display = 'none';
    drSection.style.display = 'none';
    portfolioSection.style.display = 'none';

    // Показать HTML Section
    htmlSection.style.display = 'block';
   
});




let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelector('.slider .slides');
    if (!slides) {
        console.error('Слайдер не найден!');
        return;
    }
    const totalSlides = slides.children.length;

    // Убедитесь, что индекс в пределах допустимого диапазона
    if (index >= totalSlides) {
        currentSlide = 0; // Если индекс больше, показываем первый слайд
    } else if (index < 0) {
        currentSlide = totalSlides - 1; // Если индекс меньше нуля, показываем последний слайд
    } else {
        currentSlide = index; // Устанавливаем текущий слайд
    }

    // Изменяем положение слайдов
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}


// Показать первый слайд при загрузке
showSlide(currentSlide);

setInterval(updateTime, 1000); // Update time every second
updateTime(); // Initialize time on load

