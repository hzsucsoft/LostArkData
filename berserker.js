module.exports = {
  berserker: {
    s_1: {
      skill_name: "Double Slash",
      cd: "8",
      description:
        "Deals 2 hit with a sword. Damage bonus for an attack in the back.",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "Pu8MrKN.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 1s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Sleek Motion",
          description: "Attack speed increases by 15%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Sharp Blow",
          description: "Critical damage increases by 50%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Ranged Blow",
          description: "Attack distance increases by 20%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Dull Day",
          description:
            "Increases damage done to enemies by 60%, but increases cooldown by 4s",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Sharp Blade",
          description: "The last attack is always a critical attack",
          icon: "YlRQ5P1.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Mangle",
          description:
            "Increases the attack frequency from 2 to 6 and increases the damage done to enemies by 60%",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Cross",
          description:
            "The attack is changed into the form of a cross. Damage increases by 100%",
          icon: "Iv7fFBo.png"
        }
      }
    },
    s_2: {
      skill_name: "Assault Blade",
      cd: "8",
      description:
        "Deals damage with a sword. Damage bonus for an attack in the back",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "zABnpjM.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Sleek Motion",
          description: "Attack speed increases by 10%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Piercing Strike",
          description: "Ignores 30% of the target's defense",
          icon: "QEd5bZU.png"
        },
        e_3: {
          effect_name: "Charmer",
          description:
            "Increases the attack range by 10% and increases the stagger time of hit enemies by 0.3s",
          icon: "HR5NqtN.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Concentration",
          description: "Anger gain is increased by 100%",
          icon: "UnhMZ84.png"
        },
        e_2: {
          effect_name: "Strengthen Cutting",
          description: "Skill is given Level 1 Cut",
          icon: "W3lPRkN.png"
        },
        e_3: {
          effect_name: "Internal Bleeding",
          description: "When a single target is hit, it will bleed for 5s",
          icon: "Ct0bUxo.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Cutting",
          description:
            "The skill deals an additional hit, for a total of 4 hits. Increases damage done to enemies by 40%",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Counter-Attack",
          description:
            "The first attack deals 80% more damage, and after the first strike, the sword can be swung again causing 100% damage",
          icon: "dgg9J9i.png"
        }
      }
    },
    s_3: {
      skill_name: "Hazardous Crime",
      cd: "16",
      description:
        "Deals damage with his sword, inflicting additional damage to enemies in the air and crushing them to the ground",
      additional_effects: ["Neutralization [Medium]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "p9pS9bS.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Muscle Cramps",
          description: "increased Knockdown duration by 0.5s",
          icon: "BtWx8s1.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description:
            "Reduces the cooldown time by 4s, but mana consumption increases by 50%",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Sharp Strike",
          description: "Increases critical hit rate by 15%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Identified Weakness",
          description: "Increases damage done to immune enemies by 30%",
          icon: "a5qp6Tt.png"
        },
        e_2: {
          effect_name: "Flame Strike",
          description:
            "Inflict 15% additional damage per hit, and increase rage gain by 50%",
          icon: "UnhMZ84.png"
        },
        e_3: {
          effect_name: "Strike Sense",
          description:
            "Upon the first hit, critical hit rate increases by 20% for 3s",
          icon: "YlRQ5P1.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Flame Rush",
          description:
            "The last hit is modified to 4 hits in the air, and the damage done increases by 35% in total",
          icon: "Iv7fFBo.png"
        },
        e_2: {
          effect_name: "Red Lightning",
          description:
            "During ascent, the attack area increases to 360 degrees. Damage done increases by 55%",
          icon: "32F9lxY.png"
        }
      }
    },
    s_4: {
      skill_name: "Finishing Strike",
      cd: "30",
      description: "Deals huge damage with his sword",
      additional_effects: [
        "Slicing [level 2]",
        " Neutralization [Mid-High]",
        " Back Attack"
      ],
      type: ["Combo"],
      time: [""],
      icon: "Q6dmZHI.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Strength",
          description: "During casting, gain immunity to CC",
          icon: "lyseDv0.png"
        },
        e_2: {
          effect_name: "Internal Bleeding",
          description: "Applies a 5s bleed on hit",
          icon: "1PceV71.png"
        },
        e_3: {
          effect_name: "Enhanced Blow",
          description:
            "Increases attack time by 0.5s but increases your damage done by 20%",
          icon: "DI0jbqj.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Finish Him",
          description:
            "Damage to enemies with 25% or health is increased by 30%",
          icon: "cimRspI.png"
        },
        e_2: {
          effect_name: "Muscle Cramps",
          description: "The enemy's fallen state is increased by 1s",
          icon: "POnpICE.png"
        },
        e_3: {
          effect_name: "Internal Bleeding",
          description:
            "If this attack lands and the enemy survives, the damage of the next attack is increased by 30%",
          icon: "2JPSkpi.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Shockwave",
          description:
            "A quake rises after the attack and inflicts an additional 20% damage twice. Additionally, if your health is below 30%, additional damage will increase by (to?) 50%",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Confirm Kill",
          description:
            "Attack style is changed. The second attack deals 80% damage to enemies, and 25% further increased damage to enemies in a fallen state.",
          icon: "Bybk6tw.png"
        }
      }
    },
    s_5: {
      skill_name: "Shoulder Charge",
      cd: "12",
      description: "Charge forward, inflicting damage to enemies on the way",
      additional_effects: ["Back Attack", " Immune [stiffness]"],
      type: ["Tap"],
      time: [""],
      icon: "BL7pQ7a.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Reduces cooldown by 0.6s per hit, for a maximum of 3s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 20%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Excellent Mobility",
          description: "Dash distance increases by 2m",
          icon: "frf2qov.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Acceleration",
          description: "Increases your movement speed by 30% for 3s",
          icon: "LmuvcKG.png"
        },
        e_2: {
          effect_name: "Bravery",
          description:
            "Damage received is reduced by 20% for 6s after the rush",
          icon: "oVtc2zd.png"
        },
        e_3: {
          effect_name: "Enhanced Strike",
          description: "Damage to enemies is increased by 50%",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Continuous Rush",
          description:
            "Attack style is changed. The skill has two charges, but is increased by 6s",
          icon: "Iv7fFBo.png"
        },
        e_2: {
          effect_name: "Crushing Wall",
          description:
            "Attack Range increases by 15% and dash distance increased by 2m. Damage is increased by 100% and knocks enemies down",
          icon: "A2uWtO2.png"
        }
      }
    },
    s_6: {
      skill_name: "Whirlwind",
      cd: "24",
      description: "Spin with your sword to deals damage over 4 seconds.",
      additional_effects: ["Neutralization [Medium]", " Back Attack"],
      type: ["Hold"],
      time: [" 4 sec"],
      icon: "BybShK8.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Lightfoot",
          description: "Increases movement speed by 10% while using the skill",
          icon: "ZYlrZ9I.png"
        },
        e_2: {
          effect_name: "Warrior's Valor",
          description: "Hold time increases by 1s",
          icon: "U2xs2Ib.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 3s",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Quick Hit",
          description: "Critical Hit rate increases by 30%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Chain Wheel",
          description:
            "As you continually attack an enemy, your damage will increase by 6% (per strike), up to 60% total",
          icon: "TmNqtCH.png"
        },
        e_3: {
          effect_name: "Cracked Blade",
          description:
            "Increases attack range of the outer edge of the whirlwind by 20%. Enemies within the outer edge take an additional 60% damage",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Vacuum Cut",
          description:
            "Attack range is increased by 20%, attack rate is doubled, but damage is reduced by 30%",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "Hurricane",
          description:
            "A whirlwind is created when the skill is released in the perfect zone. The whirlwind inflicts 30% damage if it strikes an enemy",
          icon: "JQTrd8y.png"
        }
      }
    },
    s_7: {
      skill_name: "Power Break",
      cd: "20",
      description:
        "Concentrate energy into the sword to deal damage and knockback enemies",
      additional_effects: [
        "Slicing [level 1]",
        " Neutralization [Low]",
        " Back Attack"
      ],
      type: ["Tap"],
      time: [""],
      icon: "YIwTdgp.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 2s.",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Sleek Motion",
          description: "Attack speed increased by 10%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Mental Fortification",
          description: "Mana cost reduced by 50%",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Ranged Blow",
          description: "Attack range increased by 20%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Enhanced Strike",
          description: "Damage to enemies increased by 25%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Defenseless Target",
          description: "Increases damage done to disabled targets by 40%",
          icon: "HWuM5x7.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Power Accumulation",
          description:
            "The attack style is changed to the charge type. Each charge level increases the damage done by 10%, 50%, and 100%",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "Swirl",
          description:
            "Use centrifugal force to attack enemies in 360 degrees. Increases damage done by 30%",
          icon: "Iv7fFBo.png"
        }
      }
    },
    s_8: {
      skill_name: "Tempest Slash",
      cd: "18",
      description:
        "Charge forward and swing your sword to deal damage and lift your enemies into the air, and deal additional 3 hit",
      additional_effects: [
        "Slicing [level 1]",
        " Neutralization [Medium]",
        " Back Attack",
        " Immune [stiffness]"
      ],
      type: ["Combo"],
      time: [""],
      icon: "Wt861Tv.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Concentration",
          description: "Anger gain is increased by 50%",
          icon: "11MLrbC.png"
        },
        e_2: {
          effect_name: "Sleek Motion",
          description: "Attack speed increased by 10%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 2s",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Quick Hit",
          description: "Increases Critical Hit Rate by 30%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Enhanced Strike",
          description: "Damage to enemies is increased by 25%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Heavy Strike",
          description:
            "Final Strike deals an additional 50% damage to CC immune enemies",
          icon: "eajjkDJ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Stir",
          description:
            "Forward movement on the first strike is removed. The second strike is changed into a rotating air attack that strikes 3 times and deals 50% more damage",
          icon: "Iv7fFBo.png"
        },
        e_2: {
          effect_name: "Storm Cut",
          description:
            "The attack range is increased by 20%, and the final strike is changed to a spinning attack that hits enemies behind you. Damage increases by 50%",
          icon: "32F9lxY.png"
        }
      }
    },
    s_9: {
      skill_name: "Mountain Crash",
      cd: "12",
      description:
        "Powerful stomp, and decrease enemy movement speed by 60% for 4s",
      additional_effects: ["Neutralization [Medium]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "uNqr3gr.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 2s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Concussion",
          description:
            "Enemies hit take 10% additional damage from the caster for 5s",
          icon: "VGqI5ff.png"
        },
        e_3: {
          effect_name: "Reinforce",
          description: "Reduces movement speed by an additional 2s",
          icon: "BtWx8s1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Enhanced Strike",
          description: "Damage to enemies is increased by 30%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 20%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "Persistent Tracking",
          description:
            "Increases the movement speed reduction by 20%, and increases your movement speed by 15%",
          icon: "C42y0cZ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Seismic Wave",
          description:
            "Seismic waves are generated, which extend to 5m in succession. Additional strikes have 20% increased critical strike chance, and deal 80% more damage.",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Land Conflict",
          description:
            "Creates an earthquake at the attack location that persists for 6s, dealing damage every second. Additionally, if you have less than 30% of your health, the earthquake lasts an additional 2s",
          icon: "edATIP7.png"
        }
      }
    },
    s_10: {
      skill_name: "Diving Slash",
      cd: "16",
      description: "Jump and crush the enemies with his sword.",
      additional_effects: ["Neutralization [Low]", " Back Attack"],
      type: ["Point"],
      time: [""],
      icon: "DjCXR45.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Excellent Mobility",
          description: "Travel distance increased by 2m",
          icon: "frf2qov.png"
        },
        e_2: {
          effect_name: "Concentration",
          description: "Anger gain increased by 50%",
          icon: "11MLrbC.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 3s",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Fast Movement",
          description: "Increases movement speed by 30% for 3s",
          icon: "LmuvcKG.png"
        },
        e_2: {
          effect_name: "Great Sword Again",
          description:
            "No longer knocks downs enemies, but pulls and collects them in front of you. Additionally, increases attack speed by 20% for 3s",
          icon: "Ntx7DAR.png"
        },
        e_3: {
          effect_name: "Muscle Training",
          description: "Increases knockdown duration by 0.5s",
          icon: "POnpICE.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Power Slash",
          description:
            "Preparation (Wind Up) time is added, but damage done is increased by 200%",
          icon: "FpXyekj.png"
        },
        e_2: {
          effect_name: "Sword Fragment",
          description:
            "Detection will occur when hit, causing a 40% increase in impact and a 4s critical bleed",
          icon: "P0yre5K.png"
        }
      }
    },
    s_11: {
      skill_name: "Hell Blade",
      cd: "36",
      description:
        "Slot your sword into the ground, enabling you to hold for up to 2.5s. In addition. By successfully perfect zone, deal additional damage and lift enemies into the air",
      additional_effects: [
        "Neutralization [High]",
        " Back Attack",
        " Immune [stiffness]"
      ],
      type: ["Hold"],
      time: [" 2.5 sec"],
      icon: "jU0NlqU.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Enhanced Strike",
          description: "Damage done increased by 10%",
          icon: "DI0jbqj.png"
        },
        e_2: {
          effect_name: "Sleek Motion",
          description: "Attack speed increased by 10%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 4s",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Fusion",
          description:
            "Enemies hit by the final strike are burned, causing 20% more damage per second for 10s",
          icon: "2JPSkpi.png"
        },
        e_2: {
          effect_name: "Identified Weakness",
          description: "Increases damage done to cc immune enemies by 40%",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "Quick Hit",
          description: "Increases Critical Hit Rate by 30%",
          icon: "qp8CE16.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Lava Eruption",
          description:
            "Increases the attack range by 60% and increases the sustained damage by 100%",
          icon: "JQTrd8y.png"
        },
        e_2: {
          effect_name: "Blood Loss",
          description:
            "Immediate jump to the desired position within 8m, it immediately inflicts a melee attack, and increases the damage of the ending attack by 100%",
          icon: "32F9lxY.png"
        }
      }
    },
    s_12: {
      skill_name: "Chain Sword",
      cd: "15",
      description:
        "Deal a diagonal sword strike that sends the enemies in the air",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "1h5nwbe.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Hit",
          description: "Critical Hit rate increased by 15% for 3s",
          icon: "GjqRFi1.png"
        },
        e_2: {
          effect_name: "Mental Fortification",
          description: "Mana consumption reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Sleek Motion",
          description: "Attack speed increased by 10%",
          icon: "9VyE0qU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Advance",
          description: "Modifies the skill to dash 4m forward",
          icon: "DLz43Zq.png"
        },
        e_2: {
          effect_name: "Strength",
          description: "Become immune to cc during skill casting",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "Wide Blow",
          description: "Increases attack range by 20%",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Quick Preparation",
          description:
            "Reduces the cooldown by 7s, but reduces damage done by 50%",
          icon: "mJ47SLb.png"
        },
        e_2: {
          effect_name: "Annihilate",
          description:
            "The damage of the first attack is reduced by 50%, but adds a final strike that does 200% more damage",
          icon: "Iv7fFBo.png"
        }
      }
    },
    s_13: {
      skill_name: "Wind Blade",
      cd: "20",
      description: "Swing your sword around while moving to deal damage",
      additional_effects: [
        "Neutralization [Medium]",
        " Back Attack",
        " Immune [stiffness]"
      ],
      type: ["Tap"],
      time: [""],
      icon: "sQikOWf.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Swift Movement",
          description: "Increases movement speed by 15% for 5s",
          icon: "ZYlrZ9I.png"
        },
        e_2: {
          effect_name: "Internal Bleeding",
          description: "Applies 5s of bleeding",
          icon: "1PceV71.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown time reduced by 4s",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Enhanced Strike",
          description: "Damage done increased by 25%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Quick Hit",
          description: "Critical hit rate increased by 30%",
          icon: "qp8CE16.png"
        },
        e_3: {
          effect_name: "Concentration",
          description: "Anger gain increased by 100%",
          icon: "UnhMZ84.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Squall",
          description:
            "Modifies the attack style. Attack three times with forward momentum. Total damage increases by 60%",
          icon: "Bybk6tw.png"
        },
        e_2: {
          effect_name: "Windswift",
          description:
            "Swing forward with more forward momentum. Total damage increases by 30%",
          icon: "Iv7fFBo.png"
        }
      }
    },
    s_14: {
      skill_name: "Maelstorm",
      cd: "15",
      description:
        "SStrongly strike downwards with your sword to deal damage, and pull the sword out of the ground to damage and pull the enemy towards you",
      additional_effects: ["Neutralization [Medium]", " Back Attack"],
      type: ["Combo"],
      time: [""],
      icon: "gM8fPOG.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Sleek Motion",
          description: "Increases attack speed by 10%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Mental Fortification",
          description: "Mana Consumption reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Concentration",
          description: "Anger gain increased by 50%",
          icon: "11MLrbC.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Strength",
          description: "Become immune to cc during skill use.",
          icon: "a7DgAOn.png"
        },
        e_2: {
          effect_name: "Enhanced Strike",
          description: "Damage done increased by 25%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Quick Hit",
          description:
            "A successful second strike increases critical hit rate by 20% for 6s",
          icon: "qp8CE16.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Flame Swirl",
          description:
            "A delayed explosion occurs after the second strike, causing 40% additional damage and floating the target",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Depression",
          description:
            "Increases attack range by 20% and increases skill damage by 30%. Stiffen time of the second strike increased by 1s",
          icon: "edATIP7.png"
        }
      }
    },
    s_15: {
      skill_name: "Strike Wave",
      cd: "24",
      description:
        "Attack can be charged on 3 levels that crack the ground over a long distance, inflicting damage to the affected enemies",
      additional_effects: [
        "Neutralization [Medium]",
        " Back Attack",
        " Immune [stiffness]"
      ],
      type: ["Charge"],
      time: [""],
      icon: "t5tlplr.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown time reduced by 4s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Solid Armor",
          description: "Reduces damage taken during skill cast by 20%",
          icon: "179tjju.png"
        },
        e_3: {
          effect_name: "Strength",
          description: "Become immune to cc during skill use",
          icon: "lyseDv0.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Black Salt",
          description:
            "Fires a black blazing fissure with 30% increased attack range. Anger gain increased by 50%",
          icon: "UnhMZ84.png"
        },
        e_2: {
          effect_name: "Wave",
          description:
            "Charge time is increased by 15%, but damage done to enemies is increased by 15%, 30%, and 60% per stage",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Rebounding Flame",
          description:
            "Increases the damage of the skill by up to 45%, increased by the number of attack received during the charge time",
          icon: "TmNqtCH.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Blaze Wave",
          description:
            "Flame waves are generated, causing an additional 40% damage of the base attack",
          icon: "JQTrd8y.png"
        },
        e_2: {
          effect_name: "Cerberus",
          description:
            "When fully charged, the attack is divided into three branches",
          icon: "bjbQ0Fr.png"
        }
      }
    },
    s_16: {
      skill_name: "Red Dust",
      cd: "30",
      description:
        "Single sword stroke that deals large damage and increases the damage dealt to the opponent by 20% for 6 seconds",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "zSFBxBV.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Reduces cooldown time by 4s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Sleek Motion",
          description: "Attack speed increased by 20%",
          icon: "9VyE0qU.png"
        },
        e_3: {
          effect_name: "Mental Fortification",
          description: "Mana Consumption reduced by 50%",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Quick Hit",
          description: "On hit, critical hit rate increased by 20% for 6s",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Heightened Intellect",
          description: "The duration of the debuff is increased by 3s",
          icon: "POnpICE.png"
        },
        e_3: {
          effect_name: "Red Waves",
          description: "Increases damage done by 50% and attack speed by 25%",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Hermatocrit",
          description:
            "Increases the stagger time of the enemy by 0.5s, bleeds for 5s, and reduces enemy movement speed by 40%",
          icon: "P0yre5K.png"
        },
        e_2: {
          effect_name: "Curse Reinforcement",
          description:
            "The debuff effect is increased by an additional 20% damage done.",
          icon: "W94iICa.png"
        }
      }
    },
    s_17: {
      skill_name: "Blade Storm",
      cd: "30",
      description:
        "Jump and create a black storm while falling. Throw the enemies in the air.",
      additional_effects: [
        "Neutralization [Mid-High]",
        " Back Attack",
        " Immune [stiffness]"
      ],
      type: ["Tap"],
      time: [""],
      icon: "c6zDH3O.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Sleek Motion",
          description: "Attack speed increased by 10%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown time reduces by 4s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Quick Hit",
          description: "Critical hit rate increased by 15%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Backbreak",
          description:
            "After the attack, an explosion occurs in the area causing an additional 20% damage",
          icon: "cD0keDA.png"
        },
        e_2: {
          effect_name: "Defenseless Target",
          description: "Increases damage done to disabled targets by 40%.",
          icon: "HWuM5x7.png"
        },
        e_3: {
          effect_name: "Strength",
          description: "Become immune to cc during skill use.",
          icon: "a7DgAOn.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Fire Storm",
          description:
            "Leaves damaging flames in the attack area, which burns enemies within it for 30% additional damage for 6s. If your health is below 30%, this deals an additional 30% damage",
          icon: "JQTrd8y.png"
        },
        e_2: {
          effect_name: "Seismic Wave",
          description:
            "Instead of a float effect, the attack damage is increased by 30% and causes unsteady ground beneath the enemy for 4s",
          icon: "edATIP7.png"
        }
      }
    },
    s_18: {
      skill_name: "Aurora Blade",
      cd: "16",
      description:
        "Slash into the air, causing a wave of energy which does a ranged attack",
      additional_effects: ["Slicing [level 1]", " Neutralization [Medium]"],
      type: ["Tap"],
      time: [""],
      icon: "IFfCBAu.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Sleek Motion",
          description: "Increases attack speed by 10%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description:
            "Cooldown time reduces by 2s.    Cooldown time reduces by 2s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Ranged Blow",
          description: "Aurora blade travels 10% further",
          icon: "SoLHNDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Strengthen Cutting",
          description: "Increases cut level to 2",
          icon: "W3lPRkN.png"
        },
        e_2: {
          effect_name: "Cadaver",
          description: "Decreases enemy attack speed by 15% for 5s",
          icon: "zHwYyaV.png"
        },
        e_3: {
          effect_name: "Destruction",
          description: "Ignores 40% of the magical armor of enemies hit",
          icon: "ktJIUvL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Space Cut",
          description:
            "Aurora blade is modified to attack 3 times at the target position, increasing damage done by 75%",
          icon: "Iv7fFBo.png"
        },
        e_2: {
          effect_name: "Extinction",
          description:
            "Skill is modified to a combo skill. The attack range is reduced, but the critical hit rate is increase by 30% and inflicts an additional 50% of the base attack damage",
          icon: "dgg9J9i.png"
        }
      }
    },
    ult: {
      skill_name: "Blood Explosion",
      cd: "8",
      description: "Strongly stab forward with the spear to inflict x damage",
      additional_effects: ["Weakening [Low]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "zBbx1Er.png"
    }
  }
};
