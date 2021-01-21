import { AutoColumn } from '../Column'
import { ButtonOutlined } from '../Button'
import { CheckCircle } from 'react-feather'
import React from 'react'
import { RowFixed } from '../Row'
import { Text } from 'rebass'
import { Trade } from '@zeroexchange/sdk'
import styled from 'styled-components'

const Message = styled.p`
  font-size: .85rem;
  margin-top: 1rem;
  line-height: 20px;
  color: #CED0D9;
  a {
    font-weight: bold;
    color: ${({ theme }) => theme.primary1};
    cursor: pointer;
    outline: none;
    text-decoration: none;
    margin-left: 4px; margin-right: 4px;
  }
`

export default function TransferComplete ({ onDismiss, activeChain, transferTo, trade }: {
  onDismiss: () => void;
  activeChain?: string;
  transferTo?: string;
  trade?: Trade
}) {
  return (
    <AutoColumn gap="12px" justify={'center'}>
      <RowFixed style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <CheckCircle size={'66'} style={{ margin: '.5rem', color: '#27AE60' }} />
        <CheckCircle size={'66'} style={{ margin: '.5rem', color: '#27AE60' }} />
      </RowFixed>
      <RowFixed style={{ width: '100%', marginTop: '1rem'}}>
        <Text fontSize={16} textAlign="center" style={{ lineHeight: "20px"}}>
          <b>{trade?.inputAmount.toSignificant(6)} {trade?.inputAmount.currency.symbol} </b> 
          tokens were successfully transferred from {activeChain} to {transferTo}.
        </Text>
      </RowFixed>
      <RowFixed>
        <Message>
          To see your token assets on the correct chain, you must
          <a href="https://metamask.zendesk.com/hc/en-us/articles/360043227612-How-to-add-a-custom-Network-RPC-and-or-Block-Explorer"
            rel="noopener noreferrer"
            target="_blank">
            configure the Network RPC
          </a>
          of your connected wallet.
        </Message>
      </RowFixed>
      <RowFixed style={{ width: '100%'}}>
        <ButtonOutlined onClick={onDismiss}>
          Close
        </ButtonOutlined>
      </RowFixed>
    </AutoColumn>
  )
}