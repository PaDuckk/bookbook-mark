import styled from 'styled-components'
import { flexbox, FlexboxProps } from 'styled-system'
import Box, { BoxProps } from './Box'

export interface FlexProps extends BoxProps, FlexboxProps {}

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`
