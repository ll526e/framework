import '@styles/component/footer-bar.scss'
const FooterBar = () => {
  const newYear = new Date().getFullYear()
  return (
    <>
      <div className="m-footer">
        Copyright © 2022 - {newYear} <em className='m-footer-icp'>ICP备案：
          <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">豫ICP备2022028308号-1</a>
        </em>
      </div>
    </>
  )
}
export default FooterBar
