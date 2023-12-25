
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
            },
            {
                "id": 11,
                "title": "8x8 LED Matrix",
                "description": "An 8x8 LED matrix created by college students is a compact electronic display consisting of 64 individual Light Emitting Diodes (LEDs) arranged in an 8 by 8 grid pattern. The matrix serves as a visually dynamic platform for showcasing various patterns, text, or simple animations by selectively illuminating specific LEDs",
                "thumbnail": BASE_URL + "/assets/projects/8x8LED.jpeg",
                "status": "Completed",
                "tags": ["Electronics"],
                "contributors": [
                    {
                        "name": "Induchoodan R",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 12,
                "title": "Morse Code Generator",
                "description": "Morse code generator is a device or software application designed to convert text or messages into Morse code, a method of encoding characters using sequences of dots and dashes.",
                "thumbnail": BASE_URL + "/assets/projects/morsecode.png",
                "status": "Completed",
                "tags": ["Software"],
                "url": {
                    'type': 'demo',
                    'link': 'https://verbose-reflective-recorder.glitch.me/'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 13,
                "title": "Blind Stick",
                "description": "A small prototype to aware blind people to be alert about the obstacles.",
                "thumbnail": BASE_URL + "/assets/projects/Blind_stick.jpeg",
                "status": "Completed",
                "tags": ["Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 14,
                "title": "Bluetooth RC Car",
                "description": "A prototype of a BT controled RC car.",
                "thumbnail": BASE_URL + "/assets/projects/RC_CAR.jpeg",
                "status": "Completed",
                "tags": ["Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 15,
                "title": "RFID based Smart Lock (using Arduino)",
                "description": "A prototype of a door lock which can be unlocked using RFID tags",
                "thumbnail": BASE_URL + "/assets/projects/smart_lock.jpg",
                "status": "Completed",
                "tags": ["Electronics", "Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 16,
                "title": "Smart Traffic Lights using VR Module",
                "description": "VR module is used to sense sound. This project will help the light to indicate the approch of an ambulance so that the signal can turn green.",
                "thumbnail": BASE_URL + "/assets/projects/traffic_light.jpeg",
                "status": "Completed",
                "tags": ["Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 17,
                "title": "E-waste Bin",
                "description": "Automatic waste bin which detect a person and turns open automatically .",
                "thumbnail": BASE_URL + "/assets/projects/E-waste_Bin.jpeg",
                "status": "Completed",
                "tags": ["Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 18,
                "title": "Smart Garden using Capacitive Soil Moisture",
                "description": "A smart garden using capacitive soil moisture technology is an innovative and efficient gardening system designed by a team of students. This is a better solution for gardening that integrates capacitive soil moisture sensors to optimize the watering process for plants. The project is aimed to reduce the water consumption by the individuals and to automate the process of watering.",
                "thumbnail": BASE_URL + "/assets/projects/Soil.jpeg",
                "status": "Completed",
                "tags": ["Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 19,
                "title": "Breath Analyzer",
                "description": "The Breath Analyser created by college students is a cutting-edge, portable device designed to accurately measure and analyze the composition of an individual’s breath. The Breath Analyser can swiftly and precisely detect the presence of alcohol in a person’s breath, making it a crucial tool for law enforcement agencies to combat drunk driving and ensure road safety.",
                "thumbnail": BASE_URL + "/assets/projects/Breath_ana.jpg",
                "status": "Completed",
                "tags": ["Electronics, Hardware"],
                "contributors": [
                    {
                        "name": "Sane Sunil",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 20,
                "title": "InoMail",
                "description": "The main feature of this product was it can send multiple assets in a single mail through ino mail. It can send bulk emails with ease, whether you're reaching out to a small team or a massive audience. Ino Mail automates the process, saving you time and eliminating the risk of errors. The product can be trusted in its security of your data. Ino Mail prioritizes the protection of your information, ensuring that your communications are delivered safely and securely. In short, InoMail empowers you to communicate efficiently, personally, and at scale. Whether you're a business professional, marketer, or educator, our software simplifies the process of sending personalized messages",
                "thumbnail": BASE_URL + "/assets/projects/Ino-mail.jpeg",
                "status": "Progress",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/inovus-labs/inomail/'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 21,
                "title": "QuikSubmit",
                "description": "A pivotal tool enabling email transmission directly from a website, overcoming the inherent constraints of static sites.",
                "thumbnail": BASE_URL + "/assets/projects/Ino-mail.jpeg",
                "status": "Progress",
                "tags": ["Software"],
                "url": {
                    'type': 'source',
                    'link': 'https://github.com/inovus-labs/QuikSubmit'
                },
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 22,
                "title": "Robotic Arm",
                "description": "A remarkable robotic arm, meticulously crafted by a team of ingenious college students, showcases an impressive fusion of engineering prowess and innovative design. This marvel of modern technology consists of multiple high-precision servos working in perfect harmony to execute intricate tasks with precision and finesse.",
                "thumbnail": BASE_URL + "/assets/projects/Ino-mail.jpeg",
                "status": "Completed",
                "tags": ["Electronics, Internet of Things"],
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            }
            ,
            {
                "id": 23,
                "title": "LPG Detector",
                "description": "The college student-created LPG (liquefied petroleum gas) detector is an innovative device designed to enhance safety in domestic and commercial environments by detecting the presence of potentially hazardous gas leaks. This compact and user-friendly device is the result of collaborative efforts and cutting-edge engineering from a group of talented and ambitious college students.",
                "thumbnail": BASE_URL + "/assets/projects/Ino-mail.jpeg",
                "status": "Completed",
                "tags": ["Electronics, Internet of Things"],
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            }          
            ,
            {
                "id": 24,
                "title": "Smart Door",
                "description": "The fellows of Inovus Labs IEDC created a smart door lock on the door of the inovus labs room It is opend using RFID tags",
                "thumbnail": BASE_URL + "/assets/projects/smartdoor.jpg",
                "status": "progress",
                "tags": ["Electronics, Internet of Things"],
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Nikhil T Das",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            }
            ,
            {
                "id": 25,
                "title": "KJCMT Kiosk Display",
                "description": "The  KJCMT'  Kiosk Display , a cutting-edge creation meticulously crafted by the brilliant minds of KJCMT's own student innovators. More than just a tool, this sleek display stands as a testament to the unparalleled creativity and technical prowess inherent in our dynamic student community. We have ensured that the interface is not just functional but also visually appealing, providing an engaging platform for all users.  The kiosk allows for the promotion of events, workshops, and other information in real-time, creating a lively and ever-changing digital bulletin board for the entire college community",
                "thumbnail": BASE_URL + "/assets/projects/kiosk.png",
                "status": "progress",
                "tags": ["Electronics, Internet of Things"],
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Milan Sony",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Nithin Daniel",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            }
            ,
            {
                "id": 26,
                "title": "Open PC",
                "description": "Open PC is a unique computer design where the system unit is openly fixed, providing easy access to internal components. Unlike traditional closed cases, an open PC allows users to see and interact with the motherboard, CPU, RAM, and other components without the hindrance of a closed casing. This design promotes better ventilation, aiding in cooling components for optimal performance. Open PCs often feature a minimalist and modern aesthetic, emphasizing transparency and ease of customization. Users can modify and upgrade hardware components with greater convenience, making it an attractive option for tech enthusiasts and those who enjoy a hands-on approach to computer maintenance. The open design not only offers a visually striking computer setup but also encourages a DIY spirit for users who want to personalize and optimize their computing experience.",
                "thumbnail": BASE_URL + "/assets/projects/openpc.jpg",
                "status": "Completed",
                "tags": ["Hardware","Open-source"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 27,
                "title": "Inovus Platform",
                "description": "All the updates in Inovus labs IEDC are showcased in this platform and it will help the enthusiasts to learn technologys and etc",
                "thumbnail": BASE_URL + "/assets/projects/inovusplatform.png",
                "status": "progress",
                "tags": ["Software"],
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },{
                        "name": "Nikhil T Das",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },{
                        "name": "Nithin Daniel",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },{
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },{
                        "name": "Arjun A Acharry",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }

                ]
            },
            {
                "id": 28,
                "title": "Object detection model using OpenCV",
                "description": "To identify the objects that come in front of the camera",
                "thumbnail": BASE_URL + "/assets/projects/Ino-mail.jpeg",
                "status": "progress",
                "tags": ["Electronics, Internet of Things"],
                "contributors": [
                    {
                        "name": "Arjun Krishna",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }, {
                        "name": "Nikhil T Das",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }, {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }, {
                        "name": "Nithin Daniel",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }, {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 29,
                "title": "SOS location sending using ESP32",
                "description": "This system has many useful applications including human safety during emergencies.",
                "thumbnail": BASE_URL + "/assets/projects/sos.png",
                "status": "Completed",
                "tags": ["Electronics, Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 30,
                "title": "Mr.Bilberto",
                "description": "Bilerto Robot, an ingenious creation by the innovative minds at Inovus, stands as a testament to simplicity and functionality in robotics. Developed with a focus on kinematics, this robotic project serves as an ideal introduction for absolute beginners, providing a comprehensive understanding of legged robot movements.  Tailored with the novice in mind, Bilerto Robot is designed to be exceptionally beginner-friendly. The project provides a gentle introduction to robotics concepts, allowing individuals with limited experience to delve into the world of legged robot dynamic",
                "thumbnail": BASE_URL + "/assets/projects/mr.bilbort.jpg",
                "status": "progress",
                "tags": ["Electronics, Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },
                    {
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            },
            {
                "id": 31,
                "title": "Otto Robo",
                "description": "Otto is conceived as a tabletop robotic pet, combining technological innovation with a playful and interactive character. As a companion, it brings a delightful element to the user experience, making it an engaging project for both enthusiasts and those new to robotics. : Otto's design prioritizes stability during movement. The incorporation of edge detection not only enhances safety but also contributes to a smooth and controlled traversal across tabletops. Users can confidently interact with Otto without concerns about accidental falls.",
                "thumbnail": BASE_URL + "/assets/projects/otto.jpg",
                "status": "progress",
                "tags": ["Electronics, Internet of Things"],
                "contributors": [
                    {
                        "name": "Badhusha Shaji",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    },{
                        "name": "Abhishek V Gopal",
                        "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
                    }
                ]
            }
            // ,
            // {
            //     "id": 32,
            //     "title": "",
            //     "description": "",
            //     "thumbnail": BASE_URL + "/assets/projects/otto.jpg",
            //     "status": "progress",
            //     "tags": ["Electronics, Internet of Things"],
            //     "contributors": [
            //         {
            //             "name": "Badhusha Shaji",
            //             "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
            //         },{
            //             "name": "Abhishek V Gopal",
            //             "avatar": "https://flowbite.com/docs/images/avatars/avatar-1.jpg"
            //         }
            //     ]
            // }
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
            // {
            //     "id": 11,
            //     "title": "Hands-on IoT Workshop",
            //     "thumbnail": BASE_URL + "/assets/activity/handonIOT.jpg",
            //     "description": "Conducted at MBC Kuttikanam, this exhibition catered to a gathering of students eager to explore and learn about the intricacies of IoT (Internet of Things).",
            //     "date": ["27 April 2023", "28 April 2023"],
            //     "tags": ["Workshop"]
            // },
            // {
            //     "id": 12,
            //     "title": "IoT & Robotics Exhibition",
            //     "thumbnail": BASE_URL + "/assets/activity/Iotexebition.jpeg",
            //     "description": "The IoT and Robotics Exhibition held at SB High School was a comprehensive event centered around Information Technology. Attendees had the opportunity to immerse themselves in cutting-edge technologies, including hands-on experiences with VR glasses and hoverboards. The interactive nature of the exhibition not only provided valuable insights into the world of IoT and robotics but also allowed participants to explore and engage with the showcased technologies firsthand. The event fostered a dynamic learning environment, sparking curiosity and interest among the attendees as they delved into the exciting possibilities offered by IT-related advancements. ",
            //     "date": ["03 February 2023"],
            //     "tags": ["Exhibition"]
            // },
            // {
            //     "id": 13,
            //     "title": "XPOVISTA ’23",
            //     "thumbnail": BASE_URL + "/assets/activity/xpovista.JPG",
            //     "description": "XPOVISTA '23 stands as an exhibition organized by Kristu Jyoti Higher Secondary School. As active participants from Inovus Labs Innovation and Entrepreneurship Development Cell (IEDC), we proudly presented an array of our innovative products at the exhibition. Our involvement in XPOVISTA allowed us to showcase the results of our creative endeavors and share our contributions with the broader community. The event served as a platform for us to engage with fellow participants, visitors, and enthusiasts, creating a collaborative environment for the exchange of ideas and showcasing the spirit of innovation fostered by Inovus Labs IEDC.",
            //     "date": ["20 September 2023", "22 September 2023"],
            //     "tags": ["Exhibition"]
            // },
            {
                "id": 14,
                "title": "Learn.py 2.0",
                "thumbnail": BASE_URL + "/assets/activity/learnpy.JPG",
                "description": "An online event conducted for KJCMT studens to learn python. the students will get the basic knowledge to understand and program in python",
                "date": ["09 September 2022"],
                "tags": ["Workshop"]
            },
            {
                "id": 15,
                "title": "LED Bulb Making Workshop",
                "thumbnail": BASE_URL + "/assets/activity/LEDworkshop.jpg",
                "description": "The LED Bulb Making Workshop was organized with the primary objective of imparting practical skills to students, empowering them to create LED bulbs independently. This hands-on workshop aimed not only to educate participants on the technical aspects of LED bulb assembly but also to instill an entrepreneurial spirit by encouraging them to consider selling the bulbs they create. By providing step-by-step guidance and fostering a creative learning environment, the workshop equipped students with the knowledge and confidence to engage in the production and potential marketing of LED bulbs. This initiative not only contributed to their technical proficiency but also inspired an entrepreneurial mindset, encouraging self-sufficiency and practical application of the skills acquired during the workshop.",
                "date": ["24 January 2023"],
                "tags": ["workshops"]
            },
            // {
            //     "id": 16,
            //     "title": "Arduino Workshop",
            //     "thumbnail": BASE_URL + "/assets/activity/arduinoIHRD.jpeg",
            //     "description": "We have conducted Arduino workshop for the students of IHRD Mallapally students. It was a wonderfull experience to interact with new fellows",
            //     "date": ["23 January 2023"],
            //     "tags": ["Workshop"]
            // },
            {
                "id": 17,
                "title": "Onam Trivia 2K22",
                "thumbnail": BASE_URL + "/assets/activity/onam.png",
                "description": "Onam Trivia 2K22 an Instagram hunt conducted by Inovus Labs IEDC on 2nd September 2022 from 7:30 – 11:30pm. This trivia was conducted to engage with students from various departments and to make students more familiar about Onam and its traditions. The questions asked were mostly about onam and its origin. 150+ students took part in this trivia and the first one to answer each question through story reply was declared winner and awarded a bookmyshow voucher. ",
                "date": ["02 September 2022"],
                "tags": ["Challenge"]
            },
            {
                "id": 18,
                "title": "Vayanavaram",
                "thumbnail": BASE_URL + "/assets/activity/vayana.png",
                "description": "Reading day was observed on June 19. Inovus labs celebrated reading day by introducing Vayanavaram which lasted a week. This event was all about completing a book or reading a book a full week and then sharing a picture with the book on Instagram. ",
                "date": ["20 June 2022", "26 June 2022"],
                "tags": ["Workshop"]
            },
            {
                "id": 19,
                "title": "Figma Pookalam",
                "thumbnail": BASE_URL + "/assets/activity/pookalam.png",
                "description": "In an inspiring amalgamation of tradition and technology, Inovus Labs IEDC orchestrated the Simple - Figma Pookalam competition on August 20, 2021. With a virtual attendance of 20 participants, the event breathed new life into the traditional Pookalam art form by challenging participants to create stunning digital renditions using the Figma platform. This innovative twist allowed participants to infuse modern design technology with the rich heritage of Pookalam, resulting in captivating creations that echoed both the past and the present.",
                "date": ["20 Aug 2021"],
                "tags": ["Workshop"]
            },
            // {
            //     "id": 20,
            //     "title": "Inspire Orientation",
            //     "thumbnail": BASE_URL + "/assets/activity/Inspire.png",
            //     "description": "The Inspire Orientation program, organized by Inovus Labs IEDC, was a significant step in empowering students to participate in the Inspire initiative conducted by the Indian Government. This initiative aims to cultivate innovation and creativity among young minds. The program featured accomplished resource persons, Nikhil T Das, Badhusha Shaji, and Abhishek V Gopal, and took place at Placid Vidhyavihar. It served as a platform to inspire and equip students from Classes 7 to 9 to turn their innovative ideas into reality",
            //     "date": ["12 July 2023"],
            //     "tags": ["Session"]
            // },
            // {
            //     "id": 21,
            //     "title": "Empower The Students",
            //     "thumbnail": BASE_URL + "/assets/activity/Empower.png",
            //     "description": "The Empower The Students program, organized by Inovus Labs IEDC, was a transformative initiative designed to empower students to develop their innovative ideas. With a distinguished panel of resource persons, including Nikhil T Das, Badhusha Shaji, Abhishek V Gopal, and Nithin Daniel, this program aimed to equip students from Classes 5 to 10 at St. Berchman's High School (SB) with the knowledge, skills, and motivation needed to participate effectively in the Indian Government's Inspire initiative.  ",
            //     "date": ["14 July 2023"],
            //     "tags": ["Session"]
            // },
            {
                "id": 22,
                "title": "Ideation Workshop",
                "thumbnail": BASE_URL + "/assets/activity/ideation.jpeg",
                "description": "The  Ideation Workshop was organized by INOVUS LABS IEDC of Kristu Jyoti College, aiming to introduce the internal structure of PC to the students. This session facilitated students to understand application, working and practical implementations. The event featured a diverse lineup of resource persons who shared their expertise to foster student’s knowledge.  ",
                "date": ["25 September 2023"],
                "tags": ["Workshop"]
            },
            {
                "id": 23,
                "title": "Dyslexia Awareness Session",
                "thumbnail": BASE_URL + "/assets/activity/dyslexia.jpg",
                "description": "The INOVUS LABS IEDC of Kristu Jyoti College of Management and Technology and Post Graduate department of Psychology organized a Dyslexia Awareness Class with the goal of enhancing understanding and awareness of Dyslexia among students. The class aimed to equip participants with knowledge about Dyslexia, its signs, and effective strategies for supporting individuals with Dyslexia. ",
                "date": ["04 October 2023"],
                "tags": ["Session"]
            },
            {
                "id": 24,
                "title": "Figma Bootcamp",
                "thumbnail": BASE_URL + "/assets/activity/figmabootcamp.jpg",
                "description": "Figma bootcamp was an online workshop conducted by the INOVUS LABS IEDC of Kristu Jyoti college to enhance the designing skills of students with the help of the popular designing tool called Figma. The primary and ultimate goal of the workshop was to create an unshakeable foundation in the field of designing.  ",
                "date": ["16 October 2023","21 October 2023"],
                "tags": ["Bootcamp"]
            },
            {
                "id": 25,
                "title": "Cyber Security Quiz",
                "thumbnail": BASE_URL + "/assets/activity/cyberquiz.png",
                "description": "Cyber Security Quiz was a quiz competition conducted by INOVUS LABS IEDC of Kristu Jyoti College. Cyber security is a critical aspect of the digital age. The primary objective of this quiz session was to raise awareness about the importance of Cybersecurity practices among the students. This quiz can be treated as a valuable preparation tool which can instill a sense of continous learning, motivating students to stay updated on the latest developments in cybersecurity.",
                "date": ["25 October 2023"],
                "tags": ["Challenge"]
            },
            {
                "id": 26,
                "title": "Launch ATOM-EV 2022",
                "thumbnail": BASE_URL + "/assets/activity/atomlaunch.jpg",
                "description": "As a stepping stone to endeavor, the students initiative of IEDC of Kristu Jyoti College of Management and Technology in association with the Department of Computer Application had launch a buggy car ATOM_EV_2022 on October 18th, 2022 at 11.00 am. The initiative was driven by Indhuchoodan R and Nikhil Das (Department of computer Application) of Kristu Jyoti College of Management and Technology, Changanassery, Kerala  ",
                "date": ["18 October 2022"],
                "tags": ["Celebration"]
            },
            {
                "id": 27,
                "title": "IOT Workshop",
                "thumbnail": BASE_URL + "/assets/activity/iotworkshop.jpg",
                "description": "On December 7th 2022, the fellows of Inovus Labs IEDC has conducted a workshop on the topic 'Basics of Arduino' at the Inovus Labs . The session lasted for two hours started at 10.00 AM, which included the topics like working of the Arduino Uno board with some sensors, how to use Arduino IDE and how to make simple projects using Arduino. The session ended with a quiz program consisting of questions, from the above topics. The participants are awarded with certificates of participation. Our fellows Induchoodan R and Nikhil T. Das has leaded the session. We firmly believe that this will be huge confidence boost for students who wish to pursue higher studies in the field of Internet of things and computer programming Arduino UNO",
                "date": ["07 December 2022"],
                "tags": ["Workshop"]
            },
            {
                "id": 28,
                "title": "Celebrating Five Years of Inovus Labs IEDC",
                "thumbnail": BASE_URL + "/assets/activity/5year.png",
                "description": "Five years ago, a seed was planted, and from that seed, Inovus Labs blossomed into a thriving Student Community. This journey has been one of continuous learning, evolving, and leaving an indelible mark on everyone associated with it. Today, we gather not just as individuals but as a united community that has embraced change, acquisition of knowledge, and the power of collaboration. This milestone would not have been possible without the collective efforts of numerous individuals who have contributed their time, passion, and dedication",
                "date": ["05 April 2022"],
                "tags": ["Celebration"]
            },
            {
                "id": 29,
                "title": "Entering the 100K Karma Club ",
                "thumbnail": BASE_URL + "/assets/activity/100KKarma.png",
                "description": "Inovus Labs is thrilled to announce a momentous achievement that marks a significant milestone in our online presence. After dedicated efforts and unwavering commitment, we are proud to share that we have officially entered the esteemed 100K Karma Club on @gtechmulearn. Our collective endeavors have resulted in the accumulation of over 100,000 Karma Points from our various activities, a feat that has left us astounded and elated. The journey towards accumulating 100,000+ Karma Points has been a testament to our dedication and passion for creating valuable contributions within the @gtechmulearn community. ",
                "date": ["22 January 2022"],
                "tags": ["Celebration"]
            },
            {
                "id": 30,
                "title": "Introduction To Figma",
                "thumbnail": BASE_URL + "/assets/activity/introfigma.png",
                "description": "The efforts of Inovus Labs IEDC culminated in the Simple - Introduction to Design Using Figma workshop, a transformative online event held on July 3, 2021. With a robust participation of 36 eager learners, this workshop was designed to bridge the gap between design novices and the dynamic realm of visual creativity. Under the guidance of resource person Mr. Adhityan Jayakumar, participants embarked on an illuminating journey into the fundamentals of design, emphasizing the practical application of the Figma platform.",
                "date": ["03 July 2021"],
                "tags": ["Workshop"]
            },
            {
                "id": 31,              
                "title": "Introduction to Hacktober Fest 2021",
                "thumbnail": BASE_URL + "/assets/activity/21hacktober.png",
                "description": "Inovus Labs IEDC orchestrated the Simple - Introduction to Hacktober fest workshop on October 3, 2021, providing an online space for 16 participants to grasp the essence of this annual open-source event. The workshop served as a platform to elucidate the concept of Hacktober fest and its significance in the open-source realm. Through interactive discussions held on a Discord server, participants delved into the collaborative nature of open-source contributions and learned about the tangible impact they can make. Guided by the event's objective, participants emerged with a comprehensive understanding of Hacktober fest's purpose and avenues for meaningful contributions to open-source projects. This workshop stands as a testament to Inovus Labs IEDC's commitment to fostering a culture of collaboration and innovation, encouraging participants to actively engage in the open-source community and contribute positively to the digital landscape. ",
                "date": ["03 October 2021"],
                "tags": ["Session"]
            },
            {
                "id": 32,
                "title": "Learn.py",
                "thumbnail": BASE_URL + "/assets/activity/learnpy.1.jpg",
                "description": "The Learn.py workshop, took place on January 20, 2021. The event aimed to introduce beginners to the world of programming using the Python programming language. The workshop was conducted online, enabling participants to learn and interact remotely. The workshop proved to be an insightful and educational experience for the participants. With a total attendance of 16 enthusiastic learners, the event successfully achieved its objective of introducing Python to beginners and helping them gain valuable insights into programming concepts. ",
                "date": ["20 June 2021"],
                "tags": ["Workshop"]
            },
            {
                "id": 33,
                "title": "Media Internship Program",
                "thumbnail": BASE_URL + "/assets/activity/mediainter.jpg",
                "description": "The Media Team at Inovus Labs is the driving force behind creating and curating content that leaves a lasting impact on our audience. We believe that now is the perfect moment to elevate our media strategiesThe Media Team is often referred to as the face of a community, and at Inovus Labs, we're no exception. As a student community that's growing and evolving, we recognize the importance of revamping our media strategies to captivate, engage, and inspire. Our goal is to establish a meaningful connection with our audience through compelling content that sparks conversations, drives engagement, and leaves a positive impact. We looked for interns with expertise in:                ",
                "date": ["20 January 2022"],
                "tags": ["Internship"]
            },
            {
                "id": 34,
                "title": "Simply: Blockchain Technology",
                "thumbnail": BASE_URL + "/assets/activity/simply-blockchain.jpg",
                "description": "On June 25, 2021, the digital realm bore witness to a transformative event coalescing education and innovation. Inovus Labs IEDC orchestrated the Simple: Block chain Technology workshop, welcoming 31 curious minds into the world of block chain.           ",
                "date": ["25 June 2022"],
                "tags": ["Session"]
            },
            {
                "id": 35,
                "title": "Web Design Bootcamp for Absolute Beginners",
                "thumbnail": BASE_URL + "/assets/activity/WDB.png",
                "description": "Inovus Labs IEDC orchestrated the Web Design Bootcamp on November 28, 2021, bringing together 39 participants for an immersive online exploration of web design. This intensive bootcamp aimed to equip attendees with foundational skills in web design, specifically focusing on HTML and CSS. Through interactive online sessions facilitated on Google Meet, participants delved into the core principles of crafting visually captivating and functionally effective web pages.",
                "date": ["28 November 2021"],
                "tags": ["Bootcamp"]
            },
            {
                "id": 36,
                "title": "Empowering Dreams through Innovative Fundraising",
                "thumbnail": BASE_URL + "/assets/activity/edubulb.png",
                "description": "In a remarkable display of innovation and determination, a group of visionary individuals has embarked on a journey to turn their dreams into reality. With a goal of bringing to life a transformative project, these enterprising minds are employing a unique strategy to generate funds – by giving life to yet another brilliant idea. The concept, aptly titled 'Generating Fund for an Idea, from Another Idea,' reflects a fascinating approach to fundraising that holds immense promise.",
                "date": ["26 September 2020"],
                "tags": ["Internship"]
            },
            {
                "id": 37,
                "title": "LinkedIn  Hack",
                "thumbnail": BASE_URL + "/assets/activity/linkedinhack.jpg",
                "description": "The LinkedIn Hack event, held on May 16, 2021, provided participants with a deep dive into the world of LinkedIn and its potential for enhancing professional growth. With 57 attendees eager to maximize their LinkedIn presence, the event aimed to educate, inspire, and empower participants to leverage the platform effectively. ",
                "date": ["16 May 2021"],
                "tags": ["Session"]
            }
            ,
            {
                "id": 38,
                "title": "Love Mail",
                "thumbnail": BASE_URL + "/assets/activity/lovemail.jpg",
                "description": "In the spirit of love and camaraderie, Inovus Labs organized a unique and engaging program, LoveMail, LoveTweet, LoveByte, to celebrate Valentine's Day 2021. This program was designed to bring the community together, encourage creativity, and spread love and positivity through various challenges. As a hub for both technical and non-technical activities, Inovus Labs aimed to create a memorable and enriching experience for all participants. The LoveMail, LoveTweet, LoveByte program brought forth an array of exciting challenges that aimed to inspire participants to explore their creative sides while embracing the Valentine's Day theme. The LoveMail, LoveTweet, LoveByte program organized by Inovus Labs for Valentine's Day 2021 was a resounding success in fostering a sense of togetherness, creativity, and learning within the community. Through challenges that embraced both emotional expression and technical innovation, participants had the chance to showcase their talents, spread positivity, and connect with fellow community members. This program not only celebrated the theme of love but also celebrated the diverse talents and passions that make the Inovus Labs community truly exceptional.",
                "date": ["14 February 2021"],
                "tags": ["Celebration"]
            },
            {
                "id": 39,
                "title": "“Nammuk Samsarikam” Alumni Get Together ",
                "thumbnail": BASE_URL + "/assets/activity/namuksamsarikam.png",
                "description": "The Alumni Get-Together Namuku Samsarikam organized by the Inovus Labs Innovation and Entrepreneurship Development Center (IEDC) brought together 57 alumni from various batches. The event aimed to provide a platform for former students to reconnect, share their professional journeys, and discuss their contributions during their time at Inovus Labs.",
                "date": ["24 May 2021"],
                "tags": ["Celebration"]
            },
            {
                "id": 40,
                "title": "Stupid Idea Contest",
                "thumbnail": BASE_URL + "/assets/activity/stupididea2020.png",
                "description": "Inovus Labs, organized a unique event called the Stupid Idea Contest on December 18, 2020. The event aimed to encourage students to think outside the box, challenge conventional thinking, and present seemingly nonsensical ideas that could potentially lead to groundbreaking innovations. The contest was exclusively open to students from Kristu Jyoti College of Management and Technology. The event was positioned as a platform for students who often hesitate to share unconventional ideas due to fear of judgment or ridicule. Inovus Labs created an inclusive and supportive environment where participants were encouraged to think creatively without limitations.",
                "date": ["18 December 2020"],
                "tags": ["Challenge"]
            },
            {
                "id": 41,
                "title": "Web Designing Challenge",
                "thumbnail": BASE_URL + "/assets/activity/WDB.1.png",
                "description": "The Web Designing Bootcamp for Absolute Beginners was organized by INOVUS LABS, the Innovation and Entrepreneurship Development Cell (IEDC) of Kristu Jyoti College. The bootcamp aimed to provide students with a comprehensive introduction to web designing, catering to those with little to no prior experience in the field. The event was conducted online via Zoom meetings and spanned a total duration of two weeks, starting from March 15, 2021.        ",
                "date": ["15 March 2021"],
                "tags": ["Bootcamp"]
            },
            {
                "id": 42,
                "title": "Empowering productive quarantine with online courses",
                "thumbnail": BASE_URL + "/assets/activity/online.png",
                "description": "Inovus Labs, in association with the TinkerHub community, has launched an innovative initiative aimed at utilizing the quarantine period for productive learning. This collaboration offers a series of certified short-term online courses designed for the students of Kristu Jyoti College of Management and Technology. These courses encompass both technical and non-technical subjects, catering to a diverse range of interests and skill sets.        ",
                "date": ["24 May 2020"],
                "tags": ["Workshop"]
            },
            {
                "id": 43,
                "title": "HANGOUT WITH INOVUS - II",
                "thumbnail": BASE_URL + "/assets/activity/hangout-mehar.jpg",
                "description": "Inovus Labs, known for its commitment to fostering innovation and technology-driven learning, organized a live hangout session with Mr. Mehar M.P, the visionary founder of Tinker Hub Community. The event took place on May 5, 2020, at 5:00 PM, and was hosted on Instagram Live. The session aimed to provide insights into Mehar M.P's entrepreneurial journey and the role of TinkerHub in shaping the tech-savvy youth.   The Web Designing Bootcamp spanned two weeks, commencing on March 15, 2021, and concluding after 30 hours of instruction spread across various sessions. The schedule was thoughtfully designed to accommodate participants' academic commitments and to provide ample time for practice and self-study between sessions.",
                "date": ["05 May 2021"],
                "tags": ["Session"]
            },
            {
                "id": 44,
                "title": "HANGOUT WITH INOVUS - I",
                "thumbnail": BASE_URL + "/assets/activity/hangout-drjimmy.jpg",
                "description": "The Inovus labs, organized an HANGOUT WITH INOVUS event on April 25, 2020, featured Dr. Jimmy Mathew, a renowned microsurgeon, clinical professor, and co-founder of Info Clinic. The hangout was conducted online and focused on addressing the prevalence of fake news surrounding the COVID-19 pandemic. Dr.Mathew, who is also a TEDx speaker, shared insights into debunking misinformation and spreading accurate information during these challenging times. Dr. Mathew highlighted the widespread circulation of false information and rumours regarding the COVID-19 pandemic. He emphasized the role of social media in amplifying misleading content and its potential consequences on public health decisions, elucidated the adverse effects of believing and spreading fake news during a health crisis. He underscored that misinformation could lead to panic, incorrect preventive.The talk highlighted the role of both media organizations and individuals in curbing the spread of fake news. Responsible reporting and sharing accurate information were emphasized as crucial steps in maintaining public trust.                ",
                "date": ["25 April 2020"],
                "tags": ["Session"]
            },
            {
                "id": 45,
                "title": "IEDC SUMMIT 2019",
                "thumbnail": BASE_URL + "/assets/activity/summit19.png",
                "description": "The IEDC Summit of 2019 marked a significant gathering of creative minds and aspiring entrepreneurs in the picturesque town of Kodakara, Kerala. Hosted by Sahrdaya College of Engineering and Technology, this event centered around the essence of innovation and entrepreneurship. The Innovation and Entrepreneurship Development Centre (IEDC) facilitated an environment where attendees immersed themselves in dynamic discussions, workshops, and networking opportunities. This summit served as a catalytic platform, fostering the exchange of ground-breaking ideas and insights that are crucial for the growth of entrepreneurial ventures. Against the backdrop of Kerala's serene landscapes, participants were inspired to think outside the box and connect with like-minded visionaries, ultimately contributing to the strengthening of the entrepreneurial landscape in the region. The IEDC Summit at Sahrdaya College stood as a testament to the institution's dedication to nurturing innovation and fostering the entrepreneurial spirit.",
                "date": ["19 October 2019"],
                "tags": ["Celebration"]
            },
            {
                "id": 46,
                "title": "IEDC SUMMIT 2022",
                "thumbnail": BASE_URL + "/assets/activity/summit22.png",
                "description": "Inovus Labs embarked on an exhilarating journey of innovation, entrepreneurship, and collaboration by participating in the prestigious IEDC SUMMIT 2022 – The Innovative Carnival. Held in March 2022, this event stood as Asia's largest student entrepreneurship summit, providing a platform for budding entrepreneurs, thinkers, and visionaries to converge, exchange ideas, and celebrate the spirit of innovation. The IEDC SUMMIT 2022 was nothing short of an explosion of creativity and inspiration. The event brought together the brightest minds from across the region to engage in thought-provoking discussions, interactive workshops, and showcases of groundbreaking projects. For Inovus Labs, it was a remarkable opportunity to be part of this grand celebration of innovation. The summit featured a lineup of engaging workshops and seminars, delving into topics ranging from ideation and product development to market strategies and funding. As a hub of innovation, Inovus Labs had the opportunity to showcase some of our groundbreaking projects and ideas. The summit provided an ideal platform for networking and forging collaborations. Team Inovus Labs seized this opportunity to connect with industry experts, mentors, fellow entrepreneurs, and potential partners, fostering relationships that have the potential to shape our future endeavors.",
                "date": ["6 March 2022"],
                "tags": ["Celebration"]
            },
            {
                "id": 47,
                "title": "IEDC SUMMIT 2023",
                "thumbnail": BASE_URL + "/assets/activity/summit2023.png",
                "description": "The eighth edition of the IEDC (Innovation and Entrepreneurship Development Cell) Summit, organized by the Kerala Startup Mission, was held on 12th October 2023 at the College of Engineering Trivandrum. 15 students of Kristu Jyoti college of management and technology (which includes core team members of Inovus Labs) along with Mentor, Arjun Krishna and Nodal officer Mr Roji Thomas attended this event. ",
                "date": ["12 October 2023"],
                "tags": ["Celebration"]
            },
            {
                "id": 48,
                "title": "ARDUINO Workshop",
                "thumbnail": BASE_URL + "/assets/activity/arduinoworkshop18.png",
                "description": "Inovus Labs recently launched a new Nano-degree program focused on IoT, particularly Arduino. The program involved a series of workshops, conducted in collaboration with Kasperob Robotics Pvt. Ltd., aimed at providing training and certification. The inaugural workshop of this series took place on September 24th, 2018, at the premises of Inovus Labs. A total of 15 students from Kristu Jyoti College participated in the workshop. The event was graced by the presence of key individuals from Kasperob Robotics Pvt. Ltd., including the CEO, Mr. GITHU N.S., and the Robotics Trainer, Mr. Akhil Reghu. These experts jointly conducted the session, bringing their vast knowledge and experience to the participants.",
                "date": ["24 September 2018"],
                "tags": ["Workshop"]
            },
            {
                "id": 49,
                "title": "Blockchain 101",
                "thumbnail": BASE_URL + "/assets/activity/blockchain101.jpg",
                "description": "As we the INOVUS LABS doesn’t like to be on the wrong side of the future history , we had the topic “Blockchain 101” in our ‘weekly session on latest Technologies’ for our fellows and college faculties in-order to provide basic details and to develop  an insight on Blockchain and Cryptocurrencies.         ",
                "date": ["13 October 2018"],
                "tags": ["Session"]
            },
            {
                "id": 50,
                "title": "Design Thinking Workshop",
                "thumbnail": BASE_URL + "/assets/activity/designthink.jpg",
                "description": "Kerala startup mission, in association with the ICT Academy of Kerala had conducted a ‘Design Thinking Workshop ‘for future entrepreneurs, to innovate them to design their products or services by understanding the actual pain and need of the users. The 2-day workshop was lead by Mr. Sony John Bronzon, CPLP with around 24 participants, from different colleges. This workshop was coordinated by the Nodal Officer of Inovus Labs Mr Roji Thomas , and student coordinator Mr. Akhil Reghu.",
                "date": ["11 February 2019", "12 February 2019"],
                "tags": ["Workshop"]
            },
            {
                "id": 51,
                "title": "An interactive session with GHCI Scholar, Pritika Merryl",
                "thumbnail": BASE_URL + "/assets/activity/intractivesession.png",
                "description": "On September 9, 2018, a captivating session was skillfully conducted by the distinguished GHCI Scholar, Pritika Merryl. During this insightful session, Pritika Merryl graciously shared her wealth of experiences, enriching the audience with her knowledge and wisdom. Her presentation was not only informative but also inspirational, leaving a lasting impression on all those fortunate enough to attend. Pritika Merryl's expertise and passion illuminated the room, making the session a memorable and enlightening experience for everyone present.There are 38 students participated in this session . This session was coordinated by Nodal Officer of Inovus Lab,Mr Roji Thomas , student coordinator Mr Sandeep N. The eighth edition of the IEDC (Innovation and Entrepreneurship Development Cell) Summit, organized by the Kerala Startup Mission, was held on 12th October 2023 at the College of Engineering Trivandrum. The following 15 students of Kristu Jyoti college of management and technology (which includes core team members of Inovus Labs); Mentor, Arjun Krishna and Nodal officer Mr Roji Thomas  attended this event. ",
                "date": ["09 September 2018"],
                "tags": ["Session"]
            },
            {
                "id": 52,
                "title": "Interactive Session with TEDx  speaker Enfa Rose George",
                "thumbnail": BASE_URL + "/assets/activity/intractiveenra.jpg",
                "description": "Inovus Labs is association with department of Management  Studies conducted an interactive session with TEDx  speaker Enfa Rose George who is the founder of PEHIA . She is an active writer and blogger. 62 students were participated in this session .  This session was coordinated by the Nodal Officer of Inovus Labs Mr.Roji Thomas , and student coordinator    Mr. Jithin Sha. The eighth edition of the IEDC (Innovation and Entrepreneurship Development Cell) Summit, organized by the Kerala Startup Mission, was held on 12th October 2023 at the College of Engineering Trivandrum. The following 15 students of Kristu Jyoti college of management and technology (which includes core team members of Inovus Labs); Mentor, Arjun Krishna and Nodal officer Mr Roji Thomas  attended this event. ",
                "date": ["14 September 2018"],
                "tags": ["Session"]
            },
            {
                "id": 53,
                "title": "Introduction Class about Inovus Labs ",
                "thumbnail": BASE_URL + "/assets/activity/introtoino.jpg",
                "description": "On September 8, 2018, Inovus Labs' core members delivered a captivating introduction class to our first-year students. This session offered a portal into their dynamic world of innovation, weaving a narrative of accomplishments and visions. The students witnessed the evolution from humble beginnings to groundbreaking discoveries, igniting inspiration. The core members' dedication to learning, embracing challenges, and collaboration became guiding principles for their academic and professional journeys. This transformative moment sowed the seeds of innovation, encouraging students to dream big and embrace change. Nearly 240 students participated in this session.                ",
                "date": ["08 September 2018"],
                "tags": ["Session"]
            },
            {
                "id": 54,
                "title": "Stupid Idea Contest",
                "thumbnail": BASE_URL + "/assets/activity/stupididea18.jpg",
                "description": "Inovus Labs has conducted a Stupid Idea Contest for the students and faculties of Kristu Jyoti College. The attempt was to explore the logic behind every idea, disregarding the crazy elements present in it. Various gifts were awarded to the best & crazy ideas and themes thar were deposited int the Stupid Idea Box. Complementary gifts were also awarded. There are 18 students are participated in this contest.",
                "date": ["26 October 2018"],
                "tags": ["Challenge"]
            },
            {
                "id": 55,
                "title": "Branding Challenge ",
                "thumbnail": BASE_URL + "/assets/activity/branding.png",
                "description": "On May 14, 2020, Inovus Labs participated in the Branding Challenge Competition organized by Kerala Startup Mission (KSUM), an entity dedicated to promoting innovation and entrepreneurship in the state of Kerala. The competition aimed to test the creative branding skills of various participants. What started as a lighthearted endeavor turned into a remarkable achievement, as Inovus Labs secured the impressive title of 1st Runner-The victory in the Branding Challenge Competition held significant meaning for Inovus Labs.  ",
                "date": ["14 May 2020"],
                "tags": ["Celebration"]
            }
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
export const getLearningResources = async () => {

    let data = [
        {
            id: 1,
            title: "ഒരു സമ്പൂർണ മലയാള മെഷീൻ ലേർണിംഗ് ഗൈഡ്",
            lang: "ml-IN",
            description: "Machine Learning Guide (For Absolute Beginners) by Sreeram Venkitesh",
            category: ["AI/ML"],
            date: "01 June 2021",
            resources: [
                {
                    url: "https://github.com/sreeram-venkitesh/Essence-of-ML",
                    type: "GitHub"
                }
            ]
        },
        {
            id: 2,
            title: "Learn Linux Basics – Bash Command Tutorial for Beginners",
            description: "The Linux Command Handbook by FreeCodeCamp",
            category: ["Linux", "DevOps"],
            date: "01 June 2021",
            resources: [
                {
                    url: "https://www.freecodecamp.org/news/the-linux-commands-handbook/",
                    type: "Website"
                }
            ]
        },
        {
            id: 3,
            title: "Artificial Intelligence Curriculum",
            description: "Curated with support from Intel®️ (CBSE Class 10 - Facilitator Handbook)",
            category: ["AI/ML"],
            date: "07 June 2021",
            resources: [
                {
                    url: "http://cbseacademic.nic.in/web_material/Curriculum21/publication/secondary/Class10_Facilitator_Handbook.pdf",
                    type: "PDF"
                }
            ]
        },
        {
            id: 4,
            title: "Machine Learning for Beginners - A Curriculum",
            description: "12 weeks, 24 lessons, Classic Machine Learning for all",
            category: ["AI/ML"],
            date: "07 June 2021",
            resources: [
                {
                    url: "https://github.com/microsoft/ML-For-Beginners",
                    type: "GitHub"
                }
            ]
        },
        {
            id: 5,
            title: "IoT for Beginners - A Curriculum from Microsoft",
            description: "2 weeks, 24 lessons, IoT for all",
            category: ["IoT"],
            date: "20 June 2021",
            resources: [
                {
                    url: "https://github.com/microsoft/IoT-For-Beginners",
                    type: "GitHub"
                }
            ]
        },
        {
            id: 6,
            title: "Machine Learning Crash Course with TensorFlow",
            description: "Google's free, fast-paced, practical introduction to Machine Learning",
            category: ["AI/ML"],
            date: "26 August 2021",
            resources: [
                {
                    url: "https://developers.google.com/machine-learning/crash-course",
                    type: "Website"
                }
            ]
        },
        {
            id: 7,
            title: "roadmap.sh",
            description: "roadmap.sh is a community effort to create road-maps, guides and other educational content to help guide the developers in picking up the path and guide their learnings",
            category: ["General"],
            date: "09 September 2021",
            resources: [
                {
                    url: "https://roadmap.sh/",
                    type: "Website"
                },
                {
                    url: "https://www.youtube.com/theroadmap",
                    type: "YouTube"
                }
            ]
        },
        {
            id: 8,
            title: "Deep Dive Into Modern Web Development",
            description: "Learn React, Redux, Node.js, MongoDB, GraphQL and TypeScript in one go! This course will introduce you to modern JavaScript-based web development. The main focus is on building single page applications with ReactJS that use REST APIs built with Node.js.",
            category: ["Web Development", "React", "Node.js"],
            date: "18 September 2021",
            resources: [
                {
                    url: "https://fullstackopen.com/en/",
                    type: "Website"
                }
            ]
        },
        {
            id: 9,
            title: "Modular JavaScript Book Series",
            description: "Modular JavaScript is an open effort to improve our collective understanding of writing robust, well-tested & modular applications. It consists of five books, each of which explores a key aspect of JavaScript development — comprehensively. The books are produced in the open: anyone can track their progress, report issues & contribute fixes or content.",
            category: ["Web Development", "JavaScript"],
            date: "24 March 2022",
            resources: [
                {
                    url: "https://mjavascript.com/",
                    type: "Website"
                }
            ]
        },
        {
            id: 10,
            title: "Node.js - Notes for Professionals",
            description: "This is an unofficial free book created for educational purposes and is not affiliated with official Node.js group(s) or company(s)",
            category: ["Web Development", "Node.js"],
            date: "08 February 2022",
            resources: [
                {
                    url: "https://github.com/milan-sony/hacktoberfest2023/files/13665968/NodeJSNotesForProfessionals.pdf",
                    type: "PDF"
                }
            ]
        },
        {
            id: 11,
            title: "The Modern JavaScript Tutorial",
            description: "From the basics to advanced topics with simple, but detailed explanations.",
            category: ["Web Development", "JavaScript"],
            date: "07 July 2022",
            resources: [
                {
                    url: "https://javascript.info/",
                    type: "Website"
                }
            ]
        },
        {
            id: 12,
            title: "DevOps Resources",
            description: "DevOps resources - Linux, Jenkins, AWS, SRE, Prometheus, Docker, Python, Ansible, Git, Kubernetes, Terraform, OpenStack, SQL, NoSQL, Azure, GCP",
            category: ["DevOps"],
            date: "12 July 2022",
            resources: [
                {
                    url: "https://github.com/bregman-arie/devops-resources",
                    type: "GitHub"
                }
            ]
        },
        {
            id: 13,
            title: "CodeCrafters",
            description: "Have you heard about 'Code Crafters'. They do have an awesome GitHub Organization page with some really awesome learning resource repositories. If interested, do check them out.",
            category: ["General"],
            date: "10 August 2022",
            resources: [
                {
                    url: "https://github.com/codecrafters-io",
                    type: "GitHub"
                },
                {
                    url: "https://codecrafters.io/",
                    type: "Website"
                }
            ]
        },
        {
            id: 14,
            title: "How the Web Works",
            description: "What happens behind the scenes when we type www.google.com in a browser?",
            category: ["General"],
            date: "15 September 2022",
            resources: [
                {
                    url: "https://github.com/vasanthk/how-web-works",
                    type: "GitHub"
                }
            ]
        },
        {
            id: 15,
            title: "System Design",
            description: "Learn how to design systems at large-scale and prepare for system design interviews",
            category: ["General", "System Design"],
            date: "23 September 2022",
            resources: [
                {
                    url: "https://www.karanpratapsingh.com/courses/system-design",
                    type: "Website"
                }
            ]
        },
        {
            id: 16,
            title: "ByteByteGo",
            description: "Covering topics and trends in large-scale system design, from the authors of the best-selling System Design Interview book series",
            category: ["General"],
            date: "23 September 2022",
            resources: [
                {
                    url: "https://youtube.com/c/ByteByteGo",
                    type: "YouTube"
                }
            ]
        },
        {
            id: 17,
            title: "System Design Primer",
            description: "Learn how to design large-scale systems. Prep for the system design interview. Includes Anki flashcards",
            category: ["General", "System Design"],
            date: "14 October 2022",
            resources: [
                {
                    url: "https://github.com/donnemartin/system-design-primer",
                    type: "GitHub"
                }
            ]
        },
        {
            id: 18,
            title: "Computer Science",
            description: "Path to a free self-taught education in Computer Science!",
            category: ["General"],
            date: "22 December 2022",
            resources: [
                {
                    url: "https://github.com/ossu/computer-science#advanced-programming",
                    type: "GitHub"
                }
            ]
        },
        {
            id: 19,
            title: "The Concise TypeScript Book",
            description: "A Concise Guide to Effective Development in TypeScript. Free and Open Source",
            category: ["Web Development", "TypeScript"],
            date: "09 July 2023",
            resources: [
                {
                    url: "https://github.com/gibbok/typescript-book",
                    type: "GitHub"
                }
            ]
        },
        {
            id: 20,
            title: "What are Microservices?",
            description: "Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of loosely coupled services, which implement business capabilities.",
            category: ["Web Development", "System Design"],
            date: "14 December 2023",
            resources: [
                {
                    url: "https://microservices.io/",
                    type: "Website"
                }
            ]
        },
    ];

    return data;

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