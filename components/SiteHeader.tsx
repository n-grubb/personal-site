const SiteHeader = () => {
  return (
    <header id='site-header'>
      <a href='/' className='branding' title='Home'>
        n_
      </a>
      <nav id='site-nav'>
        <ul className='site-nav'>
          <li>
            <a href='/posts'>posts</a>
          </li>
          <li>
            <a href='/experiments'>experiments</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default SiteHeader
