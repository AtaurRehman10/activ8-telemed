import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const assets = [
  // Hero images
  { name: 'hero-main',            id: '6aff4965-f69b-41cc-90e4-cac8837a5f46' },
  { name: 'hero-img95',           id: '2fbfb938-cef2-45c5-97fb-07639a773eb9' },
  { name: 'hero-img96',           id: '5adf16b4-4eee-4dd3-9b4f-61a32d67d624' },
  { name: 'hero-img97',           id: 'fc1f9a2f-3111-437e-9c79-59af5033f398' },
  { name: 'hero-img98',           id: 'a04fcc3c-0afc-44f4-a2c5-34304fc37706' },
  { name: 'hero-mask1',           id: '356ff9a8-3613-4c02-bf41-1d49c5d3751c' },
  { name: 'hero-mask2',           id: '4a255fd4-3d2e-4615-8e47-a87e61cf1de3' },
  // Logo
  { name: 'logo-icon',            id: '3b8333c9-eb2e-4b70-973c-32447662ad4a' },
  // Trust bar icons
  { name: 'quiz-icon',            id: '89fe2299-82a3-4f01-b6e1-acdd3b6dacc0' },
  { name: 'no-obligation-icon',   id: '1cb07c12-7532-48e8-af5a-649edd95378a' },
  { name: 'hipaa-icon',           id: 'b8789b9c-3ffb-4195-8cb2-19478b2d28c2' },
  // Symptoms section
  { name: 'symptoms-bg',          id: 'ff9cd4f9-6e63-4acd-9011-c9625816f82b' },
  { name: 'symptoms-center',      id: 'f0fbbd26-474b-436b-910f-67bd5f4e3d54' },
  { name: 'ellipse14',            id: '3a0ceb4e-5402-4e10-9f18-3269c413bd1f' },
  { name: 'ellipse16',            id: '90f594da-445a-4505-803f-9b782f7b3987' },
  { name: 'dot-icon',             id: '61f36171-3430-4eaf-b691-0152a11b71cf' },
  { name: 'symptom-icon1',        id: '7a047429-3dd4-45c4-80f5-c1a70d533452' },
  { name: 'symptom-icon2',        id: 'a758efab-a8a9-4fcf-8d2d-468becc90f1a' },
  { name: 'symptom-icon3',        id: 'c0d8d57b-ae91-4232-841b-08847e863d44' },
  { name: 'symptom-icon4',        id: '31b63cc4-3d14-49c8-88b7-b9be51cf3613' },
  { name: 'symptom-vector',       id: '791a9300-7b4c-4328-978a-31fee945f97c' },
  { name: 'symptom-icon5',        id: '05b1c122-54d7-4a35-86cf-d69dbccac769' },
  // Process section
  { name: 'phone',                id: 'c48fb2dc-6d95-48c3-9685-2f8dc369e093' },
  { name: 'app-screen',           id: 'd3773e40-de35-4248-a63b-416f587ac2ea' },
  { name: 'consult',              id: '04247e00-ed9e-4410-b7ef-91002ca9cb8c' },
  { name: 'rect51',               id: 'f5f0a32d-4b66-4f6f-80dd-230e21d005a5' },
  { name: 'plan',                 id: 'ead79238-2f98-42c2-b62c-0b5efda5e4b4' },
  // Provider section
  { name: 'provider-mask',        id: '4e4c802a-8cb9-44a3-a542-e200128a1d35' },
  { name: 'provider-photo',       id: 'b1d5b9a8-aa8c-4296-a912-1ab582cde8f5' },
  { name: 'provider-overlay',     id: 'fef1a79f-7364-46c2-abcf-e3c170628c28' },
  { name: 'quote-decor',          id: 'ffbbf112-6724-40e5-84c5-2e3f45509289' },
  { name: 'credentials1',         id: '2586da7e-1cb7-4498-a278-d811d83ecbee' },
  { name: 'credentials2',         id: 'e4d1e228-52f8-4e98-bab3-9ceac0db4e66' },
  { name: 'credentials3',         id: 'eb898f57-a89e-4892-a96f-23b435855553' },
  // Reviews
  { name: 'avatar-denise',        id: 'ddf703dc-b3f9-4756-a685-84f7d75bc794' },
  { name: 'avatar-rina',          id: '096945fd-b785-4a96-842e-b48982b93720' },
  { name: 'avatar-della',         id: '0f5115e2-c5a0-4f30-b98e-d3fa99aab624' },
  { name: 'quote-icon',           id: 'c1503489-f4fd-4d17-b1dc-b47c8f4154e4' },
  // FAQ
  { name: 'faq-arrow',            id: '3f541a01-cd1c-496b-9943-60cffcb80cb0' },
  { name: 'faq-line',             id: '7f970470-8e04-4d97-9a3e-0a7e02f5722a' },
  // CTA
  { name: 'cta-bg',               id: 'ed6e464b-680b-41a6-8813-dc6390cdf794' },
  { name: 'cta-mask',             id: '9420864e-0cec-4209-b32b-121c1b4957ef' },
  // Footer
  { name: 'footer-icon',          id: '04490164-5ba6-4973-8f6f-4943817a6dff' },
  { name: 'social-icons',         id: '0d804677-496b-4ef2-bd23-af2559e64127' },
]

const outDir = join(process.cwd(), 'public', 'assets')
mkdirSync(outDir, { recursive: true })

const extFromType = (ct) => {
  if (ct.includes('png'))  return '.png'
  if (ct.includes('jpeg') || ct.includes('jpg')) return '.jpg'
  if (ct.includes('webp')) return '.webp'
  if (ct.includes('svg'))  return '.svg'
  return '.png'
}

let ok = 0, fail = 0
for (const asset of assets) {
  const url = `https://www.figma.com/api/mcp/asset/${asset.id}`
  try {
    const res = await fetch(url)
    if (!res.ok) { console.error(`FAIL ${asset.name}: HTTP ${res.status}`); fail++; continue }
    const ct = res.headers.get('content-type') || ''
    const ext = extFromType(ct)
    const buf = await res.arrayBuffer()
    const dest = join(outDir, asset.name + ext)
    writeFileSync(dest, Buffer.from(buf))
    console.log(`✓ ${asset.name}${ext}`)
    ok++
  } catch (e) {
    console.error(`FAIL ${asset.name}: ${e.message}`)
    fail++
  }
}
console.log(`\nDone: ${ok} ok, ${fail} failed`)
