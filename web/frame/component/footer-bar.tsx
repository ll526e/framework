import '@styles/component/footer-bar.scss'
const FooterBar = () => {
  const newYear = new Date().getFullYear()
  return (
    <>
      <div className="m-footer">
        Copyright © 2022 - {newYear} <em className='m-footer-icp'>ICP备案：豫ICP备2022028308</em>
      </div>
    </>
  )
}
export default FooterBar
