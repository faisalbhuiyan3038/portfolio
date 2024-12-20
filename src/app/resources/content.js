import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Faisal',
    lastName: 'Bhuiyan',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Developer',
    avatar: '/images/avatar.png',
    location: 'Asia/Dhaka',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bengali']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/faisalbhuiyan3038',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/faisalbhuiyan3038',
    },
    {
        name: 'Instagram',
        icon: 'instagram',
        link: 'https://www.instagram.com/post.processing.101',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:faisalbhuiyan3038@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>A Software Developer in Progress...</>,
    subline: <>I'm Faisal Bhuiyan, a passionate developer with a goal to craft intuitive<br /> user experiences. After hours, I build my own projects.</>
}

const about = {
    label: 'About',
    title: 'About me',
    resume: 'https://drive.google.com/drive/folders/11FigQ2BJ7m0npOFnq6PcB0AaedvlqI0h?usp=sharing',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>Hey there! I’m a software developer with a love for crafting intuitive apps and experimenting with AI. I built Save Link Collections, a Firefox add-on for managing link collections with Google OAuth, and deepened my AI skills through a Headstarter fellowship. I’m fluent in React, Firebase, and, thanks to my background in copywriting, know how to keep things clear and engaging. When I’m not coding, you’ll probably find me behind a camera, capturing aesthetic shots with a creative twist. Welcome to my portfolio—take a look around!</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Headstarter',
                location: 'New York, Remote',
                timeframe: '2024/07 - 2024/09',
                role: 'Software Engineering Fellow',
                achievements: [
                    <>Spearheaded the integration of AI tools into web apps.</>,
                    <>Received insights from employees from companies like Google and several AI startups.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/cover-01.png',
                        alt: 'Headstarter Acceptance',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'CRM Realm',
                timeframe: '2024/05 - 2024/07',
                role: 'Salesforce Developer',
                achievements: [
                    <>Developed 15+ projects across the Salesforce ecosystem.</>,
                    <>Communicated effectively with US Clients via Zoom to understand project requirements and explain project details.</>,
                    <>Got familiarized with project management tools like Jira and Asana.</>
                ],
                images: []
            },
            {
                company: 'Nerd Castle LTD',
                timeframe: '2024/05 - 2024/07',
                role: 'ASP.NET Developer Trainee',
                achievements: [
                    <>Created a Windows Form app that generates
                        reports using data from an SQL database and
                        exports to CSV.</>,
                    <>Built an E-Commerce app with lazy loading for
                        instant speeds and authentication using JWT
                        Tokens.</>
                ],
                images: [
                    {
                        src: '/images/projects/project-02/products.jpg',
                        alt: 'Products',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-02/checkout.jpg',
                        alt: 'Checkout',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: '10 Ways Web Properties Ltd.',
                timeframe: '2022/12 - 2023/04',
                role: 'SEO Specialist',
                achievements: [
                    <>Analyzed trending topics using Google Trends.</>,
                    <>Increased organization's web presence.</>
                ],
                images: []
            },
            {
                company: '10 Ways Web Properties Ltd.',
                timeframe: '2021/08 - 2022/11',
                role: 'Senior Copywriter',
                achievements: [
                    <>Wrote 400+ guides on Windows, iOS, Android and
                        numerous software and hardware troubleshooting,
                        each with 1600+ words.</>
                ],
                images: []
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Independent University,  Bangladesh',
                location: 'Dhaka, Bangladesh',
                description: <>Studied Computer Science and Engineering</>
            },
            {
                name: 'Bangladesh International School (English Section)',
                location: 'Jeddah, Saudi Arabia',
                description: <>Completed Middle School, High School and College education under Cambridge Curriculum</>,
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Past Projects',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        {
            src: '/images/gallery/airplane-v.jpg',
            alt: 'airplane',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/cox-l.jpg',
            alt: 'cox bazar',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/ant-v.jpg',
            alt: 'ant close up',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/bd-m-v.jpg',
            alt: 'bd m v',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/ksa-l.jpg',
            alt: 'ksa',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/boat-v.jpg',
            alt: 'boat',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/mosque-l.jpg',
            alt: 'mosque',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/clouds-v.jpg',
            alt: 'clouds',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/night-purple-l.jpg',
            alt: 'night purple',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/park-sunset-l.jpg',
            alt: 'park sunset',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/park-v.jpg',
            alt: 'park',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/sunset-l.jpg',
            alt: 'sunset',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/reflection-v.jpg',
            alt: 'reflection',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/resort-l.jpg',
            alt: 'resort',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/resort-v.jpg',
            alt: 'resort',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/cox-v.jpg',
            alt: 'cox',
            orientation: 'vertical'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
