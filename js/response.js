/**
 * Created by hebap on 2016/12/26.
 */
function pageResponse(d) {
    //要放在CSS的后面
    var c = navigator.userAgent,
        o = c.match(/Windows Phone ([\d.]+)/),
        e = c.match(/(Android);?[\s\/]+([\d.]+)?/),
        b = document.documentElement.clientWidth,
        n = document.documentElement.clientHeight,
        g = b / n,
        q = d.width || 320,
        l = d.height || 504,
        a = q / l,
        m = document.querySelectorAll(d.selectors),
        k = m.length,
        h = d.mode || "auto",
        j = d.origin || "left top 0",
        f = (h == "contain") ? (g > a ? n / l: b / q) : (h == "cover") ? (g < a ? n / l: b / q) : b / q;
    function p(t, s, r) {
        var i = s.style;
        i.width = q + "px";
        i.height = l + "px";
        i.webkitTransformOrigin = j;
        i.transformOrigin = j;
        i.webkitTransform = "scale(" + r + ")";
        i.transform = "scale(" + r + ")";
        if (t == "auto" && e) {
            document.body.style.height = l * r + "px"
        } else {
            if (t == "contain" || t == "cover") {
                i.position = "absolute";
                i.left = (b - q) / 2 + "px";
                i.top = (n - l) / 2 + "px";
                i.webkitTransformOrigin = "center center 0";
                i.transformOrigin = "center center 0";
                if (o) {
                    document.body.style.msTouchAction = "none"
                } else {
                    document.ontouchmove = function(u) {
                        u.preventDefault()
                    };
                    // 阻止滚动事件的触发事件
                }
            }
        }
    }
    while (--k >= 0) {
        p(h, m[k], f)
    }
};