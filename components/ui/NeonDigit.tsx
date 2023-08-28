import { useState } from 'react'
import { Line, VerticalLine } from '@/components'

interface NeonDigitInterface {
  width: string
  height: string
  color: string
  lineVisibility: boolean[]
}

const NeonDigit = ({ width, height, color, lineVisibility }: NeonDigitInterface) => {
  const [isActiveNode, setIsActiveNode] = useState(true)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', height, width, flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Line
              color={color}
              width="50%"
              height={3.09}
              style={{ display: `${lineVisibility[0] ? 'block' : 'none'}` }}
            />
            <Line
              color={color}
              width="50%"
              height={3.09}
              style={{ display: `${lineVisibility[1] ? 'block' : 'none'}` }}
            />
          </div>
          <VerticalLine
            color={color}
            height="50%"
            width={3}
            style={{ display: `${lineVisibility[2] ? 'block' : 'none'}` }}
          />
          <VerticalLine
            color={color}
            height="50%"
            width={3}
            style={{ display: `${lineVisibility[3] ? 'block' : 'none'}` }}
          />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Line
              color={color}
              width="50%"
              height={3.09}
              style={{ display: `${lineVisibility[4] ? 'block' : 'none'}` }}
            />
            <Line
              color={color}
              width="50%"
              height={3.09}
              style={{ display: `${lineVisibility[5] ? 'block' : 'none'}` }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', height, width: '3px', flexDirection: 'column' }}>
          <VerticalLine
            color={color}
            height="50%"
            width={3}
            style={{ display: `${lineVisibility[6] ? 'block' : 'none'}` }}
          />
          <VerticalLine
            color={color}
            height="50%"
            width={3}
            style={{ display: `${lineVisibility[7] ? 'block' : 'none'}` }}
          />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ display: 'flex', height, width, flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Line
              color={color}
              width="50%"
              height={3.09}
              style={{ display: `${lineVisibility[8] ? 'block' : 'none'}` }}
            />
            <Line
              color={color}
              width="50%"
              height={3.09}
              style={{ display: `${lineVisibility[9] ? 'block' : 'none'}` }}
            />
          </div>
          <VerticalLine
            color={color}
            height="50%"
            width={3}
            style={{ display: `${lineVisibility[10] ? 'block' : 'none'}` }}
          />
          <VerticalLine
            color={color}
            height="50%"
            width={3}
            style={{ display: `${lineVisibility[11] ? 'block' : 'none'}` }}
          />
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Line
              color={color}
              width="50%"
              height={3.09}
              style={{ display: `${lineVisibility[12] ? 'block' : 'none'}` }}
            />
            <Line
              color={color}
              width="50%"
              height={3.09}
              style={{ display: `${lineVisibility[13] ? 'block' : 'none'}` }}
            />
          </div>
        </div>
        <div style={{ display: 'flex', height, width: '3px', flexDirection: 'column' }}>
          <VerticalLine
            color={color}
            height="50%"
            width={3}
            style={{ display: `${lineVisibility[14] ? 'block' : 'none'}` }}
          />
          <VerticalLine color={color} height="50%" style={{ display: `${lineVisibility[15] ? 'block' : 'none'}` }} />
        </div>
      </div>
    </div>
  )
}
export default NeonDigit
