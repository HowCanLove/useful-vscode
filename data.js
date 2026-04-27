// VS Code / Cursor / Windsurf 扩展数据
//
// os 字段在这个仓库里被复用为"编辑器兼容性"：
//   'vscode'     —— 主要为 VS Code 设计，AI 编辑器里通常也能装但不一定优化
//   'ai-editor'  —— Cursor / Windsurf / Continue / Cline 这类 AI 编辑器专用或最优体验
//   'universal'  —— 任何 VS Code 衍生编辑器都能跑（绝大多数扩展属于这类）
//
// category: ai | lang | git | markdown | theme | productivity | testing | database | docker | api | remote
//
// 所有 url 指向 marketplace 详情页（即"安装入口"）。
// repo 字段填了之后，可以用 update-versions.mjs 抓 GitHub 最新 release（marketplace 与 GitHub 版本号常常不一致，仅供参考）

const CATALOG = [
  // ========== AI ==========
  {
    name: 'GitHub Copilot',
    desc: {
      zh: 'GitHub 与 OpenAI 联合出品的 AI 代码补全，能根据上下文和注释自动续写整段代码。Copilot Chat 还能在编辑器里直接对话改代码、解释错误。月费 10 美元，学生和热门开源项目维护者免费。',
      en: 'GitHub & OpenAI\'s AI pair programmer. Suggests entire functions from context and comments; Copilot Chat lets you converse, refactor and explain errors inline. $10/mo, free for students and active OSS maintainers.',
      ja: 'GitHubとOpenAIによるAIペアプログラマー。コンテキストとコメントから関数全体を提案し、Copilot Chatでエディタ内対話・リファクタ・エラー解説が可能。月額10ドル、学生とOSS保守者は無料。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=GitHub.copilot',
    os: 'windows', category: 'system', price: 'paid',
  },
  {
    name: 'Continue',
    desc: {
      zh: '完全开源的 AI 代码助手，可以接 Claude / GPT / Gemini / 本地 Ollama 等任意模型。功能上对标 Copilot，但模型和 prompt 完全自己掌控。',
      en: 'Fully open-source AI code assistant. Plug in Claude, GPT, Gemini or your local Ollama — Copilot-level features without vendor lock-in.',
      ja: '完全オープンソースのAIコーディングアシスタント。Claude / GPT / Gemini / ローカルOllamaなどを自由に接続可能。Copilot並みの機能を自前のモデルで。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=Continue.continue',
    repo: 'continuedev/continue',
    os: 'cross', category: 'system', price: 'oss',
  },
  {
    name: 'Cline',
    desc: {
      zh: '原名 Claude Dev，开源的 agent 式 AI 编辑助手，可以让模型在你授权下读写文件、跑命令。比"补全"更上一层楼，做 multi-step refactor 极快。',
      en: 'Formerly Claude Dev. Open-source agentic AI assistant — with your approval, lets the model read/write files and run commands. A leap beyond completions, blazingly fast for multi-step refactors.',
      ja: '旧名Claude Dev。オープンソースのエージェント型AIアシスタント。承認制でモデルにファイル読み書きとコマンド実行を許可。マルチステップなリファクタが圧倒的に速い。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev',
    repo: 'cline/cline',
    os: 'cross', category: 'system', price: 'oss',
  },
  {
    name: 'Codeium',
    desc: {
      zh: '免费的 Copilot 替代品（个人用户永久免费），支持 70+ 语言。背后是同一团队做的 Windsurf 编辑器，质量比想象中好。',
      en: 'Free Copilot alternative (forever free for individuals), 70+ languages. From the same team as the Windsurf editor — better than its free tier suggests.',
      ja: '無料のCopilot代替（個人利用は永久無料）、70以上の言語に対応。Windsurfエディタと同じチーム製で、無料とは思えない品質。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=Codeium.codeium',
    os: 'cross', category: 'system', price: 'freemium',
  },

  // ========== Languages / Linting / Formatting ==========
  {
    name: 'Python',
    desc: {
      zh: '微软官方的 Python 扩展，自动捆绑 Pylance 语言服务器、调试器、Jupyter 集成。装 Python 不装它等于用记事本。',
      en: 'Microsoft\'s official Python extension. Bundles Pylance language server, debugger and Jupyter integration. Mandatory for Python work in VS Code.',
      ja: 'Microsoft公式のPython拡張。Pylance言語サーバー、デバッガ、Jupyter統合を同梱。VS CodeでPythonを書くなら必須。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=ms-python.python',
    os: 'cross', category: 'disk', price: 'free',
  },
  {
    name: 'Pylance',
    desc: {
      zh: '微软官方的 Python 语言服务器，比默认快几倍，类型检查和自动导入特别好用。装了 Python 扩展会自动一起装上。',
      en: 'Microsoft\'s Python language server — multiple times faster than the default with excellent type-checking and auto-imports. Auto-installed with the Python extension.',
      ja: 'Microsoft公式のPython言語サーバー。デフォルトより数倍高速で、型チェックと自動インポートが優秀。Python拡張と一緒に自動インストール。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=ms-python.vscode-pylance',
    os: 'cross', category: 'disk', price: 'free',
  },
  {
    name: 'Ruff',
    desc: {
      zh: 'Rust 写的 Python linter + formatter，比 flake8/black 快 10-100 倍。Astral 团队出品，已经是新项目的事实标准。',
      en: 'Rust-powered Python linter + formatter, 10-100× faster than flake8/black. By Astral — already the de facto standard for new projects.',
      ja: 'Rust製のPython linter + formatter。flake8/blackより10-100倍高速。Astral社製で、新規プロジェクトのデファクト標準。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=charliermarsh.ruff',
    repo: 'astral-sh/ruff-vscode',
    os: 'cross', category: 'disk', price: 'oss',
  },
  {
    name: 'ESLint',
    desc: {
      zh: 'JavaScript / TypeScript 项目的 linting 标配。保存时自动 fix 简单错误，配 Prettier 一起用是黄金组合。',
      en: 'The JavaScript / TypeScript linting standard. Auto-fixes simple issues on save; pairs perfectly with Prettier.',
      ja: 'JavaScript / TypeScriptのlintingデファクト標準。保存時に簡単なエラーを自動修正、Prettierと組み合わせるのが鉄板。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint',
    repo: 'microsoft/vscode-eslint',
    os: 'cross', category: 'disk', price: 'oss',
  },
  {
    name: 'Prettier',
    desc: {
      zh: '"代码风格不需要争论"的格式化工具，几乎所有前端项目都在用。配置极简，保存自动格式化体验丝滑。',
      en: 'The "stop arguing about style" formatter. Used in virtually every modern frontend project; near-zero config, format-on-save bliss.',
      ja: '「コードスタイルで議論しない」ためのフォーマッタ。ほぼ全てのフロントエンドプロジェクトで使われる定番。設定極小で保存時整形が快適。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
    repo: 'prettier/prettier-vscode',
    os: 'cross', category: 'disk', price: 'oss',
  },
  {
    name: 'rust-analyzer',
    desc: {
      zh: 'Rust 官方语言服务器，类型推导、跳转、refactor 全都顶级。Rust 开发体验的核心一半在它身上。',
      en: 'The official Rust language server. Top-tier type inference, navigation and refactoring — half of Rust\'s great developer experience comes from it.',
      ja: 'Rust公式の言語サーバー。型推論・ジャンプ・リファクタが最高レベル。Rust開発体験の半分はこれが支えている。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer',
    repo: 'rust-lang/rust-analyzer',
    os: 'cross', category: 'disk', price: 'oss',
  },
  {
    name: 'Go',
    desc: {
      zh: 'Go 团队官方扩展，集成 gopls 语言服务器、dlv 调试器、go test 等所有官方工具链。',
      en: 'The Go team\'s official extension — integrates gopls language server, dlv debugger and the full official toolchain.',
      ja: 'Goチーム公式拡張。gopls言語サーバー、dlvデバッガなど公式ツールチェーンを統合。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=golang.Go',
    repo: 'golang/vscode-go',
    os: 'cross', category: 'disk', price: 'oss',
  },
  {
    name: 'Tailwind CSS IntelliSense',
    desc: {
      zh: '用 Tailwind 的项目里写 class 时自动补全，鼠标移上去能看到展开的 CSS。提升 Tailwind 开发效率最多的一个扩展。',
      en: 'Auto-completes Tailwind classes and shows the resolved CSS on hover. The single biggest productivity boost for Tailwind projects.',
      ja: 'Tailwindクラスの自動補完と、ホバー時に展開されたCSSを表示。Tailwind開発で最も効率を上げる拡張。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss',
    repo: 'tailwindlabs/tailwindcss-intellisense',
    os: 'cross', category: 'disk', price: 'oss',
  },

  // ========== Git ==========
  {
    name: 'GitLens',
    desc: {
      zh: '把 Git 信息深度融合进编辑器：每行代码旁边显示 blame、文件历史、commit 详情、PR 信息一目了然。免费版已经够用。',
      en: 'Deeply weaves Git into the editor: inline blame, file history, commit details, PR context — all visible without leaving your file. Free tier is enough for most.',
      ja: 'Git情報をエディタに深く統合。各行のblame、ファイル履歴、commit詳細、PR情報が一目で分かる。無料版で大半の用途に十分。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens',
    repo: 'gitkraken/vscode-gitlens',
    os: 'cross', category: 'dev', price: 'freemium',
  },
  {
    name: 'Git Graph',
    desc: {
      zh: '在 VS Code 里看到完整的 Git commit 树状图，支持拉、推、合并、变基等所有常用操作。比命令行直观，比 SourceTree 轻量。',
      en: 'Full Git commit graph inside VS Code, with pull / push / merge / rebase actions. More visual than the CLI, lighter than SourceTree.',
      ja: 'VS Code内で完全なGit commitツリー図を表示。pull/push/merge/rebaseなど主要操作対応。CLIより直感的、SourceTreeより軽量。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph',
    repo: 'mhutchie/vscode-git-graph',
    os: 'cross', category: 'dev', price: 'oss',
  },

  // ========== Markdown / Docs ==========
  {
    name: 'Markdown All in One',
    desc: {
      zh: '一个扩展搞定 Markdown 几乎所有需求：快捷键、自动 TOC、自动列表续接、表格格式化、数学公式、导出 HTML / PDF。',
      en: 'One extension for almost every Markdown need: shortcuts, auto-TOC, list continuation, table formatting, math formulas, HTML / PDF export.',
      ja: 'Markdownのほぼ全てを1つの拡張で：ショートカット、自動目次、リスト継続、テーブル整形、数式、HTML/PDFエクスポート。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one',
    repo: 'yzhang-gh/vscode-markdown',
    os: 'cross', category: 'files', price: 'oss',
  },
  {
    name: 'markdownlint',
    desc: {
      zh: 'Markdown 文件的 linter。提示标题层级、链接、列表格式等问题，对写文档/博客非常有帮助。',
      en: 'Linter for Markdown files. Catches heading hierarchy, link, list-formatting issues — invaluable for writing docs and blogs.',
      ja: 'Markdownファイルのlinter。見出し階層、リンク、リスト整形などの問題を指摘。ドキュメントやブログ執筆に非常に有用。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint',
    repo: 'DavidAnson/vscode-markdownlint',
    os: 'cross', category: 'files', price: 'oss',
  },

  // ========== Themes / UI ==========
  {
    name: 'Material Icon Theme',
    desc: {
      zh: '把 VS Code 文件资源管理器里所有图标换成 Material Design 风格，按文件类型/语言/框架精细区分。装一次不会想换回去。',
      en: 'Replaces every file-explorer icon with Material Design variants, distinguishing by type / language / framework. Try it once and you won\'t go back.',
      ja: 'ファイルエクスプローラーのアイコンを全てMaterial Designに置き換え、種類/言語/フレームワーク別に細かく区別。一度使うと戻れない。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme',
    repo: 'material-extensions/vscode-material-icon-theme',
    os: 'cross', category: 'media', price: 'oss',
  },
  {
    name: 'One Dark Pro',
    desc: {
      zh: 'Atom 编辑器的标志主题移植版，是 VS Code 上最受欢迎的暗色主题之一。下载量已经过亿。',
      en: 'A faithful port of Atom\'s signature theme. One of the most popular dark themes on VS Code, past 100M installs.',
      ja: 'Atomエディタの代表テーマの移植版。VS Codeで最も人気の暗色テーマの1つで、インストール数1億超え。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=zhuangtongfa.Material-theme',
    repo: 'Binaryify/OneDark-Pro',
    os: 'cross', category: 'media', price: 'oss',
  },
  {
    name: 'Catppuccin',
    desc: {
      zh: '柔和、温暖的暗色主题系列（Mocha / Macchiato / Frappé / Latte 四档色调），近两年最火的主题之一。',
      en: 'Soothing, warm pastel theme family (Mocha / Macchiato / Frappé / Latte palettes). One of the most-loved themes of the past two years.',
      ja: '柔らかく温かみのあるパステル調テーマシリーズ（Mocha/Macchiato/Frappé/Latteの4トーン）。直近2年で最も人気のテーマの1つ。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=Catppuccin.catppuccin-vsc',
    repo: 'catppuccin/vscode',
    os: 'cross', category: 'media', price: 'oss',
  },

  // ========== Productivity ==========
  {
    name: 'Vim',
    desc: {
      zh: 'VS Code 里最完整的 Vim 模拟，支持 Ex 命令、宏、插件、leader key 配置。是从 Vim/Neovim 转过来的人的救命扩展。',
      en: 'The most complete Vim emulation for VS Code. Ex commands, macros, plugins, leader-key bindings. A lifesaver for Vim/Neovim refugees.',
      ja: 'VS Code向け最も完全なVimエミュレーション。Exコマンド、マクロ、プラグイン、リーダーキー対応。Vim/Neovimからの移行者の命綱。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=vscodevim.vim',
    repo: 'VSCodeVim/Vim',
    os: 'cross', category: 'productivity', price: 'oss',
  },
  {
    name: 'Code Spell Checker',
    desc: {
      zh: '代码里的拼写检查器，能识别 camelCase / snake_case，对常见技术术语友好。写英文注释和文档时尤其有用。',
      en: 'In-code spell checker that understands camelCase / snake_case and tech jargon. Especially handy for English comments and docs.',
      ja: 'コード内スペルチェッカー。camelCase/snake_caseとIT用語を認識。英文コメントやドキュメント執筆時に特に便利。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker',
    repo: 'streetsidesoftware/vscode-spell-checker',
    os: 'cross', category: 'productivity', price: 'oss',
  },
  {
    name: 'Path Intellisense',
    desc: {
      zh: '写文件路径时自动补全，支持相对路径和别名（webpack/tsconfig 配的别名也认）。手动敲 ../../components/ 时会感谢它。',
      en: 'Autocompletes file paths as you type — supports relative paths and aliases (it reads your webpack / tsconfig aliases). You\'ll thank it every time you type ../../components/.',
      ja: 'ファイルパス入力時に自動補完。相対パスとエイリアス（webpack/tsconfig設定）両対応。../../components/を手打ちするたびにありがたく感じる。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense',
    repo: 'ChristianKohler/PathIntellisense',
    os: 'cross', category: 'productivity', price: 'oss',
  },
  {
    name: 'Better Comments',
    desc: {
      zh: '把 // TODO、// !、// ?、// * 这种特殊注释用不同颜色高亮。代码里的 TODO 一眼就能看到。',
      en: 'Highlights special comments — // TODO, // !, // ?, // * — in distinct colours so they leap off the page.',
      ja: '// TODO、// !、// ?、// *などの特殊コメントを色分けハイライト。コード中のTODOが一目で分かる。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments',
    repo: 'aaron-bond/better-comments',
    os: 'cross', category: 'productivity', price: 'oss',
  },
  {
    name: 'EditorConfig for VS Code',
    desc: {
      zh: '让团队成员的 VS Code 自动遵守项目的 .editorconfig 文件（缩进、行尾、字符集等）。多人协作必装。',
      en: 'Makes VS Code respect a project\'s .editorconfig (indent, EOL, charset...). Essential for any team.',
      ja: 'チームメンバーのVS Codeにプロジェクトの.editorconfig（インデント・改行・文字コードなど）を遵守させる。チーム開発の必須拡張。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig',
    repo: 'editorconfig/editorconfig-vscode',
    os: 'cross', category: 'productivity', price: 'oss',
  },
  {
    name: 'Auto Rename Tag',
    desc: {
      zh: '改 HTML/JSX/Vue 标签的开标签时，闭标签自动跟着改。再也不用手动同步了。',
      en: 'Rename an HTML / JSX / Vue opening tag and the closing tag updates with it. Never sync them by hand again.',
      ja: 'HTML/JSX/Vueの開始タグを変更すると、終了タグも自動で同期。手動で揃える手間が消える。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag',
    repo: 'formulahendry/vscode-auto-rename-tag',
    os: 'cross', category: 'productivity', price: 'oss',
  },

  // ========== Database ==========
  {
    name: 'SQLite Viewer',
    desc: {
      zh: '直接在 VS Code 里打开 .db / .sqlite 文件查看表结构和数据。无需启动 DB Browser，定位线上小问题极快。',
      en: 'Open .db / .sqlite files directly inside VS Code to inspect schema and rows. No need to launch DB Browser — perfect for quick prod investigations.',
      ja: 'VS Code内で.db/.sqliteファイルを直接開いてスキーマとデータを閲覧。DB Browser不要、本番の小さな問題を素早く確認可能。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=qwtel.sqlite-viewer',
    os: 'cross', category: 'dev', price: 'free',
  },

  // ========== Docker / DevOps ==========
  {
    name: 'Docker',
    desc: {
      zh: '微软官方扩展，让你在 VS Code 里管理本地的 Docker 容器、镜像、网络。Dockerfile / compose.yml 也有语法提示。',
      en: 'Microsoft\'s official extension to manage local Docker containers, images and networks from VS Code. Includes Dockerfile / compose.yml IntelliSense.',
      ja: 'Microsoft公式拡張。VS Code内でローカルDockerコンテナ・イメージ・ネットワークを管理。Dockerfile/compose.ymlの補完も搭載。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker',
    repo: 'microsoft/vscode-docker',
    os: 'cross', category: 'browser', price: 'oss',
  },

  // ========== API ==========
  {
    name: 'REST Client',
    desc: {
      zh: '在 .http 文件里写请求直接发出去，结果显示在编辑器里。比 Postman 更轻量，请求文件可以版本控制。',
      en: 'Write HTTP requests in .http files and fire them with one click — response renders in the editor. Lighter than Postman; request files live in git.',
      ja: '.httpファイルにリクエストを書いてワンクリックで送信、結果はエディタに表示。Postmanより軽量で、リクエストファイルをgit管理できる。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=humao.rest-client',
    repo: 'Huachao/vscode-restclient',
    os: 'cross', category: 'network', price: 'oss',
  },
  {
    name: 'Thunder Client',
    desc: {
      zh: '完全集成在 VS Code 里的 Postman 替代品，UI 类似 Postman 但不需要单独打开应用。免费版功能很全。',
      en: 'A Postman-style API client living entirely inside VS Code — no need to alt-tab. The free tier is surprisingly complete.',
      ja: 'VS Code内で完結するPostman風APIクライアント。別アプリへの切替不要。無料版の機能でも十分。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client',
    os: 'cross', category: 'network', price: 'freemium',
  },

  // ========== Remote ==========
  {
    name: 'Remote - SSH',
    desc: {
      zh: '通过 SSH 连远程服务器，本地 VS Code 操作的还是远程的代码。开发服务器/EC2/树莓派的标配。',
      en: 'Connect to a remote server over SSH and edit its files as if they were local. Standard kit for dev servers / EC2 / Raspberry Pi work.',
      ja: 'SSHでリモートサーバーに接続し、ローカルのVS Codeでリモートのコードを直接編集。開発サーバー/EC2/Raspberry Pi作業の定番。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh',
    os: 'windows', category: 'dev', price: 'free',
  },
  {
    name: 'Dev Containers',
    desc: {
      zh: '把项目放进 Docker 容器里开发，团队成员的环境完全一致。配 .devcontainer/devcontainer.json 一次受用所有人。',
      en: 'Develop inside a Docker container so every teammate has an identical environment. Set up .devcontainer/devcontainer.json once and onboard new devs in minutes.',
      ja: 'プロジェクトをDockerコンテナ内で開発し、チーム全員の環境を完全統一。.devcontainer/devcontainer.jsonを一度設定すれば全員の手間が消える。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers',
    os: 'windows', category: 'dev', price: 'free',
  },

  // ========== Testing ==========
  {
    name: 'Vitest',
    desc: {
      zh: 'Vitest 测试框架的官方扩展，可以在编辑器侧边栏看到测试树、单测点击运行。比 Jest 测试体验明显好。',
      en: 'Official Vitest extension. Browse tests in the side panel, click to run individual ones. A clear step up from the Jest experience.',
      ja: 'Vitestテストフレームワーク公式拡張。サイドバーでテストツリーを表示、個別実行可能。Jestより明らかに良い体験。',
    },
    url: 'https://marketplace.visualstudio.com/items?itemName=vitest.explorer',
    repo: 'vitest-dev/vscode',
    os: 'cross', category: 'security', price: 'oss',
  },
];
