import { classNames } from "@/functions/classNames";
import React from "react";

interface WhatsappIconProps extends React.HTMLAttributes<HTMLElement> {
	variant?: "duotone" | "outline" | "solid";
	classPath1?: string;
	classPath2?: string;
}

export function WhatsappIcon({ variant = "duotone", className, classPath1, classPath2, ...restProps }: WhatsappIconProps) {
	return (
		<i className={classNames(`ki-${variant} ki-whatsapp`, className)} {...restProps}>
			<i className={classNames("path1", classPath1)}></i>
			<i className={classNames("path2", classPath2)}></i>
		</i>
	);
}
