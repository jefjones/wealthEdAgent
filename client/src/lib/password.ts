/** Same specials wealthEd accepts on ebi/WealthEd/auth/register. */
export const PASSWORD_SPECIALS = ')*&^%($#@!'

export const PASSWORD_RULES_TEXT =
  'At least 8 characters are required, plus one uppercase character and at least one special character: ) * & ^ % ( $ # @ !'

export function passwordMeetsRules(pw: string) {
  return (
    pw.length >= 8 &&
    /[A-Z]/.test(pw) &&
    [...PASSWORD_SPECIALS].some((character) => pw.includes(character))
  )
}

const RESERVED = new Set(['jef', 'jefwealth'])

export function isReservedUsername(username: string) {
  return RESERVED.has(username.trim().toLowerCase())
}
