function Loader() {
  return (
    <div
      className="h-screen fixed inset-0 bg-primary z-[1000] flex items-center justify-center"
      role="status"
      aria-live="polite"
      aria-label="Loading website"
    >
      <div
        className="flex gap-5 sm:text-6xl text-3xl font-semibold"
        aria-hidden="true"
      >
        <span className="text-secondary r font-semibold">R</span>
        <span className="text-white k font-semibold">K</span>
        <span className="text-tertiary m font-semibold">M</span>
      </div>

      {/* Screen reader text */}
      <span className="sr-only">Loading content, please wait</span>
    </div>
  );
}

export default Loader;
