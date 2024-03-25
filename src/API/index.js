
import axios from 'axios';

const BASE_URL = "https://storage.googleapis.com/inovuslabs-cdn.appspot.com";


let stockList = [
    'Arduino Uno',
    'Arduino Mega',
    'Arduino Nano',
    'Arduino Pro Mini',
    'Arduino Leonardo',
    'Arduino Micro',
    'Arduino Due',
    'Arduino Zero',
    'Arduino MKR1000',
    'Arduino MKRZero',
    'Arduino MKR FOX 1200',
    'Arduino MKR WAN 1300',
    'Arduino MKR GSM 1400',
    'Arduino MKR NB 1500',
    'Arduino MKR WiFi 1010',
    'Arduino MKR Vidor 4000',
    'Arduino MKR WAN 1300 (LoRa Connectivity)',
    'Arduino MKR WAN 1310 (LoRa Connectivity)',
    'Arduino MKR NB 1500 (NB-IoT + eMTC Connectivity)',
    'Arduino MKR WiFi 1010',
    'Arduino MKR VIDOR 4000 (FPGA)',
    'Arduino NANO 33 IoT',
    'Arduino NANO 33 BLE',
    'Arduino NANO 33 BLE Sense',
    'Arduino Nano Every',
    'Arduino Nano 33 IoT',
    'Arduino Nano 33 BLE',
    'Arduino Nano 33 BLE Sense',
    'Arduino Nano Every',
    'Arduino Due',
    'Arduino 101',
    'Arduino Mega',
    'Arduino Leonardo',
    'Arduino Micro',
    'Arduino Esplora',
    'Arduino Mini',
    'Arduino Ethernet',
    'Arduino Fio',
    'Arduino BT',
    'Arduino NG',
    'Arduino Robot Control',
    'Arduino Robot Motor',
    'Arduino Gemma',
    'Arduino Yún',
    'Arduino Tian',
    'Arduino Industrial 101',
    'Arduino Uno WiFi Rev.2',
    'Arduino MKR1000 WIFI',
    'Arduino MKR ZERO',
    'Arduino MKR FOX 1200',
    'Arduino MKR WAN 1300',
    'Arduino MKR GSM 1400',
    'Arduino MKR NB 1500',
    'Arduino MKR WiFi 1010',
    'Arduino MKR VIDOR 4000',
    'Arduino MKR WAN 1300 (LoRa Connectivity)',
    'Arduino MKR WAN 1310 (LoRa Connectivity)',
    'Arduino MKR NB 1500 (NB-IoT + eMTC Connectivity)'
];



// Get all projects 
export const getProjects = async () => {
    let data = {
        "tags": ["Software", "Hardware", "Electronics", "Internet of Things", "Open-source", "Mechanical"],
        "technologies": [],
        "projects": [
            {
                "id": 1,
                "title": "Atom EV",
                "description": "The electric car designed and constructed by college students is an impressive blend of innovation, sustainability, and prominent technology. Crafted with a combination of academic knowledge and hands-on expertise, this vehicle represents a remarkable achievement in the world of automotive engineering",
                "thumbnail": BASE_URL + "/assets/projects/Atom.jpg",
                "status": "Completed",
                "tags": ["Mechanical", "Hardware"],
                "contributors": [
                    {
                        "name": "Induchoodan R",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Nikhil T Das",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-2.jpg"
                    }
                ]
            },
            {
                "id": 2,
                "title": "Edu Bulb",
                "description": "The LED Bulb is a remarkable achievement born from the creative minds and hard work of a group of visionary college students. This groundbreaking LED bulb is more than just a source of light a testament to innovation, sustainability, and youthful ingenuity. The students have paved a way to see big dreams for others through this business model",
                "thumbnail": BASE_URL + "/assets/projects/Edubulb.jpeg",
                "status": "Completed",
                "tags": ["Hardware", "Electronics"],
                "contributors": [
                    {
                        "name": "Nikhil T Das",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Induchoodan R",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-2.jpg"
                    }
                ]
            },
            {
                "id": 3,
                "title": "Smart Inovus",
                "description": "Home automation refers to the use of smart technology and integrated systems to control various aspects of a home, providing homeowners with increased convenience, energy efficiency, security, and customization. We used ESP32, 16 Channel relay module and 12v DC adapter for controlling the appliances. The ESP32 is integrated with Arduino IOT cloud platform. It provides Integration with virtual assistants like Amazon Alexa, Google Assistant, or Apple Home Kit allows users to control devices using voice commands.",
                "thumbnail": BASE_URL + "/assets/projects/Automation.jpeg",
                "status": "Progress",
                "tags": ["Internet of Things", "Electronics"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Arjun krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-2.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-2.jpg"
                    }
                ]
            },
            {
                "id": 4,
                "title": "MGU Result Scrapper",
                "description": "A project designed to automate the process of fetching result screenshots from the MGU result portal, sending them to students via email as secure PDFs, and generating consolidated marklists and result analysis for teachers.",
                "thumbnail": "https://user-images.githubusercontent.com/44474792/174436549-32713b4f-8140-4266-b3e5-6bde4ee1e982.gif",
                "status": "Completed",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/decoded-cipher/mgu-result-scraper'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 5,
                "title": "Inovus Scrapbook",
                "description": " A daily diary for Inovus Fellows to scribble about their self-learning endeavors & DIY projects",
                "thumbnail": BASE_URL + "/assets/projects/scrapbook.jpeg",
                "status": "Progress",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/decoded-cipher/scrapbook'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 6,
                "title": "Chacko Mash",
                "description": "Chacko Mash is our discord bot which handles the members of our discord platform, replies to the queries and wishes the members for their birthday and other important occasions display score boards of individuals in the platform. The name was inspired from a movie character who was a narcissistic father Kaduva Chacko punishes his son upon failing to meet the high expectations. The bot handles the data of individual students. They can scan messages for spam, profanity, or other inappropriate content and take appropriate actions",
                "thumbnail": BASE_URL + "/assets/projects/chacko_mash.jpeg",
                "status": "Completed",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/decoded-cipher/chacko-mash'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 7,
                "title": "Sound Thoma",
                "description": "Sound Thoma is our bot for Discord, designed to make your music experience during their work time. The engagement is funnier sometimes, we often conduct video chats and calls during the work. We usually rely on Spotify for listening to music to make the time more enjoyable. Literally the ads coming unexpectedly are mood spoilers especially during romantic songs. We’ve introduced a better alternative for this. Here you can listen to unlimited music without ads. sounds interesting right. Here you can create and manage your playlists directly within Discord. Simply type /play followed by the song or artist you want to hear.",
                "thumbnail": BASE_URL + "/assets/projects/sound_thoma.jpeg",
                "status": "Completed",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/decoded-cipher/chacko-mash'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 8,
                "title": "Inovus Blogs",
                "description": "Inovus blogs is a platform where anyone can express and share their thoughts, ideas, criticism in a constructive manner. The blog has been stood as a media platform for students to being vociferous on social, political, technological and other related issues.",
                "thumbnail": BASE_URL + "/assets/projects/Inovus_blogs.jpeg",
                "status": "Completed",
                "tags": ["Software"],
                "url": {
                    'type': 'demo',
                    'link': 'https://blog.inovuslabs.org'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Nikhil T Das",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-2.jpg"
                    }
                ]
            },
            {
                "id": 9,
                "title": "Inovus API",
                "description": "The API which controls all the softwares roaming around Inovus Labs",
                "thumbnail": BASE_URL + "/assets/projects/API.jpeg",
                "status": "Progress",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/inovus-labs/inovus-api'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 10,
                "title": "OSM Datapool",
                "description": "The OSM (OpenStreetMap) Data Pool is an ambitious open-source initiative undertaken by Inovus Labs, involving active participation from all members during the Hacktoberfest event. OpenStreetMap, a collaborative mapping platform, forms the foundation for this project, aiming to aggregate and enhance geospatial data to improve accessibility and navigation within communities. A collective of passionate and dedicated individuals, has come together to contribute to this innovative effort. During hacktoberfest, a month-long celebration of open-source contributions, team members pooled their expertise, time, and creativity to enrich the OpenStreetMap database.",
                "thumbnail": BASE_URL + "/assets/projects/OSM_Datapool.jpg",
                "status": "Completed",
                "tags": ["Software", "Open-source"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/inovus-labs/osm-datapool'
                },
                "contributors": [
                    {
                        "name": "",
                        "avatar": ""
                    }
                ]
            }
        ]
    };

    return data;
};



// Get recent blog posts published on Inovus Blogs
export const getBlogPosts = async () => {

    // try {
    //     const res = await axios.get(`${import.meta.env.VITE_APP_INOVUS_BLOGS_BASE_URL}/ghost/api/content/posts/?key=${import.meta.env.VITE_APP_INOVUS_BLOGS_API_KEY}&limit=4&fields=title,feature_image,custom_excerpt,excerpt,published_at,url,reading_time,html&include=tags,authors`);
    //     return res.data.posts;
    // } catch (error) {
    //     console.log(error);
    // }

    return [
        {
            "title": "Cyber Addiction & Recovery Methods",
            "feature_image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDR8fGRpZ2l0YWwlMjB3b3JsZHxlbnwwfHx8fDE3MDI5OTg4Njd8MA&ixlib=rb-4.0.3&q=80&w=2000",
            "custom_excerpt": null,
            "published_at": "2023-12-19T20:50:46.000+05:30",
            "reading_time": 3,
            "tags": [
                {
                    "id": "653f71fb5d18573f9b9f3d79",
                    "name": "Science & Technology",
                    "slug": "science-technology",
                    "description": null,
                    "feature_image": "https://images.unsplash.com/photo-1607988795691-3d0147b43231?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDU5fHxzY2llbmNlfGVufDB8fHx8MTY5ODkwMjM5OHww&ixlib=rb-4.0.3&q=80&w=2000",
                    "visibility": "public",
                    "og_image": null,
                    "og_title": null,
                    "og_description": null,
                    "twitter_image": null,
                    "twitter_title": null,
                    "twitter_description": null,
                    "meta_title": null,
                    "meta_description": null,
                    "codeinjection_head": null,
                    "codeinjection_foot": null,
                    "canonical_url": null,
                    "accent_color": "#617bff",
                    "url": "https://blog.inovuslabs.org/tag/science-technology/"
                }
            ],
            "authors": [
                {
                    "id": "6540bc590b27848ad6616f50",
                    "name": "Arjun A Acharry",
                    "slug": "arjun-a-acharry",
                    "profile_image": "https://blog.inovuslabs.org/content/images/2023/10/_MG_2998---Copy.JPG",
                    "cover_image": "https://blog.inovuslabs.org/content/images/2023/10/Slide-16_9---1.png",
                    "bio": null,
                    "website": null,
                    "location": null,
                    "facebook": null,
                    "twitter": null,
                    "meta_title": null,
                    "meta_description": null,
                    "url": "https://blog.inovuslabs.org/author/arjun-a-acharry/"
                }
            ],
            "url": "https://blog.inovuslabs.org/cyber-addiction-recovery-methods/",
            "excerpt": "CYBER ADDICTION\n\nAn excessive amount of time spent on computers, phones, or the internet is known as cyber addiction. It can be problematic in day-to-day living and lead to issues at job, school, or in relationships.\n\nSigns of Cyber Addiction:\n\n 1. Excessive Internet Use: Spending an inordinate amount of time online.\n 2. Negative Impact on Daily Life: Affecting work, school, or relationships adversely.\n 3. Loss of Control: Difficulty managing and limiting online activities.\n 4. Withdrawal Sympto",
            "reading_time": 3
        },
        {
            "title": "Rising from the Ashes: Restoring Inovus Blogs Post-Termination",
            "feature_image": "https://images.unsplash.com/photo-1591913139332-f8172ef511da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDR8fGRhdGElMjByZWNvdmVyeXxlbnwwfHx8fDE2OTkwNDUwOTJ8MA&ixlib=rb-4.0.3&q=80&w=2000",
            "custom_excerpt": "Here's how we managed to recover the contents of a blog hosted on an AWS EC2 instance after being wrongfully terminated.",
            "published_at": "2023-11-04T03:20:00.000+05:30",
            "reading_time": 6,
            "tags": [
                {
                    "id": "653fc29ab14998447e1d37dd",
                    "name": "Web Development",
                    "slug": "web-development",
                    "description": null,
                    "feature_image": "https://images.unsplash.com/photo-1605379399642-870262d3d051?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDE1fHx3ZWIlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE2OTg5MDI5Mjh8MA&ixlib=rb-4.0.3&q=80&w=2000",
                    "visibility": "public",
                    "og_image": null,
                    "og_title": null,
                    "og_description": null,
                    "twitter_image": null,
                    "twitter_title": null,
                    "twitter_description": null,
                    "meta_title": null,
                    "meta_description": null,
                    "codeinjection_head": null,
                    "codeinjection_foot": null,
                    "canonical_url": null,
                    "accent_color": "#8aaf46",
                    "url": "https://blog.inovuslabs.org/tag/web-development/"
                }
            ],
            "authors": [
                {
                    "id": "653f7a27b14998447e1d36d5",
                    "name": "Arjun Krishna",
                    "slug": "arjun",
                    "profile_image": "https://www.gravatar.com/avatar/dd27406b884ca7ede3e5364c3dd6326c?s=250&r=x&d=mp",
                    "cover_image": "https://blog.inovuslabs.org/content/images/2023/10/image-7.png",
                    "bio": "Yet another human being born towards the end of the 20th century, and continues his Exploration & Experimentation on the Technology that the 21st century has to offer.",
                    "website": "https://arjunkrishna.in/",
                    "location": "Pathanamthitta | Bangalore",
                    "facebook": null,
                    "twitter": "@Decoded_Cipher",
                    "meta_title": null,
                    "meta_description": null,
                    "url": "https://blog.inovuslabs.org/author/arjun/"
                }
            ],
            "url": "https://blog.inovuslabs.org/restoring-inovus-blogs/",
            "excerpt": "Here's how we managed to recover the contents of a blog hosted on an AWS EC2 instance after being wrongfully terminated."
        },
        {
            "title": "Maladaptive Daydreaming: Creating A Utopia Equivalent To A Bottomless Pit",
            "feature_image": "https://blog.inovuslabs.org/content/images/2023/10/index.jpeg",
            "custom_excerpt": null,
            "published_at": "2023-10-21T14:26:00.000+05:30",
            "reading_time": 4,
            "tags": [
                {
                    "id": "653f70e95d18573f9b9f3d73",
                    "name": "Psychology",
                    "slug": "psychology",
                    "description": null,
                    "feature_image": "https://images.unsplash.com/photo-1573511860302-28c524319d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fHBzeWNob2xvZ3l8ZW58MHx8fHwxNjk4OTAyNzgwfDA&ixlib=rb-4.0.3&q=80&w=2000",
                    "visibility": "public",
                    "og_image": null,
                    "og_title": null,
                    "og_description": null,
                    "twitter_image": null,
                    "twitter_title": null,
                    "twitter_description": null,
                    "meta_title": null,
                    "meta_description": null,
                    "codeinjection_head": null,
                    "codeinjection_foot": null,
                    "canonical_url": null,
                    "accent_color": "#3eb8c1",
                    "url": "https://blog.inovuslabs.org/tag/psychology/"
                }
            ],
            "authors": [
                {
                    "id": "654cb82cd6af5204882b104e",
                    "name": "Athena Maria Vadakan",
                    "slug": "athena",
                    "profile_image": null,
                    "cover_image": null,
                    "bio": null,
                    "website": null,
                    "location": null,
                    "facebook": null,
                    "twitter": null,
                    "meta_title": null,
                    "meta_description": null,
                    "url": "https://blog.inovuslabs.org/author/athena/"
                }
            ],
            "url": "https://blog.inovuslabs.org/maladaptive-daydreaming/",
            "excerpt": "You're not stuck. You're just committed to certain patterns of behavior because they helped you in the past. Now those behaviors have become more harmful than helpful. The reason why you can't move forward is because you keep applying an old formula to a new level of life. Change the formula to get a different result. - Emily Maroutian \n\nAs long as Samira can remember, she was really quiet. But she also had a goofy and imaginative side just like any other children. Because of her shyness and pas"
        },
        {
            "title": "Instagram VS Mental Health",
            "feature_image": "https://blog.inovuslabs.org/content/images/2023/10/photo-1535451801241-b5395e1d4a1b.jpg",
            "custom_excerpt": null,
            "published_at": "2023-10-06T01:10:00.000+05:30",
            "reading_time": 2,
            "tags": [
                {
                    "id": "653f70e95d18573f9b9f3d73",
                    "name": "Psychology",
                    "slug": "psychology",
                    "description": null,
                    "feature_image": "https://images.unsplash.com/photo-1573511860302-28c524319d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDF8fHBzeWNob2xvZ3l8ZW58MHx8fHwxNjk4OTAyNzgwfDA&ixlib=rb-4.0.3&q=80&w=2000",
                    "visibility": "public",
                    "og_image": null,
                    "og_title": null,
                    "og_description": null,
                    "twitter_image": null,
                    "twitter_title": null,
                    "twitter_description": null,
                    "meta_title": null,
                    "meta_description": null,
                    "codeinjection_head": null,
                    "codeinjection_foot": null,
                    "canonical_url": null,
                    "accent_color": "#3eb8c1",
                    "url": "https://blog.inovuslabs.org/tag/psychology/"
                }
            ],
            "authors": [
                {
                    "id": "6540bc590b27848ad6616f50",
                    "name": "Arjun A Acharry",
                    "slug": "arjun-a-acharry",
                    "profile_image": "https://blog.inovuslabs.org/content/images/2023/10/_MG_2998---Copy.JPG",
                    "cover_image": "https://blog.inovuslabs.org/content/images/2023/10/Slide-16_9---1.png",
                    "bio": null,
                    "website": null,
                    "location": null,
                    "facebook": null,
                    "twitter": null,
                    "meta_title": null,
                    "meta_description": null,
                    "url": "https://blog.inovuslabs.org/author/arjun-a-acharry/"
                }
            ],
            "url": "https://blog.inovuslabs.org/instagram-vs-health/",
            "excerpt": "Instagram is a popular social media platform and mobile app designed for sharing photos and videos. It was launched in October 2010 and has since become one of the most widely used social networking platforms in the world. Instagram allows users to create profiles, post photos and videos, and interact with others through likes, comments, and direct messages.\n\nInstagram has evolved significantly since its inception and has played a crucial role in shaping how people share and consume visual conte"
        }
    ];
}



// Get recent podcasts published on Inora: The Inovus Radio
export const getPodcasts = async () => {

    return [
        {
            id: "2TrSXp7Ry7dwMwqBM25Blw",
        },
        {
            id: "4NM5QuIiDVeUAy8FaKou4Q",
        },
    ]

}



// Get all projects
export const getActivity = async () => {
    let data = {
        "tags": ["Workshop", "Internship", "Bootcamp", "Challenge", "Session", "Celebration"],
        "activities": [
            {
                "id": 1,
                "title": "Web Design Bootcamp v3.0",
                "thumbnail": BASE_URL + "/assets/activity/WDB.jpg",
                "description": "A nano degree program to develop the web designing skills of students at Kristu Jyoti college. It have been successfully completed and given the certificate of the nano degree program.",
                "date": ["01 June 2023", "14 June 2013"],
                "tags": ["Bootcamp"]
            },{
                "id": 2,
                "title": "Kerala Piravi @ Govt. LP School",
                "thumbnail": BASE_URL + "/assets/activity/schoolvisit.jpg",
                "description": "On Kerala Piravi day, we had the privilege of visiting the govt. LP School Madapally, where we actively engaged with the enthusiastic young minds, fostering meaningful interactions with the students and celebrating the essence of Kerala Piravi together.",
                "date": ["01 November 2023"],
                "tags": ["Celebration"]
            },
            {
                "id": 3,
                "title": "IoT workshop",
                "thumbnail": BASE_URL + "/assets/activity/IOT23.jpg",
                "description": "Taking the initial stride into the realm of IoT, interested students at KJCMT actively participated and achieved their first milestone in this technology.",
                "date": [["19 July 2023", "20 July 2023"], "10 August 2023"],
                "tags": ["Workshop"]
            },
            {
                "id": 4,
                "title": "Debate Competition",
                "thumbnail": BASE_URL + "/assets/activity/debate.png",
                "description": "A Competition to enhance the talking ability of students.Several students have participated and all have received participation certificate",
                "date": ["25 November 2022"],
                "tags": ["Challenge"]
            },
            {
                "id": 5,
                "title": "Stupid Idea Contest",
                "thumbnail": BASE_URL + "/assets/activity/stupid.png",
                "description": "A contest to develop the ideas of KJCMT students. They have submitted several Ideas and we have selected the best one and promoted them to do that by giving some prize to them.",
                "date": ["03 November 2022", "12 November 2022"],
                "tags": ["Challenge"]
            },
            {
                "id": 6,
                "title": "Community Workshop",
                "thumbnail": BASE_URL + "/assets/activity/community.png",
                "description": "This workshop was conducted to the students to make them understand how community works and how to manage a community.",
                "date": ["06 October 2022"],
                "tags": ["Workshop"]
            },
            {
                "id": 7,
                "title": "Date with Figma",
                "thumbnail": BASE_URL + "/assets/activity/date_with_figma.jpg",
                "description": "First step to figma. This event was hosted for KJCMT students to know about figma and learn about graphic designing",
                "date": ["09 October 2023", "14 October 2023"],
                "tags": ["Workshop"]
            },
            {
                "id": 8,
                "title": "Intro to Hacktober Fest",
                "thumbnail": BASE_URL + "/assets/activity/hacktober.jpg",
                "description": "We organized an event aimed at enlightening our students about the concept of open source and guiding them on how to contribute to open source projects. As part of this initiative, we made numerous contributions to Hacktoberfest, providing hands-on experience and fostering a deeper understanding of open source collaboration.               ",
                "date": ["October 2023"],
                "tags": ["Workshop"]
            },
            {
                "id": 9,
                "title": "Invention vs Innovation",
                "thumbnail": BASE_URL + "/assets/activity/IvsI.jpg",
                "description": "An orientation session for the KJCMT students to know about what is invention and innovation.It helps the students to rectify the difference between invention and innovation . ",
                "date": ["09 October 2023"],
                "tags": ["Session"]
            },
            {
                "id": 10,
                "title": "Call for extended team",
                "thumbnail": BASE_URL + "/assets/activity/Exetended.jpg",
                "description": "The selection of our extened team. We have conducted interview of all applied students and selected a bunch of intrested students to inovus Fam.",
                "date": ["04 October 2023", "06 October 2023"],
                "tags": ["Internship"]
            },
            
        ]
    };

    return data;
};



// Get all reccuring events
export const getReccuringEvents = async () => {
    let data = {
        "tags": ["Weekend Workbench", "Hangout with Inovus", "Simply Series"],
        "events": [
            {
                "id": 1,
                "date": "19 May 2019",
                "title": "Hangout with Inovus -John Mathew",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/hangout-john.jpg",
                "tags": ["Hangout with Inovus"]
               
            },{
                "id": 2,
                "date": "25 April 2020",
                "title": "Hangout with Inovus -Dr. Jimmy Mathew",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/hangout-drjimmy.jpg",
                "tags": ["Hangout with Inovus"]
               
            },{
                "id": 3,
                "date": "05 May 2020",
                "title": "Hangout with Inovus -Mehar M P",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/hangout-mehar.jpg",
                "tags": ["Hangout with Inovus"]
               
            },{
                "id": 4,
                "date": "19 May 2020",
                "title": "Hangout with Inovus -Enfa Rose George",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/hangout-enfa.jpg",
                "tags": ["Hangout with Inovus"]
               
            },{
                "id": 5,
                "date": "16 May 2021",
                "title": "Simply Linkedin",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/simply-linkedin.jpg",
                "tags": ["Simply Series"]
               
            },{
                "id": 6,
                "date": "01 July 2021",
                "title": "Simply Blockchain",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/simply-blockchain.jpg",
                "tags": ["Simply Series"]
               
            },{
                "id": 7,
                "date": "01 July 2023",
                "title": "Weekend Workbench #1",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template1.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 8,
                "date": "08 July 2023",
                "title": "Weekend Workbench #2",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template2.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 9,
                "date": "15 July 2023",
                "title": "Weekend Workbench #3",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template3.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 10,
                "date": "22 July 2023",
                "title": "Weekend Workbench #4",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template4.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 11,
                "date": "29 July 2023",
                "title": "Weekend Workbench #5",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template5.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 12,
                "date": "5 August 2023",
                "title": "Weekend Workbench #6",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template6.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 13,
                "date": "23 September 2023",
                "title": "Weekend Workbench #7",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template8.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 14,
                "date": "30 September 2023",
                "title": "Weekend Workbench #8",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template 1.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 15,
                "date": "07 October 2023",
                "title": "Weekend Workbench #9",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template 2.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 16,
                "date": "14 October 2023",
                "title": "Weekend Workbench #10",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template 3.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 17,
                "date": "21 October 2023",
                "title": "Weekend Workbench #11",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template 11.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 18,
                "date": "04 November 2023",
                "title": "Weekend Workbench #12",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template 12.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 19,
                "date": "11 November 2023",
                "title": "Weekend Workbench #13",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template 13.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 20,
                "date": "18 November 2023",
                "title": "Weekend Workbench #14",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template 14.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 21,
                "date": "02 December 2023",
                "title": "Weekend Workbench #15",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template 15.png",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 22,
                "date": "09 December 2023",
                "title": "Weekend Workbench #16",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/Template 16.jpg",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 23,
                "date": "16 December 2023",
                "title": "Weekend Workbench #17",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/17.jpg",
                "tags": ["Weekend Workbench"]
               
            },{
                "id": 24,
                "date": "23 December 2023",
                "title": "Weekend Workbench #18",
                "description": "",
                "thumbnail": BASE_URL + "/assets/reccuringevents/workbench/18.jpg",
                "tags": ["Weekend Workbench"]
               
            }
        ]
    };

    return data;
}



// Get all social media posts
export const getSocialPosts = async () => {
    let data = {
        "instagram": [
            {
                "id": 1,
                "url": "https://www.instagram.com/p/C0bv6zuJkq2"
            },
            {
                "id": 2,
                "url": "https://www.instagram.com/p/C0ZJZnvPPn1"
            },
            {
                "id": 3,
                "url": "https://www.instagram.com/p/Cyvo6lUJpQR"
            }
        ],
        "linkedin": [
            {
                "id": 1,
                "url": "https://www.linkedin.com/feed/update/urn:li:activity:7137095376020393984"
            },
            {
                "id": 2,
                "url": "https://www.linkedin.com/feed/update/urn:li:activity:7118418226442604544"
            },
            {
                "id": 3,
                "url": "https://www.linkedin.com/feed/update/urn:li:activity:7099761784420528128"
            }
        ],
        "youtube": [
            {
                "id": 1,
                "url": "https://www.youtube.com/embed/mOBuyUQ9WAE?si=9iwR36YwTUI-DicF"
            },
            {
                "id": 2,
                "url": "https://www.youtube.com/embed/CYKO8TiRLHU?si=3CGbZVI5bZC3IHq0"
            },
            {
                "id": 3,
                "url": "https://www.youtube.com/embed/videoseries?si=hum7bwG0SkRttfJE&amp;list=PLf17cHBJCwYj9Dsjy7k8DauwLCXwBR2BS"
            }
        ],
        "twitter": [
            {
                "id": 1,
                "url": "https://twitter.com/InovusLabs/status/1721051746947207352"
            },
            {
                "id": 2,
                "url": "https://twitter.com/InovusLabs/status/1715828644000813445"
            },
            {
                "id": 3,
                "url": "https://twitter.com/InovusLabs/status/1711584725733900390"
            }
        ],
        "threads": [
            {
                "id": 1,
                "url": "https://www.threads.net/@inovuslabs/post/CzM0DdUy5L_"
            },
            {
                "id": 2,
                "url": "https://www.threads.net/@inovuslabs/post/CypSOuzJFDI"
            },
            {
                "id": 3,
                "url": "https://www.threads.net/@inovuslabs/post/CyEkW87SkvN"
            }
        ]
    }

    return data;
}



// Get all authors of Inovus Blogs
export const getBlogAuthors = async () => {

    // try {
    //     const res = await axios.get(`${import.meta.env.VITE_APP_INOVUS_BLOGS_BASE_URL}/ghost/api/content/authors/?key=${import.meta.env.VITE_APP_INOVUS_BLOGS_API_KEY}`);
    //     return res.data.authors;
    // } catch (error) {
    //     console.log(error);
    // }


    return [
        {
            "id": "654666da0b27848ad66173a9",
            "name": "Abhishek V Gopal",
            "slug": "abhishek",
            "profile_image": "https://blog.inovuslabs.org/content/images/2023/12/abhi.jpg",
            "cover_image": null,
            "bio": null,
            "website": null,
            "location": null,
            "facebook": null,
            "twitter": null,
            "meta_title": null,
            "meta_description": null,
            "url": "https://blog.inovuslabs.org/author/abhishek/"
        },
        {
            "id": "6540bc590b27848ad6616f50",
            "name": "Arjun A Acharry",
            "slug": "arjun-a-acharry",
            "profile_image": "https://blog.inovuslabs.org/content/images/2023/10/_MG_2998---Copy.JPG",
            "cover_image": "https://blog.inovuslabs.org/content/images/2023/10/Slide-16_9---1.png",
            "bio": null,
            "website": null,
            "location": null,
            "facebook": null,
            "twitter": null,
            "meta_title": null,
            "meta_description": null,
            "url": "https://blog.inovuslabs.org/author/arjun-a-acharry/"
        },
        {
            "id": "653f7a27b14998447e1d36d5",
            "name": "Arjun Krishna",
            "slug": "arjun",
            "profile_image": "https://www.gravatar.com/avatar/dd27406b884ca7ede3e5364c3dd6326c?s=250&r=x&d=mp",
            "cover_image": "https://blog.inovuslabs.org/content/images/2023/10/image-7.png",
            "bio": "Yet another human being born towards the end of the 20th century, and continues his Exploration & Experimentation on the Technology that the 21st century has to offer.",
            "website": "https://arjunkrishna.in/",
            "location": "Pathanamthitta | Bangalore",
            "facebook": null,
            "twitter": "@Decoded_Cipher",
            "meta_title": null,
            "meta_description": null,
            "url": "https://blog.inovuslabs.org/author/arjun/"
        },
        {
            "id": "654cb82cd6af5204882b104e",
            "name": "Athena Maria Vadakan",
            "slug": "athena",
            "profile_image": null,
            "cover_image": null,
            "bio": null,
            "website": null,
            "location": null,
            "facebook": null,
            "twitter": null,
            "meta_title": null,
            "meta_description": null,
            "url": "https://blog.inovuslabs.org/author/athena/"
        },
        {
            "id": "6540988cb14998447e1d3946",
            "name": "Badhusha Shaji",
            "slug": "badhusha",
            "profile_image": "https://blog.inovuslabs.org/content/images/2023/11/159407.jpg",
            "cover_image": "https://blog.inovuslabs.org/content/images/2023/11/sukuna-mobile-3840-x-2160-9r69kpp8t3ensitv.jpg",
            "bio": null,
            "website": null,
            "location": null,
            "facebook": null,
            "twitter": null,
            "meta_title": null,
            "meta_description": null,
            "url": "https://blog.inovuslabs.org/author/badhusha/"
        },
        {
            "id": "65715b9fda4a454504859902",
            "name": "Indhuchoodan R",
            "slug": "indhuchoodan",
            "profile_image": "https://blog.inovuslabs.org/content/images/2023/12/photo_2023-02-12_23-57-25.jpg",
            "cover_image": null,
            "bio": null,
            "website": null,
            "location": null,
            "facebook": null,
            "twitter": null,
            "meta_title": null,
            "meta_description": null,
            "url": "https://blog.inovuslabs.org/author/indhuchoodan/"
        },
        {
            "id": "1",
            "name": "Inovus Labs IEDC",
            "slug": "inovuslabs",
            "profile_image": "https://blog.inovuslabs.org/content/images/2023/10/Inovus_Logo-PNG-3.png",
            "cover_image": "https://blog.inovuslabs.org/content/images/2023/12/0.jpg",
            "bio": null,
            "website": "https://inovuslabs.org/",
            "location": null,
            "facebook": null,
            "twitter": "@InovusLabs",
            "meta_title": null,
            "meta_description": null,
            "url": "https://blog.inovuslabs.org/author/inovuslabs/"
        },
        {
            "id": "65715f4dda4a454504859925",
            "name": "Jeevan Joseph",
            "slug": "jeevan",
            "profile_image": "https://blog.inovuslabs.org/content/images/2023/12/135457348-ae6bf41e-2490-4a71-88aa-0bb2b252b66a--1-.jpg",
            "cover_image": null,
            "bio": null,
            "website": null,
            "location": null,
            "facebook": null,
            "twitter": null,
            "meta_title": null,
            "meta_description": null,
            "url": "https://blog.inovuslabs.org/author/jeevan/"
        },
        {
            "id": "65715d59da4a454504859916",
            "name": "Joseph Mathai Pathil",
            "slug": "joseph",
            "profile_image": "https://blog.inovuslabs.org/content/images/2023/12/josephmathai10.jpg",
            "cover_image": null,
            "bio": null,
            "website": null,
            "location": null,
            "facebook": null,
            "twitter": null,
            "meta_title": null,
            "meta_description": null,
            "url": "https://blog.inovuslabs.org/author/joseph/"
        },
        {
            "id": "65409075b14998447e1d393f",
            "name": "Nikhil T Das",
            "slug": "nikhil",
            "profile_image": "https://blog.inovuslabs.org/content/images/2023/10/da34f272-a6e1-4f6f-8414-79147fce3b5d.jpg",
            "cover_image": null,
            "bio": null,
            "website": null,
            "location": null,
            "facebook": null,
            "twitter": null,
            "meta_title": null,
            "meta_description": null,
            "url": "https://blog.inovuslabs.org/author/nikhil/"
        }
    ];

};



// Get gallery images
export const getGalleryAssets = async () => {

    let data = [
        {
          id: 1,
        //   title: 'Image 1',
        //   description: 'Image 1 description',
          largeURL: BASE_URL + '/assets/gallery/001.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/001.jpg',
        },
        {
          id: 2,
        //   title: 'Image 2',
        //   description: 'Image 2 description',
          largeURL: BASE_URL + '/assets/gallery/002.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/002.jpg',
        },
        {
          id: 3,
          title: 'Blessing Ceremony of Inovus Labs IEDC Post-renovation',
        //   description: 'Image 3 description',
          largeURL: BASE_URL + '/assets/gallery/003.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/003.jpg',
        },
        {
          id: 4,
        //   title: 'Image 4',
        //   description: 'Image 4 description',
          largeURL: BASE_URL + '/assets/gallery/004.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/004.jpg',
        },
        {
          id: 5,
        //   title: 'Image 5',
        //   description: 'Image 5 description',
          largeURL: BASE_URL + '/assets/gallery/005.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/005.jpg',
        },
        {
          id: 6,
        //   title: 'Image 6',
        //   description: 'Image 6 description',
          largeURL: BASE_URL + '/assets/gallery/006.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/006.jpg',
        },
        {
          id: 7,
        //   title: 'Image 7',
        //   description: 'Image 7 description',
          largeURL: BASE_URL + '/assets/gallery/007.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/007.jpg',
        },
        {
          id: 8,
          title: 'Team Inovus with Mr. Deepu S Nath, MD, Faya USA.',
        //   description: 'Image 8 description',
          largeURL: BASE_URL + '/assets/gallery/008.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/008.jpg',
        },
        {
          id: 9,
        //   title: 'Image 9',
        //   description: 'Image 9 description',
          largeURL: BASE_URL + '/assets/gallery/009.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/009.jpg',
        },
        {
          id: 10,
        //   title: 'Image 10',
        //   description: 'Image 10 description',
          largeURL: BASE_URL + '/assets/gallery/010.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/010.jpg',
        },
        {
          id: 11,
        //   title: 'Image 11',
        //   description: 'Image 11 description',
          largeURL: BASE_URL + '/assets/gallery/011.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/011.jpg',
        },
        {
          id: 12,
          title: 'Team Inovus at IEDC Summit 2018',
          description: 'Venue: Amal Jyothi College of Engineering, Kanjirappally',
          largeURL: BASE_URL + '/assets/gallery/012.jpg',
          thumbnailURL: BASE_URL + '/assets/gallery/012.jpg',
        }
    ]

    return data;

};



// Get nanodegree details
export const getNanoDegreeDetails = async () => {

    let data = [
                    
        {
            id: 1,
            title: "Internet of Things (IoT) with Arduino",
            description: "The 'Internet of Things (IoT) with Arduino' nano degree program is an ideal starting point for beginners eager to explore the exciting world of IoT. This user-friendly program introduces participants to the basics of Arduino, a popular open-source electronics platform, and seamlessly integrates IoT concepts. Through hands-on projects and step-by-step guidance, learners gain practical skills in building smart, connected devices. By the end of the program, students will have a solid foundation in IoT development, empowering them to bring their creative ideas to life in the rapidly evolving digital landscape.",
            level: "Beginner",
            status: true,
            
            syllabus: [
                {
                    id: 1,
                    title: "Introduction to the IoT",
                    lessons: [
                        "Simple explanation of IoT and its impact on daily life",
                        "Examples of IoT in various sectors: home automation, healthcare, and agriculture",
                        "Brief discussion on the future potential of IoT",
                    ],
                    resources: [
                        "https://www.youtube.com/embed/PXP4VSaD7H4?si=5Dtyy1Kn_02bnGJ-"
                    ]
                },

                {
                    id: 2,
                    title: "Introduction to Microcontrollers and Microprocessors and Arduino",
                    lessons: [
                        "Simple definitions suitable for beginners",
                        "Contrast in usage with real-life examples",
                        "Microcontroller: Used in a thermostat",
                        "Microprocessor: Powering a smartphone",
                        "Basic components and functionalities of each",
                        "What is Arduino and why is it popular among beginners?",
                        "Overview of different Arduino boards",
                        "Overview of different Arduino boards",
                    ],
                    resources: [
                        "https://www.youtube.com/embed/1ENiVwk8idM?si=o6LnT0gCM5vZCykO",
                        "https://www.youtube.com/embed/7vhvnaWUZjE?si=DOVH4ar_YNSZBP2U"
                    ]
                },

                {
                    id: 3,
                    title: "Inputs and Outputs in Arduino",
                    lessons: [
                        "Explanation of digital and analog pins",
                        "How to read signals from sensors",
                        "How to send signals to actuators like LEDs or motors",
                    ],
                    resources: [
                        "https://www.youtube.com/embed/BMMnOAzcqoE?si=h6eDFrCI-hmROzBu"
                    ]
                },

                {
                    id: 4,
                    title: "Introduction to Online Simulator: Wowki and Tinkercad",
                    lessons: [
                        "Benefits of using Wowki and Tinkercad for beginners",
                        "How to set up a virtual circuit",
                        "Simulating the tasks above in Wowki or Thinkercad"
                    ],
                    resources: [
                        "https://www.youtube.com/embed/c5btoce--ZU?si=erHTU9YHsgA4ql5y"
                    ],
                    tasks: [
                        {
                            id: 1,
                            title: "LED Blinking",
                            description: [
                                "Blink an LED using Arduino"
                            ],
                        }
                    ]
                },

                {
                    id: 5,
                    title: "Working with Sensors",
                    lessons: [
                        "Ultrasonic Sensor",
                        "Humidity Sensor",
                        "Gas Sensor",
                        "IR Receiver",
                        "LDR (Light-Dependent Resistor)",
                        "PIR (Passive Infrared) Sensor",
                        "Pushbutton",
                        "Joystick Module",
                    ],
                    resources: [
                        "https://www.youtube.com/embed/0Lhgd8PQmn0?si=uwHoi4Kp7p3OW0iQ"
                    ],
                    tasks: [
                        {
                            id: 2,
                            title: "Distance Measurement",
                            description: [
                                "Creating a simple distance meter"
                            ],
                        },
                        {
                            id: 3,
                            title: "Humidity Monitoring",
                            description: [
                                "Building a basic humidity level indicator"
                            ],
                        },
                        {
                            id: 4,
                            title: "Gas Leak Detector",
                            description: [
                                "Designing a simple gas leak alarm"
                            ],
                        },
                        {
                            id: 5,
                            title: "Remote Control Command Reception",
                            description: [
                                "Understanding how to receive and interpret IR signals"
                            ],
                        },
                        {
                            id: 6,
                            title: "Light Intensity Measurement",
                            description: [
                                "Creating a system that reacts to changing light conditions"
                            ],
                        },
                        {
                            id: 7,
                            title: "Motion Detection System",
                            description: [
                                "Building a motion-activated device"
                            ],
                        },
                        {
                            id: 8,
                            title: "Interactive Control",
                            description: [
                                "Using a pushbutton to control an LED or a buzzer"
                            ],
                        },
                        {
                            id: 9,
                            title: "Directional Control",
                            description: [
                                "Using a joystick to control an LED array or a small display"
                            ],
                        },
                    ]
                },

                {
                    id: 6,
                    title: "Connecting and Controlling a Servo Motor",
                    lessons: [
                        "Understanding servo motors and their uses",
                    ],
                    tasks: [
                        {
                            id: 10,
                            title: "Controlling Servo Motor",
                            description: [
                                "Move a servo motor to specific angles"
                            ],
                        },
                    ]
                },

                {
                    id: 7,
                    title: "Using LCD Displays",
                    lessons: [
                        "Introduction to LCD displays and their types",
                    ],
                    tasks: [
                        {
                            id: 11,
                            title: "Displaying Sensor Readings",
                            description: [
                                "Show readings from sensors on an LCD"
                            ],
                        }
                    ]
                },
                
            ],

            projects: [
                
                {
                    id: 1,
                    title: "Automated Room Lighting System",
                    objective: "Build an automatic lighting system that turns on in the dark and off in bright conditions",
                    components: [
                        "Arduino",
                        "Light-Dependent Resistor (LDR)",
                        "LED or LED strip",
                    ],
                    skills: [
                        "Reading analog input from LDR",
                        "Controlling LED output"
                    ],
                    description: "This project uses an LDR to detect the amount of light in the room. When the light level falls below a certain threshold, the Arduino commands an LED to turn on. The LED turns off again when the light level rises above the threshold."
                },

                {
                    id: 2,
                    title: "Basic Security System",
                    objective: "Design a simple security system that sounds an alarm when motion is detected",
                    components: [
                        "Arduino",
                        "Passive Infrared (PIR) sensor",
                        "Buzzer",
                        "LED indicators",
                    ],
                    skills: [
                        "Digital input from PIR sensor",
                        "Output control with buzzer and LED"
                    ],
                    description: "This project uses a PIR sensor to detect motion in the room. When the sensor detects motion, the Arduino commands a buzzer to sound an alarm and an LED to flash. The alarm and LED turn off again when the sensor no longer detects motion."
                },

                {
                    id: 3,
                    title: "Personal Room Thermostat",
                    objective: "Implement a thermostat to monitor and control room temperature",
                    components: [
                        "Arduino",
                        "Temperature sensor",
                        "LCD display",
                        "Buttons / Potentiometer",
                    ],
                    skills: [
                        "Temperature sensing",
                        "Data display on LCD",
                        "User input handling"
                    ],
                    description: "This project uses a temperature sensor to detect the temperature in the room. The Arduino displays the temperature on an LCD screen and allows the user to set a desired temperature using buttons or a potentiometer. When the temperature rises above the desired level, the Arduino commands a buzzer to sound an alarm and an LED to flash. The alarm and LED turn off again when the temperature falls below the desired level."
                },

                {
                    id: 4,
                    title: "Smart Dustbin",
                    objective: "Create an automated dustbin that opens its lid when someone approaches",
                    components: [
                        "Arduino",
                        "Ultrasonic Sensor",
                        "Servo Motor",
                    ],
                    skills: [
                        "Reading analog input from temperature sensor",
                        "Controlling LED output"
                    ],
                    description: "This project uses an ultrasonic sensor to detect the presence of a person or object near the dustbin. When the sensor detects someone within a certain distance, the Arduino commands a servo motor to open the lid of the dustbin, closing it again after a set period or when the object moves away."
                },

                {
                    id: 5,
                    title: "Remote-Controlled Light Dimmer",
                    objective: "Construct a light dimming system controlled by an IR remote",
                    components: [
                        "Arduino",
                        "IR receiver",
                        "LED / dimmable light",
                        "IR remote control",
                    ],
                    skills: [
                        "IR signal decoding",
                        "Light dimming using PWM",
                        "Remote control usage"
                    ],
                    description: "This project uses an IR receiver to detect signals from an IR remote control. When the Arduino receives a signal, it commands an LED to turn on or off, or to dim or brighten."
                },

                {
                    id: 6,
                    title: "Pin Locker with Keypad and LCD",
                    objective: "Create a pin-based locker system using a keypad and LCD display",
                    components: [
                        "Arduino",
                        "Numeric keypad",
                        "16x2 LCD screen", 
                        "Servo motor",
                    ],
                    skills: [
                        "Input handling from keypad",
                        "Displaying information on LCD",
                        "Controlling servo to lock/unlock"
                    ],
                    description: "This project uses a numeric keypad to allow the user to enter a PIN. When the correct PIN is entered, the Arduino commands a servo motor to unlock the locker. The Arduino also displays the status of the locker on an LCD screen."
                }

            ]
        },

        {
            id: 2,
            title: "Web Designing for Absolute Beginners",
            description: "The 'Web Design for Absolute Beginners' nano degree program is a user-friendly and comprehensive introduction to the world of web design. Tailored specifically for those with no prior experience, this program covers fundamental concepts such as HTML, CSS, and basic design principles. With hands-on projects and step-by-step guidance, participants will gain practical skills to create visually appealing and functional websites from scratch. Perfect for absolute beginners, this nano degree program provides a supportive learning environment to build a solid foundation in web design.",
            level: "Beginner",
            status: false,
            syllabus: [],
            projects: []
        },

        {
            id: 3,
            title: "Getting Started with UI/UX Design",
            description: "The 'Getting Started with UI/UX Design' nano degree program is a comprehensive and hands-on course designed for beginners eager to dive into the dynamic world of User Interface (UI) and User Experience (UX) design. Participants will learn fundamental design principles, industry-standard tools, and practical techniques to create visually appealing and user-friendly digital experiences. Through a combination of theory and real-world projects, students will develop the skills needed to craft intuitive interfaces and enhance user interactions, setting a strong foundation for a successful career in UI/UX design.",
            level: "Beginner",
            status: false,
            syllabus: [],
            projects: []
        },

        {
            id: 4,
            title: "DevOps for Nerds",
            description: "'DevOps for Nerds' is an intermediate-level nano degree program designed to empower tech enthusiasts with the skills and knowledge needed to excel in the world of DevOps. This hands-on program delves into advanced concepts of development and operations integration, automation, continuous integration/continuous deployment (CI/CD), and infrastructure as code (IaC). Tailored for those with a nerdy passion for technology, the program combines practical exercises, real-world scenarios, and collaborative projects to deepen participants' understanding of DevOps practices, enabling them to streamline processes and enhance collaboration between development and operations teams. Graduates emerge with a robust skill set, ready to contribute to the efficiency and agility of modern software development and delivery pipelines.",
            level: "Intermediate",
            status: false,
            syllabus: [],
            projects: []
        }
    ]

    return data;
    
}



// Get all reports
export const getReports = async () => {

    let data = [
        {
            id: 1,
            title: "IEDC Monthly Report",
            year: "January 2018 - December 2019",
            url: "https://docs.google.com/document/d/1JDD5wN1zIb5QgYzHNhDSqWCz11MCvREe"
        },
        {
            id: 2,
            title: "IEDC Activity Report",
            year: "January 2019 - December 2019",
            url: "https://drive.google.com/file/d/1USpa2PH2aG7sbC-kY2ScDxJ829kOWx8N"
        },
        {
            id: 3,
            title: "IEDC Activity Report",
            year: "January 2021 - December 2021",
            url: "https://drive.google.com/file/d/1USpa2PH2aG7sbC-kY2ScDxJ829kOWx8N"
        },
        {
            id: 4,
            title: "IEDC Activity Report",
            year: "January 2022 - December 2022",
            url: "https://drive.google.com/file/d/1USpa2PH2aG7sbC-kY2ScDxJ829kOWx8N"
        },
        {
            id: 5,
            title: "IEDC Activity Report",
            year: "January 2023 - October 2023",
            url: "https://drive.google.com/file/d/1USpa2PH2aG7sbC-kY2ScDxJ829kOWx8N"
        },
        {
            id: 6,
            title: "IEDC Activity Report",
            year: "January 2023 - October 2023",
            url: "https://drive.google.com/file/d/1USpa2PH2aG7sbC-kY2ScDxJ829kOWx8N"
        }
    ];

    return data;

};



// Get all learning resources
export const getLearningResources = async (page, limit) => {

    try {
        const res = await axios.get(`${import.meta.env.VITE_APP_INOVUS_API_BASE_URL}/api/v1/resources?page=${page}&limit=${limit}`);
        return res.data;
    } catch (error) {
        console.log(error);
    }

};



// Get team members
export const getTeamMembers = async () => {

    let data = [
        {
            title: 'Inovus 6th Generation',
            date: '2023-2024',
            showTeam: true,
            members: [

                {
                    name: ' Roji Thomas',
                    position: 'Nodal Officer',
                    avatar: BASE_URL + '/assets/team/2018-2020/rojithomas.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Cina Mathew',
                    position: 'Assistant Nodal Officer',
                   avatar: BASE_URL + '/assets/team/2023/cinamathew.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Arjun Krishna',
                    position: 'Mentor',
                   avatar: BASE_URL + '/assets/team/2018-2020/arjunkrishna.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Badhusha Shaji',
                    position: 'Chief Executive Officer',
                   avatar: BASE_URL + '/assets/team/2024/BadhushaShaji.jpeg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Abhishek V Gopal',
                    position: 'Chief Technical Officer',
                   avatar: BASE_URL + '/assets/team/2024/Abhishek.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Nikhil T Das',
                    position: 'Chief Operations Officer',
                   avatar: BASE_URL + '/assets/team/2024/NikilTDas.jpeg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Nithin Daniel',
                    position: 'Chief Financial Officer',
                   avatar: BASE_URL + '/assets/team/2024/Nithin.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Arjun A Acharry',
                    position: 'Chief Creative Officer',
                   avatar: BASE_URL + '/assets/team/2024/ArjunAcharry.JPG',
                    social: {
                      facebook: ""
                    }
                },{
                    name: ' Joel Jacob Thomas',
                    position: 'Chief Marketing Officer',
                   avatar: BASE_URL + '/assets/team/2024/JoelJacob.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Lekshmi Sree J',
                    position: 'Women in Tech Lead',
                   avatar: BASE_URL + '/assets/team/2024/lekshmisree.jpeg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Milan Sony',
                    position: 'Community Lead',
                   avatar: BASE_URL + '/assets/team/2024/milansony.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Anu Tiji',
                    position: 'IPR & Research Lead',
                   avatar: BASE_URL + '/assets/team/2024/Anutiji.jpeg',
                    social: {
                      facebook: ""
                    }
                }, 
            ]
        }, {
            title: 'Inovus 5th Generation',
            date: '2022-2023',
            showTeam: false,
            members: [

                {
                    name: ' Roji Thomas',
                    position: 'Nodal Officer',
                   avatar: BASE_URL + '/assets/team/2018-2020/rojithomas.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Cina Mathew',
                    position: 'Assistant Nodal Officer',
                   avatar: BASE_URL + '/assets/team/2023/cinamathew.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Arjun Krishna',
                    position: 'Mentor',
                   avatar: BASE_URL + '/assets/team/2018-2020/arjunkrishna.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: 'Jeeven Josheph',
                    position: 'Chief Executive Officer',
                   avatar: BASE_URL + '/assets/team/2022/jeevenjosheph.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Nikhil T Das',
                    position: 'Chief Financial Officer',
                   avatar: BASE_URL + '/assets/team/2023/Nikhiltdas.JPG',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Joseph Mathai Pathil',
                    position: 'Chief Operations Officer',
                   avatar: BASE_URL + '/assets/team/2022/josephmathai.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Induchoodan R',
                    position: 'Chief Technical Officer',
                   avatar: BASE_URL + '/assets/team/2023/Indhuchoodan.JPG',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Meretta Suresh',
                    position: 'Chief Marketing Officer',
                   avatar: BASE_URL + '/assets/team/2023/Meritta.JPG',
                    social: {
                      facebook: ""
                    }
                },  {
                    name: ' Badhusha Shaji',
                    position: 'Chief Creative Officer',
                   avatar: BASE_URL + '/assets/team/2023/badhushashaji.jpeg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Aryadevi C S',
                    position: 'Chief Social Officer',
                   avatar: BASE_URL + '/assets/team/2023/aryadevics.JPG',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Amal Joseph',
                    position: 'Chief Innovations Officer',
                   avatar: BASE_URL + '/assets/team/2023/AmalJoseph.JPG',
                    social: {
                      facebook: ""
                    }
                }, 
            ]
        }, {
            title: 'Inovus 4th Generation',
            date: '2021-2022',
            showTeam: false,
            members: [

                {
                    name: ' Roji Thomas',
                    position: 'Nodal Officer',
                   avatar: BASE_URL + '/assets/team/2018-2020/rojithomas.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Arjun Krishna',
                    position: 'Student Co-ordinator',
                   avatar: BASE_URL + '/assets/team/2018-2020/arjunkrishna.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Sreelakshmi Anilkumar',
                    position: 'Chief Executive Officer',
                   avatar: BASE_URL + '/assets/team/2022/srelekshmi.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Jeevan Joseph',
                    position: 'Chief Technical Officer',
                   avatar: BASE_URL + '/assets/team/2022/jeevenjosheph.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Sandra Krishnan',
                    position: 'Chief Financial Officer',
                   avatar: BASE_URL + '/assets/team/2022/sandra.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Joseph Mathai Pathi',
                    position: 'Chief operations Officer',
                   avatar: BASE_URL + '/assets/team/2022/josephmathai.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Christeena Zachariah',
                    position: 'Chief Creative Officer',
                   avatar: BASE_URL + '/assets/team/2022/christeena.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Meretta Suresh',
                    position: 'Chief Social Officer',
                   avatar: BASE_URL + '/assets/team/2022/meretta.jpg',
                    social: {
                      facebook: ""
                    }
                }, 
            ]
        }, {
            title: 'Inovus 3rd Generation',
            date: '2020-2021',
            showTeam: false,
            members: [

                {
                    name: ' Roji Thomas',
                    position: 'Nodal Offier',
                   avatar: BASE_URL + '/assets/team/2018-2020/rojithomas.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Jithin Shah',
                    position: 'Student Co-ordinator',
                   avatar: BASE_URL + '/assets/team/2018-2020/jithinshah.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Antony Frenandez',
                    position: 'Chief Executive Officer',
                   avatar: BASE_URL + '/assets/team/2021/antonyfernandez.png',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Indhuchoodan R',
                    position: 'Cheif Technical Officer',
                   avatar: BASE_URL + '/assets/team/2021/induchoodan.png',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Franklin Jetty Johnson',
                    position: 'Chief Financial Officer',
                   avatar: BASE_URL + '/assets/team/2021/franklin.png',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Thomas George',
                    position: 'Chief Marketing Officer',
                   avatar: BASE_URL + '/assets/team/2021/thomasgeorge.png',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Ckesiah Mary Sam',
                    position: 'Chief Innovations Officer',
                   avatar: BASE_URL + '/assets/team/2021/ckeiah.png',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Jaike Jacob Binoy',
                    position: 'Chief Operations Officer',
                   avatar: BASE_URL + '/assets/team/2021/jaikejacob.png',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: 'Sheril Susan Manu',
                    position: 'Chief Creative Officer',
                   avatar: BASE_URL + '/assets/team/2021/sherilsusan.png',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Nikhil T Das',
                    position: 'Chief Social Officer',
                   avatar: BASE_URL + '/assets/team/2021/nikhiltdas.png',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Meera Mariam Jacob',
                    position: 'Stock Manager',
                   avatar: BASE_URL + '/assets/team/2021/meeramariam.png',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Anuraj T R',
                    position: 'Event Curator',
                   avatar: BASE_URL + '/assets/team/2021/anuraj.png',
                    social: {
                      facebook: ""
                    }
                }, 
            ]
        }, {
            title: 'Inovus 2nd Generation',
            date: '2018-2020',
            showTeam: false,
            members: [

                {
                    name: ' Roji Thomas',
                    position: 'Nodal Officer',
                   avatar: BASE_URL + '/assets/team/2018-2020/rojithomas.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Jithin Shah',
                    position: 'Student Co-ordinator',
                   avatar: BASE_URL + '/assets/team/2018-2020/jithinshah.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Laya Anna Lalan',
                    position: 'Chief Executive Officer',
                   avatar: BASE_URL + '/assets/team/2018-2020/layaanna.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Midhun Murali',
                    position: 'Chief Technical Officer',
                   avatar: BASE_URL + '/assets/team/2018-2020/midhunmurali.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Megha Manoj',
                    position: 'Chief Financial Officer',
                   avatar: BASE_URL + '/assets/team/2018-2020/meghamanoj.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Karpaka Devi',
                    position: 'Chief Marketing Officer',
                   avatar: BASE_URL + '/assets/team/2018-2020/karpaka.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name:' Arjun Krishna',
                    position: 'Chief Innovations Officer',
                   avatar: BASE_URL + '/assets/team/2018-2020/arjunkrishna.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Johna Aswin Selva',
                    position: 'Chief Operations Officer',
                   avatar: BASE_URL + '/assets/team/2018-2020/johnaaswin.jpg',
                    social: {
                      facebook: ""
                    }
                },{
                    name:' Justin Titus',
                    position: 'Chief Creative Officer',
                   avatar: BASE_URL + '/assets/team/2018-2020/justin.jpg',
                    social: {
                      facebook: ""
                    }
                }, {
                    name: ' Alan Varghese ',
                    position: 'Chief Social Officer',
                   avatar: BASE_URL + '/assets/team/2018-2020/alanvarghese.jpg',
                    social: {
                      facebook: ""
                    }
                },  
            ]
        }, {
            title: 'The Founders of Inovus Labs IEDC',
            date: '2017',
            showTeam: false,
            members: [

            {
              name: '',
              position: '',
              avatar: BASE_URL + '/assets/team/founders.jpg',
              social: {
                facebook: ""
              }
            },
             
            
             
            ]
        },
    ];

    return data;

}



// Get all news
export const getNewsReports = async () => {

    let data = [
        {
            date: "28 Oct 2022",
            type: "YouTube",
            platform: "Manorama News",
            url: "https://www.youtube.com/embed/FwNgw0Rff6I?si=e5U_ct0dVZKQDkYF"
        },
        {
            date: "20 Oct 2022",
            type: "Newspaper",
            edition: "Kottayam Edition",
            platform: "Deepika",
            url: BASE_URL + "/assets/news/deepika.jpeg"
        },
        {
            date: "22 Oct 2022",
            type: "Newspaper",
            edition: "Kottayam Edition",
            platform: "Malayala Manorama",
            url: BASE_URL + "/assets/news/manorama.jpeg"
        },
        {
            date: "22 Oct 2022",
            type: "Newsletter",
            platform: "IEDC Monthly Newsletter",
            url: BASE_URL + "/assets/news/iedc_newsletter.jpeg"
        },
    ]

    return data;

}



// Search Component
export const SearchComponent = (search) => {
    
        let result = [];
    
        for(let i=0; i<stockList.length; i++) {
            if(stockList[i].toLowerCase().includes(search.toLowerCase())) {
                result.push(stockList[i]);
            }
        }
    
        return result;
};



// Get gallery images
export const getIotGalleryAssets = async () => {

    let data = [
        {
          id: 1,
        //   title: 'Image 1',
        //   description: 'Image 1 description',
          largeURL: BASE_URL + '/assets/iotGallery/01.jpg',
          thumbnailURL: BASE_URL + '/assets/iotGallery/01.jpg',
        },
        {
          id: 2,
        //   title: 'Image 2',
        //   description: 'Image 2 description',
          largeURL: BASE_URL + '/assets/iotGallery/02.jpg',
          thumbnailURL: BASE_URL + '/assets/iotGallery/02.jpg',
        },
        {
          id: 3,
        //   title: 'Blessing Ceremony of Inovus Labs IEDC Post-renovation',
        //   description: 'Image 3 description',
          largeURL: BASE_URL + '/assets/iotGallery/03.jpg',
          thumbnailURL: BASE_URL + '/assets/iotGallery/03.jpg',
        },
        {
          id: 4,
        //   title: 'Image 4',
        //   description: 'Image 4 description',
          largeURL: BASE_URL + '/assets/iotGallery/04.jpg',
          thumbnailURL: BASE_URL + '/assets/iotGallery/04.jpg',
        },
        {
          id: 5,
        //   title: 'Image 5',
        //   description: 'Image 5 description',
          largeURL: BASE_URL + '/assets/iotGallery/05.jpg',
          thumbnailURL: BASE_URL + '/assets/iotGallery/05.jpg',
        },
        {
          id: 6,
        //   title: 'Image 6',
        //   description: 'Image 6 description',
          largeURL: BASE_URL + '/assets/iotGallery/06.jpg',
          thumbnailURL: BASE_URL + '/assets/iotGallery/06.jpg',
        },
        {
          id: 7,
        //   title: 'Image 7',
        //   description: 'Image 7 description',
          largeURL: BASE_URL + '/assets/iotGallery/07.jpg',
          thumbnailURL: BASE_URL + '/assets/iotGallery/07.jpg',
        },
        {
          id: 8,
        //   title: 'Team Inovus with Mr. Deepu S Nath, MD, Faya USA.',
        //   description: 'Image 8 description',
          largeURL: BASE_URL + '/assets/iotGallery/08.jpg',
          thumbnailURL: BASE_URL + '/assets/iotGallery/08.jpg',
        },
        {
          id: 9,
        //   title: 'Image 9',
        //   description: 'Image 9 description',
          largeURL: BASE_URL + '/assets/iotGallery/09.jpg',
          thumbnailURL: BASE_URL + '/assets/iotGallery/09.jpg',
        },
        {
            id: 10,
            //   title: 'Image 10',
            //   description: 'Image 10 description',
            largeURL: BASE_URL + '/assets/iotGallery/10.jpg',
            thumbnailURL: BASE_URL + '/assets/iotGallery/10.jpg',
        },
        {
            id: 11,
            //   title: 'Image 10',
            //   description: 'Image 10 description',
            largeURL: BASE_URL + '/assets/iotGallery/11.jpg',
            thumbnailURL: BASE_URL + '/assets/iotGallery/11.jpg',
        },
        {
            id: 12,
            //   title: 'Image 10',
            //   description: 'Image 10 description',
            largeURL: BASE_URL + '/assets/iotGallery/12.jpg',
            thumbnailURL: BASE_URL + '/assets/iotGallery/12.jpg',
        },
        {
            id: 13,
            //   title: 'Image 10',
            //   description: 'Image 10 description',
            largeURL: BASE_URL + '/assets/iotGallery/13.jpg',
            thumbnailURL: BASE_URL + '/assets/iotGallery/13.jpg',
        },
    ]

    return data;

};



// Get Outreach Events
export const getOutreachEvents = async () => {

    let data = [
        {
            id: 1,
            title: "Inspire Orientation",
            location: "Placid Vidya Vihar Senior Secondary School, Changanacherry",
            description: "The Inspire Orientation program, organized by Inovus Labs IEDC, was a significant step in empowering students to participate in the Inspire initiative conducted by the Indian Government. This initiative aims to cultivate innovation and creativity among young minds. The program featured accomplished resource persons, Nikhil T Das, Badhusha Shaji, and Abhishek V Gopal, and took place at Placid Vidhyavihar. It served as a platform to inspire and equip students from Classes 7 to 9 to turn their innovative ideas into reality.",
            date: ["12 July 2023"],
            tags: ["Session"],
            thumbnail: BASE_URL + "/assets/activity/Inspire.png",
            images: [
                BASE_URL + "/assets/activity/Inspire.png"
            ]
        },
        {
            id: 2,
            title: "Empower the Students",
            location: "St Berchmans Higher Secondary School, Changanacherry",
            description: "The Empower The Students program, organized by Inovus Labs IEDC, was a transformative initiative designed to empower students to develop their innovative ideas. With a distinguished panel of resource persons, including Nikhil T Das, Badhusha Shaji, Abhishek V Gopal, and Nithin Daniel, this program aimed to equip students from Classes 5 to 10 at St. Berchman's High School (SB) with the knowledge, skills, and motivation needed to participate effectively in the Indian Government's Inspire initiative.",
            date: ["14 July 2023"],
            tags: ["Session"],
            thumbnail: BASE_URL + "/assets/activity/Empower.png",
            images: [
                BASE_URL + "/assets/activity/Empower.png"
            ]
        },
        {
            id: 3,
            title: "Arduino Workshop",
            location: "Institute of Human Resources Development, Mallappally",
            description: "We have conducted Arduino workshop for the students of IHRD Mallapally students. It was a wonderfull experience to interact with new fellows",
            date: ["23 January 2023"],
            tags: ["Workshop"],
            thumbnail: BASE_URL + "/assets/activity/arduinoIHRD.jpeg",
            images: [
                BASE_URL + "/assets/activity/arduinoIHRD.jpeg"
            ]
        },
        {
            id: 4,
            title: "IoT & Robotics Exhibition",
            location: "St Berchmans Higher Secondary School, Changanacherry",
            description: "The IoT and Robotics Exhibition held at SB High School was a comprehensive event centered around Information Technology. Attendees had the opportunity to immerse themselves in cutting-edge technologies, including hands-on experiences with VR glasses and hoverboards. The interactive nature of the exhibition not only provided valuable insights into the world of IoT and robotics but also allowed participants to explore and engage with the showcased technologies firsthand. The event fostered a dynamic learning environment, sparking curiosity and interest among the attendees as they delved into the exciting possibilities offered by IT-related advancements. ",
            date: ["03 February 2023"],
            tags: ["Exhibition"],
            thumbnail: BASE_URL + "/assets/activity/Iotexebition.jpeg",
            images: [
                BASE_URL + "/assets/activity/Iotexebition.jpeg"
            ]
        },
        {
            id: 5,
            title: "Hands-on IoT Workshop",
            location: "Mar Baselios Christian College of Engineering & Technology, Kuttikkanam",
            description: "Conducted at MBC Kuttikanam, this exhibition catered to a gathering of students eager to explore and learn about the intricacies of IoT (Internet of Things).",
            date: ["27 April 2023", "28 April 2023"],
            tags: ["Workshop"],
            thumbnail: BASE_URL + "/assets/activity/handonIOT.jpg",
            images: [
                BASE_URL + "/assets/activity/handonIOT.jpg"
            ]
        },
        {
            id: 6,
            title: "XPOVISTA ’23",
            location: "Kristu Jyoti Higher Secondary School, Changanacherry",
            description: "XPOVISTA '23 stands as an exhibition organized by Kristu Jyoti Higher Secondary School. As active participants from Inovus Labs Innovation and Entrepreneurship Development Cell (IEDC), we proudly presented an array of our innovative products at the exhibition. Our involvement in XPOVISTA allowed us to showcase the results of our creative endeavors and share our contributions with the broader community. The event served as a platform for us to engage with fellow participants, visitors, and enthusiasts, creating a collaborative environment for the exchange of ideas and showcasing the spirit of innovation fostered by Inovus Labs IEDC.",
            date: ["20 September 2023", "22 September 2023"],
            tags: ["Exhibition"],
            thumbnail: BASE_URL + "/assets/activity/xpovista.JPG",
            images: [
                BASE_URL + "/assets/activity/xpovista.JPG"
            ]
        },
    ];

    return data;

};


// User Signup / Registration
export const userRegister = async (user) => {

    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_INOVUS_API_BASE_URL}/auth/register`, user);
        return res.data;
    } catch (error) {
        console.log(error);
    }

};

// User Login
export const userLogin = async (user) => {

    try {
        const res = await axios.post(`${import.meta.env.VITE_APP_INOVUS_API_BASE_URL}/auth/login`, user);
        return res.data;
    } catch (error) {
        console.log(error);
        console.log(error.response.status);
        return error;   
    }

};