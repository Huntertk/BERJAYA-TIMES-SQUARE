import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        id: uuidv4(),
        image:[
            "https://res.cloudinary.com/drrkaak40/image/upload/v1706714289/Malaysia%20Experience/BERJAYA%20TIMES%20SQUARE/free-fall_q2hzce.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1706714289/Malaysia%20Experience/BERJAYA%20TIMES%20SQUARE/2_eujqhd.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1706714289/Malaysia%20Experience/BERJAYA%20TIMES%20SQUARE/dizzy_izzy_xnmpgu.jpg",
        ],
        title:"BERJAYA TIMES SQUARE",
        desc:"Indoor amusement in Kuala Lumpur with rides, arcadegames, and family-friendly fun. Located in the Berjaya Times Square complex.",
        type:"bookTypeOne",
        preference:[
            {
                title:"Malaysian",
                price:{
                    adult:56,
                    child:46,
                },
                details:[
                    "Valid only for Malaysian Citizens"
                ]
            },
            {
                title:"Non-Malaysian",
                price:{
                    adult:70,
                    child:65,
                },
                details:[
                    "Valid only for Non Malaysian Citizens"
                ]
            }
        ]
    },

    
]

export const timeSlots = {
    weekend:[
        {
            name:"Trip 1",
            timeSlot:"10:00 am - 10:45 am"
        },
        {
            name:"Trip 2",
            timeSlot:"11:00 am - 11:45 am"
        },
        {
            name:"Trip 3",
            timeSlot:"12:00 am - 12:45 pm"
        },
        {
            name:"Trip 4",
            timeSlot:"01:15 pm - 02:00 pm"
        },
        {
            name:"Trip 5",
            timeSlot:"03:45 pm - 04:30 pm"
        },
        {
            name:"Trip 6",
            timeSlot:"05:00 pm - 05:45 pm"
        },
        {
            name:"Trip 7",
            timeSlot:"06:00 pm - 06:45 pm"
        },
        {
            name:"Trip 8",
            timeSlot:"06:45 pm - 07:30 pm"
        },
        {
            name:"Trip 9",
            timeSlot:"08:00 pm - 08:45 pm"
        },
    ],
    weekday:[
        {
            name:"Trip 2",
            timeSlot:"11:00 am - 11:45 am"
        },
        {
            name:"Trip 3",
            timeSlot:"12:00 am - 12:45 pm"
        },
        {
            name:"Trip 4",
            timeSlot:"01:15 pm - 02:00 pm"
        },
        {
            name:"Trip 5",
            timeSlot:"03:45 pm - 04:30 pm"
        },
        {
            name:"Trip 6",
            timeSlot:"05:00 pm - 05:45 pm"
        },
        {
            name:"Trip 7",
            timeSlot:"06:00 pm - 06:45 pm"
        },
        {
            name:"Trip 8",
            timeSlot:"06:45 pm - 07:30 pm"
        },
    ]
}

export const preferenceData = [
    
    {
        id: uuidv4(),
        title: "Malaysian Citizens",
        price: 85,
        details:[
            "Valid only for Malaysian Citizens"
        ]
    },

    {
        id: uuidv4(),
        title: "Non Malaysian Citizens",
        price: 115,
        details:[
            "Valid only for Non Malaysian Citizens"
        ]
    },  
]




export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1706714287/Malaysia%20Experience/BERJAYA%20TIMES%20SQUARE/BTS_3_w5apyj.jpg",
        title:"Roller Coaster",
        desc:"A roller coaster is usually present in a theme park, offering thrill-seekers an exciting ride"
    },
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1706714288/Malaysia%20Experience/BERJAYA%20TIMES%20SQUARE/bts4_dxocis.webp",
        title:"Kiddie Rides",
        desc:"These rides are often made especially for smaller kids, making sure they have a fun and safe time."
    },   
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1706714287/Malaysia%20Experience/BERJAYA%20TIMES%20SQUARE/bts7_vysynm.jpg",
        title:"Carousel",
        desc:"A traditional carousel ride is frequently offered, providing a kinder and more family-friendly experience."
    },  
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1706714287/Malaysia%20Experience/BERJAYA%20TIMES%20SQUARE/bts10_dmvpzl.jpg",
        title:"Simulation Rides",
        desc:"A few theme parks include rides that simulate real-world situations using technology, including motion simulators or virtual reality."
    },  
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:"Bring together your dear ones and companions for a day brimming with joy and thrills, perfect for everyone regardless of age.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1706714287/Malaysia%20Experience/BERJAYA%20TIMES%20SQUARE/3_niidbd.jpg"
    },
    {
        id: uuidv4(),
        desc:"Get your adrenaline pumping with thrilling rides at Galaxy Station, while you create lasting memories with your little ones in the enchanting Fantasy Garden.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1706714289/Malaysia%20Experience/BERJAYA%20TIMES%20SQUARE/free-fall_q2hzce.jpg"
    },
    {
        id: uuidv4(),
        desc:"Regardless of the weather, step into a vast 133,000-square-foot indoor themepark situated at the heart of Kuala Lumpur's city center.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1706714290/Malaysia%20Experience/BERJAYA%20TIMES%20SQUARE/largest_themepark_m0uipw.jpg"
    },
    
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Monday to Friday (12 pm - 8 pm)",
            "Weekend and Public Holiday (11 am - 8 pm)",
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult age 13 - 59 years old",
            "Child age is 3 to 12 years old.",
            "Child below 3 years old enter for Free",
            "Senior Citizen 55 years old and above",
            "Visitors with OKU Card can purchase directly at counter.",
            "Senior Citizen may purchase directly from counter."
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Inclusion",
        ans:[
            "Robo Crash",
            "Dizzy Izzy",
            "Bubbles Express",
            "Spinning Orbit",
            "Supersonic Odyssey",
            "Botanic Drive",
            "Buddy Go Round",
            "Crazy Bus",
            "Fantasy Trail",
            "Flying Bumble Bee",
            "Honey Bump, Molly-Cool's Swing",
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Exclusion",
        ans:[
            "Winter Wonderland Snow Town",
            "Zoofari Animal Ride",
            "Haunted House",
            "Arcade Games",
            "Terry's Carnival Games",
            "World's First Waterless Aquarium",
            "Urban Strike Force",
            "Kidz Playground",
            "Drive Kart",
            "The Fantasy Labyrinth",
            "Haunted House VR",
            "PSVR2",
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:[
            "Upon arrival, show your ticket/e-voucher at the counter",
        ]
    },
    {
        id: uuidv4(),
        ques:"Ticket Validity",
        ans:[
            "You may use the tickets within 30 days from purchased date."
        ]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"What are the available restaurant nearby ?",
        ans:"A&W, Mcdonalds, Chocoloco Caffe, F&B Kiosk, Sub18 Gelato."
    },
    {
        id: uuidv4(),
        ques:"What are the amenities available for my convenient ?",
        ans:"Toilet, Surau, Souvenir Shop and Baby Room."
    },
    {
        id: uuidv4(),
        ques:"How much is the price for Locker",
        ans:"There are 2 type of Lockers available. Small Locker is RM10 and Large Locker is RM25. (Subject to availability)"
    },
    {
        id: uuidv4(),
        ques:"Is there any discount for OKU or disabled person ?",
        ans:"Yes, you may purchase your tickets at the counter for special price."
    },
    {
        id: uuidv4(),
        ques:"Is my ticket include all games ?",
        ans:"Yes all games included except for Pay-Per-Ride Games. Kindly refer to the ticket inclusion for more details."
    },
    {
        id: uuidv4(),
        ques:"Can I re-enter the Themepark once entered ?",
        ans:"No. The ticket is only for ONE time entry."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]


export const termsandconditiondata = [
    {
        id: uuidv4(),
        title: "Limited License",
        list:["You are granted a non-exclusive, non-transferable license to access and use our Website in accordance with these Terms."]
    },
    {
        id: uuidv4(),
        title: "Our Relationship",
        list:["We serve as an intermediary for purchasing goods/services and do not create any other relationship with users"]
    },
    {
        id: uuidv4(),
        title: "Legal Compliance:",
        list:["You agree to comply with all applicable laws and regulations. We may take appropriate action for non-compliance."]
    },
    {
        id: uuidv4(),
        title: "Eligibility and Registration",
        list:["You certify being at least 18 years old or having parental permission if aged 13 to 18. Registration in violation of these terms is unauthorized."]
    },
    {
        id: uuidv4(),
        title: "DMCA Compliance",
        list:["If you believe your work is infringed, provide required information to support@travelvago.com."]
    },
    {
        id: uuidv4(),
        title: "Intellectual Property",
        list:["Our trademarks and Website content are protected. Your use does not grant ownership rights."]
    },
    {
        id: uuidv4(),
        title: "Linking",
        list:["You may link to our Website, following guidelines provided."]
    },
    {
        id: uuidv4(),
        title: "Links to Other Websites",
        list:["We provide links for convenience, but we do not endorse or have an affiliation with Third Party Websites."]
    },
    {
        id: uuidv4(),
        title: "Data Protection",
        list:["We collect and use personal data as necessary. More details in our privacy policy.https://www.travelvago.com/privacy-policy"]
    },
    {
        id: uuidv4(),
        title: "Warranty Disclaimer",
        list:["We reserve the right to change Website content without notice. We are not responsible for errors, interruptions, or technical malfunctions."]
    },
    {
        id: uuidv4(),
        title: "Limitation of Liability",
        list:["We and our affiliates are not liable for any loss or damage resulting from Website use."]
    },
    {
        id: uuidv4(),
        title: "Arbitration",
        list:["Any legal controversy will be settled by binding arbitration. Each party bears one-half of arbitration fees."]
    },
]


export const publicHolidays = [
    "January 25th, 2024",
    "February 1st, 2024",
    "February 12th, 2024",
]