module.exports = {
  warlord: {
    s_1: {
      skill_name: "锋利之矛",
      cd: "8",
      description: "使用锋利之矛向前猛刺，造成X点伤害 ",
      additional_effects: "背后攻击，使其瘫痪",
      time: "",
      icon: "TbUnNwV.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "快速准备",
          description: "技能CD减少2秒   ",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "伤害增加",
          description: "伤害提升15% ",
          icon: "DI0jbqj.png"
        },
        e_3: {
          effect_name: "攻击速度",
          description: "攻击速度提升20% ",
          icon: "9VyE0qU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "冲锋",
          description: "冲锋使目标防御力降低20%，持续5秒，并造成流血状态 ",
          icon: "ktJIUvL.png"
        },
        e_2: {
          effect_name: "易伤",
          description: "群控效果中对目标造成伤害提升60% ",
          icon: "HWuM5x7.png"
        },
        e_3: {
          effect_name: "多重打击",
          description: "向前方猛刺三次，逐次伤害减少50% ",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "充能攻击",
          description:
            "可对技能进行充能，每次充能可造成50%、100%、250%点额外伤害，技能CD增加16秒",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "进阶之刺",
          description: "增加1次攻击，造成伤害提高50点 ",
          icon: "32F9lxY.png"
        }
      },
      type: "Tap"
    },
    s_2: {
      skill_name: "崛起之矛",
      cd: "12",
      description: "将长毛刺入地面并造成[x]点伤害.拔出长矛击飞敌人",
      additional_effects: ["Incapacitate [medium]", "Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "MrAZpAV.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "防御姿态",
          description: "被击中则获得20%伤害减免加成，持续4秒",
          icon: "SfUebeR.png"
        },
        e_2: {
          effect_name: "攻击速度",
          description: "攻击速度提升15%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "伤害增加",
          description: "伤害提升10%",
          icon: "DI0jbqj.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "反向轰击",
          description: "向身后轰击推动自身，对目标造成30%额外击退伤害",
          icon: "0.png"
        },
        e_2: {
          effect_name: "点燃",
          description: "点燃目标",
          icon: "cXMAUIN.png"
        },
        e_3: {
          effect_name: "Ground Collapsing",
          description:
            "Immediately fires a launcher after the upward strike and damages enemies for an additional 40%. Decreases movement speed by 40% instead of lifting your enemies",
          icon: "C42y0cZ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "坚韧",
          description: "释放技能时无法被群控",
          icon: "6vzVrvN.png"
        },
        e_2: {
          effect_name: "虚弱覆盖",
          description:
            "技能范围增大30%，伤害提升80%并击退目标，攻击速度降低，技能CD增加2秒",
          icon: "nws09aw.png"
        }
      }
    },
    s_3: {
      skill_name: "近身打击",
      cd: "10",
      description: "发射大炮攻击近身目标  ",
      additional_effects: "打断攻击",
      time: "",
      icon: "4wX9VGX.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "进阶护甲",
          description: "增加20%伤害减免     ",
          icon: "SfUebeR.png"
        },
        e_2: {
          effect_name: "幸运",
          description: "击中目标有50%几率降低技能CD4秒     ",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "智力",
          description: "减少50%MP消耗      ",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "破坏",
          description: "破坏等级提高1点  ",
          icon: "0.png"
        },
        e_2: {
          effect_name: "点燃",
          description: "点燃目标  ",
          icon: "cXMAUIN.png"
        },
        e_3: {
          effect_name: "伤害增加",
          description: "伤害提升25%   ",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "积极",
          description: "大炮发射两次，每次额外50%几率，并击退目标 ",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "虚弱覆盖",
          description:
            "技能范围增大30%，伤害提升80%并击退目标，攻击速度降低，技能CD增加2秒 ",
          icon: "bjbQ0Fr.png"
        }
      },
      type: "Tap"
    },
    s_4: {
      skill_name: "盾击",
      cd: "16",
      description: "使用盾牌对目标造成 [x]点伤害. 再次使用造成[x]点伤害",
      additional_effects: ["Incapacitate [high]"],
      type: ["Combo"],
      time: [""],
      icon: "DwB8YCC.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "势不可挡",
          description: "攻击目标有20%几率重置技能冷却时间",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "防御姿态",
          description: "被击中则获得20%伤害减免加成，持续5秒",
          icon: "SfUebeR.png"
        },
        e_3: {
          effect_name: "攻击速度",
          description: "攻击速度提升15%",
          icon: "9VyE0qU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "破坏",
          description: "攻击使目标攻击力和防御力降低20%，持续5秒",
          icon: "2JPSkpi.png"
        },
        e_2: {
          effect_name: "机动",
          description: "增加首次命中技能范围1米",
          icon: "DLz43Zq.png"
        },
        e_3: {
          effect_name: "狂暴",
          description: "无敌状态下对目标造成伤害提升60%",
          icon: "a5qp6Tt.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "额外命中",
          description: "命中增加2，额外造成20%-60%伤害",
          icon: "hXBL5OK.png"
        },
        e_2: {
          effect_name: "击晕",
          description: "盾击3次，伤害增加30%，最后一击击晕目标",
          icon: "dgg9J9i.png"
        }
      }
    },
    s_5: {
      skill_name: "眩晕",
      cd: "10",
      description: "盾击对目标造成3秒眩晕状态",
      additional_effects: "Incapacitate [Mid-High]",
      time: "",
      icon: "eemdICW.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "伤害增加",
          description: "伤害提升15%   ",
          icon: "DI0jbqj.png"
        },
        e_2: {
          effect_name: "攻击速度",
          description: "攻击速度提升20%    ",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "痛击",
          description: "25%几率使目标受到的伤害提高50%   ",
          icon: "HR5NqtN.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "攻击姿态",
          description: "击中目标伤害增加25%，持续5秒   ",
          icon: "AFgfZrT.png"
        },
        e_2: {
          effect_name: "无力",
          description: "破坏能力提升 20%    ",
          icon: "cimRspI.png"
        },
        e_3: {
          effect_name: "破甲",
          description: "击中目标防御力降低30%，持续6秒   ",
          icon: "ktJIUvL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "覆盖",
          description: "技能范围增加30%    ",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "回响",
          description: "使目标眩晕持续时间增加2秒   ",
          icon: "0BMcHYE.png"
        }
      },
      type: "Tap"
    },
    s_6: {
      skill_name: "冲天击",
      cd: "16",
      description:
        "冲击目标，击飞造成[]伤害，大炮造成[]伤害，对空中目标造成额外[]伤害",
      additional_effects: [
        "Incapacitate [Mid-High]",
        " Destruction [Level 1]",
        " Back Attack"
      ],
      type: ["Combo"],
      time: [""],
      icon: "WZpkynC.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "快速准备",
          description: "技能CD减少3秒",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "防御姿态",
          description: "被击中则获得20%伤害减免加成，持续4秒",
          icon: "SfUebeR.png"
        },
        e_3: {
          effect_name: "攻击姿态",
          description: "击中目标则获得15%伤害加成，持续4秒",
          icon: "akITDDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "伤害增加",
          description: "加农炮伤害提升50%.",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "覆盖",
          description: "加农炮效果覆盖增加20%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "无视",
          description: "大炮无视目标50%防御力",
          icon: "ktJIUvL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "坚韧",
          description: "释放技能时无法被群控",
          icon: "6vzVrvN.png"
        },
        e_2: {
          effect_name: "攻击速度",
          description: "攻击速度提升20%",
          icon: "JMU1YLm.png"
        }
      }
    },
    s_7: {
      skill_name: "跳跃打击",
      cd: "16",
      description: "跳跃至目标位置并造成 [ ]点伤害 ",
      additional_effects: "Incapacitate [medium]",
      time: "",
      icon: "11ue7yB.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "伤害增加",
          description: "伤害增加10%   ",
          icon: "DI0jbqj.png"
        },
        e_2: {
          effect_name: "覆盖",
          description: "增加15%技能效果 ",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "机动",
          description: "技能范围增加2米 ",
          icon: "frf2qov.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "位移打击",
          description: "激活组合技，对目标伤害提升50%，并反向位移自身 ",
          icon: "cD0keDA.png"
        },
        e_2: {
          effect_name: "龙之越",
          description: "激活组合技，技能伤害降低50%并使自身跳起",
          icon: "KG9Q6Np.png"
        },
        e_3: {
          effect_name: "陷足",
          description: "攻击使目标移动速度降低40%，持续3秒 ",
          icon: "C42y0cZ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "豁免",
          description: "给予队友目标位置持续6秒的50%伤害减免",
          icon: "0.png"
        },
        e_2: {
          effect_name: "破甲",
          description: "攻击降低目标50%防御率，持续5秒 ",
          icon: "0.png"
        }
      },
      type: "Point"
    },
    s_8: {
      skill_name: "谴责",
      cd: "12",
      description: "盾牌攻击降低目标20%移动、攻击速度，持续4秒   ",
      additional_effects: "Incapacitate [medium]",
      time: "",
      icon: "LEtHD1y.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "快速准备",
          description: "减少技能CD3秒   ",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "攻击速度",
          description: "攻击速度提升10%    ",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "暴脾气",
          description: "有30%几率击晕目标2秒   ",
          icon: "ZkTpIPx.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "覆盖",
          description: "技能范围增加20%    ",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "震荡波",
          description: "使目标移动速度降低40%，攻击速度降低20%   ",
          icon: "2JPSkpi.png"
        },
        e_3: {
          effect_name: "防御姿态 ",
          description: "被击中获得15%伤害减免，持续10秒",
          icon: "oVtc2zd.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "无畏打击",
          description:
            "技能变为链技能，可以立即重复，第二次攻击伤害增加100%   ",
          icon: "Bybk6tw.png"
        },
        e_2: {
          effect_name: "龙回头",
          description: "从空中跳跃至5米内范围造成伤害提升50%   ",
          icon: "FpXyekj.png"
        }
      },
      type: "Tap"
    },
    s_9: {
      skill_name: "无情链钩",
      cd: "24",
      description: "向目标投掷链钩拉回造成 [] 点伤害",
      additional_effects: ["Incapacitate [low]"],
      type: ["Tap"],
      time: [""],
      icon: "SG0dbgp.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "快速准备",
          description: "技能CD减少4秒",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "智力",
          description: "减少50%MP消耗",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "伤害增加",
          description: "伤害提升10%",
          icon: "DI0jbqj.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "切割",
          description: "使目标流血5秒",
          icon: "zHwYyaV.png"
        },
        e_2: {
          effect_name: "坚韧 ",
          description: "释放技能时无法被群控",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "无畏",
          description: "伤害提升20%，持续6秒",
          icon: "AFgfZrT.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "覆盖",
          description: "技能范围增加20%",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "嘲讽",
          description: "强制嘲讽目标2秒，高级目标在一定时间内不可再次嘲讽",
          icon: "nws09aw.png"
        }
      }
    },
    s_10: {
      skill_name: "冲锋陷阵",
      cd: "16",
      description: "使用盾牌向前冲锋将目标击退，并造成[]点伤害 ",
      additional_effects: "Incapacitate [high], Immune [stiffness]",
      type: "Hold",
      time: " 2 sec",
      icon: "R0rX5GV.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "进阶护甲",
          description: "获得30%伤害减免 ",
          icon: "SfUebeR.png"
        },
        e_2: {
          effect_name: "快速准备",
          description: "技能CD减少3秒 ",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "伤害增加",
          description: "伤害提升15% ",
          icon: "DI0jbqj.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "覆盖",
          description: "技能范围增加20% ",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "坚韧",
          description: "释放技能时无法被群控",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "特斯拉",
          description: "提升20%充能速度 ",
          icon: "LmuvcKG.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "势不可挡",
          description: "盾牌冲锋刺入长矛，造成额外40%伤害，并将目标挑向空中 ",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "破坏",
          description: "每次攻击增加10%伤害，持续2秒，效果最高叠加到60% ",
          icon: "0.png"
        }
      }
    },
    s_11: {
      skill_name: "Charge Stinger",
      cd: "30",
      description: "",
      additional_effects: [
        "Incapacitate [Mid-High]",
        " Penetration  [level 1]",
        " Back Attack"
      ],
      type: ["Charge"],
      time: [""],
      icon: "5GxiOTq.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "切割",
          description: "致命一击会导致目标流血",
          icon: "1PceV71.png"
        },
        e_2: {
          effect_name: "克敌",
          description: "3秒内减少目标在无敌状态下15%防御",
          icon: "QEd5bZU.png"
        },
        e_3: {
          effect_name: "进阶护甲",
          description: "被击中获得20%伤害减免",
          icon: "SfUebeR.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "穿透",
          description: "增加1级穿透能力",
          icon: "NdeJndm.png"
        },
        e_2: {
          effect_name: "磁脉充",
          description: "每一级充能增加10%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "坚韧 ",
          description: "释放技能时无法被群控",
          icon: "a7DgAOn.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "超负荷",
          description: "充电量2开始溢出充电会对目标造成4秒电击效果",
          icon: "JeryhMy.png"
        },
        e_2: {
          effect_name: "急速打击",
          description: "充能等级提高1级，满级效果伤害提升30%，炮击伤害提升30%",
          icon: "Bybk6tw.png"
        }
      }
    },
    s_12: {
      skill_name: "听我号令",
      cd: "30",
      description: "8米范围内最多对12个目标造成[]点伤害并嘲讽2秒",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "2Qdyzfj.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "快速准备",
          description: "技能CD减少3秒",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "覆盖",
          description: "技能范围增加25%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "防御姿态",
          description: "被击中获得30%伤害减免，持续4秒",
          icon: "SfUebeR.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Intimidation",
          description: "降低目标30%防御力，持续4秒",
          icon: "ktJIUvL.png"
        },
        e_2: {
          effect_name: "神罚",
          description: "低等级目标受到伤害提升200%",
          icon: "FtChNZ3.png"
        },
        e_3: {
          effect_name: "护罩",
          description: "制造持续3秒防护罩，最大吸收伤害30%",
          icon: "0.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "重整旗鼓",
          description: "增加范围内队友30%移动速度和攻击强度，持续4秒",
          icon: "nGBwXyL.png"
        },
        e_2: {
          effect_name: "陷足",
          description: "使目标移动速度和攻击强度降低30%，持续4秒",
          icon: "W94iICa.png"
        }
      }
    },
    s_13: {
      skill_name: "火力狙击",
      cd: "16",
      description: "刺穿并拉着目标，最大冲量射杀并击退目标 ",
      additional_effects: "行动力[低]，穿透等级1，反击",
      time: "",
      icon: "bU9RiX7.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "快速准备",
          description: "技能CD减少3秒 ",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "攻击速度",
          description: "攻击速度提升15% ",
          icon:
            "Tripod_Tier_1_6.png"
        },
        e_3: {
          effect_name: "坚韧",
          description: "释放技能时无法被群控 ",
          icon:
            "Tripod_Tier_1_23.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "伤害增加",
          description: "伤害提升25%. ",
          icon: "45.png"
        },
        e_2: {
          effect_name: "弱点",
          description: "使目标无敌状态下受到伤害提升40%. ",
          icon: "36.png"
        },
        e_3: {
          effect_name: "穿透",
          description: "穿透等级提升1 ",
          icon: "26.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "源火",
          description: "冲刺400米爆炸造成40%伤害",
          icon: "19.png"
        },
        e_2: {
          effect_name: "爆炸",
          description: "可多次充能，并造成25%和105%的伤害，1级伤害降低20% ",
          icon: "38.png"
        }
      }
    },
    s_14: {
      skill_name: "坚守阵地",
      cd: "24",
      description:
        "防御2秒吸收最大生命值伤害，成功防御1秒可反击对目标造成伤害 ",
      additional_effects:
        "Incapacitate [Mid-High], Immune [stiffness], Penetration  [level 1], Back Attack",
      type: "Tap",
      time: "",
      icon: "zoJM0Cu.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "棘反",
          description: "反击使伤害提升15%，持续4秒 ",
          icon:"Tripod_Tier_1_50.png"
        },
        e_2: {
          effect_name: "进阶护甲",
          description: "被击中获得30%伤害减免 ",
          icon:"Tripod_Tier_1_25.png"
        },
        e_3: {
          effect_name: "制动",
          description: "反击使目标降低10%行动力 ",
          icon: "Tripod_Tier_1_56.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "急速",
          description: "减少技能CD12秒，伤害减少50% ",
          icon:
            "Tripod_Tier_2_56.png"
        },
        e_2: {
          effect_name: "伤害增加",
          description: "伤害提升15%. ",
          icon: "45.png"
        },
        e_3: {
          effect_name: "弱点",
          description: "使目标无敌状态下受到伤害提升40%. ",
          icon: "36.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "轰炸",
          description: "成功反击增加额外火炮命中，对目标造成50%伤害",
          icon: "43.png"
        },
        e_2: {
          effect_name: "先祖之力",
          description: "成功反击造成4秒电击魔法伤害并击倒目标",
          icon: "14.png"
        }
      }
    },
    s_15: {
      skill_name: "天选者",
      cd: "60",
      description: "22米范围内获得15%伤害减免，持续12秒  ",
      additional_effects: "",
      type: "Tap",
      time: "",
      icon: "dn2HzSe.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "特斯拉",
          description: "充电速度提升20%   ",
          icon:
            "Tripod_Tier_1_11.png"
        },
        e_2: {
          effect_name: "智力",
          description: "MP消耗减少50%   ",
          icon:
            "Tripod_Tier_1_34.png"
        },
        e_3: {
          effect_name: "快速准备",
          description: "技能CD减少10秒  ",
          icon:
            "Tripod_Tier_1_56.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "先驱",
          description: "所有队员攻击强度提升20%，持续6秒  ",
          icon: "45.png"
        },
        e_2: {
          effect_name: "饶恕",
          description: "清除所有队员一种DBUFF  ",
          icon: "0.png"
        },
        e_3: {
          effect_name: "加持",
          description: "增加效果持续时间4秒   ",
          icon: "29.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "进阶护甲",
          description: "伤害减少15%   ",
          icon: "12.png"
        },
        e_2: {
          effect_name: "护盾 ",
          description:
            "为所有队员制造一个可吸收各自最大生命值15%的护盾，持续5秒   ",
          icon: "18.png"
        }
      }
    },
    s_16: {
      skill_name: "雷击",
      cd: "20",
      description: "闪电对5米范围内目标造成3秒伤害",
      additional_effects: "Incapacitate [mid-high]",
      time: "",
      icon: "ZETWIG7.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "智者",
          description: "20%几率不消耗MP     ",
          icon:
            "Tripod_Tier_1_34.png"
        },
        e_2: {
          effect_name: "势不可挡",
          description: "攻击目标有20%几率重置技能冷却时间      ",
          icon:
            "Tripod_Tier_1_51.png"
        },
        e_3: {
          effect_name: "幸运",
          description: "增加额外的闪电击中造成80%的正常伤害       ",
          icon:
            "Tripod_Tier_1_17.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "坚韧",
          description: "释放技能时无法被群控       ",
          icon: "60.png"
        },
        e_2: {
          effect_name: "伤害增加",
          description: "伤害提升25%.       ",
          icon: "45.png"
        },
        e_3: {
          effect_name: "覆盖",
          description: "技能范围增加20%.       ",
          icon: "49.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "雷霆",
          description: "雷电区域打击造成伤害提升50%  ",
          icon: "31.png"
        },
        e_2: {
          effect_name: "静电",
          description: "增加3秒电击持续时间   ",
          icon: "27.png"
        }
      },
      type: "Tap"
    },
    s_17: {
      skill_name: "爆震击",
      cd: "30",
      description: "满电击倒目标，未满击退  ",
      additional_effects:
        "incapacitate [extreme-high], destruction level 1, back attack",
      type: "Tap",
      time: "",
      icon: "IFv21uC.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "定时",
          description: "成功定时破坏等级增加1  ",
          icon:
            "Tripod_Tier_1_22.png"
        },
        e_2: {
          effect_name: "快速准备",
          description: "技能CD减少5秒",
          icon:
            "Tripod_Tier_1_56.png"
        },
        e_3: {
          effect_name: "坚韧",
          description: "释放技能时无法被群控  ",
          icon:
            "Tripod_Tier_1_23.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "覆盖",
          description: "技能范围增加15%.  ",
          icon: "49.png"
        },
        e_2: {
          effect_name: "伤害增加",
          description: "伤害提升30%.  ",
          icon: "45.png"
        },
        e_3: {
          effect_name: "机动",
          description: "机动增加20%.  ",
          icon: "31.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "四面楚歌",
          description: "向周围开炮4次，每次射击造成20%额外伤害 ",
          icon: "19.png"
        },
        e_2: {
          effect_name: "集中火力",
          description: "向前方发射大炮4次，每次射击造成伤害增加50% ",
          icon: "35.png"
        }
      }
    }
  }
};
