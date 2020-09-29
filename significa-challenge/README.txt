Significa Front End Design Challenge
====================================

Style guide:
https://projects.invisionapp.com/share/5JGW1AFQHUX#/screens/291309274

Prototype:
https://projects.invisionapp.com/share/K6GW19Z3FP8#/screens/291216728


Forked Github repository:
https://github.com/dmsoares/frontend-challenge


The Movie Database:
https://www.themoviedb.org/settings/api
https://developers.themoviedb.org/3/getting-started/introduction


Todos:
- resize and align search bar relative to movie grid width (number of movie cards)


Web App Architecture:
- Landing page
    - logo (→ Landing page)
    - search bar (receives query string)
    - background image (static)
- Query results
    - logo (→ Landing page)
    - search bar (when empty → Landing page)
    - movie cards (→ Selected movie)
- Selected movie
    - logo (→ Landing page)
    - back btn (→ Query results with last used query string)
    - heading
        - duration
        - year
        - age rating
    - title
    - ratings & favorite
        - imdb
        - rotten tomatoes
        - favorite
    - plot
    - cast
    - genres
    - directors