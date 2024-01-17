import '../styles/SideBarStyle.scss'

const SideBar = () => {
  return (
    <div id='sidebar'>
      <div id="sidebar_container">
        <div id="logo_container">
          <img src="../src/assets/SideBarAssets/logo.svg" alt="" />
        </div>
        <ul id='nav'>
          {items.map((item, index) => (
            <li className='nav_element' key={index}>
              <a className='nav_link' href={item.href}>
                <img className='nav_logo' src={item.img} alt={`${item.alt} Icon`}/>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div id="sidebar_slider">
        <img src="../src/assets/SidebarAssets/side_slide.svg" alt="<" height={24} width={15}/>
      </div>
    </div>
  )
}

export default SideBar

const items = [
  { title: 'Поиск', img :'../src/assets/SideBarAssets/search.svg', alt :'h', href: '#' },
  { title: 'Команды', img :'../src/assets/SideBarAssets/team.svg', alt :'t', href:'#' },
  { title: 'Список Участников', img :'../src/assets/SideBarAssets/userlist.svg', alt :'ul', href: '#' },
  { title: 'Идеи', img :'../src/assets/SideBarAssets/idea.svg', alt :'i', href: '#' },
]