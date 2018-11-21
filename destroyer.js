module.exports = {
  destroyer: {
    s_1: {
      skill_name: "Heavy crush",
      cd: "8",
      description:
        "Infuses your hammer with gravity energy and then slams it down in front of you ",
      additional_effects: "incapacitate [medium], back attack",
      time: "",
      icon: "6MsiTlu.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Lucky core",
          description:
            "Successful hits grant a 15% chance to gain an extra core ",
          icon: "Tripod_Tier_1_36.png"
        },
        e_2: {
          effect_name: "Swift movement",
          description: "Increases attack speed by 10% ",
          icon: "Tripod_Tier_1_6.png"
        },
        e_3: {
          effect_name: "Righteous belief ",
          description: "Increases damage by 15% ",
          icon: "Tripod_Tier_1_0.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Dramatic strike",
          description: "Increases incapacitate point by 25% ",
          icon: "31.png"
        },
        e_2: {
          effect_name: "Sharpened hammer",
          description:
            "Successful hits with the hammer deal 40% more damage to the target ",
          icon: "0.png"
        },
        e_3: {
          effect_name: "Offensive preparation",
          description:
            "Successful hits grant a 15% damage increase for 4 seconds ",
          icon: "46.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Opportunitinist",
          description:
            "Allows you to smash the hammer an additional time with a 50% increased damage bonus ",
          icon: "34.png"
        },
        e_2: {
          effect_name: "Shining strike",
          description:
            "Detonates the gravity energy within your hammer, lifting your foe into the air and dealing an additional 30% bonus damage ",
          icon: "22.png"
        }
      },
      type: "Tap"
    },
    s_2: {
      skill_name: "Gravity impact",
      cd: "16",
      description:
        "Slams your hammer and creating a vortex at the location of your strike. The vortex pulls enemies in and deals an additional damage when you rip your hammer free. ",
      additional_effects: "incapacitate [medium-high], immune to stiffness",
      time: "",
      icon: "Vbvbain.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Improved recharging",
          description:
            "A successful first hit on each enemy reduces the cooldown by 0.5 seconds up to a maximum total of  4 seconds.  ",
          icon: "Tripod_Tier_1_56.png"
        },
        e_2: {
          effect_name: "Improved gravity",
          description: "Reduces mana cost by 50% ",
          icon: "Tripod_Tier_1_34.png"
        },
        e_3: {
          effect_name: "Lucky core",
          description:
            "Successful hits grant a 20% chance to gain an extra core ",
          icon: "Tripod_Tier_1_36.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Strong Will",
          description:
            "A successful first hit on each enemy grants 10% damage reduction bonus up to maximum total of 50% for 5 seconds. ",
          icon: "53.png"
        },
        e_2: {
          effect_name: "Harsh Revenge",
          description:
            "While channeling the vortex or striking with the hammer, each hit increases damage by 5%, up to maximum total of 50% ",
          icon: "46.png"
        },
        e_3: {
          effect_name: "Echo of Gravity",
          description: "Stuns foes when you pull them towards you ",
          icon: "34.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Strength of Intelligence",
          description:
            "Progressively increases the area of effect by up to 30% over the duration of the skill ",
          icon: "35.png"
        },
        e_2: {
          effect_name: "Empowered Will",
          description:
            "Instead of creating a vortex, generate a powerful gravity sphere that pulls foes toward it ",
          icon: "22.png"
        }
      },
      type: "Tap"
    },
    s_3: {
      skill_name: "Dreadnought",
      cd: "12",
      description:
        "Concentrates gravity energy within your hammer,then smashes it to the ground. The impact creates a shockwave launches you into the air, dealing damage to foes upon landing. ",
      additional_effects:
        "incapacitate [medium-high], back attack, the destruction level 2, immune to the electric shock",
      time: "",
      icon: "VtHRikG.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
          icon: "Tripod_Tier_1_23.png"
        },
        e_2: {
          effect_name: "Unbearable Strength",
          description:
            "Ignores 30% of physical armor on any target with the Invulnerable status ",
          icon: "Tripod_Tier_1_2.png"
        },
        e_3: {
          effect_name: "Superior Transition",
          description: "Increases the distance traveled by 1m ",
          icon: "Tripod_Tier_1_10.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Quick Response",
          description: "Decreases the skill cooldown by 3 seconds. ",
          icon: "Tripod_Tier_2_56.png"
        },
        e_2: {
          effect_name: "Sharpened Hammer",
          description:
            "Successful hits with the hammer deal 40% more damage to the target ",
          icon: "0.png"
        },
        e_3: {
          effect_name: "Hammer Rampage",
          description:
            "Landing successful hits on at least two foes deals 10% more damage. Landing successful hits on nine foes deals 50% more. ",
          icon: "50.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Shining strike",
          description:
            "The last hits lift foes and deals 30% increased damage. ",
          icon: "22.png"
        },
        e_2: {
          effect_name: "몰아치는 해머",
          description:
            "Smashing the hammer on the ground rebounds you into the air, dealing 60% increased damage to foes upon landing.  ",
          icon: "1.png"
        }
      },
      type: "Tap"
    },
    s_4: {
      skill_name: "Power Shoulder",
      cd: "14",
      description:
        "Charge 5m forward, dealing dealing damage to foes. An additional combo attack deals damage with an upward strike ",
      additional_effects: "incapacitated [medium-high]",
      time: "",
      icon: "xuYBHVY.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Iron Skin",
          description:
            "Gain a 30% damage reduction bonus while you are performing the skill. ",
          icon: "Tripod_Tier_1_25.png"
        },
        e_2: {
          effect_name: "Victorious contract",
          description: "Increases lifting damage by 20%  ",
          icon: "Tripod_Tier_1_0.png"
        },
        e_3: {
          effect_name: "Critical Strength",
          description:
            "Reduces attack speed by 15% but increases damage dealt by 30%  ",
          icon: "Tripod_Tier_1_50.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Mission Completed",
          description: "Increases the skill range by 3m ",
          icon: "63.png"
        },
        e_2: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
          icon: "60.png"
        },
        e_3: {
          effect_name: "Drillmaster",
          description: "Increases the area of effect by 25%. ",
          icon: "49.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Heavy Hammer",
          description:
            "You slam the hammer instead striking upwards, dealing 50% increased damage. ",
          icon: "0.png"
        },
        e_2: {
          effect_name: "Rage",
          description:
            "You swing the hammer around you instead of striking upwards, dealing 50% increased damage. ",
          icon: "42.png"
        }
      },
      type: "Combo"
    },
    s_5: {
      skill_name: "Gravity Force",
      cd: "16",
      description:
        "Swings the hammer in front of you, dealing damage. The hammer creates a gravity energy beam in front you. Enemies are pulled towards you ",
      additional_effects: "immune to stiffness, incapacitate [low]",
      time: "",
      icon: "ePYOBLL.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Improved Recharging",
          description:
            "Each pulled enemy reduces the cooldown by 0.5 seconds up to a maximum total of 4 seconds ",
          icon: "Tripod_Tier_1_56.png"
        },
        e_2: {
          effect_name: "Iron Skin",
          description:
            "Gain a 30% damage reduction bonus while you are performing the skill.  ",
          icon: "Tripod_Tier_1_25.png"
        },
        e_3: {
          effect_name: "Critical Strength",
          description: "Increases damage done by 15% ",
          icon: "Tripod_Tier_1_50.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Swift Movement",
          description: "Increases attack speed by 20%. ",
          icon: "Tripod_Tier_2_6.png"
        },
        e_2: {
          effect_name: "Focusing Attack",
          description: "Increases damage done by 30% on a single target. ",
          icon: "33.png"
        },
        e_3: {
          effect_name: "Terror of Gravity",
          description:
            "Successful air attacks increase your foes’ damage taken by 15% for 4 seconds. ",
          icon: "27.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Effluence of Instinct ",
          description:
            "Creates a larger gravity energy beam. The charging time of the skill is increased by 0.4 seconds but the damage dealt is increased by 40%. ",
          icon: "56.png"
        },
        e_2: {
          effect_name: "Wave of Gravity",
          description:
            "Quickly releases the gravity energy but reduces the damage dealt by 40% and the area of effect by 20%. However, the skill can be used a second time within 3 seconds of the first attack. ",
          icon: "23.png"
        }
      },
      type: "Chain"
    },
    s_6: {
      skill_name: "Running Crash",
      cd: "20",
      description:
        "While holding down the hotkey, you tackle enemies in front of you, and damage up to seven times. Upon releasing the key or the gauge reaching its maximum, release an explosion that deals damage to foes. ",
      additional_effects:
        "incapacitate [medium-high], immune to stiffness, destruction level 1.",
      time: "",
      icon: "2GXto4v.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Lucky core",
          description:
            "Successful hits grant a 20% chance to gain an extra core ",
          icon: "Tripod_Tier_1_36.png"
        },
        e_2: {
          effect_name: "Improved gravity",
          description: "Reduces mana cost by 50% ",
          icon: "Tripod_Tier_1_34.png"
        },
        e_3: {
          effect_name: "Quick Response",
          description: "Decreases the skill cooldown by 3 seconds. ",
          icon: "Tripod_Tier_1_56.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Antigravity",
          description:
            "Creates a gravity energy shield on the caster which absorbs damage equal to 15% of the caster’s maximum health. ",
          icon: "53.png"
        },
        e_2: {
          effect_name: "Elaborate Plan",
          description:
            "Increases the skill cooldown by 6 seconds, but the explosion stuns enemies for 3 seconds. ",
          icon: "30.png"
        },
        e_3: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
          icon: "60.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Reckless Movement",
          description:
            "Rushes up to 8m towards the target location, knocking enemies down. ",
          icon: "54.png"
        },
        e_2: {
          effect_name: "Improved Rush",
          description:
            "Increases the explosion’s the area of effect and the damage dealt by 50% ",
          icon: "20.png"
        }
      },
      type: "Hold"
    },
    s_7: {
      skill_name: "Jumping Smash",
      cd: "16",
      description:
        "Leap high in the air towards a target location up to 8m away and inflict damage to nearby foes upon landing. ",
      additional_effects:
        "incapacitate [low], immune to stiffness, destruction level 1, back attack. ",
      time: "",
      icon: "4smZoWi.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Response",
          description: "Decreases the skill cooldown by 2 seconds.  ",
          icon: "Tripod_Tier_1_56.png"
        },
        e_2: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
          icon: "Tripod_Tier_1_23.png"
        },
        e_3: {
          effect_name: "Superior Transition",
          description: "Increases the movement distance by 2m ",
          icon: "Tripod_Tier_1_10.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Offensive Preparation",
          description:
            "A successful first hit grants a 15% damage increase for 4 seconds. ",
          icon: "46.png"
        },
        e_2: {
          effect_name: "Hammer Rampage",
          description:
            "Landing successful hits on at least two foes deals 10% more damage. Landing successful hits on six or more foes deals 40% more. ",
          icon: "50.png"
        },
        e_3: {
          effect_name: "Warrior’s Determination",
          description:
            "A successful first hit grants a 10% damage reduction buff for 8 seconds. Each target damaged by the first hit grants additional 5% damage reduction buff up to maximum total of 30%. ",
          icon: "53.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Shining strike",
          description:
            "The last hit lift foes and deals 30% increased damage. ",
          icon: "22.png"
        },
        e_2: {
          effect_name: "Ambush",
          description:
            "Lifts enemies to the air and smashes them down with 60% increased damage. ",
          icon: "1.png"
        }
      },
      type: "Point"
    },
    s_8: {
      skill_name: "Power Strike",
      cd: "12",
      description: "Raises your hammer and deal three brutal strikes.  ",
      additional_effects: "incapacitate [medium-high], back attack ",
      time: "",
      icon: "Z6cJUbs.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Reckless Attack",
          description:
            "Increases damage received by 40% while performing the skill but the damage of each strike is increased by 30%. ",
          icon: "Tripod_Tier_1_50.png"
        },
        e_2: {
          effect_name: "Unbearable Strength",
          description:
            "Ignores 30% of physical armor on any target with the Invulnerable status  ",
          icon: "Tripod_Tier_1_2.png"
        },
        e_3: {
          effect_name: "Quick Response",
          description: "Decreases the skill cooldown by 2 seconds. ",
          icon: "Tripod_Tier_1_56.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Superhuman Strength",
          description:
            "You can use other skills or cancel the skill while performing the skill. ",
          icon: "55.png"
        },
        e_2: {
          effect_name: "Improved Hammer",
          description:
            "Each hit increases damage dealt by 15% up to maximum total of 90%. ",
          icon: "50.png"
        },
        e_3: {
          effect_name: "Drillmaster",
          description: "Increases the area of effect by 25%. ",
          icon: "49.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Endless attack",
          description:
            "Unleash five devastating hammer strikes, which, after the first swing, deal an additional 25% damage. ",
          icon: "19.png"
        },
        e_2: {
          effect_name: "Coordinated Attack",
          description:
            "The last hit damages foes for 80% increased damage, and stomps airborne enemies. ",
          icon: "47.png"
        }
      },
      type: "Tap"
    },
    s_9: {
      skill_name: "Neutralizer ",
      cd: "36",
      description:
        "Saturates the hammer with gravity energy for a massive strike. It inflicts [ ] damage, and creates an unpredictable shock wave within 4m of the target location. You can use the skill two more times. The second hit inflicts [ ] damage, and the third hit inflicts [ ] damage. ",
      additional_effects: "incapacitate [high], back attack",
      time: "",
      icon: "lAFnBmC.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Unbearable Strength",
          description:
            "Ignores 30% of physical armor on any target with the Invulnerable status  ",
          icon: "Tripod_Tier_1_2.png"
        },
        e_2: {
          effect_name: "Swift movement",
          description: "Increases attack speed by 10% ",
          icon: "Tripod_Tier_1_6.png"
        },
        e_3: {
          effect_name: "Exhaustive Preparation",
          description: "Increases damage by 10% ",
          icon: "Tripod_Tier_1_0.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Penetrating Shockwave",
          description: "The shockwave ignores 30% of the target’s defense ",
          icon: "46.png"
        },
        e_2: {
          effect_name: "Gravity Explosion",
          description: "Successful shockwave hits lift enemies into the air ",
          icon: "64.png"
        },
        e_3: {
          effect_name: "Superhuman Strength",
          description:
            "You can use other skills or cancel the skill while performing the skill. ",
          icon: "55.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Explosive Gravity",
          description: "Creates three shockwaves per each hit ",
          icon: "31.png"
        },
        e_2: {
          effect_name: "Gravity Exposure",
          description:
            "Creates an enhanced shockwave with 300% increased damage within 3m ",
          icon: "21.png"
        }
      },
      type: "Combo"
    },
    s_10: {
      skill_name: "Endure Pain",
      cd: "60",
      description:
        "Unleashes your pain, damaging enemies within 2m. The caster becomes invulnerable to crowd control effects for 12 seconds, and all damage taken is reduced by [ ]% ",
      additional_effects: "incapacitate [low]",
      time: "",
      icon: "pz7MUk6.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Drillmaster",
          description: "Increases the area of effect by 15%. ",
          icon: "Tripod_Tier_1_7.png"
        },
        e_2: {
          effect_name: "Improved gravity",
          description: "Reduces mana cost by 50% ",
          icon: "Tripod_Tier_1_34.png"
        },
        e_3: {
          effect_name: "Expulsion ",
          description:
            "Successful hits push enemies back further. The inflicted enemies remain in the stiffness status longer. ",
          icon: "Tripod_Tier_1_60.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Antigravity",
          description:
            "Creates a gravity energy shield on the caster which absorbs damage equal to 15% of the caster’s maximum health. ",
          icon: "53.png"
        },
        e_2: {
          effect_name: "Terror of Battlefield",
          description:
            "Successful hits reduce the enemy’s attack power, attack speed, and movement speed by 20% for 5 seconds. ",
          icon: "27.png"
        },
        e_3: {
          effect_name: "Trace of Pain",
          description:
            "The inflicted enemy takes 20% more damage for 5 seconds ",
          icon: "52.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Healthy Mentality",
          description:
            "Increases the duration of the buff from the skill by 4 seconds. ",
          icon: "27.png"
        },
        e_2: {
          effect_name: "Hidden Pain",
          description:
            "Reduces the casting time by 5 seconds, but the enemy takes 90% less damage. ",
          icon: "12.png"
        }
      },
      type: "Tap"
    },
    s_11: {
      skill_name: "Earth Eater",
      cd: "16",
      description:
        "Slams the ground behind you. Then swings the hammer to the front up to three times. The first swing inflicts [ ] damage, the second [ ], and the third [ ]. After the third swing, you strike the ground ",
      additional_effects:
        "Incapacitate [Extreme-high], Destruction level 2, Back attack",
      time: "",
      icon: "uYiRZfT.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Swift movement",
          description: "Increases attack speed by 10% ",
          icon: "Tripod_Tier_1_6.png"
        },
        e_2: {
          effect_name: "Unfinished Business",
          description: "Each core increases damage dealt by 5% ",
          icon: "Tripod_Tier_1_0.png"
        },
        e_3: {
          effect_name: "Iron Skin",
          description:
            "Gain a 50% damage reduction bonus while you are performing the skill. ",
          icon: "Tripod_Tier_1_25.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Quick Response",
          description: "Decreases the skill cooldown by 3 seconds.  ",
          icon: "Tripod_Tier_2_56.png"
        },
        e_2: {
          effect_name: "Practiced Outcome",
          description: "Increases the area of effect by 30%. ",
          icon: "49.png"
        },
        e_3: {
          effect_name: "Superhuman Strength",
          description:
            "You can use other skills or cancel the skill while performing the skill. ",
          icon: "55.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Recovered Gravity",
          description:
            "Enables you to charge the skill. Each level of the charging gauge increases the damage dealt by 40% up to maximum of 80%. ",
          icon: "20.png"
        },
        e_2: {
          effect_name: "Unstoppable",
          description:
            "A successful forward swing stiffens enemies within 40-degree cone to the front and deals 40% increased damage. Enemies outside of the cone are knocked down and take 20% increased damage.  ",
          icon: "42.png"
        }
      },
      type: "Tap"
    },
    s_12: {
      skill_name: "Full Swing",
      cd: "20",
      description:
        "Swings the hammer three times like whirlwind. The first and second swings inflict [] damage. The last swing inflicts [ ] damage. This skill can be charged. The fully charged attack inflicts [ ] damage in total swings ",
      additional_effects:
        "Incapacitate [high], Immune to stiffness, destruction level 1, back attack.",
      time: "",
      icon: "bJuvHaH.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Iron Heart",
          description:
            "Gain a 30% damage reduction bonus while you are performing the skill and a 50% damage reduction while you are charging the skill. ",
          icon: "Tripod_Tier_1_25.png"
        },
        e_2: {
          effect_name: "Swift movement",
          description: "Increases attack speed by 10% ",
          icon: "Tripod_Tier_1_6.png"
        },
        e_3: {
          effect_name: "Quick Response",
          description: "Decreases the skill cooldown by 2 seconds. ",
          icon: "Tripod_Tier_1_56.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
          icon: "60.png"
        },
        e_2: {
          effect_name: "Absolute Power",
          description: "Each core increases damage dealt by 100% ",
          icon: "46.png"
        },
        e_3: {
          effect_name: "Terrifying Hammer",
          description:
            "Each successful hit increases damage dealt by 10% up to  a maximum of 60% ",
          icon: "50.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Bestial Eyes",
          description:
            "Reduces the charging time by 50% and increases the maximum level of the charge gauge. Overcharging increases damage dealt by 100% ",
          icon: "19.png"
        },
        e_2: {
          effect_name: "Enraged Attack",
          description:
            "Removes the ability to charge and instead performs stationary swings. The area of effect increases over the duration of the skill and damage dealt is increased by 25%. ",
          icon: "45.png"
        }
      },
      type: "Charge"
    },
    s_13: {
      skill_name: "Earth Smasher",
      cd: "24",
      description:
        "Smashes the hammer to the ground,inflicting [ ] damage. It creates a rock on the landing location. You destroy the rock and particles from the rock scatter in a fan-shaped angle, dealing [ ] damage. Successful hits by the particles stun enemies for 3 seconds. ",
      additional_effects:
        "incapacitate [Extreme high], immune to stiffness, back attack",
      time: "",
      icon: "YVtUZMv.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Critical Strength",
          description:
            "Reduces attack speed by 10% but increases damage dealt by 20% ",
          icon: "Tripod_Tier_1_50.png"
        },
        e_2: {
          effect_name: "Iron Skin",
          description:
            "Gain a 30% damage reduction bonus while you are performing the skill. ",
          icon: "Tripod_Tier_1_25.png"
        },
        e_3: {
          effect_name: "Unstable Strike",
          description:
            "A successful first hit grants a 50% chance to reduce the enemy’s defense by 30% for 5 seconds. ",
          icon: "Tripod_Tier_1_46.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Unstable Strike",
          description:
            "You are able to change the direction of the skill, spinning the hammer over your head, and jumping forwards [max 6m] ",
          icon: "49.png"
        },
        e_2: {
          effect_name: "",
          description: " ",
          icon: "55.png"
        },
        e_3: {
          effect_name: "",
          description: " ",
          icon: "30.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "",
          description: " ",
          icon: "0.png"
        },
        e_2: {
          effect_name: "",
          description: " ",
          icon: "9.png"
        }
      },
      type: "Tap"
    },
    s_14: {
      skill_name: "One Man Army",
      cd: "24",
      description:
        "Swing the hammer left and right. Each hit inflicts [ ] damage. Continual swings increase over the time and the last hit deals [ ] damage. ",
      additional_effects: "incapacitate [Extreme high], back attack",
      time: "",
      icon: "FkRnjcy.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Response",
          description: "Decreases the skill cooldown by 2 seconds. ",
          icon: "Tripod_Tier_1_56.png"
        },
        e_2: {
          effect_name: "Swift movement",
          description: "Increases attack speed by 10% ",
          icon: "Tripod_Tier_1_6.png"
        },
        e_3: {
          effect_name: "Improved gravity",
          description: "Reduces mana cost by 50% ",
          icon: "Tripod_Tier_1_34.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Well-maintained Hammer",
          description:
            "The damage of the first and second hits are increased by 100% ",
          icon: "45.png"
        },
        e_2: {
          effect_name: "Spot Weakness",
          description:
            "Increases the damage dealt to targets with the Invulnerable status by 30% ",
          icon: "36.png"
        },
        e_3: {
          effect_name: "Red Hammer",
          description:
            "Each hit increases damage dealt by 5% up to a maximum total of 30% ",
          icon: "50.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Critical Hammer",
          description:
            "You cannot change direction while performing the skill, but instead rapidly swing five time in front of you for 50% increased damage ",
          icon: "19.png"
        },
        e_2: {
          effect_name: "Dominant Strike",
          description:
            "Swings the hammer in a 360 degree arc for a maximum of 4.5 seconds. The swing deals 50% increased damage. ",
          icon: "1.png"
        }
      },
      type: "Hold"
    },
    s_15: {
      skill_name: "Perfect Swing",
      cd: "24",
      description:
        "Moves forward and tackles an enemy for [ ] damage, then hefts the hammer with two hands and smashes them for [ ]. You can charge the skill for 2 seconds. When fully charged, the skill moves 2m farther and the hammer strike deals [ ] damage. ",
      additional_effects:
        "incapacitate [Extreme High], Destruction level 2, Immune to stiffness, back attack.",
      time: "",
      icon: "slz8BMd.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Iron Heart",
          description:
            "Gain a 30% damage reduction bonus while you are performing the skill and a 50% damage reduction while you are charging the skill. ",
          icon: "Tripod_Tier_1_25.png"
        },
        e_2: {
          effect_name: "Final Blow",
          description:
            "Deals 20% more damage to enemies that have less than 30% health. ",
          icon: "Tripod_Tier_1_0.png"
        },
        e_3: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while charging the skill. ",
          icon: "Tripod_Tier_1_23.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Unnecessary waiting",
          description: "Reduces the time for charging the skill by 1 seconds ",
          icon: "55.png"
        },
        e_2: {
          effect_name: "Sharpened hammer",
          description: "Successful hits with the hammer deal 40% more damage ",
          icon: "0.png"
        },
        e_3: {
          effect_name: "Dramatic Blow",
          description: "Increases the incapacitate point by 20%. ",
          icon: "31.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Massacre",
          description:
            "Immediately swings the hammer without charging it, creating a soundwave which damages the foe for 30% of the skill damage. ",
          icon: "22.png"
        },
        e_2: {
          effect_name: "Intemperate",
          description:
            "Reduces the charging time by 50% and increases the maximum level of the charge gauge. Overcharging increases damage dealt by 80% ",
          icon: "35.png"
        }
      },
      type: "Charge"
    },
    s_16: {
      skill_name: "Gravity Compression",
      cd: "24",
      description:
        "Thrusts the hilt of the hammer into the ground, creating a black hole that deals [ ] damage. You can infuse gravity energy into the black hole for 2 seconds, which then spreads in all directions, dealing [ ] damage. Releasing the hotkey explodes the black hole for [ ]. A completed infusion creates a larger black hole that deals [ ] damage. ",
      additional_effects: "incapacitate [Extreme high], destruction level 2",
      time: "",
      icon: "rsnaZCP.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Iron Heart",
          description: "Reduces the time for charging the skill by 1 seconds ",
          icon: "Tripod_Tier_1_25.png"
        },
        e_2: {
          effect_name: "Reasonable Choice",
          description:
            "Increases attack speed by 15% but increases the skill cooldown by 5 seconds ",
          icon: "Tripod_Tier_1_6.png"
        },
        e_3: {
          effect_name: "Unbearable Strength",
          description:
            "Unleashing three cores ignores 30% of all armor on any target  ",
          icon: "Tripod_Tier_1_2.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Absolute Power",
          description: "Each core increases damage dealt by 100% ",
          icon: "59.png"
        },
        e_2: {
          effect_name: "Strong Finish",
          description:
            "The damage of the black hole’s explosion is increased by 45% ",
          icon: "45.png"
        },
        e_3: {
          effect_name: "Drillmaster",
          description: "Increases the area of effect by 25%. ",
          icon: "49.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Target Location",
          description:
            "You target the location to create a magnetic field up to 10m from the current location. You can hold for 3 seconds ",
          icon: "56.png"
        },
        e_2: {
          effect_name: "Improved Magnetic Field",
          description: "Increases damage of the black hole by 250% ",
          icon: "26.png"
        }
      },
      type: "Hold"
    },
    s_17: {
      skill_name: "Seismic Hammer",
      cd: "30",
      description:
        "Hold the hammer upside down, then leap in the air and smashing the ground for [ ]. After the impact, the skill creates a 5m cone-shaped wall which deals [ ] damage. ",
      additional_effects:
        "incapacitate [High], Destruction level 2, immune to stiffness",
      time: "",
      icon: "e0XGANL.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Dramatic strike",
          description: "Increases incapacitate point by 10% ",
          icon: "0.png"
        },
        e_2: {
          effect_name: "Toughness",
          description:
            "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
          icon: "Tripod_Tier_1_23.png"
        },
        e_3: {
          effect_name: "Unbearable Gravity",
          description: "Each core increases the gravity gauge by 50% ",
          icon: "Tripod_Tier_1_37.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Unbearable Strength",
          description: "For easc core, ignore 15% of the enemy’s armor.  ",
          icon: "Tripod_Tier_2_2.png"
        },
        e_2: {
          effect_name: "Quick Response",
          description: "Decreases the skill cooldown by 6 seconds. ",
          icon: "Tripod_Tier_2_56.png"
        },
        e_3: {
          effect_name: "Sharp Wall",
          description: "The wall deals 50% more damage. ",
          icon: "46.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Power Hungry",
          description:
            "Reduces the skill range by 30% but creates a circular shockwave wall which deals 40% increased damage. ",
          icon: "47.png"
        },
        e_2: {
          effect_name: "Improved spot weakness",
          description:
            "Smashes the hammer without jumping. You travel 2m father and create a larger wall which deals 25% additional damage. ",
          icon: "56.png"
        }
      },
      type: "Tap"
    }
  }
};
