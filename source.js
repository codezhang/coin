// SVG仮対応
// upa ui/svgdrag.js
/*!{id:"uupaa.js",ver:0.8,license:"MIT",author:"uupaa.js@gmail.com"}*/
var uu;
uu || (function(win,
        doc,
        parseInt, parseFloat, getComputedStyle, JSON) {
var _prototype = "prototype",
  _toString = Object[_prototype].toString,
  _isArray = Array.isArray || (Array.isArray = ArrayIsArray),
  _uufx = "data-uufx",
  _uuguid = "data-uuguid",
  _uuevent = "data-uuevent",
  _lastOrientation = 0,
  _documentElement = "documentElement",
  _createTextNode = "createTextNode",
  _createElement = "createElement",
  _getAttribute = "getAttribute",
  _appendChild = "appendChild",
  _nextSibling = "nextSibling",
  _parentNode = "parentNode",
  _firstChild = "firstChild",
  _visibility = "visibility",
  _lastChild = "lastChild",
  _nodeArray = "nodeArray",
  _nodeType = "nodeType",
  _replace = "replace",
  _indexOf = "indexOf",
  _display = "display",
  _number = "number",
  _string = "string",
  _height = "height",
  _before = "before",
  _after = "after",
  _width = "width",
  _false = !1,
  _true = !0,
  _types = { "undefined": 8 },
  _rootNode = doc[_documentElement],
  _dd2num = {},
  _num2dd = {},
  _bb2num = {},
  _num2bb = {},
  _hh2num = {},
  _num2hh = { 256: "00" },
  _trimSpace = /^\s+|\s+$/g,
  _ver = detectVersions(0.8),
  _ie = _ver.ie,
  _gecko = _ver.gecko,
  _opera = _ver.opera,
  _webkit = _ver.webkit,
  _work;
doc.html || (doc.html = _rootNode);
doc.head || (doc.head = uutag("head")[0]);
uu = uumix(uufactory, {
  config: uuarg(win.uuconfig, {
    log:        "log"
  }),
  ver: _ver,
  ie: _ie,
  gecko: _gecko,
  opera: _opera,
  webkit: _webkit,
  snippet: uusnippet,
  ajax: uuajax,
  require: uurequire,
  jsonp: uujsonp,
  like: uulike,
  type: uutype,
  isNumber:       isNumber,
  isString:       isString,
  isFunction:     isFunction,
  arg: uuarg,
  mix: uumix,
  each: uueach,
  keys: uukeys,
  values: uuvalues,
  hash: uumix(uuhash, {
    has: uuhas,
    nth: uunth,
    size: uusize,
    clone: uuclone,
    indexOf: uuindexof
  }),
  array: uumix(uuarray, {
    has: uuhas,
    nth: uunth,
    dump: uudump,
    size: uusize,
    sort: uusort,
    clean: uuclean,
    clone: uuclone,
    toHash: uutohash,
    unique: uuunique
  }),
  attr: uuattr,
  data: uumix(uudata, {
    clear: uudataclear,
    bind: uudatabind,
    unbind:     undataunbind
  }),
  css: uumix(uucss, {
    show: uucssshow,
    hide: uucsshide,
    isShow: uucssisshow,
    opacity: uucssopacity,
    unit: uucssunit
  }),
  viewport: uuviewport,
  fx: uumix(uufx, {
    skip: uufxskip,
    isBusy: uufxisbusy
  }),
  id: uuid,
  tag: uutag,
  match: uumatch,
  query: uuquery,
  klass: uumix(uuklass, {
    has: uuklasshas,
    add: uuklassadd,
    remove: uuklassremove,
    toggle: uuklasstoggle
  }),
  Class: uumix(uuclass, {
    singleton: uuclasssingleton
  }),
  event: uumix(uuevent, {
    has: uuhas,
    fire: uueventfire,
    stop: uueventstop,
    unbind: uueventunbind,
    attach: uueventattach,
    detach: uueventdetach
  }),
  bind: uuevent,
  unbind: uueventunbind,
  node: uumix(uunode, {
    add: uunodeadd,
    has: uuhas,
    bulk: uunodebulk,
    find: uunodefind,
    path: uunodepath,
    swap: uunodeswap,
    wrap: uunodewrap,
    clear: uunodeclear,
    remove: uunoderemove,
    builder: uunodebuilder,
    indexOf: uunodeindexof,
    children: uunodechildren
  }),
  nodeid: uumix(uunodeid, {
    toNode: uunodeidtonode,
    remove: uunodeidremove
  }),
  html: uuhtml,
  head: uuhead,
  body: uubody,
  text: uutext,
  json: uumix(uujson, {
    decode: uujsondecode
  }),
  fix: uufix,
  trim: uumix(uutrim, {
    tag: uutrimtag,
    func: uutrimfunc,
    quote: uutrimquote
  }),
  format: uuformat,
  date: uudate,
  guid: uuguid,
  ready: uumix(uuready, {
    fire: uureadyfire,
    dom: _false,
    window: _false,
    audio: _false,
    video: _false,
    canvas: _false,
    storage: _false,
    reload: _false
  }, detectFeatures(_ver)),
  flash: uuflash,
  puff: uupuff,
  log: uumix(uulog, {
    clear: uulogclear
  }),
  ui: {},
  dmz: {},
  nop:            nop
});
function nop() {
}
uu.config.baseDir || (uu.config.baseDir =
  uutag("script").pop().src[_replace](/[^\/]+$/, function(file) {
    return file === "uupaa.js" ? "../" : "";
  }));
MsgPump[_prototype] = {
  send: uumsgsend,
  post: uumsgpost,
  bind: uumsgbind,
  unbind: uumsgunbind
};
uu.msg = new MsgPump();
uuclass("StyleSheet", {
  init:           StyleSheetInit,
  add:            StyleSheetAdd,
  clear:          StyleSheetClear
});
function ArrayIsArray(search) {
  return _toString.call(search) === "[object Array]";
}
uumix(Array[_prototype], {
  map:            ArrayMap,
  some:           ArraySome,
  every:          ArrayEvery,
  filter:         ArrayFilter,
  forEach:        ArrayForEach,
  indexOf:        ArrayIndexOf,
  lastIndexOf:
          ArrayLastIndexOf,
  reduce:         ArrayReduce,
  reduceRight:
          ArrayReduceRight
}, 0, 0);
uumix(Boolean[_prototype], {
  toJSON:         ObjectToJson
}, 0, 0);
uumix(Date[_prototype], {
  toISOString:    DateToISOString,
  toJSON:         DateToJSON
}, 0, 0);
uumix(Number[_prototype], {
  toJSON:         ObjectToJson
}, 0, 0);
uumix(String[_prototype], {
  trim:           StringTrim,
  toJSON:         ObjectToJson
}, 0, 0);
_gecko && !HTMLElement[_prototype].innerText &&
(function(proto) {
  proto.__defineGetter__("innerText", innerTextGetter);
  proto.__defineSetter__("innerText", innerTextSetter);
  proto.__defineGetter__("outerHTML", outerHTMLGetter);
  proto.__defineSetter__("outerHTML", outerHTMLSetter);
})(HTMLElement[_prototype]);
uueach(("BOOLEAN,NUMBER,STRING,FUNCTION,ARRAY,DATE," +
    "REGEXP,UNDEFINED,NULL,HASH,NODE,FAKEARRAY").split(","), function(v, i) {
  uutype[v] = i + 1;
});
uueach([!0, 0, "", nop, [], new Date, /0/], function(v, i) {
  ++i < 4 && (_types[typeof v] = i);
  _types[_toString.call(v)] = i;
});
(function(i, n, v) {
  for (; i < 0x200; ++i) {
    n = i - 0x100;
    _num2hh[n] = v = i.toString(16).slice(1);
    _hh2num[v] = n;
    _num2bb[n] = v = String.fromCharCode(n);
    _bb2num[v] = n;
  }
  for (i = 100; i < 200; ++i) {
    n = i - 100;
    _num2dd[n] = v = i.toString().slice(1);
    _dd2num[v] = n;
  }
  uumix(uuhash, {
    dd2num: _dd2num,
    num2dd: _num2dd,
    bb2num: _bb2num,
    num2bb: _num2bb,
    hh2num: _hh2num,
    num2hh: _num2hh
  });
})(0x100);
function uufactory(expression, arg1, arg2, arg3, arg4) {
  if (typeof expression === _string && uuclass[expression]) {
    return new uuclass[expression](arg1, arg2, arg3, arg4);
  }
  return new NodeSet(expression, arg1, arg2, arg3, arg4);
}
function uusnippet(id, arg) {
  function normalize(str) {
    return str[_replace](/("|')/g, "\\$1")[_replace](/\n/g, "\\n");
  }
  function toBrace(all, ident) {
    return ident[_indexOf]("arg.") ? '{(' + ident + ')}'
                   : '"+' + ident + '+"';
  }
  function toText(all, match) {
    return '"' + normalize(match.trim())[_replace](dualBrace, toBrace) + '"';
  }
  function each(all, match) {
    match = normalize(match[_replace](/^\s+|\s+$/gm, ""))
        [_replace](eachBlock, toEachBlock)
        [_replace](dualBrace, toBrace);
    return 'uu.node.bulk("' + match + '");';
  }
  function toEachBlock(all, hash, block) {
    return '"+uu.snippet.each(' + hash + ',"' +
                   block[_replace](dualBrace, toBrace) + '")+"';
  }
  var js = uusnippet.js[id] || "", node,
    dualBrace = /\{\{([^\}]+)\}\}/g,
    eachBlock = /<each ([^>]+)>([\s\S]*?)<\/each>/;
  if (!js) {
    node = uuid(id);
    if (node) {
      uusnippet.js[id] = js = node.text[_replace](/\r\n|\r|\n/g, "\n")
          [_replace](/<text>\n([\s\S]*?)^<\/text>$/gm, toText)
          [_replace](/<>\n([\s\S]*?)^<\/>$/gm, each)
          [_replace](/^\s*\n|\n$/g, "");
    }
  }
  return js ? (new Function("arg", js))(arg) : "";
}
uusnippet.js = {};
uusnippet.each = function(hash, fragment) {
  var i = 0, iz = hash.length, block = [], eachBrace = /\{\(([^\)]+)\)\}/g;
  for (; i < iz; ++i) {
    block.push(fragment[_replace](eachBrace, function(all, ident) {
      return hash[ident][i];
    }));
  }
  return block.join("");
};
function uuajax(url, option, callback) {
  function readyStateChange() {
    if (xhr.readyState === 4) {
      var data, status = xhr.status, lastMod,
        rv = { status: status, ok: status >= 200 && status < 300 };
      if (!run++) {
        if (rv.ok) {
          data = binary ? binary(xhr) : (xhr.responseText || "");
          if (ifmod) {
            lastMod = xhr.getResponseHeader("Last-Modified");
            if (lastMod) {
              cache[url] = uudate(Date.parse(lastMod)).GMT();
            }
          }
        }
        option[_after] && option[_after](xhr, option, rv);
        callback(data, option, rv);
        gc();
      }
    }
  }
  function ng(abort, status) {
    if (!run++) {
      var rv = { status: status || 400, ok: _false };
      option[_after] && option[_after](xhr, option, rv);
      callback(null, option, rv);
      gc(abort);
    }
  }
  function gc(abort) {
    abort && xhr && xhr.abort && xhr.abort();
    watchdog && (clearTimeout(watchdog), watchdog = 0);
    xhr = null;
    uueventdetach(win, "beforeunload", ng);
  }
  var watchdog = 0,
    method = option.method || "GET",
    header = option.header || {},
    binary = option.binary,
    ifmod = option.ifmod,
    cache = uuajax.cache,
    data = option.data || null,
    xhr = uuajax.xhr(),
    run = 0, i,
    overrideMimeType = "overrideMimeType",
    setRequestHeader = "setRequestHeader",
    getbinary = method === "GET" && binary;
  try {
    xhr.onreadystatechange = readyStateChange;
    xhr.open(method, url, _true);
    option[_before] && option[_before](xhr, option);
    getbinary && xhr[overrideMimeType] &&
      xhr[overrideMimeType]("text/plain; charset=x-user-defined");
    data &&
      xhr[setRequestHeader]("Content-Type",
                 "application/x-www-form-urlencoded");
    ifmod && cache[url] &&
      xhr[setRequestHeader]("If-Modified-Since", cache[url]);
    for (i in header) {
      xhr[setRequestHeader](i, header[i]);
    }
    uueventattach(win, "beforeunload", ng);
    xhr.send(data);
    watchdog = setTimeout(function() {
      ng(1, 408);
    }, (option.timeout || 10) * 1000);
  } catch (err) {
    ng();
  }
}
uuajax.cache = {};
uuajax.xhr = function() {
  var xhr = win["XMLHttpRequest"];
  return xhr ? new xhr
       : win["ActiveXObject"] ? new ActiveXObject("Msxml2.XMLHTTP")
       : null;
};
function uurequire(url, option) {
  option = option || {};
  var rv = { ok: _false, status: 400 },
    xhr = uuajax.xhr(), data, status;
  try {
    xhr.open("GET", url, _false);
    option[_before] && option[_before](xhr, option);
    xhr.send(null);
    status = xhr.status;
    data = xhr.responseText;
    option[_after] && option[_after](xhr, option,
                     rv = { ok: status >= 200 && status < 300,
                        status: status });
    xhr = null;
  } catch (err) {
  }
  rv.data = data;
  rv.option = option;
  return rv;
}
function uujsonp(url, option, callback) {
  var timeout = option.timeout || 10,
    method = option.method || "callback",
    guid = uuguid(),
    tag = uunode("script", { type: "text/javascript", charset: "utf-8",
                 run: 0 });
  url = uuformat(url, method);
  uujsonp.db[guid] = method;
  win[method] = function(data, rv) {
    if (!tag.run++) {
      rv = { ok: !!data, status: data ? 200 : 408 };
      option[_after] && option[_after](tag, option, rv);
      callback(data, option, rv);
      setTimeout(function() {
        uunoderemove(tag);
        win[method] = null;
        delete uujsonp.db[guid];
      }, (timeout + 10) * 1000);
    }
  };
  uunodeadd(tag, doc.head);
  option[_before] && option[_before](tag, option);
  tag.setAttribute("src", url);
  setTimeout(function() {
    uujsonp.db[guid]();
  }, timeout * 1000);
}
uujsonp.db = {};
function uulike(lhs, rhs) {
  var type = uutype(lhs);
  if (type !== uutype(rhs)) {
    return _false;
  }
  switch (type) {
  case 4: return _false;
  case 6: return uudate(lhs).ISO() === uudate(rhs).ISO();
  case 10: return (uusize(lhs) === uusize(rhs) && uuhas(lhs, rhs));
  case 12:
  case 5: return uuarray(lhs) + "" == uuarray(rhs);
  }
  return lhs === rhs;
}
function uutype(search, match) {
  var rv = _types[typeof search] ||
       _types[_toString.call(search)] ||
       (!search ? 9
           : search[_nodeType] ? 11
                     : "length" in search ? 12
                               : 10);
  return match ? match === rv : rv;
}
function isNumber(search) {
  return typeof search === _number;
}
function isString(search) {
  return typeof search === _string;
}
function isFunction(search) {
  return _toString.call(search) === "[object Function]";
}
function uuarg(arg1, arg2, arg3) {
  return isFunction(arg1) ? uumix(arg1, arg2, arg3)
              : uumix(uumix({}, arg1 || {}), arg2, arg3, 0);
}
function uumix(base, flavor, aroma, override) {
  var i;
  if (override || override === i) {
    for (i in flavor) {
      base[i] = flavor[i];
    }
  } else {
    for (i in flavor) {
      i in base || (base[i] = flavor[i]);
    }
  }
  return aroma ? uumix(base, aroma, 0, override) : base;
}
function uueach(source, evaluator, arg) {
  if (_isArray(source)) {
    !arg ? source.forEach(evaluator)
       : source.forEach(function(v, i) {
          evaluator(v, i, arg);
       });
  } else {
    for (var i in source) {
      evaluator(source[i], i, arg);
    }
  }
}
function uukeys(source, __enumValues__) {
  var rv = [], ri = -1, i, iz, keys = Object.keys;
  if (_isArray(source)) {
    for (i = 0, iz = source.length; i < iz; ++i) {
      i in source && (rv[++ri] = __enumValues__ ? source[i] : i);
    }
  } else {
    if (!__enumValues__ && keys) {
      return keys(source);
    }
    for (i in source) {
      if (source.hasOwnProperty(i)) {
        rv[++ri] = __enumValues__ ? source[i] : i;
      }
    }
  }
  return rv;
}
function uuvalues(source) {
  return uukeys(source, 1);
}
function uuhash(key, value) {
  var rv = {}, ary, i, iz;
  if (arguments.length === 1) {
    if (typeof key === _string && key[_indexOf](",") > 0) {
      ary = key.split(",");
      for (i = 0, iz = ary.length; i < iz; i += 2) {
        rv[ary[i]] = ary[i + 1];
      }
      return rv;
    }
    return key;
  }
  rv[key] = value;
  return rv;
}
function uuarray(source, sliceStart, sliceEnd) {
  var type = uutype(source),
    rv = (type === 12) ? fakeToArray(source)
     : (type === 5)     ? source : [source];
  return sliceStart ? (sliceEnd ? rv.slice(sliceStart, sliceEnd)
                 : rv.slice(sliceStart)) : rv;
}
function uuhas(source, search) {
  if (source && search) {
    var i = 0, iz;
    if (source[_nodeType]) {
      if (isString(search)) {
        i = source[_uuevent];
        return (i ? i.types : "")[_indexOf]("," + search + ",") >= 0;
      }
      for (i = search; i && i !== source; i = i[_parentNode]) {
      }
      return search !== source && i === source;
    }
    if (_isArray(source)) {
      search = uuarray(search);
      for (iz = search.length; i < iz; ++i) {
        if (i in search && source[_indexOf](search[i]) < 0) {
          return _false;
        }
      }
    } else {
      for (i in search) {
        if (!(i in source)
          || (source[i] !== search[i]
            && uujsonencode(source[i]) !== uujsonencode(search[i]))) {
          return _false;
        }
      }
    }
    return _true;
  }
  return _false;
}
function uunth(source, index) {
  var i, j = 0, undef;
  if (_isArray(source)) {
    if (i in source) {
      return [i, source[i]];
    }
  } else {
    for (i in source) {
      if (j++ === index) {
        return [i, source[i]];
      }
    }
  }
  return [undef, undef];
}
function uusize(source) {
  return (_isArray(source) ? source : uukeys(source)).length;
}
function uuclone(source) {
  return _isArray(source) ? source.concat() : uumix({}, source);
}
function uuindexof(source, search) {
  for (var i in source) {
    if (source.hasOwnProperty(i) && source[i] === search) {
      return i;
    }
  }
  return void 0;
}
function uusort(source, method) {
  var r = { "A-Z": 0, "Z-A": 2, "0-9": 1, "9-0": 3 }[method] || 0;
  (r & 1) ? source.sort(function(a, b) {
              return a - b;
             })
      : source.sort();
  return (r & 2) ? source.reverse() : source;
}
function uuclean(source) {
  if (_isArray(source)) {
    var rv = [], i = 0, iz = source.length;
    for (; i < iz; ++i) {
      i in source && source[i] != null
            && rv.push(source[i]);
    }
    return rv;
  }
  return source;
}
function uuunique(source, literalOnly) {
  var rv = [], ri = -1, v, i = 0, j, iz = source.length,
    literal = !!literalOnly,
    found,
    unique = {};
  for (; i < iz; ++i) {
    v = source[i];
    if (v != null) {
      if (literal) {
        unique[v] || (unique[v] = 1, rv[++ri] = v);
      } else {
        for (found = 0, j = i - 1; !found && j >= 0; --j) {
          found = (v === source[j]);
        }
        !found && (rv[++ri] = v);
      }
    }
  }
  return rv;
}
function uudump(source, prefix, splitter) {
  var rv = [], i = 0, iz = source.length, num2hh = _num2hh;
  for (; i < iz; ++i) {
    rv[i] = num2hh[source[i]];
  }
  return iz ? (prefix || "") + rv.join(splitter || "") : "";
}
function uutohash(key, value, toNumber) {
  var rv = {}, i = 0, iz = key.length, val;
  if (_isArray(value)) {
    for (; i < iz; ++i) {
      rv[key[i]] = toNumber ? +(value[i]) : value[i];
    }
  } else {
    val = toNumber ? +(value) : value;
    for (; i < iz; ++i) {
      rv[key[i]] = val;
    }
  }
  return rv;
}
function uuattr(node, key, value) {
  var rv, ary, v, i = -1,
    fix = uuattr.fix;
  if (key === void 0) {
    rv = {};
    ary = node.attributes;
    while ( (v = ary[++i]) ) {
      rv[v.name] = v.value;
    }
    return rv;
  }
  if (arguments.length > 2) {
    key = uuhash(key, value);
  } else if (isString(key)) {
    rv = node[_getAttribute](fix[key] || key, 2) || "";
    _ver.ie && (rv += "");
    return rv;
  }
  for (i in key) {
    key[i] === null ? node.removeAttribute(fix[i] || i)
            : node.setAttribute(fix[i] || i, key[i]);
  }
  return node;
}
uuattr.fix =
  !uuready[_getAttribute] ? { "for": "htmlFor", "class": "className" } :
               { className: "class", htmlFor: "for" };
function uudata(node, key, value) {
  var rv, i, prefix = "data-";
  if (key === void 0) {
    rv = {};
    for (key in node) {
      key[_indexOf](prefix) || (rv[key.slice(5)] = node[key]);
    }
    return rv;
  }
  if (arguments.length > 2) {
    if (key === "*") {
      for (key in uudata(node)) {
        node[prefix + key] = value;
      }
    } else {
      node[prefix + key] = value;
    }
  } else if (isString(key)) {
    return node[prefix + key];
  } else {
    for (i in key) {
      node[prefix + i] = key[i];
    }
  }
  return node;
}
uudata.handler = {};
function uudataclear(node, key) {
  return uudata(node, key || "*", null);
}
function uudatabind(key, callback) {
  uudata.handler[key] = callback;
}
function undataunbind(key) {
  delete uudata.handler[key];
}
function uucss(expression, key, value) {
  var rv, style, informal, formal, fix, care;
  if (typeof expression === _string) {
    rv = uucss.db[expression];
    return rv || (uucss.db[expression] = uu("StyleSheet", expression));
  }
  if (key === _true || key === fix) {
    if (getComputedStyle) {
      return getComputedStyle(expression, 0);
    }
    return key ? getComputedStyleIE(expression) : expression.currentStyle;
  }
  fix = uufix.db;
  if (arguments.length > 2) {
    key = uuhash(key, value);
  } else if (typeof key === _string) {
    if (getComputedStyle) {
      return getComputedStyle(expression, 0)[fix[key] || key] || "";
    }
    return (expression.currentStyle || {})[fix[key] || key] || "";
  }
  care = uucss.care;
  style = expression.style;
  for (informal in key) {
    value = key[informal];
    formal = fix[informal] || informal;
    if (typeof value === _number) {
      if (formal === "opacity") {
        uucssopacity(expression, value);
        continue;
      }
      !care[formal] && (value += "px");
    }
    style[formal] = value;
  }
  return expression;
}
uucss.db = {};
uucss.care = {
  zoom: 1, fontSizeAdjust: 1,
  lineHeight: 1, fontWeight: 1, zIndex: 1
};
function uuviewport() {
  var rv = {
      x: win.pageXOffset,
      y: win.pageYOffset,
      w: win.innerWidth,
      h: win.innerHeight,
      orientation: _lastOrientation
    };
  if (_ie) {
    rv.x = _rootNode.scrollLeft;
    rv.y = _rootNode.scrollTop;
    rv.w = _rootNode.clientWidth;
    rv.h = _rootNode.clientHeight;
  }
  return rv;
}
function uufx(node, duration, option) {
  function loop() {
    var data = node[_uufx], q = data.q[0],
      option = q.option, back = !!option.back, tm, finished;
    if (q.tm) {
      tm = +new Date;
    } else {
      option.init && (option.init(node, option, back), option.init = 0);
      option[_before] && option[_before](node, option, back);
      q.js = isFunction(option) ? option
                   : uufxbuild(node, data, q, option);
      q.tm = tm = +new Date;
    }
    finished = q.fin || (tm >= q.tm + q.dur);
    q.js(node, back, finished, tm - q.tm, q.dur);
    if (finished) {
      option[_after] && option[_after](node, option, back);
      data.q.shift();
      if (!option.back && option.reverse && data.rq.length) {
        data.q = data.rq.reverse().concat(data.q);
        data.rq = [];
      }
      if (!data.q.length) {
        clearInterval(data.id);
        data.id = 0;
      }
    }
  }
  node.style.overflow = "hidden";
  option = option || {};
  var data = node[_uufx] || (node[_uufx] = { q: [], rq: [], id: 0 }),
    fps = ((1000 / option.fps) | 0) || +_ie;
  if (data.q[0] && data.q[0].option.deny) {
    return node;
  }
  data.q.push({
    tm: 0,
    dur:      Math.max(duration, 1),
    fin: 0,
    guid: uuguid(),
    option:   option
  });
  data.id || (data.id = setInterval(loop, fps));
  return node;
}
uufx.props = { opacity: 1, color: 2, backgroundColor: 2,
       width: 3, height: 3, left: 4, top: 5 };
uufx.alpha = /^alpha\([^\x29]+\) ?/;
function uufxbuild(node, data, queue, option) {
  function ezfn(v0, v1, ez) {
    return ez ? uuformat('Math.??(g,??,??,d)', ez, v0, v1 - v0)
         : uuformat('(t=g,b=??,c=??,(t/=d2)<1?c/2*t*t+b:-c/2*((--t)*(t-2)-1)+b)',
               v0, v1 - v0);
  }
  function unitNormalize(curt, end, fn) {
    if (isNumber(end)) {
      return end;
    }
    var c = end.charCodeAt(0) - 42;
    return !c    ? fn(curt * parseFloat(end.slice(1))) :
       c < 4 ? curt + fn(end[_replace](/^\+/, "")) :
       c < 6 ? fn(curt / parseFloat(end.slice(1))) : fn(end);
  }
  var rv = 'var s=n.style,t,b,c,d2=d/2,w,o,gd,h;',
    reverseOption = { before: option[_before],
             after: option[_after],
             back: 1 },
    i, startValue, endValue, ez, w, n,
    fixdb = uufix.db, cs = option.css || uucss(node, _true);
  for (i in option) {
    w = fixdb[i] || i;
    if (w in cs) {
      ez = 0;
      _isArray(option[i]) ? (endValue = option[i][0], ez = option[i][1])
                : (endValue = option[i]);
      if (endValue != null) {
        switch (n = uufx.props[w]) {
        case 1:
          startValue = uucssopacity(node);
          uuready.opacity || (uucssopacity(node, startValue),
                    node.style[_visibility] = "visible");
          endValue = unitNormalize(startValue, endValue, parseFloat);
          rv += uuformat('o=??;o=(o>0.999)?1:(o<0.001)?0:o;',
                 ezfn(startValue, endValue, ez));
          if (!uuready.opacity) {
            rv += uuformat('s.visibility=o?"visible":"hidden";' +
                   's.filter=((o>0&&o<1)?"alpha(??="+(o*100)+")":"");' +
                   'f&&uu.css.opacity(n,??)&&(s.filter+=" ??");',
                   w, endValue, node.style.filter[_replace](uufx.alpha, ""));
          } else {
            rv += uuformat('s.??=f? ??:o;', w, endValue);
          }
          break;
        case 2:
          startValue = uu.color(cs[w]);
          endValue   = uu.color(endValue);
          rv += uuformat('gd=g/d;h=uu.hash.num2hh;s.??="#"+' +
                 '(h[(f? ??:(??-??)*gd+??)|0]||0)+' +
                 '(h[(f? ??:(??-??)*gd+??)|0]||0)+' +
                 '(h[(f? ??:(??-??)*gd+??)|0]||0);',
                 w, endValue.r, endValue.r, startValue.r, startValue.r,
                   endValue.g, endValue.g, startValue.g, startValue.g,
                   endValue.b, endValue.b, startValue.b, startValue.b);
          break;
        case 3:
          startValue = parseInt(cs[w]) || 0;
          endValue   = unitNormalize(startValue, endValue, parseInt);
          rv += uuformat('w=f? ??:??;w=w<0?0:w;s.??=(w|0)+"px";',
                 endValue, ezfn(startValue, endValue, ez), w);
          break;
        default:
          startValue = n ? (n > 4 ? node.offsetTop  - parseInt(cs.marginTop)
                      : node.offsetLeft - parseInt(cs.marginLeft))
                 : parseInt(cs[w]) || 0;
          endValue   = unitNormalize(startValue, endValue, parseInt);
          rv += uuformat('s.??=((f? ??:??)|0)+"px";',
                 w, endValue, ezfn(startValue, endValue, ez));
        }
        reverseOption[w] = ez ? [startValue, ez] : startValue;
      }
    }
  }
  if (option.chain || option.reverse) {
    data.rq.push({
      tm: 0,
      dur: queue.dur,
      fin: 0,
      guid: queue.guid,
      option: reverseOption
    });
  }
  return new Function("n,r,f,g,d", rv);
}
function uufxskip(node, all, avoidFlicker) {
  var nodeArray = node ? [node] : uutag("*", doc.body),
    v, i = -1, j, k, jz, kz, data, guid, option, q, rq;
  while ( (v = nodeArray[++i]) ) {
    data = v[_uufx];
    if (data && data.id) {
      q = data.q;
      rq = data.rq;
      guid = [];
      for (j = 0, jz = all ? q.length : 1; j < jz; ++j) {
        q[j].fin = 1;
        option = q[j].option;
        (option.chain || option.reverse) && guid.push(option.guid);
      }
      for (j = 0, jz = guid.length; j < jz; ++j) {
        for (k = 0, kz = rq.length; k < kz; ++k) {
          if (rq[k].option.guid === guid[j]) {
            rq[k].fin = 1;
            q.push(rq.splice(k, 1)[0]);
          }
        }
      }
      if (q.length > 2 && avoidFlicker) {
        q.push({
          tm: 0, guid: 0, fin: 1, dur: 0,
          option: function(node) {
            node.style[_visibility] = "visible";
          }});
        v.style[_visibility] = "hidden";
      }
    }
  }
  return node || nodeArray;
}
function uufxisbusy(node) {
  var data = node[_uufx];
  return data && data.id;
}
function uucssopacity(node, opacity) {
  if (opacity === void 0) {
    if (!uuready.opacity) {
      opacity = node["data-uuopacity"];
      return opacity ? (opacity - 1): 1;
    }
    if (getComputedStyle) {
      return parseFloat(getComputedStyle(node, 0).opacity);
    }
    return 1;
  }
  var style = node.style;
  if (!uuready.opacity) {
    if (!node["data-uuopacity"]) {
      if (_ver.ie6 || _ver.ie7) {
        if ((node.currentStyle || {})[_width] === "auto") {
          style.zoom = 1;
        }
      }
    }
  }
  if (typeof opacity === _string) {
    opacity = uucssopacity(node) + parseFloat(opacity);
  }
  style.opacity = opacity = (opacity > 0.999) ? 1
              : (opacity < 0.001) ? 0 : opacity;
  if (!uuready.opacity) {
    node["data-uuopacity"] = opacity + 1;
    style[_visibility] = opacity ? "visible" : "hidden";
    style.filter = ((opacity > 0 && opacity < 1)
           ? "alpha(opacity=" + (opacity * 100) + ") " : "")
           + style.filter[_replace](uucssopacity.alpha, "");
  }
  return node;
}
uucssopacity.alpha = /^alpha\([^\x29]+\) ?/;
function uucssshow(node, duration, displayValue) {
  var cs = uucss(node), disp = displayValue || "block",
    w = cs[_width], h = cs[_height], o = uucssopacity(node) || 1;
  if (cs[_display] === "none" && w === "0px" && w === h) {
    node.style[_display] = disp;
    cs = uucss(node);
    w = cs[_width];
    h = cs[_height];
    node.style[_display] = "none";
  }
  return uufx(node, duration || 0, { w: w, h: h, o: o, before: function(node) {
        var style = node.style;
        uucssopacity(node, 0);
        style[_width] = style[_height] = "0";
        style[_visibility] = "visible";
        if (uucss(node)[_display] === "none") {
          style[_display] = disp;
        }
      }});
}
function uucsshide(node, duration) {
  uucssisshow(node) || (node.style[_display] = "none");
  return uufx(node, duration || 0, { w: 0, h: 0, o: 0 });
}
function uucssisshow(node) {
  var style = node[_nodeType] ? uucss(node) : node;
  return style[_display] !== "none" && style[_visibility] !== "hidden";
}
function StyleSheetInit(id) {
  var node = uunode("style", "id," + id);
  _webkit && node[_appendChild](doc[_createTextNode](""));
  uuhead(node);
  this.ss = node.sheet
             || node.styleSheet;
  this.rules = {};
}
function StyleSheetAdd(rule) {
  var ss = this.ss,
    ary, i, iz,
    selector, declaration;
  clearAllRules(this);
  for (selector in uumix(this.rules, rule)) {
    declaration = this.rules[selector];
    if (ss.insertRule) {
      ss.insertRule(selector + "{" + declaration + "}",
             ss.cssRules.length);
    } else {
      ary = selector.split(",");
      for (i = 0, iz = ary.length; i < iz; ++i) {
        ss.addRule(ary[i], declaration.trim());
      }
    }
  }
}
function StyleSheetClear() {
  this.rules = {};
  clearAllRules(this);
}
function clearAllRules(that) {
  var ss = that.ss, i;
  if (ss.deleteRule) {
    i = ss.cssRules.length;
    while (i--) {
      ss.deleteRule(i);
    }
  } else {
    i = ss.rules.length;
    while (i--) {
      ss.removeRule(i);
    }
  }
}
function uucssunit(node, value, quick, prop) {
  prop = prop || "left";
  var fontSize, ratio, _float = parseFloat;
  if (typeof value === _number) {
    return value;
  }
  if (uucssunit.px.test(value)) {
    return parseInt(value) || 0;
  }
  if (value === "auto") {
    if (!prop[_indexOf]("bor") || !prop[_indexOf]("pad")) {
      return 0;
    }
  }
  if (!quick) {
    return uucssunit.calc(node, prop, value);
  }
  if (uucssunit.pt.test(value)) {
    return (_float(value) * 4 / 3) | 0;
  } else if (uucssunit.em.test(value)) {
    fontSize = uucss(node).fontSize;
    ratio = uucssunit.pt.test(fontSize) ? 4 / 3 : 1;
    return (_float(value) * _float(fontSize) * ratio) | 0;
  }
  return parseInt(value) || 0;
}
uumix(uucssunit, { px: /px$/, pt: /pt$/, em: /em$/, calc: _calcPixel });
function _calcPixel(node, prop, value) {
  var style = node.style, mem = [style.left, 0, 0],
    position = "position",
    important = "important",
    setProperty = "setProperty",
    removeProperty = "removeProperty",
    getPropertyValue = "getPropertyValue";
  if (_webkit) {
    mem[1] = style[getPropertyValue](position);
    mem[2] = style[getPropertyValue](_display);
    style[setProperty](position, "absolute", important);
    style[setProperty](_display, "block",    important);
  }
  style[setProperty](prop, value, important);
  value = parseInt(getComputedStyle(node, 0).left);
  style[removeProperty](prop);
  style[setProperty](prop, mem[0], "");
  if (_webkit) {
    style[removeProperty](position);
    style[removeProperty](_display);
    style[setProperty](position, mem[1], "");
    style[setProperty](_display, mem[2], "");
  }
  return value || 0;
}
function _calcPixelIE(node, prop, value) {
  var style = node.style,
    runtimeStyle = node.runtimeStyle,
    mem = [style[prop], runtimeStyle[prop]];
  runtimeStyle[prop] = node.currentStyle[prop];
  style[prop] = value;
  value = style.pixelLeft;
  style[prop] = mem[0];
  runtimeStyle[prop] = mem[1];
  return value || 0;
}
if (!getComputedStyle) {
  uucssunit.calc = _calcPixelIE;
}
function getComputedStyleIE(node) {
  var rv, rect, ut, v, w, x, i = -1, mem,
    style = node.style,
    currentStyle = node.currentStyle,
    runtimeStyle = node.runtimeStyle,
    UNITS = { m: 1, t: 2, "%": 3, o: 3 },
    RECTANGLE = { top: 1, left: 2, width: 3, height: 4 },
    fontSize = currentStyle.fontSize,
    em = parseFloat(fontSize) * (uucssunit.pt.test(fontSize) ? 4 / 3 : 1),
    boxProperties = getComputedStyleIE.boxs,
    cache = { "0px": "0px", "1px": "1px", "2px": "2px", "5px": "5px",
         thin: "1px", medium: "3px",
         thick: _ver.ie8 ? "5px" : "6px" };
  rv = getComputedStyleIE.getProps(currentStyle);
  while ( (w = boxProperties[++i]) ) {
    v = currentStyle[w];
    if (!(v in cache)) {
      x = v;
      switch (ut = UNITS[v.slice(-1)]) {
      case 1: x = parseFloat(v) * em; break;
      case 2: x = parseFloat(v) * 4 / 3; break;
      case 3:
          mem = [style.left, runtimeStyle.left];
          runtimeStyle.left = currentStyle.left;
          style.left = v;
          x = style.pixelLeft;
          style.left = mem[0];
          runtimeStyle.left = mem[1];
      }
      cache[v] = ut ? (x + "px") : x;
    }
    rv[w] = cache[v];
  }
  for (w in RECTANGLE) {
    v = currentStyle[w];
    switch (ut = UNITS[v.slice(-1)]) {
    case 1: v = parseFloat(v) * em; break;
    case 2: v = parseFloat(v) * 4 / 3; break;
    case 3:
      switch (RECTANGLE[w]) {
      case 1: v = node.offsetTop; break;
      case 2: v = node.offsetLeft; break;
      case 3: rect || (rect = node.getBoundingClientRect());
          v = (node.offsetWidth  || rect.right - rect.left)
           - parseInt(rv.borderLeftWidth)
           - parseInt(rv.borderRightWidth)
           - parseInt(rv.paddingLeft)
           - parseInt(rv.paddingRight);
          v = v > 0 ? v : 0;
          break;
      case 4: rect || (rect = node.getBoundingClientRect());
          v = (node.offsetHeight || rect.bottom - rect.top)
           - parseInt(rv.borderTopWidth)
           - parseInt(rv.borderBottomWidth)
           - parseInt(rv.paddingTop)
           - parseInt(rv.paddingBottom);
          v = v > 0 ? v : 0;
      }
    }
    rv[w] = ut ? (v + "px") : v;
  }
  rv.opacity = uucssopacity(node);
  rv.fontSize = em + "px";
  rv.cssFloat = currentStyle.styleFloat;
  return rv;
}
getComputedStyleIE.boxs =
  ("borderBottomWidth,borderLeftWidth,borderRightWidth,borderTopWidth," +
   "marginBottom,marginLeft,marginRight,marginTop," +
   "paddingBottom,paddingLeft,paddingRight,paddingTop").split(",");
getComputedStyleIE.getProps = (function(props) {
  var js = [], i = 0, prop;
  while ( (prop = props[i++]) ) {
    js.push(prop + ":style." + prop);
  }
  return new Function("style", "return {" + js.join(",") + "}");
})( ("backgroundColor,backgroundImage,backgroundPosition,backgroundRepeat," +
   "borderBottomColor,borderBottomStyle,borderLeftColor,borderLeftStyle," +
   "borderRightColor,borderRightStyle,borderTopColor,borderTopStyle," +
   "bottom,clear,clipBottom,clipLeft,clipRight,clipTop,color,cursor," +
   "direction,display,fontFamily,fontSize,fontStyle,fontWeight," +
   "letterSpacing,lineBreak,lineHeight,listStyleImage,listStylePosition," +
   "listStyleType,maxHeight,maxWidth,minHeight,minWidth,position," +
   "right,textAlign,textIndent,textOverflow,verticalAlign,visibility," +
   "whiteSpace,wordBreak,wordSpacing,wordWrap,zIndex,zoom").split(","));
function uuklasshas(node, classNames) {
  var m, ary, cn = node.className;
  if (!classNames || !cn) {
    return _false;
  }
  if (classNames[_indexOf](" ") < 0) {
    return (" " + cn + " ")[_indexOf](" " + classNames + " ") >= 0;
  }
  ary = uutrim(classNames).split(" ");
  m = cn.match(_classNameMatcher(ary));
  return m && m.length >= ary.length;
}
function uuklassadd(node, classNames) {
  node.className += " " + classNames;
  return node;
}
function uuklassremove(node, classNames) {
  node.className = uutrim(
      node.className[_replace](
        _classNameMatcher(uutrim(classNames).split(" ")), ""));
  return node;
}
function uuklasstoggle(node, classNames) {
  return (uuklasshas(node, classNames) ? uuklassremove
                     : uuklassadd)(node, classNames);
}
function uuclass(className, proto) {
  var ary = className.split(/\s*[\x3a\x3c]\s*/), tmp, i, classPrototype,
    protoIsFunction = proto && isFunction(proto),
    Class = ary[0], Super = ary[1] || "";
  uuclass[Class] = function() {
    var that = this, args = arguments,
      Super = that.superClass || 0;
    that.name = Class;
    that.uuguid = uu.guid();
    that.msgbox || (that.msgbox = nop);
    uu.msg.bind(that);
    Super && Super.init && Super.init.apply(that, args);
         that.init &&  that.init.apply(that, args);
  };
  uuclass[Class][_prototype] = protoIsFunction ? { init: proto }
                         : proto || {};
  if (Super && proto && !protoIsFunction) {
    tmp = function() {};
    tmp[_prototype] = uu.Class[Super][_prototype];
    classPrototype = uuclass[Class][_prototype] = new tmp;
    for (i in proto) {
      classPrototype[i] = proto[i];
    }
    classPrototype.constructor = uuclass[Class];
    classPrototype.superClass = uu.Class[Super][_prototype];
    classPrototype.superMethod = superMethod;
  }
  function superMethod(method
             /*, var_args */ ) {
    return this.superClass[method].apply(this, uuarray(arguments, 1));
  }
}
function uuclasssingleton(className, proto) {
  uuclass[className] = function() {
    var that = this, arg = arguments, self = arg.callee,
      instance = "instance";
    if (!self[instance]) {
      that.name = className;
      that.uuguid = uu.guid();
      that.init && that.init.apply(that, arg);
      that.msgbox || (that.msgbox = nop);
      uu.msg.bind(that);
    }
    return self[instance] || (self[instance] = that);
  };
  uuclass[className][_prototype] = proto && isFunction(proto) ? { init: proto }
                                : proto || {};
}
function MsgPump() {
  this.addr = {};
  this.cast = [];
}
function uumsgsend(address, message, param) {
  var rv = [], ri = -1, to, obj, i = -1,
    ary = address ? uuarray(address) : this.cast;
  while ( (to = ary[++i]) ) {
    obj = this.addr[to.uuguid || to || 0];
    obj && (rv[++ri] = obj.msgbox(message, param));
  }
  return rv;
}
function uumsgpost(address, message, param) {
  var that = this;
  setTimeout(function() {
    that.send(address ? uuarray(address) : that.cast,
         message, param);
  }, 0);
}
function uumsgbind(instance) {
  this.addr[instance.uuguid] = instance;
  this.cast = uukeys(this.addr);
}
function uumsgunbind(instance) {
  delete this.db[instance.uuguid];
  this.cast = uukeys(this.addr);
}
function uuevent(node, eventTypeEx, evaluator, __unbind__) {
  function _eventClosure(event) {
    if (!event.node) {
      var fullcode = uuevent.codes[event.type] || 0,
        target = event.target
                   || event.srcElement || doc;
      event.node = node;
      event.code = fullcode & 0xff;
      event.touch = fullcode & 0x0200;
      event.gesture = fullcode & 0x0400;
      event.mouse = event.button || 0;
      event.at = (target[_nodeType] === 3)
           ? target[_parentNode] : target;
      if (_ie) {
        if (!event.target) {
          event.currentTarget = node;
          switch (event.code) {
          case 1:
          case 2:
            event.mouse = (event.button & 1) ? 0
                  : (event.button & 2) ? 2 : 1;
            break;
          case 19:
            event.mouse = 2;
            break;
          case 17:
          case 18:
            event.relatedTarget = target === event.fromElement
                      ? event.toElement
                      : event.fromElement;
          }
        }
        if (event.pageX === void 0) {
          event.pageX = event.clientX + (owner.scrollLeft || 0);
          event.pageY = event.clientY + (owner.scrollTop  || 0);
        }
      }
      if (event.code === 4) {
        event.wheel = (
               event.detail ? (event.detail / 3) :
                       (event.wheelDelta / -120)) | 0;
      }
    }
    instance ? handler.call(evaluator, event)
         : evaluator(event);
  }
  if (!(_uuevent in node)) {
    node[_uuevent] = { types: "," };
  }
  var eventTypeExArray = eventTypeEx.split(","),
    eventData = node[_uuevent],
    ex, token, eventType, capture, closure, bound, types = "types",
    handler, i = -1, pos,
    owner = (node.ownerDocument || doc)[_documentElement],
    instance = 0;
  if (__unbind__) {
    closure = evaluator;
  } else {
    handler = isFunction(evaluator) ? evaluator
                    : (instance = 1, evaluator.handleEvent);
    closure = _eventClosure;
  }
  while ( (ex = eventTypeExArray[++i]) ) {
    token = uuevent.parse.exec(ex);
    eventType = token[2];
    capture   = token[3];
    bound     = eventData[types][_indexOf]("," + ex + ",") >= 0;
    if (_ie && !node.addEventListener) {
      if (eventType === "mousemove") {
        capture && uuevent(node, "losecapture", closure, __unbind__);
      } else if (eventType === "losecapture") {
        if (node.setCapture) {
          __unbind__ ? node.releaseCapture()
               : node.setCapture();
        }
      }
    }
    if (__unbind__) {
      if (bound) {
        pos = eventData[ex][_indexOf](evaluator);
        if (pos >= 0) {
          eventData[ex].splice(pos, 1);
          if (!eventData[ex].length) {
            eventData[types] =
              eventData[types][_replace]("," + ex + ",", ",");
          }
          uueventattach(node, eventType, closure, capture, _true);
        }
      }
    } else {
      if (!bound) {
        eventData[types] += ex + ",";
        eventData[ex] = [];
      }
      eventData[ex].push(closure);
      uueventattach(node, eventType, closure, capture);
    }
  }
  return node;
}
uuevent.parse = /^(?:(\w+)\.)?(\w+)(\+)?$/;
uuevent.codes = {
  losecapture: 0x102,
  DOMMouseScroll: 0x104,
  mousedown:      1,      touchstart: 0x201,      gesturestart: 0x401,
  mouseup:        2,      touchend: 0x202,      gestureend: 0x402,
  mousemove:      3,      touchmove: 0x203,      gesturechange: 0x403,
  mousewheel:     4,
  click:          10,
  dblclick:       11,
  keydown:        12,
  keypress:       13,
  keyup:          14,
  mouseenter:     15,
  mouseleave:     16,
  mouseover:      17,
  mouseout:       18,
  contextmenu:    19,
  focus:          20,
  blur:           21,
  resize:         22,
  scroll:         23,
  change:         24,
  submit:         25,
  online:         50,
  offline:        51,
  message:        52,
  orientationchange: 60
};
uuevent.shortcut =
  ("mousedown,mouseup,mousemove,mousewheel,click,dblclick,keydown," +
   "keypress,keyup,change,submit,focus,blur,contextmenu").split(",")
function uueventfire(node, eventType, param) {
  if (uuhas(node, eventType)) {
    var fakeEventObjectEx = {
        type:           eventType,
        pageX: 0,
        pageY: 0,
        param:          param,
        target:         node,
        button: 0,
        detail: 0,
        customEvent: _true,
        currentTarget:  node,
        relatedTarget:  node
      };
    uueach(node[_uuevent][eventType], function(evaluator) {
      evaluator.call(node, fakeEventObjectEx);
    });
  }
  return node;
}
function uueventstop(event) {
  if (event.stopPropagation) {
    event.stopPropagation();
    event.preventDefault();
  } else {
    event.cancelBubble = _true;
    event.returnValue = _false;
  }
}
function uueventunbind(node, eventTypeEx) {
  var eventData = node[_uuevent], ns, ary, ex, i = -1, c = ",";
  if (eventData) {
    eventTypeEx = eventTypeEx ? c + eventTypeEx + c
                 : node[_uuevent].types;
    ary = eventTypeEx[_replace](/^,|,$/g, "").split(c);
    while ( (ex = ary[++i]) ) {
      if (ex.lastIndexOf(".*") > 1) {
        ns = ex.slice(0, -1);
        uueach(ary, function(ex) {
          if (!ex[_indexOf](ns)) {
            uueach(eventData[ex], function(evaluator) {
              uuevent(node, ex, evaluator, _true);
            });
          }
        });
      } else {
        if (eventTypeEx[_indexOf](c + ex + c) >= 0) {
          uueach(eventData[ex], function(evaluator) {
            uuevent(node, ex, evaluator, _true);
          });
        }
      }
    }
  }
  return node;
}
function uueventattach(node, eventType, evaluator, useCapture, __detach__) {
  eventType = uueventattach.fix[eventType] || eventType;
/* event log
  if (uu.ready.dom) {
    var fnguid;
    if (evaluator.fnguid) {
      fnguid = evaluator.fnguid;
    } else {
      evaluator.fnguid = uuguid();
      fnguid = evaluator.fnguid;
    }
    if (__detach__) {
      uulog("detach(" + eventType + ")" + fnguid);
    } else {
      uulog("attach(" + eventType + ")" + fnguid);
    }
  }
 */
  if (node.addEventListener) {
    node[__detach__ ? "removeEventListener"
            : "addEventListener"](eventType, evaluator, !!useCapture);
  } else {
    node[__detach__ ? "detachEvent"
            : "attachEvent"]("on" + eventType, evaluator);
  }
}
uueventattach.fix = _gecko ? { mousewheel: "DOMMouseScroll" } :
          _opera ? { contextmenu: "mousedown" } : {};
function uueventdetach(node, eventType, evaluator, useCapture) {
  uueventattach(node, eventType, evaluator, useCapture, 1);
}
function uuready(/* readyEventType, */
         /* callback, ... */) {
  if (!uuready.reload) {
    var args = arguments, v, i = 0, iz = args.length,
      type = "dom", order, fired;
    for (; i < iz; ++i) {
      isString(v = args[i]) && (type = v.toLowerCase());
    }
    fired = uuready[type];
    order = { dom: 0, middle: 1, system: 2 }[type] || 0;
    for (i = 0; i < iz; ++i) {
      if (isFunction(v = args[i])) {
        fired ? v(uu)
           : (uuready.uudb[type] || (uuready.uudb[type] = [[], [], []]),
             uuready.uudb[type][order].push(v));
      }
    }
  }
}
uuready.uudb = {};
function uureadyfire(readyEventType, param) {
  var db = uuready.uudb[readyEventType], ary, callback, i = -1;
  if (db) {
    ary = db[2].concat(db[1], db[0]);
    uuready.uudb[readyEventType] = null;
    while ( (callback = ary[++i]) ) {
      callback(uu, param);
    }
  }
}
function uunode(tagName
        ) {
  return arguments.length > 1 ? buildNode(tagName, uuarray(arguments, 1))
                : doc[_createElement](tagName || "div");
}
function uunodeadd(source, context, position) {
  context = context || doc.body;
  var node = !source ? doc[_createElement]("div")
       : source[_nodeType] ? source
       : !source[_indexOf]("<") ? uunodebulk(source, context)
       : doc[_createElement](source),
    reference = null,
    rv = (node[_nodeType] === 11) ? node[_firstChild] : node;
  switch (uunodefind.pos[position] || 8) {
  case 1: reference = context[_parentNode][_firstChild];
  case 2: reference || (reference = context);
  case 3: reference || (reference = context[_nextSibling]);
  case 4: context[_parentNode].insertBefore(node, reference); break;
  case 5: reference = context[_firstChild];
  case 8: context.insertBefore(node, reference);
  }
  return rv;
}
function uunodefind(parent, position) {
  parent = parent || doc.body;
  var rv, num = uunodefind.pos[position] || 8,
    iter,
    iters = uunodefind.iters[num > 4 ? num - 4 : num];
  if ("firstElementChild" in parent) {
    rv = (num === 1 || num === 4) ? parent[_parentNode][iters[0]]
                   : parent[iters[0]];
  } else {
    iter = iters[1];
    rv = (num === 2 || num === 3) ? parent[iter] :
       (num > 4) ? parent[iters[2]]
           : parent[_parentNode][iters[2]];
    for (; rv; rv = rv[iter]) {
      if (rv[_nodeType] === 1) {
        break;
      }
    }
  }
  return rv;
}
uunodefind.pos = { "^": 1, "-": 2, "+": 3, "$": 4, ".^": 5, ".$": 8 };
uunodefind.iters = {
  1: ["firstElementChild"
                , _nextSibling,    _firstChild
                                ],
  2: ["previousElementSibling"
                , "previousSibling"
                                ],
  3: ["nextElementSibling"
                , _nextSibling
                                ],
  4: ["lastElementChild"
                , "previousSibling", _lastChild
                                ]
};
function uunodeid(node) {
  if (!node[_uuguid]) {
    uunodeid.db[node[_uuguid] = ++uunodeid.num] = node;
  }
  return node[_uuguid];
}
uunodeid.num = 0;
uunodeid.db = {};
function uunodeidtonode(nodeid) {
  return uunodeid.db[nodeid];
}
function uunodeidremove(node) {
  node[_uuguid] && (uunodeid.db[node[_uuguid]] = null,
                 node[_uuguid] = null);
  return node;
}
function uunodebulk(source, context) {
  var rv = doc.createDocumentFragment(),
    placeholder = uunode((context || {}).tagName);
  placeholder.innerHTML = source[_nodeType] ? source.outerHTML
                       : source;
  while (placeholder[_firstChild]) {
    rv[_appendChild](placeholder[_firstChild]);
  }
  return rv;
}
function uunodepath(node) {
  var rv = [], n = node, idx;
  while (n && n[_nodeType] === 1) {
    if (uunodepath.vip.test(n.tagName)) {
      rv.push(n.tagName);
      break;
    } else {
      idx = "";
      if (n[_parentNode]) {
        idx = (uunodechildren(n[_parentNode]).length < 2
               ? ""
               : ":nth-child(" + (uunodeindexof(n) + 1) + ")");
      }
      rv.push(n.tagName + idx);
    }
    n = n[_parentNode];
  }
  return rv.reverse().join(">").toLowerCase();
}
uunodepath.vip = /^(?:html|head|body)$/i;
function uunodeswap(swapin, swapout) {
  return swapout[_parentNode].replaceChild(swapin, swapout);
}
function uunodewrap(innerNode, outerNode) {
  return outerNode[_appendChild](uunodeswap(outerNode, innerNode));
}
function buildNode(node, args) {
  node[_nodeType] || (node = doc[_createElement](node));
  var arg, i = 0, token = 0, ticket, isstr;
  while ( (arg = args[i++]) ) {
    if (arg) {
      if (arg[_nodeType]) {
        node[_appendChild](arg);
      } else if (isNumber(arg)) {
        ticket = arg;
      } else {
        isstr = isString(arg);
        if (isstr && arg[_indexOf](",") < 0) {
          node[_appendChild](doc[_createTextNode](arg));
        } else if (++token < 2) {
          uuattr(node, isstr ? uuhash(arg) : arg);
        } else if (token < 3) {
          uucss(node,  isstr ? uuhash(arg) : arg);
        }
      }
    }
  }
  ticket && uunodebuilder.handler
     && uunodebuilder.handler(uu, node, ticket, uunodeid(node));
  return node;
}
function uunodeclear(parent) {
  var rv = uutag("*", parent), v, i = -1;
  while ( (v = rv[++i]) ) {
    uunodeidremove(v);
    uueventunbind(v);
  }
  while (parent[_lastChild]) {
    parent.removeChild(parent[_lastChild]);
  }
  return parent;
}
function uunoderemove(node) {
  uueventunbind(node);
  uunodeidremove(node);
  var key, handler = uudata.handler;
  for (key in handler) {
    node[key] && handler(key, node, "removeNode");
  }
  node[_parentNode] && node[_parentNode].removeChild(node);
  return node;
}
function uunodechildren(parent) {
  var rv = parent.children;
  if (!rv) {
    var n = parent[_firstChild];
    for (rv = []; n; n = n[_nextSibling]) {
      n[_nodeType] === 1 && rv.push(n);
    }
  }
  return rv;
}
function uunodebuilder(handler) {
  uunodebuilder.handler = handler;
}
function uunodeindexof(node) {
  var rv = 0, n = node[_parentNode][_firstChild];
  for (; n; n = n[_nextSibling]) {
    if (n[_nodeType] === 1) {
      if (n === node) {
        return rv;
      }
      ++rv;
    }
  }
  return -1;
}
function uuhtml(node, html) {
  return html ? (uunodeadd(html, uunodeclear(node)), node)
        : node.innerHTML;
}
function uuhead() {
  return buildNode(doc.head, arguments);
}
function uubody() {
  return buildNode(doc.body, arguments);
}
function uutext(data,
        text
        ) {
  var args = arguments, az = args.length;
  if (isString(data)) {
    return doc[_createTextNode](
          az < 2 ? data
             : uuformat.apply(this, args));
  }
  if (text === void 0) {
    return data[
          _gecko ? "textContent" :
               "innerText"];
  }
  uunodeadd(doc[_createTextNode](az < 3 ? text
                     : uuformat.apply(this, uuarray(args, 1))),
       uunodeclear(data));
  return data;
}
function uuquery(cssSelector, context) {
  context = context || doc;
  if (context[_nodeType]
    && context.querySelectorAll
    && !uuquery.ngword.test(cssSelector)
                      ) {
    try {
      return fakeToArray(context.querySelectorAll(cssSelector));
    } catch(err) {}
  }
  return uuquery.selectorAll(cssSelector, context);
}
uuquery.ngword = /(?:\:(a|b|co|dig|first-l|li|mom|ne|p|sc|t|v))|!=|\/=/;
function uuid(expression, context) {
  return (context || doc).getElementById(expression);
}
function uutag(expression, context) {
  if (!_ver.ie) {
    return fakeToArray((context || doc).getElementsByTagName(expression));
  }
  var rv = [], ri = -1, v, i = 0, skip = expression === "*",
    nodeList = (context || doc).getElementsByTagName(expression),
    iz = nodeList.length;
  for (; i < iz; ++i) {
    v = nodeList[i];
    if (!skip || v[_nodeType] === 1) {
      rv[++ri] = v;
    }
  }
  return rv;
}
uutag.html4 = ("a,b,br,dd,div,dl,dt,h1,h2,h3,h4,h5,h6,i,img,iframe," +
       "input,li,ol,option,p,pre,select,span,table,tbody,tr," +
       "td,th,tfoot,textarea,u,ul").split(",");
uutag.html5 = ("abbr,article,aside,audio,canvas,datalist," +
       "details,eventsource,figure,footer,header,hgroup," +
       "mark,menu,meter,nav,output,progress,section,time,video").split(",");
function uumatch(cssSelector, context) {
  if (context.matchesSelector) {
    return context.matchesSelector(cssSelector);
  }
  if (context.webkitMatchesSelector) {
    return context.webkitMatchesSelector(cssSelector);
  }
  if (context.mozMatchesSelector) {
    return context.mozMatchesSelector(cssSelector);
  }
  var node, i = -1, nodeArray = uuquery(cssSelector, doc);
  while ( (node = nodeArray[++i]) ) {
    if (node === context) {
      return true;
    }
  }
  return false;
}
function uuklass(expression, context) {
  if (doc.getElementsByClassName) {
    return fakeToArray((context || doc).getElementsByClassName(expression));
  }
  var rv = [], ri = -1, v, i = 0, iz, match, cn, nz, rex,
    name = uutrim(expression).split(" "),
    nodeList = (context || doc).getElementsByTagName("*");
  name.length > 1 && (name = uuunique(name, 1));
  rex = _classNameMatcher(name);
  for (nz = name.length, iz = nodeList.length; i < iz; ++i) {
    v = nodeList[i];
    cn = v.className;
    if (cn) {
      match = cn.match(rex);
      (match && match.length >= nz) && (rv[++ri] = v);
    }
  }
  return rv;
}
function uufix(source) {
  return uufix.db[source] || source;
}
uufix.db = {};
function uutrim(source) {
  return source.trim()[_replace](/\s\s+/g, " ");
}
function uutrimtag(source) {
  return uutrim(source[_replace](/<\/?[^>]+>/g, ""));
}
function uutrimfunc(source) {
  return source[_replace](/^[^\(]+\(|\)\s*$/g, "");
}
function uutrimquote(source) {
  return source[_replace](/^\s*["']?|["']?\s*$/g, "");
}
function uuformat(format) {
  var i = 0, args = arguments;
  return format[_replace](uuformat.q, function() {
    return args[++i];
  });
}
uuformat.q = /\?\?/g;
function uupuff(source
        /* , var_args, ... */) {
  alert(arguments.length < 2 ? uujsonencode(source)
               : uuformat.apply(this, arguments));
}
function uulog(log
       /* , var_args, ... */) {
  var id = uu.config.log, context = uuid(id), tag,
    txt = arguments.length < 2 ? uujsonencode(log)
                 : uuformat.apply(this, arguments);
  context || uunodeadd(context = uu.ol({ id: id }));
  tag = /OL|UL/.test(context.tagName) ? "li" : "p";
  uunodeadd(uu[tag](doc[_createTextNode](txt)), context);
}
function uulogclear(threshold) {
  var context = uuid(uu.config.log);
  if (context
    && (!threshold || threshold < uunodechildren(context).length)) {
    while (context[_lastChild]) {
      context.removeChild(context[_lastChild]);
    }
  }
}
function uujson(source, alt) {
  return (alt || !JSON) ? uujsonencode(source, 1)
             : JSON.stringify(source) || "";
}
uujson.x = [
  /[^,:{}\[\]0-9\.\-+Eaeflnr-u \n\r\t]/,
  /"(\\.|[^"\\])*"/g,
  /(?:\"|\\[bfnrt\\])/g,
  uuhash('",\\",\b,\\b,\f,\\f,\n,\\n,\r,\\r,\t,\\t,\\,\\\\'),
  /[\x00-\x1f]/g];
function uujsondecode(jsonString, alt) {
  var str = jsonString.trim(), x = uujson.x;
  return (alt || !JSON) ? (x[0].test(str[_replace](x[1], ""))
                ? _false
                : (new Function("return " + str))())
             : JSON.parse(str);
}
function uujsonencode(mix, esc) {
  var ary, type = uutype(mix), w, ai = -1, i, iz, q = '"', x;
  if (mix === win) {
    return '"window"';
  }
  switch (type) {
  case 10:       ary = []; break;
  case 9:
  case 1: return mix + "";
  case 11: return q + uunodepath(mix) + q;
  case 6: return mix.toJSON();
  case 2: return isFinite(mix) ? mix + "" : "null";
  case 4:
    if (_ie) {
      w = mix + "";
      return q + w.slice(9, w[_indexOf]("(")) + q;
    }
    return q + mix.name + q;
  case 3:
    x = uujson.x;
    return q + mix.replace(x[2], function(m) {
           return x[3][m] || m;
         }).replace(x[4], function(s) {
           return "\\u00" + _num2hh[s.charCodeAt(0)];
         }) + q;
  case 5:
  case 12:
    for (ary = [], i = 0, iz = mix.length; i < iz; ++i) {
      ary[++ai] = uujsonencode(mix[i], esc);
    }
    return "[" + ary + "]";
  default: return "";
  }
  if (mix.msgbox) {
    return q + mix.name + q;
  }
  if (_toString.call(type).slice(-3) === "on]") {
    w = _webkit;
    for (i in mix) {
      if (typeof mix[i] === _string && (w || i != (+i + ""))) {
        w && (i = mix.item(i));
        ary[++ai] = q + i + q + ':' + q + mix[i] + q;
      }
    }
  } else {
    for (i in mix) {
      ary[++ai] = q + i + q + ":" + uujsonencode(mix[i], esc);
    }
  }
  return "{" + ary + "}";
}
function uudate(source) {
  return source === void 0           ? _date2hash(new Date())
     : uutype(source, 6) ? _date2hash(source)
     : isNumber(source)            ? _date2hash(new Date(source))
     : source.ISO                  ? uuclone(source)
     : _date2hash(_str2date(source) || new Date(source));
}
uudate.x = [
  /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(?:\.(\d*))?Z$/,
  /^([\w]+) (\w+) (\w+)/];
function _date2hash(date) {
  return {
    Y:      date.getUTCFullYear(),      M:      date.getUTCMonth() + 1,
    D:      date.getUTCDate(),          h:      date.getUTCHours(),
    m:      date.getUTCMinutes(),       s:      date.getUTCSeconds(),
    ms:     date.getUTCMilliseconds(),  time:   date.getTime(),
    ISO:    datehashiso,                GMT:    datehashgmt
  };
}
function _str2date(str) {
  function _toDate(_, dayOfWeek, day, month) {
    return dayOfWeek + " " + month + " " + day;
  }
  var x = uudate.x, m = x[0].exec(str);
  if (m) {
    return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3],
                 +m[4], +m[5], +m[6], +m[7]));
  }
  if (_ie && str[_indexOf]("GMT") > 0) {
    str = str[_replace](/GMT/, "UTC");
  }
  return new Date(str[_replace](",", "")
           [_replace](x[1], _toDate));
}
function datehashiso() {
  var that = this;
  return uuformat("??-??-??T??:??:??.??Z",
          that.Y, _num2dd[that.M], _num2dd[that.D],
          _num2dd[that.h], _num2dd[that.m],
          _num2dd[that.s], ("00" + that.ms).slice(-3) + that.ms);
}
function datehashgmt() {
  var rv = (new Date(this.time)).toUTCString();
  if (_ie && rv[_indexOf]("UTC") > 0) {
    rv = rv[_replace](/UTC/, "GMT");
    (rv.length < 29) && (rv = rv[_replace](/, /, ", 0"));
  }
  return rv;
}
function uuflash(url, option) {
  var opt = uuarg(option, { width: "100%", height: "100%" }),
    param = opt.param || {}, id = opt.id || ("external" + uuguid()),
    paramArray = [], i, fragment;
  param.allowScriptAccess || (param.allowScriptAccess = "always");
  param.movie = url;
  for (i in param) {
    paramArray.push(uuformat(_ie ? '<param name="??" value="??" />'
                   : '??="??"', i, param[i]));
  }
  fragment = uuformat(
    _ie ? '<object id="??" width="??" height="??" data="??" ??>??</object>'
      : '<embed name="??" width="??" height="??" src="??" ?? ?? />',
    id,
    opt[_width],
    opt[_height],
    url,
    _ie ? 'classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000"'
      : 'type="application/x-shockwave-flash"',
    paramArray.join(" "));
  uunodeswap(uunodebulk(fragment), opt.marker || uunodeadd());
  return _ie ? uuid(id) : doc.getElementsByName(id)[0];
}
function uuguid() {
  return ++uuguid.num;
}
uuguid.num = 0;
function ArrayIndexOf(search, fromIndex) {
  var iz = this.length, i = fromIndex || 0;
  i = (i < 0) ? i + iz : i;
  for (; i < iz; ++i) {
    if (i in this && this[i] === search) {
      return i;
    }
  }
  return -1;
}
function ArrayLastIndexOf(search, fromIndex) {
  var iz = this.length, i = fromIndex;
  i = (i < 0) ? i + iz + 1 : iz;
  while (--i >= 0) {
    if (i in this && this[i] === search) {
      return i;
    }
  }
  return -1;
}
function ArrayEvery(evaluator, that) {
  for (var i = 0, iz = this.length; i < iz; ++i) {
    if (i in this && !evaluator.call(that, this[i], i, this)) {
      return _false;
    }
  }
  return _true;
}
function ArraySome(evaluator, that) {
  for (var i = 0, iz = this.length; i < iz; ++i) {
    if (i in this && evaluator.call(that, this[i], i, this)) {
      return _true;
    }
  }
  return _false;
}
function ArrayForEach(evaluator, that) {
  var i = 0, iz = this.length;
  if (that) {
    for (; i < iz; ++i) {
      i in this && evaluator.call(that, this[i], i, this);
    }
  } else {
    for (; i < iz; ++i) {
      i in this && evaluator(this[i], i, this);
    }
  }
}
function ArrayMap(evaluator, that) {
  for (var iz = this.length, rv = Array(iz), i = 0; i < iz; ++i) {
    i in this && (rv[i] = evaluator.call(that, this[i], i, this));
  }
  return rv;
}
function ArrayFilter(evaluator, that) {
  for (var rv = [], ri = -1, v, i = 0, iz = this.length; i < iz; ++i) {
    i in this && evaluator.call(that, v = this[i], i, this)
         && (rv[++ri] = v);
  }
  return rv;
}
function ArrayReduce(evaluator, initialValue, __right__) {
  var that = this, r = !!__right__, undef, f = 0,
    rv = initialValue === undef ? undef : (++f, initialValue),
    iz = that.length, i = r ? --iz : 0;
  for (; r ? i >= 0 : i < iz; r ? --i : ++i) {
    i in that && (rv = f ? evaluator(rv, that[i], i, that)
               : (++f, that[i]));
  }
  if (!f) {
    throw new Error("BAD_PARAM");
  }
  return rv;
}
function ArrayReduceRight(evaluator, initialValue) {
  return ArrayReduce.call(this, evaluator, initialValue, 1);
}
function DateToISOString() {
  return this.toJSON ? this.toJSON() : uudate(this).ISO();
}
function DateToJSON() {
  return uudate(this).ISO();
}
function ObjectToJson() {
  return this.valueOf();
}
function StringTrim() {
  return this[_replace](_trimSpace, "");
}
function innerTextGetter() {
  return this.textContent;
}
function innerTextSetter(text) {
  while (this.hasChildNodes()) {
    this.removeChild(this[_lastChild]);
  }
  this[_appendChild](doc[_createTextNode](text));
}
function outerHTMLGetter() {
  var rv, that = this, p = that[_parentNode],
    r = doc.createRange(), div = doc[_createElement]("div");
  p || doc.body[_appendChild](that);
  r.selectNode(that);
  div[_appendChild](r.cloneContents());
  rv = div.innerHTML;
  p || that[_parentNode].removeChild(that);
  return rv;
}
function outerHTMLSetter(html) {
  var r = doc.createRange();
  r.setStartBefore(this);
  this[_parentNode].replaceChild(r.createContextualFragment(html), this);
}
function NodeSet(expression, context) {
  var exp = expression;
  this.stack = [[]];
  this[_nodeArray] = !exp ? []
    : (exp === win || exp[_nodeType]) ? [exp]
    : typeof exp === _string ?
      (!exp[_indexOf]("<")
        ? [uunodebulk(exp)]
        : uuquery(exp, context &&
               context[_nodeArray] ? context[_nodeArray].concat()
                         : context))
    : _isArray(exp) ? exp.concat()
    : (exp instanceof NodeSet) ? exp[_nodeArray].concat()
    : [];
}
NodeSet[_prototype] = {
  back: NodeSetBack,
  find: NodeSetFind,
  nth: NodeSetNth,
  each: NodeSetEach,
  size: NodeSetSize,
  clone: NodeSetClone,
  indexOf: NodeSetIndexOf,
  add: NodeSetAdd,
  klass: NodeSetKlass,
  iter: NodeSetIter
};
uu.nodeSet = NodeSet[_prototype];
function NodeSetBack() {
  this[_nodeArray] = this.stack.pop() || [];
  return this;
}
function NodeSetFind(expression) {
  this.stack.push(this[_nodeArray]);
  this[_nodeArray] = uuquery("! " + expression, this[_nodeArray]);
  return this;
}
function NodeSetNth(indexer, evaluator) {
  var rv = this[_nodeArray][indexer < 0 ? indexer + this[_nodeArray].length
                     : indexer || 0];
  return evaluator ? (evaluator(rv, indexer), this) : rv;
}
function NodeSetEach(evaluator) {
  this[_nodeArray].forEach(evaluator);
  return this;
}
function NodeSetSize() {
  return this[_nodeArray].length;
}
function NodeSetClone() {
  return this[_nodeArray].concat();
}
function NodeSetIndexOf(node) {
  return this[_nodeArray][_indexOf](node);
}
function NodeSetAdd(source, position) {
  var ary = this[_nodeArray], context, i = -1;
  if (ary.length === 1) {
    uunodeadd(source, ary[0], position);
  } else {
    while ( (context = ary[++i]) ) {
      uunodeadd(uunodebulk(source), context, position);
    }
  }
  return this;
}
function NodeSetKlass(expression) {
  var method = NodeSetKlass.cmd[expression.charAt(0)] || uuklassadd;
  return NodeSetIter(1, this, method, expression.slice(1))
}
NodeSetKlass.cmd = { "+": uuklassadd,
           "-": uuklassremove,
           "!": uuklasstoggle };
function NodeSetIter(iterType,
           that,
           evaluator,
           param1,
           param2,
           param3,
           param4) {
  var node, ary = that[_nodeArray], i = -1,
    rv = [], r, arrayResult = 0;
  while ( (node = ary[++i]) ) {
    if (node && node[_nodeType] === 11) {
      node = node[_firstChild] || node;
    }
    r = evaluator(node, param1, param2, param3, param4);
    i || !iterType || r === node || ++arrayResult;
    arrayResult && (rv[i] = r);
  }
  return (iterType && arrayResult) ? rv : that;
}
uueach({    bind: uuevent,
      unbind: uueventunbind,
      fx: uufx,
      skip: uufxskip,
      remove: uunoderemove,
      show: uucssshow,
      hide: uucsshide       }, function(fn, name) {
  NodeSet[_prototype][name] = function(a, b, c) {
    return NodeSetIter(0, this, fn, a, b, c);
  }
});
uueach({    attr: uuattr,
      css: uucss,
      html: uuhtml,
      text: uutext      }, function(fn, name) {
  NodeSet[_prototype][name] = function(a, b) {
    return NodeSetIter(1, this, fn, a, b);
  }
});
uueach(uuevent.shortcut, function(eventType) {
  uu[eventType] = function(node, fn) {
    return uuevent(node, eventType, fn);
  };
  NodeSet[_prototype][eventType] = function(fn) {
    return NodeSetIter(0, this, uuevent, eventType, fn);
  };
});
_work = 0;
uueach(uutag.html4.concat(uutag.html5), function(tagName) {
  tagName === "abbr" && ++_work;
  _work && _ie && doc[_createElement](tagName);
  uu[tagName] = function() {
    return buildNode(tagName, arguments);
  };
});
try {
  _ver.ie6 && doc.execCommand("BackgroundImageCache", _false, _true);
} catch(err) {}
function _windowonload() {
  uuready.window = _true;
  _DOMContentLoaded();
  uureadyfire("window");
}
uueventattach(win, "load", _windowonload);
function _DOMContentLoaded() {
  if (!uuready.reload && !uuready.dom) {
    uuready.dom = _true;
    uureadyfire("dom");
  }
}
function _IEDOMContentLoaded() {
  try {
    (new Image).doScroll();
    _DOMContentLoaded();
  } catch(err) {
    setTimeout(_IEDOMContentLoaded, 64);
  }
}
(_ie && _ver < 9) ? _IEDOMContentLoaded() :
  uueventattach(doc, "DOMContentLoaded", _DOMContentLoaded);
function _windowonunload() {
  var nodeid, node, ary, i, v;
  for (nodeid in uunodeid.db) {
    try {
      node = uunodeid.db[nodeid];
      ary = node.attributes, i = -1;
      while ( (v = ary[++i]) ) {
        !v.name[_indexOf]("data-") && (node[v.name] = null);
      }
    } catch (err) {}
  }
  doc.html = doc.head = null;
  uueventdetach(win, "onload", _windowonload);
  uueventdetach(win, "onunload", _windowonunload);
}
_ie && _ver < 9 && uueventdetach(win, "onunload", _windowonunload);
uuready(function() {
  var orientationchange = "orientationchange",
    nodeList = uutag("*", _rootNode), v, i = -1,
    styles = uuhash((
        !uuready[_getAttribute] ? "float,styleFloat,cssFloat,styleFloat" :
                     "float,cssFloat"
      ) + ",d,display,w,width,h,height,x,left,y,top,l,left,t,top," +
        "c,color,bg,background,bgc,backgroundColor,bgi,backgroundImage," +
        "o,opacity,z,zIndex,fs,fontSize," +
        "pos,position,m,margin,b,border,p,padding");
  uumix(_camelhash(uufix.db, _webkit ? getComputedStyle(_rootNode, 0)
                   : _rootNode.style), styles, uuattr.fix);
  uunodeid(_rootNode);
  while ( (v = nodeList[++i]) ) {
    uunodeid(v);
  }
  uueventattach(win, orientationchange, function() {
    _lastOrientation = win.orientation;
  });
}, 2);
function _camelhash(rv, props) {
  function _camelize(m, c) {
    return c.toUpperCase();
  }
  function _decamelize(m, c, C) {
    return c + "-" + C.toLowerCase();
  }
  var k, v,
    DECAMELIZE = /([a-z])([A-Z])/g,
    CAMELIZE = /-([a-z])/g;
  for (k in props) {
    if (typeof props[k] === _string) {
      if (_webkit) {
        v = k = props.item(k);
        k[_indexOf]("-") >= 0 && (v = k[_replace](CAMELIZE, _camelize));
        (k !== v) && (rv[k] = v);
      } else {
        v = ((_gecko && !k[_indexOf]("Moz")) ? "-moz" + k.slice(3) :
           (_ie    && !k[_indexOf]("ms"))  ? "-ms"  + k.slice(2) :
           (_opera && !k[_indexOf]("O"))   ? "-o"   + k.slice(1) : k)
          [_replace](DECAMELIZE, _decamelize);
        (k !== v) && (rv[v] = k);
      }
    }
  }
  return rv;
}
function _classNameMatcher(ary) {
  return RegExp("(?:^| )(" + ary.join("|") + ")(?:$|(?= ))", "g");
}
function detectVersions(libraryVersion) {
  function detectFlashPlayerVersion(ie, minimumVersion) {
    var rv = 0, ver, m;
    try {
      ver = ie ? (new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).
              GetVariable("$version")[_replace](/,/g, ".")
           : navigator.plugins["Shockwave Flash"].description;
      m = /\d+\.\d+/.exec(ver);
      rv = m ? parseFloat(m[0]) : 0;
    } catch(err) {}
    return rv < minimumVersion ? 0 : rv;
  }
  function detectSilverlightVersion(ie, minimumVersion) {
    var rv = 0, obj, check = minimumVersion;
    try {
      obj = ie ? new ActiveXObject("AgControl.AgControl")
           : navigator.plugins["Silverlight Plug-In"];
      if (ie) {
        while (obj.IsVersionSupported(check + ".0")) {
          rv = check++;
        }
      } else {
        rv = parseInt(/\d+\.\d+/.exec(obj.description)[0]);
      }
    } catch(err) {}
    return rv < minimumVersion ? 0 : rv;
  }
  function test(rex) {
    return rex.test(userAgent);
  }
  var rv = { library: libraryVersion,
       ie: _false, ie6: _false, ie7: _false, ie8: _false, ie9: _false,
       opera: _false, gecko: _false, webkit: _true,
       chrome: _false, safari: _true, mobile: _true, jit: _true,
       touch: _true, flash: 0, silverlight: 0 },
    ie = !!doc.uniqueID, documentMode = doc.documentMode,
    opera = win.opera || _false,
    userAgent = navigator.userAgent,
    rennum = ((/(?:rv\:|ari\/|sto\/)(\d+\.\d+(\.\d+)?)/.exec(userAgent)
         || [,0])[1]).toString(),
    render = parseFloat(rennum[_replace](/[^\d\.]/g, "")
              [_replace](/^(\d+\.\d+)(\.(\d+))?$/,"$1$3")),
    browser = opera ? +(opera.version()[_replace](/\d$/, ""))
            : parseFloat((/(?:IE |fox\/|ome\/|ion\/)(\d+\.\d)/.
                   exec(userAgent) || [,0])[1]);
  rv.render       = render;
  rv.browser      = browser;
  rv.valueOf      = function() {
             return browser;
           };
  rv.ie           = ie;
  rv.ie6          = ie && browser === 6;
  rv.ie7          = ie && browser === 7;
  rv.ie8          = ie && documentMode === 8;
  rv.ie9          = ie && documentMode === 9;
  rv.opera        = win.opera ? _true : _false;
  rv.gecko        = test(/Gecko\//);
  rv.webkit       = test(/WebKit/);
  rv.chrome       = test(/Chrome/);
  rv.safari       = !rv.chrome && test(/Safari/);
  rv.mobile       = test(/Mobile/) || test(/Opera Mini/);
  rv.iphone       = test(/iPad|iPod|iPhone/);
  rv.android      = test(/Android/);
  rv.os           = rv.iphone         ? "iphone"
          : rv.android        ? "android"
          : test(/CrOS/)      ? "chrome"
          : test(/Win/)       ? "windows"
          : test(/Mac/)       ? "mac"
          : test(/X11|Linux/) ? "unix"
          : "";
  rv.touch        = rv.iphone || rv.android;
  rv.jit          = (ie        && browser >= 9)   ||
           (rv.gecko  && render  >  1.9) ||
           (rv.webkit && render  >= 528) ||
           (rv.opera  && browser >= 10.5);
  rv.flash        = detectFlashPlayerVersion(ie, 9);
  rv.silverlight  = detectSilverlightVersion(ie, 3);
  if (rv.ie9 && (rv.ie6 || rv.ie7 || rv.ie8)) {
    throw new Error("UNKNOWN_BROWSER_MODE");
  }
  if (rv.ie9) {
    rv.browser = 9;
  }
  return rv;
}
function fakeToArray(fakeArray) {
  if (uuready.ArraySlice) {
    return Array[_prototype].slice.call(fakeArray);
  }
  var rv = [], i = 0, iz = fakeArray.length;
  for (; i < iz; ++i) {
    rv[i] = fakeArray[i];
  }
  return rv;
}
function detectFeatures() {
  var hash = { rgba: _true, hsla: _true, transparent: _true },
    transparent = "transparent",
    node = uunode(), child, style = node.style,
    rv = {
      opacity: _true,
      color: uuarg(hash),
      border: uuarg(hash),
      background: uuarg(hash),
      ArraySlice: _true,
      getAttribute: _true,
      StringIndexer: _true
    };
  uueach({ rgba: ["rgba(255,0,0,0.5)", /rgba.2/],
       hsla: ["hsla(100,100%,100%,0.5)", /rgba.2|hsla.1/],
       transparent: [transparent, /tran|rgba/] }, function(v, i) {
    style.cssText = 'color:' + v[0] + ';background:' + v[0] +
            ';border:0 none ' + v[0];
    rv.color[i] = v[1].test(style.color);
    rv.border[i] = v[1].test(style.borderTopColor);
    rv.background[i] = v[1].test(style.backgroundColor);
  });
  rv.opacity = style.opacity != void 0;
  node.innerHTML = '<a href="/a" class="a"></a>';
  child = node[_firstChild];
  try {
    Array[_prototype].slice.call(doc.getElementsByTagName("head"));
  } catch(err) { rv.ArraySlice = _false; }
  rv[_getAttribute] = child[_getAttribute]("class") === "a" &&
            child[_getAttribute]("href") === "/a";
  rv.StringIndexer = !!"0"[0];
  if (_ver.ie) {
    _ver < 9 && (rv.color[transparent] = _false);
    _ver < 7 && (rv.border[transparent] = _false);
  }
  return rv;
}
})(this, document, parseInt, parseFloat, this.getComputedStyle, this.JSON);
(this.uu || this).color || (function(nameSpace) {
nameSpace.color        = uucolor;
nameSpace.color.add    = uucoloradd;
nameSpace.color.expire = uucolorexpire;
nameSpace.color.random = uucolorrandom;
function uucolor(source) {
  if (typeof source !== "string") {
    if (typeof source === "number") {
      return fixColorHash({ r: (source >> 16) & 255,
                 g: (source >>  8) & 255,
                 b:  source        & 255,
                 a: 1 });
    }
    if (source.argb) {
      return source;
    }
    if ("l" in source) {
      return hslaToColorHash(source);
    }
    if ("v" in source) {
      return hsvaToColorHash(source);
    }
    if ("a" in source) {
      return fixColorHash(source);
    }
  }
  var v, m, n = 0, r, g, b, a = 1, add = 0, rgb = 0, error = 0,
    rv = uucolor.db[source] || uucolor.cache[source] ||
       uucolor.db[++add, v = source.toLowerCase()];
  if (!rv) {
    switch ({ "#": 1, r: 2, h: 3 }[v.charAt(0)]) {
    case 1:
      if (!uucolor.hexFormat.test(v)) {
        break;
      }
      m = v.split("");
      switch (m.length) {
      case 4: n = parseInt(m[1]+m[1] + m[2]+m[2] + m[3]+m[3], 16); break;
      case 7: n = parseInt(v.slice(1), 16); break;
      case 9: n = parseInt(v.slice(3), 16);
          a = ((parseInt(v.slice(1, 3), 16) / 2.55) | 0) / 100; break;
      default:
          ++error;
      }
      rv = { r: n >> 16, g: (n >> 8) & 255, b: n & 255, a: a, num: n };
      break;
    case 2:
      ++rgb;
    case 3:
      m = (rgb ? uucolor.rgbaFormat
           : uucolor.hslaFormat).exec(
            v.indexOf("%") < 0 ? v
                     : v.replace(uucolor.percent,
                           rgb ? percent255
                             : percent100));
      if (m) {
        r = m[1] | 0, g = m[2] | 0, b = m[3] | 0;
        a = m[4] ? parseFloat(m[4]) : 1;
        rv = rgb ? { r: r > 255 ? 255 : r,
               g: g > 255 ? 255 : g,
               b: b > 255 ? 255 : b, a: a }
             : hslaToColorHash({
               h: r > 360 ? 360 : r,
               s: g > 100 ? 100 : g,
               l: b > 100 ? 100 : b, a: a });
      }
    }
  }
  if (error || !rv) {
    return new Error("INVALID_COLOR");
  }
  if (add) {
    uucolor.cache[source] = fixColorHash(rv);
  }
  return rv;
}
uucolor.db = { transparent: fixColorHash({ r: 0, g: 0, b: 0, a: 0 }) };
uucolor.cache = {};
uucolor.percent = /([\d\.]+)%/g;
uucolor.hexFormat = /^#(?:[\da-f]{3,8})$/;
uucolor.hslaFormat = /^hsla?\(\s*([\d\.]+)\s*,\s*([\d\.]+)\s*,\s*([\d\.]+)\s*(?:,\s*([\d\.]+))?\s*\)/;
uucolor.rgbaFormat = /^rgba?\(\s*([\d\.]+)\s*,\s*([\d\.]+)\s*,\s*([\d\.]+)\s*(?:,\s*([\d\.]+))?\s*\)/;
function fixColorHash(c) {
  var num2hh = uu.hash.num2hh;
  c.num  || (c.num  = (c.r << 16) + (c.g << 8) + c.b);
  c.hex  || (c.hex  = "#" + num2hh[c.r] + num2hh[c.g] + num2hh[c.b]);
  c.rgba || (c.rgba = "rgba(" + c.r + "," + c.g + "," +
                 c.b + "," + c.a + ")");
  if (!c.argb) {
    c.rgb       = ColorHashRGB;
    c.argb      = ColorHashARGB;
    c.hsva      = ColorHashHSVA;
    c.hsla      = ColorHashHSLA;
    c.gray      = ColorHashGray;
    c.sepia     = ColorHashSepia;
    c.comple    = ColorHashComple;
    c.arrange   = ColorHashArrange;
    c.toString  = ColorHashToString;
  }
  return c;
}
function percent255(_, n) {
  return (n * 2.555) & 255;
}
function percent100(_, n) {
  n = n | 0;
  return n > 100 ? 100 : n;
}
function uucoloradd(source) {
  var ary = source.split(","), i = -1, v, color, num;
  while ( (v = ary[++i]) ) {
    color = v.slice(0, 6);
    num = parseInt(color, 16);
    uucolor.db[v.slice(6)] = fixColorHash({
      hex:    "#"   + color,
      num:     num,
      r:       num >> 16,
      g:      (num >> 8) & 0xff,
      b:       num       & 0xff,
      a:      1
    });
  }
}
function uucolorexpire() {
  uucolor.cache = {};
}
function ColorHashToString() {
  return uu.ready.color.rgba ? this.rgba : this.hex;
}
function ColorHashARGB() {
  var num2hh = uu.hash.num2hh;
  return "#" + num2hh[(this.a * 255) & 0xff] +
         num2hh[this.r] + num2hh[this.g] + num2hh[this.b];
}
function ColorHashRGB() {
  return "rgb(" + this.r + "," + this.g + "," + this.b + ")";
}
function ColorHashGray() {
  return fixColorHash({ r: this.g, g: this.g, b: this.g, a: this.a });
}
function ColorHashSepia() {
  var r = this.r, g = this.g, b = this.b,
    y = 0.2990 * r + 0.5870 * g + 0.1140 * b,
    u = -0.091,
    v = 0.056;
  r = y + 1.4026 * v;
  g = y - 0.3444 * u - 0.7114 * v;
  b = y + 1.7330 * u;
  r *= 1.2;
  b *= 0.8;
  return fixColorHash({ r: r < 0 ? 0 : r > 255 ? 255 : r | 0,
             g: g < 0 ? 0 : g > 255 ? 255 : g | 0,
             b: b < 0 ? 0 : b > 255 ? 255 : b | 0, a: this.a });
}
function ColorHashComple() {
  return fixColorHash({ r: this.r ^ 255, g: this.g ^ 255,
             b: this.b ^ 255, a: this.a });
}
function ColorHashArrange(h, s, v) {
  var rv = this.hsva();
  rv.h += h;
  rv.h = (rv.h > 360) ? rv.h - 360 : (rv.h < 0) ? rv.h + 360 : rv.h;
  rv.s += s;
  rv.s = (rv.s > 100) ? 100 : (rv.s < 0) ? 0 : rv.s;
  rv.v += v;
  rv.v = (rv.v > 100) ? 100 : (rv.v < 0) ? 0 : rv.v;
  return hsvaToColorHash(rv);
}
function ColorHashHSVA() {
  var r = this.r / 255,
    g = this.g / 255,
    b = this.b / 255,
    max = (r > g && r > b) ? r : g > b ? g : b,
    min = (r < g && r < b) ? r : g < b ? g : b,
    diff = max - min,
    h = 0,
    s = max ? ((diff / max * 100) + 0.5) | 0 : 0,
    v = ((max * 100) + 0.5) | 0;
  if (s) {
    h = (r === max) ? ((g - b) * 60 / diff) :
      (g === max) ? ((b - r) * 60 / diff + 120)
            : ((r - g) * 60 / diff + 240);
  }
  return {
    h:  (h < 0) ? h + 360 : h,
    s:  s,
    v:  v,
    a:  this.a,
    toString: HSVAHashToString
  };
}
function HSVAHashToString() {
  return "hsva(" + (this.h | 0) + "," + this.s + "%," + this.v + "%," + this.a + ")";
}
function hsvaToColorHash(hsva) {
  var r = 0,
    g = 0,
    b = 0,
    h = (hsva.h >= 360) ? 0 : hsva.h,
    s = hsva.s * 0.01,
    v = hsva.v * 2.55,
    f, p, q, t, w;
  h = h / 60;
  f = h - (h | 0);
  if (s) {
    p = (((1 - s)             * v) + 0.5) | 0;
    q = (((1 - (s * f))       * v) + 0.5) | 0;
    t = (((1 - (s * (1 - f))) * v) + 0.5) | 0;
    w = (                       v  + 0.5) | 0;
    switch (h | 0) {
    case 0: r = w; g = t; b = p; break;
    case 1: r = q; g = w; b = p; break;
    case 2: r = p; g = w; b = t; break;
    case 3: r = p; g = q; b = w; break;
    case 4: r = t; g = p; b = w; break;
    case 5: r = w; g = p; b = q;
    }
  } else {
    r = g = b = (v + 0.5) | 0;
  }
  return fixColorHash({ r: r, g: g, b: b, a: hsva.a });
}
function ColorHashHSLA() {
  var r = this.r / 255,
    g = this.g / 255,
    b = this.b / 255,
    max = (r > g && r > b) ? r : g > b ? g : b,
    min = (r < g && r < b) ? r : g < b ? g : b,
    diff = max - min,
    h = 0, s = 0, l = (min + max) * 0.5;
  if (l > 0 && l < 1) {
    s = diff / (l < 0.5 ? l * 2 : 2 - (l * 2));
  }
  if (diff > 0) {
    if (max === r && max !== g) {
      h += (g - b) / diff;
    } else if (max === g && max !== b) {
      h += (b - r) / diff + 2;
    } else if (max === b && max !== r) {
      h += (r - g) / diff + 4;
    }
    h *= 60;
  }
  return {
    h:  h,
    s:  (s * 100 + 0.5) | 0,
    l:  (l * 100 + 0.5) | 0,
    a:  this.a,
    toString: HSLAHashToString
  };
}
function HSLAHashToString() {
  return "hsla(" + (this.h | 0) + "," + this.s + "%," + this.l + "%," + this.a + ")";
}
function hslaToColorHash(hsla) {
  var h = (hsla.h === 360) ? 0 : hsla.h,
    s = hsla.s / 100,
    l = hsla.l / 100,
    r, g, b, s1, s2, l1, l2;
  if (h < 120) {
    r = (120 - h) / 60;
    g = h / 60;
    b = 0;
  } else if (h < 240) {
    r = 0;
    g = (240 - h) / 60;
    b = (h - 120) / 60;
  } else {
    r = (h - 240) / 60;
    g = 0;
    b = (360 - h) / 60;
  }
  s1 = 1 - s;
  s2 = s * 2;
  r = s2 * (r > 1 ? 1 : r) + s1;
  g = s2 * (g > 1 ? 1 : g) + s1;
  b = s2 * (b > 1 ? 1 : b) + s1;
  if (l < 0.5) {
    r *= l, g *= l, b *= l;
  } else {
    l1 = 1 - l;
    l2 = l * 2 - 1;
    r = l1 * r + l2;
    g = l1 * g + l2;
    b = l1 * b + l2;
  }
  return fixColorHash({ r: ((r * 255) + 0.5) | 0,
             g: ((g * 255) + 0.5) | 0,
             b: ((b * 255) + 0.5) | 0,
             a: hsla.a });
}
function uucolorrandom() {
  return uucolor((Math.random() * 0xffffff) | 0);
}
uucoloradd("000000black,888888gray,ccccccsilver,ffffffwhite,ff0000red,ffff00" +
"yellow,00ff00lime,00ffffaqua,00ffffcyan,0000ffblue,ff00fffuchsia,ff00ffmage" +
"nta,880000maroon,888800olive,008800green,008888teal,000088navy,880088purple" +
",696969dimgray,808080gray,a9a9a9darkgray,c0c0c0silver,d3d3d3lightgrey,dcdcd" +
"cgainsboro,f5f5f5whitesmoke,fffafasnow,708090slategray,778899lightslategray" +
",b0c4delightsteelblue,4682b4steelblue,5f9ea0cadetblue,4b0082indigo,483d8bda" +
"rkslateblue,6a5acdslateblue,7b68eemediumslateblue,9370dbmediumpurple,f8f8ff" +
"ghostwhite,00008bdarkblue,0000cdmediumblue,4169e1royalblue,1e90ffdodgerblue" +
",6495edcornflowerblue,87cefalightskyblue,add8e6lightblue,f0f8ffaliceblue,19" +
"1970midnightblue,00bfffdeepskyblue,87ceebskyblue,b0e0e6powderblue,2f4f4fdar" +
"kslategray,00ced1darkturquoise,afeeeepaleturquoise,f0ffffazure,008b8bdarkcy" +
"an,20b2aalightseagreen,48d1ccmediumturquoise,40e0d0turquoise,7fffd4aquamari" +
"ne,e0fffflightcyan,00fa9amediumspringgreen,7cfc00lawngreen,00ff7fspringgree" +
"n,7fff00chartreuse,adff2fgreenyellow,2e8b57seagreen,3cb371mediumseagreen,66" +
"cdaamediumaquamarine,98fb98palegreen,f5fffamintcream,006400darkgreen,228b22" +
"forestgreen,32cd32limegreen,90ee90lightgreen,f0fff0honeydew,556b2fdarkolive" +
"green,6b8e23olivedrab,9acd32yellowgreen,8fbc8fdarkseagreen,9400d3darkviolet" +
",8a2be2blueviolet,dda0ddplum,d8bfd8thistle,8b008bdarkmagenta,9932ccdarkorch" +
"id,ba55d3mediumorchid,da70d6orchid,ee82eeviolet,e6e6falavender,c71585medium" +
"violetred,bc8f8frosybrown,ff69b4hotpink,ffc0cbpink,ffe4e1mistyrose,ff1493de" +
"eppink,db7093palevioletred,e9967adarksalmon,ffb6c1lightpink,fff0f5lavenderb" +
"lush,cd5c5cindianred,f08080lightcoral,f4a460sandybrown,fff5eeseashell,dc143" +
"ccrimson,ff6347tomato,ff7f50coral,fa8072salmon,ffa07alightsalmon,ffdab9peac" +
"hpuff,ffffe0lightyellow,b22222firebrick,ff4500orangered,ff8c00darkorange,ff" +
"a500orange,ffd700gold,fafad2lightgoldenrodyellow,8b0000darkred,a52a2abrown," +
"a0522dsienna,b8860bdarkgoldenrod,daa520goldenrod,deb887burlywood,f0e68ckhak" +
"i,fffacdlemonchiffon,d2691echocolate,cd853fperu,bdb76bdarkkhaki,bdb76btan,e" +
"ee8aapalegoldenrod,f5f5dcbeige,ffdeadnavajowhite,ffe4b5moccasin,ffe4c4bisqu" +
"e,ffebcdblanchedalmond,ffefd5papayawhip,fff8dccornsilk,f5deb3wheat,faebd7an" +
"tiquewhite,faf0e6linen,fdf5e6oldlace,fffaf0floralwhite,fffff0ivory,a9a9a9da" +
"rkgrey,2f4f4fdarkslategrey,696969dimgrey,808080grey,d3d3d3lightgrey,778899l" +
"ightslategrey,708090slategrey,8b4513saddlebrown");
})(this.uu || this);
uu.svg || (function(win, doc, uu) {
var _fix = uu.hash("w,width,h,height,text,textContent");
uu.svg = uu.mix(uusvg, {
  attr: uu.mix(uusvgattr, {
    transform: uusvgattrtransform
  }),
  css: uusvgcss,
  g: uusvgg,
  circle: uusvgcircle,
  rect: uusvgrect,
  text: uusvgtext,
  event: uu.mix(uu.event, {
    unbind: uu.event.unbind
  }),
  bind: uu.event,
  unbind: uu.event.unbind,
  isNode:         isNode
});
function isNode(search) {
  return search && "ownerSVGElement" in search;
}
function uusvg(x, y, width, height) {
  return buildNode("svg", ["x", "y", "w", "h"], arguments);
}
function uusvgg(tx, ty) {
  return buildNode("g", ["tx", "ty"], arguments);
}
function uusvgrect(x, y, width, height, rx, ry) {
  return buildNode("rect", ["x", "y", "width", "height", "rx", "ry"], arguments);
}
function uusvgcircle(cx, cy, r) {
  return buildNode("circle", ["cx", "cy", "r"], arguments);
}
function uusvgtext(txt, x, y) {
  var rv = buildNode("text", ["text", "x", "y"], arguments);
  rv.setAttribute("dx", 0);
  rv.setAttribute("dy", 0);
  return rv;
}
function uusvgattr(node, key, value) {
  var rv, ary, i, v, fix, tx = 0, ty = 0, mtx;
  if (key === void 0) {
    rv = {};
    ary = node.attributes;
    while ( (v = ary[++i]) ) {
      rv[v.name] = v.value;
    }
    return rv;
  }
  if (arguments.length > 2) {
    key = uu.hash(key, value);
  } else if (uu.isString(key)) {
    return node.getAttribute(_fix[key] || key) || "";
  }
  for (i in key) {
    fix = _fix[i] || i;
    v = key[i];
    if (key[i] === null) {
      node.removeAttribute(fix);
    } else {
      switch (fix) {
      case "tx": tx = v; break;
      case "ty": ty = v; break;
      case "textContent": node[fix] = v; break;
      default: node.setAttribute(fix, v);
      }
    }
  }
  if (node.tagName === "g") {
    mtx = (node.getAttribute("transform") || "")
      + " translate(" + tx + "," + ty + ")";
    node.setAttribute("transform", mtx);
  }
  return node;
}
function uusvgattrtransform(node) {
  var v = (node.getAttribute("transform") || "").replace(/\s+/, ""),
    m, scale = 1, rotate = 0, tx = 0, ty = 0;
  m = /scale\(([\d\.]+)\)/.exec(v);
  m && (scale = +m[1]);
  m = /rotate\(([\d\.]+)\)/.exec(v);
  m && (rotate = +m[1]);
  m = /translate\(([\-\+\d\.]+)(?:,([\-\+\d\.]+))?\)/.exec(v);
  m && (tx = +m[1], ty = +m[2] || 0);
  return { scale: scale, rotate: rotate, tx: tx, ty: ty };
}
function uusvgcss(node, hash) {
  var i, v;
  for (i in hash) {
    v = _fix[i] || i;
    node.style[v] = hash[i];
  }
  return node;
}
function buildNode(tagName, defargs, args) {
  var node = doc.createElementNS("http://www.w3.org/2000/svg", tagName),
    ai = 0, attr, css,
    arg, i = 0, iz = args.length, token = 0, type;
  for (; i < iz; ++i) {
    arg = args[i];
    type = typeof arg;
    if (type === "number" || type === "string") {
      attr || (attr = {});
      attr[defargs[ai++] || "_"] = arg;
    } else if (arg.nodeType) {
      node.appendChild(arg);
    } else if (++token < 2) {
      attr ? uu.mix(attr, arg) : (attr = arg);
    } else if (token < 3) {
      css  ? uu.mix(css, arg)  : (css  = arg);
    }
  }
  attr && uusvgattr(node, attr);
  css  && uusvgcss(node, css);
  return node;
}
})(window, document, uu);
uu.css.textSelectable || (function(win, uu) {
uu.css.textSelectable = textSelectable;
function textSelectable(node, allow) {
  if (uu.webkit) {
    node.style.WebkitUserSelect = allow ? "" : "none";
  } else if (uu.gecko) {
    node.style.MozUserSelect = allow ? "" : "none";
  } else if (uu.ie || uu.opera) {
    node.unselectable  = allow ? "" : "on";
    node.onselectstart = allow ? "" : "return false";
  }
  node.style.userSelect = allow ? "" : "none";
  return node;
}
})(this, uu);
uu.ui.zindex || (function(uu) {
uu.Class.singleton("ZIndex", {
  init:         zinit,
  toTop:        ztotop,
  bind:         zbind,
  unbind:       zunbind,
  beginDrag:    zbegindrag,
  endDrag:      zenddrag
});
uu.ui.zindex = uu("ZIndex");
function zinit() {
  this._db = {};
  this._ztop = 20;
}
function ztotop(node) {
  this._db[uu.nodeid(node)] &&
    (sink(this, node), node.style.zIndex = this._ztop);
}
function zbind(node) {
  var id = uu.nodeid(node);
  this._db[id] || (this._db[id] = node,
           node.style.zIndex = ++this._ztop);
}
function zunbind(node) {
  var id = uu.nodeid(node);
  if (this._db[id]) {
    delete this._db[id];
    --this._ztop;
  }
}
function zbegindrag(node) {
  this.bind(node);
  sink(this, node);
  node.style.zIndex = 5000 + 1;
}
function zenddrag(node) {
  this._db[uu.nodeid(node)] &&
      (node.style.zIndex = this._ztop);
}
function sink(that, node) {
  var thresh = parseInt(node.style.zIndex) || 10,
    db = that._db, style, i;
  for (i in db) {
    style = db[i].style;
    (style.zIndex >= thresh) && (style.zIndex -= 1);
  }
}
})(uu);
uu.ui.svgdragbase || (function(win, doc, uu) {
uu.ui.svgdragbase = uuuisvgdragbase;
var _uuuidrag = "data-uuuidrag",
  _touch = uu.ver.touch;
function uuuisvgdragbase(evt, node, grip, option) {
  var opt = option, mtx, trans,
    code = evt.code,
    pageX = evt.pageX,
    pageY = evt.pageY,
    dragInfo = grip[_uuuidrag],
    base = node.transform.baseVal,
    touches, finger, identifier, i;
  if (!dragInfo) {
    trans = uu.svg.attr.transform(node);
    grip[_uuuidrag] = dragInfo = {
      tap: 0,
      scale: trans.scale, rotate: trans.rotate,
      tx: trans.tx, ty: trans.tx, ox: 0, oy: 0,
      x: trans.tx, y: trans.ty
    };
  }
  if (code === 1 && !dragInfo.dragging) {
    if (_touch) {
      if (evt.touches) {
        finger = evt.touches[evt.touches.length - 1];
        pageX = finger.pageX;
        pageY = finger.pageY;
        identifier = finger.identifier;
      }
    }
    mtx = base.getItem(base.numberOfItems - 1).matrix;
    dragInfo.ox = pageX - mtx.e;
    dragInfo.oy = pageY - mtx.f;
    dragInfo.id = identifier;
    ++dragInfo.tap;
    dragInfo.dragging = 1;
    opt.mousedown && opt.mousedown(evt, node, option, dragInfo);
    uu.ui.zindex.beginDrag(node);
  } else if (code === 2 && dragInfo.dragging) {
    if (option.tripletap && dragInfo.tap > 2) {
      if (option.tripletap === true) {
        dragInfo.tap = 0;
        dragInfo.scale = 1;
        dragInfo.rotate = 0;
        dragInfo.x = 0;
        dragInfo.y = 0;
      } else {
        option.tripletap(evt, node, option, dragInfo);
      }
    }
    dragInfo.dragging = 0;
    opt.mouseup && opt.mouseup(evt, node, option, dragInfo);
    uu.ui.zindex.endDrag(node);
  } else if (code === 3 && dragInfo.dragging) {
    if (_touch) {
      if (evt.gesture) {
        dragInfo.scale = evt.scale;
        dragInfo.rotate = evt.rotation;
        modMatrix(node, dragInfo, evt.scale, evt.rotation);
        return;
      }
      touches = evt.touches;
      if (touches) {
        i = touches.length;
        while (i--) {
          finger = touches[i];
          if (dragInfo.id === finger.identifier) {
            pageX = finger.pageX;
            pageY = finger.pageY;
            break;
          }
        }
      }
    }
    dragInfo.x = pageX - dragInfo.ox;
    dragInfo.y = pageY - dragInfo.oy;
    opt.mousemove && opt.mousemove(evt, node, option, dragInfo);
    dragInfo.tap = 0;
  } else if (code === 4) {
    if (evt.shiftKey) {
      dragInfo.rotate += evt.wheel * 5;
    } else {
      dragInfo.scale += evt.wheel * 0.1;
      dragInfo.scale < 0.5 && (dragInfo.scale = 0.5);
    }
  }
  modMatrix(node, dragInfo, 1, 0);
}
function modMatrix(node, dragInfo, scale, rotate) {
  var mtx = node.ownerSVGElement.createSVGMatrix(),
    base = node.transform.baseVal;
  base.replaceItem(
    base.createSVGTransformFromMatrix(
      mtx.translate(dragInfo.x, dragInfo.y).
        scale(dragInfo.scale + scale - 1).
        rotate(dragInfo.rotate + rotate)), base.numberOfItems - 1);
}
})(this, document, uu);
/*
[CSS2.1 box model] http://www.w3.org/TR/CSS2/box.html
  B-------border--------+ -> border edge [CSS2.1 KEYWORD]
  |                     |
  |  P----padding----+  | -> padding edge [CSS2.1 KEYWORD]
  |  |               |  |
  |  |  C-content-+  |  | -> content edge [CSS2.1 KEYWORD]
  |  |  |         |  |  |
  |  |  |         |  |  |
  |  |  +---------+  |  |
  |  |               |  |
  |  +---------------+  |
  |                     |
  +---------------------+
  B = event.offsetX/Y in WebKit
    event.layerX/Y  in Gecko
  P = event.offsetX/Y in IE6 ~ IE8
  C = event.offsetX/Y in Opera
 */
uu.css.box || (function(win, doc, uu, getComputedStyle) {
uu.mix(uu.css, {
  box: uucssbox,
  rect: uucssrect,
  toStatic: uucsstostatic,
  toAbsolute: uucsstoabsolute,
  toRelative: uucsstorelative
});
var _uucssbox = "data-uucssbox";
function uucssbox(node, quick, mbp) {
  var rv = node[_uucssbox];
  if (!rv || !quick) {
    mbp = mbp || 0x7;
    var zero = "0px", uucssunit = uu.css.unit, bw = uucssbox.bw,
      ns = uu.css(node, true),
      mt = ns.marginTop,
      ml = ns.marginLeft,
      mr = ns.marginRight,
      mb = ns.marginBottom,
      pt = ns.paddingTop,
      pl = ns.paddingLeft,
      pr = ns.paddingRight,
      pb = ns.paddingBottom,
      bt = ns.borderTopWidth,
      bl = ns.borderLeftWidth,
      br = ns.borderRightWidth,
      bb = ns.borderBottomWidth;
    if (mbp & 0x4) {
      mt = mt === zero ? 0 : uucssunit(node, mt, 1);
      ml = ml === zero ? 0 : uucssunit(node, ml, 1);
      mr = mr === zero ? 0 : uucssunit(node, mr, 1);
      mb = mb === zero ? 0 : uucssunit(node, mb, 1);
    }
    if (mbp & 0x2) {
      bt = bw[bt] || (bt === zero ? 0 : uucssunit(node, bt, 1));
      bl = bw[bl] || (bl === zero ? 0 : uucssunit(node, bl, 1));
      br = bw[br] || (br === zero ? 0 : uucssunit(node, br, 1));
      bb = bw[bb] || (bb === zero ? 0 : uucssunit(node, bb, 1));
    }
    if (mbp & 0x1) {
      pt = pt === zero ? 0 : uucssunit(node, pt, 1);
      pl = pl === zero ? 0 : uucssunit(node, pl, 1);
      pr = pr === zero ? 0 : uucssunit(node, pr, 1);
      pb = pb === zero ? 0 : uucssunit(node, pb, 1);
    }
    rv = node[_uucssbox] = {
      width:   ns.width,
      height:  ns.height,
      margin:  { top: mt, left: ml, right: mr, bottom: mb },
      border:  { top: bt, left: bl, right: br, bottom: bb },
      padding: { top: pt, left: pl, right: pr, bottom: pb }
    };
  }
  return rv;
}
uucssbox.bw = {
  thin: 1, medium: 3, thick: (uu.ver.ie6 || uu.ver.ie7 || uu.opera) ? 6 : 5
};
function uucssrect(node, ancestorNode) {
  var cs = uu.css(node), position = cs.position,
    x = 0,
    y = 0,
    w = node.offsetWidth  || 0,
    h = node.offsetHeight || 0,
    n = node,
    ancestor = doc.html, quick = 0;
  if (position === "relative" || position === "absolute") {
    if (cs.left !== "auto" && cs.top !== "auto") {
      quick = 1;
    }
    if (uu.gecko) {
      if (cs.left === "0px" || cs.top === "0px") {
        quick = 0;
      }
    }
  }
  if (ancestorNode == null) {
    if (quick) {
      x = parseInt(cs.left);
      y = parseInt(cs.top);
    } else {
      while (n && n !== ancestor) {
        x += n.offsetLeft || 0;
        y += n.offsetTop  || 0;
        n  = n.offsetParent;
        if (n) {
          cs = (getComputedStyle ? getComputedStyle(n, 0)
                     : n.currentStyle).position;
          if (cs === "relative" || cs === "absolute") {
            break;
          }
        }
      }
    }
  } else {
    while (n && n !== ancestor) {
      x += n.offsetLeft || 0;
      y += n.offsetTop  || 0;
      n  = n.offsetParent;
    }
  }
  return { x: x, y: y, w: w, h: h };
}
function uucsstostatic(node) {
  node.style.position = "static";
  return node;
}
function uucsstoabsolute(node) {
  var ns = node.style,
    rect = uucssrect(node),
    box = uucssbox(node, false, 0x4);
  ns.position = "absolute";
  ns.left = (rect.x - box.margin.left) + "px";
  ns.top  = (rect.y - box.margin.top)  + "px";
  return node;
}
function uucsstorelative(node) {
  var ns = node.style, cs = uu.css(node);
  ns.position = "relative";
  ns.left = cs.left;
  ns.top  = cs.top;
  return node;
}
})(this, this.document, uu, this.getComputedStyle);
uu.Class.SVGDrag || (function(doc, uu) {
uu.Class("SVGDrag", {
  init:           draginit,
  fin:            dragfin,
  handleEvent:    dragHandleEvent
});
var _ie678 = uu.ie && !uu.ver.jit,
  _moveup = uu.ver.touch ? "touchmove+,touchend+"
             : "mousemove+,mouseup+";
function draginit(node, grip, option) {
  grip = grip || node;
  this.option = uu.arg(option, { tripletap: true, shim: 0 });
  this.node = node;
  this.grip = grip;
  grip.style.cursor = "move";
  uu.event(grip, uu.ver.touch ? "touchstart,gesturestart"
                : "mousedown", this)
  uu.mousewheel(node, this);
}
function dragfin() {
  uu.unbind(doc, "touchmove+,touchend+", this);
  uu.unbind(doc, "gesturechange+,gestureend+", this);
  uu.unbind(_ie678 ? this.grip : doc, _moveup, this);
  uu.css.toStatic(this.node);
}
function dragHandleEvent(evt) {
  uu.event.stop(evt);
  uu.ui.svgdragbase(evt, this.node, this.grip, this.option);
  var code = evt.code;
  switch (code) {
  case 1:
    if (evt.gesture) {
      uu.unbind(doc, "touchmove+,touchend+", this);
      uu.bind(doc, "gesturechange+,gestureend+", this);
    } else {
      uu.bind(_ie678 ? this.grip : doc, _moveup, this);
    }
    break;
  case 2:
    if (evt.gesture) {
      uu.unbind(doc, "gesturechange+,gestureend+", this);
      uu.bind(doc, "touchmove+,touchend+", this);
    } else {
      uu.unbind(_ie678 ? this.grip : doc, _moveup, this);
    }
    break;
  }
}
})(document, uu);


