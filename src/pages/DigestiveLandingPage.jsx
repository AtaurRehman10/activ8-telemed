import DigestiveHeader   from '../components/digestive/DigestiveHeader'
import DigestiveSymptoms from '../components/digestive/DigestiveSymptoms'
import DigestiveProcess  from '../components/digestive/DigestiveProcess'
import Provider          from '../components/shared/Provider'
import Reviews           from '../components/shared/Reviews'
import DigestiveFAQ      from '../components/digestive/DigestiveFAQ'
import DigestiveCTA      from '../components/digestive/DigestiveCTA'
import Footer            from '../components/shared/Footer'

export default function DigestiveLandingPage() {
  return (
    <div style={{ width: '100%', background: '#fff' }}>
      <DigestiveHeader />
      <DigestiveSymptoms />
      <DigestiveProcess />
      <Provider quote="Most gut problems get band-aids, not answers. I dig into your microbiome, your triggers, and your history — because lasting healing only happens when you find the real cause." />
      <Reviews />
      <DigestiveFAQ />
      <DigestiveCTA />
      <Footer />
    </div>
  )
}
