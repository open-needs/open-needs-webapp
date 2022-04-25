# Open Needs WebApp

Explore needs stored in the [open-needs-server](https://github.com/open-needs/open-needs-server).

Basic features include:

* Needs can be displayed and filtered
* Various representations and aggregations such as lists, tables and charts
* Needs can be manipulated

## Minimum Viable Product

- repo: open-needs-webapp
- React app including infrastructure (formatting, linting, dev server)
- frontend-only (no server side parts)
- environments: local/dev and prod
- config management: toml? (Python: dynaconf)
- login against local open-needs-server
- selector for organization and project
- results as cards/table/list
  - arbitrary fields are extracted
  - content as code-block
- extensions (e.g. graphics, bar chart)
- CSS framework: antd
- browser support for Edge, Firefox, Chrome and Safari

## Future features

- PWA for Chrome
- dedicated logs view
- manipulate needs
