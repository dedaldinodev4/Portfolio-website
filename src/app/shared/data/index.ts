import { IAbout } from "../dtos"

export const datas: IAbout[] = [
    {
        id: 'about-jump',
        topLine: 'Dev 001',
        headline: 'About Me',
        description: `Lorem ipsum dolor sit amet 
            consectetur adipisicing elit.
            Multiple cell tokens with the same name within and between 
            rows create a single named grid area that spans the corresponding grid cells. 
            Unless those cells form 
            a rectangle, the declaration is invalid.
            Possimus magnam mollitia, iste quis eveniet vero`,
        img: '/assets/images/01.png',
        imgAlt: 'about',
        buttonLabel: 'Read More'
    },
    {
        id: 'skills-jump',
        topLine: 'Dev 001',
        headline: 'My Skills',
        description: `Lorem ipsum dolor sit amet 
            consectetur adipisicing elit.
            Multiple cell tokens with the same name within and between 
            rows create a single named grid area that spans the corresponding grid cells. 
            Unless those cells form 
            a rectangle, the declaration is invalid.
            Possimus magnam mollitia, iste quis eveniet vero`,
        img: '/assets/images/02.png',
        imgAlt: 'skills',
        buttonLabel: 'Next Level'
    }
]