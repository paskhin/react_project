export function Image({
  width,
  height,
  src,
  srcSet,
  srcSetTablet,
  srcSetTablet2x,
  srcSetMobile,
  srcSetMobile2x,
}) {
  return (
    <div>
      <picture>
        <source type="image/webp" media="(max-width: 767px)"
          srcSet={`${srcSetMobile} 1x, ${srcSetMobile2x} 2x`} />
        <source type="image/webp" media="(max-width: 1199px)"
          srcSet={`${srcSetTablet} 1x, ${srcSetTablet2x} 2x`} />
        <img src={src} srcSet={srcSet} width={width} height={height}
          alt="" />
      </picture>
    </div>
  )
}

