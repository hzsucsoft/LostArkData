module.exports = {
  bard: {
    s_1: {
      skill_name: "Soundstrike",
      cd: "8",
      description:
        "Shoots a projectile that explodes and staggers targets near explosion when collision happens",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "cglEikD.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Weak mobility",
          description: "30% chances for slowing enemy down 60% for 2s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Enhanced Shock",
          description: "Skill damage increased by 10%",
          icon: "E70cTPv.png"
        },
        e_3: {
          effect_name: "Bombing",
          description: "Adds effect that causes poisonous debuff on targets ",
          icon: "AyrTfLu.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "C5b57g8.png"
        },
        e_2: {
          effect_name: "Quick charge",
          description: "40% chance for cooldown to be reduced by 6s",
          icon: "bkMVKSJ.png"
        },
        e_3: {
          effect_name: "Nimble Cast",
          description: "Skill cast time is reduced by 20%",
          icon: "rP1umQI.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Fatal Shock",
          description:
            "Changes ball to cause no explosion on the target (go through with no collision), skill cast time increased by 0.5s and skill crit chance increased by 30%",
          icon: "Pv2SzkI.png"
        },
        e_2: {
          effect_name: "Hinged Fire",
          description:
            "Ball no longer flies in the direction but falls as a bomb to pointed location with skill damage increase by 60%",
          icon: "hXBL5OK.png"
        }
      }
    },
    s_2: {
      skill_name: "Dissonance",
      cd: "20",
      description:
        "AoE void zone that ticks 7 times once per second, each ticks slows enemies for 2 seconds for 60%",
      additional_effects: [""],
      type: ["Point"],
      time: [""],
      icon: "VK5K1Qt.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Nimble Cast",
          description: "Skill cast time is reduced by 15%",
          icon: "nRO8OuT.png"
        },
        e_2: {
          effect_name: "Increase Melody",
          description: "Serenade gauge charges from the skill 30% faster",
          icon: "QRTcZZ1.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Chord Mark",
          description:
            "Puts debuff on target: all damage increased by 10% for 2s with each tick (not additive, 10% max)",
          icon: "r8r0RgP.png"
        },
        e_2: {
          effect_name: " A Helpless Chord",
          description:
            "Enemy attack decreased by 30% for 2s with each tick (not additive, 30% max)",
          icon: "2JPSkpi.png"
        },
        e_3: {
          effect_name: "Achievement of training",
          description: "Skill range increased by 20%",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Live chord",
          description:
            "Void zone now moves towards nearest enemy and follows him as he is moving",
          icon: "XfeC65B.png"
        },
        e_2: {
          effect_name: "Chord enhancement",
          description: "Skill damage increased by 50%",
          icon: "Cp9hVlE.png"
        }
      }
    },
    s_3: {
      skill_name: "Soundwave",
      cd: "12",
      description:
        "Shoots soundwave that pushes enemies backwards as it flies. Doesn’t affect elites/bosses",
      additional_effects: ["Neutralization [Low]"],
      type: ["Tap"],
      time: [""],
      icon: "yu2noeK.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "20% chance cooldown is reduced by 12s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Excellent Maneuver",
          description: "When casting skill you are pushed back 4m away",
          icon: "frf2qov.png"
        },
        e_3: {
          effect_name: "Large wave",
          description: "Increase the skill range by 20%",
          icon: "rlevb4r.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Mana Control",
          description: "70% chance to not consume MP",
          icon: "C5b57g8.png"
        },
        e_2: {
          effect_name: "Wave Of Patience",
          description:
            "When soundwave touches your party member it grants damage 40% reduce buff for 4s",
          icon: "r8r0RgP.png"
        },
        e_3: {
          effect_name: "Increase Melody",
          description: "Serenade gauge charges from the skill 50% faster",
          icon: "R9u94O4.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Burning Wave",
          description: "Skill damage increased by 50%",
          icon: "Cp9hVlE.png"
        },
        e_2: {
          effect_name: "Ground breaking",
          description:
            "With the last wave hit enemies are falling into sleep for 2s",
          icon: "uMM49tX.png"
        }
      }
    },
    s_4: {
      skill_name: "Holy Sound",
      cd: "24",
      description: "Ray of light channeled while you are standing still",
      additional_effects: ["Neutralization [Medium]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "KDtAK7x.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Wide Blow",
          description: "Skill range increased by 10%",
          icon: "rlevb4r.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Strengthen sustainability",
          description:
            "Skill duration increased by 1.5s (means more ticks of damage) and cooldown increased by 3s",
          icon: "8IxcdAX.png"
        },
        e_2: {
          effect_name: "Damage reduction",
          description:
            "When ray touches your party member it grants armor increase by 50%",
          icon: "Ct0bUxo.png"
        },
        e_3: {
          effect_name: "Decrease in mobility",
          description: "Enemies movement slowed by 60% for 2s while hit",
          icon: "C42y0cZ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Increase Melody",
          description: "Serenade gauge charges from the skill 200% faster",
          icon: "r4mZaXK.png"
        },
        e_2: {
          effect_name: "Definite Fire",
          description:
            "Skill duration reduced by 50%, skill damage increased by 300%, but you cannot change direction of the light while casting",
          icon: "wYJaLXy.png"
        }
      }
    },
    s_5: {
      skill_name: "Harp of Rhythm",
      cd: "24",
      description:
        "Puts harp on the ground near you that shoots notes at enemy every 2 seconds within 14m with automatic targeted projectiles for 10 seconds",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "VgH9yFB.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Skill duration increased by 2s (means more strikes)",
          icon: "BtWx8s1.png"
        },
        e_2: {
          effect_name: "Nimble Cast",
          description: "Skill cast time decreased by 20%",
          icon: "SoLHNDZ.png"
        },
        e_3: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Agile judgment",
          description: "Hits are made faster (additional 2 projectiles)",
          icon: "4yeH6Qd.png"
        },
        e_2: {
          effect_name: "Blasting",
          description:
            "Adds AoE damage to projectiles but reduces skill range to 6m",
          icon: "nMssZEK.png"
        },
        e_3: {
          effect_name: "Increase Melody",
          description: "Serenade gauge charges additional 1% with every hit",
          icon: "R9u94O4.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Musical note Mark",
          description:
            "Puts debuff on target: all damage increased by 4% for 4s with each tick (additive, 20% max)",
          icon: "nGBwXyL.png"
        },
        e_2: {
          effect_name: "Giant harp",
          description: "Harp size increased by 20% and skill damage by 50%",
          icon: "Iv7fFBo.png"
        }
      }
    },
    s_6: {
      skill_name: "Bunch of Notes",
      cd: "12",
      description:
        "Ball with no collision flies one direction and slows enemies for 2s for 60%",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "ClBPvTw.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 2s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Nimble Cast",
          description: "Skill cast time decreased by 20%",
          icon: "nRO8OuT.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Wide Blow",
          description: "Skill range increased by 20%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Strengthen Notes",
          description: "Skill damage increased by 30%",
          icon: "5yIY8l5.png"
        },
        e_3: {
          effect_name: "Merciless Discharge",
          description:
            "Adds additional projectile with it’s own cooldown timer (means 24s cooldown for 2 charges), but reduces skill damage by 30%",
          icon: "WapQ0GV.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Reprise",
          description:
            "Skill range decreased by 25%, ball explodes at the end of the trace with AoE damage",
          icon: "4wG5uWK.png"
        },
        e_2: {
          effect_name: "Increase Melody",
          description: "Serenade gauge charges from the skill 200% faster",
          icon: "r4mZaXK.png"
        }
      }
    },
    s_7: {
      skill_name: "Conviction Core",
      cd: "24",
      description:
        "For 10s you are surrounded with 3 notes exploding when enemy is near you (one by one with cooldown ~ 1s)",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "NRapUOE.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Strengthen intelligence",
          description: "Skill duration increased by 2s (means more strikes)",
          icon: "BtWx8s1.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Enhanced Core",
          description: "Skill damage increased by 15%",
          icon: "E70cTPv.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Cold Core",
          description: "Enemies movement slowed by 60% for 2s while hit",
          icon: "pySlNIZ.png"
        },
        e_2: {
          effect_name: "Collective core",
          description:
            "After enemy being hit by 1 of the notes damage increased by 50% for every other hit",
          icon: "eajjkDJ.png"
        },
        e_3: {
          effect_name: "Mana Control",
          description: "70% chance to not consume MP",
          icon: "C5b57g8.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Core Explosion",
          description:
            "Skill damage increased by 300% but number of notes reduces by 1",
          icon: "xqsOSNR.png"
        },
        e_2: {
          effect_name: "Core increase",
          description: "Number of notes increased by 2",
          icon: "4wG5uWK.png"
        }
      }
    },
    s_8: {
      skill_name: "World of Music",
      cd: "18",
      description: "AoE winds near you pushes enemies back",
      additional_effects: ["Back Attack", " Immune [stiffness]"],
      type: ["Tap"],
      time: [""],
      icon: "xo9aIfx.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Nimble Cast",
          description: "Skill cast time decreased by 15%",
          icon: "nRO8OuT.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Increase Melody",
          description: "Serenade gauge charges from the skill 150% faster",
          icon: "R9u94O4.png"
        },
        e_2: {
          effect_name: "Enhanced casting",
          description: "Skill damage increased by 80%",
          icon: "5yIY8l5.png"
        },
        e_3: {
          effect_name: "Damage reduction",
          description: "Reduces damage to you by 40% while casting the skill",
          icon: "Ct0bUxo.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "High speed Cast",
          description:
            "Cooldown increased by 6s, range increased by 40% and you can cast skill 2 times",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "A wish for protection",
          description:
            "You and party members touched by wind got shield buff 30% max hp for 4s",
          icon: "FTiGgJR.png"
        }
      }
    },
    s_9: {
      skill_name: "Stigma",
      cd: "24",
      description:
        "You are casting void zone on the ground that ticks 5 times (once per second) and staggers enemies, every next tick damages 12.5% harder",
      additional_effects: ["Neutralization [Medium]"],
      type: ["Cast Time"],
      time: [" 5 sec"],
      icon: "TKNdyv2.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Nimble Cast",
          description: "Skill cast time decreased by 30%",
          icon: "nRO8OuT.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "20% chance for cooldown to be reduced by 24s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Hitting the eardrum",
          description: "Enemies movement slowed by 60% for 2s while hit",
          icon: "C42y0cZ.png"
        },
        e_2: {
          effect_name: "Enhanced casting",
          description: "Skill damage increased by 20%",
          icon: "5yIY8l5.png"
        },
        e_3: {
          effect_name: "Strong Stigma",
          description: "Every next tick damages 25% harder instead of 12.5%",
          icon: "TmNqtCH.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Strengthen sustainability",
          description: "Skill duration increased by 2s (means more ticks)",
          icon: "0BMcHYE.png"
        },
        e_2: {
          effect_name: "Condensation explosion",
          description:
            "Skill duration decreased by 2s, but ticks rate increased by 100%",
          icon: "32F9lxY.png"
        }
      }
    },
    s_10: {
      skill_name: "Rhythm Buckshot",
      cd: "16",
      description:
        "You are pulling harp strings backwards and knock down enemies in a cone direction",
      additional_effects: [
        "Pierce [level 1]",
        " Neutralization [Low]",
        " Back Attack"
      ],
      type: ["Tap"],
      time: [""],
      icon: "UoOtdD7.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Increase Melody",
          description: "Serenade gauge charges from the skill 30% faster",
          icon: "QRTcZZ1.png"
        },
        e_2: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Strengthen Destruction",
          description: "Enemy falls at 2x times increased distance",
          icon: "DUWC0Nh.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Achievement of training",
          description: "Skill range increased by 20%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Strength",
          description: "Become super armor during the cast a skill",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "Strong shot",
          description:
            "Skill damage increased by 25%, knockdown time increased by 25%",
          icon: "Ntx7DAR.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Nimble Cast",
          description:
            "Skill cast time decreased by 20%, critical chance increased by 50%",
          icon: "JMU1YLm.png"
        },
        e_2: {
          effect_name: "Shooting Concentration",
          description:
            "Skill cast time increased by 0.5s, skill damage increased by 30%",
          icon: "hXBL5OK.png"
        }
      }
    },
    s_11: {
      skill_name: "Overtorture of Storm",
      cd: "16",
      description: "AoE lightning around you stuns enemies for 2 seconds",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "qDXNlN1.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mana Control",
          description: "75% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 2s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Capture weakness",
          description: "Skill damage on boss monsters increased by 20%",
          icon: "UXhRg0Q.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Wide Blow",
          description: "Attack Range increases by 15%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Increase Melody",
          description: "Serenade gauge charges from the skill 150% faster",
          icon: "R9u94O4.png"
        },
        e_3: {
          effect_name: "Lightning Strengthening",
          description: "Skill damage increased by 80%",
          icon: "5yIY8l5.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Powerful Overture",
          description:
            "Lightning stun duration decreased by 1, but has overshock effect that damages area twice after initial strike",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Lightning Concentration",
          description:
            "Skill damage increased by 25% and lightning strikes in a large cone area",
          icon: "JeryhMy.png"
        }
      }
    },
    s_12: {
      skill_name: "Sound Vibrations",
      cd: "20",
      description:
        "You are slowly casting AoE spell that deals initial damage that knocks down enemies with void zone dealing damage 4 times with stagger effect",
      additional_effects: ["Pierce [level 2]", " Neutralization [Medium]"],
      type: ["Point"],
      time: [""],
      icon: "hNvtG2h.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Increase Melody",
          description: "Serenade gauge charges from the skill 30% faster",
          icon: "QRTcZZ1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Chord enhancement",
          description: "Skill damage increased by 50%",
          icon: "5yIY8l5.png"
        },
        e_2: {
          effect_name: "Achievement of training",
          description: "Skill range increased by 20%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "[Skill Effect]",
          description: "Skill tick rate increased by 30%",
          icon: "cD0keDA.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "[Skill Damage]",
          description: "Skill damage increased by 35%",
          icon: "xqsOSNR.png"
        },
        e_2: {
          effect_name: "[Skill Effect]",
          description:
            "Skill damages twice with initial strike but no after damage after",
          icon: "4wG5uWK.png"
        }
      }
    },
    s_13: {
      skill_name: "Prelude to Death",
      cd: "24",
      description:
        "You are standing still while channeling harp play that deals damage 2 times in AoE zone around you and with each tick applies debuff that slows enemies down by 20% and decreases their attack by 30% for 2 seconds. When debuff is over it deals additional damage",
      additional_effects: ["Neutralization [Low]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "JjyaOQ3.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Increase Melody",
          description: "Serenade gauge charges from the skill 30% faster",
          icon: "QRTcZZ1.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "[Skill Effect]",
          description: "Last tick of damage increased by 50%",
          icon: "5yIY8l5.png"
        },
        e_2: {
          effect_name: "[Skill Effect]",
          description:
            "Debuff additionally gets 10% more slow reduction and 10% decrease in attack",
          icon: "C42y0cZ.png"
        },
        e_3: {
          effect_name: "[Skill Effect]",
          description: "Additional tick of damage while harp play",
          icon: "POnpICE.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "[Skill Effect]",
          description:
            "Skill damage increased by 30% and additional AoE damage if target dies",
          icon: "hXBL5OK.png"
        },
        e_2: {
          effect_name: "[Skill Effect]",
          description:
            "Skill range increased by 25% and when debuff is over target falls asleep for 4s",
          icon: "uMM49tX.png"
        }
      }
    },
    s_14: {
      skill_name: "Light Note",
      cd: "24",
      description:
        "You are standing still while channeling harp play with AoE zone around mouse cursor. It ticks 3 times every time staggering enemies",
      additional_effects: ["Destruction [level 1]", " Neutralization [Low]"],
      type: ["Point"],
      time: [""],
      icon: "jsQOTOw.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Nimble Cast",
          description: "Skill cast time is reduced by 15%",
          icon: "nRO8OuT.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Strength",
          description: "Become super armor during the cast a skill",
          icon: "a7DgAOn.png"
        },
        e_2: {
          effect_name: "Weak exposure",
          description:
            "Puts debuff on target: all damage increased by 10% for 2s with each tick (not additive, 10% max)",
          icon: "5yIY8l5.png"
        },
        e_3: {
          effect_name: "Strengthen sustain",
          description: "Additional tick of damage while harp play",
          icon: "POnpICE.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Concentration of light",
          description: "Skill damage increased by 50%",
          icon: "3PXf9mr.png"
        },
        e_2: {
          effect_name: " Protection of light",
          description:
            "When party member in the zone of effect grants damage reduction by 75% for 4s",
          icon: "nGBwXyL.png"
        }
      }
    },
    s_15: {
      skill_name: "March of Notes",
      cd: "20",
      description:
        "You are channeling skill for 5 seconds (you can move) every second producing a ball that follows nearest enemy exploding with a touch and applying slow movement debuff for 50% for 2 seconds",
      additional_effects: ["Immune [stiffness]"],
      type: ["Hold"],
      time: [""],
      icon: "vnSrHhR.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "light march",
          description:
            "Increases your movement speed by 15% when channeling the skill",
          icon: "ZYlrZ9I.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Achievement of training",
          description: "Skill range increased by 20%",
          icon: "SPgHuhl.png"
        },
        e_2: {
          effect_name: "Strengthen the March",
          description: "Enemies hit by the balls attack reduced by 30% for 3s",
          icon: "2JPSkpi.png"
        },
        e_3: {
          effect_name: "Decrease in mobility",
          description: "Enemies hit by the balls slowed additional 30% for 2s",
          icon: "C42y0cZ.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "threatening march",
          description:
            "Skill damage increased by 100% and puts debuff on target: all damage increased by 10% for 3s",
          icon: "Cp9hVlE.png"
        },
        e_2: {
          effect_name: "March of the melody",
          description: "Serenade gauge charges from the skill 200% faster",
          icon: "NLHXPyu.png"
        }
      }
    },
    s_16: {
      skill_name: "Top Performance",
      cd: "30",
      description:
        "AoE wave damages and pushes enemies back at the same time buffing you and party members within the zone with attack speed by 16% and MP regeneration by 80% for 10 seconds",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "4i7p5Zu.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 5s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Nimble Cast",
          description: "Skill cast time decreased by 20%",
          icon: "nRO8OuT.png"
        },
        e_3: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Strong performance",
          description:
            "Grants to allies additional buff for 5% str, 5% int and 5% spc",
          icon: "r8r0RgP.png"
        },
        e_2: {
          effect_name: "Performance of valor",
          description: "Debuffs enemies with 30% attack reduce for 10s",
          icon: "2JPSkpi.png"
        },
        e_3: {
          effect_name: "Achievement of training",
          description: "Skill range increased by 20%",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Violent performance",
          description:
            "Grants to allies additional buff for 15% critical chance and 50% critical damage increase",
          icon: "c9NTWOQ.png"
        },
        e_2: {
          effect_name: "Play for me",
          description:
            "Skill damage increased by 100% and all buffs are increase by x2 (32 attack speed, 160% MP regeneration, 10% str/int/spc if II1 taken)",
          icon: "S2Ogv2N.png"
        }
      }
    },
    s_17: {
      skill_name: "Guardian Performance",
      cd: "30",
      description:
        "Players harp to buff you and your party members with reduce damage by 65% for 12 seconds for 3 attacks",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "Ufp7gar.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 5s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Nimble Cast",
          description: "Skill cast time decreased by 20%",
          icon: "nRO8OuT.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Unfinished guardian",
          description:
            "If Guardian Performance buff ends due to time limit, it will provide additional buff of shields for 15% of max HP for 12s",
          icon: ""
        },
        e_2: {
          effect_name: "Strong guard",
          description:
            "Further increases buff effect by 15% damage reduction and 3s duration",
          icon: ""
        },
        e_3: {
          effect_name: "Retribution of defense",
          description:
            "When Guardian Performance ends it explodes and inflicts AoE damage in 4m radius",
          icon: ""
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Long guard",
          description: "Increases the amount of attacks for buff from 3 to 5",
          icon: ""
        },
        e_2: {
          effect_name: "Wish for protection",
          description:
            "Increases evasion rate by 30% for the duration of the buff",
          icon: ""
        }
      }
    },
    ult: {
      skill_name: "Symphony",
      cd: "300",
      description:
        "You play symphony protecting you and party members with shield 100% max hp for 5 seconds and dealing damage to enemies around you",
      additional_effects: [
        "Neutralization [Medium]",
        " Back Attack",
        " Immune [Hit Recovery & Abnormal Status]"
      ],
      type: ["Tap"],
      time: [""],
      icon: "Du2wCmI.png"
    }
  }
};
