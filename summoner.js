Module.exports  = {
	  summoner： {
	    s_1 ： {
	      skill_name ： “玛娜水晶”，
	      cd ： “ 8 ”，
	      description：
	        “投掷法力水晶对碰撞造成的伤害（9699~14804）和（7759~11844）造成外锥形状。受损的目标在3秒时减速60％”，
	      additional_effects ： [ “ ” ]，
	      type： [ “单技” ]，
	      time： [ “ ” ]，
	      icon： “ CHwij7t.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “心灵增强”，
	          description： “将 MP使用量减少44％”，
	          icon： “ 2RbMnoo.png ”
	        }，
	        e_2 ： {
	          effect_name ： “远程启动”，
	          description： “将技能范围提高2米”，
	          icon： “ SoLHNDZ.png ”
	        }，
	        e_3 ： {
	          effect_name ： “慢速增强”，
	          description： “将缓慢效果的持续时间增加1秒”，
	          icon： “ nIdDNjH.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “火焰水晶”，
	          description： “伤害提高25％”，
	          icon： “ 5yIY8l5.png ”
	        }，
	        e_2 ： {
	          effect_name ： “冰晶”，
	          description： “ 20％的几率将敌人冻结2秒”，
	          icon： “ HdZ3Crk.png ”
	        }，
	        e_3 ： {
	          effect_name ： “雷霆水晶”，
	          description： “将爆击率提高30％”，
	          icon： “ UmuzakL.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “ 链式 ”，
	          description：
	            “成功击中，锥形爆炸，射程增加30％”，
	          icon： “ 32F9lxY.png ”
	        }，
	        e_2 ： {
	          effect_name ： “区域爆炸”，
	          description：
	            “成功击中时移除了锥形AOE但在圆圈中爆炸，增加了30％的伤害和20％的缓慢效果”，
	          icon： “ xqsOSNR.png ”
	        }
	      }
	    }，
	    s_2 ： {
	      skill_name ： “即时爆炸”，
	      cd ： “ 12 ”，
	      description：
	        “在光标指定爆炸凝聚法力消耗能量（14603~22292）伤害”，
	      additional_effects ： [ “中立[低] ” ]，
	      type： [ “指定” ]，
	      time： [ “ ” ]，
	      icon： “ O3KhAFY.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “洞察力”，
	          description： “将技能范围提高2米”，
	          icon： “ SoLHNDZ.png ”
	        }，
	        e_2 ： {
	          effect_name ： “破坏增强”，
	          description： “添加Lv1破坏效果”，
	          icon： “ t2cMfkL.png ”
	        }，
	        e_3 ： {
	          effect_name ： “能量控制”，
	          description：
	            “成功击中，将古灵测量仪的增益提高50％”，
	          icon： “ 11MLrbC.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “ 暴击 ”，
	          description： “将爆击率提高30％”，
	          icon： “ qp8CE16.png ”
	        }，
	        e_2 ： {
	          effect_name ： “ 闪瞎 ”，
	          description：
	            “成功击中时，将目标睡眠2秒，但将CD增加4秒”，
	          icon： “ TR1aIIB.png ”
	        }，
	        e_3 ： {
	          effect_name ： “慢目标”，
	          description：
	            “如果目标效果缓慢，则将伤害提高40％”，
	          icon： “ 5yIY8l5.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “ 爆发 ”，
	          description：
	            “增加爆炸延迟，但伤害提高50％，射程增加30％”，
	          icon： “ xqsOSNR.png ”
	        }，
	        e_2 ： {
	          effect_name ： “这是一个陷阱！”，
	          description：
	            “创造一个在敌人靠近时自动爆炸的地雷，并将敌人的移动速度降低60％，持续3秒”，
	          icon： “ oxGXfhi.png ”
	        }
	      }
	    }，
	    s_3 ： {
	      skill_name ： “加速风鸟”，
	      cd ： “ 24 ”，
	      description：
	        “召唤风鸟群，并且可以在持有时自由移动。技能可以持续长达4秒，最多可以造成（49588/75678）伤害”，
	      additional_effects ： [
	        “中和[中] ”，
	        “背部攻击”，
	        “免疫[僵硬] ”
	      ]
	      type ： [ “ 持续 ” ]，
	      time： [ “ 4秒” ]，
	      icon ： “ zPhjjMu.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “快速准备”，
	          description： “冷却时间减少4秒”，
	          icon： “ DXzNTSi.png ”
	        }，
	        e_2 ： {
	          effect_name ： “累积能量”，
	          description：
	            “掌握技能不再增加古老的规格，但如果保持4秒或更长时间，则获得1个古代灵魂球，有30％的几率”，
	          icon： “ j9eW4TE.png ”
	        }，
	        e_3 ： {
	          effect_name ： “腹部呼吸”，
	          description： “功率计消耗减少5 ”，
	          icon： “ ZYlrZ9I.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “火鸟”，
	          description： “持有时将伤害提高30％”，
	          icon： “ 5yIY8l5.png ”
	        }，
	        e_2 ： {
	          effect_name ： “冰鸟”，
	          description：
	            “持技能0.5秒或更长时间可以消除僵硬效果，但会使敌人的移动速度降低60％，持续3秒”，
	          icon： “ C42y0cZ.png ”
	        }，
	        e_3 ： {
	          effect_name ： “法师的智慧”，
	          description： “最长保持时间增加到5s ”，
	          icon： “ 8IxcdAX.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “雀鸟群”，
	          description：
	            “召唤更多的鸟，将技能范围提高30％，而忽略50％的魔法防御”，
	          icon： “ bjbQ0Fr.png ”
	        }，
	        e_2 ： {
	          effect_name ： “母鸟”，
	          description：
	            “持有技能0.5秒或更长time在召开结束时另外召唤母鸟”，
	          icon： “ nDL4tKC.png ”
	        }
	      }
	    }，
	    s_4 ： {
	      skill_name ： “火焰驹”，
	      cd ： “ 16 ”，
	      description：
	        “无情的火马跑过来对付（14603/22292）伤害和空中敌人。火马在最大技能距离达到最大潜力100％。”，
	      additional_effects ： [ “中立[低] ”，“皮尔斯[等级1] ” ]，
	      type： [ “单技” ]，
	      time： [ “ ” ]，
	      icon ： “ 5Dr1Hce.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “ 鲁莽 ”，
	          description： “伤害提高20％”，
	          icon： “ E70cTPv.png ”
	        }，
	        e_2 ： {
	          effect_name ： “重要打击”，
	          description： “将爆击率提高25％”，
	          icon： “ GjqRFi1.png ”
	        }，
	        e_3 ： {
	          effect_name ： “完整”，
	          description： “技能从最大潜力的50％开始”，
	          icon： “ 1qT5V38.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “千里马”，
	          description： “将技能范围提高4米”，
	          icon： “ ttirMI4.png ”
	        }，
	        e_2 ： {
	          effect_name ： “ 千里行 ”，
	          description：
	            “将旅行速度提高20％而忽略20％的魔法防御”，
	          icon： “ LmuvcKG.png ”
	        }，
	        e_3 ： {
	          effect_name ： “弱指定”，
	          description：
	            “对受到免疫力恢复的敌人造成100％的致命伤害”，
	          icon： “ a5qp6Tt.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “提升”，
	          description： “技能范围提高20％，燃烧敌人5秒”，
	          icon： “ bjbQ0Fr.png ”
	        }，
	        e_2 ： {
	          effect_name ： “ 爆破 ”，
	          description：
	            “技能在其范围的末端爆炸，造成额外的伤害”，
	          icon： “ xqsOSNR.png ”
	        }
	      }
	    }，
	    s_5 ： {
	      skill_name ： “法鲁 ”，
	      cd ： “ 30 ”，
	      description：
	        “在光标处投掷火焰以对付（3088/4717）伤害并召唤火焰精神法鲁。法鲁攻击附近的敌人15秒并造成（4741/7237）伤害”，
	      additional_effects ： [ “ ” ]，
	      type： [ “指定” ]，
	      time： [ “ ” ]，
	      icon： “ JKyEWKJ.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “洞察力”，
	          description： “将技能范围提高2米”，
	          icon： “ SoLHNDZ.png ”
	        }，
	        e_2 ： {
	          effect_name ： “爆炸增强”，
	          description： “爆炸伤害提高50％”，
	          icon： “ E70cTPv.png ”
	        }，
	        e_3 ： {
	          effect_name ： “广泛爆炸”，
	          description： “爆炸面积增加30％”，
	          icon： “ rlevb4r.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “攻击增强”，
	          description： “将Fauru的伤害提高30％”，
	          icon： “ eajjkDJ.png ”
	        }，
	        e_2 ： {
	          effect_name ： “训练结果”，
	          description： “将法鲁的攻击爆炸区域提高20％”，
	          icon： “ IpJktTA.png ”
	        }，
	        e_3 ： {
	          effect_name ： “召唤维护”，
	          description： “将法鲁的召唤持续time增加3秒”，
	          icon： “ POnpICE.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “蓝焰法鲁”，
	          description：
	            “每次增加法鲁的攻击和移动速度和视野狂暴，减少攻击间隔time，可以激活一个锥形的火焰呼吸，100％的伤害可以吹走敌人”，
	          icon： “ t1cGFcK.png ”
	        }，
	        e_2 ： {
	          effect_name ： “炽烈的法鲁”，
	          description：
	            “增加法鲁的攻击伤害，可以激活自毁以引发爆炸。将CD减少5秒”，
	          icon： “ dgg9J9i.png ”
	        }
	      }
	    }，
	    s_6 ： {
	      skill_name ： “释放遗嘱”，
	      cd ： “ 20 ”，
	      description：
	        “释放大风以驱逐敌人并造成（15876/24235）伤害”，
	      additional_effects ： [ “ 背部攻击 ”，“免疫僵直 ” ]，
	      type： [ “单技” ]，
	      time： [ “ ” ]，
	      icon： “ xFXzmI3.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “优秀的机动”，
	          description：
	            “将技能的行程增加2米。如果学习旋风三脚架，只增加1米”，
	          icon： “ frf2qov.png ”
	        }，
	        e_2 ： {
	          effect_name ： “法力控制”，
	          description： “ 50％几率不消耗MP ”，
	          icon： “ 2RbMnoo.png ”
	        }，
	        e_3 ： {
	          effect_name ： “能量控制”，
	          description：
	            “成功击中，将古灵测量仪的增益提高50％”，
	          icon： “ 11MLrbC.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “远程爆炸”，
	          description： “技能范围提高25％”，
	          icon： “ ttirMI4.png ”
	        }，
	        e_2 ： {
	          effect_name ： “冻结冷”，
	          description： “ 25％的几率使敌人冻结3s ”，
	          icon： “ HdZ3Crk.png ”
	        }，
	        e_3 ： {
	          effect_name ： “尘风”，
	          description：
	            “增加僵硬和打击距离的持续时间，使敌人减速5秒的几率为50％”，
	          icon： “ OpQyn4M.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “ 旋风 ”，
	          description：
	            “技能动作变成旋转，攻击周围的所有敌人”，
	          icon： “ Bybk6tw.png ”
	        }，
	        e_2 ： {
	          effect_name ： “法力放大”，
	          description：
	            “将MP消耗增加50％，将伤害提高100％”，
	          icon： “ Cp9hVlE.png ”
	        }
	      }
	    }，
	    s_7 ： {
	      skill_name ： “ Maririn ”，
	      cd ： “ 45 ”，
	      description：
	        “召唤珊瑚精灵Maririn。马里林攻击附近的敌人20秒并造成（6316/9642）伤害”，
	      additional_effects ： [ “ Back Attack ” ]，
	      type： [ “单技” ]，
	      time： [ “ ” ]，
	      icon： “ 7DmWJ1k.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “攻击增强”，
	          description： “将马里林的伤害提高20％”，
	          icon： “ akITDDZ.png ”
	        }，
	        e_2 ： {
	          effect_name ： “铁皮”，
	          description： “ Maririn减少30％的伤害”，
	          icon： “ SfUebeR.png ”
	        }，
	        e_3 ： {
	          effect_name ： “ Healing Etere ”，
	          description： “当Maririn去世时，他会降低治疗效果”，
	          icon： “ SKW6lN3.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “嘲讽命令”，
	          description：
	            “授予嘲讽技能。可以激活立即嘲笑除了玩家2秒以外的所有敌人。种子或更高级别的暴徒不能被嘲笑一段time”，
	          icon： “ 6XRgQFW.png ”
	        }，
	        e_2 ： {
	          effect_name ： “充电命令”，
	          description：
	            “授予充电技能。可以激活向敌人冲击2秒”，
	          icon： “ TR1aIIB.png ”
	        }，
	        e_3 ： {
	          effect_name ： “中立命令”，
	          description：
	            “授予中和技能。可以激活施放Neut（M）效果技能。”，
	          icon： “ LmuvcKG.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “圣餐”，
	          description： “将Maririn的持续time增加10秒”，
	          icon： “ 0BMcHYE.png ”
	        }，
	        e_2 ： {
	          effect_name ： “珊瑚精神”，
	          description： “将马里林的HP增加100％”，
	          icon： “ nDL4tKC.png ”
	        }
	      }
	    }，
	    s_8 ： {
	      skill_name ： “翼灵”，
	      cd ： “ 30 ”，
	      description：
	        “召唤鹰在光标指定处计算出风灵。最多可以持续4s来造成（57918/88439）伤害”，
	      additional_effects ： [ “中和[中高] ”，“免疫：僵硬” ]，
	      type ： [ “ Hold ” ]，
	      time： [ “ 4秒” ]，
	      icon： “ OsECdvv.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “喂养猎物”，
	          description：
	            “对名为班级或以下的暴徒增加30％的伤害”，
	          icon： “ E70cTPv.png ”
	        }，
	        e_2 ： {
	          effect_name ： “强化长袍”，
	          description： “持有时减少30％的伤害”，
	          icon： “ SfUebeR.png ”
	        }，
	        e_3 ： {
	          effect_name ： “法力再生”，
	          description： “持有50％的MP再生”，
	          icon： “ H6JBBPw.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “雷霆精神”，
	          description： “将爆击率提高30％”，
	          icon： “ qp8CE16.png ”
	        }，
	        e_2 ： {
	          effect_name ： “大地之灵”，
	          description： “ 10％几率使敌人石化2s ”，
	          icon： “ HdZ3Crk.png ”
	        }，
	        e_3 ： {
	          effect_name ： “训练结果”，
	          description： “将技能范围提高25％”，
	          icon： “ SPgHuhl.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “台风”，
	          description： “伤害提高30％，致命伤害提高100％”，
	          icon： “ s2QfHGg.png ”
	        }，
	        e_2 ： {
	          effect_name ： “圣餐”，
	          description：
	            “命中间隔减少33％。古代精神测量仪的增加会增加，因为它会更多。”，
	          icon： “ KEm9ET8.png ”
	        }
	      }
	    }，
	    s_9 ： {
	      skill_name ： “电力释放”，
	      cd ： “ 12 ”，
	      description：
	        “投掷浓缩电球以造成（3704/5654）伤害并造成1s的电场造成（8643/13200）伤害”，
	      additional_effects ： [ “ ” ]，
	      type： [ “单技” ]，
	      time： [ “ ” ]，
	      icon： “ LJ02W07.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “ 连锁 ”，
	          description：
	            “转变为连锁技能。将MP成本提高50％并激活链技能提升CD 12 ”，
	          icon： “ jC42yG9.png ”
	        }，
	        e_2 ： {
	          effect_name ： “快速投射”，
	          description： “将铸造运动速度提高20％”，
	          icon： “ nRO8OuT.png ”
	        }，
	        e_3 ： {
	          effect_name ： “急速发射”，
	          description： “将弹丸行进速度提高20％”，
	          icon： “ ZYlrZ9I.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “电力增强”，
	          description：
	            “僵硬持续time和致命一击率提高20％”，
	          icon： “ qp8CE16.png ”
	        }，
	        e_2 ： {
	          effect_name ： “喂养猎物”，
	          description：
	            “对Minion或Normal类的暴徒造成的伤害提高30％”，
	          icon： “ FtChNZ3.png ”
	        }，
	        e_3 ： {
	          effect_name ： “弱指定”，
	          description：
	            “对伤害恢复免疫的敌人造成的伤害提高40％”，
	          icon： “ a5qp6Tt.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “超级电流区域”，
	          description：
	            “在到达指定，创建一个3.5秒的电场，每0.5秒造成一次伤害并将敌人拉向中心”，
	          icon： “ xqsOSNR.png ”
	        }，
	        e_2 ： {
	          effect_name ： “高压”，
	          description： “给敌人充电2s ”，
	          icon： “ uMM49tX.png ”
	        }
	      }
	    }，
	    s_10 ： {
	      skill_name ： “粘苔藓沼泽”，
	      cd ： “ 20 ”，
	      description：
	        “召唤粘性苔藓沼泽在光标处每秒造成（1744/2660）指定伤害，并使站在其上方的所有目标的移动速度降低60％”，
	      additional_effects ： “ ”，
	      type： “指定”，
	      time： “ ”，
	      icon： “ 9F0aHD2.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “心灵增强”，
	          description： “减少50％的MP消耗”，
	          icon： “ Tripod_Tier_1_34.png ”
	        }，
	        e_2 ： {
	          effect_name ： “快速准备”，
	          description： “降低CD 3s ”，
	          icon： “ Tripod_Tier_1_56.png ”
	        }，
	        e_3 ： {
	          effect_name ： “战斗准备”，
	          description： “在施法时将AP增加15％，持续4s ”，
	          icon： “ Tripod_Tier_1_50.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “增加扩散”，
	          description： “加速沼泽的蔓延”，
	          icon： “ Tripod_Tier_2_53.png ”
	        }，
	        e_2 ： {
	          effect_name ： “毒沼泽”，
	          description： “伤害提高200％”，
	          icon： “ Tripod_Tier_2_1.png ”
	        }，
	        e_3 ： {
	          effect_name ： “粘性沼泽”，
	          description： “将慢效果提高20％”，
	          icon： “ Tripod_Tier_2_47.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “沼泽女王”，
	          description： “将沼泽的面积增加30％”，
	          icon： “ Tripod_Tier_3_7.png ”
	        }，
	        e_2 ： {
	          effect_name ： “酸性沼泽”，
	          description： “将所有敌人的魔法防御降低50％”，
	          icon： “ Tripod_Tier_3_46.png ”
	        }
	      }
	    }，
	    s_11 ： {
	      skill_name ： “奇拉 ”，
	      cd ： “ 24 ”，
	      description：
	        “召唤2个奇拉，百合花精灵。在附近的敌人身上攻击10秒并造成（1348/2057）伤害”，
	      additional_effects ： [ “ ” ]，
	      type： [ “单技” ]，
	      time： [ “ ” ]，
	      icon ： “ vErbmAQ.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “心灵增强”，
	          description： “减少50％的MP消耗”，
	          icon： “ 2RbMnoo.png ”
	        }，
	        e_2 ： {
	          effect_name ： “法力放大”，
	          description：
	            “增加MP消耗了50％和AP 20％在铸造5S ”，
	          icon： “ DXzNTSi.png ”
	        }，
	        e_3 ： {
	          effect_name ： “召唤维护”，
	          description： “将召唤持续time增加2秒”，
	          icon： “ BtWx8s1.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “有毒种子”，
	          description： “命中对敌人使用毒药5s ”，
	          icon： “ zHwYyaV.png ”
	        }，
	        e_2 ： {
	          effect_name ： “冰冷的种子”，
	          description：
	            “命中应用缓慢，使移动速度降低40％，持续3s ”，
	          icon： “ wGYSIwd.png ”
	        }，
	        e_3 ： {
	          effect_name ： “装甲拆除”，
	          description： “命中应用所有防御减少2％（最大40％）”，
	          icon： “ 2JPSkpi.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “包召唤”，
	          description： “召唤3个种子 ”，
	          icon： “ 4wG5uWK.png ”
	        }，
	        e_2 ： {
	          effect_name ： “精英召唤”，
	          description：
	            “只召唤一个具有更大伤害的精英版本，增加40％的攻击范围，并且可以在击中时造成僵硬”，
	          icon： “ nDL4tKC.png ”
	        }
	      }
	    }，
	    s_12 ： {
	      skill_name ： “地球粉碎”，
	      cd ： “ 24 ”，
	      description：
	        “在光标处造成强烈地震，造成（24696/37702）伤害和空降”，
	      additional_effects ： [
	        “毁灭[等级1] ”，
	        “中和[中] ”，
	        “免疫[僵硬] ”
	      ]
	      type： [ “指定” ]，
	      time： [ “ ” ]，
	      icon ： “ zsQlG3o.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “烈焰粉碎”，
	          description： “伤害提高20％”，
	          icon： “ E70cTPv.png ”
	        }，
	        e_2 ： {
	          effect_name ： “ Glacial Shatter ”，
	          description： “ 60％的几率将敌人冻结3秒”，
	          icon： “ fZE0IYD.png ”
	        }，
	        e_3 ： {
	          effect_name ： “结算”，
	          description：
	            “成功铸造后，每隔一秒钟再创造一次额外的碎片”，
	          icon： “ ncr6Vb8.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “快速投射”，
	          description： “将施法速度提高20％”，
	          icon： “ rP1umQI.png ”
	        }，
	        e_2 ： {
	          effect_name ： “颤抖”，
	          description： “在施法期间额外击中4次”，
	          icon： “ cD0keDA.png ”
	        }，
	        e_3 ： {
	          effect_name ： “坚韧”，
	          description： “在施法期间格兰特击中恢复免疫”，
	          icon： “ a7DgAOn.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “大裂谷”，
	          description：
	            “将MP消耗量提高50％，并将敌人的魔法防御力降低60％”，
	          icon： “ UC8RykM.png ”
	        }，
	        e_2 ： {
	          effect_name ： “地震”，
	          description：
	            “技能面积增加25％，中和指定增加40％”，
	          icon： “ bjbQ0Fr.png ”
	        }
	      }
	    }，
	    s_13 ： {
	      skill_name ： “水之灵”，
	      cd ： “ 20 ”，
	      description：
	        “召唤水灵2秒并造成（25970/39626）伤害。”，
	      additional_effects ： [ “ 背部攻击 ” ]，
	      type： [ “单技” ]，
	      time： [ “ ” ]，
	      icon： “ sgOc7Iy.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “快速投射”，
	          description： “将铸造运动速度提高20％”，
	          icon： “ nRO8OuT.png ”
	        }，
	        e_2 ： {
	          effect_name ： “强化长袍”，
	          description： “精神上升时，伤害减免30％”，
	          icon： “ SfUebeR.png ”
	        }，
	        e_3 ： {
	          effect_name ： “法力再生”，
	          description：
	            “在精神提升的同时，将MP再生率提高100％”，
	          icon： “ H6JBBPw.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “泥灵”，
	          description： “为2s应用慢效”，
	          icon： “ 2JPSkpi.png ”
	        }，
	        e_2 ： {
	          effect_name ： “喷水精神”，
	          description： “最后一击会造成更大的伤害，并将敌人吹走”，
	          icon： “ Ntx7DAR.png ”
	        }，
	        e_3 ： {
	          effect_name ： “弱指定”，
	          description：
	            “忽视50％的魔法防御对抗一个恢复免疫的敌人”，
	          icon： “ a5qp6Tt.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “精神的智慧”，
	          description：
	            “将召唤持续time增加1秒，并将伤害逐渐增加至50％”，
	          icon： “ 3PXf9mr.png ”
	        }，
	        e_2 ： {
	          effect_name ： “水炮”，
	          description：
	            “技能角度降低50％，但攻击距离增加100％”，
	          icon： “ bjbQ0Fr.png ”
	        }
	      }
	    }，
	    s_14 ： {
	      skill_name ： “电风暴”，
	      cd ： “ 24 ”，
	      description：
	        “在施放法术力2秒后，制造电风暴5秒以造成（47632/72706）伤害”，
	      additional_effects ： [ “中和[中] ” ]，
	      type： [ “演员time” ]，
	      time： [ “ 2秒” ]，
	      icon： “ OFdCWTj.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “法力控制”，
	          description： “ 50％几率不消耗MP ”，
	          icon： “ 2RbMnoo.png ”
	        }，
	        e_2 ： {
	          effect_name ： “快速投射”，
	          description： “将施法速度提高20％”，
	          icon： “ nRO8OuT.png ”
	        }，
	        e_3 ： {
	          effect_name ： “强化长袍”，
	          description： “施法时减少30％的伤害”，
	          icon： “ SfUebeR.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “重要打击”，
	          description：
	            “将MP消耗量提高25％，关键命中率提高50％”，
	          icon： “ qp8CE16.png ”
	        }，
	        e_2 ： {
	          effect_name ： “训练结果”，
	          description： “将风暴的大小增加20％”，
	          icon： “ SPgHuhl.png ”
	        }，
	        e_3 ： {
	          effect_name ： “持久”，
	          description：
	            “将MP消耗增加75％，召唤持续time增加3s ”，
	          icon： “ POnpICE.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “深红风暴”，
	          description：
	            “将命中间隔减少33％。古代精神测量仪的增加会增加，因为它会更多”，
	          icon： “ 32F9lxY.png ”
	        }，
	        e_2 ： {
	          effect_name ： “归巢风暴”，
	          description：
	            “将古代精神仪器的增加提高50％并授予慢慢向敌人移动的归巢能力”，
	          icon： “ XfeC65B.png ”
	        }
	      }
	    }，
	    s_15 ： {
	      skill_name ： “苏鲁迪 ”，
	      cd ： “ 30 ”，
	      description：
	        “召唤小光灵苏鲁迪。与角色一起旅行20s以达成（4410/6732）伤害”，
	      additional_effects ： [ “ ” ]，
	      type： [ “单技” ]，
	      time： [ “ ” ]，
	      icon： “ SQ1n4Q6.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “眩晕效果”，
	          description： “成功命中时有15％的几率使敌人昏迷2 ”，
	          icon： “ ZkTpIPx.png ”
	        }，
	        e_2 ： {
	          effect_name ： “高速弹丸”，
	          description： “将攻击弹丸速度提高20％”，
	          icon： “ ZYlrZ9I.png ”
	        }，
	        e_3 ： {
	          effect_name ： “光的成长”，
	          description： “ 10年后，苏鲁迪的攻击增加了50％”，
	          icon： “ akITDDZ.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “ 智者苏鲁迪”，
	          description：
	            “将视力和攻击范围提高20％并减少命中间隔”，
	          icon： “ rP1umQI.png ”
	        }，
	        e_2 ： {
	          effect_name ： “ 光者苏鲁迪”，
	          description： “技能攻击提高30％”，
	          icon： “ 5yIY8l5.png ”
	        }，
	        e_3 ： {
	          effect_name ： “虚荣苏鲁迪”，
	          description： “增加召唤持续时间5s ”，
	          icon： “ POnpICE.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “碰撞忽略”，
	          description：
	            “提高HP再生率，不会与普通暴徒相撞”，
	          icon： “ 9eXzPWU.png ”
	        }，
	        e_2 ： {
	          effect_name ： “法力再生”，
	          description：
	            “在精神提升的同时，将MP再生率提高100％”，
	          icon： “ FnpTiuc.png ”
	        }
	      }
	    }，
	    s_16 ： {
	      skill_name ： “古代矛”，
	      cd ： “ 36 ”，
	      description：
	        “在施放法力值2.5秒后，在光标处召唤一支古矛以造成（63896~97537）伤害并击倒目标直接击中并交易”，
	      additional_effects ： [ “皮尔斯[等级1] ”，“中立[中高] ”，
	      type： [ “演员time” ]，
	      time： [ “ 2.5秒” ]，
	      icon ： “ dnNgIW7.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “法力控制”，
	          description： “ 50％几率不消耗MP ”，
	          icon： “ 2RbMnoo.png ”
	        }，
	        e_2 ： {
	          effect_name ： “快速投射”，
	          description： “将施法速度提高20％”，
	          icon： “ nRO8OuT.png ”
	        }，
	        e_3 ： {
	          effect_name ： “洞察力”，
	          description： “将技能范围提高2米”，
	          icon： “ SoLHNDZ.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “炽烈的矛”，
	          description： “矛应用燃烧效果5s ”，
	          icon： “ 5yIY8l5.png ”
	        }，
	        e_2 ： {
	          effect_name ： “冰河矛”，
	          description：
	            “直接用长矛击中敌人并对外界的敌人施加缓慢效果”，
	          icon： “ HdZ3Crk.png ”
	        }，
	        e_3 ： {
	          effect_name ： “地球矛”，
	          description：
	            “直接击中长矛可以使伤害加成效果提高20％。长矛击中敌人的中心和空降范围”，
	          icon： “ Ntx7DAR.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “简明力量”，
	          description： “之后的额外爆炸”，
	          icon： “ xqsOSNR.png ”
	        }，
	        e_2 ： {
	          effect_name ： “古代力量”，
	          description：
	            “授予恢复免疫力，并以立即MP消耗和CD为代价增加中和指定50％”，
	          icon： “ 6vzVrvN.png ”
	        }
	      }
	    }，
	    s_17 ： {
	      skill_name ： “雷恩的保护”，
	      cd ： “ 60 ”，
	      description：
	        “接收Rayne的保护罩，可吸收高达（10％~30％）的最大HP 6s ”，
	      additional_effects ： [ “ ” ]，
	      type： [ “单技” ]，
	      time： [ “ ” ]，
	      icon ： “ 4emLA77.png ”，
	      tripod_lvl1 ： {
	        e_1 ： {
	          effect_name ： “保护之风”，
	          description： “在施放时将敌人推开”，
	          icon： “ s72YiQJ.png ”
	        }，
	        e_2 ： {
	          effect_name ： “聚焦能量”，
	          description： “ 40％几率获得1个古代灵魂球”，
	          icon： “ j9eW4TE.png ”
	        }，
	        e_3 ： {
	          effect_name ： “净化”，
	          description： “在施法时移除1个异常debuff ”，
	          icon： “ 1qT5V38.png ”
	        }
	      }，
	      tripod_lvl2 ： {
	        e_1 ： {
	          effect_name ： “屏障增强”，
	          description： “增加盾牌数量100％”，
	          icon： “ 9swgCXc.png ”
	        }，
	        e_2 ： {
	          effect_name ： “障碍维护”，
	          description： “将盾牌持续时间增加4秒”，
	          icon： “ POnpICE.png ”
	        }，
	        e_3 ： {
	          effect_name ： “敏捷的脚”，
	          description： “盾牌升起时移动速度提高20％”，
	          icon： “ LmuvcKG.png ”
	        }
	      }，
	      tripod_lvl3 ： {
	        e_1 ： {
	          effect_name ： “ 共鸣 ”，
	          description：
	            “盾牌因爆炸而爆发，导致附近敌人昏迷4 ”，
	          icon： “ uMM49tX.png ”
	        }，
	        e_2 ： {
	          effect_name ： “加速盾牌”，
	          description： “盾牌上升30％CDR ”，
	          icon： “ mJ47SLb.png ”
	        }
	      }
	    }，
	    ult ： {
	      skill_name ： “ 摄氏 ”，
	      cd ： “ 300 ”，
	      description：
	        “召唤雷神之王摄氏空降并对该地区造成33006指定伤害. 摄氏提供20秒的辅助”，
	      additional_effects ： [
	        “中和[中] ”，
	        “背部攻击”，
	        “免疫[命中恢复和异常状态] ”
	      ]
	      type： [ “链” ]，
	      time： [ “ ” ]，
	      icon： “ eVrfA9S.png ”
	    }
	  }
	};

