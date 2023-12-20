const message = [
    {
        Note: 'You will have the benefit of a rapid growth in all, but a lot would be left out',
        Codec:'Rapid Loner'       
    },
    {
        Note: 'Your Patience would be stretched beyond that of an average Man, Only your Willingness can save you',
        Codec:'Tempered Soul'        
    },
    {
        Note: 'Darkness beacons all over, and your sacrifice is the hope of a sustaining light',
        Codec:'Saviour'        
    },
    {
        Note: 'Miracles seeketh thee, if only you believe',
        Codec:'Ignorant Unbeliever'        
    },
    {
        Note: 'Only you can work out your fortunes ',
        Codec:'Custodian'       
    },
    {
        Note: 'Your multiple steps simplified into few, but your decisions matter',
        Codec:'Decider'       
    },
    {
        Note: 'Do not wait to be found, find what is crucial yourself',
        Codec:'Seeker'       
    },
    {
        Note: 'You can only move ahead, when you have sorted your past',
        Codec:'Self Restrainer'       
    },
    {
        Note: 'You are the diamond everyone can\'t have, and it is your duty to limit the chaos',
        Codec:'Special One'      
    }  
    
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
    let j = Math.floor(Math.random()*5);



    switch (i){
        case 0:
            console.log(`The ${arr[i].Codec}.`);
            console.log(`This is your message: ${arr[i].Note}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 1:
            console.log(`The ${arr[i].Codec}.`);
            console.log(`This is your message: ${arr[i].Note}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 2:
            console.log(`The ${arr[i].Codec}.`);
            console.log(`This is your message: ${arr[i].Note}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 3:
            console.log(`The ${arr[i].Codec}.`);
            console.log(`This is your message: ${arr[i].Note}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 4:
            console.log(`The ${arr[i].Codec}.`);
            console.log(`This is your message: ${arr[i].Note}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 5:
            console.log(`The ${arr[i].Codec}.`);
            console.log(`This is your message: ${arr[i].Note}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 6:
            console.log(`The ${arr[i].Codec}.`);
            console.log(`This is your message: ${arr[i].Note}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 7:
            console.log(`The ${arr[i].Codec}.`);
            console.log(`This is your message: ${arr[i].Note}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
        case 8:
            console.log(`The ${arr[i].Codecodec}.`);
            console.log(`This is your message: ${arr[i].Note}`);
            console.log(`Watch out for the ${signs[j]} to always guide you in your journey.`);
            break;
    }
    return arr[i];
}

fortuneMesaages(message);