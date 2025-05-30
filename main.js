
// initialisation
kaplay({
    width : 960,
    height : 540,
    stretch : true,
    crisp : true,
    // font : '',
    background: [100, 125, 100],
    canvas: document.querySelector("#game_layout"),
});

// loadFont('name', 'path');

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

// Dimension :
const width = 960;
const height = 540;
const x_center = width/2;
const y_center = height/2;
const offset = 20;

let level = 1;
let round = 1;
let max_round = 3;
let max_dice = 5;
let dice_type = 6;
let buy_count = 0;
let magic_finger = false;
let upgrades = ['round_up','dice_up','magic_finger','dice_type_3',];
let d6_sprites = ['dice1','dice2','dice3','dice4','dice5','dice6'];
let d3_sprites = ['d3_dice1','d3_dice2','d3_dice3'];

onUpdate(() => setCursor("default"));

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
    call_fct){
    
    // add a parent background object
    const btn = add([
        rect(380, 80, { radius: 8 }),
        pos(p),
        area(),
        scale(1),
        anchor("center"),
        outline(4),
        color(255, 255, 255),
        'throw_btn'
    ]);

    // add a child object that displays the text
    btn.add([
        text(txt),
        anchor("center"),
        color(0, 0, 0),
    ]);

    // onHoverUpdate() comes from area() component
    // it runs every frame when the object is being hovered
    btn.onHoverUpdate(() => {
        const t = time() * 10;
        btn.color = hsl2rgb((t / 10) % 1, 0.6, 0.7);
        btn.scale = vec2(1.2);
        setCursor("pointer");
    });

    // onHoverEnd() comes from area() component
    // it runs once when the object stopped being hovered
    btn.onHoverEnd(() => {
        btn.scale = vec2(1);
        btn.color = rgb();
    });

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
        addButton('Lance les Dés', vec2(x_center-220,height-60), throw_dice)
    }

    const selected_dices = get('selected');

    if (round > 1 & selected_dices.length == 0) {
        return debug.log(`Tu n 'as pas sélectionné de dés !`)
        
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

            if (magic_finger == true & selected_dices.length == 1){

                for (let i = 0; i <= dice_type - 1 ; i++) {
                    color_picker(i, dice_pos[0].x, dice_pos[0].y)
                }

            } else {

                selected_dices.forEach(dice => {
                    destroy(dice)
                })
                
                dice_pos.forEach(p => {
                create_dice(dice_type, p.x, p.y)

            });
        }
    }
        text_update()
        return round+=1

    } else {

        debug.log('plus de lancer')
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

        const current_combi = add([
            pos(510,412),
            anchor('left'),
            text(`Dés identiques : ${combi}`),
            'info_txt',
            'combi_txt'
    ]);
    }

    if (round_update == true) {

        get('round_txt').forEach(txt => {
                destroy(txt)
            })

        const round_txt = add([
            pos(70,412),
            anchor('left'),
            text(`Lancer : ${round}/${max_round}`),
            'info_txt',
            'round_txt'
        ])
    }
    
}

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
    addButton("Terminer La Manche", vec2(x_center+220,height-60), to_result_phase)
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
        { value: i},
        scale(3),
        'color_pick'
    ])

    // const bg_mask = add([
    //     rect(width-100,height-100),
    //     pos(x_center,y_center),
    //     anchor('center'),
    //     color(10,10,10),
    //     opacity(0.2),
    //     area(),
        
    // ])

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

    const current_level = add([
        pos(x_center,80),
        anchor('center'),
        text(`Lance au moins ${level+1} identiques !`),
        // 'info_txt',
        'level_txt'
    ])
    
    round = 1;
    onUpdate(() => setCursor("default"));
    addButton("Lance Les Dés !", vec2(x_center, y_center), throw_dice);
    onClick('dice', (dice) => 
        switch_status(dice))
})

scene('result_phase', (combi)=>{

    let result_text = '';


    console.log(combi, level)
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

            addButton('Continuer', vec2(x_center, y_center+offset),to_dice_phase);

            } else {
                result_text = `Bravo tu as gagné !`
        }
    } 
    if (combi < level+1) {

        result_text = `Eh non tu n'as pas réussi !`

        function to_buy_phase() {
            go('buy_phase');
        };

        addButton('Retente ta chance', vec2(x_center, y_center+offset),to_buy_phase);
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
    }
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