---
title: "このサイトについて"
date: "2021年 8月22日"
---

# 始めに

こんにちは！！グローバル教養ゼミ、萱津ゼミ 1 期生の小瀧です！

今回は、このサイトを作成するにあたり、使用したプログラミング言語や設計の考え方、各種ツールなどについて紹介したいと思います。

**（プログラミングなどに特に興味がない方にとっては、退屈な内容かと思いますので、読み飛ばしてしまってください 🙇‍♂️）**

# 技術構成

まず、このサイトで用いている使用技術について紹介します。
このサイトは、以下の技術構成を採用して作成しています。

## **デザイン**

-   Figma

## **フロントエンド**

-   React/Next.js/Typescript

## **バックエンド**

-   Node.js(ファイルシステム)

## **スタイリング**

-   CSS Modules(Scss)

## **ホスティング**

-   Vercel

[ソースコード・リポジトリはこちら](https://github.com/soichiro-kotaki/kayatsu-seminar-blog)

React のフレームワークである Next.js を採用することで、静的な HTML のプリレンダリングを簡単に実装でき、UI の表示速度及びサイト訪問者の体験を向上しています。

また、Next.js の機能のひとつである、Link コンポーネントを用いたファイルルーティングを実装することで、高速なページ遷移を実現することができています。

# コンポーネント設計

上記の通り React を用いており、コンポーネント設計において、以下の方針を取っています。

## ** Atomic Design**

React のメジャーなコンポーネント設計思想である、Atomic Design を採用し、各パーツ毎の役割の大きさに基づいた粒度に応じて、atoms、molecules、templates、pages の 4 つに分割しています。（organisms については、高階層化によるディレクトリ構成の複雑化を回避するため、除外しています。）

[参考にさせていただいた記事](https://qiita.com/Keisuke_Tsuji/items/14bcad84bb86cdd622d1)

この辺りはまだまだ理解が浅く、最適なコンポーネント分割ができていない状態です。今後、さらなる学習を通して改善していきます！

# 使用したライブラリ

今回、便利な React 外部ライブラリを導入し、下記機能を実装しています。

## **モーダル型ハンバーガーメニュー**

-   react-modal

[使用方法に関する記事](https://tombomemo.com/react-modal-usage/)

## **ページ最上部に戻るボタン**

-   react-scroll

[使用方法に関する記事](https://fwywd.com/tech/install-react-scroll)

# 今後の開発について

現在、各投稿記事ページの生成は、**Node.js**によるファイルシステムによって実装していますが、今後 **microCMS** などを用いてリプレイスし、**ヘッドレス CMS**化していく予定です。

また、今後さらなる機能追加に伴って、使用したライブラリやツールなどに関しては、随時投稿記事にて紹介していきたいと思います！

# 最後に

今回は、このサイトの技術構成について紹介しました！

ゼミの活動以外に、このような **IT(プログラミングやデザイン)**関係の投稿も、これから行っていきます！
次回の投稿では、本サイト制作において、デザイン面で考慮したことなどを紹介していきます！

また、**お問い合わせフォーム（現在作成中）**から、質問や投稿に関するリクエストも受け付けておりますので、**プログラミングや IT** もしくは本グローバル教養ゼミに興味がある方は、ぜひご連絡ください！

最後まで読んでいただき、ありがとうございました 🙇‍♂️