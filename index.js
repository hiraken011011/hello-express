// expressモジュールを読み込む
const express = require('express');

// exoressアプリを生成する
const app = express();

// localhostにアクセスしたら「Hello」
app.get('/', (req, res) => res.send('Hello'));

// ポート3000でサーバを立てる
app.listen(3000, () => console.log('listening on port 3000'));

// 「node index.js」を実行し、「http://localhost:3000/」にアクセス
