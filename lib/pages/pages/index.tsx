import Link from 'next/link'

export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Bienvenido a EvolvIA 🌱</h1>
      <p>La plataforma inteligente para la hotelería sustentable</p>
      <Link href="/login">
        <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
          Iniciar sesión
        </button>
      </Link>
    </div>
  )
}
