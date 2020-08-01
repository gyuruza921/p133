"use strict"

// 
// 目標：課題：通貨を変換するクラスCurrencyConverterを作成せよ。CurrencyConverterはメソッドdollarToYen(dollar)とeuroToYen(euro)を持つものとする。
// ただし1ドル＝110円、1ユーロ＝135円とする。また、CurrencyConverterのインスタンスを作成し、正しく動作することを確かめよ。
// 

// 変換するクラスCurrencyConverterを作成
class CurrencyConverter {

    // コンストラクタ
    constructor(){

        // ドルのレート
        this._rateOfDollar = 110;
        // ユーロのレート
        this._rateOfEuro = 135;

    }

    // ドルを円に変換するメソッド
    dollarToYen(dollar) {
        return dollar * this._rateOfDollar;
    }
    // ユーロを円に変換するメソッド
    euroToyen(euro) {
        return euro * this._rateOfEuro;
    }

}

// 
// 動作確認
// 

// インスタンス作成
const converter = new CurrencyConverter();

// 結果を表示する
    // ４５ドルを円に変換
    console.log(`45ドルは${converter.dollarToYen(45)}円です`);
    // １３ユーロを円に変換
    console.log(`13ユーロは${converter.euroToYen(13)}円です`);

