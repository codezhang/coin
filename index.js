// マルチタッチ対応
// トリプルタップまたはトリプルクリックで初期化
// PCならマウスホイールで拡大/縮小 + SHIFTキーで回転
// iPhoneならピンチで拡大/縮小
(function(uu, svg) {
    var n = [];

    uu.body(
        svg(100, 100, 600, 600,
            n[0] = svg.g(100, 10,
                svg.g(
                    n[1] = svg.circle({ cx: 50, cy: 50, r: 40, fill: "skyblue" }),
                    n[2] = svg.circle(60, 60, 25, { fill: "springgreen" }),
                    n[3] = svg.rect(60, 60, 100, 100, 20, 20, { fill: "hotpink" }),
                    n[4] = svg.text("drag me !", 30, 50, { stroke: "none", fill: "#000" }))),

            n[10] = svg.g(400, 10,
                    n[11] = svg.g(0, 0,
                                svg.circle({ cx: 50, cy: 50, r: 40, fill: "skyblue" })),
                    n[12] = svg.g(0, 0,
                                svg.circle(60, 60, 25, { fill: "springgreen" })),
                    n[13] = svg.g(0, 0,
                                svg.rect(60, 60, 100, 100, 20, 20,
                                         { fill: "hotpink" })),
                    n[14] = svg.g(0, 0,
                                svg.text("drag me !", 30, 50, { stroke: "none", fill: "#000" })))));


    var option = {
        mousedown: function(evt, node, option, dragInfo) {
            uu.fx.skip(node, 1, 1);
            uu.fx(node, 100, { o: 1 });
        },
        mouseup: function(evt, node, option, dragInfo) {
            uu.fx(node, 400, { o: 0.4 });
        }
    };

    uu("SVGDrag", n[0], null, option);
    uu("SVGDrag", n[11], null, option);
    uu("SVGDrag", n[12], null, option);
    uu("SVGDrag", n[13], null, option);
    uu("SVGDrag", n[14], null, option);


})(uu, uu.svg);
