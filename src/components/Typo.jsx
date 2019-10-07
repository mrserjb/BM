import React from 'react'
import Typograf from 'typograf'

const tp = new Typograf({ locale: ['ru', 'en-US'] })

export const Typo = props => tp.execute(props.children)
