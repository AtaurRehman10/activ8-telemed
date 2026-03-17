import Header   from '../components/glp1/Header'
import Symptoms from '../components/glp1/Symptoms'
import Process  from '../components/glp1/Process'
import Provider from '../components/shared/Provider'
import Reviews  from '../components/shared/Reviews'
import FAQ      from '../components/glp1/FAQ'
import CTA      from '../components/glp1/CTA'
import Footer   from '../components/shared/Footer'

export default function Glp1LandingPage() {
  return (
    <div style={{ width: '100%', background: '#fff' }}>
      <Header />
      <Symptoms />
      <Process />
      <Provider />
      <Reviews />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}
