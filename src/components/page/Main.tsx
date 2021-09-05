import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useStore } from '../../hooks/useStore'
import { Flex } from '../common/Flex'

interface Props {}

const Main = observer((props: Props) => {
  const { combStore } = useStore()
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')

  return (
    <Wrapper>
      <Flex flexDirection="column">
        <div>변수 추가</div>
        <div>
          키
          <input type="" value={key} onChange={(e) => setKey(e.target.value)} />
        </div>
        <div>
          밸류
          <input type="" value={value} onChange={(e) => setValue(e.target.value)} />
        </div>
        <button className="add-var" onClick={() => combStore.addVariable(key, value)}>
          변수 추가
        </button>
      </Flex>
      <Flex flexDirection="column">
        <div>변수</div>
        <Flex>
          {combStore.variableList.map(({ key, value }) => {
            return (
              <Flex className="varible-button">
                {key} : {value}
                <div>X</div>
              </Flex>
            )
          })}
        </Flex>
      </Flex>
      <Flex flexDirection="column">
        <div>url 추가</div>
        <div>
          <input type="" value={key} onChange={(e) => setKey(e.target.value)} />
        </div>
        <button className="add-var" onClick={() => combStore.addVariable(key, value)}>
          url 추가
        </button>
      </Flex>
    </Wrapper>
  )
})

export default Main

const Wrapper = styled.div`
  .varible-button {
    padding: 8px 12px;
    background-color: aliceblue;
    border-radius: 8px;
  }

  .varible-button + .varible-button {
    margin-left: 8px;
  }
`
