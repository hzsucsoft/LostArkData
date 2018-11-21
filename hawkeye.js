module.exports = {
  hawkeye: {
    s_1: {
      skill_name: "Rapid Shot",
      cd: "5",
      description: "After aiming, you shoot 3 arrows ",
      additional_effects: "",
      type: "Tap",
      time: "",
      icon: "TWglT84.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Heavy Steel",
          description:
            "Increases the damage inflicted on enemies below the seed rating by 20% ",
          icon: "Tripod_Tier_1_61.png"
        },
        e_2: {
          effect_name: "Horsepower control",
          description: "Decrease MP usage by 50% ",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Tracking fire",
          description:
            "It automatically turns and fires to the nearest enemy within 90 degrees ahead . ",
          icon: "9VyE0qU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: " Double shot",
          description: "Increases damage done to enemies by 25% ",
          icon: "Tripod_Tier_2_54.png"
        },
        e_2: {
          effect_name: "Shock shot",
          description:
            "It changes to [Brain] property, and makes the hit enemy light for 3 seconds. ",
          icon: "Tripod_Tier_2_17.png"
        },
        e_3: {
          effect_name: "Light footsteps",
          description: "Increases movement speed by 30% for 3s ",
          icon: "LmuvcKG.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Power shot",
          description:
            "The last strike is changed to a powerful attack, which increases the critical hit rate by 100% and the width by 20% . ",
          icon: "c9NTWOQ.png"
        },
        e_2: {
          effect_name: "Sustained fire",
          description: "The number of arrow shoots increases from 3 to 5 ",
          icon: "32F9lxY.png"
        }
      }
    },
    s_2: {
      skill_name: "Atomic Arrow",
      cd: "16",
      description:
        "After aiming, you shoot an arrow that deals damage. It explodes 3 seconds later, inflicting further damage and knocking down enemies",
      additional_effects: ["Neutralization [Medium]"],
      type: ["Tap"],
      time: [""],
      icon: "hO665OX.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Quick Hand",
          description: "Increases attack speed by 15%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Ranged Shooting",
          description: "Distance increases by 3m",
          icon: "SoLHNDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Heavy Bomb",
          description:
            "Decrease enemy’s movement speed for 50% before explosion",
          icon: "oxGXfhi.png"
        },
        e_2: {
          effect_name: "Flame Arrow",
          description:
            "We burn for 6 seconds to the enemy hit by the explosion",
          icon: "cXMAUIN.png"
        },
        e_3: {
          effect_name: "Arrowhead Enhancement",
          description:
            "Increases the chance of a critical hit by 30%. Increases the duration of an electric shock by 50%",
          icon: "qp8CE16.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Light Arrow",
          description:
            "Increases the speed of the arrow by 50% and reduces the detonation time by 2 seconds. The explosion does not overthrow but electrocutes the enemies for 2 seconds.",
          icon: "JeryhMy.png"
        },
        e_2: {
          effect_name: "Long Fuse",
          description:
            "The explosion time increases from 3 seconds to 5 seconds. Damage to enemies increases by 75%",
          icon: "eOTsTHH.png"
        }
      }
    },
    s_3: {
      skill_name: "Whirlwind Arrow",
      cd: "12",
      description: "You shoot a swirling arrow that deals damage along the way",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "Db3jg6j.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 2s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Quick Hand",
          description: "Increases attack speed by 15%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Insight",
          description: "Increase the skill range by 3m",
          icon: "SoLHNDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Reinforced Arrow",
          description: "Increase the damage by 30%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Blizzard",
          description: "Decrease enemies movement speed 5s",
          icon: "pySlNIZ.png"
        },
        e_3: {
          effect_name: "Hellfire",
          description:
            "50% chance to hit enemy for 5 seconds to burn status. Ignore 20% of armor",
          icon: "cXMAUIN.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Guidance arrow",
          description:
            "The whirlwind follows the nearest enemy. The duration of the arrow increases by 1 second",
          icon: "EIUwvad.png"
        },
        e_2: {
          effect_name: "Arrowstorm",
          description: "Increases attack range by 20% and damage by 75%",
          icon: "hXBL5OK.png"
        }
      }
    },
    s_4: {
      skill_name: "Sharp Shooter",
      cd: "24",
      description:
        "You're bending your bow to shoot 10 arrows at once that deal damage to enemies in the area. Each enemy can only receive 2 arrows maximum",
      additional_effects: ["Neutralization [Medium]"],
      type: ["Tap"],
      time: [""],
      icon: "9gpxiF3.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Quick Hand",
          description: "Increases attack speed by 15%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Mind Enhancement ",
          description: "Decrease MP usage by 50%",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Merciless Fire",
          description: "Increases the number of arrows from 10 to 15",
          icon: "WapQ0GV.png"
        },
        e_2: {
          effect_name: "Painful Shooting",
          description:
            "Inflicts bleeding, inflicting damage every second for 5 seconds.",
          icon: "zHwYyaV.png"
        },
        e_3: {
          effect_name: "Weak Point",
          description:
            "Increase the damage by 40% toward an enemy with hit recovery immune",
          icon: "a5qp6Tt.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Concentrated Shot",
          description:
            "Up to 5 arrows stuck to the same target. Critical damage is increased by 50%",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Definite Fire",
          description:
            "Two arrows hit to all enemies within range. If Merciless Fire is learned, all enemies in range are hit by 3 arrows",
          icon: "3PXf9mr.png"
        }
      }
    },
    s_5: {
      skill_name: "Slash Step",
      cd: "16",
      description: "Moves forward 8m and inflicts damage",
      additional_effects: ["Back Arrow", " Immune [stiffness]"],
      type: ["Tap"],
      time: [""],
      icon: "3bLjfYn.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Critical Hit",
          description: "Increases Critical Hit Rate by 15%",
          icon: "GjqRFi1.png"
        },
        e_3: {
          effect_name: "Excellent Maneuver",
          description: "Increase skill’s travel distance by 3m",
          icon: "frf2qov.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Agile judgment",
          description: "Attack speed increased by 30% for 5s",
          icon: "4yeH6Qd.png"
        },
        e_2: {
          effect_name: "Silver Master",
          description: "Skill hits to restore identity 35",
          icon: "zI3CFEO.png"
        },
        e_3: {
          effect_name: "Mark Of Death",
          description:
            "Inflicts Mark of death to an enemy hit on a move. The Mark of death can be applied up to 3 times. Increasing the damage received by the enemy from 5% to 20% depending on the number of effects",
          icon: "iTPXtBh.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Survival",
          description:
            "Become super armor while using the skill. Increases evasion rate by 50% for 2s",
          icon: "8nAZ8Fm.png"
        },
        e_2: {
          effect_name: "Strengthening",
          description:
            "Increases damage by 100% and deals bleed, dealing damage every second for 3 seconds",
          icon: "FpXyekj.png"
        }
      }
    },
    s_6: {
      skill_name: "Persintent Tracking",
      cd: "14",
      description:
        "You jump in the air and kick, inflict damage on the enemies below and knock them over, then jump forward 8 meters away",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "aapX9if.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Hand",
          description: "Increases attack speed by 15%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 2s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Excellent Maneuver",
          description: "Increase skill’s travel distance by 3m",
          icon: "frf2qov.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Light Footsteps",
          description: "Increases movement speed by 30% for 3s",
          icon: "LmuvcKG.png"
        },
        e_2: {
          effect_name: "Evasion Master",
          description: "Increases evasion rate by 35% during cast",
          icon: "3MH8R85.png"
        },
        e_3: {
          effect_name: "Weak Point",
          description:
            "Increase the damage by 40% toward an enemy with hit recovery immune",
          icon: "a5qp6Tt.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "A Neat Herb",
          description:
            "Increases knockdown time by 50% and increases damage by 100%.",
          icon: "tolsJTT.png"
        },
        e_2: {
          effect_name: "Finishing Blow",
          description:
            "After landing, attack a second time. The point of neutralization(staggering time) increases by 100%",
          icon: "JeryhMy.png"
        }
      }
    },
    s_7: {
      skill_name: "Claymore",
      cd: "20",
      description:
        "You place a mine in front of you that activates to inflict damage in front of her, and pushes enemy",
      additional_effects: [
        "Pierce [level 1]",
        " Neutralization [Medium]",
        " Immune [stiffness]"
      ],
      type: ["Tap"],
      time: [""],
      icon: "bXgHl4Q.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Hand",
          description: "Increases attack speed by 15%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Penetration Enhance",
          description: "Increases penetration rate by 1",
          icon: "Mo0MlPh.png"
        },
        e_3: {
          effect_name: "Push",
          description: "Increases the distance by 25%",
          icon: "DUWC0Nh.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Strength",
          description: "Become immune to cc during skill casting",
          icon: "a7DgAOn.png"
        },
        e_2: {
          effect_name: "Thunderstorm",
          description:
            "Increases the chance of critical hits by 15%, making it in a state of electric shock for 3 seconds. Enemies are no longer pushes",
          icon: "qp8CE16.png"
        },
        e_3: {
          effect_name: "Lightning",
          description:
            "Increases damage by 30% and burns the enemy, inflicting damage every second for 3 seconds. But increases the mana cost by 30%",
          icon: "cXMAUIN.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Storm Surge",
          description: "The direction of the explosion changes to a sector",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "Concentrated Storm",
          description:
            "Decreases the range by 30%, but explodes 3 times with 0.5s intervals. Damage to enemies increases by 80%",
          icon: "32F9lxY.png"
        }
      }
    },
    s_8: {
      skill_name: "Charged Shot",
      cd: "18",
      description:
        "Charges a shot, can be charged up to three times to inflict maximum damage",
      additional_effects: ["Pierce [level 1]", " Neutralization [Medium]"],
      type: ["Charge"],
      time: [""],
      icon: "ys7YoQ9.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Evasion Master",
          description: "Increases evasion rate by 35% during cast",
          icon: "j4OiBjo.png"
        },
        e_2: {
          effect_name: "Reinforced Arrow",
          description: "Increase the damage by 20%",
          icon: "DI0jbqj.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Сamouflage",
          description: "You become invisible. Cooldown increased by 9 seconds",
          icon: "FpYpAkw.png"
        },
        e_2: {
          effect_name: "Recall",
          description:
            "When the overcharge is not reached, decrease value of Stiffness/creep effect is reduced by 50%",
          icon: "OpQyn4M.png"
        },
        e_3: {
          effect_name: "Quick Hand",
          description: "Charge time is reduced by 50%",
          icon: "rP1umQI.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Through Arrow",
          description:
            "Ignores 50% of the enemy's physical defense. Penetration level is increased by 1",
          icon: "a80k0ch.png"
        },
        e_2: {
          effect_name: "Concentration",
          description:
            "An additional phase is added. When overcharged, increasing damage by 30% and increases critical hit rate by 30%",
          icon: "Pv2SzkI.png"
        }
      }
    },
    s_9: {
      skill_name: "Makeshift Shot",
      cd: "10",
      description:
        "You hold your bow horizontally and shoot several arrows simultaneously, which inflict damage",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "baSA6dA.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Mind Enhancement",
          description: "Decrease MP consumption by 50%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Lightfoot",
          description: "Increases movement speed by 20% for 3s",
          icon: "ZYlrZ9I.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Achievement Of Training",
          description: "Increase attack distance by 30%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Cold arrow",
          description:
            "Increases damage by 15% and reduces enemy movement speed by 50% for 3 seconds",
          icon: "pySlNIZ.png"
        },
        e_3: {
          effect_name: "Shock Fire",
          description: "Stuns the target for 3 seconds if a hit is critical",
          icon: "TR1aIIB.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Covert Movement",
          description:
            "After using the skill, you become invisible and increase your dodge by 50% for 3 seconds",
          icon: "0MliLYz.png"
        },
        e_2: {
          effect_name: "Close Shot",
          description:
            "The attack angle is reduced by 30% and increases damage by 75%",
          icon: "FpXyekj.png"
        }
      }
    },
    s_10: {
      skill_name: "DM-42",
      cd: "24",
      description:
        "You place a mine that explodes after 12 seconds, or if an enemy triggers it. Inflicts damage and knocks down enemies",
      additional_effects: ["Destruction [Level 1]", " Neutralization [Medium]"],
      type: ["Chain"],
      time: [""],
      icon: "fRixKug.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mind Enhancement",
          description: "Decrease MP consumption by 50%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Heavy Steel",
          description:
            "Increases the damage dealt to normal monsters and below by 20%",
          icon: "va33gLt.png"
        },
        e_3: {
          effect_name: "Strengthen Destruction",
          description: "Increases the destruction level by 1",
          icon: "t2cMfkL.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Remote Installation",
          description: "Increases the deployment distance by 4 meters",
          icon: "ttirMI4.png"
        },
        e_2: {
          effect_name: "Shock Mines",
          description:
            "Do not knockdown the enemy anymore, but stuns them for 4s",
          icon: "wGYSIwd.png"
        },
        e_3: {
          effect_name: "Explosion Spread",
          description: "Increase explosion range by 30%",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Fire Mines",
          description:
            "Reduces the damage of the explosion by 20% but creates a flame zone that deals 45% of the damage every second for 4s",
          icon: "66Zayrk.png"
        },
        e_2: {
          effect_name: "Distributed Installation",
          description:
            "Can install 2 mines within 5s, but increases the cooldown by 6s",
          icon: "dgg9J9i.png"
        }
      }
    },
    s_11: {
      skill_name: "Arrow Shower",
      cd: "24",
      description:
        "You shoot several arrows in the air, which fall back to the targeted location. They deal damage for 2 seconds",
      additional_effects: ["Neutralization [Low]"],
      type: ["Point"],
      time: [""],
      icon: "K3czCOM.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Hand",
          description: "Increases attack speed by 15%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Mind Enhancement",
          description: "Decrease MP consumption by 50%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Evasion Master",
          description: "Increases evasion rate by 35% during cast",
          icon: "j4OiBjo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Enhancement Sustain",
          description:
            "Reduces damage by 20% per hit but increases the duration by 2s",
          icon: "cD0keDA.png"
        },
        e_2: {
          effect_name: "Flame Baptism",
          description:
            "Fire arrows fall and burn enemies, inflicting damage every second for 3s",
          icon: "cXMAUIN.png"
        },
        e_3: {
          effect_name: "Electric Baptism",
          description:
            " Shoots a bolt of lightning <br>30% chance to stun for 3s",
          icon: "h9ZXI1D.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Piercing Arrow",
          description:
            "The arrows fall faster <br>Critical hit rate increases by 40%",
          icon: "c9NTWOQ.png"
        },
        e_2: {
          effect_name: "Sustained Rain",
          description: "Increase damage to enemies by 30% per second",
          icon: "3PXf9mr.png"
        }
      }
    },
    s_12: {
      skill_name: "Evasive Shot",
      cd: "20",
      description:
        "You jump backwards and shoot in front of you, inflicting damage",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "vsZAnZt.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Hand",
          description: "Increases attack speed by 15%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Excellent Maneuver",
          description: "Move backward by 3m",
          icon: "frf2qov.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Light Footsteps",
          description: "Increases movement speed by 30% for 3s",
          icon: "LmuvcKG.png"
        },
        e_2: {
          effect_name: "Evasion Master",
          description: "Increases evasion rate by 40% during cast",
          icon: "3MH8R85.png"
        },
        e_3: {
          effect_name: "Heavy Arrow",
          description:
            "The distance to push enemies is increased by 3m <br>Increases damage by 20%",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Conversion Strike",
          description:
            "Knockdown enemy <br>Increases critical hit rate by 100%",
          icon: "A2uWtO2.png"
        },
        e_2: {
          effect_name: "Strategic Retreat",
          description:
            "After landing, you can use a new arrow in the direction and retreat an additional 2 meters",
          icon: "32F9lxY.png"
        }
      }
    },
    s_13: {
      skill_name: "Quick Cut",
      cd: "12",
      description:
        "You give a quick stab in front of you, inflicting damage and applying the Mark of Death effect. The Death Mark effect can be applied up to 3 times, increasing the damage received by the enemy from 5% to 20% depending on the number of effects",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "IPpQRPz.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mind Enhancement",
          description: "Decrease MP usage by 50%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Silver Master",
          description: "Skill hits to restore identity 35",
          icon: "j9eW4TE.png"
        },
        e_3: {
          effect_name: "Quick hit",
          description: "Increases Critical Hit Rate by 20%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Mark Of Death",
          description:
            "The Mark of death can be applied up to 2 times. The mark of death can be stacked up to 3 times. Increasing the damage from 5% to 20% depending on the number of effects",
          icon: "iTPXtBh.png"
        },
        e_2: {
          effect_name: "Unjust Strike",
          description:
            "Increase the damage bonus to 100% while enemy health is above 80%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Painful Strike",
          description:
            "Inflicts bleeding, inflicting damage every second for 5 seconds.",
          icon: "zHwYyaV.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Double cut",
          description:
            "Give a second hit, which increases the damage by 100%. A 20% chance inflict an additional 400% damage",
          icon: "Bybk6tw.png"
        },
        e_2: {
          effect_name: "Covert Movement",
          description:
            "After using the skill, you become invisible and increase movement speed by 50% for 3 seconds",
          icon: "0MliLYz.png"
        }
      }
    },
    s_14: {
      skill_name: "Smoke Arrow",
      cd: "16",
      description:
        "You shoot an arrow at the target location that deals damage and creates a smoke zone for 4 seconds, the speed of movement and the vision field of the enemies are reduced in the smoke",
      additional_effects: [""],
      type: ["Point"],
      time: [""],
      icon: "4YBWo09.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mind Enhancement ",
          description: "Decrease MP usage by 50%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Ranged Shooting",
          description: "Increases the range of 3m",
          icon: "SoLHNDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Sticky Smoke",
          description:
            "Reduction movement speed lasts for 3 seconds even when moving out of the smoke zone",
          icon: "cimRspI.png"
        },
        e_2: {
          effect_name: "Dark Smoke",
          description:
            "Reduces the vision field of enemies for 3 seconds even if they come out of the smoke zone",
          icon: "2JPSkpi.png"
        },
        e_3: {
          effect_name: "Poison Smoke",
          description: "Inflicts damage every second to enemies in the smoke",
          icon: "zHwYyaV.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Spreading Smoke",
          description: "Increases smoke zone by 30%",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "Invisible Threat",
          description:
            "Increases the damage done to enemies in the Smoke Zone by 40%",
          icon: "FpXyekj.png"
        }
      }
    },
    s_15: {
      skill_name: "Shadow Arrow",
      cd: "8",
      description:
        "You quickly shoot an arrow that deals damage and applies the Dark Curse effect, reducing the speed of movement and the field of view of the enemy. If the Dark Curse effect is applied 3 times, the enemy is stunned for 5 seconds",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "PVfbGeP.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Fast Charge",
          description: "Reduces the cooldown of each charge by 2s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "High Speed Arrow",
          description: "Increases the speed of the arrows by 20%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Mind Enhancement",
          description: "Decrease MP usage by 50%",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Overcharge",
          description: "The stack of shadow arrows increases from 3 to 4",
          icon: "KG9Q6Np.png"
        },
        e_2: {
          effect_name: "Curse",
          description:
            "Increases the duration of the Dark Curse effect from 5s to 6s",
          icon: "C42y0cZ.png"
        },
        e_3: {
          effect_name: "Shadows of Abyss",
          description: "Increases shadow curse effect by 50%",
          icon: "2JPSkpi.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Shadow Tracking",
          description:
            "Shadow arrows track the closest enemy on the path. No longer pierce the enemy and increase the cooldown by 2s",
          icon: "S2Ogv2N.png"
        },
        e_2: {
          effect_name: "Ruthless Shadow",
          description: "Shoot 3 arrows together",
          icon: "4wG5uWK.png"
        }
      }
    },
    s_16: {
      skill_name: "Blade Storm",
      cd: "20",
      description: "Spins rapidly and throw blade, causing damage 9 times",
      additional_effects: ["Neutralization [Low]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "GbYLeeV.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Hand",
          description: "Increases attack speed by 15%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Light Footsteps",
          description: "Increases movement speed by 30% for 3s",
          icon: "LmuvcKG.png"
        },
        e_3: {
          effect_name: "Silver Master",
          description: "Each time skill hit 3 times to restore identity 12",
          icon: "j9eW4TE.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Continuous Attack",
          description: "Increases the attack count by 6",
          icon: "cD0keDA.png"
        },
        e_2: {
          effect_name: "Lightning Storm",
          description: "The last shot electrifies enemy for 3s",
          icon: "h9ZXI1D.png"
        },
        e_3: {
          effect_name: "Mark Of Death",
          description:
            "Inflicts mark of death to an enemy hit in the last attack. The Mark of death can be applied up to 3 times. Increasing the damage received by the enemy from 5% to 20% depending on the number of effects",
          icon: "iTPXtBh.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Blade Dance",
          description:
            "Becomes holding skill is changed and the number of attacks is increased by 6 times",
          icon: "oxGXfhi.png"
        },
        e_2: {
          effect_name: "Growing Blade",
          description: "Increases damage by 30% for each 3 hit",
          icon: "3PXf9mr.png"
        }
      }
    },
    s_17: {
      skill_name: "Electric Nova",
      cd: "24",
      description:
        "After aiming inflict damage to the first enemy hit, to nearby enemies and behind the target. The arrow has a 60% chance to stun the first enemy hit for 3 seconds, 40% for nearby enemies, and 20% for enemies behind the target",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "lafJsCh.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Hand",
          description: "Increases attack speed by 15%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Mind Enhancement ",
          description: "Decrease MP usage by 50%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Ranged Shooting",
          description: "Increases the range of 3m",
          icon: "SoLHNDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Nova power",
          description:
            "The chances of stunning the first enemy are increased from 60% to 100%, for enemies close to 40% to 70% and for enemies behind from 20% to 50%",
          icon: "TR1aIIB.png"
        },
        e_2: {
          effect_name: "Overload",
          description:
            "Increases damage by 20% for the first enemy hit, 40% for nearby enemies, and 70% for enemies behind",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Electric shock",
          description:
            "No longer inflicts stunning but gains 100% chance to inflict electrocution for 3 seconds and increases damage by 25%",
          icon: "h9ZXI1D.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Lightning Rod",
          description:
            "Send the lightning rod in the targeted location for 2 seconds, it deals a second attack, increasing the damage by 100%",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: " Electric Storm",
          description:
            "Increases the size of the skill by 50% and increases the current range by 30%",
          icon: "bjbQ0Fr.png"
        }
      }
    },
    s_18: {
      skill_name: "Snipe",
      cd: "36",
      description:
        "When holding, it is aimed, deals heavy damage to the perfect zone, and less damage if it fails",
      additional_effects: ["Neutralization [Mid-High]"],
      type: ["Hold"],
      time: [" 3 sec"],
      icon: "WGiNwly.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Quick Hand",
          description: "Increases attack speed by 15%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Insight",
          description: "Increase the skill range by 3m",
          icon: "SoLHNDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Perfection",
          description:
            "Increases damage by 40% when the arrow is released at the perfect zone",
          icon: "EZeZA3W.png"
        },
        e_2: {
          effect_name: "Strength",
          description: "Become super armor during the cast a skill",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "Weak Point",
          description:
            "Increase the damage by 25% toward an enemy with hit recovery immune and 75% for perfect zone",
          icon: "a5qp6Tt.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Ghillie Suit",
          description:
            "You become invisible during the cast a skill and your dodge increases by 30%, but increases the cooldown by 18s",
          icon: "0MliLYz.png"
        },
        e_2: {
          effect_name: "Easy Prey",
          description:
            "Increases the size of the perfect zone and chance of critical hits by 75%",
          icon: "Pv2SzkI.png"
        }
      }
    },
    ult: {
      skill_name: "Kelsion",
      cd: "300",
      description: "",
      additional_effects: [
        "Neutralization [Medium]",
        " Back Attack",
        " Immune [Hit Recovery & Abnormal Status]"
      ],
      type: ["Tap"],
      time: [""],
      icon: "eVrfA9S.png"
    }
  }
};
