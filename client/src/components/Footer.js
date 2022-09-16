import image from '../styles/images/linkedin.png'


const Footer = () => {
  return (
    <div className="footer-main">
      <div className="footer-header">Created by:</div>
      <div className='links'>
        <div className="Rokas"><a className='a-rokas' href="https://github.com/rokster112" target="_blank" rel="noreferrer">Rokas Arlauskas -&gt; GitHub</a></div>
        <div className="Logo"><a href="https://www.linkedin.com/in/rokas-arlauskas-8772b6244/" target="_blank" rel="noreferrer"><img src={image} height="50px"></img></a></div>
      </div>
    </div>  
  )
  
}

export default Footer