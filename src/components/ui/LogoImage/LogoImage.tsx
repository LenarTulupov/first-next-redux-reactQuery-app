import Image from "next/image";
import styles from './Logo.module.scss'

export default function LogoImage() {
  const imageLogo = 'https://cdn-eahjn.nitrocdn.com/ChEvwayTHZmZJUAdsUNMLXuXZdBprFoQ/assets/images/optimized/rev-b4bc015/www.spinxdigital.com/app/uploads/2023/03/spinx-logo-white.png'
  return (
    <div className={styles.logo}>
      <Image
        src={imageLogo}
        alt='logo'
        width={100}
        height={0}
        layout='intrinsic'
        priority
      />
    </div>
  )
};
