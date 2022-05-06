import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section className='intro'>
      <hgroup>
        <h1>I'm Noah Grubb</h1>
        <h2>
          a software engineer based in Philadelphia,
          <br />
          working at{' '}
          <a href='https://www.stripe.com/' target='_blank'>
            Stripe
          </a>
        </h2>
      </hgroup>
    </section>
  )
}

export default Home
