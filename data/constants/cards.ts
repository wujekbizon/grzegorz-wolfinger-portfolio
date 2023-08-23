import type { CardProps } from '@/types'
import img1 from '../../public/images/web.png'
import img2 from '../../public/images/ai.jpg'

const DESIGN: CardProps = {
  title: 'Modern Applications',
  titleBtn: 'Design without limits',
  description:
    "Modern applications need to check all the boxes: they should be user-friendly, intuitive, seamlessly integrate with existing systems, handle massive amounts of data at lightning speed, adapt to changing conditions, and respond to user requests in a flash. And let's not forget about a robust API, because they should also be great team players with easy integration abilities.",
  imgSrc: img1,
  text: 'Learn more about the full package!',
  url: '/about#contact',
}

const AI: CardProps = {
  title: 'Artificial Intelligence',
  titleBtn: ' Unleash the Power of AI within Your Application',
  description:
    "Using AI in modern web and native applications brings immense benefits for programmers. With AI, tasks that would typically require manual effort can be automated, saving time and increasing productivity. AI can also assist in detecting and fixing bugs, optimizing code, and improving performance. By leveraging AI, programmers can access powerful tools and frameworks that simplify complex tasks and elevate their coding capabilities. Whether it's natural language processing, image recognition, or predictive analytics, integrating AI into day-to-day work empowers programmers to innovate, create smarter applications, and stay at the cutting edge of technology.",
  imgSrc: img2,
  text: 'Follow me at my blog, where you can read more about power of AI',
  url: 'https://grzegorz-wolfinger-blog.vercel.app/posts/welcome-in-2023-year-of-AI',
}

export { DESIGN, AI }
