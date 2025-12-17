# Dosee Wellness - 更新版

新しいページ（WellCha、DoSee詳細）を追加しました！

## 📁 新しいファイル構成

```
src/
├── main.jsx              # React Router設定済み
├── App.jsx               # トップページ（リンク追加済み）
├── pages/
│   ├── WellChaPage.jsx   # WellCha詳細ページ
│   └── DoSeePage.jsx     # DoSee詳細ページ
├── components/
│   ├── CustomCursor.jsx
│   ├── ParticlesCanvas.jsx
│   ├── Navigation.jsx
│   ├── HeroSection.jsx
│   ├── Card3D.jsx
│   ├── FloatingCard.jsx
│   ├── InteractiveSection.jsx
│   ├── Circles.jsx
│   └── Footer.jsx
└── styles/
    ├── globals.css       # メインスタイル
    └── pages.css         # 詳細ページ用スタイル
```

## 🚀 セットアップ手順

1. **プロジェクトフォルダの`src`を置き換える**
   ```bash
   # 既存のsrcフォルダをバックアップ（念のため）
   mv src src_backup
   
   # 新しいsrcフォルダを配置
   cp -r /mnt/user-data/outputs/src .
   ```

2. **開発サーバーを起動**
   ```bash
   npm run dev
   ```

3. **ブラウザで確認**
   - http://localhost:5173/

## ✨ 新機能

### ページ遷移
- トップページ → `/` 
- WellCha詳細 → `/wellcha`
- DoSee詳細 → `/dosee`

### トップページからのリンク
- 「持続可能な農業」カード → WellChaページへ
- 「クリーンビューティー」カード → DoSeeページへ

### 各詳細ページには：
- ブランドストーリー
- 商品の効果・特徴
- おすすめの飲み方
- 購入ボタン（WellChaは実際のShopifyリンク、DoSeeはComing Soon）
- トップページへ戻るボタン

## 🎨 デザインの特徴

- **WellChaページ**: 抹茶の緑とほうじ茶のオレンジのグラデーション
- **DoSeeページ**: ジンジャーオレンジの温かみのある配色
- **レスポンシブ対応**: モバイルでも快適に閲覧可能

## 📝 カスタマイズ

### 商品情報の編集
`src/pages/WellChaPage.jsx` と `src/pages/DoSeePage.jsx` を直接編集してください。

### スタイルの調整
- メインスタイル: `src/styles/globals.css`
- 詳細ページスタイル: `src/styles/pages.css`

## 🔗 ナビゲーション

ナビゲーションバーは全ページ共通で表示され、ロゴをクリックするとトップページに戻ります。

---

何か問題があれば教えてください！
