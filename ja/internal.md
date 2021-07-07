本アプリの処理フローは下記の流れになっています。

1. メタ情報の把握
    - URLで指定された下記のメタ情報を把握
        - データフォーマットバージョン
        - 構文タイプ
    - ユーザーがテキストボックスに書いたfurumaiのコードは一旦URLに反映後に処理
1. デコード
    - URLからfurumaiのコードをデコード
    - このときデータフォーマットバージョンの指定にもとづきデコード
1. パース
    - 構文タイプにもとづきパース
1. オブジェクトツリー構築
    - 各オブジェクトの親子関係を構築
1. スタイルの特定
    - 各要素の幅、高さの指定があれば特定
    - フレックスボックス関連のスタイルを特定
1. レイアウトの決定
    - レイアウトエンジンが各要素のレイアウトを決定
1. 描画
    - 各オブジェクトのレイアウト、スタイル指定にもとづき描画
    - 描画はVue.jsを利用
1. エフェクト
    - rough.jsによる手書き風エフェクトの有無