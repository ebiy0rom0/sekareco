import React from 'react'

export const Navigation = React.memo((props: Props) => (
  <div className={ ["nav bg-gray-400", props?.test].join(' ') }>
    <h1 className="nav__title">side nav</h1>
  </div>
))

type Props = {
  test?: string
}