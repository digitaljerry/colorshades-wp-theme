// gondaba.com!


function setCookie(name, value, session) {
    var expires;
    if (session) {
        expires = ""
    } else {
        expires = new Date();
        expires.setTime(expires.getTime() + 365 * 24 * 60 * 60 * 1000)
    }
    var curCookie = name + "=" + encodeURIComponent(value) + ((expires) ? "; expires=" + expires.toGMTString() : "") + "; path=/";
    document.cookie = curCookie
}
function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return ""
    } else {
        begin += 2
    }
    var end = document.cookie.indexOf(";", begin);
    if (end == -1) end = dc.length;
    return decodeURIComponent(dc.substring(begin + prefix.length, end)).replace(/\+/g, " ")
}
function $(strId) {
    return document.getElementById(strId)
}
function hasClassName(obj, class_name) {
    var regex = new RegExp("(^|\\s)" + class_name + "(\\s|$)");
    return !!regex.test(obj.className)
}
function getElementsByClassName(oElm, strTagName, strClassName) {
    var arrElements = (strTagName == "*" && oElm.all) ? oElm.all : oElm.getElementsByTagName(strTagName);
    var arrReturnElements = [];
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oElement;
    for (var i = 0; i < arrElements.length; i++) {
        oElement = arrElements[i];
        if (hasClassName(oElement, strClassName)) {
            arrReturnElements.push(oElement)
        }
    }
    return (arrReturnElements)
}
function addClassName(oElm, strClassName) {
    var strCurrentClass = oElm.className;
    if (!new RegExp(strClassName, "i").test(strCurrentClass)) {
        oElm.className = strCurrentClass + ((strCurrentClass.length > 0) ? " " : "") + strClassName
    }
}
function removeClassName(oElm, strClassName) {
    var oClassToRemove = new RegExp((strClassName + "\s?"), "i");
    oElm.className = oElm.className.replace(oClassToRemove, "").replace(/^\s?|\s?$/g, "")
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func
    } else {
        window.onload = function () {
            oldonload();
            func()
        }
    }
}
var swatchScroller;

function doColors(colors) {
    if (typeof colors == 'string') {
        if (colors == 'random') {
            var name = 'random'
        } else {
            var name = colors;
            var colors = themes[name]
        }
    } else {
        if (getCookie("colors") && themes[getCookie("colors")]) {
            var name = getCookie("colors");
            var colors = themes[name]
        } else {
            var name = 'default';
            var colors = themes[name]
        }
    }
    var new_colors = [];
    for (var i = 0; i < colors.length; i++) {
        colors[i] = colors[i].replace(/^#/, '');
        new_colors.push(calcColors(colors[i]))
    }
    var outer_contents = getElementsByClassName(document, 'div', 'outer_content');
    var count = 0;
    for (var i = 0; i < outer_contents.length; i++) {
        var cc = new_colors[count];
        var outer_content = outer_contents[i];
        var contents = getElementsByClassName(outer_content, 'div', 'content');
        var posts = getElementsByClassName(outer_content, 'div', 'post');
        var post = posts[0];
        var content = contents[0];
        content.style.borderRight = '10px solid ' + cc['bg']['-1'];
        content.style.borderLeft = '10px solid ' + cc['bg']['-1'];
        content.style.backgroundColor = cc['bg']['0'];
        outer_content.style.backgroundColor = cc['bg']['-3'];
        if (post) {
            post.style.color = cc['fg']['0']
        } else {
            content.style.color = cc['fg']['0']
        }
        var links = outer_content.getElementsByTagName('a');
        for (var j = 0; j < links.length; j++) {
            var link = links[j];
            if (hasClassName(link, 'permalink')) {
                link.style.color = cc['bg']['-4']
            } else {
                link.style.color = cc['fg']['+1']
            }
        }
        if (i == outer_contents.length - 1 && outer_contents.length < 5) {
            content.style.height = "400px"
        }
        count += 1;
        if (count >= new_colors.length) count = 0
    }
}
function changeStyle(which) {
    var colors = themes[which].join(",");
    doColors(which);
    setCookie('colors', which, false)
}
function setupClickEvent(node, theme) {
    var fn = function () {
        changeStyle(theme)
    };
    if (document.addEventListener) {
        node.addEventListener('click', fn, true)
    } else if (document.attachEvent) {
        node.attachEvent('onclick', fn)
    } else {
        node['onclick'] = fn
    }
}
function createSwatch(name, colors) {
    if ($('swatch_' + name)) {
        var swatchHolder = $('swatch_' + name);
        while (swatchHolder.hasChildNodes()) {
            swatchHolder.removeChild(swatchHolder.lastChild)
        }
    } else {
        var swatchHolder = document.createElement('div');
        addClassName(swatchHolder, 'swatch_holder');
        swatchHolder.setAttribute("id", "swatch_" + name)
    }
    var linkContainer = document.createElement('a');
    linkContainer.setAttribute("href", "#" + name);
    for (var i = 0; i < colors.length; i++) {
        var color = colors[i];
        var swatchDiv = document.createElement('div');
        addClassName(swatchDiv, 'swatch');
        swatchDiv.style.width = Math.floor(100 / colors.length) + "px";
        swatchDiv.style.backgroundColor = '#' + color.replace('#', '');
        linkContainer.appendChild(swatchDiv)
    }
    if (name == 'random') {
        var randomDiv = document.createElement('div');
        randomDiv.style.position = 'absolute';
        randomDiv.style.font = '12px Verdana, sans-serif';
        randomDiv.style.color = '#000';
        randomDiv.style.top = '4px';
        randomDiv.style.left = '20px';
        randomDiv.appendChild(document.createTextNode("random"));
        linkContainer.appendChild(randomDiv)
    }
    setupClickEvent(linkContainer, name);
    swatchHolder.appendChild(linkContainer);
    $('swatches').appendChild(swatchHolder)
}
function setupSwatches() {
    for (var themeName in themes) {
        createSwatch(themeName, themes[themeName])
    }
}
function HexToR(h) {
    return parseInt((h).substring(0, 2), 16)
}
function HexToG(h) {
    return parseInt((h).substring(2, 4), 16)
}
function HexToB(h) {
    return parseInt((h).substring(4, 6), 16)
}
function hex2rgb(hex) {
    return [HexToR(hex), HexToG(hex), HexToB(hex)]
}
function rgb2hex(triplet) {
    var hex_alphabets = "0123456789ABCDEF";
    var hex = '';
    var int1;
    var int2;
    for (var i = 0; i < 3; i++) {
        if (triplet[i] > 255) triplet[i] = 255;
        int1 = triplet[i] / 16;
        int2 = triplet[i] % 16;
        hex += hex_alphabets.charAt(int1) + hex_alphabets.charAt(int2)
    }
    return (hex)
}
function mix(hex, percent, mask) {
    rgb = hex2rgb(hex);
    for (var i = 0; i < 3; i++) {
        rgb[i] = Math.round(rgb[i] * percent) + Math.round(mask * (1 - percent))
    }
    return rgb2hex(rgb)
}
function lighten(hex, percent) {
    return mix(hex, percent, 255)
}
function darken(hex, percent) {
    return mix(hex, percent, 0)
}
function brightness(hex) {
    var rgb = hex2rgb(hex);
    return (((rgb[0] * 299) + (rgb[1] * 587) + (rgb[2] * 114)) / 1000)
}
function brightnessDiff(hex1, hex2) {
    var b1 = brightness(hex1);
    var b2 = brightness(hex2);
    return Math.abs(b1 - b2)
}
function colorDiff(hex1, hex2) {
    var rgb1 = hex2rgb(hex1);
    var rgb2 = hex2rgb(hex2);
    return (Math.abs(rgb1[0] - rgb2[0]) + Math.abs(rgb1[1] - rgb2[1]) + Math.abs(rgb1[2] - rgb2[2]))
}
minBrightDiff = 126;
minColorDiff = 500;

function calcFG(bgHex, fgHex) {
    var percents = [1, 0.75, 0.5, 0.25, 0];
    for (var i = 0; i < percents.length; i++) {
        var percent = percents[i];
        var darker = darken(fgHex, percent);
        var lighter = lighten(fgHex, percent);
        var darkerBrightDiff = brightnessDiff(bgHex, darker);
        var lighterBrightDiff = brightnessDiff(bgHex, lighter);
        if (lighterBrightDiff > darkerBrightDiff) {
            var newFG = lighter;
            var newFGBrightDiff = lighterBrightDiff
        } else {
            var newFG = darker;
            var newFGBrightDiff = darkerBrightDiff
        }
        var newFGColorDiff = colorDiff(bgHex, newFG);
        if (newFGBrightDiff >= minBrightDiff && newFGColorDiff >= minColorDiff) {
            break
        }
    }
    return newFG
}
function calcColors(color) {
    var hash = {
        bg: {},
        fg: {}
    };
    hash['bg'] = {
        '-5': darken(color, .1),
        '-4': darken(color, .25),
        '-3': darken(color, .5),
        '-2': darken(color, .75),
        '-1': darken(color, .85),
        '0': color,
        '+1': lighten(color, .85),
        '+2': lighten(color, .75),
        '+3': lighten(color, .5),
        '+4': lighten(color, .25),
        '+5': lighten(color, .1)
    };
    for (var i = -5; i <= 5; i++) {
        text = (i > 0) ? '+' + i : text = '' + i;
        hash['fg'][text] = '#' + calcFG(hash['bg'][text], color);
        hash['bg'][text] = '#' + hash['bg'][text]
    }
    return hash
}
var defaultStep = 1;
var step = defaultStep;
var timerDown = "";
var timerUp = "";

function scrollDivDown(id) {
    clearTimeout(timerDown);
    document.getElementById(id).scrollTop += step;
    timerDown = setTimeout("scrollDivDown('" + id + "')", 10)
}
function scrollDivUp(id) {
    clearTimeout(timerUp);
    document.getElementById(id).scrollTop -= step;
    timerUp = setTimeout("scrollDivUp('" + id + "')", 10)
}
function stopScrolling() {
    clearTimeout(timerDown);
    clearTimeout(timerUp)
}
