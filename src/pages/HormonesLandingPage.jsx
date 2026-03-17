import HormonesHeader   from '../components/hormones/HormonesHeader'
import HormonesSymptoms from '../components/hormones/HormonesSymptoms'
import HormonesProcess  from '../components/hormones/HormonesProcess'
import Provider         from '../components/shared/Provider'
import Reviews          from '../components/shared/Reviews'
import HormonesFAQ      from '../components/hormones/HormonesFAQ'
import HormonesCTA      from '../components/hormones/HormonesCTA'
import Footer           from '../components/shared/Footer'

export default function HormonesLandingPage() {
  return (
    <div style={{ width: '100%', background: '#fff' }}>
      <HormonesHeader />
      <HormonesSymptoms />
      <HormonesProcess />
      <Provider />
      <Reviews />
      <HormonesFAQ />
      <HormonesCTA />
      <Footer />
    </div>
  )
}
