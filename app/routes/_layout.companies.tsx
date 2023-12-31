import { prisma } from 'db.server'
import { log } from 'log.server'

export async function loader() {
  log.debug('getting companies...')
  const companies = await prisma.company.findMany({ take: 100 })
  log.debug('got %d companies', companies.length)
  return companies
}
