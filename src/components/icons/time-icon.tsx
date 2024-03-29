import { classNames } from "@/functions/classNames";
import { Kick } from "@/interfaces";
import React from "react";

interface Props extends Kick<React.HTMLAttributes<HTMLElement>, "children"> {
	variant?: "duotone" | "outline" | "solid";
	classPath1?: string;
	classPath2?: string;
}

export function TimeIcon({ variant = "duotone", className, classPath1, classPath2, ...restProps }: Props) {
	return (
		<i className={classNames(`ki-${variant} ki-time`, className)} {...restProps}>
			<span className={classNames("path1", classPath1)}></span>
			<span className={classNames("path2", classPath2)}></span>
		</i>
	);
}
