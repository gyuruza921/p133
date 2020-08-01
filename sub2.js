
"use strict"

// 
// 目標：ブログへ記事（Article）を投稿（post）するプログラムが以下のように組まれている：
// 

// 記事クラス
// タイトルと内容を持つ
class Article {
    constructor(title, text) {
        this.title = title;
        this.text = text;
    }
}

// ブログクラス
// 投稿を受け付ける
class Blog {
    post(article) {
        console.log(article.title);
        console.log(article.text);
        console.log('ブログに投稿しました！')
    }
}

// 記事を作成する
const article = new Article('テスト', 'これはテストです');

// 記事をブログに投稿する
const blog = new Blog();
blog.post(article);

// 
// このプログラムに新たにEmailクラスとSNSクラスを追加し、それぞれのクラスに記事を投稿するpost(article)メソッドを追加せよ。
// ただし、EmailはBlogと同様にtitleとtextの両方を処理できるが、SNSは記事のtitleを処理できない（titleを無視する）ものとする。
// なお、ここで「投稿」とはコンソールに内容を表示することを指す。また、同じ記事をBlog、Email、SNSのそれぞれへ投稿できることを確かめよ。
// 

// Emailクラスを作成
class Email {
    post(article) {
        console.log(article.title);
        console.log(article.text);
        console.log("メールを送信しました");
    }
}

// SNSクラスを作成
class SNS {
    post(article) {
        console.log(article.text);
        console.log("SNSに投稿しました");
    }
}

// 
// 動作確認
// 

const email = new Email();

email.post(article);

const sns = new SNS();

sns.post(article);
