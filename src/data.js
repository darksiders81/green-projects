import { IoCodeSlashOutline } from "react-icons/io5";
import { HiSpeakerphone } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { IoBugSharp } from "react-icons/io5";
import { IoIosColorPalette } from "react-icons/io";
import { IoLogoAndroid } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoLogoUsd } from "react-icons/io";
import { RiCashLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { IoGameControllerOutline } from "react-icons/io5";
import { IoIosStar } from "react-icons/io";
import { TiSocialTwitter } from "react-icons/ti";





let decs =
    'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur';




let ourServicesDatas = [
    { id: 1, title: 'Web Developement', icons: <IoCodeSlashOutline />, decs, link: '#action1' },
    { id: 2, title: 'Digital Marketing', icons: <HiSpeakerphone />, decs, link: '#action2' },
    { id: 3, title: 'SEO Services', icons: <FaSearch />, decs, link: '#action3' },
    { id: 4, title: 'Cyber Security', icons: <IoBugSharp />, decs, link: '#action4' },
    { id: 5, title: 'Graphic Design', icons: <IoIosColorPalette />, decs, link: '#action5' },
    { id: 6, title: 'Apps Developement', icons: <IoLogoAndroid />, decs, link: '#action6' }
];




let dest = 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Optio Unde, Exped Ita Nesciunt Quibusdam Quis Tempore Quas Tenetur'
let whyChosseDatas = [
    { id: 1, numberTitle: '01.', title: 'Latest Technologies', dest },
    { id: 2, numberTitle: '02.', title: 'Uniqe Solutions', dest },
    { id: 3, numberTitle: '03.', title: 'Powerful Strategies', dest }
];


let portfolioData = [
    { id: 1, title: 'TANSIAPP', desc: 'Mobile Application', hasht: ['#React', ' #HTML', '#Next_js', '#Node'], images: 'https://erramix-themes.com/techidaa/images/portfolio/1.jpg' },
    { id: 2, title: 'TANSIAPP', desc: 'Mobile Application', hasht: ['#Js', ' #HTML', '#Next_js', '#Node'], images: 'https://erramix-themes.com/techidaa/images/portfolio/2.jpg' },
    { id: 3, title: 'IMOLAS', desc: 'Web Application', hasht: ['#Redux', ' #HTML', '#Next_js', '#Gsap'], images: 'https://erramix-themes.com/techidaa/images/portfolio/3.jpg' },
    { id: 4, title: 'TANSIAPP', desc: 'Web Application', hasht: ['#React', ' #HTML', '#Next_js', '#Node'], images: 'https://erramix-themes.com/techidaa/images/portfolio/4.png' },
    { id: 5, title: 'TAKNARUYTAPP', desc: 'Web Application', hasht: ['#React', ' #PHP', '#Next_js', '#Node'], images: 'https://erramix-themes.com/techidaa/images/portfolio/5.jpeg' },
    { id: 6, title: 'BODIHAPP', desc: 'Data', hasht: ['#React', ' #HTML', '#Ruby', '#Node'], images: 'https://erramix-themes.com/techidaa/images/portfolio/6.jpg' }
]




let pricingData = [
    { id: 1, icon: <MdOutlineShoppingCart />, Value: 'Free', price: '00$', dist: 'Per Project', ticks: ['Single User', 'No Updates', 'Limited Acces Library', 'Lorem Ipsum', 'Dolor Sit Amet'] },
    { id: 2, icon: <IoLogoUsd />, Value: 'Basic', price: '19$', dist: 'Per Project', ticks: ['Single User', 'No Updates', 'Limited Acces Library', 'Lorem Ipsum'], noTicks: ['Dolor Sit Amet'] },
    { id: 3, icon: <RiCashLine />, Value: 'Standerd', price: '39$', dist: 'Per Project', ticks: ['Single User', 'No Updates', 'Limited Acces Library'], noTicks: ['Dolor Sit Amet', 'Lorem Ipsum'] },
    { id: 4, icon: <GiMoneyStack />, Value: 'Pro', price: '99$', dist: 'Per Project', ticks: ['Single User', 'No Updates'], noTicks: ['Dolor Sit Amet', 'Lorem Ipsum', 'Limited Acces Library'] }
]
let comLorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, labore dolore laborum dolorum culpa
              ducimus ipsam quo, veniam animi pariatur facilis tempora incidunt nostrum quisquam, cum quasi laudantium?
              Voluptates, sequi? Possimus ipsa, excepturi praesentium dolore quae placeat voluptatem doloremque
              deserunt?`
let TestimonialsData = [
    { id: 1, fullName: 'John Wick', comLorem, imgProfile: 'https://erramix-themes.com/techidaa/images/testimonials/testimonials-2.jpg', starFull: [0, 1, 2], startHalf: [0], starEmty: [0] },
    { id: 2, fullName: 'Soul Goodman', comLorem, imgProfile: 'https://erramix-themes.com/techidaa/images/testimonials/testimonials-5.jpg', starFull: [0, 1, 2], startHalf: [], starEmty: [0, 1] },
    { id: 3, fullName: 'Adam Smith', comLorem, imgProfile: 'https://erramix-themes.com/techidaa/images/testimonials/testimonials-3.jpg', starFull: [0, 1, 2, 3, 4], startHalf: [], starEmty: [] },
    { id: 4, fullName: 'Walter White', comLorem, imgProfile: 'https://erramix-themes.com/techidaa/images/testimonials/testimonials-4.jpg', starFull: [0, 1, 2, 3, 4], startHalf: [], starEmty: [] },
    { id: 5, fullName: 'Gusavo Fring', comLorem, imgProfile: 'https://erramix-themes.com/techidaa/images/testimonials/testimonials-5.jpg', starFull: [0, 1], startHalf: [0], starEmty: [0, 1] },
    { id: 6, fullName: 'Ahmad Erammi', comLorem, imgProfile: 'https://erramix-themes.com/techidaa/images/testimonials/testimonials-1.jpg', starFull: [0, 1, 2], startHalf: [0], starEmty: [0] }
]
let teamDatas = [
    { id: 1, name: 'Moein Khanafari', job: 'Front-End Developer', image: 'https://erramix-themes.com/techidaa/images/team/team-1.jpg' },
    { id: 2, name: 'Steve Jobs', job: 'Back-End Developer', image: 'https://erramix-themes.com/techidaa/images/team/team-2.jpg' },
    { id: 3, name: 'Elon Musk', job: 'Web Designer', image: 'https://erramix-themes.com/techidaa/images/team/team-3.jpg' },
    { id: 4, name: 'Pavel Durov', job: 'CEO Founder', image: 'https://erramix-themes.com/techidaa/images/team/team-4.jpg' }
]




let iconsTeamSocial = [
    { id: 1, icon: <FaFacebook /> },
    { id: 2, icon: <FaInstagram /> },
    { id: 3, icon: <TiSocialTwitter /> },
    { id: 4, icon: <FaLinkedin /> }
]
let aboutInfodatas = [
    { id: 1, title: 'Worldwide Services', icon: <FaMap size={40} /> },
    { id: 2, title: 'Support 24h/24', icon: <BiSupport size={40} /> },
    { id: 3, title: 'Easy To Reach', icon: <IoGameControllerOutline size={40} /> },
    { id: 4, title: 'First On Field', icon: <IoIosStar size={40} /> }
]
export { ourServicesDatas, whyChosseDatas, portfolioData, pricingData, TestimonialsData, teamDatas, iconsTeamSocial, aboutInfodatas }