import { ReplaySubject } from 'rxjs'

// Anything exported from this file is importable by other in-browser modules.
export function publicApiFunction(who) {
  console.log(`%c${who} say hello`, "color:skyblue")
}

export const sharedSubject = new ReplaySubject()
