import { classNames } from "@/functions/classNames";
import { Kick } from "@/interfaces";
import React from "react";

interface GithubIconProps extends Kick<React.HTMLAttributes<HTMLElement>, "children"> {
	classPath1?: string;
	classPath2?: string;
}

export function GithubIcon({ className, classPath1, classPath2, ...restProps }: GithubIconProps) {
	return (
		<i className={classNames("ki-duotone ki-github", className)} {...restProps}>
			<span className={classNames("path1", classPath1)}></span>
			<span className={classNames("path2", classPath2)}></span>
		</i>
	);
}
