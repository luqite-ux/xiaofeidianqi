import assert from 'node:assert/strict'
const base=process.env.NEWS_TEST_BASE || 'https://xiaofeielectronics.com'
const slug='testing-electronic-control-systems-for-home-appliances'
const list=await fetch(base+'/news').then(r=>r.text())
assert.ok(list.includes('/news/'+slug),'Published article must appear in the news list')
const detail=await fetch(base+'/news/'+slug)
assert.equal(detail.status,200,'Published detail must open')
assert.ok((await detail.text()).includes('Testing Electronic Control Systems for Home Appliances'))
const sitemap=await fetch(base+'/sitemap.xml').then(r=>r.text())
assert.ok(sitemap.includes('/news/'+slug),'Published article must appear in Sitemap')
console.log('Published news list, detail and Sitemap pass')
