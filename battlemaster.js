module.exports = {
  battlemaster: {
    s_1: {
      skill_name: "Heaven Cleaving Kick",
      cd: "12",
      description:
        "Strike forward. When pressed again, that deals additional damage and repels the enemy",
      additional_effects: ["Back Attack"],
      type: ["Combo"],
      time: [""],
      icon: "RsbpPoY.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Movement distance",
          description: "Movement distance can increases by 1m",
          icon: "frf2qov.png"
        },
        e_2: {
          effect_name: "Ascension angle",
          description: "(?)",
          icon: "DUWC0Nh.png"
        },
        e_3: {
          effect_name: "Attack speed",
          description: "Attack speed increases by 10%",
          icon: "9VyE0qU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Ice Strike",
          description:
            "When the attack hits 2 or more enemies freeze an enemy for 2s. Cooldown increased by 6s",
          icon: "pySlNIZ.png"
        },
        e_2: {
          effect_name: "Range",
          description: "Skill range increased by 20%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "Amplification",
          description:
            "2 hits on a single target increase attack power by 15% for 4s",
          icon: "AFgfZrT.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Crushing Blade",
          description:
            "The first one turns into a frenzy. Damage to enemies increases by up to 175%",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Concentration",
          description: "Increases the gain of the identity gauge by 150%",
          icon: "NLHXPyu.png"
        }
      }
    },
    s_2: {
      skill_name: "Thunder Kick",
      cd: "8",
      description:
        "Inflicts damage in two attacks on the enemy. The first attack causes it to fall, then the second attack hits it on the ground and inflicts additional damage to the targets in the air",
      additional_effects: ["Back Attack", " Damage immunity"],
      type: ["Tap"],
      time: [""],
      icon: "Ml7F6qY.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Movement distance",
          description: "Movement distance can increases by 2m",
          icon: "frf2qov.png"
        },
        e_2: {
          effect_name: "Transcendental",
          description:
            "Increases the gain of the identity gauge by 30% by attacking",
          icon: "11MLrbC.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Increase damage",
          description: "Increase the damage by 30%",
          icon: "HWuM5x7.png"
        },
        e_2: {
          effect_name: "Thunderbolt",
          description:
            "When this skill deals damage to the enemy, the enemy suffers a 30% increase in damage",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Achievement of training",
          description: "Skill range increased by 20%",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Lightning",
          description:
            "An attack will be added to take a quick hit after one hit",
          icon: "wYJaLXy.png"
        },
        e_2: {
          effect_name: "Thump",
          description: "(?) Damage to enemies increases by 15%",
          icon: "EIUwvad.png"
        }
      }
    },
    s_3: {
      skill_name: "Triple Punch",
      cd: "10",
      description: "Performs three hits, the latter deals increased damage",
      additional_effects: ["Slicing [level 1]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "i0aUVS2.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description:
            "The enemy gets the dark state for 3 seconds, reducing his physical and magic defense by 10%",
          icon: ""
        },
        e_2: {
          effect_name: "Soul Attack",
          description:
            "Increases the gain of the identity gauge by 100% by hitting a single target with the last attack",
          icon: "11MLrbC.png"
        },
        e_3: {
          effect_name: "Increase damage",
          description: "Increase the damage by 15%",
          icon: "akITDDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Damage reduction",
          description: "Reduces damage to you by 40% while using the skill",
          icon: "S2Ogv2N.png"
        },
        e_2: {
          effect_name: "Resonance",
          description:
            "Whenever you hit multiple hits on a target, the damage dealt to that target is increased by 15%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "bkMVKSJ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Thunder",
          description:
            "Movement distance increased by 2m, attack speed increased by 20%. The damage done to the enemy by the last strike increases by 50%",
          icon: "JMU1YLm.png"
        },
        e_2: {
          effect_name: "Damage",
          description:
            "The violent fists are changed to 5 manual attacks <br>Skill damage increased by 50%",
          icon: "Bybk6tw.png"
        }
      }
    },
    s_4: {
      skill_name: "Pummel",
      cd: "16",
      description: "Deals 9 quick strike",
      additional_effects: [
        "Pierce [level 1]",
        " Neutralization [Medium]",
        " Back Attack"
      ],
      type: ["Tap"],
      time: [""],
      icon: "WGwDniP.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Attack speed",
          description:
            "When a hit reaches its target, the attack speed increases by 20% for 3 seconds",
          icon: "SKW6lN3.png"
        },
        e_2: {
          effect_name: "Glowing",
          description:
            "When hit by a melee attack, the enemy's critical strike chance is reduced by up to 15% for 3 seconds",
          icon: ""
        },
        e_3: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 20%",
          icon: "rlevb4r.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Dash",
          description: "Dash up to 6 meters to reach the enemy",
          icon: "DLz43Zq.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "bkMVKSJ.png"
        },
        e_3: {
          effect_name: "Damage increased",
          description: "Damage increased by 30%",
          icon: "a5qp6Tt.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Quietens",
          description:
            "The last move is transformed into uppercut, increasing the critical chance by 30% and the damage dealt to the enemy by 50%",
          icon: "tolsJTT.png"
        },
        e_2: {
          effect_name: "Unbelievable",
          description:
            "While using the skill, the character is immune to attacks and ignores 40% of the enemy's physical defense",
          icon: "hXBL5OK.png"
        }
      }
    },
    s_5: {
      skill_name: "Crescent Kick",
      cd: "16",
      description:
        "Charge to the enemy and deal damage. After that, cast a sequence on the enemy, hitting him twice with fists and once with a kick",
      additional_effects: ["Neutralization [Medium]", " Back Attack"],
      type: ["Combo"],
      time: [""],
      icon: "xteJ2lN.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Damage increased",
          description: "Damage increased by 15%",
          icon: "ohvDbcU.png"
        },
        e_2: {
          effect_name: "Capture weakness",
          description:
            "Increases the damage dealt to enemies immune to controls by 30%",
          icon: "UXhRg0Q.png"
        },
        e_3: {
          effect_name: "Incandescent angle",
          description:
            "Increases the gain of the identity gauge by 100% when performing the fast kick",
          icon: "DI0jbqj.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Movement distance",
          description:
            "The movement distance of the first shot is increased by 3 meters",
          icon: "DLz43Zq.png"
        },
        e_2: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 30%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "A kick of the transcendence",
          description:
            "Attack speed is increased by 20% and it becomes possible to change direction<br> During the last attack, it is immune to attack",
          icon: "a7DgAOn.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Damage increased",
          description:
            "Damage increased to enemies by 80% if you hit 2<br> Increases damage by up to 200% when simultaneously hitting 6 or more<br> Damage to single targets increases by 250%",
          icon: "3PXf9mr.png"
        },
        e_2: {
          effect_name: "Full moon angle",
          description:
            "The preparation for the final blow is getting longer<br> Damage to enemies increased by 150%",
          icon: "hXBL5OK.png"
        }
      }
    },
    s_6: {
      skill_name: "Ground Pound",
      cd: "16",
      description:
        "An earthquake occurs up to 5 times and deals damage to each attacker within range",
      additional_effects: ["Neutralization [Medium]"],
      type: ["Tap"],
      time: [""],
      icon: "fle5gaD.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Vibration strengthening",
          description: "First hit, it knockdown the enemy",
          icon: ""
        },
        e_2: {
          effect_name: "Strong Attack",
          description:
            "Damage dealt to enemies who are knockdown is increased by 25%",
          icon: "Ntx7DAR.png"
        },
        e_3: {
          effect_name: "Echo of the earth",
          description: "Earthquake duration increased by 1 second",
          icon: ""
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Stun",
          description:
            "Every time an earthquake occurs, it has a 30% chance to stun the enemy",
          icon: "eB8ZwLp.png"
        },
        e_2: {
          effect_name: "Damage increased",
          description: "Damage increased by 50%",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "Firmness",
          description:
            "The jump animation is removed, now the earth is punched by the character, which reduces the cast time",
          icon: "nMssZEK.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Crustal change",
          description:
            "The number of earthquakes is reduced to 3<br> Last earthquake causes a larger explosion, knockdown<br> Damage increased by 300%",
          icon: ""
        },
        e_2: {
          effect_name: "A great earthquake again",
          description:
            "The attack range of the earthquake is increased by 30%<br> The time between earthquakes is reduced and the number of earthquakes is doubled",
          icon: "32F9lxY.png"
        }
      }
    },
    s_7: {
      skill_name: "Dragon Spiral Kick",
      cd: "16",
      description:
        "Charge to an enemy and attack by dealing damage up to 5 times. If the enemy is hit in the air extra damage is applied",
      additional_effects: ["Back Attack", " Immune [stiffness]"],
      type: ["Combo"],
      time: [""],
      icon: "9tGnfng.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Attack speed",
          description:
            "When rushing, increase the speed of rotation as much as possible<br> Attack speed and attack range increased by 10%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 20%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Critical hit",
          description: "Increases Critical Hit Rate by 15%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "bkMVKSJ.png"
        },
        e_2: {
          effect_name: "Damage increased",
          description: "Damage increased by 100%",
          icon: "hbiDGfp.png"
        },
        e_3: {
          effect_name: "AP buff",
          description: "AP increased by 20% for 3s",
          icon: "eajjkDJ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Fallen leaves",
          description:
            "Slide forward, and allow you to knockdown enemies by pressing the skill key again<br> You can use the windmill during sliding",
          icon: "tolsJTT.png"
        },
        e_2: {
          effect_name: "Order ascension angle",
          description:
            "In the next attack, the enemy will be thrown into the air<br> Damage increased by 50%",
          icon: "FpXyekj.png"
        }
      }
    },
    s_8: {
      skill_name: "Whisper of the Wind",
      cd: "30",
      description: "Increases movement speed and attack speed by 16% for 6s",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "1YdsyPu.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Swift Movement",
          description: "Increases movement speed by 10% for 6s",
          icon: "wGYSIwd.png"
        },
        e_2: {
          effect_name: "Evasion Master",
          description: "Increases evasion rate by 15% for 6s",
          icon: "3MH8R85.png"
        },
        e_3: {
          effect_name: "Critical resistance",
          description:
            "Critical resistance of party members increases by 25% for 6s",
          icon: ""
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Reduction damage",
          description: "30% reduction in damage to party members for 6 seconds",
          icon: "oVtc2zd.png"
        },
        e_2: {
          effect_name: "Critical hit",
          description:
            "Critical hit rate of party members increases by 25% for 6s",
          icon: "AFgfZrT.png"
        },
        e_3: {
          effect_name: "Maintain strong",
          description: "The duration of the effect of the skill is doubled",
          icon: "POnpICE.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 10s",
          icon: "mJ47SLb.png"
        },
        e_2: {
          effect_name: "Super-strong",
          description:
            "Causes powerful damage, also repelling enemies<br> The damage dealt to the enemies will result in the filling of the identity meter",
          icon: ""
        }
      }
    },
    s_9: {
      skill_name: "Electric Wind Kick",
      cd: "20",
      description: "(?)",
      additional_effects: ["Neutralization [Mid-High]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "JV3b1w9.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Critical Hit",
          description: "Increases Critical Hit Rate by 15%",
          icon: "HR5NqtN.png"
        },
        e_2: {
          effect_name: "Hydropower",
          description:
            "The speed of attack and movement of the enemy is reduced by 20% for 3 seconds",
          icon: ""
        },
        e_3: {
          effect_name: "Burns",
          description: "The enemy burns for 5 seconds when hit by the attack",
          icon: "ohvDbcU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Wide Blow",
          description: "Increases attack range by 20%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 5s",
          icon: "bkMVKSJ.png"
        },
        e_3: {
          effect_name: "Agile judgment",
          description: "Attack speed increased by 20%",
          icon: "4yeH6Qd.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Wrath of Ange",
          description:
            "Changes the skill in a rotating kick of 4 turns diagonally, with a final hit on the ground<br> Dealing 20% more damage to enemies",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Extreme water lily",
          description:
            "Increases the duration of the skill by 1 second and facilitates the change of direction while using the skill<br>Conflict with normal monster is ignored when moving during holding(?)<br>Increases damage by 50%",
          icon: "Pv2SzkI.png"
        }
      }
    },
    s_10: {
      skill_name: "Phoenix Dive",
      cd: "18",
      description:
        "Jump in the air, then fall heavily on the ground. Damage is dealt at the point of fall, then deals a final blow while backing up while dealing additional damage",
      additional_effects: ["Neutralization [Low]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "CQL3dLc.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 20%",
          icon: "rlevb4r.png"
        },
        e_2: {
          effect_name: "light target",
          description:
            "Targets that are stunned by this skill take 20% more damage",
          icon: "DUWC0Nh.png"
        },
        e_3: {
          effect_name: "Burns",
          description: "The enemy burns for 5 seconds when hit by the attack",
          icon: "ohvDbcU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Fierce attack",
          description:
            "An explosion occurs when you drop from the air and shoot the floor<br>Hit the enemy in the air<br>Damage increased by 10%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Weak Point",
          description:
            "Increases damage dealt to enemies immune to controls by 50%",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "frozen",
          description: "When attacking, the enemy is frozen for 2s",
          icon: "pySlNIZ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "An unstoppable surprise",
          description:
            "You can start the skill a second time by pressing the skill key again<br>Cooldown increased by 6s",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "Attack speed",
          description:
            "Attack speed increased by 20%<br>Movement distance increased by 5m",
          icon: "JMU1YLm.png"
        }
      }
    },
    s_11: {
      skill_name: "Roar of Valor",
      cd: "25",
      description:
        "Shoots a momentary spell to inflict damage and expels nearby enemies. Reduces critical strike resistance by 25% for 6s",
      additional_effects: ["Destruction [level 1]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "s1bpESs.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mind Enhancement",
          description: "Decrease MP consumption by 50%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 20%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Concentration",
          description:
            "Increases the gain of the identity gauge by 25% by attacking",
          icon: "11MLrbC.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Impact Reinforcement",
          description:
            "The skill turns into a charge, the damage dealt is increased by 100%, and nearby enemies are knockdown",
          icon: ""
        },
        e_2: {
          effect_name: "Mobility weakness",
          description: "Reduces the enemy's movement speed by 60% for 3s",
          icon: "C42y0cZ.png"
        },
        e_3: {
          effect_name: "The afterimage of the king",
          description:
            "Increases the duration of the Roar of Valor effect by 2s",
          icon: "2JPSkpi.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Deadly wave",
          description:
            "When a critical hit occurs, the target receives a 15% reduction in attack power",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 5s",
          icon: "DXzNTSi.png"
        }
      }
    },
    s_12: {
      skill_name: "Room fire",
      cd: "25",
      description:
        "Kicks, inflicting damage and sending the enemy through the air. The player moves quickly to then hit twice more, inflicting additional damage to the enemy in the air",
      additional_effects: ["Neutralization [Low]", " Back Attack"],
      type: ["Combo"],
      time: [""],
      icon: "SdMX0r4.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Concentration",
          description:
            "Increases the gain of the identity gauge by 25% by attacking",
          icon: "11MLrbC.png"
        },
        e_2: {
          effect_name: "Weak point",
          description:
            "Increases the damage dealt to enemies immune to controls by 30%",
          icon: "UXhRg0Q.png"
        },
        e_3: {
          effect_name: "Sharp footwork",
          description:
            "Hit the enemy without falling on it, reducing the time of the animation of the skill",
          icon: "j724HUx.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Attack range",
          description: "Increases attack range and attack speed by 20%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Shadows of darkness",
          description:
            "Enemies hit by the last attack get the dark effect, reducing their physical and magic defense by 30% for 5s",
          icon: ""
        },
        e_3: {
          effect_name: "Intense lightning",
          description:
            "Enemies hit by the last attack have a 50% chance of being electrified for 4s",
          icon: "h9ZXI1D.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Exceptiona",
          description:
            "After squatting, you jump forward blowing an ultra-strong kick, increasing your damage by 150% and knockdown your target",
          icon: "6vzVrvN.png"
        },
        e_2: {
          effect_name: "Exaggerated ability",
          description:
            "After the kick, you jump once more, the enemies hit by this last hit will take 40% more damage and will be knockdown",
          icon: "FpXyekj.png"
        }
      }
    },
    s_13: {
      skill_name: "Internal combustion",
      cd: "40",
      description:
        "The wind is around the player and instantly deals damage to nearby enemies. The wind holds for 20 seconds and continuously inflicts damage to enemies while repelling them. The movement of the skill is directed by the player's cursor",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "JpO3CiO.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Burning Armor",
          description:
            "The damage received at the launch of the skill is reduced by 10%",
          icon: "SfUebeR.png"
        },
        e_2: {
          effect_name: "Lightfoot",
          description:
            "Increases movement speed by 30% for 3s while launching the skill",
          icon: "ZYlrZ9I.png"
        },
        e_3: {
          effect_name: "Deadly acting",
          description:
            "Increases the gain of the Identity Meter by 50% by attacking",
          icon: "11MLrbC.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "A road of commitment",
          description:
            "The duration of the internal combustion is increased by 8s",
          icon: "POnpICE.png"
        },
        e_2: {
          effect_name: "Technology loss",
          description:
            "Reduces the cooldown by 15s, but also decreases the duration by 4s",
          icon: "bkMVKSJ.png"
        },
        e_3: {
          effect_name: "A fierce battle",
          description:
            "Increases damage by 5% for 2s, cumulative up to 10 times",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Attack range",
          description:
            "Increases attack range by 20%<br>Increases critical damage by 50%",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "Explosion in the air",
          description:
            "When a gust of wind blows, it causes an explosion, inflicting 50% of basic skill damage and detonating the enemy",
          icon: "xqsOSNR.png"
        }
      }
    },
    s_14: {
      skill_name: "Art: Spiral Blast",
      cd: "12",
      description:
        "Performs a powerful, smashing attack that deals damage to enemies",
      additional_effects: [
        "Pierce [level 2]",
        " Neutralization [Medium]",
        " Back Attack"
      ],
      type: ["Tap"],
      time: [""],
      icon: "gSv17cq.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Weak Point",
          description:
            "Increases the damage dealt to enemies immune to controls by 30%",
          icon: "UXhRg0Q.png"
        },
        e_2: {
          effect_name: "Attack range",
          description: "Attack range increased by 20%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Absorption blow",
          description:
            "During the preparation of this attack, the player is immune to dizziness. A model is created that represents the negative and positive forces on the ground, the surrounding enemies are pulled into the attack",
          icon: ""
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Attack speed",
          description: "Attack speed increased by 10%",
          icon: "4yeH6Qd.png"
        },
        e_2: {
          effect_name: "Сollection",
          description: "30% chance of acquire 1 globe of identity",
          icon: "UnhMZ84.png"
        },
        e_3: {
          effect_name: "Dead set",
          description: "Increase AP by 20% for 5s",
          icon: "eajjkDJ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Bastion of Destruction",
          description:
            "50% more damage to targets directly in front of the attack.",
          icon: "hXBL5OK.png"
        },
        e_2: {
          effect_name: "Meditation Strike",
          description:
            "The skill no longer repels the enemy but causes a burn for 3ы",
          icon: "uMM49tX.png"
        }
      }
    },
    s_15: {
      skill_name: "Art: Dragons Ascend",
      cd: "24",
      description:
        "Summons a circle of flames that deals damage by gathering enemies and then releases spiraling Dragon's energy upwards to hit enemies 5 times",
      additional_effects: [
        "Destruction [Level 2]",
        " Neutralization [Low]",
        " Back Attack"
      ],
      type: ["Tap"],
      time: [""],
      icon: "ahoHvCF.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Attack Range",
          description: "Attack Range increases by 20%",
          icon: "rlevb4r.png"
        },
        e_2: {
          effect_name: "Сollection",
          description: "40% chance of acquire 1 globe of identity",
          icon: "11MLrbC.png"
        },
        e_3: {
          effect_name: "Strength",
          description:
            "While using the skill, the player becomes immune to attacks",
          icon: "lyseDv0.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Ascension of the Dragon Dragon",
          description:
            "When the shape of the Red Dragon rises, the damage dealt to the enemy increases by 20%",
          icon: "cXMAUIN.png"
        },
        e_2: {
          effect_name: "Ascension of the Black Dragon",
          description:
            "The shape of the red dragon ascends and the damage it inflicts on the enemy increases by 20%",
          icon: "QpObGxT.png"
        },
        e_3: {
          effect_name: "Finishing attack",
          description: "Deals 50% more damage to enemies with <30% health",
          icon: "hbiDGfp.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Eye of the Storm",
          description:
            "Now, the skill allows enemies to pulled up to 2.5 seconds<br>The skill begins when the skill key is released or the 2.5 seconds elapse<br>Increased damage to immune enemies by 50% against the pull effect",
          icon: "Pv2SzkI.png"
        },
        e_2: {
          effect_name: "Finishing Blow",
          description:
            "The last attack will have a 100% chance of being a critical hit",
          icon: "s2QfHGg.png"
        }
      }
    },
    s_16: {
      skill_name: "Art: Lightning Punch",
      cd: "16",
      description:
        "Unleashes an aura of electricity that deals 3 damage to enemies. Enemies become stunned for 2s, and receive 20% more free elemental damage during the spell",
      additional_effects: ["Neutralization [Low]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "wWPyUXb.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Critical hit",
          description: "Increase critical hit rate by 15%",
          icon: "GjqRFi1.png"
        },
        e_2: {
          effect_name: "Сollection",
          description: "20% chance of acquire 1 globe of identity",
          icon: "11MLrbC.png"
        },
        e_3: {
          effect_name: "Attack speed",
          description: "Increases attack speed by 20%",
          icon: "nRO8OuT.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Dispatch",
          description:
            "Lightning turns into red lightning<br>Damage increased by 25%",
          icon: "hbiDGfp.png"
        },
        e_2: {
          effect_name: "Attack Range",
          description: "Attack Range increased by 30%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "Lightning",
          description: "Increases damage dealt to enemies by 50% over time",
          icon: "AFgfZrT.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Electric shock",
          description:
            "Removes the stun effect against enemies, but overloads the explosion, repelling nearby enemies<br>Damage increased by 50%",
          icon: "xqsOSNR.png"
        },
        e_2: {
          effect_name: "Dangerous deal",
          description:
            "Cooldown increased by 8s<br>Stun duration increased by 2s",
          icon: "mJ47SLb.png"
        }
      }
    },
    s_17: {
      skill_name: "Art: Tornado",
      cd: "24",
      description:
        "The player rises in the air and turns quickly to create a tornado. Each enemy caught in the whirlwind suffers damage with each hit. The skill can be held for 4 seconds while continuing to attract enemies. The movement of the skill is directed by the player's cursor",
      additional_effects: [
        "Neutralization [Low]",
        " Back Attack",
        " Immune [stiffness]"
      ],
      type: ["Hold"],
      time: [" 4 sec"],
      icon: "3URNzqj.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Weak Point",
          description:
            "Increases damage dealt to enemies immune to controls by 30%",
          icon: "UXhRg0Q.png"
        },
        e_2: {
          effect_name: "Cold storm",
          description:
            "30% reduction in damage taken while launching the skill",
          icon: ""
        },
        e_3: {
          effect_name: "Lightning Storm",
          description:
            "Each blow in the lightning storm has a 30% chance to increase critical damage by 10%",
          icon: "HR5NqtN.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Critical hit",
          description: "Increase critical hit rate by 30%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Сollection",
          description: "60% chance of acquire 1 globe of identity",
          icon: "UnhMZ84.png"
        },
        e_3: {
          effect_name: "Movement speed",
          description:
            "Movement speed of while using the skill is increased by 8%<br>Duration of the swirl is increased by 1s",
          icon: "LmuvcKG.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Stir",
          description:
            "As long as the vortex rotates, the damage is increased by 5%, up to a maximum of 75%",
          icon: "3PXf9mr.png"
        },
        e_2: {
          effect_name: "An endless typhoon",
          description:
            "When the swirl ends, it dispels forcefully and deals 40% of the basic skill damage to the enemy",
          icon: "tolsJTT.png"
        }
      }
    },
    s_18: {
      skill_name: "Art: Exploding Quake",
      cd: "30",
      description:
        "Make a powerful punch that causes 3 ground explosions in its wake. Explosions advance forward and repel enemies on their way, causing damage",
      additional_effects: ["Neutralization [Medium]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "4EFHTrd.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Weak Point",
          description:
            "Increases damage dealt to enemies immune to controls by 30%",
          icon: "UXhRg0Q.png"
        },
        e_2: {
          effect_name: "The Last Blast",
          description:
            "The damage caused by the third explosion is increased by 25%",
          icon: "DI0jbqj.png"
        },
        e_3: {
          effect_name: "Rough Explosion",
          description: "Increase AP by 3% for 7s",
          icon: "akITDDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Сollection",
          description: "75% chance of acquire 1 globe of identity",
          icon: "UnhMZ84.png"
        },
        e_2: {
          effect_name: "Frost Explosion",
          description: "In attacking, the enemy is frozen for 4s",
          icon: "pySlNIZ.png"
        },
        e_3: {
          effect_name: "Flame Explosion",
          description: "By attacking, up to 6 enemies can be burned for 5s",
          icon: "cXMAUIN.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Endless destruction",
          description:
            "The blast spreads in three directions<br>Damage increased by 30%",
          icon: "4wG5uWK.png"
        },
        e_2: {
          effect_name: "big explosion",
          description:
            "After the third explosion, the player jumps once more, causing a massive explosion<br>Damage increased by 60%",
          icon: "xqsOSNR.png"
        }
      }
    },
    ult: {
      skill_name: "",
      cd: "300",
      description:
        "You play symphony protecting you and party members with shield 100% max hp for 5 seconds and dealing damage to enemies around you",
      additional_effects: ["Neutralization [High]"],
      type: ["Hold"],
      time: [""],
      icon: "Du2wCmI.png"
    }
  }
};
