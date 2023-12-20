const message = [
    'You will have the benefit of a rapid growth in all, but a lot would be left out',
    'Your Patience would be stretched beyond that of an average Man, Only your Willingness can save you',
    'Darkness beacons all over, and your sacrifice is the hope of a sustaining light',
    'Miracles seeketh thee, if only you believe',
    'Only you can work out your fortunes ',
    'Your multiple steps simplified into few, but your decisions matter',
    'Do not wait to be found, find what is crucial yourself',
    'You can only move ahead, when you have sorted your past',
    'You are the diamond everyone can\'t have, and it is your duty to limit the chaos'
];

const codec = [
    'Rapid Loner',
    'Tempered Soul',
    'Saviour',
    'Ignorant Unbeliever',
    'Custodian',
    'Decider',
    'Seeker',
    'Self Restrainer',
    'Special One'
];

const signs = [
    'Diamond',
    'Star',
    'Pebbles',
    'Rainbow',
    'Bee',
    'white Dove'
]


let fortuneMesaages = arr =>{
    let i = Math.floor(Math.random()*9);
    let j = Math.floor(Math.random()*6)
    switch (i){
        case 0:
            console.log(`The ${codec[i]}.`);
            console.log(`This is your message: ${arr[i]}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 1:
            console.log(`The ${codec[i]}.`);
            console.log(`This is your message: ${arr[i]}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 2:
            console.log(`The ${codec[i]}.`);
            console.log(`This is your message: ${arr[i]}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 3:
            console.log(`The ${codec[i]}.`);
            console.log(`This is your message: ${arr[i]}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 4:
            console.log(`The ${codec[i]}.`);
            console.log(`This is your message: ${arr[i]}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 5:
            console.log(`The ${codec[i]}.`);
            console.log(`This is your message: ${arr[i]}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 6:
            console.log(`The ${codec[i]}.`);
            console.log(`This is your message: ${arr[i]}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 7:
            console.log(`The ${codec[i]}.`);
            console.log(`This is your message: ${arr[i]}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 8:
            console.log(`The ${codec[i]}.`);
            console.log(`This is your message: ${arr[i]}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
    }
    return arr[i];
}

fortuneMesaages(message);