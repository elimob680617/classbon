import BaseIcon from "@/app/_components/icons/BaseIcon";
import { SvgIconProps } from "@/app/_components/icons/icon.types";

export default function SvgIcon(props:SvgIconProps) {
    return(
        <BaseIcon {...props}>
            <path d="M16.5 3L7.5 12.002L16.495 21"/>
        </BaseIcon>
    )
}