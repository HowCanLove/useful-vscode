# 💻 Useful VS Code Extensions

精选 VS Code / Cursor / Windsurf 扩展清单 / Curated picks for VS Code / Cursor / Windsurf / 厳選VS Code・Cursor・Windsurf拡張

🌐 **Live site / 在线访问 / オンライン:** https://vscode.512347.xyz/

[![screenshot](./screenshot.png)](https://vscode.512347.xyz/)

> Built from the [useful-catalog-template](https://github.com/HowCanLove/useful-catalog-template). Sister site: [useful-software](https://github.com/HowCanLove/useful-software).

## ✨ Features

- 🌍 中文 / English / 日本語 — auto-detected from browser
- 🎯 Filter by editor compatibility (VS Code only / Universal) and by category (AI / Languages / Git / Markdown / Themes / Productivity / API / Testing / Docker)
- 🔍 Instant search across name and description
- 🌙 Dark mode follows system preference, manual toggle persists
- 📥 One-click "Install" button opens the Marketplace listing
- 🔗 Hash-routed deep links (`/#gitlens` opens that card directly)
- ⭐ Favourites stored in localStorage

## ➕ Adding an extension

Edit [`data.js`](./data.js) and append:

```js
{
  name: 'Extension Name',
  desc: {
    zh: '一两句话讲清楚做什么 + 为什么值得装。',
    en: 'One or two sentences: what it does + why install.',
    ja: '何ができるか + なぜ入れる価値があるかを1〜2文で。',
  },
  url: 'https://marketplace.visualstudio.com/items?itemName=publisher.name',
  os: 'cross',          // 'windows' = VS Code only · 'cross' = works in Cursor / Windsurf too
  category: 'system',   // system=AI · disk=Lang · files=Markdown · dev=Git · media=Theme · network=API · security=Testing · browser=Docker · productivity
  price: 'oss',         // free | oss | freemium | paid
  repo: 'owner/name'    // optional — enables auto-version-fetch via update-versions.mjs
}
```

## 🌐 The "primary axis" trick

This site reuses the underlying template's `os` field for editor compatibility:

- `os: 'windows'` — VS Code only (Microsoft's distribution-locked extensions like Copilot, Remote-SSH)
- `os: 'cross'`   — Universal (works in VS Code, Cursor, Windsurf, any fork)

The template's filter logic shows "cross" entries under all primary tabs, which mirrors how cross-platform apps work in [useful-software](https://github.com/HowCanLove/useful-software).

## 🛠️ Local preview

```bash
python -m http.server 8000   # or `npx serve`, or just open index.html
```

## 📄 License

MIT
