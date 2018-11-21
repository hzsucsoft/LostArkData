module.exports = {
	"warlord": {
		"s_1": {
			"skill_name": "Sharp Spear",
			"cd": "8",
			"description": "Strongly stab forward with the spear to inflict x damage ",
			"additional_effects": "Incapacitate [Low],Back Attack",
			"time": "",
			"icon": "TbUnNwV.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Decreases skill cooldown by 2s   ",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Damage increased",
					"description": "Increases damage by 15% ",
					"icon": "DI0jbqj.png"
				},
				"e_3": {
					"effect_name": "Attack speed",
					"description": "Increase attack speed by 20% ",
					"icon": "9VyE0qU.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Piercing",
					"description": "On hit, decrease target`s Defense by 20% for 5s, and inflict Bleed status ",
					"icon": "ktJIUvL.png"
				},
				"e_2": {
					"effect_name": "Vulnerable Target",
					"description": "Damage is increased by 60% when used against a target under crowd control effects ",
					"icon": "HWuM5x7.png"
				},
				"e_3": {
					"effect_name": "Multi-Strike",
					"description": "Stabs your spear three times in front of you, but the damage of each strike is decreased by 50% ",
					"icon": "SPgHuhl.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Concentrated Strike",
					"description": "This skill can be charged multiple times. Each charge level adds extra attacks that deal an additional 50%, 100%, or 250% damage. Charging the skill increases its cooldown by 16 seconds ",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "Improved Stabbing",
					"description": "Increases the number of attacks by 1. The damage dealt is increased by 50 ",
					"icon": "32F9lxY.png"
				}
			},
			"type": "Tap"
		},
		"s_2": {
			"skill_name": "Rising Spear",
			"cd": "12",
			"description": "Strikes a spear into the ground, dealing [ ] damage. Pull out the spear to lift enemies in front of you",
			"additional_effects": ["Incapacitate [medium]", "Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "MrAZpAV.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Defense Preparation",
					"description": "Successful hits grant a 20% damage reduction bonus for 4 seconds",
					"icon": "SfUebeR.png"
				},
				"e_2": {
					"effect_name": "Attack speed",
					"description": "Increases attack speed by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Damage increased",
					"description": "Increases damage done by 10%",
					"icon": "DI0jbqj.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Backstep Bombardment",
					"description": "Performs a bombardment instead of an upward strike, which pushes the player backwards. The bombardment deals an additional 30% damage and lifts enemies",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Way of Fire",
					"description": "Immediately fires a launcher at lifted enemies and burns them",
					"icon": "cXMAUIN.png"
				},
				"e_3": {
					"effect_name": "Ground Collapsing",
					"description": "Immediately fires a launcher after the upward strike and damages enemies for an additional 40%. Decreases movement speed by 40% instead of lifting your enemies",
					"icon": "C42y0cZ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Toughness",
					"description": "The caster becomes invulnerable to crowd control effects while performing the skill",
					"icon": "6vzVrvN.png"
				},
				"e_2": {
					"effect_name": "Spot Weakness",
					"description": "Reduces attack speed, but the area of effect is increased by 30%. Damage is increased by 80% and knocks back enemies. Skill cooldown is increased by 2 seconds",
					"icon": "nws09aw.png"
				}
			}
		},
		"s_3": {
			"skill_name": "Fire Bullet",
			"cd": "10",
			"description": "Fires the cannon attached to your weapon, damaging an enemy within short range  ",
			"additional_effects": "Incapacitate [medium],Back Attack",
			"time": "",
			"icon": "4wX9VGX.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Armor",
					"description": "Gain a 20%  damage reduction bonus while performing the skill     ",
					"icon": "SfUebeR.png"
				},
				"e_2": {
					"effect_name": "Lucky Chance",
					"description": "Successful hits have a 50%  chance to reduce the skill cooldown by 4 seconds     ",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Mind Enhancement",
					"description": "Decrease MP consumption by 50%      ",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Destruction",
					"description": "Increases destruction level by 1  ",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Flammable",
					"description": "Burns your target  ",
					"icon": "cXMAUIN.png"
				},
				"e_3": {
					"effect_name": "Damage increased",
					"description": "Increases damage by 25%   ",
					"icon": "hbiDGfp.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Aggressive Opportunity",
					"description": "Fires the cannon twice.  Each shot deals an additional 50%. Additionally, your target is pushed back further  ",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Concentrated Shelling",
					"description": "Reduces attack speed but increases damage dealt by 80%. Also increases the area of effect by 30%  and cooldown by 2 seconds  ",
					"icon": "bjbQ0Fr.png"
				}
			},
			"type": "Tap"
		},
		"s_4": {
			"skill_name": "Shield Slam",
			"cd": "16",
			"description": "Slams your shield into an enemy, dealing [] damage. Can be used a second time [ ] immediately afterwards",
			"additional_effects": ["Incapacitate [high]"],
			"type": ["Combo"],
			"time": [""],
			"icon": "DwB8YCC.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Unstoppable",
					"description": "Successful hits have a 20% chance to reset the cooldown",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Defensive Preparation",
					"description": "Landing two successful hits grants a 20% damage reduction bonus for 5 seconds",
					"icon": "SfUebeR.png"
				},
				"e_3": {
					"effect_name": "Attack speed",
					"description": "Increase attack speed by 15%",
					"icon": "9VyE0qU.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Gear Destruction",
					"description": "Landing two successful hits reduces the enemy’s attack power and defense by 20% for 5 seconds",
					"icon": "2JPSkpi.png"
				},
				"e_2": {
					"effect_name": "Superior Mobility",
					"description": "Increases the skill range of the first hit by 1m",
					"icon": "DLz43Zq.png"
				},
				"e_3": {
					"effect_name": "Spot Weakness",
					"description": "Increases damage done any target with the Invulnerable status by 60%",
					"icon": "a5qp6Tt.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Extra Hit",
					"description": "Increases the number of hits by 2. The additional hits deal 20% and 60% extra damage",
					"icon": "hXBL5OK.png"
				},
				"e_2": {
					"effect_name": "Flashbang",
					"description": "You can use the shield bash three times, and damage is increased by 30%. It stuns enemy on the last hit",
					"icon": "dgg9J9i.png"
				}
			}
		},
		"s_5": {
			"skill_name": "Bash",
			"cd": "10",
			"description": "Strikes an enemy with your shield for [ ] and stuns it for 3 seconds. ",
			"additional_effects": "Incapacitate [Mid-High]",
			"time": "",
			"icon": "eemdICW.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Increases damage by 15%    ",
					"icon": "DI0jbqj.png"
				},
				"e_2": {
					"effect_name": "Attack speed",
					"description": "Increase attack speed by 20%    ",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Blitz Bash",
					"description": "25%  chance to inflict 50%  more damage to your target   ",
					"icon": "HR5NqtN.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Attack Preparation",
					"description": "Successful hits grant a 25%  damage increase buff for 5 seconds   ",
					"icon": "AFgfZrT.png"
				},
				"e_2": {
					"effect_name": "Incapacitate",
					"description": "Increases incapacitate point by 20%    ",
					"icon": "cimRspI.png"
				},
				"e_3": {
					"effect_name": "Armor Destruction",
					"description": "Successful hits reduce the enemy’s defense by 30%  for 6 seconds   ",
					"icon": "ktJIUvL.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Strike",
					"description": "Increases the area of effect by 30%    ",
					"icon": "bjbQ0Fr.png"
				},
				"e_2": {
					"effect_name": "Echo",
					"description": "Increases the stun effect duration by 2 seconds   ",
					"icon": "0BMcHYE.png"
				}
			},
			"type": "Tap"
		},
		"s_6": {
			"skill_name": "Dash Upper Fire",
			"cd": "16",
			"description": "Rushes to a foe and lifts the target, dealing [ ] damage, then follows with a combo attack, firing a cannon that deals [] damage. Inflicts an additional [] damage to targets in the air",
			"additional_effects": ["Incapacitate [Mid-High]", " Destruction [Level 1]", " Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "WZpkynC.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Decreases skill cooldown by 3 seconds",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Defensive Preparation",
					"description": "Successful hits grant a 20% damage reduction bonus for 4 seconds",
					"icon": "SfUebeR.png"
				},
				"e_3": {
					"effect_name": "Offensive Preparation",
					"description": "Successful hits grant a 15% damage bonus for 4 seconds.",
					"icon": "akITDDZ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Increases the cannon’s damage by 50%.",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Drillmaster",
					"description": "Increases the cannon’s area of effect by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_3": {
					"effect_name": "Penetration",
					"description": "The cannon ignores 50% of a foe’s defense",
					"icon": "ktJIUvL.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill",
					"icon": "6vzVrvN.png"
				},
				"e_2": {
					"effect_name": "Attack speed",
					"description": "Increases attack speed by 20%",
					"icon": "JMU1YLm.png"
				}
			}
		},
		"s_7": {
			"skill_name": "Leap attack",
			"cd": "16",
			"description": "Leap high in the air towards a target location, and inflict [ ] damage to nearby foes upon landing ",
			"additional_effects": "Incapacitate [medium]",
			"time": "",
			"icon": "11ue7yB.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Increases damage by 10%   ",
					"icon": "DI0jbqj.png"
				},
				"e_2": {
					"effect_name": "Drill Master",
					"description": "Increases the area of effect by 15% ",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Superior Mobility",
					"description": "Increases the skill range by 2m ",
					"icon": "frf2qov.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Opportunity",
					"description": "Changes the attack into a combo skill. After landing, you can fire your cannon at your target. This damage of this combo attack is increased by 50%. The skill also knocks the target back and pushes the caster backwards ",
					"icon": "cD0keDA.png"
				},
				"e_2": {
					"effect_name": "Lesser Impact",
					"description": "Changes the attack into a combo skill. The skill damage is decreased by 50%, but you can leap into the air one more time ",
					"icon": "KG9Q6Np.png"
				},
				"e_3": {
					"effect_name": "Weakening Mobility",
					"description": "Successful hits reduce your foes’ movement speed by 40% for 3 seconds ",
					"icon": "C42y0cZ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Confident Team Member",
					"description": "Grants party members at the target location a 50% damage reduction buff for 6 seconds ",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Shockwave",
					"description": "Successful hits knock nearby targets down and lower their defense by 50% for 5 seconds ",
					"icon": ""
				}
			},
			"type": "Point"
		},
		"s_8": {
			"skill_name": "Shield Slam",
			"cd": "12",
			"description": "Slams your shield down and deals [] damage to nearby enemies. Decreases enemies movement and attack speed by 20%  for 4 seconds   ",
			"additional_effects": "Incapacitate [medium]",
			"time": "",
			"icon": "LEtHD1y.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Decreases skill cooldown by 3 seconds   ",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Attack speed",
					"description": "Increases attack speed by 10%    ",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Eruption",
					"description": "Adds a 30%  chance to stun the target for 2 seconds   ",
					"icon": "ZkTpIPx.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Drill Master",
					"description": "Increases the area of effect by 20%    ",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Earthquake",
					"description": "Nearby targets are inflicted by a 40%  movement speed and 20%  attack speed penalty   ",
					"icon": "2JPSkpi.png"
				},
				"e_3": {
					"effect_name": "Defensive Preparation ",
					"description": "Successful hits grant a 15%  damage reduction bonus for 10 seconds   ",
					"icon": "oVtc2zd.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Second Wave",
					"description": "The skill turns into chain skill that can be repeated immediately. The The second hit’s damage is increased by 100%    ",
					"icon": "Bybk6tw.png"
				},
				"e_2": {
					"effect_name": "Assault",
					"description": "The caster can leap through the air to a target location within 5m, and the skill damage is increased by 50%    ",
					"icon": "FpXyekj.png"
				}
			},
			"type": "Tap"
		},
		"s_9": {
			"skill_name": "Chain hook",
			"cd": "24",
			"description": "Throws a chain hook to your target and deals [] damage, then pulls your target towards you and deals [] damage",
			"additional_effects": ["Incapacitate [low]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "SG0dbgp.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Decreases skill cooldown by 4 seconds",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Mind Enhancement",
					"description": "Decrease MP consumption by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Damage increased",
					"description": "Increases damage by 10%",
					"icon": "DI0jbqj.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Sharpened Chain Hook",
					"description": "Inflicts bleeding on the target for 5 seconds",
					"icon": "zHwYyaV.png"
				},
				"e_2": {
					"effect_name": "Toughness ",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill",
					"icon": "a7DgAOn.png"
				},
				"e_3": {
					"effect_name": "Offensive Preparation",
					"description": "Successful hits grant a 20% damage increase for 6 seconds",
					"icon": "AFgfZrT.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Drill Master",
					"description": "Increases the area of effect by 20%",
					"icon": "bjbQ0Fr.png"
				},
				"e_2": {
					"effect_name": "Taunt",
					"description": "A successful hit taunts a monster that has immunity of the crowd control effects for 2 seconds. Upper grade [seed grade] monsters cannot be taunted again for a certain duration of time",
					"icon": "nws09aw.png"
				}
			}
		},
		"s_10": {
			"skill_name": "Shield charge",
			"cd": "16",
			"description": "The caster raises their shield and charges forward. Each hit causes [ ] damage to foes and knocks them back ",
			"additional_effects": "Incapacitate [high], Immune [stiffness]",
			"type": "Hold",
			"time": " 2 sec",
			"icon": "R0rX5GV.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Armor",
					"description": "Gain a 30% damage reduction bonus while you are performing the skill ",
					"icon": "SfUebeR.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Decreases skill cooldown by 3 seconds ",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Damage increased",
					"description": "Increases damage by 15% ",
					"icon": "DI0jbqj.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Drill Master",
					"description": "Increases the area of effect by 20% ",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill ",
					"icon": "a7DgAOn.png"
				},
				"e_3": {
					"effect_name": "Swift Step",
					"description": "Increases the charge speed by 20% ",
					"icon": "LmuvcKG.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Unfinished Business",
					"description": "Thrust a spear after the shield charge, dealing 40% additional damage. The target is lifted into the air ",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "Destructive Weapon",
					"description": "Each hit grant a 10% damage bonus for 2 seconds. This bonus stacks up to 60% ",
					"icon": ""
				}
			}
		},
		"s_11": {
			"skill_name": "Charge Stinger",
			"cd": "30",
			"description": "",
			"additional_effects": ["Incapacitate [Mid-High]", " Penetration  [level 1]", " Back Attack"],
			"type": ["Charge"],
			"time": [""],
			"icon": "5GxiOTq.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Wound",
					"description": "A critical hit causes bleeding on your target.",
					"icon": "1PceV71.png"
				},
				"e_2": {
					"effect_name": "Devastating Strike",
					"description": "Reduces the defense of targets with the Invulnerable status by 15% for 3 seconds",
					"icon": "QEd5bZU.png"
				},
				"e_3": {
					"effect_name": "Improved Armor",
					"description": "Gain a 20% damage reduction bonus while you are performing the skill",
					"icon": "SfUebeR.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Improved Penetration",
					"description": "Increases the penetration level by 1",
					"icon": "NdeJndm.png"
				},
				"e_2": {
					"effect_name": "Improved Charging",
					"description": "Each level of the charging gauge increases the damage dealt by 10%",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Toughness ",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill",
					"icon": "a7DgAOn.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Lightning Charge",
					"description": "The charging level starts at 2, and overcharging causes an electric shock to your target for 4 seconds",
					"icon": "JeryhMy.png"
				},
				"e_2": {
					"effect_name": "The Last Charge",
					"description": "Increases the maximum charging level by 1. At the maximum level, you travel faster, further, and deal 30% increased damage, followed by an artillery hit that also deals 30% increased damage",
					"icon": "Bybk6tw.png"
				}
			}
		},
		"s_12": {
			"skill_name": "Outcry",
			"cd": "30",
			"description": "Inflicts [ ] damage to a maximum of 12 enemies within 8m. This also taunts monsters for 2 seconds",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "2Qdyzfj.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Decreases skill cooldown by 3 seconds",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Drill Master",
					"description": "Increases the area of effect by 25%.",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Defense Preparation",
					"description": "Grants a 30% damage reduction bonus for 4 seconds",
					"icon": "SfUebeR.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Intimidation",
					"description": "Reduces the defense of targets struck by 30% for 4 seconds",
					"icon": "ktJIUvL.png"
				},
				"e_2": {
					"effect_name": "Natural Selection",
					"description": "Increases the damage dealt on lower grade monsters by 200%",
					"icon": "FtChNZ3.png"
				},
				"e_3": {
					"effect_name": "Protective Shield",
					"description": "Creates a protective shield for 3 seconds which absorbs up to 30% of the caster’s maximum health worth of damage",
					"icon": ""
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Morale Boost",
					"description": "Grants a 30% movement speed and attack power bonus for 4 seconds on you and party members within the skill range",
					"icon": "nGBwXyL.png"
				},
				"e_2": {
					"effect_name": "Shout",
					"description": "Reduces the movement speed and attack power of inflicted enemies by 30% for 4 seconds",
					"icon": "W94iICa.png"
				}
			}
		},
		"s_13": {
			"skill_name": "SPEAR SHOT",
			"cd": "16",
			"description": "Stab the spear that deals [ ] damage, charges fire power on the spear, and pulling the enemy []. Once the caster reaches max charge level, the caster shoots [ ] the enemy and knock the enemy back ",
			"additional_effects": "Incapacitate [low], Penetration level 1, backattack",
			"time": "",
			"icon": "bU9RiX7.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 3 seconds. ",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Swift Movement",
					"description": "Increase attack speed by 15%. ",
					"icon": "Tripod_Tier_1_6.png"
				},
				"e_3": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
					"icon": "Tripod_Tier_1_23.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Improved Strike",
					"description": "Increases damage done by 25%. ",
					"icon": "45.png"
				},
				"e_2": {
					"effect_name": "Spot Weakness",
					"description": "Increases the damage dealt to targets with the Invulnerable status by 40%. ",
					"icon": "36.png"
				},
				"e_3": {
					"effect_name": "Improved Penetration",
					"description": "Increases the penetration level by 1. ",
					"icon": "26.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Explosive Spear",
					"description": "Rushes 4m in front of you and causes an explosion that deals 40% increased damage. ",
					"icon": "19.png"
				},
				"e_2": {
					"effect_name": "Explosion",
					"description": "This skill can be charged multiple times. Second and Third charge levels add extra attacks that deal 25% and 105% increased damage, but first charge level lowers damage taken by 20% ",
					"icon": "38.png"
				}
			}
		},
		"s_14": {
			"skill_name": "Counter Spear",
			"cd": "24",
			"description": "Raise your shield to defend yourself from any harmful attack in front of you for 2 seconds. Absorbs damage by an amount equal to your maximum health. Successfully defending for 1 second grants a counter attack on the enemy which deals [] damage and knocks them back ",
			"additional_effects": "Incapacitate [Mid-High], Immune [stiffness], Penetration  [level 1], Back Attack",
			"type": "Tap",
			"time": "",
			"icon": "zoJM0Cu.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Offensive Preparation",
					"description": "A successful counter hit grants a 15% damage increase for 4 seconds. ",
					"icon": "Tripod_Tier_1_50.png"
				},
				"e_2": {
					"effect_name": "Improved Armor",
					"description": "Gain a 30% damage reduction bonus while you are performing the skill. ",
					"icon": "Tripod_Tier_1_25.png"
				},
				"e_3": {
					"effect_name": "Incapacitate",
					"description": "A successful counter hit increases incapacitate point by 10%. ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 12 seconds and but reduces the damage dealt by 50%. ",
					"icon": "Tripod_Tier_2_56.png"
				},
				"e_2": {
					"effect_name": "Improved Strike",
					"description": "Increases damage by 15%. ",
					"icon": "45.png"
				},
				"e_3": {
					"effect_name": "Spot Weakness",
					"description": "Increases the damage dealt to targets with the Invulnerable status by 40%. ",
					"icon": "36.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Bombardment",
					"description": "A successful counter hit grants an extra artillery hit which deals 50% increased damage on the target. ",
					"icon": "43.png"
				},
				"e_2": {
					"effect_name": "Lightning Spear",
					"description": "A successful counter hit grants an extra attack with the spear. The attack deals magical damage instead of physical and knocks the target down. The target is also inflicted with an electric shock for 4 seconds. ",
					"icon": "14.png"
				}
			}
		},
		"s_15": {
			"skill_name": "Strength of Nellasia",
			"cd": "60",
			"description": "Grants all party members within 22m a 15% damage reduction buff for 12 seconds   ",
			"additional_effects": "",
			"type": "Tap",
			"time": "",
			"icon": "dn2HzSe.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Charge speed",
					"description": "Increases the charge speed by 20%   ",
					"icon": "Tripod_Tier_1_11.png"
				},
				"e_2": {
					"effect_name": "Mind Enhancement",
					"description": "Decrease MP consumption by 50%   ",
					"icon": "Tripod_Tier_1_34.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Decreases skill cooldown by 10 seconds   ",
					"icon": "Tripod_Tier_1_56.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Leadership",
					"description": "Increases the attack power of all party members by 20% for 6 seconds   ",
					"icon": "45.png"
				},
				"e_2": {
					"effect_name": "Cleanse",
					"description": "Cleanses all party members, removing one harmful effect   ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Prolonged Effect",
					"description": "Increases the duration of the effect by 4 seconds   ",
					"icon": "29.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Improved Effect",
					"description": "Increases the damage reduction by an additional 15%   ",
					"icon": "12.png"
				},
				"e_2": {
					"effect_name": "Survivability ",
					"description": "Creates a protective shield on all party members which absorbs damage equal to 15% of their maximum health. The shield lasts for 5 seconds   ",
					"icon": "18.png"
				}
			}
		},
		"s_16": {
			"skill_name": "Thunderbolt of Guardian",
			"cd": "20",
			"description": "Hurls lightning from the sky, damaging enemies within 5m for [ ] and shocking them for 3  seconds.       ",
			"additional_effects": "Incapacitate [mid-high]",
			"time": "",
			"icon": "ZETWIG7.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Controlling Mana",
					"description": "Grants a 20%  chance to ignore mana consumption.       ",
					"icon": "Tripod_Tier_1_34.png"
				},
				"e_2": {
					"effect_name": "Unstoppable",
					"description": "Successful hits have a 20%  chance to reset the cooldown.       ",
					"icon": "Tripod_Tier_1_51.png"
				},
				"e_3": {
					"effect_name": "Lucky Strike",
					"description": "Adds an extra lightning hit which deals 80%  of the normal damage.       ",
					"icon": "Tripod_Tier_1_17.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill.       ",
					"icon": "60.png"
				},
				"e_2": {
					"effect_name": "Improved Strike",
					"description": "Increases damage by 25%.       ",
					"icon": "45.png"
				},
				"e_3": {
					"effect_name": "Drillmaster",
					"description": "Increases the area of effect by 20%.       ",
					"icon": "49.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Massive Thunderbolt",
					"description": "Thunderbolts stretch out to four directions after hitting the ground, dealing 50%  increased damage.       ",
					"icon": "31.png"
				},
				"e_2": {
					"effect_name": "Electric Shock",
					"description": "Increases the duration of the electric shock by 3 seconds.       ",
					"icon": "27.png"
				}
			},
			"type": "Tap"
		},
		"s_17": {
			"skill_name": "Burst Cannon",
			"cd": "30",
			"description": "Fires your cannon in front of you. When the burst gauge is fully charged, it deals [] damage your target and knocks them down. When not fully charged, it deals [] damage and pushes the target back.  ",
			"additional_effects": "incapacitate [extreme-high], destruction level 1, back attack",
			"type": "Tap",
			"time": "",
			"icon": "IFv21uC.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Destruction",
					"description": "A successful timing on the perfect zone increases the destruction level by 1.  ",
					"icon": "Tripod_Tier_1_22.png"
				},
				"e_2": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 5 seconds.  ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_3": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill.  ",
					"icon": "Tripod_Tier_1_23.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Drill Master",
					"description": "Increases the area of effect by 15%.  ",
					"icon": "49.png"
				},
				"e_2": {
					"effect_name": "Improved Strike",
					"description": "Increases damage by 30%.  ",
					"icon": "45.png"
				},
				"e_3": {
					"effect_name": "Incapacitate",
					"description": "Increases the incapacitate point by 20%.  ",
					"icon": "31.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Rotating Bombardment",
					"description": "Fires the cannon four times around you. Each shot deals 20% increased damage.  ",
					"icon": "19.png"
				},
				"e_2": {
					"effect_name": "Concentrated Strike",
					"description": "Fires your cannon four times into the front. Each shots deals 50% increased damage.  ",
					"icon": "35.png"
				}
			}
		}
	},
	"berserker": {
		"s_1": {
			"skill_name": "Double Slash",
			"cd": "8",
			"description": "Deals 2 hit with a sword. Damage bonus for an attack in the back.",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "Pu8MrKN.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 1s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increases by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Sharp Blow",
					"description": "Critical damage increases by 50%",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Ranged Blow",
					"description": "Attack distance increases by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Dull Day",
					"description": "Increases damage done to enemies by 60%, but increases cooldown by 4s",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Sharp Blade",
					"description": "The last attack is always a critical attack",
					"icon": "YlRQ5P1.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Mangle",
					"description": "Increases the attack frequency from 2 to 6 and increases the damage done to enemies by 60%",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Cross",
					"description": "The attack is changed into the form of a cross. Damage increases by 100%",
					"icon": "Iv7fFBo.png"
				}
			}
		},
		"s_2": {
			"skill_name": "Assault Blade",
			"cd": "8",
			"description": "Deals damage with a sword. Damage bonus for an attack in the back",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "zABnpjM.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increases by 10%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Piercing Strike",
					"description": "Ignores 30% of the target's defense",
					"icon": "QEd5bZU.png"
				},
				"e_3": {
					"effect_name": "Charmer",
					"description": "Increases the attack range by 10% and increases the stagger time of hit enemies by 0.3s",
					"icon": "HR5NqtN.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Concentration",
					"description": "Anger gain is increased by 100%",
					"icon": "UnhMZ84.png"
				},
				"e_2": {
					"effect_name": "Strengthen Cutting",
					"description": "Skill is given Level 1 Cut",
					"icon": "W3lPRkN.png"
				},
				"e_3": {
					"effect_name": "Internal Bleeding",
					"description": "When a single target is hit, it will bleed for 5s",
					"icon": "Ct0bUxo.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Cutting",
					"description": "The skill deals an additional hit, for a total of 4 hits. Increases damage done to enemies by 40%",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Counter-Attack",
					"description": "The first attack deals 80% more damage, and after the first strike, the sword can be swung again causing 100% damage",
					"icon": "dgg9J9i.png"
				}
			}
		},
		"s_3": {
			"skill_name": "Hazardous Crime",
			"cd": "16",
			"description": "Deals damage with his sword, inflicting additional damage to enemies in the air and crushing them to the ground",
			"additional_effects": ["Neutralization [Medium]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "p9pS9bS.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Muscle Cramps",
					"description": "increased Knockdown duration by 0.5s",
					"icon": "BtWx8s1.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Reduces the cooldown time by 4s, but mana consumption increases by 50%",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Sharp Strike",
					"description": "Increases critical hit rate by 15%",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Identified Weakness",
					"description": "Increases damage done to immune enemies by 30%",
					"icon": "a5qp6Tt.png"
				},
				"e_2": {
					"effect_name": "Flame Strike",
					"description": "Inflict 15% additional damage per hit, and increase rage gain by 50%",
					"icon": "UnhMZ84.png"
				},
				"e_3": {
					"effect_name": "Strike Sense",
					"description": "Upon the first hit, critical hit rate increases by 20% for 3s",
					"icon": "YlRQ5P1.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Flame Rush",
					"description": "The last hit is modified to 4 hits in the air, and the damage done increases by 35% in total",
					"icon": "Iv7fFBo.png"
				},
				"e_2": {
					"effect_name": "Red Lightning",
					"description": "During ascent, the attack area increases to 360 degrees. Damage done increases by 55%",
					"icon": "32F9lxY.png"
				}
			}
		},
		"s_4": {
			"skill_name": "Finishing Strike",
			"cd": "30",
			"description": "Deals huge damage with his sword",
			"additional_effects": ["Slicing [level 2]", " Neutralization [Mid-High]", " Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "Q6dmZHI.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Strength",
					"description": "During casting, gain immunity to CC",
					"icon": "lyseDv0.png"
				},
				"e_2": {
					"effect_name": "Internal Bleeding",
					"description": "Applies a 5s bleed on hit",
					"icon": "1PceV71.png"
				},
				"e_3": {
					"effect_name": "Enhanced Blow",
					"description": "Increases attack time by 0.5s but increases your damage done by 20%",
					"icon": "DI0jbqj.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Finish Him",
					"description": "Damage to enemies with 25% or health is increased by 30%",
					"icon": "cimRspI.png"
				},
				"e_2": {
					"effect_name": "Muscle Cramps",
					"description": "The enemy's fallen state is increased by 1s",
					"icon": "POnpICE.png"
				},
				"e_3": {
					"effect_name": "Internal Bleeding",
					"description": "If this attack lands and the enemy survives, the damage of the next attack is increased by 30%",
					"icon": "2JPSkpi.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Shockwave",
					"description": "A quake rises after the attack and inflicts an additional 20% damage twice. Additionally, if your health is below 30%, additional damage will increase by (to?) 50%",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Confirm Kill",
					"description": "Attack style is changed. The second attack deals 80% damage to enemies, and 25% further increased damage to enemies in a fallen state.",
					"icon": "Bybk6tw.png"
				}
			}
		},
		"s_5": {
			"skill_name": "Shoulder Charge",
			"cd": "12",
			"description": "Charge forward, inflicting damage to enemies on the way",
			"additional_effects": ["Back Attack", " Immune [stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "BL7pQ7a.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Reduces cooldown by 0.6s per hit, for a maximum of 3s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 20%",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Excellent Mobility",
					"description": "Dash distance increases by 2m",
					"icon": "frf2qov.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Acceleration",
					"description": "Increases your movement speed by 30% for 3s",
					"icon": "LmuvcKG.png"
				},
				"e_2": {
					"effect_name": "Bravery",
					"description": "Damage received is reduced by 20% for 6s after the rush",
					"icon": "oVtc2zd.png"
				},
				"e_3": {
					"effect_name": "Enhanced Strike",
					"description": "Damage to enemies is increased by 50%",
					"icon": "hbiDGfp.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Continuous Rush",
					"description": "Attack style is changed. The skill has two charges, but is increased by 6s",
					"icon": "Iv7fFBo.png"
				},
				"e_2": {
					"effect_name": "Crushing Wall",
					"description": "Attack Range increases by 15% and dash distance increased by 2m. Damage is increased by 100% and knocks enemies down",
					"icon": "A2uWtO2.png"
				}
			}
		},
		"s_6": {
			"skill_name": "Whirlwind",
			"cd": "24",
			"description": "Spin with your sword to deals damage over 4 seconds.",
			"additional_effects": ["Neutralization [Medium]", " Back Attack"],
			"type": ["Hold"],
			"time": [" 4 sec"],
			"icon": "BybShK8.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Lightfoot",
					"description": "Increases movement speed by 10% while using the skill",
					"icon": "ZYlrZ9I.png"
				},
				"e_2": {
					"effect_name": "Warrior's Valor",
					"description": "Hold time increases by 1s",
					"icon": "U2xs2Ib.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 3s",
					"icon": "DXzNTSi.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Quick Hit",
					"description": "Critical Hit rate increases by 30%",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Chain Wheel",
					"description": "As you continually attack an enemy, your damage will increase by 6% (per strike), up to 60% total",
					"icon": "TmNqtCH.png"
				},
				"e_3": {
					"effect_name": "Cracked Blade",
					"description": "Increases attack range of the outer edge of the whirlwind by 20%. Enemies within the outer edge take an additional 60% damage",
					"icon": "hbiDGfp.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Vacuum Cut",
					"description": "Attack range is increased by 20%, attack rate is doubled, but damage is reduced by 30%",
					"icon": "bjbQ0Fr.png"
				},
				"e_2": {
					"effect_name": "Hurricane",
					"description": "A whirlwind is created when the skill is released in the perfect zone. The whirlwind inflicts 30% damage if it strikes an enemy",
					"icon": "JQTrd8y.png"
				}
			}
		},
		"s_7": {
			"skill_name": "Power Break",
			"cd": "20",
			"description": "Concentrate energy into the sword to deal damage and knockback enemies",
			"additional_effects": ["Slicing [level 1]", " Neutralization [Low]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "YIwTdgp.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 2s.",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increased by 10%",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Mental Fortification",
					"description": "Mana cost reduced by 50%",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Ranged Blow",
					"description": "Attack range increased by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Enhanced Strike",
					"description": "Damage to enemies increased by 25%",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Defenseless Target",
					"description": "Increases damage done to disabled targets by 40%",
					"icon": "HWuM5x7.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Power Accumulation",
					"description": "The attack style is changed to the charge type. Each charge level increases the damage done by 10%, 50%, and 100%",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "Swirl",
					"description": "Use centrifugal force to attack enemies in 360 degrees. Increases damage done by 30%",
					"icon": "Iv7fFBo.png"
				}
			}
		},
		"s_8": {
			"skill_name": "Tempest Slash",
			"cd": "18",
			"description": "Charge forward and swing your sword to deal damage and lift your enemies into the air, and deal additional 3 hit",
			"additional_effects": ["Slicing [level 1]", " Neutralization [Medium]", " Back Attack", " Immune [stiffness]"],
			"type": ["Combo"],
			"time": [""],
			"icon": "Wt861Tv.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Concentration",
					"description": "Anger gain is increased by 50%",
					"icon": "11MLrbC.png"
				},
				"e_2": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increased by 10%",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 2s",
					"icon": "DXzNTSi.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Quick Hit",
					"description": "Increases Critical Hit Rate by 30%",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Enhanced Strike",
					"description": "Damage to enemies is increased by 25%",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Heavy Strike",
					"description": "Final Strike deals an additional 50% damage to CC immune enemies",
					"icon": "eajjkDJ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Stir",
					"description": "Forward movement on the first strike is removed. The second strike is changed into a rotating air attack that strikes 3 times and deals 50% more damage",
					"icon": "Iv7fFBo.png"
				},
				"e_2": {
					"effect_name": "Storm Cut",
					"description": "The attack range is increased by 20%, and the final strike is changed to a spinning attack that hits enemies behind you. Damage increases by 50%",
					"icon": "32F9lxY.png"
				}
			}
		},
		"s_9": {
			"skill_name": "Mountain Crash",
			"cd": "12",
			"description": "Powerful stomp, and decrease enemy movement speed by 60% for 4s",
			"additional_effects": ["Neutralization [Medium]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "uNqr3gr.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Concussion",
					"description": "Enemies hit take 10% additional damage from the caster for 5s",
					"icon": "VGqI5ff.png"
				},
				"e_3": {
					"effect_name": "Reinforce",
					"description": "Reduces movement speed by an additional 2s",
					"icon": "BtWx8s1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Enhanced Strike",
					"description": "Damage to enemies is increased by 30%",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_3": {
					"effect_name": "Persistent Tracking",
					"description": "Increases the movement speed reduction by 20%, and increases your movement speed by 15%",
					"icon": "C42y0cZ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Seismic Wave",
					"description": "Seismic waves are generated, which extend to 5m in succession. Additional strikes have 20% increased critical strike chance, and deal 80% more damage.",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Land Conflict",
					"description": "Creates an earthquake at the attack location that persists for 6s, dealing damage every second. Additionally, if you have less than 30% of your health, the earthquake lasts an additional 2s",
					"icon": "edATIP7.png"
				}
			}
		},
		"s_10": {
			"skill_name": "Diving Slash",
			"cd": "16",
			"description": "Jump and crush the enemies with his sword.",
			"additional_effects": ["Neutralization [Low]", " Back Attack"],
			"type": ["Point"],
			"time": [""],
			"icon": "DjCXR45.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Excellent Mobility",
					"description": "Travel distance increased by 2m",
					"icon": "frf2qov.png"
				},
				"e_2": {
					"effect_name": "Concentration",
					"description": "Anger gain increased by 50%",
					"icon": "11MLrbC.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 3s",
					"icon": "DXzNTSi.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Fast Movement",
					"description": "Increases movement speed by 30% for 3s",
					"icon": "LmuvcKG.png"
				},
				"e_2": {
					"effect_name": "Great Sword Again",
					"description": "No longer knocks downs enemies, but pulls and collects them in front of you. Additionally, increases attack speed by 20% for 3s",
					"icon": "Ntx7DAR.png"
				},
				"e_3": {
					"effect_name": "Muscle Training",
					"description": "Increases knockdown duration by 0.5s",
					"icon": "POnpICE.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Power Slash",
					"description": "Preparation (Wind Up) time is added, but damage done is increased by 200%",
					"icon": "FpXyekj.png"
				},
				"e_2": {
					"effect_name": "Sword Fragment",
					"description": "Detection will occur when hit, causing a 40% increase in impact and a 4s critical bleed",
					"icon": "P0yre5K.png"
				}
			}
		},
		"s_11": {
			"skill_name": "Hell Blade",
			"cd": "36",
			"description": "Slot your sword into the ground, enabling you to hold for up to 2.5s. In addition. By successfully perfect zone, deal additional damage and lift enemies into the air",
			"additional_effects": ["Neutralization [High]", " Back Attack", " Immune [stiffness]"],
			"type": ["Hold"],
			"time": [" 2.5 sec"],
			"icon": "jU0NlqU.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Enhanced Strike",
					"description": "Damage done increased by 10%",
					"icon": "DI0jbqj.png"
				},
				"e_2": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increased by 10%",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 4s",
					"icon": "DXzNTSi.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Fusion",
					"description": "Enemies hit by the final strike are burned, causing 20% more damage per second for 10s",
					"icon": "2JPSkpi.png"
				},
				"e_2": {
					"effect_name": "Identified Weakness",
					"description": "Increases damage done to cc immune enemies by 40%",
					"icon": "a5qp6Tt.png"
				},
				"e_3": {
					"effect_name": "Quick Hit",
					"description": "Increases Critical Hit Rate by 30%",
					"icon": "qp8CE16.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Lava Eruption",
					"description": "Increases the attack range by 60% and increases the sustained damage by 100%",
					"icon": "JQTrd8y.png"
				},
				"e_2": {
					"effect_name": "Blood Loss",
					"description": "Immediate jump to the desired position within 8m, it immediately inflicts a melee attack, and increases the damage of the ending attack by 100%",
					"icon": "32F9lxY.png"
				}
			}
		},
		"s_12": {
			"skill_name": "Chain Sword",
			"cd": "15",
			"description": "Deal a diagonal sword strike that sends the enemies in the air",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "1h5nwbe.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Hit",
					"description": "Critical Hit rate increased by 15% for 3s",
					"icon": "GjqRFi1.png"
				},
				"e_2": {
					"effect_name": "Mental Fortification",
					"description": "Mana consumption reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increased by 10%",
					"icon": "9VyE0qU.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Advance",
					"description": "Modifies the skill to dash 4m forward",
					"icon": "DLz43Zq.png"
				},
				"e_2": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill casting",
					"icon": "a7DgAOn.png"
				},
				"e_3": {
					"effect_name": "Wide Blow",
					"description": "Increases attack range by 20%",
					"icon": "SPgHuhl.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Reduces the cooldown by 7s, but reduces damage done by 50%",
					"icon": "mJ47SLb.png"
				},
				"e_2": {
					"effect_name": "Annihilate",
					"description": "The damage of the first attack is reduced by 50%, but adds a final strike that does 200% more damage",
					"icon": "Iv7fFBo.png"
				}
			}
		},
		"s_13": {
			"skill_name": "Wind Blade",
			"cd": "20",
			"description": "Swing your sword around while moving to deal damage",
			"additional_effects": ["Neutralization [Medium]", " Back Attack", " Immune [stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "sQikOWf.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Swift Movement",
					"description": "Increases movement speed by 15% for 5s",
					"icon": "ZYlrZ9I.png"
				},
				"e_2": {
					"effect_name": "Internal Bleeding",
					"description": "Applies 5s of bleeding",
					"icon": "1PceV71.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time reduced by 4s",
					"icon": "DXzNTSi.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Enhanced Strike",
					"description": "Damage done increased by 25%",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Quick Hit",
					"description": "Critical hit rate increased by 30%",
					"icon": "qp8CE16.png"
				},
				"e_3": {
					"effect_name": "Concentration",
					"description": "Anger gain increased by 100%",
					"icon": "UnhMZ84.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Squall",
					"description": "Modifies the attack style. Attack three times with forward momentum. Total damage increases by 60%",
					"icon": "Bybk6tw.png"
				},
				"e_2": {
					"effect_name": "Windswift",
					"description": "Swing forward with more forward momentum. Total damage increases by 30%",
					"icon": "Iv7fFBo.png"
				}
			}
		},
		"s_14": {
			"skill_name": "Maelstorm",
			"cd": "15",
			"description": "SStrongly strike downwards with your sword to deal damage, and pull the sword out of the ground to damage and pull the enemy towards you",
			"additional_effects": ["Neutralization [Medium]", " Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "gM8fPOG.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Sleek Motion",
					"description": "Increases attack speed by 10%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Mental Fortification",
					"description": "Mana Consumption reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Concentration",
					"description": "Anger gain increased by 50%",
					"icon": "11MLrbC.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill use.",
					"icon": "a7DgAOn.png"
				},
				"e_2": {
					"effect_name": "Enhanced Strike",
					"description": "Damage done increased by 25%",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Quick Hit",
					"description": "A successful second strike increases critical hit rate by 20% for 6s",
					"icon": "qp8CE16.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Flame Swirl",
					"description": "A delayed explosion occurs after the second strike, causing 40% additional damage and floating the target",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Depression",
					"description": "Increases attack range by 20% and increases skill damage by 30%. Stiffen time of the second strike increased by 1s",
					"icon": "edATIP7.png"
				}
			}
		},
		"s_15": {
			"skill_name": "Strike Wave",
			"cd": "24",
			"description": "Attack can be charged on 3 levels that crack the ground over a long distance, inflicting damage to the affected enemies",
			"additional_effects": ["Neutralization [Medium]", " Back Attack", " Immune [stiffness]"],
			"type": ["Charge"],
			"time": [""],
			"icon": "t5tlplr.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time reduced by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Solid Armor",
					"description": "Reduces damage taken during skill cast by 20%",
					"icon": "179tjju.png"
				},
				"e_3": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill use",
					"icon": "lyseDv0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Black Salt",
					"description": "Fires a black blazing fissure with 30% increased attack range. Anger gain increased by 50%",
					"icon": "UnhMZ84.png"
				},
				"e_2": {
					"effect_name": "Wave",
					"description": "Charge time is increased by 15%, but damage done to enemies is increased by 15%, 30%, and 60% per stage",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Rebounding Flame",
					"description": "Increases the damage of the skill by up to 45%, increased by the number of attack received during the charge time",
					"icon": "TmNqtCH.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Blaze Wave",
					"description": "Flame waves are generated, causing an additional 40% damage of the base attack",
					"icon": "JQTrd8y.png"
				},
				"e_2": {
					"effect_name": "Cerberus",
					"description": "When fully charged, the attack is divided into three branches",
					"icon": "bjbQ0Fr.png"
				}
			}
		},
		"s_16": {
			"skill_name": "Red Dust",
			"cd": "30",
			"description": "Single sword stroke that deals large damage and increases the damage dealt to the opponent by 20% for 6 seconds",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "zSFBxBV.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Reduces cooldown time by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increased by 20%",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Mental Fortification",
					"description": "Mana Consumption reduced by 50%",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Quick Hit",
					"description": "On hit, critical hit rate increased by 20% for 6s",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Heightened Intellect",
					"description": "The duration of the debuff is increased by 3s",
					"icon": "POnpICE.png"
				},
				"e_3": {
					"effect_name": "Red Waves",
					"description": "Increases damage done by 50% and attack speed by 25%",
					"icon": "hbiDGfp.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Hermatocrit",
					"description": "Increases the stagger time of the enemy by 0.5s, bleeds for 5s, and reduces enemy movement speed by 40%",
					"icon": "P0yre5K.png"
				},
				"e_2": {
					"effect_name": "Curse Reinforcement",
					"description": "The debuff effect is increased by an additional 20% damage done.",
					"icon": "W94iICa.png"
				}
			}
		},
		"s_17": {
			"skill_name": "Blade Storm",
			"cd": "30",
			"description": "Jump and create a black storm while falling. Throw the enemies in the air.",
			"additional_effects": ["Neutralization [Mid-High]", " Back Attack", " Immune [stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "c6zDH3O.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increased by 10%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time reduces by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Quick Hit",
					"description": "Critical hit rate increased by 15%",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Backbreak",
					"description": "After the attack, an explosion occurs in the area causing an additional 20% damage",
					"icon": "cD0keDA.png"
				},
				"e_2": {
					"effect_name": "Defenseless Target",
					"description": "Increases damage done to disabled targets by 40%.",
					"icon": "HWuM5x7.png"
				},
				"e_3": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill use.",
					"icon": "a7DgAOn.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Fire Storm",
					"description": "Leaves damaging flames in the attack area, which burns enemies within it for 30% additional damage for 6s. If your health is below 30%, this deals an additional 30% damage",
					"icon": "JQTrd8y.png"
				},
				"e_2": {
					"effect_name": "Seismic Wave",
					"description": "Instead of a float effect, the attack damage is increased by 30% and causes unsteady ground beneath the enemy for 4s",
					"icon": "edATIP7.png"
				}
			}
		},
		"s_18": {
			"skill_name": "Aurora Blade",
			"cd": "16",
			"description": "Slash into the air, causing a wave of energy which does a ranged attack",
			"additional_effects": ["Slicing [level 1]", " Neutralization [Medium]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "IFfCBAu.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Sleek Motion",
					"description": "Increases attack speed by 10%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time reduces by 2s.    Cooldown time reduces by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Ranged Blow",
					"description": "Aurora blade travels 10% further",
					"icon": "SoLHNDZ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strengthen Cutting",
					"description": "Increases cut level to 2",
					"icon": "W3lPRkN.png"
				},
				"e_2": {
					"effect_name": "Cadaver",
					"description": "Decreases enemy attack speed by 15% for 5s",
					"icon": "zHwYyaV.png"
				},
				"e_3": {
					"effect_name": "Destruction",
					"description": "Ignores 40% of the magical armor of enemies hit",
					"icon": "ktJIUvL.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Space Cut",
					"description": "Aurora blade is modified to attack 3 times at the target position, increasing damage done by 75%",
					"icon": "Iv7fFBo.png"
				},
				"e_2": {
					"effect_name": "Extinction",
					"description": "Skill is modified to a combo skill. The attack range is reduced, but the critical hit rate is increase by 30% and inflicts an additional 50% of the base attack damage",
					"icon": "dgg9J9i.png"
				}
			}
		},
		"ult": {
			"skill_name": "Blood Explosion",
			"cd": "8",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Weakening [Low]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "zBbx1Er.png"
		}
	},
	"arcana": {
		"s_1": {
			"skill_name": "Call of Destiny",
			"cd": "16",
			"description": "Throws a card in the specified direction, dealing damage. After a short time, inflict additional damage and launches enemy into the air",
			"additional_effects": ["Neutralization [Low]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "lGZtf3v.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mental Fortification",
					"description": "Mana cost reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increases by 15%",
					"icon": "9VyE0qU.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Increase Card",
					"description": "Enemies knocked up by the attack will have Floating Cards applied to them once more",
					"icon": "qjh8nzR.png"
				},
				"e_2": {
					"effect_name": "Identified Weakness",
					"description": "Increases damage done to immune enemies by 40%",
					"icon": "a5qp6Tt.png"
				},
				"e_3": {
					"effect_name": "Dark Fate",
					"description": "Increases damage by 20% and makes the target more prone to critical hits by 15% for 3s",
					"icon": "IpJktTA.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Continuous Attack",
					"description": "Changes the attack to a three hit attack. The first hit repeats before knocking up on the third hit",
					"icon": "4wG5uWK.png"
				},
				"e_2": {
					"effect_name": "Concentration of Fate",
					"description": "Cast time reduced by 0.3s. Changes the attack to a single hit and increases damage by 100%",
					"icon": "t1cGFcK.png"
				}
			}
		},
		"s_2": {
			"skill_name": "Unlimited Shuffle",
			"cd": "30",
			"description": "Several cards fly where indicated, inflicting between damage. Launches enemies into the air and then hit the ground, inflicting damage",
			"additional_effects": ["Destruction [level 1]", " Neutralization [Mid-High]", " Immune [stiffness]"],
			"type": ["Point"],
			"time": [""],
			"icon": "n40Rg4Q.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Piercing Strike",
					"description": "Ignores 30% of enemy’s magic defense",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill use.",
					"icon": "a7DgAOn.png"
				},
				"e_3": {
					"effect_name": "Mental Fortification",
					"description": "Mana consumption reduced by 50%",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Critical Hit",
					"description": "Each hit increases critical chance by 5% and final hit is always a critical hit",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Identified Weakness",
					"description": "Increases damage done to cc immune enemies by 40%",
					"icon": "a5qp6Tt.png"
				},
				"e_3": {
					"effect_name": "Ultimate Shuffle",
					"description": "Increases number of attacks by 25%. Duration remains the same",
					"icon": ""
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Predicted Death",
					"description": "Final hit takes 0.3s longer but final hit damage increases by 80%. This damage is included as it splits the attack into 3 smaller hits",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Shadow Core",
					"description": "Attack damage increased by 50% damage within 2 meters of center and makes the target more prone to critical hits by 15% for 3s",
					"icon": ""
				}
			}
		},
		"s_3": {
			"skill_name": "Return",
			"cd": "12",
			"description": "Launches cards in the specified area, dealing damage to the target. If the skill is activated again, knockdown the targets and deals additional damage",
			"additional_effects": ["Neutralization [Low]"],
			"type": ["Combo"],
			"time": [""],
			"icon": "RjzF5DU.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Reduces cooldown per enemy hit by 1s. Maximum 4s reduction",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Piercing Strike",
					"description": "Ignores 30% of enemy’s magic defense.",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Penetration Enhance",
					"description": "Increases penetration rate of second skill attack by 2",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Exposed Target",
					"description": "Second skill attack damage is increased by 50% when target has been hit by first hit",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Unprotected Target",
					"description": "Increases critical chance by 50% against targets immune to hit-effects",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Concentrated Card",
					"description": "Decreases the attack angle but increases attack range and damage by 20%",
					"icon": ""
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Continuous Attack",
					"description": "Changes the attack to a three hit attack. The second hit repeats a third time",
					"icon": "4wG5uWK.png"
				},
				"e_2": {
					"effect_name": "Shadow Enhancement",
					"description": "Increases damage by 40% and makes the target more prone to critical hits by 30% for 3s",
					"icon": "32F9lxY.png"
				}
			}
		},
		"s_4": {
			"skill_name": "Mysterious Rush",
			"cd": "14",
			"description": "When using it for the first time, you move 4m to your left. Using a second time, you move 8m on your right and finally 4m on your left if it is used a third time. With each move, you send cards to the opponent, dealing damage",
			"additional_effects": ["Piercing [level 1]", " Neutralization [Medium]"],
			"type": ["Combo"],
			"time": [""],
			"icon": "jGiq0NQ.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mental Fortification",
					"description": "Mana consumption reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Penetration Enhance",
					"description": "Increases penetration rate by 1",
					"icon": "Mo0MlPh.png"
				},
				"e_3": {
					"effect_name": "Quickdraw",
					"description": "5% chance to draw a Tarot card each hit",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Escape Master",
					"description": "Increases evasion rate by 30% during cast",
					"icon": "j4OiBjo.png"
				},
				"e_2": {
					"effect_name": "Rush Concentration",
					"description": "As combo progresses, increases damage by 30%",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Knockdown Attack",
					"description": "Knocks down enemies hit by last strike",
					"icon": "Ntx7DAR.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Mysterious Retreat",
					"description": "Changes the attack to a two hit attack. The second hit can be used within 2s of the first cast and deals 250% increased damage",
					"icon": "t1cGFcK.png"
				},
				"e_2": {
					"effect_name": "Continuous Attack",
					"description": "Changes the attack to a four hit attack. The fourth hit retreats you 4 meters",
					"icon": "4wG5uWK.png"
				}
			}
		},
		"s_5": {
			"skill_name": "Evoke",
			"cd": "24",
			"description": "Places a spell in a specified area that explodes, dealing damage, when the skill is used again",
			"additional_effects": ["Neutralization [Medium]"],
			"type": ["제인"],
			"time": [""],
			"icon": "pX0JA6O.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Mental Fortification",
					"description": "Mana consumption reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Quickdraw",
					"description": "5% chance to draw a Tarot card each hit",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Link Magic",
					"description": "Increases damage by 30%",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Mana Poisoning",
					"description": "Damage reduced by 30% and no longer knocks up. Reduces movement speed by 50% and deals 15% continuous poison damage each second for 3s",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Sharp Strike",
					"description": "Increases critical damage by 50% and critical chance by 20%",
					"icon": "qp8CE16.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Split Magic",
					"description": "You can cast the skill twice within 3s. It will automatically detonate after 5s",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Overlap",
					"description": "Detonates three times with reduced strength each explosion",
					"icon": ""
				}
			}
		},
		"s_6": {
			"skill_name": "Quadra Accelerate",
			"cd": "10",
			"description": "Throws 4 straight-line cards, inflicting damage in the specified direction. Movement speed is increased during casting",
			"additional_effects": ["Pierce [level 1]", " Immune [stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "1lgjqYU.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Penetration Enhance",
					"description": "Increases penetration rate by 1",
					"icon": "Mo0MlPh.png"
				},
				"e_2": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increases by 15%",
					"icon": "nRO8OuT.png"
				},
				"e_3": {
					"effect_name": "Sharp Strike",
					"description": "Increases critical hit rate by 15%",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Swift Movement",
					"description": "Increases movement speed by 15%",
					"icon": "wGYSIwd.png"
				},
				"e_2": {
					"effect_name": "Ignore Collision",
					"description": "No unit collision during the cast",
					"icon": "GDVRuGY.png"
				},
				"e_3": {
					"effect_name": "Increase Card",
					"description": "5% chance to deal 20% additional damage and instantly apply 4 stacked cards",
					"icon": "qjh8nzR.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Hexagon Enhancement",
					"description": "Increases skill duration by 1s and cards fired from 4 to 6",
					"icon": "4wG5uWK.png"
				},
				"e_2": {
					"effect_name": "Accelerate Concentration",
					"description": "Increases damage by 30% to 90% per hit",
					"icon": "3PXf9mr.png"
				}
			}
		},
		"s_7": {
			"skill_name": "Scratch Dealers",
			"cd": "10",
			"description": "You move 6m in a given direction and inflict damage. If the skill is used again, you knockdown enemy. Can stack 2 times the Floating Cards effect",
			"additional_effects": ["Destruction [Level 1]", " Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "o1v8ZHD.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Excellent Mobility",
					"description": "Travel distance increased by 2m",
					"icon": "frf2qov.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Muscle Spasm",
					"description": "Increases fall down condition by 0.5s",
					"icon": "DUWC0Nh.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Sharp Blow",
					"description": "Critical damage increases by 100%",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "First Scratch",
					"description": "Increases damage dealt to unharmed enemies by 100%",
					"icon": "5yIY8l5.png"
				},
				"e_3": {
					"effect_name": "Identified Weakness",
					"description": "Increases damage done to immune enemies by 40%",
					"icon": "a5qp6Tt.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Squall",
					"description": "Modifies the attack style. Attack three times the new hit goes between the first two and knocks the enemy up",
					"icon": "Bybk6tw.png"
				},
				"e_2": {
					"effect_name": "Safety Device",
					"description": "A third cast is added which retreats by 7 meters and increases movement speed and evasion by 30% for 3s",
					"icon": "6hI884T.png"
				}
			}
		},
		"s_8": {
			"skill_name": "Spiral Edge",
			"cd": "12",
			"description": "Charge on 7m and throw cards around you. The skill can be used 2 times in a row. Each time you use the skill, you inflict the floating cards effect",
			"additional_effects": ["Back Attack", " Immune [stiffness]"],
			"type": ["Combo"],
			"time": [""],
			"icon": "fzt08Mz.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mental Fortification",
					"description": "Mana consumption reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Excellent Mobility",
					"description": "Travel distance increased by 1.4m",
					"icon": "frf2qov.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill use",
					"icon": "a7DgAOn.png"
				},
				"e_2": {
					"effect_name": "Ruthless Shot",
					"description": "Reduces damage by 40% but adds an extra attack around the caster on destination",
					"icon": "cD0keDA.png"
				},
				"e_3": {
					"effect_name": "Sharp Blow",
					"description": "Critical damage increases by 75% for 3s after casting",
					"icon": "qp8CE16.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Card Amplification",
					"description": "Deals an additional attack on arrival to enemies within 4 meters of player",
					"icon": "4wG5uWK.png"
				},
				"e_2": {
					"effect_name": "Light Step",
					"description": "After using the skill, movement speed increased by 40% and no collision for 2s",
					"icon": "oxGXfhi.png"
				}
			}
		},
		"s_9": {
			"skill_name": "Flower Dance",
			"cd": "20",
			"description": "You move 11m in a given direction while throwing cards around you, dealing damage to enemies. By using the skill a second time, you return to your starting position. The floating cards effect can be applied 4 times",
			"additional_effects": ["Neutralization [Low]", " Back Attack", " Immune [stiffness]"],
			"type": ["Combo"],
			"time": [""],
			"icon": "JnhScNy.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Escape Master",
					"description": "Increases evasion rate by 20% during cast",
					"icon": "j4OiBjo.png"
				},
				"e_3": {
					"effect_name": "Sharp Strike",
					"description": "Critical damage increased by 50%.",
					"icon": "4R8T3Cz.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Fatal Flower",
					"description": "Critical chance increases by 5% to 50% depending on skill duration",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill use",
					"icon": "a7DgAOn.png"
				},
				"e_3": {
					"effect_name": "Dramatic Dance",
					"description": "Damage increased by 25%.",
					"icon": "5yIY8l5.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Aggressive Visibility",
					"description": "Reduces number of attacks by 4, increases damage by 94%",
					"icon": "t1cGFcK.png"
				},
				"e_2": {
					"effect_name": "Fatal Visibility",
					"description": "200% damage explosion at destination when teleporting back",
					"icon": "4wG5uWK.png"
				}
			}
		},
		"s_10": {
			"skill_name": "Checkmate",
			"cd": "24",
			"description": "Quickly launch a card in the direction of the mouse, inflicting damage",
			"additional_effects": ["Neutralization [Low]", " Immune [stiffness]"],
			"type": ["Hold"],
			"time": [""],
			"icon": "lz2Mkrj.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Piercing Strike",
					"description": "Ignores 20% of enemy’s magic defense",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Sharp Strike",
					"description": "Increases critical hit rate by 15%",
					"icon": "GjqRFi1.png"
				},
				"e_3": {
					"effect_name": "Card Increase",
					"description": "Increases maximum number of card stacks from 3 to 4",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Snappy Movement",
					"description": "Increases number of attacks by 30%. Duration remains the same",
					"icon": "LmuvcKG.png"
				},
				"e_2": {
					"effect_name": "Identified Weakness",
					"description": "Increases damage done to immune enemies by 50%",
					"icon": "a5qp6Tt.png"
				},
				"e_3": {
					"effect_name": "Fatal Attack",
					"description": "Every time you deal damage, skill damage increases by 10%, to a maximum of 100%, each time with a 50% chance",
					"icon": ""
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Wave of Cards",
					"description": "Fans out attacks in a four-directional cone fan. Cooldown increased by 5s and damage reduced by 30%",
					"icon": "FpXyekj.png"
				},
				"e_2": {
					"effect_name": "Deadline",
					"description": "When holding the skill for longer than 0.5s you throw explosive cards after letting go that inflicts 900% damage. Knocks targets down",
					"icon": ""
				}
			}
		},
		"s_11": {
			"skill_name": "Stream of Edge",
			"cd": "23",
			"description": "Open two portals, releasing a deluge of cards: All enemies located between these portals inflict damage",
			"additional_effects": ["Neutralization [Low]"],
			"type": ["Point"],
			"time": [""],
			"icon": "X7wdevS.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Card Increase",
					"description": "Increases Floating Cards stacks from one cast from 2 to 3",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Quickdraw",
					"description": "1% chance to draw a Tarot card each hit",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Fatal Attack",
					"description": "Every time you deal damage, skill damage increases by 10%, to a maximum of 50%",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Increase Duration",
					"description": "Skill duration increases by 1.5s",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Critical Hit",
					"description": "Increases Critical Hit Rate by 25%",
					"icon": "qp8CE16.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Stream Wave",
					"description": "No longer fixates the skill in place. Skill slowly travels forward and increases damage by 90%",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Sharp Card",
					"description": "Every second the critical damage of this skill increases by 30%",
					"icon": ""
				}
			}
		},
		"s_12": {
			"skill_name": "Infinity Shower",
			"cd": "20",
			"description": "Deals damage by throwing cards at the target location. They increase damage each time the skill is used",
			"additional_effects": ["Destruction [level 1]", " Neutralization [Low]", " Immune [stiffness]"],
			"type": ["Combo"],
			"time": [""],
			"icon": "m0VlwO6.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Card Increase",
					"description": "Increases maximum number of card stacks from 1 to 2",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Sharp Strike",
					"description": "Increases critical hit rate by 15%",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill casting",
					"icon": "a7DgAOn.png"
				},
				"e_2": {
					"effect_name": "Uniform Attack",
					"description": "No longer incrementally increases the damage of each attack. Increases total damage by 75%",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Unprotected Target",
					"description": "Increases damage done to a knocked down targets by 40%",
					"icon": ""
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Last Infinite",
					"description": "Increased damage by 60%. Fallen enemies struck will remain fallen",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Infinite Maneuver",
					"description": "Reduces number of hits to 1 and increases damage by 150%",
					"icon": ""
				}
			}
		},
		"s_13": {
			"skill_name": "Celestial Rain",
			"cd": "16",
			"description": "The card explodes at the target location inflicting damage. Inflicts additional damage to knock-up enemies by bringing them back to the ground. When the stack effect is activated, it gives an additional effect",
			"additional_effects": [""],
			"type": ["Point"],
			"time": [""],
			"icon": "nX6FTlk.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increases by 15%",
					"icon": "nRO8OuT.png"
				},
				"e_2": {
					"effect_name": "Sharp Strike",
					"description": "Increases critical hit rate by 20%",
					"icon": "GjqRFi1.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "20% chance to reset cooldown on cast",
					"icon": "DXzNTSi.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Destroyer Card",
					"description": "Critical damage increased by 10% to 40%",
					"icon": "YlRQ5P1.png"
				},
				"e_2": {
					"effect_name": "Sharp Card",
					"description": "When 4 stacks are consumed, target is debuffed for 8s to take 20% more damage",
					"icon": "UguU8TH.png"
				},
				"e_3": {
					"effect_name": "Strengthened Strike",
					"description": "Damage dealt increased by 25%",
					"icon": "5yIY8l5.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Heavy Rain",
					"description": "Adds another hit with 100% additional damage. This hit deals 50% further damage if the enemies it hits are knocked down",
					"icon": "4wG5uWK.png"
				},
				"e_2": {
					"effect_name": "Detect Weakness",
					"description": "Damage increases by 25% to 100% per Floating Cards stack against a target immune to hit-effects. Increases cooldown by 8s",
					"icon": "nws09aw.png"
				}
			}
		},
		"s_14": {
			"skill_name": "Four Cards",
			"cd": "12",
			"description": "Quickly launch 4 cards, dealing вamage in the specified direction. When the deck is triggered, add an additional effect",
			"additional_effects": ["Pierce [level 1]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "0zrjzTO.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "44% chance to reset cooldown on cast.",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Mental Fortification",
					"description": "Mana consumption reduced by 44%",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Penetration Enhance",
					"description": "Increases penetration rate by 1",
					"icon": "Mo0MlPh.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Four Stack",
					"description": "Damage dealt by player is increased by 44% for 4s every time the skill is cast 4 times",
					"icon": "eajjkDJ.png"
				},
				"e_2": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill use",
					"icon": "a7DgAOn.png"
				},
				"e_3": {
					"effect_name": "Card Enhancement",
					"description": "Damage dealt increased by 44%",
					"icon": "5yIY8l5.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Delayed Shock",
					"description": "Reduces damage to 44% and places a debuff on the target. 4s later, it deals 444% more damage",
					"icon": "eOTsTHH.png"
				},
				"e_2": {
					"effect_name": "Continuous Attack",
					"description": "Skill becomes a combo, allowing a 2nd hit by holding down the key.",
					"icon": "dgg9J9i.png"
				}
			}
		},
		"s_15": {
			"skill_name": "Serendipity",
			"cd": "16",
			"description": "You surround yourself with cards, dealing damage to nearby enemies, and project them in the direction of the mouse",
			"additional_effects": ["Neutralization [Medium]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "bWqJ3Ke.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Piercing Strike",
					"description": "50% chance to ignore 50% of enemy’s magic defense",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Quickdraw",
					"description": "10% chance to draw a Tarot card each hit",
					"icon": "qjh8nzR.png"
				},
				"e_3": {
					"effect_name": "Mental Fortification",
					"description": "50% chance to reduce mana cost by 100%",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Accidental Blow",
					"description": "Has a 20% chance to increase the critical damage by 100% per Floating Cards stack",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Accidental Bang",
					"description": "Increases damage by 30%. No longer knocks down. Has a 20% chance to stun the enemy for 3s per Floating Cards stack.",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "15% chance to reset cooldown on hit",
					"icon": ""
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Continuous Attack",
					"description": "Changes the attack to a three hit attack. The additional attack is in the middle and the damage is equal to the first attack",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "Designed Luck",
					"description": "Increases the odds of other Tripod talents within this skill activating by 20%. Talents that rely on number of Floating Cards detonated will default to 20% chance.",
					"icon": ""
				}
			}
		},
		"s_16": {
			"skill_name": "Dark Resurrection",
			"cd": "30",
			"description": "Throw a card at the indicated location and summon a demon that deals damage for 3s. When the deck effect is triggered, add an effect",
			"additional_effects": ["Neutralization [Medium]"],
			"type": ["Point"],
			"time": [""],
			"icon": "bOzYkDi.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increases by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Piercing Strike",
					"description": "Ignores 30% of enemy’s magic defense",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Mental Fortification",
					"description": "Mana Consumption reduced by 50%",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Quickdraw",
					"description": "10% chance to draw a Tarot card on last hit",
					"icon": "qjh8nzR.png"
				},
				"e_2": {
					"effect_name": "Fatal Card",
					"description": "Increases critical chance by 10% to 60% depending on Floating Cards",
					"icon": "qp8CE16.png"
				},
				"e_3": {
					"effect_name": "Intense Card",
					"description": "Increases damage by 10% to 40% depending on Floating Cards",
					"icon": "5yIY8l5.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Fear of Death",
					"description": "Causes enemies hit by the last attack to be poisoned for 3s and reduces casting animation time for this skill",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Anger Strike",
					"description": "No longer inflicts Fear. 100% increased critical damage and last attack strikes the ground with 100% increased damage",
					"icon": ""
				}
			}
		},
		"s_17": {
			"skill_name": "Secret Garden",
			"cd": "8",
			"description": "Instantly deals damage to nearby enemies and deals additional damage to enemies by adding a stack of Floating Card. When the stack effect is on, add an effect",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "WkPIjm2.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Mental Fortification",
					"description": "Mana consumption reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Sharp Strike",
					"description": "Increases critical hit rate by 20%",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Perfect Secret",
					"description": "40% additional damage to enemies with 4 card stacks",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Down Attack",
					"description": "Floating Cards bonus damage reduced by 30%, however knocks down enemies if they have Floating Cards stacks",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Darkness Garden",
					"description": "Increases critical damage by 100%",
					"icon": ""
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Secret Chance",
					"description": "Increases Floating Cards detonation damage by 50%",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Trained Performance",
					"description": "Attack range increased by 2 meter",
					"icon": ""
				}
			}
		},
		"ult": {
			"skill_name": "Prismatic Mirror",
			"cd": "300",
			"description": "Costs 1 Piece of Chaos",
			"additional_effects": ["Neutralization [Low]", " Back Attack"],
			"type": ["Point"],
			"time": [""],
			"icon": "zBbx1Er.png"
		}
	},
	"infighter": {
		"s_1": {
			"skill_name": "Advancing Strike",
			"cd": "12",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Destruction [level 1]", " Neutralization [Low]", " Back Attack", " Damage immunity"],
			"type": ["Tap"],
			"time": [""],
			"icon": "5S5cwg6.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Excellent Mobility",
					"description": "Travel distance increased by 2m",
					"icon": "frf2qov.png"
				},
				"e_2": {
					"effect_name": "Abdominal Respiration",
					"description": "Power gauge consumption reduced by 5",
					"icon": "IAAbR7L.png"
				},
				"e_3": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 20%",
					"icon": "rlevb4r.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Concentration",
					"description": "Shock gauge generation increased by 8",
					"icon": "UnhMZ84.png"
				},
				"e_2": {
					"effect_name": "Battle Preparations",
					"description": "When hitting the enemy with the down-attack of this skill, increase damage by 15% for 4s",
					"icon": "eajjkDJ.png"
				},
				"e_3": {
					"effect_name": "Enhanced Blow",
					"description": "Decreases Shock gauge generation by 10 but increases damage by 30%",
					"icon": "hbiDGfp.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Ruthless Advance",
					"description": "After the right-hand attack, a left-hand attack is added which increases the skill’s total damage by 30%",
					"icon": "s2QfHGg.png"
				},
				"e_2": {
					"effect_name": "Destroyer",
					"description": "Attack speed is increased by 30%. Additionally, against enemies that are immune to stagger, deal 30% increased damage",
					"icon": "nws09aw.png"
				}
			}
		},
		"s_2": {
			"skill_name": "Sundering Strike",
			"cd": "14",
			"description": "Pierce the ground with your spear to inflict x damage, and then pull out the spear to inflict y damage while putting frontal enemies into the air ",
			"additional_effects": "Neutralization [Medium], Back Attack",
			"type": "Combo",
			"time": "",
			"icon": "1qSUt8T.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Internal Bleeding",
					"description": "50% chance to inflict Bleed for 3s ",
					"icon": "1PceV71.png"
				},
				"e_2": {
					"effect_name": "Wide Blow",
					"description": "Increases attack range by 20% ",
					"icon": "SPgHuhl.png"
				},
				"e_3": {
					"effect_name": "Sharp Blow",
					"description": "Critical damage increases by 50% ",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Trifoliate",
					"description": "Damage of the first hit increases by 5%, and every hit after that increases by 10% ",
					"icon": "TmNqtCH.png"
				},
				"e_2": {
					"effect_name": "Identified Weakness",
					"description": "Increases damage done to cc immune enemies by 40% ",
					"icon": "a5qp6Tt.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 2s ",
					"icon": "bkMVKSJ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "One Punch Blow",
					"description": "After the final hit, one more punch is added and the total damage increases by 50% ",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "Transcendent",
					"description": "The last hit has it’s critical chance raised by 100% ",
					"icon": "s2QfHGg.png"
				}
			}
		},
		"s_3": {
			"skill_name": "Wild Tiger Strike",
			"cd": "12",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Neutralization [Low]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "l27NhYr.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 20%",
					"icon": "rlevb4r.png"
				},
				"e_2": {
					"effect_name": "Enhanced Blow",
					"description": "Decreases Shock gauge generation by 10 but increases damage by 20%",
					"icon": "DI0jbqj.png"
				},
				"e_3": {
					"effect_name": "Abdominal Respiration",
					"description": "Power gauge consumption reduced by 5",
					"icon": "IAAbR7L.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Dig",
					"description": "Movement distance is doubled",
					"icon": "frf2qov.png"
				},
				"e_2": {
					"effect_name": "Identified Weakness",
					"description": "Increases damage done to immune enemies by 40%",
					"icon": "a5qp6Tt.png"
				},
				"e_3": {
					"effect_name": "Concentration",
					"description": "Shock gauge generation increased by 10",
					"icon": "UnhMZ84.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Continuous Attack",
					"description": "Changes the attack to a three hit attack. The second hit repeats a third time",
					"icon": "hXBL5OK.png"
				},
				"e_2": {
					"effect_name": "Frantic Bombing",
					"description": "After the final hit, add one more attack that knocks the enemy down. If the enemy is alone, total damage is increased by 50%",
					"icon": "dgg9J9i.png"
				}
			}
		},
		"s_4": {
			"skill_name": "Dragon’s Descent",
			"cd": "16",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Neutralization [Mid-High]", " Back Attack"],
			"type": ["Point"],
			"time": [""],
			"icon": "qyP3mCz.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Excellent Mobility",
					"description": "Travel distance increased by 2m",
					"icon": "frf2qov.png"
				},
				"e_2": {
					"effect_name": "Abdominal Respiration",
					"description": "Power gauge consumption reduced by 5",
					"icon": "IAAbR7L.png"
				},
				"e_3": {
					"effect_name": "Momentary Burst",
					"description": "Increases Power gauge consumption by 10 but increases damage by 30%",
					"icon": "5uAj97G.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Wide Blow",
					"description": "Increases attack range by 30%",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Incarnation",
					"description": "After landing, you cover yourself in a fire aura for 6s, dealing continuous damage to nearby enemies",
					"icon": "cXMAUIN.png"
				},
				"e_3": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill casting",
					"icon": "a7DgAOn.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Destruction",
					"description": "Increases damage to single targets by 60%",
					"icon": "S2Ogv2N.png"
				},
				"e_2": {
					"effect_name": "Black Dragon’s Fall",
					"description": "Increases damage to enemies by 30%",
					"icon": "QpObGxT.png"
				}
			}
		},
		"s_5": {
			"skill_name": "Instant Strike",
			"cd": "20",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "ARUFIhw.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 20%",
					"icon": "rlevb4r.png"
				},
				"e_2": {
					"effect_name": "Abdominal Respiration",
					"description": "Power gauge consumption reduced by 5",
					"icon": "IAAbR7L.png"
				},
				"e_3": {
					"effect_name": "Concentration",
					"description": "Shock gauge generation increased by 10",
					"icon": "11MLrbC.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Dangerous Contract",
					"description": "Decreases cooldown by 6s but also reduces Stun duration by 1s",
					"icon": "bkMVKSJ.png"
				},
				"e_2": {
					"effect_name": "Accuracy",
					"description": "Increases the Stun duration by 2s",
					"icon": "TR1aIIB.png"
				},
				"e_3": {
					"effect_name": "Adverse Effect",
					"description": "Removes the Stun on the skill but increases its damage by 200% against enemies immune to hit-effects",
					"icon": "eB8ZwLp.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Tracking Instinct",
					"description": "Advances up to 4 meters in the direction of the cursor",
					"icon": "KUr6DEO.png"
				},
				"e_2": {
					"effect_name": "Last Stand",
					"description": "Increases attack range by 350",
					"icon": "wYJaLXy.png"
				}
			}
		},
		"s_6": {
			"skill_name": "Earth Tremor",
			"cd": "20",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Neutralization [Medium]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "cAbaaDp.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Earthen Strength",
					"description": "Increases damage to normal enemies by 20%",
					"icon": "yzT2J9V.png"
				},
				"e_2": {
					"effect_name": "Vigor Training",
					"description": "No longer costs Power gauge nor generates Shock gauge",
					"icon": "IAAbR7L.png"
				},
				"e_3": {
					"effect_name": "Emergency Escape",
					"description": "If cast when below 40% HP, increases movement speed by 40% for 4s",
					"icon": "nIdDNjH.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Identified Weakness",
					"description": "Increases damage done to cc immune enemies by 40%",
					"icon": "a5qp6Tt.png"
				},
				"e_2": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill use.",
					"icon": "a7DgAOn.png"
				},
				"e_3": {
					"effect_name": "Strong Attack",
					"description": "Increases floating and knockdown duration by 40%. Additionally, increases damage by 40% against enemies that are knocked down",
					"icon": "Ntx7DAR.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Empowered Earthquake",
					"description": "Hits the earth powerfully to generate a shockwave. Increases range by 40% and the damage by 80%",
					"icon": "bjbQ0Fr.png"
				},
				"e_2": {
					"effect_name": "Giant’s Advance",
					"description": "Adds an additional forward stomp after the first one that hits for 60% of the base damage",
					"icon": "hXBL5OK.png"
				}
			}
		},
		"s_7": {
			"skill_name": "Fury Strike",
			"cd": "16",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Destruction [level 1]", " Neutralization [Mid-High]", " Back Attack"],
			"type": ["Hold"],
			"time": [" 1 sec"],
			"icon": "tfMwLAs.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Crackshot",
					"description": "Increases damage of the hook (last) attack by 50%",
					"icon": "SKW6lN3.png"
				},
				"e_2": {
					"effect_name": "Righteous Plunder",
					"description": "As you jab, there’s a 50% chance to apply Bleed for 5s. This can stack up to 3 times",
					"icon": "1PceV71.png"
				},
				"e_3": {
					"effect_name": "Excellent Mobility",
					"description": "Travel distance increased by 2m",
					"icon": "frf2qov.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Terrifying Will",
					"description": "Critical damage increases by 100%",
					"icon": "8IxcdAX.png"
				},
				"e_2": {
					"effect_name": "Red Explosion",
					"description": "Increases the duration of the fast jabs part of the attack by 0.5s",
					"icon": "a5qp6Tt.png"
				},
				"e_3": {
					"effect_name": "A Single Blow",
					"description": "Increases fast jabs damage to single targets by 60%",
					"icon": "Ct0bUxo.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Widespread",
					"description": "The fast jabs turn into two spurts of furious flurries and the damage increases by 100%",
					"icon": "hXBL5OK.png"
				},
				"e_2": {
					"effect_name": "Reverse Rotation Blow",
					"description": "After the final hit, adds one more attack in front by spinning",
					"icon": "7GBXv8l.png"
				}
			}
		},
		"s_8": {
			"skill_name": "Push Through",
			"cd": "24",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Neutralization [High]", " Back Attack"],
			"type": ["Hold"],
			"time": [" 4 sec"],
			"icon": "Zk8MGNo.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Critical Hit",
					"description": "Increases critical hit rate by 20%",
					"icon": "GjqRFi1.png"
				},
				"e_2": {
					"effect_name": "Solid Armor",
					"description": "Incoming damage received reduced by 20% during cast",
					"icon": "SfUebeR.png"
				},
				"e_3": {
					"effect_name": "Quick Charge",
					"description": "Every time this attack successfully lands, generates 1 additional Shock gauge",
					"icon": "j9eW4TE.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Anger",
					"description": "If your health falls under 50%, increases damage dealt by 30%.",
					"icon": "cimRspI.png"
				},
				"e_2": {
					"effect_name": "Momentary Burst",
					"description": "Increases Power gauge consumption by 10 but increases damage by 30%.",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Piercing Strike",
					"description": "Attack ignores 40% of enemy’s physical defense",
					"icon": "ktJIUvL.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Threshold of Death",
					"description": "At the end of the charge, a new slam is added which increases total damage by 50% and knocks down enemies hit by it",
					"icon": "19503dj.png"
				},
				"e_2": {
					"effect_name": "Forward Advance",
					"description": "Increases attack speed by 20% and total charge time by 50%",
					"icon": "JMU1YLm.png"
				}
			}
		},
		"s_9": {
			"skill_name": "Triplex Punch",
			"cd": "16",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Pierce [level 1]", " Neutralization [Medium]", " Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "0T5vGR0.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Enhanced Blow",
					"description": "Transforms the last attack into a strong smash which knocks down enemies",
					"icon": "5p95lRo.png"
				},
				"e_2": {
					"effect_name": "Wave",
					"description": "The final strike fires a burst of energy 5 meter outwards",
					"icon": "SoLHNDZ.png"
				},
				"e_3": {
					"effect_name": "Full Power",
					"description": "Increases damage by 30%",
					"icon": "DI0jbqj.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Concentration",
					"description": "Shock gauge generation increased by 10",
					"icon": "UnhMZ84.png"
				},
				"e_2": {
					"effect_name": "Wide Blow",
					"description": "Increases attack range by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 3s",
					"icon": "bkMVKSJ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Reinforcement",
					"description": "Increases movement distance by 1 meter, attack speed by 20%, and damage by 150% when attacking an enemy immune to hit-effects",
					"icon": "KUr6DEO.png"
				},
				"e_2": {
					"effect_name": "Enhanced Fist",
					"description": "Grants immunity to hit-effects while casting and increases the damage by 40%",
					"icon": "6vzVrvN.png"
				}
			}
		},
		"s_10": {
			"skill_name": "Chains of Resonance",
			"cd": "15",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Neutralization [Low]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "ovYg5U3.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Concentration",
					"description": "Increases Shock gauge generation by 5",
					"icon": "j9eW4TE.png"
				},
				"e_3": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill use",
					"icon": "a7DgAOn.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Enhanced Blow",
					"description": "Decreases Shock gauge generation by 10 but increases damage by 40%",
					"icon": "DI0jbqj.png"
				},
				"e_2": {
					"effect_name": "Vigilance",
					"description": "Increases attack power by 5% for 3s. Can be stacked up to 10 times",
					"icon": "eajjkDJ.png"
				},
				"e_3": {
					"effect_name": "Piercing Strike",
					"description": "Attack ignores 40% of enemy’s physical defense",
					"icon": "ktJIUvL.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Oscillating Resonance",
					"description": "Chains project into a circular shape and pulls enemies towards the center",
					"icon": "ClOC78j.png"
				},
				"e_2": {
					"effect_name": "Empowered Resonance",
					"description": "Launches three chains that pull the enemy to you",
					"icon": "MbPnoxn.png"
				}
			}
		},
		"s_11": {
			"skill_name": "Judgment",
			"cd": "12",
			"description": "Pierce the ground with your spear to inflict x damage, and then pull out the spear to inflict y damage while putting frontal enemies into the air",
			"additional_effects": ["Pierce [level 1]", " Neutralization [Medium]", " Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "mc4sTVI.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Abdominal Respiration",
					"description": "Shock gauge consumption reduced by 5",
					"icon": "IAAbR7L.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Sleek Motion",
					"description": "Increases attack speed by 10%",
					"icon": "9VyE0qU.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill use.",
					"icon": "a7DgAOn.png"
				},
				"e_2": {
					"effect_name": "Ignorant Blow",
					"description": "Can be cast a second time dealing 60% additional damage however increases cooldown by 4s",
					"icon": "eajjkDJ.png"
				},
				"e_3": {
					"effect_name": "Neurology",
					"description": "Knocks down enemies regardless if they’re in the air or not",
					"icon": "xT6ILcv.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "True Judgment",
					"description": "Changes the attack into two smaller attacks and increases total damage by 60%",
					"icon": "Iv7fFBo.png"
				},
				"e_2": {
					"effect_name": "Talon of the Falcon",
					"description": "Increases damage inflicted by 40%",
					"icon": "FpXyekj.png"
				}
			}
		},
		"s_12": {
			"skill_name": "Swallow",
			"cd": "8",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Neutralization [Low]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "b7NvBdx.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Wide Blow",
					"description": "Attack angle increased by 25%",
					"icon": "rlevb4r.png"
				},
				"e_2": {
					"effect_name": "A Single Blow",
					"description": "Increases damage to single targets by 20%",
					"icon": "hgks2W0.png"
				},
				"e_3": {
					"effect_name": "Concentration",
					"description": "Strength gauge generation increased by 10",
					"icon": "UnhMZ84.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Identified Weakness",
					"description": "Increases damage done to cc immune enemies by 30%",
					"icon": "a5qp6Tt.png"
				},
				"e_2": {
					"effect_name": "Lucky Blow",
					"description": "Increases damage by 20% however decreases minimum damage and increases maximum damage",
					"icon": "eajjkDJ.png"
				},
				"e_3": {
					"effect_name": "Finishing Strike",
					"description": "Increases damage by 40% to enemies below 25% of max HP",
					"icon": "cimRspI.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Reinforced Blow",
					"description": "Adds an additional input after the final hit swinging at the enemy once more. Increases total damage by 60%",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "Heavy Swing",
					"description": "Increases the attack wind-up for a heavier hit. Increases total damage by 60%",
					"icon": "FpXyekj.png"
				}
			}
		},
		"s_13": {
			"skill_name": "Death Sentence",
			"cd": "24",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Destruction [level 2]", " Neutralization [Mid-High]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "rvclWgL.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 15%",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Eye of the Heart",
					"description": "Increases attack speed by 15% but also increases cooldown by 2s",
					"icon": "9VyE0qU.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill casting",
					"icon": "a7DgAOn.png"
				},
				"e_2": {
					"effect_name": "A Single Blow",
					"description": "Increases damage to single targets by 30%",
					"icon": "Ct0bUxo.png"
				},
				"e_3": {
					"effect_name": "Finishing Strike",
					"description": "Increases damage by 40% to enemies below 50% of max HP",
					"icon": "cimRspI.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Shock",
					"description": "Increases respective Shock gauge bonus damage by 25%, 50%, 75%, and 90%",
					"icon": "hXBL5OK.png"
				},
				"e_2": {
					"effect_name": "Mind Relaxation",
					"description": "Consumes 50% of Shock gauge instead of all",
					"icon": "zx5VUqU.png"
				}
			}
		},
		"s_14": {
			"skill_name": "Decisive Attack",
			"cd": "20",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Pierce [level 2]", " Neutralization [Mid-High]", " Back Attack"],
			"type": ["Charge"],
			"time": [""],
			"icon": "Dyrk5WA.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 20%",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Concentration",
					"description": "Shock gauge consumption reduced by 10",
					"icon": "11MLrbC.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Muscle Burst",
					"description": "Second wave hit knocks enemy down",
					"icon": "xT6ILcv.png"
				},
				"e_2": {
					"effect_name": "Ligament Burst",
					"description": "Second wave hit damage is increased by 50%",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Eardrum Rupture",
					"description": "Attack reduces enemy’s movement speed by 60% for 3s",
					"icon": "C42y0cZ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Mastery",
					"description": "Increases Shock gauge consumption by 10 but no longer needs to be charged",
					"icon": "Iv7fFBo.png"
				},
				"e_2": {
					"effect_name": "Supersonic Shockwave",
					"description": "Increases Strength gauge generation by 15 and increases damage by 60% against enemies whose HP is below 40%",
					"icon": "hXBL5OK.png"
				}
			}
		},
		"s_15": {
			"skill_name": "Reincarnation",
			"cd": "30",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Destruction [level 2]", " Neutralization [High]", " Back Attack", " Damage immunity"],
			"type": ["Tap"],
			"time": [""],
			"icon": "Uji2MTF.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Abdominal Respiration",
					"description": "Shock gauge consumption reduced by 15",
					"icon": "IAAbR7L.png"
				},
				"e_2": {
					"effect_name": "Awakening",
					"description": "The first hit is removed and increases Strength gauge generation by 5",
					"icon": "bRHbw6A.png"
				},
				"e_3": {
					"effect_name": "Wide Blow",
					"description": "First hit range is increased by 50%. Enemies struck are pulled towards the center.",
					"icon": "rlevb4r.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Armor Destruction",
					"description": "First hit reduces the defense of struck enemies by 30% for 3s",
					"icon": "2JPSkpi.png"
				},
				"e_2": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill casting",
					"icon": "a7DgAOn.png"
				},
				"e_3": {
					"effect_name": "Unbalanced",
					"description": "Increases damage by 30% and damage received while casting by 30%.",
					"icon": "hbiDGfp.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Mega Explosion",
					"description": "The last attack has a slight delay (adds a jumping animation) and the damage of it is increased by 200%",
					"icon": "Pv2SzkI.png"
				},
				"e_2": {
					"effect_name": "Vital Impact",
					"description": "Attack speed increases by 30% and damage per hit increases by 20%",
					"icon": "JMU1YLm.png"
				}
			}
		},
		"s_16": {
			"skill_name": "True Art: Rising Falcon",
			"cd": "24",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Neutralization [Mid-High]", " Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "HzIiOaQ.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Technical Finesse",
					"description": "Adds an uppercut in the beginning of the attack, increasing total damage by 10%",
					"icon": "j724HUx.png"
				},
				"e_2": {
					"effect_name": "Lightning Fist",
					"description": "The uppercut has a 50% chance to inflict Shock on the enemy for 5s",
					"icon": "HR5NqtN.png"
				},
				"e_3": {
					"effect_name": "Fist of Destruction",
					"description": "First hit gathers enemies up before floating them into the air",
					"icon": "VGqI5ff.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Identified Weakness",
					"description": "Increases damage done to cc immune enemies by 80%",
					"icon": "a5qp6Tt.png"
				},
				"e_2": {
					"effect_name": "Angry Strike",
					"description": "While your HP is 50% or lower, the critical damage of this skill increases by 100%.",
					"icon": "qp8CE16.png"
				},
				"e_3": {
					"effect_name": "Midair Bombing",
					"description": "The upper cut pierces 40% of enemy’s physical defense",
					"icon": "NdeJndm.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Dragon’s Rage",
					"description": "Increases attack radius by 30% and decreases incoming damage by 50%",
					"icon": "bjbQ0Fr.png"
				},
				"e_2": {
					"effect_name": "Explosive Strike",
					"description": "The downward strike will always be a critical hit and the critical damage is increased by 20%.",
					"icon": "Pv2SzkI.png"
				}
			}
		},
		"s_17": {
			"skill_name": "Crush",
			"cd": "24",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Destruction [level 2]", " Neutralization [Mid-High]", " Back Attack", " Damage immunity"],
			"type": ["Tap"],
			"time": [""],
			"icon": "vH3vfFL.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Violent Fist",
					"description": "The attack when moving forward is turned to a multi-hit. The attack becomes an explosion and inflicts burning damage",
					"icon": "ohvDbcU.png"
				},
				"e_2": {
					"effect_name": "Rational Move",
					"description": "Movement distance is reduced by 3 meters but damage is increased by 30%",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Unexpected Move",
					"description": "The skill can be charged to a three levels. The movement distance can increases 2 meters according to charge level",
					"icon": "1qT5V38.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Overflowing Force",
					"description": "Damage bonus increases depending on the amount of Shock gauge consumed. The increase is 20%, 40%, 60%, and 80% accordingly",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Shock Control",
					"description": "Damage increased by 30%",
					"icon": "eajjkDJ.png"
				},
				"e_3": {
					"effect_name": "Patience",
					"description": "Reduces incoming damage by 50%",
					"icon": "oVtc2zd.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Surprise Attack",
					"description": "Increases attack speed by 30% and Power gauge generated by 30",
					"icon": "uMGIY45.png"
				},
				"e_2": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill casting",
					"icon": "6vzVrvN.png"
				}
			}
		},
		"s_18": {
			"skill_name": "Supernova Explosion",
			"cd": "30",
			"description": "Strongly stab forward with the spear to inflict x damage",
			"additional_effects": ["Neutralization [Mid-High]", " Back Attack", " Damage immunity"],
			"type": ["Tap"],
			"time": [""],
			"icon": "bcz8lfi.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Sleek Motion",
					"description": "Attack speed increases by 10%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Justice Plunder",
					"description": "Reduces Shock gauge consumption by 30 but increases cooldown by 12s",
					"icon": "IAAbR7L.png"
				},
				"e_3": {
					"effect_name": "God of the Battlefield",
					"description": "Damage type is converted from magical to physical",
					"icon": "t2cMfkL.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Piercing Strike",
					"description": "Attack ignores 30% of enemy’s physical and magical defense",
					"icon": "ktJIUvL.png"
				},
				"e_2": {
					"effect_name": "Angry Explosion",
					"description": "The attack that gathers enemies is removed and the explosion happens instantly instead",
					"icon": "rP1umQI.png"
				},
				"e_3": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 20%",
					"icon": "SPgHuhl.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Pride of Fighters",
					"description": "Attacks four times with energy spheres before detonating. Increases damage by 20% each sphere",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Unyielding Blow",
					"description": "Increases damage by 50%",
					"icon": "hXBL5OK.png"
				}
			}
		},
		"ult": {
			"skill_name": "Indomitable Dragon King",
			"cd": "300",
			"description": "Costs 1 Piece of Chaos. Move up to 7 meters",
			"additional_effects": ["Neutralization [High]"],
			"type": ["Point"],
			"time": [""],
			"icon": "yMb26sH.png"
		}
	},
	"summoner": {
		"s_1": {
			"skill_name": "Mana Crystal",
			"cd": "8",
			"description": "Throws Mana Crystal to deal (9699 ~ 14804) damage to collided and (7759 ~ 11844) to outer cone shape. Damaged target gets slow by 60% for 3s",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "CHwij7t.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mind Enhancement ",
					"description": "Decrease MP usage by 44%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Ranged Launch",
					"description": "Increase the skill range by 2m",
					"icon": "SoLHNDZ.png"
				},
				"e_3": {
					"effect_name": "Slow Enhancement",
					"description": "Increase duration of slow effect by 1s",
					"icon": "nIdDNjH.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Flame Crystal",
					"description": "Increase the damage by 25%",
					"icon": "5yIY8l5.png"
				},
				"e_2": {
					"effect_name": "Ice Crystal",
					"description": "20% chance to freeze an enemy for 2s",
					"icon": "HdZ3Crk.png"
				},
				"e_3": {
					"effect_name": "Thunder Crystal",
					"description": "Increase critical hit rate by 30%",
					"icon": "UmuzakL.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Chain Explosion",
					"description": "At successful hit, explodes in a cone shape with 30% increased range",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Area Explosion",
					"description": "Removed cone shape AOE at successful hit but explodes in circle with increase in 30% damage and 20% slow effect",
					"icon": "xqsOSNR.png"
				}
			}
		},
		"s_2": {
			"skill_name": "Instant Explosion ",
			"cd": "12",
			"description": "Explode condensed mana energy at cursor point to deal (14603 ~ 22292) damage",
			"additional_effects": ["Neutralization [Low]"],
			"type": ["Point"],
			"time": [""],
			"icon": "O3KhAFY.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Insight",
					"description": "Increase the skill range by 2m",
					"icon": "SoLHNDZ.png"
				},
				"e_2": {
					"effect_name": "Destruction Enhancement",
					"description": "Add Lv1 Destruction effect",
					"icon": "t2cMfkL.png"
				},
				"e_3": {
					"effect_name": "Energy Control",
					"description": "At successful hit, increase ancient spirit gauge gain by 50%",
					"icon": "11MLrbC.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Vital Point Explosion",
					"description": "Increase critical hit rate by 30%",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Shiny Explosion",
					"description": "At successful hit, sleep the target for 2s but increase CD by 4s",
					"icon": "TR1aIIB.png"
				},
				"e_3": {
					"effect_name": "Slow Target",
					"description": "Increase the damage by 40% if the target is in slow effect",
					"icon": "5yIY8l5.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Mega Explosion",
					"description": "Increase the delay of explosion but increase the damage by 50% and range by 30%",
					"icon": "xqsOSNR.png"
				},
				"e_2": {
					"effect_name": "It’s a Trap!",
					"description": "Create a mine that explodes automatically when enemy approaches and decrease enemy’s movement speed for 60% for 3s",
					"icon": "oxGXfhi.png"
				}
			}
		},
		"s_3": {
			"skill_name": "Accelerating Wind Bird ",
			"cd": "24",
			"description": "Summon groups of Wind Bird and can move freely while holding. Skill can last up to 4 s and can deal (49588 / 75678) damage at maximum",
			"additional_effects": ["Neutralization [Medium]", " Back Attack", " Immune [Stiffness]"],
			"type": ["Hold"],
			"time": [" 4 sec"],
			"icon": "zPhjjMu.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Accumulated Energy",
					"description": "Holding the skill no longer increases the ancient gauge but obtain 1 ancient spirit orb at 30% chance if maintained the holding for 4s or longer",
					"icon": "j9eW4TE.png"
				},
				"e_3": {
					"effect_name": "Abdominal Respiration",
					"description": "Power gauge consumption reduced by 5",
					"icon": "ZYlrZ9I.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Fire Bird",
					"description": "Increase the damage by 30% while holding",
					"icon": "5yIY8l5.png"
				},
				"e_2": {
					"effect_name": "Ice Bird",
					"description": "Holding the skill for 0.5s or longer removes stiffness effect but decrease enemy’s movement speed by 60% for 3s",
					"icon": "C42y0cZ.png"
				},
				"e_3": {
					"effect_name": "Wisdom of Mage",
					"description": "Maximum holding time increase to 5s",
					"icon": "8IxcdAX.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Flock of Birds",
					"description": "Summons more bird to increase the skill range by 30% and ignore 50% of magic defense",
					"icon": "bjbQ0Fr.png"
				},
				"e_2": {
					"effect_name": "Mother Bird",
					"description": "Holding the skill 0.5 s or longer summons mother bird additionally at the end of holding",
					"icon": "nDL4tKC.png"
				}
			}
		},
		"s_4": {
			"skill_name": "Burning Gallop ",
			"cd": "16",
			"description": "Relentless fire horse run over to deal (14603 / 22292) damage and airborne enemies. Fire horse reaches its maximum potential of 100% at maximum skill distance.",
			"additional_effects": ["Neutralization [Low]", " Pierce [Level 1]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "5Dr1Hce.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Gallop Enhancement",
					"description": "Increase the damage by 20%",
					"icon": "E70cTPv.png"
				},
				"e_2": {
					"effect_name": "Vital Strike",
					"description": "Increase the critical hit rate by 25%",
					"icon": "GjqRFi1.png"
				},
				"e_3": {
					"effect_name": "Complete One",
					"description": "Skill starts off with 50% of its maximum potential",
					"icon": "1qT5V38.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Chollima",
					"description": "Increase the skill range by 4m",
					"icon": "ttirMI4.png"
				},
				"e_2": {
					"effect_name": "Swift Horse",
					"description": "Increase the travel speed by 20% and ignore 20% of magic defense",
					"icon": "LmuvcKG.png"
				},
				"e_3": {
					"effect_name": "Weak Point",
					"description": "Increase the critical damage by 100% toward an enemy with hit recovery immune",
					"icon": "a5qp6Tt.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Ascension",
					"description": "Increase the skill range by 20% and burn enemy for 5s",
					"icon": "bjbQ0Fr.png"
				},
				"e_2": {
					"effect_name": "Demolisher",
					"description": "Skill explodes at the end of its range to cause additional damage",
					"icon": "xqsOSNR.png"
				}
			}
		},
		"s_5": {
			"skill_name": "Fauru",
			"cd": "30",
			"description": "Throw firebomb at cursor point to deal (3088 / 4717) damage and summon fire spirit Fauru. Fauru attacks nearby enemy for 15s and deals (4741 / 7237) damage",
			"additional_effects": [""],
			"type": ["Point"],
			"time": [""],
			"icon": "JKyEWKJ.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Insight",
					"description": "Increase the skill range by 2m",
					"icon": "SoLHNDZ.png"
				},
				"e_2": {
					"effect_name": "Explosion Enhancement",
					"description": "Increase the explosion damage by 50%",
					"icon": "E70cTPv.png"
				},
				"e_3": {
					"effect_name": "Wide Explosion",
					"description": "Increase the explosion area by 30%",
					"icon": "rlevb4r.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Attack Enhancement",
					"description": "Increase Fauru’s damage by 30%",
					"icon": "eajjkDJ.png"
				},
				"e_2": {
					"effect_name": "Result of Training",
					"description": "Increase Fauru’s attack explosion area by 20%",
					"icon": "IpJktTA.png"
				},
				"e_3": {
					"effect_name": "Summon Maintenance",
					"description": "Increase Fauru’s summon duration by 3s",
					"icon": "POnpICE.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Blue Flame Fauru",
					"description": "Increase Fauru’s attack and movement speed and vision rage by 20% each, decrease attack interval time, can activate fire breath in a cone shape with 100% damage that blows away enemy",
					"icon": "t1cGFcK.png"
				},
				"e_2": {
					"effect_name": "Blazing Fauru",
					"description": "Increase Fauru’s attack damage, can activate self-destruct to cause explosion. Decrease the CD by 5s",
					"icon": "dgg9J9i.png"
				}
			}
		},
		"s_6": {
			"skill_name": "Released Will ",
			"cd": "20",
			"description": "Release gale to push enemies away and cause (15876 / 24235) damage",
			"additional_effects": ["Back Attack", " Immune [Stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "xFXzmI3.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Excellent Maneuver",
					"description": "Increase skill’s travel distance by 2m. If cyclone tripod is learned, only increase by 1m",
					"icon": "frf2qov.png"
				},
				"e_2": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Energy Control",
					"description": "At successful hit, increase ancient spirit gauge gain by 50%",
					"icon": "11MLrbC.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Ranged Blast",
					"description": "Increase skill range by 25%",
					"icon": "ttirMI4.png"
				},
				"e_2": {
					"effect_name": "Freezing Cold",
					"description": "25% chance to freeze an enemy for 3s",
					"icon": "HdZ3Crk.png"
				},
				"e_3": {
					"effect_name": "Dust Wind",
					"description": "Increase the duration of stiffness and blow distance, 50% chance of slowing an enemy for 5s",
					"icon": "OpQyn4M.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Cyclon Rush",
					"description": "Skill motion changes into a spin to attack all enemy around",
					"icon": "Bybk6tw.png"
				},
				"e_2": {
					"effect_name": "Mana Amplification",
					"description": "Increase the MP consumption by 50% and the damage by 100%",
					"icon": "Cp9hVlE.png"
				}
			}
		},
		"s_7": {
			"skill_name": "Maririn",
			"cd": "45",
			"description": "Summon coral spirit Maririn. Maririn attacks nearby enemy for 20s and deals (6316 / 9642) damage",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "7DmWJ1k.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Attack Enhancement",
					"description": "Increase Maririn’s damage by 20%",
					"icon": "akITDDZ.png"
				},
				"e_2": {
					"effect_name": "Iron Skin",
					"description": "Maririn gets 30% damage reduction",
					"icon": "SfUebeR.png"
				},
				"e_3": {
					"effect_name": "Healing Etere",
					"description": "When Maririn dies, he drops healing etere",
					"icon": "SKW6lN3.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Taunt Command",
					"description": "Grant taunt skill. Can be activated to immediately taunt all enemy except players for 2s. Seed or higher class mob can’t be taunted for certain period",
					"icon": "6XRgQFW.png"
				},
				"e_2": {
					"effect_name": "Charge Command",
					"description": "Grant charge skill. Can be activated to charge toward an enemy to stun for 2s",
					"icon": "TR1aIIB.png"
				},
				"e_3": {
					"effect_name": "Neutralization Command",
					"description": "Grant neutralization skill. Can be activated to cast Neut(M) effect skill.",
					"icon": "LmuvcKG.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Communion",
					"description": "Increase Maririn’s duration by 10s",
					"icon": "0BMcHYE.png"
				},
				"e_2": {
					"effect_name": "Coral Spirit",
					"description": "Increase Maririn’s HP by 100%",
					"icon": "nDL4tKC.png"
				}
			}
		},
		"s_8": {
			"skill_name": "Winged Spirit ",
			"cd": "30",
			"description": "Summon hawk figured wind spirit at cursor point. Can last maximum of 4s to deal (57918 / 88439) damage at maximum",
			"additional_effects": ["Neutralization [Mid-High]", " Immune: Stiffness"],
			"type": ["Hold"],
			"time": [" 4 sec"],
			"icon": "OsECdvv.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Feeding on Prey",
					"description": "Increase the damage by 30% toward a mob with Named class or below",
					"icon": "E70cTPv.png"
				},
				"e_2": {
					"effect_name": "Fortified Robe",
					"description": "30% damage reduction while holding",
					"icon": "SfUebeR.png"
				},
				"e_3": {
					"effect_name": "Mana Regeneration",
					"description": "50% increased MP regeneration while holding",
					"icon": "H6JBBPw.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Thunder Spirit",
					"description": "Increase critical hit rate by 30%",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Earth Spirit",
					"description": "10% chance to petrify an enemy for 2s",
					"icon": "HdZ3Crk.png"
				},
				"e_3": {
					"effect_name": "Result of Training",
					"description": "Increase the skill range by 25%",
					"icon": "SPgHuhl.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Typhoon",
					"description": "Increase the damage by 30% and critical damage by 100%",
					"icon": "s2QfHGg.png"
				},
				"e_2": {
					"effect_name": "Communion",
					"description": "Decrease hit interval by 33%. Increase in ancient spirit gauge gain as it hits more.",
					"icon": "KEm9ET8.png"
				}
			}
		},
		"s_9": {
			"skill_name": "Electricity Release",
			"cd": "12",
			"description": "Throw condensed electric ball to deal (3704 / 5654) damage and create electric field for 1s that deals (8643 / 13200) damage",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "LJ02W07.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Chain Launch",
					"description": "Change into a chain skill. Increase the MP cost by 50% and activating a chain skill increase CD by 12s",
					"icon": "jC42yG9.png"
				},
				"e_2": {
					"effect_name": "Rapid Casting",
					"description": "Increase the casting motion speed by 20%",
					"icon": "nRO8OuT.png"
				},
				"e_3": {
					"effect_name": "Haste Launch",
					"description": "Increase the projectile travel speed by 20%",
					"icon": "ZYlrZ9I.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Electricity Enhancement",
					"description": "Increased in duration of stiffness and critical hit rate by 20%",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Feeding on Prey",
					"description": "Increase the damage by 30% toward a mob with Minion or Normal class",
					"icon": "FtChNZ3.png"
				},
				"e_3": {
					"effect_name": "Weak Point",
					"description": "Increase the damage by 40% toward an enemy with hit recovery immune",
					"icon": "a5qp6Tt.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Supercurrent Area",
					"description": "At the arrival point, create an electrical field for 3.5s that causes damage for every 0.5s and pulls enemies toward a center",
					"icon": "xqsOSNR.png"
				},
				"e_2": {
					"effect_name": "High Voltage",
					"description": "Electrify an enemy for 2s",
					"icon": "uMM49tX.png"
				}
			}
		},
		"s_10": {
			"skill_name": "Sticky Moss Swamp ",
			"cd": "20",
			"description": "Summon Sticky Moss Swamp at cursor point to deal (1744 / 2660) damage every second and slow down movement speed by 60% for all targets standing above it ",
			"additional_effects": "",
			"type": "Point",
			"time": "",
			"icon": "9F0aHD2.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mind Enhancement",
					"description": "Decrease MP consumption by 50% ",
					"icon": "Tripod_Tier_1_34.png"
				},
				"e_2": {
					"effect_name": "Rapid Preparation",
					"description": "Decrease CD by 3s ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_3": {
					"effect_name": "Battle Preparation",
					"description": "Increase AP by 15% for 4s at cast ",
					"icon": "Tripod_Tier_1_50.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Increased Diffusion",
					"description": "Speed up the spreading of the swamp ",
					"icon": "Tripod_Tier_2_53.png"
				},
				"e_2": {
					"effect_name": "Poisonous Swamp",
					"description": "Increase the damage by 200% ",
					"icon": "Tripod_Tier_2_1.png"
				},
				"e_3": {
					"effect_name": "Sticky Swamp",
					"description": "Increase the slow effect by 20% ",
					"icon": "Tripod_Tier_2_47.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Queen of Swamp",
					"description": "Increase the size of the swamp by 30% ",
					"icon": "Tripod_Tier_3_7.png"
				},
				"e_2": {
					"effect_name": "Acidic Swamp",
					"description": "Decrease all enemies magic defense by 50% ",
					"icon": "Tripod_Tier_3_46.png"
				}
			}
		},
        "s_11": {
			"skill_name": "Elseed",
			"cd": "24",
			"description": "Summon 2 Elseed, lily flower spirit. Elseed attacks nearby enemy for 10s and deals (1348 / 2057) damage",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "vErbmAQ.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mind Enhancement",
					"description": "Decrease MP consumption by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Mana Amplification",
					"description": "Increase MP consumption by 50% and AP by 20% for 5s at cast",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Summon Maintenance",
					"description": "Increase summon duration by 2s",
					"icon": "BtWx8s1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Poisonous Seed",
					"description": "Hit applies poison to an enemy for 5s",
					"icon": "zHwYyaV.png"
				},
				"e_2": {
					"effect_name": "Icy Seed",
					"description": "Hit applies slow which decrease movement speed by 40% for 3s",
					"icon": "wGYSIwd.png"
				},
				"e_3": {
					"effect_name": "Armor Demolition",
					"description": "Hit applies all defense reduction 2% each (max at 40%)",
					"icon": "2JPSkpi.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Pack Summon",
					"description": "Summons 3 Elseeds",
					"icon": "4wG5uWK.png"
				},
				"e_2": {
					"effect_name": "Elite Summon",
					"description": "Summons only one elite version which has greater damage, 40% increased attack range, and can cause stiffness on good hit",
					"icon": "nDL4tKC.png"
				}
			}
		},
		"s_12": {
			"skill_name": "Earth Shatter",
			"cd": "24",
			"description": "Create strong earthquake at cursor point to deal (24696 / 37702) damage and airborne",
			"additional_effects": ["Destruction [level 1]", " Neutralization [Medium]", " Immune [Stiffness]"],
			"type": ["Point"],
			"time": [""],
			"icon": "zsQlG3o.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Flame Shatter",
					"description": "Increase the damage by 20%",
					"icon": "E70cTPv.png"
				},
				"e_2": {
					"effect_name": "Glacial Shatter",
					"description": "60% chance to freeze an enemy for 3 s",
					"icon": "fZE0IYD.png"
				},
				"e_3": {
					"effect_name": "Aftermath",
					"description": "After successful casting, create additional shatters each second for next 3s",
					"icon": "ncr6Vb8.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Rapid Casting",
					"description": "Increase casting speed by 20%",
					"icon": "rP1umQI.png"
				},
				"e_2": {
					"effect_name": "Tremble",
					"description": "Additional hits of 4 times during casting",
					"icon": "cD0keDA.png"
				},
				"e_3": {
					"effect_name": "Tenacity",
					"description": "Grant hit recovery immune during casting",
					"icon": "a7DgAOn.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Great Rift",
					"description": "Increase MP consumption by 50% and ignore magic defense of enemy by 60%",
					"icon": "UC8RykM.png"
				},
				"e_2": {
					"effect_name": "Earthquake",
					"description": "Increase the skill area by 25% and neutralization point by 40%",
					"icon": "bjbQ0Fr.png"
				}
			}
		},
		"s_13": {
			"skill_name": "Spirit of Water ",
			"cd": "20",
			"description": "Summon water spirit for 2s and deal (25970 / 39626) damage.",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "sgOc7Iy.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Rapid Casting",
					"description": "Increase casting motion speed by 20%",
					"icon": "nRO8OuT.png"
				},
				"e_2": {
					"effect_name": "Fortified Robe",
					"description": "Grant damage reduction of 30% while the spirit is up",
					"icon": "SfUebeR.png"
				},
				"e_3": {
					"effect_name": "Mana Regeneration",
					"description": "Increase MP regeneration rate by 100% while the spirit is up",
					"icon": "H6JBBPw.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Mud Spirit",
					"description": "Apply slow effect for 2s",
					"icon": "2JPSkpi.png"
				},
				"e_2": {
					"effect_name": "Water Spray Spirit",
					"description": "Last hit deals greater damage and blows enemy away",
					"icon": "Ntx7DAR.png"
				},
				"e_3": {
					"effect_name": "Weak Point",
					"description": "Ignore 50% of magic defense toward an enemy with hit recovery immune",
					"icon": "a5qp6Tt.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Wisdom of Spirit",
					"description": "Increase summon duration by 1s and gradually increase the damage up to 50%",
					"icon": "3PXf9mr.png"
				},
				"e_2": {
					"effect_name": "Water Cannon",
					"description": "Decrease skill angle by 50% but increase the attack distance by 100%",
					"icon": "bjbQ0Fr.png"
				}
			}
		},
		"s_14": {
			"skill_name": "Electric Storm",
			"cd": "24",
			"description": "After channeling mana for 2s, create electric storm for 5s to deal (47632 / 72706) damage",
			"additional_effects": ["Neutralization [Medium]"],
			"type": ["Cast Time"],
			"time": [" 2 sec"],
			"icon": "OFdCWTj.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Rapid Casting",
					"description": "Increase casting speed by 20%",
					"icon": "nRO8OuT.png"
				},
				"e_3": {
					"effect_name": "Fortified Robe",
					"description": "30% damage reduction while casting",
					"icon": "SfUebeR.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Vital Strike",
					"description": "Increase MP consumption by 25% and critical hit rate by 50%",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Result of Training",
					"description": "Increase the size of the storm by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_3": {
					"effect_name": "Long-Lasting",
					"description": "Increase MP consumption by 75% and summon duration by 3s",
					"icon": "POnpICE.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Crimson Storm",
					"description": "Decrease hit interval by 33%. Increase in ancient spirit gauge gain as it hits more",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Homing Storm",
					"description": "Increase in ancient spirit gauge gain by 50% and grant homing ability that slowly travels toward an enemy",
					"icon": "XfeC65B.png"
				}
			}
		},
		"s_15": {
			"skill_name": "Shurudy",
			"cd": "30",
			"description": "Summon small light spirit Shurudy. Shurudy travels along with character for 20s to deal (4410 / 6732) damage",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "SQ1n4Q6.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Stun Effect",
					"description": "15% chance to stun an enemy for 2s at successful hit",
					"icon": "ZkTpIPx.png"
				},
				"e_2": {
					"effect_name": "High Speed Projectile",
					"description": "Increase attack projectile speed by 20%",
					"icon": "ZYlrZ9I.png"
				},
				"e_3": {
					"effect_name": "Growth of Light",
					"description": "After 10s, Shurudy’s attack gets 50% increase",
					"icon": "akITDDZ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Smarty Shurudy",
					"description": "Increase vision and attack range by 20% and decrease the hit interval",
					"icon": "rP1umQI.png"
				},
				"e_2": {
					"effect_name": "Buffed Shurudy",
					"description": "Increase skill attack by 30%",
					"icon": "5yIY8l5.png"
				},
				"e_3": {
					"effect_name": "Vanity Shurudy",
					"description": "Increase summon duration 5s",
					"icon": "POnpICE.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Collision Ignore",
					"description": "Increase HP regeneration rate and does not collide with a normal mob",
					"icon": "9eXzPWU.png"
				},
				"e_2": {
					"effect_name": "Mana Regeneration",
					"description": "Increase MP regeneration rate by 100% while the spirit is up",
					"icon": "FnpTiuc.png"
				}
			}
		},
		"s_16": {
			"skill_name": "Ancient Spear",
			"cd": "36",
			"description": "After channeling mana for 2.5 s, summon an ancient spear at the cursor point to deal (63896 ~ 97537) damage and knock down targets got direct hit and deal",
			"additional_effects": ["Pierce [level 1]", " Neutralization [Mid-High]"],
			"type": ["Cast Time"],
			"time": [" 2.5 sec"],
			"icon": "dnNgIW7.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Rapid Casting",
					"description": "Increase casting speed by 20%",
					"icon": "nRO8OuT.png"
				},
				"e_3": {
					"effect_name": "Insight",
					"description": "Increase the skill range by 2m",
					"icon": "SoLHNDZ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Blazing Spear",
					"description": "Spear applies burn effect for 5s",
					"icon": "5yIY8l5.png"
				},
				"e_2": {
					"effect_name": "Glacial Spear",
					"description": "Direct hit by spear freezes an enemy and apply slow effect to enemy at outer range",
					"icon": "HdZ3Crk.png"
				},
				"e_3": {
					"effect_name": "Earth Spear",
					"description": "Direct hit by spear applies damage bonus by 20%. The spear knockdowns enemy at center and airborne outer range",
					"icon": "Ntx7DAR.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Condensed Power",
					"description": "Additional explosion afterward",
					"icon": "xqsOSNR.png"
				},
				"e_2": {
					"effect_name": "Ancient Power",
					"description": "Grant hit recovery immune and increase neutralization point by 50% at the cost of instant MP consumption and CD",
					"icon": "6vzVrvN.png"
				}
			}
		},
		"s_17": {
			"skill_name": "Rayne’s Protection ",
			"cd": "60",
			"description": "Receive Rayne’s protection shield that absorbs up to (10% ~ 30%) of maximum HP for 6s",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "4emLA77.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Wind of Protection",
					"description": "Push enemies away at cast",
					"icon": "s72YiQJ.png"
				},
				"e_2": {
					"effect_name": "Focused Energy",
					"description": "40% chance to gain 1 ancient spirit orb at cast",
					"icon": "j9eW4TE.png"
				},
				"e_3": {
					"effect_name": "Purification",
					"description": "Remove 1 abnormal debuff at cast",
					"icon": "1qT5V38.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Barrier Enhancement",
					"description": "Increase the shield amount by 100%",
					"icon": "9swgCXc.png"
				},
				"e_2": {
					"effect_name": "Barrier Maintenance",
					"description": "Increase the shield duration by 4s",
					"icon": "POnpICE.png"
				},
				"e_3": {
					"effect_name": "Nimble Feet",
					"description": "Increase movement speed by 20% while the shield is up",
					"icon": "LmuvcKG.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Resonance",
					"description": "Shield breaks with explosion that causes stun for 4s to nearby enemy",
					"icon": "uMM49tX.png"
				},
				"e_2": {
					"effect_name": "Accelerating Shield",
					"description": "30% CDR while shield is up",
					"icon": "mJ47SLb.png"
				}
			}
		},
		"ult": {
			"skill_name": "Kelsion",
			"cd": "300",
			"description": "Summons Kelsion,God of Thunder, to airborne and deal 33006 damage to the area. Kelsion provides aids for 20s",
			"additional_effects": ["Neutralization [Medium]", " Back Attack", " Immune [Hit Recovery & Abnormal Status]"],
			"type": ["Chain"],
			"time": [""],
			"icon": "eVrfA9S.png"
		}
	},
	"hawkeye": {
		"s_1": {
			"skill_name": "Rapid Shot",
			"cd": "5",
			"description": "After aiming, you shoot 3 arrows ",
			"additional_effects": "",
			"type": "Tap",
			"time": "",
			"icon": "TWglT84.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Heavy Steel",
					"description": "Increases the damage inflicted on enemies below the seed rating by 20% ",
					"icon": "Tripod_Tier_1_61.png"
				},
				"e_2": {
					"effect_name": "Horsepower control",
					"description": "Decrease MP usage by 50% ",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Tracking fire",
					"description": "It automatically turns and fires to the nearest enemy within 90 degrees ahead . ",
					"icon": "9VyE0qU.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": " Double shot",
					"description": "Increases damage done to enemies by 25% ",
					"icon": "Tripod_Tier_2_54.png"
				},
				"e_2": {
					"effect_name": "Shock shot",
					"description": "It changes to [Brain] property, and makes the hit enemy light for 3 seconds. ",
					"icon": "Tripod_Tier_2_17.png"
				},
				"e_3": {
					"effect_name": "Light footsteps",
					"description": "Increases movement speed by 30% for 3s ",
					"icon": "LmuvcKG.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Power shot",
					"description": "The last strike is changed to a powerful attack, which increases the critical hit rate by 100% and the width by 20% . ",
					"icon": "c9NTWOQ.png"
				},
				"e_2": {
					"effect_name": "Sustained fire",
					"description": "The number of arrow shoots increases from 3 to 5 ",
					"icon": "32F9lxY.png"
				}
			}
		},
		"s_2": {
			"skill_name": "Atomic Arrow",
			"cd": "16",
			"description": "After aiming, you shoot an arrow that deals damage. It explodes 3 seconds later, inflicting further damage and knocking down enemies",
			"additional_effects": ["Neutralization [Medium]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "hO665OX.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Quick Hand",
					"description": "Increases attack speed by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Ranged Shooting",
					"description": "Distance increases by 3m",
					"icon": "SoLHNDZ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Heavy Bomb",
					"description": "Decrease enemy’s movement speed for 50% before explosion",
					"icon": "oxGXfhi.png"
				},
				"e_2": {
					"effect_name": "Flame Arrow",
					"description": "We burn for 6 seconds to the enemy hit by the explosion",
					"icon": "cXMAUIN.png"
				},
				"e_3": {
					"effect_name": "Arrowhead Enhancement",
					"description": "Increases the chance of a critical hit by 30%. Increases the duration of an electric shock by 50%",
					"icon": "qp8CE16.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Light Arrow",
					"description": "Increases the speed of the arrow by 50% and reduces the detonation time by 2 seconds. The explosion does not overthrow but electrocutes the enemies for 2 seconds.",
					"icon": "JeryhMy.png"
				},
				"e_2": {
					"effect_name": "Long Fuse",
					"description": "The explosion time increases from 3 seconds to 5 seconds. Damage to enemies increases by 75%",
					"icon": "eOTsTHH.png"
				}
			}
		},
		"s_3": {
			"skill_name": "Whirlwind Arrow",
			"cd": "12",
			"description": "You shoot a swirling arrow that deals damage along the way",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "Db3jg6j.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Quick Hand",
					"description": "Increases attack speed by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Insight",
					"description": "Increase the skill range by 3m",
					"icon": "SoLHNDZ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Reinforced Arrow",
					"description": "Increase the damage by 30%",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Blizzard",
					"description": "Decrease enemies movement speed 5s",
					"icon": "pySlNIZ.png"
				},
				"e_3": {
					"effect_name": "Hellfire",
					"description": "50% chance to hit enemy for 5 seconds to burn status. Ignore 20% of armor",
					"icon": "cXMAUIN.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Guidance arrow",
					"description": "The whirlwind follows the nearest enemy. The duration of the arrow increases by 1 second",
					"icon": "EIUwvad.png"
				},
				"e_2": {
					"effect_name": "Arrowstorm",
					"description": "Increases attack range by 20% and damage by 75%",
					"icon": "hXBL5OK.png"
				}
			}
		},
		"s_4": {
			"skill_name": "Sharp Shooter",
			"cd": "24",
			"description": "You're bending your bow to shoot 10 arrows at once that deal damage to enemies in the area. Each enemy can only receive 2 arrows maximum",
			"additional_effects": ["Neutralization [Medium]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "9gpxiF3.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Quick Hand",
					"description": "Increases attack speed by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Mind Enhancement ",
					"description": "Decrease MP usage by 50%",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Merciless Fire",
					"description": "Increases the number of arrows from 10 to 15",
					"icon": "WapQ0GV.png"
				},
				"e_2": {
					"effect_name": "Painful Shooting",
					"description": "Inflicts bleeding, inflicting damage every second for 5 seconds.",
					"icon": "zHwYyaV.png"
				},
				"e_3": {
					"effect_name": "Weak Point",
					"description": "Increase the damage by 40% toward an enemy with hit recovery immune",
					"icon": "a5qp6Tt.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Concentrated Shot",
					"description": "Up to 5 arrows stuck to the same target. Critical damage is increased by 50%",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Definite Fire",
					"description": "Two arrows hit to all enemies within range. If Merciless Fire is learned, all enemies in range are hit by 3 arrows",
					"icon": "3PXf9mr.png"
				}
			}
		},
		"s_5": {
			"skill_name": "Slash Step",
			"cd": "16",
			"description": "Moves forward 8m and inflicts damage",
			"additional_effects": ["Back Arrow", " Immune [stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "3bLjfYn.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Critical Hit",
					"description": "Increases Critical Hit Rate by 15%",
					"icon": "GjqRFi1.png"
				},
				"e_3": {
					"effect_name": "Excellent Maneuver",
					"description": "Increase skill’s travel distance by 3m",
					"icon": "frf2qov.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Agile judgment",
					"description": "Attack speed increased by 30% for 5s",
					"icon": "4yeH6Qd.png"
				},
				"e_2": {
					"effect_name": "Silver Master",
					"description": "Skill hits to restore identity 35",
					"icon": "zI3CFEO.png"
				},
				"e_3": {
					"effect_name": "Mark Of Death",
					"description": "Inflicts Mark of death to an enemy hit on a move. The Mark of death can be applied up to 3 times. Increasing the damage received by the enemy from 5% to 20% depending on the number of effects",
					"icon": "iTPXtBh.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Survival",
					"description": "Become super armor while using the skill. Increases evasion rate by 50% for 2s",
					"icon": "8nAZ8Fm.png"
				},
				"e_2": {
					"effect_name": "Strengthening",
					"description": "Increases damage by 100% and deals bleed, dealing damage every second for 3 seconds",
					"icon": "FpXyekj.png"
				}
			}
		},
		"s_6": {
			"skill_name": "Persintent Tracking",
			"cd": "14",
			"description": "You jump in the air and kick, inflict damage on the enemies below and knock them over, then jump forward 8 meters away",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "aapX9if.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Hand",
					"description": "Increases attack speed by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Excellent Maneuver",
					"description": "Increase skill’s travel distance by 3m",
					"icon": "frf2qov.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Light Footsteps",
					"description": "Increases movement speed by 30% for 3s",
					"icon": "LmuvcKG.png"
				},
				"e_2": {
					"effect_name": "Evasion Master",
					"description": "Increases evasion rate by 35% during cast",
					"icon": "3MH8R85.png"
				},
				"e_3": {
					"effect_name": "Weak Point",
					"description": "Increase the damage by 40% toward an enemy with hit recovery immune",
					"icon": "a5qp6Tt.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "A Neat Herb",
					"description": "Increases knockdown time by 50% and increases damage by 100%.",
					"icon": "tolsJTT.png"
				},
				"e_2": {
					"effect_name": "Finishing Blow",
					"description": "After landing, attack a second time. The point of neutralization(staggering time) increases by 100%",
					"icon": "JeryhMy.png"
				}
			}
		},
		"s_7": {
			"skill_name": "Claymore",
			"cd": "20",
			"description": "You place a mine in front of you that activates to inflict damage in front of her, and pushes enemy",
			"additional_effects": ["Pierce [level 1]", " Neutralization [Medium]", " Immune [stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "bXgHl4Q.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Hand",
					"description": "Increases attack speed by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Penetration Enhance",
					"description": "Increases penetration rate by 1",
					"icon": "Mo0MlPh.png"
				},
				"e_3": {
					"effect_name": "Push",
					"description": "Increases the distance by 25%",
					"icon": "DUWC0Nh.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strength",
					"description": "Become immune to cc during skill casting",
					"icon": "a7DgAOn.png"
				},
				"e_2": {
					"effect_name": "Thunderstorm",
					"description": "Increases the chance of critical hits by 15%, making it in a state of electric shock for 3 seconds. Enemies are no longer pushes",
					"icon": "qp8CE16.png"
				},
				"e_3": {
					"effect_name": "Lightning",
					"description": "Increases damage by 30% and burns the enemy, inflicting damage every second for 3 seconds. But increases the mana cost by 30%",
					"icon": "cXMAUIN.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Storm Surge",
					"description": "The direction of the explosion changes to a sector",
					"icon": "bjbQ0Fr.png"
				},
				"e_2": {
					"effect_name": "Concentrated Storm",
					"description": "Decreases the range by 30%, but explodes 3 times with 0.5s intervals. Damage to enemies increases by 80%",
					"icon": "32F9lxY.png"
				}
			}
		},
		"s_8": {
			"skill_name": "Charged Shot",
			"cd": "18",
			"description": "Charges a shot, can be charged up to three times to inflict maximum damage",
			"additional_effects": ["Pierce [level 1]", " Neutralization [Medium]"],
			"type": ["Charge"],
			"time": [""],
			"icon": "ys7YoQ9.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Evasion Master",
					"description": "Increases evasion rate by 35% during cast",
					"icon": "j4OiBjo.png"
				},
				"e_2": {
					"effect_name": "Reinforced Arrow",
					"description": "Increase the damage by 20%",
					"icon": "DI0jbqj.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Сamouflage",
					"description": "You become invisible. Cooldown increased by 9 seconds",
					"icon": "FpYpAkw.png"
				},
				"e_2": {
					"effect_name": "Recall",
					"description": "When the overcharge is not reached, decrease value of Stiffness/creep effect is reduced by 50%",
					"icon": "OpQyn4M.png"
				},
				"e_3": {
					"effect_name": "Quick Hand",
					"description": "Charge time is reduced by 50%",
					"icon": "rP1umQI.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Through Arrow",
					"description": "Ignores 50% of the enemy's physical defense. Penetration level is increased by 1",
					"icon": "a80k0ch.png"
				},
				"e_2": {
					"effect_name": "Concentration",
					"description": "An additional phase is added. When overcharged, increasing damage by 30% and increases critical hit rate by 30%",
					"icon": "Pv2SzkI.png"
				}
			}
		},
		"s_9": {
			"skill_name": "Makeshift Shot",
			"cd": "10",
			"description": "You hold your bow horizontally and shoot several arrows simultaneously, which inflict damage",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "baSA6dA.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Mind Enhancement",
					"description": "Decrease MP consumption by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Lightfoot",
					"description": "Increases movement speed by 20% for 3s",
					"icon": "ZYlrZ9I.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Achievement Of Training",
					"description": "Increase attack distance by 30%",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Cold arrow",
					"description": "Increases damage by 15% and reduces enemy movement speed by 50% for 3 seconds",
					"icon": "pySlNIZ.png"
				},
				"e_3": {
					"effect_name": "Shock Fire",
					"description": "Stuns the target for 3 seconds if a hit is critical",
					"icon": "TR1aIIB.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Covert Movement",
					"description": "After using the skill, you become invisible and increase your dodge by 50% for 3 seconds",
					"icon": "0MliLYz.png"
				},
				"e_2": {
					"effect_name": "Close Shot",
					"description": "The attack angle is reduced by 30% and increases damage by 75%",
					"icon": "FpXyekj.png"
				}
			}
		},
		"s_10": {
			"skill_name": "DM-42",
			"cd": "24",
			"description": "You place a mine that explodes after 12 seconds, or if an enemy triggers it. Inflicts damage and knocks down enemies",
			"additional_effects": ["Destruction [Level 1]", " Neutralization [Medium]"],
			"type": ["Chain"],
			"time": [""],
			"icon": "fRixKug.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mind Enhancement",
					"description": "Decrease MP consumption by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Heavy Steel",
					"description": "Increases the damage dealt to normal monsters and below by 20%",
					"icon": "va33gLt.png"
				},
				"e_3": {
					"effect_name": "Strengthen Destruction",
					"description": "Increases the destruction level by 1",
					"icon": "t2cMfkL.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Remote Installation",
					"description": "Increases the deployment distance by 4 meters",
					"icon": "ttirMI4.png"
				},
				"e_2": {
					"effect_name": "Shock Mines",
					"description": "Do not knockdown the enemy anymore, but stuns them for 4s",
					"icon": "wGYSIwd.png"
				},
				"e_3": {
					"effect_name": "Explosion Spread",
					"description": "Increase explosion range by 30%",
					"icon": "SPgHuhl.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Fire Mines",
					"description": "Reduces the damage of the explosion by 20% but creates a flame zone that deals 45% of the damage every second for 4s",
					"icon": "66Zayrk.png"
				},
				"e_2": {
					"effect_name": "Distributed Installation",
					"description": "Can install 2 mines within 5s, but increases the cooldown by 6s",
					"icon": "dgg9J9i.png"
				}
			}
		},
		"s_11": {
			"skill_name": "Arrow Shower",
			"cd": "24",
			"description": "You shoot several arrows in the air, which fall back to the targeted location. They deal damage for 2 seconds",
			"additional_effects": ["Neutralization [Low]"],
			"type": ["Point"],
			"time": [""],
			"icon": "K3czCOM.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Hand",
					"description": "Increases attack speed by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Mind Enhancement",
					"description": "Decrease MP consumption by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Evasion Master",
					"description": "Increases evasion rate by 35% during cast",
					"icon": "j4OiBjo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Enhancement Sustain",
					"description": "Reduces damage by 20% per hit but increases the duration by 2s",
					"icon": "cD0keDA.png"
				},
				"e_2": {
					"effect_name": "Flame Baptism",
					"description": "Fire arrows fall and burn enemies, inflicting damage every second for 3s",
					"icon": "cXMAUIN.png"
				},
				"e_3": {
					"effect_name": "Electric Baptism",
					"description": " Shoots a bolt of lightning <br>30% chance to stun for 3s",
					"icon": "h9ZXI1D.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Piercing Arrow",
					"description": "The arrows fall faster <br>Critical hit rate increases by 40%",
					"icon": "c9NTWOQ.png"
				},
				"e_2": {
					"effect_name": "Sustained Rain",
					"description": "Increase damage to enemies by 30% per second",
					"icon": "3PXf9mr.png"
				}
			}
		},
		"s_12": {
			"skill_name": "Evasive Shot",
			"cd": "20",
			"description": "You jump backwards and shoot in front of you, inflicting damage",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "vsZAnZt.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Hand",
					"description": "Increases attack speed by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Excellent Maneuver",
					"description": "Move backward by 3m",
					"icon": "frf2qov.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "DXzNTSi.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Light Footsteps",
					"description": "Increases movement speed by 30% for 3s",
					"icon": "LmuvcKG.png"
				},
				"e_2": {
					"effect_name": "Evasion Master",
					"description": "Increases evasion rate by 40% during cast",
					"icon": "3MH8R85.png"
				},
				"e_3": {
					"effect_name": "Heavy Arrow",
					"description": "The distance to push enemies is increased by 3m <br>Increases damage by 20%",
					"icon": "hbiDGfp.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Conversion Strike",
					"description": "Knockdown enemy <br>Increases critical hit rate by 100%",
					"icon": "A2uWtO2.png"
				},
				"e_2": {
					"effect_name": "Strategic Retreat",
					"description": "After landing, you can use a new arrow in the direction and retreat an additional 2 meters",
					"icon": "32F9lxY.png"
				}
			}
		},
		"s_13": {
			"skill_name": "Quick Cut",
			"cd": "12",
			"description": "You give a quick stab in front of you, inflicting damage and applying the Mark of Death effect. The Death Mark effect can be applied up to 3 times, increasing the damage received by the enemy from 5% to 20% depending on the number of effects",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "IPpQRPz.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mind Enhancement",
					"description": "Decrease MP usage by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Silver Master",
					"description": "Skill hits to restore identity 35",
					"icon": "j9eW4TE.png"
				},
				"e_3": {
					"effect_name": "Quick hit",
					"description": "Increases Critical Hit Rate by 20%",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Mark Of Death",
					"description": "The Mark of death can be applied up to 2 times. The mark of death can be stacked up to 3 times. Increasing the damage from 5% to 20% depending on the number of effects",
					"icon": "iTPXtBh.png"
				},
				"e_2": {
					"effect_name": "Unjust Strike",
					"description": "Increase the damage bonus to 100% while enemy health is above 80%",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Painful Strike",
					"description": "Inflicts bleeding, inflicting damage every second for 5 seconds.",
					"icon": "zHwYyaV.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Double cut",
					"description": "Give a second hit, which increases the damage by 100%. A 20% chance inflict an additional 400% damage",
					"icon": "Bybk6tw.png"
				},
				"e_2": {
					"effect_name": "Covert Movement",
					"description": "After using the skill, you become invisible and increase movement speed by 50% for 3 seconds",
					"icon": "0MliLYz.png"
				}
			}
		},
		"s_14": {
			"skill_name": "Smoke Arrow",
			"cd": "16",
			"description": "You shoot an arrow at the target location that deals damage and creates a smoke zone for 4 seconds, the speed of movement and the vision field of the enemies are reduced in the smoke",
			"additional_effects": [""],
			"type": ["Point"],
			"time": [""],
			"icon": "4YBWo09.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mind Enhancement ",
					"description": "Decrease MP usage by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Ranged Shooting",
					"description": "Increases the range of 3m",
					"icon": "SoLHNDZ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Sticky Smoke",
					"description": "Reduction movement speed lasts for 3 seconds even when moving out of the smoke zone",
					"icon": "cimRspI.png"
				},
				"e_2": {
					"effect_name": "Dark Smoke",
					"description": "Reduces the vision field of enemies for 3 seconds even if they come out of the smoke zone",
					"icon": "2JPSkpi.png"
				},
				"e_3": {
					"effect_name": "Poison Smoke",
					"description": "Inflicts damage every second to enemies in the smoke",
					"icon": "zHwYyaV.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Spreading Smoke",
					"description": "Increases smoke zone by 30%",
					"icon": "bjbQ0Fr.png"
				},
				"e_2": {
					"effect_name": "Invisible Threat",
					"description": "Increases the damage done to enemies in the Smoke Zone by 40%",
					"icon": "FpXyekj.png"
				}
			}
		},
		"s_15": {
			"skill_name": "Shadow Arrow",
			"cd": "8",
			"description": "You quickly shoot an arrow that deals damage and applies the Dark Curse effect, reducing the speed of movement and the field of view of the enemy. If the Dark Curse effect is applied 3 times, the enemy is stunned for 5 seconds",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "PVfbGeP.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Fast Charge",
					"description": "Reduces the cooldown of each charge by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "High Speed Arrow",
					"description": "Increases the speed of the arrows by 20%",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Mind Enhancement",
					"description": "Decrease MP usage by 50%",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Overcharge",
					"description": "The stack of shadow arrows increases from 3 to 4",
					"icon": "KG9Q6Np.png"
				},
				"e_2": {
					"effect_name": "Curse",
					"description": "Increases the duration of the Dark Curse effect from 5s to 6s",
					"icon": "C42y0cZ.png"
				},
				"e_3": {
					"effect_name": "Shadows of Abyss",
					"description": "Increases shadow curse effect by 50%",
					"icon": "2JPSkpi.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Shadow Tracking",
					"description": "Shadow arrows track the closest enemy on the path. No longer pierce the enemy and increase the cooldown by 2s",
					"icon": "S2Ogv2N.png"
				},
				"e_2": {
					"effect_name": "Ruthless Shadow",
					"description": "Shoot 3 arrows together",
					"icon": "4wG5uWK.png"
				}
			}
		},
		"s_16": {
			"skill_name": "Blade Storm",
			"cd": "20",
			"description": "Spins rapidly and throw blade, causing damage 9 times",
			"additional_effects": ["Neutralization [Low]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "GbYLeeV.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Hand",
					"description": "Increases attack speed by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Light Footsteps",
					"description": "Increases movement speed by 30% for 3s",
					"icon": "LmuvcKG.png"
				},
				"e_3": {
					"effect_name": "Silver Master",
					"description": "Each time skill hit 3 times to restore identity 12",
					"icon": "j9eW4TE.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Continuous Attack",
					"description": "Increases the attack count by 6",
					"icon": "cD0keDA.png"
				},
				"e_2": {
					"effect_name": "Lightning Storm",
					"description": "The last shot electrifies enemy for 3s",
					"icon": "h9ZXI1D.png"
				},
				"e_3": {
					"effect_name": "Mark Of Death",
					"description": "Inflicts mark of death to an enemy hit in the last attack. The Mark of death can be applied up to 3 times. Increasing the damage received by the enemy from 5% to 20% depending on the number of effects",
					"icon": "iTPXtBh.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Blade Dance",
					"description": "Becomes holding skill is changed and the number of attacks is increased by 6 times",
					"icon": "oxGXfhi.png"
				},
				"e_2": {
					"effect_name": "Growing Blade",
					"description": "Increases damage by 30% for each 3 hit",
					"icon": "3PXf9mr.png"
				}
			}
		},
		"s_17": {
			"skill_name": "Electric Nova",
			"cd": "24",
			"description": "After aiming inflict damage to the first enemy hit, to nearby enemies and behind the target. The arrow has a 60% chance to stun the first enemy hit for 3 seconds, 40% for nearby enemies, and 20% for enemies behind the target",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "lafJsCh.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Hand",
					"description": "Increases attack speed by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Mind Enhancement ",
					"description": "Decrease MP usage by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Ranged Shooting",
					"description": "Increases the range of 3m",
					"icon": "SoLHNDZ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Nova power",
					"description": "The chances of stunning the first enemy are increased from 60% to 100%, for enemies close to 40% to 70% and for enemies behind from 20% to 50%",
					"icon": "TR1aIIB.png"
				},
				"e_2": {
					"effect_name": "Overload",
					"description": "Increases damage by 20% for the first enemy hit, 40% for nearby enemies, and 70% for enemies behind",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Electric shock",
					"description": "No longer inflicts stunning but gains 100% chance to inflict electrocution for 3 seconds and increases damage by 25%",
					"icon": "h9ZXI1D.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Lightning Rod",
					"description": "Send the lightning rod in the targeted location for 2 seconds, it deals a second attack, increasing the damage by 100%",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": " Electric Storm",
					"description": "Increases the size of the skill by 50% and increases the current range by 30%",
					"icon": "bjbQ0Fr.png"
				}
			}
		},
		"s_18": {
			"skill_name": "Snipe",
			"cd": "36",
			"description": "When holding, it is aimed, deals heavy damage to the perfect zone, and less damage if it fails",
			"additional_effects": ["Neutralization [Mid-High]"],
			"type": ["Hold"],
			"time": [" 3 sec"],
			"icon": "WGiNwly.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Quick Hand",
					"description": "Increases attack speed by 15%",
					"icon": "9VyE0qU.png"
				},
				"e_3": {
					"effect_name": "Insight",
					"description": "Increase the skill range by 3m",
					"icon": "SoLHNDZ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Perfection",
					"description": "Increases damage by 40% when the arrow is released at the perfect zone",
					"icon": "EZeZA3W.png"
				},
				"e_2": {
					"effect_name": "Strength",
					"description": "Become super armor during the cast a skill",
					"icon": "a7DgAOn.png"
				},
				"e_3": {
					"effect_name": "Weak Point",
					"description": "Increase the damage by 25% toward an enemy with hit recovery immune and 75% for perfect zone",
					"icon": "a5qp6Tt.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Ghillie Suit",
					"description": "You become invisible during the cast a skill and your dodge increases by 30%, but increases the cooldown by 18s",
					"icon": "0MliLYz.png"
				},
				"e_2": {
					"effect_name": "Easy Prey",
					"description": "Increases the size of the perfect zone and chance of critical hits by 75%",
					"icon": "Pv2SzkI.png"
				}
			}
		},
		"ult": {
			"skill_name": "Kelsion",
			"cd": "300",
			"description": "",
			"additional_effects": ["Neutralization [Medium]", " Back Attack", " Immune [Hit Recovery & Abnormal Status]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "eVrfA9S.png"
		}
	},
	"bard": {
		"s_1": {
			"skill_name": "Soundstrike",
			"cd": "8",
			"description": "Shoots a projectile that explodes and staggers targets near explosion when collision happens",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "cglEikD.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Weak mobility",
					"description": "30% chances for slowing enemy down 60% for 2s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Enhanced Shock",
					"description": "Skill damage increased by 10%",
					"icon": "E70cTPv.png"
				},
				"e_3": {
					"effect_name": "Bombing",
					"description": "Adds effect that causes poisonous debuff on targets ",
					"icon": "AyrTfLu.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "C5b57g8.png"
				},
				"e_2": {
					"effect_name": "Quick charge",
					"description": "40% chance for cooldown to be reduced by 6s",
					"icon": "bkMVKSJ.png"
				},
				"e_3": {
					"effect_name": "Nimble Cast",
					"description": "Skill cast time is reduced by 20%",
					"icon": "rP1umQI.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Fatal Shock",
					"description": "Changes ball to cause no explosion on the target (go through with no collision), skill cast time increased by 0.5s and skill crit chance increased by 30%",
					"icon": "Pv2SzkI.png"
				},
				"e_2": {
					"effect_name": "Hinged Fire",
					"description": "Ball no longer flies in the direction but falls as a bomb to pointed location with skill damage increase by 60%",
					"icon": "hXBL5OK.png"
				}
			}
		},
		"s_2": {
			"skill_name": "Dissonance",
			"cd": "20",
			"description": "AoE void zone that ticks 7 times once per second, each ticks slows enemies for 2 seconds for 60%",
			"additional_effects": [""],
			"type": ["Point"],
			"time": [""],
			"icon": "VK5K1Qt.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Nimble Cast",
					"description": "Skill cast time is reduced by 15%",
					"icon": "nRO8OuT.png"
				},
				"e_2": {
					"effect_name": "Increase Melody",
					"description": "Serenade gauge charges from the skill 30% faster",
					"icon": "QRTcZZ1.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Chord Mark",
					"description": "Puts debuff on target: all damage increased by 10% for 2s with each tick (not additive, 10% max)",
					"icon": "r8r0RgP.png"
				},
				"e_2": {
					"effect_name": " A Helpless Chord",
					"description": "Enemy attack decreased by 30% for 2s with each tick (not additive, 30% max)",
					"icon": "2JPSkpi.png"
				},
				"e_3": {
					"effect_name": "Achievement of training",
					"description": "Skill range increased by 20%",
					"icon": "SPgHuhl.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Live chord",
					"description": "Void zone now moves towards nearest enemy and follows him as he is moving",
					"icon": "XfeC65B.png"
				},
				"e_2": {
					"effect_name": "Chord enhancement",
					"description": "Skill damage increased by 50%",
					"icon": "Cp9hVlE.png"
				}
			}
		},
		"s_3": {
			"skill_name": "Soundwave",
			"cd": "12",
			"description": "Shoots soundwave that pushes enemies backwards as it flies. Doesn’t affect elites/bosses",
			"additional_effects": ["Neutralization [Low]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "yu2noeK.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "20% chance cooldown is reduced by 12s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Excellent Maneuver",
					"description": "When casting skill you are pushed back 4m away",
					"icon": "frf2qov.png"
				},
				"e_3": {
					"effect_name": "Large wave",
					"description": "Increase the skill range by 20%",
					"icon": "rlevb4r.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Mana Control",
					"description": "70% chance to not consume MP",
					"icon": "C5b57g8.png"
				},
				"e_2": {
					"effect_name": "Wave Of Patience",
					"description": "When soundwave touches your party member it grants damage 40% reduce buff for 4s",
					"icon": "r8r0RgP.png"
				},
				"e_3": {
					"effect_name": "Increase Melody",
					"description": "Serenade gauge charges from the skill 50% faster",
					"icon": "R9u94O4.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Burning Wave",
					"description": "Skill damage increased by 50%",
					"icon": "Cp9hVlE.png"
				},
				"e_2": {
					"effect_name": "Ground breaking",
					"description": "With the last wave hit enemies are falling into sleep for 2s",
					"icon": "uMM49tX.png"
				}
			}
		},
		"s_4": {
			"skill_name": "Holy Sound",
			"cd": "24",
			"description": "Ray of light channeled while you are standing still",
			"additional_effects": ["Neutralization [Medium]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "KDtAK7x.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Wide Blow",
					"description": "Skill range increased by 10%",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strengthen sustainability",
					"description": "Skill duration increased by 1.5s (means more ticks of damage) and cooldown increased by 3s",
					"icon": "8IxcdAX.png"
				},
				"e_2": {
					"effect_name": "Damage reduction",
					"description": "When ray touches your party member it grants armor increase by 50%",
					"icon": "Ct0bUxo.png"
				},
				"e_3": {
					"effect_name": "Decrease in mobility",
					"description": "Enemies movement slowed by 60% for 2s while hit",
					"icon": "C42y0cZ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Increase Melody",
					"description": "Serenade gauge charges from the skill 200% faster",
					"icon": "r4mZaXK.png"
				},
				"e_2": {
					"effect_name": "Definite Fire",
					"description": "Skill duration reduced by 50%, skill damage increased by 300%, but you cannot change direction of the light while casting",
					"icon": "wYJaLXy.png"
				}
			}
		},
		"s_5": {
			"skill_name": "Harp of Rhythm",
			"cd": "24",
			"description": "Puts harp on the ground near you that shoots notes at enemy every 2 seconds within 14m with automatic targeted projectiles for 10 seconds",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "VgH9yFB.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Skill duration increased by 2s (means more strikes)",
					"icon": "BtWx8s1.png"
				},
				"e_2": {
					"effect_name": "Nimble Cast",
					"description": "Skill cast time decreased by 20%",
					"icon": "SoLHNDZ.png"
				},
				"e_3": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Agile judgment",
					"description": "Hits are made faster (additional 2 projectiles)",
					"icon": "4yeH6Qd.png"
				},
				"e_2": {
					"effect_name": "Blasting",
					"description": "Adds AoE damage to projectiles but reduces skill range to 6m",
					"icon": "nMssZEK.png"
				},
				"e_3": {
					"effect_name": "Increase Melody",
					"description": "Serenade gauge charges additional 1% with every hit",
					"icon": "R9u94O4.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Musical note Mark",
					"description": "Puts debuff on target: all damage increased by 4% for 4s with each tick (additive, 20% max)",
					"icon": "nGBwXyL.png"
				},
				"e_2": {
					"effect_name": "Giant harp",
					"description": "Harp size increased by 20% and skill damage by 50%",
					"icon": "Iv7fFBo.png"
				}
			}
		},
		"s_6": {
			"skill_name": "Bunch of Notes",
			"cd": "12",
			"description": "Ball with no collision flies one direction and slows enemies for 2s for 60%",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "ClBPvTw.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Nimble Cast",
					"description": "Skill cast time decreased by 20%",
					"icon": "nRO8OuT.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Wide Blow",
					"description": "Skill range increased by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Strengthen Notes",
					"description": "Skill damage increased by 30%",
					"icon": "5yIY8l5.png"
				},
				"e_3": {
					"effect_name": "Merciless Discharge",
					"description": "Adds additional projectile with it’s own cooldown timer (means 24s cooldown for 2 charges), but reduces skill damage by 30%",
					"icon": "WapQ0GV.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Reprise",
					"description": "Skill range decreased by 25%, ball explodes at the end of the trace with AoE damage",
					"icon": "4wG5uWK.png"
				},
				"e_2": {
					"effect_name": "Increase Melody",
					"description": "Serenade gauge charges from the skill 200% faster",
					"icon": "r4mZaXK.png"
				}
			}
		},
		"s_7": {
			"skill_name": "Conviction Core",
			"cd": "24",
			"description": "For 10s you are surrounded with 3 notes exploding when enemy is near you (one by one with cooldown ~ 1s)",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "NRapUOE.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Strengthen intelligence",
					"description": "Skill duration increased by 2s (means more strikes)",
					"icon": "BtWx8s1.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Enhanced Core",
					"description": "Skill damage increased by 15%",
					"icon": "E70cTPv.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Cold Core",
					"description": "Enemies movement slowed by 60% for 2s while hit",
					"icon": "pySlNIZ.png"
				},
				"e_2": {
					"effect_name": "Collective core",
					"description": "After enemy being hit by 1 of the notes damage increased by 50% for every other hit",
					"icon": "eajjkDJ.png"
				},
				"e_3": {
					"effect_name": "Mana Control",
					"description": "70% chance to not consume MP",
					"icon": "C5b57g8.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Core Explosion",
					"description": "Skill damage increased by 300% but number of notes reduces by 1",
					"icon": "xqsOSNR.png"
				},
				"e_2": {
					"effect_name": "Core increase",
					"description": "Number of notes increased by 2",
					"icon": "4wG5uWK.png"
				}
			}
		},
		"s_8": {
			"skill_name": "World of Music",
			"cd": "18",
			"description": "AoE winds near you pushes enemies back",
			"additional_effects": ["Back Attack", " Immune [stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "xo9aIfx.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Nimble Cast",
					"description": "Skill cast time decreased by 15%",
					"icon": "nRO8OuT.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Increase Melody",
					"description": "Serenade gauge charges from the skill 150% faster",
					"icon": "R9u94O4.png"
				},
				"e_2": {
					"effect_name": "Enhanced casting",
					"description": "Skill damage increased by 80%",
					"icon": "5yIY8l5.png"
				},
				"e_3": {
					"effect_name": "Damage reduction",
					"description": "Reduces damage to you by 40% while casting the skill",
					"icon": "Ct0bUxo.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "High speed Cast",
					"description": "Cooldown increased by 6s, range increased by 40% and you can cast skill 2 times",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "A wish for protection",
					"description": "You and party members touched by wind got shield buff 30% max hp for 4s",
					"icon": "FTiGgJR.png"
				}
			}
		},
		"s_9": {
			"skill_name": "Stigma",
			"cd": "24",
			"description": "You are casting void zone on the ground that ticks 5 times (once per second) and staggers enemies, every next tick damages 12.5% harder",
			"additional_effects": ["Neutralization [Medium]"],
			"type": ["Cast Time"],
			"time": [" 5 sec"],
			"icon": "TKNdyv2.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Nimble Cast",
					"description": "Skill cast time decreased by 30%",
					"icon": "nRO8OuT.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "20% chance for cooldown to be reduced by 24s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Hitting the eardrum",
					"description": "Enemies movement slowed by 60% for 2s while hit",
					"icon": "C42y0cZ.png"
				},
				"e_2": {
					"effect_name": "Enhanced casting",
					"description": "Skill damage increased by 20%",
					"icon": "5yIY8l5.png"
				},
				"e_3": {
					"effect_name": "Strong Stigma",
					"description": "Every next tick damages 25% harder instead of 12.5%",
					"icon": "TmNqtCH.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Strengthen sustainability",
					"description": "Skill duration increased by 2s (means more ticks)",
					"icon": "0BMcHYE.png"
				},
				"e_2": {
					"effect_name": "Condensation explosion",
					"description": "Skill duration decreased by 2s, but ticks rate increased by 100%",
					"icon": "32F9lxY.png"
				}
			}
		},
		"s_10": {
			"skill_name": "Rhythm Buckshot",
			"cd": "16",
			"description": "You are pulling harp strings backwards and knock down enemies in a cone direction",
			"additional_effects": ["Pierce [level 1]", " Neutralization [Low]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "UoOtdD7.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Increase Melody",
					"description": "Serenade gauge charges from the skill 30% faster",
					"icon": "QRTcZZ1.png"
				},
				"e_2": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Strengthen Destruction",
					"description": "Enemy falls at 2x times increased distance",
					"icon": "DUWC0Nh.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Achievement of training",
					"description": "Skill range increased by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Strength",
					"description": "Become super armor during the cast a skill",
					"icon": "a7DgAOn.png"
				},
				"e_3": {
					"effect_name": "Strong shot",
					"description": "Skill damage increased by 25%, knockdown time increased by 25%",
					"icon": "Ntx7DAR.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Nimble Cast",
					"description": "Skill cast time decreased by 20%, critical chance increased by 50%",
					"icon": "JMU1YLm.png"
				},
				"e_2": {
					"effect_name": "Shooting Concentration",
					"description": "Skill cast time increased by 0.5s, skill damage increased by 30%",
					"icon": "hXBL5OK.png"
				}
			}
		},
		"s_11": {
			"skill_name": "Overtorture of Storm",
			"cd": "16",
			"description": "AoE lightning around you stuns enemies for 2 seconds",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "qDXNlN1.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mana Control",
					"description": "75% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 2s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Capture weakness",
					"description": "Skill damage on boss monsters increased by 20%",
					"icon": "UXhRg0Q.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 15%",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Increase Melody",
					"description": "Serenade gauge charges from the skill 150% faster",
					"icon": "R9u94O4.png"
				},
				"e_3": {
					"effect_name": "Lightning Strengthening",
					"description": "Skill damage increased by 80%",
					"icon": "5yIY8l5.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Powerful Overture",
					"description": "Lightning stun duration decreased by 1, but has overshock effect that damages area twice after initial strike",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Lightning Concentration",
					"description": "Skill damage increased by 25% and lightning strikes in a large cone area",
					"icon": "JeryhMy.png"
				}
			}
		},
		"s_12": {
			"skill_name": "Sound Vibrations",
			"cd": "20",
			"description": "You are slowly casting AoE spell that deals initial damage that knocks down enemies with void zone dealing damage 4 times with stagger effect",
			"additional_effects": ["Pierce [level 2]", " Neutralization [Medium]"],
			"type": ["Point"],
			"time": [""],
			"icon": "hNvtG2h.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Increase Melody",
					"description": "Serenade gauge charges from the skill 30% faster",
					"icon": "QRTcZZ1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Chord enhancement",
					"description": "Skill damage increased by 50%",
					"icon": "5yIY8l5.png"
				},
				"e_2": {
					"effect_name": "Achievement of training",
					"description": "Skill range increased by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_3": {
					"effect_name": "[Skill Effect]",
					"description": "Skill tick rate increased by 30%",
					"icon": "cD0keDA.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "[Skill Damage]",
					"description": "Skill damage increased by 35%",
					"icon": "xqsOSNR.png"
				},
				"e_2": {
					"effect_name": "[Skill Effect]",
					"description": "Skill damages twice with initial strike but no after damage after",
					"icon": "4wG5uWK.png"
				}
			}
		},
		"s_13": {
			"skill_name": "Prelude to Death",
			"cd": "24",
			"description": "You are standing still while channeling harp play that deals damage 2 times in AoE zone around you and with each tick applies debuff that slows enemies down by 20% and decreases their attack by 30% for 2 seconds. When debuff is over it deals additional damage",
			"additional_effects": ["Neutralization [Low]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "JjyaOQ3.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Increase Melody",
					"description": "Serenade gauge charges from the skill 30% faster",
					"icon": "QRTcZZ1.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "[Skill Effect]",
					"description": "Last tick of damage increased by 50%",
					"icon": "5yIY8l5.png"
				},
				"e_2": {
					"effect_name": "[Skill Effect]",
					"description": "Debuff additionally gets 10% more slow reduction and 10% decrease in attack",
					"icon": "C42y0cZ.png"
				},
				"e_3": {
					"effect_name": "[Skill Effect]",
					"description": "Additional tick of damage while harp play",
					"icon": "POnpICE.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "[Skill Effect]",
					"description": "Skill damage increased by 30% and additional AoE damage if target dies",
					"icon": "hXBL5OK.png"
				},
				"e_2": {
					"effect_name": "[Skill Effect]",
					"description": "Skill range increased by 25% and when debuff is over target falls asleep for 4s",
					"icon": "uMM49tX.png"
				}
			}
		},
		"s_14": {
			"skill_name": "Light Note",
			"cd": "24",
			"description": "You are standing still while channeling harp play with AoE zone around mouse cursor. It ticks 3 times every time staggering enemies",
			"additional_effects": ["Destruction [level 1]", " Neutralization [Low]"],
			"type": ["Point"],
			"time": [""],
			"icon": "jsQOTOw.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Nimble Cast",
					"description": "Skill cast time is reduced by 15%",
					"icon": "nRO8OuT.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strength",
					"description": "Become super armor during the cast a skill",
					"icon": "a7DgAOn.png"
				},
				"e_2": {
					"effect_name": "Weak exposure",
					"description": "Puts debuff on target: all damage increased by 10% for 2s with each tick (not additive, 10% max)",
					"icon": "5yIY8l5.png"
				},
				"e_3": {
					"effect_name": "Strengthen sustain",
					"description": "Additional tick of damage while harp play",
					"icon": "POnpICE.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Concentration of light",
					"description": "Skill damage increased by 50%",
					"icon": "3PXf9mr.png"
				},
				"e_2": {
					"effect_name": " Protection of light",
					"description": "When party member in the zone of effect grants damage reduction by 75% for 4s",
					"icon": "nGBwXyL.png"
				}
			}
		},
		"s_15": {
			"skill_name": "March of Notes",
			"cd": "20",
			"description": "You are channeling skill for 5 seconds (you can move) every second producing a ball that follows nearest enemy exploding with a touch and applying slow movement debuff for 50% for 2 seconds",
			"additional_effects": ["Immune [stiffness]"],
			"type": ["Hold"],
			"time": [""],
			"icon": "vnSrHhR.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "light march",
					"description": "Increases your movement speed by 15% when channeling the skill",
					"icon": "ZYlrZ9I.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Achievement of training",
					"description": "Skill range increased by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Strengthen the March",
					"description": "Enemies hit by the balls attack reduced by 30% for 3s",
					"icon": "2JPSkpi.png"
				},
				"e_3": {
					"effect_name": "Decrease in mobility",
					"description": "Enemies hit by the balls slowed additional 30% for 2s",
					"icon": "C42y0cZ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "threatening march",
					"description": "Skill damage increased by 100% and puts debuff on target: all damage increased by 10% for 3s",
					"icon": "Cp9hVlE.png"
				},
				"e_2": {
					"effect_name": "March of the melody",
					"description": "Serenade gauge charges from the skill 200% faster",
					"icon": "NLHXPyu.png"
				}
			}
		},
		"s_16": {
			"skill_name": "Top Performance",
			"cd": "30",
			"description": "AoE wave damages and pushes enemies back at the same time buffing you and party members within the zone with attack speed by 16% and MP regeneration by 80% for 10 seconds",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "4i7p5Zu.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 5s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Nimble Cast",
					"description": "Skill cast time decreased by 20%",
					"icon": "nRO8OuT.png"
				},
				"e_3": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strong performance",
					"description": "Grants to allies additional buff for 5% str, 5% int and 5% spc",
					"icon": "r8r0RgP.png"
				},
				"e_2": {
					"effect_name": "Performance of valor",
					"description": "Debuffs enemies with 30% attack reduce for 10s",
					"icon": "2JPSkpi.png"
				},
				"e_3": {
					"effect_name": "Achievement of training",
					"description": "Skill range increased by 20%",
					"icon": "SPgHuhl.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Violent performance",
					"description": "Grants to allies additional buff for 15% critical chance and 50% critical damage increase",
					"icon": "c9NTWOQ.png"
				},
				"e_2": {
					"effect_name": "Play for me",
					"description": "Skill damage increased by 100% and all buffs are increase by x2 (32 attack speed, 160% MP regeneration, 10% str/int/spc if II1 taken)",
					"icon": "S2Ogv2N.png"
				}
			}
		},
		"s_17": {
			"skill_name": "Guardian Performance",
			"cd": "30",
			"description": "Players harp to buff you and your party members with reduce damage by 65% for 12 seconds for 3 attacks",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "Ufp7gar.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 5s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Nimble Cast",
					"description": "Skill cast time decreased by 20%",
					"icon": "nRO8OuT.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Unfinished guardian",
					"description": "If Guardian Performance buff ends due to time limit, it will provide additional buff of shields for 15% of max HP for 12s",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Strong guard",
					"description": "Further increases buff effect by 15% damage reduction and 3s duration",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Retribution of defense",
					"description": "When Guardian Performance ends it explodes and inflicts AoE damage in 4m radius",
					"icon": ""
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Long guard",
					"description": "Increases the amount of attacks for buff from 3 to 5",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Wish for protection",
					"description": "Increases evasion rate by 30% for the duration of the buff",
					"icon": ""
				}
			}
		},
		"ult": {
			"skill_name": "Symphony",
			"cd": "300",
			"description": "You play symphony protecting you and party members with shield 100% max hp for 5 seconds and dealing damage to enemies around you",
			"additional_effects": ["Neutralization [Medium]", " Back Attack", " Immune [Hit Recovery & Abnormal Status]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "Du2wCmI.png"
		}
	},
	"battlemaster": {
		"s_1": {
			"skill_name": "Heaven Cleaving Kick",
			"cd": "12",
			"description": "Strike forward. When pressed again, that deals additional damage and repels the enemy",
			"additional_effects": ["Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "RsbpPoY.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Movement distance",
					"description": "Movement distance can increases by 1m",
					"icon": "frf2qov.png"
				},
				"e_2": {
					"effect_name": "Ascension angle",
					"description": "(?)",
					"icon": "DUWC0Nh.png"
				},
				"e_3": {
					"effect_name": "Attack speed",
					"description": "Attack speed increases by 10%",
					"icon": "9VyE0qU.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Ice Strike",
					"description": "When the attack hits 2 or more enemies freeze an enemy for 2s. Cooldown increased by 6s",
					"icon": "pySlNIZ.png"
				},
				"e_2": {
					"effect_name": "Range",
					"description": "Skill range increased by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_3": {
					"effect_name": "Amplification",
					"description": "2 hits on a single target increase attack power by 15% for 4s",
					"icon": "AFgfZrT.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Crushing Blade",
					"description": "The first one turns into a frenzy. Damage to enemies increases by up to 175%",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Concentration",
					"description": "Increases the gain of the identity gauge by 150%",
					"icon": "NLHXPyu.png"
				}
			}
		},
		"s_2": {
			"skill_name": "Thunder Kick",
			"cd": "8",
			"description": "Inflicts damage in two attacks on the enemy. The first attack causes it to fall, then the second attack hits it on the ground and inflicts additional damage to the targets in the air",
			"additional_effects": ["Back Attack", " Damage immunity"],
			"type": ["Tap"],
			"time": [""],
			"icon": "Ml7F6qY.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Movement distance",
					"description": "Movement distance can increases by 2m",
					"icon": "frf2qov.png"
				},
				"e_2": {
					"effect_name": "Transcendental",
					"description": "Increases the gain of the identity gauge by 30% by attacking",
					"icon": "11MLrbC.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "DXzNTSi.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Increase damage",
					"description": "Increase the damage by 30%",
					"icon": "HWuM5x7.png"
				},
				"e_2": {
					"effect_name": "Thunderbolt",
					"description": "When this skill deals damage to the enemy, the enemy suffers a 30% increase in damage",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Achievement of training",
					"description": "Skill range increased by 20%",
					"icon": "SPgHuhl.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Lightning",
					"description": "An attack will be added to take a quick hit after one hit",
					"icon": "wYJaLXy.png"
				},
				"e_2": {
					"effect_name": "Thump",
					"description": "(?) Damage to enemies increases by 15%",
					"icon": "EIUwvad.png"
				}
			}
		},
		"s_3": {
			"skill_name": "Triple Punch",
			"cd": "10",
			"description": "Performs three hits, the latter deals increased damage",
			"additional_effects": ["Slicing [level 1]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "i0aUVS2.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "The enemy gets the dark state for 3 seconds, reducing his physical and magic defense by 10%",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Soul Attack",
					"description": "Increases the gain of the identity gauge by 100% by hitting a single target with the last attack",
					"icon": "11MLrbC.png"
				},
				"e_3": {
					"effect_name": "Increase damage",
					"description": "Increase the damage by 15%",
					"icon": "akITDDZ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Damage reduction",
					"description": "Reduces damage to you by 40% while using the skill",
					"icon": "S2Ogv2N.png"
				},
				"e_2": {
					"effect_name": "Resonance",
					"description": "Whenever you hit multiple hits on a target, the damage dealt to that target is increased by 15%",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 3s",
					"icon": "bkMVKSJ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Thunder",
					"description": "Movement distance increased by 2m, attack speed increased by 20%. The damage done to the enemy by the last strike increases by 50%",
					"icon": "JMU1YLm.png"
				},
				"e_2": {
					"effect_name": "Damage",
					"description": "The violent fists are changed to 5 manual attacks <br>Skill damage increased by 50%",
					"icon": "Bybk6tw.png"
				}
			}
		},
		"s_4": {
			"skill_name": "Pummel",
			"cd": "16",
			"description": "Deals 9 quick strike",
			"additional_effects": ["Pierce [level 1]", " Neutralization [Medium]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "WGwDniP.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Attack speed",
					"description": "When a hit reaches its target, the attack speed increases by 20% for 3 seconds",
					"icon": "SKW6lN3.png"
				},
				"e_2": {
					"effect_name": "Glowing",
					"description": "When hit by a melee attack, the enemy's critical strike chance is reduced by up to 15% for 3 seconds",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 20%",
					"icon": "rlevb4r.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Dash",
					"description": "Dash up to 6 meters to reach the enemy",
					"icon": "DLz43Zq.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "bkMVKSJ.png"
				},
				"e_3": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 30%",
					"icon": "a5qp6Tt.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Quietens",
					"description": "The last move is transformed into uppercut, increasing the critical chance by 30% and the damage dealt to the enemy by 50%",
					"icon": "tolsJTT.png"
				},
				"e_2": {
					"effect_name": "Unbelievable",
					"description": "While using the skill, the character is immune to attacks and ignores 40% of the enemy's physical defense",
					"icon": "hXBL5OK.png"
				}
			}
		},
		"s_5": {
			"skill_name": "Crescent Kick",
			"cd": "16",
			"description": "Charge to the enemy and deal damage. After that, cast a sequence on the enemy, hitting him twice with fists and once with a kick",
			"additional_effects": ["Neutralization [Medium]", " Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "xteJ2lN.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 15%",
					"icon": "ohvDbcU.png"
				},
				"e_2": {
					"effect_name": "Capture weakness",
					"description": "Increases the damage dealt to enemies immune to controls by 30%",
					"icon": "UXhRg0Q.png"
				},
				"e_3": {
					"effect_name": "Incandescent angle",
					"description": "Increases the gain of the identity gauge by 100% when performing the fast kick",
					"icon": "DI0jbqj.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Movement distance",
					"description": "The movement distance of the first shot is increased by 3 meters",
					"icon": "DLz43Zq.png"
				},
				"e_2": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 30%",
					"icon": "SPgHuhl.png"
				},
				"e_3": {
					"effect_name": "A kick of the transcendence",
					"description": "Attack speed is increased by 20% and it becomes possible to change direction<br> During the last attack, it is immune to attack",
					"icon": "a7DgAOn.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Damage increased to enemies by 80% if you hit 2<br> Increases damage by up to 200% when simultaneously hitting 6 or more<br> Damage to single targets increases by 250%",
					"icon": "3PXf9mr.png"
				},
				"e_2": {
					"effect_name": "Full moon angle",
					"description": "The preparation for the final blow is getting longer<br> Damage to enemies increased by 150%",
					"icon": "hXBL5OK.png"
				}
			}
		},
		"s_6": {
			"skill_name": "Ground Pound",
			"cd": "16",
			"description": "An earthquake occurs up to 5 times and deals damage to each attacker within range",
			"additional_effects": ["Neutralization [Medium]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "fle5gaD.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Vibration strengthening",
					"description": "First hit, it knockdown the enemy",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Strong Attack",
					"description": "Damage dealt to enemies who are knockdown is increased by 25%",
					"icon": "Ntx7DAR.png"
				},
				"e_3": {
					"effect_name": "Echo of the earth",
					"description": "Earthquake duration increased by 1 second",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Stun",
					"description": "Every time an earthquake occurs, it has a 30% chance to stun the enemy",
					"icon": "eB8ZwLp.png"
				},
				"e_2": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 50%",
					"icon": "a5qp6Tt.png"
				},
				"e_3": {
					"effect_name": "Firmness",
					"description": "The jump animation is removed, now the earth is punched by the character, which reduces the cast time",
					"icon": "nMssZEK.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Crustal change",
					"description": "The number of earthquakes is reduced to 3<br> Last earthquake causes a larger explosion, knockdown<br> Damage increased by 300%",
					"icon": ""
				},
				"e_2": {
					"effect_name": "A great earthquake again",
					"description": "The attack range of the earthquake is increased by 30%<br> The time between earthquakes is reduced and the number of earthquakes is doubled",
					"icon": "32F9lxY.png"
				}
			}
		},
		"s_7": {
			"skill_name": "Dragon Spiral Kick",
			"cd": "16",
			"description": "Charge to an enemy and attack by dealing damage up to 5 times. If the enemy is hit in the air extra damage is applied",
			"additional_effects": ["Back Attack", " Immune [stiffness]"],
			"type": ["Combo"],
			"time": [""],
			"icon": "9tGnfng.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Attack speed",
					"description": "When rushing, increase the speed of rotation as much as possible<br> Attack speed and attack range increased by 10%",
					"icon": "9VyE0qU.png"
				},
				"e_2": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 20%",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Critical hit",
					"description": "Increases Critical Hit Rate by 15%",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 4s",
					"icon": "bkMVKSJ.png"
				},
				"e_2": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 100%",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "AP buff",
					"description": "AP increased by 20% for 3s",
					"icon": "eajjkDJ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Fallen leaves",
					"description": "Slide forward, and allow you to knockdown enemies by pressing the skill key again<br> You can use the windmill during sliding",
					"icon": "tolsJTT.png"
				},
				"e_2": {
					"effect_name": "Order ascension angle",
					"description": "In the next attack, the enemy will be thrown into the air<br> Damage increased by 50%",
					"icon": "FpXyekj.png"
				}
			}
		},
		"s_8": {
			"skill_name": "Whisper of the Wind",
			"cd": "30",
			"description": "Increases movement speed and attack speed by 16% for 6s",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "1YdsyPu.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Swift Movement",
					"description": "Increases movement speed by 10% for 6s",
					"icon": "wGYSIwd.png"
				},
				"e_2": {
					"effect_name": "Evasion Master",
					"description": "Increases evasion rate by 15% for 6s",
					"icon": "3MH8R85.png"
				},
				"e_3": {
					"effect_name": "Critical resistance",
					"description": "Critical resistance of party members increases by 25% for 6s",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Reduction damage",
					"description": "30% reduction in damage to party members for 6 seconds",
					"icon": "oVtc2zd.png"
				},
				"e_2": {
					"effect_name": "Critical hit",
					"description": "Critical hit rate of party members increases by 25% for 6s",
					"icon": "AFgfZrT.png"
				},
				"e_3": {
					"effect_name": "Maintain strong",
					"description": "The duration of the effect of the skill is doubled",
					"icon": "POnpICE.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 10s",
					"icon": "mJ47SLb.png"
				},
				"e_2": {
					"effect_name": "Super-strong",
					"description": "Causes powerful damage, also repelling enemies<br> The damage dealt to the enemies will result in the filling of the identity meter",
					"icon": ""
				}
			}
		},
		"s_9": {
			"skill_name": "Electric Wind Kick",
			"cd": "20",
			"description": "(?)",
			"additional_effects": ["Neutralization [Mid-High]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "JV3b1w9.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Critical Hit",
					"description": "Increases Critical Hit Rate by 15%",
					"icon": "HR5NqtN.png"
				},
				"e_2": {
					"effect_name": "Hydropower",
					"description": "The speed of attack and movement of the enemy is reduced by 20% for 3 seconds",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Burns",
					"description": "The enemy burns for 5 seconds when hit by the attack",
					"icon": "ohvDbcU.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Wide Blow",
					"description": "Increases attack range by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 5s",
					"icon": "bkMVKSJ.png"
				},
				"e_3": {
					"effect_name": "Agile judgment",
					"description": "Attack speed increased by 20%",
					"icon": "4yeH6Qd.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Wrath of Ange",
					"description": "Changes the skill in a rotating kick of 4 turns diagonally, with a final hit on the ground<br> Dealing 20% more damage to enemies",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Extreme water lily",
					"description": "Increases the duration of the skill by 1 second and facilitates the change of direction while using the skill<br>Conflict with normal monster is ignored when moving during holding(?)<br>Increases damage by 50%",
					"icon": "Pv2SzkI.png"
				}
			}
		},
		"s_10": {
			"skill_name": "Phoenix Dive",
			"cd": "18",
			"description": "Jump in the air, then fall heavily on the ground. Damage is dealt at the point of fall, then deals a final blow while backing up while dealing additional damage",
			"additional_effects": ["Neutralization [Low]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "CQL3dLc.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 20%",
					"icon": "rlevb4r.png"
				},
				"e_2": {
					"effect_name": "light target",
					"description": "Targets that are stunned by this skill take 20% more damage",
					"icon": "DUWC0Nh.png"
				},
				"e_3": {
					"effect_name": "Burns",
					"description": "The enemy burns for 5 seconds when hit by the attack",
					"icon": "ohvDbcU.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Fierce attack",
					"description": "An explosion occurs when you drop from the air and shoot the floor<br>Hit the enemy in the air<br>Damage increased by 10%",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Weak Point",
					"description": "Increases damage dealt to enemies immune to controls by 50%",
					"icon": "a5qp6Tt.png"
				},
				"e_3": {
					"effect_name": "frozen",
					"description": "When attacking, the enemy is frozen for 2s",
					"icon": "pySlNIZ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "An unstoppable surprise",
					"description": "You can start the skill a second time by pressing the skill key again<br>Cooldown increased by 6s",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "Attack speed",
					"description": "Attack speed increased by 20%<br>Movement distance increased by 5m",
					"icon": "JMU1YLm.png"
				}
			}
		},
		"s_11": {
			"skill_name": "Roar of Valor",
			"cd": "25",
			"description": "Shoots a momentary spell to inflict damage and expels nearby enemies. Reduces critical strike resistance by 25% for 6s",
			"additional_effects": ["Destruction [level 1]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "s1bpESs.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mind Enhancement",
					"description": "Decrease MP consumption by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Wide Blow",
					"description": "Attack Range increases by 20%",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Concentration",
					"description": "Increases the gain of the identity gauge by 25% by attacking",
					"icon": "11MLrbC.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Impact Reinforcement",
					"description": "The skill turns into a charge, the damage dealt is increased by 100%, and nearby enemies are knockdown",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Mobility weakness",
					"description": "Reduces the enemy's movement speed by 60% for 3s",
					"icon": "C42y0cZ.png"
				},
				"e_3": {
					"effect_name": "The afterimage of the king",
					"description": "Increases the duration of the Roar of Valor effect by 2s",
					"icon": "2JPSkpi.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Deadly wave",
					"description": "When a critical hit occurs, the target receives a 15% reduction in attack power",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown time decreases by 5s",
					"icon": "DXzNTSi.png"
				}
			}
		},
		"s_12": {
			"skill_name": "Room fire",
			"cd": "25",
			"description": "Kicks, inflicting damage and sending the enemy through the air. The player moves quickly to then hit twice more, inflicting additional damage to the enemy in the air",
			"additional_effects": ["Neutralization [Low]", " Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "SdMX0r4.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Concentration",
					"description": "Increases the gain of the identity gauge by 25% by attacking",
					"icon": "11MLrbC.png"
				},
				"e_2": {
					"effect_name": "Weak point",
					"description": "Increases the damage dealt to enemies immune to controls by 30%",
					"icon": "UXhRg0Q.png"
				},
				"e_3": {
					"effect_name": "Sharp footwork",
					"description": "Hit the enemy without falling on it, reducing the time of the animation of the skill",
					"icon": "j724HUx.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Attack range",
					"description": "Increases attack range and attack speed by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Shadows of darkness",
					"description": "Enemies hit by the last attack get the dark effect, reducing their physical and magic defense by 30% for 5s",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Intense lightning",
					"description": "Enemies hit by the last attack have a 50% chance of being electrified for 4s",
					"icon": "h9ZXI1D.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Exceptiona",
					"description": "After squatting, you jump forward blowing an ultra-strong kick, increasing your damage by 150% and knockdown your target",
					"icon": "6vzVrvN.png"
				},
				"e_2": {
					"effect_name": "Exaggerated ability",
					"description": "After the kick, you jump once more, the enemies hit by this last hit will take 40% more damage and will be knockdown",
					"icon": "FpXyekj.png"
				}
			}
		},
		"s_13": {
			"skill_name": "Internal combustion",
			"cd": "40",
			"description": "The wind is around the player and instantly deals damage to nearby enemies. The wind holds for 20 seconds and continuously inflicts damage to enemies while repelling them. The movement of the skill is directed by the player's cursor",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "JpO3CiO.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Burning Armor",
					"description": "The damage received at the launch of the skill is reduced by 10%",
					"icon": "SfUebeR.png"
				},
				"e_2": {
					"effect_name": "Lightfoot",
					"description": "Increases movement speed by 30% for 3s while launching the skill",
					"icon": "ZYlrZ9I.png"
				},
				"e_3": {
					"effect_name": "Deadly acting",
					"description": "Increases the gain of the Identity Meter by 50% by attacking",
					"icon": "11MLrbC.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "A road of commitment",
					"description": "The duration of the internal combustion is increased by 8s",
					"icon": "POnpICE.png"
				},
				"e_2": {
					"effect_name": "Technology loss",
					"description": "Reduces the cooldown by 15s, but also decreases the duration by 4s",
					"icon": "bkMVKSJ.png"
				},
				"e_3": {
					"effect_name": "A fierce battle",
					"description": "Increases damage by 5% for 2s, cumulative up to 10 times",
					"icon": "hbiDGfp.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Attack range",
					"description": "Increases attack range by 20%<br>Increases critical damage by 50%",
					"icon": "bjbQ0Fr.png"
				},
				"e_2": {
					"effect_name": "Explosion in the air",
					"description": "When a gust of wind blows, it causes an explosion, inflicting 50% of basic skill damage and detonating the enemy",
					"icon": "xqsOSNR.png"
				}
			}
		},
		"s_14": {
			"skill_name": "Art: Spiral Blast",
			"cd": "12",
			"description": "Performs a powerful, smashing attack that deals damage to enemies",
			"additional_effects": ["Pierce [level 2]", " Neutralization [Medium]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "gSv17cq.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Weak Point",
					"description": "Increases the damage dealt to enemies immune to controls by 30%",
					"icon": "UXhRg0Q.png"
				},
				"e_2": {
					"effect_name": "Attack range",
					"description": "Attack range increased by 20%",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Absorption blow",
					"description": "During the preparation of this attack, the player is immune to dizziness. A model is created that represents the negative and positive forces on the ground, the surrounding enemies are pulled into the attack",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Attack speed",
					"description": "Attack speed increased by 10%",
					"icon": "4yeH6Qd.png"
				},
				"e_2": {
					"effect_name": "Сollection",
					"description": "30% chance of acquire 1 globe of identity",
					"icon": "UnhMZ84.png"
				},
				"e_3": {
					"effect_name": "Dead set",
					"description": "Increase AP by 20% for 5s",
					"icon": "eajjkDJ.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Bastion of Destruction",
					"description": "50% more damage to targets directly in front of the attack.",
					"icon": "hXBL5OK.png"
				},
				"e_2": {
					"effect_name": "Meditation Strike",
					"description": "The skill no longer repels the enemy but causes a burn for 3ы",
					"icon": "uMM49tX.png"
				}
			}
		},
		"s_15": {
			"skill_name": "Art: Dragons Ascend",
			"cd": "24",
			"description": "Summons a circle of flames that deals damage by gathering enemies and then releases spiraling Dragon's energy upwards to hit enemies 5 times",
			"additional_effects": ["Destruction [Level 2]", " Neutralization [Low]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "ahoHvCF.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Attack Range",
					"description": "Attack Range increases by 20%",
					"icon": "rlevb4r.png"
				},
				"e_2": {
					"effect_name": "Сollection",
					"description": "40% chance of acquire 1 globe of identity",
					"icon": "11MLrbC.png"
				},
				"e_3": {
					"effect_name": "Strength",
					"description": "While using the skill, the player becomes immune to attacks",
					"icon": "lyseDv0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Ascension of the Dragon Dragon",
					"description": "When the shape of the Red Dragon rises, the damage dealt to the enemy increases by 20%",
					"icon": "cXMAUIN.png"
				},
				"e_2": {
					"effect_name": "Ascension of the Black Dragon",
					"description": "The shape of the red dragon ascends and the damage it inflicts on the enemy increases by 20%",
					"icon": "QpObGxT.png"
				},
				"e_3": {
					"effect_name": "Finishing attack",
					"description": "Deals 50% more damage to enemies with <30% health",
					"icon": "hbiDGfp.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Eye of the Storm",
					"description": "Now, the skill allows enemies to pulled up to 2.5 seconds<br>The skill begins when the skill key is released or the 2.5 seconds elapse<br>Increased damage to immune enemies by 50% against the pull effect",
					"icon": "Pv2SzkI.png"
				},
				"e_2": {
					"effect_name": "Finishing Blow",
					"description": "The last attack will have a 100% chance of being a critical hit",
					"icon": "s2QfHGg.png"
				}
			}
		},
		"s_16": {
			"skill_name": "Art: Lightning Punch",
			"cd": "16",
			"description": "Unleashes an aura of electricity that deals 3 damage to enemies. Enemies become stunned for 2s, and receive 20% more free elemental damage during the spell",
			"additional_effects": ["Neutralization [Low]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "wWPyUXb.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Critical hit",
					"description": "Increase critical hit rate by 15%",
					"icon": "GjqRFi1.png"
				},
				"e_2": {
					"effect_name": "Сollection",
					"description": "20% chance of acquire 1 globe of identity",
					"icon": "11MLrbC.png"
				},
				"e_3": {
					"effect_name": "Attack speed",
					"description": "Increases attack speed by 20%",
					"icon": "nRO8OuT.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Dispatch",
					"description": "Lightning turns into red lightning<br>Damage increased by 25%",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Attack Range",
					"description": "Attack Range increased by 30%",
					"icon": "SPgHuhl.png"
				},
				"e_3": {
					"effect_name": "Lightning",
					"description": "Increases damage dealt to enemies by 50% over time",
					"icon": "AFgfZrT.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Electric shock",
					"description": "Removes the stun effect against enemies, but overloads the explosion, repelling nearby enemies<br>Damage increased by 50%",
					"icon": "xqsOSNR.png"
				},
				"e_2": {
					"effect_name": "Dangerous deal",
					"description": "Cooldown increased by 8s<br>Stun duration increased by 2s",
					"icon": "mJ47SLb.png"
				}
			}
		},
		"s_17": {
			"skill_name": "Art: Tornado",
			"cd": "24",
			"description": "The player rises in the air and turns quickly to create a tornado. Each enemy caught in the whirlwind suffers damage with each hit. The skill can be held for 4 seconds while continuing to attract enemies. The movement of the skill is directed by the player's cursor",
			"additional_effects": ["Neutralization [Low]", " Back Attack", " Immune [stiffness]"],
			"type": ["Hold"],
			"time": [" 4 sec"],
			"icon": "3URNzqj.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Weak Point",
					"description": "Increases damage dealt to enemies immune to controls by 30%",
					"icon": "UXhRg0Q.png"
				},
				"e_2": {
					"effect_name": "Cold storm",
					"description": "30% reduction in damage taken while launching the skill",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Lightning Storm",
					"description": "Each blow in the lightning storm has a 30% chance to increase critical damage by 10%",
					"icon": "HR5NqtN.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Critical hit",
					"description": "Increase critical hit rate by 30%",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Сollection",
					"description": "60% chance of acquire 1 globe of identity",
					"icon": "UnhMZ84.png"
				},
				"e_3": {
					"effect_name": "Movement speed",
					"description": "Movement speed of while using the skill is increased by 8%<br>Duration of the swirl is increased by 1s",
					"icon": "LmuvcKG.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Stir",
					"description": "As long as the vortex rotates, the damage is increased by 5%, up to a maximum of 75%",
					"icon": "3PXf9mr.png"
				},
				"e_2": {
					"effect_name": "An endless typhoon",
					"description": "When the swirl ends, it dispels forcefully and deals 40% of the basic skill damage to the enemy",
					"icon": "tolsJTT.png"
				}
			}
		},
		"s_18": {
			"skill_name": "Art: Exploding Quake",
			"cd": "30",
			"description": "Make a powerful punch that causes 3 ground explosions in its wake. Explosions advance forward and repel enemies on their way, causing damage",
			"additional_effects": ["Neutralization [Medium]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "4EFHTrd.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Weak Point",
					"description": "Increases damage dealt to enemies immune to controls by 30%",
					"icon": "UXhRg0Q.png"
				},
				"e_2": {
					"effect_name": "The Last Blast",
					"description": "The damage caused by the third explosion is increased by 25%",
					"icon": "DI0jbqj.png"
				},
				"e_3": {
					"effect_name": "Rough Explosion",
					"description": "Increase AP by 3% for 7s",
					"icon": "akITDDZ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Сollection",
					"description": "75% chance of acquire 1 globe of identity",
					"icon": "UnhMZ84.png"
				},
				"e_2": {
					"effect_name": "Frost Explosion",
					"description": "In attacking, the enemy is frozen for 4s",
					"icon": "pySlNIZ.png"
				},
				"e_3": {
					"effect_name": "Flame Explosion",
					"description": "By attacking, up to 6 enemies can be burned for 5s",
					"icon": "cXMAUIN.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Endless destruction",
					"description": "The blast spreads in three directions<br>Damage increased by 30%",
					"icon": "4wG5uWK.png"
				},
				"e_2": {
					"effect_name": "big explosion",
					"description": "After the third explosion, the player jumps once more, causing a massive explosion<br>Damage increased by 60%",
					"icon": "xqsOSNR.png"
				}
			}
		},
		"ult": {
			"skill_name": "",
			"cd": "300",
			"description": "You play symphony protecting you and party members with shield 100% max hp for 5 seconds and dealing damage to enemies around you",
			"additional_effects": ["Neutralization [High]"],
			"type": ["Hold"],
			"time": [""],
			"icon": "Du2wCmI.png"
		}
	},
	"devilhunter": {
		"s_1": {
			"skill_name": "Spiral tracker",
			"cd": "8",
			"description": "Launch a gun at the targeted location. It whirls and deals damage to all enemies in the area",
			"additional_effects": [""],
			"type": ["Point"],
			"time": [""],
			"icon": "2Y3dwCG.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Range",
					"description": "Increase the skill range by 2m",
					"icon": "SoLHNDZ.png"
				},
				"e_2": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 1s",
					"icon": "DXzNTSi.png"
				},
				"e_3": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 20%",
					"icon": "UXhRg0Q.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Swift Movement",
					"description": "Increases movement speed by 10% for 6s",
					"icon": "wGYSIwd.png"
				},
				"e_2": {
					"effect_name": "Growing bullet",
					"description": "Each time your attack hits 3 times<br>Damage is increased by 10%",
					"icon": "TmNqtCH.png"
				},
				"e_3": {
					"effect_name": "Concentrated shot",
					"description": "Damage done to enemies in the center of the area is increased by 30%",
					"icon": "hbiDGfp.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Swirl",
					"description": "Creates a magnetic field and the attack range increases by 15%<br>Slowly draw the enemies into the center of the circle",
					"icon": "MbPnoxn.png"
				},
				"e_2": {
					"effect_name": "High-speed rotation",
					"description": "The duration of the attack increases by 1.2 s<br>Increases maximum damage by 25%",
					"icon": "0BMcHYE.png"
				}
			}
		},
		"s_2": {
			"skill_name": "Execution",
			"cd": "12",
			"description": "Charge the enemy and launch into the air, and then you retreat to strafe him",
			"additional_effects": ["Back Attack", " Immune [stiffness]"],
			"type": ["Combo"],
			"time": [""],
			"icon": "PSrET1n.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Movement distance",
					"description": "Movement distance can increases by 1m",
					"icon": "frf2qov.png"
				},
				"e_2": {
					"effect_name": "Big Foot",
					"description": "Upper kick is changed to kick, attack rate is increased by 30%<br>Increase the height of the enemy in the air",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Damage increased",
					"description": "Upper kick damage increases by 50%",
					"icon": "DI0jbqj.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Range",
					"description": "Increases the attack range by 30% when using a handgun",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Strength",
					"description": "Become super armor during the cast a skill",
					"icon": "a7DgAOn.png"
				},
				"e_3": {
					"effect_name": "Fire",
					"description": "Deals 30% more damage to enemies with >50% health",
					"icon": "cimRspI.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Air Strike",
					"description": "Increases the damage done to enemies in the air by 100%",
					"icon": "vgLdE9L.png"
				},
				"e_2": {
					"effect_name": "Strafing indiscriminately",
					"description": "Increases the number of shots by 4<br>Damage increased by 10%",
					"icon": ""
				}
			}
		},
		"s_3": {
			"skill_name": "Plasma Bullet",
			"cd": "16",
			"description": "Shoot a slow plasma ball that deals damage to enemies in its path",
			"additional_effects": [""],
			"type": ["Tap"],
			"time": [""],
			"icon": "5Hla19Z.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Range",
					"description": "Increase the skill range by 3m",
					"icon": "SoLHNDZ.png"
				},
				"e_2": {
					"effect_name": "Attack speed",
					"description": "Increases attack speed by 20%",
					"icon": "nRO8OuT.png"
				},
				"e_3": {
					"effect_name": "Retreat",
					"description": "You retreat 1.5 m after the shot",
					"icon": "j724HUx.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 25%",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Icing effect",
					"description": "Reduces enemy movement speed by 40% for 2 s",
					"icon": "C42y0cZ.png"
				},
				"e_3": {
					"effect_name": "Destroy armor",
					"description": "Reduces all enemy armor by 40% for 2 s",
					"icon": "2JPSkpi.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Supercharge zone",
					"description": "Generates an overloaded area at the targeted location<br>In this area, damage is inflicted periodically",
					"icon": "xqsOSNR.png"
				},
				"e_2": {
					"effect_name": "Plasma fragmentation",
					"description": "Launch three plasma bullets at once<br>The two bullets added have a 50% reduction in attack range<br>Reduced damage to enemies by 70%",
					"icon": "4wG5uWK.png"
				}
			}
		},
		"s_4": {
			"skill_name": "Meteor stream",
			"cd": "20",
			"description": "Shoot a volley of bullets into the air, which falls back to the targeted location, causing an explosion. Launches enemies into the air",
			"additional_effects": ["Neutralization [Medium]", " Immune [stiffness]"],
			"type": ["Point"],
			"time": [""],
			"icon": "OWCfNgu.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mental Fortification",
					"description": "Mana cost reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Cramp",
					"description": "Increases fall down condition by 1 s (?)",
					"icon": "DUWC0Nh.png"
				},
				"e_3": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 20%",
					"icon": "UXhRg0Q.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Attack Range",
					"description": "Attack Range increased by 30%",
					"icon": "SPgHuhl.png"
				},
				"e_2": {
					"effect_name": "Critical Hit",
					"description": "Increases Critical Hit Rate by 60%",
					"icon": "qp8CE16.png"
				},
				"e_3": {
					"effect_name": "Piercing explosion",
					"description": "Attack ignores 40% of enemy’s physical defense",
					"icon": "ktJIUvL.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Bombing raid",
					"description": "Fires in the air countless balls<br>They fall 3 times in a row<br>Damage increased by 60%",
					"icon": "4wG5uWK.png"
				},
				"e_2": {
					"effect_name": "Comet",
					"description": "A single ball is shot in the air and quickly hits the target area",
					"icon": "xqsOSNR.png"
				}
			}
		},
		"s_5": {
			"skill_name": "Summer salt shot",
			"cd": "12",
			"description": "Take a leap forward and fires a handgun",
			"additional_effects": ["Immune [stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "BSF81uC.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mental Fortification",
					"description": "Mana cost reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Burn",
					"description": "Normal and weak monsters have a 50% chance of getting the Burn effect.",
					"icon": "1PceV71.png"
				},
				"e_3": {
					"effect_name": "Ignored collision",
					"description": "You can cross the bosses when you fly",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Attack speed",
					"description": "Increases attack speed by 20%",
					"icon": "rP1umQI.png"
				},
				"e_2": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 50%",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Evasion Master",
					"description": "Increases evasion rate by 30% during cast",
					"icon": "3MH8R85.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Double jump",
					"description": "Movement distance increased by 2 m <br>The number of attacks is increased to 2",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Super armor",
					"description": "You become immune to control effects<br>Cooldown decreases by 3 s",
					"icon": "6vzVrvN.png"
				}
			}
		},
		"s_6": {
			"skill_name": "Equalibrium",
			"cd": "16",
			"description": "Shoot all around you, inflicting damage to nearby enemies",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "bYkbfFs.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 2 s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Heavy Steel",
					"description": "Ignore 30% of physical defense when you hit normal or weak enemies",
					"icon": "va33gLt.png"
				},
				"e_3": {
					"effect_name": "Master of evasion",
					"description": "Increases evasion rate by 20% while using Skill",
					"icon": "j4OiBjo.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 25%",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Critical Hit",
					"description": "Increases Critical Hit Rate by 30%",
					"icon": "qp8CE16.png"
				},
				"e_3": {
					"effect_name": "Range",
					"description": "Skill range increased by 20%",
					"icon": "SPgHuhl.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Thinning fire",
					"description": "Reduces the area of effect to a cone in front of you<br>Increases the duration of the attack<br>Damage inflicted increases by 100%",
					"icon": "KEm9ET8.png"
				},
				"e_2": {
					"effect_name": "Sweep",
					"description": "Attack 360 degrees range<br>Critical damage increases by 100%",
					"icon": "Bybk6tw.png"
				}
			}
		},
		"s_7": {
			"skill_name": "Agile shooting",
			"cd": "12",
			"description": "Move while shooting at 360 °, inflicting damage to nearby enemies",
			"additional_effects": ["Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "RryoGsY.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Attack speed",
					"description": "Increases attack speed by 10%",
					"icon": "nRO8OuT.png"
				},
				"e_3": {
					"effect_name": "Critical Hit",
					"description": "Increases Critical Hit Rate by 15%",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Close shot",
					"description": "Decrease attack range by 20%<br>Damage increased by 40%",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Master of evasion",
					"description": "Increases evasion rate by 35% while using Skill",
					"icon": "3MH8R85.png"
				},
				"e_3": {
					"effect_name": "Movement distance",
					"description": "Movement distance increases by 1m",
					"icon": "DLz43Zq.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "number of attacks",
					"description": "The number of attacks increased by 3",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "number of attacks",
					"description": "The number of hits increased by 2",
					"icon": "32F9lxY.png"
				}
			}
		},
		"s_8": {
			"skill_name": "Despair",
			"cd": "24",
			"description": "Attack all around you, then leap into the air leaving behind multiple grenades (By successfully perfect zone)",
			"additional_effects": ["Neutralization [Medium]", " Immune [stiffness]"],
			"type": ["Hold"],
			"time": [" 2.5 sec"],
			"icon": "LhgDpRF.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Range",
					"description": "Skill range increased by 15%",
					"icon": "rlevb4r.png"
				},
				"e_2": {
					"effect_name": "Strength",
					"description": "You are immune to control effects during the attack",
					"icon": "lyseDv0.png"
				},
				"e_3": {
					"effect_name": "Critical damage",
					"description": "Critical damage increases by 50%",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Increases the damage done by the bomb to enemies by 50%",
					"icon": "cXMAUIN.png"
				},
				"e_2": {
					"effect_name": "Explosion range",
					"description": "Explosion range increased by 30% when bombing",
					"icon": "IpJktTA.png"
				},
				"e_3": {
					"effect_name": "Continuous launch",
					"description": "Launch bombs 2 times in a row<br>Explosion range is reduced by 20%",
					"icon": "WapQ0GV.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Destructive penetration",
					"description": "Move quickly to 8m away and cast skills<br>Damage increased by 20%<br>Skill cancellation due to cancellation latency and mana reduction<br>does not apply(?)",
					"icon": "KUr6DEO.png"
				},
				"e_2": {
					"effect_name": "Infinite annihilation",
					"description": "The number of attacks before bouncing is increased by 3<br>Increases Critical Hit Rate by 40%",
					"icon": "KEm9ET8.png"
				}
			}
		},
		"s_9": {
			"skill_name": "Quickshot",
			"cd": "12",
			"description": "Shoot 2 bullets in the direction indicated. You can use this skill 2 times in a row",
			"additional_effects": [""],
			"type": ["Chain"],
			"time": [""],
			"icon": "Ywe6WNb.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Attack speed",
					"description": "Increases attack speed by 20%",
					"icon": "nRO8OuT.png"
				},
				"e_2": {
					"effect_name": "Push",
					"description": "The duration of the burst increases",
					"icon": "s72YiQJ.png"
				},
				"e_3": {
					"effect_name": "Infinite passion",
					"description": "The next time you use the skill, the duration of the animation increases by 1 s",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Lightfoot",
					"description": "Increases your movement speed by 40% for 1 s",
					"icon": "wGYSIwd.png"
				},
				"e_2": {
					"effect_name": "Starting shot",
					"description": "The damage done to the enemy by the first chain attack hits 50%",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Damage increased",
					"description": "Damage increases by 30% every hit",
					"icon": "TmNqtCH.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Critical damage",
					"description": "Critical damage increases by 150%",
					"icon": "Pv2SzkI.png"
				},
				"e_2": {
					"effect_name": "Triple shot",
					"description": "The number of chains increases by 3",
					"icon": "dgg9J9i.png"
				}
			}
		},
		"s_10": {
			"skill_name": "AT02 Ruthenium",
			"cd": "8",
			"description": "Launch a grenade at the targeted location that deals damage in a small area",
			"additional_effects": [""],
			"type": ["Point"],
			"time": [""],
			"icon": "gm3CHzl.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Range",
					"description": "Increase the skill range by 2m",
					"icon": "SoLHNDZ.png"
				},
				"e_2": {
					"effect_name": "Explosion range",
					"description": "Explosion range increases by 20%",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Destroy armor",
					"description": "Reduces all enemy armor by 30% for 4 s when attacking",
					"icon": "VGqI5ff.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 50%",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Stolen grenade",
					"description": "Damage to enemies is reduced by 50%<br>Cooldown increased by 6 s<br>Launch enemy into the air",
					"icon": "Ntx7DAR.png"
				},
				"e_3": {
					"effect_name": "Freezing grenade",
					"description": "Damage to enemies is reduced by 75%<br>Cooldown increased by 12 s<br>Freeze the enemy for 2 s",
					"icon": "HdZ3Crk.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Fireworks",
					"description": "Throw three grenades at a time<br>Damage decreased by 60%",
					"icon": "4wG5uWK.png"
				},
				"e_2": {
					"effect_name": "Internal ignition",
					"description": "The attack deals Burn to the enemy for 3 s",
					"icon": "eOTsTHH.png"
				}
			}
		},
		"s_11": {
			"skill_name": "Cruel Tracker",
			"cd": "14",
			"description": "Shoot a burst of cone-shaped bullets, then a powerful shot in front of you. You deal extra damage if you attack the enemy in the back",
			"additional_effects": ["Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "pTAZCsc.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 2 s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Mental Fortification",
					"description": "Mana cost reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Push",
					"description": "The last shot travels a longer distance",
					"icon": "s72YiQJ.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Critical Hit",
					"description": "Increases Critical Hit Rate by 30%",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Improved shot",
					"description": "Attack count increases by 3 times",
					"icon": "POnpICE.png"
				},
				"e_3": {
					"effect_name": "Wide shot",
					"description": "Increases the attack angle by 40% when you fire",
					"icon": "SPgHuhl.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Quick gun",
					"description": "The last shot becomes very fast<br>You can use the last attack once more",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "Explosive bullet",
					"description": "The last attack has been changed to an explosive form<br>Explodes when hit and gives 100% more damage to nearby enemies",
					"icon": "xqsOSNR.png"
				}
			}
		},
		"s_12": {
			"skill_name": "Precursor of the end",
			"cd": "24",
			"description": "Shoot cone-shaped twice with your rifle",
			"additional_effects": ["Neutralization [Low]", " Back Attack"],
			"type": ["Combo"],
			"time": [""],
			"icon": "kAWyK4X.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Increases the damage done to nearby enemies by 20%",
					"icon": "0qSa8zg.png"
				},
				"e_2": {
					"effect_name": "Attack angle",
					"description": "Attack angle increases by 20%",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Stun",
					"description": "Stun enemies that hit 2 or 3 on a 30% chance for 3 s",
					"icon": "ZkTpIPx.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Critical Hit",
					"description": "Increases Critical Hit Rate by 25%",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Penetration",
					"description": "2 or 3 strokes increases pierce level by 1",
					"icon": "NdeJndm.png"
				},
				"e_3": {
					"effect_name": "Piercing shot",
					"description": "When the second or third move is critical, the attack ignores 40% of the physical defense",
					"icon": "ktJIUvL.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Consequences of the disaster",
					"description": "Increases the number of shots by 1<br>Mana cost reduced by 40%",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "Desperation",
					"description": "Damage increased by 30%<br>Critical damage increases by 50%",
					"icon": "s2QfHGg.png"
				}
			}
		},
		"s_13": {
			"skill_name": "Judgment time",
			"cd": "30",
			"description": "Shoot cone-shaped projectiles over a long distance that explode on impact, inflicting damage to nearby enemies",
			"additional_effects": ["Neutralization [Low]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "q22ShZd.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 5 s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Critical hit",
					"description": "Increases Critical Hit Rate by 15%",
					"icon": "GjqRFi1.png"
				},
				"e_3": {
					"effect_name": "Knockdown",
					"description": "Bullets have a 10% chance to knockdown enemy",
					"icon": "DUWC0Nh.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Master of evasion",
					"description": "Increases evasion rate by 30% while using Skill",
					"icon": "3MH8R85.png"
				},
				"e_2": {
					"effect_name": "Improved explosion",
					"description": "Increases the damage of fragments from the explosion by 50%",
					"icon": "hbiDGfp.png"
				},
				"e_3": {
					"effect_name": "Wide explosion",
					"description": "The bullet fragments spreading distance increased by 20%",
					"icon": "SPgHuhl.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Sentence of imprisonment",
					"description": "Concentrate energy into a single ball that deals 600% of the damage",
					"icon": "xqsOSNR.png"
				},
				"e_2": {
					"effect_name": "Evidence destruction",
					"description": "Increases the range of the balls by 40%<br>Reduces the armor of the affected enemies by 50% for 3 s",
					"icon": "W94iICa.png"
				}
			}
		},
		"s_14": {
			"skill_name": "Shotgun speaker",
			"cd": "36",
			"description": "Shoot cone-shaped three times with your rifle, each shot repelling the enemy",
			"additional_effects": ["Pierce [level 1]", " Neutralization [Medium]", " Back Attack"],
			"type": ["Tap"],
			"time": [""],
			"icon": "LPgXQIj.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Critical damage",
					"description": "Critical damage increases by 50%",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Mana Control",
					"description": "50% chance to not consume MP",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Combo",
					"description": "The skill becomes usable 3 times in a row",
					"icon": "jC42yG9.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Critical hit",
					"description": "Increases Critical Hit Rate by 25%",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Master of evasion",
					"description": "Increases evasion rate by 30% while using Skill",
					"icon": "3MH8R85.png"
				},
				"e_3": {
					"effect_name": "Piercing shot",
					"description": "When the enemy is hit 3 or 4 times by a critical hit, the attack ignores 60% of the enemy's defense",
					"icon": "ktJIUvL.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Extended fire",
					"description": "After a series of three shots, you carry a powerful shotgun shot<br>Knockdown enemies<br>Move back 4 m",
					"icon": "32F9lxY.png"
				},
				"e_2": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 20%<br>Critical damage increased by 50%",
					"icon": "FpXyekj.png"
				}
			}
		},
		"s_15": {
			"skill_name": "Master of Shotguns",
			"cd": "36",
			"description": "Fire three quick shots with your rifle, followed by a final shot that deals more damage",
			"additional_effects": ["Neutralization [Medium]", " Back Attack"],
			"type": ["Hold"],
			"time": [" 2 sec"],
			"icon": "KaeeUMV.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 6 s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Mental Fortification",
					"description": "Mana cost reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_3": {
					"effect_name": "Damage increased",
					"description": "Increases the damage done to nearby enemies by 20%",
					"icon": "0qSa8zg.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Critical Hit",
					"description": "Increases Critical Hit Rate by 40% during Holding",
					"icon": "qp8CE16.png"
				},
				"e_2": {
					"effect_name": "Range",
					"description": "Skill range increased by 20%",
					"icon": "SPgHuhl.png"
				},
				"e_3": {
					"effect_name": "Gunshot",
					"description": "Increases the damage you receive during a skill cast by 40%<br>Critical damage increases by 100%",
					"icon": "UmuzakL.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Will of the ruler",
					"description": "The last attack delete<br>Hold time increases by 0.7 s<br>Damage is increased by 40% during a holding",
					"icon": "KEm9ET8.png"
				},
				"e_2": {
					"effect_name": "Rule",
					"description": "The last attack ignores 60% of enemy’s physical defense<br>Neutralization is increased by 40%",
					"icon": "gWIvAYY.png"
				}
			}
		},
		"s_16": {
			"skill_name": "The Last Supper",
			"cd": "45",
			"description": "Shoot a powerful explosive ball that throws enemies into the air",
			"additional_effects": ["Destruction [level 1]", " Neutralization [Mid-High]", " Back Attack", " Immune [stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "d0r8489.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Preparation",
					"description": "Cooldown reduced by 6 s",
					"icon": "DXzNTSi.png"
				},
				"e_2": {
					"effect_name": "Cramp",
					"description": "Increases fall down condition by 1 s",
					"icon": "DUWC0Nh.png"
				},
				"e_3": {
					"effect_name": "Attack speed",
					"description": "Increases attack speed by 10%",
					"icon": "nRO8OuT.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "After storm",
					"description": "After the shotgun attack, inflicts additional damage",
					"icon": "cD0keDA.png"
				},
				"e_2": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 30%",
					"icon": "a5qp6Tt.png"
				},
				"e_3": {
					"effect_name": "Defenseless target",
					"description": "Increases the damage to a knockdown or airborne enemy by 40%",
					"icon": "HWuM5x7.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Double shot",
					"description": "Shoots with a shotgun in each hand simultaneously, causing 2 explosions",
					"icon": "Bybk6tw.png"
				},
				"e_2": {
					"effect_name": "Concentrated attack",
					"description": "Increases Critical Hit Rate by 30%<br>Critical damage increases by 60%",
					"icon": "s2QfHGg.png"
				}
			}
		},
		"s_17": {
			"skill_name": "Spiral Flame",
			"cd": "36",
			"description": "Shoot a powerful fireball over a long distance that throws enemies into the air",
			"additional_effects": ["Neutralization [Medium]", " Immune [stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "RXjKmSH.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Distance",
					"description": "Increase the skill distance by 4 m",
					"icon": "SoLHNDZ.png"
				},
				"e_2": {
					"effect_name": "Range",
					"description": "Increase the skill range by 20%",
					"icon": "rlevb4r.png"
				},
				"e_3": {
					"effect_name": "Quick aim",
					"description": "Aiming time is 20% faster",
					"icon": "nRO8OuT.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Finishing attack",
					"description": "Deals 40% more damage to enemies with <25% health",
					"icon": "cimRspI.png"
				},
				"e_2": {
					"effect_name": "Destroy armor",
					"description": "Reduces all enemy armor by 40% for 4 s",
					"icon": "a5qp6Tt.png"
				},
				"e_3": {
					"effect_name": "Critical hit",
					"description": "Increases Critical Hit Rate by 40%",
					"icon": "HWuM5x7.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Intense flame",
					"description": "No more launch into the air<br>Inflicts a Burn for 3 s",
					"icon": "eOTsTHH.png"
				},
				"e_2": {
					"effect_name": "Volcanic eruption",
					"description": "The damage is reduced by 20%<br>Bullets flare up to the maximum range, causing a volcanic eruption on the ground ",
					"icon": "xqsOSNR.png"
				}
			}
		},
		"s_18": {
			"skill_name": "Catastrophe",
			"cd": "24",
			"description": "Launch a grenade at the targeted location and then detonate it, inflicting damage in a large rectangular area and throwing enemies into the air",
			"additional_effects": ["Destruction [level 1]", " Neutralization [Medium]", " Immune [stiffness]"],
			"type": ["Hold"],
			"time": [" 2.5 sec"],
			"icon": "mJ4SbMG.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Strength",
					"description": "You are immune to control effects during casting",
					"icon": "lyseDv0.png"
				},
				"e_2": {
					"effect_name": "Remote aim",
					"description": "Increases the area of explosion 10%",
					"icon": "SoLHNDZ.png"
				},
				"e_3": {
					"effect_name": "Quick aim",
					"description": "Area selection time is reduced by 20%",
					"icon": "nRO8OuT.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Finishing attack",
					"description": "Enemies with <25% health suffer additional damage equal to 50% of their physical defense",
					"icon": "cimRspI.png"
				},
				"e_2": {
					"effect_name": "Air target",
					"description": "Explosive attack against air enemies<br>Increases Critical Hit Rate by 40%",
					"icon": "HWuM5x7.png"
				},
				"e_3": {
					"effect_name": "Ground target",
					"description": "Increases damage done to ground enemies by 30%",
					"icon": "xT6ILcv.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Carpet bombing",
					"description": "2 grenades are thrown in succession, causing damage over a greater distance",
					"icon": "4wG5uWK.png"
				},
				"e_2": {
					"effect_name": "Eternal disaster",
					"description": "Shrapnels are created and planted in the ground, exploding every second and inflicting damage",
					"icon": "xqsOSNR.png"
				}
			}
		},
		"s_19": {
			"skill_name": "Triple exploit",
			"cd": "30",
			"description": "Shoot an explosive bullet at the targeted location. You can use this skill 3 times in a row",
			"additional_effects": [""],
			"type": ["Chain"],
			"time": [""],
			"icon": "qKxODyp.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Vision",
					"description": "Scope of the skill increased by 3 meters",
					"icon": "SoLHNDZ.png"
				},
				"e_2": {
					"effect_name": "Finishing attack",
					"description": "Deals 25% more damage to enemies with <25% health",
					"icon": "NwwlqaE.png"
				},
				"e_3": {
					"effect_name": "Constant passion",
					"description": "Increase the amount of time you can re-cast the 1 s skill",
					"icon": "yT6Wyje.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Attack speed",
					"description": "Increases attack speed by 20%",
					"icon": "4yeH6Qd.png"
				},
				"e_2": {
					"effect_name": "Attack Range",
					"description": "Attack Range increased by 30%",
					"icon": "SPgHuhl.png"
				},
				"e_3": {
					"effect_name": "Flaming bullet",
					"description": "Inflicts Burn for 6 s",
					"icon": "cXMAUIN.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Quadruple explosion",
					"description": "Bring the attack number to 4<br>Increases Critical Hit Rate by 30% on enemies with <50% health",
					"icon": "dgg9J9i.png"
				},
				"e_2": {
					"effect_name": "Super Explosion",
					"description": "The loading time is longer<br>Damage increased by 30%<br>Stuns the enemies for 3 s",
					"icon": "xqsOSNR.png"
				}
			}
		},
		"s_20": {
			"skill_name": "Aim shoot",
			"cd": "24",
			"description": "Turn and then shoot 4 balls in the direction of your cursor. The first 3 reduce the speed of movement of the enemy by 80% for 2 sec and the last inflicts significant damage",
			"additional_effects": ["Pierce [level 1]", " Neutralization [Low]", " Immune [stiffness]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "uqbHGrg.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Fast bullet",
					"description": "Bullet Flight Speed ​​Increases by 20%",
					"icon": "ZYlrZ9I.png"
				},
				"e_2": {
					"effect_name": "Quick aim",
					"description": "Aiming time is shortened by 20%",
					"icon": "nRO8OuT.png"
				},
				"e_3": {
					"effect_name": "The last shot",
					"description": "The last one is a critical hit",
					"icon": "GjqRFi1.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Damage increased by 30%",
					"icon": "a5qp6Tt.png"
				},
				"e_2": {
					"effect_name": "Large bullet",
					"description": "Increases the size of the bullets by 20%",
					"icon": "kR132za.png"
				},
				"e_3": {
					"effect_name": "Stun",
					"description": "Stuns the enemies for 3 s",
					"icon": "TR1aIIB.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Fast fire",
					"description": "Firing speed is 40% faster after aiming",
					"icon": "Bybk6tw.png"
				},
				"e_2": {
					"effect_name": "Hexa shot",
					"description": "Shoot 2 more balls after aiming",
					"icon": "4wG5uWK.png"
				}
			}
		},
		"s_21": {
			"skill_name": "Perfect shot",
			"cd": "30",
			"description": "Shoots a large caliber bullet at a very high speed, it inflicts significant damage",
			"additional_effects": ["Neutralization [Low]"],
			"type": ["Hold"],
			"time": [""],
			"icon": "6T5TC0G.jpg",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Mental Fortification",
					"description": "Mana cost reduced by 50%",
					"icon": "2RbMnoo.png"
				},
				"e_2": {
					"effect_name": "Stable posture",
					"description": "Immune to rigidity during holding and casting",
					"icon": "lyseDv0.png"
				},
				"e_3": {
					"effect_name": "Penetration",
					"description": "If the skill is launched Perfect Zone, gives a Pierce Level 1 effect to the attack",
					"icon": "Mo0MlPh.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Improved shot",
					"description": "Perfect Zone Attack Increases damage done by 30%",
					"icon": "hbiDGfp.png"
				},
				"e_2": {
					"effect_name": "Muscle cramps",
					"description": "If the attack is launched Perfect Zone, the enemies remain reversed 1 s more and the neutralization is increased by 30%",
					"icon": "Ntx7DAR.png"
				},
				"e_3": {
					"effect_name": "Bleeding",
					"description": "If the attack is launched  Perfect Zone, it inflicts a Bleeding for 5 s",
					"icon": "zHwYyaV.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Perfect aim",
					"description": "The skill loads for 1 s, and at the end of the load has the same effect as a perfect shot",
					"icon": "Bybk6tw.png"
				},
				"e_2": {
					"effect_name": "Sniper",
					"description": "The Perfect Zone is shrinking<br>Perfect shot is inevitably a critical hit",
					"icon": "19503dj.png"
				}
			}
		},
		"ult": {
			"skill_name": "Clay bombing",
			"cd": "300",
			"description": "Launch explosives all around you, then make them explode by shooting at them, inflicting significant damage to the enemies",
			"additional_effects": ["Neutralization [Mid-High]", "Immune [Hit Recovery & Abnormal Status]"],
			"type": ["Tap"],
			"time": [""],
			"icon": "23k43jz.jpg"
		}
	},
	"soulmaster": {
		"s_1": {
			"skill_name": " Destruction Force",
			"cd": "16",
			"description": "Rushes 4m in front you and damages the enemy. Summons a destructive force to the caster’s hand, then detonates it, dealing [ ] damage to the enemy twice. Performs a final blow which deals [ ]. The final blow deals 100% increased damage to the enemies in the air ",
			"additional_effects": "Back Attack",
			"time": "",
			"icon": "8b48202438f3b1ae8760a062df209f58.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Endurance",
					"description": "Reduces force consumption by 20% ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Superior Mobility",
					"description": "Increases the movement distance by 2m ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Dexterous",
					"description": "Increases attack speed by 10% ",
					"icon": "Tripod_Tier_1_6.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Prompt Support",
					"description": "The successful hits of the explosion grant a 20% damage bonus for 5 seconds to all party members ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Superior Inner Force",
					"description": "The successful hits of the explosion grant a 30% damage bonus to the caster ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Drillmaster",
					"description": "Increases the area of effect by 25%. ",
					"icon": "49.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Force Master",
					"description": "The last hit fires the force energy forward. The force energy deals 40% increased damage. ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Unavoidable Strike",
					"description": "The force energy pulls the enemies ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		},
		"s_2": {
			"skill_name": " Spiral Strikes",
			"cd": "8",
			"description": "Throws a jab in front of the caster, performs a spiral kick, and then fires a burst of force energy ",
			"additional_effects": "Incapacitate [low], Back Attack",
			"time": "",
			"icon": "e320fea70182758f9aecc39a9c3283b7.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Endurance",
					"description": "Reduces force cost by 20% ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Improved Penetration ",
					"description": "Increases penetration level by 1 ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Improved Speed",
					"description": "Increases attack speed by 15% but the mana cost is increased by 20% ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Heat",
					"description": "The last hit knocks the enemy down and burns them for 5 seconds ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Without Regret",
					"description": "Each successful hit increases the damage dealt by 15% ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Icy Fist",
					"description": "Increases the skill cooldown by 6 seconds. The last hit freezes the enemy for 3 seconds ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Confident Blow",
					"description": "Instead of a series of hits, performs a single forward strike which deals 20% increased damage. ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Perfect Strike",
					"description": "After the last hit, the caster strikes the enemy twice. The total damage of the skill is increased by 50% ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		},
		"s_3": {
			"skill_name": " Poison Strike",
			"cd": "14",
			"description": "Strikes the enemy three times and pulls the enemy toward you. The inflicted enemy has a 30% chance to expose to poison for 3 seconds. ",
			"additional_effects": "Back Attack",
			"time": "",
			"icon": "07f202adeb35307448ab7a5fd02f268b.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Recharging",
					"description": "For each enemy stuck by the last hit, the skill cooldown is reduced by 0.5 seconds, up to maximum total of 4 seconds. ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Improved Strike",
					"description": "Increases damage dealt by 30%, but increases force cost by 20% ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Improved Endurance",
					"description": "Reduces force consumption by 20% ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Successful Transition",
					"description": "Increases the area of effect by 30%. Deals 30% more damage to any target with the vulnerable status ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Penetrating Strike",
					"description": "The skill ignores 40% of the enemies’ All Defense ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Skilled Movement",
					"description": "After the last hit, the caster performs a 4m backstep ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Trusted Strike",
					"description": "The skill knocks the enemy down instead of pulling them. ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Channeled Strike",
					"description": "Absorbs additional power. The damage dealt is increased by 40% and the inflicted enemy is exposed to a stronger poison. ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		},
		"s_4": {
			"skill_name": " Lightning Force",
			"cd": "16",
			"description": "Slams the ground twice, then slams the ground again. Airborne enemies immediately fall when struck by the first and second hits, dealing 50% increased damage. ",
			"additional_effects": "Incapacitate [medium], Back Attack",
			"time": "",
			"icon": "9e15f3a189bdc5ee321a2cb3eb0d3319.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Endurance",
					"description": "Reduces force consumption by 20% ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Dramatic Blow",
					"description": "Increases the incapacitate point by 15%. ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Precise Strike",
					"description": "A successful last hit on a knockdowned enemy lifts them into the air ",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Concentrated Strike",
					"description": "The first and second hits deal 50% increased damage to airborne enemies ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Spot Weakness",
					"description": "Increases the damage dealt to targets with the Invulnerable status by 60% ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Close Strike",
					"description": "Deals 20% more damage to enemies that have less than 50% health. A successful last hit grants a 20% damage bonus for 3 seconds ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Six sense",
					"description": "Increases attack speed by 20% and pulls the enemy toward the caster ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Slowed Movement",
					"description": "Increases the area of effect by 20%. A successful last hit reduces the enemy’s attack speed by 30% and movement speed by 60% for 5 seconds. ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		},
		"s_5": {
			"skill_name": " Spin Kick",
			"cd": "12",
			"description": "Step forward then performs a low kick that knocks the target down. Then, tackle them, knocking them backwards ",
			"additional_effects": "Incapacitate [medium], Back Attack",
			"time": "",
			"icon": "cec980d0d3974cd9cde830272cf5344f.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Tackle",
					"description": "The enemy is knocked back further ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Improved Speed",
					"description": "Increases attack speed by 15% but the mana cost is increased by 20% ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Improved Mobility",
					"description": "Increases the movement distance by 1m ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Prompt Support",
					"description": "A successful last hit grants a 20% damage increase bonus for 5 seconds to all party members ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Vulnerable Target",
					"description": "Deals 30% more damage to any target with the vulnerable status ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Changed Circumstance",
					"description": "Deals 50% more damage on any target with the incapacitate status ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Strong Shoulder",
					"description": "Instead of kicking, rush 2m forward and tackle the enemy ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Aggressive Attack",
					"description": "All the hits stiffen the enemy and reduce travel distance on the second hit. Performs an extra body slam which stuns the enemy ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		},
		"s_6": {
			"skill_name": " Dashing Strike",
			"cd": "6",
			"description": "Dashes to the target location and deals [ ] damage to the enemy. Airborne enemies are knocked airborne again. The skill can be used two additional times. Each time the caster uses the skill, the skill cooldown increases by 4 seconds, and force cost increases double. ",
			"additional_effects": "immune to stiffness",
			"time": "",
			"icon": "dd7b893c86a76b080e3f7f25a7e55773.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Unstoppable Passion",
					"description": "The caster can use the skill again within 2 seconds ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Improved Ability",
					"description": "Reduces the skill cooldown by 1 second ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_3": {
					"effect_name": "Superior Mobility",
					"description": "Increases the movement distance by 2m ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Swift Step",
					"description": "Successful hits grant a 10% movement speed bonus for 3 seconds. The bonus can be stacked up to 3 times ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Prompt Defense",
					"description": "Successful hits grant a 30% damage reduction bonus to all party members for 5 seconds. ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Prompt Support",
					"description": "Successful hits grant a 10% damage bonus to all party members for 5 seconds. The bonus can be stacked up to 3 times ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Unstable space-time",
					"description": "Increases the damage dealt by 50%. Each additional use of the skill deals double damage ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Fierce Movement",
					"description": "Reduces the force cost by 50% and each additional use of the skill reduces the force cost by 10% ",
					"icon": "0.png"
				}
			},
			"type": "Chain"
		},
		"s_7": {
			"skill_name": " Energy Strike",
			"cd": "16",
			"description": "Fires eight successive energy attacks from your fingertip while backstepping 2m. The skill deals 30% more to airborne enemies ",
			"additional_effects": "Incapacitate [low], Back Attack",
			"time": "",
			"icon": "5131077abdf88cc6e14a45dd2f0027a2.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 3 seconds ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_2": {
					"effect_name": "Drillmaster",
					"description": "Increases the area of effect by 20%. ",
					"icon": "Tripod_Tier_1_7.png"
				},
				"e_3": {
					"effect_name": "Quick Response",
					"description": "Increases attack speed by 15% ",
					"icon": "Tripod_Tier_1_6.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Reduced Mobility",
					"description": "Successful hits reduce the enemy’s movement speed by 30% for 8 seconds ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Heat",
					"description": "Successful hits burn the enemy for 7 seconds ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Vulnerable Strike",
					"description": "Deals 50% more damage to any target in the air ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Strong Will",
					"description": "Fire a single attack instead of eight ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Rapid Strike",
					"description": "Rapidly fire your attacks, dealing 50% increased damage ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		},
		"s_8": {
			"skill_name": " Palm of Ru Lai",
			"cd": "24",
			"description": "Summons the Palm of Ru Lai to the target location. Knockdowned enemies and airborne enemies take 30% increased damage. ",
			"additional_effects": "Incapacitate [low], Penetration level 1",
			"time": "",
			"icon": "f152d3934f44e777256063ae42d9732e.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Strike",
					"description": "Increases damage dealt by 20%, but increases force cost by 20% ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 3 seconds. ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_3": {
					"effect_name": "Insight",
					"description": "Increases the skill range by 3m ",
					"icon": "Tripod_Tier_1_7.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Reducing Mobility",
					"description": "Successful hits reduce the enemy’s movement speed by 30% for 8 seconds ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Tough Training",
					"description": "Reduces the cast time ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Heat",
					"description": "Successful hits burn the enemy for 7 seconds ",
					"icon": "Tripod_Tier_2_13.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Greatest Revenge",
					"description": "Removes the Destruction property of the skill. Summons 4 small palms, dealing 100% increased total skill damage. ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Reckless Attack",
					"description": "Increases the area of effect by 40% and penetrates enemies’ all defense by 50% ",
					"icon": "0.png"
				}
			},
			"type": "Point"
		},
		"s_9": {
			"skill_name": " Implosion",
			"cd": "18",
			"description": "Jump 3m forward and strike the enemy three times. Infuse the ground with energy, pulling the target toward the caster. Afterwards, launch the enemy into the air. The caster can hold the skill during the infusion for 1 second. ",
			"additional_effects": "Incapacitate [medium], Back Attack",
			"time": "",
			"icon": "a27389a94c6c224614295df9e0903081.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Defensive Preparation",
					"description": "Takes 20% less damage while performing the skill ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Improved Recharging",
					"description": "For each enemy inflicted by the last hit, reduces the skill cooldown by 0.5 seconds up to a maximum total of 4 seconds ",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Superior Control",
					"description": "For each enemy inflicted by the last hit, recharges the force by 30 up to a maximum total of 150 ",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strength",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Dexterous",
					"description": "The infusion increases attack speed by 30% ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Changed Circumstance",
					"description": "Deals 50% more damage to any target with the incapacitate status ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Brave Ember",
					"description": "Burn the enemy when pulling them toward you. If the enemy has 3 stacks of the burning debuff, they suffer serious burn damage. Following the infusion, detonate the energy, delaing  50% increased damage. ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Unforgiven Chill",
					"description": "The pulling freezes the enemy for 2 seconds ",
					"icon": "0.png"
				}
			},
			"type": "Hold"
		},
		"s_10": {
			"skill_name": " Force Strike",
			"cd": "18",
			"description": "Lashes forward, sending a burst of energy outward. The caster recoils 3m backwards ",
			"additional_effects": "Penetration level 1, incapacitate [low], back attack",
			"time": "",
			"icon": "c1e264f91926d1c0359943958dd98eb5.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 2 seconds. ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_2": {
					"effect_name": "Improved Endurance",
					"description": "Reduces force consumption by 20% ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Dramatic Blow",
					"description": "Increases the incapacitate point by 15%. ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Heat",
					"description": "The last hit knocks the enemy down, and burns them for 7 seconds ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Instant Evasion",
					"description": "The caster recoils 5m backwards ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Aggressive Attack",
					"description": "Take 20% more damage while performing the skill but deal 50% additional damage to any target with the Invulnerable status ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Exceptional Movement",
					"description": "After the backstep, fire an energy burst forward and evade when the skill is used again. ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Greater Force",
					"description": "The energy burst moves forward 4m then disappears. A black hole forms at that location, pulling in nearby enemies ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		},
		"s_11": {
			"skill_name": " Tempest Ray",
			"cd": "20",
			"description": "Fires a concentrated beam in front of the caster. The beam has a 50% chance to stun enemies for 4 seconds. ",
			"additional_effects": "Penetration level 3",
			"time": "",
			"icon": "23d75b8f69ef8a31e79e8e8a1c80173b.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Speed",
					"description": "Increases attack speed by 20% but the mana cost is increased by 20% ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Improved Endurance",
					"description": "Reduces force consumption by 20% ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Defensive Preparation",
					"description": "Take 20% less damage while performing the skill ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Heat",
					"description": "Successful hits burn the enemy for 8 seconds instead of stunning the enemy. ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Icy Dagger",
					"description": "Successful hits freeze the enemy for 3 seconds instead of stunning the enemy. ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Disintegration",
					"description": "Removes the stun effect, but deals 200% more damage to any target with the incapacitate status, and pushes it backwards. ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Resolution",
					"description": "Enables the caster to charge the skill. Damage dealt is increased by 50%. Deals 200% increased damage at the full charge level ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Endless Attack",
					"description": "Shorter preparation increases attack speed but reduces damage dealt by 20% ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		},
		"s_12": {
			"skill_name": " Force Bullet",
			"cd": "8",
			"description": "Fires three condensed energy blasts in succession ",
			"additional_effects": "",
			"time": "",
			"icon": "9ffa4c0c8cdec28e2ced1a733cb0aade.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Penetrative Force",
					"description": "Successful hits ignore 20% of enemies’ All Defense ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Ranged Attack",
					"description": "Increases the skill range by 4m ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Improved Endurance",
					"description": "Reduces force consumption by 20% ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Unstoppable",
					"description": "Reduces damage dealt by 30% but the force energy penetrates through the enemy ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Overkill",
					"description": "Increases the area of effect of the explosion by 100% ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Deft Hand",
					"description": "Increases attack speed by 20% and reduces the skill cooldown by 2 seconds ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Trance",
					"description": "Allows the caster to fire six energy blasts by holding the skill ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Precision Strike",
					"description": "Increases the skill range by 2m and deals 30% increased damage, but only fires a single energy blast ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		},
		"s_13": {
			"skill_name": " Force Wave",
			"cd": "15",
			"description": "Releases a wave of energy which strikes the enemy 5 times and knocks them back. ",
			"additional_effects": "",
			"time": "",
			"icon": "2abb8fbbcea66a0b3d879757266242cd.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 3 seconds. ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_2": {
					"effect_name": "Improved Endurance",
					"description": "Reduces force consumption by 20% ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Improved Speed",
					"description": "Increases attack speed by 20% but the mana cost is increased by 20% ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Growing Wave",
					"description": "Damage increases up to 60% when the force wave travels farther ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Reduced Mobility",
					"description": "Successful hits reduce the enemy’s movement speed by 30% for 8 seconds ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Raging Wave",
					"description": "Increases damage dealt by 30% ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Space Expansion",
					"description": "Releases the force wave three times but deals 30% less damage ",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Space Contraction",
					"description": "The speed of the wave is increased by 50% and enemies are stiffened instead of knocked back. Additional skill use creates a strong wind that deals 100% increased damage ",
					"icon": ""
				}
			},
			"type": "Tap"
		},
		"s_14": {
			"skill_name": " Force Barrier",
			"cd": "24",
			"description": "Creates a force barrier around the caster which slows nearby enemies. The force barrier deals damage and reduces enemies’ attack and movement speed by 10% for 0.5 seconds per stack of the debuff. The debuff can stack up to four times. The caster can maintain the barrier for 3 seconds by holding the skill  ",
			"additional_effects": "immunes to stiffness, incapacitate [medium]",
			"time": "",
			"icon": "8d1fbf1aa541f65a53297bb6dfe80891.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Defensive Preparation",
					"description": "Takes 30% less damage while performing the skill  ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 3 seconds.  ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_3": {
					"effect_name": "Improved Endurance",
					"description": "Reduces force consumption by 20%  ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill.  ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Spot Weakness",
					"description": "Increases the damage dealt to targets with the Invulnerable status by 50%  ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Overheated Force",
					"description": "Increase the force cost by 20% but deals 5% more damage per hit.  ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Desperate Attack",
					"description": "Holding the barrier for the full duration knocks enemies back and deals 40% more damage  ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Incisive Decision",
					"description": "Holding the barrier for the full duration pulls enemies towards the caster, and deals 40% more damage  ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		},
		"s_15": {
			"skill_name": " Thunderbolt Strike",
			"cd": "16",
			"description": "Stretches forth both hands and unleashes a blast of energy, dealing [ ] damage. The skill knocks airborne enemies backwards. ",
			"additional_effects": "back attack",
			"time": "",
			"icon": "94d7e39514583efc3866bb5a1b2badc9.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Justice Strike",
					"description": "Successful hits grant a 2% damage increase bonus for 2 seconds. The caster can stack the bonus up to 10 times ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Improved Endurance",
					"description": "Reduces force consumption by 20% ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Improved Penetration ",
					"description": "Adds penetration level by 1 ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Drillmaster",
					"description": "Increases the area of effect by 30%. ",
					"icon": "49.png"
				},
				"e_2": {
					"effect_name": "Icy Fist",
					"description": "Increases the skill cooldown by 6 seconds. The last hit freezes the enemy for 2 seconds ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Heat",
					"description": "The last hit knocks the enemy down and burns them for 5 seconds ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Raging Wave",
					"description": "Changes the skill into a multi-strike attack, dealing 20% increased damage under the faster skill animation ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Cruel Grip",
					"description": "Increases the damage dealt by 100% to enemies in melee range ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		},
		"s_16": {
			"skill_name": " Inferno Beam",
			"cd": "30",
			"description": " ",
			"additional_effects": "Destruction level 2, incapacitate [medium-high]",
			"time": "",
			"icon": "e83fa56ce7188d3b8b8703e8184fb045.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Endurance",
					"description": "Reduces force consumption by 20% ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Greater Potential",
					"description": "Successful hits on a party member grant them a 5% damage bonus for 2 seconds. This stacks up to 10 times ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Spot Weakness",
					"description": "Increases the damage dealt to targets with the Invulnerable status by 20% ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Ranged Target",
					"description": "Increases the skill range by 5m ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Changed Circumstance",
					"description": "Deals 50% more damage to any target with the Incapacitate status ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Bold Movement",
					"description": "Skips the skill preparation animation but prevents the caster from changing the attack direction. Increases attack speed by 30% and ignores 50% of the enemies’ armor ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Rapid Fire",
					"description": "Increases the damage dealt by 100% during the last second of the cast. ",
					"icon": "0.png"
				}
			},
			"type": "Hold"
		},
		"s_17": {
			"skill_name": " Force Unleashed",
			"cd": "30",
			"description": "Creates a force wave by slamming the ground. All party members take 12% less damage for 6 seconds ",
			"additional_effects": "",
			"time": "",
			"icon": "4475422681febf1c4ce3d689238f6ebe.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Dexterous",
					"description": "Increases attack speed by 20% ",
					"icon": "Tripod_Tier_1_6.png"
				},
				"e_2": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 3 seconds. ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_3": {
					"effect_name": "Defensive Preparation",
					"description": "Takes 20% less damage while performing the skill ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Improved Strike",
					"description": "Grants a 30% damage bonus to all party members for 6 seconds ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Enhanced Wave",
					"description": "All party members take 60% less damage for 6 seconds ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
					"icon": "0.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Victorious",
					"description": "Increases the duration of the skill by 6 seconds ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Allied Call",
					"description": "Increases the area of effect by 100% ",
					"icon": "0.png"
				}
			},
			"type": "Tap"
		}
	},
	"destroyer": {
		"s_1": {
			"skill_name": "Heavy crush",
			"cd": "8",
			"description": "Infuses your hammer with gravity energy and then slams it down in front of you ",
			"additional_effects": "incapacitate [medium], back attack",
			"time": "",
			"icon": "6MsiTlu.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Lucky core",
					"description": "Successful hits grant a 15% chance to gain an extra core ",
					"icon": "Tripod_Tier_1_36.png"
				},
				"e_2": {
					"effect_name": "Swift movement",
					"description": "Increases attack speed by 10% ",
					"icon": "Tripod_Tier_1_6.png"
				},
				"e_3": {
					"effect_name": "Righteous belief ",
					"description": "Increases damage by 15% ",
					"icon": "Tripod_Tier_1_0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Dramatic strike",
					"description": "Increases incapacitate point by 25% ",
					"icon": "31.png"
				},
				"e_2": {
					"effect_name": "Sharpened hammer",
					"description": "Successful hits with the hammer deal 40% more damage to the target ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Offensive preparation",
					"description": "Successful hits grant a 15% damage increase for 4 seconds ",
					"icon": "46.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Opportunitinist",
					"description": "Allows you to smash the hammer an additional time with a 50% increased damage bonus ",
					"icon": "34.png"
				},
				"e_2": {
					"effect_name": "Shining strike",
					"description": "Detonates the gravity energy within your hammer, lifting your foe into the air and dealing an additional 30% bonus damage ",
					"icon": "22.png"
				}
			},
			"type": "Tap"
		},
		"s_2": {
			"skill_name": "Gravity impact",
			"cd": "16",
			"description": "Slams your hammer and creating a vortex at the location of your strike. The vortex pulls enemies in and deals an additional damage when you rip your hammer free. ",
			"additional_effects": "incapacitate [medium-high], immune to stiffness",
			"time": "",
			"icon": "Vbvbain.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved recharging",
					"description": "A successful first hit on each enemy reduces the cooldown by 0.5 seconds up to a maximum total of  4 seconds.  ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_2": {
					"effect_name": "Improved gravity",
					"description": "Reduces mana cost by 50% ",
					"icon": "Tripod_Tier_1_34.png"
				},
				"e_3": {
					"effect_name": "Lucky core",
					"description": "Successful hits grant a 20% chance to gain an extra core ",
					"icon": "Tripod_Tier_1_36.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Strong Will",
					"description": "A successful first hit on each enemy grants 10% damage reduction bonus up to maximum total of 50% for 5 seconds. ",
					"icon": "53.png"
				},
				"e_2": {
					"effect_name": "Harsh Revenge",
					"description": "While channeling the vortex or striking with the hammer, each hit increases damage by 5%, up to maximum total of 50% ",
					"icon": "46.png"
				},
				"e_3": {
					"effect_name": "Echo of Gravity",
					"description": "Stuns foes when you pull them towards you ",
					"icon": "34.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Strength of Intelligence",
					"description": "Progressively increases the area of effect by up to 30% over the duration of the skill ",
					"icon": "35.png"
				},
				"e_2": {
					"effect_name": "Empowered Will",
					"description": "Instead of creating a vortex, generate a powerful gravity sphere that pulls foes toward it ",
					"icon": "22.png"
				}
			},
			"type": "Tap"
		},
		"s_3": {
			"skill_name": "Dreadnought",
			"cd": "12",
			"description": "Concentrates gravity energy within your hammer,then smashes it to the ground. The impact creates a shockwave launches you into the air, dealing damage to foes upon landing. ",
			"additional_effects": "incapacitate [medium-high], back attack, the destruction level 2, immune to the electric shock",
			"time": "",
			"icon": "VtHRikG.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
					"icon": "Tripod_Tier_1_23.png"
				},
				"e_2": {
					"effect_name": "Unbearable Strength",
					"description": "Ignores 30% of physical armor on any target with the Invulnerable status ",
					"icon": "Tripod_Tier_1_2.png"
				},
				"e_3": {
					"effect_name": "Superior Transition",
					"description": "Increases the distance traveled by 1m ",
					"icon": "Tripod_Tier_1_10.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 3 seconds. ",
					"icon": "Tripod_Tier_2_56.png"
				},
				"e_2": {
					"effect_name": "Sharpened Hammer",
					"description": "Successful hits with the hammer deal 40% more damage to the target ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Hammer Rampage",
					"description": "Landing successful hits on at least two foes deals 10% more damage. Landing successful hits on nine foes deals 50% more. ",
					"icon": "50.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Shining strike",
					"description": "The last hits lift foes and deals 30% increased damage. ",
					"icon": "22.png"
				},
				"e_2": {
					"effect_name": "몰아치는 해머",
					"description": "Smashing the hammer on the ground rebounds you into the air, dealing 60% increased damage to foes upon landing.  ",
					"icon": "1.png"
				}
			},
			"type": "Tap"
		},
		"s_4": {
			"skill_name": "Power Shoulder",
			"cd": "14",
			"description": "Charge 5m forward, dealing dealing damage to foes. An additional combo attack deals damage with an upward strike ",
			"additional_effects": "incapacitated [medium-high]",
			"time": "",
			"icon": "xuYBHVY.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Iron Skin",
					"description": "Gain a 30% damage reduction bonus while you are performing the skill. ",
					"icon": "Tripod_Tier_1_25.png"
				},
				"e_2": {
					"effect_name": "Victorious contract",
					"description": "Increases lifting damage by 20%  ",
					"icon": "Tripod_Tier_1_0.png"
				},
				"e_3": {
					"effect_name": "Critical Strength",
					"description": "Reduces attack speed by 15% but increases damage dealt by 30%  ",
					"icon": "Tripod_Tier_1_50.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Mission Completed",
					"description": "Increases the skill range by 3m ",
					"icon": "63.png"
				},
				"e_2": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
					"icon": "60.png"
				},
				"e_3": {
					"effect_name": "Drillmaster",
					"description": "Increases the area of effect by 25%. ",
					"icon": "49.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Heavy Hammer",
					"description": "You slam the hammer instead striking upwards, dealing 50% increased damage. ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Rage",
					"description": "You swing the hammer around you instead of striking upwards, dealing 50% increased damage. ",
					"icon": "42.png"
				}
			},
			"type": "Combo"
		},
		"s_5": {
			"skill_name": "Gravity Force",
			"cd": "16",
			"description": "Swings the hammer in front of you, dealing damage. The hammer creates a gravity energy beam in front you. Enemies are pulled towards you ",
			"additional_effects": "immune to stiffness, incapacitate [low]",
			"time": "",
			"icon": "ePYOBLL.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Recharging",
					"description": "Each pulled enemy reduces the cooldown by 0.5 seconds up to a maximum total of 4 seconds ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_2": {
					"effect_name": "Iron Skin",
					"description": "Gain a 30% damage reduction bonus while you are performing the skill.  ",
					"icon": "Tripod_Tier_1_25.png"
				},
				"e_3": {
					"effect_name": "Critical Strength",
					"description": "Increases damage done by 15% ",
					"icon": "Tripod_Tier_1_50.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Swift Movement",
					"description": "Increases attack speed by 20%. ",
					"icon": "Tripod_Tier_2_6.png"
				},
				"e_2": {
					"effect_name": "Focusing Attack",
					"description": "Increases damage done by 30% on a single target. ",
					"icon": "33.png"
				},
				"e_3": {
					"effect_name": "Terror of Gravity",
					"description": "Successful air attacks increase your foes’ damage taken by 15% for 4 seconds. ",
					"icon": "27.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Effluence of Instinct ",
					"description": "Creates a larger gravity energy beam. The charging time of the skill is increased by 0.4 seconds but the damage dealt is increased by 40%. ",
					"icon": "56.png"
				},
				"e_2": {
					"effect_name": "Wave of Gravity",
					"description": "Quickly releases the gravity energy but reduces the damage dealt by 40% and the area of effect by 20%. However, the skill can be used a second time within 3 seconds of the first attack. ",
					"icon": "23.png"
				}
			},
			"type": "Chain"
		},
		"s_6": {
			"skill_name": "Running Crash",
			"cd": "20",
			"description": "While holding down the hotkey, you tackle enemies in front of you, and damage up to seven times. Upon releasing the key or the gauge reaching its maximum, release an explosion that deals damage to foes. ",
			"additional_effects": "incapacitate [medium-high], immune to stiffness, destruction level 1.",
			"time": "",
			"icon": "2GXto4v.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Lucky core",
					"description": "Successful hits grant a 20% chance to gain an extra core ",
					"icon": "Tripod_Tier_1_36.png"
				},
				"e_2": {
					"effect_name": "Improved gravity",
					"description": "Reduces mana cost by 50% ",
					"icon": "Tripod_Tier_1_34.png"
				},
				"e_3": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 3 seconds. ",
					"icon": "Tripod_Tier_1_56.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Antigravity",
					"description": "Creates a gravity energy shield on the caster which absorbs damage equal to 15% of the caster’s maximum health. ",
					"icon": "53.png"
				},
				"e_2": {
					"effect_name": "Elaborate Plan",
					"description": "Increases the skill cooldown by 6 seconds, but the explosion stuns enemies for 3 seconds. ",
					"icon": "30.png"
				},
				"e_3": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
					"icon": "60.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Reckless Movement",
					"description": "Rushes up to 8m towards the target location, knocking enemies down. ",
					"icon": "54.png"
				},
				"e_2": {
					"effect_name": "Improved Rush",
					"description": "Increases the explosion’s the area of effect and the damage dealt by 50% ",
					"icon": "20.png"
				}
			},
			"type": "Hold"
		},
		"s_7": {
			"skill_name": "Jumping Smash",
			"cd": "16",
			"description": "Leap high in the air towards a target location up to 8m away and inflict damage to nearby foes upon landing. ",
			"additional_effects": "incapacitate [low], immune to stiffness, destruction level 1, back attack. ",
			"time": "",
			"icon": "4smZoWi.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 2 seconds.  ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_2": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
					"icon": "Tripod_Tier_1_23.png"
				},
				"e_3": {
					"effect_name": "Superior Transition",
					"description": "Increases the movement distance by 2m ",
					"icon": "Tripod_Tier_1_10.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Offensive Preparation",
					"description": "A successful first hit grants a 15% damage increase for 4 seconds. ",
					"icon": "46.png"
				},
				"e_2": {
					"effect_name": "Hammer Rampage",
					"description": "Landing successful hits on at least two foes deals 10% more damage. Landing successful hits on six or more foes deals 40% more. ",
					"icon": "50.png"
				},
				"e_3": {
					"effect_name": "Warrior’s Determination",
					"description": "A successful first hit grants a 10% damage reduction buff for 8 seconds. Each target damaged by the first hit grants additional 5% damage reduction buff up to maximum total of 30%. ",
					"icon": "53.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Shining strike",
					"description": "The last hit lift foes and deals 30% increased damage. ",
					"icon": "22.png"
				},
				"e_2": {
					"effect_name": "Ambush",
					"description": "Lifts enemies to the air and smashes them down with 60% increased damage. ",
					"icon": "1.png"
				}
			},
			"type": "Point"
		},
		"s_8": {
			"skill_name": "Power Strike",
			"cd": "12",
			"description": "Raises your hammer and deal three brutal strikes.  ",
			"additional_effects": "incapacitate [medium-high], back attack ",
			"time": "",
			"icon": "Z6cJUbs.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Reckless Attack",
					"description": "Increases damage received by 40% while performing the skill but the damage of each strike is increased by 30%. ",
					"icon": "Tripod_Tier_1_50.png"
				},
				"e_2": {
					"effect_name": "Unbearable Strength",
					"description": "Ignores 30% of physical armor on any target with the Invulnerable status  ",
					"icon": "Tripod_Tier_1_2.png"
				},
				"e_3": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 2 seconds. ",
					"icon": "Tripod_Tier_1_56.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Superhuman Strength",
					"description": "You can use other skills or cancel the skill while performing the skill. ",
					"icon": "55.png"
				},
				"e_2": {
					"effect_name": "Improved Hammer",
					"description": "Each hit increases damage dealt by 15% up to maximum total of 90%. ",
					"icon": "50.png"
				},
				"e_3": {
					"effect_name": "Drillmaster",
					"description": "Increases the area of effect by 25%. ",
					"icon": "49.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Endless attack",
					"description": "Unleash five devastating hammer strikes, which, after the first swing, deal an additional 25% damage. ",
					"icon": "19.png"
				},
				"e_2": {
					"effect_name": "Coordinated Attack",
					"description": "The last hit damages foes for 80% increased damage, and stomps airborne enemies. ",
					"icon": "47.png"
				}
			},
			"type": "Tap"
		},
		"s_9": {
			"skill_name": "Neutralizer ",
			"cd": "36",
			"description": "Saturates the hammer with gravity energy for a massive strike. It inflicts [ ] damage, and creates an unpredictable shock wave within 4m of the target location. You can use the skill two more times. The second hit inflicts [ ] damage, and the third hit inflicts [ ] damage. ",
			"additional_effects": "incapacitate [high], back attack",
			"time": "",
			"icon": "lAFnBmC.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Unbearable Strength",
					"description": "Ignores 30% of physical armor on any target with the Invulnerable status  ",
					"icon": "Tripod_Tier_1_2.png"
				},
				"e_2": {
					"effect_name": "Swift movement",
					"description": "Increases attack speed by 10% ",
					"icon": "Tripod_Tier_1_6.png"
				},
				"e_3": {
					"effect_name": "Exhaustive Preparation",
					"description": "Increases damage by 10% ",
					"icon": "Tripod_Tier_1_0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Penetrating Shockwave",
					"description": "The shockwave ignores 30% of the target’s defense ",
					"icon": "46.png"
				},
				"e_2": {
					"effect_name": "Gravity Explosion",
					"description": "Successful shockwave hits lift enemies into the air ",
					"icon": "64.png"
				},
				"e_3": {
					"effect_name": "Superhuman Strength",
					"description": "You can use other skills or cancel the skill while performing the skill. ",
					"icon": "55.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Explosive Gravity",
					"description": "Creates three shockwaves per each hit ",
					"icon": "31.png"
				},
				"e_2": {
					"effect_name": "Gravity Exposure",
					"description": "Creates an enhanced shockwave with 300% increased damage within 3m ",
					"icon": "21.png"
				}
			},
			"type": "Combo"
		},
		"s_10": {
			"skill_name": "Endure Pain",
			"cd": "60",
			"description": "Unleashes your pain, damaging enemies within 2m. The caster becomes invulnerable to crowd control effects for 12 seconds, and all damage taken is reduced by [ ]% ",
			"additional_effects": "incapacitate [low]",
			"time": "",
			"icon": "pz7MUk6.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Drillmaster",
					"description": "Increases the area of effect by 15%. ",
					"icon": "Tripod_Tier_1_7.png"
				},
				"e_2": {
					"effect_name": "Improved gravity",
					"description": "Reduces mana cost by 50% ",
					"icon": "Tripod_Tier_1_34.png"
				},
				"e_3": {
					"effect_name": "Expulsion ",
					"description": "Successful hits push enemies back further. The inflicted enemies remain in the stiffness status longer. ",
					"icon": "Tripod_Tier_1_60.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Antigravity",
					"description": "Creates a gravity energy shield on the caster which absorbs damage equal to 15% of the caster’s maximum health. ",
					"icon": "53.png"
				},
				"e_2": {
					"effect_name": "Terror of Battlefield",
					"description": "Successful hits reduce the enemy’s attack power, attack speed, and movement speed by 20% for 5 seconds. ",
					"icon": "27.png"
				},
				"e_3": {
					"effect_name": "Trace of Pain",
					"description": "The inflicted enemy takes 20% more damage for 5 seconds ",
					"icon": "52.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Healthy Mentality",
					"description": "Increases the duration of the buff from the skill by 4 seconds. ",
					"icon": "27.png"
				},
				"e_2": {
					"effect_name": "Hidden Pain",
					"description": "Reduces the casting time by 5 seconds, but the enemy takes 90% less damage. ",
					"icon": "12.png"
				}
			},
			"type": "Tap"
		},
		"s_11": {
			"skill_name": "Earth Eater",
			"cd": "16",
			"description": "Slams the ground behind you. Then swings the hammer to the front up to three times. The first swing inflicts [ ] damage, the second [ ], and the third [ ]. After the third swing, you strike the ground ",
			"additional_effects": "Incapacitate [Extreme-high], Destruction level 2, Back attack",
			"time": "",
			"icon": "uYiRZfT.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Swift movement",
					"description": "Increases attack speed by 10% ",
					"icon": "Tripod_Tier_1_6.png"
				},
				"e_2": {
					"effect_name": "Unfinished Business",
					"description": "Each core increases damage dealt by 5% ",
					"icon": "Tripod_Tier_1_0.png"
				},
				"e_3": {
					"effect_name": "Iron Skin",
					"description": "Gain a 50% damage reduction bonus while you are performing the skill. ",
					"icon": "Tripod_Tier_1_25.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 3 seconds.  ",
					"icon": "Tripod_Tier_2_56.png"
				},
				"e_2": {
					"effect_name": "Practiced Outcome",
					"description": "Increases the area of effect by 30%. ",
					"icon": "49.png"
				},
				"e_3": {
					"effect_name": "Superhuman Strength",
					"description": "You can use other skills or cancel the skill while performing the skill. ",
					"icon": "55.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Recovered Gravity",
					"description": "Enables you to charge the skill. Each level of the charging gauge increases the damage dealt by 40% up to maximum of 80%. ",
					"icon": "20.png"
				},
				"e_2": {
					"effect_name": "Unstoppable",
					"description": "A successful forward swing stiffens enemies within 40-degree cone to the front and deals 40% increased damage. Enemies outside of the cone are knocked down and take 20% increased damage.  ",
					"icon": "42.png"
				}
			},
			"type": "Tap"
		},
		"s_12": {
			"skill_name": "Full Swing",
			"cd": "20",
			"description": "Swings the hammer three times like whirlwind. The first and second swings inflict [] damage. The last swing inflicts [ ] damage. This skill can be charged. The fully charged attack inflicts [ ] damage in total swings ",
			"additional_effects": "Incapacitate [high], Immune to stiffness, destruction level 1, back attack.",
			"time": "",
			"icon": "bJuvHaH.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Iron Heart",
					"description": "Gain a 30% damage reduction bonus while you are performing the skill and a 50% damage reduction while you are charging the skill. ",
					"icon": "Tripod_Tier_1_25.png"
				},
				"e_2": {
					"effect_name": "Swift movement",
					"description": "Increases attack speed by 10% ",
					"icon": "Tripod_Tier_1_6.png"
				},
				"e_3": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 2 seconds. ",
					"icon": "Tripod_Tier_1_56.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
					"icon": "60.png"
				},
				"e_2": {
					"effect_name": "Absolute Power",
					"description": "Each core increases damage dealt by 100% ",
					"icon": "46.png"
				},
				"e_3": {
					"effect_name": "Terrifying Hammer",
					"description": "Each successful hit increases damage dealt by 10% up to  a maximum of 60% ",
					"icon": "50.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Bestial Eyes",
					"description": "Reduces the charging time by 50% and increases the maximum level of the charge gauge. Overcharging increases damage dealt by 100% ",
					"icon": "19.png"
				},
				"e_2": {
					"effect_name": "Enraged Attack",
					"description": "Removes the ability to charge and instead performs stationary swings. The area of effect increases over the duration of the skill and damage dealt is increased by 25%. ",
					"icon": "45.png"
				}
			},
			"type": "Charge"
		},
		"s_13": {
			"skill_name": "Earth Smasher",
			"cd": "24",
			"description": "Smashes the hammer to the ground,inflicting [ ] damage. It creates a rock on the landing location. You destroy the rock and particles from the rock scatter in a fan-shaped angle, dealing [ ] damage. Successful hits by the particles stun enemies for 3 seconds. ",
			"additional_effects": "incapacitate [Extreme high], immune to stiffness, back attack",
			"time": "",
			"icon": "YVtUZMv.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Critical Strength",
					"description": "Reduces attack speed by 10% but increases damage dealt by 20% ",
					"icon": "Tripod_Tier_1_50.png"
				},
				"e_2": {
					"effect_name": "Iron Skin",
					"description": "Gain a 30% damage reduction bonus while you are performing the skill. ",
					"icon": "Tripod_Tier_1_25.png"
				},
				"e_3": {
					"effect_name": "Unstable Strike",
					"description": "A successful first hit grants a 50% chance to reduce the enemy’s defense by 30% for 5 seconds. ",
					"icon": "Tripod_Tier_1_46.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Unstable Strike",
					"description": "You are able to change the direction of the skill, spinning the hammer over your head, and jumping forwards [max 6m] ",
					"icon": "49.png"
				},
				"e_2": {
					"effect_name": "",
					"description": " ",
					"icon": "55.png"
				},
				"e_3": {
					"effect_name": "",
					"description": " ",
					"icon": "30.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "",
					"description": " ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "",
					"description": " ",
					"icon": "9.png"
				}
			},
			"type": "Tap"
		},
		"s_14": {
			"skill_name": "One Man Army",
			"cd": "24",
			"description": "Swing the hammer left and right. Each hit inflicts [ ] damage. Continual swings increase over the time and the last hit deals [ ] damage. ",
			"additional_effects": "incapacitate [Extreme high], back attack",
			"time": "",
			"icon": "FkRnjcy.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 2 seconds. ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_2": {
					"effect_name": "Swift movement",
					"description": "Increases attack speed by 10% ",
					"icon": "Tripod_Tier_1_6.png"
				},
				"e_3": {
					"effect_name": "Improved gravity",
					"description": "Reduces mana cost by 50% ",
					"icon": "Tripod_Tier_1_34.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Well-maintained Hammer",
					"description": "The damage of the first and second hits are increased by 100% ",
					"icon": "45.png"
				},
				"e_2": {
					"effect_name": "Spot Weakness",
					"description": "Increases the damage dealt to targets with the Invulnerable status by 30% ",
					"icon": "36.png"
				},
				"e_3": {
					"effect_name": "Red Hammer",
					"description": "Each hit increases damage dealt by 5% up to a maximum total of 30% ",
					"icon": "50.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Critical Hammer",
					"description": "You cannot change direction while performing the skill, but instead rapidly swing five time in front of you for 50% increased damage ",
					"icon": "19.png"
				},
				"e_2": {
					"effect_name": "Dominant Strike",
					"description": "Swings the hammer in a 360 degree arc for a maximum of 4.5 seconds. The swing deals 50% increased damage. ",
					"icon": "1.png"
				}
			},
			"type": "Hold"
		},
		"s_15": {
			"skill_name": "Perfect Swing",
			"cd": "24",
			"description": "Moves forward and tackles an enemy for [ ] damage, then hefts the hammer with two hands and smashes them for [ ]. You can charge the skill for 2 seconds. When fully charged, the skill moves 2m farther and the hammer strike deals [ ] damage. ",
			"additional_effects": "incapacitate [Extreme High], Destruction level 2, Immune to stiffness, back attack.",
			"time": "",
			"icon": "slz8BMd.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Iron Heart",
					"description": "Gain a 30% damage reduction bonus while you are performing the skill and a 50% damage reduction while you are charging the skill. ",
					"icon": "Tripod_Tier_1_25.png"
				},
				"e_2": {
					"effect_name": "Final Blow",
					"description": "Deals 20% more damage to enemies that have less than 30% health. ",
					"icon": "Tripod_Tier_1_0.png"
				},
				"e_3": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while charging the skill. ",
					"icon": "Tripod_Tier_1_23.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Unnecessary waiting",
					"description": "Reduces the time for charging the skill by 1 seconds ",
					"icon": "55.png"
				},
				"e_2": {
					"effect_name": "Sharpened hammer",
					"description": "Successful hits with the hammer deal 40% more damage ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Dramatic Blow",
					"description": "Increases the incapacitate point by 20%. ",
					"icon": "31.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Massacre",
					"description": "Immediately swings the hammer without charging it, creating a soundwave which damages the foe for 30% of the skill damage. ",
					"icon": "22.png"
				},
				"e_2": {
					"effect_name": "Intemperate",
					"description": "Reduces the charging time by 50% and increases the maximum level of the charge gauge. Overcharging increases damage dealt by 80% ",
					"icon": "35.png"
				}
			},
			"type": "Charge"
		},
		"s_16": {
			"skill_name": "Gravity Compression",
			"cd": "24",
			"description": "Thrusts the hilt of the hammer into the ground, creating a black hole that deals [ ] damage. You can infuse gravity energy into the black hole for 2 seconds, which then spreads in all directions, dealing [ ] damage. Releasing the hotkey explodes the black hole for [ ]. A completed infusion creates a larger black hole that deals [ ] damage. ",
			"additional_effects": "incapacitate [Extreme high], destruction level 2",
			"time": "",
			"icon": "rsnaZCP.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Iron Heart",
					"description": "Reduces the time for charging the skill by 1 seconds ",
					"icon": "Tripod_Tier_1_25.png"
				},
				"e_2": {
					"effect_name": "Reasonable Choice",
					"description": "Increases attack speed by 15% but increases the skill cooldown by 5 seconds ",
					"icon": "Tripod_Tier_1_6.png"
				},
				"e_3": {
					"effect_name": "Unbearable Strength",
					"description": "Unleashing three cores ignores 30% of all armor on any target  ",
					"icon": "Tripod_Tier_1_2.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Absolute Power",
					"description": "Each core increases damage dealt by 100% ",
					"icon": "59.png"
				},
				"e_2": {
					"effect_name": "Strong Finish",
					"description": "The damage of the black hole’s explosion is increased by 45% ",
					"icon": "45.png"
				},
				"e_3": {
					"effect_name": "Drillmaster",
					"description": "Increases the area of effect by 25%. ",
					"icon": "49.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Target Location",
					"description": "You target the location to create a magnetic field up to 10m from the current location. You can hold for 3 seconds ",
					"icon": "56.png"
				},
				"e_2": {
					"effect_name": "Improved Magnetic Field",
					"description": "Increases damage of the black hole by 250% ",
					"icon": "26.png"
				}
			},
			"type": "Hold"
		},
		"s_17": {
			"skill_name": "Seismic Hammer",
			"cd": "30",
			"description": "Hold the hammer upside down, then leap in the air and smashing the ground for [ ]. After the impact, the skill creates a 5m cone-shaped wall which deals [ ] damage. ",
			"additional_effects": "incapacitate [High], Destruction level 2, immune to stiffness",
			"time": "",
			"icon": "e0XGANL.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Dramatic strike",
					"description": "Increases incapacitate point by 10% ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill. ",
					"icon": "Tripod_Tier_1_23.png"
				},
				"e_3": {
					"effect_name": "Unbearable Gravity",
					"description": "Each core increases the gravity gauge by 50% ",
					"icon": "Tripod_Tier_1_37.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Unbearable Strength",
					"description": "For easc core, ignore 15% of the enemy’s armor.  ",
					"icon": "Tripod_Tier_2_2.png"
				},
				"e_2": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 6 seconds. ",
					"icon": "Tripod_Tier_2_56.png"
				},
				"e_3": {
					"effect_name": "Sharp Wall",
					"description": "The wall deals 50% more damage. ",
					"icon": "46.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Power Hungry",
					"description": "Reduces the skill range by 30% but creates a circular shockwave wall which deals 40% increased damage. ",
					"icon": "47.png"
				},
				"e_2": {
					"effect_name": "Improved spot weakness",
					"description": "Smashes the hammer without jumping. You travel 2m father and create a larger wall which deals 25% additional damage. ",
					"icon": "56.png"
				}
			},
			"type": "Tap"
		}
	},
	"blaster": {
		"s_1": {
			"skill_name": " Enhanced Shell",
			"cd": "10",
			"description": "Fires the enhanced bullet that deals [ ] damage.  ",
			"additional_effects": "incapacitate [low]",
			"type": "Tap",
			"time": "",
			"icon": "mTSAYU3.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Damage increased",
					"description": "Increases damage by 10%.  ",
					"icon": "Tripod_Tier_1_0.png"
				},
				"e_2": {
					"effect_name": "Critical Hit",
					"description": "Increases a critical hit chance by 15%  ",
					"icon": "Tripod_Tier_1_4.png"
				},
				"e_3": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 2 seconds.  ",
					"icon": "Tripod_Tier_1_56.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Long Ranged Artillery ",
					"description": "Increases the skill range by 2m  ",
					"icon": "28.png"
				},
				"e_2": {
					"effect_name": "Natural Selection",
					"description": "Increases the damage dealt on lower grade and normal grade monsters by 40%  ",
					"icon": "44.png"
				},
				"e_3": {
					"effect_name": "Attack speed",
					"description": "Increases attack speed by 20%  ",
					"icon": "Tripod_Tier_2_6.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Penetration Shell",
					"description": "The shell penetrates the enemy  ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Ignition",
					"description": "Successful hits burn the enemy for 3 seconds  ",
					"icon": "7.png"
				}
			}
		},
		"s_2": {
			"skill_name": " Aim and Fire",
			"cd": "12",
			"description": "Deals [] damage to the enemies and lowers movement speed by 60% for 4 seconds ",
			"additional_effects": "",
			"type": "Tap",
			"time": "",
			"icon": "tEbXi09.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "skill range",
					"description": "Increases the skill range by 2m ",
					"icon": "Tripod_Tier_1_52.png"
				},
				"e_2": {
					"effect_name": "Empowered Will",
					"description": "Reduces mana consumption by 50%. ",
					"icon": "Tripod_Tier_1_34.png"
				},
				"e_3": {
					"effect_name": "Freezing",
					"description": "Enhances the movement speed debuff by 20% and deals 15% more damage to monsters above the seed grade. ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Icy Shell",
					"description": "Increases the duration of chill effect by 2 seconds and the duration of freeze effect by 1 second.  ",
					"icon": "Tripod_Tier_2_14.png"
				},
				"e_2": {
					"effect_name": "Improved Shell",
					"description": "Increases damage by 25% ",
					"icon": "45.png"
				},
				"e_3": {
					"effect_name": "Extensive Explosion",
					"description": "Increases the area of effect by 20% ",
					"icon": "49.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Chain Explosion",
					"description": "The shell penetrates through the enemy and explodes three times until it reaches the maximum range ",
					"icon": "22.png"
				},
				"e_2": {
					"effect_name": "Icy Explosion",
					"description": "Successful hits freeze the enemy for 3 seconds but increases the skill cooldown by 4 seconds ",
					"icon": "0.png"
				}
			}
		},
		"s_3": {
			"skill_name": " Gatling Gun",
			"cd": "20",
			"description": "Fires the machine gun rapidly to the direction of your mouse cursor for 3 seconds, and deals up to [] damage  ",
			"additional_effects": "",
			"type": "Tap",
			"time": "",
			"icon": "rNP8gza.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Shot",
					"description": "Increases damage by 10%  ",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 3 seconds.  ",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Final Blow",
					"description": "Deals 30% more damage to enemies that have less than 50% health.  ",
					"icon": ""
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Growing Bullet",
					"description": "Every second hit increases damage dealt by 5%  ",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Toughness",
					"description": "The caster becomes Invulnerable to crowd control effects while performing the skill  ",
					"icon": ""
				},
				"e_3": {
					"effect_name": "Thick Armor",
					"description": "Takes 50% less damage while performing the skill  ",
					"icon": ""
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "파괴자의 의지",
					"description": "The skill becomes a holding skill and the caster can shoot the machine gun for 4 seconds.  ",
					"icon": ""
				},
				"e_2": {
					"effect_name": "Aim and Fire",
					"description": "The skill has 50% decreased the area of effect but the skill range is increased by 50%. Also, it ignores the enemy’s armor by 60%  ",
					"icon": ""
				}
			}
		},
		"s_4": {
			"skill_name": " Buckshot",
			"cd": "12",
			"description": "Buckshot spreads in a fan shape, deals [ ] damage, pushing the enemy backwards ",
			"additional_effects": "",
			"type": "Tap",
			"time": "",
			"icon": "XVC4GQf.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Penetration",
					"description": "Increases the penetration level by 1 ",
					"icon": "Tripod_Tier_1_21.png"
				},
				"e_2": {
					"effect_name": "Pushing back",
					"description": "Successful hits stiffen the enemy longer and push the enemy back farther ",
					"icon": "Tripod_Tier_1_60.png"
				},
				"e_3": {
					"effect_name": "Spot Weakness",
					"description": "Increases damage done any target with the Invulnerable status by 25%. ",
					"icon": "Tripod_Tier_1_9.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Critical Strike",
					"description": "Increases a critical hit chance by 30% ",
					"icon": "57.png"
				},
				"e_2": {
					"effect_name": "Penetrated Will",
					"description": "Successful hits ignore the enemy’s physical armor by 40% ",
					"icon": "56.png"
				},
				"e_3": {
					"effect_name": "Long Ranged Buckshot",
					"description": "Increases the skill range by 20% ",
					"icon": "49.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Elimination Buckshot",
					"description": "The skill has 40% decreased the area of effect but shots buckshot twice with increased attack speed. The maximum damage is increased by 60% ",
					"icon": "19.png"
				},
				"e_2": {
					"effect_name": "Ignition",
					"description": "Successful hits burn the enemy for 3 seconds ",
					"icon": "7.png"
				}
			}
		},
		"s_5": {
			"skill_name": " Howitzer",
			"cd": "12",
			"description": "Shoots a shell to the target location and lifts the enemy ",
			"additional_effects": "Destruction level 1, incapacitate [medium]",
			"type": "Point",
			"time": "",
			"icon": "yo8Xps3.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Long ranged Shelling",
					"description": "The skill range is increased by 1m ",
					"icon": "Tripod_Tier_1_52.png"
				},
				"e_2": {
					"effect_name": "Quick Response",
					"description": "Increases attack speed by 10% ",
					"icon": "Tripod_Tier_1_6.png"
				},
				"e_3": {
					"effect_name": "Controlling Mana",
					"description": "Grants a 50% chance to ignore mana consumption ",
					"icon": "Tripod_Tier_1_34.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Vulnerable Target",
					"description": "Damage is increased by 30% when used against a target under crowd control effects [airborne and knock down]. ",
					"icon": "62.png"
				},
				"e_2": {
					"effect_name": "Final Blow",
					"description": "Increases a 50% critical hit chance when the caster deals enemies that have less than 50% health. ",
					"icon": "31.png"
				},
				"e_3": {
					"effect_name": "Concentrated Shelling",
					"description": "The enemy near center of the explosion takes 30% more damage ",
					"icon": "45.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Flash Shell",
					"description": "Increases the area of effect by 20% and damage dealt by 50% ",
					"icon": "22.png"
				},
				"e_2": {
					"effect_name": "Fireworks",
					"description": "Bombards random places with increased damage ",
					"icon": "35.png"
				}
			}
		},
		"s_6": {
			"skill_name": " Multiple Rocket Launcher",
			"cd": "16",
			"description": "Shoots a missile to the random direction five times. The skill deals up to [] ",
			"additional_effects": "immune to stiffness, incapacitate [medium-high]",
			"type": "Tap",
			"time": "",
			"icon": "SVfOQl2.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "High Speed Rocket",
					"description": "Increases the travel speed of rocket by 20% ",
					"icon": "Tripod_Tier_1_11.png"
				},
				"e_2": {
					"effect_name": "Long ranged Rocket",
					"description": "Increases the skill range by 3m ",
					"icon": "Tripod_Tier_1_52.png"
				},
				"e_3": {
					"effect_name": "Backstep",
					"description": "Each rocket shot pushes the caster back by 0.8m ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Giant Rocket",
					"description": "Increases the size of rocket by 30% ",
					"icon": "49.png"
				},
				"e_2": {
					"effect_name": "Stun effect",
					"description": "Successful hits have a 20% chance to stun the enemy for 3 seconds ",
					"icon": "34.png"
				},
				"e_3": {
					"effect_name": "Rapid Fire",
					"description": "Launches the rockets 7 times with faster attack speed ",
					"icon": "Tripod_Tier_2_54.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Enhanced Rocket Launcher",
					"description": "Increases the area of effect by 20% and the damage dealt by 30% ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Super Armor",
					"description": "The caster becomes Invulnerable to hard crowd control effects while performing the skill and the caster absorbs 100% more fire power resources  ",
					"icon": "41.png"
				}
			}
		},
		"s_7": {
			"skill_name": "Napalm bomb",
			"cd": "24",
			"description": "Explodes the napalm bomb which deals [] damage and lifts the enemy to the air. The explosion creates burning field that remains for 6 seconds, and deals [ ] damage per second   ",
			"additional_effects": "incapacitate [medium-high], destruction level 1",
			"time": "",
			"icon": "JqWJm6l.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Improved Destruction",
					"description": "Increases the destruction level on the explosion by 1  ",
					"icon": "Tripod_Tier_1_22.png"
				},
				"e_2": {
					"effect_name": "Wide Explosion",
					"description": "Increases the area of effect of the explosion by 10%  ",
					"icon": "Tripod_Tier_1_7.png"
				},
				"e_3": {
					"effect_name": "Improved Shelling",
					"description": "Increases damage of the explosion by 50%  ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Nut Cracker",
					"description": "Increases a critical hit chance of the explosion by 50%  ",
					"icon": "57.png"
				},
				"e_2": {
					"effect_name": "Focus Mind",
					"description": "Successful explosion hits regen 80% of mana that consumed by the skill  ",
					"icon": "Tripod_Tier_2_34.png"
				},
				"e_3": {
					"effect_name": "Armor Destruction",
					"description": "Successful explosion hits ignore the enemy’s all defense by 40% for 3 seconds  ",
					"icon": "27.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Chain Explosion",
					"description": "Quickly shoots the bomb twice and lifts the enemy twice  ",
					"icon": "35.png"
				},
				"e_2": {
					"effect_name": "Inferno",
					"description": "The burning field remains for 3 seconds longer  ",
					"icon": "27.png"
				}
			},
			"type": "Tap"
		},
		"s_8": {
			"skill_name": " Flamethrower",
			"cd": "24",
			"description": "Shoot the flamethrower to one direction and the caster can freely move. The flamethrower lasts for 4 seconds and deals up to [] damage   ",
			"additional_effects": "incapacitate [medium-high], backattack",
			"type": "Hold",
			"time": " 4 sec",
			"icon": "tXQSrZJ.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Nut Cracker",
					"description": "Increases a critical hit chance by 20%   ",
					"icon": "Tripod_Tier_1_4.png"
				},
				"e_2": {
					"effect_name": "Thick Armor",
					"description": "Takes 50% less damage while performing the skill   ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Controlling Firepower",
					"description": "Successful hits absorb 100% more firepower resources   ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Ignoring Collision",
					"description": "The caster ignores collision with normal monsters while performing the skill   ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Long ranged Flame",
					"description": "Increases the skill range by 20%   ",
					"icon": "49.png"
				},
				"e_3": {
					"effect_name": "Swift Movement",
					"description": "Increases movement speed by 20% while performing the skill   ",
					"icon": "51.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Blue Flame",
					"description": "Increases the skill duration by 1 second   ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Burning Flame",
					"description": "The area of effect is increased, and successful hits have a 10% chance to burn the enemy for 10 seconds   ",
					"icon": "48.png"
				}
			}
		},
		"s_9": {
			"skill_name": " Brandish",
			"cd": "24",
			"description": "Brandish the launcher, deals [] damage, and stunning the enemy for 2 seconds ",
			"additional_effects": "Back Attack",
			"type": "Tap",
			"time": "",
			"icon": "9EOffp4.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Empowered Will",
					"description": "Reduces mana consumption by 50%. ",
					"icon": "Tripod_Tier_1_34.png"
				},
				"e_2": {
					"effect_name": "Armor Destruction",
					"description": "Successful hits reduce the enemy’s defense by 30% for 4 seconds. ",
					"icon": "Tripod_Tier_1_46.png"
				},
				"e_3": {
					"effect_name": "Swift Attack",
					"description": "Increases attack speed by 20% ",
					"icon": "Tripod_Tier_1_6.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Improved Strike",
					"description": "Increases damage done by 100%. ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Not Quite up yet (maintaining stun)",
					"description": "Increases the duration of stun effect by 2 seconds ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Mana Regeneration",
					"description": "Each inflicted enemy regenerate 25% mana up to 100% ",
					"icon": "33.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Rush",
					"description": "Rushes 6m and attack the enemy ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Spin Attack",
					"description": "Swing the launcher 360 degree  ",
					"icon": "19.png"
				}
			}
		},
		"s_10": {
			"skill_name": " Air Strike",
			"cd": "20",
			"description": "Launches rockets to the air and the rockets fall random location near the target area. The rockets deals up to [] damage and lifts the enemy  ",
			"additional_effects": "immune to stiffness, incapacitate [medium]",
			"type": "Point",
			"time": "",
			"icon": "6wggKY3.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Empowered Will",
					"description": "Reduces mana consumption by 50%.  ",
					"icon": "Tripod_Tier_1_34.png"
				},
				"e_2": {
					"effect_name": "Natural Selection",
					"description": "Increases the damage dealt on lower grade and normal grade monsters by 40%  ",
					"icon": "Tripod_Tier_1_61.png"
				},
				"e_3": {
					"effect_name": "Spot Weakness",
					"description": "Increases damage done any target with the Invulnerable status by 20%.  ",
					"icon": "Tripod_Tier_1_33.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Flame Strike",
					"description": "Successful hits burn the enemy for 6 seconds  ",
					"icon": "Tripod_Tier_2_13.png"
				},
				"e_2": {
					"effect_name": "Icy Strike",
					"description": "No longer lift the enemy but deals 35% more damage and reduces the enemy’s movement speed by 60% for 2 seconds  ",
					"icon": "Tripod_Tier_2_14.png"
				},
				"e_3": {
					"effect_name": "Lightning Strike",
					"description": "No longer lift the enemy but deals 20% more damage and has a 30% chance to shock the enemy for 3 seconds  ",
					"icon": "Tripod_Tier_2_17.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "No Mercy",
					"description": "Launches the rocket 3 more times and damage done is increased by 20%  ",
					"icon": "31.png"
				},
				"e_2": {
					"effect_name": "Nuclear Bomb",
					"description": "Drops the one and strongest bomb to the target location. Damage done and the area of effect are greatly increased  ",
					"icon": "22.png"
				}
			}
		},
		"s_11": {
			"skill_name": " Jump and Fire",
			"cd": "20",
			"description": "Jumps up in the air and fires the launcher below the caster. It deals [] damage and knock the enemy back ",
			"additional_effects": "incapacitate [low]",
			"type": "Tap",
			"time": "",
			"icon": "4boandX.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Quick Jump",
					"description": "Increases attack speed by 10% ",
					"icon": "Tripod_Tier_1_6.png"
				},
				"e_2": {
					"effect_name": "Controlling Mana",
					"description": "Grants a 50% chance to ignore mana consumption ",
					"icon": "Tripod_Tier_1_34.png"
				},
				"e_3": {
					"effect_name": "Cramp",
					"description": "Increases the duration of knock back status by 0.5 seconds ",
					"icon": "Tripod_Tier_1_9.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Extensive Explosion",
					"description": "Increases the area of effect by 15% ",
					"icon": "49.png"
				},
				"e_2": {
					"effect_name": "Improved Shelling",
					"description": "Increases damage done by 25%. ",
					"icon": "45.png"
				},
				"e_3": {
					"effect_name": "Spot Weakness",
					"description": "Increases damage done any target with the Invulnerable status by 25%. ",
					"icon": "36.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Triple Fire",
					"description": "Fires the launcher three times and damage done is increased by 100%. Last hit knocks the enemy back ",
					"icon": "31.png"
				},
				"e_2": {
					"effect_name": "Rocket Jump",
					"description": "Leap through the air to the target location ",
					"icon": "54.png"
				}
			}
		},
		"s_12": {
			"skill_name": " Summoning Turret",
			"cd": "60",
			"description": "Summons an auto turret. The turret deals [] damage ",
			"additional_effects": "",
			"type": "Tap",
			"time": "",
			"icon": "hn4DgVv.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Fast Recharge",
					"description": "Reduces the turret stack timer by 3 seconds ",
					"icon": "Tripod_Tier_1_56.png"
				},
				"e_2": {
					"effect_name": "Extra Battery",
					"description": "Increases the duration of the turret by 2 seconds ",
					"icon": "Tripod_Tier_1_51.png"
				},
				"e_3": {
					"effect_name": "Controlling Battery",
					"description": "Summoning the turret has a 20% chance to not consume the turret stack ",
					"icon": "Tripod_Tier_1_35.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Improved Turret",
					"description": "Increases damage done by 20% ",
					"icon": "45.png"
				},
				"e_2": {
					"effect_name": "Long ranged Turret",
					"description": "Increases the skill range by 30% ",
					"icon": "28.png"
				},
				"e_3": {
					"effect_name": "Armor Destruction",
					"description": "Successful hits reduce the enemy’s defense by 5% up to 40% ",
					"icon": "27.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Big Pack",
					"description": "Increases the turret stack to three ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Laser Turret",
					"description": "Turret shoots the laser and damage done is increased by 50% ",
					"icon": "0.png"
				}
			}
		},
		"s_13": {
			"skill_name": " Plasma Strom",
			"cd": "24",
			"description": "Creates the plasma storm that slowly follows the enemy. The storm deals [] damage per 0.5 seconds ",
			"additional_effects": "immune to stiffness, incapacitate [medium]",
			"type": "Tap",
			"time": "",
			"icon": "8OJbwI1.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Offensive preparation",
					"description": "After performing the skill, it grants a 15% damage increase for 3 seconds ",
					"icon": "Tripod_Tier_1_50.png"
				},
				"e_2": {
					"effect_name": "Thick Armor",
					"description": "Takes 30% less damage while performing the skill ",
					"icon": "Tripod_Tier_1_25.png"
				},
				"e_3": {
					"effect_name": "Stun",
					"description": "Successful hits have a 10% chance to stun the enemy for 2 seconds ",
					"icon": "Tripod_Tier_1_44.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Fast Travel",
					"description": "Increases the speed of the plasma storm by 20% ",
					"icon": "51.png"
				},
				"e_2": {
					"effect_name": "Improved continuity",
					"description": "Increases the skill duration by 2 seconds ",
					"icon": "29.png"
				},
				"e_3": {
					"effect_name": "Massive Plasma",
					"description": "Increases the area of effect by 20% ",
					"icon": "49.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Growing Plasma",
					"description": "The enemy takes 10% more damage every 0.5 seconds in the storm ",
					"icon": "33.png"
				},
				"e_2": {
					"effect_name": "Ice Storm",
					"description": "Reduces the enemy’s movement speed by 70% ",
					"icon": "0.png"
				}
			}
		},
		"s_14": {
			"skill_name": " Gravity Explosion",
			"cd": "36",
			"description": "Creates the gravity field that pulls the enemy and explodes it. The explosion knocks the enemy backwards   ",
			"additional_effects": "destruction level 1, immune to stiffness, incapacitate [medium-high], Back Attack",
			"type": "Hold",
			"time": "",
			"icon": "2xkAUyE.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Empowered Will",
					"description": "Reduces mana consumption by 50%.   ",
					"icon": "Tripod_Tier_1_34.png"
				},
				"e_2": {
					"effect_name": "Thick Armor",
					"description": "Takes 30% less damage while performing the skill   ",
					"icon": "Tripod_Tier_1_25.png"
				},
				"e_3": {
					"effect_name": "Cramp",
					"description": "Increases the duration of knock back status by 1 second   ",
					"icon": "Tripod_Tier_1_9.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Armor Destruction",
					"description": "Successful pulls reduce the enemy’s defense by 30% for 3 seconds.   ",
					"icon": "27.png"
				},
				"e_2": {
					"effect_name": "Wide Gravity",
					"description": "Increases the area of pulling by 20%   ",
					"icon": "49.png"
				},
				"e_3": {
					"effect_name": "Swift Movement",
					"description": "Pulls the enemy 20% faster   ",
					"icon": "55.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Last Explosion",
					"description": "Deals 75% more damage to enemies that have less than 25% health.   ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Super Armor",
					"description": "The caster becomes Invulnerable to hard crowd control effects while performing the skill and the caster absorbs 100% more fire power resources    ",
					"icon": "41.png"
				}
			}
		},
		"s_15": {
			"skill_name": " Blast",
			"cd": "8",
			"description": "Blasts the enemy and deals [] damage ",
			"additional_effects": "incapacitate [low], Back Attack",
			"type": "Tap",
			"time": "",
			"icon": "wVARZI8.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Changing Coordinate",
					"description": "Attack location changes to 2m front of the caster ",
					"icon": "Tripod_Tier_1_52.png"
				},
				"e_2": {
					"effect_name": "Controlling Firepower",
					"description": "Successful hits absorb 100% more firepower resources ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Increases area",
					"description": "Increases the area of effect by 10% ",
					"icon": "Tripod_Tier_1_7.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 3 seconds. ",
					"icon": "Tripod_Tier_2_56.png"
				},
				"e_2": {
					"effect_name": "Improved Shelling",
					"description": "Increases damage done by 30%. ",
					"icon": "45.png"
				},
				"e_3": {
					"effect_name": "Sharp Strike",
					"description": "Increases critical damage by 100% ",
					"icon": "57.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Dancing Boom",
					"description": "The explosion causes another two small explosions right next to it. <br> Additional explosions are reduced damage and the area of effect by 50% ",
					"icon": "31.png"
				},
				"e_2": {
					"effect_name": "Concentrate Fire",
					"description": "The skill changes to the first level of charging skill. Successful charging increases damage dealt by 80% ",
					"icon": "19.png"
				}
			}
		},
		"s_16": {
			"skill_name": " Missile strike",
			"cd": "20",
			"description": "Installs a guiding device to the target location. After 5 seconds, the missile hits the device and deals [ ] damage. The missile also lifts the enemy to the air. ",
			"additional_effects": "incapacitate [low]",
			"type": "Tap",
			"time": "",
			"icon": "r6yqHyB.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Long ranged Installment",
					"description": "The skill range is increased by 2m ",
					"icon": "Tripod_Tier_1_52.png"
				},
				"e_2": {
					"effect_name": "Improved Guiding Missile",
					"description": "The missile strikes the target location in 4 seconds ",
					"icon": "0.png"
				},
				"e_3": {
					"effect_name": "Slow Effect",
					"description": "The guiding device reduces the enemy’s movement speed by 30% ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Nut Cracker",
					"description": "Increases a critical hit chance by 30% ",
					"icon": "57.png"
				},
				"e_2": {
					"effect_name": "Natural Selection",
					"description": "Increases the damage dealt on lower grade and normal grade monsters by 40% ",
					"icon": "44.png"
				},
				"e_3": {
					"effect_name": "Spot Weakness",
					"description": "Increases damage done any target with the Invulnerable status by 40%. ",
					"icon": "36.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "EMP",
					"description": "No longer lifting the enemy in the air, but the missile stuns the enemy for 4 seconds. The incapacitate point is increased by 40% ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Atomic Bomb",
					"description": "The missile creates a radiation field that lasts for 6 seconds ",
					"icon": "22.png"
				}
			}
		},
		"s_17": {
			"skill_name": " Energy Field",
			"cd": "60",
			"description": "Creates a protective shield which absorbs damage equal to 20% of the maximum health. The shield lasts for 8 seconds. ",
			"additional_effects": "",
			"type": "Tap",
			"time": "",
			"icon": "QzGWYlE.png",
			"tripod_lvl1": {
				"e_1": {
					"effect_name": "Concentrate Fire",
					"description": "The firepower gauge is increased by 50% when the caster has less than 30% health ",
					"icon": "Tripod_Tier_1_37.png"
				},
				"e_2": {
					"effect_name": "Energy Unleashed",
					"description": "The caster unleashes energy when the skill is activated. ",
					"icon": "Tripod_Tier_1_1.png"
				},
				"e_3": {
					"effect_name": "Improved Will",
					"description": "No longer requires mana to activate the skill ",
					"icon": "0.png"
				}
			},
			"tripod_lvl2": {
				"e_1": {
					"effect_name": "Improved Shield",
					"description": "The protective shield can absorb 20% more damage ",
					"icon": "47.png"
				},
				"e_2": {
					"effect_name": "Overflow Energy",
					"description": "Increases the duration of the skill for 4 seconds ",
					"icon": "29.png"
				},
				"e_3": {
					"effect_name": "Quick Response",
					"description": "Decreases the skill cooldown by 10 seconds. ",
					"icon": "Tripod_Tier_2_56.png"
				}
			},
			"tripod_lvl3": {
				"e_1": {
					"effect_name": "Thick Shield",
					"description": "The caster becomes Invulnerable to crowd control effects while the shield is up ",
					"icon": "0.png"
				},
				"e_2": {
					"effect_name": "Sharing Energy",
					"description": "Reduces the skill duration by 5 seconds but all party members get the shield from the caster ",
					"icon": "18.png"
				}
			}
		}
	}
}