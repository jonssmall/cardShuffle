
// todo: 
// Aces High/Low ? 
// Optionally non-numeric representation of Jack, Queen, King, Ace ?
// Guaranteed acceptable value from 1 through 13 ?
// Should suite be enum ?

export interface Card {
    suite: Suite,
    value: number 
}

export type Suite = 'Spade' | 'Club' | 'Heart' | 'Diamond';

export const suites: Suite[] = ['Spade', 'Club', 'Heart', 'Diamond'];