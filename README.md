# Create Node Application

### Installation

```bash 
npx degit fullstackondemand/node.js <folder_name>
```
after clone native folder
```bash 
cd <folder_name>
npm install
```

### Used Packages

> `node.js`, `sass`, `tailwindcss`, `typescript`, `gulp`



## Folder Structure

```
├─── public
│     ├─── favicon.ico                                  # default favicon
│     ├─── assets                                       # static assets (images, videos and favicons)
│     └─── data                                         # all Json files
│
├─── src
│     ├─── app
│     │     ├─── [slug]                                  # url page folder
│     │     │      └─── index.html                       # page file
│     │     │
│     │     ├─── index.html                              # home page file
│     │     ├─── main.ts                                 # main typescript file
│     │     └─── style.scss                              # global css file 
│     │
│     └─── scss
│           ├─── _base.scss                              # base css (heading and tags)
│           ├─── _components.scss                        # components css (card, container and other class)
│           └─── _utilities.scss                         # extra common css (box-shadow, animation and other class)
│
├─── robots.txt                                          # google file
└─── README.md 
```

### Get Started Command :-

1. `npm run gulp` for start **default**.
2. `npm run build` for start **production**.
3. `npm run dev` for start **watch**.