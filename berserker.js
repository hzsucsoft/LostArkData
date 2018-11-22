module.exports = {
  berserker: {
    s_1: {
      skill_name: "X斩",
      cd: "6",
      description:
        "稍微蓄力，然后以X型斩出两刀造成82,82点伤害",
      additional_effects: ["背击加成"],
      type: ["普通"],
      time: [""],
      icon: "Pu8MrKN.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "强化打击",
          description: "准备时间增加0.3秒，伤害增加25%",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "肩撞",
          description: "技能施放时，先突进2米，用肩膀对敌人造成10%的伤害",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "快速准备",
          description: "技能准备时间减少0.3秒",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "远程打击",
          description: "攻击距离增加40%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "一刀两断",
          description:
            "两次斩击后，增加一次下劈，造成50%伤害",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "前进斩击",
          description: "每次斩击都会向前方移动1米。技能释放完后，可以立即使用其他技能或者移动(减少了技能后摇)",
          icon: "YlRQ5P1.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "大卸八块",
          description:
            "改为蓄力技能(2秒左右)，可在攻击时缓慢旋转攻击方向，最多可以攻击8次，冷却时间增加8秒",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "空间切割",
          description:
            "双斩后追加生成X形剑气，剑气攻击判定为两次，共造成80%的伤害",
          icon: "Iv7fFBo.png"
        }
      }
    },
    s_2: {
      skill_name: "快斩",
      cd: "5",
      description:
        "快速斩出一剑，判定为3次攻击，共造成148点伤害",
      additional_effects: ["背击加成 "],
      type: ["普通"],
      time: [""],
      icon: "zABnpjM.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "敏捷动作",
          description: "攻击速度增加10%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "穿刺打击",
          description: "无视敌方所有防御30%",
          icon: "QEd5bZU.png"
        },
        e_3: {
          effect_name: "雷刃",
          description:
            "攻击范围增加10%，被击中的敌人僵直时间增加0.3秒",
          icon: "HR5NqtN.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "集中",
          description: "获得的怒气增加100%",
          icon: "UnhMZ84.png"
        },
        e_2: {
          effect_name: "切割强化",
          description: "技能切割等级+1",
          icon: "W3lPRkN.png"
        },
        e_3: {
          effect_name: "出血",
          description: "如果只有一个敌人被命中，则造成对方出血5秒",
          icon: "Ct0bUxo.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "切削",
          description:
            "攻击判定增加1次，一共4次，总伤害量增加40%",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "回马刀",
          description:
            "变更为连续技，初次攻击下斩，造成80%的伤害，再次按技能键，进行上挑攻击(3次攻击判定)，造成100%的伤害",
          icon: "dgg9J9i.png"
        }
      }
    },
    s_3: {
      skill_name: "升龙斩",
      cd: "9",
      description:
        "一遍起跳一边上挑，造成65点伤害，然后空中下劈，造成120点伤害",
      additional_effects: ["无力化 [中]", " 背击加成 "],
      type: ["普通"],
      time: [""],
      icon: "p9pS9bS.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "肌肉痉挛",
          description: "被下劈击中的敌人，击倒时间增加0.5秒",
          icon: "BtWx8s1.png"
        },
        e_2: {
          effect_name: "强化打击",
          description:
            "攻击伤害增加25%，魔力消耗增加40%",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "致命打击",
          description: "暴击率增加15%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "洞察弱点",
          description: "免疫击异常的敌人，受到伤害增加30%",
          icon: "a5qp6Tt.png"
        },
        e_2: {
          effect_name: "集中",
          description:
            "获得的怒气增加100%",
          icon: "UnhMZ84.png"
        },
        e_3: {
          effect_name: "攻击意识",
          description:
            "第一击成功命中时，接下来3秒内暴击率增加20%",
          icon: "YlRQ5P1.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "烈焰冲击",
          description:
            "下劈攻击改为空中连续4次劈击，总伤害量增加35%",
          icon: "Iv7fFBo.png"
        },
        e_2: {
          effect_name: "红色闪电",
          description:
            "先旋转360度，再起跳上斩，然后快速下落劈砍，总伤害量增加55%",
          icon: "32F9lxY.png"
        }
      }
    },
    s_4: {
      skill_name: "终结一击",
      cd: "18",
      description: "强力地劈击，造成418点伤害，并击倒敌人",
      additional_effects: [
        "部位破坏 [切割2级]",
        " 无力化 [中高]",
        " 背击加成 "
      ],
      type: ["连续技"],
      time: [""],
      icon: "Q6dmZHI.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "强韧",
          description: "攻击时免疫被击异常",
          icon: "lyseDv0.png"
        },
        e_2: {
          effect_name: "出血",
          description: "被命中者出血5秒",
          icon: "1PceV71.png"
        },
        e_3: {
          effect_name: "强化打击",
          description:
            "准备时间增加0.5秒，伤害增加25%",
          icon: "DI0jbqj.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "终结打击",
          description:
            "对生命值在25%以下的敌人造成的伤害增加30%",
          icon: "cimRspI.png"
        },
        e_2: {
          effect_name: "肌肉痉挛",
          description: "击倒时间增加1秒",
          icon: "POnpICE.png"
        },
        e_3: {
          effect_name: "留下伤口",
          description:
            "被击中的敌人，在接下来3秒内受到的伤害增加30%",
          icon: "2JPSkpi.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "冲击波",
          description:
            "劈到地面额外造成两次冲击波，每次造成20%伤害。此外，如果自身的生命值低于30%，则攻击伤害额外提高100%",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "死亡宣告",
          description:
            "变更为连续技，首次攻击劈向地面，二次攻击跃起，下落时将巨剑插入地面形成冲击波，造成80%伤害，对被击异常的敌人增加25%的伤害",
          icon: "Bybk6tw.png"
        }
      }
    },
    s_5: {
      skill_name: "冲锋",
      cd: "14",
      description: "向鼠标方向突进，对被撞击的敌人造成83点伤害(3次攻击判定)，无法穿过敌人",
      additional_effects: ["背击加成 ", " 超级护甲 [免疫被击僵直]"],
      type: ["普通"],
      time: [""],
      icon: "BL7pQ7a.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "能量盾",
          description: "先生成一个能量盾，再突进，能量盾持续5秒，可抵消相当于最大生命值15%的伤害",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "烈焰裹身",
          description: "突进之后，自身及周围5秒内，每秒散发出一次火焰，对周围的敌人造成10%伤害",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "机动增强",
          description: "突进距离增加2米",
          icon: "frf2qov.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "连续突进",
          description: "变更为连续技，可连续突进2次，第二次可变更方向，冷却时间增加10秒",
          icon: "LmuvcKG.png"
        },
        e_2: {
          effect_name: "击倒追加",
          description:
            "突进结束时追加下劈攻击，造成100%伤害并击倒敌人",
          icon: "oVtc2zd.png"
        },
        e_3: {
          effect_name: "闪电切割",
          description: "可穿过敌人，对路径上的敌人造成100%伤害(1次攻击判定)。突进结束后，追加一次横扫，造成100%伤害",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "地震",
          description:
            "变更为[土]属性攻击，突进后，用脚震地，对半径5米范围内的敌人造成30%伤害，并使其陷入4秒地震状态",
          icon: "Iv7fFBo.png"
        },
        e_2: {
          effect_name: "怒气爆发",
          description:
            "变更为[火]属性攻击，突进后，怒气爆发，对周围5米范围内的敌人造成100%伤害并浮空",
          icon: "A2uWtO2.png"
        }
      }
    },
    s_6: {
      skill_name: "横扫千军",
      cd: "24",
      description: "持续旋转大剑4秒，共造成586点伤害。施放技能时，无视与普通怪物的撞击。若按住技能键不超过0.5秒，则冷却时间为1秒，魔力消耗也相应减少",
      additional_effects: ["无力化 [中]", " 背击加成 "],
      type: ["按住"],
      time: [" 4 sec"],
      icon: "BybShK8.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "轻盈脚步",
          description: "技能施展时移动速度增加10%",
          icon: "ZYlrZ9I.png"
        },
        e_2: {
          effect_name: "持续延长",
          description: "最大旋转时间增加至5秒",
          icon: "U2xs2Ib.png"
        },
        e_3: {
          effect_name: "快速准备",
          description: "冷却时间减少12秒，但最大旋转时间减少至2秒",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "前进劈击",
          description: "旋转之前，快速前进4米并追加一次劈击，造成20％的伤害。旋转中途取消时，冷却时间和魔力消耗[不会]减少",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "大车轮",
          description:
            "旋转时，敌人每收到一次攻击，伤害增加6%，最大增加60%",
          icon: "TmNqtCH.png"
        },
        e_3: {
          effect_name: "碎裂刀片",
          description:
            "在旋风斩外围增加40%的攻击范围，在此40%范围内，攻击伤害提高40%",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "真空切割",
          description:
            "攻击范围增加20%，攻击判定次数翻倍，总伤害增加40%",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "龙卷风",
          description:
            "如果旋风斩一直持续到结束，结束时将生成一股龙卷，多段攻击判定，共造成40%伤害并浮空敌人",
          icon: "JQTrd8y.png"
        }
      }
    },
    s_7: {
      skill_name: "蓄能挥击",
      cd: "18",
      description:
        "凝聚大剑的力量，对前方180度的敌人造成347点伤害并将其击飞。",
      additional_effects: [
        "部位破坏 [切割1级]",
        " 无力化 [下]",
        " 背击加成 "
      ],
      type: ["普通"],
      time: [""],
      icon: "YIwTdgp.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "致命打击",
          description: "暴击率增加15%",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "敏捷动作",
          description: "攻击速度增加10%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "聚精会神",
          description: "魔力消耗减少50%",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "远程打击",
          description: "攻击距离增加20%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "强化打击",
          description: "攻击伤害增加25%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "弱者标记",
          description: "被击异常的敌人，受到伤害增加40%",
          icon: "HWuM5x7.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "能量聚积",
          description:
            "变更为蓄力技能，蓄力1段伤害增加10%，2段伤害增加50%，过度蓄力(3段)时伤害增加100%",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "离心旋转",
          description:
            "旋转一周，攻击周边360度范围的敌人，伤害增加30%",
          icon: "Iv7fFBo.png"
        }
      }
    },
    s_8: {
      skill_name: "旋风升龙斩",
      cd: "20",
      description:
        "共3阶段攻击，一边向前移动一小段距离，一边旋转挥动巨剑造成107点伤害；然后跃起旋转，空中顺势向前移动一小段距离，并挥动巨剑造成75,75点伤害；最后落地下劈造成172点伤害。",
      additional_effects: [
        "部位破坏：切割1级",
        " 无力化 [中]",
        " 背击加成 ",
        " 超级护甲：免疫被击僵直"
      ],
      type: ["连续技"],
      time: [""],
      icon: "Wt861Tv.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "集中",
          description: "获得的怒气增加50%",
          icon: "11MLrbC.png"
        },
        e_2: {
          effect_name: "敏捷动作",
          description: "攻击速度增加10%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "快速准备",
          description: "冷却时间减少2s",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "致命打击",
          description: "暴击率增加30%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "强化打击",
          description: "攻击伤害增加25%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "惊天一击",
          description:
            "最后一击对免疫被击异常的敌人增加50%伤害",
          icon: "eajjkDJ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "搅局",
          description:
            "取消第一阶段攻击动作，不再前进。空中旋转攻击由2次变为3次，总伤害量增加40%",
          icon: "Iv7fFBo.png"
        },
        e_2: {
          effect_name: "暴风旋击",
          description:
            "攻击范围增加20%。原第三阶段的落地劈击动作，变为范围更大的旋转攻击。总伤害量增加60%",
          icon: "32F9lxY.png"
        }
      }
    },
    s_9: {
      skill_name: "山崩地裂",
      cd: "12",
      description:
        "用脚震地，对自身周围敌人造成143点伤害，并使敌人进入地震状态2秒",
      additional_effects: ["无力化 [中]", " 背击加成 "],
      type: ["普通"],
      time: [""],
      icon: "uNqr3gr.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "快速准备",
          description: "冷却时间减少2s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "进击",
          description:
            "敌人被第一击命中时，接下来5秒内受到的伤害增加10%",
          icon: "VGqI5ff.png"
        },
        e_3: {
          effect_name: "强化",
          description: "地震持续时间增加1秒",
          icon: "BtWx8s1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "强化打击",
          description: "攻击伤害增加30%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "敏捷动作",
          description: "第一击命中时，自身移动速度5秒内增加15%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "减速",
          description:
            "命中时，对方移动速度减少30%，持续8秒(对boss无效，对精英怪有效)",
          icon: "C42y0cZ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "地震波",
          description:
            "自身周围额外生成地震波，并向鼠标方向延伸8米，地震波的暴击率增加20%，造成80%伤害",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Land Conflict",
          description:
            "震击时将附近敌人拉近自己。震击地6秒内每秒生成岩浆区域，对区域内敌人造成伤害。第一击后自己可以离开",
          icon: "edATIP7.png"
        }
      }
    },
    s_10: {
      skill_name: "跃斩",
      cd: "16",
      description: "向鼠标位置跳跃，可跃过敌人(跳得够高或敌人较矮时)，落地时下劈造成134点伤害",
      additional_effects: ["无力化 [下]", " 背击加成 "],
      type: ["Point"],
      time: [""],
      icon: "DjCXR45.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "敏捷动作",
          description: "跳跃前行距离增加2米",
          icon: "frf2qov.png"
        },
        e_2: {
          effect_name: "集中",
          description: "获得的怒气增加50%",
          icon: "11MLrbC.png"
        },
        e_3: {
          effect_name: "快速准备",
          description: "冷却时间减少3秒",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "迅速移动",
          description: "技能使用后，移动速度增加30%，持续3秒",
          icon: "LmuvcKG.png"
        },
        e_2: {
          effect_name: "剑风",
          description:
            "不再跃过敌人(该描述与实测不符)。下劈时会牵引周围敌人，技能命中时，攻击速度3秒内增加20%",
          icon: "Ntx7DAR.png"
        },
        e_3: {
          effect_name: "肌肉痉挛",
          description: "击倒时间增加1秒",
          icon: "POnpICE.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "强力挥砍",
          description:
            "增加了准备动作，但伤害也增加了200%",
          icon: "FpXyekj.png"
        },
        e_2: {
          effect_name: "剑之碎片",
          description:
            "无力化等级提升至[中]。被击中的敌人，4秒内严重出血",
          icon: "P0yre5K.png"
        }
      }
    },
    s_11: {
      skill_name: "地狱熔岩",
      cd: "36",
      description:
        "原地跃起后下落时将大剑插入地面，对附近敌人造成42点伤害。持续按住技能键，迸发岩浆对周围敌人造成最多122点伤害，最多持续2秒。 若在蓄力条的完美区段释放，将产生爆炸击飞敌人，造成661点伤害",
      additional_effects: [
        "无力化 [上]",
        " 背击加成 ",
        " 超级护甲：免疫被击僵直"
      ],
      type: ["蓄力"],
      time: [" 2.5 sec"],
      icon: "jU0NlqU.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "范围增加",
          description: "攻击范围增加30%",
          icon: "DI0jbqj.png"
        },
        e_2: {
          effect_name: "跳跃攻击",
          description: "施放技能时，先向鼠标位置跳跃，最远可达8米",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "牵引",
          description: "插剑入地时，牵引周围5米范围内的敌人",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "熔化",
          description:
            "被迸发的岩浆持续命中的敌人，随着被击次数的增加，伤害增加量从10%到最高50%",
          icon: "2JPSkpi.png"
        },
        e_2: {
          effect_name: "熔岩地带",
          description: "最后一击成功后，在原地生成熔岩地带，每0.5秒造成伤害，持续6秒，共造成50%的伤害",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "致命一击",
          description: "如果自身生命值低于30%，那么伤害量将会增加80%",
          icon: "qp8CE16.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "土地翻转",
          description:
            "变更为[土]属性攻击。最后一击之后，追加地刺爆发，造成40%伤害",
          icon: "JQTrd8y.png"
        },
        e_2: {
          effect_name: "热血迸发",
          description:
            "变更为[火]属性攻击。插剑入地后，立刻施展最后一击",
          icon: "32F9lxY.png"
        }
      }
    },
    s_12: {
      skill_name: "上挑",
      cd: "15",
      description:
        "先做准备动作(旋转巨剑)，然后上挑敌人，将其浮空，造成130点伤害",
      additional_effects: ["背击加成 "],
      type: ["普通"],
      time: [""],
      icon: "1h5nwbe.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "致命打击",
          description: "命中后3秒内暴击率增加15%",
          icon: "GjqRFi1.png"
        },
        e_2: {
          effect_name: "快速机动",
          description: "向前突进2.5米的同时进行上挑",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "敏捷动作",
          description: "准备动作的耗时大幅减少",
          icon: "9VyE0qU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "歼灭",
          description: "上挑后追加下劈(攻击范围:前方半径5米圆形)，下劈会将敌人击倒，造成200%的伤害",
          icon: "DLz43Zq.png"
        },
        e_2: {
          effect_name: "剑伤",
          description: "被命中的敌人出血5秒",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "速攻准备",
          description: "命中后攻击速度3秒内增加25%",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "快速准备",
          description:
            "冷却时间前少7秒，伤害减少50%",
          icon: "mJ47SLb.png"
        },
        e_2: {
          effect_name: "强化打击",
          description:
            "攻击范围增加20%，伤害增加50%",
          icon: "Iv7fFBo.png"
        }
      }
    },
    s_13: {
      skill_name: "旋转进击",
      cd: "20",
      description: "短暂蓄力后，一边旋转挥动巨剑，一边向前攻击。每2次旋转为一组动作，共旋转4次，共造成425点伤害。前进时可穿越普通怪物。",
      additional_effects: [
        "无力化 [中]",
        " 背击加成 ",
        " 超级护甲：免疫被击僵直"
      ],
      type: ["普通"],
      time: [""],
      icon: "sQikOWf.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "加速",
          description: "命中后移动速度5秒内增加15%",
          icon: "ZYlrZ9I.png"
        },
        e_2: {
          effect_name: "出血",
          description: "被命中的敌人出血5秒",
          icon: "1PceV71.png"
        },
        e_3: {
          effect_name: "快速准备",
          description: "冷却时间减少4秒",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "强化打击",
          description: "攻击伤害增加25%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "致命打击",
          description: "暴击率增加30%",
          icon: "qp8CE16.png"
        },
        e_3: {
          effect_name: "集中",
          description: "怒气获得量增加100%",
          icon: "UnhMZ84.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "强风",
          description:
            "变更攻击动作为一边前进，一边锤击地面3次。伤害总量增加60%",
          icon: "Bybk6tw.png"
        },
        e_2: {
          effect_name: "疾风",
          description:
            "更快地向前旋转进击，伤害增加30%",
          icon: "Iv7fFBo.png"
        }
      }
    },
    s_14: {
      skill_name: "剑气旋涡",
      cd: "15",
      description:
        "大剑插入前方地面，造成185点伤害，然后拔出巨剑，同时牵引周围敌人",
      additional_effects: ["无力化 [中]", " 背击加成 "],
      type: ["连续技"],
      time: [""],
      icon: "gM8fPOG.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "敏捷动作",
          description: "攻击速度增加10%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "聚精会神",
          description: "魔力消耗减少50%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "集中",
          description: "怒气获得量增加50%",
          icon: "11MLrbC.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "强韧",
          description: "技能施展时免疫击异常",
          icon: "a7DgAOn.png"
        },
        e_2: {
          effect_name: "强化打击",
          description: "攻击伤害增加25%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "致命打击",
          description: "第二击命中后6秒内暴击率增加15%",
          icon: "qp8CE16.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "火焰旋涡",
          description:
            "变更为[火]属性攻击，最后攻击后发生爆炸，造成40%伤害并使敌人浮空",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "塌陷",
          description:
            "攻击范围增加20%，伤害增加30%，第二击的僵直时间增加1秒",
          icon: "edATIP7.png"
        }
      }
    },
    s_15: {
      skill_name: "剑气波浪",
      cd: "24",
      description:
        "蓄积能量，挥出能翻开地面的剑气波浪，未完成蓄力的伤害为223，完成蓄力的伤害为556",
      additional_effects: [
        "无力化 [中]",
        " 超级护甲：免疫被击僵直"
      ],
      type: ["蓄力"],
      time: [""],
      icon: "t5tlplr.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "波动",
          description: "每个蓄力阶段增加伤害10%",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "快速蓄力",
          description: "蓄力时间减少20%",
          icon: "179tjju.png"
        },
        e_3: {
          effect_name: "快速准备",
          description: "冷却时间减少4秒",
          icon: "lyseDv0.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "一分为三",
          description: "完成蓄力时，剑气波浪分裂为3波",
          icon: "UnhMZ84.png"
        },
        e_2: {
          effect_name: "突破极限",
          description: "增加一次蓄力阶段，完成蓄力时，伤害增加40%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "爆发",
          description: "完成蓄力时，在剑气波浪尾端会产生爆炸，造成50%伤害",
          icon: "TmNqtCH.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "剑气爆发",
          description:
            "变更为[火]属性攻击，剑气波浪完成后，翻开的地面产生爆炸，造成相当于一段蓄力60%的伤害",
          icon: "JQTrd8y.png"
        },
        e_2: {
          effect_name: "土地翻转",
          description:
            "变更为[土]属性攻击，剑气翻开土地生成地刺，地刺缓慢前行，最多攻击4次(所处位置,是否能被浮空,体型大小等均会影响次数)，单次攻击的伤害减少50%",
          icon: "bjbQ0Fr.png"
        }
      }
    },
    s_16: {
      skill_name: "断红尘",
      cd: "30",
      description:
        "大剑插入前方地面，拔出时挥出红色剑气，造成351点伤害，并使敌人在接下来5秒内受到的伤害增加20%",
      additional_effects: ["背击加成 "],
      type: ["普通"],
      time: [""],
      icon: "zSFBxBV.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "快速准备",
          description: "冷却时间减少5秒",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "敏捷动作",
          description: "攻击速度增加20%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "聚精会神",
          description: "魔力消耗减少50%",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "致命打击",
          description: "命中后6秒内暴击率增加20%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "诅咒延长",
          description: "敌人所受伤害增加的效果时间增加3秒",
          icon: "POnpICE.png"
        },
        e_3: {
          effect_name: "红色剑气",
          description: "攻击距离增加25%，攻击伤害增加50%",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Hermatocrit",
          description:
            "被击中的敌人僵直时间增加0.5秒，出血5秒，移动速度减少40%(移速减少对boss无效，对精英怪有效)",
          icon: "P0yre5K.png"
        },
        e_2: {
          effect_name: "诅咒强化",
          description:
            "敌人所受伤害增加的效果额外增加20%",
          icon: "W94iICa.png"
        }
      }
    },
    s_17: {
      skill_name: "剑气风暴",
      cd: "30",
      description:
        "逆时针旋转跃起后将大剑劈向地面，在前方扇形区域形成剑气风暴，击倒敌人，造成507点伤害",
      additional_effects: [
        "无力化 [中上]",
        " 背击加成 ",
        " 超级护甲：免疫被击僵直"
      ],
      type: ["普通"],
      time: [""],
      icon: "c6zDH3O.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "敏捷动作",
          description: "攻击速度增加10%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "快速准备",
          description: "冷却时间减少4秒",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "致命打击",
          description: "暴击率增加15%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "后暴风",
          description:
            "攻击完成后，额外追加一次暴风爆炸，造成20%伤害",
          icon: "cD0keDA.png"
        },
        e_2: {
          effect_name: "弱者标记",
          description: "被击异常的敌人，受到伤害增加40%",
          icon: "HWuM5x7.png"
        },
        e_3: {
          effect_name: "强韧",
          description: "攻击时免疫被击异常",
          icon: "a7DgAOn.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "火焰风暴",
          description:
            "变更为[火]属性攻击，对被击中的敌人造成6秒灼烧状态。如果自身生命值低于30%，攻击伤害将增加30%",
          icon: "JQTrd8y.png"
        },
        e_2: {
          effect_name: "地震波",
          description:
            "变更为[土]属性攻击，伤害增加30%，不再击倒敌人，而是使其进入地震状态4秒",
          icon: "edATIP7.png"
        }
      }
    },
    s_18: {
      skill_name: "灵气之刃",
      cd: "16",
      description:
        "向鼠标方向挥出横向波动剑气，造成291点伤害",
      additional_effects: ["部位破坏 [切割1级]", " 无力化 [中]"],
      type: ["普通"],
      time: [""],
      icon: "IFfCBAu.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "敏捷动作",
          description: "攻击速度增加10%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "快速准备",
          description: "冷却时间减少2秒",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "远程打击",
          description: "攻击距离增加2米",
          icon: "SoLHNDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "切割强化",
          description: "切割等级+2",
          icon: "W3lPRkN.png"
        },
        e_2: {
          effect_name: "剑伤",
          description: "造成敌人出血以及攻速减少15%，持续5秒(攻速减少对boss无效)",
          icon: "zHwYyaV.png"
        },
        e_3: {
          effect_name: "穿刺打击",
          description: "无视敌方魔法防御40%",
          icon: "ktJIUvL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "空间切割",
          description:
            "攻击方式变更为:跃起后，向鼠标位置挥出3次剑气。伤害增加75%",
          icon: "Iv7fFBo.png"
        },
        e_2: {
          effect_name: "灭绝",
          description:
            "变更为连续技，第二次剑气为垂直剑气，攻击范围较小，但暴击率增加30%，伤害为第一击的50%",
          icon: "dgg9J9i.png"
        }
      }
    },
    ult: {
      skill_name: "复仇之链",
      cd: "300",
      description: "向周围释放锁链，造成176点伤害，然后将链条拉回同时也拉回敌人，造成1900点伤害。 最后引起大规模爆炸，造成6575点伤害并击飞敌人。",
      additional_effects: ["无力化 [上]", " 超级护甲：免疫被击异常；免疫状态异常"],
      type: ["觉醒技能"],
      time: [""],
      icon: "zBbx1Er.png"
    },
    /*
    ult: {
      skill_name: "狂暴状态",
      cd: "",
      description: "怒气集满时，按z键进入狂暴状态，攻击速度和移动速度增加20%，暴击率增加30%，持续直至怒气消耗完毕",
      additional_effects: [],
      type: ["特性Buff"],
      time: [""],
      icon: "zBbx1Er.png"
    }
    ult: {
      skill_name: "血爆",
      cd: "45",
      description: "狂暴状态下按z键施放该技能。共三段攻击，首次攻击抡起大剑向前方180度横扫，接着以极快的速度向前方180度连续劈击，造成4866点伤害，最后刺向敌人，造成1218点伤害",
      additional_effects: ["无力化 [中]", " 超级护甲：免疫被击异常", " 部位破坏：切割1级", " 背击加成"],
      type: ["特性技能"],
      time: [""],
      icon: "zBbx1Er.png"
    }
    */
  }
};