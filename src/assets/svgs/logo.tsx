import { colors } from "../../../tailwind.config"

interface ILogoProps {
    color?: MyCustomColors
}

export default function Logo({ color = 'secoundary' }: ILogoProps) {
    return (
        <svg fill="none" width='35px' height='37.28' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 35 38">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.084.359H3.873c-1.076 0-1.99.373-2.743 1.118C.378 2.223 0 3.111 0 4.14v8.081c0 .076-.002.113 0 .189l5.002-1.08V7.176c0-.533.198-.976.592-1.331a1.75 1.75 0 0 1 1.345-.586h6.078c.537 0 1.004.195 1.398.586.359.355.538.798.538 1.331v23.595c0 .532-.18.994-.538 1.384-.394.355-.86.533-1.398.533H6.94c-.538 0-.986-.178-1.345-.533-.394-.39-.592-.852-.592-1.384v-5.167h4.949l-1.13-4.953H.002v13.155c0 1.066.376 1.971 1.129 2.717.753.745 1.667 1.118 2.743 1.118h12.21c1.075 0 1.99-.372 2.743-1.118.753-.746 1.13-1.651 1.13-2.717l.036-4.023V19.48h11.134c1.04 0 1.937-.372 2.69-1.118.789-.746 1.183-1.651 1.183-2.716V4.193c0-1.065-.394-1.97-1.183-2.716C33.064.732 32.167.36 31.127.36H16.084Zm13.322 13.634c-.358.356-.807.533-1.345.533h-8.068V5.312h8.068c.538 0 .986.195 1.345.586.313.282.502.609.567.98.016.096.025.196.025.298v5.433a1.903 1.903 0 0 1-.592 1.385Z"
                fill={colors[color]}
            />
        </svg>
    )
}