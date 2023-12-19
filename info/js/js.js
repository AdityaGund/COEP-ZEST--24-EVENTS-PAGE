const redButton = document.getElementById('btn-red');
const greenButton = document.getElementById('btn-black');
const blueButton = document.getElementById('btn-blue');
const yellowButton = document.getElementById('btn-yellow')

const firstCard = document.getElementById('first_container');
const secondCard = document.getElementById('second_container');
const thirdCard = document.getElementById('third_container');
const fourthCard = document.getElementById('fourth_container');


const first_card_for_opacity = document.getElementById('first_card');
const second_card_for_opacity = document.getElementById('second_card');
const third_card_for_opacity = document.getElementById('third_card');
const fourth_card_for_opacity = document.getElementById('fourth_card');





function first_card_animation() {


    setTimeout(function () {
        firstCard.classList.remove('animation_end_up')
        secondCard.classList.remove('animation_end_up')
        thirdCard.classList.remove('animation_end_up')
        fourthCard.classList.remove('animation_end_up')

        firstCard.classList.add('animation_start_below')
        secondCard.classList.add('animation_start_up')
        thirdCard.classList.add('animation_start_up')
        fourthCard.classList.add('animation_start_up')




        setTimeout(function () {
            firstCard.classList.remove('animation_start_below')
            secondCard.classList.remove('animation_start_up')
            thirdCard.classList.remove('animation_start_up')
            fourthCard.classList.remove('animation_start_up')


            firstCard.classList.add('animation_end_up')




        }, 600);


    }, 30);
}

function second_card_animation() {
    //     setTimeout(function () {
    //         firstCard.classList.remove("animation_end_up");
    //         secondCard.classList.remove("animation_end_up");
    //         thirdCard.classList.remove("animation_end_up");
    //         fourthCard.classList.remove("animation_end_up");

    //         // firstCard.classList.add("animation_start_up");
    //         thirdCard.classList.add("animation_start_up");
    //         secondCard.classList.add("animation_start_below");

    //         setTimeout(() => {
    //             thirdCard.classList.remove("animation_start_up");
    //             thirdCard.classList.add("animation_end_below")
    //             secondCard.classList.remove("animation_start_below");
    //             secondCard.classList.add("animation_end_up")
    //         }, 600);

    //     }, 30);
    setTimeout(function () {
        firstCard.classList.remove('animation_end_up')
        secondCard.classList.remove('animation_end_up')
        thirdCard.classList.remove('animation_end_up')
        fourthCard.classList.remove('animation_end_up')

        secondCard.classList.add('animation_start_below')
        firstCard.classList.add('animation_start_up')
        thirdCard.classList.add('animation_start_up')
        fourthCard.classList.add('animation_start_up')


        setTimeout(function () {
            secondCard.classList.remove('animation_start_below')
            firstCard.classList.remove('animation_start_up')
            thirdCard.classList.remove('animation_start_up')
            fourthCard.classList.remove('animation_start_up')


            secondCard.classList.add('animation_end_up')

        }, 600);
    }, 30);

}

function third_card_animation() {
    //     setTimeout(() => {
    //         firstCard.classList.remove("animation_end_up");
    //         secondCard.classList.remove("animation_end_up");
    //         thirdCard.classList.remove("animation_end_up");
    //         fourthCard.classList.remove("animation_end_up");


    //         secondCard.classList.remove("animation_end_below")
    //         thirdCard.classList.remove("animation_end_below")
    //         secondCard.classList.add("animation_start_up");
    //         thirdCard.classList.add("animation_start_below");

    //         setTimeout(() => {
    //             secondCard.classList.remove("animation_start_up");
    //             secondCard.classList.add("animation_end_below");
    //             thirdCard.classList.remove("animation_start_below");
    //             thirdCard.classList.add("animation_end_up")

    //         }, 600);
    //     }, 30);

    setTimeout(function () {
        firstCard.classList.remove('animation_end_up')
        secondCard.classList.remove('animation_end_up')
        thirdCard.classList.remove('animation_end_up')
        fourthCard.classList.remove('animation_end_up')

        thirdCard.classList.add('animation_start_below')
        firstCard.classList.add('animation_start_up')
        secondCard.classList.add('animation_start_up')
        fourthCard.classList.add('animation_start_up')


        setTimeout(function () {
            thirdCard.classList.remove('animation_start_below')
            firstCard.classList.remove('animation_start_up')
            secondCard.classList.remove('animation_start_up')
            fourthCard.classList.remove('animation_start_up')


            thirdCard.classList.add('animation_end_up')

        }, 600);
    }, 30);
}

function fourth_card_animation() {
    //     setTimeout(() => {
    //         firstCard.classList.remove("animation_end_up");
    //         secondCard.classList.remove("animation_end_up")
    //         thirdCard.classList.remove("animation_end_up");
    //         fourthCard.classList.remove("animation_end_up");

    //         secondCard.classList.remove("animation_end_below");
    //         thirdCard.classList.remove("animation_end_below");
    //         secondCard.classList.add("animation_start_up");
    //         fourthCard.classList.add("animation_start_below");

    //         setTimeout(() => {
    //             secondCard.classList.remove("animation_start_up");
    //             secondCard.classList.add("animation_end_below");
    //             fourthCard.classList.remove("animation_start_below");
    //             fourthCard.classList.add("animation_end_up")

    //         }, 600);
    //     }, 30);
    setTimeout(function () {
        firstCard.classList.remove('animation_end_up')
        secondCard.classList.remove('animation_end_up')
        thirdCard.classList.remove('animation_end_up')
        fourthCard.classList.remove('animation_end_up')

        fourthCard.classList.add('animation_start_below')
        firstCard.classList.add('animation_start_up')
        thirdCard.classList.add('animation_start_up')
        secondCard.classList.add('animation_start_up')


        setTimeout(function () {
            fourthCard.classList.remove('animation_start_below')
            firstCard.classList.remove('animation_start_up')
            thirdCard.classList.remove('animation_start_up')
            secondCard.classList.remove('animation_start_up')


            fourthCard.classList.add('animation_end_up')

        }, 600);
    }, 30);
}


redButton.addEventListener('click', first_card_animation)
greenButton.addEventListener('click', second_card_animation)
blueButton.addEventListener('click', third_card_animation)
yellowButton.addEventListener('click', fourth_card_animation)


firstCard.addEventListener('click', first_card_animation)
secondCard.addEventListener('click', second_card_animation)
thirdCard.addEventListener('click', third_card_animation)
fourthCard.addEventListener('click', fourth_card_animation)



redButton.addEventListener('click', () => {
    first_card_for_opacity.classList.remove("appereing_card")
    second_card_for_opacity.classList.remove("appereing_card")
    third_card_for_opacity.classList.remove("appereing_card")
    fourth_card_for_opacity.classList.remove("appereing_card")

    first_card_for_opacity.classList.add("appereing_card")


})
firstCard.addEventListener('click', () => {
    first_card_for_opacity.classList.remove("appereing_card")
    second_card_for_opacity.classList.remove("appereing_card")
    third_card_for_opacity.classList.remove("appereing_card")
    fourth_card_for_opacity.classList.remove("appereing_card")

    first_card_for_opacity.classList.add("appereing_card")


})

greenButton.addEventListener('click', () => {
    first_card_for_opacity.classList.remove("appereing_card")
    second_card_for_opacity.classList.remove("appereing_card")
    third_card_for_opacity.classList.remove("appereing_card")
    fourth_card_for_opacity.classList.remove("appereing_card")

    second_card_for_opacity.classList.add("appereing_card")
})
secondCard.addEventListener('click', () => {
    first_card_for_opacity.classList.remove("appereing_card")
    second_card_for_opacity.classList.remove("appereing_card")
    third_card_for_opacity.classList.remove("appereing_card")
    fourth_card_for_opacity.classList.remove("appereing_card")

    second_card_for_opacity.classList.add("appereing_card")
})
blueButton.addEventListener('click', () => {
    first_card_for_opacity.classList.remove("appereing_card")
    second_card_for_opacity.classList.remove("appereing_card")
    third_card_for_opacity.classList.remove("appereing_card")
    fourth_card_for_opacity.classList.remove("appereing_card")

    third_card_for_opacity.classList.add("appereing_card")
})
thirdCard.addEventListener('click', () => {
    first_card_for_opacity.classList.remove("appereing_card")
    second_card_for_opacity.classList.remove("appereing_card")
    third_card_for_opacity.classList.remove("appereing_card")
    fourth_card_for_opacity.classList.remove("appereing_card")

    third_card_for_opacity.classList.add("appereing_card")
})
yellowButton.addEventListener('click', () => {
    first_card_for_opacity.classList.remove("appereing_card")
    second_card_for_opacity.classList.remove("appereing_card")
    third_card_for_opacity.classList.remove("appereing_card")
    fourth_card_for_opacity.classList.remove("appereing_card")

    fourth_card_for_opacity.classList.add("appereing_card")
})
fourthCard.addEventListener('click', () => {
    first_card_for_opacity.classList.remove("appereing_card")
    second_card_for_opacity.classList.remove("appereing_card")
    third_card_for_opacity.classList.remove("appereing_card")
    fourth_card_for_opacity.classList.remove("appereing_card")

    fourth_card_for_opacity.classList.add("appereing_card")
})





