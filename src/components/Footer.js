import React from 'react'

const Footer = () => {
const currentYear = new Date().getFullYear();

  return (
    <footer className="footer fixed-bottom container ">
    <hr/>
    <p className='text-center'>&copy; {currentYear} Notes, Inc.</p>
</footer>
  )
}

export default Footer
