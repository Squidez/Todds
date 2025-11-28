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
    
    plugins: [loquacePlugin],
});

loadFont('Schoolbell', 'assets/Schoolbell-Regular.ttf');
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
loadSprite("btn_log", "assets/btn_log.png");
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

// Dimension :
const width = 960;
const height = 540;
const x_center = width/2;
const y_center = height/2;

// Declare variables
let level = 0;
let round = 1;
let tuto = true;
let max_round = 3;
let max_dice = 5;
let dice_type = 6;
let magic_finger = false;
let magic_throw = false;
let upgrades = ['round_up','dice_up','mf','mt','dice_type_3'];
let upgrade_pos = [350, 400];
let sprites = [];
let d6_sprites = ['dice1','dice2','dice3','dice4','dice5','dice6'];
let d3_sprites = ['d3_dice1','d3_dice2','d3_dice3'];
let dice = Object;
let combi = Number;
let round_update = Boolean;
let combi_update = Boolean;
let hover = Boolean;

setLayers(["bg", 'shadow', "obj", "ui",  'cursor'], "obj")

// Loquace parameters
loquace.init({ 
    showNextPrompt: false,
});

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

function loquace_cursor_update() {

    if (get('loquaceDialog').length == 1) {

        const loquace_diag =  get('loquaceDialog')[0]

        if (get('diag_area') == 0) {

            const diag_area = add([
                rect(width - 120 - 2*30, 55),
                color(255,0,0),
                pos(loquace_diag.pos),
                opacity(0),
                area(),
                'diag_area'
            ])

            diag_area.onHoverUpdate(() => {custom_cursor(hover = true)});
            diag_area.onHoverEnd(() => {custom_cursor()});
        }
    } else {

        get('diag_area').forEach(d_a => {destroy(d_a)})
    }
    
}

function custom_cursor (hover = false) {

    get('cursor').forEach(c => {
                destroy(c)
            })

    onUpdate(() => setCursor('none'));

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

    if (hover == true) {
        cursor.play('pointer');
    };

    onUpdate(() => {cursor.pos = mousePos()})
}

function set_background (){

    get('bubbles').forEach(b => {
                destroy(b)
            })

    get('background_elem').forEach(b => {
                destroy(b)
            })

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

function pop_bubble() {

        const bubbles = add([
            sprite('bubble', {
                anim: 'pop',
                }),
            scale(1),
            layer('bg'),
            fixed(),
            'bubbles'
            ]);
        
        const range_x = Array.from({length: (width*.85- width*.15)}, (v,i) => width*.15 + i);
        const range_y = Array.from({length: (height*.75 - height*.25)}, (v,i) => height*.25 + i);

        let rand_x = range_x[Math.floor(Math.random()*range_x.length)];
        let rand_y = range_y[Math.floor(Math.random()*range_y.length)];
        bubbles.pos = vec2(rand_x,rand_y);

        const rand_delay = Math.floor(Math.random()*2000) + 1000;        
        setTimeout(pop_bubble, rand_delay);
    };

function message_error(msg) {

    let error_msg = 't ' + msg;
    loquace.script([
        error_msg
    ])
    setTimeout(() => {loquace.clear();}, 1500);
}

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

function get_current_values() {

    const current_dices = get('dice');
    const current_values = [];
    current_dices.forEach(dice => {
        current_values.push(dice.value)
    });

    return current_values
}

function addButton(
    txt = "start game",
    p = vec2(200, 100),
    tag = '',
    call_fct){

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

    if (tag != '') {

        btn.tag(tag)
    }

    // onClick() comes from area() component
    // it runs once when the object is clicked
    btn.onClick(()=>{
        call_fct()
    }
    );
}

function get_possible_values(n_face) {

    let current_values = get_current_values();
    let possible_values = [...Array(n_face).keys()];
    possible_values = possible_values.filter(x => !current_values.includes(x));
    
    text_update()
    
    return possible_values
}

function throw_dice() {

    if (round == 1) {

        let throw_btn = get('throw_btn')[0];
        destroy(throw_btn);
        addButton('Lance les Dés', vec2(x_center-180,y_center+100), 'throw_btn', throw_dice);

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
                
                if (get('selected').length == 1){ //magic_finger == true & get('selected').length == 1 & 
                
                    let dice_pos = [];
                    get('selected').forEach(dice => {
                        dice_pos.push(dice.pos)
                    });
                
                    for (let i = 0; i <= dice_type - 1 ; i++) {
                        color_picker(i, dice_pos[0].x, dice_pos[0].y)
                        }
                    
                    destroy(mf_icon);

                } else {
                    message_error('Tu dois sélectionner un dé pour utiliser ce pouvoir.')
                }
            })
        }
        
        if (magic_throw == true) {

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
            
                let possible_value = get_possible_values(dice_type);
                let dice_pos = [];

                get('dice').forEach(dice => {
                    dice.tag('selected')
                    dice_pos.push(dice.pos)
                    destroy(dice)
                });

                dice_pos.forEach(p => {
                    create_dice(dice_type, p.x, p.y, possible_value[Math.floor(Math.random()*possible_value.length)])
                });

                text_update();
                destroy(mt_icon);
            })

        }

        get('bonus_ico').forEach(b => {
            b.onHoverUpdate(() => {
                custom_cursor(hover = true);
                });

            b.onHoverEnd(() => {
                custom_cursor();
                });
            })
    }

    const selected_dices = get('selected');

    if (round > 1 & selected_dices.length == 0) {
        return message_error(`Tu n'as pas sélectionné de dés !`);
        
    }

    if (round == max_round) {
        get('bonus_ico').forEach(b => {
            destroy(b)
        })
    }

    if (round <= max_round){

        // First Round Initialisation
        if (get('dice').length == 0) {

            if (tuto == true) {

                tuto = false;
        
                for (let i = 0; i < max_dice; i++) {
                
                let dice_offset = i - Math.floor(max_dice/2);

                if (max_dice%2 == 0) {
                    dice_offset = i - max_dice/2 + 0.5;
                    }
                const x = x_center + dice_offset*84;
                dice = create_dice(dice_type, x,200,i);

                loquace.script([
                    "enableNextPrompt t Oh non ! Tu n'a aucun dé identiques.",
                    "enableNextPrompt t Clique sur les dés pour les sélectionner",
                    'disableNextPrompt t Puis appuie sur le bouton "Lance les dés" pour retirer les dés sélectionnés',
                ])}
            } else {

                for (let i = 0; i < max_dice; i++) {

                    let dice_offset = i - Math.floor(max_dice/2);
                    if (max_dice%2 == 0) {
                        dice_offset = i - max_dice/2 + 0.5;
                    }
                    const x = x_center + dice_offset*84;
                    dice = create_dice(dice_type, x,200,);
                
                }}
                
        } else {

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
        // round+=1;

    } else {

        message_error(`Oh non, tu n'as plus de Lancer !`);
    }
}

function add_text_shadow(text_tag,input_text) {

    let pos_x = get(text_tag)[0].pos.x + 2;
    let pos_y = get(text_tag)[0].pos.y + 2;
    let text_anchor = get(text_tag)[0].anchor;

    return add([
        text(input_text),
        pos(pos_x, pos_y),
        anchor(text_anchor),
        color(0,0,0),
        layer('shadow'),
        opacity(.8),
        text_tag,
        'text_shadow'
    ]);
}

function text_update(round_update = true, combi_update = true) {

    let current_values = get_current_values();
    combi = check_combi(current_values);

    if (combi_update == true){

        get('combi_txt').forEach(txt => {
                destroy(txt)
            })
        
        if (combi >= level+1) {
                
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
            
            add_text_shadow('combi_txt',`Dés identiques : ${combi}/${level+1}`);
        };

    if (round_update == true) {

        round+=1;

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

        add_text_shadow('round_txt', `Lancer : ${round}/${max_round}`)
    }
    
}}

function create_dice(n_face, pos_x, pos_y, dice_value = Math.floor(Math.random() * n_face)) {

    if (n_face === 3) {
        sprites = d3_sprites
    } else {
        sprites = d6_sprites
    }

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

    dice.onHoverUpdate(() => {
        const t = time();
        dice.scale = vec2(2.8 + (t%1)/2.5)
        custom_cursor(hover = true);
    });

    dice.onHoverEnd(()=>{
        dice.scale = vec2(2.8);
        custom_cursor();
    })

    function to_result_phase() {
        go('result_phase', combi)
    }
    addButton("Terminer La Manche", vec2(x_center+180,y_center+100), 'end_btn',to_result_phase)
}

function color_picker (i, pos_x, pos_y) {
    
    let col_offset = i - dice_type/2 + 0.5;
    let x = x_center+col_offset*84;

    if (dice_type%2 != 0) {
        col_offset = i + Math.floor(dice_type/2)
    }

    const choose_color = add([
        sprite(sprites[i],
            {anim: 'unselected'}),
        pos(x,300),
        area(),
        anchor("center"),
        layer("obj"),
        { value: i},
        scale(3),
        'color_pick'
    ])

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

    choose_color.onClick(() => {

        destroy(selected_dices[0]);
        create_dice(dice_type, pos_x, pos_y, choose_color.value);
        get('color_pick').forEach((c) => {
            destroy(c);
        });

        const current_dices = get('dice');
        const current_values = [];
        current_dices.forEach(dice => {
            current_values.push(dice.value);
        });

        text_update();

    })
}

function switch_status(dice) {

    if (dice.is('unselected')) {
        dice.tag('selected')
        dice.untag('unselected')
        dice.play('selected')
    } else {
        dice.tag('unselected')
        dice.untag('selected')
        dice.play('unselected')
    }
}

scene('start', ()=>{
    
    set_background();
    pop_bubble();
    custom_cursor();

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

    const start_btn = addButton('Jouer', 
                                vec2(x_center, y_center + 100),
                                'start_btn',
                                to_dice_phase);

    
});


function throw_dice_secu() {

    // Prevents clicking on a button of the next scene accidently
    setTimeout(() => {throw_dice()}, 1)

    // if (magic_finger == true) {


    //     const mf_icon = add([
    //         sprite('bonus_mf'),
    //         pos(350, y_center+155),
    //         anchor('center'),
    //         area(),
    //         scale(1.3,1.3),
    //         animate(),
    //         'bonus_ico',
    //         'mf_btn'
    //     ])
    // }

}

scene('dice_phase', ()=>{

    custom_cursor();
    set_background();
    onUpdate(() => {loquace_cursor_update()});
    onMousePress(() => {loquace.next()});

    const current_level = add([
        pos(x_center,65),
        anchor('center'),
        text(
            `[wavy]Lance au moins [rainbow]${level+1}[/rainbow] identiques ![/wavy]`,{
            styles: {
                "wavy": (idx, ch) => ({
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
    
    round = 1;
    
    
    
    addButton("Lance Les Dés !", vec2(x_center,  y_center+80), 'throw_btn', throw_dice_secu);

    onClick('dice', (dice) => 
        switch_status(dice))
})

function to_dice_phase() {
                go('dice_phase');
                level += 1;
            };

scene('result_phase', (combi)=>{

    set_background();
    onUpdate(() => loquace_cursor_update());


    let result_text = '';

    if (combi >= level+1){
        if (level < 4){

            loquace.script([
                `disableNextPrompt t Bravo tu as réussi, mais sera-tu capable d'obtenir \nau moins ${level + 2} dés de la même couleur ?`
            ])
            // result_text = `Bravo tu as réussi,\nmais sera-tu capable d'obtenir \nau moins ${level + 2} dés de la même couleur ?`

            if (combi > level + 1) {
                
                loquace.script([
                `disableNextPrompt t Bravo tu as réussi,mais auras-tu à nouveau assez de chance \npour obtenir au moins ${level + 2}?`
            ]   )
                // result_text = `Bravo tu as réussi,\nmais auras-tu à nouveau assez de chance \npour obtenir au moins ${level + 2}?`            
            }

            addButton('Continuer', vec2(x_center, y_center+120), 'continue_btn',to_dice_phase);

            } else {
                // result_text = `Bravo tu as gagné !`
                loquace.script([
                    `disableNextPrompt t Bravo, tu as gagné, .....`
                ])

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

        result_text = `Eh non tu n'as pas réussi !`

        function to_buy_phase() {
            go('buy_phase');
        };

        addButton('Retente ta chance', vec2(x_center, y_center+80),'retry_btn',to_buy_phase);
    }
})

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

scene('buy_phase', ()=>{

    set_background();
    custom_cursor();
    onUpdate( () => 
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
        )

    if (upgrades.length > 1) {
        
    loquace.script([
                    `disableNextPrompt t Tiens, tu peux choisir un de ces deux bonus pour t'aider.`
                ]   )
            
        const choice_01 = add([
            sprite('bonus_'+upgrades[0]),
            pos(x_center-150,y_center),
            anchor('center'),
            scale(6.5),
            animate(),
            layer("obj"),
            area(),
            'choice'
        ]);

        const desc_01 = add([
            text(upgrades[0]),
            pos(x_center-150, y_center + 150),
            color(255,0,0),
            anchor('center')
        ])

        const choice_02 = add([
            sprite('bonus_'+upgrades[1]),
            pos(x_center+150,y_center),
            scale(6.5),
            anchor('center'),
            animate(),
            layer("obj"),
            area(),
            'choice'        
        ])

        const desc_02 =add([
            text(upgrades[1]),
            pos(x_center+150,y_center + 150),
            color(255,0,0),
            anchor('center')
        ])

        choice_01.onClick(()=>{
            get_upgrade(upgrades[0])
            upgrades.splice(0,1)
            round = 1; 
            go('dice_phase');
        });

        choice_02.onClick(()=>{
            get_upgrade(upgrades[1])
            upgrades.splice(1,1)
            round = 1;
            go('dice_phase');
        });
    } else if (upgrades.length == 1) {

        loquace.script([
                    `disableNextPrompt t Je n'ai plus qu'un seul bonus à te proposer, mais tu devrais avoir toutes les cartes en main ... enfin les dés, pour réussir`
                ]   )
            
        const choice_01 = add([
            sprite('bonus_'+upgrades[0]),
            pos(x_center,y_center),
            anchor('center'),
            scale(5),
            layer("obj"),
            area(),
            'choice'
        ]);

        const desc_01 = add([
            text(upgrades[0]),
            pos(x_center, y_center + 150),
            anchor('center')
        ])
    } else {
        loquace.script([
                    `disableNextPrompt t Je n'ai plus de bonus à te proposer. Réfléchis bien tu as tout pour réussir`
                ])

        addButton('Retente ta chance', vec2(x_center, y_center+80),'retry_btn',to_dice_phase);
    }

    get('choice').forEach(c => {
        c.onHoverUpdate(() => {
            custom_cursor(hover = true);
            });

        c.onHoverEnd(() => {
            custom_cursor();
            });
    })
})

go('start');