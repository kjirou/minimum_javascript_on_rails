# minimum_javascript_on_rails

- [README (English)](/README.md)
- [README (日本語)](/README.ja.md)

## :tipping_hand_woman: このアプリケーションは何か？

[webpacker](https://github.com/rails/webpacker) なしで Node.js ベースの最小の JavaScript ビルド環境を設定した、
  Ruby on Rails アプリケーションのサンプルである。

もしあなたの Rails アプリケーションが以下の条件のいくつかに一致するならば、
  このリポジトリの設定を使う方が保守性があがるかもしれない。

- 多くの JavaScript コードを含まない。
- スタイルシートのビルド環境は [sprockets-rails](https://github.com/rails/sprockets-rails) で十分だ。
- 使わない npm パッケージはインストールしない。
- 必要なパッケージを即座に更新できるようにするために、npm パッケージは可能な限り個別のものとして管理する。
- 開発者は webpacker より基礎的な JavaScript の知識を学びたいと思っている。


## :wrench: インストール
### ローカル環境へインストールが必要なソフトウェア

- [Ruby](https://www.ruby-lang.org/) == `2.6`
- [Node.js](https://nodejs.org/) == `10`

### このアプリケーションをインストールする

```
git clone git@github.com:kjirou/minimum_javascript_on_rails.git
bin/setup
```


## :cat: クライアントサイドへ追加された機能

- `npm run build`
  - このコマンドは、スタンドアロンビルド用である。 主に本番リリースに使用する。
- `npm run watch`
  - `npm run watch` が `rails server` と一緒に実行されている場合、
    ブラウザをリロードするときに JavaScript ソースの変更が適用される。
- `npm run clean`
  - `npm run build` または `npm run watch` によって生成されたファイルの削除。


## :gear: 設定のカスタマイズ

ひとつの設定を増やすと別の他の設定と連鎖して、総設定量が加速度的に増えてしまう。  
そのため、このサンプルは本体の設定量は最小にして、プルリクエストの形式で設定のカスタマイズ例を表現することにした。

### ユニットテストを Node.js/Jest で動かす

- [参考プルリクエスト](https://github.com/kjirou/minimum_javascript_on_rails/pull/9)

### Babel から TypeScript へ変更する

- [参考プルリクエスト](https://github.com/kjirou/minimum_javascript_on_rails/pull/10)

### クライアントサイド専用の開発環境を作る

- (あとで書くかも？)

### CSS を Node.js でビルドする

- (あとで書くかも？)

### [Stimulus](https://github.com/stimulusjs/stimulus) を使う

- (あとで書くかも？)

### "Please execute `npm run build` command before operating the Rails." エラーを抑止する

- [参考プルリクエスト](https://github.com/kjirou/minimum_javascript_on_rails/pull/8)

### ビルドされた JavaScript ファイルのサイズを減少する

- すみません、詳しく知らない。
- 最初に "webpack chunk" とかでググると良さそう。
