import React from 'react'
import Link from 'next/link'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://nftnow.com/wp-content/uploads/2022/03/bored-apes-nft-BAYC-collection.png')] before:bg-cover before:bg-center before:opacity-40 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
            Build the world's most trusted and inclusive NFT marketplace with the best selection.
            </div>
            <div className={style.description}>
                OpenSea's mission
            </div>
            <div className={style.ctaContainer}>
              <Link href="/collections/0x3D75788530a8b8206A6275130f75c6FA63eb58ca">
                <button className={style.accentedButton}>Collection</button>
              </Link>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://cryptonaute.fr/wp-content/uploads/2022/03/BAYC.png"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[3.25rem] rounded-full"
                src="data:image/png;base64,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"
                alt=""
              />
              <div className={style.author}>Oleksandr Ursol</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
