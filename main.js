// imports
import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs"; 
import {loquacePlugin} from "/src/kaplay-loquace.js"

// initialisation
kaplay({
    width : 960,
    height : 540,
    stretch : true,
    letterbox : true,
    crisp : false,
    // texFilter : 'linear',
    font : 'Schoolbell',
    background: [50, 116, 76],
    canvas: document.querySelector("#game_layout"),
    space: {
            keyboard: ["space"],
          },
    
    plugins: [loquacePlugin], // import the Loquace plugin
});

// Load Font
loadFont('Schoolbell', 'assets/Schoolbell-Regular.ttf');

// Load the sprites and define their animations
loadSprite('title', 'assets/title.png');
loadSprite("dice1", "assets/dice_sprites.png", {
    sliceX: 12,
    sliceY: 6,
    anims: {
        'unselected' : 5,
        'throw' : {
            from : 0,
            to : 5,
            speed : 12,
            loop : false,
        },
        'selected' : {
            from : 6,
            to : 11,
            speed : 12,
            loop : true,
        }
    }
});
loadSprite("dice2", "assets/dice_sprites.png", {
    sliceX: 12,
    sliceY: 6,
    anims: {
        'unselected' : 17,
        'throw' : {
            from : 12,
            to : 17,
            speed : 12,
            loop : false,
        },
        'selected' : {
            from : 17,
            to : 23,
            speed : 12,
            loop : true,
        }
    }
});
loadSprite("dice3", "assets/dice_sprites.png", {
    sliceX: 12,
    sliceY: 6,
    anims: {
        'unselected' : 29,
        'throw' : {
            from : 24,
            to : 29,
            speed : 12,
            loop : false,
        },
        'selected' : {
            from : 30,
            to : 35,
            speed : 12,
            loop : true,
        }
    }
});
loadSprite("dice4", "assets/dice_sprites.png", {
    sliceX: 12,
    sliceY: 6,
    anims: {
        'unselected' : 41,
        'throw' : {
            from : 36,
            to : 41,
            speed : 12,
            loop : false,
        },
        'selected' : {
            from : 42,
            to : 47,
            speed : 12,
            loop : true,
        }
    }
});
loadSprite("dice5", "assets/dice_sprites.png", {
    sliceX: 12,
    sliceY: 6,
    anims: {
        'unselected' : 53,
        'throw' : {
            from : 48,
            to : 53,
            speed : 12,
            loop : false,
        },
        'selected' : {
            from : 54,
            to : 59,
            speed : 12,
            loop : true,
        }
    }
});
loadSprite("dice6", "assets/dice_sprites.png", {
    sliceX: 12,
    sliceY: 6,
    anims: {
        'unselected' : 65,
        'throw' : {
            from : 60,
            to : 65,
            speed : 12,
            loop : false,
        },
        'selected' : {
            from : 66,
            to : 71,
            speed : 12,
            loop : true,
        }
    }
});
loadSprite("d3_dice1", "assets/d3_dice_sprites.png", {
    sliceX: 12,
    sliceY: 3,
    anims: {
        'unselected' : 5,
        'throw' : {
            from : 0,
            to : 5,
            speed : 12,
            loop : false,
        },
        'selected' : {
            from : 6,
            to : 11,
            speed : 12,
            loop : true,
        }
    }
});
loadSprite("d3_dice2", "assets/d3_dice_sprites.png", {
    sliceX: 12,
    sliceY: 3,
    anims: {
        'unselected' : 17,
        'throw' : {
            from : 12,
            to : 17,
            speed : 12,
            loop : false,
        },
        'selected' : {
            from : 18,
            to : 23,
            speed : 12,
            loop : true,
        }
    }
});
loadSprite("d3_dice3", "assets/d3_dice_sprites.png", {
    sliceX: 12,
    sliceY: 3,
    anims: {
        'unselected' : 29,
        'throw' : {
            from : 24,
            to : 29,
            speed : 12,
            loop : false,
        },
        'selected' : {
            from : 30,
            to : 35,
            speed : 12,
            loop : true,
        }
    }
});
loadSprite("nenuphare", "assets/nenuphare.png");
loadSprite("waves", "assets/waves_bounce_v2.png",{
    sliceX: 5,
    sliceY: 1,
    anims: {
        'water' : {
            from : 0,
            to : 4,
            speed : 2,
            pingpong: true,
            loop : true,
        },
    }
});
loadSprite("background", "assets/background.png",);
loadSprite("bubble", "assets/bubbles.png", {
    sliceX: 8,
    sliceY: 1,
    anims: {
        'pop' : {
            from : 0,
            to : 7,
            speed : 8,
            loop : false,
        },
    }
});
loadSprite("toad", 'assets/toad_ico.png');
loadSprite("btn_log", "assets/btn_log.png");
loadSprite("bonus_round_up", 'assets/bonus_round_up.png');
loadSprite("bonus_dice_up", 'assets/bonus_dice_up.png');
loadSprite("bonus_mf", 'assets/bonus_mf.png');
loadSprite("bonus_mt", 'assets/bonus_mt.png');
loadSprite("bonus_dice_type_3", 'assets/bonus_dice_type_3.png');
loadSprite('cursor', 'assets/mouse.png',{
    sliceX : 2,
    sliceY : 1,
    anims : {
        'default' : 0,
        'pointer' : 1,
    }
});

// Sounds Definitions
loadSound('bubbles_01', 'assets/sounds/bubbles_01.mp3');
loadSound('bubbles_02', 'assets/sounds/bubbles_02.mp3');
loadSound('bubbles_03', 'assets/sounds/bubbles_03.mp3');
loadSound('bubbles_04', 'assets/sounds/bubbles_04.mp3');
loadSound('bubbles_05', 'assets/sounds/bubbles_05.mp3');
loadSound('bubbles_06', 'assets/sounds/bubbles_06.mp3');
loadSound('croac_01', 'assets/sounds/croac_01.mp3');
loadSound('croac_02', 'assets/sounds/croac_02.mp3');
loadSound('croac_03', 'assets/sounds/croac_03.mp3');
loadSound('croac_04', 'assets/sounds/croac_04.mp3');
loadSound('croac_05', 'assets/sounds/croac_05.mp3');
loadSound('croac_06', 'assets/sounds/croac_06.mp3');
loadSound('croac_07', 'assets/sounds/croac_07.mp3');
loadSound('croac_08', 'assets/sounds/croac_08.mp3');
loadSound('croac_09', 'assets/sounds/croac_09.mp3');
loadSound('croac_10', 'assets/sounds/croac_10.mp3');
loadSound('dice_roll_01', 'assets/sounds/dice_roll_01.mp3');
loadSound('dice_roll_02', 'assets/sounds/dice_roll_02.mp3');
loadSound('dice_roll_03', 'assets/sounds/dice_roll_03.mp3');
loadSound('dice_roll_04', 'assets/sounds/dice_roll_04.mp3');
loadSound('dice_drone', 'assets/sounds/dice_drone.mp3');
loadSound('click', 'assets/sounds/click.mp3');
loadSound('music', 'assets/sounds/shity_lofi.mp3');

// Dimension :
const width = 960;
const height = 540;
const x_center = width/2;
const y_center = height/2;

// Declare variables
let level = 0;
let round = 1;
let tuto = true; // not really used (The tutorial is "unskippable")
let max_round = 3;
let max_dice = 5;
let dice_type = 6;
let upgrades = ['round_up','dice_up','mf','mt','dice_type_3'];
let upgrades_desc = {
    'round_up' : '[wavey]LANCER SUPPLÉMENTAIRE[/wavey]\nTu obtiens un lancer supplémentaire par manche',
    'dice_up' : '[wavey]DE SUPPLEMENTAIRE[/wavey]\nTu obtiens un dé supplémentaire par manche',
    'mf' : '[wavey]UN PETIT COUP DE BAGUETTE[/wavey]\nTu peux changer la couleur d\'un dé (une fois par manche)',
    'mt' : '[wavey]UN PETIT COUP DE CHAPEAU[/wavey]\nTu relances tous les dés avec une couleur qui n\'est pas actuelllement présente (une fois par manche)',
    'dice_type_3' : '[wavey]UN PETIT COUP DE PINCEAU[/wavey]\nLes dés n\'ont plus que 3 couleurs',
    };
let magic_finger = false;
let magic_throw = false;
let upgrade_pos = [350, 400];
let sprites = [];
let d6_sprites = ['dice1','dice2','dice3','dice4','dice5','dice6'];
let d3_sprites = ['d3_dice1','d3_dice2','d3_dice3'];
let toad_sounds = ['croac_01','croac_02','croac_03','croac_04','croac_05','croac_06','croac_07','croac_08','croac_09','croac_10'];
let roll_sounds = ['dice_roll_01','dice_roll_02','dice_roll_03','dice_roll_04'];

let dice = Object;
let combi = Number;
let round_update = Boolean;
let combi_update = Boolean;
let hover = Boolean;

// Sounds
const drone_sound = play('dice_drone', {volume : 0.08, loop : true, paused : true});
const music = play('music', {volume : 0.2, loop : true});

// Set the layers (obj as default)
setLayers(["bg", 'shadow', "obj", "ui",  'cursor'], "obj")

// Loquace parameters
loquace.init({ 
    showNextPrompt: false,
});

// Define the character
loquace.characters({
    t: { // The character's key used in statements
        name: 'Toad', // The character's name (unused at this time)
        expressions: {
            neutral: 'toad',
            },
        defaultExpression: 'neutral',
        dialogType: 'vn', // default: 'pop', may be 'vn'
        position: 'center', // There is a shorthand for position here (*)
        },
    });

// Update the cursor, when it hovers a dialog
//
function loquace_cursor_update() {

    if (get('loquaceDialog').length == 1) {

        if (get('diag_area') == 0) {

            // Creates an collidable area for the dialog
            const diag_area = add([
                rect(width - 120 - 2*30, 55),
                color(255,255,0),
                pos(160,470), // end position of the diaglog after animation
                opacity(0), // make it invisible
                area(),
                'diag_area'
            ])

        // Update cursor when hovering
        diag_area.onHoverUpdate(() => {custom_cursor(hover = true)});
        diag_area.onHoverEnd(() => {custom_cursor()});
        }
    } else {

        // Destroy the area when there is no dialog
        get('diag_area').forEach(d_a => {destroy(d_a)})
    }
}

// Creates a cursor with custom sprites
function custom_cursor (hover = false) {

    // Destroy the current cursor (avoids overlapping sprites)
    get('cursor').forEach(c => {
                destroy(c)
            })
    
    // Removes the default cursor
    onUpdate(() => setCursor('none'));
    
    // Add the custom cursor
    const cursor = add([
        sprite("cursor", {
            anim : 'default'
        }),
        pos(mousePos()),
        anchor('center'),
        layer("cursor"),
        scale(1),
        'cursor'
    ]);

    // Change the animation if hover is true
    if (hover == true) {
        cursor.play('pointer');
    };

    // Update the cursor position to mouse position at every frame
    onUpdate(() => {cursor.pos = mousePos()})
}

// Creates the background
function set_background (){

    // Destroy the current background
    get('bubbles').forEach(b => {
                destroy(b)
            })

    get('background_elem').forEach(b => {
                destroy(b)
            })
    
    // Add the background elements
    const background_img = add([
        sprite('background'),
        // anchor('center'),
        pos(0,0),
        fixed(),
        layer('bg'),
        scale(1),
        'background_elem'
    ])

    const waves = add([
        sprite('waves', {
        // tiled: true,
        width: width - 50,
        height: height + 50,
        anim: 'water'}),
        anchor('center'),
        pos(x_center,y_center),
        fixed(),
        layer('bg'),
        scale(),
        'background_elem'
    ])
    
    const board = add([
        sprite('nenuphare'),
        pos(x_center,y_center-60),
        anchor('center'),
        scale(1.1),
        fixed(),
        layer('bg'),
        'background_elem'
    ])
};

// Random bubbles for fun
function pop_bubble() {

        // Bubble sounds list
        const bubble_sounds = ['bubbles_01','bubbles_02','bubbles_03','bubbles_04','bubbles_05','bubbles_06'];

        // Create a bubble
        const bubbles = add([
            sprite('bubble', {
                anim: 'pop',
                }),
            scale(1),
            layer('bg'),
            fixed(),
            'bubbles'
            ]);
        
        // Defines the range of x and y coordinates (within the water area)
        const range_x = Array.from({length: (width*.85- width*.15)}, (v,i) => width*.15 + i);
        const range_y = Array.from({length: (height*.75 - height*.25)}, (v,i) => height*.25 + i);
        
        // Get random coordinates
        let rand_x = range_x[Math.floor(Math.random()*range_x.length)];
        let rand_y = range_y[Math.floor(Math.random()*range_y.length)];
        bubbles.pos = vec2(rand_x,rand_y);
        
        // Play a random bubble sound
        const bubble_sound = play(
            bubble_sounds[Math.floor(Math.random()*bubble_sounds.length)], {
            volume : 0.1,
            });
        
        // Reclall the function after a random delay
        const rand_delay = Math.floor(Math.random()*2000) + 1000;        
        setTimeout(pop_bubble, rand_delay);
    };

// Function to display error messages
function message_error(msg) {

    // Create the loquace dialog with the error message
    let error_msg = 't ' + msg;
    loquace.script([
        error_msg
    ])

    // Random toad sound
    const toad_sound = play(toad_sounds[Math.floor(Math.random()*toad_sounds.length)], {
                volume : 0.3,
            });
    
    // Destroy the message after 1.5 seconds
    setTimeout(() => {loquace.clear();}, 1500);
}

// Check the combinaison of the dices
function check_combi(dice_values) {

    const counts = {};
  
    // Count occurrences of each number
    for (const value of dice_values) {
        counts[value] = (counts[value] || 0) + 1;
    }
    
    const frequencies = Object.values(counts);
    // Sort frequencies for easier pattern matching
    frequencies.sort((a, b) => b - a);
  
    // Identify patterns
    if (frequencies[0] === 6) return 6;
    if (frequencies[0] === 5) return 5;
    if (frequencies[0] === 4) return 4;
    // if (frequencies[0] === 3 && frequencies[1] === 2) return 'un Full';
    if (frequencies[0] === 3) return 3;
    // if (frequencies[0] === 2 && frequencies[1] === 2) return 'Deux Paire';
    if (frequencies[0] === 2) return 2;
  
    return 0;
}

// Get the values of the dices
function get_current_values() {

    // Get the current dices and their values
    const current_dices = get('dice');
    const current_values = [];
    current_dices.forEach(dice => {
        current_values.push(dice.value)
    });

    return current_values
}

// Function to create buttons. Derived from the Kaplay examples (https://play.kaplayjs.com/?example=button)
function addButton(
    txt = "start game",
    p = vec2(200, 100),
    tag = '',
    call_fct){

    // Destroy the current button with the same tag (avoid overlapping buttons)
    get(tag).forEach(btn =>{destroy(btn)})
    
    // add a parent background object
    const btn = add([
        sprite('btn_log'),
        pos(p),
        area(),
        scale(1),
        anchor("center"),
        outline(4),
        color(255, 255, 255),
        animate(),
        scale(.8),
        layer("ui"),
        'active',
        'btn'
    ]);

    // add a child object that displays the text
    btn.add([
        text(txt),
        pos(0,5),
        anchor("center"),
        color(39, 7, 0),
    ]);

    // onHoverUpdate() comes from area() component
    // it runs every frame when the object is being hovered
    btn.onHoverUpdate(() => {
        btn.animate('scale', [vec2(.8), vec2(.9)], {
            duration : .6,
            direction : 'ping-pong',
            loop : true
            });
        custom_cursor(hover = true);
    });

    // onHoverEnd() comes from area() component
    // it runs once when the object stopped being hovered
    btn.onHoverEnd(() => {
        btn.scale = vec2(.8);
        btn.unanimate('scale');
        custom_cursor();
    });

    // Add custom tag
    if (tag != '') {
        btn.tag(tag)
    }

    // onClick() comes from area() component
    // it runs once when the object is clicked
    btn.onClick(()=>{
        play('click', {volume : 0.3,});
        // Calls function only if the button is active
        if (btn.tags.includes('active')) {
            call_fct();
        }});
}

// Get the possible values for the magic throw upgrade (values that are not currently on the board)
function get_possible_values(n_face) {

    // Get the current values
    let current_values = get_current_values();

    // Get the possible values by filtering the current values from the total possible values
    let possible_values = [...Array(n_face).keys()];
    possible_values = possible_values.filter(x => !current_values.includes(x));
    
    // Update the text and round counter
    text_update();
    round+=1;

    return possible_values
}

// Function to throw the dice and update the board accordingly
function throw_dice() {

    if (round == 1) {

        // Relocates the throw button after first throw
        let throw_btn = get('throw_btn')[0];
        destroy(throw_btn);
        addButton('Lance les Dés', vec2(x_center-180,y_center+100), 'throw_btn', throw_dice);

        // Adds the "magic finger" button if the player has the upgrade
        if (magic_finger == true) {

            const mf_icon = add([
                sprite('bonus_mf'),
                pos(350, y_center+155),
                anchor('center'),
                area(),
                scale(1.3,1.3),
                animate(),
                'bonus_ico',
                'mf_btn'
            ]);

            mf_icon.onClick(() => {

                play('click', {volume : 0.3,});
                
                if (get('selected').length == 1){
                    
                    // Get the position of the selected dice
                    let dice_pos = [];
                    get('selected').forEach(dice => {
                        dice_pos.push(dice.pos)
                    });

                    // Create the color picker for each possible color (depends on the dice type)
                    for (let i = 0; i <= dice_type - 1 ; i++) {
                        console.log(dice_pos[0])
                        color_picker(i, dice_pos[0].x, dice_pos[0].y)
                        }
                    
                    // Update the texts and round counter
                    text_update();
                    round+=1;
                    destroy(mf_icon);

                } else {
                    // Message error if none or more than one dice is selected
                    message_error('Tu dois sélectionner un seul dé pour utiliser ce pouvoir.')
                }
            })
        }
        
        // Adds the "magic throw" button if the player has the upgrade
        if (magic_throw == true) {

            // Position varies if the player has the "magic finger" upgrade
            let x_pos = 350;
            if (get('bonus_ico').length > 0){
                x_pos = 400;
            }

            const mt_icon = add([
                sprite('bonus_mt'),
                pos(x_pos, y_center+155),
                anchor('center'),
                area(),
                scale(1.3,1.3),
                animate(),
                'bonus_ico',
                'mt_btn'
            ]);

            mt_icon.onClick(() => {

                play('click', {volume : 0.3,});
                
                // Get the possible values
                let possible_value = get_possible_values(dice_type);
                let dice_pos = [];

                // Get the position of the selected dices and destroy them
                get('dice').forEach(dice => {
                    dice.tag('selected')
                    dice_pos.push(dice.pos)
                    destroy(dice)
                });

                // Create new dices with the possible values
                dice_pos.forEach(p => {
                    create_dice(dice_type, p.x, p.y, possible_value[Math.floor(Math.random()*possible_value.length)])
                });

                destroy(mt_icon);
            })

        }

        // Change mouse spirite when hovering the bonus icons
        get('bonus_ico').forEach(b => {
            b.onHoverUpdate(() => {
                custom_cursor(hover = true);
                });

            b.onHoverEnd(() => {
                custom_cursor();
                });
            })
    }

    // Get the selected dices
    const selected_dices = get('selected');

    if (round > 1 & selected_dices.length == 0) {
        // Message error if no dice are selected
        return message_error(`Tu n'as pas sélectionné de dés !`);
        
    }

    // Destroy the bonus icons after last round
    if (round == max_round) {
        get('bonus_ico').forEach(b => {
            destroy(b)
        })
    }

    if (round <= max_round){

        // First Round Initialisation
        if (get('dice').length == 0) {

            // Tutorial for the first round of the first level
            if (tuto == true) {
                
                tuto = false;

                // Plays a random toad sound
                const toad_sound = play(toad_sounds[Math.floor(Math.random()*toad_sounds.length)], {volume : 0.3,});

                // Plays a sound for each click triggering loquace dialog
                let click_count = 0;
                onMousePress(() => {
                    if (click_count < 2) {
                    const toad_sound = play(toad_sounds[Math.floor(Math.random()*toad_sounds.length)], {volume : 0.3,});
                    click_count += 1;}
                    });
                
                // Tutorial messages
                loquace.script([
                    "enableNextPrompt t Oh non ! Tu n'a aucun dé identiques.",
                    "enableNextPrompt t Clique sur les dés pour les sélectionner",
                    `disableNextPrompt t Puis appuie sur le bouton [bold]Lance les dés[/bold] pour lancer les dés sélectionnés`,
                ])
                
                onUpdate(() => {

                    if(get('loquaceDialog').length == 1){
                    const diag_text = get('loquaceDialog')[0]['children'][1]
                    diag_text.textStyles = {
                    "bold": (idx, ch) => ({
                    scale: wave(1.3, 1.4, time() * 5),
                    color: rgb(0,0,0)
                    }), 
                }}})
                


                // Create the dices in a centered position
                for (let i = 0; i < max_dice; i++) {
                
                    let dice_offset = i - Math.floor(max_dice/2);


                const x = x_center + dice_offset*84;
                dice = create_dice(dice_type, x,200,i);
                }
            } else {

                // Create the dices in a centered position (according to the number of dices)
                for (let i = 0; i < max_dice; i++) {

                    let dice_offset = i - Math.floor(max_dice/2);
                    if (max_dice%2 == 0) {
                        dice_offset = i - max_dice/2 + 0.5;
                    }
                    const x = x_center + dice_offset*84;
                    dice = create_dice(dice_type, x,200,);
                
                }}
                
        } else {

            // Get the position of the selected dices, destroy them and create new ones at the same position
            let dice_pos = [];
            selected_dices.forEach(dice => {
                dice_pos.push(dice.pos)
            });

            selected_dices.forEach(dice => {
                destroy(dice)
            })
            
            dice_pos.forEach(p => {
                create_dice(dice_type, p.x, p.y)
            });

        }

        text_update();
        round+=1;

    } else {

        // Message error if no rounds are left
        message_error(`Oh non, tu n'as plus de Lancer !`);
    }
}

// Function to add shadows to the text
function add_text_shadow(text_tag,input_text) {

    // Get information of the text object
    let pos_x = get(text_tag)[0].pos.x + 2;
    let pos_y = get(text_tag)[0].pos.y + 2;
    let text_align = get(text_tag)[0].align;
    let text_anchor = get(text_tag)[0].anchor;
    let text_size = get(text_tag)[0].textSize;
    let text_width = get(text_tag)[0].width;

    // create a shadow text with an offset position
    return add([
        text(input_text, {size : text_size, align : text_align, width : text_width}),
        pos(pos_x, pos_y),
        anchor(text_anchor),
        color(0,0,0),
        layer('shadow'),
        opacity(.8),
        text_tag,
        'text_shadow'
    ]);
}

// Update the text information (round counter and combinaison)
function text_update(round_update = true, combi_update = true) {

    // Get the current combinaison and values
    let current_values = get_current_values();
    combi = check_combi(current_values);

    // Updtate the combinaison text
    if (combi_update == true){

        get('combi_txt').forEach(txt => {
                destroy(txt)
            })
        
        if (combi >= level+1) {
            
            // Text with wave effect for wining combinaison
            const current_combi = add([
                pos(width-150,y_center+155),
                anchor('right'),
                text(`Dés identiques : ${combi}/${level+1}`,{
                transform: (idx, ch) => ({
                    pos: vec2(wave(-4, 4, time()*3  + idx * 0.5), 0),
                    scale: wave(1, 1.2, time() * 3 + idx),
                    angle: wave(-9, 9, time() * 3 + idx),
                    }),
                }),
                color(0,0,0),
                opacity(.6),
                layer("shadow"),
                'info_txt',
                'combi_txt'
                ]);
            
            current_combi.add([
                pos(2,2),
                anchor('right'),
                text(`Dés identiques : ${combi}/${level+1}`,{
                    transform: (idx, ch) => ({
                        color: hsl2rgb((time() + idx * 0.1) % 1, 0.7, 0.8),
                        pos: vec2(wave(-4, 4, time()*3  + idx * 0.5), 0),
                        scale: wave(1, 1.2, time() * 3 + idx),
                        angle: wave(-9, 9, time() * 3 + idx),
                    }),
                }),
                opacity(1),
                layer("ui"),
                'info_txt',
                'combi_txt'
                ]);
        
        } else {
            const current_combi = add([
                pos(width-150,y_center+155),
                anchor('right'),
                text(`Dés identiques : ${combi}/${level+1}`),
                layer("ui"),
                'info_txt',
                'combi_txt'
                ]);
            
            // Add shadow
            add_text_shadow('combi_txt',`Dés identiques : ${combi}/${level+1}`);
        };
    
    // Updtate the round counter text
    if (round_update == true) {

        get('round_txt').forEach(txt => {
                destroy(txt)
            })

        const round_txt = add([
            pos(150,y_center+155),
            anchor('left'),
            text(`Lancer : ${round}/${max_round}`),
            layer("ui"),
            'info_txt',
            'round_txt'
        ]);

        // Add shadow
        add_text_shadow('round_txt', `Lancer : ${round}/${max_round}`)
    }
    
}}

// Function to create a dice with the given parameters (number of faces, position and value)
function create_dice(n_face, pos_x, pos_y, dice_value = Math.floor(Math.random() * n_face)) {

    // Play a random roll sound
    const roll_sound = play(roll_sounds[Math.floor(Math.random()*roll_sounds.length)], {volume : 0.03,});

    // Choose the sprite according to the number of faces of the dice
    if (n_face === 3) {
        sprites = d3_sprites
    } else {
        sprites = d6_sprites
    }

    // Create the dice with the given parameters
    const dice = add([
        
        sprite(sprites[dice_value],
            {anim: 'throw'}),
        pos(pos_x,pos_y),
        area(),
        anchor("center"),
        {value: dice_value},
        scale(3),
        layer("obj"),
        'dice',
        'unselected',
    ])

    // Animate the dice whe hovered
    dice.onHoverUpdate(() => {
        const t = time();
        dice.scale = vec2(2.8 + (t%1)/2.5)
        custom_cursor(hover = true);
    });

    dice.onHoverEnd(()=>{
        dice.scale = vec2(2.8);
        custom_cursor();
    })

    // Recreates the end level button
    function to_result_phase() {
        go('result_phase', combi)
    }
    addButton("Terminer La Manche", vec2(x_center+180,y_center+100), 'end_btn',to_result_phase)
    text_update(round_update = false, combi_update = true);
}

// Function to create the color picker when the player triggers the "magic finger" upgrade
function color_picker (i, pos_x, pos_y) {
    
    // Define the offset for the dices accordin to dice type
    let col_offset = i - dice_type/2 + 0.5;
    let x = x_center+col_offset*84;

    if (dice_type%2 != 0) {
        col_offset = i + Math.floor(dice_type/2)
    }

    // Deactivate the buttons while the bonus is up
    get('btn').forEach((b) => {
            b.untag('active');
        });

    // background and text for the bonus
    const back = add([
        rect(520,175, {radius: 20}),
        pos(x_center,y_center-27),
        color(87, 71, 66),
        opacity(0.4),
        outline(4),
        anchor('center'),
        layer('obj'),
        'color_pick_bg',
        'color_pick'
    ])

    back.add([
        text('Choisis une couleur', {size : 52}),
        pos(0,-40),
        anchor('center'),
        ])
    
    // Creates the dice sprite for each possible color
    const choose_color = add([
        sprite(sprites[i],
            {anim: 'unselected'}),
        pos(x,285),
        area(),
        anchor("center"),
        layer("obj"),
        { value: i},
        scale(3),
        layer('ui'),
        'color_pick'
    ])

    // Animate dice
    choose_color.onHoverUpdate(() => {
        const t = time();
        choose_color.scale = vec2(2.8 + (t%1)/2.5)
        custom_cursor(hover = true);
    });

    choose_color.onHoverEnd(()=>{
        choose_color.scale = vec2(2.8);
        custom_cursor();
    });

    const selected_dices = get('selected');

    // When dice is clicked
    choose_color.onClick(() => {

        // Change the color of the selected dice (before using the bonus)
        destroy(selected_dices[0]);
        create_dice(dice_type, pos_x, pos_y, choose_color.value);

        // Destroy the color picker "interface"
        get('color_pick').forEach((c) => {
            destroy(c);
        });

        // Reactivate the buttons
        get('btn').forEach((b) => {
            b.tag('active');
            });

    })
}

// Switch the status of the dice between selected and unselected
function switch_status(dice) {

    play('click', {volume : 0.3,});

    if (dice.is('unselected')) {
        dice.tag('selected')
        dice.untag('unselected')
        dice.play('selected')
        drone_sound.paused = false; // play drone sound
        
    } else {
        dice.tag('unselected')
        dice.untag('selected')
        dice.play('unselected')
    }
}

// Define the strat scene
scene('start', ()=>{
    
    // Initiate the background, bubbles and custom cursor
    set_background();
    pop_bubble();
    custom_cursor();

    // Add the title and animate it
    const title = add([
        sprite('title'),
        pos(x_center,y_center - 55),
        anchor('center'),
        layer('ui'),
        scale(1.8),
        animate(),
        rotate(0),
        'title'
    ]);

    title.animate(
            'scale', [vec2(1.7), vec2(2)], {
                duration : 4.1,
                direction : 'ping-pong',
                loop : true
            });
    title.animate('angle', [-10,5], {
                duration : 2.2,
                direction : 'ping-pong',
                loop : true
            });
    
    // Start button to go to the intro scene
    const start_btn = addButton('Jouer', 
                                vec2(x_center, y_center + 100),
                                'start_btn',
                                to_intro);

    
});

// Functions can't be passed with a parameter in the onClick function
// so we need to create a function that calls the go function with the right parameter
function to_intro() {
    go('intro');
}

// Define the Intro scene
scene('intro', ()=>{

    // Initiate the background and custom cursor
    set_background();
    custom_cursor();
    // Switch to game scene when the dialog is finished
    onUpdate(() => {
        loquace_cursor_update();
        if (get('loquaceDialog').length == 0) {
            to_dice_phase();
        }
    });

    // Plays a random toad sound
    const toad_sound = play(toad_sounds[Math.floor(Math.random()*toad_sounds.length)], {volume : 0.3,});
    let click_count = 0;
    
    // Shows next dialog and plays toad sound
    onMousePress(() => {
        loquace.next()

        if (click_count < 3) {
            const toad_sound = play(toad_sounds[Math.floor(Math.random()*toad_sounds.length)], {volume : 0.3,});
            click_count += 1;
        }        
        });

    // Intro text
    loquace.script([
        "enableNextPrompt t Salut, je suis Todds, Bienvenue dans mon étang !",
        "enableNextPrompt t Ca te dis une petite partie de dés ?",
        "enableNextPrompt t C'est très simple, le but du jeu est d'obtenir plusieurs dés de la même couleur !",
        "enableNextPrompt t Allez c'est parti, je vais t'expliquer comment jouer !"
        ])
    });

function throw_dice_secu() {
    // Prevents clicking on a button of the next scene accidently
    setTimeout(() => {throw_dice()}, 1)
}

// Define the game scene
scene('dice_phase', ()=>{
    
    // Initiate the background and custom cursor
    custom_cursor();
    set_background();
    onUpdate(() => {
        loquace_cursor_update();
        if (get('selected').length > 0) {
            drone_sound.paused = false;} else {drone_sound.paused = true;}
    });
    onMousePress(() => {loquace.next()});

    // Current level text with wave effect and rainbow colors for the number of dices to get
    const current_level = add([
        pos(x_center,65),
        anchor('center'),
        text(
            `[wavey]Lance au moins [rainbow]${level+1}[/rainbow] identiques ![/wavey]`,{
            styles: {
                "wavey": (idx, ch) => ({
                    pos: vec2(0, wave(-4, 4, time() * .5 + idx * 0.5)),
                    }),
                "rainbow": (idx, ch) => ({
                    color: hsl2rgb((time() * 0.2 + idx * 0.1) % 1, 0.7, 0.8),
                    }),
                },
            },
        ),
        layer("ui"),
        'level_txt'
        ]);
    
    // Initiate the round, and add the throw button
    round = 1;
    addButton("Lance Les Dés !", vec2(x_center,  y_center+80), 'throw_btn', throw_dice_secu);

    onClick('dice', (dice) => 
        switch_status(dice))
})

function to_dice_phase() {
                go('dice_phase');
                level += 1;
            };

// Define the result scene
scene('result_phase', (combi)=>{

    // Initiate the background and custom cursor
    set_background();
    onUpdate(() => loquace_cursor_update());
    drone_sound.paused = true; // Stop the drone sound when the result scene is loaded
    
    // Plays a random toad sound
    const toad_sound = play(toad_sounds[Math.floor(Math.random()*toad_sounds.length)], {
                volume : 0.3,
            });
    
    // Message if the player wins the level
    if (combi >= level+1){

        if (level < 4){

            // Default set of messages
            loquace.script([
                            [`disableNextPrompt t Bravo tu as réussi, mais sera-tu capable d'obtenir au moins ${level + 2} dés de la même couleur ?`,
                            `disableNextPrompt t C'était facile, non ? Essaye de tirer au moins ${level + 2} dés de la même couleur ?`,
                            `disableNextPrompt t Pas mal du tout, mais penses-tu pouvoir faire mieux et obtenir au moins ${level + 2} identiques ?`,
                            `disableNextPrompt t Tu t'en sors bien ! Seras-tu capable d'obtenir au moins ${level + 2} identiques ?`,
                            `disableNextPrompt t Joli l'ami ! Essaye d'obtenir au moins ${level + 2} dés identiques ?`,
                            ]
                        ])
            
            // Set of messages if the player wins the level on the first try
            if (round == 2) {
                loquace.script([
                [`disableNextPrompt t Whoaa, tu as réussi du premier coup ! Tu pesnse pouvoir le refaire avec ${level + 2} dés ?`,
                 `disableNextPrompt t Bingo ! Tu as réussi du premier coup. c'était juste un coup de bol ou tu peux le refaire avec ${level + 2} dés ?`,
                ]
            ])
            }

            // Set of messages if the player does better than the requirement of the level
            if (combi > level + 1) {
                
                loquace.script([
                    [`disableNextPrompt t On dirait que c'était trop facile ! Auras-tu à nouveau assez de chance pour obtenir au moins ${level + 2} dés identiques ?`,
                     `disableNextPrompt t Bravo tu même réussi a obtenir plus que ${level+1} dés identiques. Tu penses avoir assez de chance pour obtenir au moins ${level + 2} dés identiques ?`,
                     `disableNextPrompt t Incroyable, tu as obtenu ${combi} dés identiques ! On va voir si tu as toujours de la chance, lance au moins ${level + 2} dés identiques ?`,
                    ]
                ])
            }

            // Message before the last level
            if (level == 3){
                loquace.script([
                `disableNextPrompt t Bravo tu as réussi ! Encore une petite manche avant de gagner définitivement ! Lance au moins ${level + 2} dés identiques pour remporter la partie !`
            ])
            }

            // Continue button to go to the next level
            addButton('Continuer', vec2(x_center, y_center+120), 'continue_btn',to_dice_phase);

           
            } else {
                // Winning message
                loquace.script([
                    `disableNextPrompt t Bravo, tu as gagné ! Tu veux retenter une petite partie ?`,
                ])

                // Special winnig message if the player has no upgrades
                if (upgrades.length == 5){
                    loquace.script([
                    `disableNextPrompt t Whoa t'as réussi nature peinture. T'as même pas eu besoin de mes petits tours pour t'aider. Retente voir une partie pour voir si c'était juste un coup de bol ou si tu es vraiment un as du dés !`,
                    ])
                }

                // Function to go back to the home screen and reset the parameters
                function to_homescreen() {
                    go('start')

                    // reset parameters
                    level = 0;
                    tuto = true;
                    max_round = 3;
                    max_dice = 5;
                    dice_type = 6;
                    magic_finger = false;
                    magic_throw = false;
                    upgrades = ['round_up','dice_up','mf','mt','dice_type_3'];
                }
                const home_btn = addButton('Recommencer', vec2(x_center,y_center+80), 'home_btn', to_homescreen)
        }
    } 

    if (combi < level+1) {

        // Messages if the player doesn't win the level
        loquace.script([
            [`disableNextPrompt t Oh non tu n'as pas réussi. Pas de panique, j'ai surement quelques choses pour t'aider !`,
             `disableNextPrompt t Pas de chance ! Je suis sûr que tu peux réussir, avec un petit coup de main !`,
             `disableNextPrompt t Quand la chance n'est pas, là les souris dansent ! Enfin un truc du style... Attends je vais t'aider un peu!`,
             `disableNextPrompt t Dommage, t'y était presque ! J'ai surement quelque chose pour t'aider dans ma besace !`,
            ]
            ])
        
        function to_buy_phase() {
            go('buy_phase');
        };
        
        // Continue button to go to the buy phase (select an upgrade)
        addButton('Retente ta chance', vec2(x_center, y_center+80),'retry_btn',to_buy_phase);
    }
})

// Change the variables related to the upgrade
function get_upgrade(upgrade){
    if (upgrade == 'round_up'){
        max_round+=1;
    }
    if (upgrade == 'dice_up'){
        max_dice+=1;
    }
    if (upgrade == 'dice_type_3'){
        dice_type = 3;
    }
    if (upgrade == 'mf'){
        magic_finger = true;
    }
    if (upgrade == 'mt')
        magic_throw = true;
}

// Define the buy scene (upgrade selection)
scene('buy_phase', ()=>{

    // Initiate the background and custom cursor
    set_background();
    custom_cursor();

    // Animate the upgrades
    onUpdate(() => {
        if (get('choice').length > 0) {
            
            get('choice').forEach(c => {

                    c.animate(
                        'scale', [vec2(6.3), vec2(6.5)], {
                            duration : 0.4,
                            direction : 'ping-pong',
                            loop : true
                        }),
                    c.animate('angle', [-5,5], {
                            duration : 1.3,
                            direction : 'ping-pong',
                            loop : true
                        })
                    })
        }});

    const toad_sound = play(toad_sounds[Math.floor(Math.random()*toad_sounds.length)], {
                volume : 0.3,
            });
    
    // if there are more than 1 upgrade available, the player can choose between 2 upgrades
    if (upgrades.length > 1) {
        
    loquace.script([
                    `disableNextPrompt t Tiens, tu peux choisir un de ces deux bonus pour t'aider.`
                ]   )
        
        // Define the first choice (first one in the upgrades list)
        const choice_01 = add([
            sprite('bonus_'+upgrades[0]),
            pos(x_center-150,y_center-50),
            anchor('center'),
            scale(6.5),
            animate(),
            layer("obj"),
            area(),
            'choice'
        ]);

        // Add description text from upgrades_desc
        const desc_01 = add([
            text(upgrades_desc[upgrades[0]],
                {size : 25,
                 width : 300,
                 align : 'center',
                  styles: {
                    "wavey": (idx, ch) => ({
                    pos: vec2(0, wave(-2, 2, time() + idx * 0.5)),
                    })}
                }),
            pos(x_center-150, y_center + 100),
            color(255,255,255),
            anchor('center'),
            'choice_01_desc'
        ])

        add_text_shadow('choice_01_desc', upgrades_desc[upgrades[0]])

        // Define the second choice (second one in the upgrades list)
        const choice_02 = add([
            sprite('bonus_'+upgrades[1]),
            pos(x_center+150,y_center-50),
            scale(6.5),
            anchor('center'),
            animate(),
            layer("obj"),
            area(),
            'choice'        
        ])

        // Add description text from upgrades_desc
        const desc_02 =add([
             text(upgrades_desc[upgrades[1]],
                {size : 25,
                 width : 300,
                 align : 'center',
                  styles: {
                    "wavey": (idx, ch) => ({
                    pos: vec2(0, wave(-2, 2, time() + idx * 0.5)),
                    })}
                }),
            pos(x_center+150,y_center + 100),
            color(255,255,255),
            anchor('center'),
            'choice_02_desc'
        ])

        add_text_shadow('choice_02_desc', upgrades_desc[upgrades[1]])

        // trigger get_upgrade on click, and remove the chosen upgrade from the list
        choice_01.onClick(()=>{
            play('click', {volume : 0.3,});
            get_upgrade(upgrades[0])
            upgrades.splice(0,1)
            go('dice_phase');
        });

        choice_02.onClick(()=>{
            play('click', {volume : 0.3,});
            get_upgrade(upgrades[1])
            upgrades.splice(1,1)
            go('dice_phase');
        });

    // if only one upgrade is left
    } else if (upgrades.length == 1) {

        loquace.script([
                    `disableNextPrompt t Je n'ai plus qu'un seul bonus à te proposer, mais tu devrais avoir toutes les cartes en main ... enfin les dés, pour réussir`
                ]   )
        
        // Define the only choice (the only one in the upgrades list)
        const choice_01 = add([
            sprite('bonus_'+upgrades[0]),
            pos(x_center,y_center-50),
            anchor('center'),
            scale(5),
            layer("obj"),
            area(),
            'choice'
        ]);

        // Add description text from upgrades_desc
        const desc_01 = add([
            text(upgrades_desc[upgrades[0]],
                {size : 25,
                 width : 300,
                 align : 'center',
                  styles: {
                    "wavey": (idx, ch) => ({
                    pos: vec2(0, wave(-2, 2, time() + idx * 0.5)),
                    })}
                }),
            pos(x_center, y_center + 100),
            color(255,255,255),
            anchor('center'),
            'choice_01_desc'
        ])
        add_text_shadow('choice_01_desc', upgrades_desc[upgrades[0]])

        // trigger get_upgrade on click and remove the chosen upgrade from the list
        choice_01.onClick(()=>{
            play('click', {volume : 0.3,});
            get_upgrade(upgrades[0])
            upgrades.splice(0,1)
            go('dice_phase');
        });
    
    // Show a message when no more upgrades are available
    } else {
        loquace.script([
                    `disableNextPrompt t Je n'ai plus de bonus à te proposer. Réfléchis bien tu as tout pour réussir`
                ])

        addButton('Retente ta chance', vec2(x_center, y_center+80),'retry_btn',to_dice_phase);
    }

    // Change mouse spirite when hovering the choices
    get('choice').forEach(c => {

        c.onHoverUpdate(() => {
            custom_cursor(hover = true);
            });

        c.onHoverEnd(() => {
            custom_cursor();
            });
    })
})

// Start the game on the start scene
go('start');