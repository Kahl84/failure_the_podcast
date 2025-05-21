export function SpotifyEmbed({
  src,
  width = "100%",
  height = "352",
  allowFullScreen = false,
}: {
  src: string
  width?: string
  height?: string
  allowFullScreen?: boolean
}) {
  return (
    <iframe
      style={{ borderRadius: "12px" }}
      src={src}
      width={width}
      height={height}
      frameBorder="0"
      allowFullScreen={allowFullScreen}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    ></iframe>
  )
}
