import React from 'react'
import ContentLoader from 'react-content-loader'

const Loader = props => (
  <ContentLoader
    speed={2}
    viewBox='0 0 450 130'
    backgroundColor='rgba(201, 209, 217, 0.5)'
    foregroundColor='#ecebeb'
    {...props}>
    <rect
      strokeLinecap='round'
      x='1'
      y='130'
      rx='0'
      ry='0'
      width='450'
      height='112'
    />
    <rect
      strokeLinecap='round'
      x='-1'
      y='115'
      rx='0'
      ry='0'
      width='70'
      height='15'
    />
    <rect
      strokeLinecap='round'
      x='3'
      y='41'
      rx='0'
      ry='0'
      width='507'
      height='21'
    />
    <rect
      strokeLinecap='round'
      x='4'
      y='73'
      rx='0'
      ry='0'
      width='475'
      height='21'
    />
    <rect
      strokeLinecap='round'
      x='0'
      y='0'
      rx='0'
      ry='0'
      width='250'
      height='30'
    />
  </ContentLoader>
)

export default Loader
