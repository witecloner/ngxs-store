# Panduan

## Persiapan Kebutuhan System

__Install Node.js__
*Download Node.Js*

__Install Angular.cli__
`> npm i @angular/cli @angular/core`

__Install Git__
*Download Git for Windows*

## Mebuat Aplikasi Project Angular

Untuk Single Project :
`> ng new project-name --routing --skip-git --skip-tests --style scss`

Untuk Multi Project Menggunakan Workspace :
`> ng new workspace-name --no-create-application --skip-git`
`> cd workspace-name`
`> ng g application project-name --routing --skip-tests --style scss`

*__Keterangan__*

`project-name` : nama project aplikasi.
`workspace-name` : nama workspace.
`--routing` : menggunakan routing.
`--skip-git` : tanpa menyertakan git repository.
`--skip-tests` : tanpa menyertakan file testing.
`--style scss` : mengunakan style scss.

## Persiapan Paket Pendukung

__Install SASS__
`> npm install -g sass`

__Install Angular Elements__
`> npm i @angular-extensions/elements`

__Install Bootstrap__
`> npm i bootstrap bootstrap-icons -g --save-dev`

__Install Ng Bootstrap__
`> npm i @ng-bootstrap/ng-bootstrap -g --save-dev`

__Install Fortawesome__
`> npm i @fortawesome/fontawesome-free @fortawesome/angular-fontawesome @fortawesome/fontawesome-free-webfonts -g --save-dev`

untuk opsi __angular-fontawesome__ pilih opsi :

- `Fontawesome 6`
  - `free-brands-svg-icons`
  - `free-regular-svg-icons`
  - `free-solid-svg-icons`

__Install Ngx__
`> npm i ngx-masonry masonry-layout -g --save-dev`

__Install Ngxs__
`> npm i @ngxs/store@dev @ngxs/logger-plugin@dev -g --save-dev`

__Install Flex Layout (deprecated)__
`> npm i @angular/flex-layout -g --save-dev`

__Install HammerJs__
`> npm i hammerjs -g --save-dev`

__Install Types Node__
`> npm i @types/node -g --save-dev`

__Install Json__
`> npm i json -g --save-dev`

__Install Json Server__
`> npm i json-server -g --save-dev`

__Install Json Web Token__
`> npm i jsonwebtoken -g --save-dev`

## Penambahan Modul Pendukung

__Angular Material__
`> ng add @angular/material`

## Membuat Layout
