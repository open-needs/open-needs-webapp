import * as React from 'react';

import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

const OpenNeedsIcon = ({ sx = [] }) => (
  <Box
    sx={[
      {
        width: '50px',
        height: '50px'
      },
      // You cannot spread `sx` directly because `SxProps` (typeof sx) can be an array.
      ...(Array.isArray(sx) ? sx : [sx])
    ]}
  >
    {/* Created from open-needs-logo-white.svg on https://react-svgr.com/playground/ */}
    <svg viewBox="0 0 37.103 60.896" xmlns="http://www.w3.org/2000/svg">
      <path
        style={{
          fill: '#fff',
          stroke: 'none',
          strokeWidth: 1
        }}
        d="M44.435 121.597c-.069-.393-.328-3.155-.634-6.765-.18-2.119-.458-5.362-.619-7.207l-.292-3.355 6.236-13.2c7.556-15.994 8.263-17.371 8.806-18.287l.148-.25.266.085c1.46.468 15.146 6.917 16.437 7.745.217.14.23.163.184.33-.324 1.187-12.68 27.433-14.763 31.355l-.356.67-.93.615c-.512.338-2.74 1.875-4.95 3.415-5.877 4.093-8.115 5.576-8.771 5.813-.297.107-.476-.02-.615-.44a5.047 5.047 0 0 1-.147-.524zm1.504-1.197c.263-.098 4.638-3.121 4.824-3.334.054-.063-.643-.426-2.683-1.398-1.516-.722-2.767-1.284-2.78-1.249-.013.036-.008.256.012.49.02.232.11 1.314.203 2.403.243 2.888.277 3.142.424 3.088zm-.167-7.537c.744.466 5.133 2.533 5.98 2.817.6.2.666.207.87.09.875-.504 5.25-3.53 5.333-3.688.033-.062-13.296-6.444-13.389-6.411-.062.022.512 6.41.606 6.752.013.043.282.24.6.44zm6.235-5.423 7.234 3.41 7.478-15.868 6.576-13.953-7.257-3.42-7.256-3.42-6.565 13.931C46.745 99.731 44.754 103.98 44.76 104c.006.017 3.267 1.566 7.246 3.441zm-3.822-3.507c.408-1.322.275-1.171 7.215-15.847 5.279-11.162 5.125-10.695 5.5-11.285.102-.158.198-.236.298-.24.255-.009.634.17.75.356.104.164.082.252-.261 1.057-1.88 4.413-9.128 19.864-11.462 24.413-1.13 2.203-1.35 2.494-1.77 2.342-.308-.112-.398-.378-.27-.796zm7.93 3.96c.054-.363.48-1.466 1.13-2.921 2.485-5.563 7.544-16.245 10.491-22.183 1.124-2.265 1.218-2.428 1.408-2.457.246-.038.535.078.731.294.136.15.135.186-.023.602-.416 1.098.135.06-4.875 10.729-6.804 14.491-7.392 15.577-7.966 16.355-.226.306-.49.32-.746.04-.206-.224-.19-.175-.15-.459z"
        transform="translate(-42.89 -61.7)"
      />
      <path
        d="M79.583 71.132c-.931 2.405-4.697 10.062-5.002 10.171-.204.074-2.564-.95-7.53-3.267-5.335-2.488-9.219-4.437-9.301-4.666-.076-.21 1.376-3.587 3.042-7.072 1.265-2.649 1.972-3.984 2.141-4.044.19-.068 3.92-1.486 9.834 1.302 5.862 2.762 7.021 6.483 7.09 6.675.02.055-.103.46-.274.9zm-3.343-1.257c-3.074-1.534-11.903-5.627-12.39-5.744-.176-.042-.2-.028-.37.209-.099.14-.31.53-.467.87l-.288.616 7.254 3.419 7.254 3.418.236-.484c.293-.602.523-1.26.48-1.378-.017-.048-.786-.465-1.71-.926zM61.558 68.31c-.276.597-.488 1.123-.472 1.17.036.098 1.4.759 8.818 4.271l5.574 2.64.548-1.161.549-1.162-7.258-3.422-7.257-3.422zm-1.644 3.478-.455.965 7.255 3.42 7.256 3.418.456-.963.456-.964-7.256-3.42-7.257-3.42z"
        style={{
          fill: '#fff',
          stroke: '#fff',
          strokeWidth: 0.264583
        }}
        transform="translate(-42.89 -61.7)"
      />
      <path
        style={{
          fill: '#0f0',
          stroke: '#0f0',
          strokeWidth: 0.755906,
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 0.999444,
          paintOrder: 'fill markers stroke'
        }}
        d="M173.118 452.841c-.593-4.708-1.744-19.592-1.532-19.805.417-.419 19.766 8.796 19.737 9.4-.01.18-.852.91-1.873 1.622-3.086 2.155-15.043 10.283-15.573 10.587-.324.186-.587-.439-.759-1.804z"
        transform="matrix(.26458 0 0 .26458 -42.89 -61.7)"
      />
      <path
        style={{
          fill: '#0ff',
          stroke: '#0ff',
          strokeWidth: 1.88976,
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 0.999444,
          paintOrder: 'fill markers stroke'
        }}
        d="M264.28 261.437c-25.678-12.132-26.633-12.626-26.382-13.662.295-1.212 2.283-4.765 2.871-5.131.408-.253 12.91 5.323 29.803 13.292 16.236 7.66 23.412 11.352 23.567 12.128.193.97-2.113 6.048-2.725 6-.27-.022-12.48-5.704-27.134-12.627z"
        transform="matrix(.26458 0 0 .26458 -42.89 -61.7)"
      />
      <path
        style={{
          fill: 'red',
          stroke: 'red',
          strokeWidth: 0.755904,
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 0.999444,
          paintOrder: 'fill markers stroke'
        }}
        d="M269.75 281.193c-26.597-12.716-38.673-18.56-38.673-18.716 0-.085.786-1.893 1.748-4.018 1.035-2.288 1.976-3.808 2.308-3.729.904.216 53.817 25.226 53.818 25.437.002.777-3.744 8.07-4.128 8.039-.269-.022-7.052-3.177-15.073-7.013z"
        transform="matrix(.26458 0 0 .26458 -42.89 -61.7)"
      />
      <path
        style={{
          fill: '#ff0',
          fillOpacity: 1,
          stroke: '#ff0',
          strokeWidth: 0.755904,
          strokeLinejoin: 'round',
          strokeMiterlimit: 4,
          strokeDasharray: 'none',
          strokeOpacity: 1,
          paintOrder: 'fill markers stroke'
        }}
        d="m252.25 287.697-27.181-12.805 1.48-3.274c.813-1.801 1.55-3.346 1.637-3.434.147-.147 48.15 22.305 52.54 24.574l1.956 1.011-1.625 3.366-1.625 3.366z"
        transform="matrix(.26458 0 0 .26458 -42.89 -61.7)"
      />
    </svg>
  </Box>
);

OpenNeedsIcon.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])),
    PropTypes.func,
    PropTypes.object
  ])
};

export default OpenNeedsIcon;
