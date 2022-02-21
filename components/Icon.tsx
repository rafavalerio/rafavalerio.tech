import Image from 'next/image'
import styles from './Icon.module.css'

type Props = {
  path: string
  width?: string
  height?: string
}

export default function Icon({ path, width = '26px', height = '26px' }: Props) {
  return (
    <div className={styles.icon}>
      <Image src={path} width={width} height={height} alt={`${path} logo`} />
    </div>
  )
}
