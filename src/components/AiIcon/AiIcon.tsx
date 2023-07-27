export default function AiIcon({ isActive }: { isActive: boolean }) {
  return (
    <svg
      width="30px"
      height="30px"
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>artificial intelligence</title>
      <path
        d="M106,27A23,23,0,1,0,62.45,37.33a18.45,18.45,0,0,0-9-2.33c-11,0-20,9.85-20,22a23.09,23.09,0,0,0,5.81,15.5A19.12,19.12,0,0,0,35,72c-12.7,0-23,12.54-23,28s10.3,28,23,28a19.12,19.12,0,0,0,4.31-.5A23.09,23.09,0,0,0,33.5,143c0,12.15,9,22,20,22a18.45,18.45,0,0,0,9-2.33A23,23,0,1,0,106,173c0-.34,0-0.67,0-1h0V28h0C106,27.67,106,27.34,106,27Z"
        fill="none"
        stroke={isActive ? '#246BFD' : '#220728'}
        strokeLinejoin="bevel"
        strokeWidth="8"
      />
      <path
        d="M67.26,189.26a23,23,0,0,0,32.53-32.53H86.9"
        fill="none"
        stroke={isActive ? '#246BFD' : '#220728'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <path
        d="M66.26,10.74A23,23,0,0,1,98.79,43.26H87.67"
        fill="none"
        stroke={isActive ? '#246BFD' : '#220728'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <polyline
        points="106 95 81 95 49.25 124.76"
        fill="none"
        stroke={isActive ? '#246BFD' : '#220728'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <line
        x1="44.97"
        y1="86.65"
        x2="62.45"
        y2="111.44"
        fill="none"
        stroke={isActive ? '#246BFD' : '#220728'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <line
        x1="62.45"
        y1="162.67"
        x2="74.5"
        y2="146"
        fill="none"
        stroke={isActive ? '#246BFD' : '#220728'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <polyline
        points="62.45 37.49 71 51 71 71"
        fill="none"
        stroke={isActive ? '#246BFD' : '#220728'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <line
        x1="152"
        y1="100"
        x2="104"
        y2="100"
        fill="none"
        stroke={isActive ? '#246BFD' : '#220728'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <polyline
        points="107 131 131 131 143 152.67"
        fill="none"
        stroke={isActive ? '#246BFD' : '#220728'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <polyline
        points="107 70 131 70 143 48.33"
        fill="none"
        stroke={isActive ? '#246BFD' : '#220728'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <circle
        cx="171"
        cy="100"
        r="16"
        fill="none"
        stroke={isActive ? '#246BFD' : '#ffc548'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <circle
        cx="149"
        cy="170"
        r="16"
        fill="none"
        stroke={isActive ? '#246BFD' : '#ffc548'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
      <circle
        cx="149"
        cy="30"
        r="16"
        fill="none"
        stroke={isActive ? '#246BFD' : '#ffc548'}
        strokeMiterlimit="10"
        strokeWidth="8"
      />
    </svg>
  )
}
