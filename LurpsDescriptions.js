function DisplaySkillDescription(element) {
    let text = document.getElementById("skillset").value.substring(0, 5);
    let description = "";
    console.log(text);
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
    console.log(document.getElementById("race").value);
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