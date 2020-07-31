
"use strict"

// 
// 制作目標：二次元ベクトルを表すクラスVector2と、複素数を表すクラスComplexを作成し、文字列表現を返すメソッドtoStringを2つのクラスに追加せよ。
// また、実際に各クラスのインスタンスを作成し、toStringが正しく動作することを確かめよ
// 

// 
// 各クラスの作成
// 

// 二次元ベクトルクラス
class Vector2 {
    // コンストラクタ
    constructor(x, y) {

        this._x = x;
        this._y = y;

    }
    // toStringメソッド
    toString() {

        return `[x ${this._x}, y ${this._y}]`;

    }

}

// 複素数クラス
class Complex {

    constructor(re, im) {

        this._re = re;
        this._im = im;

    }

    toString() {

        if(this._im < 0){
            return `[${this._re}${this._im}i]`
        }
        else{
            return `[${this._re}+${this._im}i]`
        }

    }

}


// 動作確認
// インスタンス作成
const vec = new Vector2(2, 7);
const comp = new Complex(5, -3);

// メソッドを呼び出す
console.log(vec.toString());
console.log(comp.toString());