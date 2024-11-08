import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Faisal',
    lastName: 'Bhuiyan',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role: 'Software Developer',
    avatar: '/images/avatar-02.png',
    location: 'Asia/Dhaka',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'Bengali']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
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
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
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
                    <>Received insights employees from companies like Google and several AI startups.</>
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
        display: true, // set to false to hide this section
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
    label: 'Work',
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
            src: '/images/gallery/img-01.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-02.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-03.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-04.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-05.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-06.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-07.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-08.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-09.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-10.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-11.jpg',
            alt: 'image',
            orientation: 'vertical'
        },
        {
            src: '/images/gallery/img-12.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-13.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
        {
            src: '/images/gallery/img-14.jpg',
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };
