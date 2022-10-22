import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import { useHarmonicIntervalFn } from 'react-use'

const LENGTH = 5
const HEARTS = ['\u{2764}\u{fe0f}', '\u{1f49b}', '\u{1f49a}', '\u{1f499}', '\u{1f49c}']

function getHearts(length: number, offset: number = 0): string {
  let hearts = ''
  for (let i = 0; i < length; i++) {
    hearts += HEARTS[(i + offset) % HEARTS.length]
  }

  return hearts
}

const Home: NextPage = () => {
  const [offset, setOffset] = useState(0)
  const hearts = getHearts(LENGTH, offset)

  useHarmonicIntervalFn(
    () => setOffset(offset => (offset + 1) % HEARTS.length),
    100,
  )

  return (
    <>
      <Head>
        <title>{hearts}</title>
      </Head>

      <span>{hearts}</span>
      <span>I tolerate you.</span>
      <span>{hearts}</span>
    </>
  )
}

export default Home
