import { classNames } from "@/functions/classNames";
import React from "react";

interface Car2IconProps extends React.HTMLAttributes<HTMLElement> {
	variant?: "duotone" | "outline" | "solid";
	classPath1?: string;
	classPath2?: string;
	classPath3?: string;
	classPath4?: string;
	classPath5?: string;
	classPath6?: string;
}

export function Car2Icon({ variant = "duotone", className, classPath1, classPath2, classPath3, classPath4, classPath5, classPath6, ...restProps }: Car2IconProps) {
	return (
		<i className={classNames(`ki-${variant} ki-car-2`, className)} {...restProps}>
			<i className={classNames("path1", classPath1)}></i>
			<i className={classNames("path2", classPath2)}></i>
			<i className={classNames("path3", classPath3)}></i>
			<i className={classNames("path4", classPath4)}></i>
			<i className={classNames("path5", classPath5)}></i>
			<i className={classNames("path6", classPath6)}></i>
		</i>
	);
}
