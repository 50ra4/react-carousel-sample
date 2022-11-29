# react-carousel-sample

このプロジェクトは React で実装した Carousel の コンポーネントを作成したものです。

![画面収録 2022-11-29 19 36 29](https://user-images.githubusercontent.com/48591598/204507396-abc39668-f290-4a47-b878-65ebc943c99e.gif)

成果物は`github pages`に deploy しているので、以下の URL から確認できます。

https://50ra4.github.io/react-carousel-sample/

また、storybook は下記の URL から確認できます。

https://50ra4.github.io/react-carousel-sample/storybook/

## Setup

`git clone`後、プロジェクト直下で npm package の依存関係を install します。

```
npm i
```

別途、node.js（16.15.1）が必要です。

## Build

Vite を利用して、ソースコードを build します。
実行するとプロジェクト直下の dist のディレクトリに展開します。

```
npm run build
```

## Testing

Jest や `@testing-library/react` を用いて、テストを実行します。

```
npm run test
```

開発中にテストを実行する場合、Jest の watch オプションを追加することでソースファイルが変更される度にテストを実行します。

```
npm run test -- --watch
```

## Dev Server

Vite の plugin を利用して、HMR で開発できます。

```
npm run dev
```

## Linting

ESLint を利用し、Lint を実行しています。

```
npm run lint:eslint
```

VSCode の拡張機能と併用することで、ファイル保存時に実行します。
また、husky と併せて利用しており、commit 時にチェックを実行しているため、エラー状態での commit を抑止します。

## Formatting

prettier を利用し、コードの整形を行なっています。

```
npm run lint:prettier
```

VSCode の拡張機能と併用することで、ファイル保存時に実行します。
また、husky と併せて利用しており、commit 時にチェックを実行し、自動で整形します。

## Storybook

作成したコンポーネントの storybook を作成することで、作成したコンポーネントを確認できます

```
npm run storybook
```

静的ビルドすることも可能です。

```
npm run build-storybook
```

## CI

github actions を用いて CI を実行しています。
CI では、型定義、ビルド、testing を実行し、失敗しないことを確認できます。
ブランチを remote に push したタイミングで実行されます

## CD

github actions を用いて、作成した Web アプリケーションと storybook を Github Pages に公開します。
（github pages に公開するには、別途 github 上での設定が必要です）

```
npm run generate-gh-pages
```
