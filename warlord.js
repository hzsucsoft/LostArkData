module.exports = {
  warlord: {
    s_1: {
      skill_name: "Sharp Spear",
      cd: "8",
      description: "Strongly stab forward with the spear to inflict x damage ",
      additional_effects: "Incapacitate [Low],Back Attack",
      time: "",
      icon: "TbUnNwV.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Decreases skill cooldown by 2s   ",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Damage increased",
          description: "Increases damage by 15% ",
          icon: "DI0jbqj.png"
        },
        e_3: {
          effect_name: "Attack speed",
          description: "Increase attack speed by 20% ",
          icon: "9VyE0qU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Piercing",
          description:
            "On hit, decrease target`s Defense by 20% for 5s, and inflict Bleed status ",
          icon: "ktJIUvL.png"
        },
        e_2: {
          effect_name: "Vulnerable Target",
          description:
            "Damage is increased by 60% when used against a target under crowd control effects ",
          icon: "HWuM5x7.png"
        },
        e_3: {
          effect_name: "Multi-Strike",
          description:
            "Stabs your spear three times in front of you, but the damage of each strike is decreased by 50% ",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Concentrated Strike",
          description:
            "This skill can be charged multiple times. Each charge level adds extra attacks that deal an additional 50%, 100%, or 250% damage. Charging the skill increases its cooldown by 16 seconds ",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "Improved Stabbing",
          description:
            "Increases the number of attacks by 1. The damage dealt is increased by 50 ",
          icon: "32F9lxY.png"
        }
      },
      type: "Tap"
    },
    s_2: {
      skill_name: "Rising Spear",
      cd: "12",
      description:
        "Strikes a spear into the ground, dealing [ ] damage. Pull out the spear to lift enemies in front of you",
      additional_effects: ["Incapacitate [medium]", "Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "MrAZpAV.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Defense Preparation",
          description:
            "Successful hits grant a 20% damage reduction bonus for 4 seconds",
          icon: "SfUebeR.png"
        },
        e_2: {
          effect_name: "Attack speed",
          description: "Increases attack speed by 15%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Damage increased",
          description: "Increases damage done by 10%",
          icon: "DI0jbqj.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Backstep Bombardment",
          description:
            "Performs a bombardment instead of an upward strike, which pushes the player backwards. The bombardment deals an additional 30% damage and lifts enemies",
          icon: ""
        },
        e_2: {
          effect_name: "Way of Fire",
          description:
            "Immediately fires a launcher at lifted enemies and burns them",
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
          effect_name: "Toughness",
          description:
            "The caster becomes invulnerable to crowd control effects while performing the skill",
          icon: "6vzVrvN.png"
        },
        e_2: {
          effect_name: "Spot Weakness",
          description:
            "Reduces attack speed, but the area of effect is increased by 30%. Damage is increased by 80% and knocks back enemies. Skill cooldown is increased by 2 seconds",
          icon: "nws09aw.png"
        }
      }
    },
    s_3: {
      skill_name: "Fire Bullet",
      cd: "10",
      description:
        "Fires the cannon attached to your weapon, damaging an enemy within short range  ",
      additional_effects: "Incapacitate [medium],Back Attack",
      time: "",
      icon: "4wX9VGX.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Improved Armor",
          description:
            "Gain a 20%  damage reduction bonus while performing the skill     ",
          icon: "SfUebeR.png"
        },
        e_2: {
          effect_name: "Lucky Chance",
          description:
            "Successful hits have a 50%  chance to reduce the skill cooldown by 4 seconds     ",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Mind Enhancement",
          description: "Decrease MP consumption by 50%      ",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Destruction",
          description: "Increases destruction level by 1  ",
          icon: ""
        },
        e_2: {
          effect_name: "Flammable",
          description: "Burns your target  ",
          icon: "cXMAUIN.png"
        },
        e_3: {
          effect_name: "Damage increased",
          description: "Increases damage by 25%   ",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Aggressive Opportunity",
          description:
            "Fires the cannon twice.  Each shot deals an additional 50%. Additionally, your target is pushed back further  ",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Concentrated Shelling",
          description:
            "Reduces attack speed but increases damage dealt by 80%. Also increases the area of effect by 30%  and cooldown by 2 seconds  ",
          icon: "bjbQ0Fr.png"
        }
      },
      type: "Tap"
    },
    s_4: {
      skill_name: "Shield Slam",
      cd: "16",
      description:
        "Slams your shield into an enemy, dealing [] damage. Can be used a second time [ ] immediately afterwards",
      additional_effects: ["Incapacitate [high]"],
      type: ["Combo"],
      time: [""],
      icon: "DwB8YCC.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Unstoppable",
          description:
            "Successful hits have a 20% chance to reset the cooldown",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Defensive Preparation",
          description:
            "Landing two successful hits grants a 20% damage reduction bonus for 5 seconds",
          icon: "SfUebeR.png"
        },
        e_3: {
          effect_name: "Attack speed",
          description: "Increase attack speed by 15%",
          icon: "9VyE0qU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Gear Destruction",
          description:
            "Landing two successful hits reduces the enemy’s attack power and defense by 20% for 5 seconds",
          icon: "2JPSkpi.png"
        },
        e_2: {
          effect_name: "Superior Mobility",
          description: "Increases the skill range of the first hit by 1m",
          icon: "DLz43Zq.png"
        },
        e_3: {
          effect_name: "Spot Weakness",
          description:
            "Increases damage done any target with the Invulnerable status by 60%",
          icon: "a5qp6Tt.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Extra Hit",
          description:
            "Increases the number of hits by 2. The additional hits deal 20% and 60% extra damage",
          icon: "hXBL5OK.png"
        },
        e_2: {
          effect_name: "Flashbang",
          description:
            "You can use the shield bash three times, and damage is increased by 30%. It stuns enemy on the last hit",
          icon: "dgg9J9i.png"
        }
      }
    },
    s_5: {
      skill_name: "Bash",
      cd: "10",
      description:
        "Strikes an enemy with your shield for [ ] and stuns it for 3 seconds. ",
      additional_effects: "Incapacitate [Mid-High]",
      time: "",
      icon: "eemdICW.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Damage increased",
          description: "Increases damage by 15%    ",
          icon: "DI0jbqj.png"
        },
        e_2: {
          effect_name: "Attack speed",
          description: "Increase attack speed by 20%    ",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Blitz Bash",
          description:
            "25%  chance to inflict 50%  more damage to your target   ",
          icon: "HR5NqtN.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Attack Preparation",
          description:
            "Successful hits grant a 25%  damage increase buff for 5 seconds   ",
          icon: "AFgfZrT.png"
        },
        e_2: {
          effect_name: "Incapacitate",
          description: "Increases incapacitate point by 20%    ",
          icon: "cimRspI.png"
        },
        e_3: {
          effect_name: "Armor Destruction",
          description:
            "Successful hits reduce the enemy’s defense by 30%  for 6 seconds   ",
          icon: "ktJIUvL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Strike",
          description: "Increases the area of effect by 30%    ",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "Echo",
          description: "Increases the stun effect duration by 2 seconds   ",
          icon: "0BMcHYE.png"
        }
      },
      type: "Tap"
    },
    s_6: {
      skill_name: "Dash Upper Fire",
      cd: "16",
      description:
        "Rushes to a foe and lifts the target, dealing [ ] damage, then follows with a combo attack, firing a cannon that deals [] damage. Inflicts an additional [] damage to targets in the air",
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
          effect_name: "Quick Preparation",
          description: "Decreases skill cooldown by 3 seconds",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Defensive Preparation",
          description:
            "Successful hits grant a 20% damage reduction bonus for 4 seconds",
          icon: "SfUebeR.png"
        },
        e_3: {
          effect_name: "Offensive Preparation",
          description:
            "Successful hits grant a 15% damage bonus for 4 seconds.",
          icon: "akITDDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Damage increased",
          description: "Increases the cannon’s damage by 50%.",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Drillmaster",
          description: "Increases the cannon’s area of effect by 20%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "Penetration",
          description: "The cannon ignores 50% of a foe’s defense",
          icon: "ktJIUvL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill",
          icon: "6vzVrvN.png"
        },
        e_2: {
          effect_name: "Attack speed",
          description: "Increases attack speed by 20%",
          icon: "JMU1YLm.png"
        }
      }
    },
    s_7: {
      skill_name: "Leap attack",
      cd: "16",
      description:
        "Leap high in the air towards a target location, and inflict [ ] damage to nearby foes upon landing ",
      additional_effects: "Incapacitate [medium]",
      time: "",
      icon: "11ue7yB.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Damage increased",
          description: "Increases damage by 10%   ",
          icon: "DI0jbqj.png"
        },
        e_2: {
          effect_name: "Drill Master",
          description: "Increases the area of effect by 15% ",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Superior Mobility",
          description: "Increases the skill range by 2m ",
          icon: "frf2qov.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Opportunity",
          description:
            "Changes the attack into a combo skill. After landing, you can fire your cannon at your target. This damage of this combo attack is increased by 50%. The skill also knocks the target back and pushes the caster backwards ",
          icon: "cD0keDA.png"
        },
        e_2: {
          effect_name: "Lesser Impact",
          description:
            "Changes the attack into a combo skill. The skill damage is decreased by 50%, but you can leap into the air one more time ",
          icon: "KG9Q6Np.png"
        },
        e_3: {
          effect_name: "Weakening Mobility",
          description:
            "Successful hits reduce your foes’ movement speed by 40% for 3 seconds ",
          icon: "C42y0cZ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Confident Team Member",
          description:
            "Grants party members at the target location a 50% damage reduction buff for 6 seconds ",
          icon: ""
        },
        e_2: {
          effect_name: "Shockwave",
          description:
            "Successful hits knock nearby targets down and lower their defense by 50% for 5 seconds ",
          icon: ""
        }
      },
      type: "Point"
    },
    s_8: {
      skill_name: "Shield Slam",
      cd: "12",
      description:
        "Slams your shield down and deals [] damage to nearby enemies. Decreases enemies movement and attack speed by 20%  for 4 seconds   ",
      additional_effects: "Incapacitate [medium]",
      time: "",
      icon: "LEtHD1y.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Decreases skill cooldown by 3 seconds   ",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Attack speed",
          description: "Increases attack speed by 10%    ",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Eruption",
          description: "Adds a 30%  chance to stun the target for 2 seconds   ",
          icon: "ZkTpIPx.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Drill Master",
          description: "Increases the area of effect by 20%    ",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Earthquake",
          description:
            "Nearby targets are inflicted by a 40%  movement speed and 20%  attack speed penalty   ",
          icon: "2JPSkpi.png"
        },
        e_3: {
          effect_name: "Defensive Preparation ",
          description:
            "Successful hits grant a 15%  damage reduction bonus for 10 seconds   ",
          icon: "oVtc2zd.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Second Wave",
          description:
            "The skill turns into chain skill that can be repeated immediately. The The second hit’s damage is increased by 100%    ",
          icon: "Bybk6tw.png"
        },
        e_2: {
          effect_name: "Assault",
          description:
            "The caster can leap through the air to a target location within 5m, and the skill damage is increased by 50%    ",
          icon: "FpXyekj.png"
        }
      },
      type: "Tap"
    },
    s_9: {
      skill_name: "Chain hook",
      cd: "24",
      description:
        "Throws a chain hook to your target and deals [] damage, then pulls your target towards you and deals [] damage",
      additional_effects: ["Incapacitate [low]"],
      type: ["Tap"],
      time: [""],
      icon: "SG0dbgp.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Decreases skill cooldown by 4 seconds",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Mind Enhancement",
          description: "Decrease MP consumption by 50%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Damage increased",
          description: "Increases damage by 10%",
          icon: "DI0jbqj.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Sharpened Chain Hook",
          description: "Inflicts bleeding on the target for 5 seconds",
          icon: "zHwYyaV.png"
        },
        e_2: {
          effect_name: "Toughness ",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "Offensive Preparation",
          description:
            "Successful hits grant a 20% damage increase for 6 seconds",
          icon: "AFgfZrT.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Drill Master",
          description: "Increases the area of effect by 20%",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "Taunt",
          description:
            "A successful hit taunts a monster that has immunity of the crowd control effects for 2 seconds. Upper grade [seed grade] monsters cannot be taunted again for a certain duration of time",
          icon: "nws09aw.png"
        }
      }
    },
    s_10: {
      skill_name: "Shield charge",
      cd: "16",
      description:
        "The caster raises their shield and charges forward. Each hit causes [ ] damage to foes and knocks them back ",
      additional_effects: "Incapacitate [high], Immune [stiffness]",
      type: "Hold",
      time: " 2 sec",
      icon: "R0rX5GV.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Improved Armor",
          description:
            "Gain a 30% damage reduction bonus while you are performing the skill ",
          icon: "SfUebeR.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Decreases skill cooldown by 3 seconds ",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Damage increased",
          description: "Increases damage by 15% ",
          icon: "DI0jbqj.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Drill Master",
          description: "Increases the area of effect by 20% ",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill ",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "Swift Step",
          description: "Increases the charge speed by 20% ",
          icon: "LmuvcKG.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Unfinished Business",
          description:
            "Thrust a spear after the shield charge, dealing 40% additional damage. The target is lifted into the air ",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "Destructive Weapon",
          description:
            "Each hit grant a 10% damage bonus for 2 seconds. This bonus stacks up to 60% ",
          icon: ""
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
          effect_name: "Wound",
          description: "A critical hit causes bleeding on your target.",
          icon: "1PceV71.png"
        },
        e_2: {
          effect_name: "Devastating Strike",
          description:
            "Reduces the defense of targets with the Invulnerable status by 15% for 3 seconds",
          icon: "QEd5bZU.png"
        },
        e_3: {
          effect_name: "Improved Armor",
          description:
            "Gain a 20% damage reduction bonus while you are performing the skill",
          icon: "SfUebeR.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Improved Penetration",
          description: "Increases the penetration level by 1",
          icon: "NdeJndm.png"
        },
        e_2: {
          effect_name: "Improved Charging",
          description:
            "Each level of the charging gauge increases the damage dealt by 10%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Toughness ",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill",
          icon: "a7DgAOn.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Lightning Charge",
          description:
            "The charging level starts at 2, and overcharging causes an electric shock to your target for 4 seconds",
          icon: "JeryhMy.png"
        },
        e_2: {
          effect_name: "The Last Charge",
          description:
            "Increases the maximum charging level by 1. At the maximum level, you travel faster, further, and deal 30% increased damage, followed by an artillery hit that also deals 30% increased damage",
          icon: "Bybk6tw.png"
        }
      }
    },
    s_12: {
      skill_name: "Outcry",
      cd: "30",
      description:
        "Inflicts [ ] damage to a maximum of 12 enemies within 8m. This also taunts monsters for 2 seconds",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "2Qdyzfj.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Decreases skill cooldown by 3 seconds",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Drill Master",
          description: "Increases the area of effect by 25%.",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Defense Preparation",
          description: "Grants a 30% damage reduction bonus for 4 seconds",
          icon: "SfUebeR.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Intimidation",
          description:
            "Reduces the defense of targets struck by 30% for 4 seconds",
          icon: "ktJIUvL.png"
        },
        e_2: {
          effect_name: "Natural Selection",
          description:
            "Increases the damage dealt on lower grade monsters by 200%",
          icon: "FtChNZ3.png"
        },
        e_3: {
          effect_name: "Protective Shield",
          description:
            "Creates a protective shield for 3 seconds which absorbs up to 30% of the caster’s maximum health worth of damage",
          icon: ""
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Morale Boost",
          description:
            "Grants a 30% movement speed and attack power bonus for 4 seconds on you and party members within the skill range",
          icon: "nGBwXyL.png"
        },
        e_2: {
          effect_name: "Shout",
          description:
            "Reduces the movement speed and attack power of inflicted enemies by 30% for 4 seconds",
          icon: "W94iICa.png"
        }
      }
    },
    s_13: {
      skill_name: "SPEAR SHOT",
      cd: "16",
      description:
        "Stab the spear that deals [ ] damage, charges fire power on the spear, and pulling the enemy []. Once the caster reaches max charge level, the caster shoots [ ] the enemy and knock the enemy back ",
      additional_effects: "Incapacitate [low], Penetration level 1, backattack",
      time: "",
      icon: "bU9RiX7.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Response",
          description: "Decreases the skill cooldown by 3 seconds. ",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Swift Movement",
          description: "Increase attack speed by 15%. ",
          icon: "Tripod_Tier_1_6.png"
        },
        e_3: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
          icon: "Tripod_Tier_1_23.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Improved Strike",
          description: "Increases damage done by 25%. ",
          icon: "45.png"
        },
        e_2: {
          effect_name: "Spot Weakness",
          description:
            "Increases the damage dealt to targets with the Invulnerable status by 40%. ",
          icon: "36.png"
        },
        e_3: {
          effect_name: "Improved Penetration",
          description: "Increases the penetration level by 1. ",
          icon: "26.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Explosive Spear",
          description:
            "Rushes 4m in front of you and causes an explosion that deals 40% increased damage. ",
          icon: "19.png"
        },
        e_2: {
          effect_name: "Explosion",
          description:
            "This skill can be charged multiple times. Second and Third charge levels add extra attacks that deal 25% and 105% increased damage, but first charge level lowers damage taken by 20% ",
          icon: "38.png"
        }
      }
    },
    s_14: {
      skill_name: "Counter Spear",
      cd: "24",
      description:
        "Raise your shield to defend yourself from any harmful attack in front of you for 2 seconds. Absorbs damage by an amount equal to your maximum health. Successfully defending for 1 second grants a counter attack on the enemy which deals [] damage and knocks them back ",
      additional_effects:
        "Incapacitate [Mid-High], Immune [stiffness], Penetration  [level 1], Back Attack",
      type: "Tap",
      time: "",
      icon: "zoJM0Cu.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Offensive Preparation",
          description:
            "A successful counter hit grants a 15% damage increase for 4 seconds. ",
          icon: "Tripod_Tier_1_50.png"
        },
        e_2: {
          effect_name: "Improved Armor",
          description:
            "Gain a 30% damage reduction bonus while you are performing the skill. ",
          icon: "Tripod_Tier_1_25.png"
        },
        e_3: {
          effect_name: "Incapacitate",
          description:
            "A successful counter hit increases incapacitate point by 10%. ",
          icon: "0.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Quick Response",
          description:
            "Decreases the skill cooldown by 12 seconds and but reduces the damage dealt by 50%. ",
          icon: "Tripod_Tier_2_56.png"
        },
        e_2: {
          effect_name: "Improved Strike",
          description: "Increases damage by 15%. ",
          icon: "45.png"
        },
        e_3: {
          effect_name: "Spot Weakness",
          description:
            "Increases the damage dealt to targets with the Invulnerable status by 40%. ",
          icon: "36.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Bombardment",
          description:
            "A successful counter hit grants an extra artillery hit which deals 50% increased damage on the target. ",
          icon: "43.png"
        },
        e_2: {
          effect_name: "Lightning Spear",
          description:
            "A successful counter hit grants an extra attack with the spear. The attack deals magical damage instead of physical and knocks the target down. The target is also inflicted with an electric shock for 4 seconds. ",
          icon: "14.png"
        }
      }
    },
    s_15: {
      skill_name: "Strength of Nellasia",
      cd: "60",
      description:
        "Grants all party members within 22m a 15% damage reduction buff for 12 seconds   ",
      additional_effects: "",
      type: "Tap",
      time: "",
      icon: "dn2HzSe.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Charge speed",
          description: "Increases the charge speed by 20%   ",
          icon: "Tripod_Tier_1_11.png"
        },
        e_2: {
          effect_name: "Mind Enhancement",
          description: "Decrease MP consumption by 50%   ",
          icon: "Tripod_Tier_1_34.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Decreases skill cooldown by 10 seconds   ",
          icon: "Tripod_Tier_1_56.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Leadership",
          description:
            "Increases the attack power of all party members by 20% for 6 seconds   ",
          icon: "45.png"
        },
        e_2: {
          effect_name: "Cleanse",
          description:
            "Cleanses all party members, removing one harmful effect   ",
          icon: "0.png"
        },
        e_3: {
          effect_name: "Prolonged Effect",
          description: "Increases the duration of the effect by 4 seconds   ",
          icon: "29.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Improved Effect",
          description: "Increases the damage reduction by an additional 15%   ",
          icon: "12.png"
        },
        e_2: {
          effect_name: "Survivability ",
          description:
            "Creates a protective shield on all party members which absorbs damage equal to 15% of their maximum health. The shield lasts for 5 seconds   ",
          icon: "18.png"
        }
      }
    },
    s_16: {
      skill_name: "Thunderbolt of Guardian",
      cd: "20",
      description:
        "Hurls lightning from the sky, damaging enemies within 5m for [ ] and shocking them for 3  seconds.       ",
      additional_effects: "Incapacitate [mid-high]",
      time: "",
      icon: "ZETWIG7.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Controlling Mana",
          description:
            "Grants a 20%  chance to ignore mana consumption.       ",
          icon: "Tripod_Tier_1_34.png"
        },
        e_2: {
          effect_name: "Unstoppable",
          description:
            "Successful hits have a 20%  chance to reset the cooldown.       ",
          icon: "Tripod_Tier_1_51.png"
        },
        e_3: {
          effect_name: "Lucky Strike",
          description:
            "Adds an extra lightning hit which deals 80%  of the normal damage.       ",
          icon: "Tripod_Tier_1_17.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill.       ",
          icon: "60.png"
        },
        e_2: {
          effect_name: "Improved Strike",
          description: "Increases damage by 25%.       ",
          icon: "45.png"
        },
        e_3: {
          effect_name: "Drillmaster",
          description: "Increases the area of effect by 20%.       ",
          icon: "49.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Massive Thunderbolt",
          description:
            "Thunderbolts stretch out to four directions after hitting the ground, dealing 50%  increased damage.       ",
          icon: "31.png"
        },
        e_2: {
          effect_name: "Electric Shock",
          description:
            "Increases the duration of the electric shock by 3 seconds.       ",
          icon: "27.png"
        }
      },
      type: "Tap"
    },
    s_17: {
      skill_name: "Burst Cannon",
      cd: "30",
      description:
        "Fires your cannon in front of you. When the burst gauge is fully charged, it deals [] damage your target and knocks them down. When not fully charged, it deals [] damage and pushes the target back.  ",
      additional_effects:
        "incapacitate [extreme-high], destruction level 1, back attack",
      type: "Tap",
      time: "",
      icon: "IFv21uC.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Destruction",
          description:
            "A successful timing on the perfect zone increases the destruction level by 1.  ",
          icon: "Tripod_Tier_1_22.png"
        },
        e_2: {
          effect_name: "Quick Response",
          description: "Decreases the skill cooldown by 5 seconds.  ",
          icon: "Tripod_Tier_1_56.png"
        },
        e_3: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill.  ",
          icon: "Tripod_Tier_1_23.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Drill Master",
          description: "Increases the area of effect by 15%.  ",
          icon: "49.png"
        },
        e_2: {
          effect_name: "Improved Strike",
          description: "Increases damage by 30%.  ",
          icon: "45.png"
        },
        e_3: {
          effect_name: "Incapacitate",
          description: "Increases the incapacitate point by 20%.  ",
          icon: "31.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Rotating Bombardment",
          description:
            "Fires the cannon four times around you. Each shot deals 20% increased damage.  ",
          icon: "19.png"
        },
        e_2: {
          effect_name: "Concentrated Strike",
          description:
            "Fires your cannon four times into the front. Each shots deals 50% increased damage.  ",
          icon: "35.png"
        }
      }
    }
  }
};
