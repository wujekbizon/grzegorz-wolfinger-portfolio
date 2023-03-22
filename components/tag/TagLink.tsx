type TagProps = {
  icon: JSX.Element
  title: string
  link?: string
}

const TagLink = ({ icon, title, link }: TagProps) => {
  return (
    <div>
      {icon}
      <a target="_blank" href={link ?? '/'}>
        {title}
      </a>
    </div>
  )
}
export default TagLink
