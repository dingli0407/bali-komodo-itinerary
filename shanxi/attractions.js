(() => {
  const commons = 'Wikimedia Commons';
  const attractions = [
    { id:'yinxu', day:'D2', name:'殷墟', era:'商代', intro:'晚商都城遗址与甲骨文发现地，是理解中国早期国家、王权与文字体系的第一站。', highlights:['殷墟博物馆的新馆叙事','宫殿宗庙区与夯土基址','甲骨、青铜器与王陵体系'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Exterior%2C_Yinxu_Museum_20241002-B.jpg/1280px-Exterior%2C_Yinxu_Museum_20241002-B.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Exterior,_Yinxu_Museum_20241002-B.jpg' },
    { id:'writing-museum', day:'D2', name:'中国文字博物馆', era:'文字专题博物馆', intro:'以甲骨文为起点梳理汉字形体、书写材料与传播方式，适合孩子建立直观的文字演变线索。', highlights:['甲骨文字形与占卜过程','金文、简牍到印刷术','用熟悉汉字寻找古文字原形'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/20260403_National_Museum_of_Chinese_Writing_02.jpg/1280px-20260403_National_Museum_of_Chinese_Writing_02.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:20260403_National_Museum_of_Chinese_Writing_02.jpg' },
    { id:'yuhuang', day:'D6', name:'玉皇庙', era:'元代彩塑', intro:'府城玉皇庙以二十八宿彩塑闻名，星宿被塑造成性格鲜明的人物，是晋东南彩塑的高峰。', highlights:['二十八宿的面容与动态','元代雕塑的世俗化表达','小空间内的星宿秩序'], image:'https://upload.wikimedia.org/wikipedia/commons/9/9c/Fresco%2C_Jincheng_Museum_3.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Fresco,_Jincheng_Museum_3.jpg' },
    { id:'qinglian', day:'D6', name:'青莲寺', era:'唐宋古建与彩塑', intro:'寺院分上下两院，依山临丹河而建，保留唐代彩塑与多座宋金木构，是建筑、雕塑与山水共同构成的遗产。', highlights:['下寺六尊唐代彩塑','宋代大雄宝殿与深远出檐','古柏、银杏与山寺环境'], image:'https://www.jcbwg.cn/qls/qlstpxs/202501/W020250110345078453703_ORIGIN.png', source:'青莲寺古建艺术博物馆', sourceUrl:'https://www.jcbwg.cn/qls/' },
    { id:'kaihua', day:'D7', name:'开化寺', era:'北宋壁画', intro:'大雄宝殿保存北宋元祐年间壁画，以佛传与经变故事组成连续画面，是少见的宋代寺观壁画现场。', highlights:['大雄宝殿宋代壁画','人物服饰与市井生活细节','木构、壁画的原境关系'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/202607_Kaihua_Temple_02.jpg/1280px-202607_Kaihua_Temple_02.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:202607_Kaihua_Temple_02.jpg' },
    { id:'tiefosi', day:'D7', name:'铁佛寺', era:'明代彩塑', intro:'正殿环列二十四诸天彩塑，以夸张表情、华丽冠饰和强烈动势形成极具戏剧性的神祇群像。', highlights:['二十四诸天的表情与手势','散脂大将等游戏美术原型','木骨、铁线与泥塑工艺'], image:'https://www.sxgp.gov.cn/xwzx_358/gptt_359/202504/W020250425592168746015.jpg', source:'高平市人民政府', sourceUrl:'https://www.sxgp.gov.cn/xwzx_358/gptt_359/202504/t20250425_2134665.shtml' },
    { id:'chongming', day:'D7', name:'崇明寺', era:'北宋木构', intro:'中佛殿创建于北宋早期，保留浓厚唐风，最特别的是以两段短材对接承担受力的“断梁”结构。', highlights:['全国罕见的断梁结构','粗大斗栱与深远出檐','无内柱空间与宋构唐制'], image:'https://www.sxgp.gov.cn/zjgp/fjms_425/202511/W020251128424036541904.jpg', source:'高平市人民政府', sourceUrl:'https://www.sxgp.gov.cn/zjgp/fjms_425/202511/t20251128_2291192.shtml' },
    { id:'faxing', day:'D8', name:'法兴寺', era:'唐塔宋塑', intro:'以唐代燃灯塔、宋代圆觉彩塑和舍利塔并置著称，能在一座山寺里连续观察唐宋艺术的变化。', highlights:['圆觉殿十二圆觉像','唐代燃灯塔与石构细节','慈林山上的寺院格局'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Faxing_Temple_Zhangzi.jpg/1280px-Faxing_Temple_Zhangzi.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Faxing_Temple_Zhangzi.jpg' },
    { id:'chongqing', day:'D8', name:'崇庆寺', era:'北宋彩塑', intro:'大士殿以北宋十八罗汉和彩塑群闻名，人物体态、神情与衣纹都更接近真实的人间形象。', highlights:['十八罗汉的个性化神态','菩萨像的温润气质','宋代殿宇与彩塑原境'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/%E5%B4%87%E5%BA%86%E5%AF%BA%E5%8D%83%E4%BD%9B%E6%AE%BF.jpg/1280px-%E5%B4%87%E5%BA%86%E5%AF%BA%E5%8D%83%E4%BD%9B%E6%AE%BF.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:崇庆寺千佛殿.jpg' },
    { id:'guanyintang', day:'D8', name:'观音堂', era:'明代悬塑', intro:'狭小殿堂内布满五百余尊彩塑与悬塑，佛、道、儒人物和楼阁云气层层展开，像一座立体舞台。', highlights:['满堂悬塑的空间纵深','十八罗汉与二十四诸天','三教合流的图像世界'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Guanyin_Hall%2C_Guanyin_Temple_%28Mount_Zhao%29_2021121902.jpg/1280px-Guanyin_Hall%2C_Guanyin_Temple_%28Mount_Zhao%29_2021121902.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Guanyin_Hall,_Guanyin_Temple_(Mount_Zhao)_2021121902.jpg' },
    { id:'shanxi-museum', day:'D9', name:'山西博物院', era:'通史博物馆', intro:'用一座馆建立山西文明时间轴，青铜、北朝佛教艺术、晋商与戏曲展陈能为后续古建实地参观打底。', highlights:['晋侯墓地青铜器','北朝佛教造像','建筑模型与山西古建线索'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Shanxi_Museum_2025.jpg/1280px-Shanxi_Museum_2025.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Shanxi_Museum_2025.jpg' },
    { id:'jinci', day:'D10', name:'晋祠', era:'宋代祠庙建筑', intro:'以圣母殿、鱼沼飞梁和古泉木共同构成中国祠庙园林的经典，建筑、雕塑与水系不可分开看。', highlights:['圣母殿与宋代侍女像','十字形鱼沼飞梁','难老泉与古树水系'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/%E6%99%B4%E5%A4%A9%E4%B8%8B%E7%9A%84%E6%99%8B%E7%A5%A0%E5%9C%A3%E6%AF%8D%E6%AE%BF.jpg/1280px-%E6%99%B4%E5%A4%A9%E4%B8%8B%E7%9A%84%E6%99%8B%E7%A5%A0%E5%9C%A3%E6%AF%8D%E6%AE%BF.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:晴天下的晋祠圣母殿.jpg' },
    { id:'tianlongshan', day:'D10 备选', name:'天龙山石窟', era:'东魏至唐', intro:'太原地区最重要的石窟群，唐代造像优美但历史上流失严重；与云冈相比更适合观察北齐至隋唐的风格转变。', highlights:['北齐至唐的造像序列','第九窟大佛与山崖空间','流失佛首与数字复原故事'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Taiyuan_tianlongshanshiku.JPG/1280px-Taiyuan_tianlongshanshiku.JPG', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Taiyuan_tianlongshanshiku.JPG' },
    { id:'nanchan', day:'D11', name:'南禅寺', era:'唐建中三年（782）', intro:'大佛殿是中国现存最早的唐代木构之一，尺度不大，却把唐代建筑的简洁、舒展与结构逻辑保存得极其清楚。', highlights:['低缓屋面与深远出檐','硕大斗栱和简练梁架','殿内唐代彩塑群'], image:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Nanchan_Temple_1.JPG?width=1280', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Nanchan_Temple_1.JPG' },
    { id:'foguang', day:'D11', name:'佛光寺', era:'唐大中十一年（857）', intro:'东大殿以唐代木构、彩塑、壁画和题记“四绝”著称，是理解中国木构建筑史最重要的现场之一。', highlights:['东大殿宏阔的七间体量','唐代斗栱与梁架','彩塑、壁画和墨书题记'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/%E4%B8%AD%E5%9C%8B%E5%B1%B1%E8%A5%BF%E4%BA%94%E5%8F%B0%E7%B8%A3%E4%BD%9B%E5%85%89%E5%AF%BAB26.jpg/1280px-%E4%B8%AD%E5%9C%8B%E5%B1%B1%E8%A5%BF%E4%BA%94%E5%8F%B0%E7%B8%A3%E4%BD%9B%E5%85%89%E5%AF%BAB26.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/Category:Foguang_Temple' },
    { id:'xiantong', day:'D12', name:'显通寺', era:'五台山核心寺院', intro:'台怀镇规模最大的汉传佛教寺院之一，院落纵深长，能连续看到木殿、砖殿与铜殿等不同材料。', highlights:['无梁殿的砖券空间','铜殿与铜塔','中轴七进院落'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Xiantong_Temple2.JPG/1280px-Xiantong_Temple2.JPG', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Xiantong_Temple2.JPG' },
    { id:'tayuan', day:'D12', name:'塔院寺', era:'明代大白塔', intro:'以高耸的大白塔构成台怀镇最醒目的地标，也是从远处识别五台山寺院群空间关系的中心点。', highlights:['大白塔的城市地标性','转塔与信仰仪式','与显通寺相邻的空间关系'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/%E4%BA%94%E5%8F%B0%E5%B1%B1%E5%A1%94%E9%99%A2%E5%AF%BA.jpg/1280px-%E4%BA%94%E5%8F%B0%E5%B1%B1%E5%A1%94%E9%99%A2%E5%AF%BA.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:五台山塔院寺.jpg' },
    { id:'pusading', day:'D12', name:'菩萨顶', era:'藏传佛教寺院', intro:'寺院位于灵鹫峰顶，以黄琉璃瓦、陡长台阶和藏传佛教陈设形成与台怀镇其他寺院不同的气质。', highlights:['一百零八级台阶与俯瞰视角','黄瓦屋顶和皇家气象','汉藏建筑与信仰交融'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Pusading.jpg/1280px-Pusading.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Pusading.jpg' },
    { id:'yingxian', day:'D13', name:'应县木塔', era:'辽清宁二年（1056）', intro:'佛宫寺释迦塔是世界著名的纯木楼阁式高塔，外观五层、内部结构层次更丰富，以复杂斗栱抵御千年风震。', highlights:['五层外观与多层暗层','种类繁多的斗栱群','塔内佛像与辽代空间'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Pagoda_of_Fogong_Temple_at_Dust.jpg/1280px-Pagoda_of_Fogong_Temple_at_Dust.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Pagoda_of_Fogong_Temple_at_Dust.jpg' },
    { id:'xuankong', day:'D13', name:'悬空寺', era:'峭壁寺观', intro:'寺院贴附恒山峭壁展开，用横梁、立柱与岩体共同组织狭窄空间，远观整体关系比单看“悬”字更重要。', highlights:['建筑与岩壁的尺度对比','层层栈道和狭窄院落','儒释道共祀格局'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Hangingtemple20190929.jpg/1280px-Hangingtemple20190929.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Hangingtemple20190929.jpg' },
    { id:'yungang', day:'D14', name:'云冈石窟', era:'北魏皇家石窟', intro:'五世纪北魏王朝营造的大型石窟群，造像从犍陀罗与中亚风格逐渐走向汉化，是本次石窟线的绝对核心。', highlights:['昙曜五窟的帝王巨像','第六窟密集叙事雕刻','早中晚期风格变化'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/61292-Yungang-Grottoes_%2828498548881%29.jpg/1280px-61292-Yungang-Grottoes_%2828498548881%29.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:61292-Yungang-Grottoes_(28498548881).jpg' },
    { id:'huayan', day:'D15', name:'华严寺', era:'辽金寺院', intro:'大雄宝殿与薄伽教藏殿构成大同辽金佛教艺术核心，建筑体量雄浑，殿内彩塑与藏经壁藏尤其珍贵。', highlights:['辽代薄伽教藏殿','合掌露齿菩萨彩塑','金代大雄宝殿的宏大尺度'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Datong_Huayan_Si_2013.08.29_08-54-08.jpg/1280px-Datong_Huayan_Si_2013.08.29_08-54-08.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Datong_Huayan_Si_2013.08.29_08-54-08.jpg' },
    { id:'shanhua', day:'D15', name:'善化寺', era:'辽金寺院', intro:'轴线完整、院落开阔，是观察辽金大木构群和寺院整体布局的优秀现场，游览气氛也比热门景点安静。', highlights:['三圣殿与大雄宝殿','保存完整的中轴院落','金代彩塑与梁架结构'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Datong_Shanhua_Si_2013.08.29_12-28-45.jpg/1280px-Datong_Shanhua_Si_2013.08.29_12-28-45.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Datong_Shanhua_Si_2013.08.29_12-28-45.jpg' },
    { id:'chongfu', day:'D15', name:'崇福寺', era:'金代木构', intro:'朔州城内保存成组金代建筑，弥陀殿体量宏大，殿内塑像、壁画、琉璃和匾额共同构成完整历史现场。', highlights:['金代弥陀殿','殿内壁画与塑像','大同至雁门关之间的辽金承接'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/%E5%B4%87%E7%A6%8F%E5%AF%BA%E5%B1%B1%E9%97%A8.jpg/1280px-%E5%B4%87%E7%A6%8F%E5%AF%BA%E5%B1%B1%E9%97%A8.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:崇福寺山门.jpg' },
    { id:'yanmen', day:'D15', name:'雁门关', era:'长城关隘', intro:'内长城上的重要关隘，价值在于理解山脉、道路与防御体系的关系，不宜只把它当成一座复建城门。', highlights:['关城与山谷通道','长城墙体的地形控制','边塞交通与战争史'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Yanmen_Pass_%2820250712164217%29.jpg/1280px-Yanmen_Pass_%2820250712164217%29.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Yanmen_Pass_(20250712164217).jpg' },
    { id:'guangsheng', day:'D16', name:'广胜寺', era:'元明寺院', intro:'上寺飞虹塔、下寺水神庙壁画与元代戏曲图像各具重量，是建筑、琉璃、壁画三条线交汇的高价值景点。', highlights:['五彩琉璃飞虹塔','水神庙元代壁画','上下寺的山地空间关系'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG/1280px-%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:广胜寺_03.JPG' },
    { id:'taosi', day:'D16', name:'陶寺遗址博物馆', era:'新石器时代晚期', intro:'以陶寺都邑遗址与出土文物讨论早期国家、礼制、观象授时和城市规划，把行程时间轴推进到商代以前。', highlights:['城址、宫殿与墓葬等级','彩绘龙盘和玉礼器','观象台与早期时间制度'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Copper_frog._Taosi._%E9%99%B6%E5%AF%BA%E9%81%97%E5%9D%80%E5%87%BA%E5%9C%9F%E9%93%9C%E8%9F%BE%E8%9C%8D.jpg/1280px-Copper_frog._Taosi._%E9%99%B6%E5%AF%BA%E9%81%97%E5%9D%80%E5%87%BA%E5%9C%9F%E9%93%9C%E8%9F%BE%E8%9C%8D.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Copper_frog._Taosi._陶寺遗址出土铜蟾蜍.jpg' },
    { id:'hukou', day:'D17', name:'壶口瀑布', era:'黄河峡谷地貌', intro:'黄河被两岸石壁骤然收束，形成“千里黄河一壶收”的巨大水势；现场重点是水量、声浪和峡谷尺度。', highlights:['河面骤缩形成的主瀑','不同水量下的颜色与雾气','湿滑边缘和儿童安全距离'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Hukou_Waterfall.jpg/1280px-Hukou_Waterfall.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:Hukou_Waterfall.jpg' },
    { id:'feiyunlou', day:'D17 / D18 备选', name:'飞云楼', era:'明代楼阁', intro:'万荣东岳庙内的纯木楼阁，外观三层、内部结构层次繁复，密集斗栱像一团向上生长的木构云气。', highlights:['层叠斗栱与翼角','外三层内多层的结构','从近看节点到远看轮廓'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/%E9%A3%9E%E4%BA%91%E6%A5%BC%E5%8F%B3%E4%BE%A7%E5%BA%99%E5%A2%99%E5%A4%96.jpg/1280px-%E9%A3%9E%E4%BA%91%E6%A5%BC%E5%8F%B3%E4%BE%A7%E5%BA%99%E5%A2%99%E5%A4%96.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:飞云楼右侧庙墙外.jpg' },
    { id:'guandimiao', day:'D18', name:'解州关帝庙', era:'明清祭祀建筑群', intro:'规模宏大的关帝祖庙，以中轴院落、崇宁殿和春秋楼展示关羽信仰如何形成国家与民间共享的祭祀空间。', highlights:['崇宁殿的皇家规格','春秋楼悬柱与木构细节','关帝信仰的礼仪轴线'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/20260504_Haizhou_Emperor_Guan_Temple_11.jpg/1280px-20260504_Haizhou_Emperor_Guan_Temple_11.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:20260504_Haizhou_Emperor_Guan_Temple_11.jpg' },
    { id:'saltlake', day:'D18', name:'运城盐湖', era:'盐业与自然景观', intro:'天然盐湖与数千年池盐生产共同塑造运城，既可看季节性色彩，也适合把自然资源与城市历史联系起来。', highlights:['盐池堤埝与广阔水面','季节和微生物带来的色彩','河东盐业对城市发展的影响'], image:'https://upload.wikimedia.org/wikipedia/commons/1/1f/%E8%BF%90%E5%9F%8E%E7%9B%90%E6%B9%96-2010_-_panoramio_-_Li_Meng.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:运城盐湖-2010_-_panoramio_-_Li_Meng.jpg' },
    { id:'yonglegong', day:'D19', name:'永乐宫', era:'元代壁画', intro:'因三门峡水库整体搬迁保存的元代道观，三清殿《朝元图》以近三百位神祇组成宏大的朝会秩序。', highlights:['三清殿《朝元图》','人物线描、服饰与队列秩序','建筑整体搬迁的保护史'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/%E6%97%A0%E6%9E%81%E4%B9%8B%E6%AE%BF.jpg/1280px-%E6%97%A0%E6%9E%81%E4%B9%8B%E6%AE%BF.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:无极之殿.jpg' },
    { id:'guangrenwang', day:'D19', name:'广仁王庙', era:'唐大和五年（831）', intro:'规模极小却极珍贵的唐代道教木构，大殿以朴素体量、舒展屋面与简练结构呈现早期木构气质。', highlights:['现存罕见唐代道教木构','简洁梁架与硕大斗栱','与永乐宫元代壁画形成时代对照'], image:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/%E8%8A%AE%E5%9F%8E%E5%B9%BF%E4%BB%81%E7%8E%8B%E5%BA%992018%EF%BC%882%EF%BC%89.jpg/1280px-%E8%8A%AE%E5%9F%8E%E5%B9%BF%E4%BB%81%E7%8E%8B%E5%BA%992018%EF%BC%882%EF%BC%89.jpg', source:commons, sourceUrl:'https://commons.wikimedia.org/wiki/File:芮城广仁王庙2018（2）.jpg' }
  ];

  const galleryImages = {
    yuhuang: [
      ['https://www.jcbwg.cn/yhm/tpxs/202501/W020250110354651391774_ORIGIN.png', '二十八宿彩塑'],
      ['https://www.jcbwg.cn/yhm/tpxs/202501/W020250110354518363873_ORIGIN.png', '星宿人物细节'],
      ['https://www.jcbwg.cn/yhm/tpxs/202501/W020250110354373332928_ORIGIN.png', '彩塑群像']
    ],
    qinglian: [
      ['https://www.jcbwg.cn/qls/qlstpxs/202501/W020250110345078453703_ORIGIN.png', '青莲寺建筑群'],
      ['https://www.jcbwg.cn/qls/qlstpxs/202501/W020250110345234168833_ORIGIN.png', '古建与山林'],
      ['https://www.jcbwg.cn/qls/qlstpxs/202501/W020250110345389478856_ORIGIN.png', '殿宇细节']
    ],
    tiefosi: [
      ['https://sxgp.gov.cn/xwzx_358/jcdt_363/202412/W020241218581935754379.png', '二十四诸天满堂彩塑'],
      ['https://sxgp.gov.cn/xwzx_358/jcdt_363/202412/W020241218604778625295.png', '诸天造像面部与冠饰'],
      ['https://sxgp.gov.cn/xwzx_358/jcdt_363/202412/W020241218604781692984.png', '彩塑衣纹与动态']
    ],
    guanyintang: [
      ['https://images.china.cn/site1000/2025-01/27/117687827_918d0b01-2131-43b7-9acd-4121159977c6_batchwm.jpg', '观音堂悬塑全景'],
      ['https://images.china.cn/site1000/2025-01/27/117687827_87bd69f0-8d5d-46ff-9987-4b720fcbf4ac_batchwm.jpeg', '明代悬塑群像'],
      ['https://images.china.cn/site1000/2025-01/27/117687827_cf552f9e-8b75-4812-9ad1-f537ca3d9d86_batchwm.jpeg', '人物与楼阁细节']
    ],
    nanchan: [
      ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Nanchan_Temple_1.JPG?width=1280', '南禅寺大佛殿'],
      ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Nanchan_Temple_2.JPG?width=1280', '唐代木构侧影'],
      ['https://commons.wikimedia.org/wiki/Special:Redirect/file/%E6%99%A8%E6%9B%A6%E4%B8%AD%E7%9A%84%E5%8D%97%E7%A6%85%E5%AF%BA.jpg?width=1280', '晨光中的南禅寺']
    ],
    foguang: [
      ['https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/%E4%B8%AD%E5%9C%8B%E5%B1%B1%E8%A5%BF%E4%BA%94%E5%8F%B0%E7%B8%A3%E4%BD%9B%E5%85%89%E5%AF%BAB26.jpg/1280px-%E4%B8%AD%E5%9C%8B%E5%B1%B1%E8%A5%BF%E4%BA%94%E5%8F%B0%E7%B8%A3%E4%BD%9B%E5%85%89%E5%AF%BAB26.jpg', '佛光寺东大殿'],
      ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Foguang_Temple_1.JPG?width=1280', '东大殿与院落'],
      ['https://commons.wikimedia.org/wiki/Special:Redirect/file/Foguang_Temple_10.JPG?width=1280', '唐构细节']
    ],
    xuankong: [
      ['https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Hangingtemple20190929.jpg/1280px-Hangingtemple20190929.jpg', '悬空寺与峭壁'],
      ['https://commons.wikimedia.org/wiki/Special:Redirect/file/20250604_Xuankong_Si_(110136).jpg?width=1280', '寺院全貌'],
      ['https://commons.wikimedia.org/wiki/Special:Redirect/file/20250604_Xuankong_Si_(123737).jpg?width=1280', '栈道与殿阁']
    ],
    yungang: [
      ['https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/61292-Yungang-Grottoes_%2828498548881%29.jpg/1280px-61292-Yungang-Grottoes_%2828498548881%29.jpg', '云冈代表性大佛'],
      ['https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Yungang11_2010.JPG/1280px-Yungang11_2010.JPG', '洞窟造像群'],
      ['https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Yungang_Grottoes_03.2025._4.jpg/1280px-Yungang_Grottoes_03.2025._4.jpg', '石窟立面与山体']
    ],
    guangsheng: [
      ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG/1280px-%E5%B9%BF%E8%83%9C%E5%AF%BA_03.JPG', '飞虹塔'],
      ['https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/%E5%B9%BF%E8%83%9C%E5%AF%BA_01.jpg/1280px-%E5%B9%BF%E8%83%9C%E5%AF%BA_01.jpg', '广胜寺建筑群'],
      ['https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/%E5%B9%BF%E8%83%9C%E5%AF%BA_04.JPG/1280px-%E5%B9%BF%E8%83%9C%E5%AF%BA_04.JPG', '寺院与山地环境']
    ]
  };
  const photosFor = (item) => (galleryImages[item.id] || [[item.image, item.name]])
    .map(([url, caption]) => ({ url, caption }));

  const esc = (value) => String(value).replace(/[&<>"']/g, (char) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  const grid = document.getElementById('attractionGrid');
  const modal = document.getElementById('attractionModal');
  const panel = document.getElementById('attractionPanel');
  if (!grid || !modal || !panel) return;

  grid.innerHTML = attractions.map((item) => `
    <button class="attraction-card" type="button" data-attraction="${item.id}" aria-label="查看${esc(item.name)}简介">
      <img src="${esc(photosFor(item)[0].url)}" alt="${esc(item.name)}" loading="lazy" referrerpolicy="no-referrer" onerror="this.closest('.attraction-card').classList.add('image-missing');this.remove()">
      <span class="attraction-card-copy"><small>${esc(item.day)} · ${esc(item.era)}</small><strong>${esc(item.name)}</strong><em>点击看亮点</em></span>
    </button>`).join('');

  const targets = document.querySelectorAll('.day-main h3, .timeline b, .theme-table td');
  targets.forEach((target) => {
    const found = attractions.filter((item) => target.textContent.includes(item.name));
    if (!found.length) return;
    const tools = document.createElement('span');
    tools.className = 'attraction-inline-tools';
    found.forEach((item) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.dataset.attraction = item.id;
      button.className = 'attraction-inline';
      button.textContent = `看 ${item.name}`;
      tools.appendChild(button);
    });
    target.appendChild(tools);
  });

  let lastFocus = null;
  const close = () => {
    modal.hidden = true;
    document.body.classList.remove('modal-open');
    if (lastFocus) lastFocus.focus();
  };
  const open = (item, trigger) => {
    lastFocus = trigger;
    const photos = photosFor(item);
    panel.innerHTML = `
      <button class="attraction-close" type="button" aria-label="关闭景点简介">×</button>
      <div class="attraction-gallery" aria-label="${esc(item.name)}照片，共${photos.length}张">
        ${photos.map((photo, index) => `<figure class="attraction-photo-wrap">
          <img class="attraction-photo" src="${esc(photo.url)}" alt="${esc(item.name)}：${esc(photo.caption)}" referrerpolicy="no-referrer" ${index ? 'loading="lazy"' : ''}>
          <div class="attraction-photo-fallback">图片暂时无法加载</div>
          <figcaption>${esc(photo.caption)}</figcaption>
        </figure>`).join('')}
      </div>
      <div class="attraction-modal-copy">
        <div class="attraction-meta">${esc(item.day)} · ${esc(item.era)}</div>
        <h2 id="attractionTitle">${esc(item.name)}</h2>
        <p>${esc(item.intro)}</p>
        <h3>现场看什么</h3>
        <ol>${item.highlights.map((text) => `<li>${esc(text)}</li>`).join('')}</ol>
        <a class="attraction-source" target="_blank" rel="noopener" href="${esc(item.sourceUrl)}">来源：${esc(item.source)} ↗</a>
      </div>`;
    panel.querySelectorAll('.attraction-photo').forEach((image) => {
      image.addEventListener('error', () => image.closest('.attraction-photo-wrap').classList.add('image-missing'));
    });
    modal.hidden = false;
    document.body.classList.add('modal-open');
    panel.querySelector('.attraction-close').focus();
  };

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-attraction]');
    if (trigger) {
      const item = attractions.find((entry) => entry.id === trigger.dataset.attraction);
      if (item) open(item, trigger);
      return;
    }
    if (event.target.matches('[data-modal-close], .attraction-close')) close();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) close();
  });
})();
