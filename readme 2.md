## ①課題内容（どんな作品か）
　-必要あれば操作方法等こちらに記載

攻撃ボタンをクリックすることで、相手と自分にランダムなダメージが入るゲームです。

## ②工夫した点・こだわった点
・攻撃するたびにHP変数が更新され、HPが減少するようにしました。
・HPが０になった時点で、ボタンが押せなくなるようにしました。
　※javascriptでHP＜＝０のときに、ボタンを押せないようにするclassを付与する形にを取りました。

## ③質問・疑問（あれば）
ダメージ換算にMath.random関数を使用していますが、ダメージが固定になってしまいました。
画面を更新すると数値は変わるのですが、その画面の間はダメージが固定されてしまうため、対策を調べているところです。

## ④その他（感想、シェアしたいことなんでも）
最初にcanvasを使用し、ドラクエの戦闘画面を作ろうと試みましたが、難しすぎて断念しました。
次にHihe & row(トランプ)を作ろうと試みましたが、難しすぎて断念しました。
これからもチャレンジし続けます。