import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faFortAwesome, faFortAwesomeAlt } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='bg-black text-gray-300 text-center p-8'>
      <h2 className='uppercase text-2xl font-extrabold text-yellow-400'>Zenith Furns</h2>
      <div className='text-sm pt-2 text-gray-200'>
        <p>created by <strong className='text-red-800 text-lg'>Shiba</strong></p>
        <div className='[&>*]:mx-1 text-pink-500 text-lg pt-1'>
          <a href="https://boisterous-griffin-71958e.netlify.app/" target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faFortAwesomeAlt} />
          </a>
          <a href="https://www.linkedin.com/in/shiba-deb-2099b6105/" target='_blank' rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default Footer;
