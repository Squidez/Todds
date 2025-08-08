// imports
import kaplay from "https://unpkg.com/kaplay@3001.0.19/dist/kaplay.mjs"; 
import {loquacePlugin} from "/src/kaplay-loquace.js"

// initialisation
kaplay({
    width : 960,
    height : 540,
    stretch : true,
    letterbox : true,
    crisp : true,
    texFilter : 'linear',
    font : 'Schoolbell',
    background: [50, 116, 76],
    canvas: document.querySelector("#game_layout"),
    space: {
            keyboard: ["space"],
          },
    
    plugins: [loquacePlugin],
});

// Loquace parameters
loquace.init({ 
    showNextPrompt: false,
});

loadFont('Schoolbell', 'assets/Schoolbell-Regular.ttf');
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
loadSprite("bubble", "assets/bubble_sheet.png", {
    sliceX: 20,
    sliceY: 1,
    anims: {
        'pop' : {
            from : 16,
            to : 19,
            speed : 6,
            loop : false,
        },
    }
});
loadSprite("toad", 'assets/toad_ico.png')

// Dimension :
const width = 960;
const height = 540;
const x_center = width/2;
const y_center = height/2;
const offset = 20;

// Declare variables
let level = 1;
let round = 1;
let max_round = 3;
let max_dice = 5;
let dice_type = 6;
let buy_count = 0;
let magic_finger = false;
let mf_count = 0;
let mf_max = 1;
let upgrades = ['round_up','dice_up','magic_finger','dice_type_3',];
let sprites = [];
let d6_sprites = ['dice1','dice2','dice3','dice4','dice5','dice6'];
let d3_sprites = ['d3_dice1','d3_dice2','d3_dice3'];
let dice = Object;
let combi = Number;
let round_update = Boolean;
let combi_update = Boolean;

onUpdate(() => setCursor("default"));

function set_background (){

    get('bubbles').forEach(b => {
                destroy(b)
            })

    const background_img = add([
        sprite('background'),
        // anchor('center'),
        pos(0,0),
        fixed(),
        scale(1),
        'background_img'
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
        scale(),
        'background_img'
    ])
    
    function pop_bubble() {

        const bubbles = add([
            sprite('bubble', {
                anim: 'pop',
                }),
            scale(2),
            fixed(),
            'bubbles'
            ]);
        
        const range_x = [].concat(
            Array.from({ length: (width*.25 - width*.1) }, (_v, i) => height*.25 + i),
            Array.from({ length: (width*.9 - width*.75)}, (_v, i) => width*.75 + i)
            );
        const range_y = Array.from({length: (height*.75 - height*.25)}, (v,i) => height*.25 + i);

        let rand_x = range_x[Math.floor(Math.random()*range_x.length)];
        let rand_y = range_y[Math.floor(Math.random()*range_y.length)];
        bubbles.pos = vec2(rand_x,rand_y);

        const rand_delay = Math.floor(Math.random()*2000) + 500;        
        setTimeout(pop_bubble, rand_delay);
    }
    
    pop_bubble();

    const board = add([
        sprite('nenuphare'),
        pos(x_center,y_center-60),
        anchor('center'),
        scale(1.1),
        fixed()
    ])
};

loquace.characters({
    t: { // The character's key used in statements
        name: 'Toad', // The character's name (unused at this time)
        expressions: {
            happy: 'toad',
            },
        defaultExpression: 'happy',
        dialogType: 'pop', // default: 'pop', may be 'vn'
        position: 'center', // There is a shorthand for position here (*)
        },
    });

function message_error(msg) {

    let error_msg = 't ' + msg;
    loquace.script([
        error_msg
    ])

    // loquace.script(error_msg, 
    //     {position : 'center',
    //      doTween: false,
    //      sideImage : 'toad',
    //     });
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

function addButton(
    txt = "start game",
    p = vec2(200, 100),
    tag = '',
    call_fct){
    
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
        btn.animate('scale', [vec2(1), vec2(1.05)], {
            duration : .6,
            direction : 'ping-pong',
            loop : true
            });
        setCursor("pointer");
    });

    // onHoverEnd() comes from area() component
    // it runs once when the object stopped being hovered
    btn.onHoverEnd(() => {
        btn.scale = vec2(1);
        btn.unanimate('scale');
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

function throw_dice() {

    if (round == 1) {
        let throw_btn = get('throw_btn')[0];
        destroy(throw_btn);
        addButton('Lance les Dés', vec2(x_center-250,height-80), 'throw_btn', throw_dice)
    }

    const selected_dices = get('selected');

    if (round > 1 & selected_dices.length == 0) {
        return message_error(`Tu n'as pas sélectionné de dés !`);
        
    }

    if (round <= max_round){

        if (get('dice').length == 0) {

            for (let i = 0; i < max_dice; i++) {
                
                let dice_offset = i - Math.floor(max_dice/2);
                if (max_dice%2 == 0) {
                    dice_offset = i - max_dice/2 + 0.5;
                }
                const x = x_center + dice_offset*84;
                dice = create_dice(dice_type, x,200,);
            
            }
        } else {

            let dice_pos = [];
            selected_dices.forEach(dice => {
            
                dice_pos.push(dice.pos)
            });

            if (magic_finger == true & selected_dices.length == 1 & mf_count < mf_max){

                for (let i = 0; i <= dice_type - 1 ; i++) {
                    color_picker(i, dice_pos[0].x, dice_pos[0].y)
                    }
                    mf_count += 1;

                // else {
                    
                //     message_error(`Tu n'as plus de lancer magique pour cette manche`)        
                //     round -=1; 
                // }    

            } else {

                selected_dices.forEach(dice => {
                    destroy(dice)
                })
                
                dice_pos.forEach(p => {
                create_dice(dice_type, p.x, p.y)

            });
        }
    }
        text_update();
        return round+=1

    } else {

        message_error(`Oh non, tu n'as plus de Lancer !`)
    }
}

function text_update(round_update = true, combi_update = true) {

    const current_dices = get('dice');
    const current_values = [];
    current_dices.forEach(dice => {
        current_values.push(dice.value)
    });
    combi = check_combi(current_values);

    if (combi_update == true){

        get('combi_txt').forEach(txt => {
                destroy(txt)
            })

        // const current_combi = add([
        //     pos(width-47,height-17),
        //     anchor('right'),
        //     text(`Dés identiques : ${combi}/${level+1}`),
        //     'info_txt',
        //     'combi_txt'
        //     ]);
        
        if (combi >= level+1) {

             const current_combi = add([
                pos(width-47,height-17),
                anchor('right'),
                text(`Dés identiques : ${combi}/${level+1}`,{
                    transform: (idx, ch) => ({
                        color: hsl2rgb((time() * 0.2 + idx * 0.1) % 1, 0.7, 0.8),
                        pos: vec2(0, wave(-4, 4, time() * 4 + idx * 0.5)),
                        scale: wave(1, 1.2, time() * 3 + idx),
                        angle: wave(-9, 9, time() * 3 + idx),
                    }),
                }),
                'info_txt',
                'combi_txt'
                ]);

            
            // current_combi.onUpdate(() => {

            //     const t = time();  
            //     // current_combi.color = hsl2rgb((t) % 1, 255, 255); //(time() * 0.2 + idx * 0.1) % 1, 0.7, 0.8
            //     });
            // }
        
        } else {
            const current_combi = add([
                pos(width-47,height-17),
                anchor('right'),
                text(`Dés identiques : ${combi}/${level+1}`),
                'info_txt',
                'combi_txt'
                ]);
        };

    if (round_update == true) {

        get('round_txt').forEach(txt => {
                destroy(txt)
            })

        const round_txt = add([
            pos(47,height-17),
            anchor('left'),
            text(`Lancer : ${round}/${max_round}`),
            'info_txt',
            'round_txt'
        ])
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
        'dice',
        'unselected',
    ])

    dice.onHoverUpdate(() => {
        const t = time();
        dice.scale = vec2(2.8 + (t%1)/2.5)
        setCursor("pointer");
    });

    dice.onHoverEnd(()=>{
        dice.scale = vec2(2.8)
    })

    function to_result_phase() {
        go('result_phase', combi)
    }
    addButton("Terminer La Manche", vec2(x_center+250,height-80), 'end_btn',to_result_phase)
}

function color_picker (i, pos_x, pos_y) {

    // const bg_mask = make([
    //     rect(width-100,height-100),
    //     pos(x_center,y_center),
    //     anchor('center'),
    //     color(10,10,10),
    //     opacity(1),
    //     body(),-
    //     scale(10)
    // ])
    
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
        { value: i},
        scale(3),
        'color_pick'
    ])

    choose_color.onHoverUpdate(() => {
        const t = time();
        choose_color.scale = vec2(2.8 + (t%1)/2.5)
        setCursor("pointer");
    });

    choose_color.onHoverEnd(()=>{
        choose_color.scale = vec2(2.8);
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

        text_update(round_update = false);

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

scene('dice_phase', ()=>{

    set_background()

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
        // 'info_txt',
        'level_txt'
    ])
    
    round = 1;
    mf_count = 0;
    onUpdate(() => setCursor("default"));
    addButton("Lance Les Dés !", vec2(x_center, height-175), 'throw_btn', throw_dice);
    onClick('dice', (dice) => 
        switch_status(dice))
})

scene('result_phase', (combi)=>{

    let result_text = '';

    if (combi >= level+1){
        if (level < 4){
            result_text = `Bravo tu as réussi,\nmais sera-tu capable d'obtenir \nau moins ${level + 2} dés de la même couleur ?`

            if (combi > level + 1) {
                result_text = `Bravo tu as réussi,\nmais auras-tu à nouveau assez de chance \npour obtenir au moins ${level + 2}?`            
            }

            function to_dice_phase() {
                go('dice_phase');
                level += 1;
            };

            addButton('Continuer', vec2(x_center, y_center+offset), 'continue_btn',to_dice_phase);

            } else {
                result_text = `Bravo tu as gagné !`
        }
    } 
    if (combi < level+1) {

        result_text = `Eh non tu n'as pas réussi !`

        function to_buy_phase() {
            go('buy_phase');
        };

        addButton('Retente ta chance', vec2(x_center, y_center+offset),'retry_btn',to_buy_phase);
    }  

    const combi_text = add([
        pos(x_center, 160),
        text(result_text),
        anchor('center'),
        'result_txt'
    ]);
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
    if (upgrade == 'magic_finger'){
        magic_finger = true;
        upgrades.splice(2,0,'magic_finger_up');
    }
    if (upgrade == 'magic_finger_up')
        mf_max = 2;
}

scene('buy_phase', ()=>{

    const choice_01 = add([
        rect(300,500),
        pos(80,10),
        color(80,10,80),
        area(),
        'choice'
    ]);

    choice_01.add([
        text(upgrades[0]),
        anchor('center')
    ])

    const choice_02 = add([
        rect(300,500),
        pos(390,10),
        color(180,80,180),
        area(),
        'choice'        
    ])

    choice_02.add([
        text(upgrades[1]),
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
    console.log(upgrades)
})

go('dice_phase');