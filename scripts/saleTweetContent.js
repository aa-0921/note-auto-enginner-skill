// Amazonセール情報のTwitter投稿内容定義
// ブラックフライデーセール用の投稿内容を定義

import { affiliateConfig } from './affiliateConfig.js';

const { affiliateTag } = affiliateConfig;

// ツイートメッセージ候補配列
export const saleTweetMessages = [
  'Amazonの注文履歴画面から今年買ったものの中でセールになっているものを買っておくと、お得にストックすることができて節約になります！🉐',
  'Amazonの注文履歴画面から今年買ったものの中でセールになっているものを買っておくと、お得にストックすることができて節約になります！🉐',
  '1年で最も安くなるからブラックフライデーだけは買っちゃいます😅\n\nAmazonブラックフライデーセール開催中です！',
  '毎年このセール時期だけは我慢できずに買い物してしまいます...\n\nAmazonブラックフライデーセール始まりました🎉\n1年で最も安いから仕方ないです✨',
  '普段は我慢してるけど、ブラックフライデーだけは買ってしまいます😊\n\nAmazonブラックフライデーセール開催中🔥\n欲しかったあの商品、今が買い時かも！',
  'また買っちゃいます...毎年同じパターン😭\n\nAmazonブラックフライデーセール開催中！\n1年で最も安いから仕方ないですよね💰',
  '普段は節約モードだけど、この時期だけは許してください💸\n\nAmazonブラックフライデーセール始まりました🎊\nまとめ買いするなら今がチャンスです！',
  'ブラックフライデーだけは買い物のルールを破っちゃいます🤫\n\nAmazonブラックフライデーセール開催中🔥\n1年で最も安いから、この機会を逃せません✨',
  // '✨ Amazonブラックフライデーセール情報まとめ\n\nセール期間：\n🉐 先行：11月21日（金）0:00～11月23日（日）23:59\n🉐 本セール：11月24日（月）0:00～12月1日（月）23:59',
  // '🎁 Amazonブラックフライデーセールお得な情報をお届けします\n\nAmazonデバイスから家電、ファッション、食料品まで、あらゆるカテゴリが史上最大の割引率で登場！',
  // '🔥 Amazonブラックフライデーセールでお買い物！\n\n2025年最後のビッグチャンスを見逃さないでください💪\nポイントアップキャンペーンも同時開催中です🎊',
  // '💸 Amazonブラックフライデーセール情報\n\n年末の大掃除に活躍する家電や、新しい年を気持ちよく迎えるための寝具・インテリアまで、この機会にまとめてご準備いただけます🏠',
  // '🎊 Amazonブラックフライデーセール開催！要チェック商品まとめ\n\n普段必ず買う消耗品が驚くほど安くなります🛒\n安い時にまとめて買っておくだけで、毎月の生活費がグッと減ります✨',
];

// ハッシュタグ配列
export const saleTweetHashtags = [
  '#Amazonブラックフライデー',
  '#ブラックフライデーセール',
  // '#アマゾンセール',
  // '#ブラックフライデー',
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
const saleLinkBlackFridayMainUrl = `https://www.amazon.co.jp/blackfriday?&linkCode=ll2&tag=${affiliateTag}&linkId=213b50b8f3333d64c518a3817bcc1088&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink80PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A80%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink60PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A60%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;

export const saleTweetAffiliateLinks = [
  `💰 🎁 Amazonブラックフライデーセール会場はこちら！\n${saleLinkBlackFridayMainUrl}`,
  // `💰 🎁 割引率80%以上の商品一覧\n${saleLink80PercentUrl}`,
  // `💰 🎁 割引率60%以上の商品一覧\n${saleLink60PercentUrl}`,
];

