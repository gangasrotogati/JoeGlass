function DisplaySkillDescription(element) {
    let text = document.getElementById("skillset").value.substring(0, 5);
    let description = "";
    switch (text) {
        case "Alche":
            description = "This skill enables you to create, identify and use potions, poisons, alchemical items and more.Often, having a background in herbalism is useful as well to harvest the plants needed, or mining to dig up useful minerals like cinnabar.Making an item often costs half the store cost.See Crafting with Alchemy, Page 52."
            break;
        case "Barte":
            description = "You have the ability to discern the price, rarity and general monetary value of an object. You are also adept at buying for less and selling for more. Each success typically reduces the price by 5%."
            break;
        case "Bluff":
            description = "You're great at telling lies and keeping people listening. You can baffle people long enough with something that sounds right, even if it isn't."
            break;
        case "Climb":
            description = "This skill shows how athletic you are as well as how well you deal with leaping and tumbling out of harm’s way."
            break;
        case "Comba":
            description = "This skill determines how well you function as a leader. Roll this skill when combat breaks out on your turn as a free action. Every success grants nearby allies +1 dice to add to a combat (or combat spell) check when they choose. They can divide up how they spend these dice when they make an attack or combat spell. This is only ever on to-hit rolls and never damage. It does increase skill, someone with 2 ranks cannot wield weapons that need 3 (medium weapons) for example."
            break;
        case "Diplo":
            description = "While lying may achieve quicker effects, the results of diplomacy and persuasion last much longer."
            break;
        case "Engin":
            description = "This skill is often used in identifying weak spots in walls, finding hidden passages and figuring out how to operate mechanical devices and siege engines."
            break;
        case "Fanta":
            description = "Many arcane creatures roam the mysterious lands, and you're the one to ask about them."
            break;
        case "Feat ":
            description = "This skill measures your raw physical strength, power through danger and ability to perform strenuous exercise. Great for winning arm wrestling! You may also use this skill immediately if you fail a resistance check to see if you shrug it off anyway."
            break;
        case "Forge":
            description = "Often times, you need to use the old grey matter to decipher a complicate riddle, encode a message and forge vital papers."
            break;
        case "Gathe":
            description = "This is your ability to find valuable information, walk the streets and be a real gumshoe."
            break;
        case "Histo":
            description = "This is your academic knowledge on recalling facts, figures and locations about history and geography."
            break;
        case "Ident":
            description = "This skill notates the characters academic ability when it comes to magic. This skill does not allow you to detect magic, but it gives insight into all sorts of strange things such as why a stream is flowing backwards and the identification of spells, runes and artefacts. It can also lend insight into how to use these items, by helping the character find the command words or activation sequences. It can also list components for rituals."
            break;
        case "Intim":
            description = "This is your ability to seem threatening. It can be used not only to bully people into doing what you want, but also scaring off enemies"
            break;
        case "Medic":
            description = "This skill not only notates your academic knowledge of medicine, but also the practical applications. You may heal the recent wounds of an ally by expending a use of a Healing Kit, healing the DC of the attempt per success (thus DC2 heals 2 HTP, DC5 heals 5) and the healer sets the DC before modifiers. You can also reduce the DC of a medical attempt by the liberal application of leeches, fresher is better!"
            break;
        case "Munda":
            description = "This skill is the academic knowledge of the wild, giving you the ability to know the difference between a dragon, a wyrm and a drake and what strange powers these beasts may hold. It also enables the identification and gathering of plants, the feeding habits of birds and what season something grows and where. It can also identify medical issues with animals and what fungal rot is affecting a tree. "
            break;
        case "Perfo":
            description = "Performance actually covers not just the ability to play instruments, but also the ability to paint, dance, sing, tell jokes, make great speeches and more. A performance in a tavern can often garner a free night of food, drink and lodging in exchange for entertaining the patrons. At the start of the day, roll Vs your performance skill. Everyone gains +1 dice per success, which may later be used to aid yourself or someone else in any skill check other than combat."
            break;
        case "Pick ":
            description = "This skill enables you to break open locks, escape from bindings like handcuffs or rope or slip through thin passages normally inaccessible. Picking locks without the proper tools or any tools at all is always an issue. Characters may be forced to use twigs, pins and sharp daggers to get the lock open. Time is also a problem, as some locks are designed to break tools if not picked delicately. Finally, light conditions are also a nuisance for spotting hidden latches, ratchets and springs."
            break;
        case "Pickp":
            description = "This skill gives you the skills needed to hide things about yourself, juggle, cheat at cards and all sorts of tricks. It makes you skilled at card games and gambling (telling you the rough odds on a horse race, for example). Great for some mundane legerdemain. Of course, it also helps with those with sticky fingers..."
            break;
        case "Relig":
            description = "This skill allows you to identify the heraldry of a monarch or noble and know the proper social conduct in many high society situations. Examples of this include being able to recall any inter-family feuds and rivalry or be able to survive the mind-bending mess of the Fey Courts for a day. It gives insight into various secret rites performed by most religions and any important events they worship."
            break;
        case "Ridin":
            description = "This skill is used when you need to keep your mount under check, most horses would refuse to jump gaps or charge against a dragon, regardless of their training. This skill is used whenever you wish to make a mount perform a task of any complexity. If you wish to force your mount to attack a target for example, you must either pass a single skill check or build up dice over several attempts (if possible)."
            break;
        case "Saili":
            description = "This skill enables you to get the most out of vehicles of all types. In many situations regarding vehicles you'll be able to activate functions and abilities far more frequently than those untrained."
            break;
        case "Savoi":
            description = "The ability to fit in and act like you belong. Regardless of the situation, you can fool anyone into thinking you belong there, and ignore petty issues like identity passes and security concerns."
            break;
        case "Searc":
            description = "This skill is the active version of your perception skills, enabling you to hear far off sounds, smell foul odors and taste the finest wines. It also covers your ability to loot enemies and corpses. This includes skinning, collecting strange venoms and so forth. If you are looking for something specific, you use this skill."
            break;
        case "Sense":
            description = "This skill allows you to learn more about how other people think, such as when they are lying and telling the truth. It can help you read a room (learning who is important or who the host is)."
            break;
        case "Steal":
            description = "Stealth Reaction Rolls: You react to a situation that may reveal you, such as a cursory glance from a guard, a torch passing by you, a creaking floorboard or a rattling door. The target to overcome these situations vary, but are often easier than a scouting manoeuvre. When you react to these situations, you make a stealth check. Stealth Scouting Rolls: Sometimes, you may wish to scout ahead and actively be stealthy. Make a stealth check and keep your pool of successes. As you move and act, your actions may alert the attention of whoever or whatever you're trying to avoid. Minor actions subtract 1 die from the pool, overtly obvious ones subtract up to 3. Sometimes the “heat” dies down as you hide for long periods of time. In these situations, the gamemaster decides if you re-roll your stealth pool."
            break;
        case "Survi":
            description = "This skill enables you to survive in the wilderness, whether this be finding fresh food and water, hunting, trapping, skinning and swimming. It can help locate water in a desert and allow rations to go further. This also covers cooking in general."
            break;
        case "Tinke":
            description = "This skill requires the character to specialise in it, such as Tinkering & Crafting (Blacksmithing) or Tinkering & Crafting (Enchanting). Rather than setting up a forge and making a new job, this skill should rather be used to quickly jury-rig something together. Why pay the leatherworker to make my freshly skinned dragonhide suit? This can be used for all sorts, such as rigging a door to jam shut, or explode a grenade when it opens, removing the risk if an unskilled person does it. Some things can be crafted by anyone (such as a wooden spoon), but you're able to produce more things yourself. You may also use this skill to identify or appraise an object or concept pertaining directly to your craft. When the player wishes to craft something, it probably shouldn't or cannot be done in one sitting. Instead, there should a total number of successes they need to achieve which they contribute to every attempt. The attempt may be once a day, once an hour, or whenever you choose. Multiple people may be able to help, such as with smithing, but you probably cannot have 10 people working on the same diamond!"
            break;
        case "Traps":
            description = "This skill is about finding, setting and disarming traps. It also covers your ability to use rope for applications like tying people up, throwing a grappling hook or lassoing something, plus escaping from similar bonds. This skill gives you the ability to safely disarm it without clever trickery or luck. Detecting traps may not always reveal the entire device, but may reveal where it comes out, or what payload it delivers, or what triggers it, or any combination of these things."
            break;
        case "Wits":
            description = "Some people are good at keeping their wits about them, being able to sense when the situation is off or feels wrong. Why is everyone quiet? Should that priest have 3 arms? This skill is also good for public speaking and decoding ancient languages and knowing the nuances behind them."
            break;
        case "Slash":
            description = "These weapons are reliable and the easiest to use."
            break;
        case "Crush":
            description = "Focuses on higher damage at the expense of utility."
            break;
        case "Pierc":
            description = "Generally good against single targets and duelling."
            break;
        case "Unarm":
            description = "Your ability to punch, kick, wrestle, throw objects and grapple.Has a low skill entry."
            break;
        case "Bows ":
            description = "Benefits from good positioning, using SPE gets the most out of them."
            break;
        case "Gunpo":
            description = "Modern ranged weapons that are slow to reload but are fast to fire and generally have a longer range."
            break;
        case "Fire ":
            description = "On a successful spellcast, for every 6 rolled to-hit, you deal an extra +1 damage per spell level if the spell deals damage."
            break;
        case "Air &":
            description = "The DC of the spell is affected by distance and the conductivity of the target. A far away target, or an insulated target (such as wearing leather) increases the DC by + 1 each.The inverse is true, a close and armoured target decrease the DC by - 1 each."
            break;
        case "Heali":
            description = "Demons and the Undead are harmed terribly by the touch of this magic, taking three times the amount healing as magical damage instead, but this can only be applied by touch or via a weapon."
            break;
        case "Shado":
            description = "These spells work best in the shadows, where there is a stark contrast of light and dark. In bright light, these spells have a DC6. When in pitch black, it becomes DC2.Where the spell materialises does not factor in on the casting.The caster must stand in the dark."
            break;
        case "Motio":
            description = "You automatically rechannel motion spells without the need to make a skill check, but still must pay the mana cost (your spells still fail if another school fails).Objects already moving have lower DC's than stationary ones, more speed lowers this further."
            break;
        case "Earth":
            description = "If you successfully cast another Earth & Nature spell before the end of the next round, you do so at DC-1. Each consecutive Earth & Nature spell reduces it further.This cannot bring it below DC2."
            break;
        case "Water":
            description = "Less accurate spells have lower DCs. Cones, blasts and Area of Effect spells are easier than beams, bolts and touch spells. The wider or greater the area, the DC lowers.The more accurate, the higher the DC."
            break;
        case "Necro":
            description = "By knowing the true name of someone, or by having a fresh drop of their blood, you can more easily command the undead and the living.The more important the item, the lower the DC.The older or less known to the caster, the higher the DC."
            break;
        case "Metal":
            description = "Things remain transmuted on a multiplier of 6’s rolled. Thus, if the duration of a spell is 1 minute, it lasts 1 minute per 6 rolled. If it lasts for 1 hour, it lasts for 1 hour per 6, and so on."
            break;
        case "Divin":
            description = "The more specific the answer or request, the higher the DC. The more open to interpretation or general, the lower the DC."
    }

    document.getElementById("skillDescription").innerHTML = description;
}

function DisplayTraitDescription() {
    let text = document.getElementById("optionalTrait").value
    let description1 = "";
    let description2 = "";
    switch (text) {
        case "Generalist":
            description1 = "Attacking does not prevent you from subsequently moving if you had any movement remaining";
            description2 = "All your skill rolls do not lock out 1's for the purpose of re - rolling failed dice.";
            break;
        case "Specialist":
            if (document.getElementById("race").value == "Human") {
                description1 = "Attacking does not prevent you from subsequently moving if you had any movement remaining";
                description2 = "Pick 1 skill, when making a skill check if you roll 1's you may re - roll them.";
            }
            else {
                description1 = "You are immune to fear and terror causing effects.";
                description2 = "Pick 1 skill, when making a skill check if you roll 1's you may re - roll them.";
            }
            break;
        case "Claws":
            description1 = "When asked to resist a spell, you roll twice and pick the result.";
            description2 = "Your unarmed strikes deal 1d6 (or additional +1d3 if using an unarmed melee weapon) crushing or slashing damage, whichever is more effective. They also act as useful tools, able to slip into locks, gut fish and similar.";
            break;
        case "Frigid North":
            description1 = "When asked to resist a spell, you roll twice and pick the result.";
            description2 = "You ignore the effects of being Tired or Exhaustion, and add +1 when Resisting mundane status effects";
            break;
        case "Ambush":
            description1 = "Your movement speed is Long instead of Medium.";
            description2 = "Ignore armour DR when flanking a foe or surprising them with any weapon.";
            break;
        case "Unnatural Grace":
            description1 = "Your movement speed is Long instead of Medium.";
            description2 = "You ignore terrain movement penalties and gain +2 SPE back per round.";
            break;
        case "Stalwart":
            description1 = "You are immune to mind altering effects and illusions, as well as knockdown and being forcibly moved.";
            description2 = "When making an armour roll, you double the result, up to the maximum coverage number.";
            break;
        case "Strong Grip":
            description1 = "You are immune to mind altering effects and illusions, as well as knockdown and being forcibly moved.";
            description2 = "The SPE cost to multi-attack is reduced by 1 step. If someone spends 15 SPE, a dwarf spends 10. If 10, a dwarf spends 6, to a minimum of 3 instead of 6.";
            break;
        case "Battle Trance":
            description1 = "You are immune to fear and terror causing effects.";
            description2 = "You can continue to fully act, even when below 0 HTP.";
            break;
        case "Impatient":
            description1 = "You can see in pitch black, and can see through magical darkness.";
            description2 = "Extra free turn if they act first.";
            break;
        case "Me First":
            description1 = "You can see in pitch black, and can see through magical darkness.";
            description2 = "You may choose your place in initiative each round.";
            break;
        case "Agile":
            description1 = "You speak all humanoid languages. You are also literate in 2 of them.";
            description2 = "When resisting traps or dodging similar, you roll twice and take the higher result.";
            break;
        case "Sniper Shot":
            description1 = "You speak all humanoid languages. You are also literate in 2 of them.";
            description2 = "Your spells and ranged shots can pass through allies without a chance to hit them.";
            break;
        case "Alert":
            description1 = "You do not need to bring food or water unless they are in a totally desolate place.";
            description2 = "Your enemies do not gain flanking bonuses on yourself and you ignore surprise rounds.";
            break;
        case "Coloured Scales":
            description1 = "You do not need to bring food or water unless they are in a totally desolate place.";
            description2 = "You resist all magical and elemental attacks, taking half damage. Pick one of Fire, Ice, Lightning or Poison & Venom, for which you ignore all damage.";
            break;
    }

    document.getElementById("traitDescription").innerHTML = description1 + '<br>' + description2;

}

function DisplayFeatDescription() {
    let text = document.getElementById("featset").value
    let description = "";
    switch (text) {
        case "Animal Affinity":
            description = "Animals prefer not to attack you and you empathize with them readily. When mounted on a living creature, you make riding checks with DC2.";
            break;
        case "Armour Expert":
            description = "You may freely rest, sleep or perform any action in your armour. You may reroll failed dice when you roll 6’s for armour rolls."
            break;
        case "Arrow Snatch":
            description = "You can roll against your bow & crossbow skill to catch a single arrow fired at you, which must be equal to or greater than the result of the shooter. You may fire it back again instantly if the roll is successful. You may only snatch one arrow per round."
            break;
        case "Beneath Notice":
            description = "You’re often completely ignored by those of a higher social status than yourself, so long as you don’t act overtly. Additionally, people don’t suspect you to be of a higher social status if you act accordingly."
            break;
        case "Better Staunching":
            description = "You Staunch Wounds on a 3+, instead of 5+."
            break;
        case "Blue Blood":
            description = "You’re often completely ignored by those of a lower social status than yourself, so long as you don’t act like a poor person and are well kept. Additionally, people don’t suspect you to be of a lower social status."
            break;
        case "Bowstaff Training":
            description = "Your ranged weapon (if largely wooden) counts as a staff and thus can cast spells through itself. This includes the wooden stocks of guns and crossbows. You may use your weapon to bash someone for 1d3 damage per weight category of the weapon (using ranged weapon skill to hit) and deal crushing damage."
            break;
        case "Brewmaster":
            description = "Potion effects are doubled in some manner when you consume them, such as duration, amount healed and so on. Otherwise, you can consume half a regular dose for the same effect."
            break;
        case "Combat Archery":
            description = "You can fire a ranged weapon when engaged in melee ranged and still receive appropriate bonuses. If you don't move on your turn, you can re-roll your damage on your next turn (you must accept the new result)."
            break;
        case "Day Magic":
            description = "During the day (6:00am to 6:00pm), your magic works at DC-1 on all rolls. Cannot be used with the Night Magic feat."
            break;
        case "Druidic":
            description = "While in forests and likewise, your magic works at DC-2 on all rolls. The does not apply if you're inside an unnatural settlement like a city, ruin or dungeon, except one built and maintained by druidic people."
            break;
        case "Duellist":
            description = "Each successful strike on an enemy increases your damage +1, capping at +5. This resets to 0 if you change target or disengage from your target."
            break;
        case "Ensorcell Item":
            description = "You cast a spell upon an item, such as an arrow, a potion bottle or a pebble. If successful, the spell is then stored in the item until it is used. While stored, the spells mana cost reduces the casters total mana until the item is used or they dismiss the spell. Each time you buy this feat, you can ensorcell an additional item."
            break;
        case "Fantastic Shot":
            description = "Your ranged attacks can bounce off hard surfaces (i.e a surface it wouldn’t stick to) to hit targets around corners and behind cover for half damage."
            break;
        case "Forgettable Face":
            description = "You cannot be easily identified after being met. Wanted posters are useless to catch you."
            break;
        case "Fully Literate":
            description = "Most character should be fairly illiterate, the rest scrape by with their name, a few words and numbers. Your handwriting doesn't look like a horrible scribble also."
            break;
        case "Healthy":
            description = "For every 5 HTP you have maximum, you gain 1 back every hour, so long as your situation is not stressful or strenuous."
            break;
        case "Horseback Archer":
            description = "You may use any ranged weapon from a mount and never suffer penalties related to it."
            break;
        case "Improved Charge":
            description = "The damage you gain from charging is multiplied by x3 instead of x2."
            break;
        case "Improved Disarming":
            description = "When you successfully disarm, you may opt to grab the weapon freely with no penalty or roll (providing you have the inventory space or a free hand)."
            break;
        case "Improved Dual Weapon Fighting":
            description = "You make two separate attacks for dual wielding, rather than one combined strike. Either strike may miss and still enable the other to hit instead of stopping the attack early."
            break;
        case "Inspirational Leader":
            description = "Every time you slay a worthy opponent (GM discretion), you can grant an ally inspiration."
            break;
        case "Lip Reader":
            description = "You can understand what people are saying at a distance, so long as you can see their lips."
            break;
        case "Magic Fingers":
            description = "You may cast one handed as a standard action, rather than a full action."
            break;
        case "Mana-Sensitive":
            description = "You instinctively can sense magic. Touching an item reveals if it has magic (simply Yes or No) and touching someone reveals if they have at least 1 rank in any magic school."
            break;
        case "Military Rank":
            description = "You have a proper military rank and the paperwork to prove it. Work with the GM to decide which rank."
            break;
        case "Mind and Body":
            description = "You may use MAN instead of SPE for extra unarmed attacks. If you choose to do this, your attacks are considered Magical."
            break;
        case "Night Magic":
            description = "During the night (6:00pm to 6:00am), your magic works at DC - 1 on all rolls.Cannot be used with the Day Magic feat."
            break;
        case "Piercing Shots":
            description = "If you score a critical hit with a ranged weapon, you may make a new attack against a target that follows the trajectory of the shot (this can trigger this feat again)."
            break;
        case "Pinning Shot":
            description = "You deal half damage on your next ranged attack to halve the targets movement speed and prevent them from charging."
            break;
        case "Plentiful Ammo":
            description = "You may re-roll an ammunition check and take the better result. You can use similarly shaped ammo to deal Crude piercing damage if you run out (such as pebbles and sticks)."
            break;
        case "Polearm Master":
            description = "If your melee weapon has the [Reaching] quality, you may make a free melee attack against any target who enters your reach weapon's range. You may do this a twice maximum per turn, which resets at the end of your round."
            break;
        case "Precise Shot":
            description = "Enemies do not gain advantages from anything less than total cover. This does not apply to shields."
            break;
        case "Prepared":
            description = "You can retroactively buy equipment, so long as it could have been obtained and it could have been on your person at the time."
            break;
        case "Press The Attack":
            description = "If you use SPE to attack again with a melee weapon, enemies suffer a DC + 1 to hit on their next turn."
            break;
        case "Quick Draw":
            description = "If you are wielding a ranged weapon with a fast action to fire (such as gunpowder weapons or crossbows), you can make a free attack at the start of combat if you act first. You also win initiative if tied to perform this action."
            break;
        case "Quintessence Magic":
            description = "When detecting magic, you know what school it is, even if you don’t have ranks in it."
            break;
        case "Rage":
            description = "For every 5 HTP lost, you gain +1 damage in melee."
            break;
        case "Skill Focus":
            description = "You can pick a non-combat, non-magical skill to specialise in. This can be things like History & Geography (The Great War) or Animals & Nature (Birds). The difficulty in these situations is always DC2."
            break;
        case "Skirmisher":
            description = "You may perform backstabs with a ranged weapon, as long as the ammunition deals piercing damage."
            break;
        case "Sorcerous Familiar":
            description = "You gain a (noncombative) supernatural pet, such as a cat, owl, snake, rat, toad or other similar small mundane creature. The creature gains the [Intelligent] and [Can Speak] Tags and may be summoned and dismissed at will. If you spend 10 minutes concentrating, you may see through the eyes of your familiar. Often after a while, you and the familiar will gain a telepathic bond, able to share emotions. The familiar cannot fly or swim, even if its form permits it."
            break;
        case "Tough":
            description = "You gain +1 damage reduction against all damage types each time you gain this feat. This works with armour, but you cannot block more than 10 damage even if the total result would exceed that."
            break;
        case "Volley Fire":
            description = "Every additional shot you fire with a ranged weapon and SPE deals +1 damage cumulatively per individual attack, this resets at the end of your turn."
            break;
        case "Warmage":
            description = "You need only succeed at one concentration check for multiple spells at once. You do this with the spell with the highest level, then difficulty for tie-breakers."
            break;
        case "Weapon Focus (Melee)":
            description = "Difficulty to hit reduced -1 with a specific melee weapon, such as Longsword, Greataxe, Dagger, etc. You may buy this feat multiple times for a new melee weapon each time."
            break;
        case "Weapon Focus (Range)":
            description = "You pick a specific ranged weapon, such as a Longbow or Rifle. You may re-roll 1's on damage rolls and gain the new result. You may also freely draw that weapon with no penalty."
            break;
        case "Wizardly Training":
            description = "You may re-roll miscasts, and take either result you rolled. Each time you take this feat, you add a new reroll."
            break;
        case "Forceful Spell":
            description = "This spell cannot be counterspelled."
            break;
        case "Penetrating Spell":
            description = "Your magic works on things normally immune to it, but for half duration/damage. This does not overcome Magical Damage Reduction."
            break;
        case "Persistent Spell":
            description = "This doubles spell durations. Spells that normally last for 10 minutes, or until the end of combat, now last 1 hour. Or further at GM discretion."
            break;
        case "Reaching Spell":
            description = "Spells that should require a touch can now be cast at a Short range. Does not increase other spell ranges."
            break;
        case "Seeking Spell":
            description = "This only works on spell that targets a single entity, deals damage and you must be able to see a part of the target. It enables the projectile to curve around bends and obstructions to reach its target, providing the maximum distance doesn't exceed its normal limits."
            break;
        case "Silent Spell":
            description = "You do not need to speak or form words to cast spells. This enables you to cast in areas silenced by magic."
    }

    document.getElementById("featDescription").innerHTML = description;
}

function DisplayFlawDescription() {
    let text = document.getElementById("flawset").value
    let description = "";
    switch (text) {
        case "Addictions":
            description = "You are addicted to a substance like drinking or smoking. Or an act, like dancing or gambling. You must resist or feed your addiction if the opportunity presents itself.";
            break;
        case "Alchemical Distrust":
            description = "You’d never drink a potion, Gods know what’s in it!";
            break;
        case "Amnesia":
            description = "There is an aspect of your past which will come back to haunt you. You should work with your GM to achieve this flaw.";
            break;
        case "Aura of Bad Magic":
            description = "Around you, weird yet minor things happen. Beer goes flat, milk goes sour, cats hiss at you, dogs bark wildly.";
            break;
        case "Bad Temper":
            description = "You get angry with people exceptionally easily.";
            break;
        case "Blabber-Mouth":
            description = "You just enjoy talking too much, often giving away secrets or useful information at the wrong moment.";
            break;
        case "Bloodlust":
            description = "In combat you can barely see reason or be reasoned with.";
            break;
        case "Burn the Witch!":
            description = "You fear magic and magic users, and suffer the Fear or Terror conditions depending on how severe your exposure is.";
            break;
        case "Cannot Ride":
            description = "Most mounts will throw you off, they just don't like you! Even travel by coach makes you sick.";
            break;
        case "Claustrophobia":
            description = "You are afraid of cramped spaces, restraint and a lack of escape.";
            break;
        case "Clean Freak":
            description = "You do not enjoy being unclean, and must avoid actions that make you dirty, or clean yourself before acting.";
            break;
        case "Code Of Honour":
            description = "You have a code of honour that you adhere to. This may be a general code, like 'Defend the weak' or 'Never attack an unarmed man'.";
            break;
        case "Colour Blind":
            description = "You see only in greyscale. This can be an issue identifying potions, gemstones and things like plants";
            break;
        case "Dominant Handed":
            description = "You can never dual-wield, or gain a bonus from wielding a weapon two-handed if it can be wielded one handed. Spellcasting becomes a Full Action";
            break;
        case "Duty":
            description = "You have a duty to someone or a group, such as the army, a church, or a guild.";
            break;
        case "Eldritch Obsessions":
            description = "You cannot ignore any magical artefact, no matter how dangerous!";
            break;
        case "Ex-Army":
            description = "Soldiers, town guards and likewise people know you to be a deserter or turn-coat and react appropriately";
            break;
        case "Fat":
            description = "Armour costs twice as much for you and almost never fits standard sizes. Starving locals eye you dangerously.";
            break;
        case "Finery First":
            description = "You often need to buy the most expensive version of something.";
            break;
        case "Frugal":
            description = "You avoid buying non-essentials, or buy the cheapest item.";
            break;
        case "Glutton":
            description = "You love food, and need twice as much. You often can be swayed with tasty treats, rather than coinage!";
            break;
        case "Grandiose":
            description = "If you must do something, it should always be done with flair.";
            break;
        case "Heritage (Demonic)":
            description = "You cannot enter holy places and suffer triple damage from silver weapons. If you agree to a contract or similar, you cannot break it willingly. Often sects know of you and may hunt you down.";
            break;
        case "Heritage (Fey)":
            description = "You cannot wear or wield iron or steel weapons and armour. You also cannot knowingly lie, but you may be creative with the truth...";
            break;
        case "Heritage (Vampiric)":
            description = "You cannot enter a home or dwelling without permission, you cannot heal in any way during daylight hours (6:00 AM to 6:00 PM).";
            break;
        case "Honest":
            description = "You must tell the truth. You dislike others telling lies also which may cause you to correct them.";
            break;
        case "Illiteracy":
            description = "You are utterly unable to read, or learn to read, in any language.";
            break;
        case "Impatient":
            description = "You dislike the idea of waiting for anything, ambushes are quite the challenge for you!";
            break;
        case "Mania":
            description = "You are fascinated by something, like spiders, artwork, magic, etc. If you often stand still, helplessly studying it or seek it out at poor moments.";
            break;
        case "Miopic":
            description = "You have bad vision, often needing glasses. Visual tasks are difficult if you are not wearing them. This typically means you cannot wear helmets.";
            break;
        case "Narcissistic":
            description = "It’s all about you. Self-preservation, your looks and how others perceive you.";
            break;
        case "Need Source of Element To Cast Spells":
            description = "You need a source of fire, earth, water or similar to be able to cast spells.";
            break;
        case "Nosy":
            description = "If you fail to resist, you cannot help but pry on someone else's business. ";
            break;
        case "Over Spender":
            description = "You always try to buy the more expensive option, or the most of something.";
            break;
        case "Paranoia":
            description = "Whether real or not, you fear that someone, or a group of people, are out to get you.";
            break;
        case "Phobia":
            description = "You have a phobia against something, like water, dark places, heights, spiders, etc. You must resist, otherwise you won't go into that location that contains it.";
            break;
        case "Pious":
            description = "You can only experience a full rest if you complete a ritual of your religion.";
            break;
        case "Possessive":
            description = "You do not enjoy giving things away, or leaving equipment behind. You often refuse an upgrade to keep your old possessions.";
            break;
        case "Pride":
            description = "If it must be done, it must be done right. In addition, you will not allow anyone to take responsibility for any of your actions.";
            break;
        case "Queasy":
            description = "You’d never try anything to heal an ally or aid them if they’re wounded or unconscious.";
            break;
        case "Racist":
            description = "You pick a race such as Human, Dwarf, Goblin, etc. This group will almost never work with you, and you them.";
            break;
        case "Religious Zealot":
            description = "You follow your faith for guidance more often than not, often to extremes.";
            break;
        case "Reputation":
            description = "You have a reputation, either a negative one (such as a criminal) or an important one that cannot be tarnished (such as folk hero).";
            break;
        case "Strict Diet":
            description = "You can only eat, or refuse to eat, certain foods";
            break;
        case "Sickly":
            description = "You do not get a resistance roll against a disease; it must run its full course unless cured.";
            break;
        case "Slow":
            description = "You nearly always act last in initiative.";
            break;
        case "Slow Healer":
            description = "Rather than regaining all your missing HTP when resting, you regain only half your maximum. If you are magically healed, it takes effect one round later.";
            break;
        case "Snobby":
            description = "Nearly anyone below middle class sees you as a pompous git, and react appropriately.";
            break;
        case "Social Stigma":
            description = "You pick a social circle, such as Nobility, Working Class, Nomads, Wizard Guild, etc. This group will almost never work with you, and you them.";
            break;
        case "Ugly":
            description = "You are in some way less attractive and struggle to get on well with people who would normally be attracted to your gender.";
            break;
        case "Unstable Casting":
            description = "When making a miscast roll, roll on the miscast table twice. The GM picks either of the results.";
            break;
        case "Vertigo":
            description = "You cannot function at all when high up, and actively avoid such locations as best as possible.";
    }
    document.getElementById("flawDescription").innerHTML = description;
}

function DisplayJobDescription() {
    let text = document.getElementById("jobset").value
    let description = "";
    switch (text) {
        case "Advisor":
            description = "Many cults start off with high ideals that get corrupted by leaders or their advisors who become power-hungry and dominate and control members' lives. No group with high ideals starts off as a 'cult'; they become one when their errant ways are exposed.";
            break;
        case "Ale-Conner":
            description = 'An ale-conner was an officer appointed yearly at the court-leet of ancient English communities to ensure the quality of bread, ale, and beer, as well as regulating the measures in which they were sold and their prices. There were many different names for this position which varied from place to place: "ale - tasters", gustatores cervisiae, "ale - founders", and "ale - conners". Ale-conners were also often trusted to ensure that the beer was sold at a fair price.';
            break;
        case "Animal Trainer":
            description = "If having a soul means being able to feel love and loyalty and gratitude, then animals are better off than a lot of humans.";
            break;
        case "Apothecary":
            description = "Medicine is not only a science; it is also an art. It does not consist of compounding pills and plasters; it deals with the very processes of life, which must be understood before they may be guided.";
            break;
        case "Assassin":
            description = "Kill a man, and you are an assassin. Kill millions of men, and you are a conqueror. Kill everyone, and you are a god.";
            break;
        case "Barber-Surgeon":
            description = "The barber surgeon, one of the most common European medical practitioners of the Middle Ages, was generally charged with caring for soldiers during and after battle. In this era, surgery was seldom conducted by physicians, but instead by barbers, who, possessing razors and coordination indispensable to their trade, were called upon for numerous tasks ranging from cutting hair to amputating limbs.";
            break;
        case "Bowyer":
            description = "With archery, if you have good gear, you can't blame being bad on anyone but yourself.";
            break;
        case "Carpenter":
            description = "Any jackass can kick down a door, but it takes a good carpenter to build one.";
            break;
        case "Cobbler":
            description = "Be well dressed, behave like a gentleman, and keep your shoes shined.";
            break;
        case "Demonologist":
            description = "Demonology is the study of demons or beliefs about demons, and the hierarchy of demons. They may be nonhuman, separable souls, or discarnate spirits which have never inhabited a body.";
            break;
        case "Dyer":
            description = "You make different colors by combining those colors that already exist.";
            break;
        case "Engineer":
            description = "Failure is central to engineering. Every single calculation that an engineer makes is a failure calculation. Successful engineering is all about understanding how things break or fail.";
            break;
        case "Falconer":
            description = "The quality of decision is like the well-timed swoop of a falcon which enables it to strike and destroy its victim.";
            break;
        case "Farrier":
            description = "A farrier is a specialist in equine hoof care, including the trimming and balancing of horses' hooves and the placing of shoes on their hooves, if necessary. A farrier combines some blacksmith's skills with some veterinarian's skills to care for horses' feet.";
            break;
        case "Fletcher":
            description = "In traditional archery, the male feather, from a cock, is used on the outside of the arrow, while the other two stabilizing feathers are from a female, or hen. Traditional archery lore about feather curvature is that a right handed archer should shoot a right winged feather and right handed helical, and a left handed archer should use the opposite.";
            break;
        case "Footman":
            description = "A footman or footboy is a male domestic worker employed mainly to wait at table or attend a coach or carriage.";
            break;
        case "Forester":
            description = "Conservation means the wise use of the earth and its resources for the lasting good of men.";
            break;
        case "Grave Robber":
            description = "Confession is always weakness. The grave soul keeps its own secrets, and takes its own punishment in silence.";
            break;
        case "Herald":
            description = "A herald, or a herald of arms, is an officer of arms, ranking between pursuivant and king of arms. The title is commonly applied more broadly to all officers of arms. Heralds were originally messengers sent by monarchs or noblemen to convey messages or proclamations—in this sense being the predecessors of modern diplomats.";
            break;
        case "Highway Man":
            description = "A highwayman is a robber who steals from travellers. This type of thief usually travels and robs by horse as compared to a footpad who travels and robs on foot; mounted highwaymen are widely considered to be socially superior to footpads.";
            break;
        case "Knight":
            description = "Knights are low ranking nobles, given a small farm sized plot of land to support them and beholden to military service to their superiors. Knights act as leaders in many militaries, leading units of footmen or operating as part of a cavalry unit.";
            break;
        case "Medic":
            description = "No doctor knows everything. There's a reason why it's called 'practicing' medicine.";
            break;
        case "Merchant":
            description = 'Although the term "merchant" simply refers to one who resells goods to make a profit, there were two main types of merchants during medieval times. Those who bought goods locally or from local wholesalers and sold to those in their area were local merchants, or retailers. Those who engaged in finance or concentrated on long-distance trading in regional or international markets were called great merchants.';
            break;
        case "Militia":
            description = "Military organization of citizens with limited military training, which is available for emergency service, usually for local defense.";
            break;
        case "Noble":
            description = "Noblemen balance an interesting combination of activities and responsibilities in their daily lives. They perform necessary managerial tasks on their lands and with the peasants in their employ, collect and raise funding for military expeditions and social events, practice horseback riding, hunting, and hawking, and meet any additional obligations set upon them by their own masters.";
            break;
        case "Page":
            description = "A young boy served as a page for about seven years, running messages, serving, cleaning clothing and weapons, and learning the basics of combat.";
            break;
        case "Peasant / Serf":
            description = "Serfs in the middle ages were generally peasant farmers who provided manual labor in their master’s land.";
            break;
        case "Priest":
            description = "When compared to the local people, the priesthood is given a higher social standing. This generates widespread resentment and sentiments against the clergy who are seen by the community as seeking self-aggrandizement as opposed to securing the wellbeing of the community.";
            break;
        case "Reeve":
            description = "A reeve is a supervisor appointed by a lord or elected by peasants. A reeve is tasked with overseeing the work of peasants.";
            break;
        case "Sailor":
            description = "Being a sailor means living a lonely and difficult life, as they will often be on the sea for months or even a year at a time. Sailors work from sunrise to sunset. A sailor’s pay depends on his rank; while a common sailor earns very little, a First Mate or Boatswain can take home much more substantial wages.";
            break;
        case "Scribe":
            description = "Scribes make copies of manuscripts. Most books are still made by hand. Specially trained monks carefully cut sheets of parchment, make the ink, write the scripts, bind the pages, and create the covers.";
            break;
        case "Soldier":
            description = "Life as a soldier is brutal and dirty. If you aren't a soldier, it is even rougher than you can probably imagine. Soldiers face the prospect of being struck down by many crude weapons. If you don't perish immediately, you risk being carried off as a prisoner of war. If someone doesn't ransom you, you are as good as gone. ";
            break;
        case "Squire":
            description = "By the current period, squires have evolved over the course of history to be ranked next to nobles in importance. A squire is a man of high standing, who lives on an estate in a rural area. He is an important link between the noble class and the peasants who farm his land.";
            break;
        case "Tailor":
            description = "The duty of tailors is to construct clothes for a small segment of the population. Their work is heavily bound by tradition and limited resources.";
            break;
        case "Tinker":
            description = "Metallurgists, as all craftsmen and artisans, almost always lack the formal education that would inform a methodical intellectual background. However, they are the pioneers of causal thinking based on empirical observation and experimentation";
            break;
        case "Witch":
            description = "There are two types of magic, white magic and black magic. Witches who practice white magic heal others with ointments, potions and forcast the future through clairvoyance. Those who practice black magic are demon worshipers that curse others with their spells. They are considered criminals by society. ";
            break;
        case "Executioner":
            description = "The executioner is not well liked in the community, which is why they wear hoods on the job. In between this job, they normally have jobs such as working a knacker’s yard or butcher.";
            break;
        case "Sin Eater":
            description = "The sin eater's job was to eat a piece of bread that had sat in a place of sin. This way, they could absolve the location of its sins by taking them into themselves. Another job that was not well liked by the community.";
            break;
        case "Leech Collector":
            description = "Involved someone walking into a body of water with no leg protection. A seasonal and underpaid post.";
    }
    document.getElementById("jobDescription").innerHTML = description;
}

function DisplayBeliefDescription() {
    let text = document.getElementById("beliefset").value
    let description = "";
    switch (text) {
        case "The Worshipful Cult of Ironmongers":
            description = "To smith metal is purity of the soul, taking earth, air, water and fire to create a solid item is greatness. Largely unchanging, respect goes to the eldest or most law abiding. Their temples are frequently filled with artwork made of metals. To shape the toughest metals is the best of these, and tiny trinkets of hard metals are worn around the necks as proof of their devotion.";
            break;
        case "The Ideal of the Self":
            description = "It is said that the Gods made man in his own image, and as such, the religion focuses on the self. To be stronger, smarter, more powerful and dominant. To let this gift go to waste is foolish. Cults form around strong leaders, who work together to make one of themselves greater and thus, more holy. Their order is one of strict hierarchy, the first is to be obeyed without question, the second is to be obeyed after him. Even so, the thousandth member has authority over the thousand and first.";
            break;
        case "The Church of Circular Reasoning":
            description = "The holy order of the truth of circular reasoning believe in many orders of deities that have various levels of power and there is no agreement within the religion on which God is superior. Typically a patriarchy, as their main service is akin to a maths lecture and they believe males teach better.They find that the best way to understand the Gods is to observe patterns, sequences and how maths interacts with the world.The arrangement of petals on a flower, the way the tides can be measured.The first believer was a man called Haynes Mahname, who received the holy scriptures from himself in the future.To them, all things end as they started, everything is in some way circular.";
            break;
        case "Followers of the Twin Stags":
            description = "All life begins at the black stag, who is fatherly, old and silent. Life will eventually end when the last bit of the black stag's youth is gone. All life ends at the white stag, who is brotherly, young and cunning. Each death comes to him in the end - where his youth and guile protects each soul to the afterlife. All followers await the day the two stags switch places, and begin the next era - though prophecies are vague and conflicting as to what the events are when this happens, for good or for bad.";
            break;
        case "Minders of Magic":
            description = "The idea that all magic is alive, each spell a part of a mind or entity which magic is the body, blood, soul and especially the mind of. Deeply into the study of magic and the seemingly pulsating nature of leylines, magical winds and likewise natural magical phenomenons. They await the day that contact can be made with the great and seemingly cosmic sized force that is magic itself.";
            break;
        case "The Circle of Sannairrie":
            description = "Largely a state of mind, rather than a deity worship. It teaches about various local powers and spirits (sometimes demigods of note) which are about the local region. Its members speak to nature and its creatures, to best work out harmony with civilisations. Typically, a small shrine is erected in town centres, or the closest point, as respect for nature and its welcome into a city. Named after Sannairrie, who was a legendary figure who was a greedy merchant whom followed a path of self-discovery and became a prominent prophet for nature spirits. Often provides guides for the local woods, they sometimes send representatives to tend to farms in dry seasons. What is important to note is that druids are not peaceful and pacifistic. Some members are barbaric shamans, living in the woods and putting down packs of wolves, herds of deer and stray dragons to keep nature in balance.";
            break;
        case "Fellsworn":
            description = 'A cult that follows the most recent "chosen" warlock, or necromancer. Each one convinced that this time, this evildoer is the one to serve, or else. A hard cult to destroy, as it always rises again whenever there is someone willing to use dark magic for evil, and one willing to follow... It is believed that these teachings are given out by demons and evil spirits, who give power in exchange for worship. Demons gravitate to people who use magic for evil and profane it with dark acts and so many of these cults schism to include a primary element, often darkness, fire, ice, death or whatever magic or act was used to conjure the demon.';
            break;
        case "Pantheon of Winter":
            description = "By worshipping the High Sidhe of the Winter Courts, mortals seek to weather harsh winters and curry favour with Queen Mab, Lady Winter and The Heir of Frost. This religion is much like the real courts, in that they are in deep competition and loathing of their counterpart, the Summer Court.";
            break;
        case "Pantheon of Summer":
            description = "By worshipping the High Sidhe of the Summer Courts, mortals who wish for happiness and health, and to curry favour with Queen Titania, Lady Summer and The Heir of Sun. This religion is much like the real courts, in that they are in deep competition and loathing of their counterpart, the Winter Court.";
    }
    document.getElementById("beliefDescription").innerHTML = description;
}