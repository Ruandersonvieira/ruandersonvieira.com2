const size = {
  sx: "576px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
}

const device = {
  sx: `(min-width: ${size.sx})`,
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
  laptopL: `(min-width: ${size.xl})`,
}

export default device
