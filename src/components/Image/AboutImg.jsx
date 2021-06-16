import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

const AboutImg = ({ filename, height, width, alt }) => (
  <div>
    <Image src={filename} className="rounded shadow-lg" alt={alt} height={height} width={width} />
  </div>
);

AboutImg.propTypes = {
  filename: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
