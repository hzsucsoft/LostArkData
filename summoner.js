module.exports = {
  summoner: {
    s_1: {
      skill_name: "Mana Crystal",
      cd: "8",
      description:
        "Throws Mana Crystal to deal (9699 ~ 14804) damage to collided and (7759 ~ 11844) to outer cone shape. Damaged target gets slow by 60% for 3s",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "CHwij7t.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mind Enhancement ",
          description: "Decrease MP usage by 44%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Ranged Launch",
          description: "Increase the skill range by 2m",
          icon: "SoLHNDZ.png"
        },
        e_3: {
          effect_name: "Slow Enhancement",
          description: "Increase duration of slow effect by 1s",
          icon: "nIdDNjH.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Flame Crystal",
          description: "Increase the damage by 25%",
          icon: "5yIY8l5.png"
        },
        e_2: {
          effect_name: "Ice Crystal",
          description: "20% chance to freeze an enemy for 2s",
          icon: "HdZ3Crk.png"
        },
        e_3: {
          effect_name: "Thunder Crystal",
          description: "Increase critical hit rate by 30%",
          icon: "UmuzakL.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Chain Explosion",
          description:
            "At successful hit, explodes in a cone shape with 30% increased range",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Area Explosion",
          description:
            "Removed cone shape AOE at successful hit but explodes in circle with increase in 30% damage and 20% slow effect",
          icon: "xqsOSNR.png"
        }
      }
    },
    s_2: {
      skill_name: "Instant Explosion ",
      cd: "12",
      description:
        "Explode condensed mana energy at cursor point to deal (14603 ~ 22292) damage",
      additional_effects: ["Neutralization [Low]"],
      type: ["Point"],
      time: [""],
      icon: "O3KhAFY.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Insight",
          description: "Increase the skill range by 2m",
          icon: "SoLHNDZ.png"
        },
        e_2: {
          effect_name: "Destruction Enhancement",
          description: "Add Lv1 Destruction effect",
          icon: "t2cMfkL.png"
        },
        e_3: {
          effect_name: "Energy Control",
          description:
            "At successful hit, increase ancient spirit gauge gain by 50%",
          icon: "11MLrbC.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Vital Point Explosion",
          description: "Increase critical hit rate by 30%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Shiny Explosion",
          description:
            "At successful hit, sleep the target for 2s but increase CD by 4s",
          icon: "TR1aIIB.png"
        },
        e_3: {
          effect_name: "Slow Target",
          description:
            "Increase the damage by 40% if the target is in slow effect",
          icon: "5yIY8l5.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Mega Explosion",
          description:
            "Increase the delay of explosion but increase the damage by 50% and range by 30%",
          icon: "xqsOSNR.png"
        },
        e_2: {
          effect_name: "It’s a Trap!",
          description:
            "Create a mine that explodes automatically when enemy approaches and decrease enemy’s movement speed for 60% for 3s",
          icon: "oxGXfhi.png"
        }
      }
    },
    s_3: {
      skill_name: "Accelerating Wind Bird ",
      cd: "24",
      description:
        "Summon groups of Wind Bird and can move freely while holding. Skill can last up to 4 s and can deal (49588 / 75678) damage at maximum",
      additional_effects: [
        "Neutralization [Medium]",
        " Back Attack",
        " Immune [Stiffness]"
      ],
      type: ["Hold"],
      time: [" 4 sec"],
      icon: "zPhjjMu.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Accumulated Energy",
          description:
            "Holding the skill no longer increases the ancient gauge but obtain 1 ancient spirit orb at 30% chance if maintained the holding for 4s or longer",
          icon: "j9eW4TE.png"
        },
        e_3: {
          effect_name: "Abdominal Respiration",
          description: "Power gauge consumption reduced by 5",
          icon: "ZYlrZ9I.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Fire Bird",
          description: "Increase the damage by 30% while holding",
          icon: "5yIY8l5.png"
        },
        e_2: {
          effect_name: "Ice Bird",
          description:
            "Holding the skill for 0.5s or longer removes stiffness effect but decrease enemy’s movement speed by 60% for 3s",
          icon: "C42y0cZ.png"
        },
        e_3: {
          effect_name: "Wisdom of Mage",
          description: "Maximum holding time increase to 5s",
          icon: "8IxcdAX.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Flock of Birds",
          description:
            "Summons more bird to increase the skill range by 30% and ignore 50% of magic defense",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "Mother Bird",
          description:
            "Holding the skill 0.5 s or longer summons mother bird additionally at the end of holding",
          icon: "nDL4tKC.png"
        }
      }
    },
    s_4: {
      skill_name: "Burning Gallop ",
      cd: "16",
      description:
        "Relentless fire horse run over to deal (14603 / 22292) damage and airborne enemies. Fire horse reaches its maximum potential of 100% at maximum skill distance.",
      additional_effects: ["Neutralization [Low]", " Pierce [Level 1]"],
      type: ["Tap"],
      time: [""],
      icon: "5Dr1Hce.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Gallop Enhancement",
          description: "Increase the damage by 20%",
          icon: "E70cTPv.png"
        },
        e_2: {
          effect_name: "Vital Strike",
          description: "Increase the critical hit rate by 25%",
          icon: "GjqRFi1.png"
        },
        e_3: {
          effect_name: "Complete One",
          description: "Skill starts off with 50% of its maximum potential",
          icon: "1qT5V38.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Chollima",
          description: "Increase the skill range by 4m",
          icon: "ttirMI4.png"
        },
        e_2: {
          effect_name: "Swift Horse",
          description:
            "Increase the travel speed by 20% and ignore 20% of magic defense",
          icon: "LmuvcKG.png"
        },
        e_3: {
          effect_name: "Weak Point",
          description:
            "Increase the critical damage by 100% toward an enemy with hit recovery immune",
          icon: "a5qp6Tt.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Ascension",
          description: "Increase the skill range by 20% and burn enemy for 5s",
          icon: "bjbQ0Fr.png"
        },
        e_2: {
          effect_name: "Demolisher",
          description:
            "Skill explodes at the end of its range to cause additional damage",
          icon: "xqsOSNR.png"
        }
      }
    },
    s_5: {
      skill_name: "Fauru",
      cd: "30",
      description:
        "Throw firebomb at cursor point to deal (3088 / 4717) damage and summon fire spirit Fauru. Fauru attacks nearby enemy for 15s and deals (4741 / 7237) damage",
      additional_effects: [""],
      type: ["Point"],
      time: [""],
      icon: "JKyEWKJ.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Insight",
          description: "Increase the skill range by 2m",
          icon: "SoLHNDZ.png"
        },
        e_2: {
          effect_name: "Explosion Enhancement",
          description: "Increase the explosion damage by 50%",
          icon: "E70cTPv.png"
        },
        e_3: {
          effect_name: "Wide Explosion",
          description: "Increase the explosion area by 30%",
          icon: "rlevb4r.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Attack Enhancement",
          description: "Increase Fauru’s damage by 30%",
          icon: "eajjkDJ.png"
        },
        e_2: {
          effect_name: "Result of Training",
          description: "Increase Fauru’s attack explosion area by 20%",
          icon: "IpJktTA.png"
        },
        e_3: {
          effect_name: "Summon Maintenance",
          description: "Increase Fauru’s summon duration by 3s",
          icon: "POnpICE.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Blue Flame Fauru",
          description:
            "Increase Fauru’s attack and movement speed and vision rage by 20% each, decrease attack interval time, can activate fire breath in a cone shape with 100% damage that blows away enemy",
          icon: "t1cGFcK.png"
        },
        e_2: {
          effect_name: "Blazing Fauru",
          description:
            "Increase Fauru’s attack damage, can activate self-destruct to cause explosion. Decrease the CD by 5s",
          icon: "dgg9J9i.png"
        }
      }
    },
    s_6: {
      skill_name: "Released Will ",
      cd: "20",
      description:
        "Release gale to push enemies away and cause (15876 / 24235) damage",
      additional_effects: ["Back Attack", " Immune [Stiffness]"],
      type: ["Tap"],
      time: [""],
      icon: "xFXzmI3.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Excellent Maneuver",
          description:
            "Increase skill’s travel distance by 2m. If cyclone tripod is learned, only increase by 1m",
          icon: "frf2qov.png"
        },
        e_2: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Energy Control",
          description:
            "At successful hit, increase ancient spirit gauge gain by 50%",
          icon: "11MLrbC.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Ranged Blast",
          description: "Increase skill range by 25%",
          icon: "ttirMI4.png"
        },
        e_2: {
          effect_name: "Freezing Cold",
          description: "25% chance to freeze an enemy for 3s",
          icon: "HdZ3Crk.png"
        },
        e_3: {
          effect_name: "Dust Wind",
          description:
            "Increase the duration of stiffness and blow distance, 50% chance of slowing an enemy for 5s",
          icon: "OpQyn4M.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Cyclon Rush",
          description:
            "Skill motion changes into a spin to attack all enemy around",
          icon: "Bybk6tw.png"
        },
        e_2: {
          effect_name: "Mana Amplification",
          description:
            "Increase the MP consumption by 50% and the damage by 100%",
          icon: "Cp9hVlE.png"
        }
      }
    },
    s_7: {
      skill_name: "Maririn",
      cd: "45",
      description:
        "Summon coral spirit Maririn. Maririn attacks nearby enemy for 20s and deals (6316 / 9642) damage",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "7DmWJ1k.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Attack Enhancement",
          description: "Increase Maririn’s damage by 20%",
          icon: "akITDDZ.png"
        },
        e_2: {
          effect_name: "Iron Skin",
          description: "Maririn gets 30% damage reduction",
          icon: "SfUebeR.png"
        },
        e_3: {
          effect_name: "Healing Etere",
          description: "When Maririn dies, he drops healing etere",
          icon: "SKW6lN3.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Taunt Command",
          description:
            "Grant taunt skill. Can be activated to immediately taunt all enemy except players for 2s. Seed or higher class mob can’t be taunted for certain period",
          icon: "6XRgQFW.png"
        },
        e_2: {
          effect_name: "Charge Command",
          description:
            "Grant charge skill. Can be activated to charge toward an enemy to stun for 2s",
          icon: "TR1aIIB.png"
        },
        e_3: {
          effect_name: "Neutralization Command",
          description:
            "Grant neutralization skill. Can be activated to cast Neut(M) effect skill.",
          icon: "LmuvcKG.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Communion",
          description: "Increase Maririn’s duration by 10s",
          icon: "0BMcHYE.png"
        },
        e_2: {
          effect_name: "Coral Spirit",
          description: "Increase Maririn’s HP by 100%",
          icon: "nDL4tKC.png"
        }
      }
    },
    s_8: {
      skill_name: "Winged Spirit ",
      cd: "30",
      description:
        "Summon hawk figured wind spirit at cursor point. Can last maximum of 4s to deal (57918 / 88439) damage at maximum",
      additional_effects: ["Neutralization [Mid-High]", " Immune: Stiffness"],
      type: ["Hold"],
      time: [" 4 sec"],
      icon: "OsECdvv.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Feeding on Prey",
          description:
            "Increase the damage by 30% toward a mob with Named class or below",
          icon: "E70cTPv.png"
        },
        e_2: {
          effect_name: "Fortified Robe",
          description: "30% damage reduction while holding",
          icon: "SfUebeR.png"
        },
        e_3: {
          effect_name: "Mana Regeneration",
          description: "50% increased MP regeneration while holding",
          icon: "H6JBBPw.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Thunder Spirit",
          description: "Increase critical hit rate by 30%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Earth Spirit",
          description: "10% chance to petrify an enemy for 2s",
          icon: "HdZ3Crk.png"
        },
        e_3: {
          effect_name: "Result of Training",
          description: "Increase the skill range by 25%",
          icon: "SPgHuhl.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Typhoon",
          description: "Increase the damage by 30% and critical damage by 100%",
          icon: "s2QfHGg.png"
        },
        e_2: {
          effect_name: "Communion",
          description:
            "Decrease hit interval by 33%. Increase in ancient spirit gauge gain as it hits more.",
          icon: "KEm9ET8.png"
        }
      }
    },
    s_9: {
      skill_name: "Electricity Release",
      cd: "12",
      description:
        "Throw condensed electric ball to deal (3704 / 5654) damage and create electric field for 1s that deals (8643 / 13200) damage",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "LJ02W07.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Chain Launch",
          description:
            "Change into a chain skill. Increase the MP cost by 50% and activating a chain skill increase CD by 12s",
          icon: "jC42yG9.png"
        },
        e_2: {
          effect_name: "Rapid Casting",
          description: "Increase the casting motion speed by 20%",
          icon: "nRO8OuT.png"
        },
        e_3: {
          effect_name: "Haste Launch",
          description: "Increase the projectile travel speed by 20%",
          icon: "ZYlrZ9I.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Electricity Enhancement",
          description:
            "Increased in duration of stiffness and critical hit rate by 20%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Feeding on Prey",
          description:
            "Increase the damage by 30% toward a mob with Minion or Normal class",
          icon: "FtChNZ3.png"
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
          effect_name: "Supercurrent Area",
          description:
            "At the arrival point, create an electrical field for 3.5s that causes damage for every 0.5s and pulls enemies toward a center",
          icon: "xqsOSNR.png"
        },
        e_2: {
          effect_name: "High Voltage",
          description: "Electrify an enemy for 2s",
          icon: "uMM49tX.png"
        }
      }
    },
    s_10: {
      skill_name: "Sticky Moss Swamp ",
      cd: "20",
      description:
        "Summon Sticky Moss Swamp at cursor point to deal (1744 / 2660) damage every second and slow down movement speed by 60% for all targets standing above it ",
      additional_effects: "",
      type: "Point",
      time: "",
      icon: "9F0aHD2.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mind Enhancement",
          description: "Decrease MP consumption by 50% ",
          icon: "Tripod_Tier_1_34.png"
        },
        e_2: {
          effect_name: "Rapid Preparation",
          description: "Decrease CD by 3s ",
          icon: "Tripod_Tier_1_56.png"
        },
        e_3: {
          effect_name: "Battle Preparation",
          description: "Increase AP by 15% for 4s at cast ",
          icon: "Tripod_Tier_1_50.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Increased Diffusion",
          description: "Speed up the spreading of the swamp ",
          icon: "Tripod_Tier_2_53.png"
        },
        e_2: {
          effect_name: "Poisonous Swamp",
          description: "Increase the damage by 200% ",
          icon: "Tripod_Tier_2_1.png"
        },
        e_3: {
          effect_name: "Sticky Swamp",
          description: "Increase the slow effect by 20% ",
          icon: "Tripod_Tier_2_47.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Queen of Swamp",
          description: "Increase the size of the swamp by 30% ",
          icon: "Tripod_Tier_3_7.png"
        },
        e_2: {
          effect_name: "Acidic Swamp",
          description: "Decrease all enemies magic defense by 50% ",
          icon: "Tripod_Tier_3_46.png"
        }
      }
    },
    s_11: {
      skill_name: "Elseed",
      cd: "24",
      description:
        "Summon 2 Elseed, lily flower spirit. Elseed attacks nearby enemy for 10s and deals (1348 / 2057) damage",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "vErbmAQ.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mind Enhancement",
          description: "Decrease MP consumption by 50%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Mana Amplification",
          description:
            "Increase MP consumption by 50% and AP by 20% for 5s at cast",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Summon Maintenance",
          description: "Increase summon duration by 2s",
          icon: "BtWx8s1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Poisonous Seed",
          description: "Hit applies poison to an enemy for 5s",
          icon: "zHwYyaV.png"
        },
        e_2: {
          effect_name: "Icy Seed",
          description:
            "Hit applies slow which decrease movement speed by 40% for 3s",
          icon: "wGYSIwd.png"
        },
        e_3: {
          effect_name: "Armor Demolition",
          description: "Hit applies all defense reduction 2% each (max at 40%)",
          icon: "2JPSkpi.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Pack Summon",
          description: "Summons 3 Elseeds",
          icon: "4wG5uWK.png"
        },
        e_2: {
          effect_name: "Elite Summon",
          description:
            "Summons only one elite version which has greater damage, 40% increased attack range, and can cause stiffness on good hit",
          icon: "nDL4tKC.png"
        }
      }
    },
    s_12: {
      skill_name: "Earth Shatter",
      cd: "24",
      description:
        "Create strong earthquake at cursor point to deal (24696 / 37702) damage and airborne",
      additional_effects: [
        "Destruction [level 1]",
        " Neutralization [Medium]",
        " Immune [Stiffness]"
      ],
      type: ["Point"],
      time: [""],
      icon: "zsQlG3o.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Flame Shatter",
          description: "Increase the damage by 20%",
          icon: "E70cTPv.png"
        },
        e_2: {
          effect_name: "Glacial Shatter",
          description: "60% chance to freeze an enemy for 3 s",
          icon: "fZE0IYD.png"
        },
        e_3: {
          effect_name: "Aftermath",
          description:
            "After successful casting, create additional shatters each second for next 3s",
          icon: "ncr6Vb8.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Rapid Casting",
          description: "Increase casting speed by 20%",
          icon: "rP1umQI.png"
        },
        e_2: {
          effect_name: "Tremble",
          description: "Additional hits of 4 times during casting",
          icon: "cD0keDA.png"
        },
        e_3: {
          effect_name: "Tenacity",
          description: "Grant hit recovery immune during casting",
          icon: "a7DgAOn.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Great Rift",
          description:
            "Increase MP consumption by 50% and ignore magic defense of enemy by 60%",
          icon: "UC8RykM.png"
        },
        e_2: {
          effect_name: "Earthquake",
          description:
            "Increase the skill area by 25% and neutralization point by 40%",
          icon: "bjbQ0Fr.png"
        }
      }
    },
    s_13: {
      skill_name: "Spirit of Water ",
      cd: "20",
      description:
        "Summon water spirit for 2s and deal (25970 / 39626) damage.",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "sgOc7Iy.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Rapid Casting",
          description: "Increase casting motion speed by 20%",
          icon: "nRO8OuT.png"
        },
        e_2: {
          effect_name: "Fortified Robe",
          description: "Grant damage reduction of 30% while the spirit is up",
          icon: "SfUebeR.png"
        },
        e_3: {
          effect_name: "Mana Regeneration",
          description:
            "Increase MP regeneration rate by 100% while the spirit is up",
          icon: "H6JBBPw.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Mud Spirit",
          description: "Apply slow effect for 2s",
          icon: "2JPSkpi.png"
        },
        e_2: {
          effect_name: "Water Spray Spirit",
          description: "Last hit deals greater damage and blows enemy away",
          icon: "Ntx7DAR.png"
        },
        e_3: {
          effect_name: "Weak Point",
          description:
            "Ignore 50% of magic defense toward an enemy with hit recovery immune",
          icon: "a5qp6Tt.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Wisdom of Spirit",
          description:
            "Increase summon duration by 1s and gradually increase the damage up to 50%",
          icon: "3PXf9mr.png"
        },
        e_2: {
          effect_name: "Water Cannon",
          description:
            "Decrease skill angle by 50% but increase the attack distance by 100%",
          icon: "bjbQ0Fr.png"
        }
      }
    },
    s_14: {
      skill_name: "Electric Storm",
      cd: "24",
      description:
        "After channeling mana for 2s, create electric storm for 5s to deal (47632 / 72706) damage",
      additional_effects: ["Neutralization [Medium]"],
      type: ["Cast Time"],
      time: [" 2 sec"],
      icon: "OFdCWTj.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Rapid Casting",
          description: "Increase casting speed by 20%",
          icon: "nRO8OuT.png"
        },
        e_3: {
          effect_name: "Fortified Robe",
          description: "30% damage reduction while casting",
          icon: "SfUebeR.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Vital Strike",
          description:
            "Increase MP consumption by 25% and critical hit rate by 50%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Result of Training",
          description: "Increase the size of the storm by 20%",
          icon: "SPgHuhl.png"
        },
        e_3: {
          effect_name: "Long-Lasting",
          description:
            "Increase MP consumption by 75% and summon duration by 3s",
          icon: "POnpICE.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Crimson Storm",
          description:
            "Decrease hit interval by 33%. Increase in ancient spirit gauge gain as it hits more",
          icon: "32F9lxY.png"
        },
        e_2: {
          effect_name: "Homing Storm",
          description:
            "Increase in ancient spirit gauge gain by 50% and grant homing ability that slowly travels toward an enemy",
          icon: "XfeC65B.png"
        }
      }
    },
    s_15: {
      skill_name: "Shurudy",
      cd: "30",
      description:
        "Summon small light spirit Shurudy. Shurudy travels along with character for 20s to deal (4410 / 6732) damage",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "SQ1n4Q6.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Stun Effect",
          description: "15% chance to stun an enemy for 2s at successful hit",
          icon: "ZkTpIPx.png"
        },
        e_2: {
          effect_name: "High Speed Projectile",
          description: "Increase attack projectile speed by 20%",
          icon: "ZYlrZ9I.png"
        },
        e_3: {
          effect_name: "Growth of Light",
          description: "After 10s, Shurudy’s attack gets 50% increase",
          icon: "akITDDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Smarty Shurudy",
          description:
            "Increase vision and attack range by 20% and decrease the hit interval",
          icon: "rP1umQI.png"
        },
        e_2: {
          effect_name: "Buffed Shurudy",
          description: "Increase skill attack by 30%",
          icon: "5yIY8l5.png"
        },
        e_3: {
          effect_name: "Vanity Shurudy",
          description: "Increase summon duration 5s",
          icon: "POnpICE.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Collision Ignore",
          description:
            "Increase HP regeneration rate and does not collide with a normal mob",
          icon: "9eXzPWU.png"
        },
        e_2: {
          effect_name: "Mana Regeneration",
          description:
            "Increase MP regeneration rate by 100% while the spirit is up",
          icon: "FnpTiuc.png"
        }
      }
    },
    s_16: {
      skill_name: "Ancient Spear",
      cd: "36",
      description:
        "After channeling mana for 2.5 s, summon an ancient spear at the cursor point to deal (63896 ~ 97537) damage and knock down targets got direct hit and deal",
      additional_effects: ["Pierce [level 1]", " Neutralization [Mid-High]"],
      type: ["Cast Time"],
      time: [" 2.5 sec"],
      icon: "dnNgIW7.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mana Control",
          description: "50% chance to not consume MP",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Rapid Casting",
          description: "Increase casting speed by 20%",
          icon: "nRO8OuT.png"
        },
        e_3: {
          effect_name: "Insight",
          description: "Increase the skill range by 2m",
          icon: "SoLHNDZ.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Blazing Spear",
          description: "Spear applies burn effect for 5s",
          icon: "5yIY8l5.png"
        },
        e_2: {
          effect_name: "Glacial Spear",
          description:
            "Direct hit by spear freezes an enemy and apply slow effect to enemy at outer range",
          icon: "HdZ3Crk.png"
        },
        e_3: {
          effect_name: "Earth Spear",
          description:
            "Direct hit by spear applies damage bonus by 20%. The spear knockdowns enemy at center and airborne outer range",
          icon: "Ntx7DAR.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Condensed Power",
          description: "Additional explosion afterward",
          icon: "xqsOSNR.png"
        },
        e_2: {
          effect_name: "Ancient Power",
          description:
            "Grant hit recovery immune and increase neutralization point by 50% at the cost of instant MP consumption and CD",
          icon: "6vzVrvN.png"
        }
      }
    },
    s_17: {
      skill_name: "Rayne’s Protection ",
      cd: "60",
      description:
        "Receive Rayne’s protection shield that absorbs up to (10% ~ 30%) of maximum HP for 6s",
      additional_effects: [""],
      type: ["Tap"],
      time: [""],
      icon: "4emLA77.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Wind of Protection",
          description: "Push enemies away at cast",
          icon: "s72YiQJ.png"
        },
        e_2: {
          effect_name: "Focused Energy",
          description: "40% chance to gain 1 ancient spirit orb at cast",
          icon: "j9eW4TE.png"
        },
        e_3: {
          effect_name: "Purification",
          description: "Remove 1 abnormal debuff at cast",
          icon: "1qT5V38.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Barrier Enhancement",
          description: "Increase the shield amount by 100%",
          icon: "9swgCXc.png"
        },
        e_2: {
          effect_name: "Barrier Maintenance",
          description: "Increase the shield duration by 4s",
          icon: "POnpICE.png"
        },
        e_3: {
          effect_name: "Nimble Feet",
          description: "Increase movement speed by 20% while the shield is up",
          icon: "LmuvcKG.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Resonance",
          description:
            "Shield breaks with explosion that causes stun for 4s to nearby enemy",
          icon: "uMM49tX.png"
        },
        e_2: {
          effect_name: "Accelerating Shield",
          description: "30% CDR while shield is up",
          icon: "mJ47SLb.png"
        }
      }
    },
    ult: {
      skill_name: "Kelsion",
      cd: "300",
      description:
        "Summons Kelsion,God of Thunder, to airborne and deal 33006 damage to the area. Kelsion provides aids for 20s",
      additional_effects: [
        "Neutralization [Medium]",
        " Back Attack",
        " Immune [Hit Recovery & Abnormal Status]"
      ],
      type: ["Chain"],
      time: [""],
      icon: "eVrfA9S.png"
    }
  }
};
