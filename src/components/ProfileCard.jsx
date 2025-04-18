import React from 'react'
import styled from 'styled-components'

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`

const Th = styled.th`
    background: #423c3c;
    color: white;
    padding: 12px;
    border: 1px solid #dddddd;
`
const Td = styled.td`
    padding: 12px;
    border: 1px solid #dddddd;
`

const Tr = styled.tr`
    
`

const Status = styled.tr`
  color: ${props => (props.online ? 'green' : 'gray')};
`

const ProfileCard = ( {profiles} ) => {
  return (
<div>
    <Table>
        <thead>
            <tr>
                <Th>이름</Th>
                <Th>나이</Th>
                <Th>온/오프라인</Th>
            </tr>
        </thead>
        <tbody>
            {profiles.map((p, index) => 
            <Tr key={index}>
                <Td> {p.name} </Td>
                <Td> {p.age} </Td>
                <Td> 
                    <Status online={p.isOnline}>
                        {p.isOnline ? '🟢 온라인 상태입니다.' : '🔴 오프라인 상태입니다.'} 
                    </Status>
                </Td>
          </Tr>
        )}
        </tbody>
    </Table>
</div>
  )
}

export default ProfileCard