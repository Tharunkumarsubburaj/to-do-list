

export default function Header() {
  return (
    <nav className="bg-background/80 text-text flex justify-between items-center p-4">
        <img src="/image/logo-Photoroom.png" alt="logo" className="size-10" />
        <ul className="flex gap-4">
                <li>Task</li>
                <li>History</li>
                <li>Profile</li>
        </ul>
        <div className="flex gap-2 items-center">
            <img src="/image/logo-Photoroom.png" alt="user" className="size-8" />
            <p>name</p>
        </div>
    </nav>
  )
}
