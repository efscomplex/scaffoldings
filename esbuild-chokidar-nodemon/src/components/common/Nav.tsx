import React from 'react'

function Nav({ routes, ...props }) {
	return (
		<div {...props}>
			{routes.map((route) => (
				<li key={Math.random()}>
					<a href={route.href}></a>
				</li>
			))}
		</div>
	)
}
export default function Navbar() {
	const routes = ['home', 'about', 'contact']

	return <Nav routes={routes}/>
}
