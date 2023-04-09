import styles from "../style";
import { instagram, linkedin, telegram } from '../assets'
import { socialMedia } from "../constants"


const Footer = () => {
  return (
  <section className={`flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col w-full`}>
      <div className="flex flex-row md:mt-10 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[20px] h-[20px] cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
    
  )
}

export default Footer