export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="font-['Impact'] text-black bg-failure-red px-2 tracking-tighter">FAILURE</div>
      <div className="font-['Impact'] text-white bg-failure-red px-0.5">¡</div>
    </div>
  )
}
