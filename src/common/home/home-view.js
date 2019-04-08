import React from 'react'
import { css } from 'styled-components'
import Flex from '@baseloop/ui/src/layout/flex'
import { HEADER_BACKGROUND, HEADER_FOREGROUND, FOOTER_BACKGROUND } from '../styles/colors'

const headerStyle = css`
  background: ${HEADER_BACKGROUND});
  padding: 2rem;
  text-align: center;
  height: 17.5rem;
  color: #000;

  h1 {
    font-size: 3rem;
    font-family: "Merienda", cursive;
  }
  
  p {
    font-size: 1.5rem;
    margin-top: 1rem;
    font-weight: 200;
  }
`

export default function Home () {
  return (
    <>
      <Flex css={headerStyle} alignItems="center" justifyContent="center">
        <div>
          <h1>Hello David Notikwwefwfwefefwrferfjihihhhj gg</h1>
        </div>
      </Flex>
    </>
  )
}
