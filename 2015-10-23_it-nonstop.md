# IT NonStop

## 2015-10-23, Санкт-Петербург, Россия

А вы знаете, у нас есть все шансы на нано-трансяцию с [it-nonstop.net/city/saint-pet…](https://t.co/nxnYEzrbLJ "http://it-nonstop.net/city/saint-petersburg"). Только два доклада — про Html-академию и PostCSS. Стей тюнед.

Итак, Алексей Малейков, «HTML Academy», «Автоматизация процессов обучения»

Не смотря на то, что доклад заявлен в менеджерскую секцию, уверен, что будет интресно.

Фоточек не будет — айпад остался дома.

Не текущий момент — выполнено более 11 миллионов заданий. И всё это силами 13 сотрудников.

И ни единого менеджера.

Задание зачтётся, если оно выполнено на 90%, но как правило, большинство стремится выбить 100.

А ещё есть интенсивы. [pic.twitter.com/wX95v6mNe9](https://t.co/wX95v6mNe9)

![](https://pbs.twimg.com/media/CR_LQG9U8AEj-3f.png)

Интенсив — это в первую очередь наставники. Привет, [@olmokhov](https://twitter.com/olmokhov "Олег Мохов") и [@isquariel](https://twitter.com/isquariel "isqua")

Задания на интенсивах выполняются по gitflow, всё как в большой жизни. [pic.twitter.com/2AXauOudXQ](https://t.co/2AXauOudXQ)

![](https://pbs.twimg.com/media/CR_MF2DUkAAMRfE.png)

Процесс автоматического создания репозиториев делают эти два парня. [pic.twitter.com/T685WdSTec](https://t.co/T685WdSTec)

![](https://pbs.twimg.com/media/CR_MktTUsAArS1i.png)

У Гоши под капотом — Go, а не какая-нибудь там нода.

По началу студенты устроили анархию в именах веток и пулл-риквестов. Но приходит Гоша — и всё исправляет.

А Кексик умеет собирать проект и публиковать его на gh-pages. [pic.twitter.com/v7Vl3VOoD6](https://t.co/v7Vl3VOoD6)

![](https://pbs.twimg.com/media/CR_Nk0fU8AEqdM9.png)

Более подробно можно почитать в статье на Хабре [habrahabr.ru/company/htmlac…](https://t.co/MREsayx7Jf "http://habrahabr.ru/company/htmlacademy/blog/254171/")

А ещё есть вот что. Внутри — сравнение скриншотами. Сможет ли Люк Небесный Бегун сломать её? [pic.twitter.com/8dtpr4CRcp](https://t.co/8dtpr4CRcp)

![](https://pbs.twimg.com/media/CR_OHn7VEAAp9gq.png)

[@vafelman](https://twitter.com/vafelman "Таня") ура, я не зря пришёл сюда в такую рань ;\)

Да, если вы чувствует в себе силы — вы можете стать наставником [htmlacademy.ru/tutors](https://t.co/JWPBvCoJ4r "https://htmlacademy.ru/tutors")

[@operatino](https://twitter.com/operatino "Robert Haritonov") да, наверно Гуляка.

Да, есть трансляция [youtube.com/watch?v=G4h8Hw…](https://t.co/mNJtUME255 "https://www.youtube.com/watch?v=G4h8Hwae6D0")

Второй доклад на сегодня — Андрей Ситник, «Злые марсиане». Сами угадайте, про что будет доклад ;\)

Слайды — [ai.github.io/postcss-way/ru…](https://t.co/uJ0iPUPJlt "http://ai.github.io/postcss-way/ru/?full#1")

Автопрефиксер — это просто плагин для PostCSS

PostCSS — это просто парсер CSS и генератор.

Парсер берёт CSS и возвращает AST-дерево, генератор берёт дерево и возвращает CSS.

Плагины PostCSS изменяют дерево, без плагинов PostCSS делает очень важную вещь — ничего не меняет.

PostCSS стал мейнстримом, уже бессмысленно призывать переходить на PostCSS

Компании, которые используют больше двух плагинов PostCSS в продакшне. [pic.twitter.com/roOYf74CJD](https://t.co/roOYf74CJD)

![](https://pbs.twimg.com/media/CR_VlWiVAAABGJg.png)

Проблема — люди используют PostCSS неправильно.

Плагины, которые меняют синтаксис — добавляйте через postcss-use: [github.com/postcss/postcs…](https://t.co/BHQkT4D7tR "https://github.com/postcss/postcss-use")

Вас скорее всего пугает обилие плагинов. Не подключайте плагины по отдельности, используйте пакеты плагинов. Cssnext, oldie и т.п.

PostCSS — это не синтаксический сахар, а создание поддерживаемого кода.

«Смысл IT — мы пытаемся решить задачи, которые мы не способны решить»

Главный мейстрим фронтенда — компонентный подход. Реакт, Полимер, БЭМ.

Решить конфликты селекторов можно с помощью БЭМ [github.com/ileri/postcss-…](https://t.co/A0xYJ5XArc "https://github.com/ileri/postcss-bem") или с помощью CSS Modules [github.com/css-modules/cs…](https://t.co/J6TTiVBMZ7 "https://github.com/css-modules/css-modules")

Результат работы CSS Modules [pic.twitter.com/DFmZcLe3tL](https://t.co/DFmZcLe3tL)

![](https://pbs.twimg.com/media/CR_XxzlUYAAQym8.png)

Правило 4: «Убирайте «магические числа» в стилях с помощью PostCSS»

Правило 5 — прячьте хаки:  
[github.com/justim/postcss…](https://t.co/1d1YVx9SoS "https://github.com/justim/postcss-svg-fallback")  
[github.com/jonathantneal/…](https://t.co/EtMhIs6gPH "https://github.com/jonathantneal/postcss-font-magician")  
[github.com/Pavliko/postcs…](https://t.co/Aq1cK5R4tv "https://github.com/Pavliko/postcss-svg")  
и Автопрефиксер, конечно же.

Также PostCSS очень удобен для написания линтеров.

Очень важный ответ на вопрос «Sass или PostCSS»? [pic.twitter.com/e4QtG8V5tY](https://t.co/e4QtG8V5tY)

![](https://pbs.twimg.com/media/CR_Z2YnUsAAzr3e.png)

Правила использования PostCSS на одном слайде: [ai.github.io/postcss-way/ru…](https://t.co/GTCZUIiEkr "http://ai.github.io/postcss-way/ru/?full#59")
