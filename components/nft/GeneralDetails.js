import { AiFillHeart } from 'react-icons/ai'
import { FaYoutube } from 'react-icons/fa'
import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai'
import { SiDiscord } from 'react-icons/si'
import Link from 'next/link'

const style = {
  wrapper: `flex`,
  infoContainer: `h-36 flex flex-col flex-1 justify-between mb-6`,
  accent: `text-[#2081e2]`,
  nftTitle: `text-3xl font-extrabold`,
  otherInfo: `flex`,
  ownedBy: `text-[#8a939b] mr-4`,
  likes: `flex items-center text-[#8a939b]`,
  likeIcon: `mr-1`,
  actionButtonsContainer: `w-44`,
  actionButtons: `flex container justify-between text-[1.4rem] border-2 rounded-lg`,
  actionButton: `my-2`,
  divider: `border-r-2`,
}

const GeneralDetails = ({ selectedNft }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.infoContainer}>
        <Link href="/collections/0x3D75788530a8b8206A6275130f75c6FA63eb58ca">
          <div className={style.accent}>Bored Ape Yacht Club</div>
        </Link>
        <div className={style.nftTitle}>{selectedNft?.name}</div>
        <div className={style.otherInfo}>
          <div className={style.ownedBy}>
            Owned by <span className={style.accent}>Oleksandr Ursol</span>
          </div>
          <div className={style.likes}>
            <AiFillHeart className={style.likeIcon} /> 5K favorites
          </div>
        </div>
      </div>
      <div className={style.actionButtonsContainer}>
        <div className={style.actionButtons}>
          <div className={`${style.actionButton} ml-2`}>
            <Link href="https://www.youtube.com/channel/UCB6R9NAjkgxQi_QEkc4O25Q">
              <FaYoutube />
            </Link>
          </div>
          <div className={style.divider} />
          <div className={style.actionButton}>
            <Link href="https://www.instagram.com/boredapeyachtclub">
              <AiOutlineInstagram />
            </Link>
          </div>
          <div className={style.divider} />
          <div className={style.actionButton}>
            <Link href="https://twitter.com/BoredApeYC">
              <AiOutlineTwitter />
            </Link>
          </div>
          <div className={style.divider} />
          <div className={`${style.actionButton} mr-2`}>
            <Link href="https://discord.gg/3P5K3dzgdB">
              <SiDiscord />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GeneralDetails