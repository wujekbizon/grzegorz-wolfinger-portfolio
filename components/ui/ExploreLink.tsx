import styles from './ExploreLink.module.scss'
import Link from 'next/link'

type ExploreLinkProps = {
  text: string
  url: string
  className?: string
}

const ExploreLink = ({ text, url, className }: ExploreLinkProps) => {
  return (
    <Link href={url} className={`${styles.explore_link} ${className}`}>
      {text} →
    </Link>
  )
}
export default ExploreLink
