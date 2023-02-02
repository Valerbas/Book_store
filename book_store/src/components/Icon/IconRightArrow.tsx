import React from 'react'

type IconRightArrowProps = {
    className?: string
}
export const IconRightArrow = ({ className }: IconRightArrowProps) => {
  return (
    <svg className={className} width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
            <path fill-rule='evenodd' clip-rule='evenodd' d='M13.2905 18.7076C13.1005 18.5076 13.0005 18.2576 13.0005 17.9976C13.0005 17.7376 13.1005 17.4876 13.2905 17.2876L17.5905 12.9976L4.00055 12.9976C3.45055 12.9976 3.00055 12.5476 3.00055 11.9976C3.00055 11.4476 3.45055 10.9976 4.00055 10.9976L17.5905 10.9976L13.2905 6.70762C12.9005 6.31762 12.9005 5.67762 13.2905 5.28762C13.6805 4.89762 14.3205 4.89762 14.7105 5.28762L20.7105 11.2876C20.8005 11.3776 20.8705 11.4876 20.9205 11.6076C20.9405 11.6576 20.9605 11.6976 20.9605 11.7476C21.0105 11.9076 21.0105 12.0876 20.9605 12.2476C20.9605 12.2976 20.9405 12.3376 20.9205 12.3876C20.8705 12.5076 20.8005 12.6176 20.7105 12.7076L14.7105 18.7076C14.3205 19.0976 13.6805 19.0976 13.2905 18.7076Z' fill='black'/>
        </svg>
  )
}