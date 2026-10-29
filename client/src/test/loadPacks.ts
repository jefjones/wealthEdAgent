// Packs are lazy chunks in the app. Tests use the sync catalog helpers, so load every pack first.
import { loadAllPacks } from '../content/catalog.ts'

await loadAllPacks()
