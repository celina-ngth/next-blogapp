import React, { ButtonHTMLAttributes } from 'react'

export enum Variant {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	PRIMARY_LIGHT = 'primary-light',
	INFO = 'info',
	SUCCESS = 'success',
	WARNING = 'warning',
	ERROR = 'error',
}

export enum Size {
	SMALL = 'small',
	MEDIUM = 'medium',
}

interface ButtonProps {
	children: string
	variant?: Variant
	size?: string
	type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
	onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({
	type,
	variant,
	size = Size.MEDIUM,
	children,
	onClick,
}) => {
	return (
		<div>
			<button
				type={type}
				onClick={onClick}
				className={
					'py-2 px-5 rounded-full text-base hover:bg-opacity-80 font-semibold ' +
					(variant === Variant.PRIMARY ? ' bg-primary text-secondary ' : '') +
					(variant === Variant.PRIMARY_LIGHT
						? ' bg-primary-light text-primary '
						: '') +
					(variant === Variant.SECONDARY
						? ' bg-secondary text-primary border border-secondary-light border-1  hover:bg-secondary-light hover:bg-opacity-10 '
						: '') +
					(variant === Variant.INFO ? ' bg-info text-secondary ' : '') +
					(variant === Variant.SUCCESS ? ' bg-success text-secondary ' : '') +
					(variant === Variant.WARNING ? ' bg-warning text-secondary ' : '') +
					(variant === Variant.ERROR ? ' bg-error text-secondary ' : '') +
					(size === Size.SMALL ? 'text-sm font-normal py-1 px-3' : '')
				}
			>
				{children}
			</button>
		</div>
	)
}

export default Button
