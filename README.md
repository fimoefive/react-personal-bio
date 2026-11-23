# Personal Bio

## LINKS

### [Netlify](https://martinpersonalbio.netlify.app)

### [LOOM](https://www.loom.com/share/581251e2c4c445dfae26e4bf3c26fbbd)

### BIO ScreenShots

<img width="1439" alt="Bio Home" src="https://user-images.githubusercontent.com/58958998/120896675-3065e200-c5e8-11eb-86a4-64c18b73fff8.png">
<img width="1486" alt="Bio Project" src="https://user-images.githubusercontent.com/58958998/120896681-3360d280-c5e8-11eb-850c-d4bed9b834cb.png">
<img width="1580" alt="Bio Tech" src="https://user-images.githubusercontent.com/58958998/120896686-36f45980-c5e8-11eb-99f3-b9a9061ea64b.png">

## About

A personal bio and portfolio site built with React 17, Bootstrap/Reactstrap and Firebase. It showcases a bio, projects, and technologies, with individual detail pages and a contact section.

## Tech Stack

- React 17, React Router 5
- Bootstrap 4, Reactstrap, Font Awesome, Sass
- Firebase 8 (auth and Realtime Database), Axios

## Getting Started

**Prerequisites:** Node 20 (see `.nvmrc`) and npm.

1. Clone the repo and install dependencies (`postinstall` applies patches via `patch-package`):
   ```bash
   git clone https://github.com/fimoefive/react-personal-bio.git
   cd react-personal-bio
   nvm use
   npm install
   ```
2. Create a `.env` file in the project root with your Firebase config:
   ```
   REACT_APP_API_KEY=
   REACT_APP_AUTH_DOMAIN=
   REACT_APP_DATABASE_URL=
   REACT_APP_PROJECT_ID=
   REACT_APP_STORAGE_BUCKET=
   REACT_APP_MESSAGING_SENDER_ID=
   REACT_APP_APP_ID=
   REACT_APP_MEASUREMENT_ID=
   REACT_APP_ADMIN_MJ=
   ```
   `REACT_APP_ADMIN_MJ` identifies the admin user.
3. Seed your database with the files in `sample data/` (`projectsData.json`, `technologyData.json`).
4. Start the dev server:
   ```bash
   npm start
   ```

## Scripts

- `npm start` – run the app in development mode
- `npm run build` – create a production build

## Project Structure

- `src/views` – pages (Home, Projects, Technologies, single project/tech)
- `src/components` – UI components (Bio, NavBar, cards, Contact)
- `src/helpers` – routes, auth, Firebase keys and data access
- `src/styles` – Sass styles
- `sample data` – example project and technology data

## Deployment

Deployed on Netlify. See the [steps to deploy](https://github.com/nss-nightclass-projects/REACT-Deployment-Netlify).
