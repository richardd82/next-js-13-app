
const Layout = ({ children }) => {
  return (
    <div>
        <marquee style={{background: '#fff', color: 'purple'}}>Posts and Comments Layout with NextJS 13 </marquee>
        {children}
    </div>
  )
}

export default Layout