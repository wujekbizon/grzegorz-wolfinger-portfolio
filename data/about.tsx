import { BsPersonWorkspace, BsLinkedin, BsGithub } from 'react-icons/bs'
import { GrMail } from 'react-icons/gr'
import { BiLink } from 'react-icons/bi'
import { MdOutlineMyLocation } from 'react-icons/md'
import { ProfileItems } from '@/types'

export const aboutTexts = [
  {
    id: 1,
    text: (
      <>
        {' '}
        <b>I</b> <b>a</b>m <b>pass</b>ionate <b>abo</b>ut <b>shap</b>ing <b>t</b>he <b>fut</b>ure <b>o</b>f <b>w</b>
        eb <b>devel</b>opment <b>a</b>nd <b>lever</b>aging <b>the</b> <b>po</b>wer <b>o</b>f <b>p</b>eer-<b>t</b>o-
        <b>p</b>
        eer <b>net</b>works <b>and</b> <b>art</b>ificial <b>int</b>elligence <b>i</b>n <b>to</b>days <b>appli</b>
        cations. <b>I</b> <b>bel</b>ieve <b>th</b>at <b>wi</b>th <b>m</b>y <b>tech</b>nical <b>know</b>ledge,{' '}
        <b>crea</b>tive <b>pro</b>blem <b>solv</b>ing <b>ski</b>lls, <b>a</b>nd <b>dedi</b>cation <b>t</b>o <b>learn</b>
        ing <b>n</b>ew <b>tech</b>nologies, <b>I</b> <b>c</b>an <b>ma</b>ke <b>pos</b>tive <b>imp</b>act <b>o</b>n{' '}
        <b>a</b>ny <b>pro</b>ject. <b>I</b> <b>a</b>m <b>ea</b>ger <b>t</b>o <b>j</b>oin <b>a</b> <b>te</b>am <b>o</b>f{' '}
        <b>li</b>ke-<b>mi</b>nded <b>profess</b>ionals <b>w</b>ho <b>a</b>re <b>dedi</b>cated <b>t</b>o <b>creat</b>ing{' '}
        <b>inno</b>vative <b>solut</b>ions <b>f</b>or <b>t</b>he <b>w</b>eb.
      </>
    )
  },
  {
    id: 2,
    text: (
      <>
        {' '}
        <b>M</b>y <b>car</b>eer <b>go</b>al <b>a</b>s <b>a</b> <b>soft</b>ware <b>dev</b>eloper <b>i</b>s <b>t</b>o{' '}
        <b>be</b>come <b>a</b>n <b>exp</b>ert <b>i</b>n <b>progra</b>mming <b>lang</b>uages <b>su</b>ch <b>a</b>s{' '}
        <b>Java</b>Script <b>a</b>nd <b>Type</b>script, <b>a</b>nd <b>t</b>o <b>ma</b>ster <b>rel</b>ated <b>frame</b>
        works <b>su</b>ch <b>a</b>s <b>Re</b>act.js, <b>No</b>de.js, <b>a</b>nd <b>Ne</b>xt.js. <b>I</b> <b>a</b>m{' '}
        <b>ea</b>ger <b>t</b>o <b>t</b>ake <b>o</b>n <b>n</b>ew <b>pro</b>jects, <b>a</b>s <b>I</b> <b>bel</b>ieve{' '}
        <b>th</b>at <b>ea</b>ch <b>o</b>ne <b>prov</b>ides <b>a</b>n <b>oppo</b>rtunity <b>f</b>or <b>m</b>e <b>t</b>o{' '}
        <b>exp</b>and <b>m</b>y <b>know</b>ledge <b>a</b>nd <b>ski</b>llset.
      </>
    )
  },
  {
    id: 3,
    text: (
      <>
        <b>Cr</b>oss <b>pla</b>tform <b>app</b>lication <b>dev</b>elopment <b>i</b>s <b>a</b>n <b>imp</b>ortant{' '}
        <b>ski</b>ll <b>t</b>o <b>ha</b>ve <b>i</b>n <b>to</b>day's <b>wo</b>rld. <b>B</b>y <b>learn</b>ing <b>h</b>ow{' '}
        <b>t</b>o<b> dev</b>elop <b>app</b>lications <b>t</b>hat <b>c</b>an <b>r</b>un <b>o</b>n <b>mul</b>tiple{' '}
        <b>pla</b>tforms, <b>y</b>ou <b>c</b>an <b>cre</b>ate <b>pow</b>erful <b>a</b>nd <b>vers</b>atile <b>app</b>
        lications <b>th</b>at <b>c</b>an <b>re</b>ach <b>a</b> <b>wi</b>der <b>aud</b>ience. <b>Wi</b>th <b>t</b>he{' '}
        <b>ri</b>ght <b>to</b>ols <b>a</b>nd <b>know</b>ledge, <b>y</b>ou <b>c</b>an <b>cre</b>ate <b>app</b>lications{' '}
        <b>th</b>at <b>a</b>re <b>bo</b>th <b>pow</b>erful <b>a</b>nd <b>acce</b>ssible <b>t</b>o <b>us</b>ers <b>o</b>n{' '}
        <b>a</b>y <b>de</b>vice
      </>
    )
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
