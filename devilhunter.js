module.exports = {
  devilhunter: {
    s_1: {
      skill_name: "Spiral tracker",
      cd: "8",
      description:
        "Launch a gun at the targeted location. It whirls and deals damage to all enemies in the area",
      additional_effects: [""],
      type: ["Point"],
      time: [""],
      icon: "2Y3dwCG.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Range",
          description: "Increase the skill range by 2m",
          icon: "SoLHNDZ.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 1s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Damage increased",
          description: "Damage increased by 20%",
          icon: "UXhRg0Q.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Swift Movement",
          description: "Increases movement speed by 10% for 6s",
          icon: "wGYSIwd.png"
        },
        e_2: {
          effect_name: "Growing bullet",
          description:
            "Each time your attack hits 3 times<br>Damage is increased by 10%",
          icon: "TmNqtCH.png"
        },
        e_3: {
          effect_name: "Concentrated shot",
          description:
            "Damage done to enemies in the center of the area is increased by 30%",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Swirl",
          description:
            "Creates a magnetic field and the attack range increases by 15%<br>Slowly draw the enemies into the center of the circle",
          icon: "MbPnoxn.png"
        },
        e_2: {
          effect_name: "High-speed rotation",
          description:
            "The duration of the attack increases by 1.2 s<br>Increases maximum damage by 25%",
          icon: "0BMcHYE.png"
        }
      }
    },
    s_2: {
      skill_name: "Execution",
      cd: "12",
      description:
        "Charge the enemy and launch into the air, and then you retreat to strafe him",
      additional_effects: ["Back Attack", " Immune [stiffness]"],
      type: ["Combo"],
      time: [""],
      icon: "PSrET1n.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Movement distance",
          description: "Movement distance can increases by 1m",
          icon: "frf2qov.png"
        },
        e_2: {
          effect_name: "Big Foot",
          description:
            "Upper kick is changed to kick, attack rate is increased by 30%<br>Increase the height of the enemy in the air",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Damage increased",
          description: "Upper kick damage increases by 50%",
          icon: "DI0jbqj.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Range",
          description: "Increases the attack range by 30% when using a handgun",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Strength",
          description: "Become super armor during the cast a skill",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "Fire",
          description: "Deals 30% more damage to enemies with >50% health",
          icon: "cimRspI.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Air Strike",
          description:
            "Increases the damage done to enemies in the air by 100%",
          icon: "vgLdE9L.png"
        },
        e_2: {
          effect_name: "Strafing indiscriminately",
          description:
            "Increases the number of shots by 4<br>Damage increased by 10%",
          icon: ""
        }
      }
    },
    s_3: {
      skill_name: "Plasma Bullet",
      cd: "16",
      description:
        "Shoot a slow plasma ball that deals damage to enemies in its path",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "5Hla19Z.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Range",
          description: "Increase the skill range by 3m",
          icon: "SoLHNDZ.png"
        },
        e_2: {
          effect_name: "Attack speed",
          description: "Increases attack speed by 20%",
          icon: "nRO8OuT.png"
        },
        e_3: {
          effect_name: "Retreat",
          description: "You retreat 1.5 m after the shot",
          icon: "j724HUx.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Damage increased",
          description: "Damage increased by 25%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Icing effect",
          description: "Reduces enemy movement speed by 40% for 2 s",
          icon: "C42y0cZ.png"
        },
        e_3: {
          effect_name: "Destroy armor",
          description: "Reduces all enemy armor by 40% for 2 s",
          icon: "2JPSkpi.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Supercharge zone",
          description:
            "Generates an overloaded area at the targeted location<br>In this area, damage is inflicted periodically",
          icon: "xqsOSNR.png"
        },
        e_2: {
          effect_name: "Plasma fragmentation",
          description:
            "Launch three plasma bullets at once<br>The two bullets added have a 50% reduction in attack range<br>Reduced damage to enemies by 70%",
          icon: "4wG5uWK.png"
        }
      }
    },
    s_4: {
      skill_name: "Meteor stream",
      cd: "20",
      description:
        "Shoot a volley of bullets into the air, which falls back to the targeted location, causing an explosion. Launches enemies into the air",
      additional_effects: ["Neutralization [Medium]", " Immune [stiffness]"],
      type: ["Point"],
      time: [""],
      icon: "OWCfNgu.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mental Fortification",
          description: "Mana cost reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Cramp",
          description: "Increases fall down condition by 1 s (?)",
          icon: "DUWC0Nh.png"
        },
        e_3: {
          effect_name: "Damage increased",
          description: "Damage increased by 20%",
          icon: "UXhRg0Q.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Attack Range",
          description: "Attack Range increased by 30%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Critical Hit",
          description: "Increases Critical Hit Rate by 60%",
          icon: "qp8CE16.png"
        },
        e_3: {
          effect_name: "Piercing explosion",
          description: "Attack ignores 40% of enemy’s physical defense",
          icon: "ktJIUvL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Bombing raid",
          description:
            "Fires in the air countless balls<br>They fall 3 times in a row<br>Damage increased by 60%",
          icon: "4wG5uWK.png"
        },
        e_2: {
          effect_name: "Comet",
          description:
            "A single ball is shot in the air and quickly hits the target area",
          icon: "xqsOSNR.png"
        }
      }
    },
    s_5: {
      skill_name: "Summer salt shot",
      cd: "12",
      description: "Take a leap forward and fires a handgun",
      additional_effects: ["Immune [stiffness]"],
      type: ["Tap"],
      time: [""],
      icon: "BSF81uC.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mental Fortification",
          description: "Mana cost reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Burn",
          description:
            "Normal and weak monsters have a 50% chance of getting the Burn effect.",
          icon: "1PceV71.png"
        },
        e_3: {
          effect_name: "Ignored collision",
          description: "You can cross the bosses when you fly",
          icon: ""
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Attack speed",
          description: "Increases attack speed by 20%",
          icon: "rP1umQI.png"
        },
        e_2: {
          effect_name: "Damage increased",
          description: "Damage increased by 50%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Evasion Master",
          description: "Increases evasion rate by 30% during cast",
          icon: "3MH8R85.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Double jump",
          description:
            "Movement distance increased by 2 m <br>The number of attacks is increased to 2",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Super armor",
          description:
            "You become immune to control effects<br>Cooldown decreases by 3 s",
          icon: "6vzVrvN.png"
        }
      }
    },
    s_6: {
      skill_name: "Equalibrium",
      cd: "16",
      description: "Shoot all around you, inflicting damage to nearby enemies",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "bYkbfFs.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 2 s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Heavy Steel",
          description:
            "Ignore 30% of physical defense when you hit normal or weak enemies",
          icon: "va33gLt.png"
        },
        e_3: {
          effect_name: "Master of evasion",
          description: "Increases evasion rate by 20% while using Skill",
          icon: "j4OiBjo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Damage increased",
          description: "Damage increased by 25%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Critical Hit",
          description: "Increases Critical Hit Rate by 30%",
          icon: "qp8CE16.png"
        },
        e_3: {
          effect_name: "Range",
          description: "Skill range increased by 20%",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Thinning fire",
          description:
            "Reduces the area of effect to a cone in front of you<br>Increases the duration of the attack<br>Damage inflicted increases by 100%",
          icon: "KEm9ET8.png"
        },
        e_2: {
          effect_name: "Sweep",
          description:
            "Attack 360 degrees range<br>Critical damage increases by 100%",
          icon: "Bybk6tw.png"
        }
      }
    },
    s_7: {
      skill_name: "Agile shooting",
      cd: "12",
      description:
        "Move while shooting at 360 °, inflicting damage to nearby enemies",
      additional_effects: ["Back Attack"],
      type: ["Combo"],
      time: [""],
      icon: "RryoGsY.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Attack speed",
          description: "Increases attack speed by 10%",
          icon: "nRO8OuT.png"
        },
        e_3: {
          effect_name: "Critical Hit",
          description: "Increases Critical Hit Rate by 15%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Close shot",
          description:
            "Decrease attack range by 20%<br>Damage increased by 40%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Master of evasion",
          description: "Increases evasion rate by 35% while using Skill",
          icon: "3MH8R85.png"
        },
        e_3: {
          effect_name: "Movement distance",
          description: "Movement distance increases by 1m",
          icon: "DLz43Zq.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "number of attacks",
          description: "The number of attacks increased by 3",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "number of attacks",
          description: "The number of hits increased by 2",
          icon: "32F9lxY.png"
        }
      }
    },
    s_8: {
      skill_name: "Despair",
      cd: "24",
      description:
        "Attack all around you, then leap into the air leaving behind multiple grenades (By successfully perfect zone)",
      additional_effects: ["Neutralization [Medium]", " Immune [stiffness]"],
      type: ["Hold"],
      time: [" 2.5 sec"],
      icon: "LhgDpRF.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Range",
          description: "Skill range increased by 15%",
          icon: "rlevb4r.png"
        },
        e_2: {
          effect_name: "Strength",
          description: "You are immune to control effects during the attack",
          icon: "lyseDv0.png"
        },
        e_3: {
          effect_name: "Critical damage",
          description: "Critical damage increases by 50%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Damage increased",
          description:
            "Increases the damage done by the bomb to enemies by 50%",
          icon: "cXMAUIN.png"
        },
        e_2: {
          effect_name: "Explosion range",
          description: "Explosion range increased by 30% when bombing",
          icon: "IpJktTA.png"
        },
        e_3: {
          effect_name: "Continuous launch",
          description:
            "Launch bombs 2 times in a row<br>Explosion range is reduced by 20%",
          icon: "WapQ0GV.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Destructive penetration",
          description:
            "Move quickly to 8m away and cast skills<br>Damage increased by 20%<br>Skill cancellation due to cancellation latency and mana reduction<br>does not apply(?)",
          icon: "KUr6DEO.png"
        },
        e_2: {
          effect_name: "Infinite annihilation",
          description:
            "The number of attacks before bouncing is increased by 3<br>Increases Critical Hit Rate by 40%",
          icon: "KEm9ET8.png"
        }
      }
    },
    s_9: {
      skill_name: "Quickshot",
      cd: "12",
      description:
        "Shoot 2 bullets in the direction indicated. You can use this skill 2 times in a row",
      additional_effects: [""],
      type: ["Chain"],
      time: [""],
      icon: "Ywe6WNb.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Attack speed",
          description: "Increases attack speed by 20%",
          icon: "nRO8OuT.png"
        },
        e_2: {
          effect_name: "Push",
          description: "The duration of the burst increases",
          icon: "s72YiQJ.png"
        },
        e_3: {
          effect_name: "Infinite passion",
          description:
            "The next time you use the skill, the duration of the animation increases by 1 s",
          icon: ""
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Lightfoot",
          description: "Increases your movement speed by 40% for 1 s",
          icon: "wGYSIwd.png"
        },
        e_2: {
          effect_name: "Starting shot",
          description:
            "The damage done to the enemy by the first chain attack hits 50%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Damage increased",
          description: "Damage increases by 30% every hit",
          icon: "TmNqtCH.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Critical damage",
          description: "Critical damage increases by 150%",
          icon: "Pv2SzkI.png"
        },
        e_2: {
          effect_name: "Triple shot",
          description: "The number of chains increases by 3",
          icon: "dgg9J9i.png"
        }
      }
    },
    s_10: {
      skill_name: "AT02 Ruthenium",
      cd: "8",
      description:
        "Launch a grenade at the targeted location that deals damage in a small area",
      additional_effects: [""],
      type: ["Point"],
      time: [""],
      icon: "gm3CHzl.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Range",
          description: "Increase the skill range by 2m",
          icon: "SoLHNDZ.png"
        },
        e_2: {
          effect_name: "Explosion range",
          description: "Explosion range increases by 20%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Destroy armor",
          description: "Reduces all enemy armor by 30% for 4 s when attacking",
          icon: "VGqI5ff.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Damage increased",
          description: "Damage increased by 50%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Stolen grenade",
          description:
            "Damage to enemies is reduced by 50%<br>Cooldown increased by 6 s<br>Launch enemy into the air",
          icon: "Ntx7DAR.png"
        },
        e_3: {
          effect_name: "Freezing grenade",
          description:
            "Damage to enemies is reduced by 75%<br>Cooldown increased by 12 s<br>Freeze the enemy for 2 s",
          icon: "HdZ3Crk.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Fireworks",
          description:
            "Throw three grenades at a time<br>Damage decreased by 60%",
          icon: "4wG5uWK.png"
        },
        e_2: {
          effect_name: "Internal ignition",
          description: "The attack deals Burn to the enemy for 3 s",
          icon: "eOTsTHH.png"
        }
      }
    },
    s_11: {
      skill_name: "Cruel Tracker",
      cd: "14",
      description:
        "Shoot a burst of cone-shaped bullets, then a powerful shot in front of you. You deal extra damage if you attack the enemy in the back",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "pTAZCsc.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 2 s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Mental Fortification",
          description: "Mana cost reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Push",
          description: "The last shot travels a longer distance",
          icon: "s72YiQJ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Critical Hit",
          description: "Increases Critical Hit Rate by 30%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Improved shot",
          description: "Attack count increases by 3 times",
          icon: "POnpICE.png"
        },
        e_3: {
          effect_name: "Wide shot",
          description: "Increases the attack angle by 40% when you fire",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Quick gun",
          description:
            "The last shot becomes very fast<br>You can use the last attack once more",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "Explosive bullet",
          description:
            "The last attack has been changed to an explosive form<br>Explodes when hit and gives 100% more damage to nearby enemies",
          icon: "xqsOSNR.png"
        }
      }
    },
    s_12: {
      skill_name: "Precursor of the end",
      cd: "24",
      description: "Shoot cone-shaped twice with your rifle",
      additional_effects: ["Neutralization [Low]", " Back Attack"],
      type: ["Combo"],
      time: [""],
      icon: "kAWyK4X.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Damage increased",
          description: "Increases the damage done to nearby enemies by 20%",
          icon: "0qSa8zg.png"
        },
        e_2: {
          effect_name: "Attack angle",
          description: "Attack angle increases by 20%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Stun",
          description: "Stun enemies that hit 2 or 3 on a 30% chance for 3 s",
          icon: "ZkTpIPx.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Critical Hit",
          description: "Increases Critical Hit Rate by 25%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Penetration",
          description: "2 or 3 strokes increases pierce level by 1",
          icon: "NdeJndm.png"
        },
        e_3: {
          effect_name: "Piercing shot",
          description:
            "When the second or third move is critical, the attack ignores 40% of the physical defense",
          icon: "ktJIUvL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Consequences of the disaster",
          description:
            "Increases the number of shots by 1<br>Mana cost reduced by 40%",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "Desperation",
          description:
            "Damage increased by 30%<br>Critical damage increases by 50%",
          icon: "s2QfHGg.png"
        }
      }
    },
    s_13: {
      skill_name: "Judgment time",
      cd: "30",
      description:
        "Shoot cone-shaped projectiles over a long distance that explode on impact, inflicting damage to nearby enemies",
      additional_effects: ["Neutralization [Low]"],
      type: ["Tap"],
      time: [""],
      icon: "q22ShZd.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 5 s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Critical hit",
          description: "Increases Critical Hit Rate by 15%",
          icon: "GjqRFi1.png"
        },
        e_3: {
          effect_name: "Knockdown",
          description: "Bullets have a 10% chance to knockdown enemy",
          icon: "DUWC0Nh.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Master of evasion",
          description: "Increases evasion rate by 30% while using Skill",
          icon: "3MH8R85.png"
        },
        e_2: {
          effect_name: "Improved explosion",
          description:
            "Increases the damage of fragments from the explosion by 50%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Wide explosion",
          description:
            "The bullet fragments spreading distance increased by 20%",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Sentence of imprisonment",
          description:
            "Concentrate energy into a single ball that deals 600% of the damage",
          icon: "xqsOSNR.png"
        },
        e_2: {
          effect_name: "Evidence destruction",
          description:
            "Increases the range of the balls by 40%<br>Reduces the armor of the affected enemies by 50% for 3 s",
          icon: "W94iICa.png"
        }
      }
    },
    s_14: {
      skill_name: "Shotgun speaker",
      cd: "36",
      description:
        "Shoot cone-shaped three times with your rifle, each shot repelling the enemy",
      additional_effects: [
        "Pierce [level 1]",
        " Neutralization [Medium]",
        " Back Attack"
      ],
      type: ["Tap"],
      time: [""],
      icon: "LPgXQIj.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Critical damage",
          description: "Critical damage increases by 50%",
          icon: ""
        },
        e_2: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Combo",
          description: "The skill becomes usable 3 times in a row",
          icon: "jC42yG9.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Critical hit",
          description: "Increases Critical Hit Rate by 25%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Master of evasion",
          description: "Increases evasion rate by 30% while using Skill",
          icon: "3MH8R85.png"
        },
        e_3: {
          effect_name: "Piercing shot",
          description:
            "When the enemy is hit 3 or 4 times by a critical hit, the attack ignores 60% of the enemy's defense",
          icon: "ktJIUvL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Extended fire",
          description:
            "After a series of three shots, you carry a powerful shotgun shot<br>Knockdown enemies<br>Move back 4 m",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Damage increased",
          description:
            "Damage increased by 20%<br>Critical damage increased by 50%",
          icon: "FpXyekj.png"
        }
      }
    },
    s_15: {
      skill_name: "Master of Shotguns",
      cd: "36",
      description:
        "Fire three quick shots with your rifle, followed by a final shot that deals more damage",
      additional_effects: ["Neutralization [Medium]", " Back Attack"],
      type: ["Hold"],
      time: [" 2 sec"],
      icon: "KaeeUMV.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 6 s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Mental Fortification",
          description: "Mana cost reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Damage increased",
          description: "Increases the damage done to nearby enemies by 20%",
          icon: "0qSa8zg.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Critical Hit",
          description: "Increases Critical Hit Rate by 40% during Holding",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Range",
          description: "Skill range increased by 20%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "Gunshot",
          description:
            "Increases the damage you receive during a skill cast by 40%<br>Critical damage increases by 100%",
          icon: "UmuzakL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Will of the ruler",
          description:
            "The last attack delete<br>Hold time increases by 0.7 s<br>Damage is increased by 40% during a holding",
          icon: "KEm9ET8.png"
        },
        e_2: {
          effect_name: "Rule",
          description:
            "The last attack ignores 60% of enemy’s physical defense<br>Neutralization is increased by 40%",
          icon: "gWIvAYY.png"
        }
      }
    },
    s_16: {
      skill_name: "The Last Supper",
      cd: "45",
      description:
        "Shoot a powerful explosive ball that throws enemies into the air",
      additional_effects: [
        "Destruction [level 1]",
        " Neutralization [Mid-High]",
        " Back Attack",
        " Immune [stiffness]"
      ],
      type: ["Tap"],
      time: [""],
      icon: "d0r8489.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 6 s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Cramp",
          description: "Increases fall down condition by 1 s",
          icon: "DUWC0Nh.png"
        },
        e_3: {
          effect_name: "Attack speed",
          description: "Increases attack speed by 10%",
          icon: "nRO8OuT.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "After storm",
          description: "After the shotgun attack, inflicts additional damage",
          icon: "cD0keDA.png"
        },
        e_2: {
          effect_name: "Damage increased",
          description: "Damage increased by 30%",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "Defenseless target",
          description:
            "Increases the damage to a knockdown or airborne enemy by 40%",
          icon: "HWuM5x7.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Double shot",
          description:
            "Shoots with a shotgun in each hand simultaneously, causing 2 explosions",
          icon: "Bybk6tw.png"
        },
        e_2: {
          effect_name: "Concentrated attack",
          description:
            "Increases Critical Hit Rate by 30%<br>Critical damage increases by 60%",
          icon: "s2QfHGg.png"
        }
      }
    },
    s_17: {
      skill_name: "Spiral Flame",
      cd: "36",
      description:
        "Shoot a powerful fireball over a long distance that throws enemies into the air",
      additional_effects: ["Neutralization [Medium]", " Immune [stiffness]"],
      type: ["Tap"],
      time: [""],
      icon: "RXjKmSH.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Distance",
          description: "Increase the skill distance by 4 m",
          icon: "SoLHNDZ.png"
        },
        e_2: {
          effect_name: "Range",
          description: "Increase the skill range by 20%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Quick aim",
          description: "Aiming time is 20% faster",
          icon: "nRO8OuT.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Finishing attack",
          description: "Deals 40% more damage to enemies with <25% health",
          icon: "cimRspI.png"
        },
        e_2: {
          effect_name: "Destroy armor",
          description: "Reduces all enemy armor by 40% for 4 s",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "Critical hit",
          description: "Increases Critical Hit Rate by 40%",
          icon: "HWuM5x7.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Intense flame",
          description: "No more launch into the air<br>Inflicts a Burn for 3 s",
          icon: "eOTsTHH.png"
        },
        e_2: {
          effect_name: "Volcanic eruption",
          description:
            "The damage is reduced by 20%<br>Bullets flare up to the maximum range, causing a volcanic eruption on the ground ",
          icon: "xqsOSNR.png"
        }
      }
    },
    s_18: {
      skill_name: "Catastrophe",
      cd: "24",
      description:
        "Launch a grenade at the targeted location and then detonate it, inflicting damage in a large rectangular area and throwing enemies into the air",
      additional_effects: [
        "Destruction [level 1]",
        " Neutralization [Medium]",
        " Immune [stiffness]"
      ],
      type: ["Hold"],
      time: [" 2.5 sec"],
      icon: "mJ4SbMG.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Strength",
          description: "You are immune to control effects during casting",
          icon: "lyseDv0.png"
        },
        e_2: {
          effect_name: "Remote aim",
          description: "Increases the area of explosion 10%",
          icon: "SoLHNDZ.png"
        },
        e_3: {
          effect_name: "Quick aim",
          description: "Area selection time is reduced by 20%",
          icon: "nRO8OuT.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Finishing attack",
          description:
            "Enemies with <25% health suffer additional damage equal to 50% of their physical defense",
          icon: "cimRspI.png"
        },
        e_2: {
          effect_name: "Air target",
          description:
            "Explosive attack against air enemies<br>Increases Critical Hit Rate by 40%",
          icon: "HWuM5x7.png"
        },
        e_3: {
          effect_name: "Ground target",
          description: "Increases damage done to ground enemies by 30%",
          icon: "xT6ILcv.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Carpet bombing",
          description:
            "2 grenades are thrown in succession, causing damage over a greater distance",
          icon: "4wG5uWK.png"
        },
        e_2: {
          effect_name: "Eternal disaster",
          description:
            "Shrapnels are created and planted in the ground, exploding every second and inflicting damage",
          icon: "xqsOSNR.png"
        }
      }
    },
    s_19: {
      skill_name: "Triple exploit",
      cd: "30",
      description:
        "Shoot an explosive bullet at the targeted location. You can use this skill 3 times in a row",
      additional_effects: [""],
      type: ["Chain"],
      time: [""],
      icon: "qKxODyp.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Vision",
          description: "Scope of the skill increased by 3 meters",
          icon: "SoLHNDZ.png"
        },
        e_2: {
          effect_name: "Finishing attack",
          description: "Deals 25% more damage to enemies with <25% health",
          icon: "NwwlqaE.png"
        },
        e_3: {
          effect_name: "Constant passion",
          description:
            "Increase the amount of time you can re-cast the 1 s skill",
          icon: "yT6Wyje.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Attack speed",
          description: "Increases attack speed by 20%",
          icon: "4yeH6Qd.png"
        },
        e_2: {
          effect_name: "Attack Range",
          description: "Attack Range increased by 30%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "Flaming bullet",
          description: "Inflicts Burn for 6 s",
          icon: "cXMAUIN.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Quadruple explosion",
          description:
            "Bring the attack number to 4<br>Increases Critical Hit Rate by 30% on enemies with <50% health",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "Super Explosion",
          description:
            "The loading time is longer<br>Damage increased by 30%<br>Stuns the enemies for 3 s",
          icon: "xqsOSNR.png"
        }
      }
    },
    s_20: {
      skill_name: "Aim shoot",
      cd: "24",
      description:
        "Turn and then shoot 4 balls in the direction of your cursor. The first 3 reduce the speed of movement of the enemy by 80% for 2 sec and the last inflicts significant damage",
      additional_effects: [
        "Pierce [level 1]",
        " Neutralization [Low]",
        " Immune [stiffness]"
      ],
      type: ["Tap"],
      time: [""],
      icon: "uqbHGrg.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Fast bullet",
          description: "Bullet Flight Speed ​​Increases by 20%",
          icon: "ZYlrZ9I.png"
        },
        e_2: {
          effect_name: "Quick aim",
          description: "Aiming time is shortened by 20%",
          icon: "nRO8OuT.png"
        },
        e_3: {
          effect_name: "The last shot",
          description: "The last one is a critical hit",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Damage increased",
          description: "Damage increased by 30%",
          icon: "a5qp6Tt.png"
        },
        e_2: {
          effect_name: "Large bullet",
          description: "Increases the size of the bullets by 20%",
          icon: "kR132za.png"
        },
        e_3: {
          effect_name: "Stun",
          description: "Stuns the enemies for 3 s",
          icon: "TR1aIIB.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Fast fire",
          description: "Firing speed is 40% faster after aiming",
          icon: "Bybk6tw.png"
        },
        e_2: {
          effect_name: "Hexa shot",
          description: "Shoot 2 more balls after aiming",
          icon: "4wG5uWK.png"
        }
      }
    },
    s_21: {
      skill_name: "Perfect shot",
      cd: "30",
      description:
        "Shoots a large caliber bullet at a very high speed, it inflicts significant damage",
      additional_effects: ["Neutralization [Low]"],
      type: ["Hold"],
      time: [""],
      icon: "6T5TC0G.jpg",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mental Fortification",
          description: "Mana cost reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Stable posture",
          description: "Immune to rigidity during holding and casting",
          icon: "lyseDv0.png"
        },
        e_3: {
          effect_name: "Penetration",
          description:
            "If the skill is launched Perfect Zone, gives a Pierce Level 1 effect to the attack",
          icon: "Mo0MlPh.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Improved shot",
          description: "Perfect Zone Attack Increases damage done by 30%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Muscle cramps",
          description:
            "If the attack is launched Perfect Zone, the enemies remain reversed 1 s more and the neutralization is increased by 30%",
          icon: "Ntx7DAR.png"
        },
        e_3: {
          effect_name: "Bleeding",
          description:
            "If the attack is launched  Perfect Zone, it inflicts a Bleeding for 5 s",
          icon: "zHwYyaV.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Perfect aim",
          description:
            "The skill loads for 1 s, and at the end of the load has the same effect as a perfect shot",
          icon: "Bybk6tw.png"
        },
        e_2: {
          effect_name: "Sniper",
          description:
            "The Perfect Zone is shrinking<br>Perfect shot is inevitably a critical hit",
          icon: "19503dj.png"
        }
      }
    },
    ult: {
      skill_name: "Clay bombing",
      cd: "300",
      description:
        "Launch explosives all around you, then make them explode by shooting at them, inflicting significant damage to the enemies",
      additional_effects: [
        "Neutralization [Mid-High]",
        "Immune [Hit Recovery & Abnormal Status]"
      ],
      type: ["Tap"],
      time: [""],
      icon: "23k43jz.jpg"
    }
  }
};
