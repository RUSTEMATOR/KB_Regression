export default class Methods {


    async generateRandomEmail(length: number): Promise<string> {
        const charactersArray: Array<string | number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]

        let email = '';

        for (let i = 0; i < length; i++) {
            email += charactersArray[Math.floor(Math.random() * charactersArray.length)];
        }
        return `automaton-${email}@kingiblly.xyz`;
    }
}
