export default function PostsLayout ({ children }) {
  return (
    <div>
      <marquee>Rutas agrupadas para compartir layout</marquee>
      {/* - nota -
        este componente se usa en la ruta
        /banner-compartido
      */}
      {children}
    </div>
  )
}
