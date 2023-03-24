import { BsPersonWorkspace, BsLinkedin, BsGithub } from 'react-icons/bs'
import { GrLocation, GrMail } from 'react-icons/gr'
import { BiLink } from 'react-icons/bi'
import { MdOutlineMyLocation } from 'react-icons/md'
import { ProfileItems } from '@/types'

export const aboutTexts = [
  {
    id: 1,
    text: "I am passionate about shaping the future of web development and leveraging the power of peer-to-peer networks and artificial intelligence in today's applications. I believe that with my technical knowledge, creative problem solving skills, and dedication to learning new technologies, I can make a positive impact on any project. I am eager to join a team of like-minded professionals who are dedicated to creating innovative solutions for the web."
  },
  {
    id: 2,
    text: 'My career goal as a software developer is to become an expert in programming languages such as JavaScript and Typescript, and to master related frameworks such as React.js, Node.js, and Next.js. I am eager to take on new projects, as I believe that each one provides an opportunity for me to expand my knowledge and skillset.'
  },
  {
    id: 3,
    text: "Cross platform application development is an important skill to have in today's world. By learning how to develop applications that can run on multiple platforms, you can create powerful and versatile applications that can reach a wider audience. With the right tools and knowledge, you can create applications that are both powerful and accessible to users on any device."
  }
]

export const profileItems: ProfileItems[] = [
  {
    id: 1,
    icon: <BsPersonWorkspace />,
    title: 'Freelancer'
  },
  {
    id: 2,
    icon: <MdOutlineMyLocation />,
    title: 'Cracow, Poland'
  },
  {
    id: 3,
    icon: <GrMail />,
    title: 'grzegorz.wolfinger@gmail.com'
  },
  {
    id: 4,
    icon: <BiLink />,
    title: 'Blog',
    link: 'https://grzegorz-wolfinger-blog.vercel.app/'
  },
  {
    id: 5,
    icon: <BsLinkedin />,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/'
  },
  {
    id: 6,
    icon: <BsGithub />,
    title: 'Github',
    link: 'https://github.com/wujekbizon'
  }
]
