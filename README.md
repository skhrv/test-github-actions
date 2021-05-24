# Unit-тестирование

Используйте функцию `upVersion()`, которую мы написали ранее. Скопируйте её в этот проект, настройте для нее Github Actions с подсчетом Test Coverage и загрузкой отчёта на [codeclimate.com](https://codeclimate.com/).

## .github/workflows/main.yml

Создайте на GitHub репозиторий и загрузите туда проект.

Создайте файл в котором будут устанавливаться зависимости, выполняться тесты, а также загружаться отчёт о покрытии тестами на [codeclimate.com](https://codeclimate.com/) после каждого пуша в основную ветку.

Продублируйте файл с воркфлоу в GitLab — *.github/workflows/main.yml*

## README.md

В ридми проекта добавьте бейдж на созданный воркфлоу.

При создании issue укажите ссылку на репозиторий в котором успешно выполняется пайплайн.

## Ссылки

* [GitHub Actions](https://github.com/features/actions)
* [Никита Соболев — Автоматизируем все с Github Actions](https://www.youtube.com/watch?v=QoCSvwkP_lQ)
* [jest --coverage](https://jestjs.io/ru/docs/cli#--coverageboolean)
* [paambaati/codeclimate-action](https://github.com/paambaati/codeclimate-action)
* [Adding a workflow status badge](https://docs.github.com/en/actions/managing-workflow-runs/adding-a-workflow-status-badge)
