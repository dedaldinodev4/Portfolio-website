import { IAbout, ISkill } from "../dtos"
interface IProps {
    intro: IAbout,
    about: IAbout
}


export const skills: ISkill[] = [
    {
        id: 'design',
        title: 'UI/UX Design',
        value: "60%"
    },
    {
        id: 'frontend',
        title: 'ReactJs/VueJs/Angular/Golang',
        value: "80%"
    },
    {
        id: 'styles',
        title: 'CSS/SASS/Tailwind',
        value: "90%"
    },
    {
        id: 'backend',
        title: 'Nodejs/.Net Framework/Spring',
        value: "80%"
    },
    {
        id: 'mobile',
        title: 'React Native/ Flutter/ Kotlin',
        value: "59%"
    },
];

export const skills_info: IAbout = {
    id: 'skill-jump',
    topLine: 'Special Skills',
    headline: 'My Special Skill Field Here.',
    description: ``,
    img: '',
    imgAlt: 'about',
    buttonLabel: 'Get Resume',
    backgroundColor: '#020109'
}
 
export const datas: IProps = {
    intro: {
        id: 'intro-jump',
        topLine: 'Stack D3',
        headline: 'Dedaldino Daniel',
        description: `Front-end | Mobile | Back-end`,
        img: '/assets/images/01.png',
        imgAlt: 'about',
        buttonLabel: 'Baixar CV',
        backgroundColor: '#020109'
    },
    about: {
        id: 'about-jump',
        topLine: 'Dev 001',
        headline: 'Let´s Introduce About Myself',
        description: `Whose given. Were gathered. 
            There first subdue greater. Bearing you Whales 
            heaven midst their. Beast creepeth. Fish days.
            Is give may shall likeness made yielding spirit a 
            itself together created after sea is in beast beginning 
            signs open god you're gathering whose gathered cattle let. 
        Creature whales fruit unto meat the life beginning all in under give two.`,
        img: '/assets/images/02.png',
        imgAlt: 'about',
        buttonLabel: 'Download Resume',
        backgroundColor: '#010606'
    }
}