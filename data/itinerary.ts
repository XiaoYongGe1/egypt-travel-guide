import { ItineraryData } from '../types';

export const itineraryData: ItineraryData = {
  title: "埃及探索之旅",
  subtitle: "2026年4月28日 - 5月5日 | 8天7晚",
  days: [
    {
      day: 1,
      date: "2026.4.28",
      location: "开罗 → 马特鲁",
      hotel: "Hostmark Blue Beach Hotel",
      schedule: [
        {
          time: "06:35",
          activity: "抵达开罗机场",
        },
        {
          time: "08:00 - 12:00",
          activity: "游览吉萨金字塔群和狮身人面像",
          attraction: {
            name: "吉萨金字塔群 & 狮身人面像",
            duration: "4小时",
            ticketPrice: "700埃镑(金字塔区), 胡夫内部900埃镑, 孟卡拉内部220埃镑",
            ticketTip: "学生证可半价!建议提前准备好学生证",
            history: "吉萨金字塔群建于公元前2580-2560年,是古埃及第四王朝三位法老的陵墓。胡夫金字塔原高146.5米,是古代世界七大奇迹中最古老也是唯一尚存的建筑物。卡夫拉金字塔旁边就是著名的狮身人面像,长73米,高20米,据说是按照法老卡夫拉的面容雕刻的。这些金字塔的建造至今仍是个谜,石块之间没有使用任何粘合剂,却严丝合缝。",
            visitTips: [
              "建议游览顺序:北门进 → 胡夫金字塔 → 卡夫拉金字塔 → 孟卡拉金字塔 → 狮身人面像",
              "金字塔包车700埃镑2小时,也可步行或骑骆驼",
              "拍照最佳位置在卡夫拉金字塔前的观景台"
            ]
          }
        },
        {
          time: "12:00 - 13:00",
          activity: "午餐:Khufu's Restaurant",
        },
        {
          time: "13:00 - 18:00",
          activity: "包车前往马特鲁(5小时车程)",
        }
      ],
      restaurants: [
        {
          name: "Khufu's Restaurant",
          cuisine: "埃及菜",
          description: "金字塔观景位餐厅,可以边用餐边欣赏金字塔壮观景色",
          recommendation: "推荐靠窗位置,提前预订"
        }
      ],
      tips: [
        {
          category: "机场办理",
          content: "在机场分两队排队:1队办落地签(35美元,带零钱),1队买电话卡(建议买WE)",
          important: true
        },
        {
          category: "交通",
          content: "买完电话卡当场让工作人员帮忙注册inDrive(需要阿拉伯语音认证)",
          important: true
        },
        {
          category: "包车",
          content: "开罗-马特鲁两日游包车:五座2350元+198接机;七座2750元+198接机"
        }
      ],
      alternatives: [
        {
          title: "金字塔游览备选",
          description: "如果时间紧张,可以只参观金字塔外部,不进入内部,节省时间和门票费用",
          condition: "时间紧张时"
        }
      ],
      expenses: [
        { item: "落地签证", amount: "35", currency: "USD" },
        { item: "吉萨金字塔门票", amount: "700", currency: "EGP", note: "学生证半价" },
        { item: "胡夫金字塔内部", amount: "900", currency: "EGP", note: "可选,学生证半价" },
        { item: "孟卡拉金字塔内部", amount: "220", currency: "EGP", note: "可选,学生证半价" },
        { item: "金字塔包车", amount: "700", currency: "EGP", note: "2小时,可选" }
      ]
    },
    {
      day: 2,
      date: "2026.4.29",
      location: "马特鲁 → 开罗",
      hotel: "Khan DuiDar Inn - Pyramids View Rooftop",
      hotelNote: "住吉萨区,第二天去大埃及博物馆方便",
      schedule: [
        {
          time: "10:00 - 14:00",
          activity: "游览马特鲁海滩",
          attraction: {
            name: "马特鲁海滩群",
            duration: "4小时",
            ticketPrice: "500埃镑(4小时)",
            history: "马特鲁是埃及地中海沿岸最美丽的海滨城市之一。传说克利奥帕特拉七世(埃及艳后)曾在这里沐浴,其中Cleopatra Beach因此得名。这里的海水呈现出令人惊叹的蓝绿色调,沙滩洁白细腻。Lover's Beach因其浪漫的氛围而闻名,Sea Eye则是一个天然的海水浴场。Ageeba海滩和Lagouna海滩同样风景如画,是放松身心的绝佳去处。",
            visitTips: [
              "建议游览顺序:Cleopatra → Lover Beach → Sea Eye → Ageeba → Lagouna",
              "记得带防晒霜、墨镜和泳衣",
              "海滩附近有当地小吃可以品尝"
            ]
          }
        },
        {
          time: "14:00 - 19:00",
          activity: "返回开罗(5小时车程),入住酒店休息"
        }
      ],
      restaurants: [],
      tips: [
        {
          category: "海滩",
          content: "马特鲁海滩水质清澈,适合游泳和拍照,建议穿鲜艳的衣服出片"
        },
        {
          category: "交通",
          content: "返回开罗路程较长,建议准备颈枕和零食"
        }
      ],
      alternatives: [
        {
          title: "海滩选择",
          description: "如果时间有限,可以重点游览Cleopatra Beach和Lover's Beach两个最知名的海滩"
        }
      ],
      expenses: [
        { item: "马特鲁海滩", amount: "500", currency: "EGP", note: "4小时" }
      ]
    },
    {
      day: 3,
      date: "2026.4.30",
      location: "开罗 → 卢克索",
      hotel: "Steigenberger Resort Achti",
      hotelNote: "备选:Iberotel Luxor",
      schedule: [
        {
          time: "09:00 - 12:00",
          activity: "参观大埃及博物馆",
          attraction: {
            name: "大埃及博物馆(GEM)",
            time: "09:00开馆",
            duration: "3小时",
            history: "大埃及博物馆是世界上最大的考古博物馆,占地近50万平方米,距离吉萨金字塔仅2公里。馆内收藏超过10万件文物,最著名的是图坦卡蒙法老的完整陪葬品,包括他标志性的黄金面具。图坦卡蒙是古埃及第十八王朝的法老,9岁登基,19岁神秘去世。1922年英国考古学家霍华德·卡特发现了他几乎完整的陵墓,成为20世纪最伟大的考古发现。博物馆建筑本身也是一件艺术品,设计灵感来自金字塔的几何形状。",
            visitTips: [
              "建议9点开馆时入场,避开人流",
              "重点参观图坦卡蒙展厅",
              "可以请讲解员或租语音导览"
            ]
          }
        },
        {
          time: "13:00 - 17:00",
          activity: "参观洞窟教堂和萨拉丁城堡",
          attraction: {
            name: "洞窟教堂 & 萨拉丁城堡",
            ticketPrice: "萨拉丁城堡550埃镑",
            history: "洞窟教堂(Mokattam Village)位于开罗东部的Mokattam山,是中东最大的教堂之一,建在洞穴内,可容纳2万人。这里被称为'垃圾城',居民以回收垃圾为生,却创造了令人震撼的宗教建筑。\n\n萨拉丁城堡建于1176年,由著名的穆斯林领袖萨拉丁下令修建,用于抵御十字军。城堡内的穆罕默德·阿里清真寺被称为'阿拉伯建筑明珠',建于1830年,采用了奥斯曼土耳其风格。从城堡可以俯瞰整个开罗城,天气好时甚至能看到远处的金字塔。",
            visitTips: [
              "洞窟教堂免费参观,但建议捐款",
              "萨拉丁城堡下午4点后光线最适合拍照",
              "看完萨拉丁城堡可直接包车去机场"
            ]
          }
        },
        {
          time: "19:25 - 20:30",
          activity: "开罗飞往卢克索"
        }
      ],
      restaurants: [],
      tips: [
        {
          category: "交通",
          content: "下午市区包车半天,看完萨拉丁城堡直接送机场",
          important: true
        },
        {
          category: "门票",
          content: "大埃及博物馆门票建议提前在线预订"
        }
      ],
      alternatives: [
        {
          title: "时间紧张方案",
          description: "如果博物馆参观时间过长,可以放弃洞窟教堂,只去萨拉丁城堡"
        }
      ],
      expenses: [
        { item: "萨拉丁城堡", amount: "550", currency: "EGP" }
      ]
    },
    {
      day: 4,
      date: "2026.5.1",
      location: "卢克索",
      schedule: [
        {
          time: "09:30 - 11:30",
          activity: "参观卡纳克神庙",
          attraction: {
            name: "卡纳克神庙",
            duration: "2小时",
            ticketPrice: "600埃镑",
            history: "卡纳克神庙是古埃及规模最大的神庙建筑群,始建于公元前2055年,历经13位法老持续建造长达2000多年。神庙主要供奉阿蒙神(Amon-Ra),是古埃及的太阳神和众神之王。最令人震撼的是多柱厅(Hypostyle Hall),134根巨型石柱排列成16行,其中最高的12根达23米,直径3.5米,需要6个人才能合抱。柱子上雕刻着精美的象形文字和浮雕,讲述着法老与神灵的故事。电影《尼罗河上的惨案》曾在此取景。",
            visitTips: [
              "重点参观多柱厅和圣湖",
              "建议早上去,避开高温",
              "神庙区域很大,穿舒适的鞋子"
            ]
          }
        },
        {
          time: "12:00 - 17:00",
          activity: "午餐后回酒店午睡休息"
        },
        {
          time: "17:30 - 18:30",
          activity: "乘坐三角帆船看尼罗河落日",
          attraction: {
            name: "尼罗河三角帆船",
            duration: "1小时",
            ticketPrice: "酒店预订",
            history: "Felucca(三角帆船)是尼罗河上传统的木制帆船,已经有数千年的历史。在古埃及时期,尼罗河就是埃及文明的命脉,法老们乘船往返于上下游的神庙之间。夕阳西下时,金色的阳光洒在河面上,两岸的棕榈树和远处的沙漠构成一幅壮丽的画卷,这是体验尼罗河之美的最佳方式。",
            visitTips: [
              "通过酒店预订更可靠",
              "带上外套,傍晚河上会有些凉",
              "准备相机,落日时分光线极佳"
            ]
          }
        },
        {
          time: "18:30 - 20:00",
          activity: "夜游卢克索神庙",
          attraction: {
            name: "卢克索神庙",
            duration: "1.5小时",
            ticketPrice: "500埃镑",
            ticketTip: "20:00关门,注意时间",
            history: "卢克索神庙建于公元前1400年左右,由阿蒙霍特普三世和拉美西斯二世建造。与卡纳克神庙不同,卢克索神庙主要用于庆祝欧佩特节(Opet Festival),这是一个庆祝阿蒙神从卡纳克神庙游行到卢克索神庙的年度盛典。神庙入口处是拉美西斯二世的巨型坐像,前方矗立着一座25米高的方尖碑(另一座已被法国运走,现位于巴黎协和广场)。夜晚灯光亮起时,神庙呈现出与白天完全不同的神秘氛围。",
            visitTips: [
              "夜游需单独购票",
              "灯光效果让神庙更加壮观",
              "注意20:00关门时间"
            ]
          }
        },
        {
          time: "21:00",
          activity: "晚餐(简餐)+逛El Souk集市"
        }
      ],
      restaurants: [
        {
          name: "El Souk集市小吃",
          cuisine: "当地小吃",
          description: "卢克索当地集市,可以品尝各种埃及传统小吃"
        }
      ],
      tips: [
        {
          category: "游玩",
          content: "中午天气炎热,建议回酒店休息,避开12:00-17:00的高温时段"
        }
      ],
      alternatives: [
        {
          title: "天气备选",
          description: "如遇大风天气,三角帆船可能取消,可以改为岸边散步拍照"
        }
      ],
      expenses: [
        { item: "卡纳克神庙", amount: "600", currency: "EGP" },
        { item: "卢克索神庙", amount: "500", currency: "EGP" },
        { item: "三角帆船", amount: "待定", currency: "EGP", note: "酒店预订" }
      ]
    },
    {
      day: 5,
      date: "2026.5.2",
      location: "卢克索(西岸)",
      schedule: [
        {
          time: "10:00 - 10:40",
          activity: "坐酒店帆船到西岸,再乘突突车去帝王谷"
        },
        {
          time: "10:40 - 13:00",
          activity: "参观帝王谷",
          attraction: {
            name: "帝王谷",
            duration: "2.5小时",
            ticketPrice: "电子票750埃镑(含所有免费墓),KV9单独220埃镑",
            ticketTip: "必须提前买电子票!只有电子票可以看所有免费墓且可反复进入。收费墓推荐KV9(拉美西斯五世和六世)",
            history: "帝王谷是古埃及新王国时期(公元前1539-1075年)法老和贵族的主要陵墓区,位于尼罗河西岸的沙漠山谷中。古埃及人认为西方是太阳落下的方向,象征着死亡和来世。目前已发现63座墓葬,最著名的是图坦卡蒙墓(KV62)。KV9是拉美西斯五世和六世的合葬墓,墓道长达130米,墙壁上布满了精美的浮雕和彩绘,描绘着《亡灵书》和《冥界之书》的内容,色彩历经3000年依然鲜艳。这里也是希腊罗马时期就已成为旅游景点的地方,墙上还留有古希腊游客的涂鸦。",
            visitTips: [
              "电子票可以反复进出免费墓",
              "KV9墓室壁画最精美,强烈推荐",
              "帝王谷内电瓶车往返20埃镑,推荐乘坐(步行很远)",
              "墓室内禁止拍照(部分墓需额外购票才能拍照)"
            ]
          }
        },
        {
          time: "13:00 - 14:00",
          activity: "午餐"
        },
        {
          time: "14:00 - 16:00",
          activity: "参观哈布城",
          attraction: {
            name: "哈布城(Medinet Habu)",
            duration: "2小时",
            ticketPrice: "220埃镑(实体票)",
            ticketTip: "哈布城必须买实体票!电子票扫码机器有问题",
            history: "哈布城是拉美西斯三世(公元前1186-1155年)的祭庙,是埃及保存最完好的新王国时期神庙之一。神庙的塔门上雕刻着法老打击敌人的场景,内部墙壁详细记录了拉美西斯三世对抗海上民族(Sea Peoples)的战役,这是历史上最早的海战记录之一。神庙后面的宫殿遗址展示了法老的居所,彩色天花板上绘有精美的几何图案。与帝王谷相邻,但游客较少,可以慢慢欣赏。",
            visitTips: [
              "先打车去售票处买实体票,售票处离景点很远",
              "重点看塔门浮雕和彩色天花板",
              "游客较少,适合慢慢拍照"
            ]
          }
        },
        {
          time: "16:00 - 18:30",
          activity: "游船返回酒店,休息看落日"
        },
        {
          time: "19:30",
          activity: "El-Kababgy餐厅晚餐"
        }
      ],
      restaurants: [
        {
          name: "El-Kababgy",
          cuisine: "埃及烤肉",
          description: "卢克索知名烤肉餐厅,当地人和游客都推荐"
        }
      ],
      tips: [
        {
          category: "交通",
          content: "酒店帆船250埃镑/人;东岸-西岸渡船往返30-40埃镑;西岸渡口-帝王谷突突车50埃镑",
          important: true
        },
        {
          category: "门票",
          content: "帝王谷电子票提前购买;哈布城必须实体票",
          important: true
        }
      ],
      alternatives: [
        {
          title: "时间充裕备选",
          description: "如果时间允许,可以增加参观女王神庙(Hatshepsut Temple)和贵族墓",
          condition: "时间充裕时"
        }
      ],
      expenses: [
        { item: "酒店帆船", amount: "250", currency: "EGP", note: "每人" },
        { item: "东西岸渡船", amount: "30-40", currency: "EGP", note: "往返" },
        { item: "渡口-帝王谷突突车", amount: "50", currency: "EGP" },
        { item: "帝王谷电子票", amount: "750", currency: "EGP" },
        { item: "KV9收费墓", amount: "220", currency: "EGP", note: "可选" },
        { item: "帝王谷电瓶车", amount: "20", currency: "EGP", note: "往返" },
        { item: "帝王谷-哈布城打车", amount: "50", currency: "EGP" },
        { item: "哈布城门票", amount: "220", currency: "EGP" }
      ]
    },
    {
      day: 6,
      date: "2026.5.3",
      location: "卢克索 → 赫尔格达",
      hotel: "Pickalbatros Citadel Resort",
      hotelNote: "备选:Kempinski Hotel Soma Bay | 度假酒店,三餐全包",
      schedule: [
        {
          time: "04:30 - 09:30",
          activity: "热气球体验",
          attraction: {
            name: "卢克索热气球",
            duration: "约1小时飞行",
            ticketPrice: "首飞45-70美元,二飞1000埃镑",
            ticketTip: "首飞4:30出发,二飞6:30。贵了就不值,注意比价",
            history: "卢克索是世界上最适合乘坐热气球的地方之一。清晨升空,可以俯瞰尼罗河东岸的卢克索神庙、卡纳克神庙,以及西岸的帝王谷、哈布城和广袤的沙漠。日出时分,金色的阳光洒在古老的遗址上,这种体验无与伦比。热气球的原理很简单:加热空气使其密度降低,从而产生升力。现代热气球最早出现在18世纪,但将其用于旅游观光则是近几十年的事。",
            visitTips: [
              "不坐热气球的可以睡到9:30自然醒",
              "建议穿长裤和运动鞋(降落可能在田野)",
              "带外套,清晨高空较冷",
              "飞行高度和方向取决于风向"
            ]
          }
        },
        {
          time: "10:00 - 14:00",
          activity: "包车前往赫尔格达(4小时)"
        },
        {
          time: "14:00",
          activity: "抵达酒店,进入度假模式"
        },
        {
          time: "15:00 - 18:00",
          activity: "休息放松,沙滩浮潜"
        }
      ],
      restaurants: [],
      tips: [
        {
          category: "交通备选",
          content: "可考虑中途停留丹德拉神庙(2小时);或乘坐White Bus(约9美元/人)",
          important: true
        },
        {
          category: "打车",
          content: "卢克索-赫尔格达打车1000-2500埃镑,提前谈好价格"
        }
      ],
      alternatives: [
        {
          title: "丹德拉神庙",
          description: "丹德拉神庙是供奉哈索尔女神的神庙,由埃及艳后克利奥帕特拉七世完成建造。神庙天花板上的星象图和地下密室非常著名。如果时间允许(停留2小时),非常值得顺路参观",
          condition: "时间充裕且对神庙感兴趣"
        }
      ],
      expenses: [
        { item: "热气球首飞", amount: "45-70", currency: "USD", note: "价格超过就不值" },
        { item: "热气球二飞", amount: "1000", currency: "EGP" },
        { item: "卢克索-赫尔格达包车", amount: "1000-2500", currency: "EGP" }
      ]
    },
    {
      day: 7,
      date: "2026.5.4",
      location: "赫尔格达",
      schedule: [
        {
          time: "全天",
          activity: "红海度假",
          attraction: {
            name: "红海度假区",
            history: "红海是世界上盐度最高的海域之一,也是潜水和浮潜的天堂。这里拥有超过1000种鱼类(其中10%是红海特有物种)和色彩斑斓的珊瑚礁。赫尔格达原本是渔村,现已发展成为埃及最受欢迎的红海度假胜地。吉夫顿岛(Giftun Island)是附近最著名的浮潜点,海水清澈见底,可以看到各种热带鱼、海龟甚至海豚。橙子岛(Orange Bay)因其美丽的沙滩和果冻色的海水而被称为'埃及小马尔代夫'。",
            visitTips: [
              "可以选择在度假酒店放松(三餐全包)",
              "或参加出海一日游(浮潜、追海豚、参观岛屿)",
              "浮潜时注意防晒(建议穿防晒衣)",
              "不要触碰珊瑚和海洋生物"
            ]
          }
        }
      ],
      restaurants: [],
      tips: [
        {
          category: "度假",
          content: "今天完全是放松日,可以根据体力选择活动或纯休息"
        },
        {
          category: "浮潜",
          content: "浮潜装备酒店一般会提供,也可以自己带面镜和呼吸管更卫生"
        }
      ],
      alternatives: [
        {
          title: "出海一日游",
          description: "如果精力充沛,可以报名出海一日游,通常包含:浮潜2-3个点、追海豚、午餐、参观吉夫顿岛或橙子岛",
          condition: "想要更多水上活动"
        }
      ],
      expenses: [
        { item: "出海一日游", amount: "待定", currency: "USD", note: "如参加" }
      ]
    },
    {
      day: 8,
      date: "2026.5.5",
      location: "赫尔格达 → 开罗 → 杭州",
      schedule: [
        {
          time: "上午",
          activity: "睡到自然醒,酒店吃午饭"
        },
        {
          time: "13:00 - 18:00",
          activity: "选择1:包车前往开罗机场(5小时)"
        },
        {
          time: "13:30 - 15:00",
          activity: "选择2:赫尔格达飞往卢克索(需提前购票)"
        },
        {
          time: "18:00 - 22:00",
          activity: "自由活动:尼罗河游船看日落 + 逛哈利利市集",
          attraction: {
            name: "尼罗河游船 & 哈利利市集",
            history: "尼罗河是世界上最长的河流(6650公里),是埃及文明的摇篮。在尼罗河上游船看日落是结束埃及之旅的完美方式。夕阳将河水染成金色,两岸的绿树和建筑在暮色中渐渐模糊,仿佛穿越回法老时代。\n\n哈利利市集(Khan el-Khalili)建于14世纪,是中东最大的传统市集之一。这里曾是古代丝绸之路的重要贸易站,如今依然保留着中世纪的风貌。狭窄的街道两旁是各式各样的店铺:香料、纸莎草画、铜器、珠宝首饰、水烟壶......讨价还价是这里的传统,也是乐趣所在。市集中心的Fishawi咖啡馆已有200多年历史,是纳吉布·马哈福兹(1988年诺贝尔文学奖得主)经常光顾的地方。",
            visitTips: [
              "尼罗河游船可以在河边码头直接上船",
              "哈利利市集记得砍价(从1/3开始)",
              "注意保管好随身物品",
              "Fishawi咖啡馆值得体验一杯薄荷茶"
            ]
          }
        },
        {
          time: "23:59",
          activity: "起飞返回杭州"
        }
      ],
      restaurants: [],
      tips: [
        {
          category: "返程交通",
          content: "选择1包车灵活但时间长;选择2内飞快但需提前购票",
          important: true
        },
        {
          category: "购物",
          content: "哈利利市集适合买纪念品:纸莎草画、香精、铜灯、水烟壶等"
        }
      ],
      alternatives: [
        {
          title: "时间紧张",
          description: "如果包车到开罗时间较晚,可以放弃游船和市集,直接去机场休息"
        }
      ],
      expenses: [
        { item: "赫尔格达-开罗包车", amount: "待定", currency: "EGP", note: "如选择包车" },
        { item: "赫尔格达-卢克索机票", amount: "待定", currency: "USD", note: "如选择内飞" }
      ]
    }
  ],
  generalTips: [
    {
      category: "签证",
      content: "落地签35美元,务必带零钱(可能不找零)",
      important: true
    },
    {
      category: "电话卡",
      content: "机场购买WE电话卡,当场让工作人员帮忙注册inDrive",
      important: true
    },
    {
      category: "换汇",
      content: "至少准备200美元用于兑换埃镑(1人民币≈7埃镑)",
      important: true
    },
    {
      category: "交通",
      content: "包车在inDrive预定,至少提前一晚,选评分4.9+司机",
      important: true
    },
    {
      category: "学生证",
      content: "大部分景点门票学生证可半价,记得携带",
      important: true
    },
    {
      category: "小费",
      content: "埃及是小费国家,一般给10-20埃镑即可"
    },
    {
      category: "安全",
      content: "注意保管财物,景区附近警惕过度热情的陌生人"
    },
    {
      category: "穿着",
      content: "参观宗教场所需穿长裤/长裙,女性建议带头巾"
    }
  ]
};
