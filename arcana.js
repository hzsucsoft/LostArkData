module.exports = {
  arcana: {
    s_1: {
      skill_name: "Call of Destiny",
      cd: "16",
      description:
        "Throws a card in the specified direction, dealing damage. After a short time, inflict additional damage and launches enemy into the air",
      additional_effects: ["Neutralization [Low]"],
      type: ["Tap"],
      time: [""],
      icon: "lGZtf3v.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mental Fortification",
          description: "Mana cost reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 2s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Sleek Motion",
          description: "Attack speed increases by 15%",
          icon: "9VyE0qU.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Increase Card",
          description:
            "Enemies knocked up by the attack will have Floating Cards applied to them once more",
          icon: "qjh8nzR.png"
        },
        e_2: {
          effect_name: "Identified Weakness",
          description: "Increases damage done to immune enemies by 40%",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "Dark Fate",
          description:
            "Increases damage by 20% and makes the target more prone to critical hits by 15% for 3s",
          icon: "IpJktTA.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Continuous Attack",
          description:
            "Changes the attack to a three hit attack. The first hit repeats before knocking up on the third hit",
          icon: "4wG5uWK.png"
        },
        e_2: {
          effect_name: "Concentration of Fate",
          description:
            "Cast time reduced by 0.3s. Changes the attack to a single hit and increases damage by 100%",
          icon: "t1cGFcK.png"
        }
      }
    },
    s_2: {
      skill_name: "Unlimited Shuffle",
      cd: "30",
      description:
        "Several cards fly where indicated, inflicting between damage. Launches enemies into the air and then hit the ground, inflicting damage",
      additional_effects: [
        "Destruction [level 1]",
        " Neutralization [Mid-High]",
        " Immune [stiffness]"
      ],
      type: ["Point"],
      time: [""],
      icon: "n40Rg4Q.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Piercing Strike",
          description: "Ignores 30% of enemy’s magic defense",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Strength",
          description: "Become immune to cc during skill use.",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "Mental Fortification",
          description: "Mana consumption reduced by 50%",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Critical Hit",
          description:
            "Each hit increases critical chance by 5% and final hit is always a critical hit",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Identified Weakness",
          description: "Increases damage done to cc immune enemies by 40%",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "Ultimate Shuffle",
          description:
            "Increases number of attacks by 25%. Duration remains the same",
          icon: ""
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Predicted Death",
          description:
            "Final hit takes 0.3s longer but final hit damage increases by 80%. This damage is included as it splits the attack into 3 smaller hits",
          icon: ""
        },
        e_2: {
          effect_name: "Shadow Core",
          description:
            "Attack damage increased by 50% damage within 2 meters of center and makes the target more prone to critical hits by 15% for 3s",
          icon: ""
        }
      }
    },
    s_3: {
      skill_name: "Return",
      cd: "12",
      description:
        "Launches cards in the specified area, dealing damage to the target. If the skill is activated again, knockdown the targets and deals additional damage",
      additional_effects: ["Neutralization [Low]"],
      type: ["Combo"],
      time: [""],
      icon: "RjzF5DU.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description:
            "Reduces cooldown per enemy hit by 1s. Maximum 4s reduction",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Piercing Strike",
          description: "Ignores 30% of enemy’s magic defense.",
          icon: ""
        },
        e_3: {
          effect_name: "Penetration Enhance",
          description: "Increases penetration rate of second skill attack by 2",
          icon: ""
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Exposed Target",
          description:
            "Second skill attack damage is increased by 50% when target has been hit by first hit",
          icon: ""
        },
        e_2: {
          effect_name: "Unprotected Target",
          description:
            "Increases critical chance by 50% against targets immune to hit-effects",
          icon: ""
        },
        e_3: {
          effect_name: "Concentrated Card",
          description:
            "Decreases the attack angle but increases attack range and damage by 20%",
          icon: ""
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Continuous Attack",
          description:
            "Changes the attack to a three hit attack. The second hit repeats a third time",
          icon: "4wG5uWK.png"
        },
        e_2: {
          effect_name: "Shadow Enhancement",
          description:
            "Increases damage by 40% and makes the target more prone to critical hits by 30% for 3s",
          icon: "32F9lxY.png"
        }
      }
    },
    s_4: {
      skill_name: "Mysterious Rush",
      cd: "14",
      description:
        "When using it for the first time, you move 4m to your left. Using a second time, you move 8m on your right and finally 4m on your left if it is used a third time. With each move, you send cards to the opponent, dealing damage",
      additional_effects: ["Piercing [level 1]", " Neutralization [Medium]"],
      type: ["Combo"],
      time: [""],
      icon: "jGiq0NQ.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mental Fortification",
          description: "Mana consumption reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Penetration Enhance",
          description: "Increases penetration rate by 1",
          icon: "Mo0MlPh.png"
        },
        e_3: {
          effect_name: "Quickdraw",
          description: "5% chance to draw a Tarot card each hit",
          icon: ""
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Escape Master",
          description: "Increases evasion rate by 30% during cast",
          icon: "j4OiBjo.png"
        },
        e_2: {
          effect_name: "Rush Concentration",
          description: "As combo progresses, increases damage by 30%",
          icon: ""
        },
        e_3: {
          effect_name: "Knockdown Attack",
          description: "Knocks down enemies hit by last strike",
          icon: "Ntx7DAR.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Mysterious Retreat",
          description:
            "Changes the attack to a two hit attack. The second hit can be used within 2s of the first cast and deals 250% increased damage",
          icon: "t1cGFcK.png"
        },
        e_2: {
          effect_name: "Continuous Attack",
          description:
            "Changes the attack to a four hit attack. The fourth hit retreats you 4 meters",
          icon: "4wG5uWK.png"
        }
      }
    },
    s_5: {
      skill_name: "Evoke",
      cd: "24",
      description:
        "Places a spell in a specified area that explodes, dealing damage, when the skill is used again",
      additional_effects: ["Neutralization [Medium]"],
      type: ["제인"],
      time: [""],
      icon: "pX0JA6O.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Mental Fortification",
          description: "Mana consumption reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Quickdraw",
          description: "5% chance to draw a Tarot card each hit",
          icon: ""
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Link Magic",
          description: "Increases damage by 30%",
          icon: ""
        },
        e_2: {
          effect_name: "Mana Poisoning",
          description:
            "Damage reduced by 30% and no longer knocks up. Reduces movement speed by 50% and deals 15% continuous poison damage each second for 3s",
          icon: ""
        },
        e_3: {
          effect_name: "Sharp Strike",
          description:
            "Increases critical damage by 50% and critical chance by 20%",
          icon: "qp8CE16.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Split Magic",
          description:
            "You can cast the skill twice within 3s. It will automatically detonate after 5s",
          icon: ""
        },
        e_2: {
          effect_name: "Overlap",
          description:
            "Detonates three times with reduced strength each explosion",
          icon: ""
        }
      }
    },
    s_6: {
      skill_name: "Quadra Accelerate",
      cd: "10",
      description:
        "Throws 4 straight-line cards, inflicting damage in the specified direction. Movement speed is increased during casting",
      additional_effects: ["Pierce [level 1]", " Immune [stiffness]"],
      type: ["Tap"],
      time: [""],
      icon: "1lgjqYU.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Penetration Enhance",
          description: "Increases penetration rate by 1",
          icon: "Mo0MlPh.png"
        },
        e_2: {
          effect_name: "Sleek Motion",
          description: "Attack speed increases by 15%",
          icon: "nRO8OuT.png"
        },
        e_3: {
          effect_name: "Sharp Strike",
          description: "Increases critical hit rate by 15%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Swift Movement",
          description: "Increases movement speed by 15%",
          icon: "wGYSIwd.png"
        },
        e_2: {
          effect_name: "Ignore Collision",
          description: "No unit collision during the cast",
          icon: "GDVRuGY.png"
        },
        e_3: {
          effect_name: "Increase Card",
          description:
            "5% chance to deal 20% additional damage and instantly apply 4 stacked cards",
          icon: "qjh8nzR.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Hexagon Enhancement",
          description:
            "Increases skill duration by 1s and cards fired from 4 to 6",
          icon: "4wG5uWK.png"
        },
        e_2: {
          effect_name: "Accelerate Concentration",
          description: "Increases damage by 30% to 90% per hit",
          icon: "3PXf9mr.png"
        }
      }
    },
    s_7: {
      skill_name: "Scratch Dealers",
      cd: "10",
      description:
        "You move 6m in a given direction and inflict damage. If the skill is used again, you knockdown enemy. Can stack 2 times the Floating Cards effect",
      additional_effects: ["Destruction [Level 1]", " Back Attack"],
      type: ["Combo"],
      time: [""],
      icon: "o1v8ZHD.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Excellent Mobility",
          description: "Travel distance increased by 2m",
          icon: "frf2qov.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 2s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Muscle Spasm",
          description: "Increases fall down condition by 0.5s",
          icon: "DUWC0Nh.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Sharp Blow",
          description: "Critical damage increases by 100%",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "First Scratch",
          description: "Increases damage dealt to unharmed enemies by 100%",
          icon: "5yIY8l5.png"
        },
        e_3: {
          effect_name: "Identified Weakness",
          description: "Increases damage done to immune enemies by 40%",
          icon: "a5qp6Tt.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Squall",
          description:
            "Modifies the attack style. Attack three times the new hit goes between the first two and knocks the enemy up",
          icon: "Bybk6tw.png"
        },
        e_2: {
          effect_name: "Safety Device",
          description:
            "A third cast is added which retreats by 7 meters and increases movement speed and evasion by 30% for 3s",
          icon: "6hI884T.png"
        }
      }
    },
    s_8: {
      skill_name: "Spiral Edge",
      cd: "12",
      description:
        "Charge on 7m and throw cards around you. The skill can be used 2 times in a row. Each time you use the skill, you inflict the floating cards effect",
      additional_effects: ["Back Attack", " Immune [stiffness]"],
      type: ["Combo"],
      time: [""],
      icon: "fzt08Mz.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Mental Fortification",
          description: "Mana consumption reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown time decreases by 2s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Excellent Mobility",
          description: "Travel distance increased by 1.4m",
          icon: "frf2qov.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Strength",
          description: "Become immune to cc during skill use",
          icon: "a7DgAOn.png"
        },
        e_2: {
          effect_name: "Ruthless Shot",
          description:
            "Reduces damage by 40% but adds an extra attack around the caster on destination",
          icon: "cD0keDA.png"
        },
        e_3: {
          effect_name: "Sharp Blow",
          description: "Critical damage increases by 75% for 3s after casting",
          icon: "qp8CE16.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Card Amplification",
          description:
            "Deals an additional attack on arrival to enemies within 4 meters of player",
          icon: "4wG5uWK.png"
        },
        e_2: {
          effect_name: "Light Step",
          description:
            "After using the skill, movement speed increased by 40% and no collision for 2s",
          icon: "oxGXfhi.png"
        }
      }
    },
    s_9: {
      skill_name: "Flower Dance",
      cd: "20",
      description:
        "You move 11m in a given direction while throwing cards around you, dealing damage to enemies. By using the skill a second time, you return to your starting position. The floating cards effect can be applied 4 times",
      additional_effects: [
        "Neutralization [Low]",
        " Back Attack",
        " Immune [stiffness]"
      ],
      type: ["Combo"],
      time: [""],
      icon: "JnhScNy.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 3s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Escape Master",
          description: "Increases evasion rate by 20% during cast",
          icon: "j4OiBjo.png"
        },
        e_3: {
          effect_name: "Sharp Strike",
          description: "Critical damage increased by 50%.",
          icon: "4R8T3Cz.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Fatal Flower",
          description:
            "Critical chance increases by 5% to 50% depending on skill duration",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Strength",
          description: "Become immune to cc during skill use",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "Dramatic Dance",
          description: "Damage increased by 25%.",
          icon: "5yIY8l5.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Aggressive Visibility",
          description:
            "Reduces number of attacks by 4, increases damage by 94%",
          icon: "t1cGFcK.png"
        },
        e_2: {
          effect_name: "Fatal Visibility",
          description:
            "200% damage explosion at destination when teleporting back",
          icon: "4wG5uWK.png"
        }
      }
    },
    s_10: {
      skill_name: "Checkmate",
      cd: "24",
      description:
        "Quickly launch a card in the direction of the mouse, inflicting damage",
      additional_effects: ["Neutralization [Low]", " Immune [stiffness]"],
      type: ["Hold"],
      time: [""],
      icon: "lz2Mkrj.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Piercing Strike",
          description: "Ignores 20% of enemy’s magic defense",
          icon: ""
        },
        e_2: {
          effect_name: "Sharp Strike",
          description: "Increases critical hit rate by 15%",
          icon: "GjqRFi1.png"
        },
        e_3: {
          effect_name: "Card Increase",
          description: "Increases maximum number of card stacks from 3 to 4",
          icon: ""
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Snappy Movement",
          description:
            "Increases number of attacks by 30%. Duration remains the same",
          icon: "LmuvcKG.png"
        },
        e_2: {
          effect_name: "Identified Weakness",
          description: "Increases damage done to immune enemies by 50%",
          icon: "a5qp6Tt.png"
        },
        e_3: {
          effect_name: "Fatal Attack",
          description:
            "Every time you deal damage, skill damage increases by 10%, to a maximum of 100%, each time with a 50% chance",
          icon: ""
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Wave of Cards",
          description:
            "Fans out attacks in a four-directional cone fan. Cooldown increased by 5s and damage reduced by 30%",
          icon: "FpXyekj.png"
        },
        e_2: {
          effect_name: "Deadline",
          description:
            "When holding the skill for longer than 0.5s you throw explosive cards after letting go that inflicts 900% damage. Knocks targets down",
          icon: ""
        }
      }
    },
    s_11: {
      skill_name: "Stream of Edge",
      cd: "23",
      description:
        "Open two portals, releasing a deluge of cards: All enemies located between these portals inflict damage",
      additional_effects: ["Neutralization [Low]"],
      type: ["Point"],
      time: [""],
      icon: "X7wdevS.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Card Increase",
          description:
            "Increases Floating Cards stacks from one cast from 2 to 3",
          icon: ""
        },
        e_2: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "DXzNTSi.png"
        },
        e_3: {
          effect_name: "Quickdraw",
          description: "1% chance to draw a Tarot card each hit",
          icon: ""
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Fatal Attack",
          description:
            "Every time you deal damage, skill damage increases by 10%, to a maximum of 50%",
          icon: ""
        },
        e_2: {
          effect_name: "Increase Duration",
          description: "Skill duration increases by 1.5s",
          icon: ""
        },
        e_3: {
          effect_name: "Critical Hit",
          description: "Increases Critical Hit Rate by 25%",
          icon: "qp8CE16.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Stream Wave",
          description:
            "No longer fixates the skill in place. Skill slowly travels forward and increases damage by 90%",
          icon: ""
        },
        e_2: {
          effect_name: "Sharp Card",
          description:
            "Every second the critical damage of this skill increases by 30%",
          icon: ""
        }
      }
    },
    s_12: {
      skill_name: "Infinity Shower",
      cd: "20",
      description:
        "Deals damage by throwing cards at the target location. They increase damage each time the skill is used",
      additional_effects: [
        "Destruction [level 1]",
        " Neutralization [Low]",
        " Immune [stiffness]"
      ],
      type: ["Combo"],
      time: [""],
      icon: "m0VlwO6.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 4s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Card Increase",
          description: "Increases maximum number of card stacks from 1 to 2",
          icon: ""
        },
        e_3: {
          effect_name: "Sharp Strike",
          description: "Increases critical hit rate by 15%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Strength",
          description: "Become immune to cc during skill casting",
          icon: "a7DgAOn.png"
        },
        e_2: {
          effect_name: "Uniform Attack",
          description:
            "No longer incrementally increases the damage of each attack. Increases total damage by 75%",
          icon: ""
        },
        e_3: {
          effect_name: "Unprotected Target",
          description: "Increases damage done to a knocked down targets by 40%",
          icon: ""
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Last Infinite",
          description:
            "Increased damage by 60%. Fallen enemies struck will remain fallen",
          icon: ""
        },
        e_2: {
          effect_name: "Infinite Maneuver",
          description:
            "Reduces number of hits to 1 and increases damage by 150%",
          icon: ""
        }
      }
    },
    s_13: {
      skill_name: "Celestial Rain",
      cd: "16",
      description:
        "The card explodes at the target location inflicting damage. Inflicts additional damage to knock-up enemies by bringing them back to the ground. When the stack effect is activated, it gives an additional effect",
      additional_effects: [""],
      type: ["Point"],
      time: [""],
      icon: "nX6FTlk.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Sleek Motion",
          description: "Attack speed increases by 15%",
          icon: "nRO8OuT.png"
        },
        e_2: {
          effect_name: "Sharp Strike",
          description: "Increases critical hit rate by 20%",
          icon: "GjqRFi1.png"
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "20% chance to reset cooldown on cast",
          icon: "DXzNTSi.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Destroyer Card",
          description: "Critical damage increased by 10% to 40%",
          icon: "YlRQ5P1.png"
        },
        e_2: {
          effect_name: "Sharp Card",
          description:
            "When 4 stacks are consumed, target is debuffed for 8s to take 20% more damage",
          icon: "UguU8TH.png"
        },
        e_3: {
          effect_name: "Strengthened Strike",
          description: "Damage dealt increased by 25%",
          icon: "5yIY8l5.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Heavy Rain",
          description:
            "Adds another hit with 100% additional damage. This hit deals 50% further damage if the enemies it hits are knocked down",
          icon: "4wG5uWK.png"
        },
        e_2: {
          effect_name: "Detect Weakness",
          description:
            "Damage increases by 25% to 100% per Floating Cards stack against a target immune to hit-effects. Increases cooldown by 8s",
          icon: "nws09aw.png"
        }
      }
    },
    s_14: {
      skill_name: "Four Cards",
      cd: "12",
      description:
        "Quickly launch 4 cards, dealing вamage in the specified direction. When the deck is triggered, add an additional effect",
      additional_effects: ["Pierce [level 1]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "0zrjzTO.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "44% chance to reset cooldown on cast.",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Mental Fortification",
          description: "Mana consumption reduced by 44%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Penetration Enhance",
          description: "Increases penetration rate by 1",
          icon: "Mo0MlPh.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Four Stack",
          description:
            "Damage dealt by player is increased by 44% for 4s every time the skill is cast 4 times",
          icon: "eajjkDJ.png"
        },
        e_2: {
          effect_name: "Strength",
          description: "Become immune to cc during skill use",
          icon: "a7DgAOn.png"
        },
        e_3: {
          effect_name: "Card Enhancement",
          description: "Damage dealt increased by 44%",
          icon: "5yIY8l5.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Delayed Shock",
          description:
            "Reduces damage to 44% and places a debuff on the target. 4s later, it deals 444% more damage",
          icon: "eOTsTHH.png"
        },
        e_2: {
          effect_name: "Continuous Attack",
          description:
            "Skill becomes a combo, allowing a 2nd hit by holding down the key.",
          icon: "dgg9J9i.png"
        }
      }
    },
    s_15: {
      skill_name: "Serendipity",
      cd: "16",
      description:
        "You surround yourself with cards, dealing damage to nearby enemies, and project them in the direction of the mouse",
      additional_effects: ["Neutralization [Medium]", " Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "bWqJ3Ke.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Piercing Strike",
          description: "50% chance to ignore 50% of enemy’s magic defense",
          icon: ""
        },
        e_2: {
          effect_name: "Quickdraw",
          description: "10% chance to draw a Tarot card each hit",
          icon: "qjh8nzR.png"
        },
        e_3: {
          effect_name: "Mental Fortification",
          description: "50% chance to reduce mana cost by 100%",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Accidental Blow",
          description:
            "Has a 20% chance to increase the critical damage by 100% per Floating Cards stack",
          icon: "qp8CE16.png"
        },
        e_2: {
          effect_name: "Accidental Bang",
          description:
            "Increases damage by 30%. No longer knocks down. Has a 20% chance to stun the enemy for 3s per Floating Cards stack.",
          icon: ""
        },
        e_3: {
          effect_name: "Quick Preparation",
          description: "15% chance to reset cooldown on hit",
          icon: ""
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Continuous Attack",
          description:
            "Changes the attack to a three hit attack. The additional attack is in the middle and the damage is equal to the first attack",
          icon: "dgg9J9i.png"
        },
        e_2: {
          effect_name: "Designed Luck",
          description:
            "Increases the odds of other Tripod talents within this skill activating by 20%. Talents that rely on number of Floating Cards detonated will default to 20% chance.",
          icon: ""
        }
      }
    },
    s_16: {
      skill_name: "Dark Resurrection",
      cd: "30",
      description:
        "Throw a card at the indicated location and summon a demon that deals damage for 3s. When the deck effect is triggered, add an effect",
      additional_effects: ["Neutralization [Medium]"],
      type: ["Point"],
      time: [""],
      icon: "bOzYkDi.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Sleek Motion",
          description: "Attack speed increases by 15%",
          icon: "9VyE0qU.png"
        },
        e_2: {
          effect_name: "Piercing Strike",
          description: "Ignores 30% of enemy’s magic defense",
          icon: ""
        },
        e_3: {
          effect_name: "Mental Fortification",
          description: "Mana Consumption reduced by 50%",
          icon: "2RbMnoo.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Quickdraw",
          description: "10% chance to draw a Tarot card on last hit",
          icon: "qjh8nzR.png"
        },
        e_2: {
          effect_name: "Fatal Card",
          description:
            "Increases critical chance by 10% to 60% depending on Floating Cards",
          icon: "qp8CE16.png"
        },
        e_3: {
          effect_name: "Intense Card",
          description:
            "Increases damage by 10% to 40% depending on Floating Cards",
          icon: "5yIY8l5.png"
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Fear of Death",
          description:
            "Causes enemies hit by the last attack to be poisoned for 3s and reduces casting animation time for this skill",
          icon: ""
        },
        e_2: {
          effect_name: "Anger Strike",
          description:
            "No longer inflicts Fear. 100% increased critical damage and last attack strikes the ground with 100% increased damage",
          icon: ""
        }
      }
    },
    s_17: {
      skill_name: "Secret Garden",
      cd: "8",
      description:
        "Instantly deals damage to nearby enemies and deals additional damage to enemies by adding a stack of Floating Card. When the stack effect is on, add an effect",
      additional_effects: ["Back Attack"],
      type: ["Tap"],
      time: [""],
      icon: "WkPIjm2.png",
      tripod_lvl1: {
        e_1: {
          effect_name: "Quick Preparation",
          description: "Cooldown reduced by 2s",
          icon: "DXzNTSi.png"
        },
        e_2: {
          effect_name: "Mental Fortification",
          description: "Mana consumption reduced by 50%",
          icon: "2RbMnoo.png"
        },
        e_3: {
          effect_name: "Sharp Strike",
          description: "Increases critical hit rate by 20%",
          icon: "GjqRFi1.png"
        }
      },
      tripod_lvl2: {
        e_1: {
          effect_name: "Perfect Secret",
          description: "40% additional damage to enemies with 4 card stacks",
          icon: ""
        },
        e_2: {
          effect_name: "Down Attack",
          description:
            "Floating Cards bonus damage reduced by 30%, however knocks down enemies if they have Floating Cards stacks",
          icon: ""
        },
        e_3: {
          effect_name: "Darkness Garden",
          description: "Increases critical damage by 100%",
          icon: ""
        }
      },
      tripod_lvl3: {
        e_1: {
          effect_name: "Secret Chance",
          description: "Increases Floating Cards detonation damage by 50%",
          icon: ""
        },
        e_2: {
          effect_name: "Trained Performance",
          description: "Attack range increased by 2 meter",
          icon: ""
        }
      }
    },
    ult: {
      skill_name: "Prismatic Mirror",
      cd: "300",
      description: "Costs 1 Piece of Chaos",
      additional_effects: ["Neutralization [Low]", " Back Attack"],
      type: ["Point"],
      time: [""],
      icon: "zBbx1Er.png"
    }
  }
};
