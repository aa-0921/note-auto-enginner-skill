// Amazonセール情報のTwitter投稿内容定義
// ブラックフライデー（アフターセール）セール用の投稿内容を定義

import { affiliateConfig } from './affiliateConfig.js';

const { affiliateTag } = affiliateConfig;

// ツイートメッセージ候補配列（メイン本文）
export const saleTweetMessages = [
  '注文履歴からセール品を買い足すと節約になります🉐',
  'よく買う日用品をセール中にまとめて補充すると家計がラクになります🉐',
  '1年で最も安いから買っちゃいます😅\n\nAmazonブラックフライデーセール開催中！',
  'この時期だけは我慢できずに買い物してしまいます...\nAmazonブラックフライデーセール始まりました🎉',
  '普段は我慢してるけど、ブラックフライデーだけは買ってしまいます😊\nAmazonブラックフライデーセール開催中🔥',
  'また買っちゃいます...毎年同じパターン😭\nAmazonブラックフライデーセール開催中！',
  '普段は節約モードだけど、この時期だけは許してください💸\nAmazonブラックフライデーセール始まりました🎊',
  'ブラックフライデーだけは買い物のルールを破っちゃいます🤫\nAmazonブラックフライデー（アフターセール）セール開催中🔥',
  // '✨ Amazonブラックフライデー（アフターセール）セール情報まとめ\n\nセール期間：\n🉐 先行：11月21日（金）0:00～11月23日（日）23:59\n🉐 本セール：11月24日（月）0:00～12月1日（月）23:59',
  // '🎁 Amazonブラックフライデー（アフターセール）セールお得な情報をお届けします\n\nAmazonデバイスから家電、ファッション、食料品まで、あらゆるカテゴリが史上最大の割引率で登場！',
  // '🔥 Amazonブラックフライデー（アフターセール）セールでお買い物！\n\n2025年最後のビッグチャンスを見逃さないでください💪\nポイントアップキャンペーンも同時開催中です🎊',
  // '💸 Amazonブラックフライデー（アフターセール）セール情報\n\n年末の大掃除に活躍する家電や、新しい年を気持ちよく迎えるための寝具・インテリアまで、この機会にまとめてご準備いただけます🏠',
  // '🎊 Amazonブラックフライデー（アフターセール）セール開催！要チェック商品まとめ\n\n普段必ず買う消耗品が驚くほど安くなります🛒\n安い時にまとめて買っておくだけで、毎月の生活費がグッと減ります✨',
];

// 差分用の短い文章（エンジニアの自己投資・スキルアップ文脈に寄せた一言）
// すべて「セールは12/8(月)まで〜」の形式で、短く意味が伝わるフレーズにする
export const saleTweetPrefixVariations = [
  'セールは12/8(月)まで⏰買い物チャンス💻',
  'セールは12/8(月)まで📚まとめ買いの好機📘',
  'セールは12/8(月)まで🛠️買うなら今✨',
  'セールは12/8(月)まで💡絶好のタイミング📈',
  'セールは12/8(月)まで🧠買い物期間🌱',
  'セールは12/8(月)まで🖥️仕事道具をグレードアップする！🚀',
  'セールは12/8(月)まで📖お得に買い物😇',
  'セールは12/8(月)まで🎧買わないと損！🔍',
  'セールは12/8(月)まで💻色々買っておきましょ🐣',
  'セールは12/8(月)まで📐デスク環境アップデート！🪑',
  'セールは12/8(月)まで🧩買い物しないと！📅',
  'セールは12/8(月)まで🧾今のうちに！💼',
  'セールは12/8(月)まで🌙アイテム探し🔦',
  'セールは12/8(月)まで🧪自分へのご褒美！🔭',
  'セールは12/8(月)まで🏠色々整えましょ🏔️',
  'セールは12/8(月)まで📊安いときに買いましょ📈',
  'セールは12/8(月)まで🧱一年で一番安い📘',
  'セールは12/8(月)まで🎯買い物チャンス🎯',
  'セールは12/8(月)まで🧰一気に揃えましょ🧲',
  'セールは12/8(月)まで🚀🌟',
];

// ハッシュタグ配列
export const saleTweetHashtags = [
  '#Amazonブラックフライデー',
  // '#ブラックフライデー（アフターセール）セール',
  // '#アマゾンセール',
  // '#ブラックフライデー（アフターセール）',
  // '#お得情報',
  // '#セール情報',
  // '#お買い物',
  // '#おすすめ商品',
  // '#Amazon',
  // '#アマゾン',
  // '#セール',
  // '#特価',
  // '#お買い得',
];

// アフィリエイトリンク配列
const saleLinkBlackFridayMainUrl = `https://www.amazon.co.jp/blackfriday/2?_encoding=UTF8&pd_rd_w=ygD4C&content-id=amzn1.sym.deb8c7e3-e584-4f1c-bef7-5c8a19968d99&pf_rd_p=deb8c7e3-e584-4f1c-bef7-5c8a19968d99&pf_rd_r=YMVCW12K5WDRXTW6S222&pd_rd_wg=8ze3g&pd_rd_r=330bc4a7-b4c0-4fc1-b4cc-993aae48a763&linkCode=ll2&tag=${affiliateTag}&linkId=900a586885fe87e28b7abbff879b32eb&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink80PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A80%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink60PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A60%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;

export const saleTweetAffiliateLinks = [
  `💰 🎁 セール会場はこちら！\n${saleLinkBlackFridayMainUrl}`,
  // `💰 🎁 割引率80%以上の商品一覧\n${saleLink80PercentUrl}`,
  // `💰 🎁 割引率60%以上の商品一覧\n${saleLink60PercentUrl}`,
];

