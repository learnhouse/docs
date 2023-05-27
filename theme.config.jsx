import Logo from "./components/Logo/Logo";

export default {
  logo: <Logo />,
  project: {
    link: "https://github.com/learnhouse/learnhouse",
  },
  docsRepositoryBase: "https://github.com/learnhouse/docs/tree/main",
  chat: {
    link: "https://discord.gg/CMyZjjYZ6x",
  },

  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="LearnHouse Docs" />
      <meta property="og:description" content="The next-gen open source learning software" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
      <link rel="manifest" href="/favicons/site.webmanifest" />
    </>
  ),
  footer: {
    text: <span>{new Date().getFullYear()} © LearnHouse.</span>,
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s – LearnHouse Docs",
    };
  },
};
