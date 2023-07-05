// 搜索功能需登录使用
var rule = {
    title: 'JustLive',
    host: 'http://live.yj1211.work',
    // homeUrl: '/api/live/getRecommend?page=1&size=20',//网站的首页链接,用于分类获取和推荐获取
    homeUrl: '/api/live/getRecommendByPlatformArea?platform=bilibili&area=舞见&page=1&size=20',//网站的首页链接,用于分类获取和推荐获取
    url: '/api/live/getRecommendByPlatformArea?platform=fyclass&area=fyfilter&page=fypage&size=20', //网站的分类页面链接
    class_name: '斗鱼&虎牙&哔哩&网易',
    class_url: 'douyu&huya&bilibili&cc',
    filterable: 1,
    filter_url: '{{fl.area}}',
    filter: {
        "douyu":[{"key":"area","name":"分区","value":[{"n":"枪火重生手游","v":"枪火重生手游"},{"n":"派对之星","v":"派对之星"},{"n":"火影三国志","v":"火影三国志"},{"n":"网易其它组","v":"网易其它组"},{"n":"萌宠大侦探之迷雾岛","v":"萌宠大侦探之迷雾岛"},{"n":"三国战纪手游","v":"三国战纪手游"},{"n":"染·钟楼谜团","v":"染·钟楼谜团"},{"n":"绝区零","v":"绝区零"},{"n":"魔兽弧光大作战","v":"魔兽弧光大作战"},{"n":"全民泡泡超人","v":"全民泡泡超人"},{"n":"重返CODM","v":"重返CODM"},{"n":"综合手游","v":"综合手游"},{"n":"IP游戏","v":"IP游戏"},{"n":"部落与弯刀手游","v":"部落与弯刀手游"},{"n":"鸣潮","v":"鸣潮"},{"n":"棋牌游戏","v":"棋牌游戏"},{"n":"逗斗火柴人","v":"逗斗火柴人"},{"n":"战争公约","v":"战争公约"},{"n":"奥比岛：梦想国度","v":"奥比岛：梦想国度"},{"n":"九灵神域","v":"九灵神域"},{"n":"龙之谷世界","v":"龙之谷世界"},{"n":"TapTap新游","v":"TapTap新游"},{"n":"永恒轮回：无限","v":"永恒轮回：无限"},{"n":"劲舞团手游","v":"劲舞团手游"},{"n":"神陵武装","v":"神陵武装"},{"n":"黎明之海","v":"黎明之海"},{"n":"环形战争","v":"环形战争"},{"n":"伊瑟·重启日","v":"伊瑟·重启日"},{"n":"浮岛冒险Forager","v":"浮岛冒险Forager"},{"n":"队长小翼：王牌对决","v":"队长小翼：王牌对决"},{"n":"铃兰之剑","v":"铃兰之剑"},{"n":"出发吧麦芬","v":"出发吧麦芬"},{"n":"野蛮人大作战2","v":"野蛮人大作战2"},{"n":"晶核","v":"晶核"},{"n":"大野逐龙","v":"大野逐龙"},{"n":"星火编辑器","v":"星火编辑器"},{"n":"竹马胭脂铺","v":"竹马胭脂铺"},{"n":"全面憨憨战争模拟器","v":"全面憨憨战争模拟器"},{"n":"最佳11人-冠军球会","v":"最佳11人-冠军球会"},{"n":"空之要塞：启航","v":"空之要塞：启航"},{"n":"极无双2","v":"极无双2"},{"n":"鲤 重制版","v":"鲤 重制版"},{"n":"我叫MT：归来","v":"我叫MT：归来"},{"n":"冰汽时代手游","v":"冰汽时代手游"},{"n":"射雕","v":"射雕"},{"n":"王者万象棋","v":"王者万象棋"},{"n":"代号破晓","v":"代号破晓"},{"n":"赛尔计划","v":"赛尔计划"},{"n":"羊了个羊","v":"羊了个羊"},{"n":"列王之剑","v":"列王之剑"},{"n":"小小蚁国","v":"小小蚁国"},{"n":"跃迁旅人","v":"跃迁旅人"},{"n":"SLG综合","v":"SLG综合"},{"n":"战火与永恒","v":"战火与永恒"},{"n":"代号：伙伴","v":"代号：伙伴"},{"n":"天使之战","v":"天使之战"},{"n":"海岛连萌","v":"海岛连萌"},{"n":"全明星街球派对","v":"全明星街球派对"},{"n":"合金弹头：觉醒","v":"合金弹头：觉醒"},{"n":"弹弹堂大冒险","v":"弹弹堂大冒险"},{"n":"三国诛将录","v":"三国诛将录"},{"n":"劲乐幻想","v":"劲乐幻想"},{"n":"白荆回廊","v":"白荆回廊"},{"n":"战地无疆","v":"战地无疆"},{"n":"三国志战棋版","v":"三国志战棋版"},{"n":"一拳超人：世界","v":"一拳超人：世界"},{"n":"鹅鸭杀手游","v":"鹅鸭杀手游"},{"n":"忍者龟：归来","v":"忍者龟：归来"},{"n":"太空行动","v":"太空行动"},{"n":"天龙八部2：飞龙战天","v":"天龙八部2：飞龙战天"},{"n":"王者传奇","v":"王者传奇"}]}],
        "huya":[{"key":"area","name":"分区","value":[{"n":"一起看","v":"一起看"},{"n":"新剑侠情缘","v":"新剑侠情缘"},{"n":"FIFA Online系列","v":"FIFA Online系列"},{"n":"战舰世界","v":"战舰世界"},{"n":"九阴真经","v":"九阴真经"},{"n":"真·三国无双OL","v":"真·三国无双OL"},{"n":"战争雷霆","v":"战争雷霆"},{"n":"轩辕传奇","v":"轩辕传奇"},{"n":"古剑奇谭OL","v":"古剑奇谭OL"},{"n":"完美世界：诸神之战","v":"完美世界：诸神之战"},{"n":"天涯明月刀","v":"天涯明月刀"},{"n":"创世战车","v":"创世战车"},{"n":"完美端游系列","v":"完美端游系列"},{"n":"激战2","v":"激战2"},{"n":"荒野行动PC版","v":"荒野行动PC版"},{"n":"铁甲雄兵","v":"铁甲雄兵"},{"n":"远征Online梦想版","v":"远征Online梦想版"},{"n":"奇迹世界2","v":"奇迹世界2"},{"n":"热血江湖2","v":"热血江湖2"},{"n":"劲舞团","v":"劲舞团"},{"n":"QQ幻想","v":"QQ幻想"},{"n":"战意","v":"战意"},{"n":"反恐行动online","v":"反恐行动online"},{"n":"使命召唤：战区","v":"使命召唤：战区"},{"n":"蜀山：初章","v":"蜀山：初章"},{"n":"天谕","v":"天谕"},{"n":"造梦西游OL","v":"造梦西游OL"},{"n":"天书奇谈","v":"天书奇谈"},{"n":"命运2","v":"命运2"},{"n":"圣斗士星矢ol","v":"圣斗士星矢ol"},{"n":"霸刀群侠传online","v":"霸刀群侠传online"},{"n":"自在西游","v":"自在西游"},{"n":"千古风流","v":"千古风流"},{"n":"征途2","v":"征途2"},{"n":"极光世界 弑神传","v":"极光世界 弑神传"},{"n":"权力的游戏 凛冬将至 页游","v":"权力的游戏 凛冬将至 页游"},{"n":"斗破苍穹","v":"斗破苍穹"},{"n":"洛奇英雄传","v":"洛奇英雄传"},{"n":"蜀门","v":"蜀门"},{"n":"鹿鼎记","v":"鹿鼎记"},{"n":"大话西游2","v":"大话西游2"},{"n":"诺亚传说","v":"诺亚传说"},{"n":"赛尔号","v":"赛尔号"},{"n":"起凡：群雄逐鹿HD","v":"起凡：群雄逐鹿HD"},{"n":"释厄英雄","v":"释厄英雄"},{"n":"超激斗梦境","v":"超激斗梦境"},{"n":"麻辣江湖Online","v":"麻辣江湖Online"},{"n":"QQ幻想世界","v":"QQ幻想世界"},{"n":"成吉思汗怀旧版","v":"成吉思汗怀旧版"},{"n":"梦幻诛仙2","v":"梦幻诛仙2"},{"n":"QQ炫舞","v":"QQ炫舞"},{"n":"赤壁","v":"赤壁"},{"n":"天命西游","v":"天命西游"},{"n":"成吉思汗3","v":"成吉思汗3"},{"n":"全球使命3","v":"全球使命3"},{"n":"醉红楼","v":"醉红楼"},{"n":"永久基地","v":"永久基地"},{"n":"黑色沙漠","v":"黑色沙漠"},{"n":"西游3","v":"西游3"},{"n":"使命召唤：现代战争","v":"使命召唤：现代战争"},{"n":"大航海时代OL","v":"大航海时代OL"},{"n":"数码精灵Online","v":"数码精灵Online"},{"n":"云端王国","v":"云端王国"},{"n":"堡垒之夜","v":"堡垒之夜"},{"n":"飞龙在天传奇","v":"飞龙在天传奇"},{"n":"坦克大战","v":"坦克大战"},{"n":"倚天Ⅱ","v":"倚天Ⅱ"},{"n":"风云龙战天下","v":"风云龙战天下"},{"n":"龙武","v":"龙武"},{"n":"笑傲江湖","v":"笑傲江湖"},{"n":"The Finals","v":"The Finals"},{"n":"坠星大陆","v":"坠星大陆"},{"n":"疾风之刃","v":"疾风之刃"},{"n":"街头篮球","v":"街头篮球"},{"n":"阿克拉什：传承","v":"阿克拉什：传承"},{"n":"夺宝传世","v":"夺宝传世"},{"n":"征程","v":"征程"},{"n":"九天神话","v":"九天神话"},{"n":"名将三国","v":"名将三国"},{"n":"QQ音速","v":"QQ音速"},{"n":"北地物语2","v":"北地物语2"},{"n":"无限法则","v":"无限法则"},{"n":"超击突破","v":"超击突破"},{"n":"奇迹：传奇","v":"奇迹：传奇"},{"n":"使命召唤：黑色行动4","v":"使命召唤：黑色行动4"},{"n":"新武林群侠传","v":"新武林群侠传"},{"n":"新水浒Q传","v":"新水浒Q传"},{"n":"人类必须反击","v":"人类必须反击"},{"n":"六界仙尊","v":"六界仙尊"},{"n":"最强军团","v":"最强军团"},{"n":"龙与地下城：秘影历代记HD","v":"龙与地下城：秘影历代记HD"},{"n":"仙剑奇侠传6","v":"仙剑奇侠传6"},{"n":"孤岛危机","v":"孤岛危机"}]}],
        "bilibili":[{"key":"area","name":"分区","value":[{"n":"影之诗","v":"影之诗"},{"n":"明日之后","v":"明日之后"},{"n":"部落冲突:皇室战争","v":"部落冲突:皇室战争"},{"n":"奥比岛手游","v":"奥比岛手游"},{"n":"弹弹堂","v":"弹弹堂"},{"n":"盾之勇者成名录：浪潮","v":"盾之勇者成名录：浪潮"},{"n":"雀姬","v":"雀姬"},{"n":"公主连结Re:Dive","v":"公主连结Re:Dive"},{"n":"DNF手游","v":"DNF手游"},{"n":"FIFA足球世界","v":"FIFA足球世界"},{"n":"BanG Dream","v":"BanG Dream"},{"n":"荒野乱斗","v":"荒野乱斗"},{"n":"CF手游","v":"CF手游"},{"n":"战双帕弥什","v":"战双帕弥什"},{"n":"天涯明月刀手游","v":"天涯明月刀手游"},{"n":"解密游戏","v":"解密游戏"},{"n":"恋爱养成游戏","v":"恋爱养成游戏"},{"n":"暗黑破坏神：不朽","v":"暗黑破坏神：不朽"}]}],
        "cc":[{"key":"area","name":"分区","value":[{"n":"星秀","v":"星秀"},{"n":"二次元","v":"二次元"},{"n":"风华正茂","v":"风华正茂"},{"n":"正能量","v":"正能量"},{"n":"古风国色","v":"古风国色"},{"n":"巨好看","v":"巨好看"},{"n":"语音","v":"语音"},{"n":"我的世界","v":"我的世界"},{"n":"实况足球","v":"实况足球"},{"n":"炉石传说","v":"炉石传说"},{"n":"风暴英雄","v":"风暴英雄"},{"n":"守望先锋","v":"守望先锋"},{"n":"暴雪经典","v":"暴雪经典"},{"n":"主机单机","v":"主机单机"},{"n":"影之诗","v":"影之诗"},{"n":"梦幻西游手游","v":"梦幻西游手游"},{"n":"倩女幽魂手游","v":"倩女幽魂手游"},{"n":"蛋仔派对","v":"蛋仔派对"},{"n":"明日之后","v":"明日之后"},{"n":"阴阳师","v":"阴阳师"},{"n":"大话西游手游","v":"大话西游手游"},{"n":"第五人格","v":"第五人格"},{"n":"率土之滨","v":"率土之滨"},{"n":"荒野行动","v":"荒野行动"},{"n":"大话西游：归来","v":"大话西游：归来"},{"n":"神都夜行录","v":"神都夜行录"},{"n":"梦幻西游三维版","v":"梦幻西游三维版"},{"n":"决战！平安京","v":"决战！平安京"},{"n":"天谕手游","v":"天谕手游"},{"n":"大唐无双手游","v":"大唐无双手游"},{"n":"光·遇","v":"光·遇"},{"n":"哈利波特：魔法觉醒","v":"哈利波特：魔法觉醒"},{"n":"暗黑破坏神:不朽","v":"暗黑破坏神:不朽"},{"n":"综合手游","v":"综合手游"},{"n":"超凡先锋","v":"超凡先锋"},{"n":"梦幻西游网页版","v":"梦幻西游网页版"},{"n":"乱斗西游2","v":"乱斗西游2"},{"n":"《天下》手游","v":"《天下》手游"},{"n":"劲舞团","v":"劲舞团"},{"n":"光明大陆","v":"光明大陆"},{"n":"镇魔曲手游","v":"镇魔曲手游"},{"n":"三少爷的剑","v":"三少爷的剑"},{"n":"迷雾世界","v":"迷雾世界"},{"n":"终结战场","v":"终结战场"},{"n":"永远的7日之都","v":"永远的7日之都"},{"n":"狼人杀","v":"狼人杀"},{"n":"魂之轨迹","v":"魂之轨迹"},{"n":"三国如龙传","v":"三国如龙传"},{"n":"量子特攻","v":"量子特攻"},{"n":"非人学园","v":"非人学园"},{"n":"堡垒前线:破坏与创造","v":"堡垒前线:破坏与创造"},{"n":"战争怒吼","v":"战争怒吼"},{"n":"猎魂觉醒","v":"猎魂觉醒"},{"n":"终结战场PC版","v":"终结战场PC版"},{"n":"轩辕剑龙舞云山","v":"轩辕剑龙舞云山"},{"n":"实况：王者集结","v":"实况：王者集结"},{"n":"机动都市阿尔法","v":"机动都市阿尔法"},{"n":"权力与纷争","v":"权力与纷争"},{"n":"花与剑","v":"花与剑"},{"n":"流星群侠传","v":"流星群侠传"},{"n":"猫和老鼠","v":"猫和老鼠"},{"n":"游戏王:决斗链接","v":"游戏王:决斗链接"},{"n":"漫威超级战争","v":"漫威超级战争"},{"n":"遇见逆水寒","v":"遇见逆水寒"},{"n":"阴阳师：百闻牌","v":"阴阳师：百闻牌"},{"n":"青璃","v":"青璃"},{"n":"阴阳师：妖怪屋","v":"阴阳师：妖怪屋"},{"n":"宝可梦大探险","v":"宝可梦大探险"},{"n":"重装上阵","v":"重装上阵"},{"n":"猎手之王","v":"猎手之王"},{"n":"第九所","v":"第九所"},{"n":"风云岛行动","v":"风云岛行动"},{"n":"一起优诺","v":"一起优诺"},{"n":"隐世录","v":"隐世录"},{"n":"王牌竞速","v":"王牌竞速"},{"n":"洪荒文明","v":"洪荒文明"}]}]
    },
    filter_def:{
        douyu:{area:'原创IP'},
        huya:{area:'一起看'},
        bilibili:{area:'影音馆'},
        cc:{area:'星秀'}
    },
    // detailUrl: '/index/liveRoom?platform=fyclass&roomId=fyid',//二级详情拼接链接(json格式用)
    detailUrl: '/api/live/getRoomInfo?uid=&platform=fyclass&roomId=fyid',//二级详情拼接链接(json格式用)
    searchUrl: '/api/live/search?platform=all&keyWords=**&isLive=0',
    // searchable: 2,
    searchable: 0,
    quickSearch: 0,
    headers: {
        'User-Agent': 'MOBILE_UA'
    },
    timeout: 5000,
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: '*',
    一级: 'json:data;roomName;roomPic;ownerName;roomId',
    // 二级: 'js:var d=[];var jo=JSON.parse(request(input)).data;VOD={vod_id:jo.roomId,vod_name:jo.roomName,vod_pic:jo.roomPic,type_name:jo.platForm.replace("huya","虎牙").replace("douyu","斗鱼").replace("cc","网易CC").replace("bilibili","哔哩哔哩")+"."+jo.categoryName,vod_content:"🏷分区："+jo.platForm.replace("huya","虎牙").replace("douyu","斗鱼").replace("cc","网易CC").replace("bilibili","哔哩哔哩")+"·"+jo.categoryName+" 🏷UP主："+jo.ownerName+" 🏷人气："+jo.online+(jo.isLive===1?" 🏷状态：正在直播":"状态：未开播")};var playurl=JSON.parse(request("http://live.yj1211.work/api/live/getRealUrl?platform="+jo.platForm+"&roomId="+jo.roomId)).data;var name={"OD":"原画","FD":"流畅","LD":"标清","SD":"高清","HD":"超清","2K":"2K","4K":"4K","FHD":"全高清","XLD":"极速","SQ":"普通音质","HQ":"高音质"};Object.keys(playurl).forEach(function(key){if(!/ayyuid|to/.test(key)){d.push({title:name[key],url:playurl[key]})}});VOD.vod_play_from="选择画质";VOD.vod_play_url=d.map(function(it){return it.title+"$"+it.url}).join("#");setResult(d)',
    二级: 'js:var d=[];input=/platform=&/.test(input)?input.replace("platform=","platform=bilibili"):input;var jo=JSON.parse(request(input)).data;VOD={vod_id:jo.roomId,vod_name:jo.roomName,vod_pic:jo.roomPic,type_name:jo.platForm.replace("huya","虎牙").replace("douyu","斗鱼").replace("cc","网易CC").replace("bilibili","哔哩哔哩")+"."+jo.categoryName,vod_content:"🏷分区："+jo.platForm.replace("huya","虎牙").replace("douyu","斗鱼").replace("cc","网易CC").replace("bilibili","哔哩哔哩")+"·"+jo.categoryName+" 🏷UP主："+jo.ownerName+" 🏷人气："+jo.online+(jo.isLive===1?" 🏷状态：正在直播":"状态：未开播")};var playurl=JSON.parse(request("http://live.yj1211.work/api/live/getRealUrl?platform="+jo.platForm+"&roomId="+jo.roomId)).data;var name={"OD":"原画","FD":"流畅","LD":"标清","SD":"高清","HD":"超清","2K":"2K","4K":"4K","FHD":"全高清","XLD":"极速","SQ":"普通音质","HQ":"高音质"};Object.keys(playurl).forEach(function(key){if(!/ayyuid|to/.test(key)){d.push({title:name[key],url:playurl[key]})}});VOD.vod_play_from="选择画质";VOD.vod_play_url=d.map(function(it){return it.title+"$"+it.url}).join("#");setResult(d)',
    搜索: '*',
}
