// イベント告知記事（アマゾンセール）の投稿内容定義
// セクション配列とタイトル配列を定義

import { affiliateConfig } from './affiliateConfig.js';

const { affiliateTag } = affiliateConfig;

// タイトル候補配列（12/8(月)までのブラックフライデー（アフターセール）セールであることを明記）
export const eventAmazonArticleTitles = [
  '🎉 【12/8(月)まで】アマゾンブラックフライデー（アフターセール）セール開催中！お得な商品をチェック | Amazon | セール | お買い得 | お買い物 | お得 | フォロバ100 | フォロバ',
  '🛍️ 【12/8(月)まで】アマゾンブラックフライデー（アフターセール）セール情報をお届けします！ | Amazon | セール | お買い得 | お買い物 | お得 | フォロバ100 | フォロバ',
  '💰 【12/8(月)まで】今だけの特別価格！お見逃しなく！ブラックフライデー（アフターセール）セール | Amazon | セール | お買い得 | お買い物 | お得 | フォロバ100 | フォロバ',
  '✨ 【12/8(月)まで】Amazonブラックフライデー（アフターセール）セール情報まとめ | Amazon | セール | お買い得 | お買い物 | お得 | フォロバ100 | フォロバ',
  '🎁 【12/8(月)まで】Amazonブラックフライデー（アフターセール）セールお得な情報をお届けします | Amazon | セール | お買い得 | お買い物 | お得 | フォロバ100 | フォロバ',
  '🔥 【12/8(月)まで】Amazonブラックフライデー（アフターセール）セールでお買い物！ | Amazon | セール | お買い得 | お買い物 | お得 | フォロバ100 | フォロバ',
  '💸 【12/8(月)まで】Amazonブラックフライデー（アフターセール）セールセール情報 | Amazon | セール | お買い得 | お買い物 | お得 | フォロバ100 | フォロバ',
  '🎊 【12/8(月)まで】Amazonブラックフライデー（アフターセール）セール開催！要チェック商品まとめ | Amazon | セール | お買い得 | お買い物 | お得 | フォロバ100 | フォロバ',
];

// 固定セクション（記事の先頭に必ず表示）
export const eventAmazonArticleHeaderSections = [
  {
    title: '## 🎉 アマゾンセール開催中！',
    text: `アマゾンで開催中のセール情報をお届けします🛍️
お得な商品をチェックして、お気に入りのアイテムを見つけてください✨
期間限定の特別価格なので、見逃さないようにご注意ください💰

このブラックフライデー（アフターセール）セールは12/8(月)までです⏰
期間中にチェックして、お得にストックしておきましょう✨

Amazonの注文履歴画面から今年買ったものの中でセールになっているものを買っておくと、お得にストックすることができて節約になります！🉐

セール期間：

🉐 先行：11月21日（金）0:00～11月23日（日）23:59

🉐 本セール：11月24日（月）0:00～12月1日（月）23:59`,
  },
];

// 投稿内容のセクション配列（オブジェクト形式）
export const eventAmazonArticleSections = [
  {
    title: '## 💖 Amazonブラックフライデー（アフターセール）：賢く心豊かに！年末の買い物がもたらす最高の恩恵',
    text: `✨ 買うことは未来の自分への投資です

年に一度のAmazon「ブラックフライデー（アフターセール）」は、単なる安売りイベントではございません。これは、あなたの年末の生活、そして新しい年をより豊かにするための、戦略的な機会なのです。

なぜ、この時期に買い物をするべきなのか。その経済的・心理的なメリットをご紹介いたします。`,
  },
  {
    title: '## 💰 知的な節約術！「賢い先回り買い」のメリット',
    text: `ブラックフライデー（アフターセール）の最大の魅力は、その圧倒的な割引率にあります。

家計防衛： 日用品や消耗品を大幅に安い価格でまとめ買いしておくことで、日常的な出費を減らし、長期的な節約につながります。

Amazonの注文履歴画面から今年買ったものの中でセールになっているものを買っておくと、お得にストックすることができて節約になります！🉐

高額商品のチャンス： 普段なかなか手が出ない高額な家電やガジェットも、この期間だけは手が届く価格帯になります。安い時にこそ、本当に価値のあるものを選び取ることで、結果的にコストパフォーマンスの高い買い物となります。

安い時期に一気に買うことは、計画性のある、最も知的な節約法なのです。`,
  },
  {
    title: '## 🎁 自分を労う「ご褒美消費」が明日への活力に',
    text: `あなたは今年一年、本当に頑張りました。仕事や家事、日々の責任を果たす中で、知らず知らずのうちにストレスは溜まっています。

精神的なリセット： 少し贅沢な買い物は、自分への承認欲求を満たし、自己肯定感を高めます。この「ご褒美消費」は、単なる浪費ではなく、精神的なリフレッシュであり、年末を乗り切るための活力となります。

脳への良い影響： 心理学の研究では、欲しいものを手に入れるというプロセスは、脳内の快感物質（ドーパミン）を分泌させ、ストレス解消やモチベーション向上に繋がると言われています。

ブラックフライデー（アフターセール）を利用して、心を潤す「最高のご褒美」を手に入れましょう。`,
  },
  {
    title: '## 🗓️ 年末年始をスムーズにする「時間の節約」',
    text: `この時期の買い物には、時間の節約という大きなメリットもあります。

事前準備の完了： 年末年始のイベントに必要な食材やプレゼント、大掃除用のアイテムを今のうちに揃えておけば、忙しい師走に焦って買い物をする必要がなくなります。

ストレスの軽減： 事前に準備を済ませておくことで、年末の混雑や焦りからくるストレスを大幅に軽減し、心穏やかに新年を迎える準備ができます。`,
  },
  {
    title: '## 📅 セール期間を有効活用してください',
    text: `この最高のチャンスを逃さないように、期間を再度ご確認ください。

🉐 先行セール期間：11月21日（金）0:00～11月23日（日）23:59

🉐 本セール期間：11月24日（月）0:00～12月1日（月）23:59

賢く節約し、心を満たす。 Amazonブラックフライデー（アフターセール）で、最高の年末をデザインしてください。`,
  },
  {
    title: '## 💡 なぜ今買うべき？ブラックフライデー（アフターセール）のメリットを解説',
    text: `### Amazonデバイスが超お得！

Fire TV StickやKindle、Echoシリーズなど、Amazon純正デバイスはブラックフライデー（アフターセール）の目玉商品です。スマートライフへの第一歩を、驚きの価格で始められます。`,
  },
  {
    title: '## 🏠 効率的に年越し準備を！',
    text: `年末の大掃除に活躍する高圧洗浄機やロボット掃除機、新しい年を気持ちよく迎えるための寝具やインテリア、さらには親戚や友人が集まる際に役立つ高級食材まで、この機会にまとめて準備できます。`,
  },
  {
    title: '## 🎁 ポイントアップキャンペーンも見逃せない',
    text: `セール期間中は、ポイントアップキャンペーンも同時開催されることが恒例です。ぜひエントリーをお忘れなく。購入金額に応じてポイント還元率がアップし、さらにお得に買い物ができます。`,
  },
];

// 固定アフィリエイトリンク（必ず表示される3つ）
const fixedLinkBlackFridayMainUrl = `https://www.amazon.co.jp/blackfriday/2?_encoding=UTF8&pd_rd_w=ygD4C&content-id=amzn1.sym.deb8c7e3-e584-4f1c-bef7-5c8a19968d99&pf_rd_p=deb8c7e3-e584-4f1c-bef7-5c8a19968d99&pf_rd_r=YMVCW12K5WDRXTW6S222&pd_rd_wg=8ze3g&pd_rd_r=330bc4a7-b4c0-4fc1-b4cc-993aae48a763&linkCode=ll2&tag=${affiliateTag}&linkId=900a586885fe87e28b7abbff879b32eb&language=ja_JP&ref_=as_li_ss_tl`;
const fixedLink80PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A80%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const fixedLink60PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A60%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;

export const eventAmazonArticleFixedAffiliateLinks = [
  `
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
[Amazonブラックフライデー（アフターセール）セール会場はこちら！](${fixedLinkBlackFridayMainUrl})
${fixedLinkBlackFridayMainUrl}
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
`,
  `
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
[㊙️　割引率　80%以上の商品一覧](${fixedLink80PercentUrl})
${fixedLink80PercentUrl}
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
`,
  `
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
[㊙️　割引率　60%以上の商品一覧](${fixedLink60PercentUrl})
${fixedLink60PercentUrl}
💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁 💰 🎁
`,
];

// ランダムアフィリエイトリンク配列（6つから3つをランダムに選択）
const randomLinkPcUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%25222127210051%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const randomLinkFoodUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%252257240051%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const randomLinkDrugstoreUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522161669011%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const randomLinkBeautyUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%252252391051%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const randomLinkHobbyAndToysUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%252213299551%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
const randomLinkAmazonDevicesUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%25224976280051%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;

export const eventAmazonArticleRandomAffiliateLinks = [
  `
💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻
[パソコン・周辺機器のセール商品一覧](${randomLinkPcUrl})
${randomLinkPcUrl}
💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻 💻 👨‍💻
`,
  `
🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷
[食品・飲料・お酒のセール商品一覧](${randomLinkFoodUrl})
${randomLinkFoodUrl}
🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷 🍽️ 🍷
`,
  `
💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥
[ドラッグストアのセール商品一覧](${randomLinkDrugstoreUrl})
${randomLinkDrugstoreUrl}
💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥 💊 🏥
`,
  `
💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨
[ビューティー関連のセール商品一覧](${randomLinkBeautyUrl})
${randomLinkBeautyUrl}
💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨ 💄 ✨
`,
  `
🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮
[ホビー・おもちゃ関連のセール商品一覧](${randomLinkHobbyAndToysUrl})
${randomLinkHobbyAndToysUrl}
🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮 🧸 🎮
`,
  `
📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧
[Amazonデバイス等のセール商品一覧](${randomLinkAmazonDevicesUrl})
${randomLinkAmazonDevicesUrl}
📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧 📱 🎧
`,
];

// 後方互換性のため、旧形式の配列も残す（使用されない）
export const eventAmazonArticleAffiliateLinks = [
  `[【開催中】ブラックフライデー（アフターセール） 先行セール！セール会場はこちら。](https://www.amazon.co.jp/blackfriday?&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl)`,
];

// 記事末尾に追加する固定ハッシュタグ
export const eventAmazonArticleFooterHashtags = `#Amazonブラックフライデー（アフターセール） #ブラックフライデー（アフターセール）セール #アマゾンセール #ブラックフライデー（アフターセール） #お得情報 #セール情報 #お買い物 #おすすめ商品 #Amazon #アマゾン #セール #特価 #お買い得 #商品レビュー #おすすめ`;

