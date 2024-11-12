/**@typedef {import('../../gamedata_typedefs.js').GameData} GameData */
module.exports = {
    signature: "animationAiCollection",
    args: [
        {
            name: "animation",
            type: "string",
            desc: "Choose most relevant animation for {{aiName}}'s phrase or action. BE CAREFULL! You must choose ONLY from this variants: writing_something, ready_to_write_something, read_something, conversation, bow_greeting, kneel, warm_greeting, positive_greeting, worry, pain, love, sadness, idle, angry, rage, disgust, disapproving, admiration, ecstasy, boredom, disbelief, fear, proposing_a_toast, raise_the_cups, drink_alcohol, war_cry, weapon_cheer, happy"
        }        
    ],
    description: `Execute always`,

    /**
     * @param {GameData} gameData 
     */
    check: (gameData) =>{
        return true;
    },

    /**
     * @param {GameData} gameData 
     * @param {Function} runGameEffect
     * @param {string[]} args 
     */
    run: (gameData, runGameEffect, args) => {
        const animation = cleanAndLowercase(args[0]);
        let random_int = 0
        runGameEffect(`
            set_global_variable = {
                name = talk_pose
                value = flag:weapon_cheer
            }
        `);
        switch (animation) {
            case "conversation":
                random_int = getRandomInt(4);
                switch (random_int) {
                    case 1:
                        runGameEffect(`
                            set_global_variable = {
                                name = talk_pose
                                value = flag:conversation_1
                            }
                        `);
                        break;
                    case 2:
                        runGameEffect(`
                            set_global_variable = {
                                name = talk_pose
                                value = flag:conversation_2
                            }
                        `);
                        break;
                    case 3:
                        runGameEffect(`
                            set_global_variable = {
                                name = talk_pose
                                value = flag:conversation_3
                            }
                        `);
                        break;
                    case 4:
                        runGameEffect(`
                            set_global_variable = {
                                name = talk_pose
                                value = flag:conversation_4
                            }
                        `);
                        break;
                }
                break;

            case "bow_greeting":
                random_int = getRandomInt(3);
                switch (random_int) {
                    case 1:
                        runGameEffect(`
                            set_global_variable = {
                                name = talk_pose
                                value = flag:bow_greeting_1
                            }
                        `);
                        break;
                    case 2:
                        runGameEffect(`
                            set_global_variable = {
                                name = talk_pose
                                value = flag:bow_greeting_2
                            }
                        `);
                        break;
                    case 3:
                        runGameEffect(`
                            set_global_variable = {
                                name = talk_pose
                                value = flag:bow_greeting_3
                            }
                        `);
                        break;
                }
                break;

            case "kneel":
                random_int = getRandomInt(3);
                switch (random_int) {
                    case 1:
                        runGameEffect(`
                            set_global_variable = {
                                name = talk_pose
                                value = flag:kneel_1
                            }
                        `);
                        break;
                    case 2:
                        runGameEffect(`
                            set_global_variable = {
                                name = talk_pose
                                value = flag:kneel_2
                            }
                        `);
                        break;
                    case 3:
                        runGameEffect(`
                            set_global_variable = {
                                name = talk_pose
                                value = flag:kneel_3
                            }
                        `);
                        break;
                }
                break;
            case "writing_something":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:is_writing
                    }
                `);
                break;
            case "ready_to_write_something":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:ready_to_write
                    }
                `);
                break;
            case "read_something":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:reading
                    }
                `);
                break;
            case "warm_greeting":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:positive_greeting
                    }
                `);
                break;
            case "positive_greeting":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:positive_greeting
                    }
                `);
                break;
            case "weapon_cheer":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:weapon_cheer
                    }
                `);
                break;
            case "war_cry":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:weapon_cheer
                    }
                `);
                break;
            case "drink_alcohol":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:raise_the_cups
                    }
                `);
                break;
            case "raise_the_cups":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:raise_the_cups
                    }
                `);
                break;
            case "proposing_a_toast":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:raise_the_cups
                    }
                `);
                break;
            case "fear":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:fear
                    }
                `);
                break;
            case "disbelief":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:disbelief
                    }
                `);
                break;
            case "scheme":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:scheme
                    }
                `);
                break;
            case "boredom":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:boredom
                    }
                `);
                break;
            case "ecstasy":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:ecstasy
                    }
                `);
                break;
            case "admiration":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:admiration
                    }
                `);
                break;
            case "disapproving":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:disapproving
                    }
                `);
                break;
            case "disgust":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:disgust
                    }
                `);
                break;
            case "rage":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:rage
                    }
                `);
                break;
            case "angry":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:angry
                    }
                `);
                break;
            case "idle":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:idle
                    }
                `);
                break;
            case "sadness":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:sadness
                    }
                `);
                break;
            case "happy":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:happy
                    }
                `);
                break;
            case "love":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:love
                    }
                `);
                break;
                
            case "pain":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:pain
                    }
                `);
                break;
            case "worry":
                runGameEffect(`
                    set_global_variable = {
                        name = talk_pose
                        value = flag:worry
                    }
                `);
                break;
        }
    },    

    chatMessage: (animation, random_int) =>{
        return `Animation ${animation} ${random_int}`
    },

    chatMessageClass: "neutral-action-message"
}

function cleanAndLowercase(text) {
    return text.replace(/[^a-zA-Z0-9_]/g, '').toLowerCase();
}
function getRandomInt(n) {
    return Math.floor(Math.random() * n) + 1;
  }