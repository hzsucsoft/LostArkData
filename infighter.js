module.exports = {
  infighter: {
    s_1: {
      skill_name: "Advancing Strike",
      cd: "12",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: [
        "Destruction [level 1]",
        " Neutralization [Low]",
        " Back Attack",
        " Damage immunity"
      ],
      type: ["Tap"],
      time: [""],
      icon: "5S5cwg6.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Excellent Mobility",
          description: "Travel distance increased by 2m",
          icon: "frf2qov.png"
        },
        e_2: {
          effect_name: "Abdominal Respiration",
          description: "Power gauge consumption reduced by 5",
          icon: "IAAbR7L.png"
        },
        e_3: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 20%",
          icon: "rlevb4r.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Concentration",
          description: "Shock gauge generation increased by 8",
          icon: "UnhMZ84.png"
        },
        e_2: {
          effect_name: "Battle Preparations",
          description:
            "When hitting the enemy with the down-attack of this skill, increase damage by 15% for 4s",
          icon: "eajjkDJ.png"
        },
        e_3: {
          effect_name: "Enhanced Blow",
          description:
            "Decreases Shock gauge generation by 10 but increases damage by 30%",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Ruthless Advance",
          description:
            "After the right-hand attack, a left-hand attack is added which increases the skill’s total damage by 30%",
          icon: "s2QfHGg.png"
        },
        e_2: {
          effect_name: "Destroyer",
          description:
            "Attack speed is increased by 30%. Additionally, against enemies that are immune to stagger, deal 30% increased damage",
          icon: "nws09aw.png"
        }
      }
    },
    s_2: {
      skill_name: "Sundering Strike",
      cd: "14",
      description:
        "Pierce the ground with your spear to inflict x damage, and then pull out the spear to inflict y damage while putting frontal enemies into the air ",
      additional_effects: "Neutralization [Medium], Back Attack",
      type: "Combo",
      time: "",
      icon: "1qSUt8T.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Internal Bleeding",
          description: "50% chance to inflict Bleed for 3s ",
          icon: "1PceV71.png"
        },
        e_2: {
          effect_name: "Wide Blow",
          description: "Increases attack range by 20% ",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "Sharp Blow",
          description: "Critical damage increases by 50% ",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Trifoliate",
          description:
            "Damage of the first hit increases by 5%, and every hit after that increases by 10% ",
          icon: "TmNqtCH.png"
        },
        e_2: {
          effect_name: "Identified Weakness",
          description: "Increases damage done to cc immune enemies by 40% ",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 2s ",
          icon: "bkMVKSJ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "One Punch Blow",
          description:
            "After the final hit, one more punch is added and the total damage increases by 50% ",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "Transcendent",
          description: "The last hit has it’s critical chance raised by 100% ",
          icon: "s2QfHGg.png"
        }
      }
    },
    s_3: {
      skill_name: "Wild Tiger Strike",
      cd: "12",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: ["Neutralization [Low]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "l27NhYr.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 20%",
          icon: "rlevb4r.png"
        },
        e_2: {
          effect_name: "Enhanced Blow",
          description:
            "Decreases Shock gauge generation by 10 but increases damage by 20%",
          icon: "DI0jbqj.png"
        },
        e_3: {
          effect_name: "Abdominal Respiration",
          description: "Power gauge consumption reduced by 5",
          icon: "IAAbR7L.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Dig",
          description: "Movement distance is doubled",
          icon: "frf2qov.png"
        },
        e_2: {
          effect_name: "Identified Weakness",
          description: "Increases damage done to immune enemies by 40%",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "Concentration",
          description: "Shock gauge generation increased by 10",
          icon: "UnhMZ84.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Continuous Attack",
          description:
            "Changes the attack to a three hit attack. The second hit repeats a third time",
          icon: "hXBL5OK.png"
        },
        e_2: {
          effect_name: "Frantic Bombing",
          description:
            "After the final hit, add one more attack that knocks the enemy down. If the enemy is alone, total damage is increased by 50%",
          icon: "dgg9J9i.png"
        }
      }
    },
    s_4: {
      skill_name: "Dragon’s Descent",
      cd: "16",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: ["Neutralization [Mid-High]", " Back Attack"],
      type: ["Point"],
      time: [""],
      icon: "qyP3mCz.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Excellent Mobility",
          description: "Travel distance increased by 2m",
          icon: "frf2qov.png"
        },
        e_2: {
          effect_name: "Abdominal Respiration",
          description: "Power gauge consumption reduced by 5",
          icon: "IAAbR7L.png"
        },
        e_3: {
          effect_name: "Momentary Burst",
          description:
            "Increases Power gauge consumption by 10 but increases damage by 30%",
          icon: "5uAj97G.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Wide Blow",
          description: "Increases attack range by 30%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Incarnation",
          description:
            "After landing, you cover yourself in a fire aura for 6s, dealing continuous damage to nearby enemies",
          icon: "cXMAUIN.png"
        },
        e_3: {
          effect_name: "Strength",
          description: "Become immune to cc during skill casting",
          icon: "a7DgAOn.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Destruction",
          description: "Increases damage to single targets by 60%",
          icon: "S2Ogv2N.png"
        },
        e_2: {
          effect_name: "Black Dragon’s Fall",
          description: "Increases damage to enemies by 30%",
          icon: "QpObGxT.png"
        }
      }
    },
    s_5: {
      skill_name: "Instant Strike",
      cd: "20",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "ARUFIhw.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 20%",
          icon: "rlevb4r.png"
        },
        e_2: {
          effect_name: "Abdominal Respiration",
          description: "Power gauge consumption reduced by 5",
          icon: "IAAbR7L.png"
        },
        e_3: {
          effect_name: "Concentration",
          description: "Shock gauge generation increased by 10",
          icon: "11MLrbC.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Dangerous Contract",
          description:
            "Decreases cooldown by 6s but also reduces Stun duration by 1s",
          icon: "bkMVKSJ.png"
        },
        e_2: {
          effect_name: "Accuracy",
          description: "Increases the Stun duration by 2s",
          icon: "TR1aIIB.png"
        },
        e_3: {
          effect_name: "Adverse Effect",
          description:
            "Removes the Stun on the skill but increases its damage by 200% against enemies immune to hit-effects",
          icon: "eB8ZwLp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Tracking Instinct",
          description: "Advances up to 4 meters in the direction of the cursor",
          icon: "KUr6DEO.png"
        },
        e_2: {
          effect_name: "Last Stand",
          description: "Increases attack range by 350",
          icon: "wYJaLXy.png"
        }
      }
    },
    s_6: {
      skill_name: "Earth Tremor",
      cd: "20",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: ["Neutralization [Medium]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "cAbaaDp.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Earthen Strength",
          description: "Increases damage to normal enemies by 20%",
          icon: "yzT2J9V.png"
        },
        e_2: {
          effect_name: "Vigor Training",
          description: "No longer costs Power gauge nor generates Shock gauge",
          icon: "IAAbR7L.png"
        },
        e_3: {
          effect_name: "Emergency Escape",
          description:
            "If cast when below 40% HP, increases movement speed by 40% for 4s",
          icon: "nIdDNjH.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Identified Weakness",
          description: "Increases damage done to cc immune enemies by 40%",
          icon: "a5qp6Tt.png"
        },
        e_2: {
          effect_name: "Strength",
          description: "Become immune to cc during skill use.",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "Strong Attack",
          description:
            "Increases floating and knockdown duration by 40%. Additionally, increases damage by 40% against enemies that are knocked down",
          icon: "Ntx7DAR.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Empowered Earthquake",
          description:
            "Hits the earth powerfully to generate a shockwave. Increases range by 40% and the damage by 80%",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "Giant’s Advance",
          description:
            "Adds an additional forward stomp after the first one that hits for 60% of the base damage",
          icon: "hXBL5OK.png"
        }
      }
    },
    s_7: {
      skill_name: "Fury Strike",
      cd: "16",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: [
        "Destruction [level 1]",
        " Neutralization [Mid-High]",
        " Back Attack"
      ],
      type: ["Hold"],
      time: [" 1 sec"],
      icon: "tfMwLAs.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Crackshot",
          description: "Increases damage of the hook (last) attack by 50%",
          icon: "SKW6lN3.png"
        },
        e_2: {
          effect_name: "Righteous Plunder",
          description:
            "As you jab, there’s a 50% chance to apply Bleed for 5s. This can stack up to 3 times",
          icon: "1PceV71.png"
        },
        e_3: {
          effect_name: "Excellent Mobility",
          description: "Travel distance increased by 2m",
          icon: "frf2qov.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Terrifying Will",
          description: "Critical damage increases by 100%",
          icon: "8IxcdAX.png"
        },
        e_2: {
          effect_name: "Red Explosion",
          description:
            "Increases the duration of the fast jabs part of the attack by 0.5s",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "A Single Blow",
          description: "Increases fast jabs damage to single targets by 60%",
          icon: "Ct0bUxo.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Widespread",
          description:
            "The fast jabs turn into two spurts of furious flurries and the damage increases by 100%",
          icon: "hXBL5OK.png"
        },
        e_2: {
          effect_name: "Reverse Rotation Blow",
          description:
            "After the final hit, adds one more attack in front by spinning",
          icon: "7GBXv8l.png"
        }
      }
    },
    s_8: {
      skill_name: "Push Through",
      cd: "24",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: ["Neutralization [High]", " Back Attack"],
      type: ["Hold"],
      time: [" 4 sec"],
      icon: "Zk8MGNo.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Critical Hit",
          description: "Increases critical hit rate by 20%",
          icon: "GjqRFi1.png"
        },
        e_2: {
          effect_name: "Solid Armor",
          description: "Incoming damage received reduced by 20% during cast",
          icon: "SfUebeR.png"
        },
        e_3: {
          effect_name: "Quick Charge",
          description:
            "Every time this attack successfully lands, generates 1 additional Shock gauge",
          icon: "j9eW4TE.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Anger",
          description:
            "If your health falls under 50%, increases damage dealt by 30%.",
          icon: "cimRspI.png"
        },
        e_2: {
          effect_name: "Momentary Burst",
          description:
            "Increases Power gauge consumption by 10 but increases damage by 30%.",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Piercing Strike",
          description: "Attack ignores 40% of enemy’s physical defense",
          icon: "ktJIUvL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Threshold of Death",
          description:
            "At the end of the charge, a new slam is added which increases total damage by 50% and knocks down enemies hit by it",
          icon: "19503dj.png"
        },
        e_2: {
          effect_name: "Forward Advance",
          description:
            "Increases attack speed by 20% and total charge time by 50%",
          icon: "JMU1YLm.png"
        }
      }
    },
    s_9: {
      skill_name: "Triplex Punch",
      cd: "16",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: [
        "Pierce [level 1]",
        " Neutralization [Medium]",
        " Back Attack"
      ],
      type: ["Combo"],
      time: [""],
      icon: "0T5vGR0.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Enhanced Blow",
          description:
            "Transforms the last attack into a strong smash which knocks down enemies",
          icon: "5p95lRo.png"
        },
        e_2: {
          effect_name: "Wave",
          description:
            "The final strike fires a burst of energy 5 meter outwards",
          icon: "SoLHNDZ.png"
        },
        e_3: {
          effect_name: "Full Power",
          description: "Increases damage by 30%",
          icon: "DI0jbqj.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Concentration",
          description: "Shock gauge generation increased by 10",
          icon: "UnhMZ84.png"
        },
        e_2: {
          effect_name: "Wide Blow",
          description: "Increases attack range by 20%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 3s",
          icon: "bkMVKSJ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Reinforcement",
          description:
            "Increases movement distance by 1 meter, attack speed by 20%, and damage by 150% when attacking an enemy immune to hit-effects",
          icon: "KUr6DEO.png"
        },
        e_2: {
          effect_name: "Enhanced Fist",
          description:
            "Grants immunity to hit-effects while casting and increases the damage by 40%",
          icon: "6vzVrvN.png"
        }
      }
    },
    s_10: {
      skill_name: "Chains of Resonance",
      cd: "15",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: ["Neutralization [Low]"],
      type: ["Tap"],
      time: [""],
      icon: "ovYg5U3.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 2s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Concentration",
          description: "Increases Shock gauge generation by 5",
          icon: "j9eW4TE.png"
        },
        e_3: {
          effect_name: "Strength",
          description: "Become immune to cc during skill use",
          icon: "a7DgAOn.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Enhanced Blow",
          description:
            "Decreases Shock gauge generation by 10 but increases damage by 40%",
          icon: "DI0jbqj.png"
        },
        e_2: {
          effect_name: "Vigilance",
          description:
            "Increases attack power by 5% for 3s. Can be stacked up to 10 times",
          icon: "eajjkDJ.png"
        },
        e_3: {
          effect_name: "Piercing Strike",
          description: "Attack ignores 40% of enemy’s physical defense",
          icon: "ktJIUvL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Oscillating Resonance",
          description:
            "Chains project into a circular shape and pulls enemies towards the center",
          icon: "ClOC78j.png"
        },
        e_2: {
          effect_name: "Empowered Resonance",
          description: "Launches three chains that pull the enemy to you",
          icon: "MbPnoxn.png"
        }
      }
    },
    s_11: {
      skill_name: "Judgment",
      cd: "12",
      description:
        "Pierce the ground with your spear to inflict x damage, and then pull out the spear to inflict y damage while putting frontal enemies into the air",
      additional_effects: [
        "Pierce [level 1]",
        " Neutralization [Medium]",
        " Back Attack"
      ],
      type: ["Combo"],
      time: [""],
      icon: "mc4sTVI.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Abdominal Respiration",
          description: "Shock gauge consumption reduced by 5",
          icon: "IAAbR7L.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 2s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Sleek Motion",
          description: "Increases attack speed by 10%",
          icon: "9VyE0qU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Strength",
          description: "Become immune to cc during skill use.",
          icon: "a7DgAOn.png"
        },
        e_2: {
          effect_name: "Ignorant Blow",
          description:
            "Can be cast a second time dealing 60% additional damage however increases cooldown by 4s",
          icon: "eajjkDJ.png"
        },
        e_3: {
          effect_name: "Neurology",
          description:
            "Knocks down enemies regardless if they’re in the air or not",
          icon: "xT6ILcv.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "True Judgment",
          description:
            "Changes the attack into two smaller attacks and increases total damage by 60%",
          icon: "Iv7fFBo.png"
        },
        e_2: {
          effect_name: "Talon of the Falcon",
          description: "Increases damage inflicted by 40%",
          icon: "FpXyekj.png"
        }
      }
    },
    s_12: {
      skill_name: "Swallow",
      cd: "8",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: ["Neutralization [Low]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "b7NvBdx.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Wide Blow",
          description: "Attack angle increased by 25%",
          icon: "rlevb4r.png"
        },
        e_2: {
          effect_name: "A Single Blow",
          description: "Increases damage to single targets by 20%",
          icon: "hgks2W0.png"
        },
        e_3: {
          effect_name: "Concentration",
          description: "Strength gauge generation increased by 10",
          icon: "UnhMZ84.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Identified Weakness",
          description: "Increases damage done to cc immune enemies by 30%",
          icon: "a5qp6Tt.png"
        },
        e_2: {
          effect_name: "Lucky Blow",
          description:
            "Increases damage by 20% however decreases minimum damage and increases maximum damage",
          icon: "eajjkDJ.png"
        },
        e_3: {
          effect_name: "Finishing Strike",
          description: "Increases damage by 40% to enemies below 25% of max HP",
          icon: "cimRspI.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Reinforced Blow",
          description:
            "Adds an additional input after the final hit swinging at the enemy once more. Increases total damage by 60%",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "Heavy Swing",
          description:
            "Increases the attack wind-up for a heavier hit. Increases total damage by 60%",
          icon: "FpXyekj.png"
        }
      }
    },
    s_13: {
      skill_name: "Death Sentence",
      cd: "24",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: [
        "Destruction [level 2]",
        " Neutralization [Mid-High]",
        " Back Attack"
      ],
      type: ["Tap"],
      time: [""],
      icon: "rvclWgL.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 15%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Eye of the Heart",
          description:
            "Increases attack speed by 15% but also increases cooldown by 2s",
          icon: "9VyE0qU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Strength",
          description: "Become immune to cc during skill casting",
          icon: "a7DgAOn.png"
        },
        e_2: {
          effect_name: "A Single Blow",
          description: "Increases damage to single targets by 30%",
          icon: "Ct0bUxo.png"
        },
        e_3: {
          effect_name: "Finishing Strike",
          description: "Increases damage by 40% to enemies below 50% of max HP",
          icon: "cimRspI.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Shock",
          description:
            "Increases respective Shock gauge bonus damage by 25%, 50%, 75%, and 90%",
          icon: "hXBL5OK.png"
        },
        e_2: {
          effect_name: "Mind Relaxation",
          description: "Consumes 50% of Shock gauge instead of all",
          icon: "zx5VUqU.png"
        }
      }
    },
    s_14: {
      skill_name: "Decisive Attack",
      cd: "20",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: [
        "Pierce [level 2]",
        " Neutralization [Mid-High]",
        " Back Attack"
      ],
      type: ["Charge"],
      time: [""],
      icon: "Dyrk5WA.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 20%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Concentration",
          description: "Shock gauge consumption reduced by 10",
          icon: "11MLrbC.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Muscle Burst",
          description: "Second wave hit knocks enemy down",
          icon: "xT6ILcv.png"
        },
        e_2: {
          effect_name: "Ligament Burst",
          description: "Second wave hit damage is increased by 50%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Eardrum Rupture",
          description: "Attack reduces enemy’s movement speed by 60% for 3s",
          icon: "C42y0cZ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Mastery",
          description:
            "Increases Shock gauge consumption by 10 but no longer needs to be charged",
          icon: "Iv7fFBo.png"
        },
        e_2: {
          effect_name: "Supersonic Shockwave",
          description:
            "Increases Strength gauge generation by 15 and increases damage by 60% against enemies whose HP is below 40%",
          icon: "hXBL5OK.png"
        }
      }
    },
    s_15: {
      skill_name: "Reincarnation",
      cd: "30",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: [
        "Destruction [level 2]",
        " Neutralization [High]",
        " Back Attack",
        " Damage immunity"
      ],
      type: ["Tap"],
      time: [""],
      icon: "Uji2MTF.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Abdominal Respiration",
          description: "Shock gauge consumption reduced by 15",
          icon: "IAAbR7L.png"
        },
        e_2: {
          effect_name: "Awakening",
          description:
            "The first hit is removed and increases Strength gauge generation by 5",
          icon: "bRHbw6A.png"
        },
        e_3: {
          effect_name: "Wide Blow",
          description:
            "First hit range is increased by 50%. Enemies struck are pulled towards the center.",
          icon: "rlevb4r.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Armor Destruction",
          description:
            "First hit reduces the defense of struck enemies by 30% for 3s",
          icon: "2JPSkpi.png"
        },
        e_2: {
          effect_name: "Strength",
          description: "Become immune to cc during skill casting",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "Unbalanced",
          description:
            "Increases damage by 30% and damage received while casting by 30%.",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Mega Explosion",
          description:
            "The last attack has a slight delay (adds a jumping animation) and the damage of it is increased by 200%",
          icon: "Pv2SzkI.png"
        },
        e_2: {
          effect_name: "Vital Impact",
          description:
            "Attack speed increases by 30% and damage per hit increases by 20%",
          icon: "JMU1YLm.png"
        }
      }
    },
    s_16: {
      skill_name: "True Art: Rising Falcon",
      cd: "24",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: ["Neutralization [Mid-High]", " Back Attack"],
      type: ["Combo"],
      time: [""],
      icon: "HzIiOaQ.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Technical Finesse",
          description:
            "Adds an uppercut in the beginning of the attack, increasing total damage by 10%",
          icon: "j724HUx.png"
        },
        e_2: {
          effect_name: "Lightning Fist",
          description:
            "The uppercut has a 50% chance to inflict Shock on the enemy for 5s",
          icon: "HR5NqtN.png"
        },
        e_3: {
          effect_name: "Fist of Destruction",
          description:
            "First hit gathers enemies up before floating them into the air",
          icon: "VGqI5ff.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Identified Weakness",
          description: "Increases damage done to cc immune enemies by 80%",
          icon: "a5qp6Tt.png"
        },
        e_2: {
          effect_name: "Angry Strike",
          description:
            "While your HP is 50% or lower, the critical damage of this skill increases by 100%.",
          icon: "qp8CE16.png"
        },
        e_3: {
          effect_name: "Midair Bombing",
          description: "The upper cut pierces 40% of enemy’s physical defense",
          icon: "NdeJndm.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Dragon’s Rage",
          description:
            "Increases attack radius by 30% and decreases incoming damage by 50%",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "Explosive Strike",
          description:
            "The downward strike will always be a critical hit and the critical damage is increased by 20%.",
          icon: "Pv2SzkI.png"
        }
      }
    },
    s_17: {
      skill_name: "Crush",
      cd: "24",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: [
        "Destruction [level 2]",
        " Neutralization [Mid-High]",
        " Back Attack",
        " Damage immunity"
      ],
      type: ["Tap"],
      time: [""],
      icon: "vH3vfFL.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Violent Fist",
          description:
            "The attack when moving forward is turned to a multi-hit. The attack becomes an explosion and inflicts burning damage",
          icon: "ohvDbcU.png"
        },
        e_2: {
          effect_name: "Rational Move",
          description:
            "Movement distance is reduced by 3 meters but damage is increased by 30%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Unexpected Move",
          description:
            "The skill can be charged to a three levels. The movement distance can increases 2 meters according to charge level",
          icon: "1qT5V38.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Overflowing Force",
          description:
            "Damage bonus increases depending on the amount of Shock gauge consumed. The increase is 20%, 40%, 60%, and 80% accordingly",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Shock Control",
          description: "Damage increased by 30%",
          icon: "eajjkDJ.png"
        },
        e_3: {
          effect_name: "Patience",
          description: "Reduces incoming damage by 50%",
          icon: "oVtc2zd.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Surprise Attack",
          description:
            "Increases attack speed by 30% and Power gauge generated by 30",
          icon: "uMGIY45.png"
        },
        e_2: {
          effect_name: "Strength",
          description: "Become immune to cc during skill casting",
          icon: "6vzVrvN.png"
        }
      }
    },
    s_18: {
      skill_name: "Supernova Explosion",
      cd: "30",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: [
        "Neutralization [Mid-High]",
        " Back Attack",
        " Damage immunity"
      ],
      type: ["Tap"],
      time: [""],
      icon: "bcz8lfi.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Sleek Motion",
          description: "Attack speed increases by 10%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Justice Plunder",
          description:
            "Reduces Shock gauge consumption by 30 but increases cooldown by 12s",
          icon: "IAAbR7L.png"
        },
        e_3: {
          effect_name: "God of the Battlefield",
          description: "Damage type is converted from magical to physical",
          icon: "t2cMfkL.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Piercing Strike",
          description:
            "Attack ignores 30% of enemy’s physical and magical defense",
          icon: "ktJIUvL.png"
        },
        e_2: {
          effect_name: "Angry Explosion",
          description:
            "The attack that gathers enemies is removed and the explosion happens instantly instead",
          icon: "rP1umQI.png"
        },
        e_3: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 20%",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Pride of Fighters",
          description:
            "Attacks four times with energy spheres before detonating. Increases damage by 20% each sphere",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Unyielding Blow",
          description: "Increases damage by 50%",
          icon: "hXBL5OK.png"
        }
      }
    },
    ult: {
      skill_name: "Indomitable Dragon King",
      cd: "300",
      description: "Costs 1 Piece of Chaos. Move up to 7 meters",
      additional_effects: ["Neutralization [High]"],
      type: ["Point"],
      time: [""],
      icon: "yMb26sH.png"
    }
  }
};
