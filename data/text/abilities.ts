export const AbilitiesText: {[k: string]: AbilityText} = {
	noability: {
		name: "No Ability",
		shortDesc: "Does nothing.",
	},
	acceleration: {
		name: "Acceleration",
		desc: "The power of this Pokemon's priority moves is multiplied by 1.5.",
		shortDesc: "This Pokemon's priority moves have 1.5x power.",
	},
	adaptability: {
		name: "Adaptability",
		desc: "This Pokemon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
		shortDesc: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5.",
	},
	junglespirit: {
		name: "Jungle Spirit",
		desc: "This Pokemon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
		shortDesc: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5.",
	},
	dragonarmor: {
		name: "Dragon Armor",
		desc: "This Pokemon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
		shortDesc: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5.",
	},
	voicetuning: {
		name: "Dragon Armor",
		desc: "This Pokemon's moves that match one of its types have a same-type attack bonus (STAB) of 2 instead of 1.5.",
		shortDesc: "This Pokemon's same-type attack bonus (STAB) is 2 instead of 1.5.",
	},
	aerilate: {
		name: "Aerilate",
		desc: "This Pokemon's Normal-type moves become Flying-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Flying type and have 1.2x power.",
		gen6: {
			desc: "This Pokemon's Normal-type moves become Flying-type moves and have their power multiplied by 1.3. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
			shortDesc: "This Pokemon's Normal-type moves become Flying type and have 1.3x power.",
		},
	},
	atomizate: {
		name: "Atomizate",
		shortDesc: "This Pokemon's Normal-type moves become Nuclear type and have 1.2x power.",
	},
	geigersense: {
		name: "Geiger Sense",
		shortDesc: "On switch-in, raises Attack and Sp. Atk if another Nuclear-type is on field.",
	},
	leadskin: {
		name: "Lead Skin",
		desc: "This Pokemon is immune to damaging Nuclear-type moves and Fallout.",
		shortDesc: "This Pokemon is immune to damaging Nuclear-type moves.",
	},
	lernean: {
		name: "Lernean",
		desc: "If this Pokemon is a Hydreigon-Mega, it will gain more heads if its HP decreases below 80%, 60%, 40%, or 20%, gaining multiple heads if its HP falls below multiple of these thresholds at once. Restoring HP does not remove heads and more heads will not generate if a threshold has previously been reached. It starts with 5 heads and hits once for each head with decreasing damage per hit.",
		shortDesc: "If Hydreigon-Mega, gains heads when losing HP and hits once for each head.",
	},
	regurgitation: {
		name: "Regurgitation",
		desc: "After successfully using an attack or targetable status move, this Pokemon deals a second hit of damage that does 1/6 of the target's max HP. This damage is multiplied by the damage multiplier of the target and the type of the pokemon in Muk's mouth.",
		shortDesc: "Based on the effectiveness of the Pokemon in Muk's mouth, this deals a secondary hit.",

		activate: "  [POKEMON] did an additional attack!",
	},
	chernobyl: {
		name: "Chernobyl",
		shortDesc: "On switch-in, this Pokemon summons Fallout.",
	},
	dualsight: {
		name: "Dual Sight",
		shortDesc: "This Pokemon's attacks hit both foes with 3/4 power.",
	},
	catalog: {
		name: "Catalog",
		shortDesc: "This Pokemon's stat stages change with the foe.",
	},
	aftermath: {
		name: "Aftermath",
		desc: "If this Pokemon is knocked out with a contact move, that move's user loses 1/4 of its maximum HP, rounded down. If any active Pokemon has the Damp Ability, this effect is prevented.",
		shortDesc: "If this Pokemon is KOed with a contact move, that move's user loses 1/4 its max HP.",

		damage: "  [POKEMON] was hurt!",
	},
	airlock: {
		name: "Air Lock",
		shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",

		start: "  The effects of the weather disappeared.",
	},
	earthlock: {
		name: "Earth Lock",
		shortDesc: "While this Pokemon is active, the effects of terrain conditions are disabled.",

		start: "  The effects of the terrain disappeared.",
	},
	amplifier: {
		name: "Amplifier",
		shortDesc: "This Pokemon's Sound-based moves are boosted by 1.25x.",
	},
	soundboost: {
		name: "Sound Boost",
		shortDesc: "This Pokemon's Sound-based moves are boosted by 1.3x.",
	},
	analytic: {
		name: "Analytic",
		desc: "The power of this Pokemon's move is multiplied by 1.3 if it is the last to move in a turn. Does not affect Doom Desire and Future Sight.",
		shortDesc: "This Pokemon's attacks have 1.3x power if it is the last to move in a turn.",
	},
	angerpoint: {
		name: "Anger Point",
		desc: "If this Pokemon, but not its substitute, is struck by a critical hit, its Attack is raised by 12 stages.",
		shortDesc: "If this Pokemon (not its substitute) takes a critical hit, its Attack is raised 12 stages.",
		gen4: {
			desc: "If this Pokemon, or its substitute, is struck by a critical hit, its Attack is raised by 12 stages.",
			shortDesc: "If this Pokemon or its substitute takes a critical hit, its Attack is raised 12 stages.",
		},

		boost: "  [POKEMON] maxed its Attack!",
	},
	anticipation: {
		name: "Anticipation",
		desc: "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Multi-Attack, Natural Gift, Revelation Dance, Techno Blast, and Weather Ball are considered Normal-type moves.",
		shortDesc: "On switch-in, this Pokemon shudders if any foe has a supereffective or OHKO move.",
		gen6: {
			desc: "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective against this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, Hidden Power counts as its determined type, and Judgment, Natural Gift, Techno Blast, and Weather Ball are considered Normal-type moves.",
		},
		gen5: {
			desc: "On switch-in, this Pokemon is alerted if any opposing Pokemon has an attack that is super effective on this Pokemon, or an OHKO move. Counter, Metal Burst, and Mirror Coat count as attacking moves of their respective types, while Hidden Power, Judgment, Natural Gift, Techno Blast, and Weather Ball are considered Normal-type moves.",
		},

		activate: "  [POKEMON] shuddered!",
	},
	arenatrap: {
		name: "Arena Trap",
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or are airborne.",
		shortDesc: "Prevents adjacent foes from choosing to switch unless they are airborne.",
	},
	aromaveil: {
		name: "Aroma Veil",
		desc: "This Pokemon and its allies cannot be affected by Attract, Disable, Encore, Heal Block, Taunt, or Torment.",
		shortDesc: "Protects user/allies from Attract, Disable, Encore, Heal Block, Taunt, and Torment.",

		block: "  [POKEMON] is protected by an aromatic veil!",
	},
	asone: {
		name: "As One",
		shortDesc: "(Separate abilities on Glastrier and Spectrier.)",

		start: "  [POKEMON] has two Abilities!",
	},
	asoneglastrier: {
		name: "As One (Glastrier)",
		shortDesc: "The combination of Unnerve and Chilling Neigh.",
	},
	asonespectrier: {
		name: "As One (Spectrier)",
		shortDesc: "The combination of Unnerve and Grim Neigh.",
	},
	aurabreak: {
		name: "Aura Break",
		desc: "While this Pokemon is active, the effects of the Dark Aura and Fairy Aura Abilities are reversed, multiplying the power of Dark- and Fairy-type moves, respectively, by 3/4 instead of 1.33.",
		shortDesc: "While this Pokemon is active, the Dark Aura and Fairy Aura power modifier is 0.75x.",

		start: "  [POKEMON] reversed all other Pok\u00E9mon's auras!",
	},
	baddreams: {
		name: "Bad Dreams",
		desc: "Causes adjacent opposing Pokemon to lose 1/8 of their maximum HP, rounded down, at the end of each turn if they are asleep.",
		shortDesc: "Causes sleeping adjacent foes to lose 1/8 of their max HP at the end of each turn.",

		damage: "  [POKEMON] is tormented!",
	},
	ballfetch: {
		name: "Ball Fetch",
		shortDesc: "No competitive use.",
	},
	battery: {
		name: "Battery",
		shortDesc: "This Pokemon's allies have the power of their special attacks multiplied by 1.3.",
	},
	battlearmor: {
		name: "Battle Armor",
		shortDesc: "This Pokemon cannot be struck by a critical hit.",
	},
	battlebond: {
		name: "Battle Bond",
		desc: "If this Pokemon is a Greninja, it transforms into Ash-Greninja after knocking out a Pokemon. As Ash-Greninja, its Water Shuriken has 20 base power and always hits 3 times.",
		shortDesc: "After KOing a Pokemon: becomes Ash-Greninja, Water Shuriken: 20 power, hits 3x.",

		activate: "  [POKEMON] became fully charged due to its bond with its Trainer!",
		transform: "[POKEMON] became Ash-Greninja!",
	},
	beastboost: {
		name: "Beast Boost",
		desc: "This Pokemon's highest stat is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's highest stat is raised by 1 if it attacks and KOes another Pokemon.",
	},
	berserk: {
		name: "Berserk",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Special Attack is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 1 when it reaches 1/2 or less of its max HP.",
	},
	brilliantflurry: {
		name: "Brilliant Flurry",
		shortDesc: "This Pokemon's lowers the foe's Atk, Sp. Atk and Spe by 1 when it reaches 1/2 or less of its max HP.",
	},
	vengeance: {
		name: "Vengeance",
		shortDesc: "when this Pokemon reaches 1/2 or less of its max HP, the foe loses 1/4 of their max HP.",
	},
	bouldernest: {
		name: "Boulder Nest",
		shortDesc: "when this Pokemon reaches 1/2 or less of its max HP, it sets Stealth Rocks.",
	},
	adrenaline: {
		name: "Adranaline",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Speed is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "This Pokemon's Speed is raised by 1 when it reaches 1/2 or less of its max HP.",
	},
	survivalinstinct: {
		name: "Survival Instinct",
		shortDesc: "This Pokemon's damaging attacks never miss when at 1/2 or less of its max HP.",
	},
	spiritguide: {
		name: "Spirit Guide",
		shortDesc: "Pokemon making contact with this Pokemon have their Defense lowered by 1 stage.",
	},
	stubborn: {
		name: "Stubborn",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Defense is raised by 1 stage. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "This Pokemon's Defense is raised by 1 when it reaches 1/2 or less of its max HP.",
	},
	bigpecks: {
		name: "Big Pecks",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Defense stat stage.",
	},
	blaze: {
		name: "Blaze",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fire-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Fire attacks.",
		gen4: {
			desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Fire-type attacks have their power multiplied by 1.5.",
			shortDesc: "At 1/3 or less of its max HP, this Pokemon's Fire-type attacks have 1.5x power.",
		},
	},
	bulletproof: {
		name: "Bulletproof",
		desc: "This Pokemon is immune to ballistic moves. Ballistic moves include Bullet Seed, Octazooka, Barrage, Rock Wrecker, Zap Cannon, Acid Spray, Aura Sphere, Focus Blast, and all moves with Ball or Bomb in their name.",
		shortDesc: "Makes user immune to ballistic moves (Shadow Ball, Sludge Bomb, Focus Blast, etc).",
	},
	cheekpouch: {
		name: "Cheek Pouch",
		desc: "If this Pokemon eats a Berry, it restores 1/3 of its maximum HP, rounded down, in addition to the Berry's effect.",
		shortDesc: "If this Pokemon eats a Berry, it restores 1/3 of its max HP after the Berry's effect.",
	},
	roast: {
		name: "Roast",
		shortDesc: "If this Pokemon eats a Berry, it's Attack and Sp. Atk increase one stage.",
	},
	chillingneigh: {
		name: "Chilling Neigh",
		desc: "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	chlorophyll: {
		name: "Chlorophyll",
		desc: "If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon's Speed is doubled.",
		shortDesc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
		gen7: {
			desc: "If Sunny Day is active, this Pokemon's Speed is doubled.",
		},
	},
	clearbody: {
		name: "Clear Body",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
	},
	cloudnine: {
		name: "Cloud Nine",
		shortDesc: "While this Pokemon is active, the effects of weather conditions are disabled.",

		start: "#airlock",
	},
	colorchange: {
		name: "Color Change",
		desc: "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "This Pokemon's type changes to the type of a move it's hit by, unless it has the type.",
		gen4: {
			desc: "This Pokemon's type changes to match the type of the last move that hit it, unless that type is already one of its types. This effect applies after each hit from a multi-hit move. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
	},
	comatose: {
		name: "Comatose",
		desc: "This Pokemon cannot be statused, and is considered to be asleep. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "This Pokemon cannot be statused, and is considered to be asleep.",

		start: "  [POKEMON] is drowsing!",
	},
	competitive: {
		name: "Competitive",
		desc: "This Pokemon's Special Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 2 for each of its stats that is lowered by a foe.",
	},
	belligerent: {
		name: "Belligerent",
		desc: "This Pokemon's attaking stats are raised for each of its stat stages that is lowered by an opposing Pokemon.",
		shortDesc: "This Pokemon's Attack and Sp. Atk are raised for each of its stats that is lowered by a foe.",
	},
	compoundeyes: {
		name: "Compound Eyes",
		shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3.",
	},
	contrary: {
		name: "Contrary",
		desc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.",
		shortDesc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa.",
		gen6: {
			desc: "If this Pokemon has a stat stage raised it is lowered instead, and vice versa.",
		},
	},
	corrosion: {
		name: "Corrosion",
		shortDesc: "This Pokemon can poison or badly poison other Pokemon regardless of their typing.",
	},
	cottondown: {
		name: "Cotton Down",
		desc: "When this Pokemon is hit by an attack, the Speed of all other Pokemon on the field is lowered by 1 stage.",
		shortDesc: "If this Pokemon is hit, it lowers the Speed of all other Pokemon on the field 1 stage.",
	},
	curiousmedicine: {
		name: "Curious Medicine",
		shortDesc: "On switch-in, this Pokemon's allies have their stat stages reset to 0.",
	},
	cursedbody: {
		name: "Cursed Body",
		desc: "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled unless one of the attacker's moves is already disabled.",
		shortDesc: "If this Pokemon is hit by an attack, there is a 30% chance that move gets disabled.",
	},
	quillerinstinct: {
		name: "Quiller Instinct",
		desc: "If this Pokemon is hit by an attack, it sets a layer of spikes on the foe's side of the field.",
		shortDesc: "Sets a layer of spikes if hit by an attack.",
	},
	cutecharm: {
		name: "Cute Charm",
		desc: "There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender.",
		shortDesc: "30% chance of infatuating Pokemon of the opposite gender if they make contact.",
		gen4: {
			desc: "There is a 30% chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
		gen3: {
			desc: "There is a 1/3 chance a Pokemon making contact with this Pokemon will become infatuated if it is of the opposite gender. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "1/3 chance of infatuating Pokemon of the opposite gender if they make contact.",
		},
	},
	damp: {
		name: "Damp",
		desc: "While this Pokemon is active, Explosion, Mind Blown, Misty Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
		shortDesc: "Prevents Explosion/Mind Blown/Misty Explosion/Self-Destruct/Aftermath while active.",
		gen7: {
			desc: "While this Pokemon is active, Explosion, Mind Blown, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
			shortDesc: "Prevents Explosion/Mind Blown/Self-Destruct/Aftermath while this Pokemon is active.",
		},
		gen6: {
			desc: "While this Pokemon is active, Explosion, Self-Destruct, and the Aftermath Ability are prevented from having an effect.",
			shortDesc: "Prevents Explosion/Self-Destruct/Aftermath while this Pokemon is active.",
		},

		block: "  [SOURCE] cannot use [MOVE]!",
	},
	dancer: {
		name: "Dancer",
		desc: "After another Pokemon uses a dance move, this Pokemon uses the same move. Moves used by this Ability cannot be copied again.",
		shortDesc: "After another Pokemon uses a dance move, this Pokemon uses the same move.",
	},
	darkaura: {
		name: "Dark Aura",
		desc: "While this Pokemon is active, the power of Dark-type moves used by active Pokemon is multiplied by 1.33.",
		shortDesc: "While this Pokemon is active, a Dark move used by any Pokemon has 1.33x power.",

		start: "  [POKEMON] is radiating a dark aura!",
	},
	dauntlessshield: {
		name: "Dauntless Shield",
		shortDesc: "On switch-in, this Pokemon's Defense is raised by 1 stage.",
	},
	dazzling: {
		name: "Dazzling",
		desc: "While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.",
		shortDesc: "While this Pokemon is active, allies are protected from opposing priority moves.",

		block: "#damp",
	},
	majesticaura: {
		name: "Majestic Aura",
		desc: "While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.",
		shortDesc: "While this Pokemon is active, allies are protected from opposing priority moves.",

		block: "#damp",
	},
	defeatist: {
		name: "Defeatist",
		desc: "While this Pokemon has 1/2 or less of its maximum HP, its Attack and Special Attack are halved.",
		shortDesc: "While this Pokemon has 1/2 or less of its max HP, its Attack and Sp. Atk are halved.",
	},
	defiant: {
		name: "Defiant",
		desc: "This Pokemon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 2 for each of its stats that is lowered by a foe.",
	},
	imperious: {
		name: "Imperious",
		desc: "This Pokemon's Attack is raised by 2 stages for each of its stat stages that is lowered by an opposing Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 2 for each of its stats that is lowered by a foe.",
	},
	deltastream: {
		name: "Delta Stream",
		desc: "On switch-in, the weather becomes strong winds that remove the weaknesses of the Flying type from Flying-type Pokemon. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Desolate Land or Primordial Sea.",
		shortDesc: "On switch-in, strong winds begin until this Ability is not active in battle.",
	},
	desolateland: {
		name: "Desolate Land",
		desc: "On switch-in, the weather becomes extremely harsh sunlight that prevents damaging Water-type moves from executing, in addition to all the effects of Sunny Day. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Primordial Sea.",
		shortDesc: "On switch-in, extremely harsh sunlight begins until this Ability is not active in battle.",
	},
	disguise: {
		name: "Disguise",
		desc: "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken, it changes to Busted Form, and it loses 1/8 of its max HP. Confusion damage also breaks the disguise.",
		shortDesc: "(Mimikyu only) The first hit it takes is blocked, and it takes 1/8 HP damage instead.",
		gen7: {
			desc: "If this Pokemon is a Mimikyu, the first hit it takes in battle deals 0 neutral damage. Its disguise is then broken and it changes to Busted Form. Confusion damage also breaks the disguise.",
			shortDesc: "(Mimikyu only) First hit deals 0 damage, breaks disguise.",
		},

		block: "  Its disguise served it as a decoy!",
		transform: "[POKEMON]'s disguise was busted!",
	},
	download: {
		name: "Download",
		desc: "On switch-in, this Pokemon's Attack or Special Attack is raised by 1 stage based on the weaker combined defensive stat of all opposing Pokemon. Attack is raised if their Defense is lower, and Special Attack is raised if their Special Defense is the same or lower.",
		shortDesc: "On switch-in, Attack or Sp. Atk is raised 1 stage based on the foes' weaker Defense.",
	},
	dragonsmaw: {
		name: "Dragon's Maw",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Dragon-type attack.",
	},
	drizzle: {
		name: "Drizzle",
		shortDesc: "On switch-in, this Pokemon summons Rain Dance.",
	},
	sporogenesis: {
		name: "Sporogenesis",
		shortDesc: "On switch-in, this Pokemon summons Spore Storm.",
	},
	pollution: {
		name: "Pollution",
		shortDesc: "On switch-in, this Pokemon summons Acid Rain.",
	},
	drought: {
		name: "Drought",
		shortDesc: "On switch-in, this Pokemon summons Sunny Day.",
	},
	twilight: {
		name: "Twilight",
		shortDesc: "On switch-in, this Pokemon summons Starry Night.",
	},
	airstream: {
		name: "Air Stream",
		shortDesc: "On switch-in, this Pokemon summons Wind.",
	},
	dryskin: {
		name: "Dry Skin",
		desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day. If this Pokemon is holding Utility Umbrella, the effects of weather are nullified.",
		shortDesc: "This Pokemon is healed 1/4 by Water, 1/8 by Rain; is hurt 1.25x by Fire, 1/8 by Sun.",
		gen7: {
			desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move. The power of Fire-type moves is multiplied by 1.25 when used on this Pokemon. At the end of each turn, this Pokemon restores 1/8 of its maximum HP, rounded down, if the weather is Rain Dance, and loses 1/8 of its maximum HP, rounded down, if the weather is Sunny Day.",
		},

		damage: "  ([POKEMON] was hurt by its Dry Skin.)",
	},
	crystalcase: {
		name: "Crystal Case",
		shortDesc: "This Pokemon is immune Water and ecieves 1.5x Damage and gains +2 Sp. Atk from Fire moves.",
	},
	finesugar: {
		name: "Fine Sugar",
		shortDesc: "This Pokemon is healed 1/4 by Fire, 1/8 by Sun; is hurt 1.25x by Water, 1/8 by Rain.",

		damage: "  ([POKEMON] was hurt by its Fine Sugar.)",
	},
	earlybird: {
		name: "Early Bird",
		shortDesc: "This Pokemon's sleep counter drops by 2 instead of 1.",
	},
	effectspore: {
		name: "Effect Spore",
		desc: "30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep.",
		shortDesc: "30% chance of poison/paralysis/sleep on others making contact with this Pokemon.",
		gen4: {
			desc: "30% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
		gen3: {
			desc: "10% chance a Pokemon making contact with this Pokemon will be poisoned, paralyzed, or fall asleep. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "10% chance of poison/paralysis/sleep on others making contact with this Pokemon.",
		},
	},
	electricsurge: {
		name: "Electric Surge",
		shortDesc: "On switch-in, this Pokemon summons Electric Terrain.",
	},
	solardiffuse: {
		name: "Solar Diffuse",
		shortDesc: "On switch-in, this Pokemon summons Shining Terrain.",
	},
	lunardiffuse: {
		name: "Lunar Diffuse",
		shortDesc: "On switch-in, this Pokemon summons Midnight Terrain.",
	},
	starguardian: {
		name: "Star Guardian",
		shortDesc: "On switch-in, this Pokemon summons Light Screen.",
	},
	cloversong: {
		name: "Clover Song",
		shortDesc: "On switch-in, this Pokemon summons Lucky Chant.",
	},
	garlandguardian: {
		name: "Garland Guardian",
		shortDesc: "On switch-in, this Pokemon summons Safeguard.",
	},
	onthewind: {
		name: "On the Wind",
		shortDesc: "On switch-in, this Pokemon summons Tailwind.",
	},
	barriermaker: {
		name: "Barrier Maker",
		shortDesc: "On switch-in, this Pokemon summons Reflect.",
	},
	emergencyexit: {
		name: "Emergency Exit",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.",
		shortDesc: "This Pokemon switches out when it reaches 1/2 or less of its maximum HP.",
	},
	fairyaura: {
		name: "Fairy Aura",
		desc: "While this Pokemon is active, the power of Fairy-type moves used by active Pokemon is multiplied by 1.33.",
		shortDesc: "While this Pokemon is active, a Fairy move used by any Pokemon has 1.33x power.",

		start: "  [POKEMON] is radiating a fairy aura!",
	},
	filter: {
		name: "Filter",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
	},
	shieldwall: {
		name: "Shield Wall",
		shortDesc: "This Pokemon receives 1/2 damage from 4x effective attacks.",
	},
	flamebody: {
		name: "Flame Body",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be burned.",
		gen4: {
			desc: "30% chance a Pokemon making contact with this Pokemon will be burned. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
		gen3: {
			desc: "1/3 chance a Pokemon making contact with this Pokemon will be burned. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be burned.",
		},
	},
	flareboost: {
		name: "Flare Boost",
		desc: "While this Pokemon is burned, the power of its special attacks is multiplied by 1.5.",
		shortDesc: "While this Pokemon is burned, its special attacks have 1.5x power.",
	},
	flashfire: {
		name: "Flash Fire",
		desc: "This Pokemon is immune to Fire-type moves. The first time it is hit by a Fire-type move, its attacking stat is multiplied by 1.5 while using a Fire-type attack as long as it remains active and has this Ability. If this Pokemon is frozen, it cannot be defrosted by Fire-type attacks.",
		shortDesc: "This Pokemon's Fire attacks do 1.5x damage if hit by one Fire move; Fire immunity.",
		gen3: {
			desc: "This Pokemon is immune to Fire-type moves, as long as it is not frozen. The first time it is hit by a Fire-type move, damage from its Fire-type attacks will be multiplied by 1.5 as long as it remains active and has this Ability. If this Pokemon has a non-volatile status condition, is a Fire type, or has a substitute, Will-O-Wisp will not activate this Ability.",
		},

		start: "  The power of [POKEMON]'s Fire-type moves rose!",
	},
	flowergift: {
		name: "Flower Gift",
		desc: "If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5. If this Pokemon is a Cherrim and it is holding Utility Umbrella, it remains in its regular form and the Attack and Special Defense stats of it and its allies are not boosted. If this Pokemon is a Cherrim in its Sunshine form and is given Utility Umbrella, it will immediately switch back to its regular form. If this Pokemon is a Cherrim holding Utility Umbrella and its item is removed while Sunny Day is active, it will transform into its Sunshine Form. If an ally is holding Utility Umbrella while Cherrim is in its Sunshine Form, they will not receive the Attack and Special Defense boosts.",
		shortDesc: "If user is Cherrim and Sunny Day is active, it and allies' Attack and Sp. Def are 1.5x.",
		gen7: {
			desc: "If this Pokemon is a Cherrim and Sunny Day is active, it changes to Sunshine Form and the Attack and Special Defense of it and its allies are multiplied by 1.5.",
		},
		gen4: {
			desc: "If Sunny Day is active, the Attack and Special Defense of this Pokemon and its allies are multiplied by 1.5.",
			shortDesc: "If Sunny Day is active, Attack and Sp. Def of this Pokemon and its allies are 1.5x.",
		},
	},
	flowerveil: {
		name: "Flower Veil",
		desc: "Grass-type Pokemon on this Pokemon's side cannot have their stat stages lowered by other Pokemon or have a non-volatile status condition inflicted on them by other Pokemon.",
		shortDesc: "This side's Grass types can't have stats lowered or status inflicted by other Pokemon.",

		block: "  [POKEMON] surrounded itself with a veil of petals!",
	},
	fluffy: {
		name: "Fluffy",
		desc: "This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves.",
		shortDesc: "This Pokemon takes 1/2 damage from contact moves, 2x damage from Fire moves.",
	},
	barbednest: {
		name: "Barbed Nest",
		desc: "This Pokemon receives 1/2 damage from contact moves, but double damage from Fire moves.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 max HP and this Pokemon takes 1/2 damage.",
	},
	paranoid: {
		name: "Paranoid",
		desc: "This Pokemon receives 1/2 damage from Special attacks, but double damage from Psychic moves.",
		shortDesc: "This Pokemon takes 1/2 damage from Special attacks, 2x damage from Psychic moves.",
	},
	forecast: {
		name: "Forecast",
		desc: "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm. If this Pokemon is holding Utility Umbrella and the weather condition is Sunny Day, Desolate Land, Rain Dance, or Primordial Sea, it will not change types.",
		shortDesc: "Castform's type changes to the current weather condition's type, except Sandstorm.",
		gen7: {
			desc: "If this Pokemon is a Castform, its type changes to the current weather condition's type, except Sandstorm.",
		},
	},
	forewarn: {
		name: "Forewarn",
		desc: "On switch-in, this Pokemon is alerted to the move with the highest power, at random, known by an opposing Pokemon.",
		shortDesc: "On switch-in, this Pokemon is alerted to the foes' move with the highest power.",

		activate: "  [TARGET]'s [MOVE] was revealed!",
		activateNoTarget: "  [POKEMON]'s Forewarn alerted it to [MOVE]!",
	},
	friendguard: {
		name: "Friend Guard",
		shortDesc: "This Pokemon's allies receive 3/4 damage from other Pokemon's attacks.",
	},
	frisk: {
		name: "Frisk",
		shortDesc: "On switch-in, this Pokemon identifies the held items of all opposing Pokemon.",
		gen5: {
			shortDesc: "On switch-in, this Pokemon identifies a random foe's held item.",
		},

		activate: "  [POKEMON] frisked [TARGET] and found its [ITEM]!",
		activateNoTarget: "  [POKEMON] frisked its target and found one [ITEM]!",
	},
	fullmetalbody: {
		name: "Full Metal Body",
		desc: "Prevents other Pokemon from lowering this Pokemon's stat stages. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
	},
	furcoat: {
		name: "Fur Coat",
		shortDesc: "This Pokemon's Defense is doubled.",
	},
	sharpcoral: {
		name: "Sharp Coral",
		shortDesc: "This Pokemon's Atk and SpA is doubled, Def and SpD is halved.",
	},
	galewings: {
		name: "Gale Wings",
		shortDesc: "If this Pokemon is at full HP, its Flying-type moves have their priority increased by 1.",
		gen6: {
			shortDesc: "This Pokemon's Flying-type moves have their priority increased by 1.",
		},
	},
	maestro: {
		name: "Maestro",
		shortDesc: "This Pokemon's Sound-based moves have their priority increased by 1.",
	},
	quickcharge: {
		name: "Quick Charge",
		shortDesc: "If this Pokemon is at full HP, its moves have their priority increased by 4.",
	},
	fauxliage: {
		name: "Fauxliage",
		shortDesc: "If Grassy Terrain is active, this Pokemon's moves have their priority increased by 1.",
	},
	bloodlust: {
		name: "Blood Lust",
		shortDesc: "This Pokemon recovers 1/6 of damage dealt when using a contact move.",
	},
	bloodthirst: {
		name: "Bloodthirst",
		shortDesc: "This Pokemon recovers 1/8 of its health when using a biting move.",
	},
	galvanize: {
		name: "Galvanize",
		desc: "This Pokemon's Normal-type moves become Electric-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Electric type and have 1.2x power.",
	},
	equalize: {
		name: "Equalize",
		desc: "This Pokemon's Normal-type moves become Sound-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Sound type and have 1.2x power.",
	},
	coleoptero: {
		name: "Coleoptero",
		desc: "This Pokemon's Normal-type moves become Bug-type moves and have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's Normal-type moves become Bug type and have 1.2x power.",
	},
	chlorize: {
		name: "Chlorize",
		desc: "This Pokemon's Normal-type moves become Grass-type moves and have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's Normal-type moves become Grass type and have 1.2x power.",
	},
	villainize: {
		name: "Villainize",
		desc: "This Pokemon's Normal-type moves become Dark-type moves and have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's Normal-type moves become Dark type and have 1.2x power.",
	},
	gluttony: {
		name: "Gluttony",
		shortDesc: "When this Pokemon has 1/2 or less of its maximum HP, it uses certain Berries early.",
	},
	gooey: {
		name: "Gooey",
		shortDesc: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.",
	},
	empathy: {
		name: "Empathy",
		shortDesc: "Pokemon making contact with this Pokemon have their Attack and Sp. Atk lowered by 1 stage.",
	},
	fairydust: {
		name: "Fairy Dust",
		shortDesc: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.",
	},
	gorillatactics: {
		name: "Gorilla Tactics",
		shortDesc: "This Pokemon's Attack is 1.5x, but it can only select the first move it executes.",
	},
	grasspelt: {
		name: "Grass Pelt",
		shortDesc: "If Grassy Terrain is active, this Pokemon's Defense is multiplied by 1.5.",
	},
	grassysurge: {
		name: "Grassy Surge",
		shortDesc: "On switch-in, this Pokemon summons Grassy Terrain.",
	},
	grimneigh: {
		name: "Grim Neigh",
		desc: "This Pokemon's Special Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	gulpmissile: {
		name: "Gulp Missile",
		desc: "If this Pokemon is a Cramorant, it changes forme when it hits a target with Surf or uses the first turn of Dive successfully. It becomes Gulping Form with an Arrokuda in its mouth if it has more than 1/2 of its maximum HP remaining, or Gorging Form with a Pikachu in its mouth if it has 1/2 or less of its maximum HP remaining. If Cramorant gets hit in Gulping or Gorging Form, it spits the Arrokuda or Pikachu at its attacker, even if it has no HP remaining. The projectile deals damage equal to 1/4 of the target's maximum HP, rounded down; this damage is blocked by the Magic Guard Ability but not by a substitute. An Arrokuda also lowers the target's Defense by 1 stage, and a Pikachu paralyzes the target. Cramorant will return to normal if it spits out a projectile, switches out, or Dynamaxes.",
		shortDesc: "When hit after Surf/Dive, attacker takes 1/4 max HP and -1 Defense or paralysis.",
	},
	guts: {
		name: "Guts",
		desc: "If this Pokemon has a non-volatile status condition, its Attack is multiplied by 1.5; burn's physical damage halving is ignored.",
		shortDesc: "If this Pokemon is statused, its Attack is 1.5x; ignores burn halving physical damage.",
	},
	audacity: {
		name: "Audacity",
		desc: "If this Pokemon has a non-volatile status condition, its Special Attack is multiplied by 1.5.",
		shortDesc: "If this Pokemon is statused, its Sp. Atk is 1.5x.",
	},
	headache: {
		name: "Headache",
		shortDesc: "If this Pokemon is confused, its Sp. Atk is doubled.",
	},
	harvest: {
		name: "Harvest",
		desc: "If the last item this Pokemon used is a Berry, there is a 50% chance it gets restored at the end of each turn. If Sunny Day is active, this chance is 100%.",
		shortDesc: "If last item used is a Berry, 50% chance to restore it each end of turn. 100% in Sun.",

		addItem: "  [POKEMON] harvested one [ITEM]!",
	},
	healer: {
		name: "Healer",
		desc: "There is a 30% chance of curing an adjacent ally's non-volatile status condition at the end of each turn.",
		shortDesc: "30% chance of curing an adjacent ally's status at the end of each turn.",
	},
	heatproof: {
		name: "Heatproof",
		desc: "The power of Fire-type attacks against this Pokemon is halved, and burn damage taken is halved.",
		shortDesc: "The power of Fire-type attacks against this Pokemon is halved; burn damage halved.",
	},
	heavymetal: {
		name: "Heavy Metal",
		shortDesc: "This Pokemon's weight is doubled.",
	},
	honeygather: {
		name: "Honey Gather",
		shortDesc: "No competitive use.",
	},
	hugepower: {
		name: "Huge Power",
		shortDesc: "This Pokemon's Attack is doubled.",
	},
	hungerswitch: {
		name: "Hunger Switch",
		shortDesc: "If Morpeko, it changes between Full Belly and Hangry Mode at the end of each turn.",
	},
	hustle: {
		name: "Hustle",
		desc: "This Pokemon's Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.",
		shortDesc: "This Pokemon's Attack is 1.5x and accuracy of its physical attacks is 0.8x.",
	},
	eccentric: {
		name: "Eccentric",
		desc: "This Pokemon's Special Attack is multiplied by 1.5 and the accuracy of its physical attacks is multiplied by 0.8.",
		shortDesc: "This Pokemon's Sp. Atk is 1.5x and accuracy of its special attacks is 0.8x.",
	},
	hydration: {
		name: "Hydration",
		desc: "This Pokemon has its non-volatile status condition cured at the end of each turn if Rain Dance is active. If this Pokemon is holding Utility Umbrella, its non-volatile status condition will not be cured.",
		shortDesc: "This Pokemon has its status cured at the end of each turn if Rain Dance is active.",
		gen7: {
			desc: "This Pokemon has its non-volatile status condition cured at the end of each turn if Rain Dance is active.",
		},
	},
	hypercutter: {
		name: "Hyper Cutter",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's Attack stat stage.",
	},
	cryoshell: {
		name: "Cryo Shell",
	  desc: "If Rain or Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its HP does not get restored.",
	  shortDesc: "If Rain or Hail is active, this Pokemon heals 1/16 of its max HP each turn.",
	},
	icebody: {
		name: "Ice Body",
		desc: "If Hail is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon heals 1/16 of its max HP each turn; immunity to Hail.",
	},
	astralbody: {
		name: "Ice Body",
		desc: "If Misty Terrain is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn.",
		shortDesc: "If Misty Terrain is active, this Pokemon heals 1/16 of its max HP each turn.",
	},
	sunbathe: {
		name: "Sunbathe",
		desc: "If Sunny Day is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. This Pokemon takes no damage from Hail.",
		shortDesc: "If Sunny Day is active, this Pokemon heals 1/16 of its max HP each turn.",
	},
	heliophobia: {
		name: "Heliophobia",
		desc: "This Pokemon gains 1/8 HP every turn in New Moon; loses 1/8 HP in Sun.",
		shortDesc: "This Pokemon gains 1/8 HP every turn in New Moon; loses 1/8 HP in Sun.",
	},
	iceface: {
		name: "Ice Face",
		desc: "If this Pokemon is an Eiscue, the first physical hit it takes in battle deals 0 neutral damage. Its ice face is then broken and it changes forme to Noice Face. Eiscue regains its Ice Face forme when Hail begins or when Eiscue switches in while Hail is active. Confusion damage also breaks the ice face.",
		shortDesc: "If Eiscue, the first physical hit it takes deals 0 damage. This effect is restored in Hail.",
	},
	icescales: {
		name: "Ice Scales",
		shortDesc: "This Pokemon receives 1/2 damage from special attacks.",
	},
	illuminate: {
		name: "Illuminate",
		shortDesc: "No competitive use.",
	},
	illusion: {
		name: "Illusion",
		desc: "When this Pokemon switches in, it appears as the last unfainted Pokemon in its party until it takes direct damage from another Pokemon's attack. This Pokemon's actual level and HP are displayed instead of those of the mimicked Pokemon.",
		shortDesc: "This Pokemon appears as the last Pokemon in the party until it takes direct damage.",

		end: "  [POKEMON]'s illusion wore off!",
	},
	immunity: {
		name: "Immunity",
		shortDesc: "This Pokemon cannot be poisoned. Gaining this Ability while poisoned cures it.",
	},
	imposter: {
		name: "Imposter",
		desc: "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it. If there is no Pokemon at that position, this Pokemon does not Transform.",
		shortDesc: "On switch-in, this Pokemon Transforms into the opposing Pokemon that is facing it.",
	},
	infiltrator: {
		name: "Infiltrator",
		desc: "This Pokemon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, Mist and Aurora Veil.",
		shortDesc: "Moves ignore substitutes and foe's Reflect/Light Screen/Safeguard/Mist/Aurora Veil.",
		gen6: {
			desc: "This Pokemon's moves ignore substitutes and the opposing side's Reflect, Light Screen, Safeguard, and Mist.",
			shortDesc: "Moves ignore substitutes and the foe's Reflect, Light Screen, Safeguard, and Mist.",
		},
		gen5: {
			desc: "This Pokemon's moves ignore the opposing side's Reflect, Light Screen, Safeguard, and Mist.",
			shortDesc: "This Pokemon's moves ignore the foe's Reflect, Light Screen, Safeguard, and Mist.",
		},
	},
	innardsout: {
		name: "Innards Out",
		desc: "If this Pokemon is knocked out with a move, that move's user loses HP equal to the amount of damage inflicted on this Pokemon.",
		shortDesc: "If this Pokemon is KOed with a move, that move's user loses an equal amount of HP.",

		damage: "#aftermath",
	},
	innerfocus: {
		name: "Inner Focus",
		shortDesc: "This Pokemon cannot be made to flinch. Immune to Intimidate.",
		gen7: {
			shortDesc: "This Pokemon cannot be made to flinch.",
		},
	},
	insomnia: {
		name: "Insomnia",
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
	},
	intimidate: {
		name: "Intimidate",
		desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Inner Focus, Oblivious, Own Tempo, Scrappy, and Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Attack of adjacent opponents by 1 stage.",
		gen7: {
			desc: "On switch-in, this Pokemon lowers the Attack of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		},
	},
	envision: {
		name: "Envision",
		desc: "On switch-in, this Pokemon lowers the Sp. Atk of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Sp. Atk of adjacent opponents by 1 stage.",
		gen7: {
			desc: "On switch-in, this Pokemon lowers the Sp. Atk of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		},
	},
	psychout: {
		name: "Psych Out",
		desc: "On switch-in, this Pokemon lowers the Sp. Atk of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Sp. Atk of adjacent opponents by 1 stage.",
	},
	grimtears: {
		name: "Grim Tears",
		desc: "On switch-in, this Pokemon lowers the Sp. Atk of adjacent opposing Pokemon by 1 stage. Pokemon behind a substitute are immune.",
		shortDesc: "On switch-in, this Pokemon lowers the Sp. Atk of adjacent opponents by 1 stage.",
	},
	allure: {
		name: "Allure",
		shortDesc: "On switch-in, this Pokemon lowers the Evasion of adjacent opponents with the opposite gender by 1 stage.",
	},
	petrify: {
		name: "Petrify",
		shortDesc: "On switch-in, this Pokemon lowers the Speed of adjacent opponents by 1 stage.",
	},
	intrepidsword: {
		name: "Intrepid Sword",
		shortDesc: "On switch-in, this Pokemon's Attack is raised by 1 stage.",
	},
	ironbarbs: {
		name: "Iron Barbs",
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",

		damage: "#roughskin",
	},
	secretionsecret: {
		name: "Secretion Secret",
		shortDesc: "When an enemy hits this Pokemon with a status move, they become poisoned.",
	},
	electricfence: {
		name: "Electric Fence",
		shortDesc: "If Electric Terrain is active, Pokemon making contact with this Pokemon lose 1/6 of their max HP.",

		damage: "#roughskin",
	},
	deterrent: {
		name: "Deterrent",
		shortDesc: "Pokemon switching in against this Pokemon lose 1/8 of their max HP.",
	},
	proudfire: {
		name: "Proudfire",
		shortDesc: "Pokemon switching in against this Pokemon are burned",
	},
	ironfist: {
		name: "Iron Fist",
		desc: "This Pokemon's punch-based attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's punch-based attacks have 1.2x power. Sucker Punch is not boosted.",
	},
	galeforce: {
		name: "Gale Force",
		shortDesc: "This Pokemon's wind-based attacks have 1.5x power.",
	},
	justified: {
		name: "Justified",
		shortDesc: "This Pokemon's Attack is raised by 1 stage after it is damaged by a Dark-type move.",
	},
	keeneye: {
		name: "Keen Eye",
		desc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage. This Pokemon ignores a target's evasiveness stat stage.",
		shortDesc: "This Pokemon's accuracy can't be lowered by others; ignores their evasiveness stat.",
		gen5: {
			desc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage.",
			shortDesc: "Prevents other Pokemon from lowering this Pokemon's accuracy stat stage.",
		},
	},
	klutz: {
		name: "Klutz",
		desc: "This Pokemon's held item has no effect. This Pokemon cannot use Fling successfully. Macho Brace, Power Anklet, Power Band, Power Belt, Power Bracer, Power Lens, and Power Weight still have their effects.",
		shortDesc: "This Pokemon's held item has no effect, except Macho Brace. Fling cannot be used.",
	},
	leafguard: {
		name: "Leaf Guard",
		desc: "If Sunny Day is active and this Pokemon is not holding Utility Umbrella, this Pokemon cannot gain a non-volatile status condition and Rest will fail for it.",
		shortDesc: "If Sunny Day is active, this Pokemon cannot be statused and Rest will fail for it.",
		gen7: {
			desc: "If Sunny Day is active, this Pokemon cannot gain a non-volatile status condition and Rest will fail for it.",
		},
		gen4: {
			desc: "If Sunny Day is active, this Pokemon cannot gain a non-volatile status condition, but can use Rest normally.",
			shortDesc: "If Sunny Day is active, this Pokemon cannot be statused, but Rest works normally.",
		},
	},
	levitate: {
		name: "Levitate",
		desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, Sticky Web, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, Thousand Arrows, and Iron Ball nullify the immunity.",
		shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Smack Down/Iron Ball nullify it.",
		gen5: {
			desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, and the Arena Trap Ability. The effects of Gravity, Ingrain, Smack Down, and Iron Ball nullify the immunity.",
		},
		gen4: {
			desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes, Toxic Spikes, and the Arena Trap Ability. The effects of Gravity, Ingrain, and Iron Ball nullify the immunity.",
			shortDesc: "This Pokemon is immune to Ground; Gravity/Ingrain/Iron Ball nullify it.",
		},
		gen3: {
			desc: "This Pokemon is immune to Ground-type attacks and the effects of Spikes and the Arena Trap Ability.",
			shortDesc: "This Pokemon is immune to Ground.",
		},
	},
	libero: {
		name: "Libero",
		desc: "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
		shortDesc: "This Pokemon's type changes to match the type of the move it is about to use.",
	},
	lightmetal: {
		name: "Light Metal",
		shortDesc: "This Pokemon's weight is halved.",
	},
	lightningrod: {
		name: "Lightning Rod",
		desc: "This Pokemon is immune to Electric-type moves and raises its Special Attack by 1 stage when hit by an Electric-type move. If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Electric moves to itself to raise Sp. Atk by 1; Electric immunity.",
		gen4: {
			desc: "If this Pokemon is not the target of a single-target Electric-type move used by another Pokemon, this Pokemon redirects that move to itself.",
			shortDesc: "This Pokemon draws single-target Electric moves to itself.",
		},
		gen3: {
			desc: "If this Pokemon is not the target of a single-target Electric-type move used by an opposing Pokemon, this Pokemon redirects that move to itself. This effect considers Hidden Power a Normal-type move.",
			shortDesc: "This Pokemon draws single-target Electric moves used by opponents to itself.",
		},

		activate: "  [POKEMON] took the attack!",
	},
	flytrap: {
		name: "Flytrap",
		desc: "This Pokemon is immune to Bug-type moves and raises its Attack by 1 stage when hit by an Bug-type move. If this Pokemon is not the target of a single-target Bug-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Bug moves to itself to raise Atk by 1; Bug immunity.",

		activate: "  [POKEMON] took the attack!",
	},
	challenger: {
		name: "Challenger",
		desc: "This Pokemon is immune to Fighting-type moves and raises its Attack by 1 stage when hit by an Fighting-type move. If this Pokemon is not the target of a single-target Fighting-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Fighting moves to itself to raise Atk by 1; Fighting immunity.",

		activate: "  [POKEMON] took the attack!",
	},
	coldreception: {
		name: "Cold Reception",
		shortDesc: "This Pokemon draws Ice moves to itself to raise Atk by 1; Ice immunity.",

		activate: "  [POKEMON] took the attack!",
	},
	limber: {
		name: "Limber",
		shortDesc: "This Pokemon cannot be paralyzed. Gaining this Ability while paralyzed cures it.",
	},
	energetic: {
		name: "Energetic",
		shortDesc: "This Pokemon cannot be paralyzed, poisoned or have it's Speed lowered. Gaining this Ability while paralyzed or poisoned cures it.",
	},
	stability: {
		name: "Stability",
		shortDesc: "This Pokemon cannot be burned, poisoned or frozen. Gaining this Ability while burned, poisoned or frozen cures it.",
	},
	liquidooze: {
		name: "Liquid Ooze",
		shortDesc: "This Pokemon damages those draining HP from it for as much as they would heal.",

		damage: "  [POKEMON] sucked up the liquid ooze!",
	},
	liquidvoice: {
		name: "Liquid Voice",
		desc: "This Pokemon's sound-based moves become Water-type moves. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's sound-based moves become Water type.",
	},
	frostsong: {
		name: "Frost Song",
		shortDesc: "This Pokemon's sound-based moves become Ice type and have 1.5x Power",
	},
	longreach: {
		name: "Long Reach",
		shortDesc: "This Pokemon's attacks do not make contact with the target.",
	},
	magicbounce: {
		name: "Magic Bounce",
		desc: "This Pokemon blocks certain status moves and instead uses the move against the original user.",
		shortDesc: "This Pokemon blocks certain status moves and bounces them back to the user.",

		move: "#magiccoat",
	},
	magicguard: {
		name: "Magic Guard",
		desc: "This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage.",
		shortDesc: "This Pokemon can only be damaged by direct attacks.",
		gen4: {
			desc: "This Pokemon can only be damaged by direct attacks. Curse and Substitute on use, Belly Drum, Pain Split, Struggle recoil, and confusion damage are considered direct damage. This Pokemon cannot lose its turn because of paralysis, and is unaffected by Toxic Spikes on switch-in.",
			shortDesc: "This Pokemon can only be damaged by direct attacks, and can't be fully paralyzed.",
		},
	},
	magician: {
		name: "Magician",
		desc: "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack. Does not affect Doom Desire and Future Sight.",
		shortDesc: "If this Pokemon has no item, it steals the item off a Pokemon it hits with an attack.",
	},
	magmaarmor: {
		name: "Magma Armor",
		shortDesc: "This Pokemon cannot be frozen. Gaining this Ability while frozen cures it.",
	},
	magnetpull: {
		name: "Magnet Pull",
		desc: "Prevents adjacent opposing Steel-type Pokemon from choosing to switch out unless they are immune to trapping.",
		shortDesc: "Prevents adjacent Steel-type foes from choosing to switch.",
	},
	baitedline: {
		name: "Baited Line",
		desc: "Prevents adjacent opposing Water-type Pokemon from choosing to switch out unless they are immune to trapping.",
		shortDesc: "Prevents adjacent Water-type foes from choosing to switch.",
	},
	magicpull: {
		name: "Magic Pull",
		desc: "Prevents adjacent opposing Fairy-type Pokemon from choosing to switch out unless they are immune to trapping.",
		shortDesc: "Prevents adjacent Fairy-type foes from choosing to switch.",
	},
	marvelscale: {
		name: "Marvel Scale",
		desc: "If this Pokemon has a non-volatile status condition, its Defense is multiplied by 1.5.",
		shortDesc: "If this Pokemon is statused, its Defense is 1.5x.",
	},
	marvelskin: {
		name: "Marvel Skin",
		desc: "If this Pokemon has a non-volatile status condition, its Sp. Defense is multiplied by 1.5.",
		shortDesc: "If this Pokemon is statused, its Sp. Def is 1.5x.",
	},
	megalauncher: {
		name: "Mega Launcher",
		desc: "This Pokemon's pulse moves have their power multiplied by 1.5. Heal Pulse restores 3/4 of a target's maximum HP, rounded half down.",
		shortDesc: "This Pokemon's pulse moves have 1.5x power. Heal Pulse heals 3/4 target's max HP.",
	},
	merciless: {
		name: "Merciless",
		shortDesc: "This Pokemon's attacks are critical hits if the target is poisoned.",
	},
	harsh: {
		name: "Harsh",
		shortDesc: "This Pokemon's attacks are critical hits if the target is burned.",
	},
	mimicry: {
		name: "Mimicry",
		shortDesc: "This Pokemon's type changes to match the Terrain. Type reverts when Terrain ends.",

		activate: "  [POKEMON] returned to its original type!",
	},
	minus: {
		name: "Minus",
		desc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active ally has this Ability or the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",
		gen4: {
			desc: "If an active ally has the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
			shortDesc: "If an active ally has the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",
		},
		gen3: {
			desc: "If an active Pokemon has the Plus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
			shortDesc: "If an active Pokemon has the Plus Ability, this Pokemon's Sp. Atk is 1.5x.",
		},
	},
	mirrorarmor: {
		name: "Mirror Armor",
		desc: "When one of this Pokemon's stat stages would be lowered by another Pokemon, that Pokemon's stat stage is lowered instead. This effect does not happen if this Pokemon's stat stage was already -6.",
		shortDesc: "If this Pokemon's stat stages would be lowered, the attacker's are lowered instead.",
	},
	mistysurge: {
		name: "Misty Surge",
		shortDesc: "On switch-in, this Pokemon summons Misty Terrain.",
	},
	moldbreaker: {
		name: "Mold Breaker",
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",

		start: "  [POKEMON] breaks the mold!",
	},
	moody: {
		name: "Moody",
		desc: "This Pokemon has a random stat other than accuracy or evasion raised by 2 stages and another stat lowered by 1 stage at the end of each turn.",
		shortDesc: "Boosts a random stat (except accuracy/evasion) +2 and another stat -1 every turn.",
		gen7: {
			desc: "This Pokemon has a random stat raised by 2 stages and another stat lowered by 1 stage at the end of each turn.",
			shortDesc: "Raises a random stat by 2 and lowers another stat by 1 at the end of each turn.",
		},
	},
	motordrive: {
		name: "Motor Drive",
		desc: "This Pokemon is immune to Electric-type moves and raises its Speed by 1 stage when hit by an Electric-type move.",
		shortDesc: "This Pokemon's Speed is raised 1 stage if hit by an Electric move; Electric immunity.",
	},
	moxie: {
		name: "Moxie",
		desc: "This Pokemon's Attack is raised by 1 stage if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	dauntless: {
		name: "Dauntless",
		shortDesc: "This Pokemon's Attack and Sp. Atk are raised by 1 stage if it attacks and KOes another Pokemon.",
	},
	scavenger: {
		name: "Scavenger",
		desc: "When this Pokemon knocks out a foe it recovers 1/4 of their max HP.",
		shortDesc: "When this Pokemon knocks out a foe it recovers 1/4 of their max HP.",
	},
	multiscale: {
		name: "Multiscale",
		shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved.",
	},
	multitype: {
		name: "Multitype",
		shortDesc: "If this Pokemon is an Arceus, its type changes to match its held Plate or Z-Crystal.",
		gen6: {
			shortDesc: "If this Pokemon is an Arceus, its type changes to match its held Plate.",
		},
	},
	mummy: {
		name: "Mummy",
		desc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect a Pokemon which already has Mummy or the Abilities As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode.",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy.",
		gen7: {
			desc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect a Pokemon which already has Mummy or the Abilities Battle Bond, Comatose, Disguise, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, and Zen Mode.",
		},
		gen6: {
			desc: "Pokemon making contact with this Pokemon have their Ability changed to Mummy. Does not affect the Multitype or Stance Change Abilities.",
		},

		changeAbility: "  [TARGET]'s Ability became Mummy!",
	},
	naturalcure: {
		name: "Natural Cure",
		shortDesc: "This Pokemon has its non-volatile status condition cured when it switches out.",

		activate: "  ([POKEMON] is cured by its Natural Cure!)",
	},
	neuroforce: {
		name: "Neuroforce",
		shortDesc: "This Pokemon's attacks that are super effective against the target do 1.25x damage.",
	},
	microstrike: {
		name: "Micro Strike",
		shortDesc: "This Pokemon's attacks against heavier foes do 1.2x damage.",
	},
	neutralizinggas: {
		name: "Neutralizing Gas",
		desc: "While this Pokemon is active, Abilities have no effect. Does not affect the Abilities As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode.",
		shortDesc: "While this Pokemon is active, Abilities have no effect.",

		start: "  Neutralizing gas filled the area!",
		end: "  The effects of the neutralizing gas wore off!",
	},
	noguard: {
		name: "No Guard",
		shortDesc: "Every move used by or against this Pokemon will always hit.",
	},
	normalize: {
		name: "Normalize",
		desc: "This Pokemon's moves are changed to be Normal type and have their power multiplied by 1.2. This effect comes before other effects that change a move's type.",
		shortDesc: "This Pokemon's moves are changed to be Normal type and have 1.2x power.",
		gen6: {
			desc: "This Pokemon's moves are changed to be Normal type. This effect comes before other effects that change a move's type.",
			shortDesc: "This Pokemon's moves are changed to be Normal type.",
		},
	},
	oblivious: {
		name: "Oblivious",
		desc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it. Immune to Intimidate.",
		shortDesc: "This Pokemon cannot be infatuated or taunted. Immune to Intimidate.",
		gen7: {
			desc: "This Pokemon cannot be infatuated or taunted. Gaining this Ability while affected cures it.",
			shortDesc: "This Pokemon cannot be infatuated or taunted.",
		},
		gen5: {
			desc: "This Pokemon cannot be infatuated. Gaining this Ability while infatuated cures it.",
			shortDesc: "This Pokemon cannot be infatuated. Gaining this Ability while infatuated cures it.",
		},
	},
	overcoat: {
		name: "Overcoat",
		shortDesc: "This Pokemon is immune to powder moves and damage from Sandstorm or Hail.",
		gen5: {
			shortDesc: "This Pokemon is immune to damage from Sandstorm or Hail.",
		},
	},
	overgrow: {
		name: "Overgrow",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Grass-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Grass attacks.",
		gen4: {
			desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Grass-type attacks have their power multiplied by 1.5.",
			shortDesc: "At 1/3 or less of its max HP, this Pokemon's Grass-type attacks have 1.5x power.",
		},
	},
	owntempo: {
		name: "Own Tempo",
		desc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it. Immune to Intimidate.",
		shortDesc: "This Pokemon cannot be confused. Immune to Intimidate.",
		gen7: {
			desc: "This Pokemon cannot be confused. Gaining this Ability while confused cures it.",
			shortDesc: "This Pokemon cannot be confused.",
		},
	},
	parentalbond: {
		name: "Parental Bond",
		desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage quartered. Does not affect multi-hit moves or moves that have multiple targets.",
		shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage quartered.",
		gen6: {
			desc: "This Pokemon's damaging moves become multi-hit moves that hit twice. The second hit has its damage halved. Does not affect multi-hit moves or moves that have multiple targets.",
			shortDesc: "This Pokemon's damaging moves hit twice. The second hit has its damage halved.",
		},
	},
	pastelveil: {
		name: "Pastel Veil",
		shortDesc: "This Pokemon and its allies cannot be poisoned. On switch-in, cures poisoned allies.",
	},
	perishbody: {
		name: "Perish Body",
		desc: "Making contact with this Pokemon starts the Perish Song effect for it and the attacker. This effect does not happen if this Pokemon already has a perish count.",
		shortDesc: "Making contact with this Pokemon starts the Perish Song effect for it and the attacker.",

		start: "  Both Pok\u00E9mon will faint in three turns!",
	},
	pickpocket: {
		name: "Pickpocket",
		desc: "If this Pokemon has no item and is hit by a contact move, it steals the attacker's item. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect.",
		shortDesc: "If this Pokemon has no item and is hit by a contact move, it steals the attacker's item.",
	},
	pickup: {
		name: "Pickup",
		shortDesc: "If this Pokemon has no item, it finds one used by an adjacent Pokemon this turn.",
		gen4: {
			desc: "No competitive use.",
			shortDesc: "No competitive use.",
		},

		addItem: "#recycle",
	},
	raptor: {
			name: "Raptor",
			shortDesc: "When the foe reaches 1/4 or less of its max HP, this Pokemon has +1 Priority.",
	},
	ferocious: {
			name: "Ferocious",
			shortDesc: "When the foe reaches 1/2 or less of its max HP, this Pokemons Speed is Doubled.",
	},
	pixilate: {
		name: "Pixilate",
		desc: "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.2x power.",
		gen6: {
			desc: "This Pokemon's Normal-type moves become Fairy-type moves and have their power multiplied by 1.3. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
			shortDesc: "This Pokemon's Normal-type moves become Fairy type and have 1.3x power.",
		},
	},
	plus: {
		name: "Plus",
		desc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
		shortDesc: "If an active ally has this Ability or the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",
		gen4: {
			desc: "If an active ally has the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
			shortDesc: "If an active ally has the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",
		},
		gen3: {
			desc: "If an active Pokemon has the Minus Ability, this Pokemon's Special Attack is multiplied by 1.5.",
			shortDesc: "If an active Pokemon has the Minus Ability, this Pokemon's Sp. Atk is 1.5x.",
		},
	},
	poisonheal: {
		name: "Poison Heal",
		desc: "If this Pokemon is poisoned, it restores 1/8 of its maximum HP, rounded down, at the end of each turn instead of losing HP.",
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when poisoned; no HP loss.",
	},
	burnheal: {
		name: "Burn Heal",
		shortDesc: "This Pokemon is healed by 1/8 of its max HP each turn when burned; no HP loss. Ignores burn Attack reduction.",
	},
	poisonpoint: {
		name: "Poison Point",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be poisoned.",
		gen4: {
			desc: "30% chance a Pokemon making contact with this Pokemon will be poisoned. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
		gen3: {
			desc: "1/3 chance a Pokemon making contact with this Pokemon will be poisoned. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be poisoned.",
		},
	},
	poisonpunish: {
		name: "Poison Punish",
		shortDesc: "30% chance the foe will be poisoned when using a Sp. Attack against this Pokemon.",
	},
	beguiling: {
		name: "Beguiling",
		shortDesc: "30% chance the foe will be infatuated when using a Sp. Attack against this Pokemon.",
	},
	poisontouch: {
		name: "Poison Touch",
		shortDesc: "This Pokemon's contact moves have a 30% chance of poisoning.",
	},
	numbingtouch: {
		name: "Numbing Touch",
		shortDesc: "This Pokemon's contact moves have a 30% chance of paralyzing.",
	},
	shockstyle: {
		name: "Shock Style",
		shortDesc: "This Pokemon's Fighting moves have a 50% chance of paralyzing.",
	},
	shockwings: {
		name: "Shock Wings",
		shortDesc: "This Pokemon's Flying moves have a 20% chance of paralyzing.",
	},
	flamewings: {
		name: "Flame Wings",
		shortDesc: "This Pokemon's Flying moves have a 20% chance of burning.",
	},
	frostwings: {
		name: "Frost Wings",
		shortDesc: "This Pokemon's Flying moves have a 20% chance of freezing.",
	},
	burnskill: {
		name: "Burn Skill",
		shortDesc: "This Pokemon's Special attacks have a 30% chance of burning.",
	},
	nervenumber: {
		name: "Nerve Number",
		shortDesc: "This Pokemon's Special attacks have a 30% chance of paralyzing.",
	},
	powerconstruct: {
		name: "Power Construct",
		desc: "If this Pokemon is a Zygarde in its 10% or 50% Forme, it changes to Complete Forme when it has 1/2 or less of its maximum HP at the end of the turn.",
		shortDesc: "If Zygarde 10%/50%, changes to Complete if at 1/2 max HP or less at end of turn.",

		activate: "  You sense the presence of many!",
		transform: "[POKEMON] transformed into its Complete Forme!",
	},
	powerofalchemy: {
		name: "Power of Alchemy",
		desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are \"No Ability\", As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		shortDesc: "This Pokemon copies the Ability of an ally that faints.",
		gen7: {
			desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are \"No Ability\", Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		},

		changeAbility: "#receiver",
	},
	powerspot: {
		name: "Power Spot",
		shortDesc: "This Pokemon's allies have the power of their moves multiplied by 1.3.",
	},
	prankster: {
		name: "Prankster",
		shortDesc: "This Pokemon's Status moves have priority raised by 1, but Dark types are immune.",
		gen6: {
			shortDesc: "This Pokemon's non-damaging moves have their priority increased by 1.",
		},
	},
	deceptive: {
		name: "Deceptive",
		shortDesc: "This Pokemon's Status moves have priority raised by 1 in Misty Terrain.",
	},
	honoraura: {
		name: "Honor Aura",
		shortDesc: "All Pokemon's Status moves have priority Decreased by 1.",
	},
	pressure: {
		name: "Pressure",
		desc: "If this Pokemon is the target of an opposing Pokemon's move, that move loses one additional PP.",
		shortDesc: "If this Pokemon is the target of a foe's move, that move loses one additional PP.",
		gen4: {
			desc: "If this Pokemon is the target of another Pokemon's move, that move loses one additional PP.",
			shortDesc: "If this Pokemon is the target of a move, that move loses one additional PP.",
		},

		start: "  [POKEMON] is exerting its pressure!",
	},
	dreadspace: {
		name: "Dread Space",
		shortDesc: "If this Pokemon is the target of a foe's move, that move loses 3 additional PP.",

		start: "  [POKEMON] is exerting its dread!",
	},
	primordialsea: {
		name: "Primordial Sea",
		desc: "On switch-in, the weather becomes heavy rain that prevents damaging Fire-type moves from executing, in addition to all the effects of Rain Dance. This weather remains in effect until this Ability is no longer active for any Pokemon, or the weather is changed by Delta Stream or Desolate Land.",
		shortDesc: "On switch-in, heavy rain begins until this Ability is not active in battle.",
	},
	prismarmor: {
		name: "Prism Armor",
		desc: "This Pokemon receives 3/4 damage from supereffective attacks. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
	},
	propellertail: {
		name: "Propeller Tail",
		shortDesc: "This Pokemon's moves cannot be redirected to a different target by any effect.",
	},
	protean: {
		name: "Protean",
		desc: "This Pokemon's type changes to match the type of the move it is about to use. This effect comes after all effects that change a move's type.",
		shortDesc: "This Pokemon's type changes to match the type of the move it is about to use.",
	},
	spectrum: {
		name: "Spectrum",
		shortDesc: "This Pokemon's type changes based on the foe's color.",
	},
	psychicsurge: {
		name: "Psychic Surge",
		shortDesc: "On switch-in, this Pokemon summons Psychic Terrain.",
	},
	punkrock: {
		name: "Punk Rock",
		desc: "This Pokemon's sound-based moves have their power multiplied by 1.3. This Pokemon takes halved damage from sound-based moves.",
		shortDesc: "This Pokemon receives 1/2 damage from sound moves. Its own have 1.3x power.",
	},
	purepower: {
		name: "Pure Power",
		shortDesc: "This Pokemon's Attack is doubled.",
	},
	queenlymajesty: {
		name: "Queenly Majesty",
		desc: "While this Pokemon is active, priority moves from opposing Pokemon targeted at allies are prevented from having an effect.",
		shortDesc: "While this Pokemon is active, allies are protected from opposing priority moves.",

		block: "#damp",
	},
	quickdraw: {
		name: "Quick Draw",
		shortDesc: "This Pokemon has a 30% chance to move first in its priority bracket with attacking moves.",

		activate: "  Quick Draw made [POKEMON] move faster!",
	},
	quickfeet: {
		name: "Quick Feet",
		desc: "If this Pokemon has a non-volatile status condition, its Speed is multiplied by 1.5; the Speed drop from paralysis is ignored.",
		shortDesc: "If this Pokemon is statused, its Speed is 1.5x; ignores Speed drop from paralysis.",
	},
	raindish: {
		name: "Rain Dish",
		desc: "If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its HP does not get restored.",
		shortDesc: "If Rain Dance is active, this Pokemon heals 1/16 of its max HP each turn.",
		gen7: {
			desc: "If Rain Dance is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn.",
		},
	},
	rattled: {
		name: "Rattled",
		desc: "This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidate.",
		shortDesc: "Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack, or Intimidated.",
		gen7: {
			desc: "This Pokemon's Speed is raised by 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.",
			shortDesc: "This Pokemon's Speed is raised 1 stage if hit by a Bug-, Dark-, or Ghost-type attack.",
		},
	},
	fervor: {
		name: "Fervor",
		shortDesc: "This Pokemon's Speed icreases by 2 after using a contact move. Once per switch-in.",
	},
	receiver: {
		name: "Receiver",
		desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are \"No Ability\", As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		shortDesc: "This Pokemon copies the Ability of an ally that faints.",
		gen7: {
			desc: "This Pokemon copies the Ability of an ally that faints. Abilities that cannot be copied are \"No Ability\", Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, Wonder Guard, and Zen Mode.",
		},

		changeAbility: "  [SOURCE]'s [ABILITY] was taken over!",
	},
	seance: {
		name: "Seance",
		shortDesc: "This Pokemon copies the Ability of a Pokemon that faints.",

		changeAbility: "  [SOURCE]'s [ABILITY] was taken over!",
	},
	reckless: {
		name: "Reckless",
		desc: "This Pokemon's attacks with recoil or crash damage have their power multiplied by 1.2. Does not affect Struggle.",
		shortDesc: "This Pokemon's attacks with recoil or crash damage have 1.2x power; not Struggle.",
	},
	refrigerate: {
		name: "Refrigerate",
		desc: "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Ice type and have 1.2x power.",
		gen6: {
			desc: "This Pokemon's Normal-type moves become Ice-type moves and have their power multiplied by 1.3. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
			shortDesc: "This Pokemon's Normal-type moves become Ice type and have 1.3x power.",
		},
	},
	regenerator: {
		name: "Regenerator",
		shortDesc: "This Pokemon restores 1/3 of its maximum HP, rounded down, when it switches out.",
	},
	ripen: {
		name: "Ripen",
		// TODO Needs research. Following berries aren't supported currently:
		// Custap, Jacoba, Rowap, Lanslat, Leppa, Micle
		// Check if they are affected by ripen.
		shortDesc: "When this Pokemon eats a Berry, its effect is doubled.",
	},
	rivalry: {
		name: "Rivalry",
		desc: "This Pokemon's attacks have their power multiplied by 1.25 against targets of the same gender or multiplied by 0.75 against targets of the opposite gender. There is no modifier if either this Pokemon or the target is genderless.",
		shortDesc: "This Pokemon's attacks do 1.25x on same gender targets; 0.75x on opposite gender.",
	},
	rkssystem: {
		name: "RKS System",
		shortDesc: "If this Pokemon is a Silvally, its type changes to match its held Memory.",
	},
	rockhead: {
		name: "Rock Head",
		desc: "This Pokemon does not take recoil damage besides Struggle, Life Orb, and crash damage.",
		shortDesc: "This Pokemon does not take recoil damage besides Struggle/Life Orb/crash damage.",
	},
	roughskin: {
		name: "Rough Skin",
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP.",
		gen3: {
			desc: "Pokemon making contact with this Pokemon lose 1/16 of their maximum HP, rounded down. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "Pokemon making contact with this Pokemon lose 1/16 of their max HP.",
		},

		damage: "  [POKEMON] was hurt!",
	},
	acidicthorns: {
		name: "Acidic Thorns",
		desc: "Pokemon making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon making contact with this Pokemon lose 1/8 of their max HP and 20% chance to Poison",
		damage: "  [POKEMON] was hurt!",
	},
	runaway: {
		name: "Run Away",
		shortDesc: "No competitive use.",
	},
	piggybank: {
		name: "Piggy Bank",
		shortDesc: "No competitive use.",
	},
	forage: {
		name: "Forage",
		shortDesc: "No competitive use.",
	},
	braveheart: {
		name: "Brave Heart",
		shortDesc: "This Pokemon's Attack is raised 1 stage when the foe raises a stat.",
	},
	sandforce: {
		name: "Sand Force",
		desc: "If Sandstorm is active, this Pokemon's Ground-, Rock-, and Steel-type attacks have their power multiplied by 1.3. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "This Pokemon's Ground/Rock/Steel attacks do 1.3x in Sandstorm; immunity to it.",
	},
	stormfront: {
		name: "Strom Front",
		desc: "If Rain Dance is active, this Pokemon's Water-, Electric-, and Flying-type attacks have their power multiplied by 1.3.",
		shortDesc: "This Pokemon's Water/Electric/Flying attacks do 1.3x in Rain",
	},
	shadeforce: {
		name: "Shade Force",
		desc: "If Starry Night is active, this Pokemon's Dark-, Ghost-, and Poison-type attacks have their power multiplied by 1.3.",
		shortDesc: "This Pokemon's Dark/Ghost/Poison attacks do 1.3x in Starry Night.",
	},
	sandrush: {
		name: "Sand Rush",
		desc: "If Sandstorm is active, this Pokemon's Speed is doubled. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's Speed is doubled; immunity to Sandstorm.",
	},
	ambush: {
		name: "Ambush",
		shortDesc: "During Darkness, this Pokemon' has 1.5x Accuacy.",
	},
	sandspit: {
		name: "Sand Spit",
		desc: "When this Pokemon is hit by an attack, Sandstorm begins. This effect happens after the effects of Max and G-Max Moves.",
		shortDesc: "When this Pokemon is hit, Sandstorm begins.",
	},
	fruitrition: {
		name: "Fruitrition",
		shortDesc: "Self recovery moves heal an extra 25%.",
	},
	frostscatter: {
		name: "Frost Scatter",
		desc: "When this Pokemon is hit by an attack, Hail begins. This effect happens after the effects of Max and G-Max Moves.",
		shortDesc: "When this Pokemon is hit, Hail begins.",
	},
	innerlight: {
		name: "Inner Light",
		desc: "When this Pokemon is hit by an attack, Sunny Day begins. This effect happens after the effects of Max and G-Max Moves.",
		shortDesc: "When this Pokemon is hit, Sunny Day begins.",
	},
	splashalot: {
		name: "Splash A Lot",
		desc: "When this Pokemon is hit by an attack, Rain begins. This effect happens after the effects of Max and G-Max Moves.",
		shortDesc: "When this Pokemon is hit, Rain begins.",
	},
	sandstream: {
		name: "Sand Stream",
		shortDesc: "On switch-in, this Pokemon summons Sandstorm.",
	},
	fallout: {
		name: "Fallout",
		shortDesc: "On switch-in, this Pokemon creates a Wasteland.",
	},
	stormbringer: {
		name: "Stormbringer",
		shortDesc: "On switch-in, this Pokemon summons Thunderstorms.",
	},
	sandveil: {
		name: "Sand Veil",
		desc: "If Sandstorm is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Sandstorm.",
		shortDesc: "If Sandstorm is active, this Pokemon's evasiveness is 1.25x; immunity to Sandstorm.",
	},
	foulshroud: {
		name: "Foul Shroud",
		shortDesc: "During Darkness, this Pokemon's evasiveness is 1.25x.",
	},
	sandsniper: {
		name: "Sand Sniper",
		shortDesc: "If Sandstorm is active, this Pokemon's attacks never miss.",
	},
	sapsipper: {
		name: "Sap Sipper",
		desc: "This Pokemon is immune to Grass-type moves and raises its Attack by 1 stage when hit by a Grass-type move.",
		shortDesc: "This Pokemon's Attack is raised 1 stage if hit by a Grass move; Grass immunity.",
	},
	disenchant: {
		name: "Disenchant",
		shortDesc: "This Pokemon is immune to Fairy-type attacks.",
	},
	scarecrow: {
		name: "Scarecrow",
		shortDesc: "This Pokemon is immune to Flying-type attacks.",
	},
	dragonslayer: {
		name: "Dragon Slayer",
		shortDesc: "This Pokemon is immune to Dragon attacks and its moves hit Dragon-types supereffective.",
	},
	desertspirit: {
		name: "Desert Spirit",
		shortDesc: "This Pokemon is immune to Ground attacks and Sandstorm Damage.",
	},
	schooling: {
		name: "Schooling",
		desc: "On switch-in, if this Pokemon is a Wishiwashi that is level 20 or above and has more than 1/4 of its maximum HP left, it changes to School Form. If it is in School Form and its HP drops to 1/4 of its maximum HP or less, it changes to Solo Form at the end of the turn. If it is in Solo Form and its HP is greater than 1/4 its maximum HP at the end of the turn, it changes to School Form.",
		shortDesc: "If user is Wishiwashi, changes to School Form if it has > 1/4 max HP, else Solo Form.",

		transform: "[POKEMON] formed a school!",
		transformEnd: "[POKEMON] stopped schooling!",
	},
	dirtypool: {
		name: "Dirty Pool",
		shortDesc: "If user is Chimaooze, changes to Pooled Form if it has > 1/4 max HP, else Solo Form.",

		transform: "[POKEMON] formed a pool!",
		transformEnd: "[POKEMON] stopped pooling!",
	},
	scrappy: {
		name: "Scrappy",
		desc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves. Immune to Intimidate.",
		shortDesc: "Fighting, Normal moves hit Ghost. Immune to Intimidate.",
		gen7: {
			desc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves.",
			shortDesc: "This Pokemon can hit Ghost types with Normal- and Fighting-type moves.",
		},
	},
	screencleaner: {
		name: "Screen Cleaner",
		shortDesc: "On switch-in, the effects of Aurora Veil, Light Screen, and Reflect end for both sides.",
	},
	serenegrace: {
		name: "Serene Grace",
		shortDesc: "This Pokemon's moves have their secondary effect chance doubled.",
	},
	shadowshield: {
		name: "Shadow Shield",
		desc: "If this Pokemon is at full HP, damage taken from attacks is halved. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "If this Pokemon is at full HP, damage taken from attacks is halved.",
	},
	shadowtag: {
		name: "Shadow Tag",
		desc: "Prevents adjacent opposing Pokemon from choosing to switch out unless they are immune to trapping or also have this Ability.",
		shortDesc: "Prevents adjacent foes from choosing to switch unless they also have this Ability.",
		gen3: {
			desc: "Prevents opposing Pokemon from choosing to switch out.",
			shortDesc: "Prevents opposing Pokemon from choosing to switch out.",
		},
	},
	shedskin: {
		name: "Shed Skin",
		desc: "This Pokemon has a 33% chance to have its non-volatile status condition cured at the end of each turn.",
		shortDesc: "This Pokemon has a 33% chance to have its status cured at the end of each turn.",
	},
	sheerforce: {
		name: "Sheer Force",
		desc: "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed. If a secondary effect was removed, it also removes the user's Life Orb recoil and Shell Bell recovery, and prevents the target's Berserk, Color Change, Emergency Exit, Pickpocket, Wimp Out, Red Card, Eject Button, Kee Berry, and Maranga Berry from activating.",
		shortDesc: "This Pokemon's attacks with secondary effects have 1.3x power; nullifies the effects.",
		gen6: {
			desc: "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed. If a secondary effect was removed, it also removes the user's Life Orb recoil and Shell Bell recovery, and prevents the target's Color Change, Pickpocket, Red Card, Eject Button, Kee Berry, and Maranga Berry from activating.",
		},
		gen5: {
			desc: "This Pokemon's attacks with secondary effects have their power multiplied by 1.3, but the secondary effects are removed. If a secondary effect was removed, it also removes the user's Life Orb recoil and Shell Bell recovery, and prevents the target's Color Change, Pickpocket, Red Card, and Eject Button from activating.",
		},
	},
	shellarmor: {
		name: "Shell Armor",
		shortDesc: "This Pokemon cannot be struck by a critical hit.",
	},
	impervious: {
		name: "Impervious",
		shortDesc: "Protects from critical hits and Def or Sp. Def lowering by foes.",
	},
	shielddust: {
		name: "Shield Dust",
		shortDesc: "This Pokemon is not affected by the secondary effect of another Pokemon's attack.",
	},
	shieldsdown: {
		name: "Shields Down",
		desc: "If this Pokemon is a Minior, it changes to its Core forme if it has 1/2 or less of its maximum HP, and changes to Meteor Form if it has more than 1/2 its maximum HP. This check is done on switch-in and at the end of each turn. While in its Meteor Form, it cannot become affected by non-volatile status conditions. Moongeist Beam, Sunsteel Strike, and the Mold Breaker, Teravolt, and Turboblaze Abilities cannot ignore this Ability.",
		shortDesc: "If Minior, switch-in/end of turn it changes to Core at 1/2 max HP or less, else Meteor.",
		// n.b. this isn't a bug, the game actually says "Shields Down deactivated" on first transformation
		// https://www.youtube.com/watch?v=SThjYBz4SEA

		transform: "Shields Down deactivated!\n([POKEMON] shielded itself.)",
		transformEnd: "Shields Down activated!\n([POKEMON] stopped shielding itself.)",
	},
	simple: {
		name: "Simple",
		desc: "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.",
		shortDesc: "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead.",
		gen6: {
			desc: "When this Pokemon's stat stages are raised or lowered, the effect is doubled instead.",
		},
		gen4: {
			shortDesc: "This Pokemon's stat stages are considered doubled during stat calculations.",
		},
	},
	skilllink: {
		name: "Skill Link",
		shortDesc: "This Pokemon's multi-hit attacks always hit the maximum number of times.",
	},
	slowstart: {
		name: "Slow Start",
		shortDesc: "On switch-in, this Pokemon's Attack and Speed are halved for 5 turns.",

		start: "  [POKEMON] can't get it going!",
		end: "  [POKEMON] finally got its act together!",
	},
	slushrush: {
		name: "Slush Rush",
		shortDesc: "If Hail is active, this Pokemon's Speed is doubled.",
	},
	iceslick: {
		name: "Ice Slick",
		shortDesc: "If Hail or Snowy Terrain is active, this Pokemon's Speed is doubled. Immunity to Hail damage.",
	},
	airrider: {
		name: "Air Rider",
		shortDesc: "If Wind is active, this Pokemon's Speed is doubled.",
	},
	noxious: {
		name: "Noxious",
		shortDesc: "If Acid Rain is active, this Pokemon's Speed is doubled.",
	},
	psychedelic: {
		name: "Psychedelic",
		shortDesc: "If Spore Storm is active, this Pokemon's Speed is doubled.",
	},
	sniper: {
		name: "Sniper",
		shortDesc: "If this Pokemon strikes with a critical hit, the damage is multiplied by 1.5.",
	},
	snowcloak: {
		name: "Snow Cloak",
		desc: "If Hail is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Hail.",
		shortDesc: "If Hail is active, this Pokemon's evasiveness is 1.25x; immunity to Hail.",
	},
	snowwarning: {
		name: "Snow Warning",
		shortDesc: "On switch-in, this Pokemon summons Hail.",
	},
	trickster: {
		name: "Trickster",
		shortDesc: "When used, Room effects last 2 more turns.",
	},
	puzzlingaura: {
		name: "Puzzling Aura",
		shortDesc: "On switch-in, this Pokemon summons Puzzle Room.",
	},
	mysticaura: {
		name: "Mystic Aura",
		shortDesc: "On switch-in, this Pokemon summons Magic Room.",
	},
	taproot: {
		name: "Taproot",
		shortDesc: "On switch-in, this Pokemon becomes rooted.",
	},
	conviction: {
		name: "Conviction",
		shortDesc: "On switch-in, this Pokemon endures itself.",
	},
	solarpower: {
		name: "Solar Power",
		desc: "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its Special Attack remains the same and it does not lose any HP.",
		shortDesc: "If Sunny Day is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",
		gen7: {
			desc: "If Sunny Day is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn.",
		},
	},
	permafrost: {
		name: "Permafrost",
		desc: "If Hail is active, this Pokemon's Def is 1.5x; immunity to Hail damage.",
		shortDesc: "If Hail is active, this Pokemon's Def is 1.5x; immunity to Hail damage.",
	},
	sentry: {
		name: "Sentry",
		shortDesc: "This Pokemon takes 1.25x less damage when using a Status move.",
	},
	sunchaser: {
		name: "Sun Chaser",
		desc: "If Sunny Day is active, this Pokemon's Atk is 1.3x.",
		shortDesc: "If Sunny Day is active, this Pokemon's Atk is 1.3x.",
	},
	stout: {
		name: "Stout",
		desc: "If a weather is active, this Pokemon's Def and Spd is 1.2x. Immune to weather damage",
		shortDesc: "If a weather is active, this Pokemon's Def and Spd is 1.2x. Immune to weather damage",
	},
	blizzboxer: {
		name: "Blizz Boxer",
		desc: "If Hail is active, this Pokemon's Atk is 1.3x.",
		shortDesc: "If Hail is active, this Pokemon's Atk is 1.3x.",
	},
	bigthorns: {
		name: "Big Throns",
		desc: "If Grassy Terrain is active, this Pokemon's Attack is 1.3x.",
		shortDesc: "If Grassy Terrain is active, this Pokemon's Attack is 1.3x.",
	},
	junglefury: {
		name: "Jungle Fury",
		shortDesc: "If Grassy Terrain is active, this Pokemon's critical hit ratio is raised by 1 stage.",
	},
	territorial: {
		name: "Territorial",
		shortDesc: "If Terrain is active, this Pokemon's attacks do 1.3x damage.",
	},
	keeper: {
		name: "Keeper",
		shortDesc: "If Terrain is active, this Pokemon's recieves 1.2x less damage from attacks.",
	},
	strangestrength: {
		name: "Strange Strength",
		shortDesc: "If Misty Terrain is active, this Pokemon's Attack is Doubled",
	},
	rammingspeed: {
		name: "Ramming Speed",
		desc: "If Tailwind is active, this Pokemon's Attack is 1.3x.",
		shortDesc: "If Tailwind is active, this Pokemon's Attack is 1.3x.",
	},
	tidalforce: {
		name: "Tidal Force",
		desc: "If Rain Dance is active, this Pokemon's Sp. Atk is 1.3x.",
		shortDesc: "If Rain Dance is active, this Pokemon's Sp. Atk is 1.3x.",
	},
	harshhunter: {
		name: "Harsh Hunter",
		shortDesc: "If Sandstorm is active, this Pokemon's Attack is 1.3x.",
	},
	desertarmor: {
		name: "Desert Armor",
		desc: "If Sandstorm is active, this Pokemon's Def is doubled.",
		shortDesc: "If Sandstorm is active, this Pokemon's Def is doubled.",
	},
	solidrock: {
		name: "Solid Rock",
		shortDesc: "This Pokemon receives 3/4 damage from supereffective attacks.",
	},
	soulheart: {
		name: "Soul-Heart",
		desc: "This Pokemon's Special Attack is raised by 1 stage when another Pokemon faints.",
		shortDesc: "This Pokemon's Sp. Atk is raised by 1 stage when another Pokemon faints.",
	},
	soundproof: {
		name: "Soundproof",
		shortDesc: "This Pokemon is immune to sound-based moves, including Heal Bell.",
		gen5: {
			shortDesc: "This Pokemon is immune to sound-based moves, except Heal Bell.",
		},
		gen4: {
			shortDesc: "This Pokemon is immune to sound-based moves, including Heal Bell.",
		},
	},
	speedboost: {
		name: "Speed Boost",
		desc: "This Pokemon's Speed is raised by 1 stage at the end of each full turn it has been on the field.",
		shortDesc: "This Pokemon's Speed is raised 1 stage at the end of each full turn on the field.",
	},
	stakeout: {
		name: "Stakeout",
		shortDesc: "This Pokemon's attacking stat is doubled against a target that switched in this turn.",
	},
	stall: {
		name: "Stall",
		shortDesc: "This Pokemon moves last among Pokemon using the same or greater priority moves.",
	},
	stalwart: {
		name: "Stalwart",
		shortDesc: "This Pokemon's moves cannot be redirected to a different target by any effect.",
	},
	stamina: {
		name: "Stamina",
		shortDesc: "This Pokemon's Defense is raised by 1 stage after it is damaged by a move.",
	},
	adaptiveskin: {
		name: "Adaptive Skin",
		shortDesc: "After being hit, this Pokemon raises the corresponding defensive stat by 1.",
	},
	grit: {
		name: "Grit",
		shortDesc: "This Pokemon's Sp. Def is raised by 1 stage after it is damaged by a move.",
	},
	stancechange: {
		name: "Stance Change",
		desc: "If this Pokemon is an Aegislash, it changes to Blade Forme before attempting to use an attacking move, and changes to Shield Forme before attempting to use King's Shield.",
		shortDesc: "If Aegislash, changes Forme to Blade before attacks and Shield before King's Shield.",

		transform: "Changed to Blade Forme!",
		transformEnd: "Changed to Shield Forme!",
	},
	static: {
		name: "Static",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be paralyzed.",
		gen4: {
			desc: "30% chance a Pokemon making contact with this Pokemon will be paralyzed. This effect does not happen if this Pokemon did not lose HP from the attack.",
		},
		gen3: {
			desc: "1/3 chance a Pokemon making contact with this Pokemon will be paralyzed. This effect does not happen if this Pokemon did not lose HP from the attack.",
			shortDesc: "1/3 chance a Pokemon making contact with this Pokemon will be paralyzed.",
		},
	},
	conundrum: {
		name: "Conundrum",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be confused.",
	},
	cursedtail: {
		name: "Cursed Tail",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be cursed.",
	},
	deepfreeze: {
		name: "Deep Freeze",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be frozen.",
	},
	sandman: {
		name: "Sandman",
		shortDesc: "30% chance a Pokemon making contact with this Pokemon will be put to sleep.",
	},
	steadfast: {
		name: "Steadfast",
		shortDesc: "If this Pokemon flinches, its Speed is raised by 1 stage.",
	},
	steamengine: {
		name: "Steam Engine",
		shortDesc: "This Pokemon's Speed is raised by 6 stages after it is damaged by Fire/Water moves.",
	},
	steelworker: {
		name: "Steelworker",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Steel-type attack.",
	},
	inflamable: {
		name: "Steelworker",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Fire-type attack.",
	},
	steelyspirit: {
		name: "Steely Spirit",
		shortDesc: "This Pokemon and its allies' Steel-type moves have their power multiplied by 1.5.",
	},
	stratagem: {
		name: "Stratagem",
		shortDesc: "This Pokemon's Rock-type moves have their power multiplied by 1.5.",
	},
	tunnelmaker: {
		name: "Tunnel Maker",
		shortDesc: "This Pokemon's Ground-type moves have their power multiplied by 1.5.",
	},
	elementalist: {
		name: "Elementalist",
		shortDesc: "This Pokemon and its allies' Fire, Water, and Electric-type moves have their power multiplied by 1.5.",
	},
	hubris: {
		name: "Hubris",
		desc: "When a Pokemon with Hubris causes another Pokemon (including allies) to faint through direct damage, its Special Attack rises by one stage.",
		shortDesc: "Boosts Special Attack after knocking out.",
	},
	noctem: {
		name: "Noctem",
		desc: "Noctem summons darkness in battle as soon as a Pokemon with Noctem enters the battle. Its effects are the same as the move New Moon.",
		shortDesc: "The Pokemon summons darkness and blots out the sky as it enters the battle.",
	},
	spiritcall: {
		name: "Spirit Call",
		desc: "When a Pokemon with Spirit Call uses a Ghost-type movve, the power will increase by 1.5x if the user has less than or equal to 1/3 of its maximum HP remaining",
		shortDesc: "Powers up Ghost-type moves in a pinch",
	},
	shadowcall: {
		name: "Shadow Call",
		desc: "When a Pokemon with Shadow Call uses a Dark-type movve, the power will increase by 1.5x if the user has less than or equal to 1/3 of its maximum HP remaining.",
		shortDesc: "Powers up Dark-type moves in a pinch",
	},
	protosynthesis: {
		name: "Protosynthesis",
		desc: "If Sunny Day is active or this Pokemon has used a held Booster Energy, this Pokemon's highest stat is multiplied by 1.3, or by 1.5 if the highest stat is Speed.",
		shortDesc: "While Sunny Day or Booster Energy are active, highest stat is 1.3x, or 1.5x if Speed.",

		activate: "  The harsh sunlight activated [POKEMON]'s Protosynthesis!",
		activateFromItem: "  [POKEMON] used its Booster Energy to activate Protosynthesis!",
		start: "  [POKEMON]'s [STAT] was heightened!",
		end: "  The effects of [POKEMON]'s Protosynthesis wore off!",
	},
	shadowdance: {
		name: "Shadow Dance",
		shortDesc: "During intense darkness, the Speed stat of Pokemon with this Ability is doubled.",
	},
	shadowsynergy: {
		name: "Shadow Synergy",
		shortDesc: "Boosts the power of the user's Dark-type moves by 50%.",
	},
	supercell: {
		name: "Supercell",
		desc: "During intense darkness or rain, Supercell increases the Special Attack stat of the Pokémon with this Ability by 1.5. Supercell changes Delta Typhlosion from its Inactive Mode to Active Mode during darkness or rain.",
		shortDesc: "Special Attack surges in the rain and darkness.",
	},
	spectraljaws: {
		name: "Spectral Jaws",
		desc: "Spectral Jaws causes all biting moves used by the Pokémon to be reclassified as Special moves and receive a 30% boost.		",
		shortDesc: "All biting moves are Special and have a 1.3x Boost",
	},
	crystaljaw: {
		name: "Crystal Jaw",
		shortDesc: "All biting moves are Special.",
	},
	mysticfist: {
		name: "Mystic Fist",
		desc: "All punching moves used by the Pokémon to be reclassified as Special moves and receive a 30% boost.		",
		shortDesc: "All punching moves are Special and have a 1.3x Boost",
	},
	prismguard: {
		name: "Prism Guard",
		desc: "Pokemon not making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon not making contact with this Pokemon lose 1/8 of their max HP.",

		damage: "  [POKEMON] was hurt!",
	},
	refractive: {
		name: "Refractive",
		desc: "Pokemon not making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon not making contact with this Pokemon lose 1/8 of their max HP.",

		damage: "  [POKEMON] was hurt!",
	},
	feedback: {
		name: "Feedback",
		desc: "Pokemon not making contact with this Pokemon lose 1/8 of their maximum HP, rounded down.",
		shortDesc: "Pokemon not making contact with this Pokemon lose 1/8 of their max HP.",

		damage: "  [POKEMON] was hurt!",
	},
	absolution: {
		name: "Absolution",
		desc: "If New Moon is active, this Pokemon's Special Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its Special Attack remains the same and it does not lose any HP.",
		shortDesc: "If New Moon is active, this Pokemon's Sp. Atk is 1.5x; loses 1/8 max HP per turn.",
	},
	foundry: {
		name: "Foundry",
		desc: "Foundry causes all Rock-type moves used by the Pokémon with this Ability to become Fire-type and receive a 30% damage boost, in addition to all other modifiers. Furthermore, Foundry also causes Stealth Rock to become a Fire-type entry hazard that stacks with the normal, Rock-type Stealth Rock.",
		shortDesc: "Rock-type moves, when used, melt and become Fire Type.",
	},
	intoxicate: {
		name: "Intoxicate",
		desc: "Intoxicate causes all Normal-type moves used by the Pokémon to become Poison-type and receive a 30% power boost.",
		shortDesc: "Normal-type moves become Poison-type moves.",
	},
	athenian: {
		name: "Athenian",
		shortDesc: "Doubles the Pokemon's Special Attack stat.",
	},
	purefocus: {
		name: "Pure Focus",
		shortDesc: "Doubles the Pokemon's Special Attack stat.",
	},
	blazeboost: {
		name: "Blaze Boost",
		desc: "Immediately before the user uses a Fire-type attack its Attack, Special Attack, and Speed are increased by 1 stage. When Blaze Boost is activated by Delta Emolga, its form changes. When in this form, there is a 10% chance that Pokémon using a contact move against Delta Emolga will become burned.",
		shortDesc: "Increases Atk, SpA and Spe before using Fire moves. May burn on contact.",
	},
	chlorofury: {
		name: "Chlorofury",
		desc: "When Mega Evolving or on switch-in, Chlorofury raises the user's Speed by 1 stage and its Special Attack by X stages for 2 turns. X is equal to the number of fainted teammates on this Pokémon's team.",
		shortDesc: "Boosts its stats to avenge its allies.",
	},
	etherealshroud: {
		name: "Ethereal Shroud",
		shortDesc: "This Pokemon gains the Ghost-Type defensivley.",
	},
	eventhorizon: {
		name: "Event Horizon",
		shortDesc: "Any Pokemon that contacts this one can't escape.",
	},
	speedswap: {
		name: "Speed Swap",
		desc: "Speed Swap starts Trick Room in battle as soon as a Pokémon with Speed Swap enters the battle. If a Pokémon with Speed Swap enters the battle while Trick Room is already in effect, Trick Room will end immediately.",
		shortDesc: "Activates the Trick Room effect on entering the battlefield.",
	},
	orbitaltide: {
		name: "Orbital Tide",
		desc: "Activates Gravity in battle as soon as a Pokémon with Speed Swap enters the battle. If a Pokémon with Speed Swap enters the battle while Trick Room is already in effect, Trick Room will end immediately.",
		shortDesc: "Activates the Gravity effect on entering the battlefield.",
	},
	artillery: {
		name: "Artillery",
		desc: "This Pokemon's ballistic attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's ballistic attacks have 1.2x power.",
	},
	siegedrive: {
		name: "Siege Drive",
		shortDesc: "This Pokemon's ballistic attacks have 1.5x power.",
	},
	solidfooting: {
		name: "Solid Footing",
		desc: "This Pokemon is immune to hazards upon switch-in.",
		shortDesc: "This Pokemon is immune to hazards upon switch-in.",
	},
	psychocall: {
		name: "Psycho Call",
		desc: "When a Pokemon with Psycho Call uses a Psychic-type movve, the power will increase by 1.5x if the user has less than or equal to 1/3 of its maximum HP remaining",
		shortDesc: "Powers up Psychic-type moves in a pinch",
	},
	sleet: {
		name: "Sleet",
		desc: "Sleet summons and increases the damage of hail. Pokémon that are not immune to hail damage are damaged for 20% of their maximum HP at the end of each turn while Sleet is active. Sleet's effects are removed when Pokémon with Sleet are no longer on the field or hail stops. If hail stops but becomes active again while a Pokémon with Sleet is on the field, Sleet will immediately begin modifying the damage of hail.",
		shortDesc: "On switch-in, this Pokemon summons Sleet.",
	},
	vaporization: {
		name: "Vaporization",
		desc: "Causes damage-dealing Water-type moves and targetable Water-type status moves to fail when used. Damages all Water-type Pokémon for ⅛ of their maximum HP at the end of each every turn.",
		shortDesc: "Vaporizes Water Moves and damages Water types.",
	},
	luminous: {
		name: "Luminous",
		desc: "Causes damage-dealing Dark-type moves and targetable Dark-type status moves to fail when used. Damages all Dark-type Pokémon for ⅛ of their maximum HP at the end of each every turn.",
		shortDesc: "Dissapates Dark Moves and damages Dark types.",
	},
	vampiric: {
		name: "Vampiric",
		desc: "Allows the user to regain 25% of the damage inflicted when using a contact move. That amount of HP recovered is unaffected by Big Root. If the effects of Heal Block are active then Vampiric cannot restore HP.",
		shortDesc: "Recovers a little HP with contact moves.",
	},
	siphon: {
		name: "Siphon",
		shortDesc: "This Pokemon has a 30% chance recovers 1/2 the HP lost by the target with contact moves.",
	},
	windforce: {
		name: "Wind Force",
		desc: "This Pokemon is immune to Flying-type moves and raises its Speed by 1 stage when hit by an Flying-type move.",
		shortDesc: "Flying-type moves boost this Pokemon's speed; Flying immunity.",
	},
	industrialize: {
		name: "Industrialize",
		shortDesc: "Steel-type moves boost this Pokemon's speed; Steel immunity.",
	},
	winterjoy: {
		name: "Winter Joy",
		desc: "During the months of November, December, January, and February, the Attack and Special Attack of Pokémon with this Ability are increased by 40%. During the months of May, June, July, and August the Attack and Special Attack of Pokémon with this ability are decreased by 30%. During the remaining four months, stats are unchanged.",
		shortDesc: "Strengthened in winter and weakened in summer.",
	},
	venomous: {
		name: "Venomous",
		desc: "This Pokemon always badly poisons",
	},
	unleafed: {
		name: "Unleafed",
		desc: "When Mega Evolving or on switch-in, boosts Attack, Defense, Special Attack, Special Defense, and Speed by one stage each. These boosts last X + 1 turns, where X is the number of fainted Pokémon on this Pokémon´s team at the time of the ability's activation. After X + 1 turns, the boosts disappear.",
		shortDesc: "This Pokémon avenges its friends by unloading its power.",
	},
	pendulum: {
		name: "Pendulum",
		desc: "Boosts the power of moves used repeatedly. Each time a move is used consecutively, its power is boosted by 20% up to a maximum increase of 100%. Switching or using another move returns the move's power to normal. Multi-strike moves are counted by the number of turns on which they are used, not the number of hits made. It also stacks with Metronome, which offers an identical power boost for every consecutive usage.",
		shortDesc: "Consecutively using the same move increases its damage.",
	},
	momentum: {
		name: "Momentum",
		desc: "Boosts the power of moves used repeatedly. Each time a move is used consecutively, its power is boosted by 20% up to a maximum increase of 100%. Switching or using another move returns the move's power to normal. Multi-strike moves are counted by the number of turns on which they are used, not the number of hits made. It also stacks with Metronome, which offers an identical power boost for every consecutive usage.",
		shortDesc: "Consecutively using the same move increases its damage.",
	},
	conditioning: {
		name: "Conditioning",
		shortDesc: "Consecutively using the same move against this Pokemon decreases its damage.",
	},
	syntheticalloy: {
		name: "Synthetic Alloy",
		desc: "Pokemon with Synthetic Alloy take neutral damage from Fire-type attacks regardless of their type-specific weaknesses.",
		shortDesc: "This Pokemon takes neutral damage from Fire-type attacks.",
	},
	periodicorbit: {
		name: "Periodic Orbit",
		desc: "When the moves Doom Desire, Future Sight, or Wish are used, they will activate twice after a single use. Wish will activate one and three turns after the move is originally used. Doom Desire and Future Sight will activate two and five turns after the move is originally used, and each will block further uses of Doom Desire or Future Sight until the second activation lands.",
		shortDesc: "Delayed moves will orbit and activate twice.",
	},
	irrelephant: {
		name: "Irrelephant",
		desc: "Irrelephant ignores type-based immunities. For example, a Pokémon with Irrelephant can hit Flying-type foes with Earthquake. Therefore, both Talonflame and Skarmory will take super effective damage from a Ground-type move used by a Pokémon with Irrelephant.",
		shortDesc: "Immunities are irrelephant to this Pokémon's attacks.",
	},
	breakthrough: {
		name: "Break Through",
		shortDesc: "This Pokemon's attacks ignore immunitites.",
	},
	phototroph: {
		name: "Phototroph",
		desc: "Pokémon with Phototroph restore 1/16 of their total HP at the end of each turn. The effects of Phototroph are doubled during harsh sunlight and are completely negated when the sky is dark or heavy rain is in effect.",
		shortDesc: "Restores 1/16 of total HP at the end of each turn, 1/8 in Sun and has no effect in other weather.",
	},
	stench: {
		name: "Stench",
		desc: "This Pokemon's attacks without a chance to make the target flinch gain a 10% chance to make the target flinch.",
		shortDesc: "This Pokemon's attacks without a chance to flinch gain a 10% chance to flinch.",
		gen4: {
			desc: "No competitive use.",
			shortDesc: "No competitive use.",
		},
	},
	stickyhold: {
		name: "Sticky Hold",
		shortDesc: "This Pokemon cannot lose its held item due to another Pokemon's attack.",

		block: "  [POKEMON]'s item cannot be removed!",
	},
	stormdrain: {
		name: "Storm Drain",
		desc: "This Pokemon is immune to Water-type moves and raises its Special Attack by 1 stage when hit by a Water-type move. If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself if it is within the range of that move.",
		shortDesc: "This Pokemon draws Water moves to itself to raise Sp. Atk by 1; Water immunity.",
		gen4: {
			desc: "If this Pokemon is not the target of a single-target Water-type move used by another Pokemon, this Pokemon redirects that move to itself.",
			shortDesc: "This Pokemon draws single-target Water moves to itself.",
		},

		activate: "#lightningrod",
	},
	strongjaw: {
		name: "Strong Jaw",
		desc: "This Pokemon's bite-based attacks have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's bite-based attacks have 1.5x power. Bug Bite is not boosted.",
	},
	extremeheat: {
		name: "Extreme Heat",
		shortDesc: "This Pokemon's attacks have 1.5x power, but loses 1/10 HP every turn.",
	},
	sturdy: {
		name: "Sturdy",
		desc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.",
		shortDesc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",
		gen4: {
			desc: "OHKO moves fail when used against this Pokemon.",
			shortDesc: "OHKO moves fail when used against this Pokemon.",
		},

		activate: "  [POKEMON] endured the hit!",
	},
	resolute: {
		name: "Resolute",
		desc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. OHKO moves fail when used against this Pokemon.",
		shortDesc: "If this Pokemon is at full HP, it survives one hit with at least 1 HP. Immune to OHKO.",

		activate: "  [POKEMON] endured the hit!",
	},
	suctioncups: {
		name: "Suction Cups",
		shortDesc: "This Pokemon cannot be forced to switch out by another Pokemon's attack or item.",

		block: "  [POKEMON] is anchored in place with its suction cups!",
	},
	superluck: {
		name: "Super Luck",
		shortDesc: "This Pokemon's critical hit ratio is raised by 1 stage.",
	},
	surgesurfer: {
		name: "Surge Surfer",
		shortDesc: "If Electric Terrain is active, this Pokemon's Speed is doubled.",
	},
	quickthinking: {
		name: "Quick Thinking",
		shortDesc: "If Psychic Terrain is active, this Pokemon's Speed is doubled.",
	},
	headstrong: {
		name: "Head Strong",
		shortDesc: "If Psychic Terrain is active, this Pokemon's Defense is doubled.",
	},
	swarm: {
		name: "Swarm",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Bug-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Bug attacks.",
		gen4: {
			desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Bug-type attacks have their power multiplied by 1.5.",
			shortDesc: "At 1/3 or less of its max HP, this Pokemon's Bug-type attacks have 1.5x power.",
		},
	},
	sweetveil: {
		name: "Sweet Veil",
		shortDesc: "This Pokemon and its allies cannot fall asleep.",

		block: "  [POKEMON] can't fall asleep due to a veil of sweetness!",
	},
	swiftswim: {
		name: "Swift Swim",
		desc: "If Rain Dance is active and this Pokemon is not holding Utility Umbrella, this Pokemon's Speed is doubled.",
		shortDesc: "If Rain Dance is active, this Pokemon's Speed is doubled.",
		gen7: {
			desc: "If Rain Dance is active, this Pokemon's Speed is doubled.",
		},
	},
	symbiosis: {
		name: "Symbiosis",
		desc: "If an ally uses its item, this Pokemon gives its item to that ally immediately. Does not activate if the ally's item was stolen or knocked off.",
		shortDesc: "If an ally uses its item, this Pokemon gives its item to that ally immediately.",

		activate: "  [POKEMON] shared its [ITEM] with [TARGET]!",
	},
	synchronize: {
		name: "Synchronize",
		desc: "If another Pokemon burns, paralyzes, poisons, or badly poisons this Pokemon, that Pokemon receives the same non-volatile status condition.",
		shortDesc: "If another Pokemon burns/poisons/paralyzes this Pokemon, it also gets that status.",
		gen4: {
			desc: "If another Pokemon burns, paralyzes, or poisons this Pokemon, that Pokemon receives the same non-volatile status condition. If another Pokemon badly poisons this Pokemon, that Pokemon becomes poisoned.",
		},
	},
	tangledfeet: {
		name: "Tangled Feet",
		shortDesc: "This Pokemon's evasiveness is doubled as long as it is confused.",
	},
	tanglinghair: {
		name: "Tangling Hair",
		shortDesc: "Pokemon making contact with this Pokemon have their Speed lowered by 1 stage.",
	},
	technician: {
		name: "Technician",
		desc: "This Pokemon's moves of 60 power or less have their power multiplied by 1.5. Does affect Struggle.",
		shortDesc: "This Pokemon's moves of 60 power or less have 1.5x power. Includes Struggle.",
	},
	telepathy: {
		name: "Telepathy",
		shortDesc: "This Pokemon does not take damage from attacks made by its allies.",

		block: "  [POKEMON] can't be hit by attacks from its ally Pok\u00E9mon!",
	},
	teravolt: {
		name: "Teravolt",
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",

		start: "  [POKEMON] is radiating a bursting aura!",
	},
	thickfat: {
		name: "Thick Fat",
		desc: "If a Pokemon uses a Fire- or Ice-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Fire/Ice-type moves against this Pokemon deal damage with a halved attacking stat.",
		gen4: {
			shortDesc: "The power of Fire- and Ice-type attacks against this Pokemon is halved.",
		},
	},
	tough: {
		name: "Tough",
		desc: "If a Pokemon uses a Fighting- or Rock-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Fighting/Rock-type moves against this Pokemon deal damage with a halved attacking stat.",
	},
	realist: {
		name: "Realist",
		desc: "If a Pokemon uses a Dragon- or Fairy-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "Dragon/Fairy-type moves against this Pokemon deal damage with a halved attacking stat.",
	},
	tintedlens: {
		name: "Tinted Lens",
		shortDesc: "This Pokemon's attacks that are not very effective on a target deal double damage.",
	},
	tactician: {
		name: "Tactician",
		shortDesc: "This Pokemon's attacks that are not very effective on a target deal double damage.",
	},
	torrent: {
		name: "Torrent",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Water-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Water attacks.",
		gen4: {
			desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its Water-type attacks have their power multiplied by 1.5.",
			shortDesc: "At 1/3 or less of its max HP, this Pokemon's Water-type attacks have 1.5x power.",
		},
	},
	toughclaws: {
		name: "Tough Claws",
		shortDesc: "This Pokemon's contact moves have their power multiplied by 1.3.",
	},
	toxicboost: {
		name: "Toxic Boost",
		desc: "While this Pokemon is poisoned, the power of its physical attacks is multiplied by 1.5.",
		shortDesc: "While this Pokemon is poisoned, its physical attacks have 1.5x power.",
	},
	trace: {
		name: "Trace",
		desc: "On switch-in, or when this Pokemon acquires this ability, this Pokemon copies a random adjacent opposing Pokemon's Ability. However, if one or more adjacent Pokemon has the Ability \"No Ability\", Trace won't copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned \"No Ability\", as well as As One, Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Gulp Missile, Hunger Switch, Ice Face, Illusion, Imposter, Multitype, Neutralizing Gas, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, and Zen Mode.",
		shortDesc: "On switch-in, or when it can, this Pokemon copies a random adjacent foe's Ability.",
		gen7: {
			desc: "On switch-in, or when this Pokemon acquires this ability, this Pokemon copies a random adjacent opposing Pokemon's Ability. However, if one or more adjacent Pokemon has the Ability \"No Ability\", Trace won't copy anything even if there is another valid Ability it could normally copy. Otherwise, if there is no Ability that can be copied at that time, this Ability will activate as soon as an Ability can be copied. Abilities that cannot be copied are the previously mentioned \"No Ability\", as well as Battle Bond, Comatose, Disguise, Flower Gift, Forecast, Illusion, Imposter, Multitype, Power Construct, Power of Alchemy, Receiver, RKS System, Schooling, Shields Down, Stance Change, Trace, and Zen Mode.",
		},

		changeAbility: "  [POKEMON] traced [SOURCE]'s [ABILITY]!",
	},
	transistor: {
		name: "Transistor",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Electric-type attack.",
	},
	peckingorder: {
		name: "Pecking Order",
		shortDesc: "This Pokemon's Flying-type moves have 1.5x power, immune to Flying-type attacks.",
	},
	erudite: {
		name: "Erudite",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Psychic-type attack.",
	},
	scaldingsmoke: {
		name: "Scalding Smoke",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Poison-type attack.",
	},
	paleolithic: {
		name: "Paleolithic",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Rock-type attack.",
	},
	subzero: {
		name: "Sub Zero",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Ice-type attack.",
	},
	aquaticspirit: {
		name: "Aquatic Spirit",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Water-type attack.",
	},
	adamantite: {
		name: "Adamantite",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Steel-type attack.",
	},
	midnightsun: {
		name: "Midnight Sun",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using an Dark-type attack during Sunny Day.",
	},
	rainprism: {
		name: "Rain Prism",
		shortDesc: "Powers up Fairy-type moves by 50% in rain.",
	},
	triage: {
		name: "Triage",
		shortDesc: "This Pokemon's healing moves have their priority increased by 3.",
	},
	lighttrick: {
		name: "Light Trick",
		shortDesc: "This Pokemon's moves have their priority increased by 3 against statused foes.",
	},
	truant: {
		name: "Truant",
		shortDesc: "This Pokemon skips every other turn instead of using a move.",

		cant: "[POKEMON] is loafing around!",
	},
	turboblaze: {
		name: "Turboblaze",
		shortDesc: "This Pokemon's moves and their effects ignore the Abilities of other Pokemon.",

		start: "  [POKEMON] is radiating a blazing aura!",
	},
	unaware: {
		name: "Unaware",
		desc: "This Pokemon ignores other Pokemon's Attack, Special Attack, and accuracy stat stages when taking damage, and ignores other Pokemon's Defense, Special Defense, and evasiveness stat stages when dealing damage.",
		shortDesc: "This Pokemon ignores other Pokemon's stat stages when taking or doing damage.",
	},
	unburden: {
		name: "Unburden",
		desc: "If this Pokemon loses its held item for any reason, its Speed is doubled. This boost is lost if it switches out or gains a new item or Ability.",
		shortDesc: "Speed is doubled on held item loss; boost is lost if it switches, gets new item/Ability.",
	},
	unnerve: {
		name: "Unnerve",
		desc: "While this Pokemon is active, it prevents opposing Pokemon from using their Berries. Activation message broadcasts before other Abilities regardless of the Pokemon's Speed tiers.",
		shortDesc: "While this Pokemon is active, it prevents opposing Pokemon from using their Berries.",

		start: "  [TEAM] is too nervous to eat Berries!",
	},
	badinfluence: {
		name: "Bad Influence",
		shortDesc: "While this Pokemon is active, it prevents opposing Pokemon from healing.",

		start: "  [TEAM] is too nervous to Heal!",
	},
	unseenfist: {
		name: "Unseen Fist",
		desc: "All of this Pokemon's moves that make contact bypass protection.",
		shortDesc: "All contact moves hit through protection.",
	},
	victorystar: {
		name: "Victory Star",
		shortDesc: "This Pokemon and its allies' moves have their accuracy multiplied by 1.1.",
	},
	ocular: {
		name: "Ocular",
		shortDesc: "This Pokemon and its allies' moves have their accuracy multiplied by 1.5x.",
	},
	vitalspirit: {
		name: "Vital Spirit",
		shortDesc: "This Pokemon cannot fall asleep. Gaining this Ability while asleep cures it.",
	},
	voltabsorb: {
		name: "Volt Absorb",
		desc: "This Pokemon is immune to Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Electric-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Electric moves; Electric immunity.",
		gen3: {
			desc: "This Pokemon is immune to damaging Electric-type moves and restores 1/4 of its maximum HP, rounded down, when hit by one.",
			shortDesc: "This Pokemon heals 1/4 its max HP when hit by a damaging Electric move; immunity.",
		},
	},
	poisonabsorb: {
		name: "Poison Absorb",
		desc: "This Pokemon is immune to Poison-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Poison-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Poison moves; Poison immunity.",
	},
	levinskin: {
		name: "Levin Skin",
		shortDesc: "This Pokemon sharply raises its Attack when hit by Electric moves.",
	},
	wanderingspirit: {
		name: "Wandering Spirit",
		desc: "Pokemon making contact with this Pokemon have their Ability swapped with this one. Does not affect a Pokemon which has the Ability As One, Battle Bond, Comatose, Disguise, Gulp Missile, Hunger Switch, Ice Face, Illusion, Multitype, Neutralizing Gas, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode.",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability swapped with this one.",

		activate: "#skillswap",
	},
	waterabsorb: {
		name: "Water Absorb",
		desc: "This Pokemon is immune to Water-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Water-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Water moves; Water immunity.",
	},
	flameeater: {
		name: "Flame Eater",
		desc: "This Pokemon is immune to Fire-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Fire-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Fire moves; Fire immunity.",
	},
	heartless: {
		name: "Heartless",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Fairy moves; Fairy immunity.",
	},
	synthesizer: {
		name: "Synthesizer",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Sound moves; Sound immunity.",
	},
	waterbubble: {
		name: "Water Bubble",
		desc: "This Pokemon's attacking stat is doubled while using a Water-type attack. If a Pokemon uses a Fire-type attack against this Pokemon, that Pokemon's attacking stat is halved when calculating the damage to this Pokemon. This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
		shortDesc: "This Pokemon's Water power is 2x; it can't be burned; Fire power against it is halved.",
	},
	watercompaction: {
		name: "Water Compaction",
		shortDesc: "This Pokemon's Defense is raised 2 stages after it is damaged by a Water-type move.",
	},
	waterveil: {
		name: "Water Veil",
		shortDesc: "This Pokemon cannot be burned. Gaining this Ability while burned cures it.",
	},
	weakarmor: {
		name: "Weak Armor",
		desc: "If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 2 stages.",
		shortDesc: "If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 2.",
		gen6: {
			desc: "If a physical attack hits this Pokemon, its Defense is lowered by 1 stage and its Speed is raised by 1 stage.",
			shortDesc: "If a physical attack hits this Pokemon, Defense is lowered by 1, Speed is raised by 1.",
		},
	},
	infuriate: {
		name: "Infuriate",
		desc: "If a physical attack hits this Pokemon, its Attack is raised by 1 stage.",
		shortDesc: "If a physical attack hits this Pokemon, its Attack is raised by 1 stage.",
	},
	whitesmoke: {
		name: "White Smoke",
		shortDesc: "Prevents other Pokemon from lowering this Pokemon's stat stages.",
	},
	wimpout: {
		name: "Wimp Out",
		desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage bringing it to 1/2 or less of its maximum HP, it immediately switches out to a chosen ally. This effect applies after all hits from a multi-hit move; Sheer Force prevents it from activating if the move has a secondary effect. This effect applies to both direct and indirect damage, except Curse and Substitute on use, Belly Drum, Pain Split, and confusion damage.",
		shortDesc: "This Pokemon switches out when it reaches 1/2 or less of its maximum HP.",
	},
	wonderguard: {
		name: "Wonder Guard",
		shortDesc: "This Pokemon can only be damaged by supereffective moves and indirect damage.",
		gen4: {
			shortDesc: "This Pokemon is only damaged by Fire Fang, supereffective moves, indirect damage.",
		},
		gen3: {
			shortDesc: "This Pokemon is only damaged by supereffective moves and indirect damage.",
		},
	},
	wonderskin: {
		name: "Wonder Skin",
		desc: "All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects.",
		shortDesc: "Status moves with accuracy checks are 50% accurate when used on this Pokemon.",
	},
	elusive: {
		name: "Elusive",
		desc: "All non-damaging moves that check accuracy have their accuracy changed to 50% when used on this Pokemon. This change is done before any other accuracy modifying effects.",
		shortDesc: "Status moves with accuracy checks are 50% accurate when used on this Pokemon.",
	},
	zenmode: {
		name: "Zen Mode",
		desc: "If this Pokemon is a Darmanitan or Darmanitan-Galar, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. This Ability cannot be removed or suppressed.",
		shortDesc: "If Darmanitan, at end of turn changes Mode to Standard if > 1/2 max HP, else Zen.",
		gen6: {
			desc: "If this Pokemon is a Darmanitan, it changes to Zen Mode if it has 1/2 or less of its maximum HP at the end of a turn. If Darmanitan's HP is above 1/2 of its maximum HP at the end of a turn, it changes back to Standard Mode. If Darmanitan loses this Ability while in Zen Mode, it reverts to Standard Mode immediately.",
		},

		transform: "Zen Mode triggered!",
		transformEnd: "Zen Mode ended!",
	},
	lazy: {
		name: "Lazy",
		shortDesc: "On switch-in, this Pokemon falls asleep for 2 turns.",
	},
	rebuild: {
		name: "Rebuild",
		desc: "It it wasn't hit by a damaging move, this Pokemon restores 1/8 of its maximum HP, rounded down, at the end of each turn.",
		shortDesc: "If unhit, this Pokemon heals 1/8 of its max HP each turn.",
	},
	content: {
		name: "Content",
		shortDesc: "This Pokemon heals 1/16 of its max HP each turn where it doesnt use a Physical or Special move.",
	},

	// CAP
	mountaineer: {
		name: "Mountaineer",
		shortDesc: "On switch-in, this Pokemon avoids all Rock-type attacks and Stealth Rock.",
	},
	rebound: {
		name: "Rebound",
		desc: "On switch-in, this Pokemon blocks certain status moves and instead uses the move against the original user.",
		shortDesc: "On switch-in, blocks certain status moves and bounces them back to the user.",

		move: "#magiccoat",
	},
	persistent: {
		name: "Persistent",
		desc: "The duration of Gravity, Heal Block, Magic Room, Safeguard, Tailwind, Trick Room, and Wonder Room is increased by 2 turns if the effect is started by this Pokemon.",
		shortDesc: "When used, Gravity/Heal Block/Safeguard/Tailwind/Room effects last 2 more turns.",

		activate: "  [POKEMON] extends [MOVE] by 2 turns!",
	},
	// Gen 9
	angershell: {
			name: "Anger Shell",
			desc: "When this Pokemon has more than 1/2 its maximum HP and takes damage from an attack bringing it to 1/2 or less of its maximum HP, its Attack, Special Attack, and Speed are raised by 1 stage, and its Defense and Speed are lowered by 1 stage. This effect applies after all hits from a multi-hit move. This effect is prevented if the move had a secondary effect removed by the Sheer Force Ability.",
			shortDesc: "When this Pokemon reaches 1/2 or less of its max HP: +1 Atk, Sp. Atk, and Spe; -1 Def and Sp. Def.",
	},
	armortail: {
		name: "Armor Tail",
		desc: "While this Pokemon is active, priority moves from opposing Pokemon that target this Pokemon or its allies are prevented from having an effect.",
		shortDesc: "This Pokemon and its allies are protected from opposing priority moves.",

		block: "#damp",
	},
	beadsofruin: {
		name: "Beads of Ruin",
		shortDesc: "The Sp. Def stat of all other active Pokemon is reduced by 25%.",

		start: "  [POKEMON]'s Beads of Ruin weakened the Sp. Def of all surrounding Pokémon!",
	},
	commander: {
		name: "Commander",
		desc: "If this Pokemon is Tatsugiri and Dondozo is an active ally, Dondozo will swallow this Pokemon. This prevents this Pokemon from acting and boosts all of Dondozo's stats by 2 stages. Attacks targeted at this Pokemon will fail if it has been swallowed. Tatsugiri can still take indirect damage while swallowed.",
		shortDesc: "If ally is Dondozo: this Pokemon cannot act or be hit, +2 to all Dondozo's stats.",
	},
	costar: {
		name: "Costar",
		shortDesc: "On switch-in, this Pokemon copies an ally's stat changes.",

		copyBoost: "  [POKEMON] copied its ally's stat changes!",
	},
	cudchew: {
		name: "Cud Chew",
		desc: "When this Pokemon consumes a berry, it will consume the berry again at the end of the following turn.",
		shortDesc: "If this Pokemon eats a berry, it will consume the berry again at the end of next turn.",
	},
	eartheater: {
		name: "Earth Eater",
		desc: "This Pokemon is immune to Ground-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Ground-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Ground moves; Ground immunity.",
	},
	electromorphosis: {
		name: "Electromorphosis",
		desc: "This Pokemon's next Electric-type move has its damage boosted if it takes direct damage.",
		shortDesc: "This Pokemon becomes charged if it takes direct damage.",

		activate: "  Being hit by [MOVE] charged [POKEMON] with power!",
	},
	goodasgold: {
		name: "Good as Gold",
		shortDesc: "This Pokemon is immune to Status moves.",
	},
	magicshield: {
		name: "Magic Shield",
		shortDesc: "This Pokemon is immune to Status moves.",
	},
	guarddog: {
		name: "Guard Dog",
		shortDesc: "Immune to Intimidate. Intimidated: +1 Attack. Cannot be forced to switch out.",
	},
	hadronengine: {
		name: "Hadron Engine",
		shortDesc: "On switch-in, summons Electric Terrain. Sp. Atk is boosted by 30% in Electric Terrain.",

		start: "  [POKEMON] turned the ground into Electric Terrain, energizing its futuristic engine!",
		activate: "  [POKEMON] used the Electric Terrain to energize its futuristic engine!",
	},
	lingeringaroma: {
		name: "Lingering Aroma",
		desc: "Pokemon making contact with this Pokemon have their Ability changed to Lingering Aroma. Does not affect Pokemon with the As One, Battle Bond, Comatose, Disguise, Gulp Missile, Ice Face, Multitype, Mummy, Power Construct, RKS System, Schooling, Shields Down, Stance Change, or Zen Mode Abilities.",
		shortDesc: "Pokemon making contact with this Pokemon have their Ability changed to Lingering Aroma.",

		changeAbility: "  A lingering aroma clings to [TARGET]!",
	},
	myceliummight: {
		name: "Mycelium Might",
		shortDesc: "This Pokemon's Status moves have lowered priority and ignore their targets' Abilities.",
	},
	opportunist: {
		name: "Opportunist",
		shortDesc: "When an opposing Pokemon recieves stat boosts, this Pokemon gets the same boosts.",
	},
	orichalcumpulse: {
		name: "Orichalcum Pulse",
		shortDesc: "On switch-in, summons Sunny Day. Attack is boosted by 30% in Sunny Day.",

		start: "  [POKEMON] turned the sunlight harsh, sending its ancient pulse into a frenzy!",
		activate: "  [POKEMON] basked in the sunlight, sending its ancient pulse into a frenzy!",
	},
	purifyingsalt: {
		name: "Purifying Salt",
		desc: "This Pokemon cannot become affected by a status condition or Yawn. If a Pokemon uses a Ghost-type attack against this Pokemon, that Pokemon's offensive stat is halved when calculating the damage to this Pokemon.",
		shortDesc: "This Pokemon cannot be statused; Ghost power against it is halved.",
	},
	quarkdrive: {
		name: "Quark Drive",
		desc: "If Electric Terrain is active or this Pokemon has used a held Booster Energy, this Pokemon's highest stat is multiplied by 1.3, or by 1.5 if the highest stat is Speed.",
		shortDesc: "While Electric Terrain or Booster Energy are active, highest stat is 1.3x, or 1.5x if Speed.",

		activate: "  The Electric Terrain activated [POKEMON]'s Quark Drive!",
		activateFromItem: "  [POKEMON] used its Booster Energy to activate its Quark Drive!",
		start: "  [POKEMON]'s [STAT] was heightened!",
		end: "  The effects of [POKEMON]'s Quark Drive wore off!",
	},
	rockypayload: {
		name: "Rocky Payload",
		shortDesc: "This Pokemon's offensive stat is multiplied by 1.5 while using a Rock-type attack.",
	},
	sharpness: {
		name: "Sharpness",
		desc: "This Pokemon's slicing attacks have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's slicing attacks have 1.5x power.",
	},
	seedsower: {
		name: "Seed Sower",
		desc: "When this Pokemon is hit by an attack, the effect of Grassy Terrain begins.",
		shortDesc: "When this Pokemon is hit by an attack, the effect of Grassy Terrain begins.",
	},
	supremeoverlord: {
		name: "Supreme Overlord",
		desc: "This Pokemon's Attack and Special Attack stats are increased by 10% for each fainted teammate.",
		shortDesc: "This Pokemon's Attack and Special Attack raise by 10% per fainted teammate.",

		start: "  [POKEMON] gained strength from the fallen!",
		activate: "  [POKEMON] gained strength from the fallen!",
	},
	swordofruin: {
		name: "Sword of Ruin",
		shortDesc: "The Defense stat of all other active Pokemon is reduced by 25%.",

		start: "  [POKEMON]'s Sword of Ruin weakened the Defense of all surrounding Pokémon!",
	},
	tabletsofruin: {
		name: "Tablets of Ruin",
		shortDesc: "The Attack stat of all other active Pokemon is reduced by 25%.",

		start: "  [POKEMON]'s Tablets of Ruin weakened the Attack of all surrounding Pokémon!",
	},
	thermalexchange: {
		name: "Thermal Exchange",
		desc: "This Pokemon's Attack is raised 1 stage after it is damaged by a Fire-type move. This Pokemon cannot be burned.",
		shortDesc: "This Pokemon's Attack is raised by 1 stage when hit by Fire moves; it can't be burned.",
	},
	toxicdebris: {
		name: "Toxic Debris",
		desc: "When this Pokemon is hit by a physical attack, Toxic Spikes are set on the opposing side of the field.",
		shortDesc: "When this Pokemon is hit by a physical attack, Toxic Spikes are set around the attacker.",
	},
	vesselofruin: {
		name: "Vessel of Ruin",
		shortDesc: "The Sp. Atk stat of all other active Pokemon is reduced by 25%.",

		start: "  [POKEMON]'s Vessel of Ruin weakened the Sp. Atk of all surrounding Pokémon!",
	},
	wellbakedbody: {
		name: "Well-Baked Body",
		desc: "This Pokemon is immune to Fire-type moves and raises its Defense by 2 stages when hit by a Fire-type move.",
		shortDesc: "This Pokemon's Defense is raised 2 stages if hit by a Fire move; Fire immunity.",
	},
	windpower: {
		name: "Wind Power",
		shortDesc: "If this Pokemon is hit by a wind move or Tailwind begins, it becomes charged.",

		activate: "#electromorphosis",
	},
	windrider: {
		name: "Wind Rider",
		desc: "This Pokemon is immune to wind moves and raises its Attack by 1 stage when hit by a wind move. Attack is also raised when Tailwind begins on this Pokemon's side.",
		shortDesc: "If hit by a wind move or Tailwind begins: +1 Attack. Wind move immunity.",
	},
	zerotohero: {
		name: "Zero To Hero",
		shortDesc: "If this Pokemon is Palafin, it changes to Hero Mode when it switches out.",

		activate: "  [POKEMON] underwent a heroic transformation!",
	},
	overshadow: {
		name: "Overshadow",
		shortDesc: "The Atk and Sp. Atk stat of all other shorter foes is reduced by 50%.",

		start: "  [POKEMON]'s Overshadow weakened the Foes offenses!",
	},
	// Insurgence
	// Uranium
	// Sage
	// Xenoverse
	waterstream: {
		name: "Water Stream",
		shortDesc: "This Pokemon receives 1/2 damage from attacks when moving before the foe.",
	},
	// Chromatic
	// Radical Red
	// Tectonic
	conflagrant: {
		name: "Conflagrant",
		shortDesc: "This Pokemon's contact moves have a 30% chance of burning.",
		newmeta: "true",
	},
	dynamo: {
		name: "Dynamo",
		shortDesc: "This Pokemon's contact moves have a 30% chance of paralyzing.",
		newmeta: "true",
	},
	undead: {
		name: "Undead",
		desc: "This Pokemon can hit Normal types with Ghost type moves. Blocks Intimidate/Daunt/Petrify",
		shortDesc: "Ghost moves hit Normal. Blocks Intimidate/Daunt/Petrify",
		newmeta: "true",
	},
	laststand: {
		name: "Last Stand",
		desc: "While this Pokemon has 1/2 or less of its maximum HP, its Speed is boosted 1 stage.",
		shortDesc: "While this Pokemon has 1/2 or less of its max HP, its Speed is boosted 1 stage",
		newmeta: "true",
	},
	snowpacking: {
		name: "Snow Packing",
		desc: "If Hail is active, this Pokemon's Attack is multiplied by 1.5 and it loses 1/8 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its Special Attack remains the same and it does not lose any HP.",
		shortDesc: "If Hail is active, this Pokemon's Atk is 1.5x; loses 1/8 max HP per turn.",
		newmeta: "true",
	},
	gardensgift: {
		name: "Gardens Gift",
		shortDesc: "This Pokemon's Grass type moves have their accuracy and power multiplied by 1.3.",
		newmeta: "true",
	},
	timereverse: {
		name: "Time Reverse",
		shortDesc: "On switch, opponent is forced to use its last landed move.",
		newmeta: "true",
	},
	kicker: {
		name: "Kicker",
		desc: "This Pokemon's kick-based attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's kick-based attacks have 1.2x power.",
		newmeta: "true",
	},
	blademaster: {
		name: "Blade Master",
		desc: "This Pokemon's blade/slash-based attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's blade/slash-based attacks have 1.2x power.",
		newmeta: "true",
	},
	lovelylips: {
		name: "Lovely Lips",
		desc: "This Pokemon's kiss-based attacks have their power multiplied by 1.5.",
		shortDesc: "This Pokemon's kiss-based attacks have 1.5x power.",
		newmeta: "true",
	},
	wisepower: {
		name: "Wise Power",
		shortDesc: "This Pokemon's Special Attack is doubled.",
		newmeta: "true",
	},
	sunbathe: {
		name: "Sunbathe",
		desc: "If Sunny Day is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its HP does not get restored.",
		shortDesc: "If Sunny Day is active, this Pokemon heals 1/16 of its max HP each turn.",
		newmeta: "true",
	},
	expert: {
		name: "Expert",
		desc: "This Pokemon variable power have their power multiplied by 1.3.",
		shortDesc: "This Pokemon variable power have 1.3 power.",
		newmeta: "true",
	},
	artillery: {
		name: "Artillery",
		desc: "This Pokemon's ballistic attacks have their power multiplied by 1.2.",
		shortDesc: "This Pokemon's ballistic attacks have 1.2x power.",
		newmeta: "true",
	},
	orbital: {
		name: "Orbital",
		desc: "Applies Gravity while the bearer is in battle.",
		shortDesc: "Applies Gravity while the bearer is in battle.",
		newmeta: "true",
	},
	bloodsucker: {
		name: "Blood Sucker",
		desc: "Bite moves restore 33% of dealt damage.",
		shortDesc: "Bite moves restore 33% of dealt damage.",
		newmeta: "true",
	},
	// slapper: {
	// 	name: "Slapper",
	// 	desc: "This Pokemon's tail-based attacks have their power multiplied by 1.3.",
	// 	shortDesc: "This Pokemon's tail-based attacks have 1.3x power.",
	// 	newmeta: "true",
	// },
	toxicwasteland: {
		name: "Toxic Wasteland",
		shortDesc: "On switch-in, this Pokemon summons Toxic Cloud.",
		newmeta: "true",
	},
	toxicrush: {
		name: "Toxic Rush",
		desc: "If Toxic Cloud is active, this Pokemon's Speed is doubled.",
		shortDesc: "If Toxic Cloud is active, this Pokemon's Speed is doubled;",
		newmeta: "true",
	},
	parasite: {
        name: "Parasite",
        shortDesc: "Holder gains 1.3x HP from draining moves/Aqua Ring/Ingrain/Leech Seed/Strength Sap.",
		newmeta: "true",
    },
	mythicarcher: {
        name: "Mythic Archer",
        shortDesc: "Changes Physical Non-Contact moves to special.",
		newmeta: "true",
    },
	enthusiasm: {
		name: "Enthusiasm",
		shortDesc: "This Pokemon's Special Attack is 1.5x and accuracy of its special attacks is 0.8x.",
		newmeta: "true",
	},
	hubris: {
		name: "Hubris",
		shortDesc: "This Pokemon's Special Attack is raised by 1 stage if it attacks and KOes another Pokemon.",
		newmeta: "true",
	},
	blazeroar: {
		name: "Blaze Roar",
		desc: "This Pokemon's sound-based moves become Fire type and are x1.1.",
		shortDesc: "This Pokemon's sound-based moves become Fire type and are x1.1.",
		newmeta: "true",
	},
	strongwinds: {
		name: "Strong Winds",
		desc: "This Pokemon's wind-based attacks have 1.2x power.",
		shortDesc: "This Pokemon's wind-based attacks have 1.2x power.",
		newmeta: "true",
	},
	supernova: {
		name: "Supernova",
		desc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Cosmic attacks.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Cosmic attacks.",
		newmeta: "true",
	},
	sacredlight: {
		name: "Sacred Light",
		desc: "Summons Safeguard on switch in. Removed on switch-out.",
		shortDesc: "Summons Safeguard on switch in. Removed on switch-out.",
		newmeta: "true",
	},
	fortitude: {
		name: "Fortitude",
		desc: "This Pokemon's Def, Sp. Def are raised by 1 when it reaches 1/2 or less of its max HP.",
		shortDesc: "This Pokemon's Def, Sp. Def are raised by 1 when it reaches 1/2 or less of its max HP.",
		newmeta: "true",
	},
	sunray: {
		name: "Sunray",
		desc: "If Sunny Day is active, this Pokemon's Light moves have 1.5x power.",
		shortDesc: "If Sunny Day is active, this Pokemon's Light moves have 1.5x power.",
		newmeta: "true",
	},
	illuminate: {
		name: "Illuminate",
		desc: "This Pokemon's moves have their accuracy multiplied by 1.3.",
		shortDesc: "This Pokemon's moves have their accuracy multiplied by 1.3.",
		newmeta: "true",
	},
	perseverance: {
		name: "Perseverance",
		desc: "This Pokemon's Atk, SpAtk, Def, SpDef are x1.25 if its the last one standing.",
		shortDesc: "This Pokemon's Atk, SpAtk, Def, SpDef are x1.25 if its the last one standing.",
		newmeta: "true",
	},
	predator: {
		name: "Predator",
		shortDesc: "This Pokemon's attacks do 1.25x on lighter weight targets.",
		newmeta: "true",
	},
	radiance: {
		name: "Radiance",
		desc: "This Pokemon's Normal-type moves become Light-type moves and have their power multiplied by 1.2. This effect comes after other effects that change a move's type, but before Ion Deluge and Electrify's effects.",
		shortDesc: "This Pokemon's Normal-type moves become Light type and have 1.2x power.",
		newmeta: "true",
	},
	divineguard: {
		name: "Divine Guard",
		desc: "This Pokemon can only be damaged by notveryeffective moves and indirect damage.",
		shortDesc: "This Pokemon can only be damaged by notveryeffective moves and indirect damage.",
		newmeta: "true",
	},
	orchestral: {
		name: "Orchestral",
		desc: "This Pokemon's sound-based moves have their power multiplied by 1.3. This Pokemon takes halved damage from sound-based moves.",
		shortDesc: "This Pokemon receives 1/2 damage from sound moves. Its own have 1.3x power.",
		newmeta: "true",
	},
	visionary: {
		name: "Visionary",
		desc: "Delayed turn moves have their power multiplied by 1.3.",
		shortDesc: "Delayed turn moves have their power multiplied by 1.3.",
		newmeta: "true",
	},
	hideandseek: {
		name: "Hide and Seek",
		desc: "On switch-in, this Pokemon summons a Substitute.",
		shortDesc: "On switch-in, this Pokemon summons a Substitute.",
		newmeta: "true",
	},
	scavenger: {
		name: "Scavenger",
		desc: "50% chance of retrieving a used item at the end of a turn.",
		shortDesc: "50% chance of retrieving a used item at the end of a turn.",
		newmeta: "true",
	},
	malintent: {
		name: "Malintent",
		desc: "This Pokemon sets 2 layers of Toxic Spikes instead of 1.",
		shortDesc: "This Pokemon sets 2 layers of Toxic Spikes instead of 1.",
		newmeta: "true",
	},
	radioactive: {
		name: "Radioactive",
		desc: "Poison and Cosmic type moves have their power amplified by 1.2x.",
		shortDesc: "Poison and Cosmic type moves have their power amplified by 1.2x.",
		newmeta: "true",
	},
	haunted: {
		name: "Haunted",
		desc: "When this Pokemon is fainted, the Pokemon that used the attack that fainted this Pokemon is afflicted with the Curse status.",
		shortDesc: "Applies Curse on faint.",
		newmeta: "true",
	},
	solidfooting: {
		name: "Solid Footing",
		desc: "When switching in, the holder is unaffected by hazards on its side of the field.",
		shortDesc: "When switching in, the holder is unaffected by hazards on its side of the field.",
		newmeta: "true",
	},
	fishmemory: {
		name: "Fish Memory",
		desc: "At the end of the turn, this Pokemon's stat changes dissapear.",
		shortDesc: "At the end of the turn, this Pokemon's stat changes dissapear.",
		newmeta: "true",
	},
	grassygloves: {
		name: "Grassy Gloves",
		desc: "This Pokemon receives 3/4 damage from contact moves.",
		shortDesc: "This Pokemon receives 3/4 damage from contact moves.",
		newmeta: "true",
	},
	lovetouch: {
		name: "Poison Touch",
		desc: "This Pokemon's contact moves have a 30% chance of infatuating.",
		shortDesc: "This Pokemon's contact moves have a 30% chance of infatuating.",
		newmeta: "true",
	},
	perfectmelody: {
		name: "Perfect Melody",
		desc: "Sound moves do not check accuracy. ",
		shortDesc: "Sound moves do not check accuracy. ",
		newmeta: "true",
	},
	toxicintake: {
		name: "Toxic Intake",
		desc: "If Toxic Cloud is active, this Pokemon restores 1/16 of its maximum HP, rounded down, at the end of each turn. If this Pokemon is holding Utility Umbrella, its HP does not get restored.",
		shortDesc: "If Toxic Cloud is active, this Pokemon heals 1/16 of its max HP each turn.",
		newmeta: "true",
	},
	sleepyfellow: {
		name: "Sleepy Fellow",
		desc: "While sleeping the mon has a 10% chance to still use the move selected even though it’s sleeping. ",
		shortDesc: "While sleeping the mon has a 10% chance to still use the move selected even though it’s sleeping. ",
		newmeta: "true",
	},
	herbivore: {
		name: "Herbivore",
		desc: "This Pokemon is immune to Grass-type moves and restores 1/4 of its maximum HP, rounded down, when hit by an Grass-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Grass moves; Grass immunity.",
		newmeta: "true",
	},
	imitation: {
		name: "Imitation",
		desc: "This Pokemon's Speed changes to its opponent one if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemon's Speed changes to its opponent one if it attacks and knocks out another Pokemon.",
		newmeta: "true",
	},
	divinity: {
		name: "Divinity",
		shortDesc: "If this Pokemon is at half HP or more, its Light-type moves have their priority increased by 1.",
		desc: "If HP >= 50%, this Pokemon's Light-type moves have their priority increased by 1.",
		newmeta: "true",
	},
	blizzardgift: {
		name: "Blizzard Gift",
		desc: "If this Pokemon is a Yetitan and Hail is active, it changes to Blizzard Form and the Attack and Special Defense of it and its allies are multiplied by 1.5. If this Pokemon is a Yetitan and it is holding Utility Umbrella, it remains in its regular form and the Attack and Special Defense stats of it and its allies are not boosted. If this Pokemon is a Yetitan in its Blizzard form and is given Utility Umbrella, it will immediately switch back to its regular form. If this Pokemon is a Yetitan holding Utility Umbrella and its item is removed while Hail is active, it will transform into its Blizzard Form. If an ally is holding Utility Umbrella while Yetitan is in its Blizzard Form, they will not receive the Attack and Special Defense boosts.",
		shortDesc: "If user is Yetitan and Hail is active, it and allies' Attack and Sp. Def are 1.5x.",
		newmeta: "true",
	},
	phytogenetic: {
		name: "Phytogenetic",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Grass-type attack.",
		newmeta: "true",
	},
	transmutation: {
		name: "Transmutation",
		desc: "This Pokemon's type changes when a status attempt is made on him. Grants status immunity. Psn/Tox->Poison,Par->Electric,Slp->Psychic,Brn->Fire,Frz->Ice.",
		shortDesc: "Type changes with status attempts. Psn/Tox->Poison,Par->Electric,Slp->Psychic,Brn->Fire,Frz->Ice.",
		newmeta: "true",
	},
	pantheon: {
		name: "Pantheon",
		desc: "If an active ally has this Ability, this Pokemon's highest stat is multiplied by 1.5.",
		shortDesc: "If an active ally has this Ability, this Pokemon's highest stat is 1.5x.",
		newmeta: "true",
	},
	negationfield: {
		name: "Negation Field",
		desc: "Applies Magic Room while the bearer is in battle.",
		shortDesc: "Applies Magic Room while the bearer is in battle.",
		newmeta: "true",
	},
	enchantment: {
		name: "Enchantment",
		desc: "When this Pokemon has 1/3 or less of its maximum HP, rounded down, its attacking stat is multiplied by 1.5 while using a Fairy-type attack.",
		shortDesc: "At 1/3 or less of its max HP, this Pokemon's attacking stat is 1.5x with Fairy attacks.",
		newmeta: "true",
	},
	rushdown: {
		name: "Rushdown",
		desc: "This Pokemon attacking stat is multiplied by 1.5 if it is the user's first turn on the field.",
		shortDesc: "This Pokemon's attacking stat is 1.5x if first turn out.",
		newmeta: "true",
	},
	vitalitydrain: {
		name: "Vitality Drain",
		desc: "This Pokemonis healed 1/4 max hp if it attacks and knocks out another Pokemon.",
		shortDesc: "This Pokemonis healed 1/4 max hp if it attacks and KOes another Pokemon.",
		newmeta: "true",
	},
	paralyzingvenom: {
		name: "Paralyzing Venom",
		desc: "This Pokemon's poisoning moves become paralyzing ones. Don't affect Steel-typed foes.",
		shortDesc: "Psn/Tox effects -> Par effects, don't affect Steel.",
		newmeta: "true",
	},
	famiybonds: {
		name: "Family Bonds",
		desc: "If an active ally has the same type, this Pokemon's STAB is 1.5 x 1.4.",
		shortDesc: "If an active ally has the same type, this Pokemon's STAB is 1.5 x 1.4.",
		newmeta: "true",
	},
	wonderfield: {
		name: "Wonder Field",
		desc: "Applies Wonder Room while the bearer is in battle.",
		shortDesc: "Applies Wonder Room while the bearer is in battle.",
		newmeta: "true",
	},
	stimulating: {
		name: "Stimulating",
		desc: "When this Pokemon's opponent stat stages are raised or lowered, the effect is doubled instead. This Ability does not affect stat stage increases received from Z-Power effects that happen before a Z-Move is used.",
		shortDesc: "When this Pokemon's foe stat stages are raised or lowered, the effect is doubled instead.",
		newmeta: "true",
	},
	remorse: {
		name: "Remorse",
		desc: "If this Pokemon is knocked out, that move's user Attack and Special Attack are lowered 1 stage.",
		shortDesc: "If this Pokemon is KOed, that move's user Atk and Sp.Atk are lowered 1 stage.",
		newmeta: "true",

		damage: "  [POKEMON] was hurt!",
	},
	thunderdelight: {
		name: "Thunder Delight",
		desc: "This Pokemon's Electric moves recover 1/10th of their max HP.",
		shortDesc: "This Pokemon's Electric moves recover 1/10th of their max HP.",
		newmeta: "true",
	},
	ignition: {
		name: "Ignition",
		desc: "This Pokemon is immune to Fire-type moves and restores 1/4 of its maximum HP, rounded down, when hit by a Fire-type move.",
		shortDesc: "This Pokemon heals 1/4 of its max HP when hit by Fire moves; Fire immunity.",
		newmeta: "true",
	},
	backstabber: {
		name: "Backstabber",
		desc: "This pokemon does 1.5x damage to allied Pokémon. This pokemon heals 50% when it attacks an ally directly.",
		shortDesc: "This pokemon does 1.5x damage to allied Pokémon, heals 50% when it attacks an ally directly.",
		newmeta: "true",
	},
	chainstriker: {
		name: "Chain Striker",
		desc: "Damage of moves used on consecutive turns is increased. Max 2x after 5 turns.",
		shortDesc: "Damage of moves used on consecutive turns is increased. Max 2x after 5 turns.",
		newmeta: "true",
	},
	twinned: {
		name: "Twinned",
		desc: "This Pokemons attacks have .75 power but hit both opponents.",
		shortDesc: "This Pokemons attacks have .75 power but hit both opponents",
		newmeta: "true",
	},
	poisoncloak: {
		name: "Poison Cloak",
		desc: "If Toxic Cloud is active, this Pokemon's evasiveness is multiplied by 1.25. This Pokemon takes no damage from Toxic Cloud.",
		shortDesc: "If Toxic Cloud is active, this Pokemon's evasiveness is 1.25x; immunity to Toxic Cloud.",
		newmeta: "true",
	},
	tightgrip: {
		name: "Tight Grip",
		desc: "Holder's partial-trapping moves always last 7 turns.",
		shortDesc: "Holder's partial-trapping moves always last 7 turns.",
		newmeta: "true",
	},
	catastrophic: {
		name: "Catastrophic",
		desc: "While this pokemon is on the field, Weather damage are double.",
		shortDesc: " While this pokemon is on the field, Weather damage are double.",
		newmeta: "true",
	},
	pyrotoxin: {
		name: "Pyrotoxin",
		desc: "Powers up Fire-type moves (x1'3)  if the target is poisoned, and powers up Poison-type moves(x1'3) if the target is burned.",
		shortDesc: "Fire-type moves x1.3 if target poisoned, Poison-type moves x1.3 if the target burned.",
		newmeta: "true",
	},
	envious: {
		name: "Envious",
		desc: "On switch in, this Pokemons Attack is raised by one stage, but only if the opponent has at least one stat boosted.",
		shortDesc: "On switch in, this Pokemons Attack is raised 1 stage if the opponent has at least one stat boosted.",
		newmeta: "true",
	},
	hydrothermal: {
		name: "Hydrothermal",
		desc: "The power of the Pokémon's Water-type moves are boosted in sunshine instead of being weakened (x1.1 boost).",
		shortDesc: "Water-type moves are boosted x1.1 in sunshine instead of being weakened.",
		newmeta: "true",
	},
	camper: {
		name: "Camper",
		desc: "This Pokémon recovers 15% of health and cures status when using two turns charge moves.",
		shortDesc: "This Pokémon recovers 15% of health and cures status when using two turns charge moves.",
		newmeta: "true",
	},
	happyspiker: {
		name: "Happy Spiker",
		desc: "This Pokémon summons two layers instead of one when using Spikes.",
		shortDesc: "This Pokémon summons two layers instead of one when using Spikes.",
		newmeta: "true",
	},
	seer: {
		name: "Seer",
		desc: "This Pokemon can hit Dark types with Psychic-type moves.",
		shortDesc: "Psychic moves hit Dark.",
		newmeta: "true",
	},
	vicarious: {
		name: "Vicarious",
		desc: "This Pokémon copies the foe's boosts, when the foe is boosting.",
		shortDesc: "This Pokémon copies the foe's boosts, when the foe is boosting.",
		newmeta: "true",
	},
	innerdragon: {
		name: "Inner Dragon",
		desc: "This Pokémon Dragon STAB is 2.25, defensive resistances/weaknesses are doubled.",
		shortDesc: "This Pokémon Dragon STAB is 2.25, defensive resistances/weaknesses are doubled.",
		newmeta: "true",
	},
	carapace: {
		name: "Carapace",
		desc: "This Pokémon takes half damage from rock type moves, and double damage from fighting type moves.",
		shortDesc: "This Pokémon takes half damage from rock type moves, and double damage from fighting type moves.",
		newmeta: "true",
	},
	razorrotors: {
		name: "Razor Rotors",
		shortDesc: "This Pokemon's attacking stat is multiplied by 1.5 while using a Flying-type attack.",
	},
	gordianknot: {
		name: "Gordian Knot",
		desc: "This Pokemon traps for one turn foes which hit it with a contact move.",
		shortDesc: "This Pokemon traps for one turn foes which hit it with a contact move.",
	},
	nullspace: {
		name: "Null Space",
		desc: "This Pokemon ignores other Pokemon's Defense and Special Defense stat stages when dealing damage.",
		shortDesc: "This Pokemon ignores other Pokemon's stat stages when dealing damage.",
	},
	rooted: {
		name: "Rooted",
		desc: "This Pokemon Ingrains itself on switch-in, trapping itself.",
		ShortDesc: "This Pokemon uses Ingrain on switch-in.",
	},
	acceleration: {
		name: "Acceleration",
		desc: "The power of this Pokemon's priority moves is multiplied by 1.5.",
		shortDesc: "This Pokemon's priority moves have 1.5x power.",
	},
	clumsy: {
		name: "Clumsy",
		shortDesc: "If this Pokemon is confused, its Attack is 1.5x.",
	},
	starstruck: {
		name: "Starstruck",
		shortDesc: "This Pokemon's attacks don't miss when it has 1/2 or less of its max HP.",
	},
	mistweaver: {
		name: "Mist Weaver",
		shortDesc: "If Misty Terrain is active, this Pokemon's Fairy-type moves have their power multiplied by 1.5..",
	},
	shorttemper: {
		name: "Short Temper",
		shortDesc: "This Pokemon's Atk is raised by 1 when it reaches 1/2 or less of its max HP.",
	},
	breakneck: {
		name: "Breakneck",
		shortDesc: "This Pokemon's moves of 60 power or less have have their priority increased by 1.",
	},
};
