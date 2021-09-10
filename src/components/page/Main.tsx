import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useStore } from '../../hooks/useStore'
import { Flex } from '../common/Flex'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import Box from '../common/Box'

interface Props {}

const Main = observer((props: Props) => {
  const { combStore } = useStore()
  const [key, setKey] = useState('')
  const [value, setValue] = useState('')
  const [url, setUrl] = useState('')

  return (
    <Flex justifyContent="center" alignItems="center" pt="80px">
      <Wrapper>
        <Flex flexDirection="column" mb="24px">
          <div className="title">변수 추가</div>
          <Flex style={{ gap: '20px' }} mb="12px">
            <Flex flexDirection="column">
              키
              <input type="" value={key} onChange={(e) => setKey(e.target.value)} />
            </Flex>
            <Flex flexDirection="column">
              밸류
              <input type="" value={value} onChange={(e) => setValue(e.target.value)} />
            </Flex>
          </Flex>
          <button
            className="add-var"
            onClick={() => {
              combStore.addVariable(key, value)
              setKey('')
              setValue('')
            }}
          >
            변수 추가
          </button>
        </Flex>
        <Flex flexDirection="column" mb="24px">
          <div className="title">변수</div>
          <Flex>
            {combStore.variableList.map(({ key, value }) => {
              return (
                <Flex key={key} className="varible-button" alignItems="center">
                  <div>
                    {key} : {value}
                  </div>
                  <IoMdCloseCircleOutline onClick={() => combStore.removeVariable(key)} />
                </Flex>
              )
            })}
          </Flex>
        </Flex>
        <Flex flexDirection="column">
          <div className="title">url 추가</div>
          <Box mb="12px">
            <input type="" value={url} onChange={(e) => setUrl(e.target.value)} />
          </Box>
          <button
            className="add-var"
            onClick={() => {
              combStore.addUrl(url)
              setUrl('')
            }}
          >
            url 추가
          </button>
        </Flex>
        <Flex flexDirection="column" style={{ gap: '10px' }}>
          {combStore.composedUrl.map((url, i) => (
            <div key={i}>{url}</div>
          ))}
        </Flex>
      </Wrapper>
    </Flex>
  )
})

export default Main

const Wrapper = styled.div`
  width: 500px;
  border-radius: 25px;
  border: solid gray 1px;
  padding: 25px 30px;

  .title {
    font-weight: bold;
    font-size: 18px;
    margin-bottom: 12px;
  }

  .desc {
    font-size: 14px;
  }

  .varible-button {
    padding: 8px 12px;
    background-color: aliceblue;
    border-radius: 8px;
  }

  .varible-button + .varible-button {
    margin-left: 8px;
  }
`
