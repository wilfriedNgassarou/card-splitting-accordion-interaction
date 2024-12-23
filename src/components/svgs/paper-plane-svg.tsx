import { SvgProps } from "./props";

export function PaperPlane(props: SvgProps) {
  return (
    <svg
      width={props.size}
      height={props.size}
      fill="#5f6368"
      viewBox="0 -960 960 960"
      {...props}
    >
      <path d="M0-160v-80h160v-40q-33 0-56.5-23.5T80-360v-400q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v400q0 33-23.5 56.5T800-280v40h160v80H0Zm160-200h640v-400H160v400Zm0 0v-400 400Z" />
    </svg>
  )
}