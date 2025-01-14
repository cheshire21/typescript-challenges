import { Diff } from './template'
import { Expect, Equal } from '../../utils/index'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

type cases = [Expect<Equal<Diff<Foo, Bar>, { gender: number }>>]
