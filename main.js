
// initialisation
kaplay({
    background: [100, 125, 100],

});

loadSprite("dice1", "assets/dice1.png");
loadSprite("dice2", "assets/dice2.png");
loadSprite("dice3", "assets/dice3.png");
loadSprite("dice4", "assets/dice4.png");
loadSprite("dice5", "assets/dice5.png");
loadSprite("dice6", "assets/dice6.png");
loadSprite('dice_anim', 'assets/anim_test.png', {
    sliceX : 6,
    anims :{
    'idle' : 3,
    'throw' :{
        from: 0,
        to: 5,
        speed:25,
        loop:false
    }}
});

let round = 1;
let max_round = 3;

onUpdate(() => setCursor("default"));

function addButton(
    txt = "start game",
    p = vec2(200, 100),
    f = () => debug.log("hello"),
) {
    // add a parent background object
    const btn = add([
        rect(320, 80, { radius: 8 }),
        pos(p),
        area(),
        scale(1),
        anchor("center"),
        outline(4),
        color(255, 255, 255),
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
        throw_dice()
    }
    );

    // return btn;
}

function create_dice(n_face, pos_x, pos_y) {

    dice_value = Math.floor(Math.random() * n_face);
    sprites = ['dice1','dice2','dice3','dice4','dice5','dice6']
    
    const dice = add([
    
        // rect(64, 64),
        // outline(2),
        pos(pos_x,pos_y),
        area(),
        anchor("center"),
        { value: dice_value},
        sprite(sprites[dice_value],
            {fill: true}),
        'dice',
        'unselected',
    ])

    // dice.add([
    //     sprite('dice_anim', {
    //         anim: 'throw',
    //     }),
    //     anchor('center')
    // ])

    // dice.add([
    //     text(dice.value),
    //     // anchor('center'),
    //     color(0,0,0)
    // ])

    dice.onHoverUpdate(() => {
        const t = time();
        dice.scale = vec2(1+ (t%1)/10)
        setCursor("pointer");
    });

    dice.onHoverEnd(()=>{
        dice.scale = vec2(1)
        {if (dice.is('selected')) {
            dice.outline = 4
            dice.color = rgb(165, 243, 239)
        } else {
            dice.color = rgb()
        }}
    })
}

function switch_status(dice) {

    if (dice.is('unselected')) {
        dice.tag('selected')
        dice.untag('unselected')
    } else {
        dice.tag('unselected')
        dice.untag('selected')
    }
}

onClick('dice', (dice) => 
    {if (dice.is('unselected')) {
        switch_status(dice)
    } else {
        switch_status(dice)
    }})

function throw_dice() {

    get('info_txt').forEach(txt => {
        destroy(txt)
    })

    if (get('dice').length == 0) {
        
        for (let i = 1; i < 6; i++) {
        
            dice = create_dice(6, i*80,100);

        }
    } else {
        
        const selected_dices = get('selected');

        let dice_pos = [];
        selected_dices.forEach(dice => {

            dice_pos.push(dice.pos)
            destroy(dice)
        });

        dice_pos.forEach(p => {
            create_dice(6, p.x, p.y)
        });
    }

    const current_dices = get('dice');
    const current_values = [];
    current_dices.forEach(dice => {current_values.push(dice.value)
    });

    combi = check_combi(current_values);

    const current_combi = add([
        pos(60,400),
        anchor('left'),
        text('Oh tu as ' + combi),
        'info_txt'
    ]);

    
    const round_txt = add([
        pos(420, 500),
        text(round + '/3'),
        'info_txt'
    ])

    if (round / max_round == 1) {
        return round = 1;
    } else {
        return round += 1;
    }

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
    if (frequencies[0] === 5) return 'un Yahtzeeee !!';
    if (frequencies[0] === 4) return 'un Carré';
    if (frequencies[0] === 3 && frequencies[1] === 2) return 'un Full';
    if (frequencies[0] === 3) return 'un Brelan';
    if (frequencies[0] === 2 && frequencies[1] === 2) return 'Deux Paire';
    if (frequencies[0] === 2) return 'une Paire';
  
    return 'une Suite ?';
}

// Adds the buttons with the function we added
addButton("Lance les Dés !", vec2(220, 500));