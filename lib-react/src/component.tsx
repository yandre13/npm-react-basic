import React from 'react'

const Component: React.FC<{ name: string }> = ({
	name = 'World',
	children,
}) => <h1>Hello {name}</h1>

export default Component
