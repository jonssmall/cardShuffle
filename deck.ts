import { Card, Suite, suites } from "./card";
import { shuffle } from "./shuffle";

export function generateDeck(): Card[] {
    return suites.reduce((acc, s) => {
        return acc.concat(generateCardsBySuite(s));
    }, []);
}

function generateCardsBySuite(suite: Suite): Card[] {
    const cards: Card[] = [];
    
    for (let i = 1; i <= 13; i++) {
        cards.push({
            suite,
            value: i
        });
    }

    return cards;
}

const deck = generateDeck();
console.log(deck);
console.log(shuffle<Card>(deck));