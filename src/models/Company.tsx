import {ReactElement} from 'react';

interface Company {
    name: string;
    email: string;
    mobile: string;
    social: any
    banner: Array<{
        imageLink: string;
        heading: string;
        description: string;
    }>;
    about: Array<{
        heading: string;
        para: string;
        CardImageUrl?: string;
        backgroundImage?: string;
        textCardImageUrl?: string;
    }>;
    shop: Array<{
        heading: string;
        para?: string;
        ItemCardImageUrl?: string;
        categoryCardImage?: string;
        backgroundImage?: string;
    }>;
    contact: Array<{
        heading: string;
        para?: string;
        ItemCardImageUrl?: string;
        categoryCardImage?: string;
        backgroundImage?: string;
    }>;
    footer: Array<{
        heading: string;
        para1: string;
        para2: string;
        para3: string;
        para4: string;
        para5: string;
        path?:{
            path1?: string;
            path2?: string;
            path3?: string;
            path4?: string;
        }
        image: {
            url1?: string;
            url2?: string;
            url3?: string;
            url4?: string;
        };
    }>

    features: Array<{
        icon: ReactElement,
        heading: string,
        text: string
    }>
}

// Static data about the company
const company: Company = {
    name: 'Sabari Holdings',
    email: 'info@sabariholdings.com',
    mobile: '+94 77 551 7474',
    social: {
        faceBook: 'https://www.facebook.com/masimpex1?mibextid=ZbWKwL'
    },
    banner: [
        {
            imageLink: '../../src/assets/images/banner02.jpg',
            heading: 'Global Trade Expertise',
            description: 'A trusted name in the export-import industry, bridging global markets with quality products.'
        },
        {
            imageLink: '../../src/assets/images/banner01.jpg',
            heading: 'Product Specialization',
            description: 'Ensuring the highest standards in international trade and logistics.'
        },
        {
            imageLink: '../../src/assets/images/banner03.jpg',
            heading: 'Reliable Services',
            description: 'Empowering businesses with top-tier export-import services worldwide.'
        }
    ],
//     about: [
//         {
//             backgroundImage: 'images/AboutImage.jpg',
//             heading: 'About Us',
//             para: ``
//         },
//         {
//             textCardImageUrl: 'images/textCardImage1.jpg',
//             heading: '1. Reliable service',
//             para: `At Sabariholdings.com, we prioritize reliability in every aspect of our operations. From precise order processing to timely delivery, our experienced team ensures a seamless export experience for our customers worldwide. `
//         },
//         {
//             textCardImageUrl: 'images/textCardImage2.jpg',
//             heading: '2. The unique taste of Sri Lanka',
//             para: `Experience the authentic flavors of Sri Lanka with our products. From aromatic cinnamon to refreshing tea, we pride ourselves on delivering the finest tastes straight from Sri Lanka’s lush plantations and spice gardens.
// `
//         },
//         {
//             textCardImageUrl: 'images/textCardImage3.jpg',
//             heading: '3. Organic ingredients',
//             para: `Sustainability and quality are at the heart of what we do. All our products are sourced from organic farms, ensuring that every package meets international quality standards while preserving the environment for future generations.`
//         }
//     ],
//     shop: [
//         {
//             backgroundImage: 'images/shop.jpg',
//             heading: 'Market Place',
//             para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
//         }
//     ],
//     contact: [
//         {
//             backgroundImage: 'images/contactUsBackground.jpg',
//             heading: 'Contact Us',
//             para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
//         }
//     ],
//     footer: [
//         {
//             heading: 'Get In Touch',
//             para1: 'sabariholdings, No: 11-1/11, gold plaza complex, Sea St, Colombo 01100',
//             para2: 'info@sabariholdings.com',
//             para3: '+94 77 551 7474',
//             para4: '',
//             para5: '',
//             path:{
//                 path1:"https://maps.app.goo.gl/1JhvN1jASiD2XCDt5",
//                 path2: "mailto:info@sabariholdings.com",
//                 path3: "tel:+94 77 551 7474",
//             },
//             image: {
//                 url1: 'images/locationIcon.png',
//                 url2: 'images/emailIcon.png',
//                 url3: 'images/phoneIcon.png',
//             }
//         },
//         {
//             heading: 'Categories',
//             para1: 'Tea & Coffee',
//             para2: 'Vegetables',
//             para3: 'Rice & Grains',
//             para4: 'Spices',
//             para5: 'Nuts & Fruits',
//             image: {}
//         },
//         {
//             heading: 'Services',
//             para1: 'Global Shipping',
//             para2: 'Customs Clearance',
//             para3: 'International Trade',
//             para4: 'Logistics Solutions',
//             para5: 'FAQs',
//             image: {}
//         },
//         {
//             heading: 'Useful links',
//             para1: 'Store',
//             para2: 'About Us',
//             para3: 'Contact Us',
//             para4: '',
//             para5: '',
//             path:{
//                 path1: "/shop",
//                 path2: "/about",
//                 path3: "/contact",
//                 path4: "/"
//             },
//             image: {
//                 url4: 'blackwhitelogo.png'
//             }
//         }
//     ],
};

export default company;