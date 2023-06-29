import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "随记",
  description: "我的笔记",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "目录", link: "/menu" },
    ],
    sidebar: [
      {
        text: "目录",
        link: "/menu",
      },
      {
        text: "运维",
        items: [
          {
            text: "Linux",
            link: "/运维/Linux",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
