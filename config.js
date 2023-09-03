// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给那超级",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "美丽的大漂亮",  // 同上...
        "今天是你的生日",
        "小黄祝你快乐,不止生日",
        "愿你成长",
        "落落大方，枯木逢春，不负众望",
        "愿你贪吃不胖，愿你懒惰不丑",
        "愿你所求皆如愿，所行化坦途",
        "多喜乐，长安宁",
        "还有好多祝福说不完,但是篇幅有点不够了",
        "那就先到这里啦~",
        "等一下~",
        "音乐还有哦,小吴可以慢慢欣赏",
        "其实小黄想唱一首的",
        "但是五音不全,会吵到小吴的耳朵的hhh",

    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "美丽的大漂亮": "./imgs/xiaokeai.png",
        "但是五音不全,会吵到小吴的耳朵的hhh": ".imgs/cdwdedl.png",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "小吴点这里呀~",
        play: "音乐走起~",
        bannar_coming: "先来个彩带",
        balloons_flying: "好像少点东西哦~",
        cake_fadein: "蛋糕？",
        light_candle: "蜡烛？",
        wish_message: "吴大漂亮生日快乐呀~",
        story: "写给小吴的生日祝福！",
    }
};
