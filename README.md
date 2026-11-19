# Saifur Rahman — Personal Portfolio

A responsive, server-rendered portfolio built with **TypeScript, Express and Nunjucks**.

## Requirements
- Node.js 20 or newer
- npm

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm start
```

The TypeScript source is compiled into `dist/`. Express serves the Nunjucks templates from `views/` and static assets from `public/`.

## Customize your details

Edit the `profile` object in `src/server.ts` to update your introduction, email, skills, experience and projects. Then restart the dev server.

## Before publishing

- Verify the public contact email in `src/server.ts`.
- Confirm the CarSync end date and all role dates. The CV currently says “Apr 2022 – Heute”; this starter uses “Apr 2022 – 2026” based on the information shared in chat.
- Confirm that the generalized project descriptions are safe to publish and do not disclose confidential employer information.
- Add links to your LinkedIn and GitHub profiles if you want them shown.

## Notes

The contact call-to-action opens the visitor's default email application using `mailto:`. It does not send or store messages on the server.
